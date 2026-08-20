# Health Data Privacy, HIPAA, and AI Implementation Standard

Status: Version 1 recommendation
Applies to: Full Version and Foundation Edition
Last reviewed: 2026-08-18

## Architectural decision

Health data privacy is a lifecycle responsibility. The Playbook does not create a separate HIPAA play. Tool 10, first used in Play 2, provides the agency-level baseline and tiered-use decision. Play 7 requires the determination to be confirmed or updated for each proposed use case. Plays 3, 8, 11, 12, and 13 implement governance, contracting, deployment, oversight, and monitoring controls.

Tool 10 retains its stable identifier and is renamed **Health Data Privacy, HIPAA Applicability & Tiered Data Use Screening**. Existing tools are not renumbered. Stable tool identifiers protect links, saved browser work, downloads, crosswalks, documentation, analytics, and future structured-content relationships. Display order must be based on first supporting play and then tool number, not by changing identifiers.

## Governing principles

- A governmental public health agency is not automatically a HIPAA covered entity.
- An agency may be a covered entity, a non-covered entity, or a hybrid entity with designated healthcare components.
- A public health authority may receive PHI for specified public health purposes when the disclosure is authorized under applicable law and HIPAA.
- Permission for a public health disclosure does not automatically authorize a different downstream AI purpose, vendor reuse, model training, or product improvement.
- Information that is not HIPAA PHI may still be confidential, sensitive, restricted by other law or agreement, or inappropriate for a particular AI environment.
- HIPAA applicability is one decision point within broader privacy, security, records, civil-rights, ethical, Tribal, research, and program-specific review.

## Tool 10 decisions

Tool 10 must record:

1. Agency, component, public health authority, and covered-entity or hybrid-entity status.
2. Information type, source, owner, collection or disclosure authority, and permitted purpose.
3. Whether the proposed AI processing remains within that purpose.
4. Minimum-necessary and broader data-minimization determinations.
5. State, Tribal, substance-use, research, public-records, and program-specific requirements.
6. AI provider, cloud, subcontractor, business-associate, and BAA determinations.
7. Prompt, output, embedding, log, retention, vendor training, secondary-use, redisclosure, correction, audit, deletion, and termination controls.
8. Data tier and allowable or prohibited AI environments.
9. Named reviewers, approving authority, conditions, prohibited uses, and re-review triggers.

The tool supports, but does not replace, review by qualified agency privacy and legal officials.

## Lifecycle integration

- **Play 2:** establish and approve the agency/component baseline; identify unresolved status or authority questions as readiness gaps.
- **Play 3:** adopt privacy review authority, decision rights, documentation requirements, approved environments, and escalation rules.
- **Play 4:** maintain the applicable federal, state, local, Tribal, territorial, research, records, and program-specific legal landscape.
- **Play 7:** confirm Tool 10 for every proposed use involving person-level, health, clinical, surveillance, research, or otherwise sensitive information.
- **Play 8:** translate Tool 10 conditions into vendor evaluation, procurement, BAA, data-use, subcontractor, audit, secondary-use, and termination terms.
- **Play 11:** validate data minimization, approved environments, access, logging, testing data, retention, incident response, and go-live conditions.
- **Play 12:** audit compliance and reassess after incidents, material vendor changes, model changes, new data sources, or changed purposes.
- **Play 13:** monitor unauthorized access or reuse, retention, deletion, disclosures, privacy complaints, and corrective action.

## Source foundation

- HHS OCR, *Covered Entities and Business Associates*.
- HHS OCR, *Are state, county or local health departments required to comply with the HIPAA Privacy Rule?*
- HHS OCR, *Public Health* guidance under 45 CFR 164.512(b).
- HHS OCR, *Minimum Necessary Requirement*.
- HHS OCR, *Guidance on HIPAA & Cloud Computing*.
- HHS OCR, *Business Associate Contracts*.
- HHS OCR, *Guidance Regarding Methods for De-identification of Protected Health Information*.

## Maintenance

The legal and privacy source set must be reviewed at least annually and when HHS issues a final rule or material guidance affecting privacy, security, business associates, cloud services, public health disclosures, or regulated health data. Proposed rules must be labeled as proposals and must not be presented as current binding requirements.
