(function addInt250Course() {
  const data = window.CURRICULUM_DATA;
  if (!data || !Array.isArray(data.modules)) return;
  const title = "Environmental and Resource Impacts of AI - Considerations for Ethical Public Health Use";
  const id = "int-250-environmental-and-resource-impacts-of-ai";
  // Update every legacy catalog/crosswalk record before adding the complete
  // module so the course has one title and required status across all views.
  const updateLegacyRecords = value => {
    if (!value || typeof value !== "object") return;
    if (value.course_id === "INT 250") {
      if ("title" in value) value.title = title;
      if ("module_title" in value) value.module_title = title;
      if ("assignment_type" in value) value.assignment_type = "required";
      if ("note" in value) value.note = "Complete required course for all public health staff.";
    }
    Object.values(value).forEach(updateLegacyRecords);
  };
  updateLegacyRecords(data);
  const module = {
    course_id: "INT 250", course_code: "INT 250", id, module_id: id,
    title, module_title: title, display_title: `INT 250: ${title}`,
    primary_track_code: "INT",
    primary_track_title: "Shared Foundational / Introductory Course",
    tracks: ["shared-foundational"], assignment_type: "required",
    level_label: "Foundational", estimated_time: "45–60 minutes",
    audience: "All public health staff, supervisors, leaders, governance participants, program teams, procurement staff, environmental health staff, IT staff, and data professionals.",
    when_to_use: "Complete as required foundational learning before selecting, procuring, piloting, scaling, or routinely using AI for public health work.",
    required_prerequisites: ["INT 100"], recommended_prerequisites: ["INT 105", "INT 190"],
    learning_objectives: [
      "Explain why environmental sustainability is part of ethical public health AI use.",
      "Identify energy, water, emissions, land, mineral, hardware, electronic-waste, and community-health impacts across the AI lifecycle.",
      "Distinguish AI's environmental footprint from environmental and public health benefits that AI may enable.",
      "Apply proportionality by using no more computationally intensive an approach than the public health need justifies.",
      "Recognize environmental justice concerns and unequal distributions of infrastructure risks and benefits.",
      "Ask vendors for decision-useful environmental evidence without presenting uncertain estimates as precise facts.",
      "Document alternatives, safeguards, measures, owners, thresholds, and re-review decisions."
    ],
    sections: [
      { key: "training_overview", heading: "Training Overview", paragraphs: [
        "AI is not environmentally weightless. Its lifecycle can require electricity, water, land, minerals, specialized hardware, data-center construction, cooling, networks, and eventual equipment disposal. These impacts can affect air quality, water availability, utility costs, climate, ecosystems, workers, and communities. Public health agencies should treat environmental sustainability as part of responsible AI governance.",
        "AI can also support environmental health through hazard detection, heat and smoke forecasting, emergency response, infrastructure monitoring, and climate adaptation. Ethical use examines both potential public health benefit and the direct, indirect, and cumulative burdens created by the system."
      ]},
      { key: "why_required", heading: "Why This Course Is Required for All Staff", paragraphs: [
        "Routine choices influence aggregate demand. Staff may choose a generative system when search, a spreadsheet, a rule, a statistical method, a smaller model, or no automation would meet the need. Staff also help define use cases, compare vendors, review outputs, communicate with communities, and decide whether a tool remains useful.",
        "This course does not ask every employee to calculate emissions or audit a data center. It teaches staff to avoid unnecessary compute, recognize potentially material impacts, document public health justification, request appropriate evidence, and route consequential decisions to environmental health, procurement, IT, equity, facilities, fiscal, legal, and community representatives."
      ]},
      { key: "core_concepts", heading: "Core Concepts", paragraphs: [
        "Lifecycle thinking includes model development and training, data storage and movement, operation or inference, supporting networks and cooling, hardware manufacturing and replacement, and end-of-life disposal. A narrow estimate can omit substantial upstream or downstream impacts.",
        "Direct impacts include electricity and water used by computing and cooling. Indirect and embodied impacts include power-generation emissions, construction, mineral extraction, chip and server manufacturing, supply chains, land use, backup generation, and electronic waste. Location matters because grids, water stress, air quality, land use, climate, and community vulnerability vary.",
        "Environmental justice asks who receives benefits, who bears burdens, whose existing exposures may be compounded, who has decision influence, and whether infrastructure or costs deepen inequity. An efficient system can still be unjust if burdens concentrate in communities with limited power or cumulative health risks.",
        "Proportionality means matching computational intensity to a legitimate public health purpose. Compare simpler workflows, smaller or task-specific models, classical analytics, retrieval or search, human processes, shared services, and the option not to use AI."
      ]},
      { key: "evidence", heading: "Interpreting Environmental Claims and Evidence", paragraphs: [
        "AI environmental estimates are incomplete and difficult to compare. Results depend on the model, hardware, utilization, data center, cooling method, location, electric grid, system boundary, and allocation method. Vendor disclosures may omit training, inference, embodied impacts, subcontractors, or geography.",
        "Do not repeat a universal energy, carbon, or water value for a prompt as though it applies everywhere. Record what was measured, the period and location, lifecycle stages included, methodology, uncertainty, and exclusions. When data are unavailable, document the gap and use risk-proportionate procurement conditions and monitoring.",
        "Efficiency per transaction does not guarantee a lower total footprint if use expands. Evaluate expected scale and total demand."
      ]},
      { key: "decision_framework", heading: "Ethical Public Health Decision Framework", paragraphs: [
        "1. Define the need and expected beneficiaries. 2. Identify non-AI and lower-compute alternatives. 3. Describe the service, volume, duration, data movement, and infrastructure. 4. Screen lifecycle impacts and evidence gaps. 5. Identify affected communities and cumulative burdens. 6. Compare benefit, burden, cost, equity, and uncertainty. 7. Set procurement requirements, safeguards, measures, owners, thresholds, and review dates. 8. Decide whether to proceed, modify, pilot, pause, or decline. 9. Monitor actual value and impacts and revisit the decision when scale, vendor, model, location, or evidence changes.",
        "AI used for environmental protection must meet the same test. Validate effectiveness, respect community and Indigenous knowledge and authority, protect sensitive location data, prevent inequitable enforcement or surveillance, and demonstrate that benefits justify burdens."
      ]},
      { key: "public_health_example", heading: "Public Health Example", paragraphs: [
        "A state health department proposes a large generative service to summarize every environmental-health inspection narrative and identify follow-up tasks. It may reduce documentation burden, but the team has not tested whether its existing template and rules-based workflow address most cases. The vendor reports a company-wide renewable-energy goal but provides no service-specific energy, water, location, lifecycle-boundary, or subcontractor information.",
        "The team separates the tasks. Existing rules handle structured extraction and routing; a smaller approved model is piloted only for complex summaries. Inspectors review every output. Procurement requests methodology, energy and water indicators, data-center regions, cooling approach, emissions boundary, hardware and e-waste practices, reduction targets, and change notices. Environmental health and equity staff consider disproportionate infrastructure burdens. The pilot measures staff time, errors, volume, available resource indicators, and whether a simpler alternative remains sufficient."
      ]},
      { key: "staff_actions", heading: "What Staff Should Do", paragraphs: [
        "Ask whether AI is necessary and whether an approved lower-impact method can meet the need. Avoid redundant generation, unnecessary high-resolution media, repeated prompts caused by poor planning, and duplicative tools.",
        "Document expected volume, public health value, alternatives, available environmental evidence, affected communities, uncertainties, and the owner for follow-up. Escalate high-volume, high-compute, infrastructure-intensive, or environmentally consequential proposals.",
        "Organizational leaders—not individual employees alone—must set requirements, provide approved lower-impact choices, negotiate disclosure, monitor portfolio demand, and act on findings."
      ]},
      { key: "practical_exercise", heading: "Practical Exercise", paragraphs: [
        "Complete an Environmental and Resource Proportionality Review for the inspection scenario or one realistic public health use case. Record the need, beneficiaries, AI function, expected scale, non-AI and lower-compute alternatives, lifecycle impacts, evidence gaps, affected communities, environmental justice concerns, vendor questions, safeguards, measures, owners, review date, and recommendation.",
        "Choose one recommendation: use the lower-impact alternative; conduct a bounded pilot; proceed with conditions; request more evidence; pause; or do not use AI. Explain whether expected public health value is proportionate to environmental and community burdens."
      ]},
      { key: "expected_artifact_or_evidence", heading: "Expected Artifact or Evidence", paragraphs: [
        "Completed Environmental and Resource Proportionality Review",
        "Alternatives comparison and environmental evidence-gap record",
        "Named owner, monitoring measures, decision threshold, and review date"
      ]}
    ],
    practical_exercise: {
      instructions: ["Complete an Environmental and Resource Proportionality Review for a realistic public health AI proposal.", "Compare at least one non-AI and one lower-compute option, identify affected communities and evidence gaps, and make a documented decision."],
      example: "Compare a large generative service, a smaller approved model, and a rules-based workflow for inspection summaries; recommend a bounded pilot only if added value justifies the burden."
    },
    expected_artifact_or_evidence: ["Environmental and Resource Proportionality Review", "Alternatives and evidence-gap record", "Monitoring and re-review plan"],
    knowledge_check: [
      { question: "Why is environmental sustainability an ethical public health AI issue?", options: ["AI infrastructure can create health, resource, climate, and community burdens that must be weighed with expected benefit", "Only environmental agencies are affected", "An AI label proves sustainability", "Impacts occur only during training"], answer: "A" },
      { question: "What does proportionality require?", options: ["Always selecting the largest model", "Matching computational intensity to a legitimate need and comparing simpler alternatives", "Avoiding measurement", "Using AI for every repetitive task"], answer: "B" },
      { question: "How should per-prompt environmental estimates be treated?", options: ["As universal facts", "As exact vendor guarantees", "As context-dependent estimates whose boundaries, methods, and uncertainty must be stated", "As unrelated to AI"], answer: "C" },
      { question: "What does environmental justice review examine?", options: ["Only national electricity", "Benefits, burdens, cumulative exposures, and participation in decisions", "Only purchase price", "Only accuracy"], answer: "B" },
      { question: "When is AI for an environmental-health purpose ethically supportable?", options: ["Whenever its stated purpose is environmental", "When it replaces staff decisions", "When need, effectiveness, proportionality, rights, safeguards, equity, and lifecycle impacts are evaluated and monitored", "Whenever a vendor has a sustainability goal"], answer: "C" }
    ],
    references_and_resources: [
      { title: "Data Centers and Health: Understanding the Impacts and Taking Action", publisher: "American Public Health Association", year: "2026", url: "https://www.apha.org/events-and-meetings/apha-calendar/data-centers-and-health-equity-impacts" },
      { title: "Addressing the growing environmental harms of AI data centers", publisher: "American Public Health Association", year: "2026", url: "https://www.apha.org/publications/public-health-newswire/public-health-newswire/articles/addressing-the-growing-environmental-harms-of-ai-data-centers" },
      { title: "Ethics and governance of artificial intelligence for health", publisher: "World Health Organization", year: "2021", url: "https://www.who.int/publications/i/item/9789240029200" },
      { title: "Artificial Intelligence for Health", publisher: "World Health Organization", year: "2024", url: "https://www.who.int/publications/m/item/artificial-intelligence-for-health" },
      { title: "Artificial intelligence end-to-end: environmental impact of the full AI lifecycle", publisher: "United Nations Environment Programme", year: "2024", url: "https://www.unep.org/resources/report/artificial-intelligence-ai-end-end-environmental-impact-full-ai-lifecycle-needs-be" },
      { title: "Recommendation on the Ethics of Artificial Intelligence", publisher: "UNESCO", year: "2021", url: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" },
      { title: "AI, Environment and Ecosystems Toolkit", publisher: "UNESCO", year: "2026", url: "https://www.unesco.org/ethics-ai/en/node/308" },
      { title: "Generative AI's Environmental and Human Effects", publisher: "U.S. Government Accountability Office", year: "2025", url: "https://www.gao.gov/products/gao-25-107172" },
      { title: "Energy and AI", publisher: "International Energy Agency", year: "2025", url: "https://www.iea.org/reports/energy-and-ai" }
    ],
    plays: [1, 2, 3, 7, 8, 11, 13], tools: [5, 31, 32, 33, 34, 44],
    completion_requirement: "Complete the lesson, score at least 4 of 5 on the knowledge check, and save an Environmental and Resource Proportionality Review.",
    lms_usability_metadata: { catalog_card: { course_id: "INT 250", title, level_label: "Foundational", estimated_time_minutes: 55, format: "Self-paced online module", audience: ["All public health staff"], recommended_use: "Required foundational learning before specialization.", completion_requirement: "Complete the lesson, pass with at least 4 of 5, and save the proportionality review." } },
    content_review: { status: "new complete course", date: "2026-08-20", basis: "APHA, WHO, UNEP, UNESCO, GAO, and IEA resources" }
  };
  const index = data.modules.findIndex(item => item.course_id === "INT 250" || item.id === id);
  if (index >= 0) data.modules[index] = module; else data.modules.push(module);

  [data.track_catalog, data.tracks].filter(Array.isArray).forEach(catalog => {
    const track = catalog.find(item => item.track_id === "shared-foundational");
    if (!track) return;
    track.description = "Required baseline learning for all staff, including shared AI language, safe and ethical use, governance, equity, privacy, public communication, and environmental and resource responsibility.";
    track.modules = Array.isArray(track.modules) ? track.modules : [];
    if (!track.modules.some(item => item.course_id === "INT 250")) track.modules.push({ order: track.modules.length + 1, course_id: "INT 250", module_id: id, title, primary_track_code: "INT", course_level: 250, level_label: "foundational", assignment_type: "required" });
    const entry = track.supplemental_website_foundational_modules?.find(item => item.course_id === "INT 250");
    if (entry) Object.assign(entry, { title, note: "Complete required course for all public health staff." });
    track.module_count = track.modules.length;
  });
  data.track_to_module_crosswalk = Array.isArray(data.track_to_module_crosswalk) ? data.track_to_module_crosswalk : [];
  if (!data.track_to_module_crosswalk.some(item => item.track_id === "shared-foundational" && item.module_id === id)) data.track_to_module_crosswalk.push({ track_id: "shared-foundational", track_title: "Foundational Modules", order: 99, course_id: "INT 250", module_id: id, title, assignment_type: "required" });
})();
