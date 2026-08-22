/** Canonical curriculum-module renderer shared by every product edition. */
(function (global) {
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
  const paras = values => (values || []).map(value => `<p>${esc(value)}</p>`).join("");
  const body = section => `${paras(section.paragraphs)}${section.bullets?.length ? `<ul class="check-list">${section.bullets.map(item => `<li>${esc(item)}</li>`).join("")}</ul>` : ""}`;
  const section = (module, key) => (module.sections || []).find(item => item.key === key)?.paragraphs || [];
  const meta = module => (global.CURRICULUM_DATA?.module_lms_usability_metadata || []).find(item => item.module_id === module.id || item.course_id === module.course_id)?.catalog_card || {};

  function render(module, options = {}) {
    const excluded = new Set(["preamble","training_overview","learning_objectives","definitions","knowledge_check","references_and_resources_for_additional_information","jurisdiction_and_agency_policy_note","practical_exercise","expected_artifact_or_evidence"]);
    const sections = (module.sections || []).filter(item => !excluded.has(item.key));
    const examples = sections.filter(item => item.key === "public_health_example" || /^public health example/i.test(item.title || item.heading || ""));
    const lessons = sections.filter(item => !examples.includes(item));
    const definitions = module.definitions || [];
    const references = module.references_and_resources || [];
    const artifacts = module.expected_artifacts_or_evidence || [];
    const questions = Array.isArray(module.knowledge_check) ? module.knowledge_check : module.knowledge_check?.questions || [];
    const metadata = meta(module);
    const audience = metadata.audience || module.audience || ["Public health workforce"];
    return `<article class="panel course-module-panel">
      <header class="course-module-header"><p class="eyebrow">${esc(module.course_id || "Learning Module")}</p><h1>${esc(module.display_title || module.title)}</h1>${paras(section(module,"training_overview"))}${options.downloads || ""}</header>
      <nav class="course-quick-nav no-print" aria-label="Module sections"><a href="#course-objectives">Objectives</a><a href="#course-content">Learn</a><a href="#course-apply">Apply</a><a href="#course-check">Check</a><a href="#course-resources">Resources</a></nav>
      <section class="content-section course-profile"><h2>Module at a glance</h2><div class="course-meta-grid"><article><strong>Estimated time</strong><span>${esc(metadata.estimated_time || (metadata.estimated_time_minutes ? `${metadata.estimated_time_minutes} minutes` : module.estimated_time || "See module guidance"))}</span></article><article><strong>Level</strong><span>${esc(module.level_label || "Learning module")}</span></article><article><strong>Audience</strong><span>${esc(Array.isArray(audience) ? audience.join(", ") : audience)}</span></article></div><div class="course-purpose-grid"><p><strong>Use this module when:</strong> ${esc(metadata.recommended_use || "Building competencies for responsible public health AI work.")}</p><p><strong>You will complete:</strong> ${esc(metadata.completion_requirement || artifacts.join("; ") || "The learning content, knowledge check, and practical application.")}</p></div></section>
      ${(module.prerequisites?.length || module.prerequisite_summary) ? `<details class="course-section course-prerequisites"><summary>Prerequisites and recommended preparation</summary><div class="lesson-prose"><p><strong>Prerequisites:</strong> ${esc((module.prerequisites || []).map(item => typeof item === "string" ? item : item.course_id || item.module_id || item.title).join(", ") || "None")}</p>${module.prerequisite_summary ? `<p>${esc(module.prerequisite_summary)}</p>` : ""}</div></details>` : ""}
      <section class="content-section" id="course-objectives"><h2>What you will be able to do</h2><ul class="check-list">${(module.learning_objectives || []).map(item => `<li>${esc(item)}</li>`).join("")}</ul></section>
      ${definitions.length ? `<section class="content-section lesson-prose definitions-section"><h3>Definitions</h3><dl class="definition-list">${definitions.map(item => `<dt>${esc(item.term)}</dt><dd>${esc(item.definition)}</dd>`).join("")}</dl></section>` : ""}
      ${examples.map(item => `<section class="content-section lesson-prose public-health-example-section"><h3>${esc(item.title || item.heading)}</h3>${body(item)}</section>`).join("")}
      ${lessons.length ? `<section class="content-section module-details-stack" id="course-content"><h2>Learn</h2><p>Open one section at a time. The first section is ready for you.</p>${lessons.map((item,index) => `<details class="course-section" ${index === 0 ? "open" : ""}><summary>${esc(item.title || item.heading)}</summary><div class="lesson-prose">${body(item)}</div></details>`).join("")}</section>` : ""}${options.related || ""}
      ${options.apply || `<section class="content-section" id="course-apply"><h2>Apply what you learned</h2>${paras(section(module,"practical_exercise"))}${artifacts.length ? `<h3>Expected artifact or evidence</h3><ul class="check-list">${artifacts.map(item => `<li>${esc(item)}</li>`).join("")}</ul>` : ""}</section>`}
      ${options.check || (questions.length ? `<section class="content-section" id="course-check"><h2>Check your understanding</h2><p>Answer each question, then open the answer and rationale to check your reasoning.</p>${questions.map((question,index) => `<article class="knowledge-check-item"><h3>${index+1}. ${esc(question.question)}</h3><ol type="A">${(question.options || []).map(option => `<li>${esc(option)}</li>`).join("")}</ol><details><summary>View answer and rationale</summary><p><strong>Answer:</strong> ${esc(question.answer)}</p>${question.rationale ? `<p>${esc(question.rationale)}</p>` : ""}</details></article>`).join("")}</section>` : "")}
      ${options.resources || `<section class="content-section" id="course-resources"><h2>References and resources</h2>${references.length ? `<div class="resource-list">${references.map(item => `<article class="resource-item"><h3>${item.url ? `<a href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.title)}</a>` : esc(item.title)}</h3></article>`).join("")}</div>` : "<p>No additional references are listed for this module.</p>"}</section>`}
      ${section(module,"jurisdiction_and_agency_policy_note").length ? `<details class="course-section"><summary>Jurisdiction and Agency Policy Note</summary><div class="lesson-prose">${paras(section(module,"jurisdiction_and_agency_policy_note"))}</div></details>` : ""}${options.progress || ""}${options.footer || ""}
    </article>`;
  }
  global.PlaybookCurriculumModuleTemplate = {render};
})(window);
