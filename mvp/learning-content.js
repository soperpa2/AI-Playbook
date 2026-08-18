document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="foundation-content.css?v=20260818-foundation-content">');
const learningIntro = document.querySelector(".learning-intro");
if (learningIntro) learningIntro.insertAdjacentHTML("afterend", `<section class="page panel playbook-overview learning-guidance">
  <p class="eyebrow">How learning works</p><h2>Move from shared understanding to responsible workplace practice</h2>
  <div class="overview-grid"><article class="mini-card"><h3>Start with common language</h3><p>Complete the foundational modules before role specialization so staff share vocabulary, safe-use boundaries, public health context, and escalation expectations.</p></article><article class="mini-card"><h3>Learn through public health examples</h3><p>Each module connects concepts to realistic workflows, affected populations, human decisions, and safeguards—not generic technology demonstrations.</p></article><article class="mini-card"><h3>Practice and check understanding</h3><p>Use learning objectives, knowledge checks, scenarios, and practical exercises to demonstrate understanding and identify questions requiring local policy or governance review.</p></article><article class="mini-card"><h3>Apply learning by responsibility</h3><p>Role-based and functional paths align learning with leadership, governance, programs, epidemiology, communications, policy, operations, data, and technical responsibilities.</p></article></div>
  <h2>Recommended sequence</h2><ol><li>Complete the eight shared Foundation modules.</li><li>Discuss department-approved tools, prohibited data, human-review expectations, and escalation routes.</li><li>Select additional paths based on actual responsibilities and AI-supported workflows.</li><li>Complete a practical application and document questions or safeguards requiring follow-up.</li><li>Refresh learning when policies, systems, roles, risks, or evidence change.</li></ol>
  <p><strong>Completion:</strong> viewing a module is not the same as demonstrated readiness. Organizations should combine knowledge checks with practical application, supervisor or facilitator review, and workplace evidence appropriate to the role.</p>
</section>`);

const pathsCta = document.querySelector(".paths-cta");
if (pathsCta) {
  const label = pathsCta.querySelector(".eyebrow");
  const paragraph = pathsCta.querySelector("p:not(.eyebrow)");
  if (label) label.textContent = "Completed curriculum · Available in other editions";
  if (paragraph) paragraph.textContent = "Completed role-based paths help public health teams build capabilities relevant to their responsibilities. Foundation readers can review the path structure and request organizational access.";
}
document.querySelectorAll(".training-cards span").forEach(label => { label.textContent = "Completed · Available in other editions"; });
const moduleNotice = document.querySelector(".module-notice p");
if (moduleNotice) moduleNotice.textContent = "This page provides the public module overview. The complete lesson, knowledge check, practical exercise, and downloadable training materials are complete and available through organizational release pathways.";
