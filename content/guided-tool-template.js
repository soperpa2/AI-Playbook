(function defineGuidedToolTemplate() {
  function escape(value) {
    return String(value || "").replace(/[&<>\"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  }

  function fieldName(section, label) {
    return `${section}::${label}`;
  }

  function renderField(section, field) {
    const name = fieldName(section, field.label);
    const guidance = field.guidance ? `<small class="guided-field-help">${escape(field.guidance)}</small>` : "";
    if (field.type === "select") return `<label>${escape(field.label)}${guidance}<select name="${escape(name)}">${field.options.map(option => `<option value="${escape(option)}">${escape(option)}</option>`).join("")}</select></label>`;
    if (field.type === "checkboxes") return `<fieldset class="guided-checkbox-group"><legend>${escape(field.label)}</legend>${guidance}<div class="guided-check-grid">${field.options.map(option => `<label><input type="checkbox" name="${escape(name)}" value="${escape(option)}"><span>${escape(option)}</span></label>`).join("")}</div></fieldset>`;
    if (field.type === "text") return `<label>${escape(field.label)}${guidance}<input name="${escape(name)}"></label>`;
    return `<label>${escape(field.label)}${guidance}<textarea name="${escape(name)}" rows="4" placeholder="Record evidence, context, rationale, owners, or follow-up as appropriate."></textarea></label>`;
  }

  function render(definition) {
    return `<section class="guided-tool-intro"><p class="eyebrow">${escape(definition.label)}</p><p>${escape(definition.intro)}</p><p class="guided-tool-key"><strong>Response rule:</strong> Select all that apply for checkboxes. For dropdowns, choose the best supported response; “Unknown” identifies evidence that still needs to be collected.</p></section>${definition.sections.map(([section, fields]) => `<section class="tool-section guided-tool-section"><h3>${escape(section)}</h3><div class="guided-tool-fields">${fields.map(field => renderField(section, field)).join("")}</div></section>`).join("")}`;
  }

  function asLegacyBlueprint(definition) {
    return definition.sections.map(([section, fields]) => [section, fields.map(field => field.label)]);
  }

  window.GuidedToolTemplate = { render, asLegacyBlueprint };
})();
