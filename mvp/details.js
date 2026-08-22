/**
 * Foundation play-detail renderer. Canonical play content comes from
 * `window.launchContent`; only availability and edition-local destinations differ.
 */
const {plays, release} = window.launchContent;
const requested = Number(new URLSearchParams(location.search).get("play"));
const play = plays.find(item => item.number === requested) || plays[0];
const main = document.querySelector("#detail-main");

document.title = `Play ${play.number}: ${play.title} | Public Health AI Playbook`;
main.dataset.contentId = play.id;
main.innerHTML = `<section class="page-hero">
  <p class="eyebrow">${play.phase} phase · Play ${play.number} of 13</p>
  <h1>${play.title}</h1><p>${play.purpose}</p>
  <p class="content-meta"><span>${release.label}</span><span>Version ${release.version}</span><span>Updated ${release.updatedAt}</span><span>Evidence: ${play.evidence}</span></p>
</section>
<div class="detail-layout"><article class="page-panel">
  <h2>What this play accomplishes</h2><p>${play.purpose}</p>
  <h2>Expected organizational output</h2><p>${play.output}</p>
  <h2>Who should participate</h2><ul>${play.people.map(item => `<li>${item}</li>`).join("")}</ul>
  <h2>Questions to work through</h2><ul>${play.questions.map(item => `<li>${item}</li>`).join("")}</ul>
  <section class="development-tools"><p class="eyebrow">Expanded edition</p><h2>Additional implementation resources</h2>
    <p>The paid Organization Edition includes deeper templates, facilitation materials, role-based pathways, reporting, and implementation support that are not included in this public build. The protected resource inventory and methods are intentionally reserved for that edition.</p>
    <a href="reviewer.html?play=${play.number}">Apply to review unreleased resources for this play →</a>
  </section>
</article><aside>
  ${play.number === 2 ? `<section class="page-panel"><p class="eyebrow">Assessment to action</p><h2>Validate your preliminary pathway findings</h2><p>The Pathway Assessment is the entry point. Play 2 uses local evidence and cross-functional discussion to confirm its preliminary findings, resolve unknowns, assign responsibility, and create a readiness improvement plan.</p><a class="button" href="assess.html">Take or review the Pathway Assessment</a></section>` : ""}
  <section class="page-panel tool-panel" id="starter-tool" data-content-id="${play.tool.id}"><p class="eyebrow">Included Foundation Tool</p><h2>${play.tool.title}</h2><p>${play.tool.purpose}</p><p class="availability">This practical tool is included and ready to use in the Foundation Edition.</p><a class="button primary" href="tool.html?play=${play.number}">Open this tool</a></section>
  <section class="page-panel"><h2>Related learning</h2><p>Core learning builds shared vocabulary and safe-use expectations before role-based training.</p><div class="stack"><a href="learning.html">Open core modules</a><a href="training-paths.html">Preview training paths</a></div></section>
  <section class="page-panel"><h2>Evidence and review</h2><p><strong>${play.evidence}.</strong> Review the source landscape, interpretation limits, and maintenance approach.</p><div class="stack"><a href="resources.html">Open evidence and resources</a><a href="feedback.html?play=${play.number}">Suggest a correction</a></div></section>
  <section class="page-panel"><h2>Help improve this play</h2><p>Share feedback or apply to review pre-release resources.</p><div class="stack"><a href="feedback.html?play=${play.number}">Give feedback</a><a href="reviewer.html?play=${play.number}">Become an early reviewer</a></div></section>
</aside></div>
<nav class="pager" aria-label="Play sequence">${play.number > 1 ? `<a href="detail.html?play=${play.number-1}">← Previous play</a>` : "<span></span>"}<a href="index.html#plays">All 13 plays</a>${play.number < 13 ? `<a href="detail.html?play=${play.number+1}">Next play →</a>` : "<span></span>"}</nav>`;
