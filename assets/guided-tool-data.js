(function defineGuidedToolPrototypes() {
  const select = (label, options, guidance = "") => ({ label, type: "select", options, guidance });
  const checks = (label, options, guidance = "") => ({ label, type: "checkboxes", options, guidance });
  const text = (label, guidance = "") => ({ label, type: "text", guidance });
  const notes = (label, guidance = "") => ({ label, type: "textarea", guidance });
  const status = ["Not reviewed", "No concern identified", "Concern identified", "Mitigation required", "Needs specialist review"];
  const yesNoUnknown = ["Select one", "Yes", "No", "Unknown", "Not applicable"];

  window.GuidedToolDefinitions = {
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
})();
