/**
 * Generate the Essentials Edition's 13-tool projection from the Full Version.
 *
 * WHY THIS EXISTS
 * The Full Version's `tools`, `toolFormBlueprints`, and `toolOutputOverrides` in
 * app.js are canonical. Essentials previously maintained shorter, hand-authored
 * substitutes, which allowed names and fields to drift. This generator extracts
 * the approved one-tool-per-play selection without rewriting or simplifying it.
 *
 * MAINTENANCE CONTRACT
 * - Change a tool in app.js first.
 * - Run `node scripts/generate-foundation-tool-catalog.js` in the same change.
 * - Commit the regenerated assets/foundation-tool-catalog.js.
 * - Both editions then render the same selected records with the same guided-tool
 *   template. Edition-specific account/storage behavior belongs in the page layer.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "app.js");
const outputPath = path.join(root, "assets", "foundation-tool-catalog.js");
const source = fs.readFileSync(sourcePath, "utf8");
const catalogueEnd = source.indexOf("function outputsForTool");
if (catalogueEnd < 0) throw new Error("Could not locate the canonical tool catalogue boundary in app.js.");

/* One complete canonical tool is released for each play in Essentials. */
const playToolMap = Object.freeze({ 1: 1, 2: 7, 3: 11, 4: 21, 5: 25, 6: 30, 7: 49, 8: 33, 9: 36, 10: 29, 11: 43, 12: 46, 13: 45 });
const selectedIds = Object.values(playToolMap);
const context = { window: { launchContent: { plays: [] } } };
vm.createContext(context);
vm.runInContext(`${source.slice(0, catalogueEnd)}\n;globalThis.__catalogueExport = { tools, toolFormBlueprints, toolOutputOverrides };`, context);
const canonical = context.__catalogueExport;
/*
 * Worked examples are part of the approved hybrid guidance template, not decorative
 * copy. Extract the same scenario-selection function so hover help and placeholders
 * remain identical across editions as well as the underlying fields.
 */
const scenarioStart = source.indexOf("const toolExampleScenarios =");
const scenarioEnd = source.indexOf("function specificPublicHealthRole");
if (scenarioStart < 0 || scenarioEnd < 0) throw new Error("Could not locate canonical tool example scenarios in app.js.");
vm.runInContext(`${source.slice(scenarioStart, scenarioEnd)}\n;globalThis.__scenarioExport = Object.fromEntries(${JSON.stringify(selectedIds)}.map(id => [id, toolExampleScenario({ id })]));`, context);

const data = {
  schemaVersion: "1.0",
  generatedFrom: "app.js canonical tool catalogue",
  playToolMap,
  tools: canonical.tools.filter(tool => selectedIds.includes(tool.id)),
  blueprints: Object.fromEntries(selectedIds.map(id => [id, canonical.toolFormBlueprints[id]])),
  outputs: Object.fromEntries(selectedIds.map(id => [id, canonical.toolOutputOverrides[id] || []])),
  scenarios: context.__scenarioExport
};

const banner = `/**\n * GENERATED FILE — DO NOT HAND EDIT.\n+ * Source: app.js canonical tool catalogue.\n+ * Generator: scripts/generate-foundation-tool-catalog.js.\n+ * The Full and Essentials editions consume these exact selected tool records.\n+ */\n`;
fs.writeFileSync(outputPath, `${banner}window.FoundationToolCatalog = ${JSON.stringify(data, null, 2)};\n`, "utf8");
console.log(`Generated ${path.relative(root, outputPath)} with ${data.tools.length} canonical tools.`);
