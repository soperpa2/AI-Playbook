(function exposeSharedPageTemplates() {
  function pageOpen({ title, lead = "", eyebrow = "", className = "", breadcrumbs = "" }) {
    return `<section class="page ${className}">${breadcrumbs}${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}<h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ""}`;
  }

  function cardGrid(items, className = "overview-grid") {
    return `<div class="${className}">${items.map(item => `<article class="mini-card">${item.eyebrow ? `<p class="eyebrow">${item.eyebrow}</p>` : ""}<h3>${item.title}</h3><p>${item.body}</p>${item.actions || ""}</article>`).join("")}</div>`;
  }

  function twoColumn(left, right) {
    return `<div class="two-col"><section class="panel">${left}</section><section class="panel">${right}</section></div>`;
  }

  function editionPathways() {
    return `<section class="panel playbook-overview edition-pathways"><p class="eyebrow">Choose the right level of support</p><h2>Foundation access, organizational capability, and implementation support</h2><div class="overview-grid"><article class="mini-card"><h3>Foundation Edition</h3><p>All 13 play overviews, one usable Foundation Tool per play, core all-staff learning, evidence resources, updates, feedback, and reviewer pathways.</p><a href="toolkit.html">Explore the Foundation Toolkit →</a></article><article class="mini-card"><h3>Organizational Edition</h3><p>Complete editable toolkit, facilitator materials, role-based learning paths, implementation workspace, reporting, update briefings, onboarding, and organization-level coordination.</p><a href="consulting.html">Discuss organizational access →</a></article><article class="mini-card"><h3>Enterprise and Network Access</h3><p>Expanded administration, cohorts, support, reporting, train-the-trainer options, multi-jurisdiction access, aggregate learning, and sponsored field-capacity programs.</p><a href="consulting.html">Explore enterprise or sponsored options →</a></article></div><section class="callout"><div><p class="eyebrow">Help strengthen the Playbook</p><h3>Become a reviewer</h3><p>Public health practitioners, leaders, informaticians, technical experts, researchers, educators, governance specialists, and community partners can apply to review plays, tools, learning materials, evidence, accessibility, role fit, and missing perspectives.</p></div><div class="button-row"><a class="btn primary" href="reviewer.html">Become a Reviewer</a><a class="btn" href="feedback.html">Share feedback or a correction</a></div></section></section>`;
  }

  window.PlaybookTemplates = { pageOpen, cardGrid, twoColumn, editionPathways };
})();
