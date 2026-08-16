# Content Model Specification

## Conventions

All canonical records use an immutable, namespaced `id` such as `play:03`, `tool:014`, or `project-summary:ca-facility-inspections`. IDs are never reused. Human-readable `slug` values may change with redirects. Dates use ISO 8601. Relationships contain IDs, not copied titles. Rich text uses safe Markdown. Each schema declares a semantic version.

## Common content fields

| Field | Type | Requirement | Purpose |
|---|---|---:|---|
| `id` | string | Required | Immutable identity |
| `type` | controlled string | Required | Content type discriminator |
| `title` | string | Required | Display and search title |
| `slug` | string | Required | Unique path segment within type |
| `summary` | string | Required | Plain-language discovery summary |
| `status` | enum | Required | `draft`, `in_review`, `published`, `deprecated`, `archived` |
| `audiences` | ID array | Required | Applicable personas/roles |
| `topics` | ID array | Required | Public health and cross-cutting subjects |
| `ai_capabilities` | ID array | Conditional | AI methods/capabilities discussed |
| `jurisdictions` | ID array | Required | Applicability or source jurisdiction |
| `relationships` | typed edge array | Required | Links to other canonical objects |
| `sources` | source objects | Required for factual content | Provenance and evidence |
| `owner` | owner ID | Required | Accountable editorial owner |
| `reviewers` | owner/role IDs | Required | Domain review responsibility |
| `published_at` | date-time | Published items | First publication |
| `updated_at` | date-time | Required | Material update |
| `review_due` | date | Required | Next scheduled review |
| `revision` | integer | Required | Monotonic content revision |
| `language` | BCP 47 string | Required | Source language, initially `en-US` |
| `accessibility` | object | Required | Review state, alternatives, document checks |
| `seo` | object | Optional | Description, image, canonical URL |

## Source object

Every externally supported claim should map to a source object with `title`, `url`, `publisher`, `publication_date` when known, `accessed_at`, `source_type`, `evidence_tier`, and optional `supports` claim IDs. `source_type` distinguishes law/policy, government guidance, peer-reviewed research, evaluation, operational documentation, vendor case study, news, and commentary. A source may be reused as a `reference` record when it warrants its own page.

## Canonical types

### Play

Preserve the current sequence and presentation. Required specialized fields: `number`, `phase`, `goal`, `why_it_matters`, `participants`, `key_questions`, `actions`, `outputs`, and ordered `tool_ids`. Optional fields include prerequisites, maturity applicability, learning modules, examples, and facilitation guidance. `number` is unique and changes require a migration decision because tools and crosswalks depend on sequence.

### Tool

Required: `number`, `purpose`, `instructions`, `inputs`, `outputs`, `formats`, `download_assets`, `first_appears_in_play`, `play_ids`, and `version`. Add `fillable_web` and `requires_account` flags rather than encoding these behaviors in prose. Tool numbering remains stable; retired tools retain their identity and redirect to a status explanation.

### Learning module

Required: `course_id`, `title`, `description`, `objectives`, `estimated_time`, `level`, `tracks`, `prerequisites`, `sections`, `practical_exercise`, `assessment`, `related_play_ids`, and `related_tool_ids`. Keep curriculum bodies separately composable from learner progress. Progress records refer to `id` plus `revision`.

### Project Summary / verified case study

The current visible presentation is retained. The canonical schema adds governance and discovery metadata without changing the seven visible sections.

| Existing visible field | Canonical field | Rule |
|---|---|---|
| Agency | `organizations` | Link to organization record when available |
| Title | `title` | Required |
| Type badge | `implementation_type` | Controlled vocabulary |
| Challenge | `challenge` | Required narrative |
| AI Solution | `ai_solution` | Required narrative |
| Data Sources | `data_sources` | Required narrative plus optional structured data categories |
| Workflow Impact | `workflow_impact` | Required narrative |
| Outcomes | `outcomes` | Required; qualify expected vs measured results |
| Ethical / Privacy | `governance_considerations` | Required; broader canonical name, current label retained in UI |
| Sources | `sources` | At least one; claim/evidence linkage encouraged |

Add `verification_status`, `evidence_tier`, `implementation_stage`, `geography`, `public_health_domains`, `ai_capabilities`, `play_ids`, `tool_ids`, `learning_module_ids`, `contact_permission`, and `last_verified`. `verification_status` values are `source_verified`, `organization_verified`, `evaluation_published`, or `needs_reverification`.

This is a metadata extension, not a presentation-schema break. A visible redesign would require user testing and explicit approval.

### Promising practice

Keep separate from verified Project Summaries. Required: `subtitle`, the same six comparison narratives, `agentic_extension` when applicable, `source_basis`, and `synthesis_disclosure`. It must never use outcome language that implies a documented implementation unless sources support it.

### Resource and reference

A `resource` is a reusable item a user can consume or download; a `reference` is evidence or guidance supporting content. Resource fields include `resource_type`, `formats`, `assets`, `license`, and relationships. Reference fields use the source object plus citation, abstract, and claim linkages.

### Organization and contributor

Organization fields: canonical name, aliases, organization type, jurisdiction, geography, public URL, and verification date. Contributor fields: display name, affiliation, role, biography, contribution scope, consent, and visibility. Do not publish personal contact details without explicit permission.

### News

Fields: headline, summary, publisher, event date, publication date, URL, geography, topic/AI tags, relevance note, and review/expiry date. News is discovery content, not durable evidence unless separately promoted to a reference.

### Assessment and maturity definitions

Question definitions, readiness domains, scoring logic, interpretation bands, version, and recommended relationships are canonical configuration. User responses and organization scores are operational data and must be stored separately with consent, authorization, and retention controls.

## Relationship edge object

Use `{ "type": "supported_by", "target": "reference:nist-ai-rmf-1", "note": "...", "order": 1 }`. Edge types come from the Relationship Model. Derived inverse edges are generated, not hand-maintained.

## Compatibility and validation

- Existing URL fragments receive redirects or compatibility routing.
- Current play/tool numbers and crosswalk identifiers are migration keys, not the final primary key.
- No published record may reference a draft or missing target without an explicit exception.
- A schema major version indicates a breaking change; minor adds backward-compatible fields.
- Fixtures must prove visual parity for at least one play, tool, module, Project Summary, and promising practice before migration expands.
