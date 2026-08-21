(function applyPublicHealthAiFieldReport2026() {
  const data = window.CURRICULUM_DATA;
  if (!data || !Array.isArray(data.modules)) return;

  const articleTitle = "King A, Schwind JS, Painter IS, et al. Applying Artificial Intelligence in Public Health: A Field Report on Use Cases and Key Challenges. American Journal of Public Health. Published online August 13, 2026. doi:10.2105/AJPH.2026.308671";
  const articleUrl = "https://doi.org/10.2105/AJPH.2026.308671";
  const articleReference = `${articleTitle}: ${articleUrl}`;
  const evidenceCaution = "Interpret this field report as implementation evidence, not a representative national estimate. The authors surveyed three professional networks in October 2025, received 49 convenience-sample responses containing 23 use cases, and selected three cases for broad applicability, technical complexity, and implementation stage. Reported results are case-specific and should not be generalized without local validation.";

  function findModule(id) {
    return data.modules.find(module => module.id === id || module.module_id === id);
  }

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
    section.paragraphs = paragraphs;
  }

  function addArticle(module) {
    module.references_and_resources = Array.isArray(module.references_and_resources) ? module.references_and_resources : [];
    if (!module.references_and_resources.some(item => String(item).includes("AJPH.2026.308671"))) {
      module.references_and_resources.push(articleReference);
    }
    const referenceSection = module.sections?.find(section => section.key === "references_and_resources_for_additional_information");
    if (referenceSection) {
      referenceSection.paragraphs = Array.isArray(referenceSection.paragraphs) ? referenceSection.paragraphs : [];
      if (!referenceSection.paragraphs.some(item => String(item).includes("AJPH.2026.308671"))) referenceSection.paragraphs.push(articleReference);
    }
    module.content_review = {
      ...(module.content_review || {}),
      status: "updated",
      date: "2026-08-20",
      field_evidence: "King et al. 2026 AJPH field report on three implemented or proof-of-concept public-health agency AI use cases"
    };
  }

  const updates = {
    "anl-200-natural-language-processing-for-public-health": {
      objectives: ["Explain why public-health narrative extraction requires variable-level validation and may need domain adaptation rather than reliance on an out-of-the-box language model."],
      paragraphs: [
        "King et al. describe a state health department proof of concept using a language model, retrieval-augmented generation, supervised fine-tuning, and human-in-the-loop refinement to extract complex drug-overdose circumstances from death narratives for SUDORS. An untuned model performed very differently across nuanced variables: reported F1 scores were 0.12 for depressed mood and 0.69 for alcohol problem. After domain adaptation, the reported scores increased to 0.73 and 0.86. The improved results were still imperfect and illustrate why fluent output or aggregate accuracy cannot substitute for variable-level public-health validation.",
        "Use the case to design an NLP test set that includes nuanced context, negation, temporality, ambiguous evidence, uncommon terminology, missing information, and variables with different consequences. Define a separate metric and operational threshold for each variable, preserve source-text review, document annotator guidance and disagreement, and retain human review where residual errors are unacceptable.",
        evidenceCaution
      ]
    },
    "arc-300-retrieval-augmented-generation-for-public-health-knowledge-work": {
      objectives: ["Distinguish what retrieval, fine-tuning, and human-in-the-loop refinement contributed to a documented public-health narrative-extraction workflow."],
      paragraphs: [
        "The SUDORS field case shows that adding retrieval to a general-purpose language model did not by itself make the system operationally adequate for nuanced surveillance abstraction. The team reported substantial gains only after supervised fine-tuning and iterative human-in-the-loop refinement. RAG can supply relevant context, definitions, and guidance, but it does not guarantee correct classification of context-dependent narrative variables.",
        "For a public-health RAG design, test retrieval and generation separately. Measure whether the correct source was retrieved, whether retrieved content was current and authoritative, whether the output was supported by the narrative, and whether each target variable met its own acceptance threshold. Record model, prompt, retrieval collection, embedding, fine-tuning data, reviewer, and version changes so improvements can be reproduced.",
        evidenceCaution
      ]
    },
    "anl-300-advanced-model-validation-and-evaluation-for-public-health-ai": {
      objectives: ["Use variable-level field evidence to define task-specific acceptance thresholds, residual-risk controls, and human-review rules."],
      paragraphs: [
        "King et al.'s SUDORS case provides a useful validation lesson: performance varied sharply by target variable before and after domain adaptation. A single overall score would obscure the difference between depressed-mood and alcohol-problem abstraction. Improved F1 scores did not establish that every variable, subgroup, or workflow condition was safe for automation.",
        "Validation should therefore report per-variable precision, recall, F1, error types, uncertainty, and reviewer agreement; examine rare and consequential conditions; use a held-out local test set; define thresholds before evaluation; and state which outputs may be automated, which require review, and which remain unsuitable. Revalidate after model, fine-tuning data, prompt, retrieval source, terminology, input format, or workflow changes.",
        evidenceCaution
      ]
    },
    "epi-310-ai-for-surveillance-signal-review-and-epidemiologic-judgment": {
      objectives: ["Apply epidemiologic and surveillance judgment to decide whether variable-level extraction performance supports operational use."],
      paragraphs: [
        "The SUDORS example involved a manual narrative-abstraction process reported to consume more than 500 person-hours annually. The field report demonstrates both the value and danger of automation: domain adaptation improved selected F1 scores, but residual error remained. Epidemiologists must determine whether errors alter trend interpretation, case characterization, disparity measurement, resource decisions, or reporting obligations.",
        "A deployment decision should specify which variables can be accepted automatically, which require human confirmation, how disagreements are resolved, how source narratives remain available, and how drift or changing documentation practices are monitored. Efficiency is an outcome to measure, not a reason to lower scientific thresholds.",
        evidenceCaution
      ]
    },
    "ops-200-data-quality-engineering-for-ai": {
      objectives: ["Design confidence-threshold and exception-review controls for AI-assisted digitization while measuring field-level error rather than automation volume alone."],
      paragraphs: [
        "A second state-agency case in King et al. used a vision-language model in a secure cloud environment to digitize legacy blood-lead records. The report describes a reduction in manual transcription error from approximately 40% to below 5%, automation of nearly 98% of document processing, and planned application to more than 50 million historical vital records. Documents below a minimum confidence threshold were routed to mandatory human review.",
        "The case should not be interpreted as proof that one confidence threshold transfers across document types or fields. Before scaling, validate field-level accuracy, missingness, handwriting and scan quality, demographic and language variation, rare formats, duplicate and amendment handling, record linkage, and downstream effects. Calibrate confidence against observed errors, monitor the review queue, sample high-confidence outputs, and retain traceability to the source image.",
        evidenceCaution
      ]
    },
    "ops-240-user-acceptance-testing-for-ai-supported-workflows": {
      objectives: ["Test confidence-threshold automation and mandatory-review queues as complete workflows rather than evaluating model output alone."],
      paragraphs: [
        "The legacy-record digitization case illustrates a practical acceptance design: outputs meeting a defined confidence standard could proceed, while lower-confidence documents required human review. User acceptance testing must determine whether the threshold, interface, queue, source-image access, corrections, audit record, and escalation process work together under realistic volume and staffing conditions.",
        "Test false confidence, unreadable scans, mixed forms, rare fields, amended records, duplicate people, downtime, reviewer disagreement, queue spikes, and correction propagation. Measure not only automation rate but also undetected errors, review burden, turnaround time, staff trust, downstream data quality, and whether the system fails safely.",
        evidenceCaution
      ]
    },
    "gov-100-introduction-to-ai-governance-for-public-health": {
      objectives: ["Connect confidence thresholds, permitted uses, evaluation evidence, data retention, transparency, and workforce training to an operational governance decision."],
      paragraphs: [
        "King et al. identify specialization, governance, and workforce capacity as interconnected implementation challenges. In the legacy-record case, governance was embedded in the workflow through a confidence threshold and mandatory human review, rather than added as a policy statement after deployment. The authors recommend that organizational policies address definitions, risk assessment, permitted and prohibited uses, oversight, evaluation, retention, transparency, and workforce training while aligning with existing governance and law.",
        "A confidence score is not governance by itself. The agency must validate calibration, define who approves the threshold, specify exceptions and sampling, monitor errors and disparities, document changes, protect records, and retain authority to pause the system. Smaller agencies may need shared expertise, regional support, or scaled review processes rather than weaker safeguards.",
        evidenceCaution
      ]
    },
    "ops-310-measuring-ai-value-performance-and-operational-impact": {
      objectives: ["Evaluate reported time, error, automation, and cost improvements alongside quality, review burden, scale assumptions, and public-health consequences."],
      paragraphs: [
        "The field report supplies three concrete operational examples: a surveillance-abstraction workflow consuming more than 500 person-hours annually; legacy-document processing reported to reduce transcription error from about 40% to below 5%, automate nearly 98% of documents, and reduce projected five-year cost from about $335,000 to $10,000; and a clinic-workflow redesign reported to reduce design and implementation time from at least five days to two. These are useful hypotheses and case results, not universal benchmarks.",
        "A value evaluation should verify baseline definitions, cost categories, data volume, comparison period, staff and reviewer time, infrastructure, model and vendor costs, error consequences, quality, equity, sustainability, and whether benefits persist at scale. Separate projected savings from realized savings and disclose what is excluded. Pair automation rate with undetected-error rate and review-queue burden.",
        evidenceCaution
      ]
    },
    "pgm-110-ai-workflow-readiness-and-operational-planning": {
      objectives: ["Use a documented local-agency workflow-redesign case to distinguish responsible staff augmentation from ungoverned tool use."],
      paragraphs: [
        "King et al. report that a local health department used a publicly available generative AI tool while redesigning a clinic patient-intake workflow, including solution identification, implementation planning, and troubleshooting with familiar office-productivity tools. The reported design and implementation time fell from five or more days to two. The case illustrates how generative AI may lower technical barriers for nonspecialists when used as design support.",
        "The report does not establish that public AI tools are appropriate for patient information, protected data, confidential operations, or every agency. A responsible adaptation begins with approved-tool and data rules; keeps patient or sensitive information out of unapproved services; verifies technical instructions; tests the redesigned workflow with staff and accessibility needs; documents decisions; and preserves accountable human ownership. Measure whether the change improves flow without creating new burden, exclusion, safety risks, or fragile workarounds.",
        evidenceCaution
      ]
    },
    "exe-440-workforce-strategy-and-ai-role-design": {
      objectives: ["Use recent public-health field evidence to plan AI as workforce augmentation supported by policy, infrastructure, learning, and protected expert judgment."],
      paragraphs: [
        "The field report links AI adoption to a public-health workforce operating under sustained capacity constraints. Its cases show distinct augmentation patterns: reducing manual narrative abstraction, scaling record digitization with exception review, and helping nonspecialists redesign a clinic workflow. The authors caution that individual initiative is insufficient without organizational policy, infrastructure, professional development, and inclusive design.",
        "Workforce strategy should identify which routine work may be reduced, which expert judgments must be protected, what new review and exception work is created, and where skill degradation could occur. Provide role-based learning, supervised practice, escalation paths, time to validate outputs, and opportunities to redirect capacity toward complex problem-solving and community engagement. Do not use projected efficiency as an automatic staffing-reduction target.",
        evidenceCaution
      ]
    },
    "pgm-150-supervisor-and-workforce-impacts-of-ai-adoption": {
      objectives: ["Plan supervisory controls that prevent skill degradation and unsupported individual experimentation while enabling responsible augmentation."],
      paragraphs: [
        "King et al. note that individual competency can enable useful experimentation but cannot sustain AI adoption without organizational support. They also identify professional skill degradation as a concern when routine work is automated. Supervisors should therefore monitor both burden reduction and whether staff retain the ability to recognize errors, perform critical tasks during downtime, explain decisions, and exercise public-health judgment.",
        "Use the three cases to discuss different supervisory designs: expert adjudication for nuanced surveillance abstraction, mandatory exception review for document digitization, and approved-tool boundaries for staff-led workflow redesign. Assign time, training, quality checks, backup procedures, and escalation responsibility before expecting staff to absorb new AI-review duties.",
        evidenceCaution
      ]
    }
  };

  Object.entries(updates).forEach(([id, update]) => {
    const module = findModule(id);
    if (!module) return;
    module.learning_objectives = Array.isArray(module.learning_objectives) ? module.learning_objectives : [];
    uniquePush(module.learning_objectives, update.objectives || []);
    upsertSection(module, "current_public_health_field_evidence_2026", "Current Public Health Field Evidence (2026)", update.paragraphs);
    addArticle(module);
  });
})();
