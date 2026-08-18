const { plays, release } = window.launchContent;
document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="foundation-content.css?v=20260818-foundation-content">');
const toolParams = new URLSearchParams(location.search);
const requestedPlay = Number(toolParams.get("play"));
if (requestedPlay === 2 && !toolParams.get("name")) window.location.replace("assess.html");
const play = plays.find(item => item.number === requestedPlay) || plays[0];
const readinessDomains = ["Leadership and governance", "Strategy and use-case alignment", "Data quality and stewardship", "Technology and interoperability", "Privacy, security, and legal review", "Workforce capability and change readiness", "Equity, accessibility, and community engagement", "Procurement and vendor oversight", "Evaluation, monitoring, and sustainment"];
const storageKey = `foundation-tool-${play.number}`;
const main = document.querySelector("#tool-main");

document.title = `${play.tool.title} | Foundation Edition`;
main.innerHTML = window.PlaybookTemplates.pageOpen({ title: play.tool.title, lead: play.tool.purpose, eyebrow: `Foundation Edition · Play ${play.number} Tool`, className: "foundation-tool-page" }) + `
  <div class="content-meta"><span>Available now</span><span>Version ${release.version}</span><span>Supports Play ${play.number}</span></div>

  <div class="tool-workspace-grid">
    <form class="panel foundation-tool-form" id="foundation-tool-form">
      <h2>Complete the tool</h2>
      <p>Use this workspace with the people responsible for Play ${play.number}. Your entries are stored only in this browser unless you download or print them.</p>
      ${play.number === 2 ? `<section class="readiness-profile"><h3>Foundation readiness profile</h3><p>Rate each domain through cross-functional discussion and available evidence. This transparent, unweighted profile is a starting point—not the protected organizational diagnostic, a certification, or a benchmark against other agencies.</p><p><strong>Rating scale:</strong> 0 = not in place; 1 = informal or early; 2 = defined and partly implemented; 3 = mature, documented, and routinely used.</p><div class="readiness-domain-grid">${readinessDomains.map((domain, index) => `<label>${domain}<select name="readiness_${index + 1}"><option value="">Not rated</option><option value="0">0 — Not in place</option><option value="1">1 — Informal or early</option><option value="2">2 — Defined and partly implemented</option><option value="3">3 — Mature and routinely used</option></select></label>`).join("")}</div><div class="panel readiness-result" id="readiness-result" aria-live="polite"><strong>Readiness profile:</strong> Rate the nine domains to generate a discussion summary.</div></section>` : ""}
      <label>Organization or department<input name="organization" autocomplete="organization"></label>
      <label>Facilitator or owner<input name="owner" autocomplete="name"></label>
      <label>Date<input name="date" type="date"></label>
      <label>Purpose and local context<textarea name="context" rows="4" placeholder="Describe the public health need, decision, workflow, or local context for this tool."></textarea></label>
      ${play.questions.map((question, index) => `<label>${question}<textarea name="question_${index + 1}" rows="4"></textarea></label>`).join("")}
      <label>Decision or recommended direction<textarea name="decision" rows="4" placeholder="Record the decision, conditions, limitations, or recommendation."></textarea></label>
      <label>Actions, owners, and target dates<textarea name="actions" rows="5" placeholder="List each next action, responsible owner, and target date."></textarea></label>
      <label>Evidence, approvals, or follow-up needed<textarea name="follow_up" rows="4"></textarea></label>
      <div class="button-row no-print">
        <button class="btn primary" type="submit">Save in this browser</button>
        <button class="btn" type="button" id="download-tool">Download responses</button>
        <button class="btn" type="button" id="print-tool">Print or save as PDF</button>
        <button class="btn" type="button" id="clear-tool">Clear</button>
      </div>
      <p class="tool-save-status" id="tool-save-status" role="status"></p>
    </form>
    <aside class="tool-sidebar">
      <section class="panel"><p class="eyebrow">Related play</p><h2>Play ${play.number}: ${play.title}</h2><p>${play.output}</p><a class="btn small" href="detail.html?play=${play.number}">Open the play</a></section>
      <section class="panel"><h2>Recommended participants</h2><ul>${play.people.map(person => `<li>${person}</li>`).join("")}</ul></section>
      <section class="panel"><h2>Use and limitations</h2><p>This Foundation Tool provides a practical starting point. Apply local legal, privacy, security, accessibility, equity, procurement, workforce, Tribal governance, community, and scientific review as appropriate.</p></section>
      <section class="panel"><a href="toolkit.html">View all 13 Foundation Tools →</a></section>
    </aside>
  </div>
</section>`;

const form = document.querySelector("#foundation-tool-form");
const status = document.querySelector("#tool-save-status");

function formValues() {
  return Object.fromEntries(new FormData(form).entries());
}

function restoreValues() {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
  if (!saved) return;
  Object.entries(saved).forEach(([name, value]) => {
    const field = form.elements.namedItem(name);
    if (field) field.value = value;
  });
  status.textContent = "Saved responses restored from this browser.";
}

form.addEventListener("submit", event => {
  event.preventDefault();
  localStorage.setItem(storageKey, JSON.stringify(formValues()));
  status.textContent = "Responses saved in this browser.";
});

document.querySelector("#download-tool").addEventListener("click", () => {
  const values = formValues();
  const lines = [play.tool.title, `Foundation Edition · Play ${play.number}: ${play.title}`, ""];
  [...form.elements].filter(field => field.name).forEach(field => {
    const label = field.closest("label")?.childNodes[0]?.textContent?.trim() || field.name;
    lines.push(label, values[field.name] || "", "");
  });
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `foundation-tool-${String(play.number).padStart(2, "0")}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
});

document.querySelector("#print-tool").addEventListener("click", () => window.print());
document.querySelector("#clear-tool").addEventListener("click", () => {
  if (!confirm("Clear all responses saved for this tool in this browser?")) return;
  form.reset();
  localStorage.removeItem(storageKey);
  status.textContent = "Responses cleared.";
});

restoreValues();

if (play.number === 2) {
  const readinessFields = readinessDomains.map((_, index) => form.elements.namedItem(`readiness_${index + 1}`));
  const result = document.querySelector("#readiness-result");
  const updateReadiness = () => {
    const rated = readinessFields.filter(field => field.value !== "");
    if (!rated.length) { result.innerHTML = "<strong>Readiness profile:</strong> Rate the nine domains to generate a discussion summary."; return; }
    const total = rated.reduce((sum, field) => sum + Number(field.value), 0);
    const maximum = rated.length * 3;
    const percent = Math.round((total / maximum) * 100);
    const gaps = readinessFields.map((field, index) => ({ field, domain: readinessDomains[index] })).filter(item => item.field.value !== "" && Number(item.field.value) <= 1).map(item => item.domain);
    const next = percent < 25 ? "Begin with vision, interim safe-use boundaries, leadership sponsorship, and basic governance." : percent < 50 ? "Prioritize the lowest-rated domains before selecting or expanding pilots." : percent < 75 ? "Address material gaps and validate safeguards before deployment." : "Confirm evidence, test locally, and maintain governance and monitoring rather than assuming readiness is permanent.";
    result.innerHTML = `<strong>Foundation discussion profile:</strong> ${total} of ${maximum} points across ${rated.length} rated domain${rated.length === 1 ? "" : "s"} (${percent}%). <strong>Priority gaps:</strong> ${gaps.length ? gaps.join(", ") : "No rated domain is currently at 0 or 1"}. <strong>Suggested next step:</strong> ${next}`;
  };
  readinessFields.forEach(field => field.addEventListener("change", updateReadiness));
  updateReadiness();
}
