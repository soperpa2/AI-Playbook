(function defineReadinessAssessment() {
  const domains = [
    ["Leadership and Governance", ["Leadership has articulated an AI vision aligned with strategic priorities.", "A clear governance structure exists or is planned.", "AI ethics and equity principles have been established.", "Budget authority exists to support AI infrastructure and workforce."]],
    ["Data Infrastructure", ["Data systems are integrated or interoperable.", "Data quality is regularly monitored.", "Cloud or modern analytics infrastructure is available.", "Data governance policies exist for access, privacy, security, and use."]],
    ["Workforce Capacity", ["Staff with data science, analytics, or AI skills are available.", "Training programs build AI literacy across the workforce.", "Job descriptions and career paths support data and AI roles.", "Academic or technical partnerships provide additional capacity."]],
    ["Equity and Community Engagement", ["Equity impact assessment is part of AI planning.", "Community engagement informs design of community-impacting systems.", "Local context and applicable community or Tribal data governance expectations are identified and respected.", "Subgroup performance monitoring is planned before deployment."]],
    ["Partnerships and Collaboration", ["Cross-program collaboration supports AI use cases.", "External partners are identified and governed appropriately.", "Procurement and vendor pathways are understood.", "Roles and responsibilities are documented."]],
    ["Privacy and Security", ["PHI and sensitive data protections are defined.", "Security review occurs before AI tools are used.", "Data use agreements are required for vendors and partners.", "Incident response and escalation processes exist."]],
    ["Policy, Procurement, and Public Accountability", ["AI policy landscape, procurement requirements, public records obligations, and agency restrictions have been reviewed before tools are selected.", "Vendor and procurement reviews include transparency, data rights, model documentation, auditability, accessibility, security, and exit requirements.", "Environmental and resource impacts, including compute, energy, water, sustainability, and environmental justice considerations, are assessed for AI projects.", "Plain-language public notice, human-centered decision rules, and limits on automated decision-making are documented for public-impacting AI uses."]]
  ].map(([name, indicators], index) => ({ id: `d${index}`, name, indicators }));

  const gapRecommendations = {
    "Leadership and Governance": { plays: [1, 3, 12], tools: [1, 2, 12, 46, 17] },
    "Data Infrastructure": { plays: [2, 9, 11, 13], tools: [7, 9, 15, 39, 44] },
    "Workforce Capacity": { plays: [5, 6, 10], tools: [23, 24, 26, 28, 29, 30] },
    "Equity and Community Engagement": { plays: [4, 7, 13], tools: [3, 20, 21, 47] },
    "Partnerships and Collaboration": { plays: [4, 7, 8], tools: [20, 21, 32, 33] },
    "Privacy and Security": { plays: [3, 11, 12], tools: [15, 16, 17] },
    "Policy, Procurement, and Public Accountability": { plays: [1, 3, 7, 8, 11, 12], tools: [4, 5, 6, 19, 32, 34] }
  };

  function interpret(percent) {
    if (percent >= 76) return { level: "Implementation Readiness Stage", action: "Move through governance-approved pilots, deployment, monitoring, and oversight, assuming no critical domain is weak.", plays: [10, 11, 12, 13] };
    if (percent >= 51) return { level: "Pilot Preparation Stage", action: "Complete the gap register, confirm the governance approval pathway, address weak domains, then prioritize governed pilots.", plays: [6, 7, 8, 9] };
    if (percent >= 26) return { level: "Planning and Readiness Stage", action: "Strengthen governance, data, workforce, engagement, and privacy/security before pilots.", plays: [2, 3, 4, 5] };
    return { level: "Early Foundation Stage", action: "Start with learning, vision, governance, readiness gaps, stakeholder engagement, and workforce basics.", plays: [1, 2, 4] };
  }

  window.ReadinessAssessment = { domains, gapRecommendations, interpret, scale: ["None", "Some", "Good", "Excellent"] };
})();
