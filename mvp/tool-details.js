const { plays, release } = window.launchContent;
document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="foundation-content.css?v=20260818-foundation-content">');
const toolParams = new URLSearchParams(location.search);
const requestedPlay = Number(toolParams.get("play"));
const play = plays.find(item => item.number === requestedPlay) || plays[0];
const storageKey = `foundation-tool-${play.number}`;
const main = document.querySelector("#tool-main");

function pathwayResult() {
  try { return JSON.parse(localStorage.getItem("foundation-pathway-assessment-result") || "null"); }
  catch { return null; }
}

function pathwayBridge() {
  if (play.number !== 2) return "";
  const result = pathwayResult();
  const summary = result
    ? `<p><strong>Latest result:</strong> ${result.score ?? "—"}% · ${result.level || "Assessment complete"}</p><p><strong>Recommended plays:</strong> ${(result.recommendedPlays || []).map(item => `Play ${item.number}: ${item.title}`).join("; ") || "Review the assessment pathway"}</p>`
    : `<p>No saved Pathway Assessment was found in this browser. You can take it first or begin Play 2 with equivalent local evidence.</p>`;
  return `<section class="pathway-import"><p class="eyebrow">Assessment to action</p><h3>Bring preliminary findings into Play 2</h3><p>The Pathway Assessment identifies a preliminary route. This tool validates those findings with local evidence, resolves unknowns, and assigns readiness improvements.</p>${summary}<div class="button-row no-print"><a class="btn" href="assess.html">${result ? "Review Pathway Assessment" : "Take Pathway Assessment"}</a>${result ? '<button class="btn primary" type="button" id="import-pathway">Import latest findings</button>' : ""}<button class="btn" type="button" id="start-without-pathway">Start without assessment</button></div><p class="tool-save-status" id="pathway-import-status" role="status"></p></section>`;
}

document.title = `${play.tool.title} | Foundation Edition`;
main.innerHTML = window.PlaybookTemplates.pageOpen({ title: play.tool.title, lead: play.tool.purpose, eyebrow: `Foundation Edition · Play ${play.number} Tool`, className: "foundation-tool-page" }) + `
  <div class="content-meta"><span>Available now</span><span>Version ${release.version}</span><span>Supports Play ${play.number}</span></div>

  <div class="tool-workspace-grid">
    <form class="panel foundation-tool-form" id="foundation-tool-form">
      <h2>Complete the tool</h2>
      <p>Use this workspace with the people responsible for Play ${play.number}. Your entries are stored only in this browser unless you download or print them.</p>
      ${pathwayBridge()}
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
  document.querySelector("#start-without-pathway")?.addEventListener("click", () => {
    document.querySelector("#pathway-import-status").textContent = "Started without a saved assessment. Record the evidence your team is using below.";
    form.elements.namedItem("context")?.focus();
  });
  document.querySelector("#import-pathway")?.addEventListener("click", () => {
    const result = pathwayResult();
    if (!result) return;
    const domains = Object.entries(result.domainScores || {}).map(([name, value]) => `${name}: ${value}%`).join("\n");
    const recommendations = (result.recommendedPlays || []).map(item => `Play ${item.number}: ${item.title}`).join("\n");
    form.elements.namedItem("context").value = `Pathway Assessment completed ${result.date || "in this browser"}. Overall result: ${result.score ?? "—"}% (${result.level || "level not recorded"}).`;
    if (form.elements.namedItem("question_1")) form.elements.namedItem("question_1").value = domains || "Review the saved assessment evidence and identify what can be verified locally.";
    if (form.elements.namedItem("question_2")) form.elements.namedItem("question_2").value = recommendations || "Review the preliminary pathway and identify priority readiness gaps.";
    form.elements.namedItem("actions").value = recommendations ? `Validate these preliminary recommendations and assign owners and dates:\n${recommendations}` : "Assign owners and dates for each validated readiness gap.";
    document.querySelector("#pathway-import-status").textContent = "Latest pathway findings imported. Validate and revise them with local evidence before saving Play 2.";
  });
}
