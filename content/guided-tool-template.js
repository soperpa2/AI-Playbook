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

  function renderField(section, field) {
    const name = fieldName(section, field.label);
    const guidance = field.guidance ? `<small class="guided-field-help">${escape(field.guidance)}</small>` : "";
    if (field.type === "select") return `<div class="guided-control-with-other"><label>${escape(field.label)}${guidance}<select name="${escape(name)}">${withOther(field.options).map(option => `<option value="${escape(option)}">${escape(option)}</option>`).join("")}</select></label>${otherControls(name)}</div>`;
    if (field.type === "checkboxes") return `<fieldset class="guided-checkbox-group"><legend>${escape(field.label)}</legend>${guidance}<div class="guided-check-grid">${withOther(field.options).map(option => `<label><input type="checkbox" name="${escape(name)}" value="${escape(option)}"><span>${escape(option)}</span></label>`).join("")}</div>${otherControls(name)}</fieldset>`;
    if (field.type === "text") return `<label>${escape(field.label)}${guidance}<input name="${escape(name)}"></label>`;
    return `<label>${escape(field.label)}${guidance}<textarea name="${escape(name)}" rows="4" placeholder="Record evidence, context, rationale, owners, or follow-up as appropriate."></textarea></label>`;
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
