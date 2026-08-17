import fs from "node:fs";
import vm from "node:vm";

global.window = {
  PlaybookTemplates: { pageOpen: () => "<section>" },
  newsFeedData: JSON.parse(fs.readFileSync("assets/news-feed.json", "utf8"))
};
vm.runInThisContext(fs.readFileSync("content/news-feed-template.js", "utf8"));

const canonical = window.NewsFeedTemplate.render({ edition: "canonical" });
const foundation = window.NewsFeedTemplate.render({ edition: "foundation" });
if (!canonical.includes("#/plays/") || canonical.includes("detail.html?play=")) throw new Error("Canonical play-link routing failed.");
if (!foundation.includes("detail.html?play=") || foundation.includes("#/plays/")) throw new Error("Foundation play-link routing failed.");
const cardCount = canonical.split('<article class="news-card"').length - 1;
if (cardCount !== window.newsFeedData.items.length) throw new Error(`Expected ${window.newsFeedData.items.length} cards; rendered ${cardCount}.`);
console.log(`Shared template tests passed for both editions: ${cardCount} items.`);
