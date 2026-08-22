/** Essentials play catalogue; phases mirror the canonical four-stop journey. */
const { plays } = window.launchContent;
const phaseGuidance = {
  plan: ["PLAN", "Plays 1–7", "Set direction, understand readiness, establish governance, engage affected people, prepare the workforce, plan for change, and select responsible use cases."],
  build: ["BUILD", "Plays 8–9", "Align sustainable funding and procurement, then translate approved priorities into an accountable implementation roadmap."],
  deploy: ["DEPLOY", "Plays 10–11", "Prepare people and workflows, test under controlled conditions, and make an evidence-based decision to revise, scale, pause, or stop."],
  govern: ["GOVERN", "Plays 12–13", "Maintain oversight, monitor performance and equity, respond to incidents and changes, and improve or retire systems responsibly."]
};

const phaseSections = Object.entries(phaseGuidance).map(([phase, [label, range, description]]) => `
  <section class="panel" id="phase-${phase}">
    <p class="eyebrow">${label} · ${range}</p>
    <h2>${description}</h2>
    <div class="tools-grid">
      ${plays.filter(play => play.phase === phase).map(play => `<article class="card">
        <p class="eyebrow">Play ${play.number}</p>
        <h3>${play.title}</h3>
        <p>${play.summary}</p>
        <p><strong>Expected output:</strong> ${play.output}</p>
        <div class="button-row"><a class="btn primary" href="detail.html?play=${play.number}">Open Play ${play.number}</a><a class="btn" href="tool.html?play=${play.number}">Open Essentials Tool</a></div>
      </article>`).join("")}
    </div>
  </section>`).join("");

document.querySelector("#main").innerHTML = window.PlaybookTemplates.pageOpen({
  eyebrow: "Essentials Edition Playbook",
  title: "13 plays from vision to continuous improvement.",
  lead: "Use the plays as a sequenced decision pathway. Start with the earliest unresolved condition, apply governance gates throughout, and document decisions with the available Essentials Tool for each play."
}) + `
  <section class="panel playbook-overview">
    <h2>How to use the playbook</h2>
    <div class="overview-grid">
      <article class="mini-card"><h3>1. Read the play</h3><p>Understand the decision, participants, prerequisites, activities, and completion indicators before opening a tool.</p></article>
      <article class="mini-card"><h3>2. Use the tool</h3><p>Capture the local context, evidence, decisions, owners, limitations, approvals, and follow-up work.</p></article>
      <article class="mini-card"><h3>3. Apply governance gates</h3><p>Do not advance because a technology is available. Confirm authority, readiness, safeguards, human review, and accountable approval.</p></article>
      <article class="mini-card"><h3>4. Keep a decision record</h3><p>Save the evidence and rationale supporting each decision. Revisit it when data, policy, vendors, performance, or risks change.</p></article>
    </div>
    <p><strong>Customize the sequence responsibly:</strong> work already completed can be documented and validated rather than repeated. Return to earlier plays when a material gap or changed condition affects a later decision.</p>
  </section>
  ${phaseSections}
  <section class="callout"><div><p class="eyebrow">Essentials Toolkit</p><h2>One usable tool for every play</h2><p>The Essentials Edition provides 13 available tools. Broader editable toolsets, facilitation methods, organizational workspaces, and reporting capabilities are available in other editions.</p></div><div class="button-row"><a class="btn primary" href="toolkit.html">Open the Essentials Toolkit</a><a class="btn" href="consulting.html">Need More Help?</a></div></section>
</section>`;
