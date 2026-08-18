(function defineGuidedToolTemplate() {
  function escape(value) {
    return String(value || "").replace(/[&<>\"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  }

  function fieldName(section, label) {
    return `${section}::${label}`;
  }

  function withOther(options = []) {
    const values = [...new Set(options.filter(Boolean))];
    return values.includes("Other") ? values : [...values, "Other"];
  }

  function otherControls(name) {
    return `<div class="guided-other-controls"><button class="btn small add-other-category" type="button" data-other-name="${escape(name)}">Add another category</button><div class="guided-other-list" data-other-list="${escape(name)}"></div></div>`;
  }

  function fieldAssistance(field) {
    const label = field.label.toLowerCase();
    const explicit = field.guidance || "";
    let instruction = explicit;
    if (!instruction && field.type === "select") instruction = "Choose the response best supported by current evidence. Use Unknown when the evidence has not yet been collected.";
    if (!instruction && field.type === "checkboxes") instruction = "Select every category that applies. Use Other or add custom categories when the listed choices do not fully describe the local context.";
    if (!instruction && field.type === "text") instruction = "Enter a concise, specific value that another reviewer will recognize.";
    if (!instruction) instruction = "Describe the current evidence, decision, rationale, responsible owner, and follow-up needed.";

    let example = field.example || "";
    const options = field.options || [];
    if (!example && field.type === "select" && options.includes("Yes") && options.includes("No")) example = "Example scenario: A county health department cannot locate a completed privacy review for an AI-assisted case-triage pilot. Choose No if the review is known not to be complete; choose Unknown if staff cannot verify whether it occurred. Either response creates a follow-up task before approval.";
    if (!example && field.type === "select" && /(risk|severity|consequence)/.test(label)) example = "Example scenario: An AI service uses identifiable disease-investigation records and could affect which cases receive rapid follow-up. Choose High because sensitive data and consequential prioritization increase potential harm, even if the vendor describes the model as accurate.";
    if (!example && field.type === "select" && /(status|stage|progress)/.test(label)) example = "Example scenario: The epidemiology team has drafted validation criteria but has not completed subgroup testing or governance review. Choose In progress—not Complete—because required evidence and approval are still outstanding.";
    if (!example && field.type === "select" && /(decision|recommendation|disposition|go\/no-go)/.test(label)) example = "Example scenario: A syndromic-surveillance pilot meets accuracy targets, but rural-facility data are incomplete. Choose Proceed with conditions when governance allows limited continuation only after data remediation, subgroup testing, and a named review date.";
    if (!example && field.type === "select" && /(priority|urgency)/.test(label)) example = "Example scenario: Staff are entering protected health information into an unapproved public AI tool. Choose Urgent because the exposure requires immediate containment and privacy/security review, ahead of lower-risk training improvements.";
    if (!example && field.type === "select" && /(maturity|readiness|competency)/.test(label)) example = "Example scenario: One informatics unit has an informal review practice, but the department has no documented standard or repeatable evidence. Choose Early or informal rather than Implemented.";
    if (!example && field.type === "select" && /(cadence|frequency|review cycle)/.test(label)) example = "Example scenario: During a 90-day outbreak-detection pilot, choose Monthly for routine performance review and add an event-triggered review after a model update, security incident, or unexpected subgroup disparity.";
    if (!example && field.type === "select") example = `Example scenario: During review of an AI-assisted immunization outreach workflow, choose ${options.find(option => !/select one|unknown|not applicable|other/i.test(option)) || "the best-supported response"} only when meeting notes, policy, testing results, or another named source supports it; otherwise choose Unknown and assign evidence collection.`;

    if (!example && field.type === "checkboxes" && /(roles|members|participants|stakeholders|reviewers|owners)/.test(label)) example = "Example scenario: A proposed AI workflow prioritizes communicable-disease investigations using identifiable case data. Select Program leadership and Data, analytics, or evaluation because they own the workflow and validation; also select Privacy, Security or IT, Equity or civil rights, and Governance because the data and prioritization create cross-functional review duties.";
    if (!example && field.type === "checkboxes" && /(data|information)/.test(label)) example = "Example scenario: A vaccination outreach model combines public census estimates with named immunization records. Select Public information for the census data, Protected health information and Personally identifiable information for the patient records, and Vendor data if a contractor supplies address-standardization results.";
    if (!example && field.type === "checkboxes" && /(risk|concern|barrier|limitation|issue)/.test(label)) example = "Example scenario: Rural clinics submit less-complete electronic laboratory data and the vendor hosts records in its cloud. Select Data quality, Equity or civil rights, Privacy or confidentiality, Security, and Vendor or procurement because each concern requires different evidence and mitigation.";
    if (!example && field.type === "checkboxes" && /(requirement|control|safeguard|approval|review)/.test(label)) example = "Example scenario: Before deploying a public-facing respiratory-disease chatbot, select Privacy review and Security review for data handling, Accessibility or language-access review for public usability, Human review for clinical content, and Monitoring and Incident response for post-launch oversight.";
    if (!example && field.type === "checkboxes" && /(metric|indicator|measure|evidence)/.test(label)) example = "Example scenario: For an outbreak-alert pilot, select Performance and Reliability to test alerts, Equity or subgroup performance to compare rural and urban facilities, Timeliness to measure epidemiologist review time, and Incidents to detect unsafe escalations.";
    if (!example && field.type === "checkboxes" && /(communication|channel|engagement method|support)/.test(label)) example = "Example scenario: When launching an AI-assisted inspection workflow, select Staff meeting and Training for inspectors, Leadership briefing for approval visibility, Partner briefing for contracted laboratories, and Help desk or support channel for operational problems.";
    if (!example && field.type === "checkboxes" && /(cost|resource|funding)/.test(label)) example = "Example scenario: A grant-funded surveillance pilot needs more than software. Select Staff time for epidemiologist review, Infrastructure or hosting for the secure environment, Data preparation for incomplete feeds, Training for users, and Monitoring and evaluation for the go/no-go decision.";
    if (!example && field.type === "checkboxes") {
      const choices = options.filter(option => option !== "Other").slice(0, 2);
      example = `Example scenario: During a county health department review, select ${choices.join(" and ") || "every applicable category"} only when each applies to the documented workflow; record why it applies, the evidence source, and any owner or follow-up action. Do not select an item merely because it appears on the list.`;
    }
    if (!example && /(owner|lead|facilitator|assigned)/.test(label)) example = "Example: Jordan Lee, Surveillance Program Manager, with support from the epidemiology analytics team.";
    if (!example && /agency|program/.test(label)) example = "Example: County Health Department, Communicable Disease Program.";
    if (!example && /date/.test(label)) example = "Example: the meeting, review, or approval date.";
    if (!example && /(evidence|rationale|finding)/.test(label)) example = "Example: retrospective testing against 12 months of epidemiologist-reviewed alerts found lower sensitivity for facilities with incomplete electronic reporting.";
    if (!example && /(risk|concern|barrier|limitation)/.test(label)) example = "Example: rural clinics may be underrepresented because electronic laboratory reporting is less complete; validate subgroup performance before pilot approval.";
    if (!example && /(purpose|benefit|outcome|impact)/.test(label)) example = "Example: reduce manual review time for reportable-disease laboratory results while preserving epidemiologist approval of every escalation.";
    if (!example && /(communication|message|notice|engagement)/.test(label)) example = "Example: hold a bilingual community briefing and accessibility review before launching an AI-assisted heat-risk communication service.";
    if (!example && /(data|source|information)/.test(label)) example = "Example: syndromic surveillance visits, electronic laboratory reports, program case records, and county population estimates, with applicable privacy restrictions documented.";
    if (!example && /(metric|measure|indicator|threshold)/.test(label)) example = "Example: alert sensitivity, false-positive rate, median epidemiologist review time, rural/urban subgroup performance, and number of escalated incidents.";
    if (!example && /(activity|task|action|follow-up|next step)/.test(label)) example = "Example: Privacy officer reviews the proposed use of identifiable immunization records by September 30 and documents conditions for pilot approval.";
    if (!example && /(workflow|process)/.test(label)) example = "Example: incoming laboratory reports are classified, queued for epidemiologist review, corrected when necessary, and escalated under the existing disease-investigation protocol.";
    if (!example && /(stakeholder|community|population|audience)/.test(label)) example = "Example: frontline disease investigators, Tribal epidemiology partners, rural clinics, disability advocates, language-access staff, and residents affected by the service.";
    if (!example && field.type === "text") example = `Example: a short, locally meaningful ${field.label.toLowerCase()}.`;
    if (!example) example = "Example: for an immunization outreach pilot, summarize the evidence reviewed, the governance decision, the program owner, the corrective action, and its target date.";
    return { instruction, example, tooltip: `${instruction} ${example}` };
  }

  function helpCue(field) {
    const help = fieldAssistance(field);
    return `<span class="guided-help-cue" tabindex="0" role="note" aria-label="Instructions and example for ${escape(field.label)}" data-tooltip="${escape(help.tooltip)}" title="${escape(help.tooltip)}">?</span>`;
  }

  function renderField(section, field) {
    const name = fieldName(section, field.label);
    const help = fieldAssistance(field);
    const guidance = `<small class="guided-field-help">${escape(help.instruction)}</small>`;
    const cue = helpCue(field);
    if (field.type === "select") return `<div class="guided-control-with-other"><label>${escape(field.label)} ${cue}${guidance}<select name="${escape(name)}" aria-label="${escape(field.label)}">${withOther(field.options).map(option => `<option value="${escape(option)}">${escape(option)}</option>`).join("")}</select></label>${otherControls(name)}</div>`;
    if (field.type === "checkboxes") return `<fieldset class="guided-checkbox-group"><legend>${escape(field.label)} ${cue}</legend>${guidance}<div class="guided-check-grid">${withOther(field.options).map(option => `<label><input type="checkbox" name="${escape(name)}" value="${escape(option)}"><span>${escape(option)}</span></label>`).join("")}</div>${otherControls(name)}</fieldset>`;
    if (field.type === "text") return `<label>${escape(field.label)} ${cue}${guidance}<input name="${escape(name)}" type="${escape(field.inputType || "text")}"${field.inputType === "date" ? "" : ` placeholder="${escape(help.example.replace(/^Example:\s*/i, ""))}"`}></label>`;
    return `<label>${escape(field.label)} ${cue}${guidance}<textarea name="${escape(name)}" rows="4" placeholder="${escape(help.example.replace(/^Example:\s*/i, ""))}"></textarea></label>`;
  }

  function render(definition) {
    return `<section class="guided-tool-intro"><p class="eyebrow">${escape(definition.label)}</p><p>${escape(definition.intro)}</p><p class="guided-tool-key"><strong>Response rule:</strong> Select all that apply for checkboxes. For dropdowns, choose the best supported response; “Unknown” identifies evidence that still needs to be collected.</p></section>${definition.sections.map(([section, fields]) => `<section class="tool-section guided-tool-section"><h3>${escape(section)}</h3><div class="guided-tool-fields">${fields.map(field => renderField(section, field)).join("")}</div></section>`).join("")}`;
  }

  function asLegacyBlueprint(definition) {
    return definition.sections.map(([section, fields]) => [section, fields.map(field => field.label)]);
  }

  function addOtherValue(root, name, value = "") {
    const list = root.querySelector(`[data-other-list="${CSS.escape(name)}"]`);
    if (!list) return null;
    const number = list.children.length + 1;
    const row = document.createElement("div");
    row.className = "guided-other-row";
    row.innerHTML = `<label>Custom category ${number}<input name="${escape(name)}::Other" value="${escape(value)}" placeholder="Enter another category"></label><button class="btn small remove-other-category" type="button" aria-label="Remove custom category ${number}">Remove</button>`;
    row.querySelector(".remove-other-category").addEventListener("click", () => row.remove());
    list.appendChild(row);
    return row.querySelector("input");
  }

  function hydrate(root = document) {
    root.querySelectorAll(".add-other-category").forEach(button => button.addEventListener("click", () => {
      const input = addOtherValue(root, button.dataset.otherName);
      input?.focus();
    }));
  }

  window.GuidedToolTemplate = { render, renderField, asLegacyBlueprint, addOtherValue, hydrate };
})();
