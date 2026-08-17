const view = new URLSearchParams(location.search).get("view") || "maturity";
const pages = {
  cases: {
    eyebrow: "Case Studies",
    title: "Learn from public health implementation experience.",
    lead: "Foundation Edition case materials emphasize transferable decisions, safeguards, implementation lessons, and questions to test locally.",
    cards: [["Start with context", "Compare authority, workforce, data, community, technology, and operational conditions before transferring a practice."], ["Look for decisions", "Focus on why an approach was selected, who participated, and which safeguards shaped implementation."], ["Adapt locally", "Treat examples as learning resources—not proof that the same approach will work in every jurisdiction."]],
    action: ["Review Evidence & Resources", "resources.html"]
  },
  community: {
    eyebrow: "Community",
    title: "Help strengthen responsible public health AI practice.",
    lead: "Connect through structured review, feedback, corrections, and implementation learning while the broader community workspace remains reserved for the organizational edition.",
    cards: [["Review", "Apply to review plays, tools, learning materials, and evidence summaries."], ["Contribute", "Share corrections, missing perspectives, implementation lessons, or resource suggestions."], ["Stay connected", "Join release updates and future public learning opportunities."]],
    action: ["Become a Reviewer", "reviewer.html"]
  },
  contact: {
    eyebrow: "Contact Us",
    title: "Questions, implementation support, and partnership inquiries.",
    lead: "Use the appropriate route for content feedback, corrections, reviewer participation, or organizational consulting support.",
    cards: [["Content feedback", "Suggest a correction or improvement to a play, tool, learning module, or resource."], ["Reviewer participation", "Apply to provide structured practitioner or subject-matter review."], ["Implementation support", "Contact PHI Solutions for readiness, governance, policy, workforce, and implementation support."]],
    action: ["Send Feedback", "feedback.html"]
  },
  news: {
    eyebrow: "In the News",
    title: "Public health AI developments in context.",
    lead: "Use current developments as signals for learning and governance review—not as evidence that a tool or practice is ready for local adoption.",
    cards: [["Check the source", "Distinguish reporting, opinion, vendor claims, policy announcements, and research findings."], ["Assess local relevance", "Ask what changed for your authority, risks, workforce, data, programs, or communities."], ["Update responsibly", "Route material changes through governance, evidence review, and documented implementation decisions."]],
    action: ["Open Resources", "resources.html"]
  }
};

if (view === "maturity") {
  document.title = "AI Maturity Model | Public Health AI Playbook Foundation Edition";
  document.querySelector("#main").innerHTML = window.MaturityModelTemplate.render({ edition: "foundation", assetPrefix: "../" });
} else {
  const page = pages[view] || pages.cases;
  document.title = `${page.eyebrow} | Public Health AI Playbook Foundation Edition`;
  document.querySelector("#main").innerHTML = window.PlaybookTemplates.pageOpen({ title: page.title, lead: page.lead, eyebrow: page.eyebrow }) + `<div class="workflow-grid" style="margin-top:2rem">${page.cards.map(card => `<article class="card"><h2>${card[0]}</h2><p>${card[1]}</p></article>`).join("")}</div><div class="button-row"><a class="btn primary" href="${page.action[1]}">${page.action[0]}</a><a class="btn" href="index.html#top">Return to Start Here</a></div></section>`;
}
