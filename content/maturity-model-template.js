(function () {
  function render(options = {}) {
    const data = window.maturityModelData;
    const foundation = options.edition === "foundation";
    const prefix = options.assetPrefix || "";
    const playLink = options.playLink || (id => foundation ? `<a href="detail.html?play=${id}">Play ${id}</a>` : `<a href="#/plays/${id}">Play ${id}</a>`);
    const toolLink = options.toolLink || (id => foundation ? `<a href="tool.html?play=${id}">Play ${id} Essentials Tool</a>` : `<a href="#/toolkit/${id}">Tool ${id}</a>`);
    const pageOpen = window.PlaybookTemplates.pageOpen({ title: data.title, lead: data.intro, eyebrow: "Maturity Model" });
    const hotspots = data.hotspots.map(item => `<a class="maturity-hotspot ${item.className}" href="${foundation ? item.foundation : item.canonical}" aria-label="Open ${item.label}" title="${item.label}" data-tip="${item.label}"></a>`).join("");
    const cards = data.stages.map(stage => {
      const tools = foundation ? stage.plays : stage.tools;
      return `<article class="card"><p class="eyebrow">${stage.focus}</p><h2>Level ${stage.level}: ${stage.title}</h2><p><strong>Activities:</strong> ${stage.activities}</p><p><strong>Common risks:</strong> ${stage.risks}</p><p><strong>Recommended plays:</strong> ${stage.plays.map(playLink).join(", ")}</p><p><strong>${foundation ? "Available Essentials tools" : "Related tools"}:</strong> ${tools.map(toolLink).join(", ")}</p></article>`;
    }).join("");
    return `${pageOpen}<figure class="maturity-graphic-panel"><img src="${prefix}${data.graphic}" alt="${data.alt}" />${hotspots}</figure><div class="card-grid" style="margin-top:2rem">${cards}</div></section>`;
  }
  window.MaturityModelTemplate = { render };
})();
