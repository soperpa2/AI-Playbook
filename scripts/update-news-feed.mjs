import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourcesPath = path.join(root, "content", "news-sources.json");
const outputPath = path.join(root, "assets", "news-feed.json");
const scriptOutputPath = path.join(root, "assets", "news-feed-data.js");
const sources = JSON.parse(await fs.readFile(sourcesPath, "utf8"));
let existing = { schemaVersion: "1.0", items: [] };
try { existing = JSON.parse(await fs.readFile(outputPath, "utf8")); } catch {}

const aiTerms = /\b(artificial intelligence|generative ai|genai|machine learning|large language model|llm|predictive analy\w+|algorithmic|automated decision|agentic ai|ai system|ai tool)\b/i;
const publicHealthTerms = /\b(public health|health department|health agency|cdc|hhs|fda|cms|nih|hrsa|tribal health|epidemiolog|disease surveillance|population health|health official|health laboratory|government health)\b/i;
const governmentTerms = /\b(federal|state|county|city|local government|territorial|tribal|government agency|public agency|legislature|governor|department|administration)\b/i;
const lawTerms = /\b(law|legislation|bill|regulation|rule|executive order|policy|procurement|ordinance|compliance|privacy|civil rights)\b/i;

function decode(value = "") {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
}

function tag(block, names) {
  for (const name of names) {
    const match = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"));
    if (match) return decode(match[1]);
  }
  return "";
}

function link(block) {
  const atom = block.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i);
  return atom ? decode(atom[1]) : tag(block, ["link", "guid"]);
}

function classify(text) {
  if (lawTerms.test(text)) return { category: "Laws, Regulations, and Policy", relatedPlays: [3, 7, 8, 12] };
  if (publicHealthTerms.test(text) && governmentTerms.test(text)) return { category: "Government Health Agency AI Project", relatedPlays: [3, 7, 11, 13] };
  if (governmentTerms.test(text)) return { category: "Government Agency AI Project", relatedPlays: [3, 8, 11, 12] };
  return { category: "Public Health AI Advancement", relatedPlays: [5, 7, 11, 13] };
}

function qualifies(text) {
  return aiTerms.test(text) && (publicHealthTerms.test(text) || (governmentTerms.test(text) && lawTerms.test(text)));
}

function normalizeUrl(value) {
  try { const url = new URL(value); ["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].forEach(key => url.searchParams.delete(key)); return url.toString(); } catch { return value; }
}

function slug(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80); }

const fetched = [];
for (const source of sources.sources.filter(item => item.ingestion === "rss" && item.feed)) {
  try {
    const response = await fetch(source.feed, { headers: { "user-agent": "Public-Health-AI-Playbook-News-Watch/1.0" }, signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const xml = await response.text();
    const blocks = [...xml.matchAll(/<(item|entry)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/gi)].map(match => match[2]);
    for (const block of blocks.slice(0, 30)) {
      const title = tag(block, ["title"]);
      const summary = tag(block, ["description", "summary", "content:encoded", "content"]);
      const combined = `${title} ${summary}`;
      const url = normalizeUrl(link(block));
      if (!title || !url || !qualifies(combined)) continue;
      const rawDate = tag(block, ["pubDate", "published", "updated", "dc:date"]);
      const parsedDate = rawDate && !Number.isNaN(Date.parse(rawDate)) ? new Date(rawDate) : new Date();
      const classification = classify(combined);
      fetched.push({
        id: `${slug(source.name)}-${slug(title)}`,
        title,
        source: source.name,
        sourceType: source.sourceType,
        date: parsedDate.toISOString().slice(0, 10),
        category: classification.category,
        url,
        summary: summary.slice(0, 420) || "Open the original source for details.",
        relevance: classification.category === "Laws, Regulations, and Policy" ? "This development may change governance, procurement, documentation, transparency, privacy, equity, or oversight expectations for public health agencies." : "This development may offer an implementation example, capability signal, or governance lesson for governmental public health agencies.",
        relatedPlays: classification.relatedPlays,
        reviewStatus: "automated"
      });
    }
    console.log(`Fetched ${source.name}: ${blocks.length} entries checked`);
  } catch (error) {
    console.warn(`Skipped ${source.name}: ${error.message}`);
  }
}

const byUrl = new Map();
const retainedExisting = existing.items.filter(item => item.reviewStatus !== "automated" || qualifies(`${item.title} ${item.summary}`));
for (const item of [...retainedExisting, ...fetched]) byUrl.set(normalizeUrl(item.url), item);
const items = [...byUrl.values()].sort((a, b) => String(b.date).localeCompare(String(a.date))).slice(0, 60);
if (!items.length) throw new Error("No existing or fetched news items are available; refusing to publish an empty feed.");
const output = { schemaVersion: "1.0", updatedAt: new Date().toISOString(), updateMode: fetched.length ? "scheduled-rss-and-curated" : "curated-fallback", items };
await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
await fs.writeFile(scriptOutputPath, `window.newsFeedData = ${JSON.stringify(output, null, 2)};\n`, "utf8");
console.log(`Published ${items.length} items (${fetched.length} fetched this run).`);
