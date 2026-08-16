# Taxonomy & Metadata Standard

## Purpose

This standard makes content consistently searchable, relatable, reviewable, and reusable. Controlled terms are versioned records with stable IDs, preferred labels, definitions, aliases, parent terms where useful, steward, and status. Display labels may evolve without changing IDs.

## Controlled vocabularies

### Content type

`play`, `tool`, `learning_module`, `project_summary`, `promising_practice`, `resource`, `reference`, `organization`, `contributor`, `news`, `assessment`, `maturity_definition`, and `pathway`.

### Framework phase

`plan`, `build`, `deploy`, `govern`. Phase is required for plays and may be applied to other content only when the relationship is meaningful.

### Audience/role

`health_executive`, `epidemiologist`, `informatics_director`, `program_manager`, `it_technical_lead`, `communications`, `researcher`, `student_learner`, `governance_risk_lead`, `equity_community_engagement`, `procurement_finance`, `workforce_training_lead`, `organization_administrator`, and `community_partner`.

### Public health domain

Initial terms: communicable disease/surveillance, chronic disease, environmental health, emergency preparedness/response, maternal and child health, behavioral health, laboratory, health equity, community health, clinical/public health services, health communication, administration/operations, workforce development, grants/funding, quality/performance improvement, policy/governance, and research/evaluation. The steward may align these with an adopted external ontology later; local IDs must remain mappable.

### AI capability

`generative_ai`, `large_language_model`, `retrieval_augmented_generation`, `machine_learning`, `predictive_analytics`, `natural_language_processing`, `computer_vision`, `speech_language`, `recommendation_ranking`, `anomaly_detection`, `automation`, `agentic_workflow`, and `decision_support`. “AI” alone is too broad for detailed tagging.

### Lifecycle and maturity

Implementation stage: `concept`, `screening`, `planning`, `pilot`, `deployed`, `scaling`, `monitoring`, `paused`, `retired`. Organizational maturity uses the site’s canonical maturity levels and IDs; labels must be imported rather than recreated.

### Evidence and verification

Evidence tier: `authoritative_requirement`, `government_guidance`, `peer_reviewed_evidence`, `independent_evaluation`, `organization_documentation`, `vendor_report`, `news_report`, `expert_commentary`, `synthesized_example`. Verification status: `source_verified`, `organization_verified`, `evaluation_published`, `needs_reverification`, `not_applicable`.

### Governance/risk topic

Privacy, security, equity/bias, accessibility, transparency, explainability, human oversight, scientific validity, data quality, records management, procurement/vendor, legal authority, workforce impact, community engagement, environmental sustainability, incident response, and monitoring.

### Geography and jurisdiction

Use stable codes where available: ISO country/subdivision codes plus a documented U.S. jurisdiction layer for federal, Tribal, state, territorial, local, and multi-jurisdictional applicability. Tribal Nations and organizations must use names and identifiers approved through appropriate governance; do not imply state ownership or hierarchy.

## Tagging rules

- Apply the most specific defensible term; broader parents are derived for browse.
- Tag what the item substantively addresses, not every term it mentions.
- Assign one primary public health domain when possible and no more than five secondary domains without review.
- Separate audience (“for whom”) from contributor profession (“created by”).
- Separate AI capability from product/vendor name.
- Do not label a synthesized example as a verified implementation.
- Proposed new terms require a definition, examples, non-examples, owner, and overlap review.
- Deprecated terms keep redirects and mappings; they are not deleted from historic records.

## Minimum metadata by publication type

All published items require common fields, owner, review due date, audience, topic/domain, jurisdiction, language, status, and accessibility state. Project Summaries additionally require organization, implementation type/stage, evidence tier, verification, last verified date, sources, and AI capability. News requires event/publication dates and expiry review. Downloads require format, file version, accessibility result, license/rights, checksum, and source record revision.

## Free-text keywords

Keywords supplement but never replace controlled terms. Use them for emerging terminology, common misspellings, abbreviations, program names, and search synonyms. Review frequently used keywords quarterly for promotion into a controlled vocabulary.

## Stewardship and quality

The Metadata Steward maintains vocabulary releases and mappings. Domain reviewers validate public health terms; technical and governance reviewers validate AI/risk terms. Run automated checks for unknown IDs, orphan terms, excessive tagging, missing required facets, and deprecated terms. Review search analytics and zero-result queries quarterly, excluding sensitive queries and respecting the analytics policy.
