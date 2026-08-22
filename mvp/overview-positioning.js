(function renderEssentialsToolkitOverview() {
  if (!document.querySelector('link[data-foundation-edition-layout]')) {
    const editionStyles = document.createElement("link");
    editionStyles.rel = "stylesheet";
    editionStyles.href = "extras.css?v=20260821-shared-home-template";
    editionStyles.dataset.foundationEditionLayout = "true";
    document.head.appendChild(editionStyles);
  }
  const hero = document.querySelector(".hero");
  if (!hero || document.querySelector(".foundation-toolkit-overview")) return;
  hero.insertAdjacentHTML("afterend", `<section class="section panel playbook-overview hero-overview foundation-toolkit-overview">
    <p class="eyebrow">Playbook + Toolkit Overview</p>
    <h2>One system for planning, implementing, and governing public health AI</h2>
    <p><strong>This is not a software development kit or package of code for building finished AI products.</strong> It combines an implementation playbook, practical tools, and workforce learning so public health departments can develop, select, procure, implement, use, evaluate, and govern AI effectively, ethically, equitably, securely, and sustainably. Role-specific technical modules support staff who construct or integrate AI-enabled solutions.</p>
    <p>Designed for state, territorial, local, and tribal public health departments, the system applies to predictive analytics, machine learning, NLP, RAG, generative and agentic AI, automation, and AI capabilities developed internally, purchased from vendors, or embedded in existing systems.</p>
    <div class="overview-grid toolkit-scope-grid">
      <article class="mini-card"><h3>Playbook</h3><p>Thirteen sequenced plays guide vision and guardrails, readiness, governance, engagement, workforce preparation, change management, use-case selection, funding, implementation planning, deployment, oversight, evaluation, and continuous improvement.</p></article>
      <article class="mini-card"><h3>Tools</h3><p>The Full Version includes 49 fillable assessments, policies, charters, checklists, plans, vendor and procurement reviews, validation records, dashboards, audits, incident records, and improvement logs. The Essentials Edition provides one usable tool per play.</p></article>
      <article class="mini-card"><h3>Learning</h3><p>Modules build appropriate competencies for every employee, from AI literacy and safe use to role-based leadership, governance, programs, policy, procurement, change, evaluation, data, informatics, IT, and technical development and integration.</p></article>
    </div>
    <p>The readiness assessment creates a customized pathway, allowing completed work to be validated and priority gaps to be addressed first. Read each play to understand the decision and intended output, then use the supporting tools and learning to complete the work.</p>
    <p>Use, adapt, or document effective existing methods rather than recreating them. AI governance should strengthen established data, technology, privacy, cybersecurity, records, procurement, and project-management processes—not create a parallel system.</p>
  </section>`);
})();
