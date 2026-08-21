(function addPol205VendorEvaluationModule() {
  const data = window.CURRICULUM_DATA;
  if (!data || !Array.isArray(data.modules)) return;

  const courseId = "POL 205";
  const id = "pol-205-evaluating-ai-vendors-and-products-for-public-health";
  const title = "Evaluating AI Vendors and Products for Public Health";
  const contractingId = "pol-210-ai-procurement-contract-clauses-and-vendor-accountability";
  const contracting = data.modules.find(module => module.course_id === "POL 210" || module.id === contractingId);
  const trackAssignments = [
    ["policy", "required"],
    ["program-management", "required"],
    ["governance-security", "recommended"],
    ["technical-architecture", "recommended"],
    ["public-health-executive-leadership", "recommended"]
  ];

  const module = {
    course_id: courseId,
    course_code: courseId,
    id,
    module_id: id,
    title,
    module_title: title,
    display_title: `${courseId}: ${title}`,
    primary_track_code: "POL",
    primary_track_title: "Policy Role-Based Track",
    tracks: trackAssignments.map(([trackId]) => trackId),
    assignment_type: "required",
    level_label: "Applied foundational/practitioner",
    estimated_time: "45–60 minutes",
    audience: "Procurement and contracting staff, program and project managers, product owners, policy and legal staff, privacy and security officers, informatics and IT staff, governance reviewers, fiscal staff, accessibility coordinators, equity and community-engagement staff, and executive sponsors involved in selecting AI products.",
    when_to_use: "Complete after the use case and requirements are defined but before a preferred AI vendor is selected, a pilot uses sensitive or operational data, or contract negotiations begin.",
    required_prerequisites: ["INT 200"],
    recommended_prerequisites: ["GOV 100", "PGM 210", "GOV 310", "INT 250"],
    learning_objectives: [
      "Translate a defined public health use case, workflow, data profile, affected populations, and risk classification into weighted vendor-evaluation criteria.",
      "Distinguish vendor assertions, documentation, demonstrations, references, test results, independent evidence, and locally validated evidence.",
      "Evaluate product fit across public health value, usability, accessibility, privacy, security, data rights, interoperability, performance, equity, transparency, environmental impacts, support, cost, and exit readiness.",
      "Plan a structured demonstration or bounded pilot using realistic public health scenarios, predefined acceptance thresholds, and appropriate data protections.",
      "Document reviewer roles, conflicts of interest, evidence gaps, conditions, dissent, and a defensible selection recommendation.",
      "Carry evaluation findings into procurement requirements, contract clauses, acceptance criteria, monitoring, renewal, and termination decisions."
    ],
    sections: [
      {
        key: "training_overview",
        heading: "Training Overview",
        paragraphs: [
          "Selecting an AI vendor is a public health decision, not simply a product comparison. The agency remains accountable for the workflow, data, affected populations, decisions, communications, and harms even when a vendor supplies the technology. A disciplined evaluation begins with the public health need and evidence requirements rather than a demonstration or preferred product.",
          "This module addresses the pre-award decision: whether a product and supplier are sufficiently capable, trustworthy, supportable, and appropriate to advance. POL 210 follows it by translating the selected approach and unresolved risks into enforceable contract terms and ongoing vendor accountability."
        ]
      },
      {
        key: "when_how_why_who",
        heading: "When, How, Why, and Who",
        paragraphs: [
          "When: use the module after Tool 49 or equivalent intake, risk triage, requirements writing, and applicable privacy screening; repeat it when the vendor, model, hosting arrangement, subcontractors, data use, intended use, or risk materially changes.",
          "How: establish a cross-functional evaluation team, disclose conflicts, agree on mandatory gates and weighted criteria before reviewing proposals, require comparable evidence, test realistic scenarios, record findings in Tool 32, and route unresolved issues to the officials who hold the relevant authority.",
          "Why: attractive demonstrations can hide weak evidence, poor workflow fit, inaccessible interfaces, risky data terms, model changes, integration burden, or costs that appear only after selection. A documented process supports fairness, defensibility, public trust, and stronger contracting.",
          "Who: the program owner and procurement lead coordinate the evaluation. IT and security review architecture and controls; privacy and legal officials make applicable determinations; data and analytic reviewers assess validation evidence; accessibility, equity, community, records, fiscal, environmental, and workforce representatives participate when the use and risk require them. Governance reviews the complete record, and the authorized official approves the selection."
        ]
      },
      {
        key: "evaluation_sequence",
        heading: "A Risk-Proportionate Evaluation Sequence",
        paragraphs: [
          "1. Confirm the problem, desired public health outcome, current workflow, non-AI alternative, users, affected populations, data, decision consequences, and risk tier. 2. Separate mandatory gates from scored preferences. 3. Define evidence and acceptance thresholds before proposals or demonstrations are scored. 4. Screen conflicts, exclusions, legal authority, privacy, security, records, accessibility, and procurement eligibility. 5. Review evidence and score products consistently. 6. Test realistic scenarios with approved data. 7. Compare total cost, implementation burden, support, portability, and exit readiness. 8. Document the recommendation, conditions, dissent, approver, and expiration or re-review date.",
          "Mandatory gates should stop or pause evaluation when a product cannot meet a non-negotiable requirement. Examples include prohibited secondary data use, inability to execute a required BAA, inadequate security, inaccessible core functions, missing audit capability, unacceptable performance, or refusal to support agency records, monitoring, correction, and exit requirements."
        ]
      },
      {
        key: "evidence_not_claims",
        heading: "Evaluate Evidence, Not Claims",
        paragraphs: [
          "A capability statement or sales demonstration is not validation. Ask what population, setting, task, version, comparator, and time period support each performance claim. Determine whether evidence was produced by the vendor, an independent evaluator, another customer, or the agency's own test. Record exclusions, uncertainty, subgroup results, known failures, human-review assumptions, and whether results transfer to the proposed public health workflow.",
          "Require evidence proportionate to potential harm. Low-risk drafting support may need realistic scenario testing, source verification, privacy review, and usability evidence. A product influencing prioritization, eligibility, enforcement, clinical or epidemiologic judgment, resource allocation, or public warning requires stronger validation, subgroup analysis, qualified human review, monitoring, and independent scrutiny."
        ]
      },
      {
        key: "evaluation_domains",
        heading: "Evaluation Domains",
        paragraphs: [
          "Mission and workflow fit: intended use, non-AI alternatives, user needs, affected populations, implementation burden, human review, exceptions, and measurable public health value. Technical fit: architecture, interoperability, identity, permissions, logging, reliability, performance, scalability, change control, and system-of-record integration.",
          "Responsible-use fit: authority, privacy and HIPAA applicability, data minimization, security, model and data transparency, validation, equity and subgroup evidence, accessibility, language access, records, explainability, contestability, incident response, and community impacts. Supplier fit: financial and operational capacity, qualified support, subcontractors, roadmap, references, secure development, documentation, insurance where required, and responsiveness to corrective action.",
          "Lifecycle fit: implementation and training, total cost of ownership, environmental and resource impacts, model and feature updates, monitoring, audit access, portability, continuity, renewal, termination, data return and destruction, transition assistance, and avoidance of inappropriate lock-in."
        ]
      },
      {
        key: "public_health_scenario",
        heading: "Public Health Scenario",
        paragraphs: [
          "A county health department is comparing three products that summarize communicable-disease case narratives and suggest follow-up tasks. Vendor A performs well in a polished demonstration but will not disclose whether prompts and outputs are retained for product improvement. Vendor B provides strong security documentation and a BAA but has not tested the product with the department's languages, abbreviations, missing fields, or investigation workflow. Vendor C supports local testing and data restrictions but requires substantial interface work and has higher first-year costs.",
          "Before scoring, the team defines mandatory data-use, security, accessibility, audit, and human-review gates. Epidemiologists create representative scenarios containing ambiguous dates, negation, uncommon conditions, missing fields, multiple languages, and urgent follow-up needs. The privacy official determines whether and how PHI may be used; IT reviews integration and logs; investigators test usability; data and equity reviewers examine errors by scenario and subgroup; fiscal staff compare total cost; and procurement records comparable evidence. Vendor A fails a mandatory data-use gate. Vendors B and C advance to a bounded test. The recommendation identifies evidence gaps and conditions that must become POL 210 contract terms."
        ]
      },
      {
        key: "demonstrations_and_pilots",
        heading: "Demonstrations, Testing, and Bounded Pilots",
        paragraphs: [
          "Provide vendors the same scripted scenarios and questions. Do not allow a vendor to substitute a favorable demonstration for agency-defined tasks. Begin with synthetic, de-identified, or otherwise approved data when feasible; do not treat synthetic-data performance as proof of production performance. Preserve test versions, settings, prompts, outputs, reviewer ratings, errors, response times, and vendor explanations.",
          "Predefine thresholds for accuracy, unsupported statements, omissions, subgroup or language performance, accessibility, latency, availability, user burden, overrides, security, and incident handling. A pilot is a controlled evidence-building activity—not an implied commitment to buy, deploy, or scale."
        ]
      },
      {
        key: "risks_failure_modes_and_guardrails",
        heading: "Risks, Failure Modes, and Guardrails",
        paragraphs: [
          "Solution-first procurement: a favored product shapes the problem. Guardrail: approve the use case, alternatives, requirements, and scoring method first. Demonstration bias: reviewers see only curated successes. Guardrail: use agency-defined scenarios and record failures. Score averaging: a strong price or interface offsets a non-negotiable safety failure. Guardrail: apply mandatory gates before weighted scoring.",
          "Paper compliance: certifications are accepted without confirming scope, version, hosting, subcontractors, or workflow relevance. Guardrail: verify coverage and request supporting evidence. Hidden lifecycle risk: teams overlook updates, integration, monitoring, support, price escalation, data return, and exit. Guardrail: score total lifecycle capability and carry findings into POL 210. Conflict or unequal access: vendors receive different information or evaluators have undisclosed interests. Guardrail: use a controlled process, common questions, documented communications, and conflict management."
        ]
      },
      {
        key: "practical_exercise",
        heading: "Practical Exercise",
        paragraphs: [
          "Use Tool 32 to evaluate Vendors A, B, and C in the case-summary scenario. Define at least five mandatory gates and weighted criteria across mission fit, evidence, privacy and data use, security, performance and equity, accessibility, interoperability, support, cost, environmental impact, monitoring, and exit readiness.",
          "For each criterion, record the evidence requested, evidence received, reviewer or decision owner, score or gate result, gap, follow-up action, due date, and effect on the recommendation. Add more locally required criteria when needed. Produce a selection memo that recommends advance, advance with conditions, request more evidence, conduct a bounded pilot, reject, or cancel the procurement. Identify every finding that must become a POL 210 requirement or contract clause."
        ]
      },
      {
        key: "expected_artifact_or_evidence",
        heading: "Expected Artifact or Evidence",
        paragraphs: [
          "Completed Tool 32 vendor evaluation and evidence matrix",
          "Comparable demonstration or pilot test record",
          "Documented mandatory-gate and weighted-score results",
          "Selection recommendation with conditions, dissent, approver, and re-review triggers",
          "Handoff list for POL 210 contracting and vendor accountability"
        ]
      },
      {
        key: "continue",
        heading: "Continue to Contracting",
        paragraphs: [
          "Next complete POL 210: AI Procurement Contract Clauses and Vendor Accountability. Translate the evaluation record into enforceable requirements for permitted data use, security, performance, documentation, accessibility, model changes, monitoring, incidents, audit, remedies, portability, renewal, and termination. Vendor selection does not close unresolved risks; it determines which risks must be resolved or controlled before award, pilot, go-live, or scale."
        ]
      }
    ],
    practical_exercise: {
      instructions: [
        "Complete Tool 32 for three fictional vendors using common mandatory gates, weighted criteria, evidence requirements, and realistic public health test scenarios.",
        "Produce a defensible recommendation and identify the findings that must become POL 210 contract requirements."
      ],
      example: "For a communicable-disease case-summary product, reject a vendor that cannot prohibit secondary use of case data; conditionally advance vendors that support protected testing, human review, audit logs, accessibility, local validation, and documented exit requirements."
    },
    expected_artifact_or_evidence: [
      "Vendor evaluation and evidence matrix",
      "Demonstration or bounded-pilot record",
      "Selection recommendation and contracting handoff"
    ],
    knowledge_check: [
      {
        question: "What should an agency complete before comparing AI vendors?",
        options: ["A preferred-vendor announcement", "A defined use case, alternatives, risk classification, requirements, criteria, and evidence thresholds", "A production deployment", "Only a price ceiling"],
        answer: "B"
      },
      {
        question: "How should a mandatory privacy or security requirement be handled in scoring?",
        options: ["Average it with visual design scores", "Ignore it when price is low", "Treat failure as a gate that stops or conditions advancement", "Let the vendor score itself"],
        answer: "C"
      },
      {
        question: "Why is a polished vendor demonstration insufficient evidence?",
        options: ["It may use curated tasks, data, settings, and successes that do not represent the agency workflow", "Demonstrations are always prohibited", "It proves the contract is complete", "It replaces local testing"],
        answer: "A"
      },
      {
        question: "What should happen to unresolved evaluation findings for a selected vendor?",
        options: ["Delete them after selection", "Convert them into conditions, evidence requirements, acceptance criteria, monitoring, or contract clauses", "Treat them as vendor trade secrets", "Wait until renewal"],
        answer: "B"
      },
      {
        question: "Who approves vendor selection?",
        options: ["The vendor", "Whichever reviewer gives the highest score", "The official with delegated authority, informed by the documented cross-functional evaluation", "The technical reviewer alone"],
        answer: "C"
      }
    ],
    references_and_resources: [
      { title: "Buy AI: AI procurement best practices", publisher: "U.S. General Services Administration", year: "2026", url: "https://www.gsa.gov/artificial-intelligence/buy-ai", note: "Current federal guidance emphasizing mission requirements, security, compliance, data, interoperability, testing, and acquisition planning." },
      { title: "Artificial Intelligence Risk Management Framework", publisher: "National Institute of Standards and Technology", year: "2023", url: "https://airc.nist.gov/airmf-resources/airmf/", note: "Voluntary framework for governing, mapping, measuring, and managing AI risk and trustworthiness." },
      { title: "Software Acquisition Guide for Government Enterprise Consumers", publisher: "Cybersecurity and Infrastructure Security Agency", year: "2024", url: "https://www.cisa.gov/sites/default/files/2024-07/PDM24050%20Software%20Acquisition%20Guide%20for%20Government%20Enterprise%20ConsumersV2_508c.pdf", note: "Risk-informed supplier questions and software-assurance evidence for government acquisition." },
      { title: "Secure by Demand Guide", publisher: "Cybersecurity and Infrastructure Security Agency", year: "2024", url: "https://www.cisa.gov/sites/default/files/2024-08/SecureByDemandGuide_080624_508c.pdf", note: "Questions customers can use to demand secure-by-design practices from software manufacturers." },
      { title: "Guidance on HIPAA and Cloud Computing", publisher: "HHS Office for Civil Rights", url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html", note: "Cloud-provider, risk-analysis, BAA, service-level, data-return, and security considerations when HIPAA applies." },
      { title: "Ethics and governance of artificial intelligence for health", publisher: "World Health Organization", year: "2021", url: "https://www.who.int/publications/i/item/9789240029200", note: "Health AI ethics, accountability, safety, transparency, inclusiveness, and sustainability guidance." }
    ],
    approved_tools_note: "Use only agency-approved systems and data for demonstrations or pilots. Vendor evaluation does not authorize disclosure, processing, or production use. Confirm applicable public health authority, privacy, security, procurement, records, accessibility, civil-rights, Tribal, and agency requirements.",
    plays: [2, 3, 7, 8, 11, 12],
    tools: [10, 32, 34, 35],
    completion_requirement: "Complete the module, score at least 4 of 5 on the knowledge check, complete Tool 32, and save a vendor-selection recommendation and POL 210 contracting handoff.",
    jurisdiction_and_agency_policy_note: "This national-level module supports training and planning. It does not replace jurisdiction-specific procurement procedures, competitive-solicitation requirements, delegated purchasing authority, legal advice, privacy or security determinations, accessibility review, records requirements, Tribal consultation, civil-rights review, or governance approval.",
    lms_usability_metadata: {
      catalog_card: {
        course_id: courseId,
        title,
        level_label: "Applied foundational/practitioner",
        estimated_time_minutes: 55,
        format: "Self-paced online module with applied vendor-comparison exercise",
        audience: ["Procurement and contracting staff", "Program managers", "Policy, privacy, legal, security, IT, informatics, governance, and executive reviewers"],
        when_to_use: "Before vendor selection, protected-data pilots, or contract negotiations.",
        outputs: ["Vendor evaluation", "Evidence matrix", "Selection recommendation", "Contracting handoff"],
        completion_requirement: "Pass the knowledge check and complete Tool 32 with a documented recommendation.",
        required_prerequisites: ["INT 200"],
        recommended_prerequisites: ["GOV 100", "PGM 210", "GOV 310", "INT 250"]
      }
    },
    content_review: {
      status: "new complete module",
      date: "2026-08-20",
      basis: "GSA AI acquisition guidance; NIST AI RMF; CISA software acquisition and Secure by Demand guidance; HHS OCR cloud guidance; WHO health AI ethics and governance guidance"
    }
  };

  const existingIndex = data.modules.findIndex(item => item.course_id === courseId || item.id === id);
  if (existingIndex >= 0) data.modules[existingIndex] = module;
  else {
    const contractingIndex = data.modules.findIndex(item => item.course_id === "POL 210" || item.id === contractingId);
    contractingIndex >= 0 ? data.modules.splice(contractingIndex, 0, module) : data.modules.push(module);
  }

  const asTrackEntry = (sourceModule, assignmentType) => ({
    order: 0,
    course_id: sourceModule.course_id,
    module_id: sourceModule.id || sourceModule.module_id,
    title: sourceModule.title,
    primary_track_code: sourceModule.primary_track_code || "POL",
    primary_track_title: sourceModule.primary_track_title || "Policy Role-Based Track",
    course_level: Number(String(sourceModule.course_id).match(/\d+/)?.[0] || 205),
    level_label: sourceModule.level_label || "applied/foundational",
    assignment_type: assignmentType,
    source: "site_curriculum_extension"
  });

  function insertPairInTrack(track, assignmentType) {
    if (!track || !Array.isArray(track.modules)) return;
    track.modules = track.modules.filter(item => ![courseId, "POL 210"].includes(item.course_id));
    let insertionIndex = track.modules.findIndex(item => item.course_id === "PGM 210" || item.course_id === "GOV 360" || item.course_id === "POL 300");
    if (insertionIndex < 0) insertionIndex = track.modules.length;
    else if (track.modules[insertionIndex]?.course_id === "PGM 210" || track.modules[insertionIndex]?.course_id === "POL 300") insertionIndex += 1;
    const entries = [asTrackEntry(module, assignmentType)];
    if (contracting) entries.push(asTrackEntry(contracting, assignmentType));
    track.modules.splice(insertionIndex, 0, ...entries);
    track.modules.forEach((item, index) => { item.order = index + 1; });
    track.module_count = track.modules.length;
  }

  trackAssignments.forEach(([trackId, assignmentType]) => {
    [data.track_catalog, data.tracks].filter(Array.isArray).forEach(catalog => {
      insertPairInTrack(catalog.find(track => track.track_id === trackId), assignmentType);
    });
  });

  data.track_to_module_crosswalk = Array.isArray(data.track_to_module_crosswalk) ? data.track_to_module_crosswalk : [];
  data.module_to_track_crosswalk = Array.isArray(data.module_to_track_crosswalk) ? data.module_to_track_crosswalk : [];
  trackAssignments.forEach(([trackId, assignmentType]) => {
    const track = data.track_catalog?.find(item => item.track_id === trackId);
    const pairs = [module, ...(contracting ? [contracting] : [])];
    pairs.forEach(sourceModule => {
      if (!data.track_to_module_crosswalk.some(item => item.track_id === trackId && item.course_id === sourceModule.course_id)) {
        data.track_to_module_crosswalk.push({
          track_id: trackId,
          track_title: track?.title || trackId,
          order: track?.modules?.find(item => item.course_id === sourceModule.course_id)?.order || 99,
          course_id: sourceModule.course_id,
          module_id: sourceModule.id || sourceModule.module_id,
          title: sourceModule.title,
          assignment_type: assignmentType
        });
      }
    });
    if (!data.module_to_track_crosswalk.some(item => item.module_id === id && item.track_id === trackId)) {
      data.module_to_track_crosswalk.push({
        course_id: courseId,
        module_id: id,
        module_title: title,
        track_id: trackId,
        track_title: track?.title || trackId,
        primary: trackId === "policy"
      });
    }
  });

  data.total_modules = data.modules.length;
  if (data.curriculum_map) data.curriculum_map.module_count = data.modules.length;
})();
