const { plays, release } = window.launchContent;
const requestedPlay = Number(new URLSearchParams(location.search).get("play"));
const play = plays.find(item => item.number === requestedPlay) || plays[0];
const storageKey = `foundation-tool-${play.number}`;
const main = document.querySelector("#tool-main");

document.title = `${play.tool.title} | Foundation Edition`;
main.innerHTML = `<section class="page foundation-tool-page" data-content-id="${play.tool.id}">
  <p class="eyebrow">Foundation Edition · Play ${play.number} Tool</p>
  <h1>${play.tool.title}</h1>
  <p class="lead">${play.tool.purpose}</p>
  <div class="content-meta"><span>Available now</span><span>Version ${release.version}</span><span>Supports Play ${play.number}</span></div>

  <div class="tool-workspace-grid">
    <form class="panel foundation-tool-form" id="foundation-tool-form">
      <h2>Complete the tool</h2>
      <p>Use this workspace with the people responsible for Play ${play.number}. Your entries are stored only in this browser unless you download or print them.</p>
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
