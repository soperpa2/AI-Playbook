/**
 * Schema-driven renderer for guided, fillable public-health implementation tools.
 *
 * DATA CONTRACT
 * A definition has `{label, intro, scenario?, sections}`. `sections` is an ordered
 * array of `[sectionTitle, fields]`. A field has `{label, type, options?, guidance?,
 * example?, inputType?}` where type is select, checkboxes, text, or textarea.
 * Section title + field label form the persisted legacy key; changing either needs
 * a data migration or backward-compatible alias.
 *
 * PRODUCT RULES
 * - Every select and checkbox group offers Other.
 * - Users may add multiple custom categories; those values remain separate records.
 * - Checkbox choices generate documentation records elsewhere in the tool workflow.
 * - Help uses one coherent public-health scenario within a tool, supplemented by
 *   field-specific examples (the approved hybrid example approach).
 * - RASCI assignments must identify named roles/functions, not ambiguous groups.
 *
 * SECURITY/ACCESSIBILITY
 * All definition and user-derived values entering markup pass through `escape`.
 * Help cues are keyboard focusable; labels/legends remain associated with controls.
 */
(function defineGuidedToolTemplate() {
  /** @param {*} value @returns {string} HTML-safe text. */
  function escape(value) {
    return String(value || "").replace(/[&<>\"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  }

  /** Stable legacy persistence key; treat section and label as schema identifiers. */
  function fieldName(section, label) { return `${section}::${label}`; }
  /** Returns unique options and guarantees the extensibility choice `Other`. */
  function withOther(options = []) {
    const values = [...new Set(options.filter(Boolean))];
    return values.includes("Other") ? values : [...values, "Other"];
  }
  function otherControls(name) {
    return `<div class="guided-other-controls"><button class="btn small add-other-category" type="button" data-other-name="${escape(name)}">Add another category</button><div class="guided-other-list" data-other-list="${escape(name)}"></div></div>`;
  }

  /**
   * Creates concise guidance and a scenario-based example for one field.
   * Explicit authored guidance/examples always override inferred text.
   * @param {{label:string,type:string,options?:string[],guidance?:string,example?:string}} field
   * @param {Object} scenario Tool-wide worked-example context.
   * @returns {{instruction:string,example:string,tooltip:string}}
   */
  function fieldAssistance(field, scenario = {}) {
    const label = field.label.toLowerCase();
    const options = field.options || [];
    const s = {
      name: scenario.name || "public health AI implementation", program: scenario.program || "public health program", owner: scenario.owner || "program manager",
      data: scenario.data || "approved program and operational data", community: scenario.community || "staff, partners, and affected communities",
      evidence: scenario.evidence || "documented program evidence and review records", risk: scenario.risk || "incorrect or inequitable results could affect public health action",
      followUp: scenario.followUp || "complete required review and document conditions before proceeding"
    };
    const instruction = field.guidance || (field.type === "select" ? "Choose the response best supported by current evidence. Use Unknown when evidence has not been collected." : field.type === "checkboxes" ? "Select every category that applies. A documentation record will appear below for each selected item." : field.type === "text" ? "Enter a concise, specific value that another reviewer will recognize." : "Describe the evidence, decision, rationale, owner, and follow-up needed.");
    let example = field.example || "";
    if (!example && field.type === "select" && options.includes("Yes") && options.includes("No")) example = `Example scenario: For the ${s.name}, choose No when a required safeguard is known not to be complete; choose Unknown when the ${s.program} cannot verify it from ${s.evidence}. Either response should produce this follow-up: ${s.followUp}.`;
    if (!example && field.type === "select" && /(risk|severity|consequence)/.test(label)) example = `Example scenario: Rate the ${s.name} High when ${s.risk}, particularly because it uses ${s.data}.`;
    if (!example && field.type === "select" && /(status|stage|progress)/.test(label)) example = `Example scenario: Choose In progress when the ${s.program} has begun work but ${s.followUp} remains outstanding; choose Complete only when ${s.evidence} documents closure.`;
    if (!example && field.type === "select" && /(decision|recommendation|disposition|go\/no-go)/.test(label)) example = `Example scenario: Choose Proceed with conditions for the ${s.name} when early evidence is promising but ${s.risk}. State the conditions explicitly: ${s.followUp}.`;
    if (!example && field.type === "select" && /(priority|urgency)/.test(label)) example = `Example scenario: Choose Urgent when the ${s.name} is already operating and ${s.risk}.`;
    if (!example && field.type === "select" && /(maturity|readiness|competency)/.test(label)) example = `Example scenario: Choose Early or informal when the ${s.program} lacks a documented repeatable process and ${s.evidence}; choose Implemented only when the process is consistently used.`;
    if (!example && field.type === "select" && /(cadence|frequency|review cycle)/.test(label)) example = `Example scenario: Review the ${s.name} monthly during the pilot and after a model, data, vendor, incident, or disparity change.`;
    if (!example && field.type === "select") example = `Example scenario: For the ${s.name}, choose ${options.find(option => !/select one|unknown|not applicable|other/i.test(option)) || "the best-supported response"} only when ${s.evidence} supports it; otherwise choose Unknown.`;
    if (!example && field.type === "checkboxes" && /(roles|members|participants|stakeholders|reviewers|owners)/.test(label)) example = `Example scenario: For the ${s.name}, select program roles because they own the workflow, technical and evaluation roles because they assess ${s.evidence}, and privacy, security, equity, accessibility, community, and governance roles because the work uses ${s.data} and affects ${s.community}.`;
    if (!example && field.type === "checkboxes" && /(data|information)/.test(label)) example = `Example scenario: Select every category represented in ${s.data}; those categories determine the required environment, access controls, agreements, and review pathway.`;
    if (!example && field.type === "checkboxes" && /(risk|concern|barrier|limitation|issue)/.test(label)) example = `Example scenario: Select Data quality and Equity when ${s.community} may be represented unevenly; select Privacy, Security, or Vendor concerns when ${s.data} leave agency-controlled systems.`;
    if (!example && field.type === "checkboxes" && /(requirement|control|safeguard|approval|review)/.test(label)) example = `Example scenario: Select the reviews and safeguards needed for the ${s.name} because ${s.risk}. Include human review, monitoring, and incident response when errors could affect action.`;
    if (!example && field.type === "checkboxes" && /(metric|indicator|measure|evidence)/.test(label)) example = `Example scenario: Select performance, timeliness, subgroup/equity, adoption, feedback, and incident measures needed to evaluate ${s.evidence}.`;
    if (!example && field.type === "checkboxes" && /(communication|channel|engagement method|support)/.test(label)) example = `Example scenario: Use staff meetings and training for implementers, leadership briefings for accountable officials, partner or community briefings for ${s.community}, and a support channel for incidents.`;
    if (!example && field.type === "checkboxes" && /(cost|resource|funding)/.test(label)) example = `Example scenario: Select staff time for ${s.owner} review, secure infrastructure for ${s.data}, training, community engagement, and monitoring using ${s.evidence}.`;
    if (!example && field.type === "checkboxes") {
      const choices = options.filter(option => option !== "Other").slice(0, 2);
      example = `Example scenario: For the ${s.name}, select ${choices.join(" and ") || "every applicable category"} only when each applies. Use the generated section below to document why, evidence, owner, and follow-up.`;
    }
    if (!example && /(owner|lead|facilitator|assigned)/.test(label)) example = `Example: ${s.owner}, ${s.program}.`;
    if (!example && /agency|program/.test(label)) example = `Example: County Health Department, ${s.program}.`;
    if (!example && /date/.test(label)) example = "Example: the meeting, review, or approval date.";
    if (!example && /(evidence|rationale|finding)/.test(label)) example = `Example: ${s.evidence}.`;
    if (!example && /(risk|concern|barrier|limitation)/.test(label)) example = `Example: ${s.risk}; ${s.followUp}.`;
    if (!example && /(purpose|benefit|outcome|impact)/.test(label)) example = `Example: use the ${s.name} to improve the ${s.program}'s work while preserving named human review and measuring benefit.`;
    if (!example && /(communication|message|notice|engagement)/.test(label)) example = `Example: explain the ${s.name} to ${s.community}, provide accessible feedback channels, and document resulting changes.`;
    if (!example && /(data|source|information)/.test(label)) example = `Example: ${s.data}, with ownership, quality, access, retention, and privacy restrictions documented.`;
    if (!example && /(metric|measure|indicator|threshold)/.test(label)) example = `Example: measures drawn from ${s.evidence}, including performance, timeliness, subgroup differences, workload, feedback, and incidents.`;
    if (!example && /(activity|task|action|follow-up|next step)/.test(label)) example = `Example: ${s.owner} will ${s.followUp} by the assigned date and provide closure evidence.`;
    if (!example && /(workflow|process)/.test(label)) example = `Example: document how ${s.data} enter the ${s.name}, where ${s.owner} reviews outputs, how corrections occur, and what triggers escalation.`;
    if (!example && /(stakeholder|community|population|audience)/.test(label)) example = `Example: ${s.community}.`;
    if (!example && field.type === "text") example = `Example: a short, locally meaningful ${field.label.toLowerCase()} for the ${s.name}.`;
    if (!example) example = `Example: for the ${s.name}, summarize ${s.evidence}, the decision, ${s.owner}'s responsibility, the action, and target date.`;
    return { instruction, example, tooltip: `${instruction} ${example}` };
  }

  function helpCue(field, scenario) {
    const help = fieldAssistance(field, scenario);
    return `<span class="guided-help-cue" tabindex="0" role="note" aria-label="Instructions and example for ${escape(field.label)}" data-tooltip="${escape(help.tooltip)}" title="${escape(help.tooltip)}">?</span>`;
  }
  /** @returns {string} Accessible control markup for a single schema field. */
  function renderField(section, field, scenario = {}) {
    const name = fieldName(section, field.label), help = fieldAssistance(field, scenario), cue = helpCue(field, scenario);
    const guidance = `<small class="guided-field-help">${escape(help.instruction)}</small>`;
    if (field.type === "select") return `<div class="guided-control-with-other"><label>${escape(field.label)} ${cue}${guidance}<select name="${escape(name)}" aria-label="${escape(field.label)}">${withOther(field.options).map(option => `<option value="${escape(option)}">${escape(option)}</option>`).join("")}</select></label>${otherControls(name)}</div>`;
    if (field.type === "checkboxes") return `<fieldset class="guided-checkbox-group"><legend>${escape(field.label)} ${cue}</legend>${guidance}<div class="guided-check-grid">${withOther(field.options).map(option => `<label><input type="checkbox" name="${escape(name)}" value="${escape(option)}"><span>${escape(option)}</span></label>`).join("")}</div>${otherControls(name)}</fieldset>`;
    if (field.type === "text") return `<label>${escape(field.label)} ${cue}${guidance}<input name="${escape(name)}" type="${escape(field.inputType || "text")}"${field.inputType === "date" ? "" : ` placeholder="${escape(help.example.replace(/^Example:\s*/i, ""))}"`}></label>`;
    return `<label>${escape(field.label)} ${cue}${guidance}<textarea name="${escape(name)}" rows="4" placeholder="${escape(help.example.replace(/^Example:\s*/i, ""))}"></textarea></label>`;
  }
  /** @param {Object} definition Valid guided-tool definition. @returns {string} */
  function render(definition) {
    return `<section class="guided-tool-intro"><p class="eyebrow">${escape(definition.label)}</p><p>${escape(definition.intro)}</p><p class="guided-tool-key"><strong>Worked example:</strong> Field guidance uses the ${escape(definition.scenario?.name || "public health implementation scenario")} consistently. <strong>Response rule:</strong> Select all that apply for checkboxes. For dropdowns, choose the best supported response; Unknown identifies evidence that still needs to be collected.</p></section>${definition.sections.map(([section, fields]) => `<section class="tool-section guided-tool-section"><h3>${escape(section)}</h3><div class="guided-tool-fields">${fields.map(field => renderField(section, field, definition.scenario)).join("")}</div></section>`).join("")}`;
  }
  /** Converts the guided schema to the earlier section/label blueprint shape. */
  function asLegacyBlueprint(definition) { return definition.sections.map(([section, fields]) => [section, fields.map(field => field.label)]); }
  /**
   * Adds one independently removable custom category input.
   * @returns {HTMLInputElement|null} Created input, or null when its host is absent.
   */
  function addOtherValue(root, name, value = "") {
    const list = root.querySelector(`[data-other-list="${CSS.escape(name)}"]`);
    if (!list) return null;
    const number = list.children.length + 1, row = document.createElement("div");
    row.className = "guided-other-row";
    row.innerHTML = `<label>Custom category ${number}<input name="${escape(name)}::Other" value="${escape(value)}" placeholder="Enter another category"></label><button class="btn small remove-other-category" type="button" aria-label="Remove custom category ${number}">Remove</button>`;
    row.querySelector(".remove-other-category").addEventListener("click", () => row.remove());
    list.appendChild(row);
    return row.querySelector("input");
  }
  /** Binds progressive-enhancement events after rendered markup enters the DOM. */
  function hydrate(root = document) {
    root.querySelectorAll(".add-other-category").forEach(button => button.addEventListener("click", () => { const input = addOtherValue(root, button.dataset.otherName); input?.focus(); }));
  }
  window.GuidedToolTemplate = { render, renderField, asLegacyBlueprint, addOtherValue, hydrate };
})();
