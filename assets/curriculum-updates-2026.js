(function applyCurriculumUpdates2026() {
  const data = window.CURRICULUM_DATA;
  if (!data || !Array.isArray(data.modules)) return;

  const sources = {
    cdc: ["CDC AI Strategy (FY 2026–2030)", "https://www.cdc.gov/ai/strategy/index.html"],
    whoEthics: ["WHO: Ethics and governance of artificial intelligence for health", "https://www.who.int/publications/i/item/9789240029200"],
    whoLmm: ["WHO: Guidance on large multi-modal models", "https://www.who.int/publications/i/item/9789240084759"],
    whoEquity: ["WHO Europe: Equity across digital health regulation, implementation and evaluation", "https://www.who.int/europe/publications/i/item/WHO-EURO-2026-13153-52927-82472"],
    whoData: ["WHO Europe: Health data governance in the age of AI", "https://www.who.int/europe/publications/i/item/WHO-EURO-2025-11462-51234-78079"],
    hhsPublicHealth: ["HHS OCR: HIPAA and public health", "https://www.hhs.gov/hipaa/for-professionals/special-topics/public-health/index.html"],
    hhsHealthDepartments: ["HHS OCR: HIPAA applicability for health departments", "https://www.hhs.gov/hipaa/for-professionals/faq/358/are-state-county-or-local-health-departments-required-to-comply-with-hipaa/index.html"],
    hhsCloud: ["HHS OCR: HIPAA and cloud computing", "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html"],
    hhsBaa: ["HHS OCR: Business associate contracts", "https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html"]
  };

  const updates = {
    "int-100": {
      objectives: ["Describe the four pillars of CDC's FY 2026–2030 AI Strategy and how they connect adoption, governance, data platforms, and workforce capability."],
      section: ["CDC's current public health strategy treats AI as an enterprise and workforce change—not a stand-alone technology purchase. Its four pillars connect validated adoption, public trust, secure and interoperable data platforms, and role-based learning. Predictive, generative, and agentic AI should be introduced through these public health purposes and controls."],
      sources: [sources.cdc]
    },
    "int-105-all-staff-safe-ai-use-and-approved-tools-awareness": {
      objectives: ["Explain why data may require protection even when HIPAA does not apply and recognize when to stop and request privacy review."],
      section: ["HIPAA does not automatically apply to every public health agency, component, or dataset. It is also not the boundary between safe and unsafe AI use. Staff must follow agency data classifications and approved-tool rules for PHI, PII, confidential surveillance or investigation information, sovereign data, and other sensitive information. Permission to receive information for a public health purpose does not authorize staff to place it in any AI tool or allow vendor model training."],
      sources: [sources.hhsHealthDepartments, sources.hhsPublicHealth]
    },
    "int-200-ai-use-case-intake-and-triage-basics": {
      objectives: ["Screen a proposed use for data authority, permitted purpose, vendor processing, agentic autonomy, sustainability, and measurable public health value."],
      section: ["A complete intake identifies the agency component, data source and owner, legal authority, permitted purpose, intended users, affected populations, AI environment, vendor processing, secondary use, and human decision authority. Agentic proposals also identify tools, permissions, external actions, approval gates, logs, rollback, and incident response. Route health or person-level data uses to Tool 10 before prioritization."],
      sources: [sources.cdc, sources.hhsPublicHealth]
    },
    "gov-100-introduction-to-ai-governance-for-public-health": {
      objectives: ["Apply risk-proportionate governance and distinguish governance review from legal, privacy, security, equity, records, and program authority decisions."],
      section: ["CDC's governance and public trust pillar calls for transparent, accountable, risk-proportionate oversight and consistent evaluation of third-party AI. Governance records and enforces decisions, but named officials retain authority for legal applicability, privacy, security, civil rights, accessibility, records, procurement, and program requirements."],
      sources: [sources.cdc]
    },
    "gov-310-privacy-preserving-ai-and-de-identification": {
      objectives: ["Determine covered, non-covered, or hybrid agency status; document public health authority and permitted purpose; and evaluate business-associate, BAA, minimum-necessary, and AI vendor requirements."],
      section: ["Use Tool 10 to distinguish agency-wide status from the status of a specific component, dataset, relationship, and activity. A public health disclosure permitted under HIPAA does not automatically authorize a new downstream AI purpose, vendor model training, product improvement, or redisclosure. Review prompts, outputs, logs, embeddings, subcontractors, retention, deletion, correction, audit, and termination. Apply data minimization even when information is not HIPAA PHI."],
      exercise: "Complete Tool 10 for a hybrid health department whose clinic sends person-level information to a surveillance program that proposes using a cloud AI service. Document component status, authority, purpose, minimum-necessary or minimization limits, BAA decision, vendor restrictions, allowed environment, approver, and re-review triggers.",
      sources: [sources.hhsHealthDepartments, sources.hhsPublicHealth, sources.hhsCloud, sources.hhsBaa]
    },
    "gov-330-data-governance-for-ai-ready-public-health-data": {
      objectives: ["Apply FAIR principles alongside authority, purpose limitation, provenance, equity, privacy, security, and community or Tribal data governance."],
      section: ["CDC identifies secure enterprise platforms, interoperability, reproducibility, transparent access, and FAIR data principles as AI enablers. FAIR does not mean unrestricted. Governance must preserve lineage, metadata, quality, access decisions, authorized purposes, equity and representativeness, community or Tribal requirements, vendor flows, retention, and deletion across participating organizations."],
      sources: [sources.cdc, sources.whoData]
    },
    "pmg-210-requirements-writing-for-ai-procurement-and-implementation": {
      objectives: ["Translate Tool 10, Tool 32, and Tool 34 decisions into testable privacy, equity, security, evidence, audit, remediation, and exit requirements."],
      section: ["Requirements should address permitted data uses, BAA status, subcontractors, data location, prompts and outputs, embeddings and logs, model training, product improvement, access, audit, incident reporting, model changes, bias evidence, subgroup performance, remediation deadlines, suspension, termination, portability, return, and destruction. Evidence should be proportionate to data sensitivity, autonomy, affected populations, and potential harm."],
      exercise: "Using a completed Tool 10 screening and a public health AI vendor scenario, draft ten acceptance and contract requirements. Each requirement must identify evidence, responsible party, review timing, failure response, and whether the agency may pause or terminate use.",
      sources: [sources.cdc, sources.hhsCloud, sources.hhsBaa]
    },
    "anl-300-advanced-model-validation-and-evaluation-for-public-health-ai": {
      objectives: ["Design local, disaggregated, and intersectional validation with predefined safety and equity thresholds and explicit evidence limitations."],
      section: ["Validation should test the intended public health population and workflow, document subgroup and intersectional results, identify inadequate sample sizes, examine proxy variables, and define unacceptable failure modes before deployment. Generative and multi-modal systems also require task-specific evaluation, independent review where warranted, post-release monitoring, and human oversight."],
      sources: [sources.whoLmm, sources.whoEquity]
    },
    "anl-330-equity-evaluation-for-ai-models": {
      objectives: ["Evaluate intersectional performance, structural and proxy-variable risks, benefit and burden distribution, community-defined concerns, and corrective-action thresholds."],
      section: ["Equity evaluation extends beyond demographic accuracy tables. Examine whether cost, utilization, attendance, digital engagement, or prior service use reflect unequal access or structural barriers. Evaluate meaningful intersections, disclose sample-size limitations, measure who receives benefits and bears errors or burdens, involve affected communities in defining concerns, and establish pause and remediation thresholds before deployment."],
      exercise: "Evaluate an outreach-prioritization model that uses prior healthcare utilization. Follow one scenario through proxy review, intersectional subgroup selection, sample limitations, benefit and burden measures, community review, thresholds, mitigation, and Tool 47 monitoring requirements.",
      sources: [sources.whoEthics, sources.whoEquity]
    },
    "pol-330-ai-equity-policy-and-civil-rights-considerations": {
      objectives: ["Write lifecycle equity requirements that assign authority, measurable thresholds, vendor evidence, remedies, and consequences without confusing voluntary guidance with binding law."],
      section: ["Policy should address equity from problem definition through retirement; specify affected-community participation and any decision authority; require accessibility, language access, disability, civil-rights, Tribal, and intersectional review; establish vendor evidence and audit requirements; and define remediation, suspension, and retirement consequences. Label statutes, regulations, voluntary WHO guidance, external workshop frameworks, and agency policy accurately."],
      sources: [sources.whoEthics, sources.whoEquity]
    },
    "arc-220-public-health-interoperability-hl7-v2-cda-fhir-and-apis": {
      objectives: ["Connect interoperability to AI readiness while preserving authority, provenance, access controls, logging, and downstream-use limitations."],
      section: ["CDC identifies interoperable enterprise data platforms as core AI infrastructure. Technical availability does not establish legal, scientific, or ethical appropriateness. Document source, meaning, quality, authority, purpose, transformations, access, logs, and downstream AI restrictions for every exchange."],
      sources: [sources.cdc]
    },
    "arc-320-agentic-workflow-design-and-orchestration": {
      objectives: ["Design agentic public health workflows with bounded tools, permissions, approval gates, observable actions, rollback, and incident response."],
      section: ["CDC anticipates evaluating, piloting, and—where appropriate—deploying agentic systems for public health data, research, integration, and access. Treat this as a controlled progression. Separate drafting, recommending, routing, and acting; restrict tools and permissions; require approval for consequential actions; preserve audit logs; test failure and recovery; and define when the agent must stop."],
      sources: [sources.cdc]
    },
    "ops-300-mlops-and-llmops-for-public-health": {
      objectives: ["Maintain reproducible dataset, model, prompt, retrieval, platform, and approval lineage across shared enterprise services."],
      section: ["Enterprise AI operations should preserve reproducibility, versioned data and prompts, model and retrieval lineage, platform dependencies, monitoring, access controls, change approval, incident evidence, and retirement. Shared platforms reduce duplicated infrastructure but require explicit cross-program ownership and governance."],
      sources: [sources.cdc]
    },
    "ops-310-measuring-ai-value-performance-and-operational-impact": {
      objectives: ["Measure burden reduction, timeliness, prevention, detection, response, operational excellence, equity, cost, and sustainability against an explicit baseline."],
      section: ["CDC's strategy calls for clear performance metrics, prioritization, and resource alignment. Evaluation should connect technical performance to public health impact, workforce burden, equity, adoption, operating cost, and sustainability. Results must support decisions to continue, modify, scale, pause, or retire the system."],
      sources: [sources.cdc]
    },
    "exe-440-workforce-strategy-and-ai-role-design": {
      objectives: ["Build an AI workforce strategy spanning foundational fluency, role-based capability, advanced expertise, communities of practice, bridge roles, recruitment, retention, assignments, and fellowships."],
      section: ["CDC's workforce pillar combines leadership engagement, centralized role-based learning, grassroots innovation, communities of practice, STLT capability, recruitment, retention, assignments, and fellowships. Workforce plans should provide protected learning time, competency evidence, career pathways, supervisors prepared for role redesign, and escalation routes that keep experimentation inside governance."],
      sources: [sources.cdc]
    }
  };

  function uniquePush(target, values) {
    values.forEach(value => {
      const normalized = String(value).trim().toLowerCase();
      if (!target.some(existing => String(existing).trim().toLowerCase() === normalized)) target.push(value);
    });
  }

  function upsertSection(module, key, heading, paragraphs) {
    module.sections = Array.isArray(module.sections) ? module.sections : [];
    let section = module.sections.find(item => item.key === key);
    if (!section) {
      section = { key, heading, paragraphs: [] };
      const exerciseIndex = module.sections.findIndex(item => item.key === "practical_exercise");
      exerciseIndex >= 0 ? module.sections.splice(exerciseIndex, 0, section) : module.sections.push(section);
    }
    section.heading = heading;
    section.paragraphs = Array.isArray(section.paragraphs) ? section.paragraphs : [];
    uniquePush(section.paragraphs, paragraphs);
  }

  function addReferences(module, refs) {
    module.references_and_resources = Array.isArray(module.references_and_resources) ? module.references_and_resources : [];
    refs.forEach(([title, url]) => {
      if (!module.references_and_resources.some(item => (typeof item === "string" ? item : item.url) === url)) {
        module.references_and_resources.push({ title, url, source_type: "authoritative guidance" });
      }
    });
    upsertSection(module, "references_and_resources_for_additional_information", "References and Resources for Additional Information", refs.map(([title, url]) => `${title}: ${url}`));
  }

  data.modules.forEach(module => {
    const update = updates[module.id];
    if (!update) return;
    module.learning_objectives = Array.isArray(module.learning_objectives) ? module.learning_objectives : [];
    uniquePush(module.learning_objectives, update.objectives || []);
    upsertSection(module, "current_2026_public_health_alignment", "Current Public Health Alignment (2026)", update.section || []);
    if (update.exercise) upsertSection(module, "practical_exercise", "Practical Exercise", [update.exercise]);
    addReferences(module, update.sources || []);
    module.content_review = {
      status: "updated",
      date: "2026-08-18",
      basis: "CDC FY 2026–2030 AI Strategy; WHO health AI equity and governance guidance; HHS OCR privacy guidance, as applicable"
    };
  });
})();
