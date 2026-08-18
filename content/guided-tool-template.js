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
    if (!example && field.type === "select") example = `Example: ${field.options?.find(option => !/select one|unknown|not applicable/i.test(option)) || "In progress"}.`;
    if (!example && field.type === "checkboxes") example = `Example: select ${field.options?.filter(option => option !== "Other").slice(0, 2).join(" and ") || "all applicable categories"}.`;
    if (!example && /(owner|lead|facilitator)/.test(label)) example = "Example: Jordan Lee, Program Manager.";
    if (!example && /agency|program/.test(label)) example = "Example: County Health Department, Communicable Disease Program.";
    if (!example && /date/.test(label)) example = "Example: the meeting, review, or approval date.";
    if (!example && field.type === "text") example = `Example: a short, locally meaningful ${field.label.toLowerCase()}.`;
    if (!example) example = "Example: summarize the evidence reviewed, the decision made, who owns the next action, and the due date.";
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
