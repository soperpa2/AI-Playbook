# Implementation Roadmap

## Approach

Deliver the platform as an incremental content-system migration behind the current website. Each phase ends with a decision gate and measurable acceptance criteria. Timelines are indicative and should be replanned against staffing; sequence matters more than calendar dates.

## Phase 0 — Baseline and ownership (2–3 weeks)

**Outcomes:** accepted source-of-truth policy, named owners, complete content inventory, URL/download inventory, current-site snapshots, and risk register.

- Inventory every content object embedded in `app.js`, curriculum assets, crosswalks, downloads, and navigation.
- Reconcile README counts and claims with the live site.
- Capture Project Summary presentation and representative play/tool/module fixtures.
- Establish governance roles, editorial cadence, and accessibility baseline.

**Gate:** owner signs off that the inventory represents the live authoritative site and identifies all known exceptions.

## Phase 1 — Standards and content foundation (3–5 weeks)

**Outcomes:** versioned schemas, taxonomies, relationship vocabulary, validation, contribution templates, and sample content.

- Implement common metadata and canonical types in repository-readable formats.
- Create stable ID registry and redirects manifest.
- Migrate one play, its tools, one learning module, one Project Summary, and one promising practice.
- Generate a relationship report and sample crosswalk from canonical edges.

**Gate:** automated validation passes and stakeholders approve content and visual parity, including unchanged Project Summary presentation.

## Phase 2 — Core migration and generated site (5–8 weeks)

**Outcomes:** plays, tools, learning modules, cases, resources, references, and news separated from rendering code; generated pages and crosswalks.

- Migrate in bounded batches with source-to-target reconciliation reports.
- Add preview builds, broken-link checks, accessibility checks, and fixtures.
- Preserve current routes through compatibility handling.
- Produce website and downloadable artifact manifests from content revisions.

**Gate:** 100% of in-scope records reconcile to the live baseline; no unresolved IDs; representative page tests and manual review pass.

## Phase 3 — Discovery and role pathways (4–6 weeks)

**Outcomes:** unified search, filters, related content, task-based navigation, and persona pathways.

- Generate search index and facet counts from canonical metadata.
- Implement the recommended primary navigation while preserving all destinations.
- Launch pathways for executive, epidemiology, informatics, program, technical, communications, and learner audiences first; add other roles from the persona set.
- Test with users from state, local, Tribal, territorial, and resource-constrained contexts where feasible.

**Gate:** task testing meets findability and accessibility targets; analytics and privacy review are approved.

## Phase 4 — Editorial operations and publications (3–5 weeks)

**Outcomes:** review dashboard, freshness reporting, correction workflow, accessible generated publications, and contribution workflow.

- Automate review-due and source-link reporting.
- Generate Word/PDF/data exports from canonical content with version manifests.
- Establish Project Summary verification and promising-practice disclosure checks.
- Publish contributor guidance and correction service levels.

**Gate:** one complete editorial cycle, correction drill, publication regeneration, and rollback test succeed.

## Phase 5 — Authenticated workspace decision (discovery, then staged delivery)

Do not productionize the current account and organization prototypes by simply adding a database. First complete privacy impact assessment, threat model, authorization design, tenancy model, records/retention policy, support plan, and total-cost estimate. Decide whether the user outcome justifies operating a service.

If approved, release saved items and progress before organization administration, assignments, collaboration, or sensitive assessments. Public content remains independently available.

## Workstreams and ownership

- **Content:** inventory, migration, review, evidence, publications.
- **Product/UX:** navigation, pathways, search, testing, accessibility.
- **Engineering:** schemas, build, routing, indexes, services, observability.
- **Governance:** privacy, security, equity, records, rights, corrections.
- **Operations:** ownership, cadence, training, support, funding.

## Measures

Track content coverage, schema errors, orphan relationships, overdue reviews, broken sources, accessibility defects, search success/zero results, path completion, correction time, publication parity, build reliability, and user confidence by role. Avoid vanity traffic as the primary success measure.

## Key risks and mitigations

| Risk | Mitigation |
|---|---|
| Big-bang rewrite loses content | Fixture-based incremental migration and reconciliation |
| Taxonomy becomes too complex | Start with high-value facets; steward new terms |
| Outdated or overstated evidence | Review dates, evidence tiers, claim/source links |
| Project Summary redesign disrupts comparison | Preserve current visible schema; add metadata only |
| Prototype workspace creates false expectations | Label clearly; require service readiness gate |
| Downloads diverge | Generate from canonical revisions and manifest |
| Limited maintenance capacity | Assign owners, automate checks, reduce duplicate content |
| Existing links break | Redirect manifest and automated URL tests |

## First backlog

1. Approve these v1 documents and name accountable roles.
2. Produce a machine-readable inventory and stable ID proposal.
3. Define schemas and taxonomy files with tests.
4. Build the five-record vertical slice and parity fixtures.
5. Decide publication generator and preview workflow.
6. Run user testing on proposed navigation and role pathways.
7. Replan remaining phases using measured migration effort.
