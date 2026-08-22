# AI Playbook Knowledge Platform Architecture

Status: Version 1 recommendation  
Baseline reviewed: live site and `main` repository content, 2026-08-16  
Authoritative content source: [AI Playbook and Toolkit website](https://soperpa2.github.io/AI-Playbook/)

This documentation defines how the current AI Playbook website can evolve into a maintainable public health AI knowledge platform. It describes a target model, not a claim that every capability is already implemented. The live website remains the editorial source of truth until structured content migration is accepted and completed.

## Documents

1. [Platform Architecture v1](platform-architecture-v1.md) — system boundaries, principles, components, delivery model, and non-functional requirements.
2. [Content Model Specification](content-model-specification.md) — canonical content types, fields, validation, and compatibility rules.
3. [Information Architecture](information-architecture.md) — audiences, task-based navigation, sitemap, findability, and URL guidance.
4. [Taxonomy & Metadata Standard](taxonomy-metadata-standard.md) — controlled vocabularies, required metadata, tagging rules, and governance.
5. [Relationship Model](relationship-model.md) — entity relationships, directionality, cardinality, and integrity rules.
6. [Content Lifecycle & Governance](content-lifecycle-governance.md) — ownership, workflow, evidence review, versioning, and retirement.
7. [Implementation Roadmap](implementation-roadmap.md) — sequenced delivery, decision gates, migration, acceptance criteria, and measures.
8. [User Personas](user-personas.md) — priority users, needs, barriers, journeys, and platform implications.

9. [Essentials Edition Alignment Standard](essentials-edition-alignment.md) — shared content, edition boundaries, link rules, and current alignment status.

10. [Governmental Public Health AI News Standard](governmental-public-health-ai-news-standard.md) — inclusion criteria, source hierarchy, labeling, automation, shared-edition rules, and governance.

11. [Equity Governance Implementation Standard](equity-governance-implementation-standard.md) — WHO source foundation, lifecycle controls, tool implementation, evidence rules, and remaining recommendations.

12. [Health Data Privacy, HIPAA, and AI Implementation Standard](health-data-privacy-hipaa-ai-standard.md) — applicability, public health permissions, Tool 10 decisions, lifecycle integration, stable numbering, and source governance.

13. [Curriculum Source Alignment: 2026 Update](curriculum-source-alignment-2026.md) — updated modules, CDC/WHO/HHS source alignment, template review decisions, and publication sequencing.

14. [Essentials Edition Production Launch Plan](Essentials_Edition_Production_Launch_Plan.docx) — recommended production stack, secure accounts, multi-user persistence, security boundaries, deployment workflow, and implementation roadmap.

15. [Essentials Edition Launch Budget](Essentials_Edition_Launch_Budget.xlsx) — editable 12-month Lean, Base, and Growth budget scenarios, monthly cash flow, assumptions, sources, and model checks.

16. [Essentials Edition User Personas and Journey Maps](Essentials_Edition_User_Personas_and_Journeys.pptx) — 13 detailed persona profiles and 13 role-specific journey maps recreated with the approved persona and journey-map formats.

17. [Essentials Edition Comprehensive User Stories](Essentials_Edition_Comprehensive_User_Stories.docx) — 10 epics and 34 product-backlog stories with Given-When-Then acceptance criteria, priorities, release assumptions, dependencies, quality standards, and traceability.

18. [Essentials Edition Outreach and Communications Plan](Essentials_Edition_Outreach_and_Communications_Plan.docx) — role-stratified positioning, channels, calls to action, launch cadence, measurement, governance, and trust guardrails.

19. [Essentials Edition Government Purchasing Options](Essentials_Edition_Government_Purchasing_Options.docx) — government payment routes, procurement package, quote-to-renewal workflow, website requirements, and implementation priorities.

## Decisions at a glance

- Preserve the current 13-play PLAN–BUILD–DEPLOY–GOVERN framework and tool numbering.
- Preserve the current Project Summary/case-study presentation: Challenge, AI Solution, Data Sources, Workflow Impact, Outcomes, Ethical / Privacy considerations, and Sources. Add metadata around it; do not force a visible redesign.
- Store each content item once with a stable ID, revision metadata, source provenance, and explicit relationships.
- Generate navigation, related-content panels, search facets, crosswalks, and downloadable publications from canonical structured content.
- Separate verified case studies from synthesized “Promising Practices,” and label evidence status visibly.
- Treat personalization, organization workspaces, contribution, and authentication as application services—not as duplicated editorial content.
- Introduce the model incrementally behind the current static site; avoid a big-bang rewrite.

## Baseline observations

The repository is a static, hash-routed site. `app.js` currently combines structured arrays, long-form editorial copy, UI rendering, workspace prototypes, and client-side state. Separate data assets support curriculum and lesson crosswalks. The public experience includes Start Here, Learn, Assess, Maturity Model, Plays, Toolkit, Case Studies, My Account, Organization Hub, Community, Contribute, Contact Us, Resources, and In the News. This rich scope supports a knowledge-platform model but also makes content validation, reuse, provenance, and independent publishing harder when maintained in a single application file.

## How to use this set

Architecture and product decisions should cite the relevant document and record any exception. Proposed schema changes require an impact review covering the website, existing URLs, crosswalks, downloads, search, and the Project Summary presentation. Implementation details may evolve, but stable IDs, provenance, relationship integrity, accessibility, and editorial accountability are v1 requirements.
