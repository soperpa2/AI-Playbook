(function updateFhirModules2026() {
  const data = window.CURRICULUM_DATA;
  if (!data || !Array.isArray(data.modules)) return;

  const references = {
    fhirVersions: { title: "FHIR Publication Directory and Version History", publisher: "HL7 International", url: "https://hl7.org/fhir/directory.html", note: "Authoritative directory distinguishing published FHIR releases from ballot and continuous-build material." },
    fhirR5: { title: "HL7 FHIR Release 5", publisher: "HL7 International", year: "2023", url: "https://hl7.org/fhir/R5/", note: "Current published core FHIR release; R5 remains Standard for Trial Use overall, while individual artifacts have different maturity and standards status." },
    usCore: { title: "US Core Implementation Guide 9.0.0 (STU 9)", publisher: "HL7 International", year: "2026", url: "https://hl7.org/fhir/us/core/STU9/", note: "Current published US Core version, based on FHIR R4, with profiles, interactions, capability statements, terminology, and conformance requirements." },
    uscdi: { title: "United States Core Data for Interoperability Version 7", publisher: "ASTP/Office of the National Coordinator for Health IT", year: "2026", url: "https://isp.healthit.gov/sites/default/files/2026-07/USCDI-Version-7-July-2026.pdf", note: "Current national data-class and data-element standard; USCDI is not itself a FHIR API or implementation guide." },
    ecr: { title: "Electronic Case Reporting FHIR Implementation Guide 2.1.2", publisher: "HL7 International Public Health Work Group", year: "2024", url: "https://hl7.org/fhir/us/ecr/", note: "Current published U.S. eCR FHIR guide, based on FHIR R4." },
    phLibrary: { title: "US Public Health Profiles Library 2.0.0", publisher: "HL7 International Public Health Work Group", year: "2026", url: "https://hl7.org/fhir/us/ph-library/", note: "Reusable R4-based public-health profiles and architecture patterns aligned with USCDI+ Public Health." },
    phDirectory: { title: "Index of HL7 U.S. Realm Implementation Guides", publisher: "HL7 International", url: "https://hl7.org/fhir/us/", note: "Published-version directory for US Core and public-health FHIR implementation guides; use permanent published versions rather than continuous builds for production requirements." },
    phPlaybook: { title: "Public Health FHIR Playbook", publisher: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/data-interoperability/media/pdfs/PHFIC_Public-Health-FHIR-Playbook.pdf", note: "Strategic and implementation guidance for state, local, Tribal, and territorial public-health FHIR adoption." },
    smart: { title: "SMART App Launch Implementation Guide 2.2.0", publisher: "HL7 International", url: "https://hl7.org/fhir/smart-app-launch/", note: "Current published R4-based authorization and authentication patterns for user-facing and backend FHIR applications." },
    bulk: { title: "FHIR Bulk Data Access Implementation Guide 3.0.0", publisher: "HL7 International", year: "2025", url: "https://hl7.org/fhir/uv/bulkdata/", note: "Current published R4-based approach to authorized asynchronous export of population-scale FHIR data." },
    phBulk: { title: "Bulk Retrieval of Public Health Data 2.0.0", publisher: "HL7 International Public Health Work Group", year: "2026", url: "https://hl7.org/fhir/us/ph-bulk-data/", note: "Current public-health guidance for consistent retrieval of authorized population data using Bulk FHIR." },
    phQuery: { title: "Query and Response for Public Health 1.0.0", publisher: "HL7 International Public Health Work Group", year: "2026", url: "https://hl7.org/fhir/us/ph-query/", note: "Current guidance for authorized public-health programs querying healthcare data through FHIR APIs." },
    inferno: { title: "Inferno on HealthIT.gov: US Core Test Kit", publisher: "ASTP/Office of the National Coordinator for Health IT", year: "2026", url: "https://fhir.healthit.gov/test-kits/us-core/", note: "Conformance testing for supported US Core versions; the public demonstration service must not be used with sensitive data or PHI." }
  };

  function uniquePush(target, values) {
    values.forEach(value => {
      const normalized = String(value).trim().toLowerCase();
      if (!target.some(existing => String(existing).trim().toLowerCase() === normalized)) target.push(value);
    });
  }

  function upsertSection(module, key, heading, paragraphs, beforeKey = "practical_exercise") {
    module.sections = Array.isArray(module.sections) ? module.sections : [];
    let section = module.sections.find(item => item.key === key);
    if (!section) {
      section = { key, heading, paragraphs: [] };
      const beforeIndex = module.sections.findIndex(item => item.key === beforeKey);
      beforeIndex >= 0 ? module.sections.splice(beforeIndex, 0, section) : module.sections.push(section);
    }
    section.heading = heading;
    section.paragraphs = paragraphs;
  }

  function replaceReferences(module, items) {
    // The curriculum renderer accepts reference strings and extracts the URL
    // into a linked resource card. Keep the full authoritative title and URL.
    module.references_and_resources = items.map(item => `${item.title}: ${item.url}`);
    upsertSection(
      module,
      "references_and_resources_for_additional_information",
      "References and Resources for Additional Information",
      items.map(item => `${item.title}. ${item.url}`),
      "knowledge_check"
    );
  }

  const arc220 = data.modules.find(module => module.course_id === "ARC 220" || module.id === "arc-220-public-health-interoperability-hl7-v2-cda-fhir-and-apis");
  if (arc220) {
    arc220.learning_objectives = Array.isArray(arc220.learning_objectives) ? arc220.learning_objectives : [];
    uniquePush(arc220.learning_objectives, [
      "Distinguish the current published FHIR core release from the R4 base used by major U.S. implementation guides and from ballot or continuous-build material.",
      "Specify conformance using a pinned FHIR version, canonical implementation guide and package version, profiles, interactions, terminology, authorization, and test evidence.",
      "Explain how USCDI, US Core, USCDI+ Public Health, and use-case-specific public-health implementation guides relate without treating them as interchangeable.",
      "Evaluate whether FHIR-accessible data preserve provenance, completeness, meaning, authorization, and fitness for an AI-supported public-health workflow."
    ]);
    upsertSection(arc220, "current_fhir_landscape_2026", "Current FHIR and Public Health Landscape (2026)", [
      "FHIR R5 (5.0.0) remains the current published core FHIR release. FHIR R6 is still in ballot and should not be described as a production standard. At the same time, many adopted U.S. implementation guides—including US Core 9.0.0, eCR 2.1.2, the US Public Health Profiles Library 2.0.0, SMART App Launch 2.2.0, and current Bulk Data guidance—are based on FHIR R4 (4.0.1). A newer core release does not automatically supersede the version required by a particular program, regulation, implementation guide, trading partner, or installed system.",
      "USCDI v7, published in July 2026, identifies national data classes and elements. US Core defines R4 profiles and API expectations for accessing a common clinical-data floor. USCDI+ Public Health and the US Public Health Profiles Library extend public-health data needs. Use-case implementation guides—such as eCR—define additional actors, transactions, profiles, terminology, and workflow requirements. Learners should name the exact artifact and version instead of saying only that a system is 'FHIR compliant.'"
    ]);
    upsertSection(arc220, "conformance_and_version_management", "Conformance, Versioning, and Procurement Evidence", [
      "A defensible interoperability requirement identifies the FHIR base version; canonical implementation-guide URL and package version; required server and client capability statements; profiles and extensions; Must Support interpretation; search parameters, operations, and write capabilities; terminology systems and value-set versions; authorization pattern and scopes; provenance and audit expectations; error handling; rate and volume limits; and test method. Require vendors to identify unsupported, partially supported, proprietary, or roadmap-only capabilities.",
      "Do not use continuous-build pages as fixed production requirements. Continuous builds change without notice. Cite a permanent published version and establish a controlled process for upgrades. Before accepting a version change, assess structural, terminology, search, authorization, validation, downstream-model, data-quality, and workflow effects. Preserve the implementation-guide package, test fixtures, validation results, capability statements, mappings, and decision record used for acceptance.",
      "US Core conformance is a floor, not proof that a product supports a public-health use case. A vendor may support selected US Core profiles yet lack eCR, bulk retrieval, public-health query, jurisdiction-specific terminology, required historical depth, write-back controls, or the data needed by the proposed AI workflow."
    ]);
    upsertSection(arc220, "ai_interoperability_guardrails", "FHIR Data in AI-Supported Workflows", [
      "FHIR improves structural consistency but does not establish authority, purpose, data quality, representativeness, or model fitness. AI teams must retain resource identifiers, timestamps, source organization, profile and terminology versions, Provenance where available, transformations, missingness, and links back to the system of record. Flattening FHIR resources into model features or text can remove cardinality, references, negation, status, interpretation, units, effective times, and provenance that are essential to safe interpretation.",
      "Retrieval-augmented and agentic systems require separate controls for read and write operations. Apply least-privilege SMART scopes, restrict resource types and patient or population context, test authorization boundaries, log queries and actions, require human approval for consequential write-back, handle OperationOutcome responses, and provide rollback or reconciliation. Bulk exports create concentrated risk and require authorized groups, minimization, protected file handling, expiration and deletion, monitoring, and controls against inappropriate reuse for model training."
    ]);
    upsertSection(arc220, "updated_application_exercise", "Updated Application Exercise", [
      "Create an interoperability requirement and evidence matrix for an AI-supported case-summary, immunization-gap, laboratory-triage, or population-surveillance workflow. Record the current and target exchange, FHIR base version, published implementation guide and version, resources and profiles, required elements, terminology, searches or operations, authorization scopes, provenance, data-quality rules, missing-data behavior, volume and latency, test cases, acceptance thresholds, evidence owner, and upgrade process.",
      "Include at least one scenario in which syntactically valid FHIR data are not fit for the public-health purpose—for example, missing specimen context, incomplete race and ethnicity data, outdated status, a local code without a validated mapping, or an absent source timestamp. Explain how the defect could affect an AI output and what control prevents use until it is resolved."
    ]);
    replaceReferences(arc220, [references.fhirVersions, references.fhirR5, references.usCore, references.uscdi, references.ecr, references.phLibrary, references.phDirectory, references.phPlaybook, references.smart, references.inferno]);
    arc220.content_review = { status: "updated", date: "2026-08-20", basis: "HL7 published FHIR and U.S. public-health implementation guides; ASTP/ONC USCDI v7 and Inferno; CDC Public Health FHIR Playbook" };
  }

  const arc250 = data.modules.find(module => module.course_id === "ARC 250" || module.id === "arc-250-fhir-for-public-health-ai-use-cases");
  if (arc250) {
    arc250.learning_objectives = Array.isArray(arc250.learning_objectives) ? arc250.learning_objectives : [];
    uniquePush(arc250.learning_objectives, [
      "Select and pin the FHIR base version, published implementation guide, package version, profiles, terminology, and API interactions for an AI-supported public-health use case.",
      "Inspect CapabilityStatement and SMART configuration evidence rather than accepting a generic claim of FHIR support.",
      "Design tests for profile conformance, searches, authorization boundaries, provenance, missing data, terminology, volume, and AI fitness.",
      "Distinguish individual-resource APIs, public-health query patterns, and bulk-data retrieval and choose the least expansive access pattern that meets the need."
    ]);
    upsertSection(arc250, "current_fhir_landscape_2026", "Current FHIR Landscape for Implementation (2026)", [
      "FHIR R5 is the current published core release, but the primary U.S. guides most relevant to current public-health exchange remain R4-based. US Core 9.0.0 is based on R4 and aligns its annual evolution with USCDI. USCDI v7 is current as of July 2026. The eCR guide remains 2.1.2; the US Public Health Profiles Library is 2.0.0; Bulk Retrieval of Public Health Data is 2.0.0; Query and Response for Public Health is 1.0.0; and FHIR Bulk Data Access is 3.0.0. Confirm current published versions again when requirements are issued because guide versions evolve independently.",
      "Use a permanent published URL and package version in requirements, test records, and contracts. A continuous build can be valuable for planning but is not stable evidence of production conformance. A regulatory or trading-partner requirement may specify an older version; document both the required floor and any additional version the organization supports."
    ]);
    upsertSection(arc250, "fhir_ai_design_patterns", "FHIR Design Patterns for Public Health AI", [
      "Individual-resource REST queries can support targeted retrieval for a specific person or workflow. Public-health query guides support authorized program access patterns. Bulk Data can support population-scale analytics and model evaluation but produces large, sensitive files and is asynchronous rather than real time. Subscriptions, messaging, documents, and write operations have different semantics and risks. Select the pattern based on timeliness, population, volume, authority, minimum necessary or data minimization, and system-of-record responsibilities.",
      "For a generative summary, preserve source-resource references and effective times so reviewers can verify every assertion. For predictive modeling, define the cohort, observation window, label timing, missingness, terminology, versioning, and leakage controls before extraction. For retrieval-augmented generation, govern which FHIR resources are converted to text and preserve access controls and provenance. For agentic workflows, separate reading, recommending, creating, and updating; apply distinct scopes and human approval to consequential actions."
    ]);
    upsertSection(arc250, "capability_and_conformance_testing", "Capability and Conformance Testing", [
      "Begin with the server CapabilityStatement and `.well-known/smart-configuration`, but verify behavior. Test the exact profiles, Must Support elements, search combinations, includes, pagination, history, errors, references, terminology, provenance, authorization scopes, and performance required by the workflow. A valid resource can still be incomplete or unusable for the intended public-health purpose.",
      "Use official or locally hosted conformance tooling appropriate to the named guide and version. The public Inferno demonstration environment is not approved for sensitive data or PHI. Combine automated validation with realistic end-to-end tests, public-health subject-matter review, data-quality profiling, security testing, and AI-output evaluation. Record the server and model versions used for every result.",
      "For vendor acceptance, require machine-readable capability statements, implementation-guide package identifiers, sample resources, test results, known deviations, terminology dependencies, rate and volume limits, change-notice practices, and remediation timelines. Re-run relevant tests after changes to the FHIR server, profiles, mappings, terminology, AI model, prompts, feature pipeline, or workflow."
    ]);
    upsertSection(arc250, "updated_public_health_scenario", "Updated Public Health Scenario", [
      "A state health department proposes an AI service to summarize eCR data and identify missing investigation information. The EHR vendor says its API is FHIR enabled. The evaluation team requires the exact R4 implementation guides and versions, eCR transaction support, US Core and public-health profiles, terminology, searches, authorization scopes, provenance, error handling, historical data, and rate limits. Testing shows that resources validate structurally, but some laboratory observations lack usable specimen context and local codes are not consistently mapped. The summary model incorrectly treats absent elements as negative findings.",
      "The agency pauses operational use, corrects the mappings, represents missingness explicitly, preserves source links, adds reviewer warnings, and creates acceptance tests for uncommon codes, missing elements, amendments, and late-arriving results. The final approval covers a named version and use only; changes trigger revalidation."
    ]);
    upsertSection(arc250, "updated_practical_exercise", "Updated Practical Exercise", [
      "Complete a FHIR Data Needs and Conformance Worksheet for an AI-supported eCR summary, immunization forecast review, laboratory triage, or population surveillance use. Identify the public-health authority and purpose; source and system of record; FHIR base and published guide versions; resources, profiles, extensions, terminology, and required elements; searches, operations, or bulk export; SMART scopes; provenance; missing-data rules; volume, latency, and history; validation tools; realistic test cases; AI fitness measures; acceptance thresholds; owners; and re-test triggers.",
      "Add one negative test for excessive access, one for a valid-but-incomplete resource, one terminology-mapping failure, one provenance or late-update scenario, and one case where the AI output must stop or route to human review."
    ]);
    arc250.expected_artifact_or_evidence = [
      "FHIR Data Needs and Conformance Worksheet",
      "Pinned version and implementation-guide profile",
      "Capability, authorization, data-quality, and AI-fitness test matrix",
      "Acceptance decision with evidence gaps and re-test triggers"
    ];
    arc250.practical_exercise = {
      instructions: [
        "Complete a FHIR Data Needs and Conformance Worksheet for one realistic public-health AI workflow.",
        "Specify published versions, profiles, terminology, interactions, authorization, provenance, test cases, acceptance thresholds, owners, and change triggers.",
        "Include security-boundary, missing-data, terminology, provenance, and AI stop-or-escalate tests."
      ],
      example: "For an eCR summary workflow, require R4 and eCR 2.1.2 conformance evidence, named profiles and terminology, least-privilege access, source traceability, explicit missingness, local validation, human review, and re-testing after server, mapping, model, or workflow changes."
    };
    replaceReferences(arc250, [references.fhirVersions, references.fhirR5, references.usCore, references.uscdi, references.ecr, references.phLibrary, references.phDirectory, references.smart, references.bulk, references.phBulk, references.phQuery, references.inferno, references.phPlaybook]);
    arc250.content_review = { status: "updated", date: "2026-08-20", basis: "HL7 FHIR R5 and published R4-based U.S. implementation guides; ASTP/ONC USCDI v7 and Inferno; CDC Public Health FHIR Playbook" };
  }
})();
