/**
 * Foundation toolkit catalogue: one complete canonical Full Version tool per play.
 * Names, IDs, purposes, and instruments come from FoundationToolCatalog; do not use
 * older starter summaries for catalogue cards or tool rendering.
 */
const { plays, release } = window.launchContent;
const canonicalTools = window.FoundationToolCatalog;
const main = document.querySelector("#main");

main.innerHTML = window.PlaybookTemplates.pageOpen({ title: "One practical tool for every play.", lead: "All 13 Foundation Tools are available now. Open a tool to complete it in your browser, save local progress, download your responses, or print it as a working document.", eyebrow: "Foundation Edition Toolkit" }) + `
  <div class="content-meta"><span>13 plays</span><span>13 available tools</span><span>Version ${release.version}</span></div>
  <section class="panel playbook-overview" style="margin-top:2rem"><h2>Use tools to support decisions—not to replace judgment</h2><div class="overview-grid"><article class="mini-card"><h3>Read the play first</h3><p>Understand the decision, prerequisites, participants, safeguards, and intended output before completing a tool.</p></article><article class="mini-card"><h3>Adapt to local context</h3><p>Use existing agency policies, templates, governance pathways, and records when they already satisfy the play's purpose. Document the equivalent rather than recreating it.</p></article><article class="mini-card"><h3>Record evidence and limits</h3><p>Capture sources, assumptions, approvals, unresolved questions, prohibited uses, owners, and dates so the result can be reviewed later.</p></article><article class="mini-card"><h3>Escalate when needed</h3><p>Route legal, privacy, security, equity, accessibility, Tribal governance, procurement, scientific, workforce, and community questions to qualified reviewers.</p></article></div><p>Each Foundation tool is the same complete guided instrument as its Full Version counterpart. Other editions add the remaining tools, organization-level task aggregation, analytics, reporting, and administrative capabilities.</p></section>
  <div class="tools-grid" style="margin-top:2rem">
    ${plays.map(play => { const toolId = Number(canonicalTools.playToolMap[play.number]); const tool = canonicalTools.tools.find(item => item.id === toolId); return `<article class="card" data-content-id="tool:${tool.id}">
      <p class="eyebrow">${play.phase} · Play ${play.number}</p>
      <h2>Tool ${tool.id}: ${tool.title}</h2>
      <p>${tool.purpose}</p>
      <div class="button-row"><a class="btn primary" href="tool.html?play=${play.number}">Open tool</a><a class="btn" href="detail.html?play=${play.number}">View related play</a></div>
    </article>`; }).join("")}
  </div>
</section>`;
