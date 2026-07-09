const phases = [
  { id: "plan", name: "PLAN", range: "Plays 1-7", summary: "Vision, readiness, governance, stakeholders, workforce, change planning, use cases" },
  { id: "build", name: "BUILD", range: "Plays 8-9", summary: "Funding and implementation playbook" },
  { id: "deploy", name: "DEPLOY", range: "Plays 10-11", summary: "Change execution, build, deploy" },
  { id: "govern", name: "GOVERN", range: "Plays 12-13", summary: "Monitor, evaluate, oversight" }
];

const plays = [
  { id: 1, phase: "plan", title: "Vision & Guardrails", output: "AI vision, principles, guardrails, priority areas, unresolved issues, next steps, and governance committee decision", tools: [1,2,3,4,5,6], goal: "Establish a clear strategic vision for how AI will support the agency's public health mission while defining principles that ensure responsible, ethical, and legally compliant use.", matters: "Every AI initiative begins with leadership alignment. Setting guardrails early around equity, human oversight, privacy, and prohibited uses prevents downstream harms and builds institutional trust.", who: ["Executive leadership", "Program leads", "Legal and privacy", "Equity leaders", "IT and data leaders"], questions: ["Which strategic public health problems should AI help address?", "Which uses are prohibited?", "What level of human review is required?"], actions: ["Convene a 60-90 minute leadership session.", "Agree on non-negotiable guardrails for human oversight, equity, privacy, and prohibited uses.", "Draft a 1-2 page AI Vision and Principles document.", "Align principles with NIST AI RMF 1.0.", "Identify executive sponsorship and update annually."] },
  { id: 2, phase: "plan", title: "Readiness Assessment", output: "Readiness profile, 100-point score interpretation, gap register, and prioritized play-and-tool action plan", tools: [3,4,7,8,9,10], goal: "Assess current state across leadership, data infrastructure, workforce, equity, partnerships, privacy, and security so planning reflects organizational reality.", matters: "A frank readiness assessment finds gaps while they are still manageable, before a project discovers midstream that data, skills, infrastructure, or governance are insufficient.", who: ["Leadership", "IT", "Data and analytics", "Programs", "Legal/privacy", "Equity", "Community engagement"], questions: ["Which gaps block pilots?", "Which gaps can be addressed in parallel?", "What constraints shape feasible use cases?"], actions: ["Run a half-day assessment workshop.", "Rate each indicator honestly.", "Identify 5-8 high-priority gaps.", "Assign owners and timelines.", "Brief leadership and the governance sponsors on constraints and next steps."] },
  { id: 3, phase: "plan", title: "Establish AI Governance", output: "AI governance committee or board, responsible AI policy, governance charter, risk-tiered review pathway, intake and approval process, documentation standards, AI system inventory, monitoring and incident response process, and policy update process", tools: [2,3,4,10,11,12,13,14,15,16,17,18,19], goal: "Create the governance structures, policies, decision-making processes, and oversight mechanisms needed to guide responsible AI use before projects begin.", matters: "Governance should not be added after AI tools are already in use. It should be established before use case selection, vendor engagement, pilot approval, or deployment. Public health departments need clear authority, consistent review processes, and documented accountability for AI use. Strong governance helps ensure that AI supports the public health mission while protecting privacy, security, equity, scientific integrity, workforce trust, and community confidence.", who: ["Health officer or executive sponsor", "Executive leadership or designated governance sponsor", "Legal and privacy staff", "IT and cybersecurity staff", "Equity and community engagement staff", "Program owners", "Informatics, epidemiology, data, or analytics staff", "Communications staff", "Procurement or contracting staff, as needed", "External advisors or community representatives, when appropriate", "Governance committee or board members, once appointed"], questions: ["Who has authority to approve, pause, suspend, or retire AI use?", "What types of AI use are allowed, restricted, or prohibited?", "What documentation is required before AI use cases move forward?", "What review is required for privacy, security, equity, data quality, and legal compliance?", "How will AI use cases be classified by risk?", "Who is accountable for each AI-supported workflow or system?", "How will incidents, errors, bias concerns, or harmful outputs be reported and addressed?", "How will policies, standards, and approved-use records be updated over time?"], actions: ["Confirm the governance mandate. Define why AI governance is needed, what decisions it will cover, and how it will support the department's AI vision, principles, and guardrails.", "Establish the governance body. Create or designate a cross-functional AI governance committee or board with clear membership, leadership, authority, and decision rights.", "Adopt responsible AI policy expectations. Define department-wide expectations for transparency, privacy and security, equity, human oversight, safety, legal compliance, scientific integrity, and accountability.", "Create the governance charter. Document the governance body's purpose, scope, membership, meeting cadence, decision process, documentation requirements, and escalation procedures.", "Define the AI review pathway. Establish how proposed AI uses will be submitted, screened, classified by risk, reviewed, approved, paused, or rejected.", "Align governance with existing agency processes. Connect AI oversight with data governance, IT governance, cybersecurity, privacy, legal review, procurement, communications, equity review, program leadership, and quality improvement.", "Set minimum documentation requirements. Define what must be documented for each AI use case, including purpose, owner, users, data involved, risk level, human review process, limitations, approval status, and review schedule.", "Require appropriate review before approval. Ensure that privacy, security, equity, data quality, legal, vendor, and model validation reviews occur when required based on the risk and nature of the AI use case.", "Create an AI system inventory. Maintain a central record of approved AI systems and AI-supported workflows, including owners, purpose, risk level, approval date, monitoring schedule, and review status.", "Establish ongoing oversight. Define how approved AI uses will be monitored, how incidents will be handled, how systems can be paused or retired, and how policies will be updated over time."] },
  { id: 4, phase: "plan", title: "Engage Stakeholders", output: "Stakeholder map, RACI, engagement plan, missing voices analysis, and feedback documentation", tools: [11,19,20,21,22], goal: "Build a structured stakeholder engagement framework for internal and external input throughout planning, implementation, and evaluation.", matters: "Stakeholder and community engagement is an early planning activity, not a late deployment activity. It should begin after the department has a basic readiness picture and governance pathway, but before formal use case selection, playbook design, funding commitments, pilots, procurement, or deployment. AI systems built without genuine community and workforce input often fail in deployment even when they perform well technically.", who: ["Program leads", "Community advisors", "Equity staff", "Tribal partners where applicable", "Communications", "Governance committee"], questions: ["Who is affected by the AI use case?", "What concerns must shape design?", "How will feedback change the project?", "What stakeholder input is required before use cases can be prioritized?"], actions: ["Map stakeholder groups and assign engagement leads.", "Form advisory groups for community-impacting use cases.", "Share plain-language explanations of what AI will and will not do.", "Hold feedback sessions before use case selection and before design is finalized.", "Document what changed based on feedback.", "Route unresolved stakeholder concerns to the AI governance committee before pilots or procurement move forward."] },
  { id: 5, phase: "plan", title: "Workforce Development", output: "Competency framework, training needs assessment, champion network, bridge role plan, role-based training plan, and training pathway", tools: [23,24,25,26,27,28], goal: "Develop the workforce capabilities needed to responsibly adopt generative and agentic AI across public health programs.", matters: "Training alone is not enough. Peer learning networks, champions, office hours, and communities of practice help staff build confidence and solve practical problems.", who: ["HR", "Training leads", "AI champions", "Supervisors", "Program staff", "IT and data staff"], questions: ["What AI literacy is needed by role?", "Where are skill gaps?", "Who will support adoption day to day?"], actions: ["Define role-based AI literacy levels.", "Conduct a training needs assessment.", "Designate AI champions across divisions.", "Create training pathways.", "Assign learning modules by role and set completion standards.", "Establish office hours and communities of practice."] },
  { id: 6, phase: "plan", title: "Plan Change Management", output: "Change management plan, communication materials, barrier inventory, support plan, and escalation pathway", tools: [23,29,30], goal: "Plan for adoption before deployment by identifying affected workflows, staff concerns, communication needs, training requirements, and support structures.", matters: "Change management starts while the project is still being planned. Early planning prevents technically sound AI projects from failing because staff roles, trust, workflow impacts, or communication needs were addressed too late.", who: ["Change leads", "Supervisors", "Communications", "AI champions", "Program staff", "Governance committee"], questions: ["What workflows may change?", "Who needs early communication?", "What concerns or barriers should shape the plan?"], actions: ["Draft a change management plan before pilot launch.", "Identify affected staff groups and workflow impacts.", "Prepare staff communication and FAQ materials.", "Surface resistance, privacy, equity, and usability concerns.", "Define training, support, and feedback channels."] },
  { id: 7, phase: "plan", title: "Prioritize Use Cases", output: "Governance-approved AI use case portfolio", tools: [3,5,6,8,13,20,22,31], goal: "Identify and prioritize AI use cases aligned with public health priorities and readiness, selecting a small number most likely to deliver meaningful impact.", matters: "Disciplined prioritization keeps resources focused and ensures every project is reviewed for equity risk, data feasibility, legal compliance, change readiness, and alignment with the AI vision.", who: ["Program areas", "Governance committee", "Data owners", "Equity staff", "Community advisors", "IT/security", "Change leads"], questions: ["Which use cases are high impact and feasible?", "Which risks require mitigation?", "Which pilots should start first?"], actions: ["Invite program areas to submit candidate use cases.", "Score impact, feasibility, equity, scalability, sustainability, and data availability.", "Apply the Use Case Fit Test.", "Select 1-3 initial pilots.", "Submit selected use cases for governance approval."] },
  { id: 8, phase: "build", title: "Develop a Funding Strategy", output: "Funding portfolio and grant alignment", tools: [5,32,33,34,35], goal: "Build a coordinated multi-year funding strategy that maps approved use cases and implementation needs to funding sources, staffing, change management, procurement, infrastructure, monitoring, evaluation, and sustainment investments.", matters: "AI projects often fail when resources are misaligned: funded for one phase but not the next, approved without dedicated staff, missing change supports, or dependent on missing infrastructure. Funding strategy should shape the playbook before the agency commits to sequencing.", who: ["Finance", "Grants", "Program sponsors", "IT leadership", "Procurement", "Governance committee"], questions: ["Which grants or budgets support each phase?", "What sustainment costs must be covered?", "What contingency plans are needed?"], actions: ["Map each approved or proposed project to potential funding sources.", "Document FTE, contractor, infrastructure, training, evaluation, procurement, and sustainment costs.", "Update DMI, PHIG, and other grant work plans.", "Confirm funding assumptions before playbook sequencing is finalized.", "Review resource allocation quarterly."] },
  { id: 9, phase: "build", title: "Design the Playbook", output: "Governance-approved AI playbook", tools: [35,36,37], goal: "Translate vision, governance, readiness, change planning, funding assumptions, and approved use cases into a sequenced multi-year playbook.", matters: "A playbook prevents isolated pilots and makes shared infrastructure, governance reviews, staffing, funding, change supports, and dependencies visible before implementation starts.", who: ["Project sponsors", "PMO", "Governance committee", "IT", "Data owners", "Finance", "Change leads"], questions: ["What must happen before each pilot?", "Which dependencies are shared?", "Where are governance, funding, and change readiness gates?"], actions: ["Complete a project charter for each approved use case.", "Place projects on the implementation timeline.", "Identify shared dependencies and funding assumptions.", "Present the playbook to governance for approval.", "Publish a one-page playbook summary and update every six months."] },
  { id: 10, phase: "deploy", title: "Execute Change Management", output: "Adoption support, communications, role-based training execution, and training completion tracking", tools: [19,23,25,28,29,30,38], goal: "Execute the change management plan during pilot and deployment by communicating clearly, training staff, supporting adoption, and tracking concerns through governance.", matters: "Deployment is where planned change support becomes real. Staff need timely communication, hands-on support, feedback channels, clear escalation paths, and a visible training tracker as workflows change.", who: ["Change leads", "Supervisors", "Communications", "AI champions", "Pilot users", "Governance committee"], questions: ["Are staff prepared to use the system?", "Which roles have completed the required learning modules?", "What concerns are emerging during deployment?", "How will feedback and errors be reported?"], actions: ["Launch staff communications and FAQs.", "Deliver role-based training and office hours.", "Track completion of required learning modules by role.", "Support change champions with protected time.", "Track staff concerns and barriers.", "Report adoption risks and feedback through governance."] },
  { id: 11, phase: "deploy", title: "Build and Deploy AI Solutions", output: "AI pilot and production deployments", tools: [3,6,8,9,10,14,15,16,32,34,35,36,37,39,40,41,42,43], goal: "Develop, test, pilot, deploy, and scale AI solutions that support governance-approved use cases and comply with governance, equity, change management, and validation requirements.", matters: "Pilots are for learning. Keep them small, time-bounded, and limited in scope. Scaling is not automatic; it requires explicit governance approval and evidence that adoption support is working.", who: ["Product owners", "Data engineers", "Vendors", "Security", "Pilot users", "Evaluation staff", "Governance committee", "Change leads"], questions: ["Has validation been completed?", "What pilot evidence supports scale?", "Are equity safeguards and adoption supports working?"], actions: ["Confirm technical infrastructure and data pipelines.", "Test with synthetic or de-identified data.", "Run pilots for 90-120 days.", "Evaluate using pilot dashboard and scale decision framework.", "Submit scale-up plans to governance before expansion."] },
  { id: 12, phase: "govern", title: "Execute Governance and Oversight", output: "Audits, compliance records, governance docs", tools: [6,13,16,17,18,19,37,44,45,46], goal: "Sustain responsible AI through regular governance reviews, policy maintenance, compliance auditing, incident review, version control, and named accountability for every deployed or retired AI system.", matters: "Governance intensifies after go-live. The agency must continually ask whether each AI system is still doing what it was intended to do, whether documentation and approvals remain current, whether incidents or monitoring findings require action, and whether the system should continue, change, pause, or be retired.", who: ["AI governance committee", "Health officer or executive sponsor", "Operational system owners", "Legal and privacy officers", "Compliance and audit staff", "Security and incident response leads", "Evaluation and equity leads", "Program leadership", "Vendor or partner representatives when applicable"], questions: ["Are governance records complete, current, and stored where they can be audited?", "Have monitoring results, incidents, equity findings, or user feedback triggered a governance decision?", "Do policies, data use agreements, validation records, or system documentation need updating?", "Are compliance obligations being met across privacy, security, procurement, accessibility, and civil rights requirements?", "Should the system continue as approved, be revised, paused, scaled, retired, or replaced?"], actions: ["Hold governance reviews monthly during pilots and quarterly in sustainment, using a standard agenda and decision log.", "Review performance monitoring, equity monitoring, incident reports, user feedback, audit findings, and continuous improvement actions.", "Confirm that each AI system has a named operational owner, current documentation, approved data use agreements, validation records, and escalation contacts.", "Conduct annual compliance audits and targeted reviews after incidents, model changes, vendor changes, or major policy updates.", "Update policies, charters, review procedures, approval conditions, and version-control logs when guidance, technology, risks, or agency priorities change.", "Document governance decisions, required corrective actions, owners, deadlines, and evidence of closure.", "Define sunset criteria and retire or replace AI systems that no longer meet performance, equity, safety, legal, operational, or public trust standards."] },
  { id: 13, phase: "govern", title: "Monitor and Evaluate AI Systems", output: "Performance and equity monitoring reports", tools: [6,22,44,45,47,48], goal: "Assess whether deployed AI systems perform as expected and deliver measurable public health value with continuous attention to equity and adoption.", matters: "Deployment without monitoring is how AI systems cause harm quietly. Monitoring is a core governance function, not an administrative afterthought.", who: ["Operational owners", "Evaluation staff", "Equity staff", "Data scientists", "Governance committee", "Program leadership"], questions: ["Is performance stable?", "Are disparities emerging?", "What improvements or escalation are required?"], actions: ["Monitor reliability monthly and report quarterly.", "Track subgroup performance continuously.", "Conduct hallucination and fabrication audits.", "Evaluate public health outcomes.", "Use a continuous improvement log to track actions."] }
];

const playCardDescriptions = {
  1: "Set the agency's AI vision, responsible AI principles, guardrails, prohibited uses, and early leadership decisions before projects or tools begin shaping the work.",
  2: "Assess readiness across leadership, governance, data, workforce, equity, partnerships, privacy, and security; convert the results into a prioritized play action plan.",
  3: "Create the governance body, responsible AI policy, review pathway, documentation standards, system inventory, and oversight processes needed before AI use cases move forward.",
  4: "Engage internal staff, community partners, affected populations, equity leaders, and external advisors early so stakeholder input shapes use case selection and design.",
  5: "Define the AI literacy, role-based competencies, training pathways, champions, and communities of practice needed for staff to use AI responsibly and confidently.",
  6: "Plan the communications, workflow supports, training, feedback channels, and barrier mitigation needed before pilots or deployment change how staff work.",
  7: "Identify, screen, and prioritize AI use cases based on public health value, feasibility, data readiness, equity risk, governance requirements, and sustainability.",
  8: "Align approved AI priorities with grants, budgets, staffing, procurement, infrastructure, evaluation, and sustainment resources before playbook commitments are finalized.",
  9: "Translate approved use cases, readiness gaps, funding assumptions, governance gates, infrastructure needs, staffing, and dependencies into a sequenced implementation playbook.",
  10: "Execute the change plan during pilot and deployment through staff communications, training, office hours, adoption support, feedback tracking, and escalation.",
  11: "Build, test, validate, pilot, and deploy AI solutions with secure infrastructure, data quality controls, vendor review, equity safeguards, and governance approval.",
  12: "Operate governance after go-live through review meetings, incident response, compliance audits, policy updates, version control, and documented accountability.",
  13: "Monitor performance, equity, reliability, user feedback, incidents, outcomes, and improvement actions so deployed AI systems remain useful, safe, and responsible."
};

function playCardDescription(play) {
  return playCardDescriptions[play.id] || play.output;
}

const tools = [
  [1,"AI Vision & Principles Workshop",[1],"Facilitate leadership alignment on mission, principles, priority problems, and prohibitions.","Workshop","Vision",["Leadership"],"Awareness",false],
  [2,"Responsible AI Policy Template",[1,3],"Create binding commitments on transparency, privacy, equity, human oversight, and legal compliance.","Template","Governance",["Legal","Governance"],"Awareness",true],
  [3,"Equity Impact Assessment Checklist",[1,2,3,7,11],"Evaluate potential disparate impacts and required mitigations.","Checklist","Equity",["Equity","Governance"],"Pilots",true],
  [4,"AI Policy Landscape Scan",[1,2,3],"Document state, local, tribal, territorial, agency, and program-specific laws, policies, public records rules, procurement limits, and IT restrictions that shape AI use.","Worksheet","Legal and policy",["Legal","Privacy","IT","Governance"],"Readiness",true],
  [5,"AI Environmental and Resource Impact Review",[1,7,8],"Assess energy, water, e-waste, data center, procurement, and environmental justice considerations before approving AI use cases or vendors.","Checklist","Sustainability",["Procurement","Equity","Leadership"],"Pilots",true],
  [6,"Human-Centered AI Decision Rule Checklist",[1,7,11,12,13],"Document which decisions AI may support, summarize, prioritize, or draft and which decisions must remain with named human owners.","Checklist","Human oversight",["Governance","Program leads","Evaluation"],"Pilots",true],
  [7,"AI Readiness Self-Assessment",[2],"Assess capacity across leadership, data, workforce, equity, partnerships, privacy, and security.","Assessment","Governance",["Leadership","IT","Equity"],"Readiness",true],
  [8,"AI Project Charter",[2,7,11],"Define project scope, success criteria, data needs, safeguards, timeline, budget, and risks.","Planning","Project management",["Program leads","PMO"],"Readiness",true],
  [9,"Data Quality Assessment Checklist",[2,11],"Assess completeness, timeliness, accuracy, interoperability, and data governance.","Checklist","Data",["Data owners","IT"],"Readiness",true],
  [10,"Tiered Data Classification for AI Use",[2,3,11],"Classify data as public, internal, confidential, or highly restricted and define which AI environments may use each tier.","Worksheet","Data governance",["Data owners","Privacy","Security"],"Readiness",true],
  [11,"AI Advisory Committee Charter",[3,4],"Define advisory committee membership, cadence, responsibilities, and decision flow.","Template","Governance",["Governance","Community engagement"],"Awareness",true],
  [12,"AI Governance Board Charter",[3],"Establish authority, membership, voting, meeting cadence, and oversight responsibilities.","Template","Governance",["Leadership","Governance"],"Awareness",true],
  [13,"AI Use Case Intake, Risk Review, and System Inventory Template",[3,7,12],"Capture proposed AI uses, classify risk, document review status, and maintain the approved AI system inventory.","Template","Governance",["Governance","Program leads"],"Readiness",true],
  [14,"Model Validation & Documentation Standards",[3,11],"Set documentation, validation, testing, and evidence standards before deployment.","Standard","Validation",["Data science","Governance"],"Pilots",true],
  [15,"Data Use Agreement (AI) Template",[3,11],"Document AI-specific data-sharing, privacy, security, and sovereignty requirements.","Template","Data",["Legal","Privacy"],"Pilots",true],
  [16,"Incident Response Checklist",[3,11,12],"Prepare escalation, containment, documentation, and corrective-action steps.","Checklist","Security",["Security","Legal"],"Deployment",true],
  [17,"Compliance Audit Checklist",[3,12],"Audit compliance with policies, legal requirements, documentation, and monitoring obligations.","Checklist","Compliance",["Compliance","Legal"],"Optimization",true],
  [18,"Policy Update & Version Control Log",[3,12],"Track AI governance policy changes, approvals, effective dates, and owners.","Log","Governance",["Governance","Legal"],"Optimization",true],
  [19,"Plain-Language AI Public Notice Template",[3,4,10,12],"Explain what AI is being used, why, what data are involved, what humans decide, known limits, and how people can raise concerns.","Template","Transparency",["Communications","Equity","Governance"],"Deployment",true],
  [20,"Community Engagement Planning",[4,7],"Plan inclusive engagement, feedback loops, accessibility, and community accountability.","Planning","Engagement",["Community engagement","Equity"],"Readiness",false],
  [21,"Stakeholder Mapping & RACI",[4],"Map stakeholders, roles, responsibilities, and engagement owners.","Template","Engagement",["Program leads"],"Readiness",false],
  [22,"Missing Voices Analysis",[4,7,13],"Identify groups whose data, perspectives, language needs, access barriers, or community context may be missing from AI design, validation, or monitoring.","Checklist","Equity",["Equity","Community engagement","Evaluation"],"Pilots",true],
  [23,"Change Management Plan",[5,6,10],"Plan communications, training, workflow changes, adoption support, and deployment execution.","Template","Workforce",["HR","Supervisors","Change leads"],"Pilots",false],
  [24,"AI Workforce Competency Framework",[5],"Define AI literacy, proficient, and practitioner capabilities by role.","Framework","Workforce",["HR","Training"],"Readiness",false],
  [25,"AI Champion Designation & Role Guide",[5,10],"Select and support AI champions who help peers adopt responsible practices.","Guide","Workforce",["Supervisors","Champions"],"Readiness",false],
  [26,"Training Needs Assessment Checklist",[5],"Identify role-based training gaps before designing training pathways.","Checklist","Workforce",["HR","Training"],"Readiness",false],
  [27,"AI Bridge Professional Role Guide",[5],"Define the cross-functional role that translates between program staff, IT, leadership, legal, vendors, community partners, and data teams.","Guide","Workforce",["Leadership","HR","Training"],"Readiness",false],
  [28,"Role-Based Training Plan and Completion Tracker",[5,10],"Assign learning modules by role, set completion standards, track deadlines, verify completion, and identify follow-up support needs.","Tracker","Workforce",["Training","Supervisors","Organization administrators","AI champions"],"Readiness",false],
  [29,"Staff Communication & FAQ Template",[6,10],"Prepare transparent staff communications and answers to expected questions.","Template","Change",["Communications","Supervisors"],"Pilots",false],
  [30,"Resistance & Barrier Identification",[6,10],"Surface operational, cultural, and trust barriers before launch and during deployment.","Worksheet","Change",["Change leads","Staff"],"Pilots",false],
  [31,"Use Case Scoring & Prioritization Matrix",[7],"Score use cases for impact, feasibility, equity, scalability, sustainability, and risk.","Matrix","Use cases",["Governance","Program leads"],"Pilots",true],
  [32,"Vendor Evaluation Checklist",[8,11],"Evaluate vendors for privacy, security, transparency, validation, support, and cost.","Checklist","Procurement",["Procurement","IT"],"Pilots",true],
  [33,"Funding Strategy Checklists",[8],"Align projects with funding sources, grant work plans, sustainment, and contingency plans.","Checklist","Funding",["Finance","Grants"],"Readiness",false],
  [34,"STLT AI Procurement and Vendor Addendum",[8,11],"Add public-sector AI requirements for data residency, audit rights, model training restrictions, cybersecurity, accessibility, public records, exit terms, and subcontractors.","Checklist","Procurement",["Procurement","Legal","IT"],"Pilots",true],
  [35,"AI Total Cost of Ownership and Sustainability Worksheet",[8,9,11],"Estimate pilot, scale, sustainment, staffing, infrastructure, vendor, procurement, training, monitoring, and evaluation costs.","Worksheet","Funding",["Finance","Grants","Procurement","IT"],"Readiness",false],
  [36,"AI Implementation Timeline",[9,11],"Sequence milestones, dependencies, approvals, pilot phases, and scale decisions.","Planning","Playbook",["PMO","IT"],"Readiness",true],
  [37,"Playbook Dependency and Risk Register",[9,11,12],"Track playbook dependencies, governance gates, risks, owners, due dates, mitigation actions, and escalation decisions.","Register","Playbook",["PMO","Governance","IT"],"Readiness",true],
  [38,"Change Management Execution Dashboard",[10],"Track training completion, communication delivery, adoption support, staff feedback, barriers, escalations, and deployment readiness during change execution.","Dashboard","Change",["Change leads","Supervisors","AI champions"],"Deployment",false],
  [39,"Technical Infrastructure Readiness Checklist",[11],"Confirm environments, access controls, integrations, monitoring, and secure deployment paths.","Checklist","Technology",["IT","Security"],"Pilots",true],
  [40,"AI Model Testing & Validation Protocol",[11],"Define test design, performance thresholds, human review, and validation evidence.","Protocol","Validation",["Data science"],"Pilots",true],
  [41,"AI Pilot Evaluation Dashboard",[11],"Track pilot performance, adoption, equity, incidents, and go/no-go evidence.","Dashboard","Evaluation",["Evaluation","Product owners"],"Pilots",true],
  [42,"Pilot-to-Scale Decision Framework",[11],"Support governance decisions on scale, revise, pause, or retire after pilot evaluation.","Framework","Scale",["Governance","Leadership"],"Pilots",true],
  [43,"AI Deployment Readiness and Go-Live Checklist",[11],"Confirm governance approval, validation, security, data readiness, staff training, communications, support, rollback plans, and go-live decision criteria before deployment.","Checklist","Deployment",["Product owners","IT","Governance","Change leads"],"Deployment",true],
  [44,"Performance Monitoring Dashboard",[12,13],"Track reliability, performance, equity, incident trends, and improvement actions.","Dashboard","Monitoring",["Evaluation","Governance"],"Deployment",true],
  [45,"Continuous Improvement Log",[12,13],"Track improvement actions, owners, timelines, evidence, and closure.","Log","Improvement",["Operational owners"],"Optimization",true],
  [46,"AI Governance Review Meeting Template",[12],"Structure governance agendas, decisions, escalations, and action tracking.","Template","Governance",["Governance"],"Optimization",true],
  [47,"Equity & Disparity Impact Monitoring",[13],"Monitor subgroup performance and disparate impacts after deployment.","Dashboard","Equity",["Equity","Evaluation"],"Deployment",true],
  [48,"AI Evaluation & Outcomes Reporting",[13],"Report public health outcomes, operational effects, and lessons learned.","Template","Evaluation",["Evaluation","Leadership"],"Deployment",true]
].map(([id,title,playIds,purpose,type,topic,roles,maturity,governance]) => ({id,title,playIds,purpose,type,topic,roles,maturity,governance}));

const toolFormBlueprints = {
  1: [["Workshop setup", ["Workshop date", "Facilitator", "Participants", "Current AI uses known or suspected"]], ["Shared understanding", ["Public health problems AI might help solve", "Risks the agency must avoid", "Values that should guide AI use"]], ["Outputs", ["Draft AI vision statement", "Responsible AI principles", "Initial guardrails/prohibitions", "Next governance actions"]]],
  2: [["Policy header", ["Policy title", "Policy number", "Effective date", "Owner", "Approving authority", "Review cadence"]], ["Policy scope and requirements", ["Covered AI systems and users", "Permitted uses", "Prohibited uses", "Required approvals before use", "Privacy/security requirements", "Equity and human oversight requirements"]], ["Roles and enforcement", ["Governance committee responsibilities", "Program responsibilities", "IT/security responsibilities", "Incident response requirements", "Policy exceptions and enforcement"]]],
  3: [["Project and community context", ["AI project/use case", "Population groups affected", "Community partners consulted", "Known disparities or access barriers"]], ["Equity review", ["Potential benefits", "Potential harms", "Subgroup performance concerns", "Language/accessibility considerations", "Tribal data sovereignty or local context considerations"]], ["Mitigation plan", ["Required design changes", "Monitoring metrics", "Community feedback plan", "Governance decision or conditions"]]],
  7: [["Assessment setup", ["Agency/division", "Assessment date", "Facilitator", "Participating roles"]], ["Scoring logic", ["Question scale: 0 None, 1 Some, 2 Good, 3 Excellent", "Section score formula: raw section score divided by 12, multiplied by 100", "Total score formula: raw total score divided by 72, multiplied by 100", "Interpretation rule: total score shows the overall readiness stage; section scores determine the next plays"]], ["Readiness domains", ["Leadership and governance 100-point score/rationale", "Data infrastructure 100-point score/rationale", "Workforce capacity 100-point score/rationale", "Equity and community engagement 100-point score/rationale", "Partnerships and collaboration 100-point score/rationale", "Privacy and security 100-point score/rationale"]], ["Gap register", ["Highest priority gaps", "Owners and due dates", "Governance review flags", "Recommended next plays"]]],
  8: [["Project identity", ["Project name", "Program area", "Project sponsor", "Project lead", "Technical lead", "Governance review date"]], ["Problem and scope", ["Problem statement", "Public health goal", "In scope", "Out of scope", "Affected populations", "Data sources"]], ["Delivery plan", ["Success measures", "Risks and mitigations", "Equity considerations", "Partners/vendors", "Milestones", "Decision requested"]]],
  9: [["Data source profile", ["Dataset/system name", "Data owner", "Program context", "Intended AI use", "Data refresh cadence"]], ["Data quality review", ["Completeness", "Timeliness", "Accuracy", "Consistency", "Interoperability", "Representativeness"]], ["Readiness decision", ["Quality gaps", "Bias or missingness concerns", "Privacy/security constraints", "Required remediation", "Go/no-go recommendation"]]],
  11: [["Committee purpose and authority", ["Mission statement", "Decision authority", "Escalation authority", "Policy recommendation authority"]], ["Membership", ["Required roles", "Community/advisory participation", "Chair/co-chair", "Term or rotation", "Quorum"]], ["Operations", ["Meeting cadence", "Decision process", "Documentation requirements", "Conflict of interest approach"]]],
  12: [["Board identity and authority", ["Board name", "Binding authority", "Covered AI activities", "Approval/suspension powers"]], ["Membership and structure", ["Required members", "Chair", "Voting rules", "Quorum", "Conflict of interest process"]], ["Governance operations", ["Review cadence", "Submission requirements", "Decision documentation", "Appeals/escalation process"]]],
  13: [["System documentation card", ["System name", "System version", "Program area/use case", "AI system type", "Data sources", "Vendor or model owner"]], ["Validation standards", ["Performance metrics", "Test population", "Equity/disparity tests", "Human review requirements", "Known limitations"]], ["Approval record", ["Documentation complete?", "Legal/privacy review", "Governance decision", "Conditions before deployment"]]],
  14: [["Agreement header", ["Agreement title", "Agreement number", "Effective date", "Expiration/review date", "Parties"]], ["Data terms", ["Data sources", "Permitted AI uses", "Prohibited uses", "Retention and destruction", "Access controls", "Security requirements"]], ["Oversight", ["Audit rights", "Incident reporting", "Subcontractor restrictions", "Model/data reuse restrictions", "Approval signatures"]]],
  15: [["Engagement overview", ["AI project/use case", "Communities affected", "Engagement lead", "Engagement timeframe"]], ["Engagement plan", ["Stakeholder groups", "Engagement methods", "Accessibility and language needs", "Questions for community input", "How feedback will influence design"]], ["Documentation", ["Feedback received", "Changes made based on feedback", "Unresolved concerns", "Next engagement touchpoint"]]],
  16: [["Stakeholder universe", ["Internal stakeholders", "Community stakeholders", "Partner organizations", "Groups affected by AI decisions or outputs"]], ["RACI mapping", ["Responsible roles", "Accountable decision-maker", "Consulted stakeholders", "Informed stakeholders"]], ["Engagement strategy", ["Influence/interest notes", "Engagement approach", "Timing", "Owner", "Risks if not engaged"]]],
  17: [["Change context", ["AI system or workflow change", "Affected programs/staff", "What will change in daily work", "Expected benefits"]], ["Adoption plan", ["Communication audiences", "Training needs", "AI champions/change leads", "Support channels", "Feedback collection plan"]], ["Resistance and sustainment", ["Anticipated concerns", "Mitigation actions", "Metrics for adoption", "Owner and review cadence"]]],
  18: [["Role inventory", ["Staff groups covered", "Current AI literacy level", "Target AI literacy level", "Priority roles for training"]], ["Competency expectations", ["AI aware competencies", "AI proficient competencies", "AI practitioner competencies", "Supervisor/leader competencies"]], ["Training implications", ["Required training modules", "Champion support needs", "Timeline", "Measures of competency"]]],
  20: [["Champion role design", ["Program areas needing champions", "Champion responsibilities", "What champions are not responsible for", "Time allocation"]], ["Selection and support", ["Selection criteria", "Nomination process", "Training provided", "Community of practice cadence"]], ["Feedback loop", ["Issues champions should surface", "Reporting channel", "Success measures"]]],
  21: [["Assessment profile", ["Assessment period", "Conducted by", "Date completed", "Number of staff surveyed/consulted"]], ["Training needs", ["Staff by AI literacy level", "Current percent meeting target", "Priority skill gaps", "Role-specific training needs"]], ["Training plan", ["Recommended modules", "Priority audiences", "Timeline", "Resource needs", "Evaluation measures"]]],
  23: [["Announcement draft", ["Subject line", "What the AI does", "Why it is being used", "What staff should expect", "What AI will not do"]], ["FAQ", ["Privacy and data protections", "Human review and decision authority", "Training and support", "How to report concerns"]], ["Communication plan", ["Audiences", "Channels", "Timing", "Spokesperson/owner"]]],
  24: [["Concern inventory", ["Concern raised", "Source or role", "Concern type", "Frequency raised", "Leadership response"]], ["Barrier analysis", ["Workforce/job security barriers", "Privacy/data barriers", "Equity/fairness barriers", "Technical/usability barriers", "Organizational/resource barriers"]], ["Response plan", ["Actions to address concerns", "Owner", "Due date", "How resolution will be communicated"]]],
  25: [["Use case submission", ["Use case name", "Submitting program/division", "Problem to solve", "Target users", "Data needed", "Expected public health value"]], ["Scoring matrix", ["Impact score/rationale", "Feasibility score/rationale", "Equity score/rationale", "Risk score/rationale", "Sustainability score/rationale"]], ["Prioritization decision", ["Weighted score", "Rank", "Governance conditions", "Pilot recommendation"]]],
  26: [["Playbook overview", ["Playbook period", "Strategic priorities", "Approved use cases", "Shared dependencies"]], ["Timeline", ["Quarter 1 milestones", "Quarter 2 milestones", "Quarter 3 milestones", "Quarter 4 milestones", "12-36 month playbook items"]], ["Governance and resources", ["Approval gates", "Funding dependencies", "Staffing dependencies", "Risks to timeline", "Next update date"]]],
  29: [["Vendor and solution profile", ["Vendor name", "Product/service", "Use case supported", "Data involved", "Procurement stage"]], ["Evaluation criteria", ["Security and privacy controls", "BAA/FedRAMP or equivalent status", "Transparency and documentation", "Validation evidence", "Equity and bias testing", "Support and exit terms"]], ["Comparison and recommendation", ["Strengths", "Risks", "Contract requirements", "Recommended decision"]]],
  30: [["Funding landscape", ["AI initiative or portfolio", "Estimated pilot cost", "Estimated scale/sustainment cost", "Existing funding sources"]], ["Funding alignment", ["DMI alignment", "PHIG alignment", "Other federal/state/private opportunities", "Allowable activities", "Grant deadlines"]], ["Sustainment plan", ["Staffing plan", "Infrastructure costs", "Procurement costs", "Evaluation costs", "Contingency plan"]]],
  31: [["Incident intake", ["Incident date/time", "AI system", "Reported by", "Incident type", "Who or what was affected"]], ["Immediate response", ["Containment steps taken", "System paused or limited?", "Notifications made", "Privacy/security concerns", "Evidence preserved"]], ["Resolution", ["Root cause", "Corrective actions", "Governance review outcome", "Communication needs", "Closure date"]]],
  36: [["Project readiness profile", ["Project/system name", "Assessment date", "IT lead", "AI program manager"]], ["Infrastructure checklist", ["Cloud/computing readiness", "Integration/API readiness", "Data pipeline readiness", "Backup/recovery readiness"]], ["Security and access", ["Role-based access controls", "Logging/monitoring", "Security review status", "Gaps/actions/timeline"]]],
  32: [["Testing profile", ["System/model name", "Version", "Testing lead", "Testing period", "Deployment environment"]], ["Testing phases", ["Unit/component testing", "Integration testing", "Performance testing", "Equity/subgroup testing", "User acceptance testing"]], ["Validation decision", ["Pass criteria", "Results", "Open defects", "Required remediation", "Approval recommendation"]]],
  33: [["Pilot profile", ["AI system/pilot name", "Program area", "Pilot period", "Report date"]], ["Pilot dashboard", ["Pilot scope planned vs actual", "Staff trained/active users", "Performance results", "Equity results", "User feedback", "Incidents"]], ["Pilot conclusion", ["Benefits observed", "Risks or limitations", "Required changes", "Recommendation for Tool 42"]]],
  39: [["Decision context", ["AI system/pilot name", "Pilot period", "Program area", "Decision review date"]], ["Evidence review", ["Pilot targets vs actual results", "Equity and safety findings", "Operational readiness", "Funding/sustainment readiness"]], ["Scale decision", ["Go / revise / pause / stop recommendation", "Conditions for scale", "Governance decision", "Next review date"]]],
  40: [["Monitoring setup", ["AI system name", "Program area", "Reporting period", "Operational owner", "Governance review date"]], ["Performance dashboard", ["Reliability/performance metrics", "Usage metrics", "Data quality indicators", "Equity monitoring indicators", "Incidents or anomalies"]], ["Action tracking", ["Findings requiring action", "Improvement actions", "Owners and deadlines", "Escalations to governance"]]],
  41: [["Monitoring profile", ["AI system name", "Reporting period", "Prepared by", "Date"]], ["Equity dashboard", ["Subgroups monitored", "Sample sizes", "Performance by subgroup", "Disparity thresholds", "Access or language barriers"]], ["Response plan", ["Triggered concerns", "Corrective actions", "Community/stakeholder communication", "Governance escalation"]]],
  42: [["Report header", ["AI system/program name", "Reporting period", "Report type", "Audience"]], ["Evaluation findings", ["Performance outcomes", "Public health outcomes", "Operational impacts", "Equity impacts", "User/staff feedback"]], ["Recommendations", ["Continue/modify/scale/retire recommendation", "Lessons learned", "Next reporting period actions"]]],
  44: [["Log entry", ["Log ID", "Date", "AI system", "Source", "Issue/opportunity"]], ["Action plan", ["Priority", "Corrective or improvement action", "Owner", "Due date", "Dependencies"]], ["Closure", ["Status", "Evidence of completion", "Verified by", "Date closed", "Lessons learned"]]],
  47: [["Pre-meeting preparation", ["Meeting date", "Board chair", "Quorum status", "Dashboard package distributed", "Equity report distributed", "Incidents for review"]], ["Agenda and decisions", ["Project approvals", "Performance review", "Equity review", "Incident review", "Policy/compliance update"]], ["Meeting record", ["Decisions made", "Conditions or follow-ups", "Owners and deadlines", "Next meeting date"]]],
  48: [["Audit profile", ["Audit period", "Lead auditor", "Date initiated", "Date completed"]], ["Compliance review", ["Governance structure compliance", "Project charter compliance", "Equity impact assessment compliance", "Validation compliance", "Data use agreement compliance", "Community engagement compliance"]], ["Audit summary", ["Compliant count", "Partially compliant count", "Non-compliant count", "Overall rating", "Corrective action plan"]]],
  45: [["Policy register", ["Policy/document name", "Document number", "Current version", "Effective date", "Next review due", "Owner"]], ["Version history", ["Document name", "Version", "Date changed", "Change summary", "Reason for change", "Approved by"]], ["Annual review", ["Policies reviewed", "Updates required", "Retired documents", "Next review cycle", "Governance approval record"]]],
  4: [["Policy landscape", ["Jurisdiction or agency", "State/local/tribal/territorial laws", "Agency IT policies", "Public records requirements", "Procurement restrictions"]], ["Risk implications", ["Commercial AI restrictions", "Confidentiality constraints", "HIPAA/privacy implications", "Political or legislative sensitivities", "Approvals required before use"]], ["Action plan", ["Policies to update", "Responsible owner", "Timeline", "Governance decision needed"]]],
  27: [["Role purpose", ["Bridge professional title", "Program or enterprise scope", "Primary problems this role solves", "Reporting relationship"]], ["Core responsibilities", ["Technical translation", "Program and workflow translation", "Community and equity coordination", "Vendor/procurement support", "Governance documentation support"]], ["Capacity plan", ["Required skills", "Training needed", "Time allocation", "Success measures"]]],
  10: [["Data tier profile", ["Dataset or data category", "Data owner", "Classification tier", "Sensitivity rationale"]], ["Allowable AI environments", ["Public AI tool allowed?", "Enterprise AI tool allowed?", "In-house/RAG tool allowed?", "Vendor-hosted tool allowed?", "Highly restricted data prohibitions"]], ["Controls and approvals", ["Access controls", "Retention/destruction rules", "Legal/privacy approval", "Security approval", "Review cadence"]]],
  22: [["Population and context scan", ["Use case or system", "Groups affected", "Groups represented in available data", "Groups missing or underrepresented"]], ["Missing voices review", ["Language access gaps", "Disability access gaps", "Rural or small-population concerns", "Tribal sovereignty considerations", "Community knowledge not captured in data"]], ["Mitigation and validation", ["Engagement needed", "Data supplementation or limitations", "Subgroup validation plan", "Decision conditions", "Monitoring indicators"]]],
  5: [["AI resource profile", ["Use case or vendor", "Model or service type", "Expected scale of use", "Hosting environment"]], ["Environmental considerations", ["Energy intensity", "Water use or cooling concerns", "E-waste or hardware needs", "Data center location or environmental justice concerns", "Vendor sustainability claims"]], ["Decision record", ["Lower-impact alternatives", "Procurement requirements", "Equity or community concerns", "Approval conditions"]]],
  19: [["Notice basics", ["AI system or workflow", "Public health purpose", "Audience", "Where notice will appear"]], ["Plain-language explanation", ["What the AI does", "What data are involved", "What humans still decide", "Known limitations", "How to request help or raise concerns"]], ["Review and publication", ["Legal/privacy review", "Equity and language access review", "Governance approval", "Publication date", "Next review date"]]],
  34: [["Procurement profile", ["Vendor/product", "Use case supported", "Data involved", "Contract vehicle", "Procurement stage"]], ["STLT requirements", ["Data residency and retention", "No model training on agency data", "Audit rights", "Subcontractor disclosure", "Public records considerations", "Accessibility requirements", "Cybersecurity requirements"]], ["Contract decision", ["Required contract language", "Unresolved risks", "Exit or transition terms", "Recommended decision"]]],
  6: [["Decision context", ["AI system or use case", "Decision or action supported", "Potentially affected populations", "Consequence level"]], ["Human-centered rule", ["AI may summarize/draft/prioritize", "AI may not independently decide", "Named human decision owner", "Required review before action", "Appeal or correction pathway"]], ["Oversight", ["Automation bias safeguards", "Audit trail requirements", "Monitoring metrics", "Governance review cadence"]]],
  35: [["Cost profile", ["AI initiative or portfolio", "Pilot cost estimate", "Scale cost estimate", "Sustainment period", "Cost owner"]], ["Cost categories", ["Staffing and contractor costs", "Vendor and licensing costs", "Infrastructure and hosting costs", "Procurement and legal costs", "Training and change management costs", "Monitoring and evaluation costs"]], ["Sustainability decision", ["Confirmed funding sources", "Funding gaps", "Contingency plan", "Total cost of ownership risk", "Decision or next action"]]],
  37: [["Playbook item", ["Project or dependency", "Related play or use case", "Owner", "Target date", "Current status"]], ["Dependency and risk review", ["Upstream dependency", "Downstream impact", "Governance gate", "Funding dependency", "Infrastructure or staffing dependency", "Risk level"]], ["Mitigation and escalation", ["Mitigation action", "Escalation trigger", "Escalation owner", "Decision needed", "Resolution date"]]],
  38: [["Deployment change profile", ["AI system or workflow", "Deployment phase", "Affected staff groups", "Change lead", "Reporting period"]], ["Execution dashboard", ["Communications delivered", "Training completion", "Office hours/support provided", "Champion activity", "Adoption indicators", "Staff feedback themes"]], ["Escalation and readiness", ["Open barriers", "Issues escalated to governance", "Corrective actions", "Readiness status", "Lessons learned"]]],
  43: [["Go-live profile", ["AI system or release", "Program area", "Go-live date", "Product owner", "Technical owner", "Governance review date"]], ["Readiness checks", ["Governance approval complete", "Validation complete", "Security review complete", "Data readiness confirmed", "Training complete", "Communications complete", "Support plan ready"]], ["Launch decision", ["Rollback or pause plan", "Known risks", "Approval conditions", "Go/no-go recommendation", "Post-launch review date"]]],
  28: [["Training plan profile", ["Training plan name", "Training period", "Training owner", "Organization administrator", "Related play or deployment", "Last updated"]], ["Role-based module assignments", ["Executive leadership required modules", "Governance committee required modules", "Program staff required modules", "Data/analytics staff required modules", "IT/security staff required modules", "Legal/privacy/procurement required modules", "Communications/equity/community engagement required modules"]], ["Completion tracking", ["Role or staff group", "Required completion date", "Completion standard", "Completion status", "Supervisor or administrator verification", "Evidence or notes"]], ["Follow-up and support", ["Staff groups needing additional support", "Office hours or coaching schedule", "Champion or mentor assigned", "Refresher training needs", "Escalation or governance issues"]]]
};

const legacyToolFormBlueprints = { ...toolFormBlueprints };
Object.assign(toolFormBlueprints, {
  11: legacyToolFormBlueprints[11],
  12: legacyToolFormBlueprints[12],
  13: [["Use case intake", ["Use case name", "Submitting program/division", "Business owner", "Intended users", "Public health purpose", "AI functionality requested"]], ["Risk review", ["Data involved", "PHI or sensitive data present?", "Population groups affected", "Privacy/security review required", "Equity review required", "Validation required", "Risk tier"]], ["System inventory record", ["Approval status", "Governance decision date", "Operational owner", "Monitoring cadence", "Review/renewal date", "Retirement or pause conditions"]]],
  14: legacyToolFormBlueprints[13],
  15: legacyToolFormBlueprints[14],
  16: legacyToolFormBlueprints[31],
  17: legacyToolFormBlueprints[48],
  18: legacyToolFormBlueprints[45],
  20: legacyToolFormBlueprints[15],
  21: legacyToolFormBlueprints[16],
  23: legacyToolFormBlueprints[17],
  24: legacyToolFormBlueprints[18],
  25: legacyToolFormBlueprints[20],
  26: legacyToolFormBlueprints[21],
  29: legacyToolFormBlueprints[23],
  30: legacyToolFormBlueprints[24],
  31: legacyToolFormBlueprints[25],
  36: legacyToolFormBlueprints[26],
  32: legacyToolFormBlueprints[29],
  33: legacyToolFormBlueprints[30],
  39: legacyToolFormBlueprints[36],
  40: legacyToolFormBlueprints[32],
  41: legacyToolFormBlueprints[33],
  42: legacyToolFormBlueprints[39],
  44: legacyToolFormBlueprints[40],
  47: legacyToolFormBlueprints[41],
  48: legacyToolFormBlueprints[42],
  45: legacyToolFormBlueprints[44],
  46: legacyToolFormBlueprints[47]
});

const toolOutputOverrides = {
  1: [
    "Draft AI vision statement.",
    "Draft responsible AI principles.",
    "Initial guardrails and boundaries.",
    "List of current known or suspected AI uses.",
    "Initial strategic priority areas.",
    "List of unresolved issues requiring legal, privacy, IT, equity, or leadership review.",
    "Recommended next steps and owners.",
    "Decision on whether to establish or convene an AI governance committee.",
    "Human-centered AI decision rule identifying what AI may support and what humans must decide.",
    "Initial environmental, resource, and environmental justice guardrails for AI use.",
    "Initial public transparency expectations for explaining AI use to communities and partners."
  ],
  2: [
    "Responsible AI policy header, owner, approving authority, effective date, and review cadence.",
    "Defined scope for covered AI systems, users, vendors, and workflows.",
    "Permitted, restricted, and prohibited AI uses.",
    "Required approval pathway before AI use.",
    "Privacy, security, equity, human oversight, transparency, and legal compliance requirements.",
    "Roles and responsibilities for governance, programs, IT/security, legal/privacy, and staff.",
    "Incident response, policy exception, enforcement, and review requirements."
  ],
  3: [
    "Equity impact assessment for a specific AI project or use case.",
    "Description of affected populations, known disparities, access barriers, and consulted partners.",
    "Potential benefits, potential harms, and subgroup performance concerns.",
    "Language access, disability access, local context, and applicable data sovereignty considerations.",
    "Required mitigation actions, monitoring metrics, and community feedback plan.",
    "Governance decision, approval conditions, or required revisions."
  ],
  4: [
    "AI policy landscape scan for the relevant jurisdiction, agency, and program context.",
    "Inventory of applicable laws, policies, public records rules, procurement limits, and IT restrictions.",
    "Commercial AI, confidentiality, HIPAA/privacy, and legislative or political risk implications.",
    "List of required approvals before AI use.",
    "Policy update needs, responsible owners, timelines, and governance decisions."
  ],
  5: [
    "Environmental and resource impact review for the proposed AI use, model, or vendor.",
    "Energy, water, e-waste, hardware, hosting, and data center considerations.",
    "Environmental justice concerns related to procurement, hosting, or scale.",
    "Lower-impact alternatives and vendor sustainability requirements.",
    "Approval conditions or rationale for revising, delaying, or rejecting a resource-intensive AI use."
  ],
  6: [
    "Human-centered AI decision rule for the specific use case or workflow.",
    "Clear statement of what AI may summarize, draft, recommend, prioritize, or flag.",
    "Clear statement of decisions or actions AI may not make independently.",
    "Named human decision owner and required review steps before action.",
    "Appeal, correction, escalation, automation bias, audit trail, and monitoring requirements."
  ],
  7: [
    "Completed AI readiness self-assessment.",
    "100-point total readiness score and domain-level scores.",
    "Readiness stage interpretation and priority weak domains.",
    "Evidence notes, assumptions, and unresolved scoring disagreements.",
    "Gap register with blocking and parallel gaps.",
    "Recommended next plays, supporting tools, owners, due dates, and 30-, 60-, and 90-day action plan.",
    "Leadership or governance briefing summary and reassessment plan."
  ],
  8: [
    "AI project charter for a proposed or approved use case.",
    "Problem statement, public health goal, scope, and out-of-scope boundaries.",
    "Sponsor, project lead, technical lead, affected populations, and data sources.",
    "Success measures, milestones, budget assumptions, risks, safeguards, and equity considerations.",
    "Governance decision request or approval record."
  ],
  9: [
    "Data quality assessment for the dataset or system supporting AI use.",
    "Completeness, timeliness, accuracy, consistency, interoperability, and representativeness review.",
    "Data owner, refresh cadence, intended AI use, and program context documentation.",
    "Quality gaps, bias or missingness concerns, and privacy/security constraints.",
    "Required remediation steps and go/no-go recommendation."
  ],
  10: [
    "Tiered data classification record for AI use.",
    "Data sensitivity rationale and data owner documentation.",
    "Allowed and prohibited AI environments by data tier.",
    "Access controls, retention/destruction rules, and security requirements.",
    "Legal, privacy, and security approvals and review cadence."
  ],
  11: [
    "AI advisory committee charter.",
    "Mission, advisory scope, decision flow, escalation role, and policy recommendation authority.",
    "Membership list, community or advisory participation, chair/co-chair, terms, and quorum.",
    "Meeting cadence, documentation requirements, conflict-of-interest process, and operating rules."
  ],
  12: [
    "AI governance board charter.",
    "Binding authority, covered AI activities, and approval, suspension, or retirement powers.",
    "Required membership, chair, voting rules, quorum, and conflict-of-interest process.",
    "Submission requirements, review cadence, decision documentation, and escalation or appeals process."
  ],
  13: [
    "AI use case intake record.",
    "Risk-tier review for data, privacy, security, equity, validation, affected populations, and intended use.",
    "Risk tier and required review pathway.",
    "Approval status, governance decision date, operational owner, and approval conditions.",
    "AI system inventory record with monitoring cadence, review date, and pause or retirement conditions."
  ],
  14: [
    "Model validation and documentation standards for the AI system.",
    "System documentation card with model, vendor, version, use case, data sources, and owner.",
    "Performance metrics, test population, equity and disparity tests, and human review requirements.",
    "Known limitations, validation evidence, open issues, and approval conditions."
  ],
  15: [
    "AI-specific data use agreement.",
    "Parties, effective dates, data sources, permitted AI uses, and prohibited uses.",
    "Privacy, security, retention, destruction, access control, and incident reporting terms.",
    "Audit rights, subcontractor limits, model/data reuse restrictions, and approval signatures."
  ],
  16: [
    "AI incident response record.",
    "Incident type, affected system, reporter, date/time, affected people or workflows, and severity.",
    "Containment steps, pause or limitation decision, notifications, and evidence preservation.",
    "Root cause, corrective actions, governance review outcome, communication needs, and closure date."
  ],
  17: [
    "AI compliance audit checklist and findings.",
    "Audit profile, scope, period, lead auditor, and completion date.",
    "Compliance review across governance, charter, equity, validation, data use, engagement, and monitoring requirements.",
    "Compliant, partially compliant, and non-compliant findings.",
    "Corrective action plan, owners, deadlines, and evidence required for closure."
  ],
  18: [
    "Policy update and version control log.",
    "Current policy register with owner, effective date, current version, and next review due date.",
    "Version history showing change summary, reason for change, date, and approving authority.",
    "Annual review record, retired documents, required updates, and governance approval record."
  ],
  19: [
    "Plain-language AI public notice.",
    "Public health purpose, audience, and location where the notice will appear.",
    "Explanation of what the AI does, what data are involved, what humans still decide, and known limitations.",
    "Instructions for requesting help, asking questions, or raising concerns.",
    "Legal/privacy, equity, language access, governance review, publication date, and next review date."
  ],
  20: [
    "Community engagement plan for an AI use case or portfolio.",
    "Affected communities, engagement lead, timeframe, and engagement methods.",
    "Accessibility, language access, and participation supports.",
    "Questions for community input and explanation of how feedback will shape design or decisions.",
    "Feedback summary, changes made, unresolved concerns, and next engagement touchpoint."
  ],
  21: [
    "Stakeholder map and RACI matrix.",
    "Internal, community, partner, and affected stakeholder groups.",
    "Responsible, accountable, consulted, and informed roles.",
    "Engagement strategy, timing, owner, influence/interest notes, and risks if stakeholders are not engaged."
  ],
  22: [
    "Missing voices analysis for AI design, validation, or monitoring.",
    "Groups affected by the use case and groups represented or missing in available data.",
    "Language access, disability access, rural, small-population, local context, and applicable sovereignty concerns.",
    "Community knowledge or lived experience not captured in the data.",
    "Engagement, data supplementation, subgroup validation, monitoring indicators, and governance conditions."
  ],
  23: [
    "Change management plan.",
    "Affected staff, workflows, expected benefits, and daily work changes.",
    "Communication audiences, training needs, AI champions, support channels, and feedback collection plan.",
    "Anticipated concerns, mitigation actions, adoption metrics, owners, and review cadence."
  ],
  24: [
    "AI workforce competency framework.",
    "Role inventory and current and target AI literacy levels.",
    "AI-aware, AI-proficient, AI-practitioner, supervisor, and leader competency expectations.",
    "Training implications, champion support needs, timeline, and measures of competency."
  ],
  25: [
    "AI champion role guide.",
    "Champion responsibilities, boundaries, time allocation, and program areas needing support.",
    "Selection criteria, nomination process, training, and community of practice cadence.",
    "Feedback loop, reporting channel, surfaced issues, and success measures."
  ],
  26: [
    "Training needs assessment summary.",
    "Staff groups covered, number of staff consulted, and current AI literacy levels.",
    "Priority skill gaps and role-specific training needs.",
    "Recommended modules, priority audiences, timeline, resource needs, and evaluation measures."
  ],
  27: [
    "AI bridge professional role description.",
    "Role purpose, scope, reporting relationship, and problems the role solves.",
    "Responsibilities for technical translation, workflow translation, community and equity coordination, vendor/procurement support, and governance documentation.",
    "Required skills, training needs, time allocation, and success measures."
  ],
  29: [
    "Staff communication and FAQ materials.",
    "Announcement draft explaining what the AI does, why it is being used, what staff should expect, and what AI will not do.",
    "FAQ on privacy, data protections, human review, decision authority, training, support, and concern reporting.",
    "Communication audiences, channels, timing, spokesperson, and owner."
  ],
  30: [
    "Resistance and barrier inventory.",
    "Concerns raised by staff or stakeholders, source, type, frequency, and leadership response.",
    "Workforce, privacy, equity, technical, usability, organizational, and resource barriers.",
    "Response actions, owners, due dates, and communication plan for resolution."
  ],
  31: [
    "Use case scoring and prioritization matrix.",
    "Use case submission with problem, users, data needed, and expected public health value.",
    "Impact, feasibility, equity, risk, scalability, sustainability, and data readiness scoring.",
    "Weighted score, rank, governance conditions, and pilot recommendation."
  ],
  36: [
    "AI implementation timeline.",
    "Playbook period, strategic priorities, approved use cases, and shared dependencies.",
    "Quarterly milestones and 12-36 month playbook items.",
    "Governance gates, funding dependencies, staffing dependencies, infrastructure dependencies, and risks to timeline.",
    "Playbook owner and next update date."
  ],
  32: [
    "Vendor evaluation record.",
    "Vendor, product, supported use case, data involved, and procurement stage.",
    "Security, privacy, documentation, transparency, validation, equity, support, cost, and exit-term review.",
    "Strengths, risks, required contract terms, and recommended decision."
  ],
  33: [
    "Funding strategy checklist and funding landscape summary.",
    "Estimated pilot, scale, sustainment, staffing, infrastructure, procurement, training, and evaluation costs.",
    "Funding source inventory and alignment with DMI, PHIG, and other relevant opportunities.",
    "Allowable activities, grant deadlines, sustainment plan, and contingency plan."
  ],
  34: [
    "STLT AI procurement and vendor addendum.",
    "Vendor/product profile, supported use case, data involved, contract vehicle, and procurement stage.",
    "Data residency, retention, model training restrictions, audit rights, subcontractor disclosure, public records, accessibility, cybersecurity, and exit terms.",
    "Required contract language, unresolved risks, and recommended procurement decision."
  ],
  39: [
    "Technical infrastructure readiness checklist.",
    "Project/system readiness profile with assessment date, IT lead, and AI program manager.",
    "Cloud/computing, integration/API, data pipeline, backup, recovery, logging, monitoring, and deployment readiness.",
    "Role-based access controls, security review status, gaps, actions, and timeline."
  ],
  40: [
    "AI model testing and validation protocol.",
    "Testing profile with system/model, version, testing lead, testing period, and environment.",
    "Unit, integration, performance, equity/subgroup, safety, and user acceptance testing plan.",
    "Pass criteria, results, open defects, remediation needs, and approval recommendation."
  ],
  41: [
    "AI pilot evaluation dashboard.",
    "Pilot profile, period, program area, and report date.",
    "Pilot scope planned versus actual, staff trained, active users, performance results, equity results, user feedback, and incidents.",
    "Benefits, risks, limitations, required changes, and pilot conclusion."
  ],
  42: [
    "Pilot-to-scale decision framework.",
    "Pilot evidence review, operational readiness, equity and safety findings, and sustainment readiness.",
    "Go, revise, pause, stop, or scale recommendation.",
    "Conditions for scale, governance decision, and next review date."
  ],
  44: [
    "Performance monitoring dashboard.",
    "AI system, program area, reporting period, operational owner, and governance review date.",
    "Reliability, performance, usage, data quality, equity, incident, and anomaly indicators.",
    "Findings requiring action, improvement actions, owners, deadlines, and governance escalations."
  ],
  45: [
    "Continuous improvement log.",
    "Issue or opportunity log with source, date, system, priority, and description.",
    "Corrective or improvement action, owner, due date, and dependencies.",
    "Status, evidence of completion, verifier, closure date, and lessons learned."
  ],
  46: [
    "AI governance review meeting template.",
    "Pre-meeting preparation record, quorum status, and distributed dashboard, equity, and incident materials.",
    "Agenda for approvals, performance review, equity review, incident review, policy updates, and compliance updates.",
    "Decisions made, approval conditions, follow-up actions, owners, deadlines, and next meeting date."
  ],
  47: [
    "Equity and disparity impact monitoring dashboard.",
    "Subgroups monitored, sample sizes, performance by subgroup, and disparity thresholds.",
    "Access, language, geography, disability, local context, and other equity indicators.",
    "Triggered concerns, corrective actions, community or stakeholder communication, and governance escalation."
  ],
  48: [
    "AI evaluation and outcomes report.",
    "Reporting period, report type, audience, and AI system or program name.",
    "Performance outcomes, public health outcomes, operational impacts, equity impacts, and staff/user feedback.",
    "Lessons learned and recommendation to continue, modify, scale, pause, retire, or replace.",
    "Next reporting period actions."
  ],
  28: [
    "Role-based AI training plan.",
    "Learning module assignment matrix for each role or staff group.",
    "Required and optional modules by role, including completion standards and deadlines.",
    "Training owner, supervisor, or organization administrator assigned to verify completion.",
    "Completion status, competency evidence, and follow-up support needs.",
    "Office hours, coaching, AI champion, refresher training, or escalation plan for staff needing additional support."
  ],
  35: [
    "Total cost of ownership and sustainability worksheet.",
    "Pilot, scale, and sustainment cost estimates.",
    "Staffing, contractor, vendor, licensing, hosting, procurement, legal, training, change management, monitoring, and evaluation cost categories.",
    "Confirmed funding sources, funding gaps, contingency plan, and sustainability risk.",
    "Decision or next action for funding strategy and playbook sequencing."
  ],
  37: [
    "Playbook dependency and risk register.",
    "Playbook item, related play or use case, owner, target date, and status.",
    "Upstream and downstream dependencies across governance, funding, infrastructure, staffing, vendors, data, and change management.",
    "Risk level, mitigation action, escalation trigger, escalation owner, and decision needed.",
    "Resolution date and evidence that dependency or risk was addressed."
  ],
  38: [
    "Change management execution dashboard.",
    "Deployment change profile, affected staff groups, change lead, and reporting period.",
    "Communications delivered, training completion, support activity, champion activity, adoption indicators, and staff feedback themes.",
    "Open barriers, governance escalations, corrective actions, readiness status, and lessons learned."
  ],
  43: [
    "AI deployment readiness and go-live checklist.",
    "Go-live profile with system, release, program area, product owner, technical owner, and governance review date.",
    "Readiness checks for governance approval, validation, security, data, training, communications, and support.",
    "Rollback or pause plan, known risks, approval conditions, go/no-go recommendation, and post-launch review date."
  ]
};

const playOutputDetails = {
  1: [
    "Draft AI vision statement.",
    "Draft responsible AI principles.",
    "Initial guardrails and boundaries.",
    "List of current known or suspected AI uses.",
    "Initial strategic priority areas.",
    "List of unresolved issues requiring legal, privacy, IT, equity, or leadership review.",
    "Recommended next steps and owners.",
    "Decision on whether to establish or convene an AI governance committee."
  ],
  2: [
    "Completed AI Readiness Self-Assessment.",
    "Total readiness score on the 100-point scale, with raw score retained for transparency.",
    "Section scores for each readiness domain: leadership and governance, data infrastructure, workforce capacity, equity and community engagement, partnerships and collaboration, and privacy and security.",
    "Evidence notes, assumptions, and disagreements used to support each section score.",
    "Readiness stage interpretation based on the total score.",
    "Priority weak domains that should shape the next steps, even if the total score is high.",
    "Gap register identifying the gap, domain, section score, blocking or parallel status, risk level, owner, timeline, related play, and related tool.",
    "List of blocking gaps that must be addressed before pilots, procurement, deployment, or scaling can move forward.",
    "List of parallel gaps that can be addressed while planning continues.",
    "Recommended 2-4 plays to complete next, based on total score and lowest-scoring domains.",
    "Play prioritization plan showing which plays should be completed first, which can proceed in parallel, and which should wait.",
    "Recommended supporting tools for each prioritized play.",
    "30-, 60-, and 90-day action plan with owners and due dates.",
    "Leadership or governance briefing summary, including constraints, risks, decisions needed, and recommended next steps.",
    "Decision list identifying any current or proposed AI activities that should be paused, delayed, revised, or routed to governance review.",
    "STLT AI policy landscape scan identifying legal, public records, procurement, IT, and agency restrictions.",
    "Tiered data classification summary showing which data may be used in public, enterprise, in-house, vendor, or restricted AI environments.",
    "Reassessment plan, including when the department will repeat the assessment and what changes should trigger reassessment.",
    "Downloadable assessment summary for documentation and governance records."
  ],
  3: [
    "AI governance committee or board.",
    "Responsible AI policy.",
    "Governance charter.",
    "Risk-tiered AI review pathway.",
    "AI use case intake and approval process.",
    "Documentation standards.",
    "AI system inventory.",
    "Tiered data classification rules for AI use.",
    "Plain-language AI public notice process.",
    "STLT procurement and vendor review requirements.",
    "AI-specific incident categories, including hallucinations, bias concerns, unsafe automation, misinformation, privacy exposure, and model drift.",
    "Monitoring and incident response process.",
    "Policy update process."
  ],
  4: [
    "Stakeholder map.",
    "Internal stakeholder list.",
    "External stakeholder list.",
    "RACI or role clarification matrix.",
    "Community and partner engagement plan.",
    "Summary of stakeholder concerns and recommendations.",
    "Equity and trust considerations.",
    "Missing voices analysis identifying underrepresented groups, language access needs, disability access needs, tribal sovereignty concerns, rural context, and other perspectives not captured in available data.",
    "Plain-language explanation plan for communities, partner organizations, and affected populations.",
    "Documentation of how stakeholder input will inform governance, use case prioritization, implementation, monitoring, and evaluation.",
    "Recommendations for ongoing engagement or advisory structures."
  ],
  5: [
    "AI workforce competency framework by role.",
    "Training needs assessment summary.",
    "Role-based AI literacy expectations.",
    "Priority staff groups for training and support.",
    "AI champion roles and selection criteria.",
    "AI bridge professional role description and capacity plan.",
    "Training pathway and delivery plan.",
    "Role-based learning module assignment matrix.",
    "Role-based training plan with required modules, optional modules, deadlines, completion standards, owners, and verification approach.",
    "Training completion and competency tracker.",
    "Community of practice or office-hours plan.",
    "Measures for tracking AI literacy, adoption readiness, and ongoing support needs."
  ],
  6: [
    "Change management plan.",
    "Affected workflow and staff impact summary.",
    "Stakeholder and staff communication plan.",
    "Staff communication and FAQ materials.",
    "Training and support plan for affected users.",
    "Resistance, barrier, and concern inventory.",
    "Mitigation actions with owners and due dates.",
    "Feedback and escalation pathway for concerns raised before deployment."
  ],
  7: [
    "AI use case intake list.",
    "Initial use case descriptions and business/public health rationale.",
    "Use case scoring and prioritization matrix.",
    "Equity, privacy, legal, data, and operational risk flags.",
    "Human-centered decision rule for each prioritized use case.",
    "Missing voices analysis for high-impact or community-facing use cases.",
    "Environmental and resource impact review for compute-intensive, vendor-hosted, or large-scale AI uses.",
    "Data readiness and feasibility notes.",
    "Governance-approved use case portfolio.",
    "Pilot recommendations, sequencing, and conditions.",
    "Deferred or rejected use cases with rationale."
  ],
  8: [
    "Funding strategy for the AI playbook.",
    "Funding source inventory and eligibility notes.",
    "Grant alignment table for approved or proposed AI activities.",
    "Pilot, scale, sustainment, staffing, infrastructure, training, and evaluation cost estimates.",
    "Total cost of ownership and sustainability analysis.",
    "Procurement and vendor cost assumptions.",
    "Sustainment plan beyond pilot funding.",
    "Funding gaps, contingencies, and decision points.",
    "Leadership or governance briefing on resource needs."
  ],
  9: [
    "Governance-approved AI playbook.",
    "Sequenced implementation timeline.",
    "Project charters for approved use cases.",
    "Shared dependencies across data, technology, governance, workforce, funding, and procurement.",
    "Milestones, decision gates, and review points.",
    "Resource, staffing, vendor, funding, and infrastructure assumptions.",
    "Playbook dependency and risk register.",
    "Risk register for playbook delivery.",
    "Playbook update cadence and ownership."
  ],
  10: [
    "Executed staff communication plan.",
    "Final staff FAQ and deployment messages.",
    "Role-based training completion summary.",
    "Learning module completion status by role or staff group.",
    "List of staff groups needing follow-up coaching, office hours, champion support, refresher training, or supervisor verification.",
    "Office hours, support, and change champion activation plan.",
    "Adoption support log.",
    "Change management execution dashboard.",
    "Staff concerns, barriers, and feedback tracker.",
    "Escalation record for issues routed to governance or leadership.",
    "Change adoption measures and lessons learned."
  ],
  11: [
    "AI pilot or deployment plan.",
    "Technical infrastructure readiness checklist.",
    "Data quality and data use documentation.",
    "Vendor evaluation record, where applicable.",
    "STLT AI procurement and vendor addendum, where applicable.",
    "Decision record for whether public, enterprise, in-house, RAG, or vendor-hosted AI architecture is appropriate for the data tier and use case.",
    "Model testing and validation protocol.",
    "Equity and subgroup testing results.",
    "Incident response and escalation plan.",
    "Deployment readiness and go-live checklist.",
    "Pilot evaluation dashboard.",
    "Pilot-to-scale decision recommendation.",
    "Governance decision record for deploy, revise, pause, scale, or retire."
  ],
  12: [
    "Governance review agenda and decision log.",
    "AI system inventory updates.",
    "Incident response records and corrective-action tracking.",
    "Plain-language public notice updates and public concern review records.",
    "Human-centered decision rule compliance review.",
    "Compliance audit checklist and findings.",
    "Policy update and version control log.",
    "Review of data use agreements, validation records, and approval conditions.",
    "Governance decisions to continue, revise, pause, retire, or replace AI systems.",
    "Documented owners, deadlines, and evidence of closure for required actions."
  ],
  13: [
    "Performance monitoring dashboard.",
    "Equity and disparity impact monitoring results.",
    "Reliability, data quality, model drift, and incident trend summaries.",
    "Hallucination, misinformation, automation bias, and unsafe output trend review.",
    "Community complaint, correction, and feedback trend review.",
    "Missing voices and subgroup performance monitoring results.",
    "User feedback and adoption findings.",
    "Outcome evaluation report.",
    "Continuous improvement log.",
    "Recommendations to improve, scale, revise, pause, retire, or replace AI systems.",
    "Monitoring cadence and next review schedule."
  ]
};

function outputsForPlay(play) {
  return playOutputDetails[play.id]
    ? `<ul class="compact-list">${playOutputDetails[play.id].map(item=>`<li>${item}</li>`).join("")}</ul>`
    : `<p>${play.output}</p>`;
}

function outputsForTool(tool, blueprint) {
  if (toolOutputOverrides[tool.id]) return toolOutputOverrides[tool.id];
  return blueprint.flatMap(([section, fields]) => section === "Outputs" ? fields : [`Completed ${section.toLowerCase()}`]);
}

const playGuidanceDetails = {
  1: {
    eyebrow: "Facilitation Resource",
    title: "AI Vision & Principles Workshop Guidance",
    body: "Use this guide to plan and facilitate the internal stakeholder workshop that produces the agency AI vision statement, responsible AI principles, initial guardrails, unresolved issues, and early governance decisions.",
    bullets: ["Convene leadership and cross-functional staff before projects begin.", "Define what AI should and should not be used for.", "Identify legal, privacy, IT, equity, and leadership questions that require follow-up."],
    link: ["Open workshop guidance", "#/play-guides/vision-workshop"]
  },
  2: {
    eyebrow: "Facilitation Resource",
    title: "AI Readiness Assessment Guidance",
    body: "Use this guide to conduct the readiness assessment, interpret total and section scores, create the gap register, classify blocking and parallel gaps, and prioritize the next plays.",
    bullets: ["Use the 100-point score as an overall readiness signal.", "Use section scores to determine what needs attention next.", "Turn results into a play-by-play action plan with owners and timelines."],
    link: ["Open readiness guidance", "#/play-guides/readiness-assessment"]
  },
  3: {
    eyebrow: "Governance Resource",
    title: "AI Governance Development Guidance",
    body: "Use this guide to develop the governance body, charter, responsible AI policy, risk-tiered review pathway, documentation standards, validation requirements, data use expectations, AI system inventory, monitoring cadence, and implementation plan.",
    bullets: ["Establish decision rights before use cases or vendors move forward.", "Document review pathways for privacy, security, equity, validation, and legal review.", "Create a system inventory and ongoing oversight process."],
    link: ["Open governance guidance", "#/play-guides/ai-governance"]
  },
  4: {
    eyebrow: "Engagement Resource",
    title: "AI Stakeholder Engagement Guidance",
    body: "Use this guide to identify internal and external stakeholders, map roles and responsibilities, plan engagement activities, document feedback, close the feedback loop, and connect stakeholder input to governance, use case prioritization, implementation, monitoring, and evaluation.",
    bullets: ["Engage stakeholders before use cases are selected.", "Clarify who is informed, consulted, involved, or represented in governance.", "Document what changed because of stakeholder input."],
    link: ["Open stakeholder engagement guidance", "#/play-guides/stakeholder-engagement"]
  },
  5: {
    eyebrow: "Workforce Guidance",
    title: "Develop role-based AI capacity before adoption",
    body: "Use this play to define the skills, supports, and peer-learning structures staff need before AI becomes part of routine public health work. Workforce development should address AI literacy for all staff, deeper competency for specialized roles, and practical support for supervisors and frontline users.",
    bullets: ["Map roles to AI awareness, proficient user, practitioner, supervisor, and governance competencies.", "Identify training gaps before pilots or procurement create urgent adoption pressure.", "Designate AI champions and create office hours or communities of practice so staff can ask questions and surface concerns."],
    link: ["Open workforce guidance", "#/play-guides/play-5"]
  },
  6: {
    eyebrow: "Change Planning Guidance",
    title: "Plan adoption before deployment changes work",
    body: "Use this play to prepare for the human and operational side of AI implementation. Change management planning should happen while use cases are still being shaped, so workflow impacts, staff concerns, training needs, communication risks, and support requirements can influence design.",
    bullets: ["Identify who will experience changed work, changed decisions, or changed accountability.", "Prepare communications and FAQs before rumors or confusion fill the gap.", "Track barriers and resistance as implementation risks that need owners, mitigation actions, and governance escalation when needed."],
    link: ["Open change planning guidance", "#/play-guides/play-6"]
  },
  7: {
    eyebrow: "Use Case Guidance",
    title: "Prioritize use cases through governance, equity, and feasibility review",
    body: "Use this play to move from a long list of possible AI ideas to a smaller, governance-approved portfolio. Prioritization should consider public health value, readiness, data feasibility, equity impact, operational complexity, legal/privacy risk, workforce impact, sustainability, and stakeholder acceptability.",
    bullets: ["Require a clear problem statement and public health purpose for every proposed use case.", "Score value, feasibility, risk, equity, and sustainability before pilots are selected.", "Document why some use cases move forward, wait, change scope, or are rejected."],
    link: ["Open use case guidance", "#/play-guides/play-7"]
  },
  8: {
    eyebrow: "Funding Guidance",
    title: "Align AI priorities with funding and sustainment before the playbook is finalized",
    body: "Use this play to make sure AI work is not approved without resources for the full lifecycle. Funding strategy should cover pilot development, secure infrastructure, staffing, training, governance, vendor costs, monitoring, evaluation, scale, and sustainment before the agency commits to a playbook sequence.",
    bullets: ["Map approved and proposed activities to allowable funding sources and grant timelines.", "Estimate costs beyond the pilot period, including operations and maintenance.", "Identify funding gaps and contingency decisions before projects become dependent on temporary resources."],
    link: ["Open funding guidance", "#/play-guides/play-8"]
  },
  9: {
    eyebrow: "Playbook Guidance",
    title: "Turn resourced use cases into a sequenced implementation playbook",
    body: "Use this play to connect approved use cases and funding assumptions to timelines, dependencies, governance gates, staffing, infrastructure, procurement, training, change support, and evaluation. The playbook should prevent isolated pilots by showing what needs to happen before each project can safely move forward.",
    bullets: ["Sequence work by dependency, readiness, and resourcing, not enthusiasm alone.", "Make governance reviews, readiness gates, funding assumptions, and change supports visible in the timeline.", "Update the playbook regularly as funding, staffing, technology, and risk conditions change."],
    link: ["Open playbook guidance", "#/play-guides/play-9"]
  },
  10: {
    eyebrow: "Deployment Change Guidance",
    title: "Execute change support during pilot and deployment",
    body: "This play turns the change management plan into day-to-day deployment support. It should document whether staff are prepared, whether training is complete, what barriers are emerging, which concerns require escalation, and what evidence should be reported back to governance before the AI-supported workflow expands.",
    bullets: ["Deliver role-specific training close to actual use.", "Track adoption barriers, staff concerns, and workflow problems as deployment evidence.", "Report unresolved issues through governance so deployment decisions reflect real-world use."],
    link: ["Open deployment change guidance", "#/play-guides/play-10"]
  },
  11: {
    eyebrow: "Build and Deploy Guidance",
    title: "Build, validate, pilot, and deploy with explicit governance approval",
    body: "Use this play to develop and deploy AI systems only after governance, data, validation, privacy, security, equity, workforce, and change-management requirements are met. Pilots should be small, time-bounded, reviewed, and treated as learning activities rather than automatic paths to scale.",
    bullets: ["Confirm infrastructure, data quality, data use terms, vendor requirements, and security controls before testing.", "Validate performance, limitations, equity impacts, and human review processes before operational use.", "Use pilot evidence to decide whether to scale, revise, pause, or retire."],
    link: ["Open build and deploy guidance", "#/play-guides/play-11"]
  },
  12: {
    eyebrow: "Oversight Guidance",
    title: "Sustain governance after AI systems go live",
    body: "Use this play to keep governance active after deployment. Oversight should review incidents, monitoring results, policy updates, audit findings, data use agreements, validation records, approval conditions, and whether each system should continue, change, pause, retire, or be replaced.",
    bullets: ["Keep governance records current and auditable.", "Review incidents, monitoring findings, and user feedback on a defined cadence.", "Document decisions, required corrective actions, owners, deadlines, and evidence of closure."],
    link: ["Open oversight guidance", "#/play-guides/play-12"]
  },
  13: {
    eyebrow: "Monitoring Guidance",
    title: "Evaluate whether AI systems remain useful, fair, safe, and reliable",
    body: "Use this play to monitor deployed AI systems for performance, reliability, equity, model drift, user adoption, incidents, unintended consequences, and public health value. Monitoring should feed governance decisions and continuous improvement, not sit in a separate reporting process.",
    bullets: ["Track performance and equity indicators over time, including subgroup results where relevant.", "Use dashboards, outcome reports, and improvement logs to identify action needed.", "Escalate findings that require system changes, policy updates, retraining, additional safeguards, pause, or retirement."],
    link: ["Open monitoring guidance", "#/play-guides/play-13"]
  }
};

function guidanceForPlay(play) {
  const guidance = playGuidanceDetails[play.id];
  if (!guidance) return "";
  return `<section class="content-section guidance-section">
    <p class="eyebrow">${guidance.eyebrow}</p>
    <h2>${guidance.title}</h2>
    <p>${guidance.body}</p>
    <ul>${guidance.bullets.map(item=>`<li>${item}</li>`).join("")}</ul>
    ${guidance.link ? `<a class="btn primary" href="${guidance.link[1]}">${guidance.link[0]}</a>` : ""}
  </section>`;
}

const playGuideDeepDive = {
  5: {
    purpose: "Build the role-based AI literacy, confidence, and support structures staff need before AI tools become part of routine public health work.",
    timing: "Complete this play after readiness gaps are visible and before staff are asked to use AI-supported workflows in pilots, procurement reviews, public communication, analytics, or operational decision support.",
    implementationTips: [
      "Start by identifying which staff groups will interact with AI directly, which groups will supervise AI-supported work, and which groups will review or approve AI use. A communications specialist using AI to draft public messages needs different preparation than an epidemiologist reviewing AI-generated surveillance summaries, a program manager approving workflow changes, or a governance member reviewing risk.",
      "Use the readiness assessment and stakeholder engagement findings to identify workforce gaps. Look for gaps in AI literacy, data interpretation, privacy awareness, equity review, vendor evaluation, prompt use, documentation, and incident reporting. Workforce planning should also identify where staff may feel uncertain, threatened, or unsupported.",
      "Use the AI Workforce Competency Framework to define expectations by role. At minimum, all staff should understand what AI is, what it can and cannot do, what data may not be entered into AI tools, when human review is required, and how to report concerns. Staff with higher-risk responsibilities need deeper training on validation, bias, public communication, procurement, governance, and monitoring.",
      "Use the Role-Based Training Plan and Completion Tracker to translate expectations into assigned learning modules, deadlines, owners, and completion evidence. This is especially important for organization accounts because administrators need a practical way to assign modules by role and monitor readiness before pilots or deployment.",
      "Use the AI Champion Designation and Role Guide to identify staff who can support peers, surface implementation barriers, and connect frontline experience back to governance. Champions should not replace formal governance, but they can make adoption safer by helping staff ask questions early.",
      "Use the AI Bridge Professional Role Guide when the department needs someone to translate across program needs, legal and privacy requirements, IT constraints, vendor language, data limitations, procurement expectations, and public health goals."
    ],
    decisionChecks: [
      "Which roles can safely use approved AI tools now, and which roles need more preparation?",
      "Which AI uses require specialized review by data, legal, privacy, IT, equity, or communications staff?",
      "Are supervisors prepared to answer staff questions about accountability, review expectations, and acceptable use?",
      "What evidence will show that staff are ready for the next play or pilot?"
    ],
    pitfalls: [
      "Treating AI training as a one-time webinar.",
      "Training only technical staff while frontline and program staff are expected to change workflows.",
      "Teaching prompt tips without covering privacy, bias, hallucination, human review, and documentation.",
      "Launching a pilot before staff know how to report concerns or request help."
    ]
  },
  6: {
    purpose: "Prepare the organization for AI-related workflow change before deployment decisions are locked in.",
    timing: "Begin change management planning while use cases, playbook decisions, staffing needs, and governance conditions are still being shaped.",
    implementationTips: [
      "Begin with a workflow-level change analysis. Identify which tasks, handoffs, documents, approvals, dashboards, public interactions, and decisions may change if the AI use case moves forward. Do not describe the change only as a technology implementation; describe how daily work will feel different for staff and supervisors.",
      "Use the Change Management Plan to document affected roles, likely concerns, communication needs, training needs, support needs, and escalation pathways. The plan should be created while the workflow can still be adjusted, not after the vendor, pilot design, or timeline is already fixed.",
      "Use the Resistance and Barrier Identification tool to surface specific concerns about workload, job security, surveillance, accuracy, trust, equity, privacy, community perception, and usability. Treat these concerns as implementation evidence. Some concerns may be resolved through communication; others may require redesign, governance review, or a decision to pause.",
      "Use the Staff Communication and FAQ Template to prepare messages that answer practical questions: what is changing, why it is changing, what is not changing, what humans still decide, what staff should do if something looks wrong, and where staff can get help. Link communications to CDC CERC and plain-language principles so messages are concrete and trustworthy.",
      "Build change milestones into the playbook before deployment begins. Milestones should include communication release dates, supervisor briefings, training deadlines, office hours, feedback review points, and governance checkpoints. The organization hub workplan should make those milestones visible and assignable.",
      "Define what evidence will show that the organization is ready for deployment. Evidence may include training completion, supervisor readiness, unresolved barrier counts, workflow testing results, communication completion, and governance approval of remaining risks."
    ],
    decisionChecks: [
      "Who is most affected by the proposed AI-supported workflow?",
      "What new tasks, review steps, or documentation responsibilities will staff have?",
      "What concerns must be resolved before the pilot or procurement can proceed?",
      "How will change readiness be reported to governance?"
    ],
    pitfalls: [
      "Waiting until deployment to explain why AI is being introduced.",
      "Assuming efficiency benefits are obvious to affected staff.",
      "Creating communications that describe the technology but not the workflow impact.",
      "Failing to give staff a trusted channel to raise concerns."
    ]
  },
  7: {
    purpose: "Select AI use cases that are mission-aligned, feasible, governable, equitable, and worth the public health investment.",
    timing: "Use this play after vision, readiness, governance, stakeholder engagement, workforce planning, and change planning have created enough information to compare proposed AI uses responsibly.",
    implementationTips: [
      "Require every proposed use case to begin with a public health problem statement. A strong problem statement names the affected population or workflow, the current limitation, why the limitation matters, and what improvement would be meaningful. Avoid starting with a model, vendor, or tool and then searching for a problem to fit it.",
      "Use the Use Case Scoring Matrix to compare public health value, feasibility, data readiness, equity impact, privacy and legal risk, security, workforce impact, sustainability, and stakeholder acceptability. The scoring process should help the governance body understand tradeoffs, not create a false sense of mathematical certainty.",
      "Apply the Equity Impact Assessment Checklist, Missing Voices Analysis, Human-Centered AI Decision Rule Checklist, and Environmental and Resource Impact Review before ranking use cases. These tools help identify whether the apparent efficiency gain could create disparate impacts, invisible burdens, over-automation, or resource costs that should change the priority decision.",
      "Separate low-risk internal productivity uses from consequential uses that affect services, surveillance, resource allocation, public communication, individual outcomes, community outcomes, or partner obligations. Consequential uses should move through more formal governance review before vendor engagement, procurement, or pilot approval.",
      "Document why each use case is approved, deferred, revised, or rejected. The record should include conditions for moving forward, unresolved questions, required tools, assigned owners, and whether additional stakeholder engagement, data readiness work, or funding review is required.",
      "Use the Resources page to ground use case review in NIST AI RMF, HHS Civil Rights and AI, fairness literature, and ASPPH guidance on human-centered AI, public transparency, missing voices analysis, and systems-level risk."
    ],
    decisionChecks: [
      "Does the use case solve a clearly defined public health problem?",
      "Is there enough data quality, workflow clarity, and governance capacity to move forward?",
      "Could the use case create disparate impacts or reduce public trust?",
      "What conditions must be met before the use case becomes a pilot?"
    ],
    pitfalls: [
      "Selecting use cases because a vendor or tool is available.",
      "Overlooking low-readiness domains that could block implementation later.",
      "Treating equity, privacy, and security review as yes/no checks rather than design requirements.",
      "Approving too many pilots for the agency's actual capacity."
    ]
  },
  8: {
    purpose: "Identify funding sources, cost assumptions, procurement implications, and sustainment strategies before the implementation playbook is finalized.",
    timing: "Complete this play after use cases have been prioritized and before the agency commits to pilots, procurement, staffing, vendor services, technology changes, or playbook sequencing that requires ongoing resources.",
    implementationTips: [
      "Start with the full lifecycle, not the pilot budget. Estimate planning time, governance review, staff participation, data preparation, infrastructure, cybersecurity, licensing, vendor support, procurement, training, change management, validation, monitoring, evaluation, public communication, maintenance, and eventual retirement or replacement.",
      "Use the Funding Opportunity Crosswalk to map each proposed activity to possible allowable funding sources. Data modernization, workforce development, infrastructure, preparedness, health equity, environmental health, and program-specific grants may support different parts of the work, but not every source will support every cost.",
      "Use the Budget and Sustainability Planning Worksheet to distinguish one-time costs from recurring costs. A pilot may be affordable because staff absorb the work informally, but a production system may require formal support, ongoing licensing, monitoring, retraining, and governance time.",
      "Use the Environmental and Resource Impact Review when compute, hosting, data storage, vendor infrastructure, or data center impacts may create cost, sustainability, or environmental justice considerations. Those issues should be visible before the playbook is finalized.",
      "Create a funding gap register that names each unfunded requirement, the decision needed, the owner, the deadline, and the consequence if funding is not secured. This prevents the department from approving use cases that depend on unfunded infrastructure, staffing, or sustainment.",
      "Prepare a leadership and governance briefing that separates pilot affordability from long-term sustainability. The briefing should identify which activities can begin now, which require conditional approval, and which should wait until funding or sustainment is clearer."
    ],
    decisionChecks: [
      "Can the agency fund the full lifecycle, not just the pilot?",
      "Which funding sources align with the playbook's public health purpose?",
      "What costs are missing from current estimates?",
      "What work should not begin until sustainment is clearer?"
    ],
    pitfalls: [
      "Using pilot funds to create systems the agency cannot sustain.",
      "Underestimating staff, governance, monitoring, validation, and support costs.",
      "Assuming AI tools reduce workload before workflow evidence exists.",
      "Waiting until grant deadlines to define scope and budget."
    ]
  },
  9: {
    purpose: "Convert approved and resourced AI use cases into a sequenced playbook with dependencies, milestones, decision gates, owners, and resource assumptions.",
    timing: "Develop the playbook after use cases have been prioritized and funding assumptions are clear, and before build, deployment, or scale activities begin in earnest.",
    implementationTips: [
      "Use the AI Implementation Timeline to convert approved use cases into sequenced work. The timeline should show dependencies, owners, governance gates, funding assumptions, procurement steps, data readiness activities, workforce milestones, change management milestones, validation tasks, and monitoring preparation.",
      "Sequence work by dependency and risk rather than enthusiasm. A project with strong leadership support may still need to wait if data access, privacy review, stakeholder engagement, procurement terms, or staff training are not ready. Conversely, some foundational work may serve several use cases and should be scheduled early.",
      "Use the AI Bridge Professional Role Guide to assign someone to translate between program goals, technical dependencies, governance requirements, procurement language, and implementation timing. Without that translation function, playbook risks often stay hidden until late in the project.",
      "Create decision gates for moving from concept to pilot, pilot to deployment, and deployment to scale. Each gate should name the evidence required, the approving body, the documents or tools that must be complete, and the conditions that would trigger pause, redesign, or retirement.",
      "Make shared dependencies visible across use cases. Shared dependencies may include data pipelines, cloud environments, vendor security review, public communication review, legal analysis, monitoring dashboards, training modules, or funding deadlines.",
      "Review the playbook regularly with governance and leadership. The playbook should change when staffing, funding, vendor availability, data quality, policy requirements, or risk conditions change. A playbook that cannot change will quickly become a presentation, not a management tool."
    ],
    decisionChecks: [
      "Which dependencies must be completed before each use case can safely move forward?",
      "Which projects can proceed in parallel, and which must wait?",
      "What governance decisions are required at each stage?",
      "What playbook assumptions should trigger a pause or revision?"
    ],
    pitfalls: [
      "Listing projects without showing prerequisites or decision gates.",
      "Treating pilots as isolated experiments instead of part of an agency implementation system.",
      "Ignoring maintenance, monitoring, training, and oversight work after launch.",
      "Letting timelines be driven by vendor availability rather than public health readiness."
    ]
  },
  10: {
    purpose: "Activate change support while AI-supported workflows are piloted or deployed.",
    timing: "Use this play when staff are preparing to use, test, support, supervise, or respond to an AI-supported workflow in real operational conditions.",
    implementationTips: [
      "Use the Change Management Plan as the operational checklist during pilot and deployment. Confirm that communication, training, supervisor support, office hours, feedback collection, escalation routes, and adoption monitoring are active rather than still planned.",
      "Use the Role-Based Training Plan and Completion Tracker to verify that affected staff completed the required learning modules before they are expected to use the AI-supported workflow. Training should happen close enough to actual use that staff can remember the steps, limitations, and escalation expectations.",
      "Use the Staff Communication and FAQ Template to publish practical guidance for staff and supervisors. The FAQ should explain the purpose of the AI-supported workflow, what staff must review, what the tool cannot do, what data safeguards apply, what to do when output seems wrong, and where to get help.",
      "Use the Resistance and Barrier Identification tool during deployment, not only during planning. Capture workarounds, confusion, workload changes, distrust, usability problems, privacy concerns, equity concerns, and supervisor capacity issues. Treat those findings as evidence for governance, not as complaints to be managed away.",
      "Use the Plain-Language Public Notice Template if deployment affects public-facing services, communications, eligibility, outreach, surveillance, or resource allocation. Public-facing deployment should not rely only on internal staff messaging.",
      "Create a feedback-to-decision loop. Unresolved barriers, safety concerns, incidents, or evidence of poor adoption should be routed to governance with a recommendation to continue, revise, pause, narrow scope, add supports, or delay expansion."
    ],
    decisionChecks: [
      "Are staff trained on the exact workflow they will use?",
      "Do supervisors know how to support staff and escalate concerns?",
      "What feedback indicates the workflow should be changed before wider deployment?",
      "What adoption measures should be reviewed by governance?"
    ],
    pitfalls: [
      "Equating training completion with readiness.",
      "Ignoring informal workarounds that show the workflow is not usable.",
      "Failing to distinguish staff discomfort with change from valid safety, equity, privacy, or workload concerns.",
      "Continuing deployment without a feedback-to-decision loop."
    ]
  },
  11: {
    purpose: "Build, validate, pilot, and deploy AI solutions only when governance, data, security, equity, workforce, and change requirements are ready.",
    timing: "Use this play after an AI use case is approved, resourced, supported by change planning, and ready for controlled development or pilot testing.",
    implementationTips: [
      "Before development begins, confirm that governance approval covers the actual data, workflow, users, vendor, hosting environment, and decision context. If any of those elements change, the use case may need additional review before moving forward.",
      "Use Tiered Data Classification to confirm what data can be used, where it can be processed, who can access it, whether vendor access is allowed, whether a business associate agreement or data use agreement is required, and whether a restricted environment is needed.",
      "Use the Human-Centered AI Decision Rule Checklist to define human review, override, escalation, accountability, and limits on automation. The tool should make clear what the AI may support and what a human must decide.",
      "Use the Procurement and Vendor Addendum for vendor-supported builds so documentation, model validation, privacy, security, accessibility, support, audit, data rights, and exit requirements are enforceable rather than aspirational.",
      "Use the Model Testing and Validation Protocol before deployment to define accuracy, reliability, subgroup performance, limitations, unacceptable failure modes, and human review requirements. Vendor demonstrations and general benchmarks are not enough for public health deployment.",
      "Keep pilots small, time-bounded, documented, and governed. Use the pilot dashboard, user feedback, incident logs, and validation results to decide whether to revise, scale, pause, retire, or replace the system."
    ],
    decisionChecks: [
      "What evidence proves the solution is ready for pilot, deployment, or scale?",
      "Are human review, escalation, and incident response processes operational?",
      "Have privacy, security, data quality, equity, and vendor issues been resolved or accepted by governance?",
      "What conditions require pausing or retiring the system?"
    ],
    pitfalls: [
      "Treating vendor demonstrations as validation.",
      "Skipping subgroup testing or equity review because overall performance looks acceptable.",
      "Moving from pilot to scale without a documented governance decision.",
      "Deploying before support, monitoring, and incident response are ready."
    ]
  },
  12: {
    purpose: "Execute governance and oversight after AI systems are approved, piloted, deployed, or placed into ongoing use.",
    timing: "Use this play once AI systems or AI-supported workflows require recurring review, policy updates, incident review, audit, inventory maintenance, or lifecycle decisions.",
    implementationTips: [
      "Use the AI system inventory as the central record of approved, piloted, deployed, paused, retired, and rejected AI uses. Each entry should identify the owner, purpose, data involved, risk level, approval status, monitoring cadence, review dates, approval conditions, and lifecycle status.",
      "Schedule recurring governance reviews that examine incidents, audit findings, monitoring results, validation records, data use agreements, public notices, user feedback, equity findings, policy changes, and vendor performance. Oversight should be a standing management process, not an annual compliance exercise.",
      "Use the Incident Response Checklist to route unsafe outputs, privacy events, bias concerns, technical failures, or unexpected harms through a documented response process. The process should identify who can pause use, who must be notified, what evidence is preserved, and how corrective action is tracked.",
      "Use the Compliance Audit Checklist to periodically confirm that legal, privacy, security, procurement, accessibility, civil rights, documentation, and governance requirements are being met. Audit results should produce decisions and corrective actions, not just a completed checklist.",
      "Use the Policy Update and Version Control Log when policies, approval conditions, risk categories, public notices, or review requirements change. Governance records should show what changed, why it changed, who approved it, and when affected users were notified.",
      "Use clear criteria for decisions to continue, revise, pause, retire, or replace a system. Each decision should include an owner, deadline, required evidence, and follow-up review date."
    ],
    decisionChecks: [
      "Is each approved system still operating within its approved purpose and risk conditions?",
      "What incidents, audit findings, or monitoring signals require governance action?",
      "Are policies, documentation, validation records, and data agreements current?",
      "Which systems should continue, change, pause, retire, or be replaced?"
    ],
    pitfalls: [
      "Ending governance attention after deployment approval.",
      "Maintaining an inventory that is not connected to review decisions.",
      "Tracking incidents without assigning corrective action owners.",
      "Allowing policies and approval conditions to become stale."
    ]
  },
  13: {
    purpose: "Monitor and evaluate whether AI systems remain effective, reliable, equitable, safe, and useful over time.",
    timing: "Use this play for deployed or operational AI-supported workflows that require performance monitoring, equity checks, outcome evaluation, model drift review, user feedback, and continuous improvement.",
    implementationTips: [
      "Define monitoring indicators before full deployment. Measures should include technical performance, reliability, data quality, equity, subgroup results, drift, incidents, user feedback, adoption, workload, public health outcomes, and whether the system still supports the original public health purpose.",
      "Use the Performance Monitoring Dashboard to track trends over time instead of relying on one-time pilot results. The dashboard should show whether performance is stable, whether data quality has changed, whether staff are using the workflow as intended, and whether incidents or workarounds are increasing.",
      "Use the Equity and Disparity Impact Monitoring tool to examine subgroup performance, access barriers, language access, geographic differences, disability access, and other context-specific equity concerns. Overall performance can look acceptable while specific groups experience lower accuracy, reduced access, or greater burden.",
      "Use the AI Evaluation and Outcomes Reporting tool to connect model performance to public health value. Evaluation should ask whether the system improves timeliness, quality, workload, communication, targeting, prevention, service delivery, or outcomes enough to justify continued use.",
      "Use the Human-Centered AI Decision Rule Checklist during monitoring to confirm that automation has not drifted beyond the approved human role and decision boundaries. Monitoring should include the workflow, not just the model.",
      "Escalate findings that show drift, performance loss, unfair impacts, usability problems, privacy concerns, staff workarounds, or reduced public health value. Monitoring results should feed governance, workforce development, change support, policy updates, funding decisions, and playbook revisions."
    ],
    decisionChecks: [
      "Is the system still producing public health value?",
      "Are performance and equity results stable across populations, programs, geographies, and time?",
      "What monitoring findings require changes to the model, workflow, policy, training, or oversight?",
      "When should the system be scaled, revised, paused, retired, or replaced?"
    ],
    pitfalls: [
      "Monitoring technical performance but not public health value or equity.",
      "Using pilot results as proof of long-term performance.",
      "Failing to act when dashboards show drift, declining data quality, or staff workarounds.",
      "Treating evaluation as a report rather than a governance input."
    ]
  }
};

const learningModules = [
  { id: "staff-training", title: "Staff Training and Shared Readiness", text: "Use these modules to build a common foundation before AI projects begin. The learning section can support staff training, leadership orientation, governance preparation, and cross-program discussion.", examples: [], risk: "Training should be connected to agency policy, approved tools, data safeguards, escalation expectations, and governance requirements.", plays: [1,2,3,5,6], tools: [1,2,7,23,24,28,29] },
  { id: "understanding-ai", title: "Understanding Artificial Intelligence", text: "AI is a family of methods that enable systems to learn from data, recognize patterns, generate content, and support action toward defined goals.", examples: ["Summarize surveillance reports", "Translate analytic findings into plain language", "Support decision briefings"], risk: "Do not treat AI as a single tool or assume one model fits every public health task.", plays: [1,3], tools: [1,2] },
  { id: "generative-ai", title: "Generative AI", text: "Generative AI produces new text, images, code, summaries, or synthetic data from prompts and examples.", examples: ["Draft health education materials", "Create first drafts of grant narratives", "Summarize policy documents with human review"], risk: "Outputs can sound plausible while being wrong. Consequential outputs need subject matter review.", plays: [1,3,11], tools: [2,14,40] },
  { id: "agentic-ai", title: "Agentic AI", text: "Agentic AI can coordinate multi-step workflows across systems under explicit rules and human oversight.", examples: ["Route high-priority surveillance signals", "Create task queues from incoming reports", "Assemble evidence packets for review"], risk: "Agentic systems need strict boundaries, audit logs, and escalation paths.", plays: [3,11,12,13], tools: [12,14,39,17] },
  { id: "deep-research", title: "Deep Research", text: "Deep Research tools autonomously plan multi-step research tasks, gather sources, and draft citation-based reports for expert review.", examples: ["Literature scans for emerging threats", "Policy scans across jurisdictions", "Comparative program analysis"], risk: "Treat outputs as a research assistant draft, not as validated evidence.", plays: [1,3,13], tools: [2,48] },
  { id: "workflows", title: "AI-Supported Public Health Workflows", text: "AI can support signal detection, evidence gathering, analysis, synthesis, briefing, communication, and decision support.", examples: ["Detect anomalies", "Synthesize outbreak updates", "Draft situation reports"], risk: "Match the tool to workflow stage and keep humans responsible for decisions.", plays: [7,10,11], tools: [31,29,41] },
  { id: "risks", title: "Risks, Limitations, and Guardrails", text: "Public health AI risks include hallucination, bias, privacy exposure, automation bias, model drift, and performance loss on complex tasks.", examples: ["Equity audit before scale", "Hallucination audit for public-facing products", "Incident response for unsafe outputs"], risk: "Governance, documentation, validation, and monitoring are mandatory, not optional.", plays: [3,11,12,13], tools: [3,16,14,47,17] },
  { id: "systems-shift", title: "AI as a Public Health Systems Shift", text: "AI changes public health infrastructure, workforce expectations, policy, data systems, procurement, public trust, communications, surveillance, and service delivery.", examples: ["Plan agency-wide governance", "Coordinate data modernization with workforce training", "Align AI pilots with public accountability"], risk: "Treating AI as a one-off technology purchase can create fragmented adoption, uneven safeguards, and unowned risk.", plays: [1,2,3,9,12], tools: [4,10,6] },
  { id: "digital-determinants", title: "AI as a Digital Determinant of Health", text: "AI can shape access to services, quality of information, exposure to misinformation, eligibility decisions, language access, public benefits, and community trust.", examples: ["Review AI effects on language access", "Assess misinformation risk", "Evaluate service access impacts"], risk: "AI-enabled systems can widen inequities if digital access, data representation, and community context are not examined early.", plays: [1,4,7,13], tools: [3,22,19] },
  { id: "human-centered-ai", title: "Human-Centered AI", text: "Human-centered AI keeps public health professionals, affected communities, and accountable decision-makers at the center of design, review, and action.", examples: ["Define human decision owners", "Require expert review before public communications", "Document appeal or correction pathways"], risk: "AI should support judgment, not replace community relationships, public accountability, or final decisions in consequential workflows.", plays: [1,7,11,12,13], tools: [6,19,46] },
  { id: "ai-literacy", title: "AI Literacy for Public Health Staff", text: "AI literacy means staff can recognize AI use, understand major failure modes, protect sensitive data, communicate uncertainty, document use, and know when not to use AI.", examples: ["Role-based AI training", "Prompt and privacy coaching", "Staff reporting pathways for concerns"], risk: "Staff should not be asked to use AI tools before they understand privacy, hallucination, bias, documentation, and human review expectations.", plays: [5,6,10], tools: [27,24,26,28,29] },
  { id: "automation-bias", title: "Automation Bias and Over-Trust", text: "Automation bias occurs when people accept AI outputs too readily because they appear confident, precise, or authoritative.", examples: ["Second-review requirements", "Decision owner sign-off", "Confidence and limitation notes in briefs"], risk: "Repeated exposure to fluent AI outputs can reduce scrutiny unless workflows require deliberate review and documentation.", plays: [3,7,11,12,13], tools: [14,40,46,6] },
  { id: "missing-voices", title: "Missing Voices in Data", text: "Missing voices analysis asks whose experiences, records, language needs, disability access needs, rural context, tribal sovereignty interests, or community knowledge are absent from the data.", examples: ["Identify underrepresented groups", "Add community validation before launch", "Monitor subgroup performance after deployment"], risk: "Models may appear accurate overall while failing communities that are missing, underrepresented, misclassified, or poorly represented.", plays: [4,7,13], tools: [3,22,47] },
  { id: "public-transparency", title: "Public Transparency and Community Trust", text: "Public health agencies should be able to explain when AI is used, why it is used, what data are involved, what humans decide, and how concerns can be raised.", examples: ["Public AI use notices", "Community-facing FAQs", "Feedback and correction pathways"], risk: "AI use that is invisible or hard to explain can erode trust even when the technical system performs well.", plays: [3,4,10,12], tools: [19,20,46] },
  { id: "tiered-data-use", title: "Tiered Data Use for AI", text: "Tiered data use classifies information by sensitivity and defines which AI environments are appropriate for public, internal, confidential, and highly restricted data.", examples: ["Restrict PHI from public AI tools", "Approve enterprise AI for internal drafts", "Use in-house/RAG systems for restricted materials"], risk: "Without data tiers, staff may unintentionally place confidential, protected, or sovereign data into unsuitable AI environments.", plays: [2,3,11], tools: [10,15,34] },
  { id: "environmental-impact", title: "Environmental and Resource Impacts", text: "AI can carry energy, water, hardware, e-waste, procurement, and environmental justice implications that should be considered before scale.", examples: ["Review vendor sustainability claims", "Compare lower-impact alternatives", "Flag data center environmental justice concerns"], risk: "High-compute AI uses should be justified by public health value and reviewed for resource burden and environmental justice implications.", plays: [1,7,8], tools: [5,31,33] },
  { id: "bridge-professional", title: "The AI Bridge Professional Role", text: "The bridge professional translates across public health programs, IT, legal/privacy, procurement, vendors, leadership, data teams, and community partners.", examples: ["Coordinate governance submissions", "Translate technical risk for leadership", "Help program staff document AI workflows"], risk: "Without translation capacity, AI efforts can stall between technical, operational, legal, and community expectations.", plays: [5,6,9,11], tools: [27,23,36] },
  { id: "funding", title: "Federal Funding Opportunities", text: "AI work can often be positioned as a capability layer on top of data modernization, infrastructure, workforce, and equity investments.", examples: ["DMI-supported data pipelines", "PHIG-supported workforce and governance", "Grant-aligned pilots"], risk: "Do not approve projects without confirmed pilot, scale, and sustainment resources.", plays: [8,9], tools: [33,32,36] },
  { id: "using-together", title: "How to Use the Playbook and Toolkit Together", text: "Read the play first to understand the decision and output, then use the linked tools during workshops or governance reviews.", examples: ["Use Tool 7 during Play 2", "Use Tools 2 and 12 during Play 3", "Use Tools 41 and 42before scaling"], risk: "The tools support the plays; they should not become a disconnected paperwork exercise.", plays: [1,2,3,11], tools: [2,7,12,41,42] },
  { id: "ai-support-areas", title: "Areas Where AI Can Support Public Health Activities", text: "Expanded examples showing how AI can support specific public health activities, what safeguards are needed, and which plays and tools help agencies move from idea to responsible implementation.", examples: ["Surveillance and outbreak intelligence", "Plain-language communication", "Workflow routing", "Monitoring and evaluation"], risk: "These examples are planning prompts, not automatic recommendations to adopt AI without readiness assessment, governance review, stakeholder engagement, and monitoring.", plays: [2,3,4,7,11,12,13], tools: [3,7,13,14,19,20,22,41,44,47] }
];

const lessonDeckDownloads = {
  "understanding-ai": "downloads/presentations/lesson-01-understanding-artificial-intelligence-sample-formal-title.pptx",
  "generative-ai": "downloads/presentations/lesson-02-generative-ai.pptx",
  "agentic-ai": "downloads/presentations/lesson-03-agentic-ai.pptx",
  "deep-research": "downloads/presentations/lesson-04-deep-research.pptx",
  "workflows": "downloads/presentations/lesson-05-ai-supported-public-health-workflows.pptx",
  "risks": "downloads/presentations/lesson-06-risks-limitations-and-guardrails.pptx",
  "systems-shift": "downloads/presentations/lesson-07-ai-as-a-public-health-systems-shift.pptx",
  "digital-determinants": "downloads/presentations/lesson-08-ai-as-a-digital-determinant-of-health.pptx",
  "human-centered-ai": "downloads/presentations/lesson-09-human-centered-ai.pptx",
  "ai-literacy": "downloads/presentations/lesson-10-ai-literacy-for-public-health-staff.pptx",
  "automation-bias": "downloads/presentations/lesson-11-automation-bias-and-over-trust.pptx",
  "missing-voices": "downloads/presentations/lesson-12-missing-voices-in-data.pptx",
  "public-transparency": "downloads/presentations/lesson-13-public-transparency-and-community-trust.pptx",
  "tiered-data-use": "downloads/presentations/lesson-14-tiered-data-use-for-ai.pptx",
  "environmental-impact": "downloads/presentations/lesson-15-environmental-and-resource-impacts.pptx",
  "bridge-professional": "downloads/presentations/lesson-16-the-ai-bridge-professional-role.pptx",
  "funding": "downloads/presentations/lesson-17-federal-funding-opportunities.pptx",
  "using-together": "downloads/presentations/lesson-18-how-to-use-the-playbook-and-toolkit-together.pptx",
  "ai-support-areas": "downloads/presentations/lesson-19-areas-where-ai-can-support-public-health-activities.pptx"
};

const readinessDomains = [
  ["Leadership and Governance", ["Leadership has articulated an AI vision aligned with strategic priorities.", "A clear governance structure exists or is planned.", "AI ethics and equity principles have been established.", "Budget authority exists to support AI infrastructure and workforce."]],
  ["Data Infrastructure", ["Data systems are integrated or interoperable.", "Data quality is regularly monitored.", "Cloud or modern analytics infrastructure is available.", "Data governance policies exist for access, privacy, security, and use."]],
  ["Workforce Capacity", ["Staff with data science, analytics, or AI skills are available.", "Training programs build AI literacy across the workforce.", "Job descriptions and career paths support data and AI roles.", "Academic or technical partnerships provide additional capacity."]],
  ["Equity and Community Engagement", ["Equity impact assessment is part of AI planning.", "Community engagement informs design of community-impacting systems.", "Local context and applicable community or Tribal data governance expectations are identified and respected.", "Subgroup performance monitoring is planned before deployment."]],
  ["Partnerships and Collaboration", ["Cross-program collaboration supports AI use cases.", "External partners are identified and governed appropriately.", "Procurement and vendor pathways are understood.", "Roles and responsibilities are documented."]],
  ["Privacy and Security", ["PHI and sensitive data protections are defined.", "Security review occurs before AI tools are used.", "Data use agreements are required for vendors and partners.", "Incident response and escalation processes exist."]],
  ["Policy, Procurement, and Public Accountability", ["AI policy landscape, procurement requirements, public records obligations, and agency restrictions have been reviewed before tools are selected.", "Vendor and procurement reviews include transparency, data rights, model documentation, auditability, accessibility, security, and exit requirements.", "Environmental and resource impacts, including compute, energy, water, sustainability, and environmental justice considerations, are assessed for AI projects.", "Plain-language public notice, human-centered decision rules, and limits on automated decision-making are documented for public-impacting AI uses."]]
].map(([name, indicators], i) => ({ id: `d${i}`, name, indicators }));

const readinessGapRecommendations = {
  "Leadership and Governance": { plays: [1, 3, 12], tools: [1,2,12,46,17] },
  "Data Infrastructure": { plays: [2, 9, 11, 13], tools: [7,9,15,39,44] },
  "Workforce Capacity": { plays: [5, 6, 10], tools: [23,24,26,28,29,30] },
  "Equity and Community Engagement": { plays: [4, 7, 13], tools: [3,20,21,47] },
  "Partnerships and Collaboration": { plays: [4, 7, 8], tools: [20,21,32,33] },
  "Privacy and Security": { plays: [3, 11, 12], tools: [15,16,17] },
  "Policy, Procurement, and Public Accountability": { plays: [1, 3, 7, 8, 11, 12], tools: [4,5,6,19,32,34] }
};

const maturityLevels = [
  { level: 1, title: "Awareness", focus: "Learning and exploration", plays: [1], risks: "Informal ungoverned tool use, PHI exposure, unclear accountability.", activities: "Explore concepts, set interim policy, identify AI lead, establish guardrails.", tools: [1,2] },
  { level: 2, title: "Readiness", focus: "Planning and preparation", plays: [2,3,4,5,6,7,8,9], risks: "Overcommitting before data, workforce, governance, change, or funding gaps are addressed.", activities: "Assess readiness, establish governance, engage stakeholders, plan workforce and change management, prioritize use cases, align funding, design playbook.", tools: [7,33,36,23,24,26,28,31,12] },
  { level: 3, title: "Pilots", focus: "Governed initial development", plays: [7,10,11], risks: "Pilots proceed without validation, staff adoption support, or scale decision criteria.", activities: "Prioritize use cases, execute change management, validate models, evaluate pilots.", tools: [31,29,14,40,41,42] },
  { level: 4, title: "Deployment", focus: "Operational integration", plays: [11,13], risks: "Model drift, automation bias, equity gaps, insufficient monitoring.", activities: "Deploy into workflows, monitor performance, evaluate outcomes, audit equity.", tools: [44,41,47,48] },
  { level: 5, title: "Optimization", focus: "Continuous improvement", plays: [12,13], risks: "Policies become stale and documentation falls behind evolving systems.", activities: "Improve systems, sustain governance, audit compliance, update policies.", tools: [45,46,17,18] }
];

const addedToolGuidanceByPlay = {
  1: [
    [4, "Use the AI Policy Landscape Scan before finalizing principles so legal, procurement, public records, IT, and agency restrictions are visible while guardrails are still being drafted."],
    [5, "Use the Environmental and Resource Impact Review to decide whether energy, water, compute, sustainability, or environmental justice considerations should become part of the department's AI guardrails."],
    [6, "Use the Human-Centered AI Decision Rule Checklist to define what AI may support, what it may never decide independently, and where named human accountability is required."]
  ],
  2: [
    [4, "Use the AI Policy Landscape Scan as readiness evidence when policy constraints, approval requirements, or public records obligations may affect what the department can do next."],
    [5, "Use the Environmental and Resource Impact Review to identify resource, infrastructure, and sustainability gaps that should be included in the readiness gap register."],
    [6, "Use the Human-Centered AI Decision Rule Checklist to identify workflows that are not ready for automation because decision authority, human review, or escalation rules are unclear."],
    [10, "Use the Tiered Data Classification tool to convert data readiness concerns into concrete rules for what data can be used, where it can be processed, and what review is required."]
  ],
  3: [
    [4, "Use the AI Policy Landscape Scan to align governance decisions with applicable state, local, tribal, territorial, federal, procurement, privacy, and public records requirements."],
    [10, "Use Tiered Data Classification to make governance decisions specific to the sensitivity of the data involved, rather than treating all AI uses the same."],
    [11, "Use the Advisory Committee Charter when the department needs an advisory structure that brings program, technical, legal, equity, and community perspectives into governance."],
    [12, "Use the Governance Board Charter when the department needs a decision-making body with authority to approve, pause, modify, or retire AI uses."],
    [13, "Use the intake, risk review, and inventory template to create the official record for proposed, approved, deployed, paused, and retired AI systems."],
    [19, "Use the Plain-Language Public Notice Template to make transparency a governance requirement before public-impacting AI uses move forward."]
  ],
  4: [
    [19, "Use the Plain-Language Public Notice Template to explain AI-supported activities in terms that staff, partners, and community members can understand and respond to."],
    [20, "Use the Community Engagement Planning tool to match engagement methods to the people affected, the risk level of the use case, and the decisions that can still change."],
    [22, "Use the Missing Voices Analysis to identify groups, roles, communities, or partners who are absent from the conversation but likely to experience the effects of the AI use."]
  ],
  5: [
    [24, "Use the AI Workforce Competency Framework to define role-specific literacy expectations for leaders, program staff, analysts, IT, privacy, communications, and governance participants."],
    [25, "Use the AI Champion Designation and Role Guide to identify staff who can support adoption, answer practical questions, and connect frontline experience to governance."],
    [27, "Use the AI Bridge Professional Role Guide when the department needs someone to connect public health operations, data systems, procurement, governance, vendors, and change management."]
  ],
  6: [
    [23, "Use the Change Management Plan to identify workflow changes, affected staff groups, adoption risks, training needs, communication points, and escalation channels before deployment."],
    [29, "Use the Staff Communication and FAQ Template to prepare clear answers about what is changing, what is not changing, what staff should do, and how concerns will be handled."],
    [30, "Use the Resistance and Barrier Identification tool to surface workflow, trust, usability, privacy, equity, and workload concerns early enough to adjust the project."]
  ],
  7: [
    [3, "Use the Equity Impact Assessment Checklist before prioritizing a use case so potential disparate impacts are considered alongside feasibility and expected benefit."],
    [5, "Use the Environmental and Resource Impact Review to compare projects that may have different compute, vendor, infrastructure, or sustainability burdens."],
    [6, "Use the Human-Centered AI Decision Rule Checklist to screen out use cases where AI would make or appear to make decisions that require human judgment."],
    [22, "Use the Missing Voices Analysis to check whether proposed use cases reflect the needs and risks of the communities most likely to be affected."]
  ],
  8: [
    [33, "Use the Funding Strategy Checklists to match AI activities with allowable funding sources, grant timing, budget categories, and sustainability requirements."],
    [35, "Use the AI Total Cost of Ownership and Sustainability Worksheet to estimate pilot, scale, operations, staffing, infrastructure, procurement, training, monitoring, and evaluation costs."],
    [5, "Use the Environmental and Resource Impact Review when compute, hosting, storage, vendor infrastructure, or sustainability concerns may affect funding or procurement decisions."]
  ],
  9: [
    [36, "Use the AI Implementation Timeline to turn approved and resourced use cases into sequenced work with dependencies, owners, governance gates, milestones, and realistic dates."],
    [37, "Use the Playbook Dependency and Risk Register to keep unresolved dependencies, risks, mitigation steps, owners, due dates, and escalation decisions visible."],
    [27, "Use the AI Bridge Professional Role Guide to identify who will translate between program goals, technical dependencies, governance gates, procurement, and implementation timing."]
  ],
  10: [
    [19, "Use the Plain-Language Public Notice Template when deployment affects public-facing communications, services, eligibility, outreach, surveillance, or other community-impacting workflows."],
    [23, "Use the Change Management Plan as the operational checklist for training, office hours, feedback channels, staff support, and adoption monitoring during deployment."],
    [28, "Use the Role-Based Training Plan and Completion Tracker to confirm required learning modules are assigned, completed, and documented before staff are expected to use the workflow."],
    [29, "Use the Staff Communication and FAQ Template to publish practical deployment guidance for staff and supervisors."],
    [30, "Use the Resistance and Barrier Identification tool during deployment to detect adoption issues before they become workarounds, distrust, or failed implementation."],
    [38, "Use the Change Management Execution Dashboard to track training completion, communication delivery, support activity, barriers, escalations, and deployment readiness."]
  ],
  11: [
    [6, "Use the Human-Centered AI Decision Rule Checklist to confirm human review, escalation, override, and accountability rules before pilots or production deployments begin."],
    [10, "Use Tiered Data Classification to confirm that data movement, access controls, hosting, vendor use, and security safeguards match the sensitivity of the data."],
    [34, "Use the Procurement and Vendor Addendum for vendor-supported builds so documentation, model validation, privacy, security, accessibility, support, audit, and exit requirements are enforceable."],
    [36, "Use the Model Testing and Validation Protocol to document whether the system performs reliably enough for the intended public health workflow before scaling."]
  ],
  12: [
    [13, "Use the AI system inventory to keep a current record of owners, purpose, data, risk level, approval status, monitoring cadence, and retirement status."],
    [16, "Use the Incident Response Checklist to route unsafe outputs, privacy events, bias concerns, technical failures, or unexpected harms through a documented response process."],
    [17, "Use the Compliance Audit Checklist to periodically confirm that legal, privacy, security, procurement, accessibility, civil rights, and governance requirements are being met."],
    [19, "Use the Plain-Language Public Notice Template when governance decisions require public explanation, updated disclosure, or a change in how AI is used."]
  ],
  13: [
    [6, "Use the Human-Centered AI Decision Rule Checklist during monitoring to confirm that automation has not drifted beyond the approved human role and decision boundaries."],
    [22, "Use the Missing Voices Analysis to interpret evaluation findings and determine whether monitoring is capturing the groups most likely to experience unintended effects."],
    [44, "Use the Performance Monitoring Dashboard to track reliability, performance, equity, incident trends, and improvement actions over time."],
    [47, "Use Equity and Disparity Impact Monitoring to track subgroup performance, access barriers, and disparate outcomes after deployment."],
    [48, "Use AI Evaluation and Outcomes Reporting to connect performance results to public health outcomes, operational value, equity, and governance decisions."]
  ]
};

const exampleDetails = {
  "Summarize surveillance reports": "Use AI to create a first-pass summary of case trends, anomalies, affected populations, and open questions for epidemiologist review.",
  "Translate analytic findings into plain language": "Convert technical findings into accessible language for leadership briefings, partner updates, or public-facing materials while preserving uncertainty and limitations.",
  "Support decision briefings": "Organize evidence, options, tradeoffs, and recommended follow-up questions so decision-makers can review a clearer briefing package.",
  "Draft health education materials": "Create draft messages, FAQs, or outreach language that staff can adapt for literacy level, cultural context, accessibility, and approved public health guidance.",
  "Create first drafts of grant narratives": "Help teams turn project goals, workplans, staffing needs, and evaluation measures into a structured draft for human editing and grant compliance review.",
  "Summarize policy documents with human review": "Extract key requirements, implementation deadlines, affected programs, and decision points from long guidance documents for legal or policy review.",
  "Route high-priority surveillance signals": "Classify incoming reports or alerts by urgency, topic, geography, and required response path, then route them to staff for confirmation.",
  "Create task queues from incoming reports": "Transform email, forms, or case updates into structured follow-up tasks with owners, due dates, and escalation flags.",
  "Assemble evidence packets for review": "Gather relevant reports, data extracts, literature, and prior decisions into a review packet before staff make a recommendation.",
  "Literature scans for emerging threats": "Search and summarize recent evidence on outbreaks, environmental risks, interventions, or clinical guidance with citations for expert validation.",
  "Policy scans across jurisdictions": "Compare state, local, federal, or international policies to identify common provisions, gaps, and options for agency consideration.",
  "Comparative program analysis": "Review program models, implementation examples, funding approaches, and reported outcomes to support planning or grant development.",
  "Detect anomalies": "Flag unusual changes in surveillance, laboratory, syndromic, environmental, or service-utilization data for staff investigation.",
  "Synthesize outbreak updates": "Combine situation reports, surveillance data, partner updates, and public communications into a concise operational update.",
  "Draft situation reports": "Create an initial SitRep structure with current status, risks, actions taken, resource needs, and next operational decisions.",
  "Equity audit before scale": "Review subgroup performance, access barriers, language needs, and potential disparate impacts before a pilot expands.",
  "Hallucination audit for public-facing products": "Test generated content against authoritative sources and require correction before public release.",
  "Incident response for unsafe outputs": "Document unsafe, biased, private, or inaccurate outputs and route them through escalation, containment, and corrective action.",
  "DMI-supported data pipelines": "Use data modernization investments to strengthen interoperability, data quality, cloud readiness, and analytics infrastructure needed for AI.",
  "PHIG-supported workforce and governance": "Use infrastructure funding to support AI literacy, governance capacity, data staff, policy development, and implementation readiness.",
  "Grant-aligned pilots": "Design small pilots that map to allowable funding activities, measurable outputs, evaluation requirements, and sustainment plans.",
  "Use Tool 7 during Play 2": "Complete the readiness self-assessment before selecting pilots so gaps in governance, data, workforce, equity, and security are visible.",
  "Use Tools 2 and 12 during Play 3": "Pair the responsible AI policy template with the governance board charter to define authority, review standards, and decision rights.",
  "Use Tools 41 and 42before scaling": "Use the pilot dashboard and scale decision framework to determine whether to scale, revise, pause, or retire a pilot."
};

const workflows = [
  { title: "Signal Detection", description: "Identify unusual patterns, emerging risks, or priority alerts in surveillance feeds, reports, calls, environmental data, or partner updates.", humanReview: "Staff confirm whether a signal is meaningful, urgent, and actionable before escalation.", plays: [7,11,13], tools: [31,41,47] },
  { title: "Evidence Gathering", description: "Collect relevant literature, policy guidance, local data, prior decisions, and partner input into one reviewable evidence packet.", humanReview: "Subject matter experts check source quality, jurisdictional relevance, and missing perspectives.", plays: [1,3,4], tools: [2,21,48] },
  { title: "Analysis", description: "Support coding, statistical review, geospatial analysis, data quality checks, and subgroup comparisons that inform public health action.", humanReview: "Analysts validate methods, assumptions, bias risks, privacy constraints, and interpretation.", plays: [4,11,13], tools: [9,14,40,47] },
  { title: "Synthesis", description: "Turn multiple reports, datasets, interviews, or evidence sources into a concise summary of what is known, uncertain, and next.", humanReview: "Program and evaluation staff verify the synthesis before it shapes decisions or communications.", plays: [4,10,13], tools: [29,48,45] },
  { title: "Briefing & Communication", description: "Draft staff updates, leadership briefs, FAQs, public messages, grant narratives, and partner communications.", humanReview: "Communications, legal, equity, and program leads approve language before distribution.", plays: [5,6,10,11], tools: [23,29,15] },
  { title: "Decision Support", description: "Organize options, risks, constraints, equity considerations, and recommended next steps for governance or leadership decisions.", humanReview: "Humans retain decision authority, document rationale, and monitor downstream impacts.", plays: [3,7,12], tools: [3,31,42,46] }
];

const caseStudies = [
  {
    title: "California Health Care Facility Inspection Documentation",
    agency: "California Department of Public Health",
    type: "Generative AI pilot",
    challenge: "Health care facility inspectors must document findings clearly and connect observations to applicable laws, regulations, and requirements. That work can be time-consuming and difficult to standardize across inspection teams.",
    solution: "California's GenAI program identifies this as a CDPH pilot testing generative AI support for inspection report drafting and regulatory linkage.",
    data: "Inspection notes, facility inspection findings, relevant laws, regulations, and state documentation requirements.",
    workflow: "Inspectors would continue performing inspections and exercising professional judgment, while generative AI helps draft or organize report language and identify potentially relevant regulatory citations for human review.",
    outcomes: "The expected benefit is reduced documentation burden and faster linkage between inspection findings and applicable requirements. Because this is described as a pilot, the page should not present final outcome claims until public evaluation results are available.",
    ethics: "Human inspector review is essential before any report language or regulatory linkage is finalized. Governance should address accuracy, explainability, legal sufficiency, record retention, bias in inspection language, and the risk of over-relying on generated citations.",
    sources: [
      ["California GenAI: GenAI projects", "https://www.genai.ca.gov/projects/"],
      ["California GenAI: Health care facility inspections project", "https://www.genai.ca.gov/projects/health-care-facility-inspections/"]
    ]
  },
  {
    title: "California Language Access Translation Support",
    agency: "California Health and Human Services Agency",
    type: "Generative AI exploration",
    challenge: "Residents with limited English proficiency need timely, understandable, and culturally appropriate access to health and social services information. Traditional translation workflows can be slow, inconsistent, or difficult to scale across programs.",
    solution: "California's GenAI language access work explores generative AI to improve translation speed, consistency, efficiency, and cultural awareness, with human review and editing.",
    data: "Health and social services content, source-language materials, translated drafts, terminology guidance, program context, and human reviewer feedback.",
    workflow: "Generative AI can create first-draft translations or language-access materials that qualified staff review, edit, and approve before use. The workflow shifts translation from a fully manual first draft to an AI-assisted draft plus human quality review.",
    outcomes: "The expected benefit is faster, more consistent translation support for public-facing health and social services materials. Public-facing use should still depend on human review, quality assurance, and language access governance.",
    ethics: "Risk controls should address mistranslation, cultural fit, health literacy, privacy, accessibility, and human review by qualified language-access staff before any material is released.",
    sources: [
      ["California GenAI: Language access project", "https://www.genai.ca.gov/projects/language-access/"],
      ["California Health and Human Services Agency: Language Access", "https://www.chhs.ca.gov/home/language-access/"]
    ]
  },
  {
    title: "Kansas Local Health Department AI Playbook and GenAI Tools",
    agency: "Kansas Public Health Collaborative with Kansas local health departments",
    type: "Generative AI adoption playbook and tools",
    challenge: "Local health departments need practical guidance on whether and how to use generative AI for routine operations, communications, grant writing, health literacy, and content review without creating privacy, quality, or trust risks.",
    solution: "The Kansas Public Health Collaborative created AI guidance and playbook resources for local health departments, including practical GenAI tools and FAQs for communications, grant writing, health literacy, campaign planning, and content review.",
    data: "Local health department operational needs, communication materials, grant narratives, public health campaign content, health literacy materials, and staff questions about responsible AI use.",
    workflow: "Local health departments can use the playbook and tools to move from informal experimentation toward structured, governed use of GenAI in communications and administrative workflows.",
    outcomes: "The primary documented outcome is the availability of a playbook, tools, and community-of-practice support for Kansas local health departments. The page should not claim implementation impact until local deployment outcomes are publicly documented.",
    ethics: "Risk controls should address privacy, source verification, human review, accessibility, health literacy, transparency, and whether generated content is appropriate for public-facing communication.",
    sources: [
      ["Kansas Public Health Collaborative: AI in Public Health", "https://www.kansaspublichealthcollaborative.org/ai-in-public-health/"],
      ["Kansas Health Institute: Why and How Kansas Public Health Could Be Key in Shaping a Statewide AI Playbook", "https://www.khi.org/articles/why-and-how-kansas-public-health-could-be-key-in-shaping-a-statewide-ai-roadmap/"]
    ]
  },
  {
    title: "Egyptian Health Department Agentic Operations Platform",
    agency: "Egyptian Health Department, Southern Illinois",
    type: "Agentic platform and automated workflows",
    challenge: "A regional public health and human services agency needed to coordinate screenings, referrals, client information, reporting, and program workflows across public health and human services operations.",
    solution: "The agency implemented Creatio's CRM platform, described by the vendor as supporting automation and AI-ready operations for care coordination, reporting, eligibility validation, client portals, and population health workflows.",
    data: "Client records, screenings, referrals, care coordination information, portal interactions, reporting data, claims or population health data, and program workflow records.",
    workflow: "The platform centralizes client and program workflows so staff can coordinate referrals, manage screenings, generate reports, and prepare for future AI-assisted risk identification or forecasting within a unified operational system.",
    outcomes: "The vendor case study reports reduced manual data entry, faster reporting, and improved operational coordination. Because the main source is a vendor case study, the website presents this as an operational example rather than a validated best practice.",
    ethics: "Governance should address vendor oversight, privacy, role-based access, data minimization, audit logs, explainability for future AI analytics, human review of eligibility or risk outputs, and compliance with health and human services data requirements.",
    sources: [
      ["Creatio: Public Health Agency Cuts TCO by 50% and Improves Client Outcomes with Creatio", "https://www.creatio.com/page/public-health-agency-cuts-tco-50-and-improves-client-outcomes-creatio"],
      ["Egyptian Health Department: About Us", "https://egyptian.org/about-us/"]
    ]
  }
];

const promisingPractices = [
  {
    title: "Outbreak Early Warning and Investigation Support",
    subtitle: "Human-centered AI use case",
    challenge: "A state health department needed to identify potential infectious disease outbreaks more quickly using multiple data streams, including syndromic surveillance, laboratory reports, and emergency department chief complaints. Manual review processes delayed detection and limited the department's ability to identify geographic clusters early enough for timely investigation.",
    solution: "The department used machine learning to detect unusual patterns and potential geographic clusters that could indicate an emerging outbreak. The system was designed as a human-in-the-loop decision-support tool. It flagged potential clusters for review by epidemiologists, but it did not automatically issue public notifications, initiate enforcement actions, or make final outbreak determinations.",
    data: "The system used syndromic surveillance data, laboratory reports, emergency department chief complaints, geographic data, and related public health surveillance records. During readiness assessment, the department identified a 48-hour lag in syndromic surveillance reporting and addressed that gap through a data pipeline improvement before launching the pilot.",
    workflow: "The AI system shifted the department from primarily manual review toward earlier automated signal detection followed by human investigation. Epidemiologists received prioritized cluster alerts instead of manually scanning multiple data sources. This allowed staff to focus time on validating signals, contacting local partners, and determining whether additional public health action was needed.",
    outcomes: "In the first year, the system detected three potential outbreak clusters that were later confirmed through investigation. Average detection time decreased by 4 days compared with the department's previous manual review process. The system improved situational awareness while preserving human judgment in all investigation and response decisions.",
    ethics: "The department established clear guardrails before implementation. The AI system could only flag geographic clusters for human review and could not trigger automatic public alerts or enforcement actions. Community engagement surfaced concerns from immigrant communities about data use, leading the department to add explicit language to its AI principles prohibiting the use or sharing of individual-level data for law enforcement purposes.",
    agentic: "The system could evolve into an agentic AI workflow by allowing the AI to take defined, bounded actions after a potential cluster is detected. For example, the AI could automatically gather supporting laboratory, syndromic, emergency department, and geographic data; generate a preliminary investigation brief; compare the signal against historical baselines; create a draft case investigation ticket; recommend next investigation steps; and route the alert to the appropriate epidemiology team based on geography, disease category, or staffing availability. The AI could also monitor incoming data after the alert is created and update the investigation brief as new information becomes available. Human epidemiologists would still review the evidence, validate the signal, approve any external communications, and decide whether public health action is warranted. Additional safeguards would be needed, including role-based permissions, audit logs for every AI-initiated action, human approval before external communication, limits on what data the AI can access, and explicit prohibitions on enforcement or law enforcement uses.",
    reference: "Syndromic surveillance uses emergency department and other near-real-time data to detect unusual patterns before confirmed diagnoses are available, and AI/machine learning methods are increasingly discussed as tools for forecasting, anomaly identification, and outbreak detection."
  },
  {
    title: "Tribal Chronic Disease Risk Stratification for Care Management",
    subtitle: "Human-centered AI use case",
    challenge: "A tribal health department needed a more systematic way to identify tribal members at elevated risk for type 2 diabetes complications and prioritize care management outreach. Existing outreach processes relied heavily on manual review and did not consistently identify the members who could benefit most from early intervention.",
    solution: "The department used AI-assisted risk stratification to identify tribal members at higher risk for diabetes-related complications. The tool supported, but did not replace, clinical and care management judgment. Tribal health staff used the risk scores to prioritize outreach, review individual needs, and determine appropriate follow-up.",
    data: "The model used tribal health department data, including clinical records, diabetes-related indicators, care management records, utilization history, demographic information, and other locally governed data sources approved for use by tribal leadership. All data remained under tribal jurisdiction.",
    workflow: "The AI tool helped care management staff move from broad, manual outreach lists to more targeted outreach based on risk level. Staff could prioritize members most likely to benefit from follow-up, review each case, and coordinate outreach through existing tribal health workflows. The system supported earlier intervention while keeping decisions and outreach activities within the tribal health department.",
    outcomes: "Care management outreach rates increased by 35% among high-risk members. The project improved the department's ability to identify and engage members at elevated risk for diabetes complications. The governance model was also shared with other tribal health departments as an example of how AI oversight can be adapted to a tribal sovereignty context.",
    ethics: "The department's AI principles explicitly recognized tribal sovereignty and data governance. All data remained under tribal jurisdiction, and no data could be shared with state or federal systems without explicit tribal council approval. AI tools were operated only by tribal health staff. Governance oversight was assigned to the tribal council, with reporting to the tribal health board rather than to a state health department.",
    agentic: "The system could evolve into an agentic AI workflow by allowing the AI to support defined care management tasks under tribal health staff supervision. For example, the AI could identify members whose risk scores have increased, prepare a prioritized outreach list, generate a draft care management summary for staff review, suggest culturally appropriate outreach scripts, recommend follow-up intervals, and create internal task reminders for care managers. The AI could also monitor whether follow-up visits, lab tests, referrals, or education sessions were completed and flag cases that require additional attention. Tribal health staff would retain authority over outreach decisions, care planning, member communication, and any referrals or clinical actions. Additional controls would be needed, including tribal approval of allowable AI actions, audit logs, human review before member contact, culturally grounded communication standards, opt-out processes where appropriate, and strict limits preventing the AI from sharing data outside tribal governance structures.",
    reference: "Diabetes remains a major public health priority in American Indian and Alaska Native communities, and community-based outreach and care models have been used to support people living with type 2 diabetes. Tribal data sovereignty guidance emphasizes that Tribes have authority over the collection, ownership, application, sharing, and interpretation of their data, including health data."
  }
];

const references = [
  {
    category: "Responsible AI and Federal Guidance",
    items: [
      ["European Commission High-Level Expert Group on Artificial Intelligence. (2019). Ethics guidelines for trustworthy AI.", "Trustworthy AI ethics guidelines.", "https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai"],
      ["Association of Schools and Programs of Public Health. (2026). Harnessing innovation: Artificial intelligence for academic public health. A framework for the responsible and ethical use of artificial intelligence in public health education, research, and practice.", "ASPPH AI framework report with recommendations on human-centered AI, AI literacy, bridge professionals, missing voices analysis, public transparency, policy architecture, and governance.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
      ["NIST AI Risk Management Framework (AI RMF 1.0)", "Anchor framework for agency AI vision, principles, risk management, and credibility with federal funders.", "https://www.nist.gov/itl/ai-risk-management-framework"],
      ["National Institute of Standards and Technology. (2023). Artificial intelligence risk management framework (AI RMF 1.0).", "NIST AI Risk Management Framework citation from the source bibliography.", "https://www.nist.gov/itl/ai-risk-management-framework"],
      ["HHS AI use case inventory requirements", "Governance guidance for maintaining and reporting AI use case inventories.", "https://www.hhs.gov/about/agencies/asa/ocio/ai/use-case-inventory/index.html"],
      ["CDC STLT resources", "Evolving guidance for state, territorial, local, and tribal public health agencies.", "https://www.cdc.gov/public-health-gateway/php/index.html"],
      ["FedRAMP-authorized tools and environments", "Procurement, security review, and production deployment guidance for AI systems handling sensitive public health data.", "https://www.fedramp.gov/"],
      ["HIPAA and Business Associate Agreements", "Privacy compliance guidance when protected health information may be processed by vendors, cloud systems, or AI tools.", "https://www.hhs.gov/hipaa/index.html"],
      ["Office of the National Coordinator for Health Information Technology. (2023). Trusted exchange framework and common agreement (TEFCA).", "ONC Trusted Exchange Framework and Common Agreement.", "https://www.healthit.gov/topic/interoperability/policy/trusted-exchange-framework-and-common-agreement-tefca"],
      ["Organisation for Economic Co-operation and Development. (2019). OECD principles on artificial intelligence.", "OECD AI principles.", "https://oecd.ai/en/ai-principles"],
      ["Tribal data sovereignty principles", "Required consideration when AI projects involve Tribal communities, Tribal data, or Tribal governance contexts.", "https://dpcpsi.nih.gov/thro"],
      ["White House Office of Science and Technology Policy. (2022). Blueprint for an AI bill of rights: Making automated systems work for the American people.", "Blueprint for an AI Bill of Rights.", "https://bidenwhitehouse.archives.gov/ostp/ai-bill-of-rights/"],
      ["World Health Organization. (2021). Ethics and governance of artificial intelligence for health.", "WHO AI ethics and governance guidance.", "https://www.who.int/publications/i/item/9789240029200"],
      ["World Health Organization. (2023). Regulatory considerations on artificial intelligence for health. Geneva: World Health Organization.", "WHO regulatory considerations for AI in health.", "https://iris.who.int/handle/10665/373421"],
      ["Panch, T., Pearson-Stuttard, J., Greaves, F., & Atun, R. (2019). Artificial intelligence: Opportunities and risks for public health. The Lancet Digital Health, 1(1), e13-e14.", "AI opportunities and risks for public health.", "https://doi.org/10.1016/S2589-7500(19)30002-0"]
    ]
  },
  {
    category: "Funding Sources",
    items: [
      ["CDC Data Modernization Initiative (DMI)", "Described as a backbone for AI-ready data infrastructure, interoperability, cloud readiness, APIs, data pipelines, and workforce capacity.", "https://www.cdc.gov/surveillance/data-modernization/index.html"],
      ["Centers for Disease Control and Prevention. (2023). CDC data modernization initiative.", "CDC data modernization source from the source bibliography.", "https://www.cdc.gov/surveillance/data-modernization/"],
      ["Public Health Infrastructure Grant (PHIG)", "Described as a flexible funding source for workforce, data systems, organizational capacity, governance, and health equity work.", "https://www.cdc.gov/infrastructure-phig/php/index.html"],
      ["Centers for Disease Control and Prevention. (2024). Public health infrastructure grant program guidance.", "CDC public health infrastructure grant source.", "https://www.cdc.gov/infrastructure/"],
      ["HRSA digital health and telehealth programs", "Potential support for patient communication drafting, document search, and health equity analysis.", "https://www.hrsa.gov/rural-health/telehealth"],
      ["NIH / NSF smart health programs", "Support for research partnerships, model evaluation, public health AI development, and agentic system research.", "https://new.nsf.gov/funding/opportunities/smart-health-biomedical-research-era-artificial"],
      ["SAMHSA technology-based services", "Relevant to early identification, intervention support, client communication, and care coordination.", "https://www.samhsa.gov/grants"],
      ["EPA environmental justice grants", "Relevant to environmental health analysis, GeoAI, and heat risk mapping.", "https://www.epa.gov/environmentaljustice/environmental-justice-grants-funding-and-technical-assistance"],
      ["FEMA emergency management grants", "Relevant to disaster resilience and agentic outbreak forecasting workflows.", "https://www.fema.gov/grants"]
    ]
  },
  {
    category: "Public Health Peer Networks and Partners",
    items: [
      ["CDC STLT Data Connection", "Peer-learning and community-of-practice connection for public health data modernization and AI capacity building.", "https://www.cdc.gov/data-modernization/php/stlt-data-connection/index.html"],
      ["Council of State and Territorial Epidemiologists (CSTE)", "National partner and peer-learning network for public health AI adoption.", "https://www.cste.org/"],
      ["Council of State and Territorial Epidemiologists. (2019). Driving public health in the fast lane: The importance of data modernization.", "CSTE data modernization source from the source bibliography.", "https://www.cste.org/"],
      ["Association of State and Territorial Health Officials (ASTHO)", "National partner for agency learning, implementation examples, and peer exchange.", "https://www.astho.org/"],
      ["National Association of County and City Health Officials (NACCHO)", "Peer network for local public health agencies and implementation learning.", "https://www.naccho.org/"]
    ]
  },
  {
    category: "AI Platforms and Model Ecosystem Examples",
    items: [
      ["OpenAI GPT-4 and GPT-4o", "Leading large language models available through commercial platforms such as Microsoft Azure OpenAI.", "https://openai.com/api/"],
      ["Microsoft Azure OpenAI", "Commercially hosted API option that may support enterprise controls and Business Associate Agreement pathways.", "https://azure.microsoft.com/products/ai-services/openai-service"],
      ["Anthropic Claude", "Large language model family and Deep Research-capable vendor ecosystem.", "https://www.anthropic.com/claude"],
      ["Google Gemini and Google Vertex AI", "Commercial AI models and hosted AI platforms relevant to public health agency procurement decisions.", "https://cloud.google.com/vertex-ai"],
      ["Meta Llama", "Open-source model option that agencies may consider for controlled or self-managed infrastructure.", "https://www.llama.com/"],
      ["Deep Research tools from Google, OpenAI, and Anthropic", "Practical agentic capabilities for literature synthesis, legal scans, policy scans, scenario analysis, and comparative program analysis.", "https://openai.com/index/introducing-deep-research/"]
    ]
  },
  {
    category: "Risk, Validation, and Governance Concepts",
    items: [
      ["Human review and subject matter expert adjudication", "Emphasized throughout the playbook for consequential outputs, public-facing content, and AI-assisted decision support.", "https://www.nist.gov/itl/ai-risk-management-framework"],
      ["Equity impact assessment and subgroup monitoring", "Core safeguards for preventing or detecting disparate impact across communities and populations.", "https://www.hhs.gov/civil-rights/for-individuals/special-topics/ai/index.html"],
      ["Hallucination and fabrication audits", "Safeguards for generative AI systems used in public-facing or consequential internal products.", "https://www.nist.gov/itl/ai-risk-management-framework"],
      ["Automation bias", "Governance risk that occurs when staff reduce scrutiny after repeated exposure to AI outputs.", "https://www.nist.gov/itl/ai-risk-management-framework"],
      ["Model drift and performance monitoring", "Sustainment risks requiring ongoing dashboards, audits, and continuous improvement.", "https://www.nist.gov/itl/ai-risk-management-framework"]
    ]
  },
  {
    category: "Books, Reports, and Foundational Texts",
    items: [
      ["Barocas, S., Hardt, M., & Narayanan, A. (2019). Fairness and machine learning: Limitations and opportunities. MIT Press.", "Fairness and machine learning reference.", "https://fairmlbook.org/"],
      ["Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep learning. MIT Press.", "Deep learning textbook.", "https://www.deeplearningbook.org/"],
      ["National Academies of Sciences, Engineering, and Medicine. (2022). Artificial intelligence in health care: The hope, the hype, the promise, the peril. National Academies Press.", "National Academies AI in health care report.", "https://nap.nationalacademies.org/catalog/27111/artificial-intelligence-in-health-care-the-hope-the-hype-the-promise-the-peril"],
      ["Russell, S., & Norvig, P. (2021). Artificial intelligence: A modern approach (4th ed.). Pearson.", "Artificial intelligence textbook.", "https://www.pearson.com/en-us/subject-catalog/p/artificial-intelligence-a-modern-approach/P200000003500"],
      ["Topol, E. (2019). Deep medicine: How artificial intelligence can make healthcare human again. Basic Books.", "AI and medicine book.", "https://www.basicbooks.com/titles/eric-topol/deep-medicine/9781541644649/"]
    ]
  },
  {
    category: "Journal Articles and Peer-Reviewed Research",
    items: [
      ["Beam, A. L., & Kohane, I. S. (2018). Big data and machine learning in health care. JAMA, 319(13), 1317-1318.", "Machine learning in health care.", "https://doi.org/10.1001/jama.2017.18391"],
      ["Birkhead, G. S., Klompas, M., & Shah, N. R. (2015). Uses of electronic health records for public health surveillance to advance public health. Annual Review of Public Health, 36, 345-359.", "Electronic health records and public health surveillance.", "https://doi.org/10.1146/annurev-publhealth-031914-122747"],
      ["Buolamwini, J., & Gebru, T. (2018). Gender shades: Intersectional accuracy disparities in commercial gender classification. Proceedings of Machine Learning Research, 81, 1-15.", "Bias and accuracy disparities in commercial AI systems.", "https://proceedings.mlr.press/v81/buolamwini18a.html"],
      ["Chin, M. H., Afsar-Manesh, N., Bierman, A. S., et al. (2023). Guiding principles to address the impact of algorithm bias on racial and ethnic disparities in health and health care. JAMA Network Open, 6(12), e2345050.", "Algorithm bias and health disparities.", "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2813309"],
      ["Esteva, A., Kuprel, B., Novoa, R., et al. (2017). Dermatologist-level classification of skin cancer with deep neural networks. Nature, 542, 115-118.", "Deep learning in clinical image classification.", "https://doi.org/10.1038/nature21056"],
      ["Floridi, L., Cowls, J., Beltrametti, M., et al. (2018). AI4People: An ethical framework for a good AI society. Minds and Machines, 28, 689-707.", "AI ethics framework.", "https://doi.org/10.1007/s11023-018-9482-5"],
      ["Ghassemi, M., Oakden-Rayner, L., & Beam, A. (2021). The false hope of current approaches to explainable artificial intelligence in health care. Lancet Digital Health, 3(11), e745-e750.", "Explainable AI in health care critique.", "https://doi.org/10.1016/S2589-7500(21)00208-9"],
      ["Greenhalgh, T., Wherton, J., Papoutsi, C., Lynch, J., Hughes, G., A'Court, C., Hinder, S., Fahy, N., Procter, R., & Shaw, S. (2017). Beyond adoption: A new framework for theorizing and evaluating nonadoption, abandonment, and challenges to the scale-up, spread, and sustainability of health and care technologies. Journal of Medical Internet Research, 19(11), e367.", "Health care technology adoption, abandonment, scale-up, spread, and sustainability.", "https://doi.org/10.2196/jmir.8775"],
      ["Jordan, M. I., & Mitchell, T. M. (2015). Machine learning: Trends, perspectives, and prospects. Science, 349(6245), 255-260.", "Machine learning trends and prospects.", "https://doi.org/10.1126/science.aaa8415"],
      ["Kahn, M. G., Brown, J. S., Chun, A. T., Davidson, B. N., Meeker, D., Ryan, P. B., Schilling, L. M., Weiskopf, N. G., Williams, A. E., & Zozus, M. N. (2015). Transparent reporting of data quality in distributed data networks. eGEMs, 3(1), 1052.", "Data quality reporting in distributed networks.", "https://doi.org/10.13063/2327-9214.1052"],
      ["LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. Nature, 521, 436-444.", "Deep learning overview.", "https://doi.org/10.1038/nature14539"],
      ["Mehrabi, N., Morstatter, F., Saxena, N., et al. (2021). A survey on bias and fairness in machine learning. ACM Computing Surveys, 54(6).", "Bias and fairness survey.", "https://doi.org/10.1145/3457607"],
      ["Miotto, R., Wang, F., Wang, S., Jiang, X., & Dudley, J. (2017). Deep learning for healthcare: Review, opportunities and challenges. Briefings in Bioinformatics, 19(6), 1236-1246.", "Deep learning for health care review.", "https://doi.org/10.1093/bib/bbx044"],
      ["Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. Science, 366(6464), 447-453.", "Racial bias in health population management algorithms.", "https://doi.org/10.1126/science.aax2342"],
      ["Rajkomar, A., Dean, J., & Kohane, I. (2019). Machine learning in medicine. New England Journal of Medicine, 380(14), 1347-1358.", "Machine learning in medicine.", "https://doi.org/10.1056/NEJMra1814259"],
      ["Shilo, S., Rossman, H., & Segal, E. (2020). Axes of a revolution: Challenges and promises of big data in healthcare. Nature Medicine, 26, 29-38.", "Big data in health care.", "https://doi.org/10.1038/s41591-019-0727-5"],
      ["Vespignani, A., et al. (2020). Modelling COVID-19. Nature Reviews Physics, 2, 279-281.", "COVID-19 modeling.", "https://doi.org/10.1038/s42254-020-0178-4"]
    ]
  }
];

const playResources = {
  1: [
    ["NIST AI Risk Management Framework (AI RMF 1.0)", "Use as the anchor framework for responsible AI principles, risk language, and agency guardrails.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["ASPPH AI Framework Report", "Human-centered AI framing, public health systems-change language, AI literacy, and transparency expectations.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["World Health Organization: Ethics and governance of AI for health", "Supports health-sector principles for transparency, equity, responsibility, and human oversight.", "https://www.who.int/publications/i/item/9789240029200"],
    ["OECD AI Principles", "Useful for drafting high-level principles that are recognized across governments and institutions.", "https://oecd.ai/en/ai-principles"],
    ["Blueprint for an AI Bill of Rights", "Rights, protections, notice, human alternatives, and algorithmic discrimination safeguards.", "https://bidenwhitehouse.archives.gov/ostp/ai-bill-of-rights/"]
  ],
  2: [
    ["CDC Data Modernization Initiative", "Use to assess data modernization, interoperability, cloud readiness, and AI-ready infrastructure gaps.", "https://www.cdc.gov/surveillance/data-modernization/index.html"],
    ["ASPPH AI Framework Report", "Readiness review of fragmented adoption, policy gaps, staff capacity, and legal or political constraints.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["CDC STLT resources", "State, territorial, local, and tribal public health capacity, planning, and implementation context.", "https://www.cdc.gov/public-health-gateway/php/index.html"],
    ["CSTE: Driving public health in the fast lane", "Supports readiness discussions about modern surveillance, data modernization, and public health data capacity.", "https://www.cste.org/"],
    ["Public Health Infrastructure Grant", "Useful when readiness gaps point to workforce, data systems, organizational capacity, or equity investments.", "https://www.cdc.gov/infrastructure-phig/php/index.html"]
  ],
  3: [
    ["NIST AI Risk Management Framework (AI RMF 1.0)", "Use to structure governance, risk tiers, documentation, oversight, and monitoring expectations.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["ASPPH AI Framework Report", "Modular AI policy, community trust, tiered data classification, incident reporting, and AI management system considerations.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["HHS AI use case inventory requirements", "Guidance for documenting AI use cases, owners, purposes, and reporting obligations.", "https://www.hhs.gov/about/agencies/asa/ocio/ai/use-case-inventory/index.html"],
    ["HHS Civil Rights and AI", "Supports governance requirements for equity, nondiscrimination, and civil rights review.", "https://www.hhs.gov/civil-rights/for-individuals/special-topics/ai/index.html"],
    ["HIPAA and Business Associate Agreements", "Use when governance decisions involve PHI, vendors, cloud tools, or partner data access.", "https://www.hhs.gov/hipaa/index.html"],
    ["FedRAMP", "Reference when reviewing cloud services, hosted AI tools, and federal security authorization status.", "https://www.fedramp.gov/"]
  ],
  4: [
    ["CDC STLT resources", "Use for state, territorial, local, and tribal public health engagement context.", "https://www.cdc.gov/public-health-gateway/php/index.html"],
    ["ASPPH AI Framework Report", "Community trust, plain-language transparency, and missing voices analysis.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["ASTHO", "Peer network for state and territorial health agency implementation examples and policy learning.", "https://www.astho.org/"],
    ["NACCHO", "Peer network for local health departments, community engagement, and local implementation learning.", "https://www.naccho.org/"],
    ["Tribal data sovereignty principles", "Reference when AI planning involves Tribal communities, Tribal data, or Tribal governance contexts.", "https://dpcpsi.nih.gov/thro"],
    ["HHS Civil Rights and AI", "Supports stakeholder engagement around equity, nondiscrimination, and disparate impact concerns.", "https://www.hhs.gov/civil-rights/for-individuals/special-topics/ai/index.html"]
  ],
  5: [
    ["Public Health Infrastructure Grant", "Use when workforce development requires funding for staff capacity, training, governance, or organizational infrastructure.", "https://www.cdc.gov/infrastructure-phig/php/index.html"],
    ["ASPPH AI Framework Report", "AI literacy, ethical reasoning, communicating uncertainty, and the AI bridge professional role.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["CDC STLT Data Connection", "Peer-learning and community-of-practice resource for public health data modernization and AI capacity building.", "https://www.cdc.gov/data-modernization/php/stlt-data-connection/index.html"],
    ["Public Health Foundation TRAIN Learning Network", "Trusted training platform for public health workforce development and competency-building.", "https://www.train.org/"],
    ["NACCHO", "Resource for local public health workforce learning, implementation examples, and peer exchange.", "https://www.naccho.org/"]
  ],
  6: [
    ["CDC Crisis and Emergency Risk Communication", "Useful for planning clear communications, trust-building, and response messaging when workflows change.", "https://emergency.cdc.gov/cerc/"],
    ["plainlanguage.gov", "Supports plain-language communication planning for staff, partners, and public-facing materials.", "https://www.plainlanguage.gov/"],
    ["AHRQ TeamSTEPPS", "Team communication, role clarity, and operational change support in health settings.", "https://www.ahrq.gov/teamstepps/index.html"],
    ["NIST AI Risk Management Framework (AI RMF 1.0)", "Use to connect change management with human oversight, accountability, and risk communication.", "https://www.nist.gov/itl/ai-risk-management-framework"]
  ],
  7: [
    ["NIST AI Risk Management Framework (AI RMF 1.0)", "Supports risk-based screening, governance review, and use case prioritization.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["ASPPH AI Framework Report", "Human-centered decision rules, missing voices analysis, and environmental/resource impact considerations during prioritization.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["HHS Civil Rights and AI", "Use when scoring use cases for equity, nondiscrimination, and potential disparate impact.", "https://www.hhs.gov/civil-rights/for-individuals/special-topics/ai/index.html"],
    ["Fairness and Machine Learning", "Bias, fairness limitations, and tradeoffs when prioritizing AI use cases.", "https://fairmlbook.org/"],
    ["Mehrabi et al. (2021): A survey on bias and fairness in machine learning", "Peer-reviewed overview of bias sources and fairness considerations.", "https://doi.org/10.1145/3457607"]
  ],
  8: [
    ["Public Health Infrastructure Grant", "Funding source for workforce, data systems, organizational capacity, governance, and health equity work.", "https://www.cdc.gov/infrastructure-phig/php/index.html"],
    ["CDC Data Modernization Initiative", "Funding and strategy context for data infrastructure, interoperability, and analytics capacity.", "https://www.cdc.gov/surveillance/data-modernization/index.html"],
    ["HRSA digital health and telehealth programs", "Relevant to communication, access, rural health, and digital health use cases.", "https://www.hrsa.gov/rural-health/telehealth"],
    ["EPA environmental justice grants", "Relevant to environmental health, GeoAI, heat risk, and environmental justice applications.", "https://www.epa.gov/environmentaljustice/environmental-justice-grants-funding-and-technical-assistance"],
    ["FEMA grants", "Relevant to emergency preparedness, disaster resilience, and response-oriented AI planning.", "https://www.fema.gov/grants"]
  ],
  9: [
    ["CDC Data Modernization Initiative", "Use to align the playbook with data infrastructure, interoperability, cloud, and analytics modernization.", "https://www.cdc.gov/surveillance/data-modernization/index.html"],
    ["ONC Trusted Exchange Framework and Common Agreement", "Interoperability and exchange considerations that may affect playbook dependencies.", "https://www.healthit.gov/topic/interoperability/policy/trusted-exchange-framework-and-common-agreement-tefca"],
    ["CSTE", "Peer network and implementation resource for data modernization and surveillance planning.", "https://www.cste.org/"],
    ["PHAB Standards and Measures", "Useful for connecting AI playbook work to public health performance, quality, and accreditation expectations.", "https://phaboard.org/accreditation-recognition/version-2022/"]
  ],
  10: [
    ["CDC Crisis and Emergency Risk Communication", "Use to support trusted communications during deployment and workflow change.", "https://emergency.cdc.gov/cerc/"],
    ["plainlanguage.gov", "Plain-language staff communications, FAQs, and public-facing explanations.", "https://www.plainlanguage.gov/"],
    ["AHRQ TeamSTEPPS", "Supports team communication, implementation readiness, and adoption support.", "https://www.ahrq.gov/teamstepps/index.html"],
    ["CDC STLT Data Connection", "Peer-learning resource for implementation lessons and staff support approaches.", "https://www.cdc.gov/data-modernization/php/stlt-data-connection/index.html"]
  ],
  11: [
    ["FedRAMP", "Use for hosted AI tools, cloud services, and security authorization review.", "https://www.fedramp.gov/"],
    ["ASPPH AI Framework Report", "Architecture decisions such as tiered data classification, in-house/RAG approaches, and incident tracking.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["HIPAA and Business Associate Agreements", "PHI, vendor relationships, and privacy obligations during development and deployment.", "https://www.hhs.gov/hipaa/index.html"],
    ["CISA Secure by Design", "Supports secure development, vendor review, and deployment expectations.", "https://www.cisa.gov/securebydesign"],
    ["ONC Trusted Exchange Framework and Common Agreement", "Interoperability and data exchange issues in AI-enabled workflows.", "https://www.healthit.gov/topic/interoperability/policy/trusted-exchange-framework-and-common-agreement-tefca"],
    ["Kahn et al. (2015): Transparent reporting of data quality", "Peer-reviewed resource for data quality documentation and reporting.", "https://doi.org/10.13063/2327-9214.1052"]
  ],
  12: [
    ["HHS AI use case inventory requirements", "Use for maintaining AI system records, owners, purposes, status, and accountability.", "https://www.hhs.gov/about/agencies/asa/ocio/ai/use-case-inventory/index.html"],
    ["ASPPH AI Framework Report", "Public transparency, rigorous oversight, incident reporting, and bias tracking expectations.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["NIST AI Risk Management Framework (AI RMF 1.0)", "Governance review, ongoing risk management, and oversight.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["CISA Incident Response Plan Basics", "Supports incident response planning and escalation processes.", "https://www.cisa.gov/resources-tools/resources/incident-response-plan-irp-basics"],
    ["HIPAA and Business Associate Agreements", "Privacy, data sharing, vendor oversight, and compliance obligations.", "https://www.hhs.gov/hipaa/index.html"],
    ["FedRAMP", "Ongoing security and cloud authorization review.", "https://www.fedramp.gov/"]
  ],
  13: [
    ["NIST AI Risk Management Framework (AI RMF 1.0)", "Use for monitoring, measurement, model drift, and continuous risk management.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["ASPPH AI Framework Report", "Ongoing bias tracking, hallucination and misinformation review, human-centered AI evaluation, and public accountability.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["Model drift and performance monitoring", "Sustainment risks requiring dashboards, audits, and improvement actions.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["Equity impact assessment and subgroup monitoring", "Monitoring disparate impact and subgroup performance after deployment.", "https://www.hhs.gov/civil-rights/for-individuals/special-topics/ai/index.html"],
    ["Kahn et al. (2015): Transparent reporting of data quality", "Supports data quality transparency in monitoring and evaluation.", "https://doi.org/10.13063/2327-9214.1052"],
    ["World Health Organization: Ethics and governance of AI for health", "Supports ongoing oversight, accountability, and responsible use after implementation.", "https://www.who.int/publications/i/item/9789240029200"]
  ]
};

function resourcesForPlay(play) {
  const resources = playResources[play.id] || [];
  if (!resources.length) return "";
  return `<section class="panel"><h2>Resources</h2><div class="resource-list">${resources.map(([title, note, url])=>`
    <article class="resource-item">
      <h3><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
      <p>${note}</p>
    </article>`).join("")}</div></section>`;
}

const backgroundMaterial = {
  "understanding-ai": {
    sections: [
      { title: "What AI Means for Public Health", body: "Artificial intelligence is a family of methods that enable computer systems to learn from data, recognize patterns, generate new content, and support action toward defined goals. For public health agencies, the most consequential near-term branches are generative AI and agentic AI." },
      { title: "Why This Comes First", body: "Understanding what these systems can and cannot do is the starting point for responsible adoption. Agencies need a shared vocabulary before they can set guardrails, evaluate vendors, select use cases, or explain AI-supported workflows to staff and communities." }
    ],
    bulletsTitle: "Core concepts",
    bullets: ["AI is not one technology or one product category.", "Generative AI produces new content from prompts and source material.", "Agentic AI can coordinate a sequence of actions across systems under defined rules.", "Public health use requires human review, privacy protections, equity monitoring, and governance."]
  },
  "generative-ai": {
    sections: [
      { title: "Definition", body: "Generative AI refers to systems trained on large bodies of existing data that can produce new content, including text, images, code, summaries, and synthetic datasets, when prompted by a user." },
      { title: "Large Language Models", body: "The most widely deployed generative AI systems are large language models. They learn statistical patterns across very large text collections and can generate fluent responses to natural-language questions or instructions." }
    ],
    bulletsTitle: "Public health capabilities",
    bullets: ["Draft health education materials, vaccination messages, press releases, and program protocols.", "Retrieve and synthesize regulatory guidance, policy documents, and scientific literature using retrieval-augmented generation.", "Translate statistical outputs and surveillance findings into plain-language summaries.", "Write, debug, and explain code for data analysis and visualization.", "Generate realistic but de-identified synthetic datasets for model testing and training."]
  },
  "agentic-ai": {
    sections: [
      { title: "Definition", body: "Agentic AI systems can analyze information, generate outputs, and take a sequence of actions toward a defined goal across multiple systems while following explicit rules and retaining human oversight." },
      { title: "Why It Matters", body: "Agentic capabilities are most useful where public health work already involves multi-step workflows: gathering evidence, monitoring information streams, routing tasks, drafting updates, and handing decisions back to qualified staff." }
    ],
    bulletsTitle: "Practical agentic uses",
    bullets: ["Pull data from multiple systems, summarize findings, and route a draft brief for epidemiologist review.", "Monitor incoming news feeds or case reports, classify and prioritize items, and create surveillance task queues.", "Draft follow-up messages to patients or partners and queue them for staff approval.", "Coordinate dashboards, case management systems, and communication platforms when predefined thresholds are crossed."]
  },
  "deep-research": {
    sections: [
      { title: "A Practical Agentic Capability", body: "Deep Research tools autonomously plan and execute multi-step research tasks, gather and cross-reference sources, and generate citation-based reports with transparent reasoning for expert review." },
      { title: "Best Fit", body: "These tools are well suited for first drafts of literature synthesis, policy and legal scans, strategic planning, scenario analysis, and comparative program reviews. They should accelerate expert work, not replace expert validation." }
    ],
    bulletsTitle: "Appropriate tasks",
    bullets: ["Literature synthesis on emerging threats or intervention strategies.", "Policy and legal scans across jurisdictions.", "Strategic planning and scenario analysis.", "Comparative analysis of public health programs, interventions, or regulations."]
  },
  "workflows": {
    sections: [
      { title: "Common Public Health Workflow", body: "Many public health activities move from signal detection to evidence gathering, analysis, synthesis, briefing, communication, and decision support. Mapping AI to workflow stages helps agencies choose bounded, reviewable uses." }
    ],
    table: [
      ["Signal Detection", "Identify signals from surveillance systems, laboratory reporting, emergency departments, or environmental monitoring.", "Anomaly detection and LLM-assisted monitoring of open-source information streams."],
      ["Evidence Gathering", "Collect evidence to determine whether a signal represents a meaningful concern.", "Agentic systems retrieve datasets, compile literature, and assemble supporting documentation."],
      ["Analysis", "Evaluate collected information to determine significance.", "AI-supported statistical analysis, exploratory visualization, and pattern identification."],
      ["Synthesis", "Combine information from multiple sources into a coherent picture.", "Generative AI summarizes findings, consolidates reports, and drafts evidence summaries."],
      ["Briefing and Communication", "Communicate findings through dashboards, situation reports, policy briefs, or advisories.", "Generative AI drafts reports, summarizes trends, and adapts messages for audiences."],
      ["Decision Support", "Use evidence to guide response activities and policy decisions.", "AI organizes relevant information and produces structured briefing materials for leadership review."]
    ]
  },
  "risks": {
    sections: [
      { title: "Risk Is Operational", body: "Generative and agentic AI risks are especially consequential in public health because errors can affect trust, equity, privacy, resource allocation, and public communication." }
    ],
    risks: [
      ["Hallucination", "AI can generate plausible-sounding but incorrect information.", "Require human adjudication before consequential action."],
      ["Performance degradation with complexity", "Accuracy can drop as tasks become more complex or ambiguous.", "Match AI tools to bounded tasks and validate before deployment."],
      ["Data and representational bias", "Models trained on non-representative data can underperform for underrepresented populations.", "Assess data provenance and monitor subgroup performance continuously."],
      ["Privacy and data sovereignty", "Sending protected or sensitive data to unsuitable tools can violate HIPAA or tribal data sovereignty principles.", "Use appropriate legal agreements, access controls, and approved environments."],
      ["Automation bias", "Staff may reduce critical scrutiny after working with AI outputs over time.", "Use audits, review checkpoints, training, and governance reporting."]
    ]
  },
  "systems-shift": {
    sections: [
      { title: "Beyond Tool Adoption", body: "AI should be treated as a public health systems shift. It affects how agencies govern information, structure work, communicate with the public, procure technology, train staff, and maintain trust." },
      { title: "Why This Matters for STLTs", body: "State, tribal, local, and territorial public health departments often operate under constrained budgets, changing legal requirements, distributed authority, and high public accountability. Fragmented AI adoption can create uneven privacy protections, unclear ownership, duplicated vendor purchases, and inconsistent public explanations." }
    ],
    bulletsTitle: "Systems affected by AI",
    bullets: ["Governance and decision authority.", "Data modernization, interoperability, and data quality.", "Workforce roles, AI literacy, and change management.", "Procurement, vendor oversight, cybersecurity, and public records obligations.", "Community trust, transparency, and public accountability.", "Monitoring, incident reporting, continuous improvement, and system retirement."]
  },
  "digital-determinants": {
    sections: [
      { title: "AI and Digital Determinants of Health", body: "AI can become part of the digital environment that affects health and access to public health services. It can influence who receives information, how quickly services are delivered, which languages are supported, which risks are surfaced, and which communities are overlooked." },
      { title: "Public Health Implications", body: "A tool that improves efficiency for one group may create new barriers for another. Agencies should review AI-enabled workflows for broadband access, digital literacy, disability access, language access, immigration-related trust concerns, rural context, tribal data sovereignty, and misinformation exposure." }
    ],
    bulletsTitle: "Questions to ask",
    bullets: ["Who benefits from this AI-supported workflow and who may be excluded?", "Does the workflow depend on digital access, English proficiency, stable housing, or complete records?", "Could AI outputs affect access to services, benefits, outreach, enforcement, or public guidance?", "How will the agency detect inequitable effects after launch?"]
  },
  "human-centered-ai": {
    sections: [
      { title: "Definition", body: "Human-centered AI is designed to assist people, not displace accountability. Public health staff, communities, and accountable leaders remain responsible for interpretation, judgment, relationship-building, and consequential decisions." },
      { title: "Operational Rule", body: "For each use case, define what AI may do, what it may not do, who reviews outputs, who makes the final decision, how decisions are documented, and how people can challenge or correct an AI-supported outcome." }
    ],
    bulletsTitle: "Required safeguards",
    bullets: ["Named human owner for every consequential decision.", "Human review before public communication, enforcement, service denial, escalation, or clinical/public health action.", "Audit trail showing AI output, human review, decision, and rationale.", "Correction or appeal pathway when people are affected.", "Monitoring for automation bias and over-trust."]
  },
  "ai-literacy": {
    sections: [
      { title: "What AI Literacy Means", body: "AI literacy is the ability to recognize AI use, understand what a system can and cannot do, evaluate outputs critically, protect sensitive information, communicate uncertainty, and know when AI should not be used." },
      { title: "Role-Based Expectations", body: "All staff need basic awareness, but supervisors, communications staff, epidemiologists, data analysts, procurement staff, IT/security staff, legal/privacy staff, equity staff, and governance members need different depth and practice examples." }
    ],
    bulletsTitle: "Core staff competencies",
    bullets: ["Recognize generative, predictive, and agentic AI use.", "Avoid entering PHI, confidential, or restricted data into unapproved tools.", "Check outputs for hallucinations, bias, missing context, and unsupported claims.", "Document AI assistance when required by policy.", "Escalate concerns through governance or incident reporting pathways."]
  },
  "automation-bias": {
    sections: [
      { title: "Definition", body: "Automation bias occurs when people over-rely on AI outputs because the system appears fast, confident, technical, or authoritative. Over-trust can be especially risky in high-pressure public health settings." },
      { title: "Prevention", body: "Workflows should require reviewers to check source evidence, local context, limitations, uncertainty, and subgroup impacts. Reviewers should have permission and time to disagree with AI outputs." }
    ],
    bulletsTitle: "Design controls",
    bullets: ["Display limitations and uncertainty with AI outputs.", "Require evidence links or source material for factual summaries.", "Use second review for high-impact decisions.", "Track cases where staff override or correct AI outputs.", "Train staff to ask what evidence would change the recommendation."]
  },
  "missing-voices": {
    sections: [
      { title: "Definition", body: "Missing voices analysis identifies people, communities, settings, and forms of knowledge that are absent or poorly represented in the data, design process, validation evidence, or monitoring plan." },
      { title: "Why It Matters", body: "An AI system may perform acceptably in aggregate while failing for small populations, rural communities, tribal communities, immigrants, people with disabilities, people with limited English proficiency, people experiencing homelessness, or communities with incomplete records." }
    ],
    bulletsTitle: "Review focus",
    bullets: ["Groups missing or underrepresented in source data.", "Language, accessibility, and digital access barriers.", "Tribal sovereignty and community data governance concerns.", "Historical underreporting, misclassification, and mistrust.", "Subgroup validation and monitoring plans."]
  },
  "public-transparency": {
    sections: [
      { title: "Plain-Language Transparency", body: "Public health agencies should be able to explain when AI is used, what purpose it serves, what data are involved, what humans still decide, what the system cannot do, and how questions or concerns can be raised." },
      { title: "Trust and Accountability", body: "Transparency is not a marketing statement. It is part of accountability, especially when AI-supported workflows affect public communication, eligibility, prioritization, surveillance, inspections, outreach, or community-facing decisions." }
    ],
    bulletsTitle: "Public notice elements",
    bullets: ["What AI-supported system or workflow is being used.", "Why the department is using it.", "What data are used and what data are not used.", "How human review and final decision-making work.", "Known limitations, risks, and safeguards.", "How people can ask questions, request help, or report concerns."]
  },
  "tiered-data-use": {
    sections: [
      { title: "Purpose", body: "Tiered data use gives staff clear rules for which data can be used with which AI tools. It prevents accidental disclosure and supports consistent decisions across programs." },
      { title: "Typical Tiers", body: "A practical framework may classify data as public, internal, confidential, or highly restricted. Highly restricted data may require in-house systems, approved enterprise tools, specific vendor terms, or complete prohibition from AI use." }
    ],
    bulletsTitle: "AI environment decisions",
    bullets: ["Public AI tools may be limited to public or fully de-identified content.", "Enterprise AI tools may support internal drafting if contract and security terms are approved.", "In-house or RAG systems may be needed for confidential reference material.", "Highly restricted data require explicit privacy, legal, security, and governance approval.", "Tribal data requires governance by the appropriate tribal authority."]
  },
  "environmental-impact": {
    sections: [
      { title: "Why It Belongs in Public Health", body: "AI systems can consume substantial energy, water, hardware, and cloud resources. These impacts are public health concerns when they intersect with environmental justice, climate resilience, procurement, and community burden." },
      { title: "Practical Review", body: "Most agency reviews can be lightweight: identify whether the use is compute-intensive or vendor-hosted, ask about sustainability and data center practices, consider lower-impact alternatives, and document whether the public health value justifies the resource burden." }
    ],
    bulletsTitle: "Review factors",
    bullets: ["Energy and water intensity of the AI service.", "Hardware, e-waste, and cloud infrastructure implications.", "Data center location and environmental justice concerns.", "Vendor sustainability commitments and reporting.", "Lower-impact alternatives such as smaller models, retrieval systems, or workflow redesign."]
  },
  "bridge-professional": {
    sections: [
      { title: "Role Definition", body: "The AI bridge professional is a public health translator: someone with enough technical understanding to work with IT and vendors, enough program knowledge to understand workflows, and enough communication skill to support leadership, governance, and community conversations." },
      { title: "Why Agencies Need This Role", body: "AI projects often fail at handoffs between program goals, data realities, legal constraints, vendor claims, staff concerns, and community expectations. A bridge role helps turn those handoffs into documented decisions." }
    ],
    bulletsTitle: "Common responsibilities",
    bullets: ["Translate use case needs into governance and technical requirements.", "Help staff document workflows, risks, data needs, and human review points.", "Coordinate between program owners, IT, legal/privacy, procurement, equity, and vendors.", "Support AI literacy, change management, and community-facing explanations.", "Track unresolved questions and route them to the right decision-makers."]
  },
  "funding": {
    sections: [
      { title: "Funding Strategy", body: "Public health departments do not need to fund AI from scratch. AI can often be positioned as a capability layer on top of data modernization, workforce, infrastructure, equity, and evaluation investments." },
      { title: "DMI and PHIG", body: "CDC Data Modernization Initiative investments can support interoperable, cloud-ready, standards-based infrastructure. Public Health Infrastructure Grant resources can support workforce, data systems, organizational capacity, and health equity work needed for responsible AI." }
    ],
    table: [
      ["CDC Data Modernization Initiative", "Shared data infrastructure, cloud environments, APIs, standards, and AI-ready data pipelines."],
      ["Public Health Infrastructure Grant", "AI-related workforce, governance capacity, data systems, organizational change, and equity monitoring."],
      ["HRSA digital health and telehealth programs", "Patient communication drafting, document search, and health equity analysis."],
      ["NIH / NSF smart health programs", "Research partnerships, model evaluation, fine-tuning, and agentic system development."],
      ["SAMHSA technology-based services", "Early identification, intervention support, client communication, and care coordination."],
      ["EPA environmental justice grants", "GeoAI, environmental health analysis, and heat risk mapping."],
      ["FEMA emergency management grants", "Disaster resilience and agentic outbreak forecasting workflows."]
    ]
  },
  "using-together": {
    sections: [
      { title: "Playbook First, Toolkit During the Work", body: "The playbook describes what to do, who should be involved, and what success looks like. The toolkit provides structured forms, scoring frameworks, templates, and checklists to complete the work during meetings, workshops, and governance reviews." },
      { title: "How to Use the Pair", body: "Read the relevant play first, confirm the intended output, identify participants, then open the linked tools. Completed tools should be stored in a shared project folder so governance members, project staff, and auditors can access them later." }
    ],
    bulletsTitle: "Operating principles",
    bullets: ["Complete tools during the play, not as a separate paperwork exercise.", "Use crosswalks to confirm current play-to-tool mapping.", "Update living tools such as readiness scores, timelines, dashboards, and policy logs.", "Use governance review points to authorize movement from planning to pilots, scale, and sustainment."]
  }
};

const learningModuleResources = {
  "understanding-ai": [
    ["NIST AI Risk Management Framework", "Foundational vocabulary for trustworthy AI risk management.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["ASPPH AI Framework Report", "Public health framing for responsible AI education, research, practice, governance, and workforce preparation.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["WHO: Ethics and governance of artificial intelligence for health", "Health-sector principles for ethical and responsible AI use.", "https://www.who.int/publications/i/item/9789240029200"]
  ],
  "generative-ai": [
    ["WHO: Regulatory considerations on artificial intelligence for health", "Health-focused regulatory considerations for AI systems.", "https://iris.who.int/handle/10665/373421"],
    ["NIST Generative AI Profile", "Risk management profile for generative AI systems.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["ASPPH AI Framework Report", "Guidance on human-centered and responsible generative AI use in public health contexts.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"]
  ],
  "agentic-ai": [
    ["NIST AI Risk Management Framework", "Useful for defining boundaries, oversight, monitoring, and accountability for agentic systems.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["WHO: Ethics and governance of artificial intelligence for health", "Health-sector governance principles for systems that can influence decisions or workflows.", "https://www.who.int/publications/i/item/9789240029200"],
    ["ASPPH AI Framework Report", "Public health governance, human oversight, and AI literacy context for agentic workflows.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"]
  ],
  "deep-research": [
    ["NIH PubMed", "Primary source for biomedical and public health literature searches.", "https://pubmed.ncbi.nlm.nih.gov/"],
    ["CDC Publications and Resources", "Public health reports, guidance, and evidence sources for staff review.", "https://www.cdc.gov/publications/"],
    ["ASPPH AI Framework Report", "Framework language for responsible use of AI-supported research and synthesis.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"]
  ],
  "workflows": [
    ["CDC Data Modernization Initiative", "Context for modern public health data flows and AI-ready infrastructure.", "https://www.cdc.gov/surveillance/data-modernization/index.html"],
    ["CDC STLT Data Connection", "Peer-learning resource for public health data modernization and workflow improvement.", "https://www.cdc.gov/data-modernization/php/stlt-data-connection/index.html"],
    ["NIST AI Risk Management Framework", "Framework for mapping workflow risks, controls, and monitoring.", "https://www.nist.gov/itl/ai-risk-management-framework"]
  ],
  "risks": [
    ["NIST AI Risk Management Framework", "Core framework for identifying, measuring, managing, and governing AI risk.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["HHS Civil Rights and AI", "Civil rights and nondiscrimination considerations for AI in health and human services.", "https://www.hhs.gov/civil-rights/for-individuals/special-topics/ai/index.html"],
    ["WHO: Ethics and governance of artificial intelligence for health", "Health AI risk, equity, transparency, and accountability guidance.", "https://www.who.int/publications/i/item/9789240029200"]
  ],
  "systems-shift": [
    ["ASPPH AI Framework Report", "Frames AI as a public health systems issue rather than a narrow technology purchase.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["CDC STLT resources", "State, tribal, local, and territorial public health implementation context.", "https://www.cdc.gov/public-health-gateway/php/index.html"],
    ["Public Health Infrastructure Grant", "Workforce, data systems, organizational capacity, and equity investments that can support responsible AI readiness.", "https://www.cdc.gov/infrastructure-phig/php/index.html"]
  ],
  "digital-determinants": [
    ["HHS Civil Rights and AI", "Civil rights context for AI-enabled access, language, disability, and service equity concerns.", "https://www.hhs.gov/civil-rights/for-individuals/special-topics/ai/index.html"],
    ["ASPPH AI Framework Report", "Human-centered AI, missing voices, public trust, and equity framing.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["CDC Health Equity", "Public health equity context for assessing AI-supported workflows.", "https://www.cdc.gov/healthequity/"]
  ],
  "human-centered-ai": [
    ["Blueprint for an AI Bill of Rights", "Principles for automated systems that preserve human agency, notice, explanation, and safeguards.", "https://bidenwhitehouse.archives.gov/ostp/ai-bill-of-rights/"],
    ["NIST AI Risk Management Framework", "Useful for defining human oversight, decision accountability, and risk controls.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["ASPPH AI Framework Report", "Public health-specific framing for human-centered AI and accountable implementation.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"]
  ],
  "ai-literacy": [
    ["ASPPH AI Framework Report", "AI literacy, bridge professional, and workforce preparation concepts for public health.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["Public Health Foundation TRAIN Learning Network", "Training platform for public health workforce development.", "https://www.train.org/"],
    ["CDC Public Health Workforce Development", "Public health workforce training and capability-building context.", "https://www.cdc.gov/workforce/"]
  ],
  "automation-bias": [
    ["NIST AI Risk Management Framework", "Risk controls for over-trust, human review, testing, and monitoring.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["HHS Civil Rights and AI", "Equity and civil rights considerations when automated systems influence decisions.", "https://www.hhs.gov/civil-rights/for-individuals/special-topics/ai/index.html"],
    ["WHO: Ethics and governance of artificial intelligence for health", "Health AI ethics guidance addressing human autonomy and oversight.", "https://www.who.int/publications/i/item/9789240029200"]
  ],
  "missing-voices": [
    ["ASPPH AI Framework Report", "Introduces missing voices and human-centered AI considerations for public health.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["CDC Health Equity", "Health equity context for identifying who may be missed or harmed by public health systems.", "https://www.cdc.gov/healthequity/"],
    ["NIH Tribal Health Research Office", "Tribal data sovereignty and tribal health research context.", "https://dpcpsi.nih.gov/thro"]
  ],
  "public-transparency": [
    ["Blueprint for an AI Bill of Rights", "Notice, explanation, and alternatives principles for automated systems.", "https://bidenwhitehouse.archives.gov/ostp/ai-bill-of-rights/"],
    ["ASPPH AI Framework Report", "Public transparency, trust, and community accountability expectations.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["NIST AI Risk Management Framework", "Governance and transparency concepts for trustworthy AI.", "https://www.nist.gov/itl/ai-risk-management-framework"]
  ],
  "tiered-data-use": [
    ["HIPAA", "Privacy requirements when protected health information may be involved.", "https://www.hhs.gov/hipaa/index.html"],
    ["FedRAMP", "Cloud security authorization context for systems handling sensitive government data.", "https://www.fedramp.gov/"],
    ["NIH Tribal Health Research Office", "Tribal data governance and tribal sovereignty considerations.", "https://dpcpsi.nih.gov/thro"]
  ],
  "environmental-impact": [
    ["ASPPH AI Framework Report", "Resource, public health systems, and responsible AI framing.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["EPA Environmental Justice", "Environmental justice context for reviewing infrastructure, procurement, and community burden.", "https://www.epa.gov/environmentaljustice"],
    ["NIST AI Risk Management Framework", "Risk management structure for documenting environmental and operational tradeoffs.", "https://www.nist.gov/itl/ai-risk-management-framework"]
  ],
  "bridge-professional": [
    ["ASPPH AI Framework Report", "Bridge professional concept and AI workforce implications.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["Public Health Foundation TRAIN Learning Network", "Training infrastructure for building cross-functional workforce capacity.", "https://www.train.org/"],
    ["CDC STLT Data Connection", "Peer-learning context for public health data modernization and implementation support.", "https://www.cdc.gov/data-modernization/php/stlt-data-connection/index.html"]
  ],
  "funding": [
    ["CDC Data Modernization Initiative", "Potential alignment for data infrastructure and AI-ready modernization investments.", "https://www.cdc.gov/surveillance/data-modernization/index.html"],
    ["Public Health Infrastructure Grant", "Potential alignment for workforce, data systems, organizational capacity, and equity investments.", "https://www.cdc.gov/infrastructure-phig/php/index.html"],
    ["HRSA Telehealth Programs", "Potential alignment for digital health, telehealth, and access-related AI use cases.", "https://www.hrsa.gov/rural-health/telehealth"]
  ],
  "using-together": [
    ["NIST AI Risk Management Framework", "Use as a shared risk language while completing playbook tools.", "https://www.nist.gov/itl/ai-risk-management-framework"],
    ["ASPPH AI Framework Report", "Use as background for public health AI governance, workforce, and accountability concepts.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
    ["CDC STLT resources", "Use to ground implementation planning in state, tribal, local, and territorial public health operations.", "https://www.cdc.gov/public-health-gateway/php/index.html"]
  ]
};

const learningModuleDeepDive = {
  "understanding-ai": {
    overview: "Public health staff do not need to become machine learning engineers, but they do need a shared working understanding of what AI is, where it can fail, and what kinds of tasks are appropriate for different AI approaches. This module helps teams distinguish pattern recognition, predictive analytics, generative AI, retrieval-augmented generation, and agentic workflows so planning discussions do not treat every AI product as the same kind of intervention.",
    sections: [
      { title: "What Staff Should Be Able to Do", items: ["Explain AI in plain language to program staff, leaders, partners, and community members.", "Identify whether a proposed use is content generation, search and retrieval, prediction, classification, workflow automation, or decision support.", "Name the human role responsible for reviewing, approving, correcting, or rejecting AI-supported outputs.", "Recognize that data quality, workflow design, governance, and public trust are as important as model performance."] },
      { title: "Public Health Application", items: ["Use AI concepts to map where an agency already has informal AI use, such as staff drafting messages with public tools or vendors embedding AI into existing platforms.", "Use a common vocabulary during governance review so privacy, IT, program, legal, equity, and communications staff can evaluate the same workflow together.", "Translate technical capabilities into public health value: faster review, better consistency, broader language access, clearer documentation, or earlier signal detection."] },
      { title: "Implementation Check", items: ["Before any AI project begins, confirm the purpose, data involved, intended users, public impact, review requirements, and escalation pathway.", "Document what the AI is allowed to do and what decisions remain with qualified public health staff.", "Avoid selecting tools before the department has established vision, readiness, governance, and data-use expectations."] }
    ]
  },
  "staff-training": {
    overview: "These learning modules are designed to help health departments create a shared baseline before AI projects begin. They can be used for staff onboarding, leadership orientation, governance preparation, cross-program training, or pre-work before readiness assessment and use case prioritization.",
    sections: [
      { title: "How Departments Can Use the Learning Modules", items: ["Use the modules as self-paced reading before workshops or governance meetings.", "Use one module at a time as a 30- to 60-minute staff training session.", "Assign modules as pre-work before completing the readiness assessment or prioritizing AI use cases.", "Use module exercises to generate artifacts that feed directly into playbook tools, governance review, and implementation planning."] },
      { title: "Recommended Training Sequence", items: ["Start with Understanding Artificial Intelligence, Generative AI, and Agentic AI so staff share basic vocabulary.", "Move into Risks, Human-Centered AI, Missing Voices, Public Transparency, and Tiered Data Use before use cases are selected.", "Use AI Literacy, Bridge Professional Role, Funding, procurement, privacy, validation, incident response, and role-based guidance when preparing implementation teams.", "Use AI Support Areas after foundational topics so teams can discuss practical opportunities without skipping governance."] },
      { title: "Facilitation Tips", items: ["Start each session with a concrete public health workflow rather than a general technology discussion.", "Ask participants to identify what AI may support, what humans must decide, and what data safeguards are needed.", "End each session with a documented takeaway: a question for governance, a possible tool to complete, or a readiness gap to address.", "Keep examples local to the department's programs, authorities, data systems, and community context."] }
    ]
  },
  "generative-ai": {
    overview: "Generative AI is most useful when public health work requires drafting, summarizing, translating, organizing, or explaining information. It can reduce the time required to create first drafts, compare documents, prepare meeting materials, or convert technical findings into plain language. It should not be used as an unchecked authority on scientific evidence, law, policy, clinical guidance, or public communication.",
    sections: [
      { title: "High-Value Uses", items: ["Draft public health education materials that staff revise for accuracy, tone, literacy level, and cultural context.", "Summarize long guidance documents, inspection notes, surveillance updates, grant requirements, or policy changes for internal review.", "Create first drafts of FAQs, talking points, training materials, meeting agendas, standard operating procedures, and implementation checklists.", "Support grant writing by organizing goals, activities, staffing needs, evaluation measures, and sustainability plans."] },
      { title: "Quality Controls", items: ["Require staff review for factual accuracy, citations, public health recommendations, legal requirements, and equity implications.", "Use approved source materials or retrieval-augmented generation when the output must reflect specific agency policy or current guidance.", "Keep protected health information, confidential investigations, sensitive partner data, and restricted records out of public AI tools.", "Label AI-assisted drafts internally so reviewers understand where human verification is needed."] },
      { title: "When Not to Use It", items: ["Do not use generative AI to make final eligibility, enforcement, clinical, outbreak response, or public warning decisions.", "Do not rely on unsourced outputs for legal interpretation, epidemiologic conclusions, or scientific claims.", "Do not deploy public-facing chatbots without governance approval, testing, monitoring, and an escalation pathway to staff."] }
    ]
  },
  "agentic-ai": {
    overview: "Agentic AI moves beyond drafting and summarizing by coordinating multiple steps toward a defined goal. In public health, this might mean monitoring incoming reports, gathering relevant data, preparing a draft brief, routing it to the right team, and updating a task queue. Because agentic systems can initiate actions, they require tighter boundaries, audit logs, role-based access, and human approval before consequential steps occur.",
    sections: [
      { title: "Appropriate Starting Points", items: ["Internal workflows where the AI can gather, organize, and route information without contacting the public or making final decisions.", "Surveillance support tasks such as clustering incoming signals, preparing evidence packets, or flagging items for epidemiologist review.", "Administrative workflows such as creating task lists from meeting notes, tracking approvals, or reminding owners about deadlines.", "Care coordination support where staff review all outreach recommendations before any member, client, or patient contact."] },
      { title: "Required Controls", items: ["Define allowable actions, prohibited actions, required human approvals, and emergency shutoff procedures.", "Maintain audit logs showing what the AI accessed, generated, changed, routed, or recommended.", "Limit access to the minimum systems and data needed for the workflow.", "Test failure scenarios, including wrong routing, stale data, biased prioritization, hallucinated summaries, and inappropriate escalation."] },
      { title: "Public Health Accountability", items: ["A named program or operational owner should remain accountable for the workflow.", "The AI should never obscure who made a public health decision or why a particular action was taken.", "Governance should approve agentic workflows before deployment and review performance after launch."] }
    ]
  },
  "deep-research": {
    overview: "Deep Research tools can help public health departments move faster when they need a structured scan of literature, policies, funding requirements, legal materials, program models, or emerging issues. These tools are best treated as research assistants that produce a starting synthesis. Staff still need to verify sources, check dates, resolve conflicting evidence, and decide what applies to the department's context.",
    sections: [
      { title: "Useful Assignments", items: ["Scan peer-reviewed and agency sources on an emerging disease, intervention, risk factor, or public health technology.", "Compare AI policies, procurement requirements, or governance models across jurisdictions.", "Summarize grant notices, eligibility requirements, evaluation expectations, and allowable costs.", "Prepare a briefing that separates strong evidence, emerging evidence, implementation examples, and unanswered questions."] },
      { title: "Review Standards", items: ["Require source links and citations for every consequential claim.", "Check publication dates, jurisdiction, population relevance, and whether the source is primary, secondary, vendor-authored, or opinion-based.", "Have subject matter experts review conclusions before they inform policy, funding, public communication, or operational decisions.", "Document what sources were included or excluded when the synthesis supports governance or leadership decisions."] },
      { title: "Actionable Output", items: ["Ask for a decision-ready format: summary, implications for STLT public health, risks, resource needs, equity considerations, and recommended next steps.", "Convert the research output into a tool artifact such as a policy scan, gap register, governance memo, funding brief, or implementation playbook.", "Update scans when guidance, funding rules, laws, or evidence change."] }
    ]
  },
  "workflows": {
    overview: "AI is most useful when it is tied to a specific public health workflow rather than introduced as a general productivity tool. Workflow mapping helps teams identify where AI could support signal detection, evidence gathering, analysis, synthesis, communication, decision support, documentation, monitoring, or service delivery without displacing accountability.",
    sections: [
      { title: "Workflow Mapping Questions", items: ["What event starts the workflow, and what output ends it?", "Where do staff spend time searching, summarizing, routing, checking, rewriting, or reconciling information?", "Which steps require judgment, legal authority, community relationship, scientific interpretation, or public accountability?", "What data systems, forms, emails, dashboards, or documents are involved?"] },
      { title: "Potential AI Support", items: ["Detect unusual patterns and prepare alerts for human review.", "Summarize reports, partner updates, inspection notes, or case records into structured fields.", "Draft situation reports, FAQs, or internal updates from approved source material.", "Track implementation tasks, deadlines, approvals, and follow-up actions across teams."] },
      { title: "Design Safeguards", items: ["Keep AI support close to the staff workflow and test whether it actually saves time or improves quality.", "Measure false positives, false negatives, staff burden, equity effects, and downstream operational impact.", "Make handoffs explicit so staff know when an AI output is a draft, a flag, a recommendation, or a required review item."] }
    ]
  },
  "risks": {
    overview: "AI risks in public health are not limited to technical errors. They include privacy exposure, hallucinated guidance, biased prioritization, automation bias, model drift, vendor opacity, accessibility barriers, environmental burden, and loss of public trust. Risk management should begin before tool selection and continue through deployment and monitoring.",
    sections: [
      { title: "Common Risk Categories", items: ["Accuracy risk: the output is wrong, incomplete, out of date, or unsupported by evidence.", "Equity risk: the system performs worse for a subgroup, language community, rural area, disability group, Tribal community, or underrepresented population.", "Privacy and security risk: sensitive data are exposed to an inappropriate tool, vendor, model, or user.", "Operational risk: staff over-trust the system, workarounds emerge, or responsibilities become unclear.", "Transparency risk: the public cannot understand when AI is used, what humans decide, or how to raise concerns."] },
      { title: "Mitigation Practices", items: ["Use risk tiers so higher-impact systems receive deeper review, documentation, validation, and monitoring.", "Require human review, source verification, and documented decision ownership.", "Test outputs with realistic public health examples before use.", "Monitor errors, incidents, complaints, subgroup performance, and drift after deployment."] },
      { title: "Governance Triggers", items: ["Escalate to governance when AI affects public communication, eligibility, enforcement, surveillance prioritization, resource allocation, clinical or care coordination decisions, or community trust.", "Pause or retire systems when risk controls fail, performance changes, or the use no longer aligns with agency principles."] }
    ]
  },
  "systems-shift": {
    overview: "AI adoption is a systems change for public health departments. It affects data modernization, procurement, workforce roles, governance authority, legal review, community engagement, communications, emergency response, program operations, and evaluation. Treating AI as a one-time technology purchase leaves agencies with fragmented pilots and unmanaged risk.",
    sections: [
      { title: "Systems Affected", items: ["Data systems need quality checks, access rules, documentation, interoperability, and appropriate AI environments.", "Workforce systems need training, role clarity, bridge professionals, change support, and leadership expectations.", "Governance systems need intake, risk review, approval, monitoring, incident response, and policy updates.", "Community systems need transparency, plain-language explanation, feedback pathways, and attention to missing voices."] },
      { title: "Planning Implications", items: ["Sequence adoption through plays rather than approving isolated pilots.", "Connect AI planning to data modernization, workforce development, funding, procurement, and quality improvement.", "Identify where existing policies can be extended and where AI-specific standards are needed.", "Avoid pilots that cannot be sustained, monitored, evaluated, or governed."] },
      { title: "Leadership Role", items: ["Leaders should set the expectation that responsible AI is mission infrastructure, not a side project.", "Executive sponsors should ensure governance has authority, staff have time, and public accountability is built into decisions."] }
    ]
  },
  "digital-determinants": {
    overview: "AI can become a digital determinant of health because it shapes how people receive information, access services, are prioritized for outreach, experience language access, or are affected by automated decisions. Departments should examine whether AI-supported systems make services more reachable and fair, or whether they create new barriers.",
    sections: [
      { title: "Where Digital Determinants Appear", items: ["Chatbots, eligibility tools, translation systems, online appointment systems, risk scores, outreach lists, public dashboards, and complaint intake tools.", "Public health messaging that is generated, translated, personalized, or targeted with AI.", "Vendor systems that embed AI into case management, inspection, contact center, or analytics platforms."] },
      { title: "Equity Review Questions", items: ["Who benefits from the tool, and who might be excluded because of language, disability, broadband, device access, trust, literacy, geography, or data representation?", "Does the tool work for rural, Tribal, immigrant, older adult, disability, low-literacy, and limited-English-proficiency communities?", "Can people receive help, appeal errors, correct information, or use a non-AI pathway?"] },
      { title: "Action Steps", items: ["Include digital access and language access in use case prioritization.", "Test public-facing outputs with affected users before launch.", "Monitor service access, complaints, correction requests, and subgroup outcomes after deployment."] }
    ]
  },
  "human-centered-ai": {
    overview: "Human-centered AI begins with the people affected by a workflow: public health staff, community members, partners, and decision-makers. The goal is not to automate as much as possible. The goal is to improve public health work while preserving human judgment, relationships, dignity, explainability, and accountability.",
    sections: [
      { title: "Design Principles", items: ["Start with a public health problem and affected users, not with a tool.", "Define what humans must decide, approve, explain, or correct.", "Make AI outputs reviewable, editable, and contestable.", "Design for the staff who will use the system and the communities who may be affected by it."] },
      { title: "Workflow Practices", items: ["Name the decision owner for every AI-supported workflow.", "Require expert review before public-facing communication, enforcement, resource allocation, or clinical/care coordination action.", "Document correction, appeal, complaint, and escalation pathways.", "Evaluate whether the tool reduces burden or simply moves burden to different staff or communities."] },
      { title: "Community Accountability", items: ["Use engagement to identify concerns before launch, especially for high-impact or community-facing systems.", "Explain AI use in plain language and invite feedback.", "Avoid deploying systems where affected people cannot understand or challenge the outcome."] }
    ]
  },
  "ai-literacy": {
    overview: "AI literacy is a workforce capability. Staff should know what AI is, what it is approved for, what data may be used, how outputs can fail, how to document AI use, and when to escalate concerns. Literacy expectations should be role-based because leaders, program staff, analysts, IT, privacy, procurement, communications, and governance members have different responsibilities.",
    sections: [
      { title: "Core Competencies", items: ["Recognize approved and unapproved AI use.", "Protect PHI, confidential, restricted, and sensitive data.", "Identify hallucination, bias, automation bias, data quality problems, and inappropriate use.", "Use prompts, source materials, and review steps responsibly.", "Document AI-assisted work when required by agency policy."] },
      { title: "Role-Based Training", items: ["Executives need governance, risk, resource, and public accountability orientation.", "Program staff need workflow, privacy, prompt, and review guidance.", "Analysts need validation, documentation, model monitoring, and data quality practices.", "Communications staff need plain-language, misinformation, translation, and public review standards.", "Procurement and legal staff need vendor, contract, audit, and data-rights requirements."] },
      { title: "Sustainment", items: ["Refresh training as tools, policies, and risks change.", "Create reporting pathways for staff concerns and near misses.", "Use AI champions or bridge professionals to support day-to-day adoption."] }
    ]
  },
  "automation-bias": {
    overview: "Automation bias occurs when people give too much weight to AI output because it appears confident, precise, or authoritative. In public health, this can affect surveillance review, risk scoring, inspection documentation, prioritization, public messaging, or resource decisions. Deliberate review practices are needed so AI supports, rather than substitutes for, professional judgment.",
    sections: [
      { title: "Warning Signs", items: ["Staff stop checking sources because AI summaries are usually fluent.", "Risk scores become the primary basis for decisions without review of context.", "Draft messages are approved without checking public health guidance, equity implications, or local context.", "A workflow lacks a named human decision owner."] },
      { title: "Controls", items: ["Use second-review requirements for high-impact outputs.", "Require confidence, limitation, source, and uncertainty notes in briefs.", "Separate AI recommendations from human decisions in documentation.", "Train staff to look for omissions, unsupported claims, and plausible but wrong details."] },
      { title: "Monitoring", items: ["Audit samples of AI-assisted work.", "Track overrides, corrections, incidents, complaints, and false positives or false negatives.", "Review whether staff are using the tool as intended or developing unsafe shortcuts."] }
    ]
  },
  "missing-voices": {
    overview: "Missing voices analysis asks who is absent from the data, design process, validation testing, governance discussion, or evaluation. Public health AI can look accurate overall while failing groups that are underrepresented, misclassified, or affected differently by the workflow. Missing voices review should happen before use case approval and again during monitoring.",
    sections: [
      { title: "Who May Be Missing", items: ["People with limited English proficiency, people with disabilities, rural residents, people experiencing homelessness, immigrant communities, Tribal communities where applicable, older adults, children, justice-involved populations, and groups with limited digital access.", "Frontline staff who understand workflow realities but are not included in planning.", "Community partners who can identify trust, access, or cultural context concerns."] },
      { title: "How to Apply It", items: ["Review whether source data include the populations affected by the decision or communication.", "Ask whether subgroup performance will be tested before and after deployment.", "Use community validation when the workflow has public-facing or community-impacting consequences.", "Document what groups were consulted, what concerns were raised, and how the design changed."] },
      { title: "Ongoing Monitoring", items: ["Track subgroup performance, service access, complaints, corrections, and unintended impacts.", "Revisit the analysis when the model, data, policy, population, or workflow changes."] }
    ]
  },
  "public-transparency": {
    overview: "Transparency helps protect public trust. Public health departments should be able to explain when AI is used, why it is used, what data are involved, what humans decide, what safeguards exist, and how people can raise concerns or seek correction. Transparency should be proportional to risk and understandable to the affected audience.",
    sections: [
      { title: "What to Explain", items: ["The public health purpose of the AI-supported activity.", "Whether AI drafts, summarizes, prioritizes, routes, predicts, translates, or recommends.", "What data types are involved and what data are not used.", "Who reviews outputs and who makes final decisions.", "How people can ask questions, report concerns, or request correction."] },
      { title: "Formats", items: ["Public AI use notices for community-facing systems.", "FAQs for staff, partners, and affected communities.", "Plain-language summaries for governing boards, advisory committees, and public meetings.", "Internal records in the AI inventory and governance documentation."] },
      { title: "Trust-Building Practices", items: ["Be clear about limitations and human oversight rather than overstating AI capability.", "Avoid vague claims such as 'AI-powered' without explaining what the system actually does.", "Update notices when use, data, vendor, or risk level changes."] }
    ]
  },
  "tiered-data-use": {
    overview: "Tiered data use gives staff practical rules for which AI environments can be used with which kinds of information. Public, internal, confidential, protected, restricted, and sovereign data may require different tools, approvals, vendors, contracts, security controls, and documentation. Without tiers, staff may unintentionally place sensitive data in inappropriate AI systems.",
    sections: [
      { title: "Data Tiers", items: ["Public information that can be used in approved public or enterprise tools.", "Internal information that should stay within approved organizational environments.", "Confidential or sensitive operational data that require restricted access and review.", "Protected health information or legally protected records that require HIPAA, security, contractual, and minimum-necessary controls.", "Tribal or sovereign data, when applicable, that require governance by the appropriate Tribal authority."] },
      { title: "Operational Rules", items: ["Define which AI tools are approved for each data tier.", "Require data use agreements, business associate agreements, or vendor addenda when needed.", "Prohibit restricted information in public consumer AI tools.", "Document data sources, retention, access, and model-training restrictions."] },
      { title: "Implementation Steps", items: ["Train staff using real examples from their workflows.", "Include tiered data review in intake, procurement, governance, and incident response.", "Review vendor claims about data retention, training, logging, and deletion."] }
    ]
  },
  "environmental-impact": {
    overview: "AI systems can require substantial compute, energy, water, hardware, and vendor infrastructure. Public health departments do not need to perform complex environmental modeling for every use, but they should consider whether a proposed AI use is proportionate to the public health value, whether lower-impact alternatives exist, and whether infrastructure burdens raise environmental justice concerns.",
    sections: [
      { title: "Review Questions", items: ["Is the AI use necessary, or could a simpler analytic, workflow, or rule-based approach achieve the same goal?", "Will the vendor disclose sustainability practices, data center location, energy use, water use, or environmental commitments?", "Does the project require large-scale model training, high-volume generation, or continuous processing?", "Could infrastructure siting or resource burden affect communities already experiencing environmental inequities?"] },
      { title: "Procurement Relevance", items: ["Ask vendors for sustainability, compute, hosting, and data center information when relevant.", "Compare lower-impact model sizes, retrieval approaches, or existing enterprise tools.", "Include resource impacts in funding and sustainment planning."] },
      { title: "Decision Standard", items: ["Higher resource burden should be justified by clear public health value, governance approval, and feasible sustainment.", "Environmental review should be documented for high-compute or large-scale deployments."] }
    ]
  },
  "bridge-professional": {
    overview: "The AI bridge professional is a role or function that connects public health programs, data teams, IT, privacy, legal, procurement, vendors, leadership, and community partners. This role helps translate public health needs into technical requirements and technical risks into practical governance and implementation decisions.",
    sections: [
      { title: "Core Responsibilities", items: ["Help programs define use cases, workflow needs, success measures, and documentation requirements.", "Coordinate governance submissions, risk review, stakeholder engagement, and procurement questions.", "Translate model limitations, data quality issues, validation findings, and vendor claims for nontechnical audiences.", "Support staff training, change management, and implementation troubleshooting."] },
      { title: "Where the Role Fits", items: ["During readiness assessment to identify capacity gaps.", "During governance to prepare complete intake and review materials.", "During prioritization to compare public health value, feasibility, and risk.", "During deployment to coordinate training, monitoring, and incident escalation."] },
      { title: "Staffing Models", items: ["A large department may create a dedicated role or small AI implementation office.", "A smaller department may assign bridge responsibilities to an informatics, quality improvement, data modernization, or program leader with protected time.", "Regional or shared-service models may support multiple jurisdictions."] }
    ]
  },
  "funding": {
    overview: "AI projects need funding for more than software licenses. Responsible implementation may require data modernization, cloud or secure infrastructure, staff time, training, governance, legal and procurement review, evaluation, monitoring, translation, accessibility, community engagement, and sustainment. Funding strategy should be developed before pilots are approved for scale.",
    sections: [
      { title: "Funding Alignment", items: ["Position AI as an enabling capability within data modernization, workforce, equity, emergency preparedness, surveillance, communications, and service delivery investments.", "Match use cases to allowable costs in DMI, PHIG, HRSA, FEMA, EPA, SAMHSA, NIH, NSF, or state and local funding streams when appropriate.", "Avoid creating pilots that cannot be maintained after short-term funds end."] },
      { title: "Budget Categories", items: ["Technology licenses, hosting, security review, integration, and vendor support.", "Staff time for governance, implementation, training, monitoring, and evaluation.", "Community engagement, accessibility, translation, and communications support.", "Evaluation, model monitoring, incident response, and policy maintenance."] },
      { title: "Sustainment Questions", items: ["Who pays after the pilot?", "What staffing is required to keep the system safe and useful?", "What costs increase if the system scales across programs or jurisdictions?", "What functions can be shared regionally or through partnerships?"] }
    ]
  },
  "using-together": {
    overview: "The playbook and toolkit are designed to work together. Plays define the decisions, sequence, participants, outputs, and governance gates. Tools help departments complete the work, document decisions, and create reusable artifacts. The tools should be completed as part of implementation, not treated as disconnected forms.",
    sections: [
      { title: "How to Use the Sequence", items: ["Start with vision and readiness so the department understands purpose, gaps, and constraints.", "Establish governance before formal use case selection, vendor engagement, pilots, or deployment.", "Use stakeholder engagement, workforce planning, change planning, and prioritization to avoid isolated technology projects.", "Use funding, playbook, deployment, oversight, and evaluation plays to move from planning to sustained responsible use."] },
      { title: "How to Use the Tools", items: ["Open tools from the play page when the tool is needed for a decision or output.", "Save progress and update living tools as decisions change.", "Use completed tools as governance records, implementation artifacts, and evidence for leadership or funders.", "Download blank templates when preparing workshops or offline review."] },
      { title: "Governance Discipline", items: ["Do not skip early plays because a tool or vendor is available.", "Use assessment recommendations to customize the path based on readiness gaps and completed work.", "Treat the implementation plan, inventory, monitoring dashboard, and policy log as living records."] }
    ]
  }
};

const publicHealthAiSupportAreas = [
  {
    title: "Surveillance, Signal Detection, and Outbreak Intelligence",
    summary: "AI can help staff review high-volume surveillance streams, detect unusual patterns, summarize incoming reports, and prioritize signals for epidemiologist review.",
    activities: ["Summarize surveillance reports into trend, geography, population, and uncertainty sections.", "Flag anomalies or clusters for human investigation.", "Assemble evidence packets from laboratory, syndromic, emergency department, and partner reports.", "Draft internal situation updates from approved source data."],
    safeguards: ["AI should flag and organize information, not declare outbreaks or issue public alerts.", "Epidemiologists should validate signals and document decisions.", "Data latency, false positives, false negatives, and subgroup effects should be monitored."],
    examples: ["Summarize surveillance reports", "Route high-priority surveillance signals", "Detect anomalies", "Synthesize outbreak updates"],
    plays: [2,3,7,11,13],
    tools: [7,13,14,41,44,47]
  },
  {
    title: "Evidence Review, Policy Scans, and Research Synthesis",
    summary: "AI can accelerate first-pass reviews of literature, public health guidance, policy requirements, grant notices, and program examples, while staff verify sources and applicability.",
    activities: ["Conduct literature scans for emerging threats or interventions.", "Compare policy requirements across jurisdictions.", "Summarize scientific, legal, or funding documents for leadership review.", "Create annotated evidence tables with source links and open questions."],
    safeguards: ["Require citations and source verification.", "Separate evidence strength from opinion, vendor claims, or early findings.", "Have subject matter experts review conclusions before decisions are made."],
    examples: ["Literature scans for emerging threats", "Policy scans across jurisdictions", "Comparative program analysis", "Summarize policy documents with human review"],
    plays: [1,3,7,8,13],
    tools: [2,4,32,48]
  },
  {
    title: "Plain-Language Communication and Health Education",
    summary: "Generative AI can help convert technical material into accessible drafts for staff, partners, and public audiences when communications staff and subject matter experts review the final content.",
    activities: ["Draft health education materials, FAQs, and talking points.", "Translate analytic findings into plain language for briefings or partner updates.", "Adapt content for different literacy levels, languages, channels, and audiences.", "Prepare first drafts of public notices about AI-supported activities."],
    safeguards: ["Review for accuracy, tone, reading level, cultural context, accessibility, and current guidance.", "Avoid unsupervised public-facing generation.", "Use approved source material and document human review."],
    examples: ["Draft health education materials", "Translate analytic findings into plain language", "Community-facing FAQs", "Public AI use notices"],
    plays: [1,3,4,10,12],
    tools: [19,20,29,46]
  },
  {
    title: "Leadership Briefings and Decision Support",
    summary: "AI can organize evidence, options, risks, tradeoffs, and recommended next steps so leaders receive clearer decision packages.",
    activities: ["Prepare decision briefs from approved evidence and agency records.", "Summarize options, benefits, risks, constraints, and open questions.", "Convert assessment findings into recommended plays, tools, owners, and timelines.", "Draft governance memos for review by accountable staff."],
    safeguards: ["Clearly label AI-assisted drafts.", "Require decision owner sign-off.", "Include uncertainty, limitations, and source references.", "Prevent AI from making final policy, resource, or emergency decisions."],
    examples: ["Support decision briefings", "Decision owner sign-off", "Confidence and limitation notes in briefs"],
    plays: [1,2,3,7,12],
    tools: [1,6,7,13,46]
  },
  {
    title: "Grants, Funding, and Sustainability Planning",
    summary: "AI can help departments align AI work with funding streams, draft grant narratives, compare allowable costs, and prepare sustainment plans.",
    activities: ["Create first drafts of grant narratives and logic models.", "Map use cases to DMI, PHIG, HRSA, FEMA, EPA, SAMHSA, NIH, NSF, or state/local funding opportunities.", "Estimate staffing, technology, evaluation, training, and sustainment costs.", "Draft budget justification language for reviewed AI projects."],
    safeguards: ["Verify funding requirements, deadlines, eligibility, and allowable costs.", "Avoid committing to AI capabilities that cannot be supported or monitored.", "Include governance, evaluation, accessibility, and change management costs."],
    examples: ["Create first drafts of grant narratives", "DMI-supported data pipelines", "PHIG-supported workforce and governance", "Grant-aligned pilots"],
    plays: [8,9],
    tools: [36,32,33]
  },
  {
    title: "Workflow Routing, Task Queues, and Operational Coordination",
    summary: "Agentic or semi-agentic workflows can help turn incoming information into routed tasks, evidence packets, reminders, and status updates for staff review.",
    activities: ["Create task queues from incoming reports, meeting notes, complaints, or surveillance items.", "Route materials to the appropriate program, geography, subject matter expert, or governance reviewer.", "Prepare internal reminders for owners, deadlines, approvals, and follow-up actions.", "Update implementation workplans as milestones are completed or blocked."],
    safeguards: ["Define what the AI can create, route, update, or escalate.", "Require audit logs and role-based permissions.", "Give administrators control over assignments, deadlines, and workflow changes.", "Keep humans responsible for final action and external communication."],
    examples: ["Create task queues from incoming reports", "Coordinate governance submissions", "Staff reporting pathways for concerns"],
    plays: [3,6,10,11,12],
    tools: [12,13,17,23,30,36]
  },
  {
    title: "Equity, Missing Voices, and Community Validation",
    summary: "AI can support equity review by helping teams identify affected groups, compare subgroup performance, draft engagement materials, and track mitigation commitments.",
    activities: ["Identify underrepresented groups or data gaps during use case review.", "Draft community validation questions and engagement summaries.", "Monitor subgroup performance after deployment.", "Track equity concerns, mitigation owners, and follow-up deadlines."],
    safeguards: ["Use community expertise and affected-user input, not only data analysis.", "Document who was consulted and what changed as a result.", "Do not deploy systems that cannot be evaluated for disparate impact when they affect access, services, enforcement, or public communication."],
    examples: ["Identify underrepresented groups", "Add community validation before launch", "Monitor subgroup performance after deployment", "Equity audit before scale"],
    plays: [4,7,13],
    tools: [3,20,22,47]
  },
  {
    title: "Language Access, Accessibility, and Digital Inclusion",
    summary: "AI can assist with translation, plain-language adaptation, accessibility review, and digital service support, but it must be reviewed for accuracy, cultural relevance, and equitable access.",
    activities: ["Draft translations for human review by qualified language staff or vendors.", "Convert complex guidance into plain-language and accessible formats.", "Evaluate whether AI-supported services create barriers for people without broadband, devices, literacy, English proficiency, or trust in digital systems.", "Develop alternate pathways for people who cannot or do not want to use AI-supported services."],
    safeguards: ["Require human review before public use of translated or accessibility-critical materials.", "Test materials with affected users where feasible.", "Provide non-AI or staff-supported alternatives for important services."],
    examples: ["Review AI effects on language access", "Evaluate service access impacts", "Public AI use notices"],
    plays: [1,4,7,10,13],
    tools: [3,19,20,22,47]
  },
  {
    title: "Privacy, Tiered Data Use, and Secure AI Environments",
    summary: "AI can support work with sensitive information only when departments define data tiers, approved environments, vendor requirements, and review pathways.",
    activities: ["Classify data as public, internal, confidential, protected, restricted, or sovereign where applicable.", "Match each tier to approved AI tools and required controls.", "Review vendor data retention, model training, logging, deletion, and access claims.", "Prepare data use agreements, BAAs, and procurement addenda when needed."],
    safeguards: ["Restrict PHI and sensitive data from public AI tools.", "Use enterprise, in-house, or controlled RAG environments for restricted materials.", "Document data sources, access rules, and human review requirements.", "Escalate incidents through privacy, security, and governance channels."],
    examples: ["Restrict PHI from public AI tools", "Approve enterprise AI for internal drafts", "Use in-house/RAG systems for restricted materials"],
    plays: [2,3,11,12],
    tools: [10,15,16,34,39]
  },
  {
    title: "Procurement, Vendor Review, and Environmental Impact",
    summary: "AI can support procurement analysis, but departments need structured review of vendor transparency, accessibility, auditability, security, data rights, sustainability, and exit requirements.",
    activities: ["Compare vendor responses against responsible AI, security, privacy, accessibility, and documentation requirements.", "Review environmental and resource impacts for high-compute or scaled systems.", "Draft procurement addenda and contract language for AI-specific obligations.", "Track vendor performance, incidents, and policy updates after deployment."],
    safeguards: ["Do not rely on vendor marketing claims without documentation.", "Require audit rights, data-rights language, model documentation, monitoring obligations, and exit plans.", "Consider lower-impact alternatives where public health value does not justify high compute burden."],
    examples: ["Review vendor sustainability claims", "Compare lower-impact alternatives", "Flag data center environmental justice concerns"],
    plays: [3,7,8,9,12],
    tools: [4,5,32,34,45]
  },
  {
    title: "Workforce Training, AI Literacy, and Bridge Roles",
    summary: "AI can help staff learn and coordinate work, but departments need role-based AI literacy and bridge capacity to connect programs, governance, technology, procurement, and community expectations.",
    activities: ["Develop role-based training for leaders, program staff, analysts, IT, privacy, procurement, communications, and governance members.", "Create prompt and privacy coaching materials.", "Designate AI champions or bridge professionals to support adoption.", "Track staff concerns, training completion, and workflow barriers."],
    safeguards: ["Do not ask staff to use AI before they understand privacy, hallucination, bias, documentation, and escalation expectations.", "Protect staff time for training and implementation support.", "Use feedback loops to identify workload, trust, and usability problems."],
    examples: ["Role-based AI training", "Prompt and privacy coaching", "Coordinate data modernization with workforce training", "Help program staff document AI workflows"],
    plays: [5,6,10],
    tools: [23,24,25,27,28,29,30]
  },
  {
    title: "Performance Improvement, Metrics, and Quality Dashboards",
    summary: "Generative and agentic AI can support public health performance improvement by helping teams define meaningful measures, build baseline profiles, generate improvement ideas, track action plans, and maintain dashboards for ongoing monitoring.",
    activities: ["Use generative AI to draft candidate process, output, outcome, balancing, equity, and experience measures from a program aim statement.", "Use AI to convert broad goals into SMART measures, operational definitions, numerators, denominators, data sources, reporting frequency, and accountable owners.", "Use agentic AI to pull approved data from dashboards, registries, logs, surveys, or workplan trackers and prepare routine performance summaries for staff review.", "Generate improvement hypotheses, Plan-Do-Study-Act ideas, root-cause prompts, and meeting agendas based on current performance trends.", "Create action trackers that assign owners, due dates, dependencies, status, barriers, and follow-up items for each improvement activity.", "Monitor dashboards for trends, thresholds, missed deadlines, equity gaps, data quality issues, and measures that need governance or leadership attention."],
    safeguards: ["Staff should approve all measures before use so the dashboard reflects public health priorities rather than whatever data are easiest to collect.", "AI-generated measures should be checked for feasibility, validity, equity relevance, burden, and unintended incentives.", "Agentic monitoring should only use approved data sources and should not alter official records, contact partners, or escalate externally without human review.", "Dashboards should show definitions, data freshness, limitations, subgroup views, and interpretation notes so users do not over-read noisy or incomplete data.", "Performance summaries should distinguish observed trends from AI-generated explanations or improvement suggestions."],
    examples: ["Draft performance measures from an aim statement", "Identify leading and lagging indicators", "Generate PDSA ideas from dashboard trends", "Monitor dashboard thresholds and equity gaps", "Create owner-based improvement action trackers"],
    plays: [2,3,7,9,10,12,13],
    tools: [7,8,9,13,23,36,41,42,44,45,47,48]
  },
  {
    title: "Monitoring, Evaluation, Incident Response, and Continuous Improvement",
    summary: "AI-supported systems require ongoing review after launch. Departments need dashboards, incident processes, policy logs, equity monitoring, and clear retirement or pause criteria.",
    activities: ["Monitor model performance, data quality, subgroup outcomes, drift, incidents, complaints, and staff adoption.", "Track hallucination or misinformation risks for public-facing outputs.", "Maintain policy update and version control logs.", "Evaluate whether the AI system improves public health outcomes, timeliness, quality, equity, or staff workload."],
    safeguards: ["Define thresholds for pausing, modifying, or retiring systems.", "Assign owners for monitoring and incident response.", "Review high-impact systems through governance on a regular cadence.", "Document lessons learned and update tools, policies, training, and public notices."],
    examples: ["Hallucination audit for public-facing products", "Incident response for unsafe outputs", "Policy update process", "Monitor subgroup performance after deployment"],
    plays: [12,13],
    tools: [14,17,18,41,42,44,45,46,47,48]
  }
];

const learningModuleNarrative = {
  "staff-training": [
    "This topic explains how the learning section can function as a staff training curriculum, not just a reference library. Health departments can assign modules before workshops, use them during facilitated team sessions, or incorporate them into onboarding for staff who will participate in AI-supported work.",
    "The goal is to create shared readiness across roles. Program staff need to understand what AI can and cannot do in their workflows. Leaders need to understand governance and resource implications. Privacy, legal, procurement, IT, communications, equity, and data staff need enough shared language to review proposals consistently.",
    "Departments can adapt the modules into short training sessions by pairing the narrative content with the discussion questions and staff exercise. The expected takeaways should become practical implementation artifacts, such as a training plan, a list of governance questions, or a completed readiness input."
  ],
  "understanding-ai": [
    "Artificial intelligence should be introduced as a set of capabilities rather than a single product. In public health, AI may appear as predictive analytics, classification, natural-language summarization, generative drafting, document search, translation support, or workflow automation. Staff need to recognize these differences because each capability has different risks, data needs, and review requirements.",
    "A shared foundation also helps departments avoid technology-first decisions. The central question is not whether an AI tool is impressive, but whether it fits a public health purpose, uses appropriate data, improves a workflow, and remains accountable to humans. This matters when AI is embedded in vendor products, offered through enterprise software, or used informally by staff.",
    "By the end of this module, staff should be able to describe an AI-supported workflow in plain language: what the system does, what data it uses, who reviews the output, what decision remains human, and what safeguards are required before use."
  ],
  "generative-ai": [
    "Generative AI is especially relevant to public health because so much agency work involves drafting, explaining, summarizing, and adapting information for different audiences. It can help create first drafts of education materials, staff communications, grant language, policy summaries, meeting notes, and leadership briefings.",
    "The same fluency that makes generative AI useful also makes it risky. A generated answer can sound polished while including outdated guidance, fabricated details, missing caveats, or language that does not fit the community context. Departments should treat outputs as drafts that require source checking and subject matter review.",
    "For training purposes, staff should practice distinguishing low-risk drafting support from high-risk public-facing or decision-support uses. A safe implementation approach defines approved tools, prohibited data, source requirements, review steps, and documentation expectations before staff use generative AI in routine work."
  ],
  "agentic-ai": [
    "Agentic AI introduces a different level of operational complexity because it can coordinate steps rather than simply produce content. A bounded agentic workflow might monitor incoming information, classify it, retrieve relevant documents, create a task, and route it to a staff member. That can be valuable in time-sensitive public health operations, but it also creates new accountability questions.",
    "Departments should train staff to think of agentic AI as workflow infrastructure. The most important design decisions involve boundaries: what the system can access, what actions it can take, when it must stop, when a human must approve, and how every action is logged.",
    "Agentic systems are not appropriate for unsupervised public health decisions. They are best introduced in controlled internal workflows where humans remain responsible for validation, communication, prioritization, and final action."
  ],
  "deep-research": [
    "Deep Research tools can help departments organize complex evidence, policy, or funding questions into structured summaries. They are useful when staff need a first-pass scan of literature, agency guidance, jurisdictional policies, implementation examples, or grant requirements.",
    "These tools should not be treated as substitutes for professional judgment or formal evidence review. Staff still need to verify citations, check dates, assess source quality, and decide whether findings apply to the department's population, authority, and operational context.",
    "A strong training approach asks staff to evaluate a generated research brief: Are the sources real and current? Are claims supported? Are limitations stated? Does the summary separate evidence from opinion or vendor claims? What decisions could this support, and what review is still required?"
  ],
  "workflows": [
    "Public health AI should start with workflows, not tools. A workflow lens helps teams identify where work is slow, repetitive, inconsistent, or difficult to coordinate, and where AI might help without replacing public health judgment.",
    "Examples include summarizing incoming reports, detecting unusual patterns, drafting situation updates, routing tasks, preparing evidence packets, or tracking implementation deadlines. Each potential use should be evaluated in context: who uses the output, what decision follows, what could go wrong, and what evidence would show improvement.",
    "Before redesigning a workflow around AI, teams should complete basic business process analysis: define the current-state process, identify actors and handoffs, document information flows, locate bottlenecks and rework, and clarify what the future-state process should accomplish. This prevents teams from automating a broken workflow or adding AI before the operational problem is well understood.",
    "Training should help staff map a real workflow from trigger to output. Once the workflow is visible, the team can decide which steps AI may support, which require human review, and which should remain outside AI support altogether."
  ],
  "risks": [
    "AI risk in public health is broader than technical model performance. A system can be accurate in a test setting but still create harm if it exposes sensitive data, increases inequity, produces unclear recommendations, encourages over-trust, or undermines community confidence.",
    "Risk management should be practical and repeatable. Staff should learn to ask what harm could occur, who could be affected, how likely the harm is, how it would be detected, and who has authority to pause or correct the system.",
    "This module should prepare staff to participate in risk review discussions. The goal is not to eliminate all risk, but to make risk visible, assign ownership, document mitigations, and monitor whether safeguards work after deployment."
  ],
  "systems-shift": [
    "AI adoption changes the operating system of a public health department. It affects data infrastructure, workforce expectations, procurement, governance, legal review, public communication, quality improvement, emergency response, and community trust.",
    "When AI is treated as a one-off tool purchase, departments can end up with disconnected pilots, uneven safeguards, unclear ownership, and unsustainable costs. A systems-shift approach connects AI work to existing modernization, equity, workforce, and accountability priorities.",
    "Training should help leaders and staff see dependencies. A use case may require governance approval, data quality improvements, staff training, vendor review, funding, public notice, and monitoring before it can responsibly move forward."
  ],
  "digital-determinants": [
    "AI can influence health by shaping digital access to information, services, outreach, and decision pathways. If an AI-supported process is hard to understand, unavailable in needed languages, inaccessible to people with disabilities, or based on incomplete data, it can widen existing inequities.",
    "Departments should evaluate AI as part of the broader digital environment people must navigate. A chatbot, risk score, translation tool, scheduling system, or eligibility-support process may affect whether someone receives timely, understandable, and fair support.",
    "Training should ask staff to identify who may be excluded or burdened by a proposed AI use. The answer should inform design, engagement, alternatives, and monitoring before launch."
  ],
  "human-centered-ai": [
    "Human-centered AI keeps people at the center of design and accountability. In public health, this includes staff who use the system, leaders who are responsible for decisions, partners who depend on agency information, and communities affected by the workflow.",
    "The purpose of human-centered AI is not simply to keep a human somewhere in the loop. It is to define meaningful human authority: who reviews outputs, who can override recommendations, who explains decisions, and how people can raise concerns or correct errors.",
    "Staff training should focus on decision rules. For every AI-supported workflow, participants should be able to say what AI may do, what it may not do, what humans must approve, and how concerns will be escalated."
  ],
  "ai-literacy": [
    "AI literacy is a baseline workforce skill for responsible adoption. Staff do not all need the same level of technical expertise, but everyone using or overseeing AI should understand approved uses, prohibited data, common failure modes, and escalation expectations.",
    "Role-based literacy matters. Executives need to understand governance and risk. Program staff need workflow and review guidance. Analysts need validation and monitoring practices. Procurement staff need vendor and contract questions. Communications staff need standards for public-facing content.",
    "Training should give staff practical confidence: how to use approved tools, how to protect sensitive data, how to check outputs, how to document AI assistance, and when to stop and ask for review."
  ],
  "automation-bias": [
    "Automation bias occurs when people accept AI outputs too readily because they appear confident, precise, or efficient. In public health, this can affect surveillance triage, inspection documentation, outreach prioritization, public messaging, or leadership briefings.",
    "Training should make critical review a normal part of AI-supported work. Staff should learn to look for missing context, unsupported claims, outdated assumptions, subgroup effects, and uncertainty that may not be obvious in a polished output.",
    "Departments can reduce automation bias by requiring review prompts, second checks for high-impact outputs, decision-owner sign-off, override documentation, and periodic audits of AI-assisted work."
  ],
  "missing-voices": [
    "Missing voices analysis asks whose experiences, data, language needs, disability access needs, geography, or community knowledge are absent from the design and evaluation of an AI-supported workflow. It is a practical equity tool, not a theoretical exercise.",
    "A model may perform well overall while failing groups that are underrepresented or misclassified. A communication tool may be readable for some audiences but not others. A prioritization workflow may reflect historical service patterns rather than current need.",
    "Training should help staff identify missing voices early, decide who should be consulted, and define how the department will monitor whether the AI-supported workflow works across affected communities."
  ],
  "public-transparency": [
    "Transparency is central to public trust. Health departments should be able to explain when AI is used, why it is used, what data are involved, what humans decide, what safeguards exist, and how people can ask questions or raise concerns.",
    "Transparency should be proportionate to the impact of the AI use. An internal drafting tool may need staff-facing documentation, while a public-facing chatbot, prioritization tool, or outreach workflow may require public notice, FAQs, and feedback pathways.",
    "Training should help staff write clear explanations without overstating AI capability. A useful notice explains the workflow in plain language and names the human accountability structure."
  ],
  "tiered-data-use": [
    "Tiered data use turns privacy and security principles into practical rules. Staff need to know which data can be used in public tools, enterprise tools, restricted environments, or only within tightly governed systems.",
    "Public health departments handle many categories of information, including public materials, internal drafts, confidential operational records, protected health information, partner data, and data governed by specific community or Tribal authorities. Each category may require different approvals and safeguards.",
    "Training should use realistic scenarios so staff can classify data correctly and choose the appropriate AI environment. The goal is to prevent accidental disclosure and to make safe use easier than unsafe use."
  ],
  "environmental-impact": [
    "AI systems can carry resource impacts related to compute, energy, water, hardware, infrastructure, and cost. These issues are not always visible to program teams, but they matter for responsible public sector decision-making and environmental justice.",
    "Not every AI use requires the same level of review. A small drafting task has different implications than a high-volume, always-on, large-model deployment. Departments should ask whether the AI approach is proportionate to the public health value.",
    "Training should help staff compare alternatives. Sometimes a smaller model, retrieval-based system, existing analytic method, or non-AI workflow change may achieve the goal with less cost and burden."
  ],
  "bridge-professional": [
    "The AI bridge professional is a role or function that helps departments translate across disciplines. Public health AI work often stalls when program needs, technical requirements, legal concerns, procurement rules, and community expectations are discussed separately.",
    "Bridge capacity can be a dedicated position, a shared role, or a team function. What matters is that someone is responsible for connecting workflows, governance materials, data constraints, vendor claims, staff training, and implementation realities.",
    "Training should help departments identify where bridge work is needed. Smaller agencies may need regional support, shared services, or designated staff with protected time rather than a new full-time position."
  ],
  "funding": [
    "Funding strategy should make the full cost of responsible AI visible. Software is only one cost. Departments may also need data modernization, integration, security review, staff training, governance time, evaluation, monitoring, accessibility support, translation, and community engagement.",
    "AI work can often align with existing public health investment priorities such as data modernization, workforce capacity, emergency preparedness, health equity, communications, and service delivery. The key is to connect the AI use case to a real public health capability need.",
    "Training should prepare staff to avoid unfunded pilots. A responsible funding plan explains what is needed for planning, pilot, scale, and sustainment, and what happens when short-term funding ends."
  ],
  "using-together": [
    "The playbook and toolkit are designed as an implementation system. The plays explain what decisions need to be made and in what sequence. The tools help departments document those decisions, complete planning work, and create records for governance, leadership, and implementation teams.",
    "This module should help staff understand that tools are not paperwork for their own sake. A completed tool should answer a real implementation question: Are we ready? Who approves this? What are the risks? Who is responsible? What must be monitored?",
    "Training should connect each module to action. After learning a concept, staff should know which play or tool helps the department apply it in practice."
  ],
  "ai-support-areas": []
};

const learningModuleApplicationDetails = {
  "understanding-ai": {
    matters: "A shared AI vocabulary prevents agencies from approving tools before they understand the workflow, data, risk level, and accountability structure. This is especially important for STLT public health departments because AI may enter through many doors: staff productivity tools, vendor platforms, analytics systems, communications workflows, or grant-funded pilots.",
    questions: ["What AI tools or AI-enabled vendor products are already being used informally?", "Which public health decisions should never be delegated to an AI system?", "Who needs enough AI literacy to participate in governance, procurement, or implementation decisions?"],
    exercise: "Ask each program area to list one current task that involves searching, summarizing, drafting, routing, predicting, translating, or prioritizing. Classify each task by AI type and identify the human decision owner.",
    artifacts: ["Agency AI vocabulary list", "Initial inventory of known or suspected AI use", "Draft list of decisions that require human accountability"]
  },
  "generative-ai": {
    matters: "Generative AI can improve staff efficiency, but it can also produce fluent misinformation, incomplete summaries, biased language, or unsupported recommendations. Public health departments need practical rules for when generative AI can draft, when it can summarize, when it must use approved source material, and when it should not be used at all.",
    questions: ["Which materials may be drafted with generative AI and which require approved templates or source documents?", "What human review is required before AI-assisted content is shared with the public, partners, or leadership?", "What data are prohibited from public or consumer AI tools?"],
    exercise: "Take a public health education message, a policy memo, and an internal meeting summary. Define what generative AI could help draft, what source material it would need, and what review steps would be required before use.",
    artifacts: ["Generative AI acceptable-use rules", "Human review checklist for AI-assisted drafts", "Approved-source guidance for RAG or document-grounded generation"]
  },
  "agentic-ai": {
    matters: "Agentic AI can coordinate work across systems, but that makes it higher risk than simple drafting. In public health operations, even routing a task, prioritizing a signal, or preparing an outreach list can affect response time, workload, trust, and equity. Agentic workflows need explicit boundaries before they are piloted.",
    questions: ["What actions may the AI take without approval, and what actions require human approval?", "What audit logs are needed to reconstruct what happened?", "How will staff pause, override, or escalate an agentic workflow?"],
    exercise: "Map a multi-step workflow such as outbreak signal review, inspection report preparation, or care coordination outreach. Mark which steps the AI may support, which steps require human approval, and which steps are prohibited.",
    artifacts: ["Agentic workflow boundary statement", "Human approval and escalation map", "Audit log and monitoring requirements"]
  },
  "deep-research": {
    matters: "Deep Research tools can make literature scans and policy reviews faster, but public health departments still need defensible evidence standards. A generated synthesis is only useful if sources are current, relevant, independently verifiable, and interpreted by staff who understand the public health context.",
    questions: ["What source types are acceptable for the decision being supported?", "Who verifies citations, dates, jurisdictional relevance, and evidence strength?", "How will the department distinguish evidence, implementation examples, vendor claims, and unresolved questions?"],
    exercise: "Use a current public health topic and design a research brief template with sections for evidence summary, source quality, STLT relevance, equity considerations, operational implications, and open questions.",
    artifacts: ["AI-assisted research brief template", "Source verification checklist", "Policy or literature scan protocol"]
  },
  "workflows": {
    matters: "AI projects often fail when they are not anchored in a real workflow. Public health work includes handoffs, legal authorities, partner relationships, community trust, and time-sensitive decisions. Workflow mapping helps agencies find where AI can reduce burden while preserving judgment and accountability.",
    questions: ["What problem in the workflow is AI expected to solve?", "Where does the workflow require professional judgment, legal authority, or community knowledge?", "How will staff know whether AI improves timeliness, quality, consistency, equity, or workload?"],
    exercise: "Choose one workflow and map the trigger, inputs, staff roles, decisions, outputs, handoffs, risks, and performance measures. Identify one AI support point and one step that should remain fully human-controlled.",
    artifacts: ["AI workflow map", "Workflow risk and control table", "Pilot success measures"]
  },
  "risks": {
    matters: "Responsible AI risk management is not a one-time checklist. Public health risks change as data, models, vendors, disease patterns, staff behavior, and community needs change. Agencies need repeatable risk review methods that can be used before approval and after deployment.",
    questions: ["What harms could occur if the AI output is wrong, biased, delayed, misunderstood, or over-trusted?", "What data, populations, or workflows are most vulnerable to error?", "What conditions should trigger pause, review, correction, or retirement?"],
    exercise: "Select a proposed AI use case and identify risks across accuracy, privacy, security, equity, transparency, workforce burden, legal authority, and public trust. Define one mitigation for each risk.",
    artifacts: ["Risk register", "Mitigation plan", "Incident escalation criteria"]
  },
  "systems-shift": {
    matters: "AI changes public health infrastructure, not just individual tasks. Departments need to align AI adoption with data modernization, workforce development, procurement, legal review, community engagement, funding, and evaluation so AI does not become a series of disconnected pilots.",
    questions: ["Which agency systems must change for AI to be governed and sustained?", "Where do existing policies already apply, and where are AI-specific standards needed?", "How will leadership coordinate AI work across programs rather than approving isolated tools?"],
    exercise: "Create a systems map showing how AI adoption affects governance, data, technology, workforce, procurement, communications, equity, and funding. Identify gaps that must be addressed before pilots scale.",
    artifacts: ["AI systems-change map", "Cross-program implementation dependencies", "Leadership decision agenda"]
  },
  "digital-determinants": {
    matters: "AI can influence whether people receive understandable information, timely services, fair prioritization, language access, or meaningful alternatives. Departments should treat AI-supported workflows as part of the digital environment that shapes health access and trust.",
    questions: ["Who might be excluded by the data, interface, language, channel, or workflow?", "Does the AI-supported process create or reduce barriers to services?", "What non-digital or non-AI alternative is available for important services?"],
    exercise: "Review a public-facing AI use case and identify access barriers related to language, disability, broadband, device access, literacy, rural context, trust, and data representation.",
    artifacts: ["Digital access impact review", "Language and accessibility mitigation plan", "Alternate pathway documentation"]
  },
  "human-centered-ai": {
    matters: "Human-centered AI keeps public health purpose, staff expertise, and community accountability at the center. This is especially important when AI affects outreach, communication, prioritization, inspections, surveillance, or services.",
    questions: ["Who is affected by the workflow and who has been consulted?", "What decision remains with a named human owner?", "How can people ask questions, correct information, or challenge an outcome?"],
    exercise: "For one proposed use case, write a human decision rule that defines what AI may support, what it may recommend, what a human must approve, and what the AI may not do.",
    artifacts: ["Human decision rule", "User and community needs summary", "Appeal, correction, or feedback pathway"]
  },
  "ai-literacy": {
    matters: "AI literacy is necessary for safe use at every level of the department. Staff need role-appropriate knowledge before they are asked to use AI tools, review outputs, approve vendors, participate in governance, or explain AI to the public.",
    questions: ["What does each role need to know to use or oversee AI responsibly?", "How will the department train new staff and refresh training over time?", "How will staff report concerns, near misses, or unsafe outputs?"],
    exercise: "Create a role-based training matrix for executives, program staff, analysts, IT, privacy, procurement, communications, and governance members.",
    artifacts: ["Role-based AI literacy matrix", "Training plan", "Staff concern reporting pathway"]
  },
  "automation-bias": {
    matters: "Automation bias is a practical operational risk. Staff may over-trust outputs that are fluent, precise, or repeated often. Public health workflows need review steps that make skepticism normal and expected.",
    questions: ["Where might staff accept AI output too quickly?", "What second-review or sign-off is needed for high-impact outputs?", "How will overrides, corrections, and disagreements be documented?"],
    exercise: "Take one AI-assisted output and design a review form that asks staff to check sources, uncertainty, missing context, subgroup impact, and whether the recommendation should be accepted, modified, or rejected.",
    artifacts: ["Automation bias review checklist", "Decision owner sign-off process", "Override and correction log"]
  },
  "missing-voices": {
    matters: "Missing voices analysis helps agencies avoid designing AI systems around only the data and perspectives that are easiest to obtain. It is essential for equity, trust, and real-world performance.",
    questions: ["Whose data, experience, language needs, disability access needs, rural context, or community knowledge may be missing?", "Who should validate assumptions before launch?", "How will subgroup performance and community concerns be monitored after deployment?"],
    exercise: "For a selected use case, identify groups that may be missing from the data, planning process, validation sample, or governance review. Define how each gap will be addressed.",
    artifacts: ["Missing voices analysis", "Community validation plan", "Subgroup monitoring measures"]
  },
  "public-transparency": {
    matters: "Public trust depends on whether agencies can explain AI use clearly. Transparency should not be a vague notice that AI exists; it should explain purpose, data, human review, limits, safeguards, and feedback options.",
    questions: ["What should staff, partners, and the public know about this AI use?", "What information can be shared without compromising privacy or security?", "How will notices be updated when the AI use changes?"],
    exercise: "Draft a plain-language AI use notice for one public-facing workflow. Include purpose, what AI does, what humans decide, data types, safeguards, limitations, and contact or correction options.",
    artifacts: ["Plain-language AI use notice", "Public FAQ", "Feedback and correction process"]
  },
  "tiered-data-use": {
    matters: "Clear data tiers turn privacy and security rules into daily practice. Staff need to know which data can be used in which AI environments, what approvals are needed, and what tools are prohibited for sensitive information.",
    questions: ["What data tiers does the department use?", "Which AI tools are approved for each tier?", "What vendor, contract, logging, retention, and training restrictions are required?"],
    exercise: "Create a table that maps public, internal, confidential, protected, restricted, and sovereign data categories to approved AI environments and required review steps.",
    artifacts: ["Tiered data classification table", "Approved AI environment list", "Data-use approval pathway"]
  },
  "environmental-impact": {
    matters: "AI systems can have energy, water, hardware, cost, and environmental justice implications. Departments should consider whether the public health value of a high-compute use justifies its resource burden and whether lower-impact alternatives exist.",
    questions: ["Is AI necessary for this task, or would a simpler approach work?", "What sustainability and infrastructure information should vendors disclose?", "Could resource burdens affect communities already facing environmental inequities?"],
    exercise: "Review one proposed AI project and compare a high-compute option, a smaller model or RAG option, and a non-AI option. Document benefits, limitations, costs, and resource implications.",
    artifacts: ["Environmental and resource impact review", "Lower-impact alternatives comparison", "Procurement sustainability questions"]
  },
  "bridge-professional": {
    matters: "Many AI problems are translation problems: program needs do not automatically become technical requirements, and technical risks do not automatically become operational controls. Bridge professionals help keep AI implementation coherent across teams.",
    questions: ["Who can translate between program, data, IT, privacy, procurement, legal, equity, communications, vendors, and leadership?", "What authority and protected time does the bridge role need?", "How will bridge work be sustained in smaller departments?"],
    exercise: "Define the bridge role for one AI project. Identify responsibilities during intake, governance review, procurement, implementation, staff training, monitoring, and issue escalation.",
    artifacts: ["Bridge professional role description", "Cross-functional coordination map", "Implementation support responsibilities"]
  },
  "funding": {
    matters: "AI projects often require resources that are easy to overlook: staff time, governance, training, validation, data modernization, monitoring, accessibility, community engagement, and sustainment. Funding strategy should make the full cost of responsible implementation visible.",
    questions: ["What costs are required before pilot, during deployment, and after scale?", "Which funding streams align with data, workforce, equity, emergency response, surveillance, or service delivery goals?", "What happens when short-term funding ends?"],
    exercise: "Build a funding map for one approved use case that includes pilot costs, scale costs, sustainment costs, staffing, evaluation, governance, and possible funding sources.",
    artifacts: ["Funding alignment table", "Sustainment plan", "Budget categories for responsible AI implementation"]
  },
  "using-together": {
    matters: "The playbook creates the sequence and the toolkit creates the documentation. Using them together helps departments move from learning to readiness, governance, use case selection, funding, deployment, monitoring, and sustained oversight.",
    questions: ["Which plays are required based on the readiness assessment?", "Which tools document the decisions needed for those plays?", "Who owns each tool, output, deadline, and governance gate?"],
    exercise: "Take assessment results and convert them into a customized workplan with recommended plays, supporting tools, owners, deadlines, and governance milestones.",
    artifacts: ["Customized play-and-tool workplan", "Governance gate checklist", "Completed tool package for leadership review"]
  },
  "ai-support-areas": {
    matters: "Support areas help staff move from abstract AI concepts to concrete public health opportunities. They should be used to identify possible use cases, not to skip readiness, governance, stakeholder engagement, or risk review.",
    questions: ["Which support areas align with current public health priorities?", "Which areas are feasible given current data, workforce, governance, and funding?", "Which areas could create equity, privacy, transparency, or public trust concerns?"],
    exercise: "Select three support areas and score each for public health value, feasibility, risk, equity impact, data readiness, staff readiness, and sustainment.",
    artifacts: ["AI opportunity list", "Use case screening notes", "Prioritized concepts for governance review"]
  },
  "staff-training": {
    matters: "Health departments can use the learning modules as practical training material rather than static background reading. The modules help staff, leaders, governance members, and program teams build a common foundation before AI projects begin.",
    questions: ["Which staff groups need baseline AI training before tools are approved?", "Which modules should be required before governance participation, vendor review, or use case prioritization?", "How will the department document that staff understand data safeguards, human review expectations, and escalation pathways?"],
    exercise: "Create a short training plan that assigns modules to staff groups, identifies which exercises should be completed, and connects each module to a play or tool that the department will use next.",
    artifacts: ["Staff AI training plan", "Module assignment matrix by role", "Training completion expectations", "List of governance or implementation artifacts produced during training"]
  }
};

const additionalTrainingModules = [
  {
    module: { id: "procurement-vendor-oversight", title: "Procurement and Vendor Oversight", text: "AI procurement requires public health departments to evaluate vendor claims, contract terms, data rights, model documentation, auditability, accessibility, cybersecurity, support, and exit plans before an AI-enabled product is approved.", examples: ["Review vendor model documentation", "Add AI clauses to contracts", "Require audit and data-use terms"], risk: "Vendor AI should not bypass governance, privacy, security, accessibility, validation, or public accountability requirements.", plays: [3,7,8,11,12], tools: [11,13,15,34,40,43] },
    resources: [
      ["NIST AI Risk Management Framework", "Use to structure vendor risk, documentation, transparency, and accountability review.", "https://www.nist.gov/itl/ai-risk-management-framework"],
      ["FedRAMP", "Cloud security authorization context for vendor-hosted systems that may handle sensitive government data.", "https://www.fedramp.gov/"],
      ["HHS Civil Rights and AI", "Equity, nondiscrimination, and civil rights considerations for AI-enabled vendor tools.", "https://www.hhs.gov/civil-rights/for-individuals/special-topics/ai/index.html"]
    ],
    overview: "Public health departments often encounter AI through vendor platforms, not custom-built internal systems. Procurement staff, program owners, IT, security, privacy, legal, and governance members need shared criteria for evaluating vendor claims before contracts are signed or pilots begin.",
    sections: [
      { title: "What Staff Should Look For", items: ["Clear description of what AI capability is included and whether it is generative, predictive, agentic, or rules-based.", "Model documentation, validation evidence, limitations, monitoring approach, and known failure modes.", "Contract terms covering data ownership, data reuse, model training, audit rights, breach notification, accessibility, support, subcontractors, and termination.", "Evidence that the vendor can support public-sector privacy, security, records, and procurement obligations."] },
      { title: "Public Health Procurement Questions", items: ["What data will the vendor receive, store, process, or use to improve models?", "Can the department audit performance, errors, bias, access logs, and system changes?", "What happens if the model changes, performance declines, guidance changes, or the contract ends?", "How will the vendor support language access, disability access, incident response, and staff training?"] },
      { title: "Implementation Check", items: ["Route vendor AI proposals through governance before pilot approval.", "Use risk tiering to decide what validation, privacy, legal, and procurement review is required.", "Do not accept vendor performance claims without evidence, test data, monitoring plans, and department review."] }
    ],
    narrative: ["Vendor oversight is a public health governance issue, not only a purchasing task. A product may look efficient in a demonstration but still create risks if the department cannot verify how data are used, how outputs are produced, how errors are handled, or how the system can be audited.", "Staff should be trained to ask practical questions before procurement moves forward. What decision or workflow will the tool affect? What data are involved? Who owns the output? What performance evidence exists for populations similar to the department's communities? What contract terms protect the department if the system fails?", "This module should prepare teams to use procurement as a safeguard. Strong procurement requirements can turn responsible AI principles into enforceable vendor obligations."],
    application: { matters: "Most departments will buy or inherit AI-enabled systems before they build their own. Vendor oversight protects public health authority, data rights, security, equity, and operational continuity.", questions: ["What AI-enabled vendor tools are already in use or under consideration?", "Which contract terms would prevent the department from auditing or safely exiting the system?", "Who must review vendor claims before a pilot or purchase is approved?"], exercise: "Review a sample AI vendor proposal and identify missing documentation, contract protections, validation evidence, data-use terms, accessibility requirements, and governance questions.", artifacts: ["Vendor AI review checklist", "Procurement questions for governance", "Draft AI contract requirements"] }
  },
  {
    module: { id: "privacy-confidentiality-public-records", title: "Privacy, Confidentiality, and Public Records", text: "AI use in public health must account for PHI, PII, confidential public health records, investigation data, data-sharing limits, retention rules, and public records obligations.", examples: ["Classify data before AI use", "Review public records implications", "Avoid entering sensitive data in public tools"], risk: "Sensitive or confidential data can be exposed, retained, reused, or disclosed if staff use the wrong AI environment.", plays: [2,3,7,11,12], tools: [7,10,15,17,34] },
    resources: [
      ["HIPAA", "Federal privacy framework when protected health information may be involved.", "https://www.hhs.gov/hipaa/index.html"],
      ["CDC Public Health Data Policy and Standards", "Public health data policy and standards context for responsible data use.", "https://www.cdc.gov/surveillance/data-modernization/policy.html"],
      ["NIST Privacy Framework", "Privacy risk management structure for data processing and technology decisions.", "https://www.nist.gov/privacy-framework"]
    ],
    overview: "AI can change where data travel, who can access them, how long they are retained, and whether outputs become records. Staff need plain-language training on what information may be used, which AI environments are approved, and when legal, privacy, records, or data-sharing review is required.",
    sections: [
      { title: "Key Data Categories", items: ["Public information that can safely be used in approved public-facing contexts.", "Internal information that may be used in enterprise tools under agency policy.", "Confidential, identifiable, or protected information that requires restricted environments and review.", "Highly restricted data such as investigations, legal matters, sensitive surveillance data, or data governed by special agreements."] },
      { title: "Public Records and Retention", items: ["AI prompts, outputs, summaries, edits, decisions, and approvals may become records depending on jurisdiction and use.", "Departments should define when AI-assisted work must be retained, where it is stored, and how it is labeled.", "Staff should avoid creating unofficial records in personal accounts or unapproved AI tools."] },
      { title: "Implementation Check", items: ["Classify data before selecting an AI tool.", "Review data use agreements, vendor terms, retention rules, and public records obligations.", "Train staff on prohibited data entry and escalation pathways for uncertain cases."] }
    ],
    narrative: ["Privacy training needs to be practical. Staff should not have to interpret complex law in the moment of writing a prompt. They need clear categories, approved tools, examples of prohibited data, and a simple escalation path when they are unsure.", "Public records issues are especially important for government agencies. AI-assisted drafts, prompts, summaries, and decision notes may become part of the administrative record. Departments should decide how these materials are stored and reviewed before AI use becomes routine.", "The goal is not to stop all AI use. The goal is to match the sensitivity of the data to the correct environment, review pathway, and documentation standard."],
    application: { matters: "Privacy, confidentiality, and records controls are foundational for STLT public health AI because departments handle sensitive information, regulatory records, investigations, partner data, and public accountability obligations.", questions: ["Which types of department data should never be entered into public AI tools?", "Where should AI prompts and outputs be stored when they support official work?", "Who decides whether a proposed AI use requires privacy, legal, or records review?"], exercise: "Sort example AI tasks into public, internal, confidential, and highly restricted data-use categories, then identify the approved AI environment and review pathway for each.", artifacts: ["AI data classification examples", "Privacy escalation rules", "Public records documentation notes"] }
  },
  {
    module: { id: "model-validation-evaluation-basics", title: "Model Validation and Evaluation Basics", text: "Validation helps departments decide whether an AI system performs well enough, for the right users and populations, before it is piloted, scaled, or sustained.", examples: ["Test outputs against accepted standards", "Compare subgroup performance", "Set go/no-go thresholds"], risk: "A model that performs well in a demo can fail in local workflows, underrepresented groups, or changing conditions.", plays: [7,11,12,13], tools: [3,14,40,41,42,44,47] },
    resources: [
      ["NIST AI Risk Management Framework", "Risk and measurement framework for validation, monitoring, and governance.", "https://www.nist.gov/itl/ai-risk-management-framework"],
      ["WHO: Regulatory considerations on artificial intelligence for health", "Health AI validation, safety, transparency, and monitoring considerations.", "https://iris.who.int/handle/10665/373421"],
      ["HHS Civil Rights and AI", "Equity and nondiscrimination considerations when AI affects health and human services.", "https://www.hhs.gov/civil-rights/for-individuals/special-topics/ai/index.html"]
    ],
    overview: "Validation is the disciplined process of checking whether an AI-supported workflow is accurate, reliable, safe, equitable, usable, and appropriate for its intended public health purpose. It should be understandable to nontechnical staff because validation results inform governance decisions.",
    sections: [
      { title: "What Validation Should Cover", items: ["Purpose fit: whether the system solves the public health problem it is intended to support.", "Performance: accuracy, false positives, false negatives, completeness, reliability, and stability.", "Equity: subgroup performance, missing voices, language access, disability access, and geographic variation.", "Workflow impact: staff time, burden, usability, review quality, and downstream consequences.", "Safety: harmful outputs, hallucinations, unsafe recommendations, and incident triggers."] },
      { title: "Evaluation Over Time", items: ["Pilot evaluation should compare the AI-supported workflow to the current process.", "Monitoring should continue after deployment because models, data, staff behavior, guidance, and populations change.", "Governance should define thresholds for continue, revise, pause, scale, or retire decisions."] },
      { title: "Implementation Check", items: ["Define acceptance criteria before testing begins.", "Use realistic examples and local workflow conditions.", "Document limitations and do not scale until governance reviews evaluation evidence."] }
    ],
    narrative: ["Validation is not just a technical score. A technically impressive model may be inappropriate if it creates staff burden, performs poorly for certain communities, or cannot be explained well enough for public health accountability.", "Staff should understand the difference between vendor validation, local validation, pilot evaluation, and ongoing monitoring. Vendor evidence may be useful, but the department still needs to know whether the system works in its own data, workflows, populations, and operating conditions.", "This module should help teams ask better questions of data scientists and vendors, and help governance groups interpret validation evidence before decisions are made."],
    application: { matters: "Validation protects agencies from scaling systems that are inaccurate, inequitable, poorly integrated, or untrusted by staff and communities.", questions: ["What would count as acceptable performance for this workflow?", "Which groups or locations need subgroup review?", "What evidence should governance require before scale-up?"], exercise: "Design a validation plan for one proposed AI use case, including test examples, performance measures, subgroup checks, human review expectations, and go/no-go criteria.", artifacts: ["Validation plan outline", "Evaluation metric list", "Governance decision thresholds"] }
  },
  {
    module: { id: "ai-incident-response", title: "AI Incident Response", text: "AI incident response defines how staff report, triage, investigate, correct, communicate, and document problems involving AI-supported systems or outputs.", examples: ["Report harmful AI output", "Escalate privacy exposure", "Pause a drifting model"], risk: "Without an incident pathway, errors, bias concerns, privacy exposures, and unsafe outputs may be handled inconsistently or too late.", plays: [3,10,11,12,13], tools: [17,18,38,44,45,46] },
    resources: [
      ["NIST AI Risk Management Framework", "Governance and response structure for AI-related harms and failures.", "https://www.nist.gov/itl/ai-risk-management-framework"],
      ["WHO: Ethics and governance of artificial intelligence for health", "Health AI accountability, safety, and oversight principles.", "https://www.who.int/publications/i/item/9789240029200"],
      ["HHS Office for Civil Rights Breach Notification", "Context for privacy breach response when protected health information may be involved.", "https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html"]
    ],
    overview: "AI incidents can involve incorrect outputs, privacy exposure, biased results, unsafe recommendations, unauthorized use, vendor failure, staff over-reliance, public misinformation, or model performance drift. Staff need to know what to report and what happens next.",
    sections: [
      { title: "Incident Types", items: ["Harmful or inaccurate output used in a public health workflow.", "Sensitive data entered into an unapproved AI tool or exposed through a vendor system.", "Bias or disparate impact concern raised by staff, partners, or community members.", "Model drift, hallucination, unsafe recommendation, or unexplained performance change.", "Public-facing AI response that creates confusion, misinformation, or loss of trust."] },
      { title: "Response Steps", items: ["Capture the issue, system, date, user, output, data involved, and immediate risk.", "Triage severity and determine whether the system should continue, be limited, paused, or shut off.", "Notify privacy, security, legal, program leadership, communications, vendor, or governance contacts as appropriate.", "Document corrective actions, user communications, policy updates, and evidence of closure."] },
      { title: "Implementation Check", items: ["Train staff to report concerns without blame.", "Define emergency contacts and pause authority before deployment.", "Review incidents regularly through governance and continuous improvement."] }
    ],
    narrative: ["AI incident response should feel familiar to public health departments because it builds on existing approaches to privacy, security, quality improvement, emergency response, and corrective action. What is new is the range of AI-specific failure modes that staff may not recognize without training.", "The most important training message is simple: if an AI output seems wrong, harmful, biased, unsafe, or outside approved use, staff should know where to report it and should not have to resolve it alone.", "Incident response also supports learning. Every incident should feed back into policy updates, tool design, staff training, monitoring, and vendor oversight."],
    application: { matters: "AI incidents can affect privacy, public trust, legal compliance, staff confidence, equity, and operational safety. A clear response pathway reduces harm and improves governance.", questions: ["What AI-related problems should staff be required to report?", "Who has authority to pause an AI-supported workflow?", "How will lessons from incidents update training, policy, and monitoring?"], exercise: "Walk through a tabletop scenario involving an incorrect AI-generated public message or privacy exposure, then document reporting steps, escalation contacts, communications needs, corrective actions, and governance review.", artifacts: ["AI incident scenario response", "Escalation pathway", "Corrective action log"] }
  },
  {
    module: { id: "role-based-ai-guidelines", title: "Role-Based AI Use Guidelines", text: "Different public health roles need different AI permissions, responsibilities, training expectations, review duties, and escalation pathways.", examples: ["Leadership approval duties", "Communications review rules", "Analyst validation responsibilities"], risk: "A one-size-fits-all AI policy can leave staff unclear about what they are allowed to do and what they must escalate.", plays: [3,5,6,10,12], tools: [2,23,24,26,27,28,29] },
    resources: [
      ["ASPPH AI Framework Report", "Public health workforce, AI literacy, and role preparation framing.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
      ["CDC Public Health Workforce Development", "Public health workforce capability-building context.", "https://www.cdc.gov/workforce/"],
      ["Public Health Foundation TRAIN Learning Network", "Training platform for role-based public health workforce development.", "https://www.train.org/"]
    ],
    overview: "Role-based AI guidelines translate policy into daily practice. Leaders, program staff, analysts, communications staff, IT/security, privacy/legal, procurement, equity staff, supervisors, and governance members each need practical guidance for their responsibilities.",
    sections: [
      { title: "Role Differences", items: ["Leaders approve direction, resources, governance authority, and risk tolerance.", "Program staff define workflow needs, review outputs, and report concerns.", "Analysts and informatics staff support data quality, validation, monitoring, and documentation.", "Communications staff review public-facing language, plain language, translations, and misinformation risk.", "Legal, privacy, security, procurement, and equity staff apply specialized review requirements."] },
      { title: "Training Expectations", items: ["Every role needs baseline AI literacy, prohibited-use guidance, data-use rules, and escalation expectations.", "High-impact roles need deeper training on governance, validation, procurement, public communication, or monitoring.", "Supervisors need guidance on approving use, checking documentation, and supporting staff adoption."] },
      { title: "Implementation Check", items: ["Create a role-by-role matrix of allowed uses, prohibited uses, required approvals, and documentation expectations.", "Connect role guidance to onboarding, annual training, governance participation, and tool access."] }
    ],
    narrative: ["AI policy becomes much easier to follow when staff can see how it applies to their actual role. A communications specialist, epidemiologist, procurement officer, supervisor, and community engagement lead should not receive identical instructions and be expected to infer the rest.", "Role-based guidance also supports security and accountability. Staff should only have access to the AI tools and data environments they need, and they should understand what documentation is required when they use AI for official work.", "This module helps departments move from broad AI literacy into operational readiness."],
    application: { matters: "Role clarity prevents inconsistent AI use, unsupported staff experimentation, unreviewed public communications, and unclear accountability.", questions: ["Which roles need permission to use which AI tools?", "Which roles must review outputs before they are used?", "Which roles need advanced training before governance or procurement decisions?"], exercise: "Build a role-based AI use matrix for one department, including allowed uses, prohibited uses, approval requirements, documentation, and escalation contacts.", artifacts: ["Role-based AI use matrix", "Training assignment plan", "Access and approval rules"] }
  },
  {
    module: { id: "responsible-prompting-review", title: "Responsible Prompting and Review", text: "Responsible prompting helps staff use generative AI safely by protecting data, asking precise questions, requiring sources when needed, and reviewing outputs before use.", examples: ["Write source-grounded prompts", "Review drafts for hallucinations", "Document AI-assisted work"], risk: "A polished AI response can still be inaccurate, biased, outdated, unsupported, or inappropriate for public health use.", plays: [1,3,5,6,10,11], tools: [2,14,23,28,29,40] },
    resources: [
      ["NIST Generative AI Profile", "Risk management concepts for generative AI systems and outputs.", "https://www.nist.gov/itl/ai-risk-management-framework"],
      ["WHO: Ethics and governance of artificial intelligence for health", "Ethics and governance principles for health AI use.", "https://www.who.int/publications/i/item/9789240029200"],
      ["CDC Clear Communication Index", "Useful for reviewing plain-language public health materials.", "https://www.cdc.gov/ccindex/"]
    ],
    overview: "Staff need practical guidance for everyday generative AI use. Prompting is not magic language; it is a structured way to define task, audience, source material, constraints, review criteria, and prohibited data. The review step is more important than the prompt.",
    sections: [
      { title: "Prompting Practices", items: ["State the task, audience, purpose, tone, and output format.", "Provide approved source material when the output must reflect agency policy or current guidance.", "Ask the tool to identify assumptions, limitations, uncertainty, and items needing human review.", "Never include PHI, confidential records, investigation details, credentials, or restricted partner data in public AI tools."] },
      { title: "Review Practices", items: ["Check factual claims, dates, citations, calculations, recommendations, and legal or policy statements.", "Review plain language, accessibility, cultural context, language access, and potential stigma.", "Confirm that the output does not imply an action, authority, or guarantee the department cannot support.", "Document AI assistance when required by agency policy."] },
      { title: "Implementation Check", items: ["Train staff with examples from their own workflows.", "Provide approved prompt templates and review checklists.", "Use escalation rules for public-facing, high-risk, or uncertain outputs."] }
    ],
    narrative: ["Responsible prompting training should be hands-on. Staff learn best by comparing a vague prompt, a safer prompt, and a reviewed final output. The point is not to create perfect prompts; the point is to create safer drafts and stronger review habits.", "Departments should be clear that generative AI can support drafting and synthesis, but it does not replace subject matter expertise, legal review, privacy review, or communications approval.", "This module should give staff enough confidence to use approved tools productively while recognizing when a task is too sensitive, too consequential, or too uncertain for AI assistance."],
    application: { matters: "Responsible prompting and review reduce the chance that staff use AI in ways that expose data, spread misinformation, create inaccessible communication, or bypass expert review.", questions: ["Which AI-assisted drafting tasks should be allowed for staff?", "Which outputs require source verification, supervisor review, or communications approval?", "How should staff document AI-assisted work?"], exercise: "Rewrite three unsafe prompts into responsible prompts, then review sample AI outputs for data exposure, hallucinations, tone, equity concerns, missing sources, and required approvals.", artifacts: ["Responsible prompt examples", "Output review checklist", "Documentation expectations"] }
  },
  {
    module: { id: "community-engagement-ai", title: "Community Engagement for AI", text: "Community engagement helps departments understand how AI-supported workflows may affect trust, access, surveillance concerns, language needs, disability access, and public accountability.", examples: ["Engage affected communities before launch", "Create plain-language AI notices", "Close the feedback loop"], risk: "Public-facing or community-impacting AI can erode trust if affected groups are not engaged before decisions are made.", plays: [1,4,7,10,12,13], tools: [1,3,19,20,21,22,46] },
    resources: [
      ["CDC Health Equity", "Public health equity context for community engagement and accountability.", "https://www.cdc.gov/healthequity/"],
      ["ASPPH AI Framework Report", "Human-centered AI, missing voices, and public accountability framing.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"],
      ["Blueprint for an AI Bill of Rights", "Notice, explanation, human alternatives, and protections from automated harms.", "https://bidenwhitehouse.archives.gov/ostp/ai-bill-of-rights/"]
    ],
    overview: "Community engagement for AI should happen before use cases are finalized, especially when a system affects public communication, surveillance, outreach, service access, prioritization, or resource allocation. Engagement helps departments surface concerns that technical testing may miss.",
    sections: [
      { title: "Engagement Focus Areas", items: ["What the AI-supported workflow will and will not do.", "What data are involved and how privacy is protected.", "What decisions remain human and how concerns can be raised.", "How language, disability, digital access, rural context, Tribal context, immigration concerns, or historical mistrust may affect the workflow."] },
      { title: "Engagement Methods", items: ["Listening sessions, advisory groups, community partner consultation, usability testing, plain-language review, and feedback forms.", "Internal engagement with frontline staff who understand how communities experience department services.", "Ongoing feedback after launch, not only pre-implementation input."] },
      { title: "Implementation Check", items: ["Document who was engaged, what concerns were raised, what changed, and what remains unresolved.", "Route unresolved community concerns to governance.", "Close the feedback loop with plain-language summaries."] }
    ],
    narrative: ["Community engagement is not a public relations step after technical decisions are complete. It is a way to improve design, identify harms, clarify accountability, and build trust before implementation choices harden.", "AI systems may change how people are contacted, prioritized, informed, or served. Communities should be able to understand those changes and raise concerns before the department launches a tool that affects them.", "This module should help staff design engagement that is specific enough to influence AI decisions rather than simply announcing that AI will be used."],
    application: { matters: "Engagement helps departments avoid AI uses that appear efficient internally but create confusion, mistrust, stigma, surveillance concerns, or access barriers externally.", questions: ["Which communities or partners may be affected by the proposed AI use?", "What should be explained in plain language before implementation?", "How will community feedback change governance, design, monitoring, or communication?"], exercise: "Create a community engagement plan for one AI-supported workflow, including audiences, engagement methods, plain-language explanation, feedback documentation, and governance escalation.", artifacts: ["AI community engagement plan", "Plain-language AI explanation", "Feedback-to-decision log"] }
  },
  {
    module: { id: "accessibility-language-access", title: "Accessibility and Language Access", text: "AI-supported public health materials, tools, dashboards, chatbots, translations, and workflows should be reviewed for disability access, language access, readability, cultural context, and usability.", examples: ["Review AI translations", "Test chatbot accessibility", "Check plain-language outputs"], risk: "AI can create or worsen access barriers if outputs are not tested with people who rely on accessible formats, language support, or non-digital pathways.", plays: [1,4,7,10,11,13], tools: [3,19,20,22,29,41,47] },
    resources: [
      ["HHS Section 1557", "Nondiscrimination and language access context in health programs and activities.", "https://www.hhs.gov/civil-rights/for-individuals/section-1557/index.html"],
      ["ADA.gov", "Federal accessibility requirements and guidance.", "https://www.ada.gov/"],
      ["CDC Clear Communication Index", "Plain-language review support for health communication materials.", "https://www.cdc.gov/ccindex/"]
    ],
    overview: "AI can support translation, plain-language rewriting, alternative formats, and communication drafts, but those outputs still need human review. Accessibility and language access should be part of planning, testing, communications approval, and monitoring.",
    sections: [
      { title: "What Needs Review", items: ["AI-generated public health messages, FAQs, chatbot responses, translations, summaries, forms, dashboards, and outreach lists.", "Reading level, clarity, disability access, screen-reader compatibility, captions, plain-language structure, cultural context, and stigmatizing language.", "Whether non-digital and human assistance pathways remain available."] },
      { title: "Translation and Language Access", items: ["AI translation should not be used for high-stakes public messaging without qualified human review.", "Departments should review dialect, cultural context, health terminology, and risk communication accuracy.", "Staff should document which languages were reviewed and by whom."] },
      { title: "Implementation Check", items: ["Include accessibility and language access in use case scoring.", "Test public-facing tools with users before launch.", "Monitor complaints, failed interactions, correction requests, and access barriers after deployment."] }
    ],
    narrative: ["AI can make communication faster, but speed is not the same as access. Public health departments need to know whether messages can be understood, whether tools can be used by people with disabilities, and whether translations are accurate enough for the purpose.", "Language access and accessibility are also trust issues. Communities may lose confidence if AI-generated messages are confusing, culturally inappropriate, inaccessible, or inconsistent with staff communication.", "This module should help teams build access review into AI planning rather than treating it as a final proofreading step."],
    application: { matters: "Accessible and language-appropriate AI-supported communication is essential for equitable public health service delivery and public trust.", questions: ["Which AI-supported outputs will be public-facing or client-facing?", "Who reviews translations, accessibility, readability, and cultural context?", "What non-AI or human pathway remains available?"], exercise: "Review an AI-generated public health message and identify changes needed for plain language, accessibility, language access, cultural context, and human assistance pathways.", artifacts: ["Accessibility and language access review notes", "Revised public message", "Monitoring indicators for access barriers"] }
  },
  {
    module: { id: "cybersecurity-secure-ai-use", title: "Cybersecurity and Secure AI Use", text: "Secure AI use requires approved environments, access controls, vendor security review, audit logs, prompt-injection awareness, data-loss prevention, and incident escalation.", examples: ["Use approved AI environments", "Review vendor integrations", "Train staff on prompt injection"], risk: "AI tools can create new attack surfaces, data leakage pathways, and social engineering risks if security is not built into implementation.", plays: [2,3,7,11,12], tools: [10,15,17,34,39,43] },
    resources: [
      ["NIST Cybersecurity Framework", "Cybersecurity risk management structure for organizational systems.", "https://www.nist.gov/cyberframework"],
      ["CISA AI and Cybersecurity", "Cybersecurity context for AI systems and AI-enabled threats.", "https://www.cisa.gov/ai"],
      ["FedRAMP", "Cloud security authorization context for vendor-hosted government systems.", "https://www.fedramp.gov/"]
    ],
    overview: "AI security is broader than protecting the model. It includes user accounts, data flows, integrations, APIs, vendor hosting, prompts, outputs, logs, plugins, browser extensions, and connections to existing systems. Staff need to know how secure AI use differs from general software use.",
    sections: [
      { title: "Security Concerns", items: ["Sensitive data entered into unapproved tools or retained by vendors.", "Prompt injection or malicious content that manipulates AI behavior.", "Unauthorized access through weak role controls, shared accounts, or unmanaged integrations.", "Unverified AI-generated code, formulas, or instructions introduced into operational systems.", "Vendor outages, model changes, or compromised services affecting public health operations."] },
      { title: "Secure Practices", items: ["Use only approved AI tools for official work.", "Apply role-based access, multi-factor authentication, logging, data-loss prevention, and least-privilege access.", "Review vendor security documentation, hosting, subcontractors, breach notification, and audit rights.", "Train staff to treat AI outputs and external content as potentially unsafe until reviewed."] },
      { title: "Implementation Check", items: ["Include security review before pilot approval.", "Test integrations in controlled environments.", "Coordinate AI incident response with cybersecurity and privacy response plans."] }
    ],
    narrative: ["AI tools can blur the boundary between software, data processing, content generation, and workflow automation. That makes security review especially important before departments connect AI to email, document repositories, case systems, dashboards, or public-facing services.", "Staff training should make secure AI use concrete. Which tools are approved? What data are prohibited? What are signs of prompt injection or suspicious AI behavior? Who should be notified when something goes wrong?", "This module helps nontechnical staff understand why security is a shared responsibility and why shortcuts can create agency-wide risk."],
    application: { matters: "Cybersecurity protects public health operations, sensitive data, system integrity, and community trust.", questions: ["Which AI tools are approved for official work?", "Which integrations or data flows require security review?", "How should staff report suspicious AI behavior, data leakage, or unauthorized access?"], exercise: "Map the security controls needed for one AI use case, including data classification, access controls, vendor hosting, integrations, logging, incident response, and staff training.", artifacts: ["AI security review notes", "Approved-use rules", "Security escalation checklist"] }
  },
  {
    module: { id: "when-not-to-use-ai", title: "When Not to Use AI", text: "Departments need a clear decision framework for situations where AI is inappropriate, premature, too risky, unsupported by data, legally uncertain, or not worth the operational burden.", examples: ["Reject low-value automation", "Pause high-risk use cases", "Use human-only pathways"], risk: "AI can consume resources, obscure accountability, or create harm when a simpler, safer, human-centered approach is more appropriate.", plays: [1,2,3,7,12,13], tools: [1,3,6,7,13,42,46] },
    resources: [
      ["Blueprint for an AI Bill of Rights", "Principles for human alternatives, notice, and protection from automated harms.", "https://bidenwhitehouse.archives.gov/ostp/ai-bill-of-rights/"],
      ["NIST AI Risk Management Framework", "Risk-based framing for deciding whether and how AI should be used.", "https://www.nist.gov/itl/ai-risk-management-framework"],
      ["ASPPH AI Framework Report", "Public health framing for responsible adoption, governance, and human-centered AI.", "https://aspph.org/initiatives/ai-for-public-health/ai-framework-report/"]
    ],
    overview: "Responsible AI adoption includes saying no. Some tasks should remain human-only, some require more readiness work before AI is considered, and some can be improved more safely through workflow redesign, staffing, training, or better data systems.",
    sections: [
      { title: "Red Flags", items: ["The use case affects rights, enforcement, eligibility, resource allocation, public warnings, or clinical/care decisions without strong governance and human review.", "Data are poor quality, incomplete, unrepresentative, sensitive, or not legally available for the proposed use.", "The department cannot explain, validate, monitor, audit, or pause the system.", "Affected communities or staff have not been engaged.", "The expected benefit does not justify cost, risk, environmental burden, or staff disruption."] },
      { title: "Alternative Actions", items: ["Improve the workflow without AI.", "Strengthen data quality, documentation, staffing, or training first.", "Use a simpler rules-based tool, checklist, dashboard, or template.", "Limit AI to internal drafting or evidence organization rather than decision support.", "Pause the proposal until governance conditions are met."] },
      { title: "Implementation Check", items: ["Create prohibited-use and restricted-use categories.", "Require governance review for high-impact proposals.", "Document why a use case was rejected, deferred, limited, or redesigned."] }
    ],
    narrative: ["Staff may feel pressure to find AI uses because the technology is highly visible. Training should make it acceptable to conclude that AI is not the right tool for a particular problem.", "The strongest AI programs are not the ones with the most pilots. They are the ones that select use cases carefully, say no to poor fits, and invest in readiness before moving forward.", "This module gives teams a shared language for declining, deferring, or redesigning proposals without making the discussion feel anti-innovation."],
    application: { matters: "A clear no-go framework protects departments from avoidable harm, unfunded pilots, weak accountability, and loss of trust.", questions: ["Which public health decisions should remain human-only?", "What conditions would cause governance to reject or defer an AI proposal?", "What non-AI alternatives could solve the problem more safely?"], exercise: "Review three proposed AI use cases and decide whether each should proceed, be limited, be deferred, be redesigned without AI, or be rejected.", artifacts: ["AI no-go decision notes", "Restricted-use criteria", "Alternative solution options"] }
  }
];

const additionalTrainingInsertAt = learningModules.findIndex(module => module.id === "using-together");
learningModules.splice(additionalTrainingInsertAt >= 0 ? additionalTrainingInsertAt : learningModules.length, 0, ...additionalTrainingModules.map(item => item.module));

Object.assign(learningModuleResources, Object.fromEntries(additionalTrainingModules.map(item => [item.module.id, item.resources])));
Object.assign(learningModuleDeepDive, Object.fromEntries(additionalTrainingModules.map(item => [item.module.id, { overview: item.overview, sections: item.sections }])));
Object.assign(learningModuleNarrative, Object.fromEntries(additionalTrainingModules.map(item => [item.module.id, item.narrative])));
Object.assign(learningModuleApplicationDetails, Object.fromEntries(additionalTrainingModules.map(item => [item.module.id, item.application])));
learningModuleResources["generative-ai"].push(
  ["OpenAI Prompt Engineering Guide", "Practical guidance on writing clearer prompts, decomposing tasks, using examples, and improving model outputs through structured instructions.", "https://platform.openai.com/docs/guides/prompt-engineering"],
  ["Google Cloud Prompt Engineering Guide", "Plain-language overview of prompt engineering concepts, prompt structure, examples, and responsible use considerations.", "https://cloud.google.com/discover/what-is-prompt-engineering"],
  ["Microsoft Prompt Engineering Techniques", "Prompting techniques for Azure OpenAI and Microsoft Foundry models, including instructions, grounding, examples, and output formatting.", "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering"]
);
learningModuleResources["responsible-prompting-review"].unshift(
  ["OpenAI Prompt Engineering Guide", "Core prompt engineering practices for clear instructions, examples, task decomposition, and systematic iteration.", "https://platform.openai.com/docs/guides/prompt-engineering"],
  ["Google Cloud Prompt Engineering Guide", "High-quality overview of prompt components, prompt patterns, and how prompts shape generative AI outputs.", "https://cloud.google.com/discover/what-is-prompt-engineering"],
  ["Microsoft Prompt Engineering Techniques", "Operational prompting techniques for structured outputs, grounding, examples, and model-specific prompt refinement.", "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering"]
);
learningModuleResources["cybersecurity-secure-ai-use"].push(
  ["OWASP LLM01: Prompt Injection", "Security guidance on prompt injection risks, including malicious instructions, indirect prompt injection, and mitigation considerations for LLM applications.", "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"]
);
Object.assign(lessonDeckDownloads, {
  "procurement-vendor-oversight": "downloads/presentations/lesson-18-procurement-and-vendor-oversight.pptx",
  "privacy-confidentiality-public-records": "downloads/presentations/lesson-19-privacy-confidentiality-and-public-records.pptx",
  "model-validation-evaluation-basics": "downloads/presentations/lesson-20-model-validation-and-evaluation-basics.pptx",
  "ai-incident-response": "downloads/presentations/lesson-21-ai-incident-response.pptx",
  "role-based-ai-guidelines": "downloads/presentations/lesson-22-role-based-ai-use-guidelines.pptx",
  "responsible-prompting-review": "downloads/presentations/lesson-23-responsible-prompting-and-review.pptx",
  "community-engagement-ai": "downloads/presentations/lesson-24-community-engagement-for-ai.pptx",
  "accessibility-language-access": "downloads/presentations/lesson-25-accessibility-and-language-access.pptx",
  "cybersecurity-secure-ai-use": "downloads/presentations/lesson-26-cybersecurity-and-secure-ai-use.pptx",
  "when-not-to-use-ai": "downloads/presentations/lesson-27-when-not-to-use-ai.pptx",
  "ai-support-areas": "downloads/presentations/lesson-28-areas-where-ai-can-support-public-health-activities.pptx"
});

const startHereUsingTogether = learningModules.find(module => module.id === "using-together");
const startHereUsingTogetherIndex = learningModules.findIndex(module => module.id === "using-together");
if (startHereUsingTogetherIndex >= 0) learningModules.splice(startHereUsingTogetherIndex, 1);

function individualLearningLanguage(text) {
  if (typeof text !== "string") return text;
  return text
    .replace(/This module helps teams distinguish/g, "This module helps you distinguish")
    .replace(/This module helps teams build/g, "This module helps you build")
    .replace(/This module helps departments move/g, "This module helps you move your department")
    .replace(/This module helps nontechnical staff understand/g, "This module helps you understand")
    .replace(/This module should help teams build/g, "This module helps you build")
    .replace(/This module should prepare teams/g, "This module prepares you")
    .replace(/This module gives teams/g, "This module gives you")
    .replace(/This module helps departments/g, "This module helps you")
    .replace(/This topic explains how the learning section can function/g, "This overview explains how you can use the learning section")
    .replace(/Health departments can assign modules before workshops, use them during facilitated team sessions, or incorporate them into onboarding for staff who will participate in AI-supported work\./g, "You can use the modules before workshops, during facilitated sessions, or as onboarding if you will participate in AI-supported work.")
    .replace(/The goal is to create shared readiness across roles\./g, "The goal is to help you understand your role in shared readiness.")
    .replace(/Program staff need to understand/g, "You may need to understand")
    .replace(/Leaders need to understand/g, "If you are in a leadership role, you need to understand")
    .replace(/Privacy, legal, procurement, IT, communications, equity, and data staff need enough shared language/g, "If you work in privacy, legal, procurement, IT, communications, equity, or data, you need enough shared language")
    .replace(/Departments can adapt the modules/g, "You can adapt the modules")
    .replace(/Public health staff do not need/g, "You do not need")
    .replace(/You do not need to become machine learning engineers, but they do need/g, "You do not need to become a machine learning engineer, but you do need")
    .replace(/public health staff and leaders/g, "your colleagues and leaders")
    .replace(/staff and leaders/g, "colleagues and leaders")
    .replace(/staff should be able to/g, "you should be able to")
    .replace(/What Staff Should Be Able to Do/g, "What You Should Be Able to Do")
    .replace(/How Departments Can Use the Learning Modules/g, "How You Can Use the Learning Modules")
    .replace(/Start with Understanding Artificial Intelligence, Generative AI, and Agentic AI so staff share basic vocabulary\./g, "Start with Understanding Artificial Intelligence, Generative AI, and Agentic AI so you have the basic vocabulary.")
    .replace(/Use AI Support Areas after foundational topics so teams can discuss/g, "Use AI Support Areas after foundational topics so you can discuss")
    .replace(/Use one module at a time as a 30- to 60-minute staff training session\./g, "Work through one module at a time as a 30- to 60-minute learning session.")
    .replace(/Assign modules as pre-work/g, "Complete modules as pre-work")
    .replace(/Ask participants to identify/g, "Ask yourself to identify")
    .replace(/participants should be able to say/g, "you should be able to say")
    .replace(/Staff training should/g, "Your training should")
    .replace(/Training should/g, "Your training should")
    .replace(/Staff should/g, "You should")
    .replace(/staff can see/g, "you can see")
    .replace(/staff can adapt/g, "you can adapt")
    .replace(/staff can recognize/g, "you can recognize")
    .replace(/staff may not recognize/g, "you may not recognize")
    .replace(/Staff may feel/g, "You may feel")
    .replace(/Staff do not all need/g, "You may not need")
    .replace(/staff experimentation/g, "individual experimentation")
    .replace(/program staff/g, "program colleagues")
    .replace(/Program staff/g, "Program colleagues")
    .replace(/implementation teams/g, "implementation work")
    .replace(/Implementation teams/g, "Implementation work")
    .replace(/AI projects begin/g, "you begin AI project work")
    .replace(/teams can discuss/g, "you can discuss")
    .replace(/Use these questions to help staff compare/g, "Use these questions to compare")
    .replace(/Use these questions to turn the module into a facilitated discussion\. They are intended to help staff connect the concept to their own programs, data, authorities, workflows, and community responsibilities\./g, "Use these questions to connect the concept to your own role, data, authorities, workflows, and community responsibilities.")
    .replace(/Use these questions to decide how the learning modules should be assigned, facilitated, documented, and connected to governance or implementation work\./g, "Use these questions to decide how you will complete, document, and apply the learning module to governance or implementation work.")
    .replace(/By the end of the module, staff should be able to produce or contribute to these concrete materials\./g, "By the end of the module, you should be able to produce or contribute to these concrete materials.")
    .replace(/These takeaways are designed to feed directly into the playbook tools, governance discussions, or implementation planning\./g, "Use these takeaways as inputs to playbook tools, governance discussions, or implementation planning.")
    .replace(/public health professionals/g, "you and other public health professionals")
    .replace(/teams turn/g, "you turn")
    .replace(/help teams/g, "help you");
}

function individualizeLearningModules() {
  const walk = value => {
    if (typeof value === "string") return individualLearningLanguage(value);
    if (Array.isArray(value)) return value.map(walk);
    if (value && typeof value === "object") {
      Object.keys(value).forEach(key => { value[key] = walk(value[key]); });
    }
    return value;
  };
  walk(learningModules);
  walk(learningModuleNarrative);
  walk(learningModuleDeepDive);
  walk(learningModuleApplicationDetails);
  walk(backgroundMaterial);
  learningModules.forEach(module => {
    if (module.id === "staff-training") {
      module.text = "Use these modules to build your own foundation before you participate in AI project work. The learning section can support self-paced learning, onboarding, leadership orientation, governance preparation, and role-specific readiness.";
      module.risk = "Connect your learning to agency policy, approved tools, data safeguards, escalation expectations, and governance requirements.";
    }
  });
}

individualizeLearningModules();

const newsItems = [
  {
    title: "Colorado lawmakers introduce new AI rules for automated decisions",
    source: "Axios Denver",
    date: "May 3, 2026",
    category: "State AI Legislation",
    url: "https://www.axios.com/local/denver/2026/05/03/colorado-ai-artificial-intellligence-legislation",
    summary: "Colorado lawmakers introduced a replacement framework for the state's AI law that would regulate automated decision-making in areas including health care, insurance, employment, housing, education, and financial services.",
    relevance: "Public health departments should watch this because state AI rules may affect procurement, vendor documentation, human review, data correction rights, risk review, and the use of AI in eligibility, services, inspections, case management, and health programs."
  },
  {
    title: "New York lawmakers consider guardrails for high-risk AI decisions",
    source: "Times Union",
    date: "January 15, 2026",
    category: "State AI Legislation",
    url: "https://www.timesunion.com/state/article/new-york-lawmakers-eye-new-ai-regulations-21297051.php",
    summary: "New York lawmakers examined proposed AI rules for high-risk decision-making, including requirements related to discrimination prevention, audits, transparency, and human review in sectors such as health care, housing, employment, and public services.",
    relevance: "Relevant to health departments because similar state bills could require documented risk controls, bias review, appeal pathways, human oversight, and audit-ready records when AI supports public health decisions or services."
  },
  {
    title: "New York legislature advances several AI regulation bills",
    source: "Times Union",
    date: "June 4, 2026",
    category: "State AI Legislation",
    url: "https://www.timesunion.com/capitol/article/legislature-pass-several-ai-regulations-end-22291385.php",
    summary: "New York lawmakers moved multiple AI bills near the end of session, including measures focused on AI training data transparency, chatbot risks, workforce impacts, and AI-generated media disclosure.",
    relevance: "Public health departments should monitor these types of bills because they may affect staff training, chatbot use, workforce planning, public communications, transparency expectations, and records needed for AI-supported workflows."
  },
  {
    title: "Federal AI draft could override some state AI laws",
    source: "Axios",
    date: "June 4, 2026",
    category: "State AI Legislation",
    url: "https://www.axios.com/2026/06/04/house-draft-bill-regulate-ai",
    summary: "A bipartisan House discussion draft for a national AI framework would preempt some state AI laws while adding provisions related to AI whistleblowers, fraud penalties, AI literacy, education, and research.",
    relevance: "This matters for public health departments tracking state AI obligations because federal preemption proposals could change whether departments follow state-specific rules, federal requirements, or both."
  },
  {
    title: "California announces discounted Claude access for state government",
    source: "TechRadar",
    date: "June 30, 2026",
    category: "Government AI",
    url: "https://www.techradar.com/pro/newsom-strikes-anthropic-deal-to-get-california-government-half-price-claude-ai-access",
    summary: "California announced a statewide arrangement to make Claude available to government agencies at reduced cost, reinforcing the need for procurement, access controls, approved-use guidance, and workforce training before broad GenAI access expands.",
    relevance: "Useful for public health departments thinking about enterprise AI access, member permissions, role-based guidance, and how state-level procurement decisions may affect local implementation."
  },
  {
    title: "FDA launches agencywide AI tool",
    source: "Axios",
    date: "June 2, 2025",
    category: "Federal Health AI",
    url: "https://www.axios.com/2025/06/02/fda-launches-ai-tool",
    summary: "FDA introduced an internal AI tool for agencywide use, showing how health agencies are moving from experimentation toward enterprise AI environments with governance, acceptable-use boundaries, and operational support.",
    relevance: "Helpful context for health departments planning approved AI environments, staff guidance, and governance review for internal AI assistants."
  },
  {
    title: "California inspection report search tool uses AI-assisted public records workflows",
    source: "San Francisco Chronicle",
    date: "December 22, 2025",
    category: "Transparency and Inspection Data",
    url: "https://www.sfchronicle.com/about/newsroomnews/article/hospital-tool-california-21244615.php",
    summary: "A newsroom project used AI-supported search and document processing to make California health facility inspection reports easier to find and analyze, illustrating public demand for clearer access to complex regulatory information.",
    relevance: "Relevant to public health teams considering AI-supported inspection documentation, regulatory linkage, document search, public transparency, and quality review workflows."
  },
  {
    title: "Opportunities and risks of generative AI across the health information journey",
    source: "arXiv",
    date: "May 21, 2026",
    category: "Evidence and Risk",
    url: "https://arxiv.org/abs/2605.23026",
    summary: "This paper examines how generative AI may affect the health information journey, including possible benefits and risks across information creation, interpretation, access, and use.",
    relevance: "Supports learning modules on responsible prompting, evidence review, misinformation risk, communication quality, and human review."
  },
  {
    title: "Agentic AI governance and lifecycle management in healthcare",
    source: "arXiv",
    date: "January 22, 2026",
    category: "Agentic AI Governance",
    url: "https://arxiv.org/abs/2601.15630",
    summary: "This paper focuses on governance and lifecycle management for agentic AI in healthcare, including oversight needs when systems can plan, act, monitor, and adapt within defined boundaries.",
    relevance: "Useful for public health governance, system inventory, monitoring, incident response, role permissions, and organization-level accountability design."
  },
  {
    title: "HIPAA-compliant agentic AI system design in healthcare",
    source: "arXiv",
    date: "April 24, 2025",
    category: "Privacy and Security",
    url: "https://arxiv.org/abs/2504.17669",
    summary: "This paper discusses design considerations for agentic AI systems in healthcare environments where privacy, auditability, and compliance controls are central.",
    relevance: "Helpful for departments reviewing privacy safeguards, approved environments, audit logs, data minimization, and vendor or architecture requirements."
  }
];

const main = document.querySelector("main");
const nav = document.querySelector(".primary-nav");
const menuButton = document.querySelector(".menu-button");
const memberStoreKey = "aiPlaybookMemberState";

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

function route() {
  const hash = location.hash || "#/";
  const [path, param] = hash.replace("#/", "").split("/");
  const key = path || "";
  document.querySelectorAll(".primary-nav a").forEach(a => {
    const target = a.getAttribute("href").replace("#/", "");
    a.classList.toggle("active", target === key || (target === "" && key === ""));
  });
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  if (key === "") renderHome();
  else if (key === "learn") renderLearn(param);
  else if (key === "use-areas") renderLearn("ai-support-areas");
  else if (key === "assess") renderAssess();
  else if (key === "maturity") renderMaturity();
  else if (key === "plays") param ? renderPlayDetail(Number(param)) : renderPlays();
  else if (key === "play-guides" && param === "vision-workshop") renderVisionWorkshopGuide();
  else if (key === "play-guides" && param === "readiness-assessment") renderReadinessAssessmentGuide();
  else if (key === "play-guides" && param === "ai-governance") renderAIGovernanceGuide();
  else if (key === "play-guides" && param === "stakeholder-engagement") renderStakeholderEngagementGuide();
  else if (key === "play-guides" && /^play-\d+$/.test(param || "")) renderImplementationPlayGuide(Number(param.replace("play-", "")));
  else if (key === "toolkit") param ? renderToolDetail(Number(param)) : renderToolkit();
  else if (key === "cases") renderCaseStudies();
  else if (key === "community") renderCommunity(param);
  else if (key === "member") renderMember();
  else if (key === "organization") renderOrganizationHub(param);
  else if (key === "member-info") renderMemberInfo();
  else if (key === "references") renderReferences();
  else if (key === "contribute") renderContribute();
  else if (key === "contact") renderContact();
  else if (key === "news") renderNews();
  else renderHome();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  main.focus({ preventScroll: true });
}

function phaseName(id) { return phases.find(p => p.id === id)?.name || ""; }
function phaseStartPlay(id) { return plays.find(p => p.phase === id)?.id || 1; }
function playLink(id) { const p = plays.find(x => x.id === id); return `<a href="#/plays/${id}">Play ${id}: ${p.title}</a>`; }
function toolLink(id) { const t = tools.find(x => x.id === id); return `<a href="#/toolkit/${id}">Tool ${id}: ${t.title}</a>`; }
function normalizeOutputText(text) {
  return String(text || "").replace(/\.$/, "");
}
function outputPurpose(output) {
  const text = normalizeOutputText(output);
  const lower = text.toLowerCase();
  if (lower.includes("vision")) return "Creates a shared statement of what the department wants AI to accomplish and what public value should guide later decisions.";
  if (lower.includes("principle")) return "Translates responsible AI values into practical commitments that can be reflected in policy, governance review, training, and communications.";
  if (lower.includes("guardrail") || lower.includes("prohibited") || lower.includes("boundary")) return "Defines the limits of acceptable AI use so staff, leaders, vendors, and partners understand what is allowed, restricted, or not permitted.";
  if (lower.includes("governance") || lower.includes("committee") || lower.includes("board") || lower.includes("approval")) return "Creates clear authority, review responsibilities, decision rights, and accountability before AI work moves forward.";
  if (lower.includes("score") || lower.includes("readiness") || lower.includes("stage")) return "Turns assessment evidence into a practical signal about current capability, priority gaps, and the responsible pace for implementation.";
  if (lower.includes("gap") || lower.includes("weak") || lower.includes("blocking") || lower.includes("parallel")) return "Identifies the specific conditions that must be addressed before pilots, procurement, deployment, or scaling can proceed safely.";
  if (lower.includes("stakeholder") || lower.includes("engagement") || lower.includes("community") || lower.includes("voices")) return "Documents whose perspectives are needed, how input was gathered, and how concerns shape design, governance, implementation, and monitoring.";
  if (lower.includes("raci") || lower.includes("owner") || lower.includes("owners") || lower.includes("responsibil")) return "Clarifies who leads the work, who approves it, who contributes expertise, and who must be kept informed.";
  if (lower.includes("policy") || lower.includes("standard") || lower.includes("documentation")) return "Converts expectations into durable requirements that can be reviewed, updated, audited, and used consistently across programs.";
  if (lower.includes("inventory")) return "Creates the central record of AI systems, owners, purposes, data involved, approval status, monitoring cadence, and lifecycle decisions.";
  if (lower.includes("risk") || lower.includes("incident") || lower.includes("safety") || lower.includes("drift") || lower.includes("bias")) return "Makes risks visible, assignable, and trackable so governance can require mitigation, monitoring, pause, or redesign when needed.";
  if (lower.includes("data") || lower.includes("privacy") || lower.includes("security") || lower.includes("classification")) return "Documents data sensitivity, access limits, privacy/security requirements, and the approved environment for the AI use.";
  if (lower.includes("training") || lower.includes("workforce") || lower.includes("competenc") || lower.includes("champion")) return "Ensures staff have the knowledge, role clarity, support, and confidence needed to use or oversee AI responsibly.";
  if (lower.includes("communication") || lower.includes("faq") || lower.includes("notice")) return "Provides clear, plain-language messaging so staff, partners, or the public understand what is changing and how to ask questions or raise concerns.";
  if (lower.includes("fund") || lower.includes("cost") || lower.includes("sustain")) return "Shows whether the department can fund the full lifecycle of the work, not only the pilot or initial purchase.";
  if (lower.includes("playbook") || lower.includes("timeline") || lower.includes("milestone") || lower.includes("dependency")) return "Turns approved work into a sequenced plan with dependencies, owners, decision gates, and update points.";
  if (lower.includes("validation") || lower.includes("testing") || lower.includes("pilot") || lower.includes("deployment") || lower.includes("go-live")) return "Provides the evidence needed to decide whether the AI-supported workflow is ready to test, deploy, scale, revise, or pause.";
  if (lower.includes("monitor") || lower.includes("dashboard") || lower.includes("evaluation") || lower.includes("outcome") || lower.includes("improvement")) return "Creates a recurring evidence base for evaluating performance, equity, reliability, usefulness, and the need for corrective action.";
  return "Documents a decision, artifact, or evidence point needed to move from planning into accountable implementation.";
}
function outputUse(output, play) {
  const text = normalizeOutputText(output);
  const lower = text.toLowerCase();
  if (lower.includes("next") || lower.includes("action plan") || lower.includes("due date")) return "Use it to assign work in the organization hub or workplan, set deadlines, and confirm what should happen before the next play begins.";
  if (lower.includes("briefing") || lower.includes("summary")) return "Use it for leadership, governance, or partner review so decision-makers can see the evidence, constraints, and decisions needed.";
  if (lower.includes("governance") || lower.includes("approval") || lower.includes("policy") || lower.includes("charter")) return "Use it as a formal governance record and as the basis for approval, revision, escalation, audit, or policy update decisions.";
  if (lower.includes("stakeholder") || lower.includes("community") || lower.includes("voices")) return "Use it to adjust the use case, workflow, communications, equity review, monitoring plan, and future engagement activities.";
  if (lower.includes("score") || lower.includes("gap") || lower.includes("readiness") || lower.includes("blocking") || lower.includes("parallel")) return "Use it to decide which plays and tools should be completed first, which work can proceed in parallel, and which activities should wait.";
  if (lower.includes("risk") || lower.includes("incident") || lower.includes("barrier") || lower.includes("concern")) return "Use it to assign mitigation owners, track resolution, and escalate unresolved issues to governance or leadership.";
  if (lower.includes("training") || lower.includes("workforce") || lower.includes("competenc")) return "Use it to assign learning modules, verify completion, and determine whether staff are ready for the next implementation step.";
  if (lower.includes("fund") || lower.includes("cost") || lower.includes("sustain")) return "Use it to make playbook, grant, procurement, scale, and sustainment decisions before commitments exceed available resources.";
  if (lower.includes("playbook") || lower.includes("timeline") || lower.includes("milestone")) return "Use it to manage sequencing, deadlines, dependencies, governance gates, and progress reporting.";
  if (lower.includes("validation") || lower.includes("testing") || lower.includes("pilot") || lower.includes("deployment") || lower.includes("go-live")) return "Use it as evidence for go/no-go, revise, pause, scale, or retire decisions.";
  if (lower.includes("monitor") || lower.includes("dashboard") || lower.includes("evaluation") || lower.includes("outcome")) return "Use it during recurring oversight to identify trends, equity issues, performance loss, staff adoption problems, and improvement actions.";
  return `Use it to document completion of Play ${play.id}, support handoff to the next play, and preserve an auditable record of decisions and assumptions.`;
}
function outputsPurposeTable(play, overrideOutputs) {
  const catalog = masterOutputPurposeCatalog();
  const outputs = overrideOutputs
    ? overrideOutputs.map(output => ({ output, purpose: outputPurpose(output), use: outputUse(output, play) }))
    : catalog.filter(row => row.playId === play.id);
  return `<div class="table-wrap"><table><thead><tr><th>Output</th><th>Purpose</th><th>How It Should Be Used</th></tr></thead><tbody>
    ${outputs.map(row=>`<tr><td>${row.output}</td><td>${row.purpose}</td><td>${row.use}</td></tr>`).join("")}
  </tbody></table></div>`;
}
function masterOutputPurposeCatalog() {
  return plays.flatMap(play => (playOutputDetails[play.id] || [play.output]).map(output => ({
    playId: play.id,
    playTitle: play.title,
    output,
    purpose: outputPurpose(output),
    use: outputUse(output, play)
  })));
}
function beforeBeginForPlay(play, guide) {
  if (play.id === 1) return "Begin with leadership permission to convene the workshop, a facilitator, a preliminary list of known or suspected AI uses, and enough internal participation to discuss strategy, data, privacy, equity, workforce, and operations.";
  if (play.id === 2) return "Begin after the department has a basic AI vision or interim guardrails. Gather evidence about governance, data infrastructure, workforce capacity, equity and engagement, partnerships, privacy, security, and current AI activity.";
  if (play.id === 3) return "Begin after leadership agrees that AI use requires formal oversight. Bring forward Play 1 guardrails, Play 2 readiness findings, any known AI uses, and unresolved legal, privacy, IT, equity, procurement, or leadership questions.";
  if (play.id === 4) return "Begin with the readiness findings, governance pathway, and an initial sense of which workflows or communities may be affected. Engagement should occur early enough that stakeholder input can change decisions.";
  return `${guide.timing} Bring forward prior play outputs, unresolved decisions, relevant tool results, and any governance conditions that must shape this play.`;
}
function involvementGuidanceForPlay(play) {
  const roles = play.who || [];
  const lead = roles[0] || "Designated play lead";
  const reviewers = roles.slice(1, 5).join(", ") || "governance, program, data, legal/privacy, IT/security, equity, communications, and workforce representatives as relevant";
  return `<p><strong>Lead:</strong> ${lead}. The lead should coordinate meetings, collect inputs, assign tool completion, and bring unresolved decisions to governance or leadership.</p>
    <p><strong>Contributors and reviewers:</strong> ${reviewers}. Involve contributors when their expertise can still change the plan, not after the play is effectively complete.</p>
    <p><strong>Participation approach:</strong> Use short working sessions for drafting, targeted review for legal/privacy/security/equity issues, and a decision meeting when approval, pause, revision, or sequencing choices are needed.</p>`;
}
function completionCriteriaForPlay(play) {
  const outputs = playOutputDetails[play.id] || [play.output];
  const sample = outputs.slice(0, 3);
  return `<ul class="check-list">
    <li>The required people have contributed, reviewed, or approved the work appropriate to their role.</li>
    <li>The supporting tools have been completed or intentionally deferred with a documented reason.</li>
    <li>Key outputs are complete enough to guide decisions, including ${sample.map(normalizeOutputText).join(", ")}.</li>
    <li>Open risks, assumptions, disagreements, and governance decisions are documented with owners and due dates.</li>
    <li>The department knows which play, tool, approval, or implementation action comes next.</li>
  </ul>`;
}
function breadcrumbTrail() {
  const [path, param] = (location.hash || "#/").replace("#/", "").split("/");
  const key = path || "";
  if (!key) return "";
  const items = [{ label: "Start Here", href: "#/" }];
  const add = (label, href = "") => items.push({ label, href });
  const module = learningModules.find(m => m.id === param);
  const playParam = key === "plays" ? Number(param) : key === "play-guides" && /^play-\d+$/.test(param || "") ? Number(param.replace("play-", "")) : 0;
  const play = plays.find(p => p.id === playParam);
  const tool = key === "toolkit" ? tools.find(t => t.id === Number(param)) : null;
  const guideLabels = {
    "vision-workshop": "Play 1 Guidance",
    "readiness-assessment": "Play 2 Guidance",
    "ai-governance": "Play 3 Guidance",
    "stakeholder-engagement": "Play 4 Guidance"
  };
  if (key === "learn") {
    add("Learn", "#/learn");
    if (param) add(module?.title || "Learning Module");
  } else if (key === "plays") {
    add("Plays", "#/plays");
    if (play) add(`Play ${play.id}: ${play.title}`);
  } else if (key === "play-guides") {
    add("Plays", "#/plays");
    if (play) add(`Play ${play.id}`, `#/plays/${play.id}`);
    add(guideLabels[param] || (play ? `Play ${play.id} Guidance` : "Guidance"));
  } else if (key === "toolkit") {
    add("Toolkit", "#/toolkit");
    if (tool) add(`Tool ${tool.id}: ${tool.title}`);
  } else if (key === "community") {
    add("Community", "#/community");
    if (param) add(decodeURIComponent(param));
  } else if (key === "organization") {
    add("Organization Hub", "#/organization");
    const orgLabels = { admin: "Administration", workplan: "Implementation Workplan", training: "Training Assignments" };
    if (param) add(orgLabels[param] || "Organization Page");
  } else {
    const labels = {
      assess: "Assess",
      "use-areas": "AI Support Areas",
      maturity: "Maturity Model",
      cases: "Case Studies",
      member: "My Account",
      organization: "Organization Hub",
      "member-info": "My Member Information",
      contribute: "Contribute",
      contact: "Contact Us",
      references: "Resources",
      news: "In the News"
    };
    add(labels[key] || "Page");
  }
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${items.map((item, index) => index === items.length - 1 || !item.href ? `<span aria-current="page">${item.label}</span>` : `<a href="${item.href}">${item.label}</a>`).join("<span class=\"crumb-separator\">/</span>")}</nav>`;
}
function pageIntro(title, text, pageClass = "") { return `<section class="page ${pageClass}">${breadcrumbTrail()}<h1>${title}</h1><p class="lead">${text}</p>`; }
function proseBlock(items = []) {
  return items.map(item => `<p>${item}</p>`).join("");
}
function paragraphBlock(text = "") {
  const clean = String(text || "").trim();
  if (!clean) return "";
  const sentences = clean.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g)?.map(part => part.trim()).filter(Boolean) || [clean];
  if (sentences.length <= 1 || clean.length < 260) return `<p>${clean}</p>`;
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 2) {
    paragraphs.push(sentences.slice(i, i + 2).join(" "));
  }
  return paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
}
function trainingSectionBlock(items = []) {
  if (!items.length) return "";
  return `<ul class="check-list lesson-points">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}
function learningProgressFor(moduleId) {
  const state = getMemberState();
  return (state.learningProgress || {})[moduleId] || {};
}
function knowledgeCheckQuestions(module) {
  const title = module?.title || "this module";
  const risk = module?.risk || "AI use should be reviewed before it affects public health work.";
  return [
    {
      prompt: `What is the most important first step after completing the ${title} module?`,
      options: ["Apply the concept to the department's own workflow and document next steps.", "Use AI immediately in all related workflows.", "Skip governance review if the concept seems low risk.", "Treat the module as optional background only."],
      answer: 0
    },
    {
      prompt: "Which practice best supports responsible AI use in public health?",
      options: ["Human review, documentation, privacy safeguards, and escalation pathways.", "Relying on fluent AI output when it sounds confident.", "Using public tools with sensitive data because they are convenient.", "Letting vendors define all safeguards."],
      answer: 0
    },
    {
      prompt: `Which statement best reflects the risk or guardrail for this module: ${risk}`,
      options: ["The risk should be translated into a concrete review, mitigation, or escalation step.", "The risk can be ignored if the tool is popular.", "The risk only matters after deployment.", "The risk should be handled by technical staff alone."],
      answer: 0
    },
    {
      prompt: "When should a staff member escalate an AI-related concern?",
      options: ["When outputs may be inaccurate, biased, unsafe, privacy-sensitive, misunderstood, or outside approved use.", "Only after the public reports a problem.", "Only if the AI system stops working completely.", "Never, because AI concerns should stay informal."],
      answer: 0
    },
    {
      prompt: "What counts as stronger completion evidence for a training module?",
      options: ["Passing the knowledge check and saving a practical exercise artifact or supervisor verification note.", "Opening the page once.", "Downloading the slide deck without reviewing it.", "Reading only the title and references."],
      answer: 0
    }
  ];
}
function renderLearningQuiz(module) {
  const progress = learningProgressFor(module.id);
  const questions = knowledgeCheckQuestions(module);
  return `<section class="content-section training-section quiz-section">
    <h3>Knowledge Check</h3>
    <p>Answer the five questions below. A score of 4 out of 5 or higher marks this module complete in your local progress record.</p>
    ${progress.quizScore !== undefined ? `<div class="quiz-status ${progress.completed ? "complete" : "needs-work"}"><strong>Your saved score:</strong> ${progress.quizScore} / ${questions.length}. ${progress.completed ? "Module marked complete." : "Retake the knowledge check or add verification."}</div>` : ""}
    <form class="quiz-form" data-module-id="${module.id}">
      ${questions.map((question, qIndex) => `<fieldset>
        <legend>${qIndex + 1}. ${question.prompt}</legend>
        ${question.options.map((option, oIndex) => `<label class="quiz-option"><input type="radio" name="quiz-${module.id}-${qIndex}" value="${oIndex}"> ${option}</label>`).join("")}
      </fieldset>`).join("")}
      <div class="button-row"><button class="btn primary small" type="button" onclick="submitLearningQuiz('${module.id}')">Submit Knowledge Check</button></div>
      <p id="quiz-result-${module.id}" class="tool-note">${progress.quizCompletedAt ? `Last completed: ${progress.quizCompletedAt}` : "Your quiz results are saved in this browser for the current member profile."}</p>
    </form>
  </section>`;
}
function renderPracticalExercise(module, application = {}) {
  if (!application.exercise) return "";
  const progress = learningProgressFor(module.id);
  return `<section class="content-section training-section practical-exercise-section">
    <h3>Practical Exercise</h3>
    ${paragraphBlock(application.exercise)}
    ${application.artifacts ? `<h4>Expected artifact or evidence</h4><ul class="check-list">${application.artifacts.map(item => `<li>${item}</li>`).join("")}</ul>` : ""}
    <label class="exercise-evidence-label">Your exercise evidence or verification note
      <textarea id="exercise-evidence-${module.id}" rows="5" placeholder="Summarize the artifact you created, paste a link/reference, or document supervisor verification.">${progress.exerciseEvidence || ""}</textarea>
    </label>
    <div class="button-row"><button class="btn small" type="button" onclick="saveLearningExercise('${module.id}')">Save Exercise Evidence</button></div>
    <p id="exercise-result-${module.id}" class="tool-note">${progress.exerciseSavedAt ? `Exercise evidence saved: ${progress.exerciseSavedAt}` : "Your exercise evidence can support administrator or supervisor verification."}</p>
  </section>`;
}
function addedToolGuidanceSection(playId) {
  const items = addedToolGuidanceByPlay[playId] || [];
  if (!items.length) return "";
  return `
    <section class="content-section">
      <h2>How the Added Tools Fit</h2>
      <div class="tool-discussion-list">
        ${items.map(([toolId, note]) => {
          const tool = tools.find(x => x.id === toolId);
          return `<article class="tool-discussion-item"><h3>${toolLink(toolId)}</h3><p>${note}</p><p class="plain-meta">Use this alongside Play ${playId}${tool?.playIds?.includes(playId) ? " supporting tools" : " when the issue is relevant to the work"}.</p></article>`;
        }).join("")}
      </div>
    </section>`;
}

function defaultMemberState() {
  return {
    profile: null,
    accountType: "Individual",
    organization: {},
    agencyProfile: {},
    implementationPlan: {},
    organizationDashboard: {},
    organizationInvitations: [],
    bookmarks: [],
    teamMembers: [],
    notifications: [],
    savedAssessments: [],
    savedTools: [],
    learningProgress: {},
    forumPosts: [
      { id: "seed-1", author: "Playbook Team", topic: "Governance", title: "How are agencies sequencing governance before pilots?", body: "Share approaches for forming an AI governance body, approving use cases, and keeping community input visible.", date: "2026-06-30" },
      { id: "seed-2", author: "Playbook Team", topic: "Readiness", title: "What readiness gaps are hardest to close?", body: "Use this thread to compare data, workforce, privacy, and procurement challenges.", date: "2026-06-30" }
    ],
    ratings: {}
  };
}

function getMemberState() {
  try {
    const state = { ...defaultMemberState(), ...JSON.parse(localStorage.getItem(memberStoreKey) || "{}") };
    const migrated = migrateMemberProfile(state);
    if (migrated) setMemberState(state);
    return state;
  } catch {
    return defaultMemberState();
  }
}

function setMemberState(next) {
  localStorage.setItem(memberStoreKey, JSON.stringify(next));
}

function submitLearningQuiz(moduleId) {
  const module = learningModules.find(item => item.id === moduleId);
  if (!module) return;
  const questions = knowledgeCheckQuestions(module);
  let score = 0;
  questions.forEach((question, index) => {
    const selected = document.querySelector(`input[name="quiz-${moduleId}-${index}"]:checked`);
    if (selected && Number(selected.value) === question.answer) score += 1;
  });
  const completed = score >= 4;
  const state = getMemberState();
  state.learningProgress = state.learningProgress || {};
  state.learningProgress[moduleId] = {
    ...(state.learningProgress[moduleId] || {}),
    quizScore: score,
    quizTotal: questions.length,
    quizCompletedAt: new Date().toLocaleString(),
    completed: completed || Boolean(state.learningProgress[moduleId]?.exerciseVerified)
  };
  setMemberState(state);
  const result = document.getElementById(`quiz-result-${moduleId}`);
  if (result) {
    result.textContent = completed
      ? `Score: ${score} / ${questions.length}. Module marked complete.`
      : `Score: ${score} / ${questions.length}. A score of 4 / 5 is recommended for completion; retake the quiz or document supervisor verification.`;
  }
}

function saveLearningExercise(moduleId) {
  const field = document.getElementById(`exercise-evidence-${moduleId}`);
  const state = getMemberState();
  state.learningProgress = state.learningProgress || {};
  const existing = state.learningProgress[moduleId] || {};
  state.learningProgress[moduleId] = {
    ...existing,
    exerciseEvidence: field?.value || "",
    exerciseSavedAt: new Date().toLocaleString(),
    exerciseVerified: Boolean((field?.value || "").trim()),
    completed: Boolean(existing.completed || existing.quizScore >= 4)
  };
  setMemberState(state);
  const result = document.getElementById(`exercise-result-${moduleId}`);
  if (result) result.textContent = `Exercise evidence saved: ${state.learningProgress[moduleId].exerciseSavedAt}`;
}

function splitFullName(fullName = "") {
  const parts = String(fullName).trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" ")
  };
}

function migrateMemberProfile(state) {
  if (!state.profile) return false;
  let changed = false;
  if ((!state.profile.firstName && !state.profile.lastName) && state.profile.name) {
    const parsed = splitFullName(state.profile.name);
    state.profile.firstName = parsed.firstName;
    state.profile.lastName = parsed.lastName;
    changed = true;
  }
  if (state.profile.name) {
    delete state.profile.name;
    changed = true;
  }
  return changed;
}

function memberDisplayName(profile = getMemberState().profile) {
  if (!profile) return "Member";
  return [profile.firstName, profile.lastName].filter(Boolean).join(" ") || "Public Health Member";
}

function currentMemberName() {
  return memberDisplayName();
}

function hasMemberProfile() {
  return Boolean(getMemberState().profile);
}

function saveProfileFromForm() {
  const state = getMemberState();
  state.profile = {
    firstName: document.getElementById("member-first-name").value.trim(),
    lastName: document.getElementById("member-last-name").value.trim(),
    email: document.getElementById("member-email").value.trim(),
    agency: document.getElementById("member-agency").value.trim(),
    role: document.getElementById("member-role").value
  };
  setMemberState(state);
  renderMember();
}

function memberOnlyNotice(isMember) {
  return isMember
    ? `<p class="member-access-note">Signed in locally as ${currentMemberName()}. Tool progress and downloads are enabled in this preview.</p>`
    : `<p class="member-access-note locked">Save progress and completed tool downloads are member-only. <a href="#/member-info">Create a free member profile</a> to access these features.</p>`;
}

function restoreToolProgress(toolId, blueprint) {
  const state = getMemberState();
  const saved = [...(state.savedTools || [])].reverse().find(item => item.toolId === toolId);
  if (!saved) return;
  const form = document.getElementById("tool-form");
  saved.entries.forEach(([section, fields]) => {
    fields.forEach(([field, value]) => {
      const input = [...form.elements].find(el => el.name === toolFieldName(section, field) || el.name === field);
      if (input) input.value = value || "";
    });
  });
  const status = document.getElementById("tool-save-status");
  if (status) status.textContent = `Restored saved progress from ${saved.savedAt}.`;
}

function saveToolProgress(tool, blueprint) {
  if (!hasMemberProfile()) return;
  const state = getMemberState();
  const savedAt = new Date().toLocaleString();
  state.savedTools = [
    ...(state.savedTools || []).filter(item => item.toolId !== tool.id),
    { toolId: tool.id, title: tool.title, savedAt, entries: collectToolEntries(blueprint, false) }
  ];
  setMemberState(state);
  const status = document.getElementById("tool-save-status");
  if (status) status.textContent = `Progress saved for Tool ${tool.id} at ${savedAt}.`;
}

function renderHome() {
  main.innerHTML = `
    <section class="hero-band">
      <div class="page hero-grid">
        <div>
          <h1>Generative and Agentic AI</h1>
          <h2>Playbook and Toolkit for Public Health Departments</h2>
          <p class="lead">A guided implementation website for state, territorial, local, and tribal public health departments to learn the foundations, establish a vision, assess readiness, establish governance, prioritize use cases, design a playbook, fund, deploy, monitor, and sustain oversight.</p>
          <div class="button-row">
            <a class="btn primary" href="#/plays/1">Start with Vision</a>
            <a class="btn" href="#/assess">Take Readiness Assessment</a>
            <a class="btn" href="#/plays/3">Establish Governance</a>
          </div>
          <div class="hero-overview">
            <p class="eyebrow">Playbook + Toolkit Overview</p>
            <h2>A practical implementation system for public health AI</h2>
            <p>The Generative and Agentic AI Implementation Playbook is designed for state, territorial, local, and tribal public health departments that need a clear way to move from early learning to responsible, sustainable AI use. It is a sequenced guide for leaders and cross-functional teams to make decisions, build guardrails, assess readiness, establish governance, prioritize use cases, and govern AI over time.</p>
            <p>Every health department will have a customized path through the plays and tools. The readiness assessment helps identify which gaps need attention first, while work already completed by the department can be documented, validated, and used to move more quickly into the next responsible steps.</p>
            <p>The integrated toolkit provides ${tools.length} fillable tools, templates, checklists, scoring frameworks, dashboards, and logs. Read the play first to understand the decision and intended output, then use the supporting tools to complete and document the work.</p>
          </div>
        </div>
        <aside class="journey-sidebar" aria-label="Recommended journey">
          <img class="hero-logo" src="assets/ai-playbook-logo-public-health.png?v=transparent-bg" alt="AI Playbook for Public Health" />
          <h3>Recommended Journey</h3>
          <div class="journey-list">
            ${[
              ["Plan", "Vision, readiness, governance, stakeholders, workforce, change planning, and use cases", "#/plays/1"],
              ["Build", "Funding strategy and implementation playbook", "#/plays/8"],
              ["Deploy", "Change execution, build, validation, deployment, and scale decisions", "#/plays/10"],
              ["Govern", "Oversight, monitoring, evaluation, incidents, and continuous improvement", "#/plays/12"]
            ].map((item,i)=>`<a class="journey-item" href="${item[2]}"><span class="number-badge">${i+1}</span><span><strong>${item[0]}:</strong> ${item[1]}</span></a>`).join("")}
          </div>
        </aside>
      </div>
    </section>
    <section class="page">
      <section class="panel playbook-overview">
        <p class="eyebrow">What This Site Helps Agencies Do</p>
        <h2>Move from learning to governed implementation</h2>
        <div class="overview-grid">
          <article class="mini-card"><h3>Understand AI</h3><p>Build a shared baseline on generative AI, agentic AI, Deep Research, public health workflows, risks, limitations, and guardrails before making implementation decisions.</p></article>
          <article class="mini-card"><h3>Assess readiness</h3><p>Use the six-domain readiness assessment to identify strengths and gaps across leadership, data infrastructure, workforce, equity and engagement, partnerships, privacy, and security.</p></article>
          <article class="mini-card"><h3>Choose responsible use cases</h3><p>Screen and prioritize use cases based on public health value, feasibility, equity impact, sustainability, stakeholder support, data availability, and governance approval.</p></article>
          <article class="mini-card"><h3>Plan resources</h3><p>Translate approved priorities into a funding strategy, staffing plan, procurement path, playbook, and dependency map before implementation begins.</p></article>
          <article class="mini-card"><h3>Deploy safely</h3><p>Prepare staff, manage change, validate models, document pilots, evaluate results, and require governance approval before scaling any AI-enabled workflow.</p></article>
          <article class="mini-card"><h3>Sustain oversight</h3><p>Monitor performance, audit equity, track incidents, document improvements, update policies, and maintain governance records after systems go live.</p></article>
        </div>
      </section>
      <section class="panel playbook-overview">
        <p class="eyebrow">How to Use the Playbook and Toolkit Together</p>
        <h2>Start with the play, then use the tools to document the work</h2>
        <p>${startHereUsingTogether?.text || "Read the play first to understand the decision and output, then use the linked tools during workshops or governance reviews."}</p>
        <p>The playbook and toolkit are designed as one implementation system. Plays explain the sequence, participants, decisions, outputs, and governance gates. Tools help teams complete the work, document decisions, and create reusable records for leadership, governance, implementation teams, and future audits.</p>
        <p>The assessment results will recommend plays and associated tools. However, your department can pick and choose which plays and tools will be most helpful to reach your public health goals and objectives.</p>
        <div class="overview-grid">
          <article class="mini-card"><h3>1. Read the play first</h3><p>Use each play to understand the purpose, why it matters, who should participate, key questions, and expected output before opening a template or checklist.</p></article>
          <article class="mini-card"><h3>2. Complete tools during the work</h3><p>Use tools inside workshops, governance meetings, readiness reviews, stakeholder sessions, procurement reviews, deployment planning, and monitoring meetings.</p></article>
          <article class="mini-card"><h3>3. Save decisions as records</h3><p>Completed tools should become implementation artifacts: readiness profiles, policies, charters, risk reviews, workplans, approval records, dashboards, and monitoring logs.</p></article>
          <article class="mini-card"><h3>4. Customize the path</h3><p>Use readiness assessment findings and work already completed to decide which plays and tools need full completion, update, validation, or governance review.</p></article>
        </div>
        <div class="button-row"><a class="btn primary" href="#/plays">Open Planning and Implementation Playbook</a><a class="btn" href="#/toolkit">Open Toolkit</a><a class="btn" href="#/assess">Take Readiness Assessment</a></div>
      </section>
      <section class="panel playbook-overview">
        <p class="eyebrow">Toolkit Organization</p>
        <h2>${tools.length} tools, used in the sequence of implementation</h2>
        <p>The integrated toolkit contains practical, fillable instruments that support the plays. Tools 1-${tools.length} are mapped to the current play sequence and support readiness, governance, stakeholder engagement, workforce development, change management, use case prioritization, deployment, monitoring, auditing, policy maintenance, and ASPPH-informed STLT implementation needs.</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Tool Group</th><th>Purpose</th><th>Examples</th></tr></thead>
            <tbody>
        <tr><td>Readiness and planning</td><td>Assess organizational readiness, define project scope, evaluate data quality, and build implementation timelines.</td><td>Tool 7 Readiness Self-Assessment, Tool 8 Project Charter, Tool 36 Implementation Timeline, Tool 9 Data Quality Checklist</td></tr>
        <tr><td>Governance and policy</td><td>Create the policies, charters, documentation standards, and data-use controls needed before AI projects proceed.</td><td>Tool 2 Responsible AI Policy, Tool 12 Governance Board Charter, Tool 14 Model Validation Standards, Tool 15 Data Use Agreement</td></tr>
        <tr><td>Equity and engagement</td><td>Identify affected communities, assess equity impact, document stakeholder roles, and build engagement plans.</td><td>Tool 3 Equity Impact Assessment, Tool 20 Community Engagement Planning, Tool 21 Stakeholder Mapping and RACI</td></tr>
        <tr><td>Workforce and change</td><td>Prepare staff for responsible AI adoption through competencies, champions, training, communication, and barrier identification.</td><td>Tool 23 Change Management Plan, Tool 24 Workforce Competency Framework, Tool 29 Staff Communication and FAQ, Tool 30 Barrier Identification</td></tr>
              <tr><td>Deployment and evaluation</td><td>Support infrastructure readiness, model testing, pilot evaluation, scale decisions, monitoring, audits, and continuous improvement.</td><td>Tools 39-42for deployment, Tools 44-45for monitoring, Tools 17-18 and 46for governance review and policy maintenance</td></tr>
            </tbody>
          </table>
        </div>
        <div class="button-row"><a class="btn primary" href="#/toolkit">Open Toolkit Library</a><a class="btn" href="#/plays">View 13 Plays</a></div>
      </section>
      <section class="panel playbook-overview">
        <p class="eyebrow">Outputs</p>
        <h2>What teams produce as they move through the framework</h2>
        <div class="output-list">
          ${plays.map(p=>`<a href="#/plays/${p.id}"><strong>Play ${p.id}: ${p.title}</strong><span>${playCardDescription(p)}</span></a>`).join("")}
        </div>
      </section>
      <h2>Website Entry Points</h2>
      <div class="card-grid">
        <article class="card"><h3>Learn about AI</h3><p>Build shared staff understanding of AI concepts, risks, safeguards, and public health applications.</p><a class="btn small" href="#/learn">Open learning modules</a></article>
        <article class="card"><h3>Start with Vision</h3><p>Create AI vision, principles, and guardrails before projects begin.</p><a class="btn small" href="#/plays/1">Open section</a></article>
        <article class="card"><h3>Take the Assessment</h3><p>Complete the readiness assessment to identify gaps, recommended plays, and planning priorities.</p><a class="btn small" href="#/assess">Open assessment</a></article>
        <article class="card"><h3>Set Governance</h3><p>Form committee, policy, charter, documentation, and data-use controls early.</p><a class="btn small" href="#/plays/3">Open section</a></article>
        <article class="card"><h3>Run the Playbook</h3><p>Use the plays and ${tools.length} tools together as an implementation system.</p><a class="btn small" href="#/plays">Open playbook</a></article>
        <article class="card"><h3>Join the Community</h3><p>Ask questions, exchange implementation lessons, and compare approaches with peers.</p><a class="btn small" href="#/community">Open forum</a></article>
      </div>
      <section class="panel background-panel">
        <p class="eyebrow">Background Foundations</p>
        <h2>Learn the concepts before selecting tools or pilots</h2>
        <p>Generative and agentic AI can support surveillance, communication, evidence synthesis, workflow coordination, and decision briefing, but only when agencies pair the technology with governance, equity safeguards, privacy controls, and human review.</p>
        <div class="workflow-grid">
          <article class="mini-card"><h3>Generative AI</h3><p>Drafts, summarizes, translates, codes, and creates synthetic data for reviewed public health work.</p><a href="#/learn/generative-ai">Read background</a></article>
          <article class="mini-card"><h3>Agentic AI</h3><p>Coordinates multi-step workflows across systems under explicit rules and human oversight.</p><a href="#/learn/agentic-ai">Read background</a></article>
          <article class="mini-card"><h3>Risks + Guardrails</h3><p>Addresses hallucination, bias, privacy, data sovereignty, model drift, and automation bias.</p><a href="#/learn/risks">Read background</a></article>
        </div>
      </section>
      <h2>Implementation Phases</h2>
      <div class="card-grid four-grid">${phases.map(p=>`<a class="card phase-card clickable-card" href="#/plays/${phaseStartPlay(p.id)}" aria-label="Open ${p.name} phase starting with Play ${phaseStartPlay(p.id)}"><h3>${p.name}</h3><p><strong>${p.range}</strong></p><p>${p.summary}</p></a>`).join("")}</div>
    </section>`;
}

function renderLearn(moduleId = "understanding-ai") {
  const module = learningModules.find(m => m.id === moduleId) || learningModules[0];
  const background = backgroundMaterial[module.id] || {};
  const moduleResources = learningModuleResources[module.id] || [];
  const deepDive = learningModuleDeepDive[module.id] || {};
  const application = learningModuleApplicationDetails[module.id] || {};
  const narrative = learningModuleNarrative[module.id] || [];
  const deckDownload = lessonDeckDownloads[module.id];
  const backgroundSections = background.sections || [];
  const isDefinitionSection = section => /definition|what .* means/i.test(section.title || "");
  const definitionSections = backgroundSections.filter(isDefinitionSection);
  const remainingBackgroundSections = backgroundSections.filter(section => !isDefinitionSection(section));
  const moduleNav = `<aside class="filter-panel">
        <h2>Learning Topics</h2>
        <div class="side-list">${learningModules.map(m=>`<button class="${m.id===module.id ? "active" : ""}" onclick="location.hash='#/learn/${m.id}'">${m.title.replace("Artificial Intelligence","AI")}</button>`).join("")}</div>
      </aside>`;
  if (module.id === "staff-training") {
    main.innerHTML = pageIntro("Learn: AI Foundations for Public Health", "Use these lessons to build the knowledge you need before tool selection, pilot planning, readiness assessment, or governance review.") + `
    <div class="learn-layout">
      ${moduleNav}
      <div>
        <article class="panel">
          <p class="eyebrow">Training Overview</p>
          <h2>${module.title}</h2>
          ${paragraphBlock(module.text)}
          ${narrative.length ? `<section class="content-section lesson-prose training-section"><h3>How to Use the Learning Section</h3>${narrative.map(paragraph=>`<p>${paragraph}</p>`).join("")}</section>` : ""}
          ${(deepDive.sections || []).map(section=>`<section class="content-section lesson-prose training-section"><h3>${section.title}</h3>${trainingSectionBlock(section.items)}</section>`).join("")}
          ${application.matters ? `<section class="content-section training-section"><h3>Why This Matters for Your Learning</h3>${paragraphBlock(application.matters)}</section>` : ""}
          ${application.questions ? `<section class="content-section training-section"><h3>Reflection Questions</h3><p>Use these questions to decide how you will complete, document, and apply the learning module to governance or implementation work.</p><ul class="check-list">${application.questions.map(item=>`<li>${item}</li>`).join("")}</ul></section>` : ""}
          ${renderPracticalExercise(module, application)}
          ${renderLearningQuiz(module)}
          ${application.artifacts ? `<section class="content-section training-section"><h3>Expected Training Takeaways</h3><ul class="check-list">${application.artifacts.map(item=>`<li>${item}</li>`).join("")}</ul></section>` : ""}
        </article>
      </div>
    </div></section>`;
    return;
  }
  if (module.id === "ai-support-areas") {
    main.innerHTML = pageIntro("Learn: AI Foundations for Public Health", "Use these lessons to build the knowledge you need before tool selection, pilot planning, readiness assessment, or governance review.") + `
    <div class="learn-layout">
      ${moduleNav}
      <div>
        <article class="panel">
          <p class="eyebrow">Learning Module</p>
          <h2>${module.title}</h2>
          ${paragraphBlock(module.text)}
          ${deckDownload ? `<div class="button-row"><a class="btn primary" href="${deckDownload}" download>Download PowerPoint</a></div>` : ""}
          <section class="content-section">
            <h3>How to Use These Examples</h3>
            <p>Use these support areas during early learning, readiness review, stakeholder engagement, use case prioritization, governance review, and implementation planning. As you review each example, consider your department's legal authority, data environment, workforce capacity, community context, and governance requirements.</p>
          </section>
          ${narrative.length ? `<section class="content-section lesson-prose"><h3>Page Overview</h3>${narrative.map(paragraph=>`<p>${paragraph}</p>`).join("")}</section>` : ""}
          <div class="support-area-list">
            ${publicHealthAiSupportAreas.map(area=>`
              <section class="support-area-card nested-panel">
                <div class="support-area-header">
                  <div>
                    <p class="eyebrow">Public Health AI Support Area</p>
                    <h3>${area.title}</h3>
                  </div>
                  <div class="meta-row compact">${area.plays.map(id=>`<span class="tag">${playLink(id)}</span>`).join("")}</div>
                </div>
                <p class="support-summary">${area.summary}</p>
                <div class="support-area-grid">
                  <section>
                    <h4>Useful Activities</h4>
                    <ul class="check-list">${area.activities.map(item=>`<li>${item}</li>`).join("")}</ul>
                  </section>
                  <section>
                    <h4>Required Safeguards</h4>
                    <ul class="check-list">${area.safeguards.map(item=>`<li>${item}</li>`).join("")}</ul>
                  </section>
                </div>
                <section class="content-section">
                  <h4>Learning Examples Included</h4>
                  <ul class="inline-text-list">${area.examples.map(example=>`<li>${example}</li>`).join("")}</ul>
                </section>
                <section class="content-section">
                  <h4>Related Tools</h4>
                  <div class="meta-row">${area.tools.map(id=>`<span class="tag">${toolLink(id)}</span>`).join("")}</div>
                </section>
              </section>`).join("")}
          </div>
          ${application.matters ? `<section class="content-section training-section"><h3>Why This Matters for Your Practice</h3>${paragraphBlock(application.matters)}</section>` : ""}
          ${application.questions ? `<section class="content-section training-section"><h3>Reflection Questions</h3><p>Use these questions to compare possible AI support areas and decide which ideas merit readiness review, governance review, or use case screening.</p><ul class="check-list">${application.questions.map(item=>`<li>${item}</li>`).join("")}</ul></section>` : ""}
          ${renderPracticalExercise(module, application)}
          ${renderLearningQuiz(module)}
          ${application.artifacts ? `<section class="content-section training-section"><h3>Expected Training Takeaways</h3><ul class="check-list">${application.artifacts.map(item=>`<li>${item}</li>`).join("")}</ul></section>` : ""}
        </article>
      </div>
    </div></section>`;
    return;
  }
  main.innerHTML = pageIntro("Learn: AI Foundations for Public Health", "Use these lessons to build the knowledge you need before tool selection, pilot planning, readiness assessment, or governance review.") + `
    <div class="learn-layout">
      ${moduleNav}
      <div>
        <article class="panel">
          <p class="eyebrow">Learning Module</p>
          <h2>${module.title}</h2>
          ${paragraphBlock(module.text)}
          ${deckDownload ? `<div class="button-row"><a class="btn primary" href="${deckDownload}" download>Download PowerPoint</a></div>` : ""}
          <section class="content-section">
            <h3>Learning Objectives</h3>
            <ul class="check-list">
              <li>Define the concept in plain language for your colleagues and leaders.</li>
              <li>Identify where the concept affects AI planning, governance, procurement, implementation, monitoring, or public trust.</li>
              <li>Apply the concept to concrete public health workflows using the linked plays and tools.</li>
              <li>Complete a practical activity that produces an artifact you can use in implementation planning or governance review.</li>
            </ul>
          </section>
          ${deepDive.overview ? `<section class="content-section lesson-prose"><h3>Module Overview</h3>${paragraphBlock(deepDive.overview)}</section>` : ""}
          ${definitionSections.length ? `<section class="content-section lesson-prose"><h3>Definitions</h3>${definitionSections.map(section=>`<p><strong>${section.title}:</strong> ${section.body}</p>`).join("")}</section>` : ""}
          ${narrative.length ? `<section class="content-section lesson-prose"><h3>Lesson Context</h3>${narrative.map(paragraph=>`<p>${paragraph}</p>`).join("")}</section>` : ""}
          ${(deepDive.sections || []).map(section=>`<section class="content-section lesson-prose"><h3>${section.title}</h3>${trainingSectionBlock(section.items)}</section>`).join("")}
          ${remainingBackgroundSections.map(section=>`<section class="content-section lesson-prose"><h3>${section.title}</h3>${paragraphBlock(section.body)}</section>`).join("")}
          ${background.bullets ? `<section class="content-section"><h3>${background.bulletsTitle || "Key points"}</h3><ul class="check-list">${background.bullets.map(x=>`<li>${x}</li>`).join("")}</ul></section>` : ""}
          ${background.table ? `<section class="content-section"><h3>${module.id === "workflows" ? "Workflow Stages and AI Applications" : "Funding Sources and AI Applications"}</h3><div class="table-wrap"><table><thead><tr>${module.id === "workflows" ? "<th>Workflow Stage</th><th>Description</th><th>AI Applications</th>" : "<th>Funding Source</th><th>AI Applications</th>"}</tr></thead><tbody>${background.table.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>` : ""}
          ${background.risks ? `<section class="content-section"><h3>Limitations, Risks, and Mitigations</h3><div class="table-wrap"><table><thead><tr><th>Risk</th><th>Description</th><th>Mitigation</th></tr></thead><tbody>${background.risks.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>` : ""}
          <section class="content-section">
            <h3>How to Apply This Module</h3>
            <p>Use the linked plays to decide who should be involved, what decisions need to be made, and which safeguards should be documented. Use the linked tools to turn the concept into an agency artifact that can be saved, reviewed, updated, and used during governance or implementation meetings.</p>
            <div class="meta-row">${module.plays.map(id=>`<span class="tag">${playLink(id)}</span>`).join("")}${module.tools.map(id=>`<span class="tag">${toolLink(id)}</span>`).join("")}</div>
          </section>
          <div class="callout blue"><strong>Risk or guardrail:</strong> ${module.risk}</div>
          ${application.matters ? `<section class="content-section training-section"><h3>Why This Matters for Your Practice</h3>${paragraphBlock(application.matters)}</section>` : ""}
          ${application.questions ? `<section class="content-section training-section"><h3>Reflection Questions</h3><p>Use these questions to connect the concept to your own role, data, authorities, workflows, and community responsibilities.</p><ul class="check-list">${application.questions.map(item=>`<li>${item}</li>`).join("")}</ul></section>` : ""}
          ${renderPracticalExercise(module, application)}
          ${renderLearningQuiz(module)}
          ${application.artifacts ? `<section class="content-section training-section"><h3>Expected Takeaways</h3><p>By the end of the module, you should be able to produce or contribute to these concrete materials. Use these takeaways as inputs to playbook tools, governance discussions, or implementation planning.</p><ul class="check-list">${application.artifacts.map(item=>`<li>${item}</li>`).join("")}</ul></section>` : ""}
          ${moduleResources.length ? `<section class="content-section"><h3>References and Resources</h3><div class="resource-list">${moduleResources.map(([title, note, url])=>`
            <article class="resource-item">
              <h4><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></h4>
              <p>${note}</p>
            </article>`).join("")}</div></section>` : ""}
        </article>
      </div>
    </div></section>`;
}

function renderUseAreas() {
  main.innerHTML = pageIntro("Areas Where AI Can Support Public Health Activities", "Expanded public health examples drawn from the learning modules. Each area describes practical uses, implementation activities, safeguards, and related plays and tools so agencies can move from concept to responsible action.") + `
    <section class="panel support-areas-intro">
      <p>These examples are intended for planning, governance, and implementation conversations. They are not automatic recommendations to adopt AI. A health department should use the readiness assessment, governance review, stakeholder engagement, equity impact assessment, data classification, procurement review, and implementation playbook before moving any example into a pilot or operational workflow.</p>
      <div class="button-row">
        <a class="btn primary" href="#/learn">Back to Learning Modules</a>
        <a class="btn" href="#/assess">Take Readiness Assessment</a>
        <a class="btn" href="#/plays">View Plays</a>
      </div>
    </section>
    <div class="support-area-list">
      ${publicHealthAiSupportAreas.map(area=>`
        <article class="panel support-area-card">
          <div class="support-area-header">
            <div>
              <p class="eyebrow">Public Health AI Support Area</p>
              <h2>${area.title}</h2>
            </div>
            <div class="meta-row compact">${area.plays.map(id=>`<span class="tag">${playLink(id)}</span>`).join("")}</div>
          </div>
          <p class="support-summary">${area.summary}</p>
          <div class="support-area-grid">
            <section>
              <h3>Useful Activities</h3>
              <ul class="check-list">${area.activities.map(item=>`<li>${item}</li>`).join("")}</ul>
            </section>
            <section>
              <h3>Required Safeguards</h3>
              <ul class="check-list">${area.safeguards.map(item=>`<li>${item}</li>`).join("")}</ul>
            </section>
          </div>
          <section class="content-section">
            <h3>Learning Examples Included</h3>
            <ul class="inline-text-list">${area.examples.map(example=>`<li>${example}</li>`).join("")}</ul>
          </section>
          <section class="content-section">
            <h3>Related Tools</h3>
            <div class="meta-row">${area.tools.map(id=>`<span class="tag">${toolLink(id)}</span>`).join("")}</div>
          </section>
        </article>`).join("")}
    </div>
  </section>`;
}

function renderAssess() {
  const isMember = hasMemberProfile();
  main.innerHTML = pageIntro("Assess: AI Readiness Self-Assessment", "Interactive Tool 7 collects domain scores and supports Play 2 while also informing early vision and governance decisions.") + `
    <div class="assessment-grid">
      <form id="assessment" class="panel">
        <h2>Readiness Domains</h2>
        <div class="rating-legend" aria-label="Rating scale">
          <div><strong>0</strong><span>None</span><p>No current capability, policy, process, or documented activity is in place.</p></div>
          <div><strong>1</strong><span>Some</span><p>Early or informal activity exists, but it is incomplete, inconsistent, or not yet adopted agency-wide.</p></div>
          <div><strong>2</strong><span>Good</span><p>A defined capability or process exists and is being used, though gaps or improvements remain.</p></div>
          <div><strong>3</strong><span>Excellent</span><p>Capability is mature, documented, routinely used, governed, and ready to support responsible AI implementation.</p></div>
        </div>
        ${readinessDomains.map((d, i)=>`
          <details class="domain-row" open>
            <summary><span>${d.name}</span><span id="subtotal-${d.id}">0 / 100</span></summary>
            ${d.indicators.map((label,j)=>`
              <div class="indicator">
                <span>${label}</span>
                <fieldset class="rating-set" aria-label="${d.name}: ${label}">
                  ${[0,1,2,3].map(v=>`<label><span>${v}</span><input type="radio" name="${d.id}-${j}" value="${v}" ${v===0 ? "checked" : ""}></label>`).join("")}
                </fieldset>
              </div>`).join("")}
          </details>`).join("")}
      </form>
      <aside>
        <section class="panel score-card">
          <h2>100-Point Score + Maturity Link</h2>
          <p>Total readiness score</p>
          <div class="score-number"><span id="total-score">0</span> / 100</div>
          <p class="raw-score-note" id="raw-score">Raw score: 0 / ${readinessDomains.length * 12}</p>
          <p><span id="readiness-level" class="status-label">Early Foundation Stage</span></p>
          <p id="readiness-action">Recommended: complete vision, governance, and gap register before prioritizing use cases.</p>
          <div class="scale-mini"><strong>Question scale:</strong> 0 None · 1 Some · 2 Good · 3 Excellent. Scores are converted to a 100-point readiness score.</div>
          ${isMember ? "" : `<p class="member-access-note">Create a member profile to save progress or download completed assessment summaries. Blank tool templates remain available in the toolkit library.</p>`}
          <div class="button-row no-print">
            <button class="btn primary small" type="button" id="save-assessment" ${isMember ? "" : "disabled"}>Save Progress</button>
            <button class="btn small" type="button" id="download-results-word" ${isMember ? "" : "disabled"}>Download Word Summary</button>
            <button class="btn small" type="button" id="download-results-pdf" ${isMember ? "" : "disabled"}>Download PDF Summary</button>
          </div>
          <p id="assessment-save-status" class="save-status" aria-live="polite"></p>
        </section>
        <section class="panel" style="margin-top:2rem">
          <h2>Generated Outputs</h2>
          <ul>
            <li>Readiness profile</li><li>Gap register</li><li>Maturity estimate</li><li>Governance review flags</li><li>Recommended next plays</li><li>Downloadable summary</li>
          </ul>
          <div id="assessment-recs"></div>
        </section>
      </aside>
    </div></section>`;
  document.querySelector(".scale-mini").innerHTML = "<strong>Question scale:</strong> 0 None, 1 Some, 2 Good, 3 Excellent. Scores are converted to a 100-point readiness score.";
  document.getElementById("assessment").addEventListener("change", updateAssessment);
  if (isMember) {
    document.getElementById("save-assessment").addEventListener("click", saveAssessmentProgress);
    document.getElementById("download-results-word").addEventListener("click", () => runDocumentDownload(() => downloadAssessment("word"), "Assessment Word summary", "assessment-save-status"));
    document.getElementById("download-results-pdf").addEventListener("click", () => runDocumentDownload(() => downloadAssessment("pdf"), "Assessment PDF summary", "assessment-save-status"));
  }
  updateAssessment();
}

function saveAssessmentProgress() {
  if (!hasMemberProfile()) return;
  const state = getMemberState();
  const savedAt = new Date().toLocaleString();
  state.savedAssessments = [
    ...(state.savedAssessments || []).filter(item => item.title !== "AI Readiness Self-Assessment"),
    {
      title: "AI Readiness Self-Assessment",
      savedAt,
      score: document.getElementById("total-score").textContent,
      rawScore: document.getElementById("raw-score").textContent,
      level: document.getElementById("readiness-level").textContent,
      action: document.getElementById("readiness-action").textContent,
      recommendations: document.getElementById("assessment-recs").innerText,
      recommendedPlays: (document.getElementById("assessment-recs").dataset.plays || "").split(",").filter(Boolean).map(Number),
      recommendedTools: (document.getElementById("assessment-recs").dataset.tools || "").split(",").filter(Boolean).map(Number)
    }
  ];
  setMemberState(state);
  const status = document.getElementById("assessment-save-status");
  if (status) status.textContent = `Saved ${savedAt}.`;
}

function updateAssessment() {
  let total = 0;
  const maxTotal = readinessDomains.length * 12;
  const domainScores = [];
  readinessDomains.forEach(d => {
    let subtotal = 0;
    d.indicators.forEach((_, j) => subtotal += Number(document.querySelector(`input[name="${d.id}-${j}"]:checked`).value));
    total += subtotal;
    const percent = Math.round((subtotal / 12) * 100);
    domainScores.push({ name: d.name, subtotal, percent });
    document.getElementById(`subtotal-${d.id}`).textContent = `${percent} / 100 (raw ${subtotal} / 12)`;
  });
  const readinessPercent = Math.round((total / maxTotal) * 100);
  const level = readinessPercent >= 76 ? "Implementation Readiness Stage" : readinessPercent >= 51 ? "Pilot Preparation Stage" : readinessPercent >= 26 ? "Planning and Readiness Stage" : "Early Foundation Stage";
  const action = readinessPercent >= 76 ? "Recommended: move through governance-approved pilots, deployment, monitoring, and oversight, assuming no critical domain is weak." : readinessPercent >= 51 ? "Recommended: complete the gap register, confirm the governance approval pathway, address weak domains, then prioritize governed pilots." : readinessPercent >= 26 ? "Recommended: strengthen governance, data, workforce, engagement, and privacy/security before pilots." : "Recommended: start with learning, vision, governance, readiness gaps, stakeholder engagement, and workforce basics.";
  document.getElementById("total-score").textContent = readinessPercent;
  document.getElementById("raw-score").textContent = `Raw score: ${total} / ${maxTotal}`;
  document.getElementById("readiness-level").textContent = level;
  document.getElementById("readiness-action").textContent = action;
  const basePlays = readinessPercent >= 76 ? [10,11,12,13] : readinessPercent >= 51 ? [6,7,8,9] : readinessPercent >= 26 ? [2,3,4,5] : [1,2,4];
  const baseTools = readinessPercent >= 76 ? [40,41,42,44,47] : readinessPercent >= 51 ? [2,7,12,25,26] : readinessPercent >= 26 ? [1,13,21,24,30] : [1,7,16,17,30];
  const priorityGaps = domainScores.filter(d => d.subtotal <= 6).sort((a, b) => a.subtotal - b.subtotal);
  const recPlays = new Set(basePlays);
  const recTools = new Set(baseTools);
  priorityGaps.forEach(gap => {
    readinessGapRecommendations[gap.name].plays.forEach(id => recPlays.add(id));
    readinessGapRecommendations[gap.name].tools.forEach(id => recTools.add(id));
  });
  document.getElementById("assessment-recs").innerHTML = `
    <h3>Suggested Next Plays</h3>
    <p>${[...recPlays].sort((a,b)=>a-b).map(playLink).join("<br>")}</p>
    <h3>Suggested Tools</h3>
    <p>${[...recTools].sort((a,b)=>a-b).map(toolLink).join("<br>")}</p>
    ${priorityGaps.length ? `<h3>Priority Gap Areas</h3><p>${priorityGaps.map(g=>`${g.name}: ${g.percent} / 100 (raw ${g.subtotal} / 12)`).join("<br>")}</p>` : `<h3>Priority Gap Areas</h3><p>No domain scored 50 / 100 or below. Use the recommendations to prepare for the next stage.</p>`}
  `;
  document.getElementById("assessment-recs").dataset.plays = [...recPlays].sort((a,b)=>a-b).join(",");
  document.getElementById("assessment-recs").dataset.tools = [...recTools].sort((a,b)=>a-b).join(",");
}

function assessmentSections() {
  const recommendations = document.getElementById("assessment-recs").innerText.replace(/\n{3,}/g, "\n\n");
  return [
    { heading: "Summary", lines: [
      `Readiness score: ${document.getElementById("total-score").textContent} / 100`,
      document.getElementById("raw-score").textContent,
      `Level: ${document.getElementById("readiness-level").textContent}`,
      `Action: ${document.getElementById("readiness-action").textContent}`
    ] },
    { heading: "Scoring Logic", lines: [
      "Each assessment question is rated 0-3: 0 None, 1 Some, 2 Good, 3 Excellent.",
      "Raw question scores are converted to a 100-point readiness score using this formula: raw score divided by maximum possible score, multiplied by 100.",
      "Each section is also converted to a 100-point score. A section raw score of 6 out of 12 equals 50 out of 100.",
      "Total score interpretation: 0-25 Early Foundation Stage; 26-50 Planning and Readiness Stage; 51-75 Pilot Preparation Stage; 76-100 Implementation Readiness Stage.",
      "Section score interpretation: 0-25 Significant gap; 26-50 Emerging readiness; 51-75 Developing readiness; 76-100 Strong readiness.",
      "The assessment is not a pass/fail grade. Weak domains such as privacy/security, governance, data infrastructure, or equity/community engagement should be addressed even when the total score is high."
    ] },
    { heading: "Recommendations", lines: recommendations.split("\n").filter(Boolean) }
  ];
}

async function downloadAssessment(format) {
  const sections = assessmentSections();
  const title = "AI Readiness Self-Assessment Summary";
  const filename = "ai-readiness-self-assessment-summary";
  if (format === "pdf") {
    const pdf = await buildProfessionalPdf(title, "Assessment Summary", "Readiness assessment results and recommended next plays.", [], sections);
    downloadBlob(`${filename}.pdf`, pdf, "application/pdf");
  } else {
    const logo = await getLogoDataUrl();
    const html = buildProfessionalWordHtml(title, "Assessment Summary", "Readiness assessment results and recommended next plays.", [], sections, logo);
    downloadBlob(`${filename}.doc`, html, "application/msword");
  }
}

function renderMaturity() {
  main.innerHTML = pageIntro("AI Maturity Model", "The maturity model is not a grading system. It helps agencies identify honest current-state capabilities and the next responsible set of plays.") + `
    <figure class="maturity-graphic-panel">
      <img src="assets/ai-maturity-model-public-health.png?v=cropped-header" alt="AI maturity model for public health showing five stages from awareness to optimization and five capability dimensions." />
      <a class="maturity-hotspot stage stage-1" href="#/learn/understanding-ai" aria-label="Open Awareness learning foundations" title="Awareness: learning foundations" data-tip="Awareness: learning foundations"></a>
      <a class="maturity-hotspot stage stage-2" href="#/assess" aria-label="Open Readiness assessment" title="Readiness: assessment" data-tip="Readiness: assessment"></a>
      <a class="maturity-hotspot stage stage-3" href="#/plays/7" aria-label="Open Pilots use case prioritization" title="Pilots: prioritize use cases" data-tip="Pilots: prioritize use cases"></a>
      <a class="maturity-hotspot stage stage-4" href="#/plays/11" aria-label="Open Deployment build and deploy play" title="Deployment: build and deploy" data-tip="Deployment: build and deploy"></a>
      <a class="maturity-hotspot stage stage-5" href="#/plays/13" aria-label="Open Optimization monitoring and evaluation play" title="Optimization: monitor and improve" data-tip="Optimization: monitor and improve"></a>
      <a class="maturity-hotspot dimension dimension-leadership" href="#/plays/1" aria-label="Open Leadership and Culture guidance" title="Leadership and Culture" data-tip="Leadership and Culture"></a>
      <a class="maturity-hotspot dimension dimension-data" href="#/toolkit/6" aria-label="Open Data Infrastructure tool" title="Data Infrastructure" data-tip="Data Infrastructure"></a>
      <a class="maturity-hotspot dimension dimension-workforce" href="#/plays/5" aria-label="Open Workforce Capacity play" title="Workforce Capacity" data-tip="Workforce Capacity"></a>
      <a class="maturity-hotspot dimension dimension-technology" href="#/toolkit/27" aria-label="Open Technology Systems readiness tool" title="Technology Systems" data-tip="Technology Systems"></a>
      <a class="maturity-hotspot dimension dimension-governance" href="#/plays/3" aria-label="Open Governance play" title="Governance" data-tip="Governance"></a>
    </figure>
    <div class="card-grid" style="margin-top:2rem">${maturityLevels.map(m=>`<article class="card"><h3>Level ${m.level}: ${m.title}</h3><p><strong>Activities:</strong> ${m.activities}</p><p><strong>Common risks:</strong> ${m.risks}</p><p><strong>Recommended plays:</strong> ${m.plays.map(playLink).join(", ")}</p><p><strong>Related tools:</strong> ${m.tools.map(toolLink).join(", ")}</p></article>`).join("")}</div>
  </section>`;
}

function renderPlays() {
  main.innerHTML = pageIntro("13-Play Planning and Implementation Playbook", "A guided playbook for moving from vision and readiness to governance, implementation, monitoring, and sustained oversight.", "plays-page") + `
    <section class="plays-overview-grid">
      <div class="framework-intro">
        <div>
          <p class="eyebrow">Implementation Playbook</p>
          <h2>Run the plays in sequence, with governance gates throughout</h2>
          <p>The framework moves agencies from vision and guardrails to readiness assessment, governance, stakeholder engagement, workforce preparation, change management planning, use case prioritization, funding strategy, playbook design, change management execution, deployment, monitoring, and sustained oversight.</p>
        </div>
        <aside>
          <strong>${plays.length} plays</strong>
          <span>${tools.length} supporting tools</span>
          <span>4 implementation phases</span>
        </aside>
        <section class="use-playbook-panel">
          <h3>How to use this playbook</h3>
          <p>Use the playbook as a structured implementation system, not a checklist that every department must complete in exactly the same way. The readiness assessment should guide the starting point, but leadership, governance, prior work, available resources, and public health priorities should shape the final path.</p>
          <ul>
            <li>Start with the readiness assessment to identify recommended plays, priority gaps, and tools that should be completed first.</li>
            <li>Use the play sequence to manage dependencies, but adapt the path when your department has already completed a step or needs a different starting point.</li>
            <li>Complete the linked tools as working documents so decisions, owners, governance reviews, timelines, and unresolved issues are documented as implementation moves forward.</li>
            <li>Use governance gates before use case approval, vendor decisions, pilots, deployment, and scale so AI work remains accountable, equitable, secure, and aligned with public health goals.</li>
            <li>Review the playbook regularly as funding, staffing, risk, technology, stakeholder input, or legal requirements change.</li>
          </ul>
        </section>
      </div>
      <aside class="journey-sidebar plays-journey-card" aria-label="Recommended journey by implementation phase">
        <img class="hero-logo" src="assets/ai-playbook-logo-public-health.png?v=transparent-bg" alt="AI Playbook for Public Health" />
        <h3>Recommended Journey</h3>
        <div class="journey-list">
          ${[
            ["Plan", "Vision, readiness, governance, stakeholders, workforce, change planning, and use cases", "#/plays/1"],
            ["Build", "Funding strategy and implementation playbook", "#/plays/8"],
            ["Deploy", "Change execution, build, validation, deployment, and scale decisions", "#/plays/10"],
            ["Govern", "Oversight, monitoring, evaluation, incidents, and continuous improvement", "#/plays/12"]
          ].map((item,i)=>`<a class="journey-item" href="${item[2]}"><span class="number-badge">${i+1}</span><span><strong>${item[0]}:</strong> ${item[1]}</span></a>`).join("")}
        </div>
      </aside>
    </section>
    ${phases.map(p=>`
      <section class="phase-row phase-${p.id}">
        <div class="phase-label">
          <span>${p.name}</span>
          <small>${p.range}</small>
          <p>${p.summary}</p>
        </div>
        <div class="play-strip">${plays.filter(x=>x.phase===p.id).map(x=>`<a class="play-tile" href="#/plays/${x.id}"><small>Play ${x.id}</small><strong>${x.title}</strong><span>${playCardDescription(x)}</span></a>`).join("")}</div>
      </section>`).join("")}
    <section class="panel detail-template">
      <p class="eyebrow">Each Play Page Includes</p>
      <h2>Decision-ready implementation guidance</h2>
      <div class="card-grid four-grid">
        <article class="mini-card"><h3>Goal</h3><p>What this play accomplishes and why it belongs in the sequence.</p></article>
        <article class="mini-card"><h3>Why it matters</h3><p>Implementation context, risk, and public health value.</p></article>
        <article class="mini-card"><h3>Key actions</h3><p>Sequenced activities, owners, and governance touchpoints.</p></article>
        <article class="mini-card"><h3>Outputs + tools</h3><p>Outputs, supporting tools, and previous/next navigation.</p></article>
      </div>
    </section>
  </section>`;
}

function renderVisionWorkshopGuide() {
  main.innerHTML = pageIntro("Guidance: Conducting an AI Vision & Principles Workshop", "A practical facilitation guide for internal public health department stakeholders completing Play 1: Vision & Guardrails.") + `
    <div class="guide-layout">
      <article class="panel guide-page">
        <section class="content-section">
          <h2>Purpose of This Guidance</h2>
          <p>An AI Vision & Principles Workshop helps a public health department establish a shared direction for responsible AI before individual tools, vendors, or use cases begin driving decisions. The workshop should produce three practical outputs: an agency-level AI vision statement, a set of responsible AI principles, and an initial list of guardrails that define what the department will and will not allow.</p>
          <p>This workshop should be conducted before the department launches formal AI pilots, procures AI-enabled tools, or authorizes staff use of AI in consequential workflows. It anchors later governance, readiness assessment, use case prioritization, and implementation work.</p>
        </section>

        <section class="content-section">
          <h2>Who to Involve and How</h2>
          <p>Invite a cross-functional group of internal stakeholders who can speak to strategy, operations, data, law, equity, workforce, and implementation realities. The workshop should not be limited to IT or data staff.</p>
          <div class="table-wrap"><table><thead><tr><th>Role</th><th>Why They Should Participate</th></tr></thead><tbody>
            ${[
              ["Health officer, deputy director, or executive sponsor", "Sets strategic direction and decision authority"],
              ["Program directors", "Identify practical use cases and operational constraints"],
              ["Informatics, epidemiology, data, and analytics staff", "Assess feasibility, data readiness, and analytic risks"],
              ["IT and cybersecurity staff", "Address secure tools, access controls, infrastructure, and vendor issues"],
              ["Legal, privacy, and compliance staff", "Identify HIPAA, state law, data use, procurement, and liability issues"],
              ["Equity or community engagement staff", "Ensure principles address bias, disparate impact, access, and trust"],
              ["Communications staff", "Address public transparency, plain-language disclosure, and message risks"],
              ["HR or workforce development staff", "Identify training, role expectations, and change-management needs"],
              ["Emergency preparedness or response staff", "Identify high-pressure use cases where guardrails are especially important"]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody></table></div>
          <p>For a state or large local health department, aim for 12-20 participants. For a smaller local or tribal health department, the workshop can work well with 6-10 participants, as long as leadership, programs, data/IT, privacy, and equity perspectives are represented.</p>
        </section>

        <section class="content-section">
          <h2>Before You Begin</h2>
          <p>Send participants a short pre-read at least one week in advance. Keep it practical and focused.</p>
          <ul class="check-list">
            <li>A plain-language overview of generative and agentic AI.</li>
            <li>A short explanation of why the department is developing an AI vision and principles.</li>
            <li>Current known or suspected AI uses within the department.</li>
            <li>Examples of public health AI use cases, such as drafting communications, summarizing surveillance reports, supporting literature reviews, identifying trends, translating technical findings, or automating routine workflows.</li>
            <li>A brief explanation of key risks, including hallucination, privacy, bias, automation bias, lack of transparency, and unclear accountability.</li>
            <li>The draft workshop template or agenda.</li>
          </ul>
          <div class="callout blue"><strong>Ask participants to come prepared to answer:</strong><br>Where are staff already using or asking to use AI? What public health problems could AI help us address? What risks or boundaries should the department discuss before moving forward?</div>
        </section>

        <section class="content-section">
          <h2>Recommended Workshop Length and Agenda</h2>
          <p>A half-day workshop is usually sufficient for an initial AI vision and principles session.</p>
          <div class="table-wrap"><table><thead><tr><th>Time</th><th>Activity</th><th>Output</th></tr></thead><tbody>
            ${[
              ["15 minutes", "Welcome and purpose", "Shared understanding of why the workshop matters"],
              ["30 minutes", "AI in public health overview", "Common baseline knowledge"],
              ["30 minutes", "Current-state discussion", "Inventory of current or emerging AI use"],
              ["45 minutes", "Public health opportunity discussion", "Priority problems AI might help address"],
              ["60 minutes", "Draft AI vision statement", "Draft agency AI vision"],
              ["60 minutes", "Define responsible AI principles", "Draft principles and commitments"],
              ["45 minutes", "Set guardrails and boundaries", "Initial allowed / not allowed / requires review list"],
              ["30 minutes", "Identify strategic priorities", "Initial list of potential AI priority areas"],
              ["15 minutes", "Next steps and ownership", "Follow-up actions and owners"]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>

        <section class="content-section">
          <h2>Facilitation Guidance</h2>
          <h3>Open with the public health mission</h3>
          <p>Begin by grounding the workshop in mission, not technology. A strong opening message is: "The purpose of today's workshop is not to decide which AI tool to buy or which pilot to launch. The purpose is to define how our department will approach AI in a way that advances public health, protects privacy, promotes equity, supports staff, and maintains public trust."</p>
          <h3>Establish ground rules</h3>
          <ul class="check-list">
            <li>Assume AI is already entering public health work, formally or informally.</li>
            <li>Focus on responsible use, not hype or fear.</li>
            <li>Name risks clearly.</li>
            <li>Distinguish between low-risk administrative support and consequential public health decisions.</li>
            <li>Do not assume AI outputs are accurate without review.</li>
            <li>Keep equity, privacy, and public trust central.</li>
            <li>Capture disagreements instead of forcing premature consensus.</li>
          </ul>
          <h3>Build shared understanding</h3>
          <p>Spend enough time ensuring that participants understand the difference between generative AI, agentic AI, predictive analytics, automation, and traditional data tools. Many agencies struggle because different staff use the term "AI" to mean different things.</p>
          <h3>Discuss public health problems before AI solutions</h3>
          <p>Do not ask, "What AI tools should we use?" Ask, "What public health problems are we trying to solve?"</p>
        </section>

        <section class="content-section">
          <h2>Developing the AI Vision Statement</h2>
          <p>The vision statement should be short, memorable, and specific enough to guide decisions. A useful prompt is: "What will responsible AI make possible for our department and the communities we serve?"</p>
          <div class="callout"><strong>Vision statement formula:</strong> [Agency name] will use AI to [public health purpose], while [safeguards], so that [intended public value].</div>
          <div class="card-grid two-grid">
            <article class="mini-card"><h3>Local Health Department</h3><p>[Agency Name] will use AI to strengthen timely, equitable, and evidence-informed public health practice while protecting privacy, maintaining human oversight, and building community trust.</p></article>
            <article class="mini-card"><h3>State Health Department</h3><p>[Agency Name] will responsibly use AI to improve data-driven decision-making, accelerate public health response, reduce administrative burden, and advance health equity across programs and communities.</p></article>
            <article class="mini-card"><h3>Tribal Health Department</h3><p>[Agency Name] will evaluate and use AI only in ways that respect tribal sovereignty, protect community data, support self-determined public health priorities, and preserve accountability to the people we serve.</p></article>
            <article class="mini-card"><h3>Conservative Starting Point</h3><p>[Agency Name] will explore AI carefully and transparently, beginning with low-risk uses that support staff capacity while developing the governance, workforce, and data protections needed for responsible implementation.</p></article>
          </div>
        </section>

        <section class="content-section">
          <h2>Developing Responsible AI Principles</h2>
          <p>After drafting the vision, define principles. These should not be abstract slogans. Each principle should include a practical commitment.</p>
          <div class="table-wrap"><table><thead><tr><th>Principle</th><th>Public Health Meaning</th><th>Example Commitment</th></tr></thead><tbody>
            ${[
              ["Transparency", "People should know when and how AI is used", "We will disclose AI use in public-facing or consequential products when appropriate."],
              ["Privacy and Security", "AI must protect individual and community data", "We will not enter identifiable or protected health information into AI tools without approved legal, privacy, and security review."],
              ["Equity and Fairness", "AI should reduce, not widen, disparities", "We will assess AI use cases for potential disparate impact before deployment and monitor equity effects over time."],
              ["Human Accountability", "AI may support decisions but does not replace responsible staff", "A named human owner will remain accountable for every AI-supported workflow."],
              ["Safety and Reliability", "AI must be tested and monitored", "We will validate AI-supported outputs before operational use and pause tools that produce harmful or unreliable results."],
              ["Community Trust", "AI use should reflect public values and community expectations", "We will involve affected communities when AI may affect services, communications, eligibility, surveillance, or resource allocation."],
              ["Legal Compliance", "AI must comply with applicable law and policy", "We will align AI use with HIPAA, state law, procurement rules, data use agreements, and agency policy."],
              ["Scientific Integrity", "AI must not fabricate evidence or obscure uncertainty", "AI-generated summaries, citations, analyses, or recommendations must be reviewed for accuracy and source validity."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>

        <section class="content-section">
          <h2>Setting Guardrails and Boundaries</h2>
          <p>Guardrails should define what is allowed, what requires review, and what is prohibited.</p>
          <div class="table-wrap"><table><thead><tr><th>Category</th><th>Example</th></tr></thead><tbody>
            ${[
              ["Allowed with minimal review", "Drafting internal meeting summaries without confidential information"],
              ["Allowed with program review", "Drafting public health messages from approved source material"],
              ["Requires governance review", "AI-assisted surveillance triage, predictive modeling, resource allocation support"],
              ["Requires legal/privacy/security review", "Any use involving PHI, PII, sensitive community data, vendor platforms, or data sharing"],
              ["Not allowed", "Entering identifiable health data into public AI tools; allowing AI to make final public health decisions; using AI-generated citations without verification"]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody></table></div>
          <ul class="check-list">
            <li>AI outputs affecting public health decisions require human review before action.</li>
            <li>Staff may not enter PHI, PII, confidential agency information, or sensitive community data into public AI tools.</li>
            <li>AI-generated public-facing content must be reviewed by responsible program and communications staff before release.</li>
            <li>AI-generated citations, legal summaries, policy summaries, or scientific claims must be verified against original sources.</li>
            <li>Any AI use involving surveillance, eligibility, enforcement, prioritization, or resource allocation must be reviewed by the AI governance body before implementation.</li>
            <li>AI systems must be documented, including purpose, owner, data used, limitations, review process, and monitoring plan.</li>
            <li>No AI system may be deployed without a named human owner responsible for performance, compliance, and escalation.</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>Identifying Strategic Priorities</h2>
          <p>Close the workshop by identifying 3-5 strategic AI priority areas, not fully developed projects. Do not approve implementation during the workshop unless a governance structure already exists. Route priorities into readiness assessment, governance review, use case prioritization, project chartering, and workforce planning.</p>
          <div class="table-wrap"><table><thead><tr><th>Priority Area</th><th>Public Health Problem</th><th>Potential AI Application</th><th>Next Step</th></tr></thead><tbody>
            ${[
              ["Health communications", "Need faster plain-language materials", "Drafting and tailoring messages from approved content", "Develop communications use case charter"],
              ["Surveillance support", "Staff scan multiple sources manually", "AI-assisted information triage and summarization", "Conduct governance and privacy review"],
              ["Internal knowledge management", "Staff need to search policies and guidance", "Retrieval-based document search", "Assess approved document sources"],
              ["Grant and report writing", "Staff capacity constraints", "AI-assisted first drafts and summaries", "Draft acceptable-use guidance"],
              ["Equity monitoring", "Need to identify disparities in outcomes", "AI-supported subgroup monitoring", "Conduct equity impact assessment"]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>

        ${addedToolGuidanceSection(1)}
        <section class="content-section">
          <h2>Outputs and How They Are Used</h2>
          ${outputsPurposeTable(plays.find(p=>p.id===1))}
        </section>
        <section class="content-section">
          <h2>Completion Criteria</h2>
          ${completionCriteriaForPlay(plays.find(p=>p.id===1))}
        </section>

        <section class="content-section">
          <h2>Follow-Up Actions</h2>
          <h3>Within one week</h3>
          <p>Send participants the workshop summary, draft AI vision statement, draft principles, draft guardrails, unresolved issues, and proposed next steps.</p>
          <h3>Within 30 days</h3>
          <ul class="check-list">
            <li>Confirm or revise the vision and principles.</li>
            <li>Identify an executive sponsor.</li>
            <li>Draft an interim acceptable-use policy.</li>
            <li>Establish or designate an AI governance committee.</li>
            <li>Begin the readiness assessment.</li>
            <li>Inventory current or proposed AI uses.</li>
            <li>Identify training needs.</li>
            <li>Determine which use cases require immediate review or pause.</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>Example Workshop Script</h2>
          <div class="script-block">
            <p><strong>Opening:</strong> Thank you for joining today's AI Vision & Principles Workshop. Our goal is to create a shared foundation for how this department will approach artificial intelligence. We are not here to choose a vendor, approve a pilot, or write a technical specification. We are here to define what responsible AI should look like for our agency, our workforce, and the communities we serve.</p>
            <p><strong>Framing:</strong> AI can help public health staff summarize information, draft materials, analyze data, support surveillance, and improve workflows. But AI can also create risks: inaccurate outputs, privacy violations, biased results, overreliance, lack of transparency, and loss of public trust. Our task is to decide how we will pursue the benefits while managing the risks.</p>
            <p><strong>Vision prompt:</strong> In three years, if our department is using AI responsibly and effectively, what will be different for staff, programs, partners, and communities?</p>
            <p><strong>Principles prompt:</strong> What must always be true about our use of AI, regardless of the tool or use case?</p>
            <p><strong>Guardrails prompt:</strong> What uses of AI are low-risk enough to allow with basic guidance? What uses require review? What uses should be prohibited unless and until stronger protections are in place?</p>
          </div>
        </section>
      </article>
      <aside class="detail-card-list">
        <section class="panel"><h2>Related Play</h2><p>${playLink(1)}</p></section>
        <section class="panel"><h2>Related Tools</h2><p>${[1,2,3,4,5,6].map(toolLink).join("<br>")}</p></section>
        <section class="panel"><h2>Next Steps</h2><p>Use the workshop outputs to inform readiness assessment, governance setup, stakeholder engagement, use case prioritization, and workforce planning.</p><div class="button-row"><a class="btn small" href="#/plays/1">Back to Play 1</a><a class="btn small" href="#/toolkit/1">Open Tool 1</a></div></section>
      </aside>
    </div>
  </section>`;
}

function renderReadinessAssessmentGuide() {
  main.innerHTML = pageIntro("Guidance: Conducting the AI Readiness Assessment", "Use the readiness assessment as a planning tool to identify strengths, gaps, risks, blocking issues, and the next plays to complete before selecting, piloting, procuring, or scaling AI use cases.") + `
    <div class="guide-layout">
      <article class="panel guide-page">
        <section class="content-section">
          <h2>Purpose of This Guidance</h2>
          <p>The AI Readiness Assessment helps a public health department understand whether it has the leadership, governance, data, workforce, equity, partnership, privacy, and security capacity needed to prepare for responsible AI use.</p>
          <p>Use the assessment as a planning tool, not as an audit, compliance test, or pass/fail grade. Its purpose is to identify strengths, gaps, risks, and the next plays to complete before selecting, piloting, or scaling AI use cases.</p>
          <div class="callout blue"><strong>Key rule:</strong> The total score shows the department's overall readiness pattern. The section scores determine what to do next.</div>
        </section>

        <section class="content-section">
          <h2>When to Conduct the Assessment</h2>
          <p>Conduct the assessment when the department is preparing to move from general interest or informal experimentation into structured AI planning.</p>
          <ul class="check-list">
            <li>After completing or beginning Play 1: Vision & Guardrails.</li>
            <li>After beginning Play 2: Readiness Assessment and before formal use case approval.</li>
            <li>Before launching pilots, procuring AI-enabled tools, or scaling an AI pilot into routine operations.</li>
            <li>Annually as AI capacity matures.</li>
            <li>When major changes occur in leadership, funding, data infrastructure, law, technology, or program priorities.</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>Who to Involve and How</h2>
          <p>The assessment should be completed by a cross-functional group. It should not be completed by one person alone, and it should not be delegated only to IT, data, or informatics staff.</p>
          <div class="table-wrap"><table><thead><tr><th>Stakeholder Group</th><th>Role in the Assessment</th></tr></thead><tbody>
            ${[
              ["Executive leadership", "Confirms strategy, sponsorship, priorities, and decision authority."],
              ["Program leaders", "Identifies operational needs, constraints, and realistic use cases."],
              ["Informatics, epidemiology, data, and analytics staff", "Assesses data readiness, analytic capacity, feasibility, and limitations."],
              ["IT and cybersecurity staff", "Assesses infrastructure, access controls, secure tools, integrations, and vendor risks."],
              ["Legal, privacy, and compliance staff", "Identifies HIPAA, state law, procurement, data use, and liability concerns."],
              ["Equity and community engagement staff", "Assesses potential disparate impact, trust, access, and engagement needs."],
              ["Communications staff", "Identifies public-facing risks, disclosure needs, and message review requirements."],
              ["Workforce, HR, or training staff", "Assesses staff readiness, role expectations, and training needs."],
              ["Grants, finance, or operations staff", "Identifies funding, procurement, contracting, and sustainment considerations."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody></table></div>
          <p>For most public health departments, a half-day facilitated session is enough to complete the assessment and identify initial gaps. Larger agencies may need program-level assessments followed by a cross-agency synthesis meeting.</p>
        </section>

        <section class="content-section">
          <h2>How to Prepare</h2>
          <p>Before the session, send participants a short pre-read and the assessment tool. Ask participants to come prepared to discuss where AI is already being used or requested, which programs are most interested, what data systems or workflows may be involved, where staff need training, and what privacy, equity, procurement, legal, or governance issues are visible.</p>
          <p>Gather existing materials that may help participants score readiness accurately, such as strategic plans, data modernization plans, data governance policies, privacy and security policies, workforce development plans, equity plans, community engagement plans, vendor or procurement policies, data-sharing agreements, AI acceptable-use guidance, and current project charters or proposed use cases.</p>
          <p>The facilitator should also prepare a scoring worksheet, a gap register, and a summary template for final recommendations.</p>
        </section>

        <section class="content-section">
          <h2>Recommended Session Agenda</h2>
          <div class="table-wrap"><table><thead><tr><th>Time</th><th>Activity</th><th>Output</th></tr></thead><tbody>
            ${[
              ["15 minutes", "Welcome, purpose, and ground rules", "Shared understanding"],
              ["20 minutes", "Review AI vision, principles, and governance context", "Alignment with Play 1 and governance planning"],
              ["15 minutes", "Review scoring approach", "Shared scoring expectations"],
              ["90 minutes", "Score each readiness domain", "Draft section scores"],
              ["45 minutes", "Discuss evidence, disagreements, and assumptions", "Notes supporting scores"],
              ["45 minutes", "Identify gaps and classify them as blocking or parallel", "Draft gap register"],
              ["30 minutes", "Interpret total score and section scores", "Readiness stage and weak domains"],
              ["45 minutes", "Prioritize next plays", "Recommended action plan"],
              ["15 minutes", "Confirm owners and next steps", "30-, 60-, and 90-day actions"]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>

        <section class="content-section">
          <h2>Facilitation Principles</h2>
          <div class="script-block"><p><strong>Suggested opening language:</strong> This assessment is a planning tool. Our goal is to identify where we are ready, where we have gaps, and which plays we should complete next. Honest scoring is more valuable than optimistic scoring. A lower score does not mean failure. It tells us where to focus before AI use creates avoidable risk.</p></div>
          <ul class="check-list">
            <li>Score based on evidence, not aspiration.</li>
            <li>Document disagreements.</li>
            <li>Do not average away major differences between programs or roles.</li>
            <li>Identify whether capacity exists agency-wide or only in one program.</li>
            <li>Distinguish documented practice from informal practice.</li>
            <li>Identify blocking gaps clearly.</li>
            <li>Prioritize privacy, security, governance, equity, and data quality concerns.</li>
            <li>Avoid allowing grant deadlines or vendor pressure to override readiness concerns.</li>
            <li>Treat the assessment as a starting point for action.</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>Scoring the Assessment</h2>
          <p>Each readiness domain is scored using several 0-3 ratings. The section score shows how strong that specific readiness area is. The total score shows the department's overall readiness pattern. A high total score can still hide a weak domain, such as privacy/security, data infrastructure, or equity and community engagement.</p>
          <div class="table-wrap"><table><thead><tr><th>Section Score</th><th>Raw Equivalent</th><th>Readiness Level</th><th>Meaning</th></tr></thead><tbody>
            ${[
              ["0-25 / 100", "0-3 / 12", "Significant gap", "This area needs foundational work before AI use should move forward."],
              ["26-50 / 100", "4-6 / 12", "Emerging readiness", "Some pieces are in place, but the area is not yet reliable enough for higher-risk AI planning or implementation."],
              ["51-75 / 100", "7-9 / 12", "Developing readiness", "The department has meaningful capacity in this area, but should close gaps before scaling or approving more complex AI uses."],
              ["76-100 / 100", "10-12 / 12", "Strong readiness", "This area is relatively well positioned to support responsible AI adoption, though it should still be reviewed as part of governance."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td></tr>`).join("")}
          </tbody></table></div>
          <div class="table-wrap"><table><thead><tr><th>Total Score</th><th>Raw Equivalent</th><th>Readiness Stage</th><th>Recommended Focus</th></tr></thead><tbody>
            ${[
              ["0-25 / 100", "0-21 / 84", "Early foundation stage", "Focus on learning, vision, principles, governance, and basic readiness work before selecting or piloting AI use cases."],
              ["26-50 / 100", "22-42 / 84", "Planning and readiness stage", "Begin formal readiness work, stakeholder engagement, governance setup, workforce planning, and early use case screening."],
              ["51-75 / 100", "43-63 / 84", "Pilot preparation stage", "The department may be ready to prioritize use cases and plan governed pilots, but should address weaker domains first."],
              ["76-100 / 100", "64-84 / 84", "Implementation readiness stage", "The department may be ready for structured pilots, deployment planning, monitoring, and oversight, assuming governance and risk controls are in place."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td></tr>`).join("")}
          </tbody></table></div>
          <p>Scores are displayed on a 100-point scale for easier interpretation. The underlying question ratings remain 0-3 so teams can still discuss each capability in concrete terms.</p>
        </section>

        <section class="content-section">
          <h2>How to Interpret Scores</h2>
          <ol>
            <li>Review the total score to understand the overall readiness stage.</li>
            <li>Review each section score to identify weak or uneven domains.</li>
            <li>Identify blocking gaps that must be addressed before pilots, procurement, or deployment.</li>
            <li>Map weak domains to plays that address those gaps.</li>
            <li>Select the next 2-4 plays to complete.</li>
            <li>Assign owners and timelines for gap closure.</li>
            <li>Decide whether any current or proposed AI use should be paused pending review.</li>
          </ol>
          <div class="callout"><strong>Important:</strong> Do not let the total score override weak domains. Weak leadership/governance, data infrastructure, equity/community engagement, or privacy/security scores can create significant risk even when the total score is high.</div>
        </section>

        <section class="content-section">
          <h2>Identifying Blocking and Parallel Gaps</h2>
          <p>After scoring each section, classify gaps as either blocking or parallel. A blocking gap must be addressed before the department moves forward with AI use in that area. A parallel gap can be addressed while planning continues, as long as it does not create unacceptable risk.</p>
          <div class="table-wrap"><table><thead><tr><th>Gap</th><th>Type</th><th>Why It Matters</th></tr></thead><tbody>
            ${[
              ["No policy on entering PHI or PII into AI tools", "Blocking", "Creates immediate privacy and compliance risk."],
              ["No AI governance committee or approval pathway", "Blocking for moderate- or high-risk use cases", "No clear accountability or review process."],
              ["No data quality review for a proposed surveillance use case", "Blocking for that use case", "AI outputs may be unreliable."],
              ["No community engagement process for a public-facing AI tool", "Blocking for community-impacting use cases", "May harm trust or widen disparities."],
              ["Staff need general AI literacy training", "Parallel", "Training can begin while governance and use case screening proceed."],
              ["Long-term funding is unclear", "Parallel or blocking depending on use case", "May prevent scaling, but not early planning."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>

        <section class="content-section">
          <h2>Gap Register</h2>
          <p>The primary output of the readiness assessment should be a gap register. It should become the bridge between the readiness assessment and the department's playbook action plan.</p>
          <div class="table-wrap"><table><thead><tr><th>Gap</th><th>Domain</th><th>Score</th><th>Type</th><th>Risk</th><th>Owner</th><th>Timeline</th><th>Related Play</th></tr></thead><tbody>
            ${[
              ["No responsible AI policy", "Leadership/Governance", "4", "Blocking", "High", "Deputy Director", "30 days", "Play 3"],
              ["Staff using public AI tools without guidance", "Privacy/Security", "5", "Blocking", "High", "Privacy Officer", "14 days", "Play 1, Play 3"],
              ["No AI literacy training plan", "Workforce Capacity", "6", "Parallel", "Medium", "HR/Training Lead", "60 days", "Play 5"],
              ["Data quality unknown for proposed use case", "Data Infrastructure", "5", "Blocking", "High", "Informatics Lead", "45 days", "Play 2, Play 11"],
              ["Use cases not ranked", "Leadership/Governance", "8", "Parallel", "Medium", "AI Lead", "30 days", "Play 7"]
            ].map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join("")}</tr>`).join("")}
          </tbody></table></div>
        </section>

        <section class="content-section">
          <h2>Using Section Scores to Prioritize Plays</h2>
          <div class="table-wrap"><table><thead><tr><th>Weak Domain</th><th>Recommended Action</th><th>Prioritize</th></tr></thead><tbody>
            ${[
              ["Leadership and Governance", "Strengthen AI vision, principles, governance structure, approval pathways, decision authority, documentation, and executive sponsorship.", "Play 1, Play 3"],
              ["Data Infrastructure", "Conduct data quality and infrastructure review before use case approval, especially for surveillance or sensitive data use cases.", "Play 2, Play 9, Play 11"],
              ["Workforce Capacity", "Build training plans, identify AI champions, clarify roles, and prepare staff for workflow change.", "Play 5, Play 10"],
              ["Equity and Community Engagement", "Build equity review and stakeholder engagement into use case screening before public-facing or community-impacting AI use.", "Play 1, Play 4, Play 7, Play 13"],
              ["Partnerships and Collaboration", "Identify technical, academic, community, peer-learning, vendor, or funding partners needed for implementation.", "Play 4, Play 8"],
              ["Privacy and Security", "Require privacy, legal, and security review before higher-risk planning, pilots, procurement, deployment, or sensitive data use.", "Play 3, Play 11, Play 12"]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>

        <section class="content-section">
          <h2>Using the Total Score to Set Strategy</h2>
          <div class="card-grid two-grid">
            <article class="mini-card"><h3>0-25: Early Foundation</h3><p>Do not approve AI pilots yet. Build shared understanding, vision, governance, interim guardrails, current-use inventory, and basic AI literacy.</p></article>
            <article class="mini-card"><h3>26-50: Planning and Readiness</h3><p>Complete the gap register, strengthen governance and approval pathways, map stakeholders, build workforce training plans, and begin conservative use case screening.</p></article>
            <article class="mini-card"><h3>51-75: Pilot Preparation</h3><p>Prioritize candidate use cases, complete project charters, review equity, data quality, privacy, and security risks, and prepare a governance-approved playbook.</p></article>
            <article class="mini-card"><h3>76-100: Implementation Readiness</h3><p>Confirm governance approval, validate and document systems, monitor performance and equity impacts, maintain incident response, and use pilot-to-scale decision criteria.</p></article>
          </div>
        </section>

        <section class="content-section">
          <h2>Post-Assessment Decision Meeting</h2>
          <p>Hold a 60-90 minute decision meeting within two weeks of completing the assessment.</p>
          <ul class="check-list">
            <li>Review total score and readiness stage.</li>
            <li>Review section scores and lowest-scoring domains.</li>
            <li>Confirm blocking and parallel gaps.</li>
            <li>Identify any current or proposed AI uses that should be paused.</li>
            <li>Select the next 2-4 plays to complete.</li>
            <li>Assign owners, timelines, and tools needed for each selected play.</li>
            <li>Create a 30-, 60-, and 90-day action plan.</li>
            <li>Decide when to reassess.</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>Using the Assessment to Decide What Should Wait</h2>
          <p>Pause or delay AI activities when there is no AI governance structure, no clear human accountability, unapproved staff use of public AI tools, potential PHI/PII involvement without legal/privacy/security review, unknown or poor data quality, unassessed equity impact, unclear staff review expectations, vendor-driven use cases, or no monitoring or incident response process.</p>
          <div class="script-block"><p><strong>Suggested language:</strong> This use case should not move forward until the related readiness gap is addressed and the appropriate play has been completed.</p></div>
        </section>

        <section class="content-section">
          <h2>Reassessment</h2>
          <p>Repeat the readiness assessment annually, before launching a major AI pilot, before scaling a pilot, after major policy, funding, leadership, or infrastructure changes, after a significant incident or near miss, when moving to a new maturity stage, and when adopting a new class of AI tools or vendor-supported AI functionality.</p>
          <p>Each reassessment should compare scores over time and update the gap register.</p>
        </section>
        ${addedToolGuidanceSection(2)}
        <section class="content-section">
          <h2>Outputs and How They Are Used</h2>
          ${outputsPurposeTable(plays.find(p=>p.id===2))}
        </section>
        <section class="content-section">
          <h2>Completion Criteria</h2>
          ${completionCriteriaForPlay(plays.find(p=>p.id===2))}
        </section>
      </article>
      <aside class="detail-card-list">
        <section class="panel"><h2>Related Play</h2><p>${playLink(2)}</p></section>
        <section class="panel"><h2>Related Tools</h2><p>${[3,4,7,8,9,10].map(toolLink).join("<br>")}</p></section>
        <section class="panel"><h2>Use Results To</h2><ul><li>Identify weak domains.</li><li>Classify blocking and parallel gaps.</li><li>Prioritize the next 2-4 plays.</li><li>Assign owners and timelines.</li><li>Decide what AI activity should wait.</li></ul></section>
        <section class="panel"><h2>Next Steps</h2><div class="button-row"><a class="btn small" href="#/plays/2">Back to Play 2</a><a class="btn small" href="#/assess">Take Assessment</a><a class="btn small" href="#/toolkit/7">Open Tool 7</a></div></section>
      </aside>
    </div>
  </section>`;
}

function renderAIGovernanceGuide() {
  main.innerHTML = pageIntro("Guidance: Developing AI Governance for a Public Health Department", "A practical guide for creating the structures, policies, roles, review pathways, documentation requirements, and accountability mechanisms needed before AI use cases, vendors, or pilots move forward.") + `
    <div class="guide-layout">
      <article class="panel guide-page">
        <section class="content-section">
          <h2>Purpose of This Guidance</h2>
          <p>AI governance is the set of structures, policies, roles, review processes, documentation requirements, and accountability mechanisms that ensure artificial intelligence is used responsibly, equitably, safely, and legally in a public health department.</p>
          <p>The goal is to create a department-wide system that ensures all AI work is authorized, accountable, documented, monitored, and aligned with public health values before any project begins.</p>
          <div class="callout blue"><strong>Core principle:</strong> Governance must exist before use cases are selected, vendors are engaged, or pilots are approved. There should be no situation where "the system decided" without a named human owner accountable for performance and compliance.</div>
        </section>

        <section class="content-section">
          <h2>Why Governance Matters</h2>
          <p>Public health departments manage sensitive data, communicate with the public, support emergency response, advance equity, and maintain public trust. AI can support that mission, but it can also introduce risk when adopted without oversight.</p>
          <ul class="check-list">
            <li>Who has authority to approve AI use?</li>
            <li>What AI uses are allowed, restricted, prohibited, or subject to review?</li>
            <li>Who is accountable if an AI-supported process causes harm?</li>
            <li>How will privacy, security, confidential data, and sensitive community data be protected?</li>
            <li>How will bias, equity impact, and disparate performance be assessed?</li>
            <li>How will outputs be validated before use?</li>
            <li>How will staff disclose AI use when appropriate?</li>
            <li>How will AI systems be monitored, paused, modified, or retired?</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>Governance Development Process</h2>
          <ol>
            <li><strong>Start with vision and guardrails.</strong> Governance should operationalize the AI vision, responsible AI principles, and boundaries created in Play 1.</li>
            <li><strong>Define the scope of governance.</strong> Cover staff use of generative AI, vendor AI products, AI-assisted surveillance, public-facing content, workflow automation, sensitive data use, partner tools, and internally developed systems.</li>
            <li><strong>Establish an AI governance committee or board.</strong> The body must have real authority to approve, deny, pause, modify, or terminate AI uses.</li>
            <li><strong>Charter the governance body.</strong> Define authority, membership, quorum, voting, meeting cadence, documentation, conflicts of interest, appeals, and escalation.</li>
            <li><strong>Adopt a responsible AI policy.</strong> Make expectations binding for staff, vendors, contractors, and partners.</li>
            <li><strong>Define AI use categories and review pathways.</strong> Use risk-tiered review so low-risk drafting is not treated the same as surveillance triage, eligibility, or sensitive data use.</li>
            <li><strong>Align with existing governance.</strong> Connect AI governance with data governance, IT, cybersecurity, privacy, legal, procurement, communications, equity, evaluation, and program leadership.</li>
            <li><strong>Require documentation.</strong> Every AI use case should have a basic record, with more documentation required as risk increases.</li>
            <li><strong>Require data use agreements when needed.</strong> No identifiable, protected, confidential, tribal, or sensitive community data should be processed without approved data-use terms and privacy/security review.</li>
            <li><strong>Require model validation and human review.</strong> AI may inform but not replace professional judgment for consequential public health actions.</li>
            <li><strong>Build equity and community engagement into governance.</strong> Require equity review and community input when AI may affect services, surveillance, prioritization, resource allocation, or public trust.</li>
            <li><strong>Create intake and approval processes.</strong> Staff need a clear way to propose use cases and receive written decisions.</li>
            <li><strong>Maintain an operating rhythm.</strong> Meet regularly during setup, use case review, active pilots, sustainment, annual review, and incidents.</li>
            <li><strong>Maintain an AI system inventory.</strong> Track all formal AI systems and approved staff-use tools.</li>
            <li><strong>Monitor, respond, and sunset.</strong> Governance continues after approval through performance monitoring, equity monitoring, incident response, and retirement criteria.</li>
          </ol>
        </section>

        <section class="content-section">
          <h2>Governance Body Membership</h2>
          <p>The governance body should be cross-functional. Smaller departments may use a compact working group; larger agencies may need a formal board with subcommittees for legal/privacy, technical review, equity review, and program implementation.</p>
          <div class="table-wrap"><table><thead><tr><th>Role</th><th>Governance Contribution</th></tr></thead><tbody>
            ${[
              ["Senior agency leader or executive sponsor", "Provides authority, strategic alignment, and accountability."],
              ["Program directors", "Ensure governance reflects operational realities and public health priorities."],
              ["Informatics, epidemiology, data, or analytics lead", "Reviews data quality, analytic validity, and model limitations."],
              ["IT or cybersecurity lead", "Reviews infrastructure, security, access controls, and integration risks."],
              ["Legal counsel", "Reviews statutory authority, liability, procurement, and data-sharing requirements."],
              ["Privacy officer", "Reviews HIPAA, PII, PHI, confidentiality, and data minimization requirements."],
              ["Equity officer or community engagement lead", "Reviews disparate impact, accessibility, and community trust concerns."],
              ["Communications lead", "Reviews disclosure, public messaging, and transparency requirements."],
              ["Workforce or HR representative", "Reviews training, role expectations, and change-management needs."],
              ["Emergency preparedness representative", "Reviews high-pressure response use cases and operational continuity."],
              ["AI program manager or coordinator", "Manages intake, documentation, follow-up, and meeting materials."],
              ["External advisor, where appropriate", "Provides technical, academic, community, tribal, or ethics expertise."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>

        <section class="content-section">
          <h2>Charter Elements</h2>
          <div class="table-wrap"><table><thead><tr><th>Element</th><th>What to Define</th></tr></thead><tbody>
            ${[
              ["Name and purpose", "What the governance body is called, why it exists, and what AI activities it oversees."],
              ["Authority", "Ability to approve, deny, pause, modify, terminate, require additional review, approve policies, and escalate high-risk issues."],
              ["Membership", "Required roles, voting and non-voting members, term lengths, rotating program representation, and advisory members."],
              ["Meeting cadence", "Monthly during initial implementation or active pilots, quarterly during sustainment, and emergency meetings for incidents or urgent approvals."],
              ["Decision-making process", "Quorum, voting rules, conflict-of-interest procedures, decision documentation, appeals, and escalation."],
              ["Required review materials", "Project charter, equity impact assessment, data quality assessment, privacy/security review, vendor evaluation, validation documentation, data use agreement, and monitoring plan."],
              ["Records and transparency", "Meeting minutes, decision log, approved AI system inventory, policy version history, and audit records."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>

        <section class="content-section">
          <h2>Responsible AI Policy Sections</h2>
          <ul class="check-list">
            <li>Purpose and scope: what the policy governs, who must follow it, and which systems, vendors, contractors, and partners are covered.</li>
            <li>Responsible AI principles: transparency, privacy and security, equity and fairness, accountability and human oversight, safety and reliability, legal compliance, and scientific integrity.</li>
            <li>Permitted, restricted, and prohibited uses.</li>
            <li>Human review requirements and named accountability.</li>
            <li>Privacy, data protection, data minimization, approved tools, and data-use agreement requirements.</li>
            <li>Equity and bias review, including community engagement triggers and subgroup monitoring.</li>
            <li>Vendor and procurement requirements, including audit rights and restrictions on secondary use or model training.</li>
            <li>Validation, documentation, performance thresholds, and known limitations.</li>
            <li>Monitoring, incident response, suspension, rollback, policy review, annual updates, and version control.</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>AI Risk Categories and Review Pathways</h2>
          <div class="table-wrap"><table><thead><tr><th>Category</th><th>Examples</th><th>Review Requirement</th></tr></thead><tbody>
            ${[
              ["Low-risk administrative support", "Drafting meeting agendas, summarizing non-confidential notes, formatting internal documents.", "Allowed under acceptable-use guidance."],
              ["Moderate-risk staff support", "Drafting public health messages, summarizing guidance, preparing grant narratives.", "Program, communications, and source verification review."],
              ["High-risk operational support", "AI-assisted surveillance triage, case prioritization, partner alerts, resource allocation support.", "AI governance review, equity review, privacy/security review, and validation plan."],
              ["Restricted use", "AI involving PHI, PII, sensitive community data, tribal data, or vendor processing.", "Legal, privacy, security, data use agreement, and governance approval."],
              ["Prohibited use", "Entering PHI into public AI tools, allowing AI to make final public health decisions, using AI-generated citations without verification.", "Not allowed."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}
          </tbody></table></div>
          <ol>
            <li>Staff or program submits an AI use case intake form.</li>
            <li>The AI program manager screens for risk level and completeness.</li>
            <li>Low-risk uses receive guidance and documentation requirements.</li>
            <li>Moderate-risk uses receive program, communications, equity, and source review.</li>
            <li>High-risk uses go to the AI Governance Committee.</li>
            <li>Any use involving PHI, PII, confidential data, vendor processing, or sensitive community impact receives legal/privacy/security review.</li>
            <li>Approved use cases receive a named owner, documentation requirements, monitoring plan, and review schedule.</li>
            <li>Rejected or paused use cases receive written rationale and required remediation steps.</li>
          </ol>
        </section>

        <section class="content-section">
          <h2>Required Documentation</h2>
          <p>Documentation should be proportional to risk, but no AI system should operate without a basic record.</p>
          <div class="table-wrap"><table><thead><tr><th>Minimum Documentation</th><th>Additional Documentation for Moderate- or High-Risk Uses</th></tr></thead><tbody>
            <tr>
              <td>Use case title; program or division owner; problem addressed; intended users; affected population; AI tool or system used; data used or excluded; PHI/PII/confidential data status; human review process; known limitations; approval status; date of last review.</td>
              <td>Project charter; equity impact assessment; data quality assessment; privacy and security review; vendor evaluation; model validation and documentation standards; data use agreement; monitoring plan; incident response plan; pilot evaluation plan; governance approval record.</td>
            </tr>
          </tbody></table></div>
        </section>

        <section class="content-section">
          <h2>Data Use Agreements, Validation, and Human Review</h2>
          <p>AI governance should include specific requirements for data use agreements because AI development and operation often involve data sharing, vendor processing, model training, testing, or system integration.</p>
          <ul class="check-list">
            <li>No AI system may process identifiable, protected, confidential, tribal, or sensitive community data without an approved data use agreement and privacy/security review.</li>
            <li>Data-use terms should address permitted uses, prohibited uses, retention, destruction, secondary use, model training restrictions, security controls, breach notification, access controls, audit rights, subcontractor limits, and tribal data sovereignty where applicable.</li>
            <li>Validation should address purpose, intended use, data sources, model or tool description, test environment, performance metrics, error analysis, subgroup review, limitations, human review points, go/no-go criteria, monitoring, and escalation.</li>
            <li>Human review should be mandatory when outputs affect public health recommendations, surveillance interpretation, public-facing communication, eligibility, prioritization, resource allocation, enforcement, emergency response, clinical coordination, or community risk characterization.</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>Equity and Community Engagement in Governance</h2>
          <p>Governance must explicitly address equity and community trust. AI systems can reproduce or amplify inequities when data are incomplete, biased, non-representative, or used outside their original context.</p>
          <ul class="check-list">
            <li>Which populations may be affected?</li>
            <li>Could the tool underperform for rural, tribal, racial, ethnic, linguistic, disability, age, or other groups?</li>
            <li>Are the data representative? Are important communities missing?</li>
            <li>Could the tool change access to services or increase surveillance burden?</li>
            <li>Has community input been obtained when appropriate?</li>
            <li>How will disparate impact be monitored after deployment?</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>Governance Operating Rhythm and Inventory</h2>
          <div class="table-wrap"><table><thead><tr><th>Stage</th><th>Governance Cadence</th></tr></thead><tbody>
            ${[
              ["Initial governance setup", "Biweekly for 60-90 days."],
              ["Active use case review and pilot planning", "Monthly."],
              ["Active pilots", "Monthly or more often for high-risk projects."],
              ["Operational sustainment", "Quarterly."],
              ["Annual review", "Annual policy, inventory, and audit review."],
              ["Incident response", "As needed, within defined escalation timelines."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody></table></div>
          <p>Maintain a central AI system inventory that includes system name, program owner, operational owner, vendor or developer, AI capability type, purpose, users, affected populations, data sources, PHI/PII status, risk level, governance approval date, equity review date, privacy/security review date, validation status, monitoring schedule, incident history, and renewal or sunset date.</p>
        </section>

        <section class="content-section">
          <h2>Monitoring, Incident Response, and Sunset Criteria</h2>
          <p>Governance continues after approval. Each AI system should have performance monitoring, equity and disparity monitoring, user feedback, error reporting, incident response procedures, a review schedule, and sunset or retirement criteria.</p>
          <div class="callout"><strong>Off-cycle governance review triggers:</strong> harm or possible harm, performance decline, bias or disparate impact, privacy/security incident, material tool change, vendor terms change, data source change, use beyond approved scope, community concern, or new federal, state, or local guidance.</div>
        </section>

        <section class="content-section">
          <h2>Example Governance Model</h2>
          <ul class="check-list">
            <li><strong>Executive sponsor:</strong> Deputy commissioner, health officer, or equivalent senior leader.</li>
            <li><strong>AI Governance Board chair:</strong> Senior leader accountable for the AI program.</li>
            <li><strong>AI program manager:</strong> Staff lead responsible for intake, documentation, tracking, and meeting coordination.</li>
            <li><strong>Voting members:</strong> Program, data/informatics, IT/security, legal/privacy, equity, communications, and operations representatives.</li>
            <li><strong>Advisory members:</strong> Community representative, academic partner, technical expert, or tribal representative where appropriate.</li>
          </ul>
        </section>

        <section class="content-section">
          <h2>Sample Policy Language</h2>
          <div class="script-block">
            <p><strong>Purpose:</strong> [Agency Name] is committed to using artificial intelligence in ways that improve public health outcomes, advance health equity, protect privacy and security, support staff, and maintain public trust.</p>
            <p><strong>Human accountability:</strong> AI systems may support public health work, but they may not replace professional judgment. A named human owner is accountable for every AI-supported workflow.</p>
            <p><strong>Privacy and security:</strong> Staff may not enter PHI, PII, confidential agency information, or sensitive community data into AI tools unless the tool, data use, and workflow have been reviewed and approved through legal, privacy, security, and AI governance processes.</p>
            <p><strong>Equity:</strong> AI use cases that may affect public-facing services, public health decisions, community targeting, resource allocation, or surveillance activities must complete an equity impact assessment before approval.</p>
            <p><strong>Validation:</strong> No AI system may be deployed unless it has been tested, validated, documented, and approved for its intended use.</p>
            <p><strong>Suspension:</strong> The AI Governance Board may pause, suspend, or terminate any AI system that produces harmful, unreliable, inequitable, noncompliant, or unauthorized outputs.</p>
          </div>
        </section>

        <section class="content-section">
          <h2>30-, 60-, and 90-Day Implementation Plan</h2>
          <div class="table-wrap"><table><thead><tr><th>Timing</th><th>Actions</th></tr></thead><tbody>
            <tr><td>First 30 days</td><td>Identify executive sponsor; form interim AI governance working group; inventory known AI use and requests; draft interim acceptable-use guidance; decide whether to use an existing committee or create a new AI Governance Board; begin drafting governance charter.</td></tr>
            <tr><td>First 60 days</td><td>Approve governance charter; confirm membership and meeting cadence; draft Responsible AI Policy; develop use case intake process; define AI risk categories; identify required review materials; align with data, IT, privacy, legal, equity, and procurement processes.</td></tr>
            <tr><td>First 90 days</td><td>Launch formal AI Governance Board; approve Responsible AI Policy or interim policy; begin reviewing use case proposals; establish AI system inventory; implement documentation standards; create privacy/security and equity review pathways; identify first 1-3 use cases for structured review; schedule annual policy and governance review.</td></tr>
          </tbody></table></div>
        </section>

        <section class="content-section">
          <h2>Common Pitfalls to Avoid</h2>
          <ul class="check-list">
            <li>Treating governance as a late-stage approval step.</li>
            <li>Creating a committee without authority.</li>
            <li>Allowing vendors to define the department's AI strategy.</li>
            <li>Focusing only on technical performance and ignoring equity, privacy, and trust.</li>
            <li>Allowing informal staff use without acceptable-use guidance.</li>
            <li>Failing to document approved systems and uses.</li>
            <li>Requiring every AI use to go through the same heavy process.</li>
            <li>Failing to assign a named human owner.</li>
            <li>Approving pilots without monitoring or incident response plans.</li>
            <li>Forgetting to update policies as tools, laws, and risks change.</li>
          </ul>
        </section>
        ${addedToolGuidanceSection(3)}
        <section class="content-section">
          <h2>Outputs and How They Are Used</h2>
          ${outputsPurposeTable(plays.find(p=>p.id===3))}
        </section>
        <section class="content-section">
          <h2>Completion Criteria</h2>
          ${completionCriteriaForPlay(plays.find(p=>p.id===3))}
        </section>
      </article>
      <aside class="detail-card-list">
        <section class="panel"><h2>Related Play</h2><p>${playLink(3)}</p></section>
        <section class="panel"><h2>Related Tools</h2><p>${[2,3,4,10,11,12,13,14,15,16,17,18,19].map(toolLink).join("<br>")}</p></section>
        <section class="panel"><h2>Governance Deliverables</h2><ul><li>Responsible AI Policy.</li><li>AI Governance Board Charter.</li><li>AI Use Case Intake Form.</li><li>AI System Inventory.</li><li>Review pathways and risk categories.</li><li>Validation, documentation, monitoring, incident response, and audit requirements.</li></ul></section>
        <section class="panel"><h2>Next Steps</h2><div class="button-row"><a class="btn small" href="#/plays/3">Back to Play 3</a><a class="btn small" href="#/toolkit/2">Open Policy Tool</a><a class="btn small" href="#/toolkit/12">Open Board Charter</a></div></section>
      </aside>
    </div>
  </section>`;
}

function renderStakeholderEngagementGuide() {
  main.innerHTML = pageIntro("Guidance: AI Stakeholder Engagement", "Use this guide for Play 4 to identify internal and external stakeholders, map roles, plan engagement, document feedback, and connect stakeholder input to governance, use case prioritization, implementation, monitoring, and evaluation.") + `
    <div class="guide-layout">
      <article class="panel guide-page">
        <section class="content-section">
          <h2>Purpose of This Guidance</h2>
          <p>Identify, map, and engage the internal and external stakeholders who should shape AI planning, governance, use case selection, implementation, monitoring, and oversight.</p>
        </section>
        <section class="content-section">
          <h2>Why This Play Matters</h2>
          <p>AI decisions should not be made by technical staff, vendors, or leadership alone. Public health AI can affect programs, staff workflows, data systems, partner relationships, communities, and public trust. Stakeholder engagement helps ensure that AI planning reflects operational realities, legal and privacy requirements, workforce capacity, equity concerns, community priorities, and the public health mission.</p>
          <p>This play is especially important because AI can affect groups differently. A tool that appears efficient internally may create new burdens, reduce transparency, reinforce bias, or undermine trust if affected staff, partners, or communities are not engaged early.</p>
          <div class="callout blue"><strong>Sequencing rule:</strong> Engage stakeholders early enough that their input can change the decision.</div>
        </section>
        <section class="content-section">
          <h2>Who to Involve and How</h2>
          <ul class="check-list">
            ${["AI governance committee or board", "Health officer or executive sponsor", "Program owners", "Informatics, epidemiology, data, and analytics staff", "IT and cybersecurity staff", "Legal, privacy, and compliance staff", "Equity and community engagement staff", "Communications staff", "Workforce development or HR staff", "Frontline public health staff", "Local health departments, regional offices, or field staff, where applicable", "Community-based organizations", "Tribal representatives or tribal public health partners, where applicable", "Health systems, laboratories, providers, or data-sharing partners", "Academic or technical partners", "Vendors or implementation partners, where appropriate", "Members of communities that may be affected by AI-supported decisions, services, communications, outreach, surveillance, or resource allocation"].map(x=>`<li>${x}</li>`).join("")}
          </ul>
        </section>
        <section class="content-section">
          <h2>Key Questions</h2>
          <ul>
            ${["Who will use the AI tool or AI-supported workflow?", "Who will be affected by the AI use case?", "Who owns the data, workflow, decision, or public health function involved?", "Who has legal, privacy, security, equity, or communications responsibilities?", "Which communities or populations could experience benefit, burden, or harm?", "Which partners must be consulted before data are used or shared?", "Who should be informed, consulted, involved, or represented in governance?", "What concerns, expectations, or trust issues should be addressed before implementation?", "How will stakeholder input influence use case selection, design, approval, monitoring, and evaluation?", "How will the department close the loop and show stakeholders how their input was used?"].map(x=>`<li>${x}</li>`).join("")}
          </ul>
        </section>
        <section class="content-section">
          <h2>How to Execute This Play</h2>
          ${[
            ["Define the purpose of engagement.", "Clarify whether engagement is intended to inform governance, identify use cases, assess operational risks, strengthen equity review, support implementation, prepare communications, or monitor deployed systems."],
            ["Identify internal stakeholders.", "Map the internal roles, programs, and offices that may use, approve, support, regulate, or be affected by AI."],
            ["Identify external stakeholders.", "Identify partners, communities, organizations, and groups affected by AI-supported decisions, communications, services, surveillance, outreach, prioritization, resource allocation, or data use."],
            ["Assess stakeholder interest, influence, and impact.", "Determine which stakeholders have decision authority, technical knowledge, operational responsibility, legal or privacy obligations, lived experience, community trust, data ownership, or direct exposure to potential AI benefits or harms."],
            ["Clarify roles and responsibilities.", "Use a RACI or similar structure to identify who is responsible, accountable, consulted, and informed for governance, readiness assessment, use case review, equity assessment, data review, implementation, monitoring, communications, and incident response."],
            ["Identify equity and trust considerations.", "Consider bias, language access, disability access, rural access, tribal data sovereignty, immigration concerns, surveillance burden, stigma, digital access, historical mistrust, or reduced transparency."],
            ["Develop the stakeholder engagement plan.", "Define engagement methods, timing, frequency, responsible staff, communication channels, documentation approach, feedback loops, and how input will be used."],
            ["Engage stakeholders before final decisions are made.", "Stakeholder input should occur before AI use cases are approved, public-facing tools are launched, data-sharing decisions are finalized, or workflows are changed."],
            ["Document feedback and decision implications.", "Capture concerns, recommendations, questions, unresolved issues, disagreement, and how input changed governance requirements, risk controls, implementation, communications, or monitoring."],
            ["Create an ongoing feedback loop.", "Continue engagement after implementation so staff, partners, and communities can report concerns, suggest improvements, identify unintended consequences, and participate in monitoring and evaluation."]
          ].map(([h,p])=>`<h3>${h}</h3><p>${p}</p>`).join("")}
        </section>
        <section class="content-section">
          <h2>Engagement Purpose Examples</h2>
          <div class="table-wrap"><table><thead><tr><th>Engagement Purpose</th><th>Example</th></tr></thead><tbody>
            ${[
              ["Governance design", "Identify which offices, programs, and partners should be represented in AI governance."],
              ["Use case identification", "Ask programs where AI could reduce burden or improve public health impact."],
              ["Equity review", "Understand how a proposed AI use may affect specific populations."],
              ["Data use review", "Consult partners or communities before using sensitive or shared data."],
              ["Communications planning", "Test whether AI-assisted messages are clear, accurate, accessible, and trusted."],
              ["Implementation planning", "Understand how an AI-supported workflow will affect staff roles and workload."],
              ["Monitoring and evaluation", "Gather feedback after an AI pilot or deployment."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody></table></div>
          <p><strong>Useful opening question:</strong> What decision are we trying to inform, and whose perspective is needed before that decision is made?</p>
        </section>
        <section class="content-section">
          <h2>Engagement Levels</h2>
          <div class="table-wrap"><table><thead><tr><th>Level</th><th>Meaning</th><th>Example</th></tr></thead><tbody>
            ${[
              ["Inform", "Provide clear information about AI plans or decisions.", "Staff newsletter, partner update, public-facing FAQ"],
              ["Consult", "Request feedback before a decision is finalized.", "Listening session, survey, interview, focus group"],
              ["Involve", "Include stakeholders in planning, review, or design.", "Program workgroup, workflow design session"],
              ["Collaborate", "Work with stakeholders throughout implementation.", "Advisory group, community partner workgroup"],
              ["Empower / Shared Decision", "Give stakeholders formal influence or decision role.", "Governance committee seat, tribal consultation process, community advisory structure"]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}
          </tbody></table></div>
          <p>Be clear about the level of engagement being offered. Do not ask for input if the decision has already been made, and do not imply shared decision-making if the department is only consulting.</p>
        </section>
        <section class="content-section">
          <h2>Use RACI to Clarify Responsibilities</h2>
          <div class="table-wrap"><table><thead><tr><th>RACI Role</th><th>Meaning</th></tr></thead><tbody>
            ${[["Responsible", "Does the work"], ["Accountable", "Owns the final decision or outcome"], ["Consulted", "Provides input before the decision"], ["Informed", "Receives updates after decisions or milestones"]].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>
        <section class="content-section">
          <h2>Integrate Equity Into Engagement</h2>
          <ul>
            ${["Which communities may be affected by this AI use?", "Which groups are represented in the data, missing, or underrepresented?", "Could this tool change access to services?", "Could this tool increase surveillance, stigma, or burden?", "Could language, disability, digital access, rural access, or transportation barriers affect the AI-supported workflow?", "Does this use case involve tribal data, sovereign data, or community data requiring special engagement?", "What community input is needed before moving forward?", "How will the department show that feedback was considered?"].map(x=>`<li>${x}</li>`).join("")}
          </ul>
        </section>
        <section class="content-section">
          <h2>Plan Engagement Methods</h2>
          <div class="table-wrap"><table><thead><tr><th>Method</th><th>Best Used For</th></tr></thead><tbody>
            ${[
              ["Internal workshop", "Mapping workflows, identifying operational risks, clarifying staff roles"],
              ["Key informant interviews", "Gathering specialized input from legal, privacy, IT, program, or partner experts"],
              ["Listening session", "Understanding concerns from staff, partners, or affected communities"],
              ["Survey", "Gathering broad input from staff or partners"],
              ["Advisory committee", "Ongoing review and feedback across multiple AI activities"],
              ["Community meeting", "Public-facing or community-impacting AI use cases"],
              ["Partner consultation", "Data sharing, workflow integration, emergency response, or cross-agency activities"],
              ["Usability testing", "Reviewing AI-assisted tools, messages, dashboards, or workflows"],
              ["Office hours", "Giving staff a way to ask questions and raise concerns during implementation"]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>
        <section class="content-section">
          <h2>Document and Close the Loop</h2>
          <p>Stakeholder input should be summarized and linked to decisions. Document who was engaged, why they were engaged, methods used, key concerns, recommendations, areas of agreement or disagreement, equity or trust issues, decisions changed because of input, issues referred to governance, and follow-up actions and owners.</p>
          <p>Closing the loop should explain what feedback was received, what changed, what did not change and why, what decisions remain pending, how stakeholders can continue providing input, and who to contact with concerns.</p>
          <div class="callout"><strong>Example:</strong> We heard concerns that the proposed AI-supported outreach tool could miss residents without stable internet access. In response, the pilot plan now includes non-digital outreach options, language access review, and monitoring by ZIP code and preferred contact method.</div>
        </section>
        <section class="content-section">
          <h2>Connect Engagement to Later Plays</h2>
          <div class="table-wrap"><table><thead><tr><th>Later Play</th><th>How Stakeholder Engagement Supports It</th></tr></thead><tbody>
            ${[
              ["Play 5: Workforce Development", "Identifies staff training needs, role concerns, and change readiness."],
              ["Play 6: Plan Change Management", "Supports communications, adoption planning, and staff trust."],
              ["Play 7: Prioritize Use Cases", "Helps rank use cases based on public health value, feasibility, risk, equity, and acceptability."],
              ["Play 8: Develop a Funding Strategy", "Identifies partners, resources, procurement assumptions, and sustainability needs."],
              ["Play 9: Design the Playbook", "Helps sequence work based on operational dependencies, funding assumptions, and partner readiness."],
              ["Play 10: Execute Change Management", "Supports implementation communication, adoption support, and feedback tracking."],
              ["Play 11: Build and Deploy AI Solutions", "Informs workflow design, pilot testing, and safeguards."],
              ["Plays 12-13: Governance, Monitoring, and Evaluation", "Supports feedback loops, equity monitoring, incident reporting, and continuous improvement."]
            ].map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody></table></div>
        </section>
        <section class="content-section">
          <h2>Practical Examples</h2>
          <h3>AI-Assisted Communications</h3>
          <p>For generative AI that drafts plain-language public health messages, engage communications, program subject matter experts, legal/privacy staff, equity and language access staff, frontline call center staff, community-based organizations, disability access advisors, community health workers, and affected residents when relevant.</p>
          <p>Possible changes include requiring subject matter expert review, adding plain-language and language-access review, prohibiting AI-generated translations without human review, adding a public-facing statement that messages are reviewed by department staff, and monitoring community feedback after release.</p>
          <h3>AI-Assisted Surveillance Triage</h3>
          <p>For AI-assisted triage of open-source reports or incoming surveillance signals, engage surveillance epidemiologists, informatics, IT/security, legal/privacy, emergency preparedness, local health departments, tribal public health partners, healthcare systems, laboratories, emergency management partners, and community representatives if outputs may affect public alerts or response prioritization.</p>
          <p>Possible changes include requiring human epidemiologist review before action, limiting data sources to approved sources, adding subgroup and geographic monitoring, establishing escalation thresholds, creating a partner notification protocol, and requiring pilot testing before operational use.</p>
        </section>
        <section class="content-section">
          <h2>Common Pitfalls to Avoid</h2>
          <ul>
            ${["Engaging stakeholders after decisions have already been made.", "Treating stakeholder engagement as a communications task only.", "Including only leadership and technical staff.", "Forgetting frontline staff who will use or be affected by the workflow.", "Asking communities for input without explaining how decisions will be made.", "Treating equity review as separate from stakeholder engagement.", "Allowing vendors to define the engagement process.", "Failing to document concerns or dissenting views.", "Not closing the feedback loop.", "Not continuing engagement after implementation."].map(x=>`<li>${x}</li>`).join("")}
          </ul>
        </section>
        <section class="content-section">
          <h2>Outputs and How They Are Used</h2>
          ${outputsPurposeTable(plays.find(p=>p.id===4))}
        </section>
        <section class="content-section">
          <h2>Completion Criteria</h2>
          ${completionCriteriaForPlay(plays.find(p=>p.id===4))}
        </section>
        ${addedToolGuidanceSection(4)}
      </article>
      <aside class="detail-card-list">
        <section class="panel"><h2>Supporting Tools</h2><p>${[11,19,20,21,22].map(toolLink).join("<br>")}</p></section>
        <section class="panel"><h2>Next Steps</h2><div class="button-row"><a class="btn small" href="#/plays/4">Back to Play 4</a><a class="btn small" href="#/toolkit/21">Open RACI Tool</a><a class="btn small" href="#/toolkit/20">Open Engagement Tool</a></div></section>
      </aside>
    </div>
  </section>`;
}

function renderImplementationPlayGuide(playId) {
  const play = plays.find(x => x.id === playId);
  const guide = playGuideDeepDive[playId];
  if (!play || !guide) {
    renderPlays();
    return;
  }
  const guidance = playGuidanceDetails[playId];
  const resources = playResources[playId] || [];
  const howToItems = guide.implementationTips || [];
  main.innerHTML = pageIntro(`Guidance: Play ${play.id}: ${play.title}`, `${guidance.body}`) + `
    <div class="guide-layout">
      <article class="panel guide-page">
        <section class="content-section">
          <h2>Purpose of This Guidance</h2>
          <p>${guide.purpose}</p>
        </section>
        <section class="content-section">
          <h2>Before You Begin</h2>
          <p>${beforeBeginForPlay(play, guide)}</p>
        </section>
        <section class="content-section">
          <h2>When to Use This Play</h2>
          <p>${guide.timing}</p>
        </section>
        <section class="content-section">
          <h2>Who to Involve and How</h2>
          ${involvementGuidanceForPlay(play)}
          <div class="table-wrap"><table><thead><tr><th>Role or Perspective</th><th>How to Involve Them</th></tr></thead><tbody>
            ${play.who.map((x,i)=>`<tr><td>${x}</td><td>${i === 0 ? "Ask this role to sponsor or lead the play, resolve barriers, and confirm that outputs are ready for decision-making." : "Consult this role while the work is being shaped; ask for review of risks, feasibility, operational impact, and required documentation before decisions are finalized."}</td></tr>`).join("")}
          </tbody></table></div>
        </section>
        <section class="content-section">
          <h2>Key Planning Questions</h2>
          <ul>${play.questions.map(x=>`<li>${x}</li>`).join("")}</ul>
        </section>
        <section class="content-section">
          <h2>How to Execute This Play</h2>
          <ol class="expanded-guidance-list">${howToItems.map(x=>`<li>${x}</li>`).join("")}</ol>
        </section>
        ${addedToolGuidanceSection(play.id)}
        <section class="content-section">
          <h2>Decision and Governance Checks</h2>
          <ul>${guide.decisionChecks.map(x=>`<li>${x}</li>`).join("")}</ul>
        </section>
        <section class="content-section">
          <h2>Common Pitfalls to Avoid</h2>
          <ul>${guide.pitfalls.map(x=>`<li>${x}</li>`).join("")}</ul>
        </section>
        <section class="content-section">
          <h2>Outputs and How They Are Used</h2>
          ${outputsPurposeTable(play)}
        </section>
        <section class="content-section">
          <h2>Completion Criteria</h2>
          ${completionCriteriaForPlay(play)}
        </section>
      </article>
      <aside class="detail-card-list">
        <section class="panel">
          <h2>Related Play</h2>
          <p>${playLink(play.id)}</p>
          <p><strong>Phase:</strong> ${phaseName(play.phase)}</p>
        </section>
        <section class="panel">
          <h2>Supporting Tools</h2>
          <p>${play.tools.map(toolLink).join("<br>")}</p>
        </section>
        <section class="panel">
          <h2>Resources</h2>
          <div class="resource-list">${resources.map(([title, note, url])=>`
            <article class="resource-item">
              <h3><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
              <p>${note}</p>
            </article>`).join("")}</div>
        </section>
        <section class="panel">
          <h2>Next Steps</h2>
          <div class="button-row">
            <a class="btn small" href="#/plays/${play.id}">Back to Play ${play.id}</a>
            <a class="btn small" href="#/toolkit">Open Toolkit</a>
          </div>
        </section>
      </aside>
    </div>
  </section>`;
}

function renderPlayDetail(id) {
  const p = plays.find(x => x.id === id) || plays[0];
  const prev = plays.find(x => x.id === p.id - 1);
  const next = plays.find(x => x.id === p.id + 1);
  main.innerHTML = pageIntro(`Play ${p.id}: ${p.title}`, `${phaseName(p.phase)} phase. Outputs: ${p.output}.`) + `
    <div class="meta-row">${p.tools.map(id=>`<span class="tag">${toolLink(id)}</span>`).join("")}</div>
    <div class="detail-grid">
      <article class="panel">
        <h2>Purpose</h2><p>${p.goal}</p>
        <h2>Why This Play Matters</h2><p>${p.matters}</p>
        <h2>Who Should Participate</h2><ul>${p.who.map(x=>`<li>${x}</li>`).join("")}</ul>
        <h2>Key Questions</h2><ul>${p.questions.map(x=>`<li>${x}</li>`).join("")}</ul>
        <h2>Step-by-Step Implementation Guidance</h2><ol>${p.actions.map(x=>`<li>${x}</li>`).join("")}</ol>
        ${guidanceForPlay(p)}
      </article>
      <aside class="detail-card-list">
        <section class="panel"><h2>Outputs</h2>${outputsForPlay(p)}</section>
        <section class="panel"><h2>Supporting Tools</h2><p>${p.tools.map(toolLink).join("<br>")}</p></section>
        ${resourcesForPlay(p)}
        <section class="panel"><h2>Related Plays</h2><p>${[p.id-1,p.id+1].filter(x=>x>0&&x<=plays.length).map(playLink).join("<br>")}</p></section>
      </aside>
    </div>
    <nav class="prev-next" aria-label="Previous and next play">${prev ? `<a class="btn" href="#/plays/${prev.id}">Previous: Play ${prev.id}</a>` : "<span></span>"}${next ? `<a class="btn" href="#/plays/${next.id}">Next: Play ${next.id}</a>` : "<span></span>"}</nav>
  </section>`;
}

function renderToolkit() {
  main.innerHTML = pageIntro("Updated Toolkit Library", `Search and filter all ${tools.length} tools by play, phase, topic, maturity level, role, and governance requirement. Each tool reflects the updated play crosswalk.`) + `
    <div class="toolkit-layout">
      <aside class="filter-panel">
        <h2>Filters</h2>
        <label>Search <input id="tool-search" type="search" placeholder="Tool name or purpose"></label>
        <label>Phase <select id="phase-filter"><option value="">All phases</option>${phases.map(p=>`<option value="${p.id}">${p.name}</option>`).join("")}</select></label>
        <label>Updated Play <select id="play-filter"><option value="">All plays</option>${plays.map(p=>`<option value="${p.id}">Play ${p.id}: ${p.title}</option>`).join("")}</select></label>
        <label>Topic <select id="topic-filter"><option value="">All topics</option>${[...new Set(tools.map(t=>t.topic))].sort().map(x=>`<option>${x}</option>`).join("")}</select></label>
        <label>Maturity Level <select id="maturity-filter"><option value="">All levels</option>${[...new Set(tools.map(t=>t.maturity))].map(x=>`<option>${x}</option>`).join("")}</select></label>
        <label>Role <select id="role-filter"><option value="">All roles</option>${[...new Set(tools.flatMap(t=>t.roles))].sort().map(x=>`<option>${x}</option>`).join("")}</select></label>
        <label>Governance Required <select id="gov-filter"><option value="">All</option><option value="yes">Yes</option><option value="no">No</option></select></label>
        <button class="btn small" type="button" id="clear-filters">Clear filters</button>
      </aside>
      <section>
        <div id="tool-count" class="eyebrow"></div>
        <div id="tools-grid" class="tools-grid"></div>
        <div class="callout" style="margin-top:2rem">Crosswalk view: <button class="btn small" type="button" onclick="document.getElementById('crosswalk').scrollIntoView()">Tools to Plays</button> <button class="btn small" type="button" onclick="document.getElementById('crosswalk').scrollIntoView()">Plays to Tools</button> <button class="btn small" type="button" onclick="document.getElementById('crosswalk').scrollIntoView()">Governance approval pathway</button></div>
        <section id="crosswalk" class="panel" style="margin-top:2rem"><h2>Complete Crosswalk</h2><div class="table-wrap"><table><thead><tr><th>Play</th><th>Outputs</th><th>Supporting Tools</th></tr></thead><tbody>${plays.map(p=>`<tr><td>${playLink(p.id)}</td><td>${outputsForPlay(p)}</td><td>${p.tools.map(toolLink).join("<br>")}</td></tr>`).join("")}</tbody></table></div></section>
      </section>
    </div>
  </section>`;
  ["tool-search","phase-filter","play-filter","topic-filter","maturity-filter","role-filter","gov-filter"].forEach(id => document.getElementById(id).addEventListener("input", filterTools));
  document.getElementById("clear-filters").addEventListener("click", () => { document.querySelectorAll(".filter-panel input,.filter-panel select").forEach(el=>el.value=""); filterTools(); });
  filterTools();
}

function filterTools() {
  const q = document.getElementById("tool-search").value.toLowerCase();
  const phase = document.getElementById("phase-filter").value;
  const play = Number(document.getElementById("play-filter").value);
  const topic = document.getElementById("topic-filter").value;
  const maturity = document.getElementById("maturity-filter").value;
  const role = document.getElementById("role-filter").value;
  const gov = document.getElementById("gov-filter").value;
  const filtered = tools.filter(t => {
    const toolPhases = new Set(t.playIds.map(id => plays.find(p=>p.id===id).phase));
    return (!q || `${t.title} ${t.purpose}`.toLowerCase().includes(q)) &&
      (!phase || toolPhases.has(phase)) &&
      (!play || t.playIds.includes(play)) &&
      (!topic || t.topic === topic) &&
      (!maturity || t.maturity === maturity) &&
      (!role || t.roles.includes(role)) &&
      (!gov || (gov === "yes" ? t.governance : !t.governance));
  });
  document.getElementById("tool-count").textContent = `${filtered.length} tools shown`;
  document.getElementById("tools-grid").innerHTML = filtered.map(t=>`
    <article class="card tool-card">
      <p class="card-kicker">Tool ${t.id}</p>
      <h3>${t.title}</h3>
      <p>${t.playIds.length > 1 ? "Plays" : "Play"} ${t.playIds.join(", ")}</p>
      <p>${t.purpose}</p>
      <p class="tool-note">Opens a toolkit-based fillable web form with blank and completed downloads.</p>
      <div class="card-actions"><a class="btn small" href="#/toolkit/${t.id}">Open</a></div>
    </article>`).join("");
}

function toolRatingKey(toolId) {
  return `tool-${toolId}`;
}

function currentToolRating(toolId) {
  const ratings = getMemberState().ratings || {};
  return ratings[toolRatingKey(toolId)] || null;
}

function renderToolRatingPanel(tool, isMember) {
  const saved = currentToolRating(tool.id) || {};
  const selected = Number(saved.stars || 0);
  const savedLabel = saved.savedAt ? ` Saved ${escapeDoc(saved.savedAt)}.` : "";
  return `
    <section class="panel tool-rating-panel no-print" aria-labelledby="tool-rating-heading">
      <div class="tool-rating-heading">
        <div>
          <p class="eyebrow">Member Feedback</p>
          <h2 id="tool-rating-heading">Rate this tool</h2>
        </div>
        ${selected ? `<p class="rating-summary">Your rating: <strong>${selected} / 5</strong>${savedLabel}</p>` : ""}
      </div>
      <p>Registered members can rate each tool and add a short review comment to help improve the toolkit and share what is useful in practice.</p>
      ${isMember ? "" : `<p class="member-access-note locked">Create or open your member profile in <a href="#/member">My Account</a> to rate tools and save review comments.</p>`}
      <fieldset class="star-rating" ${isMember ? "" : "disabled"}>
        <legend>5-star rating</legend>
        ${[1,2,3,4,5].map(value=>`
          <label class="${value <= selected ? "selected" : ""}">
            <input type="radio" name="tool-rating-stars" value="${value}" ${selected === value ? "checked" : ""} ${isMember ? "" : "disabled"}>
            <span aria-hidden="true">★</span>
            <span class="sr-only">${value} star${value === 1 ? "" : "s"}</span>
          </label>`).join("")}
      </fieldset>
      <label class="tool-review-label" for="tool-rating-comment">Review comment
        <textarea id="tool-rating-comment" rows="4" ${isMember ? "" : "disabled"} placeholder="What worked well, what was confusing, or what would make this tool more useful?">${escapeDoc(saved.comment || "")}</textarea>
      </label>
      <div class="button-row">
        <button class="btn primary" type="button" id="save-tool-rating" ${isMember ? "" : "disabled"}>Save Rating and Review</button>
      </div>
      <p id="tool-rating-status" class="save-status" aria-live="polite"></p>
    </section>`;
}

function updateToolStarDisplay(stars) {
  document.querySelectorAll(".star-rating label").forEach(label => {
    const value = Number(label.querySelector("input")?.value || 0);
    label.classList.toggle("selected", value <= stars);
  });
}

function hydrateToolRatingPanel() {
  document.querySelectorAll('input[name="tool-rating-stars"]').forEach(input => {
    input.addEventListener("change", () => updateToolStarDisplay(Number(input.value)));
  });
}

function saveToolRating(toolId) {
  const status = document.getElementById("tool-rating-status");
  if (!hasMemberProfile()) {
    if (status) status.textContent = "Create or open a member profile before rating tools.";
    return;
  }
  const stars = Number(document.querySelector('input[name="tool-rating-stars"]:checked')?.value || 0);
  const comment = document.getElementById("tool-rating-comment")?.value.trim() || "";
  if (!stars) {
    if (status) status.textContent = "Select a star rating before saving.";
    return;
  }
  const state = getMemberState();
  state.ratings = state.ratings || {};
  state.ratings[toolRatingKey(toolId)] = {
    toolId,
    title: tools.find(t => t.id === toolId)?.title || `Tool ${toolId}`,
    stars,
    comment,
    reviewer: memberDisplayName(state.profile),
    agency: state.profile?.agency || "",
    role: state.profile?.role || "",
    savedAt: new Date().toISOString().slice(0, 10)
  };
  setMemberState(state);
  if (status) status.textContent = `Saved ${stars}-star rating.`;
}

function renderToolDetail(id) {
  const t = tools.find(x => x.id === id) || tools[0];
  const blueprint = toolFormBlueprints[t.id] || [["Tool Notes", ["Decision or output", "Risks, gaps, or follow-ups"]]];
  const outputs = outputsForTool(t, blueprint);
  const isMember = hasMemberProfile();
  main.innerHTML = pageIntro(`Tool ${t.id}: ${t.title}`, t.purpose) + `
    <div class="meta-row">${t.playIds.map(id=>`<span class="tag">${playLink(id)}</span>`).join("")}</div>
    <div class="detail-grid tool-detail-grid">
      <article class="panel">
        <h2>Toolkit-Based Fillable Version</h2>
        <p>This online version is structured from the toolkit instrument for this tool. Complete it during the workshop, review, or governance meeting where the output is being developed.</p>
        <form id="tool-form" class="tool-form">
          <section class="tool-section">
            <h3>Administrative Details</h3>
            <div class="form-grid">
              <label>Owner or facilitator<input name="${toolFieldName("Administrative Details", "Owner or facilitator")}" placeholder="Name and role"></label>
              <label>Date<input name="${toolFieldName("Administrative Details", "Date")}" type="date"></label>
              <label>Agency / program<input name="${toolFieldName("Administrative Details", "Agency / program")}" placeholder="Health department, division, or program"></label>
              <label>Review status<select name="${toolFieldName("Administrative Details", "Review status")}"><option>Draft</option><option>Ready for review</option><option>Submitted to governance</option><option>Approved</option><option>Needs revision</option></select></label>
            </div>
          </section>
          ${blueprint.map(([section, fields], sectionIndex)=>`
            <section class="tool-section">
              <h3>${section}</h3>
              <div class="${sectionIndex === 0 ? "form-grid" : "tool-form-stack"}">
                ${fields.map(field=>`
                  <label>${field}
                    <textarea name="${toolFieldName(section, field)}" rows="4" placeholder="Enter ${field.toLowerCase()}"></textarea>
                  </label>`).join("")}
              </div>
            </section>`).join("")}
        </form>
        ${memberOnlyNotice(isMember)}
        <div class="button-row no-print">
          <button class="btn primary" type="button" id="save-tool-progress" ${isMember ? "" : "disabled"}>Save Progress</button>
          <button class="btn" type="button" id="download-filled-tool" ${isMember ? "" : "disabled"}>Download Completed Word Document</button>
          <button class="btn" type="button" id="download-blank-tool">Download Blank Word Template</button>
          <button class="btn" type="button" id="download-tool-pdf" ${isMember ? "" : "disabled"}>Download Completed PDF</button>
          <button class="btn" type="button" id="download-blank-pdf">Download Blank PDF Template</button>
        </div>
        <p id="tool-save-status" class="save-status" aria-live="polite"></p>
        ${renderToolRatingPanel(t, isMember)}
      </article>
      <aside class="detail-card-list">
        <section class="panel"><h2>Outputs</h2><ul class="compact-list">${outputs.map(item=>`<li>${item}</li>`).join("")}</ul></section>
        <section class="panel"><h2>Supported Plays</h2><p>${t.playIds.map(playLink).join("<br>")}</p></section>
        <section class="panel"><h2>Related Tools</h2><p>${tools.filter(x=>x.id!==t.id && x.playIds.some(id=>t.playIds.includes(id))).slice(0,6).map(x=>toolLink(x.id)).join("<br>")}</p></section>
        <section class="panel"><h2>Toolkit Source</h2><p>This form is based on the corresponding tool in the AI Playbook toolkit. Download the full toolkit for the formatted source document.</p><div class="button-row"><a class="btn small" href="downloads/AI_Playbook_for_Public_Health_Toolkit.pdf">Toolkit PDF</a><a class="btn small" href="downloads/AI_Playbook_for_Public_Health_Toolkit.docx">Toolkit Word</a></div></section>
      </aside>
    </div>
  </section>`;
  restoreToolProgress(t.id, blueprint);
  hydrateToolRatingPanel();
  document.getElementById("download-blank-tool").addEventListener("click", () => runDocumentDownload(() => downloadToolWord(t, blueprint, true), "Blank Word template"));
  document.getElementById("download-blank-pdf").addEventListener("click", () => runDocumentDownload(() => downloadToolPdf(t, blueprint, true), "Blank PDF template"));
  if (isMember) {
    document.getElementById("save-tool-progress").addEventListener("click", () => saveToolProgress(t, blueprint));
    document.getElementById("download-filled-tool").addEventListener("click", () => runDocumentDownload(() => downloadToolWord(t, blueprint, false), "Completed Word document"));
    document.getElementById("download-tool-pdf").addEventListener("click", () => runDocumentDownload(() => downloadToolPdf(t, blueprint, false), "Completed PDF"));
    document.getElementById("save-tool-rating").addEventListener("click", () => saveToolRating(t.id));
  }
}

function toolSlug(tool, suffix = "") {
  const base = `tool-${tool.id}-${tool.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
  return suffix ? `${base}-${suffix}` : base;
}

function toolFieldName(section, field) {
  return `${section}::${field}`;
}

function collectToolEntries(blueprint, blank = false) {
  const form = document.getElementById("tool-form");
  const valueFor = (section, field) => blank ? "" : ([...form.elements].find(el => el.name === toolFieldName(section, field))?.value || "");
  return [
    ["Administrative Details", ["Owner or facilitator", "Date", "Agency / program", "Review status"].map(field => [field, valueFor("Administrative Details", field)])],
    ...blueprint.map(([section, fields]) => [section, fields.map(field => [field, valueFor(section, field)])])
  ];
}

function escapeDoc(value) {
  return String(value || "").replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
}

let cachedLogoDataUrl = null;
let cachedLogoJpegInfo = null;
const logoAssetPath = "assets/ai-playbook-logo-public-health.png";
const embeddedLogoJpeg = {
  width: 260,
  height: 254,
  data: "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"
};
const embeddedLogoDataUrl = `data:image/jpeg;base64,${embeddedLogoJpeg.data}`;

function logoAssetHref() {
  try {
    return new URL(logoAssetPath, location.href).href;
  } catch {
    return logoAssetPath;
  }
}

function dataUrlToBytes(dataUrl) {
  const base64 = dataUrl.split(",")[1] || "";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function loadLogoImage() {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = logoAssetPath;
  });
}

async function getLogoDataUrl() {
  if (cachedLogoDataUrl) return cachedLogoDataUrl;
  if (embeddedLogoJpeg.data && !embeddedLogoJpeg.data.startsWith("__")) {
    cachedLogoDataUrl = embeddedLogoDataUrl;
    return cachedLogoDataUrl;
  }
  try {
    const img = await loadLogoImage();
    if (!img) return logoAssetHref();
    const maxWidth = 320;
    const scale = Math.min(1, maxWidth / img.naturalWidth);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    cachedLogoDataUrl = canvas.toDataURL("image/png");
    return cachedLogoDataUrl;
  } catch (error) {
    console.warn("Logo embedding fell back to the site logo path.", error);
    return logoAssetHref();
  }
}

async function getLogoJpegInfo() {
  if (cachedLogoJpegInfo) return cachedLogoJpegInfo;
  if (embeddedLogoJpeg.data && !embeddedLogoJpeg.data.startsWith("__")) {
    cachedLogoJpegInfo = {
      width: embeddedLogoJpeg.width,
      height: embeddedLogoJpeg.height,
      bytes: dataUrlToBytes(embeddedLogoDataUrl)
    };
    return cachedLogoJpegInfo;
  }
  try {
    const img = await loadLogoImage();
    if (!img) return null;
    const canvas = document.createElement("canvas");
    canvas.width = 260;
    canvas.height = Math.max(1, Math.round(260 * img.naturalHeight / img.naturalWidth));
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    cachedLogoJpegInfo = {
      width: canvas.width,
      height: canvas.height,
      bytes: dataUrlToBytes(canvas.toDataURL("image/jpeg", 0.92))
    };
    return cachedLogoJpegInfo;
  } catch (error) {
    console.warn("PDF logo embedding was skipped because the browser blocked local image conversion.", error);
    return null;
  }
}

function buildProfessionalWordHtml(title, status, subtitle, metaRows, sections, logoDataUrl = "") {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>${escapeDoc(title)}</title>
<style>
  @page { margin: .7in; }
  body { font-family: Aptos, Calibri, Arial, sans-serif; color: #17324d; line-height: 1.44; font-size: 10.5pt; }
  .header { border-bottom: 4px solid #0068b7; padding-bottom: 14px; margin-bottom: 20px; }
  .brand-row { display: table; width: 100%; margin-bottom: 8px; }
  .brand-logo { display: table-cell; width: 132px; vertical-align: top; }
  .brand-logo img { width: 112px; height: auto; }
  .brand-copy { display: table-cell; vertical-align: middle; }
  .kicker { color: #368f2c; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; font-size: 9.5pt; }
  h1 { color: #003e73; font-size: 24pt; line-height: 1.12; margin: 5px 0 8px; }
  .subtitle { color: #4a6075; font-size: 11pt; margin: 0; }
  .meta { margin: 16px 0 18px; }
  .meta div { border: 1px solid #c7ddeb; background: #f4fbff; padding: 8px 10px; margin: 0 0 7px; }
  .meta strong { color: #003e73; }
  h2 { color: #0068b7; font-size: 15pt; border-bottom: 1px solid #c7ddeb; padding-bottom: 5px; margin-top: 22px; }
  table { width: 100%; border-collapse: collapse; margin: 10px 0 18px; }
  th { background: #eaf5fb; color: #003e73; text-align: left; border: 1px solid #bfd4e4; padding: 9px 10px; width: 30%; vertical-align: top; }
  td { border: 1px solid #d7e3ec; padding: 9px 10px; vertical-align: top; white-space: pre-wrap; }
  ul { margin: 6px 0 14px 22px; padding: 0; }
  li { margin-bottom: 5px; }
  .blank { color: #7b8b99; }
  .footer { margin-top: 28px; border-top: 1px solid #d7e3ec; padding-top: 10px; color: #62778c; font-size: 9pt; }
</style>
</head>
<body>
  <section class="header">
    <div class="brand-row">
      <div class="brand-logo">${logoDataUrl ? `<img src="${logoDataUrl}" alt="AI Playbook for Public Health logo">` : ""}</div>
      <div class="brand-copy">
        <div class="kicker">AI Playbook and Toolkit for Public Health Departments | ${escapeDoc(status)}</div>
        <h1>${escapeDoc(title)}</h1>
        <p class="subtitle">${escapeDoc(subtitle)}</p>
      </div>
    </div>
  </section>
  ${metaRows.length ? `<section class="meta">${metaRows.map(([label, value]) => `<div><strong>${escapeDoc(label)}:</strong> ${escapeDoc(value)}</div>`).join("")}</section>` : ""}
  ${sections.map(section => `
    <h2>${escapeDoc(section.heading)}</h2>
    ${section.rows ? `<table><tbody>${section.rows.map(([field, value]) => `<tr><th>${escapeDoc(field)}</th><td class="${value ? "" : "blank"}">${escapeDoc(value || "Complete this field.")}</td></tr>`).join("")}</tbody></table>` : ""}
    ${section.lines ? `<ul>${section.lines.map(line => `<li>${escapeDoc(line)}</li>`).join("")}</ul>` : ""}`).join("")}
  <section class="footer">Generated from the AI Playbook and Toolkit for Public Health Departments website.</section>
</body>
</html>`;
}

function toolDocumentSections(tool, blueprint, blank = false) {
  return collectToolEntries(blueprint, blank).map(([heading, rows]) => ({ heading, rows }));
}

async function downloadToolWord(tool, blueprint, blank = false) {
  const suffix = blank ? "blank-template" : "completed";
  const logo = await getLogoDataUrl();
  const html = buildProfessionalWordHtml(
    `Tool ${tool.id}: ${tool.title}`,
    blank ? "Blank Template" : "Completed Tool",
    tool.purpose,
    [
      ["Supported plays", tool.playIds.map(id => `Play ${id}`).join(", ")],
      ["Tool type", tool.type],
      ["Topic", tool.topic],
      ["Maturity level", tool.maturity]
    ],
    toolDocumentSections(tool, blueprint, blank),
    logo
  );
  downloadBlob(`${toolSlug(tool, suffix)}.doc`, html, "application/msword");
}

function pdfEscape(value) {
  return String(value || "").replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapPdfText(text, maxChars = 92) {
  const words = String(text || "").replace(/\s+/g, " ").trim().split(" ");
  const lines = [];
  let line = "";
  words.forEach(word => {
    if ((line + " " + word).trim().length > maxChars) {
      if (line) lines.push(line);
      line = word;
    } else {
      line = (line + " " + word).trim();
    }
  });
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

function concatBytes(parts) {
  const length = parts.reduce((sum, part) => sum + part.length, 0);
  const output = new Uint8Array(length);
  let offset = 0;
  parts.forEach(part => {
    output.set(part, offset);
    offset += part.length;
  });
  return output;
}

function asciiBytes(value) {
  return new TextEncoder().encode(value);
}

function buildPdfBinary(pageStreams, logoInfo = null) {
  const objects = [
    null,
    asciiBytes("<< /Type /Catalog /Pages 2 0 R >>"),
    null,
    asciiBytes("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"),
    asciiBytes("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
  ];
  let logoObjectNumber = null;
  if (logoInfo) {
    logoObjectNumber = objects.length;
    objects.push(concatBytes([
      asciiBytes(`<< /Type /XObject /Subtype /Image /Width ${logoInfo.width} /Height ${logoInfo.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${logoInfo.bytes.length} >>\nstream\n`),
      logoInfo.bytes,
      asciiBytes("\nendstream")
    ]));
  }
  const pageKids = [];
  pageStreams.forEach(stream => {
    const streamBytes = asciiBytes(stream);
    const contentObj = objects.length;
    objects.push(concatBytes([asciiBytes(`<< /Length ${streamBytes.length} >>\nstream\n`), streamBytes, asciiBytes("\nendstream")]));
    const pageObj = objects.length;
    const xObject = logoObjectNumber ? `/XObject << /Logo ${logoObjectNumber} 0 R >> ` : "";
    objects.push(asciiBytes(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> ${xObject}>> /Contents ${contentObj} 0 R >>`));
    pageKids.push(`${pageObj} 0 R`);
  });
  objects[2] = asciiBytes(`<< /Type /Pages /Kids [${pageKids.join(" ")}] /Count ${pageKids.length} >>`);
  const parts = [asciiBytes("%PDF-1.4\n")];
  const offsets = [0];
  let length = parts[0].length;
  objects.slice(1).forEach((obj, index) => {
    offsets.push(length);
    const header = asciiBytes(`${index + 1} 0 obj\n`);
    const footer = asciiBytes("\nendobj\n");
    parts.push(header, obj, footer);
    length += header.length + obj.length + footer.length;
  });
  const xref = length;
  let trailer = `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach(offset => trailer += `${String(offset).padStart(10, "0")} 00000 n \n`);
  trailer += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  parts.push(asciiBytes(trailer));
  return concatBytes(parts);
}

async function buildProfessionalPdf(title, status, subtitle, metaRows, sections) {
  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 54;
  const logo = await getLogoJpegInfo();
  const pages = [];
  let commands = [];
  let y = pageHeight - margin;
  const addPage = () => {
    if (commands.length) pages.push(commands.join("\n"));
    commands = [];
    y = pageHeight - margin;
  };
  const drawText = (line, x, size = 10, color = "0 0 0", bold = false) => {
    commands.push(`${color} rg`);
    commands.push("BT");
    commands.push(`/${bold ? "F2" : "F1"} ${size} Tf`);
    commands.push(`1 0 0 1 ${x} ${y} Tm (${pdfEscape(line)}) Tj`);
    commands.push("ET");
    y -= size + 6;
  };
  const text = (line, size = 10, color = "0 0 0", bold = false, x = margin) => {
    if (y < margin + size + 8) addPage();
    drawText(line, x, size, color, bold);
  };
  const rule = color => {
    commands.push(`${color} RG`);
    commands.push(`1.2 w ${margin} ${y} m ${pageWidth - margin} ${y} l S`);
    y -= 12;
  };
  const sectionHeading = heading => {
    if (y < margin + 52) addPage();
    y -= 4;
    text(heading, 13, "0 0.41 0.72", true);
    rule("0.78 0.86 0.92");
  };
  addPage();
  if (logo) commands.push(`q 108 0 0 ${Math.round(108 * logo.height / logo.width)} ${margin} ${pageHeight - margin - Math.round(108 * logo.height / logo.width)} cm /Logo Do Q`);
  const titleX = logo ? 180 : margin;
  y = pageHeight - margin - 12;
  text("AI Playbook and Toolkit for Public Health Departments", 10, "0.21 0.56 0.17", true, titleX);
  text(status, 9, "0.29 0.38 0.46", false, titleX);
  wrapPdfText(title, 48).forEach((line, i) => text(line, i === 0 ? 20 : 15, "0 0.24 0.45", true, titleX));
  wrapPdfText(subtitle, 75).forEach(line => text(line, 10, "0.29 0.38 0.46", false, titleX));
  y -= 10;
  rule("0 0.41 0.72");
  metaRows.forEach(([label, value]) => {
    wrapPdfText(`${label}: ${value}`, 92).forEach((line, i) => text(line, 9.5, i === 0 ? "0 0.24 0.45" : "0.18 0.28 0.37", i === 0));
  });
  y -= metaRows.length ? 8 : 0;
  sections.forEach(section => {
    sectionHeading(section.heading);
    if (section.rows) {
      section.rows.forEach(([field, value]) => {
        if (y < margin + 44) addPage();
        wrapPdfText(field, 78).forEach((line, i) => text(line, 10, "0 0.24 0.45", i === 0));
        wrapPdfText(value || "Complete this field.", 92).forEach(line => text(line, 9.5, value ? "0.13 0.20 0.28" : "0.47 0.55 0.61", false, margin + 12));
        y -= 5;
      });
    }
    if (section.lines) {
      section.lines.forEach(line => wrapPdfText(line, 88).forEach(wrapped => text(`- ${wrapped}`, 10, "0.13 0.20 0.28")));
    }
    y -= 5;
  });
  if (commands.length) pages.push(commands.join("\n"));
  return buildPdfBinary(pages, logo);
}

async function downloadToolPdf(tool, blueprint, blank = false) {
  const pdf = await buildProfessionalPdf(
    `Tool ${tool.id}: ${tool.title}`,
    blank ? "Blank PDF Template" : "Completed PDF",
    tool.purpose,
    [
      ["Supported plays", tool.playIds.map(id => `Play ${id}`).join(", ")],
      ["Tool type", tool.type],
      ["Topic", tool.topic],
      ["Maturity level", tool.maturity]
    ],
    toolDocumentSections(tool, blueprint, blank)
  );
  downloadBlob(`${toolSlug(tool, blank ? "blank-template" : "completed")}.pdf`, pdf, "application/pdf");
}

function renderMember() {
  const state = getMemberState();
  const profile = state.profile || {};
  const latestAssessment = [...(state.savedAssessments || [])].reverse()[0];
  const nextPlays = latestAssessment?.recommendations?.match(/Play \d+: [^\n]+/g)?.slice(0, 4) || ["Complete or save a readiness assessment to generate next-play recommendations."];
  const recentTools = [...(state.savedTools || [])].reverse().slice(0, 5);
  const memberPosts = (state.forumPosts || []).filter(p => !String(p.id).startsWith("seed"));
  const ratingsCount = Object.keys(state.ratings || {}).length;
  const organization = state.organization || {};
  const orgRole = organization.role || "Organization Administrator";
  const isOrgAccount = state.accountType === "Organization" || Boolean(organization.name);
  const isOrgAdmin = isOrgAccount && orgRole === "Organization Administrator";
  const requiresOrgApproval = isOrgAccount && !isOrgAdmin;
  const agency = state.agencyProfile || {};
  const plan = state.implementationPlan || {};
  const bookmarks = state.bookmarks?.length ? state.bookmarks : [
    { title: "AI Foundations", href: "#/learn" },
    { title: "Readiness Assessment", href: "#/assess" },
    { title: "Planning and Implementation Playbook", href: "#/plays" },
    { title: "Toolkit Library", href: "#/toolkit" },
    { title: "Case Studies", href: "#/case-studies" },
    { title: "References", href: "#/references" }
  ];
  const notifications = state.notifications?.length ? state.notifications : [
    "Reassess readiness after major policy, staffing, funding, or technology changes.",
    "Review governance decisions before moving from planning into pilots.",
    "Download blank templates anytime; save and completed downloads require membership."
  ];
  main.innerHTML = pageIntro("My Account", "Use this private preview workspace to manage your profile, save assessments, continue planning tools, and participate in the Community Exchange. Organization-level progress tracking is available in the Organization Hub.") + `
    <section class="member-dashboard panel">
      <div>
        <p class="eyebrow">My Dashboard</p>
        <h2>${state.profile ? `Welcome, ${memberDisplayName(profile)}` : "Create your member workspace"}</h2>
        <p>${latestAssessment ? `Latest readiness result: ${latestAssessment.score} / 100, ${latestAssessment.level}.` : "Save a readiness assessment to populate your score, maturity stage, priority gaps, and recommended next plays."}</p>
      </div>
      <div class="member-stats">
        <article><strong>${state.savedAssessments.length}</strong><span>Saved assessments</span></article>
        <article><strong>${state.savedTools.length}</strong><span>Saved tools</span></article>
        <article><strong>${memberPosts.length}</strong><span>Forum posts</span></article>
        <article><strong>${isOrgAccount ? "Org" : "Individual"}</strong><span>Account type</span></article>
      </div>
    </section>

    <div class="two-col member-top">
      <section class="panel member-profile-summary">
        <h2>Member Information</h2>
        ${state.profile ? `
          <p class="eyebrow">${memberDisplayName(profile)}</p>
          <p>${profile.agency || "Agency not provided"}</p>
          <p class="plain-meta">${profile.role || "Role not provided"}${profile.email ? ` · ${profile.email}` : ""}</p>
          <div class="button-row"><a class="btn primary" href="#/member-info">My Member Information</a><a class="btn" href="#/organization">Organization Hub</a><a class="btn" href="#/community">Open Community Exchange</a></div>
        ` : `
          <p>Create a member profile to save assessment snapshots, planning notes, completed tools, forum posts, and tool ratings.</p>
          <div class="button-row"><a class="btn primary" href="#/member-info">Create Member Profile</a><a class="btn" href="#/organization">Organization Hub</a><a class="btn" href="#/community">Open Community Exchange</a></div>
        `}
      </section>
      <aside class="panel">
        <h2>Recommended Next Steps</h2>
        <ul class="check-list">
          ${nextPlays.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </aside>
    </div>

    <div class="member-workspace-grid">
      <section class="panel">
        <h2>Saved Assessments</h2>
        ${state.savedAssessments.length ? `<div class="member-list">${[...state.savedAssessments].reverse().map(item=>`<article><strong>${item.title}</strong><span>${item.savedAt}</span><p>${item.score} / 100 · ${item.level}</p><a href="#/assess">Open assessment</a></article>`).join("")}</div>` : `<p class="plain-meta">No saved assessments yet. Complete the readiness assessment, then save progress from the assessment page.</p><a class="btn small" href="#/assess">Take Assessment</a>`}
      </section>

      <section class="panel">
        <h2>Saved Tools & Planning Workspace</h2>
        ${recentTools.length ? `<div class="member-list">${recentTools.map(item=>`<article><strong>${item.title}</strong><span>${item.savedAt}</span><a href="#/toolkit/${item.toolId}">Continue editing</a></article>`).join("")}</div>` : `<p class="plain-meta">No saved planning tools yet. Open any tool, complete fields, and save progress as a member.</p><a class="btn small" href="#/toolkit">Open Toolkit</a>`}
      </section>

      <section class="panel">
        <h2>My Implementation Plan</h2>
        <form class="member-form form-grid">
          <label>Priority plays<textarea id="plan-priority-plays" rows="4" placeholder="Example: Plays 2, 3, 4, and 7">${plan.priorityPlays || ""}</textarea></label>
          <label>Owners and due dates<textarea id="plan-owners" rows="4" placeholder="Owner, responsibility, due date">${plan.owners || ""}</textarea></label>
          <label>Status notes<textarea id="plan-status" rows="4" placeholder="Current status, blockers, next actions">${plan.status || ""}</textarea></label>
          <label>Next review date<input id="plan-review-date" type="date" value="${plan.reviewDate || ""}"></label>
        </form>
        <div class="button-row"><button class="btn primary small" type="button" onclick="saveImplementationPlanFromForm()">Save Plan</button><a class="btn small" href="#/plays">Open Framework</a></div>
      </section>

      <section class="panel">
        <h2>Agency Profile</h2>
        <form class="member-form form-grid">
          <label>Department type<input id="agency-type" value="${agency.type || ""}" placeholder="State, local, tribal, territorial, regional"></label>
          <label>Jurisdiction size<input id="agency-size" value="${agency.size || ""}" placeholder="Population or service area"></label>
          <label>Current AI maturity<select id="agency-maturity">${["Not selected","Awareness","Readiness","Pilots","Deployment","Optimization"].map(x=>`<option ${agency.maturity===x ? "selected" : ""}>${x}</option>`).join("")}</select></label>
          <label>Priority programs<textarea id="agency-priorities" rows="4" placeholder="Program areas or workflows where AI planning is active">${agency.priorities || ""}</textarea></label>
          <label>Governance status<textarea id="agency-governance" rows="4" placeholder="Committee, policy, review pathway, pending decisions">${agency.governance || ""}</textarea></label>
        </form>
        <div class="button-row"><button class="btn primary small" type="button" onclick="saveAgencyProfileFromForm()">Save Agency Profile</button><a class="btn small" href="#/maturity">Open Maturity Model</a></div>
      </section>

      <section class="panel">
        <h2>Community Activity</h2>
        <div class="member-list">
          <article><strong>${memberPosts.length} forum posts</strong><p>Questions, replies, or examples posted from this browser profile.</p><a href="#/community">Open Community Exchange</a></article>
          <article><strong>${ratingsCount} rated tools</strong><p>Tool ratings help identify what is useful and what needs improvement.</p><a href="#/toolkit">Review tools</a></article>
        </div>
      </section>

      <section class="panel">
        <h2>Resource Library / Bookmarks</h2>
        <div class="member-list compact">
          ${bookmarks.map(item=>`<article><a href="${item.href}">${item.title}</a></article>`).join("")}
        </div>
      </section>

      <section class="panel">
        <h2>Team Access</h2>
        <p class="plain-meta">Preview your future agency workspace roles. Production membership should support invitations, role-based access, and shared agency workspaces.</p>
        <div class="member-list">
          ${(state.teamMembers || []).length ? state.teamMembers.map(person=>`<article><strong>${person.name}</strong><span>${person.role || "Team member"}</span></article>`).join("") : `<article><strong>No team members added yet</strong><p>Future production feature: invite colleagues, assign roles, and share saved tools within an agency workspace.</p></article>`}
        </div>
      </section>

      <section class="panel">
        <h2>Notifications</h2>
        <ul class="check-list">${notifications.map(item=>`<li>${item}</li>`).join("")}</ul>
      </section>

      <section class="panel export-panel">
        <h2>Export Center</h2>
        <p>Download a ZIP packet containing a professional Word-compatible document and matching PDF summary of your member profile, organization workspace, agency profile, saved assessments, saved tools, implementation plan, forum activity, ratings, bookmarks, and notification settings.</p>
        <div class="button-row"><button class="btn primary" type="button" onclick="runDocumentDownload(() => downloadMemberWorkspaceExport(), 'Member workspace ZIP', 'member-export-status')">Download Word + PDF ZIP</button></div>
        <p id="member-export-status" class="save-status" aria-live="polite"></p>
      </section>
    </div>
  </section>`;
}

function renderMemberInfo() {
  const state = getMemberState();
  const profile = state.profile || {};
  main.innerHTML = pageIntro("My Member Information", "Manage the member profile used for saved progress, completed tool downloads, community posts, and the local member workspace preview.") + `
    <div class="two-col">
      <section class="panel">
        <h2>${state.profile ? "Edit Member Profile" : "Create Member Profile"}</h2>
        <p>Profile information is stored locally in this browser for the static preview. A production version should connect this form to secure authentication and account management.</p>
        <form class="member-form form-grid">
          <label>First name<input id="member-first-name" value="${profile.firstName || ""}" autocomplete="given-name" placeholder="First name"></label>
          <label>Last name<input id="member-last-name" value="${profile.lastName || ""}" autocomplete="family-name" placeholder="Last name"></label>
          <label>Email<input id="member-email" type="email" value="${profile.email || ""}" autocomplete="email" placeholder="name@agency.gov"></label>
          <label>Agency or organization<input id="member-agency" value="${profile.agency || ""}" placeholder="Health department or partner organization"></label>
          <label>Role<select id="member-role">
            ${["Public health leadership","Program staff","Data / informatics","Legal / privacy","Equity / community engagement","IT / security","Partner"].map(role=>`<option ${profile.role===role ? "selected" : ""}>${role}</option>`).join("")}
          </select></label>
        </form>
        <div class="button-row"><button class="btn primary" type="button" onclick="saveProfileFromForm()">Save Member Profile</button><a class="btn" href="#/member">Back to My Account</a></div>
      </section>
      <aside class="panel">
        <h2>What This Enables</h2>
        <ul class="check-list">
          <li>Save readiness assessment snapshots.</li>
          <li>Save planning notes from tool pages.</li>
          <li>Download completed member-only Word and PDF tool documents.</li>
          <li>Post in the Community Exchange with your name, agency, and role.</li>
          <li>Track tool ratings and workspace activity.</li>
        </ul>
      </aside>
    </div>
  </section>`;
}

function saveAgencyProfileFromForm() {
  const state = getMemberState();
  state.agencyProfile = {
    type: document.getElementById("agency-type").value.trim(),
    size: document.getElementById("agency-size").value.trim(),
    maturity: document.getElementById("agency-maturity").value,
    priorities: document.getElementById("agency-priorities").value.trim(),
    governance: document.getElementById("agency-governance").value.trim()
  };
  setMemberState(state);
  if ((location.hash || "").startsWith("#/organization")) renderOrganizationHub();
  else renderMember();
}

function saveOrganizationWorkspaceFromForm() {
  const state = getMemberState();
  state.accountType = document.getElementById("account-type").value;
  state.organization = {
    name: document.getElementById("organization-name").value.trim(),
    type: document.getElementById("organization-type").value.trim(),
    role: document.getElementById("organization-role").value,
    security: document.getElementById("organization-security").value.trim()
  };
  setMemberState(state);
  route();
}

function saveImplementationPlanFromForm() {
  const state = getMemberState();
  state.implementationPlan = {
    priorityPlays: document.getElementById("plan-priority-plays").value.trim(),
    owners: document.getElementById("plan-owners").value.trim(),
    status: document.getElementById("plan-status").value.trim(),
    reviewDate: document.getElementById("plan-review-date").value
  };
  setMemberState(state);
  renderMember();
}

function latestSavedAssessment(state) {
  return [...(state.savedAssessments || [])].reverse()[0] || null;
}

function parseRecommendationIds(text, kind) {
  const pattern = kind === "tool" ? /Tool\s+(\d+):/g : /Play\s+(\d+):/g;
  const ids = new Set();
  let match;
  while ((match = pattern.exec(text || ""))) ids.add(Number(match[1]));
  return [...ids].sort((a, b) => a - b);
}

function organizationRecommendedIds(state, kind) {
  const latest = latestSavedAssessment(state);
  const structured = kind === "tool" ? latest?.recommendedTools : latest?.recommendedPlays;
  if (Array.isArray(structured) && structured.length) return [...new Set(structured)].sort((a, b) => a - b);
  const parsed = parseRecommendationIds(latest?.recommendations || "", kind);
  if (parsed.length) return parsed;
  return kind === "tool" ? [1,2,3,4,7,11,12,13] : [1,2,3,4];
}

function organizationDashboardItem(state, type, id) {
  const dashboard = state.organizationDashboard || {};
  const key = `${type}-${id}`;
  return {
    owner: "",
    status: "Not started",
    dueDate: "",
    notes: "",
    ...(dashboard[key] || {})
  };
}

function progressPercent(items) {
  if (!items.length) return 0;
  const weights = { "Not started": 0, "In progress": .5, "Blocked": .25, "Completed": 1 };
  const total = items.reduce((sum, item) => sum + (weights[item.status] ?? 0), 0);
  return Math.round((total / items.length) * 100);
}

function organizationTrackingRows(state, type, ids) {
  const source = type === "play" ? plays : tools;
  return ids.map(id => {
    const item = source.find(x => x.id === id);
    const saved = organizationDashboardItem(state, type, id);
    const label = type === "play" ? `Play ${id}: ${item?.title || "Untitled"}` : `Tool ${id}: ${item?.title || "Untitled"}`;
    const href = type === "play" ? `#/plays/${id}` : `#/toolkit/${id}`;
    return `
      <tr>
        <td><a href="${href}">${label}</a></td>
        <td><input data-org-key="${type}-${id}" data-org-field="owner" value="${saved.owner}" placeholder="Lead or team"></td>
        <td>
          <select data-org-key="${type}-${id}" data-org-field="status">
            ${["Not started","In progress","Blocked","Completed"].map(status=>`<option ${saved.status===status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </td>
        <td><input type="date" data-org-key="${type}-${id}" data-org-field="dueDate" value="${saved.dueDate}"></td>
        <td><textarea rows="2" data-org-key="${type}-${id}" data-org-field="notes" placeholder="Notes, blockers, next step">${saved.notes}</textarea></td>
      </tr>`;
  }).join("");
}

function isOrganizationAdmin(state) {
  const organization = state.organization || {};
  return (state.accountType === "Organization" || Boolean(organization.name)) && (organization.role || "Organization Administrator") === "Organization Administrator";
}

const organizationRoles = ["Organization Administrator","Workspace Manager / Project Lead","Contributor","Reviewer / Governance Member","Read-only Member"];

const organizationTrainingRecommendations = {
  "Organization Administrator": ["staff-training","understanding-ai","generative-ai","agentic-ai","ai-literacy","role-based-ai-guidelines","privacy-security","procurement-vendor-review","governance-concepts","ai-incident-response"],
  "Workspace Manager / Project Lead": ["staff-training","understanding-ai","generative-ai","agentic-ai","ai-literacy","workflows","role-based-ai-guidelines","implementation-readiness","responsible-prompting-review","ai-incident-response"],
  "Contributor": ["understanding-ai","generative-ai","ai-literacy","responsible-prompting-review","privacy-security","human-centered-ai","workflows"],
  "Reviewer / Governance Member": ["staff-training","understanding-ai","governance-concepts","risk-guardrails","privacy-security","equity-bias","human-centered-ai","automation-bias","missing-voices","public-transparency","procurement-vendor-review","ai-incident-response"],
  "Read-only Member": ["staff-training","understanding-ai","generative-ai","ai-literacy","privacy-security","public-transparency"]
};

function moduleTitleById(id) {
  return learningModules.find(module => module.id === id)?.title || id;
}

function recommendedTrainingModulesForRole(role = "") {
  return organizationTrainingRecommendations[role] || organizationTrainingRecommendations.Contributor;
}

function organizationTrainingAssignments(state) {
  const assignments = state.organizationTrainingAssignments || {};
  const members = state.teamMembers?.length ? state.teamMembers : [];
  return members.map((person, index) => {
    const key = person.email || person.name || `member-${index}`;
    const recommendedIds = recommendedTrainingModulesForRole(person.role);
    const saved = assignments[key] || {};
    return {
      key,
      index,
      person,
      recommendedIds,
      recommendedTitles: recommendedIds.map(moduleTitleById),
      assigned: saved.assigned || recommendedIds.map(moduleTitleById).join("; "),
      dueDate: saved.dueDate || "",
      status: saved.status || "Not started",
      verification: saved.verification || "",
      notes: saved.notes || ""
    };
  });
}

function organizationMemberRows(state) {
  const canAdmin = isOrganizationAdmin(state);
  const members = state.teamMembers?.length ? state.teamMembers : [];
  if (!members.length) {
    return `<tr><td colspan="5">No organization members have been added yet. Use the access request form to model invites or join requests.</td></tr>`;
  }
  return members.map((person, index) => `
    <tr>
      <td><input data-member-index="${index}" data-member-field="name" value="${person.name || ""}" placeholder="Name"></td>
      <td><input data-member-index="${index}" data-member-field="email" value="${person.email || ""}" placeholder="name@agency.gov"></td>
      <td>
        <select data-member-index="${index}" data-member-field="role" ${canAdmin ? "" : "disabled"}>
          ${organizationRoles.map(role=>`<option ${person.role===role ? "selected" : ""}>${role}</option>`).join("")}
        </select>
      </td>
      <td>
        <select data-member-index="${index}" data-member-field="status" ${canAdmin ? "" : "disabled"}>
          ${["Pending administrator approval","Approved","Suspended"].map(status=>`<option ${person.status===status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </td>
      <td><input data-member-index="${index}" data-member-field="notes" value="${person.notes || ""}" placeholder="Access notes, division, review needs" ${canAdmin ? "" : "disabled"}></td>
    </tr>`).join("");
}

function organizationInvitationRows(state) {
  const canAdmin = isOrganizationAdmin(state);
  const invitations = state.organizationInvitations?.length ? state.organizationInvitations : [];
  if (!invitations.length) {
    return `<tr><td colspan="6">No invitations have been created yet. Administrators can invite members with pre-set roles.</td></tr>`;
  }
  return invitations.map((invite, index) => `
    <tr>
      <td><input data-invite-index="${index}" data-invite-field="name" value="${invite.name || ""}" placeholder="Name" ${canAdmin ? "" : "disabled"}></td>
      <td><input data-invite-index="${index}" data-invite-field="email" value="${invite.email || ""}" placeholder="name@agency.gov" ${canAdmin ? "" : "disabled"}></td>
      <td>
        <select data-invite-index="${index}" data-invite-field="role" ${canAdmin ? "" : "disabled"}>
          ${organizationRoles.map(role=>`<option ${invite.role===role ? "selected" : ""}>${role}</option>`).join("")}
        </select>
      </td>
      <td>
        <select data-invite-index="${index}" data-invite-field="status" ${canAdmin ? "" : "disabled"}>
          ${["Pending invitation","Accepted","Expired","Revoked"].map(status=>`<option ${invite.status===status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </td>
      <td><input type="date" data-invite-index="${index}" data-invite-field="expires" value="${invite.expires || ""}" ${canAdmin ? "" : "disabled"}></td>
      <td><input data-invite-index="${index}" data-invite-field="token" value="${invite.token || ""}" placeholder="Preview token" disabled></td>
    </tr>`).join("");
}

function organizationHubContext() {
  const state = getMemberState();
  const organization = state.organization || {};
  const orgRole = organization.role || "Organization Administrator";
  const isOrgAccount = state.accountType === "Organization" || Boolean(organization.name);
  const isOrgAdmin = isOrganizationAdmin(state);
  const requiresOrgApproval = isOrgAccount && !isOrgAdmin;
  const latestAssessment = latestSavedAssessment(state);
  const playIds = organizationRecommendedIds(state, "play");
  const toolIds = organizationRecommendedIds(state, "tool");
  const trackedItems = organizationWorkplanItems(state).flatMap(play => [
    organizationDashboardItem(state, "play", play.id),
    ...play.milestones.map(milestone => organizationDashboardItem(state, "milestone", `${play.id}-${milestone.id}`)),
    ...play.tools.map(tool => organizationDashboardItem(state, "tool", tool.id))
  ]);
  const completed = trackedItems.filter(item => item.status === "Completed").length;
  const blocked = trackedItems.filter(item => item.status === "Blocked").length;
  const dueSoon = trackedItems.filter(item => item.dueDate && (new Date(item.dueDate) - new Date()) <= 1000 * 60 * 60 * 24 * 30 && new Date(item.dueDate) >= new Date(new Date().toDateString())).length;
  const percent = progressPercent(trackedItems);
  return { state, organization, orgRole, isOrgAccount, isOrgAdmin, requiresOrgApproval, latestAssessment, playIds, toolIds, trackedItems, completed, blocked, dueSoon, percent };
}

function organizationPlanOverrides(state) {
  const overrides = state.organizationPlanOverrides || {};
  return {
    excludedPlays: Array.isArray(overrides.excludedPlays) ? overrides.excludedPlays.map(Number) : [],
    excludedTools: Array.isArray(overrides.excludedTools) ? overrides.excludedTools.map(Number) : [],
    excludedMilestones: Array.isArray(overrides.excludedMilestones) ? overrides.excludedMilestones : []
  };
}

function collectOrganizationDashboardFromDom(state) {
  const dashboard = { ...(state.organizationDashboard || {}) };
  document.querySelectorAll("[data-org-key][data-org-field]").forEach(field => {
    const key = field.dataset.orgKey;
    dashboard[key] = dashboard[key] || {};
    dashboard[key][field.dataset.orgField] = field.value;
  });
  state.organizationDashboard = dashboard;
  const milestoneLabels = { ...(state.organizationMilestoneLabels || {}) };
  document.querySelectorAll("[data-milestone-title]").forEach(field => {
    milestoneLabels[field.dataset.milestoneTitle] = field.value.trim();
  });
  state.organizationMilestoneLabels = milestoneLabels;
  return state;
}

function toggleOrganizationPlanItem(type, id, include) {
  const state = collectOrganizationDashboardFromDom(getMemberState());
  if (!isOrganizationAdmin(state)) return;
  const overrides = organizationPlanOverrides(state);
  const key = type === "play" ? "excludedPlays" : "excludedTools";
  const itemId = Number(id);
  const next = new Set(overrides[key]);
  if (include) next.delete(itemId);
  else next.add(itemId);
  state.organizationPlanOverrides = { ...overrides, [key]: [...next].sort((a, b) => a - b) };
  setMemberState(state);
  renderOrganizationWorkplan();
}

const play10ExecutionMilestones = [
  "Confirm change management lead and AI champions.",
  "Finalize staff communication schedule.",
  "Deliver role-based training.",
  "Launch office hours or support channel.",
  "Track staff concerns and barriers.",
  "Resolve adoption blockers.",
  "Report adoption status to governance.",
  "Document lessons learned for future deployments."
];

function organizationDefaultMilestones(play) {
  const source = play.id === 10 ? play10ExecutionMilestones : (play.actions || []);
  return source.map((text, index) => ({ id: `default-${index + 1}`, text, defaultText: text, isDefault: true }));
}

function organizationMilestoneCompositeKey(playId, milestoneId) {
  return `${playId}:${milestoneId}`;
}

function organizationPlayMilestones(state, play) {
  const overrides = organizationPlanOverrides(state);
  const labels = state.organizationMilestoneLabels || {};
  const custom = state.organizationCustomMilestones || {};
  const defaultMilestones = organizationDefaultMilestones(play)
    .filter(milestone => !overrides.excludedMilestones.includes(organizationMilestoneCompositeKey(play.id, milestone.id)))
    .map(milestone => {
      const key = organizationMilestoneCompositeKey(play.id, milestone.id);
      return { ...milestone, text: labels[key] || milestone.text, key };
    });
  const customMilestones = (custom[play.id] || []).map(milestone => ({
    id: milestone.id,
    text: labels[organizationMilestoneCompositeKey(play.id, milestone.id)] || milestone.text || "Custom milestone",
    defaultText: milestone.text || "Custom milestone",
    isDefault: false,
    key: organizationMilestoneCompositeKey(play.id, milestone.id)
  }));
  return [...defaultMilestones, ...customMilestones];
}

function toggleOrganizationMilestone(playId, milestoneId, include) {
  const state = collectOrganizationDashboardFromDom(getMemberState());
  if (!isOrganizationAdmin(state)) return;
  const compositeKey = organizationMilestoneCompositeKey(Number(playId), milestoneId);
  const overrides = organizationPlanOverrides(state);
  const excluded = new Set(overrides.excludedMilestones);
  if (include) excluded.delete(compositeKey);
  else excluded.add(compositeKey);
  state.organizationPlanOverrides = { ...overrides, excludedMilestones: [...excluded].sort() };
  setMemberState(state);
  renderOrganizationWorkplan();
}

function addOrganizationMilestone(playId) {
  const state = collectOrganizationDashboardFromDom(getMemberState());
  if (!isOrganizationAdmin(state)) return;
  const input = document.getElementById(`new-milestone-${playId}`);
  const text = (input?.value || "").trim();
  if (!text) return;
  const custom = { ...(state.organizationCustomMilestones || {}) };
  const id = `custom-${Date.now()}`;
  custom[playId] = [...(custom[playId] || []), { id, text }];
  state.organizationCustomMilestones = custom;
  setMemberState(state);
  renderOrganizationWorkplan();
}

function renderOrganizationHub(view = "") {
  if (view === "admin") {
    renderOrganizationAdminHub();
    return;
  }
  if (view === "workplan") {
    renderOrganizationWorkplan();
    return;
  }
  if (view === "training") {
    renderOrganizationTrainingHub();
    return;
  }
  const { state, organization, orgRole, isOrgAdmin, latestAssessment, playIds, toolIds, completed, blocked, dueSoon, percent } = organizationHubContext();
  main.innerHTML = pageIntro("Organization Hub", "Track shared jurisdiction progress against readiness-assessment recommendations, assign leads for plays and tools, set deadlines, and monitor completion across the organization workspace.") + `
    <section class="member-dashboard panel org-dashboard-hero">
      <div class="org-workspace-header">
        <div>
          <p class="eyebrow">Organization Progress Dashboard</p>
          <h2>${organization.name || "Organization workspace"}</h2>
        <p>${latestAssessment ? `Based on the saved readiness assessment: ${latestAssessment.score} / 100, ${latestAssessment.level}. Recommended plays and tools are marked in the full organization workplan.` : "Save a readiness assessment to mark recommended plays and tools in the full organization workplan."}</p>
        </div>
        <span class="status-label">${isOrgAdmin ? "Administrator access" : "Organization access"}</span>
      </div>
      <div class="member-stats">
        <article><strong>${percent}%</strong><span>Overall progress</span></article>
        <article><strong>${completed}</strong><span>Completed items</span></article>
        <article><strong>${blocked}</strong><span>Blocked items</span></article>
        <article><strong>${dueSoon}</strong><span>Due within 30 days</span></article>
      </div>
    </section>

    ${organizationChangeManagementDashboard(state)}

    <section class="panel">
      <h2>Organization Workspace</h2>
      <div class="org-grid">
        <article><h3>Organization</h3><p>${organization.name || "No organization configured yet."}</p><p class="plain-meta">${organization.type || "Add organization type in Administration"} · ${orgRole}</p></article>
        <article><h3>Workplan Plays</h3><p>All ${plays.length} plays are included. ${latestAssessment ? `${playIds.length} are marked as recommended.` : "Complete the assessment to mark priorities."}</p></article>
        <article><h3>Workplan Tools</h3><p>All ${tools.length} tools are nested under the first play where they are used. ${latestAssessment ? `${toolIds.length} are marked as recommended.` : "Complete the assessment to mark priorities."}</p></article>
        <article><h3>Administrative Status</h3><p>${isOrgAdmin ? "Admin controls available." : "Admin controls locked unless role is Organization Administrator."}</p></article>
      </div>
      <div class="button-row"><a class="btn primary" href="#/organization/workplan">Open Implementation Workplan</a><a class="btn" href="#/organization/training">Open Training Assignments</a><a class="btn" href="#/organization/admin">Open Administration</a><a class="btn" href="#/assess">Take Assessment</a></div>
    </section>

    <section class="panel">
      <h2>Workflow Model</h2>
      <div class="org-grid">
        <article><h3>1. Individual Account</h3><p>Every person registers or signs in with an individual account first so identity and accountability are clear.</p></article>
        <article><h3>2. Organization Workspace</h3><p>An authorized user creates or claims the organization and becomes the initial administrator.</p></article>
        <article><h3>3. Invitations</h3><p>Administrators invite colleagues by email with a pre-set role that applies after registration or login.</p></article>
        <article><h3>4. Ongoing Management</h3><p>Administrators approve requests, change roles, suspend access, and maintain organization records.</p></article>
      </div>
    </section>
  </section>`;
}

function renderOrganizationAdminHub() {
  const { state, organization, orgRole, isOrgAdmin, requiresOrgApproval } = organizationHubContext();
  main.innerHTML = pageIntro("Organization Administration", "Manage organization setup, access requests, invitations, roles, and administrator-only controls for the organization workspace.") + `
    <section class="panel organization-workspace">
      <div class="org-workspace-header">
        <div>
          <p class="eyebrow">Organization Workspace</p>
          <h2>${organization.name || "Create or request organization access"}</h2>
          <p>${organization.name ? `${organization.type || "Public health organization"} · ${orgRole}` : "Organization accounts let health departments share assessments, tools, implementation plans, governance records, assignments, and exports while an administrator controls access."}</p>
        </div>
        <span class="status-label">${requiresOrgApproval ? "Administrator approval required" : (isOrgAdmin ? "Administrator access" : "Individual access only")}</span>
      </div>
      <form class="member-form org-form">
        <label>Account type<select id="account-type">
          ${["Individual","Organization"].map(type=>`<option ${state.accountType===type ? "selected" : ""}>${type}</option>`).join("")}
        </select></label>
        <label>Organization name<input id="organization-name" value="${organization.name || ""}" placeholder="Health department or partner organization"></label>
        <label>Organization type<input id="organization-type" value="${organization.type || ""}" placeholder="State, local, tribal, territorial, regional, partner"></label>
        <label>Your organization role<select id="organization-role">
          ${["Organization Administrator","Workspace Manager / Project Lead","Contributor","Reviewer / Governance Member","Read-only Member","Individual-only Member"].map(role=>`<option ${orgRole===role ? "selected" : ""}>${role}</option>`).join("")}
        </select></label>
        <label>Security notes<textarea id="organization-security" rows="3" placeholder="Access requirements, approval process, data handling expectations">${organization.security || ""}</textarea></label>
      </form>
      <div class="button-row"><button class="btn primary small" type="button" onclick="saveOrganizationWorkspaceFromForm()">Save Organization Workspace</button><a class="btn small" href="#/organization">Back to Dashboard</a></div>
      ${requiresOrgApproval ? `<div class="member-access-note locked">Organization workspace access is pending administrator approval. In production, the user would retain personal My Account access while an Organization Administrator approves or denies shared workspace access.</div>` : ""}
    </section>

    <section class="panel">
      <div class="org-workspace-header">
        <div>
          <p class="eyebrow">Access and Role Management</p>
          <h2>Organization Members</h2>
          <p>Model how organization administrators approve access and assign roles. Production should enforce this with authentication, role-based permissions, and audit logs.</p>
        </div>
        <button class="btn primary small" type="button" onclick="saveOrganizationMembersFromForm()" ${isOrgAdmin ? "" : "disabled"}>Save Member Access</button>
      </div>
      ${isOrgAdmin ? "" : `<div class="member-access-note locked">Administrator functions are locked in this preview because the selected organization role is not Organization Administrator. You can add an access request, but only an administrator should approve access or assign roles.</div>`}
      <div class="table-wrap org-tracker-table"><table>
        <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Access Status</th><th>Notes</th></tr></thead>
        <tbody>${organizationMemberRows(state)}</tbody>
      </table></div>

      <section class="content-section compact-section">
        <div class="org-workspace-header">
          <div>
            <p class="eyebrow">Administrator Invitations</p>
            <h3>Invite people with pre-set roles</h3>
            <p>Administrators create invitations that link an individual account to this organization with the selected role after the invitee registers or logs in.</p>
          </div>
          <button class="btn small" type="button" onclick="saveOrganizationInvitationsFromForm()" ${isOrgAdmin ? "" : "disabled"}>Save Invitations</button>
        </div>
        <div class="table-wrap org-tracker-table"><table>
          <thead><tr><th>Name</th><th>Email</th><th>Pre-set Role</th><th>Invite Status</th><th>Expires</th><th>Token</th></tr></thead>
          <tbody>${organizationInvitationRows(state)}</tbody>
        </table></div>
        <form class="member-form org-form org-add-member-form">
          <label>Name<input id="new-org-invite-name" placeholder="Invitee name" ${isOrgAdmin ? "" : "disabled"}></label>
          <label>Email<input id="new-org-invite-email" type="email" placeholder="name@agency.gov" ${isOrgAdmin ? "" : "disabled"}></label>
          <label>Pre-set role<select id="new-org-invite-role" ${isOrgAdmin ? "" : "disabled"}>
            ${organizationRoles.map(role=>`<option>${role}</option>`).join("")}
          </select></label>
          <label>Expiration date<input id="new-org-invite-expires" type="date" ${isOrgAdmin ? "" : "disabled"}></label>
        </form>
        <div class="button-row"><button class="btn small" type="button" onclick="createOrganizationInvitation()" ${isOrgAdmin ? "" : "disabled"}>Create Invitation</button></div>
      </section>

      <section class="content-section compact-section">
        <p class="eyebrow">Access Requests</p>
        <h3>Request access to an organization</h3>
        <p>People without an invitation can request access. The request remains pending until an Organization Administrator approves it and assigns the appropriate role.</p>
      </section>
      <form class="member-form org-form org-add-member-form">
        <label>Name<input id="new-org-member-name" placeholder="Member name"></label>
        <label>Email<input id="new-org-member-email" type="email" placeholder="name@agency.gov"></label>
        <label>Requested role<select id="new-org-member-role">
          ${organizationRoles.filter(role => role !== "Organization Administrator").map(role=>`<option>${role}</option>`).join("")}
        </select></label>
        <label>Access notes<input id="new-org-member-notes" placeholder="Division, reason for access, approval notes"></label>
      </form>
      <div class="button-row"><button class="btn small" type="button" onclick="addOrganizationMemberRequest()">Add Access Request</button></div>
    </section>
  </section>`;
}

function organizationWorkplanItems(state) {
  const latest = latestSavedAssessment(state);
  const recommendedPlayIds = latest ? organizationRecommendedIds(state, "play") : [];
  const recommendedToolIds = latest ? organizationRecommendedIds(state, "tool") : [];
  const overrides = organizationPlanOverrides(state);
  return plays.filter(play => !overrides.excludedPlays.includes(play.id)).map(play => {
    const nestedTools = tools
      .filter(tool => {
        if (overrides.excludedTools.includes(tool.id)) return false;
        const firstPlay = plays.find(candidate => (candidate.tools || []).includes(tool.id))?.id || tool.playIds[0];
        return firstPlay === play.id;
      })
      .map(tool => ({
        type: "tool",
        id: tool.id,
        label: `Tool ${tool.id}: ${tool.title}`,
        href: `#/toolkit/${tool.id}`,
        parentPlayId: play.id,
        parentPlayTitle: play.title,
        recommended: recommendedToolIds.includes(tool.id)
      }));
    return {
      type: "play",
      id: play.id,
      label: `Play ${play.id}: ${play.title}`,
      href: `#/plays/${play.id}`,
      recommended: recommendedPlayIds.includes(play.id),
      milestones: organizationPlayMilestones(state, play),
      tools: nestedTools
    };
  });
}

function organizationIntegratedTrackingRows(state) {
  const canAdmin = isOrganizationAdmin(state);
  const priorityCell = item => `<td><span class="priority-pill ${item.recommended ? "recommended" : "supporting"}">${item.recommended ? "Recommended" : "Supporting"}</span></td>`;
  const actionCell = item => `<td>${canAdmin ? `<button class="btn tiny danger" type="button" onclick="toggleOrganizationPlanItem('${item.type}', ${item.id}, false)">Remove</button>` : `<span class="plain-meta">Admin only</span>`}</td>`;
  const milestoneActionCell = milestone => `<td>${canAdmin ? `<button class="btn tiny danger" type="button" onclick="toggleOrganizationMilestone(${milestone.playId}, '${milestone.id}', false)">Remove</button>` : `<span class="plain-meta">Admin only</span>`}</td>`;
  const milestoneTitleCell = milestone => canAdmin
    ? `<input class="milestone-title-input" data-milestone-title="${milestone.key}" value="${escapeDoc(milestone.text)}" aria-label="Milestone title">`
    : escapeDoc(milestone.text);
  const fieldCells = item => {
    const saved = organizationDashboardItem(state, item.type, item.id);
    return `
      <td><input data-org-key="${item.type}-${item.id}" data-org-field="owner" value="${saved.owner}" placeholder="Lead or team"></td>
      <td>
        <select data-org-key="${item.type}-${item.id}" data-org-field="status">
          ${["Not started","In progress","Blocked","Completed"].map(status=>`<option ${saved.status===status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </td>
      <td><input type="date" data-org-key="${item.type}-${item.id}" data-org-field="dueDate" value="${saved.dueDate}"></td>
      <td><textarea rows="2" data-org-key="${item.type}-${item.id}" data-org-field="notes" placeholder="Notes, blockers, next step">${saved.notes}</textarea></td>`;
  };
  return organizationWorkplanItems(state).map(play => `
    <tr class="org-play-row">
      <td><span class="status-label">Play</span></td>
      <td><a href="${play.href}">${play.label}</a></td>
      ${priorityCell(play)}
      ${fieldCells(play)}
      ${actionCell(play)}
    </tr>
    ${play.milestones.map(milestone => {
      const item = { type: "milestone", id: `${play.id}-${milestone.id}` };
      const milestoneForAction = { ...milestone, playId: play.id };
      return `
        <tr class="org-milestone-row">
          <td><span class="status-label milestone">Milestone</span></td>
          <td>${milestoneTitleCell(milestoneForAction)}</td>
          <td><span class="priority-pill supporting">Step</span></td>
          ${fieldCells(item)}
          ${milestoneActionCell(milestoneForAction)}
        </tr>`;
    }).join("")}
    ${canAdmin ? `
      <tr class="org-milestone-row org-add-milestone-row">
        <td><span class="status-label milestone">Add</span></td>
        <td colspan="6"><input id="new-milestone-${play.id}" placeholder="Add a milestone under ${escapeDoc(play.label)}"></td>
        <td><button class="btn tiny" type="button" onclick="addOrganizationMilestone(${play.id})">Add</button></td>
      </tr>` : ""}
    ${play.tools.length ? play.tools.map(tool => `
      <tr class="org-tool-row">
        <td><span class="status-label muted">Tool</span></td>
        <td><a href="${tool.href}">${tool.label}</a></td>
        ${priorityCell(tool)}
        ${fieldCells(tool)}
        ${actionCell(tool)}
      </tr>`).join("") : `
      <tr class="org-tool-row org-empty-row">
        <td><span class="status-label muted">Tool</span></td>
        <td colspan="7">No tools first appear under this play.</td>
      </tr>`}
  `).join("");
}

function organizationRemovedPlanControls(state, canAdmin) {
  const overrides = organizationPlanOverrides(state);
  const removedPlays = plays.filter(play => overrides.excludedPlays.includes(play.id));
  const removedTools = tools.filter(tool => overrides.excludedTools.includes(tool.id));
  const removedMilestones = plays.flatMap(play => organizationDefaultMilestones(play)
    .filter(milestone => overrides.excludedMilestones.includes(organizationMilestoneCompositeKey(play.id, milestone.id)))
    .map(milestone => ({ ...milestone, playId: play.id, playTitle: play.title })));
  if (!removedPlays.length && !removedTools.length && !removedMilestones.length) {
    return `<p class="plain-meta">No plays or tools have been removed from this organization workplan.</p>`;
  }
  return `
    <div class="removed-plan-grid">
      ${removedPlays.map(play => `<article><span class="status-label">Play</span><strong>Play ${play.id}: ${play.title}</strong><button class="btn tiny" type="button" onclick="toggleOrganizationPlanItem('play', ${play.id}, true)" ${canAdmin ? "" : "disabled"}>Restore</button></article>`).join("")}
      ${removedTools.map(tool => `<article><span class="status-label muted">Tool</span><strong>Tool ${tool.id}: ${tool.title}</strong><button class="btn tiny" type="button" onclick="toggleOrganizationPlanItem('tool', ${tool.id}, true)" ${canAdmin ? "" : "disabled"}>Restore</button></article>`).join("")}
      ${removedMilestones.map(milestone => `<article><span class="status-label milestone">Milestone</span><strong>Play ${milestone.playId}: ${milestone.text}</strong><button class="btn tiny" type="button" onclick="toggleOrganizationMilestone(${milestone.playId}, '${milestone.id}', true)" ${canAdmin ? "" : "disabled"}>Restore</button></article>`).join("")}
    </div>`;
}

function organizationChangeManagementSummary(state) {
  const play10 = organizationWorkplanItems(state).find(play => play.id === 10);
  if (!play10) return { items: [], completed: 0, blocked: 0, dueSoon: 0, percent: 0, blockers: [], nextDeadlines: [] };
  const items = [
    { type: "play", id: 10, label: "Play 10: Execute Change Management" },
    ...play10.milestones.map(milestone => ({ type: "milestone", id: `10-${milestone.id}`, label: milestone.text })),
    ...play10.tools.map(tool => ({ type: "tool", id: tool.id, label: tool.label }))
  ].map(item => ({ ...item, saved: organizationDashboardItem(state, item.type, item.id) }));
  const completed = items.filter(item => item.saved.status === "Completed").length;
  const blocked = items.filter(item => item.saved.status === "Blocked").length;
  const dueSoon = items.filter(item => item.saved.dueDate && (new Date(item.saved.dueDate) - new Date()) <= 1000 * 60 * 60 * 24 * 30 && new Date(item.saved.dueDate) >= new Date(new Date().toDateString())).length;
  const blockers = items.filter(item => item.saved.status === "Blocked").slice(0, 4);
  const nextDeadlines = items
    .filter(item => item.saved.dueDate)
    .sort((a, b) => new Date(a.saved.dueDate) - new Date(b.saved.dueDate))
    .slice(0, 4);
  return { items, completed, blocked, dueSoon, percent: progressPercent(items.map(item => item.saved)), blockers, nextDeadlines };
}

function latestSavedTool(state, toolId) {
  return [...(state.savedTools || [])].reverse().find(item => Number(item.toolId) === Number(toolId));
}

function savedToolField(savedTool, sectionName, fieldName) {
  const section = (savedTool?.entries || []).find(([section]) => section === sectionName);
  const field = (section?.[1] || []).find(([label]) => label === fieldName);
  return field?.[1] || "";
}

function renderSavedToolValue(value, emptyText = "Not entered yet") {
  return value ? escapeDoc(value) : `<span class="plain-meta">${emptyText}</span>`;
}

function organizationChangeManagementDashboard(state) {
  const summary = organizationChangeManagementSummary(state);
  const savedExecutionDashboard = latestSavedTool(state, 38);
  const toolValue = (section, field) => savedToolField(savedExecutionDashboard, section, field);
  const trainingItems = summary.items.filter(item => /training|office hours|support channel|champion/i.test(item.label));
  const trainingCompleted = trainingItems.filter(item => item.saved.status === "Completed").length;
  const concernItems = summary.items.filter(item => /concern|barrier|blocker|adoption/i.test(item.label));
  const openConcerns = concernItems.filter(item => item.saved.status !== "Completed").length;
  const dashboardMetrics = [
    ["Communications delivered", toolValue("Execution dashboard", "Communications delivered")],
    ["Training completion", toolValue("Execution dashboard", "Training completion")],
    ["Office hours/support provided", toolValue("Execution dashboard", "Office hours/support provided")],
    ["Champion activity", toolValue("Execution dashboard", "Champion activity")],
    ["Adoption indicators", toolValue("Execution dashboard", "Adoption indicators")],
    ["Open barriers", toolValue("Escalation and readiness", "Open barriers")],
    ["Governance escalations", toolValue("Escalation and readiness", "Issues escalated to governance")],
    ["Readiness status", toolValue("Escalation and readiness", "Readiness status")]
  ];
  return `
    <section class="panel change-dashboard">
      <div class="org-workspace-header">
        <div>
          <p class="eyebrow">Play 10 Change Management Dashboard</p>
          <h2>Change execution snapshot</h2>
          <p>Track whether communication, training, champions, staff support, barriers, and governance reporting are moving during deployment.</p>
        </div>
        <a class="btn small" href="#/plays/10">Open Play 10</a>
      </div>
      <div class="member-stats change-stats">
        <article><strong>${summary.percent}%</strong><span>Change execution complete</span></article>
        <article><strong>${trainingCompleted}/${trainingItems.length || 0}</strong><span>Training/support items complete</span></article>
        <article><strong>${openConcerns}</strong><span>Open concern or barrier items</span></article>
        <article><strong>${summary.dueSoon}</strong><span>Due within 30 days</span></article>
      </div>
      ${savedExecutionDashboard ? `
        <div class="change-form-dashboard">
          <div class="change-form-header">
            <div>
              <h3>${renderSavedToolValue(toolValue("Deployment change profile", "AI system or workflow"), "Saved Tool 38 dashboard")}</h3>
              <p class="plain-meta">Last saved: ${escapeDoc(savedExecutionDashboard.savedAt || "date not available")}</p>
            </div>
            <a class="btn small" href="#/toolkit/37">Update Tool 38</a>
          </div>
          <div class="change-profile-grid">
            <article><span>Deployment phase</span><strong>${renderSavedToolValue(toolValue("Deployment change profile", "Deployment phase"))}</strong></article>
            <article><span>Affected staff groups</span><strong>${renderSavedToolValue(toolValue("Deployment change profile", "Affected staff groups"))}</strong></article>
            <article><span>Change lead</span><strong>${renderSavedToolValue(toolValue("Deployment change profile", "Change lead"))}</strong></article>
            <article><span>Reporting period</span><strong>${renderSavedToolValue(toolValue("Deployment change profile", "Reporting period"))}</strong></article>
          </div>
          <div class="change-metric-grid">
            ${dashboardMetrics.map(([label, value]) => `<article><span>${label}</span><p>${renderSavedToolValue(value)}</p></article>`).join("")}
          </div>
          <div class="change-dashboard-grid">
            <article>
              <h3>Staff feedback themes</h3>
              <p>${renderSavedToolValue(toolValue("Execution dashboard", "Staff feedback themes"), "No feedback themes entered yet.")}</p>
            </article>
            <article>
              <h3>Corrective actions</h3>
              <p>${renderSavedToolValue(toolValue("Escalation and readiness", "Corrective actions"), "No corrective actions entered yet.")}</p>
            </article>
            <article>
              <h3>Lessons learned</h3>
              <p>${renderSavedToolValue(toolValue("Escalation and readiness", "Lessons learned"), "No lessons learned entered yet.")}</p>
            </article>
            <article>
              <h3>Dashboard source</h3>
              <p>This section is populated from the latest saved Tool 38: Change Management Execution Dashboard.</p>
            </article>
          </div>
        </div>
      ` : `
        <div class="change-form-empty">
          <div>
            <h3>No saved Tool 38 dashboard yet</h3>
            <p>Complete and save Tool 38 to populate this dashboard with the AI system or workflow, reporting period, training completion, communications, adoption indicators, barriers, escalations, readiness status, and lessons learned.</p>
          </div>
          <a class="btn primary" href="#/toolkit/37">Open Tool 38</a>
        </div>
      `}
      <div class="change-dashboard-grid">
        <article>
          <h3>Blocked adoption items</h3>
          ${summary.blockers.length ? `<ul>${summary.blockers.map(item => `<li>${escapeDoc(item.label)}</li>`).join("")}</ul>` : `<p class="plain-meta">No blocked Play 10 items are currently marked.</p>`}
        </article>
        <article>
          <h3>Upcoming change deadlines</h3>
          ${summary.nextDeadlines.length ? `<ul>${summary.nextDeadlines.map(item => `<li>${escapeDoc(item.saved.dueDate)}: ${escapeDoc(item.label)}</li>`).join("")}</ul>` : `<p class="plain-meta">No Play 10 deadlines have been added yet.</p>`}
        </article>
      </div>
    </section>`;
}

function organizationTrainingPlanDashboard(state) {
  const savedTrainingPlan = latestSavedTool(state, 49);
  const toolValue = (section, field) => savedToolField(savedTrainingPlan, section, field);
  const trainingItem = organizationDashboardItem(state, "tool", 49);
  const assignmentFields = [
    "Executive leadership required modules",
    "Governance committee required modules",
    "Program staff required modules",
    "Data/analytics staff required modules",
    "IT/security staff required modules",
    "Legal/privacy/procurement required modules",
    "Communications/equity/community engagement required modules"
  ];
  const followUpFields = [
    "Staff groups needing additional support",
    "Office hours or coaching schedule",
    "Champion or mentor assigned",
    "Refresher training needs",
    "Escalation or governance issues"
  ];
  return `
    <section class="panel training-dashboard">
      <div class="org-workspace-header">
        <div>
          <p class="eyebrow">Role-Based Training Dashboard</p>
          <h2>Learning module assignments and completion tracking</h2>
          <p>Use this dashboard to connect the learning modules to staff roles, deadlines, completion standards, supervisor verification, and follow-up support.</p>
        </div>
        <a class="btn small" href="#/toolkit/28">Open Tool 28</a>
      </div>
      <div class="member-stats change-stats">
        <article><strong>${escapeDoc(trainingItem.status || "Not started")}</strong><span>Tool 28 status</span></article>
        <article><strong>${trainingItem.dueDate ? escapeDoc(trainingItem.dueDate) : "No date"}</strong><span>Training plan deadline</span></article>
        <article><strong>${trainingItem.owner ? escapeDoc(trainingItem.owner) : "Unassigned"}</strong><span>Training lead</span></article>
        <article><strong>${savedTrainingPlan ? "Saved" : "Not saved"}</strong><span>Form source</span></article>
      </div>
      ${savedTrainingPlan ? `
        <div class="change-form-dashboard">
          <div class="change-form-header">
            <div>
              <h3>${renderSavedToolValue(toolValue("Training plan profile", "Training plan name"), "Saved role-based training plan")}</h3>
              <p class="plain-meta">Last saved: ${escapeDoc(savedTrainingPlan.savedAt || "date not available")}</p>
            </div>
            <a class="btn small" href="#/toolkit/28">Update Tool 28</a>
          </div>
          <div class="change-profile-grid">
            <article><span>Training period</span><strong>${renderSavedToolValue(toolValue("Training plan profile", "Training period"))}</strong></article>
            <article><span>Training owner</span><strong>${renderSavedToolValue(toolValue("Training plan profile", "Training owner"))}</strong></article>
            <article><span>Organization administrator</span><strong>${renderSavedToolValue(toolValue("Training plan profile", "Organization administrator"))}</strong></article>
            <article><span>Related play or deployment</span><strong>${renderSavedToolValue(toolValue("Training plan profile", "Related play or deployment"))}</strong></article>
          </div>
          <div class="change-dashboard-grid">
            <article>
              <h3>Required modules by role</h3>
              <ul>${assignmentFields.map(field => `<li><strong>${field.replace(" required modules", "")}:</strong> ${renderSavedToolValue(toolValue("Role-based module assignments", field), "Not assigned yet")}</li>`).join("")}</ul>
            </article>
            <article>
              <h3>Completion standard and verification</h3>
              <p><strong>Role or staff group:</strong> ${renderSavedToolValue(toolValue("Completion tracking", "Role or staff group"))}</p>
              <p><strong>Required completion date:</strong> ${renderSavedToolValue(toolValue("Completion tracking", "Required completion date"))}</p>
              <p><strong>Completion standard:</strong> ${renderSavedToolValue(toolValue("Completion tracking", "Completion standard"))}</p>
              <p><strong>Status:</strong> ${renderSavedToolValue(toolValue("Completion tracking", "Completion status"))}</p>
              <p><strong>Verification:</strong> ${renderSavedToolValue(toolValue("Completion tracking", "Supervisor or administrator verification"))}</p>
            </article>
            <article>
              <h3>Follow-up support</h3>
              <ul>${followUpFields.map(field => `<li><strong>${field}:</strong> ${renderSavedToolValue(toolValue("Follow-up and support", field), "Not entered yet")}</li>`).join("")}</ul>
            </article>
            <article>
              <h3>Dashboard source</h3>
              <p>This section is populated from the latest saved Tool 28: Role-Based Training Plan and Completion Tracker.</p>
            </article>
          </div>
        </div>
      ` : `
        <div class="change-form-empty">
          <div>
            <h3>No saved Tool 28 training plan yet</h3>
            <p>Complete and save Tool 28 to populate this dashboard with role-based learning module assignments, completion standards, deadlines, verification, and follow-up support needs.</p>
          </div>
          <a class="btn primary" href="#/toolkit/28">Open Tool 28</a>
        </div>
      `}
    </section>`;
}

function organizationTrainingAssignmentRows(state, canAdmin) {
  const rows = organizationTrainingAssignments(state);
  if (!rows.length) {
    return `<tr><td colspan="7">No organization members have been added yet. Add or approve organization members in Administration before assigning learning modules.</td></tr>`;
  }
  return rows.map(row => `
    <tr>
      <td><strong>${escapeDoc(row.person.name || "Unnamed member")}</strong><p class="plain-meta">${escapeDoc(row.person.email || "No email")}</p></td>
      <td>${escapeDoc(row.person.role || "Contributor")}</td>
      <td><ul class="compact-list">${row.recommendedTitles.map(title => `<li>${escapeDoc(title)}</li>`).join("")}</ul></td>
      <td><textarea rows="6" data-training-key="${escapeDoc(row.key)}" data-training-field="assigned" ${canAdmin ? "" : "disabled"}>${escapeDoc(row.assigned)}</textarea></td>
      <td><input type="date" data-training-key="${escapeDoc(row.key)}" data-training-field="dueDate" value="${escapeDoc(row.dueDate)}" ${canAdmin ? "" : "disabled"}></td>
      <td>
        <select data-training-key="${escapeDoc(row.key)}" data-training-field="status" ${canAdmin ? "" : "disabled"}>
          ${["Not started","Assigned","In progress","Completed","Needs follow-up"].map(status => `<option ${row.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
        <input data-training-key="${escapeDoc(row.key)}" data-training-field="verification" value="${escapeDoc(row.verification)}" placeholder="Verified by / evidence" ${canAdmin ? "" : "disabled"}>
      </td>
      <td><textarea rows="4" data-training-key="${escapeDoc(row.key)}" data-training-field="notes" placeholder="Follow-up support, coaching, office hours, refresher needs" ${canAdmin ? "" : "disabled"}>${escapeDoc(row.notes)}</textarea></td>
    </tr>`).join("");
}

function learningProgressCards(state) {
  const progress = state.learningProgress || {};
  const entries = learningModules
    .map(module => ({ module, record: progress[module.id] || {} }))
    .filter(item => item.record.quizScore !== undefined || item.record.exerciseSavedAt);
  if (!entries.length) {
    return `<p class="plain-meta">No quiz or exercise progress has been saved in this browser yet. Open a learning module, complete the knowledge check, and save the practical exercise evidence.</p>`;
  }
  return `<div class="org-grid training-progress-grid">${entries.map(({ module, record }) => `
    <article>
      <h3>${escapeDoc(module.title)}</h3>
      <p><strong>Status:</strong> ${record.completed ? "Complete" : "In progress"}</p>
      <p><strong>Quiz:</strong> ${record.quizScore !== undefined ? `${record.quizScore} / ${record.quizTotal || 5}` : "Not taken"}</p>
      <p><strong>Exercise:</strong> ${record.exerciseSavedAt ? `Evidence saved ${escapeDoc(record.exerciseSavedAt)}` : "No evidence saved"}</p>
      <a href="#/learn/${module.id}">Open module</a>
    </article>`).join("")}</div>`;
}

function renderOrganizationTrainingHub() {
  const { state, organization, isOrgAdmin } = organizationHubContext();
  const rows = organizationTrainingAssignments(state);
  const assigned = rows.filter(row => row.status !== "Not started").length;
  const completed = rows.filter(row => row.status === "Completed").length;
  const followUp = rows.filter(row => row.status === "Needs follow-up").length;
  main.innerHTML = pageIntro("Organization Training Assignments", "Assign learning modules to organization members based on role, track completion standards and deadlines, and document verification or follow-up support needs.") + `
    <section class="member-dashboard panel org-dashboard-hero">
      <div class="org-workspace-header">
        <div>
          <p class="eyebrow">Learning Module Assignment Center</p>
          <h2>${organization.name || "Organization training workspace"}</h2>
          <p>The system recommends learning modules by organization role. Organization Administrators can adjust assignments based on the member's responsibilities, current projects, governance participation, and deployment timeline.</p>
        </div>
        <span class="status-label">${isOrgAdmin ? "Administrator controls" : "View only"}</span>
      </div>
      <div class="member-stats">
        <article><strong>${rows.length}</strong><span>Organization members</span></article>
        <article><strong>${assigned}</strong><span>Assigned or active</span></article>
        <article><strong>${completed}</strong><span>Completed</span></article>
        <article><strong>${followUp}</strong><span>Need follow-up</span></article>
      </div>
      <div class="button-row"><button class="btn primary small" type="button" onclick="saveOrganizationTrainingAssignmentsFromForm()" ${isOrgAdmin ? "" : "disabled"}>Save Training Assignments</button><a class="btn small" href="#/organization">Back to Dashboard</a><a class="btn small" href="#/learn">Open Learning Modules</a><a class="btn small" href="#/toolkit/28">Open Tool 28</a></div>
      ${isOrgAdmin ? "" : `<div class="member-access-note locked">Only Organization Administrators can assign modules, change deadlines, or verify completion. Other roles can view the assignment model in this static preview.</div>`}
    </section>

    <section class="panel">
      <div class="org-workspace-header">
        <div>
          <p class="eyebrow">Role-Based Recommendations</p>
          <h2>Training assignment tracker</h2>
          <p>Recommended modules come from the member's organization role. Administrators can add or remove modules in the assignment box when a person needs more specialized training.</p>
        </div>
      </div>
      <div class="table-wrap org-tracker-table"><table class="organization-workplan-table training-assignment-table">
        <thead><tr><th>Member</th><th>Role</th><th>Recommended modules</th><th>Assigned modules</th><th>Due date</th><th>Status / verification</th><th>Follow-up notes</th></tr></thead>
        <tbody>${organizationTrainingAssignmentRows(state, isOrgAdmin)}</tbody>
      </table></div>
    </section>

    <section class="panel">
      <h2>Recommendation Logic</h2>
      <div class="org-grid">
        ${Object.entries(organizationTrainingRecommendations).map(([role, moduleIds]) => `
          <article>
            <h3>${role}</h3>
            <ul class="compact-list">${moduleIds.map(id => `<li>${escapeDoc(moduleTitleById(id))}</li>`).join("")}</ul>
          </article>`).join("")}
      </div>
    </section>

    <section class="panel">
      <h2>Saved Quiz and Exercise Progress</h2>
      <p>In this static preview, quiz scores and exercise evidence are saved in the current browser for the current member profile. In production, these records should attach to each signed-in user and roll up to the administrator dashboard.</p>
      ${learningProgressCards(state)}
    </section>
  </section>`;
}

function renderOrganizationWorkplan() {
  const { state, latestAssessment, trackedItems, completed, blocked, dueSoon, percent, isOrgAdmin } = organizationHubContext();
  main.innerHTML = pageIntro("Organization Implementation Workplan", "Use one integrated tracker for all plays and tools, including assessment priority, owners, status, deadlines, and notes.") + `
    <section class="member-dashboard panel org-dashboard-hero">
      <div>
        <p class="eyebrow">Integrated Workplan</p>
        <h2>Plays and tools in one tracker</h2>
        <p>${latestAssessment ? `Built from the complete framework and prioritized by the saved readiness assessment: ${latestAssessment.score} / 100, ${latestAssessment.level}.` : "The full framework is shown now. Save a readiness assessment to mark recommended plays and tools."}</p>
        <div class="button-row"><button class="btn primary small" type="button" onclick="saveOrganizationDashboardFromForm()">Save Workplan</button><button class="btn small" type="button" onclick="downloadOrganizationWorkplan('xlsx')">Download Excel</button><button class="btn small" type="button" onclick="downloadOrganizationWorkplan('csv')">Download CSV</button></div>
      </div>
      <div class="member-stats">
        <article><strong>${percent}%</strong><span>Overall progress</span></article>
        <article><strong>${completed}</strong><span>Completed items</span></article>
        <article><strong>${blocked}</strong><span>Blocked items</span></article>
        <article><strong>${dueSoon}</strong><span>Due within 30 days</span></article>
      </div>
    </section>
    ${organizationChangeManagementDashboard(state)}
    ${organizationTrainingPlanDashboard(state)}
    <section class="panel">
      <div class="org-workspace-header">
        <div>
          <p class="eyebrow">Assessment-Based Assignments</p>
          <h2>Integrated play and tool tracker</h2>
          <p>Track the active organization plan. Organization Administrators can remove plays and tools that are not part of this organization's path and restore them later if priorities change.</p>
        </div>
        <a class="btn small" href="#/organization">Back to Dashboard</a>
      </div>
      <div class="table-wrap org-tracker-table"><table class="organization-workplan-table">
        <thead><tr><th>Level</th><th>Play / nested tool</th><th>Priority</th><th>Lead</th><th>Status</th><th>Deadline</th><th>Notes</th><th>Plan</th></tr></thead>
        <tbody>${organizationIntegratedTrackingRows(state)}</tbody>
      </table></div>
    </section>
    <section class="panel">
      <div class="org-workspace-header">
        <div>
          <p class="eyebrow">Plan Configuration</p>
          <h2>Removed plays and tools</h2>
          <p>${isOrgAdmin ? "Restore items if they should be added back into this organization workplan." : "Only Organization Administrators can add or remove plays and tools from the organization workplan."}</p>
        </div>
      </div>
      ${organizationRemovedPlanControls(state, isOrgAdmin)}
    </section>
  </section>`;
}

function organizationWorkplanExportRows(state) {
  return organizationWorkplanItems(state).flatMap(play => {
    const playSaved = organizationDashboardItem(state, "play", play.id);
    const playRow = {
      Level: "Play",
      Number: play.id,
      Item: play.label,
      "Parent Play": "",
      Priority: play.recommended ? "Recommended by readiness assessment" : "Supporting / full framework item",
      Lead: playSaved.owner || "",
      Status: playSaved.status || "Not started",
      Deadline: playSaved.dueDate || "",
      Notes: playSaved.notes || ""
    };
    const milestoneRows = play.milestones.map(milestone => {
      const saved = organizationDashboardItem(state, "milestone", `${play.id}-${milestone.id}`);
      return {
        Level: "Milestone",
        Number: `${play.id}.${milestone.id.replace(/^default-/, "")}`,
        Item: milestone.text,
        "Parent Play": play.label,
        Priority: play.recommended ? "Recommended play milestone" : "Supporting play milestone",
        Lead: saved.owner || "",
        Status: saved.status || "Not started",
        Deadline: saved.dueDate || "",
        Notes: saved.notes || ""
      };
    });
    const toolRows = play.tools.map(tool => {
      const saved = organizationDashboardItem(state, "tool", tool.id);
      return {
        Level: "Tool",
        Number: tool.id,
        Item: tool.label,
        "Parent Play": `Play ${play.id}: ${play.parentPlayTitle || play.label.replace(/^Play \d+:\s*/, "")}`,
        Priority: tool.recommended ? "Recommended by readiness assessment" : "Supporting / full toolkit item",
        Lead: saved.owner || "",
        Status: saved.status || "Not started",
        Deadline: saved.dueDate || "",
        Notes: saved.notes || ""
      };
    });
    return [playRow, ...milestoneRows, ...toolRows];
  });
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function downloadOrganizationWorkplan(format) {
  const state = getMemberState();
  collectOrganizationDashboardFromDom(state);
  setMemberState(state);
  const organization = state.organization || {};
  const rows = organizationWorkplanExportRows(state);
  const headers = ["Level","Number","Item","Parent Play","Priority","Lead","Status","Deadline","Notes"];
  const filenameBase = `${(organization.name || "ai-playbook-organization").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-implementation-workplan`;
  if (format === "csv") {
    const csv = [headers.map(csvCell).join(","), ...rows.map(row => headers.map(header => csvCell(row[header])).join(","))].join("\r\n");
    downloadBlob(`${filenameBase}.csv`, csv, "text/csv;charset=utf-8");
    return;
  }
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    body { font-family: Aptos, Calibri, Arial, sans-serif; color: #17324d; }
    h1 { color: #003a70; }
    table { border-collapse: collapse; width: 100%; }
    th { background: #005baa; color: #fff; text-align: left; }
    th, td { border: 1px solid #b7d5ec; padding: 8px; vertical-align: top; }
    tr:nth-child(even) td { background: #f3f8fc; }
  </style></head><body>
    <h1>AI Playbook Organization Implementation Workplan</h1>
    <p><strong>Organization:</strong> ${escapeDoc(organization.name || "Organization workspace")}</p>
    <p><strong>Exported:</strong> ${escapeDoc(new Date().toLocaleString())}</p>
    <table><thead><tr>${headers.map(header => `<th>${escapeDoc(header)}</th>`).join("")}</tr></thead><tbody>
      ${rows.map(row => `<tr>${headers.map(header => `<td>${escapeDoc(row[header])}</td>`).join("")}</tr>`).join("")}
    </tbody></table>
  </body></html>`;
  downloadBlob(`${filenameBase}.xls`, html, "application/vnd.ms-excel;charset=utf-8");
}

function saveOrganizationDashboardFromForm() {
  const state = collectOrganizationDashboardFromDom(getMemberState());
  setMemberState(state);
  route();
}

function saveOrganizationTrainingAssignmentsFromForm() {
  const state = getMemberState();
  if (!isOrganizationAdmin(state)) return;
  const assignments = { ...(state.organizationTrainingAssignments || {}) };
  document.querySelectorAll("[data-training-key][data-training-field]").forEach(field => {
    const key = field.dataset.trainingKey;
    const name = field.dataset.trainingField;
    assignments[key] = assignments[key] || {};
    assignments[key][name] = field.value;
  });
  state.organizationTrainingAssignments = assignments;
  setMemberState(state);
  renderOrganizationTrainingHub();
}

function saveOrganizationMembersFromForm() {
  const state = getMemberState();
  if (!isOrganizationAdmin(state)) return;
  const members = [...(state.teamMembers || [])];
  document.querySelectorAll("[data-member-index][data-member-field]").forEach(field => {
    const index = Number(field.dataset.memberIndex);
    const key = field.dataset.memberField;
    members[index] = members[index] || {};
    members[index][key] = field.value;
  });
  state.teamMembers = members;
  setMemberState(state);
  renderOrganizationHub();
}

function saveOrganizationInvitationsFromForm() {
  const state = getMemberState();
  if (!isOrganizationAdmin(state)) return;
  const invitations = [...(state.organizationInvitations || [])];
  document.querySelectorAll("[data-invite-index][data-invite-field]").forEach(field => {
    const index = Number(field.dataset.inviteIndex);
    const key = field.dataset.inviteField;
    invitations[index] = invitations[index] || {};
    invitations[index][key] = field.value;
  });
  state.organizationInvitations = invitations;
  invitations.filter(invite => invite.status === "Accepted").forEach(invite => {
    state.teamMembers = state.teamMembers || [];
    const existing = state.teamMembers.find(member => member.email && invite.email && member.email.toLowerCase() === invite.email.toLowerCase());
    if (existing) {
      existing.name = invite.name || existing.name;
      existing.role = invite.role || existing.role;
      existing.status = "Approved";
      existing.notes = existing.notes || "Accepted administrator invitation.";
    } else {
      state.teamMembers.push({
        name: invite.name || "Accepted member",
        email: invite.email || "",
        role: invite.role || "Contributor",
        status: "Approved",
        notes: "Accepted administrator invitation."
      });
    }
  });
  setMemberState(state);
  renderOrganizationHub();
}

function createOrganizationInvitation() {
  const state = getMemberState();
  if (!isOrganizationAdmin(state)) return;
  const name = document.getElementById("new-org-invite-name").value.trim();
  const email = document.getElementById("new-org-invite-email").value.trim();
  if (!email) return;
  const token = `INV-${Date.now().toString(36).toUpperCase()}`;
  state.organizationInvitations = [
    ...(state.organizationInvitations || []),
    {
      name,
      email,
      role: document.getElementById("new-org-invite-role").value,
      status: "Pending invitation",
      expires: document.getElementById("new-org-invite-expires").value,
      token
    }
  ];
  setMemberState(state);
  renderOrganizationHub();
}

function addOrganizationMemberRequest() {
  const state = getMemberState();
  const name = document.getElementById("new-org-member-name").value.trim();
  const email = document.getElementById("new-org-member-email").value.trim();
  if (!name && !email) return;
  const requestedRole = document.getElementById("new-org-member-role").value;
  state.teamMembers = [
    ...(state.teamMembers || []),
    {
      name: name || "Pending member",
      email,
      role: requestedRole,
      status: isOrganizationAdmin(state) ? "Approved" : "Pending administrator approval",
      notes: document.getElementById("new-org-member-notes").value.trim()
    }
  ];
  setMemberState(state);
  renderOrganizationHub();
}

function memberWorkspaceExportSections(state) {
  const profile = state.profile || {};
  const organization = state.organization || {};
  const agency = state.agencyProfile || {};
  const plan = state.implementationPlan || {};
  const savedAssessments = Array.isArray(state.savedAssessments) ? state.savedAssessments : [];
  const savedTools = Array.isArray(state.savedTools) ? state.savedTools : [];
  const forumPosts = Array.isArray(state.forumPosts) ? state.forumPosts : [];
  const memberPosts = forumPosts.filter(p => !String((p || {}).id).startsWith("seed"));
  const ratings = state.ratings || {};
  const trainingAssignments = organizationTrainingAssignments(state);
  const learningProgressLines = Object.entries(state.learningProgress || {}).length
    ? Object.entries(state.learningProgress || {}).map(([moduleId, record]) => {
      const module = learningModules.find(item => item.id === moduleId);
      return `${module?.title || moduleId} | Status: ${record.completed ? "Complete" : "In progress"} | Quiz: ${record.quizScore !== undefined ? `${record.quizScore} / ${record.quizTotal || 5}` : "Not taken"} | Quiz date: ${record.quizCompletedAt || "No date"} | Exercise saved: ${record.exerciseSavedAt || "No"} | Evidence: ${record.exerciseEvidence || "No evidence"}`;
    })
    : ["No learning module quiz or exercise progress saved."];
  const ratingLines = Object.values(ratings).length
    ? Object.values(ratings).map(item => `Tool ${(item || {}).toolId || "not specified"}: ${(item || {}).title || "Untitled tool"} | ${(item || {}).stars || "No"} / 5 stars${(item || {}).comment ? ` | Review: ${(item || {}).comment}` : ""} | ${(item || {}).savedAt || "No date"}`)
    : ["No tool ratings saved."];
  const bookmarks = Array.isArray(state.bookmarks) ? state.bookmarks : [];
  const notifications = Array.isArray(state.notifications) ? state.notifications : [];
  return [
    { heading: "Member Profile", rows: [
      ["Name", memberDisplayName(profile)],
      ["Email", profile.email || "Not provided"],
      ["Agency / organization", profile.agency || "Not provided"],
      ["Role", profile.role || "Not provided"],
      ["Account type", state.accountType || "Individual"]
    ] },
    { heading: "Organization Workspace", rows: [
      ["Organization name", organization.name || "Not configured"],
      ["Organization type", organization.type || "Not provided"],
      ["Organization role", organization.role || "Not provided"],
      ["Security / access notes", organization.security || "Not provided"],
      ["Access model", "Individual accounts retain personal workspaces. Organization administrators approve workspace access, assign roles, and control access to shared assessments, tools, implementation plans, governance records, and exports."]
    ] },
    { heading: "Agency Profile", rows: [
      ["Department type", agency.type || "Not provided"],
      ["Jurisdiction size", agency.size || "Not provided"],
      ["Current AI maturity", agency.maturity || "Not selected"],
      ["Priority programs", agency.priorities || "Not provided"],
      ["Governance status", agency.governance || "Not provided"]
    ] },
    { heading: "Implementation Plan", rows: [
      ["Priority plays", plan.priorityPlays || "Not provided"],
      ["Owners and due dates", plan.owners || "Not provided"],
      ["Status notes", plan.status || "Not provided"],
      ["Next review date", plan.reviewDate || "Not provided"]
    ] },
    { heading: "Organization Training Assignments", lines: trainingAssignments.length ? trainingAssignments.map(item => `${item.person.name || "Unnamed member"} | ${item.person.role || "Contributor"} | Recommended: ${item.recommendedTitles.join("; ")} | Assigned: ${item.assigned || "Not assigned"} | Due: ${item.dueDate || "No date"} | Status: ${item.status || "Not started"} | Verification: ${item.verification || "Not verified"} | Notes: ${item.notes || "No notes"}`) : ["No organization training assignments saved."] },
    { heading: "Learning Module Progress", lines: learningProgressLines },
    { heading: "Saved Assessments", lines: savedAssessments.length ? savedAssessments.map(item => `${(item || {}).title || "Assessment"} | ${(item || {}).savedAt || "No date"} | ${(item || {}).score || "No score"} / 100 | ${(item || {}).level || "No level"}`) : ["No saved assessments."] },
    { heading: "Saved Tools", lines: savedTools.length ? savedTools.map(item => `Tool ${(item || {}).toolId || "not specified"}: ${(item || {}).title || "Untitled tool"} | ${(item || {}).savedAt || "No date"}`) : ["No saved tools."] },
    { heading: "Community Activity and Ratings", lines: [
      `${memberPosts.length} member forum posts saved in this browser.`,
      `${Object.keys(ratings).length} tools rated.`,
      ...ratingLines
    ] },
    { heading: "Bookmarks and Notifications", lines: [
      ...(bookmarks.length ? bookmarks.map(item => `Bookmark: ${(item || {}).title || String(item || "Untitled bookmark")} (${(item || {}).href || "No link"})`) : ["No custom bookmarks saved."]),
      ...(notifications.length ? notifications.map(item => `Notification: ${item}`) : ["No custom notifications saved."])
    ] }
  ];
}

async function downloadMemberWorkspaceExport() {
  const state = getMemberState();
  const sections = memberWorkspaceExportSections(state);
  const title = "Member and Organization Workspace Export";
  const subtitle = "Saved member, organization, planning, and collaboration workspace summary.";
  const metaRows = [
    ["Exported", new Date().toLocaleString()],
    ["Product", "AI Playbook and Toolkit for Public Health Departments"],
    ["Member", memberDisplayName(state.profile)]
  ];
  const logo = await getLogoDataUrl();
  const word = buildProfessionalWordHtml(title, "Workspace Export", subtitle, metaRows, sections, logo);
  const pdf = await buildProfessionalPdf(title, "Workspace Export", subtitle, metaRows, sections);
  const zip = buildZipArchive([
    { name: "ai-playbook-member-workspace-export.doc", content: word },
    { name: "ai-playbook-member-workspace-export.pdf", content: pdf }
  ]);
  downloadBlob("ai-playbook-member-workspace-documents.zip", zip, "application/zip");
}

function renderCommunity(topicFilter = "") {
  const state = getMemberState();
  const topics = ["All","Governance","Readiness","Workforce","Use cases","Funding","Deployment","Equity","Privacy","Evaluation","Other"];
  const activeTopic = topicFilter ? decodeURIComponent(topicFilter) : "All";
  const posts = state.forumPosts
    .filter(post => activeTopic === "All" || post.topic === activeTopic)
    .sort((a,b) => String(b.date).localeCompare(String(a.date)));
  main.innerHTML = pageIntro("Community Exchange & Forum", "Ask questions, exchange implementation lessons, share examples, and learn how other public health agencies are applying the AI Playbook.") + `
    <section class="community-hero panel">
      <div>
        <p class="eyebrow">Member Community</p>
        <h2>Peer learning for responsible public health AI</h2>
        <p>Use this space to discuss governance, readiness, funding, deployment, equity monitoring, privacy questions, tool use, and lessons learned from pilots. Posts in this static preview are saved locally in your browser.</p>
      </div>
      <aside class="callout blue">
        <strong>${state.profile ? `Posting as ${memberDisplayName(state.profile)}` : "Create a member profile"}</strong>
        <p>${state.profile ? `${state.profile.agency || "Public health member"} · ${state.profile.role || "Member"}` : "A profile helps attach your name, organization, and role to local preview posts."}</p>
        <a class="btn small" href="#/member-info">${state.profile ? "Edit profile" : "Create profile"}</a>
      </aside>
    </section>
    <div class="community-layout">
      <aside class="filter-panel">
        <h2>Topics</h2>
        <div class="side-list">
          ${topics.map(topic=>`<button class="${topic===activeTopic ? "active" : ""}" onclick="location.hash='#/community/${encodeURIComponent(topic === "All" ? "" : topic)}'">${topic}</button>`).join("")}
        </div>
        <div class="callout" style="margin-top:1.25rem">Production note: connect this area to authenticated accounts, moderation, notifications, and agency-safe data retention rules.</div>
      </aside>
      <section>
        <form id="forum-form" class="panel forum-form">
          <h2>Start a Discussion</h2>
          <div class="form-grid">
            <label>Topic<select id="forum-topic">${topics.filter(t=>t!=="All").map(t=>`<option>${t}</option>`).join("")}</select></label>
            <label>Title<input id="forum-title" placeholder="Question or discussion title"></label>
          </div>
          <label>Message<textarea id="forum-body" rows="5" placeholder="Share context, what you have tried, and what kind of input would help."></textarea></label>
          <div class="button-row"><button class="btn primary" type="submit">Post to Forum</button></div>
        </form>
        <div class="forum-toolbar">
          <h2>${activeTopic === "All" ? "Recent Discussions" : `${activeTopic} Discussions`}</h2>
          <span class="plain-meta">${posts.length} threads</span>
        </div>
        <div class="forum-list">
          ${posts.map(post=>`
            <article class="forum-post">
              <div class="forum-post-header">
                <span class="plain-meta">${post.topic}</span>
                <span>${post.date}</span>
              </div>
              <h3>${post.title}</h3>
              <p>${post.body}</p>
              <footer>Posted by <strong>${post.author}</strong></footer>
            </article>`).join("") || `<article class="panel"><h3>No threads yet</h3><p>Start the first discussion for this topic.</p></article>`}
        </div>
      </section>
    </div>
  </section>`;
  document.getElementById("forum-form").addEventListener("submit", event => {
    event.preventDefault();
    saveForumPost();
  });
}

function renderCaseStudies() {
  main.innerHTML = pageIntro("Case Studies", "Generative AI, LLM, RAG, and agentic AI examples from public health and health agency contexts. Each case study uses the same structure so agencies can compare the public health challenge, AI-enabled workflow, data inputs, outcomes, and governance considerations.") + `
    <div class="case-study-list">
      ${caseStudies.map(study=>`
        <article class="panel case-study-card">
          <div class="case-study-header">
            <div>
              <p class="eyebrow">${study.agency}</p>
              <h2>${study.title}</h2>
            </div>
            <span class="phase-tag">${study.type}</span>
          </div>
          <div class="case-study-grid">
            <section><h3>Challenge</h3><p>${study.challenge}</p></section>
            <section><h3>AI Solution</h3><p>${study.solution}</p></section>
            <section><h3>Data Sources</h3><p>${study.data}</p></section>
            <section><h3>Workflow Impact</h3><p>${study.workflow}</p></section>
            <section><h3>Outcomes</h3><p>${study.outcomes}</p></section>
            <section><h3>Ethical / Privacy</h3><p>${study.ethics}</p></section>
          </div>
          <section class="content-section">
            <h3>Sources</h3>
            <ul class="compact-list">${study.sources.map(([label, url])=>`<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a></li>`).join("")}</ul>
          </section>
        </article>`).join("")}
    </div>
    <section class="promising-practices">
      <div class="section-heading">
        <p class="eyebrow">Adapted Practice Examples</p>
        <h2>Promising Practices: Human-Centered AI Use Cases in Public Health</h2>
        <p>The following promising practices illustrate how public health agencies can apply AI-enabled analytics and decision-support tools while maintaining human oversight, privacy protections, and community accountability. These examples are adapted to align with the plays and tools in this playbook. They are not presented as exact replications of a single documented implementation; rather, they synthesize real-world public health AI concepts, including syndromic surveillance, outbreak detection, tribal data sovereignty, and chronic disease risk stratification.</p>
      </div>
      <div class="case-study-list">
        ${promisingPractices.map(practice=>`
          <article class="panel case-study-card promising-practice-card">
            <div class="case-study-header">
              <div>
                <p class="eyebrow">${practice.subtitle}</p>
                <h2>${practice.title}</h2>
              </div>
              <span class="phase-tag">Promising Practice</span>
            </div>
            <div class="case-study-grid">
              <section><h3>Challenge</h3><p>${practice.challenge}</p></section>
              <section><h3>AI Solution</h3><p>${practice.solution}</p></section>
              <section><h3>Data Sources</h3><p>${practice.data}</p></section>
              <section><h3>Workflow Impact</h3><p>${practice.workflow}</p></section>
              <section><h3>Outcomes</h3><p>${practice.outcomes}</p></section>
              <section><h3>Ethical / Privacy</h3><p>${practice.ethics}</p></section>
            </div>
            <section class="content-section">
              <h3>How It Could Become Agentic</h3>
              <p>${practice.agentic}</p>
            </section>
            <section class="content-section">
              <h3>Reference / Source Basis</h3>
              <p>${practice.reference}</p>
            </section>
          </article>`).join("")}
      </div>
    </section>
  </section>`;
}

function renderReferences() {
  main.innerHTML = pageIntro("References and Source Material", "Reference points drawn from the original playbook and toolkit documents, organized so agencies can see the frameworks, federal programs, partner networks, privacy requirements, and AI ecosystem examples that informed the site.") + `
    <section class="panel references-intro">
      <p>This page summarizes frameworks, programs, organizations, compliance concepts, and AI ecosystem examples that support responsible AI planning and implementation. It is intended as a practical resource index, not a substitute for legal, procurement, privacy, or grant-specific review.</p>
      <div class="button-row">
        <a class="btn primary" href="downloads/AI_Playbook_and_Toolkit_Website_Complete_Reference.pdf">Complete Reference PDF</a>
        <a class="btn" href="downloads/AI_Playbook_and_Toolkit_Website_Complete_Reference.docx">Complete Reference Word</a>
      </div>
    </section>
    <div class="references-grid">
      ${references.map(group=>`
        <section class="reference-group">
          <h2>${group.category}</h2>
          <div class="reference-list">
            ${group.items.map(([title, note, url])=>`
              <article class="reference-item">
                <h3><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
                <p>${note}</p>
              </article>`).join("")}
          </div>
        </section>`).join("")}
    </div>
  </section>`;
}

function renderNews() {
  main.innerHTML = pageIntro("In the News", "Curated developments in generative and agentic AI that may affect state, territorial, local, and tribal public health departments.") + `
    <section class="panel news-intro">
      <h2>Curated AI News Watch</h2>
      <p>Use this page to follow selected developments that affect responsible AI planning, procurement, governance, workforce preparation, privacy, communications, and public health operations.</p>
    </section>
    <section class="news-grid" aria-label="Curated AI news">
      ${newsItems.map(item=>`
        <article class="news-card">
          <div class="news-card-header">
            <span class="news-tag">${item.category}</span>
            <span class="news-date">${item.date}</span>
          </div>
          <h2><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a></h2>
          <p class="news-meta">${item.source}</p>
          <p>${item.summary}</p>
          <div class="news-relevance">
            <h3>Why it matters for public health</h3>
            <p>${item.relevance}</p>
          </div>
        </article>`).join("")}
    </section>
  </section>`;
}

function saveForumPost() {
  const title = document.getElementById("forum-title").value.trim();
  const body = document.getElementById("forum-body").value.trim();
  if (!title || !body) return;
  const state = getMemberState();
  state.forumPosts.push({
    id: `post-${Date.now()}`,
    author: memberDisplayName(state.profile),
    topic: document.getElementById("forum-topic").value,
    title,
    body,
    date: new Date().toISOString().slice(0, 10)
  });
  setMemberState(state);
  location.hash = `#/community/${encodeURIComponent(document.getElementById("forum-topic").value)}`;
  route();
}

function renderContribute() {
  main.innerHTML = pageIntro("Contribute / Feedback", "Help improve the AI Playbook for Public Health by sharing feedback, implementation examples, tools, use cases, or community of practice updates.") + `
    <div class="two-col">
      <form class="panel contribute-form">
        <h2>Submit a Contribution</h2>
        <label>Contribution type<select><option>Submit feedback</option><option>Suggest a tool</option><option>Share an implementation example</option><option>Share a public health AI use case</option><option>Join updates or community of practice</option></select></label>
        <label>Name<input autocomplete="name"></label>
        <label>Email<input type="email" autocomplete="email"></label>
        <label>Message<textarea rows="7" placeholder="Share enough context for follow-up."></textarea></label>
        <button class="btn primary" type="button">Prepare submission</button>
      </form>
      <aside class="panel">
        <h2>Contribution Paths</h2>
        <ul>
          <li>Submit feedback on play sequencing or tool usability.</li>
          <li>Suggest a missing checklist, template, or governance artifact.</li>
          <li>Share a public health implementation example.</li>
          <li>Share a generative or agentic AI use case.</li>
          <li>Join updates or a peer learning community.</li>
        </ul>
      </aside>
    </div>
  </section>`;
}

function renderContact() {
  main.innerHTML = pageIntro("Contact Us", "Use this page for questions about the AI Playbook and Toolkit, membership, organization access, implementation support, training materials, or technical issues with the website.") + `
    <div class="two-col">
      <form class="panel contribute-form">
        <h2>Send a Message</h2>
        <label>Inquiry type<select>
          <option>General question</option>
          <option>Membership or account access</option>
          <option>Organization hub or administrator access</option>
          <option>Tool or download issue</option>
          <option>Training or implementation support</option>
          <option>Case study or resource suggestion</option>
        </select></label>
        <label>First name<input autocomplete="given-name"></label>
        <label>Last name<input autocomplete="family-name"></label>
        <label>Organization<input autocomplete="organization" placeholder="Health department, agency, partner organization"></label>
        <label>Email<input type="email" autocomplete="email"></label>
        <label>Message<textarea rows="7" placeholder="Describe what you need, including the page, tool, or organization workspace if relevant."></textarea></label>
        <button class="btn primary" type="button">Prepare message</button>
        <p class="tool-note">This static preview prepares the contact workflow for production. In the deployed site, this button should send the message to the support inbox or ticketing system.</p>
      </form>
      <aside class="panel">
        <h2>Contact Paths</h2>
        <div class="tool-discussion-list">
          <article class="tool-discussion-item">
            <h3>Website or download help</h3>
            <p>Report broken links, download issues, form problems, or access problems with member-gated tools.</p>
          </article>
          <article class="tool-discussion-item">
            <h3>Membership and organization access</h3>
            <p>Ask about individual accounts, organization accounts, administrator approval, role assignments, or shared workspaces.</p>
          </article>
          <article class="tool-discussion-item">
            <h3>Implementation and training</h3>
            <p>Request support using the plays, readiness assessment, training modules, organization workplan, or tool completion tracker.</p>
          </article>
          <article class="tool-discussion-item">
            <h3>Content suggestions</h3>
            <p>Suggest case studies, resources, public health examples, or improvements to the playbook and toolkit.</p>
          </article>
        </div>
      </aside>
    </div>
  </section>`;
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain" });
  downloadBlob(filename, blob);
}

async function runDocumentDownload(downloadFn, label = "Document", statusId = "tool-save-status") {
  const status = document.getElementById(statusId);
  try {
    if (status) status.textContent = `Preparing ${label.toLowerCase()}...`;
    await downloadFn();
    if (status) status.textContent = `${label} download started. If you do not see it, check your browser downloads bar or downloads folder.`;
  } catch (error) {
    console.error(`${label} download failed`, error);
    const message = error?.message ? ` Details: ${error.message}` : "";
    if (status) status.textContent = `${label} could not be generated.${message}`;
  }
}

function bytesFromContent(content) {
  if (content instanceof Uint8Array) return content;
  return new TextEncoder().encode(String(content || ""));
}

function crc32(bytes) {
  let crc = -1;
  for (const byte of bytes) {
    crc ^= byte;
    for (let i = 0; i < 8; i++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return (crc ^ -1) >>> 0;
}

function writeUint16(target, offset, value) {
  target[offset] = value & 255;
  target[offset + 1] = (value >>> 8) & 255;
}

function writeUint32(target, offset, value) {
  target[offset] = value & 255;
  target[offset + 1] = (value >>> 8) & 255;
  target[offset + 2] = (value >>> 16) & 255;
  target[offset + 3] = (value >>> 24) & 255;
}

function concatBytes(parts) {
  const total = parts.reduce((sum, part) => sum + part.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  parts.forEach(part => {
    out.set(part, offset);
    offset += part.length;
  });
  return out;
}

function buildZipArchive(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  files.forEach(file => {
    const nameBytes = encoder.encode(file.name);
    const data = bytesFromContent(file.content);
    const crc = crc32(data);
    const local = new Uint8Array(30 + nameBytes.length);
    writeUint32(local, 0, 0x04034b50);
    writeUint16(local, 4, 20);
    writeUint16(local, 6, 0);
    writeUint16(local, 8, 0);
    writeUint16(local, 10, 0);
    writeUint16(local, 12, 0);
    writeUint32(local, 14, crc);
    writeUint32(local, 18, data.length);
    writeUint32(local, 22, data.length);
    writeUint16(local, 26, nameBytes.length);
    writeUint16(local, 28, 0);
    local.set(nameBytes, 30);
    localParts.push(local, data);

    const central = new Uint8Array(46 + nameBytes.length);
    writeUint32(central, 0, 0x02014b50);
    writeUint16(central, 4, 20);
    writeUint16(central, 6, 20);
    writeUint16(central, 8, 0);
    writeUint16(central, 10, 0);
    writeUint16(central, 12, 0);
    writeUint16(central, 14, 0);
    writeUint32(central, 16, crc);
    writeUint32(central, 20, data.length);
    writeUint32(central, 24, data.length);
    writeUint16(central, 28, nameBytes.length);
    writeUint16(central, 30, 0);
    writeUint16(central, 32, 0);
    writeUint16(central, 34, 0);
    writeUint16(central, 36, 0);
    writeUint32(central, 38, 0);
    writeUint32(central, 42, offset);
    central.set(nameBytes, 46);
    centralParts.push(central);
    offset += local.length + data.length;
  });
  const centralOffset = offset;
  const centralDirectory = concatBytes(centralParts);
  const end = new Uint8Array(22);
  writeUint32(end, 0, 0x06054b50);
  writeUint16(end, 8, files.length);
  writeUint16(end, 10, files.length);
  writeUint32(end, 12, centralDirectory.length);
  writeUint32(end, 16, centralOffset);
  writeUint16(end, 20, 0);
  return concatBytes([...localParts, centralDirectory, end]);
}

function downloadBlob(filename, content, type = "") {
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

window.addEventListener("hashchange", route);
route();
