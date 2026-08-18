(function defineGuidedToolPrototypes() {
  const select = (label, options, guidance = "") => ({ label, type: "select", options, guidance });
  const checks = (label, options, guidance = "") => ({ label, type: "checkboxes", options, guidance });
  const text = (label, guidance = "") => ({ label, type: "text", guidance });
  const notes = (label, guidance = "") => ({ label, type: "textarea", guidance });
  const status = ["Not reviewed", "No concern identified", "Concern identified", "Mitigation required", "Needs specialist review"];
  const yesNoUnknown = ["Select one", "Yes", "No", "Unknown", "Not applicable"];

  window.GuidedToolDefinitions = {
    7: {
      label: "Guided Play 2 workspace",
      intro: "Use this after the Pathway Assessment. Validate preliminary findings with local evidence, resolve disagreements and unknowns, classify gaps, assign improvement actions, record decisions, and schedule reassessment.",
      sections: [
        ["Validation context", [text("Agency, division, or program"), text("Pathway Assessment date"), text("Validation session date"), text("Facilitator"), text("Executive sponsor or approving authority"), checks("Participating roles", ["Health officer or executive sponsor", "Program director or manager", "IT director or technical lead", "Informatics, epidemiology, data, or evaluation lead", "Agency counsel", "Privacy officer", "Health equity director or designated equity reviewer", "Community engagement director or manager", "Workforce, HR, or training lead", "Finance, grants, or procurement lead", "Other"]) ]],
        ["Finding validation", [select("Assessment domain", ["Select one", "Leadership and governance", "Data infrastructure", "Workforce capacity", "Equity and community engagement", "Partnerships and collaboration", "Privacy and security", "Funding and sustainability", "Technical infrastructure", "Other"]), text("Preliminary score or finding"), select("Validation status", ["Select one", "Supported by evidence", "Partially supported", "Not supported", "Unknown—evidence needed", "Disagreement requires decision", "Not applicable"]), checks("Evidence reviewed", ["Policy or procedure", "System or data documentation", "Inventory or audit record", "Interview or facilitated discussion", "Meeting minutes or decision record", "Training or workforce record", "Budget, grant, or procurement record", "Community or partner input", "Testing or evaluation evidence", "Other"]), notes("Evidence, source, assumptions, disagreements, and unknowns"), notes("Validated finding")]],
        ["Gap and improvement decision", [select("Gap classification", ["Select one", "Blocking", "Parallel", "Monitor", "Already addressed", "Not a gap", "Needs governance decision"]), select("Risk", ["Select one", "Low", "Moderate", "High", "Critical", "Unknown"]), select("Priority", ["Select one", "Low", "Medium", "High", "Urgent", "Not prioritized"]), checks("Readiness areas requiring follow-up", ["Vision or governance", "Policy or legal", "Privacy or security", "Data quality or stewardship", "Technical infrastructure", "Workforce or training", "Equity or accessibility", "Community engagement", "Partnerships", "Funding or sustainability", "Human oversight", "Other"]), notes("Improvement action, required evidence, dependencies, and related plays or tools"), select("Disposition", ["Select one", "Proceed", "Proceed in parallel", "Proceed with conditions", "Pause or delay", "Escalate for decision", "Close as addressed"]) ]],
        ["Action and reassessment plan", [notes("30-day actions"), notes("60-day actions"), notes("90-day actions"), notes("Leadership or governance decisions and approval conditions"), text("Reassessment date"), checks("Reassessment triggers", ["Annual review", "Before a major pilot", "Before scaling", "Leadership or funding change", "Policy or legal change", "Infrastructure or vendor change", "Significant incident or near miss", "New class of AI use", "Material change in assessment evidence", "Other"]) ]]
      ]
    },
    3: {
      label: "Guided prototype",
      intro: "Use the prompts to identify who may benefit, who may carry burdens, what evidence is missing, and what must change before approval.",
      sections: [
        ["Project and community context", [text("AI project or use case"), checks("Populations potentially affected", ["People receiving services", "People represented in agency data", "Communities experiencing health disparities", "People with disabilities", "People with limited English proficiency", "Tribal Nations or Indigenous communities", "Rural communities", "Public health workforce", "Other"]), checks("Perspectives included so far", ["Program staff", "Community members", "Equity staff", "Accessibility or language-access staff", "Tribal representatives", "Privacy or legal staff", "Data or evaluation staff", "No consultation yet"])]],
        ["Equity review", [select("Potential benefit distribution", ["Select one", "Benefits are expected to be broadly shared", "Benefits may favor some groups", "Distribution is unknown", "Insufficient evidence"]), select("Disparate-impact concern", status), checks("Areas to examine", ["Representation in training or reference data", "Subgroup performance", "Access to services or technology", "Language access", "Disability accessibility", "Automation bias", "Historical or structural inequity", "Community trust"]), notes("Evidence and rationale", "Record data, consultation findings, uncertainties, and whose perspective supports the assessment.")]],
        ["Mitigation and decision", [checks("Required safeguards", ["Additional community engagement", "Subgroup testing", "Accessibility review", "Language-access review", "Human review before action", "Appeal or correction pathway", "Data limitations statement", "Ongoing disparity monitoring", "Pause or redesign"]), select("Recommended disposition", ["Select one", "Proceed", "Proceed with conditions", "Revise and reassess", "Escalate for specialist review", "Do not proceed"]), notes("Conditions, owners, and deadlines")]]
      ]
    },
    31: {
      label: "Guided prototype",
      intro: "Score each candidate consistently. A high value score does not override equity, privacy, safety, or governance concerns.",
      sections: [
        ["Use case profile", [text("Use case name"), select("Current governance stage", ["Idea only", "Initial intake", "Under review", "Approved for planning", "Approved pilot", "Already in use"]), checks("Primary public health value", ["Improved timeliness", "Improved quality or consistency", "Reduced administrative burden", "Better targeting or prioritization", "Improved access or communication", "Stronger surveillance or situational awareness", "Cost avoidance", "Other"])]],
        ["Scoring matrix", [select("Public health impact", ["1 — Minimal", "2 — Limited", "3 — Moderate", "4 — High", "5 — Transformative"]), select("Feasibility", ["1 — Major unresolved barriers", "2 — Low", "3 — Moderate", "4 — High", "5 — Ready with existing capacity"]), select("Data readiness", ["1 — Data unavailable or unsuitable", "2 — Major gaps", "3 — Usable with remediation", "4 — Mostly ready", "5 — Ready and governed"]), select("Equity and accessibility", ["1 — Significant unresolved concern", "2 — Material concern", "3 — Manageable with safeguards", "4 — Positive and monitored", "5 — Strong equity benefit"]), select("Risk", ["1 — Critical or unacceptable", "2 — High", "3 — Moderate", "4 — Low", "5 — Minimal"]), select("Sustainability", ["1 — No viable sustainment", "2 — Weak", "3 — Uncertain", "4 — Likely sustainable", "5 — Sustainable and funded"])]],
        ["Prioritization decision", [checks("Required gates before pilot", ["Governance approval", "Privacy review", "Security review", "Legal or policy review", "Equity review", "Community engagement", "Data remediation", "Vendor or procurement review", "Workforce and change plan"]), select("Recommendation", ["Select one", "Priority candidate", "Advance after conditions", "Hold for readiness work", "Do not prioritize"]), notes("Rationale and conditions")]]
      ]
    },
    32: {
      label: "Guided prototype",
      intro: "Use Yes, No, Unknown, or Not applicable. Treat Unknown as an evidence gap—not as a passing response.",
      sections: [
        ["Vendor and solution profile", [text("Vendor and product"), select("Procurement stage", ["Market research", "Request for information", "Solicitation", "Evaluation", "Negotiation", "Contracted", "Renewal"]), checks("Data involved", ["Public information", "Internal operational data", "Personally identifiable information", "Protected health information", "Confidential program data", "Tribal or sovereign data", "No agency data", "Unknown"])]],
        ["Evidence review", [select("Vendor documents model purpose and limitations", yesNoUnknown), select("Agency data are excluded from vendor model training unless expressly approved", yesNoUnknown), select("Data residency, retention, deletion, and return terms are documented", yesNoUnknown), select("Independent security evidence is available", yesNoUnknown), select("Subgroup, bias, and accessibility testing evidence is available", yesNoUnknown), select("Audit rights and incident-notification timelines are contractually defined", yesNoUnknown), select("Subcontractors and external services are disclosed", yesNoUnknown), select("Exit, transition, and data-portability terms are defined", yesNoUnknown)]],
        ["Decision", [checks("Required follow-up", ["Privacy review", "Security review", "Legal review", "Accessibility review", "Equity review", "Reference checks", "Technical proof of concept", "Contract amendment", "Additional documentation"]), select("Vendor recommendation", ["Select one", "Advance", "Advance with conditions", "Hold pending evidence", "Do not select"]), notes("Evidence gaps, contract conditions, and rationale")]]
      ]
    },
    43: {
      label: "Guided prototype",
      intro: "Complete each readiness gate before go-live. Items marked No or Unknown require an owner, resolution, or explicit governance decision.",
      sections: [
        ["Release profile", [text("AI system or release"), select("Deployment scope", ["Controlled test", "Limited pilot", "Single program", "Multi-program", "Agency-wide", "Public-facing"]), select("Consequence level", ["Low", "Moderate", "High", "Critical", "Not yet classified"])]],
        ["Readiness gates", [select("Governance approval is documented", yesNoUnknown), select("Validation thresholds are met", yesNoUnknown), select("Privacy and security reviews are complete", yesNoUnknown), select("Data quality and subgroup performance are acceptable", yesNoUnknown), select("Human review, override, and escalation are operational", yesNoUnknown), select("Required staff training is complete", yesNoUnknown), select("Communications and public notice are ready", yesNoUnknown), select("Support, incident response, monitoring, and rollback are ready", yesNoUnknown)]],
        ["Go-live decision", [checks("Conditions requiring pause or rollback", ["Performance below threshold", "Privacy or security incident", "Unexpected subgroup disparity", "Unsafe or misleading output", "Human-review failure", "Workflow disruption", "Loss of vendor service", "Public trust concern"]), select("Recommendation", ["Select one", "Go", "Conditional go", "Delay", "No-go"]), notes("Unresolved items, owners, conditions, and review date")]]
      ]
    },
    49: {
      label: "Guided prototype",
      intro: "This guided intake helps nontechnical submitters describe the proposed use and routes specialist questions to the appropriate reviewers.",
      sections: [
        ["Intake summary", [text("Use case title"), select("Proposed AI type", ["Unknown", "Predictive or risk model", "Generative AI", "Natural language processing", "Computer vision", "Workflow automation or agent", "Decision support", "Other"]), select("Current status", ["Idea only", "Exploring products", "Vendor discussion", "Prototype", "Pilot", "Already in use"]), checks("Intended users", ["Agency staff", "Leadership", "Epidemiologists or analysts", "Clinical or field staff", "Partners", "Community members", "General public", "Other"])]],
        ["Purpose, workflow, and data", [checks("Proposed activity", ["Draft or summarize content", "Analyze or classify information", "Predict or prioritize", "Route tasks or records", "Translate or improve accessibility", "Support a human decision", "Automate an action", "Other"]), select("Data sensitivity", ["Unknown", "Public", "Internal", "Confidential", "Personally identifiable", "Protected health information", "Highly restricted or sovereign"]), select("Could output influence services, eligibility, enforcement, resource allocation, public messaging, or public health action?", yesNoUnknown), select("Is named human review required before action?", yesNoUnknown), notes("Public health purpose and expected benefit")]],
        ["Initial risk screening", [checks("Potential review triggers", ["Sensitive or identifiable data", "Consequential decision or action", "Potential disparate impact", "Vendor or external cloud processing", "Incorrect output could cause harm", "Public-facing content", "New records or retention obligations", "Use began without governance review"]), checks("Required reviewers", ["Program owner", "Governance", "Privacy", "Security", "Legal or policy", "Equity or civil rights", "Accessibility or language access", "Procurement", "Communications", "Data or model validation"]), select("Recommended triage level", ["Select one", "Level 1 — Low-risk expedited review", "Level 2 — Standard cross-functional review", "Level 3 — Enhanced consequential-use review", "Pause pending more information"]), notes("Rationale, evidence needed, next step, and owner")]]
      ]
    }
  };

  const optionSets = {
    yesNo: ["Select one", "Yes", "No", "Unknown", "Not applicable"],
    status: ["Select one", "Not started", "In progress", "Complete", "Blocked", "Needs follow-up", "Not applicable"],
    decision: ["Select one", "Proceed", "Proceed with conditions", "Revise", "Hold", "Escalate for review", "Do not proceed", "Not applicable"],
    risk: ["Select one", "Low", "Moderate", "High", "Critical", "Unknown", "Not applicable"],
    priority: ["Select one", "Low", "Medium", "High", "Urgent", "Not prioritized", "Not applicable"],
    maturity: ["Select one", "None", "Early or informal", "Defined", "Implemented", "Mature and routinely monitored", "Unknown", "Not applicable"],
    cadence: ["Select one", "One time", "Weekly", "Monthly", "Quarterly", "Semiannually", "Annually", "After a material change", "Event triggered", "Not applicable"],
    roles: ["Executive leadership", "Program leadership", "Program staff", "Governance", "Privacy", "Security or IT", "Legal or policy", "Equity or civil rights", "Accessibility or language access", "Communications", "Procurement or finance", "Data, analytics, or evaluation", "Community or partner representatives"],
    risks: ["Privacy or confidentiality", "Security", "Equity or civil rights", "Accessibility or language access", "Data quality", "Model performance", "Human oversight", "Workflow or usability", "Workforce or change", "Legal or policy", "Procurement or vendor", "Public trust"],
    data: ["Public information", "Internal operational data", "Personally identifiable information", "Protected health information", "Confidential program data", "Highly restricted data", "Tribal or sovereign data", "Vendor data", "No data identified", "Unknown"],
    safeguards: ["Governance approval", "Privacy review", "Security review", "Legal or policy review", "Equity review", "Accessibility or language-access review", "Human review", "Community engagement", "Data validation", "Vendor or procurement review", "Monitoring", "Incident response"],
    metrics: ["Performance", "Reliability", "Data quality", "Equity or subgroup performance", "Accessibility", "Adoption or usage", "Timeliness", "Cost or efficiency", "Public health outcome", "User or community feedback", "Incidents"],
    communications: ["Email", "Staff meeting", "Leadership briefing", "Training", "Office hours", "Website", "Public notice", "Community meeting", "Partner briefing", "Help desk or support channel"],
    resources: ["Staff time", "Training", "Vendor or licensing", "Infrastructure or hosting", "Data preparation", "Privacy, security, or legal review", "Community engagement", "Monitoring and evaluation", "Sustainment", "Contingency"]
  };

  function guidedField(label) {
    const lower = label.toLowerCase();
    if (/\?$/.test(label) || /^(is|are|has|have|does|do|will|could|should)\b/.test(lower)) return select(label, optionSets.yesNo);
    if (/(status|stage|phase|progress)/.test(lower)) return select(label, optionSets.status);
    if (/(decision|recommendation|go\/no-go|continue\/modify|approval outcome|overall rating)/.test(lower)) return select(label, optionSets.decision);
    if (/(risk level|risk rating|consequence level|severity)/.test(lower)) return select(label, optionSets.risk);
    if (/(priority|urgency)/.test(lower)) return select(label, optionSets.priority);
    if (/(maturity|readiness level|literacy level|competency level)/.test(lower)) return select(label, optionSets.maturity);
    if (/(cadence|frequency|review cycle)/.test(lower)) return select(label, optionSets.cadence);
    if (/(roles|members|participants|stakeholders|audiences|reviewers|partners|owners involved)/.test(lower)) return checks(label, optionSets.roles);
    if (/(risks|concerns|barriers|limitations|failure modes|issues)/.test(lower)) return checks(label, optionSets.risks);
    if (/(data sources|data involved|data categories|information types)/.test(lower)) return checks(label, optionSets.data);
    if (/(requirements|controls|safeguards|approvals|required review|review needed)/.test(lower)) return checks(label, optionSets.safeguards);
    if (/(metrics|indicators|measures|evidence collected)/.test(lower)) return checks(label, optionSets.metrics);
    if (/(channels|engagement methods|communication methods|support channels)/.test(lower)) return checks(label, optionSets.communications);
    if (/(costs|resources|funding needs|resource needs)/.test(lower)) return checks(label, optionSets.resources);
    if (/(name|title|date|version|number|owner|lead|period|timeline|deadline|contact|program|agency|system|vendor|product|location|scope)$/.test(lower)) return text(label);
    return notes(label);
  }

  window.GuidedToolFactory = {
    create(tool, blueprint) {
      return {
        label: "Guided review version",
        intro: `Complete Tool ${tool.id} using structured prompts, selectable categories, and evidence notes. Choose Other or add as many custom categories as the local context requires.`,
        sections: blueprint.map(([section, fields]) => [section, fields.map(guidedField)])
      };
    }
  };
})();
