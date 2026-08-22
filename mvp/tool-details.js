/**
 * Foundation renderer for the 13 canonical Full Version tools.
 *
 * Tool metadata, ordered sections, fields, output statements, and stable IDs come
 * only from the generated FoundationToolCatalog. Field controls are rendered only
 * by the same GuidedToolTemplate used by the Full Version. Foundation may differ in
 * access, storage, downloads, and organization rollups, but never in the instrument.
 * Browser storage is demonstrative; never enter PHI or confidential case records.
 */
(function renderCanonicalFoundationTool() {
  const { plays, release } = window.launchContent;
  const catalogue = window.FoundationToolCatalog;
  if (!catalogue || !window.GuidedToolTemplate || !window.GuidedToolFactory) throw new Error("Canonical tool catalogue or shared guided template did not load.");
  const play = plays.find(item => item.number === Number(new URLSearchParams(location.search).get("play"))) || plays[0];
  const toolId = Number(catalogue.playToolMap[play.number]);
  const tool = catalogue.tools.find(item => item.id === toolId);
  const definition = window.GuidedToolDefinitions?.[toolId] || window.GuidedToolFactory.create(tool, catalogue.blueprints[toolId]);
  /* The worked scenario drives the same hover help and placeholders in both editions. */
  definition.scenario = catalogue.scenarios[toolId];
  const storageKey = `foundation-canonical-tool-${toolId}`;
  const main = document.querySelector("#tool-main");
  const readJson = key => { try { return JSON.parse(localStorage.getItem(key) || "null"); } catch { return null; } };
  const member = readJson("foundation-member-profile");
  const escape = value => String(value || "").replace(/[&<>\"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));

  /** These four fields deliberately mirror Full Version renderToolDetail. */
  function administrativeFields() {
    const fields = [
      { label: "Owner or facilitator", type: "text", guidance: "Name the person responsible for convening completion and coordinating follow-up." },
      { label: "Date", type: "text", inputType: "date", guidance: "Record the meeting, review, or approval date." },
      { label: "Agency / program", type: "text", guidance: "Identify the health department, division, bureau, or program that owns this artifact." },
      { label: "Review status", type: "select", options: ["Draft", "Ready for review", "Submitted to governance", "Approved", "Needs revision"] }
    ];
    return fields.map(field => window.GuidedToolTemplate.renderField("Administrative Details", field, definition.scenario)).join("");
  }

  /** Checkbox choices dynamically create detailed documentation below the checklist. */
  function selectionDocumentation() {
    return `<section class="tool-section selection-documentation"><div class="selection-documentation-header"><p class="eyebrow">Generated from Checklist Selections</p><h3>Selection documentation</h3><p>Select a checkbox above to create a documentation record below.</p></div><p class="selection-documentation-empty">No checkbox items selected yet.</p><div class="selection-documentation-list"></div></section>`;
  }
  function selectionCard(input) {
    const field = input.name.split("::").slice(-1)[0], key = `${input.name}|||${input.value}`;
    return `<article class="selection-documentation-card" data-selection-key="${escape(key)}"><div class="selection-documentation-title"><h4>${escape(field)}: ${escape(input.value)}</h4><span>Selected</span></div><div class="selection-documentation-grid"><label>Why this applies<textarea rows="2" data-doc-field="rationale"></textarea></label><label>Evidence or source<textarea rows="2" data-doc-field="evidence"></textarea></label><label>Local details<textarea rows="2" data-doc-field="details"></textarea></label><label>Required follow-up<textarea rows="2" data-doc-field="followUp"></textarea></label><label>Owner<input data-doc-field="owner"></label><label>Target date<input type="date" data-doc-field="dueDate"></label><label>Status<select data-doc-field="status">${["Not started", "In progress", "Blocked", "Ready for review", "Completed"].map(status => `<option>${status}</option>`).join("")}</select></label></div></article>`;
  }
  function syncSelectionDocumentation() {
    const list = document.querySelector(".selection-documentation-list");
    const selected = [...document.querySelectorAll('#tool-form .guided-checkbox-group input[type="checkbox"]:checked')];
    const keys = new Set(selected.map(input => `${input.name}|||${input.value}`));
    [...list.children].forEach(card => { if (!keys.has(card.dataset.selectionKey)) card.remove(); });
    selected.forEach(input => {
      const key = `${input.name}|||${input.value}`;
      if (!list.querySelector(`[data-selection-key="${CSS.escape(key)}"]`)) list.insertAdjacentHTML("beforeend", selectionCard(input));
    });
    document.querySelector(".selection-documentation-empty").hidden = Boolean(list.children.length);
  }

  /** Repeatable task rows retain the approved activity/owner/date/status structure. */
  function actionTracker() {
    return `<section class="tool-section tool-action-tracker"><div class="tool-action-header"><div><p class="eyebrow">Action and Follow-up Tracking</p><h3>Activities, owners, and dates</h3><p>Record each activity, evidence gap, approval, consultation, or corrective action created by this tool.</p></div><button class="btn small" type="button" id="add-tool-action">Add another task</button></div><div class="table-wrap"><table class="tool-action-table"><thead><tr><th>Activity or task</th><th>Assigned individual or team</th><th>Target date</th><th>Status</th><th>Review date</th><th>Notes or dependency</th><th></th></tr></thead><tbody></tbody></table></div></section>`;
  }
  function addActionRow(action = {}) {
    const body = document.querySelector(".tool-action-table tbody"), row = document.createElement("tr");
    row.className = "tool-action-row";
    row.innerHTML = `<td><textarea rows="2" data-action="activity">${escape(action.activity)}</textarea></td><td><input data-action="owner" value="${escape(action.owner)}"></td><td><input type="date" data-action="dueDate" value="${escape(action.dueDate)}"></td><td><select data-action="status">${["Not started", "In progress", "Blocked", "Ready for review", "Completed"].map(status => `<option${status === (action.status || "Not started") ? " selected" : ""}>${status}</option>`).join("")}</select></td><td><input type="date" data-action="reviewDate" value="${escape(action.reviewDate)}"></td><td><textarea rows="2" data-action="notes">${escape(action.notes)}</textarea></td><td><button class="btn small remove-tool-action" type="button">Remove</button></td>`;
    row.querySelector(".remove-tool-action").addEventListener("click", () => { row.remove(); if (!body.children.length) addActionRow(); });
    body.appendChild(row);
  }

  document.title = `Tool ${tool.id}: ${tool.title} | Foundation Edition`;
  main.innerHTML = window.PlaybookTemplates.pageOpen({ title: `Tool ${tool.id}: ${tool.title}`, lead: tool.purpose, eyebrow: `Foundation Edition · Canonical Tool for Play ${play.number}`, className: "foundation-tool-page" }) + `
    <div class="content-meta"><span>Same tool as Full Version</span><span>Version ${release.version}</span><span>Supports Play ${play.number}</span></div>
    <div class="detail-grid tool-detail-grid"><article class="panel">
      <section class="tool-guide"><p class="eyebrow">Before you begin</p><h2>Use this tool during the work</h2><p><strong>When:</strong> Complete it when Play ${play.number} requires its documented output. <strong>Why:</strong> It creates a reviewable implementation record. <strong>How:</strong> Name an owner, involve the recommended roles, document evidence, assign follow-up, obtain required approval, and retain the result.</p><p><strong>Who:</strong> ${play.people.map(escape).join("; ")}.</p><p><a href="detail.html?play=${play.number}">Review Play ${play.number}: ${escape(play.title)} before completing the tool →</a></p></section>
      <h2>Toolkit-Based Fillable Version</h2><p>This is the same guided instrument and field structure used in the Full Version.</p>
      <form id="tool-form" class="tool-form"><section class="tool-section"><h3>Administrative Details</h3><div class="form-grid">${administrativeFields()}</div></section>${window.GuidedToolTemplate.render(definition)}${selectionDocumentation()}${actionTracker()}</form>
      <div class="button-row no-print"><button class="btn primary" type="button" id="save-tool-progress">Save Progress</button><button class="btn" type="button" id="download-tool" ${member ? "" : "disabled"}>Download Responses</button><button class="btn" type="button" id="print-tool" ${member ? "" : "disabled"}>Print or Save as PDF</button><button class="btn" type="button" id="clear-tool">Clear</button></div>
      ${member ? "" : '<p class="member-status locked no-print"><strong>Free membership required for downloads.</strong> <a href="account.html">Create or open My Account</a>.</p>'}<p id="tool-save-status" class="tool-save-status" role="status"></p>
    </article><aside class="detail-card-list"><section class="panel"><h2>Outputs</h2><ul class="compact-list">${(catalogue.outputs[toolId] || []).map(output => `<li>${escape(output)}</li>`).join("")}</ul></section><section class="panel"><h2>Related play</h2><a href="detail.html?play=${play.number}">Play ${play.number}: ${escape(play.title)}</a></section><section class="panel"><h2>Edition note</h2><p>The instrument is identical across editions. Foundation does not include organization-level task aggregation, analytics, or the complete 49-tool library.</p></section></aside></div></section>`;

  window.GuidedToolTemplate.hydrate(document.getElementById("tool-form"));
  document.querySelectorAll('#tool-form .guided-checkbox-group input[type="checkbox"]').forEach(input => input.addEventListener("change", syncSelectionDocumentation));
  document.querySelector("#add-tool-action").addEventListener("click", () => addActionRow());
  addActionRow();

  /** Preserve checkbox arrays and multiple user-defined Other categories. */
  function collect() {
    const fields = {};
    for (const [name, value] of new FormData(document.querySelector("#tool-form")).entries()) {
      if (Object.prototype.hasOwnProperty.call(fields, name)) fields[name] = Array.isArray(fields[name]) ? [...fields[name], value] : [fields[name], value]; else fields[name] = value;
    }
    const actions = [...document.querySelectorAll(".tool-action-row")].map(row => Object.fromEntries([...row.querySelectorAll("[data-action]")].map(control => [control.dataset.action, control.value]))).filter(action => Object.values(action).some(Boolean));
    return { toolId, playNumber: play.number, fields, actions, savedAt: new Date().toISOString() };
  }
  function restore() {
    const saved = readJson(storageKey); if (!saved) return;
    Object.entries(saved.fields || {}).forEach(([name, value]) => {
      const values = Array.isArray(value) ? value : [value];
      const controls = [...document.querySelector("#tool-form").elements].filter(control => control.name === name);
      if (name.endsWith("::Other") && !controls.length) values.forEach(item => window.GuidedToolTemplate.addOtherValue(document.querySelector("#tool-form"), name.replace(/::Other$/, ""), item));
      else controls.forEach(control => { if (control.type === "checkbox" || control.type === "radio") control.checked = values.includes(control.value); else control.value = values[0] || ""; });
    });
    const body = document.querySelector(".tool-action-table tbody"); body.innerHTML = ""; (saved.actions?.length ? saved.actions : [{}]).forEach(addActionRow);
    syncSelectionDocumentation(); document.querySelector("#tool-save-status").textContent = "Saved responses restored from this browser.";
  }
  document.querySelector("#save-tool-progress").addEventListener("click", () => { localStorage.setItem(storageKey, JSON.stringify(collect())); document.querySelector("#tool-save-status").textContent = "Progress saved in this browser."; });
  document.querySelector("#download-tool").addEventListener("click", () => { if (!member) return; const blob = new Blob([JSON.stringify(collect(), null, 2)], { type: "application/json" }), link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = `tool-${tool.id}-responses.json`; link.click(); URL.revokeObjectURL(link.href); });
  document.querySelector("#print-tool").addEventListener("click", () => { if (member) window.print(); });
  document.querySelector("#clear-tool").addEventListener("click", () => { if (!confirm("Clear all responses saved for this tool in this browser?")) return; localStorage.removeItem(storageKey); location.reload(); });
  restore();
})();
