(function () {
  window.maturityModelData = {
    title: "AI Maturity Model",
    intro: "The maturity model is not a grading system. It helps agencies identify honest current-state capabilities and the next responsible set of plays.",
    graphic: "assets/ai-maturity-model-public-health.png?v=standard-maturity-model",
    alt: "AI maturity model for public health showing five stages from Awareness to Optimization and five capability dimensions: Leadership and Culture, Data Infrastructure, Workforce Capacity, Technology Systems, and Governance.",
    stages: [
      { level: 1, title: "Awareness", focus: "Learning and exploration", activities: "Explore concepts, set interim policy, identify an AI lead, and establish guardrails.", risks: "Informal ungoverned tool use, PHI exposure, and unclear accountability.", plays: [1], tools: [1, 2] },
      { level: 2, title: "Readiness", focus: "Planning and preparation", activities: "Assess readiness, establish governance, engage stakeholders, plan workforce and change management, prioritize use cases, align funding, and design the implementation plan.", risks: "Overcommitting before data, workforce, governance, change, or funding gaps are addressed.", plays: [2, 3, 4, 5, 6, 7, 8, 9], tools: [7, 33, 36, 23, 24, 26, 28, 31, 12] },
      { level: 3, title: "Pilots", focus: "Governed initial development", activities: "Prioritize use cases, execute change management, validate models, and evaluate pilots.", risks: "Pilots proceed without validation, staff adoption support, or scale-decision criteria.", plays: [7, 10, 11], tools: [31, 29, 14, 40, 41, 42] },
      { level: 4, title: "Deployment", focus: "Operational integration", activities: "Deploy into workflows, monitor performance, evaluate outcomes, and audit equity.", risks: "Model drift, automation bias, equity gaps, and insufficient monitoring.", plays: [11, 13], tools: [44, 41, 47, 48] },
      { level: 5, title: "Optimization", focus: "Continuous improvement", activities: "Improve systems, sustain governance, audit compliance, and update policies.", risks: "Policies become stale and documentation falls behind evolving systems.", plays: [12, 13], tools: [45, 46, 17, 18] }
    ],
    hotspots: [
      { className: "stage stage-1", label: "Awareness: learning foundations", canonical: "#/learn/understanding-ai", foundation: "learning.html" },
      { className: "stage stage-2", label: "Readiness: assessment", canonical: "#/assess", foundation: "tool.html?play=2" },
      { className: "stage stage-3", label: "Pilots: prioritize use cases", canonical: "#/plays/7", foundation: "detail.html?play=7" },
      { className: "stage stage-4", label: "Deployment: build and deploy", canonical: "#/plays/11", foundation: "detail.html?play=11" },
      { className: "stage stage-5", label: "Optimization: monitor and improve", canonical: "#/plays/13", foundation: "detail.html?play=13" },
      { className: "dimension dimension-leadership", label: "Leadership and Culture", canonical: "#/plays/1", foundation: "detail.html?play=1" },
      { className: "dimension dimension-data", label: "Data Infrastructure", canonical: "#/toolkit/6", foundation: "tool.html?play=2" },
      { className: "dimension dimension-workforce", label: "Workforce Capacity", canonical: "#/plays/5", foundation: "detail.html?play=5" },
      { className: "dimension dimension-technology", label: "Technology Systems", canonical: "#/toolkit/27", foundation: "tool.html?play=11" },
      { className: "dimension dimension-governance", label: "Governance", canonical: "#/plays/3", foundation: "detail.html?play=3" }
    ]
  };
})();
