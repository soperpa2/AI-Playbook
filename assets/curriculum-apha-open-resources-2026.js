(function addAphaOpenResources2026() {
  const data = window.CURRICULUM_DATA;
  if (!data || !Array.isArray(data.modules)) return;

  const resources = {
    responsiblePractice: {
      title: "From Problem to Practice: Applying AI Responsibly in Public Health",
      publisher: "American Public Health Association",
      year: "2026",
      url: "https://www.apha.org/events-and-meetings/apha-calendar/applying-ai-responsibly-in-public-health",
      access_note: "Public program description; no openly posted recording identified at the review date."
    },
    lawWebinar: {
      title: "AI Technologies & Public Health Law and Practice",
      publisher: "American Public Health Association Law Section",
      year: "2026",
      url: "https://www.apha.org/events-and-meetings/apha-calendar/ai-technologies-public-health-law",
      access_note: "Public webinar description; no openly posted recording identified at the review date."
    },
    misinformation: {
      title: "Public Health in the Age of Deception: Confronting the Misinformation Crisis",
      publisher: "American Public Health Association",
      year: "2026",
      url: "https://www.apha.org/events-and-meetings/apha-calendar/nphw-kickoff-forum-public-health-in-the-age-of-deception",
      access_note: "Public webinar page with an openly available recording."
    },
    practiceSession: {
      title: "Applying Artificial Intelligence in Public Health Practice and Research: Exploring Challenges & Opportunities",
      publisher: "American Public Health Association Annual Meeting",
      year: "2025",
      url: "https://apha.confex.com/apha/2025/meetingapi.cgi/Session/72690?filename=2025_Session72690.pdf&template=Word",
      access_note: "Public session document and abstracts; recordings may require conference access."
    },
    applicationsSession: {
      title: "AI Applications in Public Health",
      publisher: "American Public Health Association Annual Meeting",
      year: "2025",
      url: "https://apha.confex.com/apha/2025/meetingapi.cgi/Session/74303?filename=2025_Session74303.pdf&template=Word",
      access_note: "Public session document and abstracts; recordings may require conference access."
    },
    ajphWayForward: {
      title: "The Way Forward to Embrace Artificial Intelligence in Public Health",
      publisher: "American Journal of Public Health",
      year: "2025",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11715578/",
      access_note: "Open-access full text through PubMed Central."
    },
    ajphLegal: {
      title: "Public Health Legal Protections in an Era of Artificial Intelligence",
      publisher: "American Journal of Public Health",
      year: "2024",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11079834/",
      access_note: "Open-access full text through PubMed Central."
    }
  };

  function add(moduleId, keys) {
    const module = data.modules.find(item => item.id === moduleId || item.module_id === moduleId);
    if (!module) return;
    module.references_and_resources = Array.isArray(module.references_and_resources) ? module.references_and_resources : [];
    keys.forEach(key => {
      const resource = resources[key];
      if (!module.references_and_resources.some(item => {
        const url = typeof item === "string" ? item : item?.url;
        return url === resource.url;
      })) module.references_and_resources.push({ ...resource });
    });
    module.content_review = {
      ...(module.content_review || {}),
      status: "updated",
      date: "2026-08-20",
      open_access_note: "Updated from public APHA/AJPH materials; paywalled content was not treated as reviewed."
    };
  }

  function addEvidenceSection(moduleId, heading, paragraphs) {
    const module = data.modules.find(item => item.id === moduleId || item.module_id === moduleId);
    if (!module) return;
    module.sections = Array.isArray(module.sections) ? module.sections : [];
    const key = "ajph_apha_practice_update_2026";
    let section = module.sections.find(item => item.key === key);
    if (!section) {
      section = { key, heading, paragraphs: [] };
      const exerciseIndex = module.sections.findIndex(item => item.key === "practical_exercise");
      exerciseIndex >= 0 ? module.sections.splice(exerciseIndex, 0, section) : module.sections.push(section);
    }
    section.heading = heading;
    section.paragraphs = paragraphs;
  }

  ["int-100", "int-105-all-staff-safe-ai-use-and-approved-tools-awareness", "gov-100-introduction-to-ai-governance-for-public-health", "exe-100-executive-ai-briefing-for-public-health-leaders"].forEach(id => add(id, ["responsiblePractice", "ajphWayForward"]));
  ["pol-300-public-health-ai-policy-landscape-and-regulatory-readiness", "pol-320-ai-authority-liability-and-public-health-decision-making", "pol-330-ai-equity-policy-and-civil-rights-considerations", "gov-100-introduction-to-ai-governance-for-public-health"].forEach(id => add(id, ["lawWebinar", "ajphLegal"]));
  ["com-200-ai-for-public-health-communications-and-message-development", "exe-470-ai-crisis-communications-and-executive-response"].forEach(id => add(id, ["misinformation"]));
  ["epi-310-ai-for-surveillance-signal-review-and-epidemiologic-judgment", "anl-300-advanced-model-validation-and-evaluation-for-public-health-ai", "pgm-110-ai-workflow-readiness-and-operational-planning"].forEach(id => add(id, ["practiceSession", "applicationsSession"]));

  addEvidenceSection("int-100", "A Public Health Readiness Lens", [
    "Hattab and colleagues describe responsible public-health AI adoption as an organizational readiness problem, not merely a model-selection decision. Their proposed validation approach emphasizes transparent and understandable use, high-quality and representative data, and infrastructure that includes both technical systems and organizational capacity. For a health department, readiness therefore includes staff expertise, governance, privacy and security processes, data stewardship, validation, and the ability to maintain and monitor a system after launch.",
    "Apply this lens when considering an AI opportunity: explain the intended public health purpose in plain language; identify the data and populations represented or missing; name the accountable human owner; confirm the workflow, technical, and organizational supports; and decide how performance, equity, and unintended effects will be reviewed. A compelling demonstration is not evidence that the department is ready to operate the system responsibly."
  ]);
  addEvidenceSection("gov-100-introduction-to-ai-governance-for-public-health", "Governance as Operational Readiness", [
    "The AJPH readiness framework connects transparency and data quality with organizational infrastructure. Governance should make those connections operational by requiring understandable intended-use documentation, representative-data review, named decision rights, human oversight, workforce preparation, monitoring, and authority to pause or retire a system.",
    "Use governance review to test both the AI component and the conditions around it. Ask whether staff can inspect and challenge outputs, whether data limitations are visible, whether affected programs and communities have meaningful input, and whether the agency has enough capacity to maintain controls after the pilot period."
  ]);
  ["pol-300-public-health-ai-policy-landscape-and-regulatory-readiness", "pol-320-ai-authority-liability-and-public-health-decision-making"].forEach(id => addEvidenceSection(id, "Legal Preparedness Is Active Issue-Spotting", [
    "Hodge and colleagues identify public-health risks that include inaccurate health information, misinformation, privacy infringements, discrimination, erosion of trust, and worsening inequity. They also describe a changing legal environment involving consumer protection, civil rights, liability, constitutional constraints, emergency authority, and platform responsibility. The practical lesson is not that one law resolves AI risk; it is that agencies must identify the particular use, affected people, data, claims, decisions, and governmental authority before selecting safeguards.",
    "Route consequential proposals to qualified legal review early. Document the agency's authority, applicable privacy and civil-rights obligations, public-record and retention requirements, vendor responsibilities, notice and correction mechanisms, and limits on government action. Treat legal analysis as jurisdiction- and fact-specific, and revisit it when the model, vendor, data, purpose, population, or law changes."
  ]));
  addEvidenceSection("pol-330-ai-equity-policy-and-civil-rights-considerations", "Equity, Civil Rights, and Public Protection", [
    "The AJPH legal analysis connects biased or discriminatory AI outputs with existing public-health inequities and civil protections. Equity review should therefore examine both model performance and how an AI-supported workflow distributes access, burden, errors, surveillance, delay, and opportunity across populations.",
    "Require subgroup and intersectional review where data permit, document populations missing from the evidence, provide a meaningful human correction or appeal pathway, and assign responsibility for investigating complaints. Legal compliance is a floor; public-health governance should also consider trust, preventable harm, accessibility, and community accountability."
  ]);
  ["com-200-ai-for-public-health-communications-and-message-development", "exe-470-ai-crisis-communications-and-executive-response"].forEach(id => addEvidenceSection(id, "Preparing for an AI-Amplified Information Environment", [
    "APHA's public webinar on the misinformation crisis emphasizes clear and transparent communication, helping communities recognize credible information, cross-sector partnerships, and workforce preparation for real-time response. AI can accelerate drafting and monitoring, but it can also increase the speed, volume, personalization, and apparent credibility of false or misleading content.",
    "Build a response workflow before a crisis: define trusted listening sources, verification and approval roles, rapid correction procedures, community and partner channels, accessibility and language-access review, and escalation criteria. Measure whether communications improve understanding and trust rather than relying only on reach or engagement."
  ]));
  ["epi-310-ai-for-surveillance-signal-review-and-epidemiologic-judgment", "anl-300-advanced-model-validation-and-evaluation-for-public-health-ai"].forEach(id => addEvidenceSection(id, "Using Conference Examples Responsibly", [
    "Public APHA conference abstracts illustrate emerging uses such as explainable recommendations, climate-sensitive early-warning systems, synthetic data, wearables, and AI-assisted surveillance. These materials are useful for identifying questions and competencies, but an abstract is not enough to establish effectiveness, generalizability, safety, or implementation readiness.",
    "When adapting a conference example, retrieve the complete study or implementation documentation when available. Define the local decision, baseline, data provenance, validation design, subgroup analyses, operational thresholds, human-review requirements, and monitoring plan before treating the example as evidence for deployment."
  ]));
})();
