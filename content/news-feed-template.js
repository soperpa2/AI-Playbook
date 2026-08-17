(function () {
  const typeLabels = {
    "authoritative-government": "Government source",
    "public-health-association": "Public health association",
    "public-health-nonprofit": "Public health nonprofit",
    "global-public-health": "Global public health",
    "government-policy-analysis": "Government policy analysis",
    "independent-reporting": "Independent reporting",
    "public-interest-technology": "Public-interest technology",
    "vendor-industry": "Vendor/industry source"
  };

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, character => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[character]);
  }

  function render(options = {}) {
    const foundation = options.edition === "foundation";
    const data = window.newsFeedData || { items: [], updatedAt: null };
    const items = [...data.items].sort((a, b) => String(b.date).localeCompare(String(a.date)));
    const categories = [...new Set(items.map(item => item.category))].sort();
    const sourceTypes = [...new Set(items.map(item => item.sourceType))].sort();
    const relatedLink = play => foundation ? `detail.html?play=${play}` : `#/plays/${play}`;
    const resourcesLink = foundation ? "resources.html" : "#/references";
    const feedbackLink = foundation ? "feedback.html" : "#/contribute";
    const updated = data.updatedAt ? new Date(data.updatedAt).toLocaleDateString(undefined, { year:"numeric", month:"long", day:"numeric" }) : "Not available";
    const pageOpen = window.PlaybookTemplates.pageOpen({
      eyebrow: "In the News",
      title: "Governmental Public Health AI News Watch",
      lead: "Follow governmental public health AI projects, public-health-relevant AI advances, and laws, regulations, policies, and procurement decisions that may affect public health agencies."
    });
    return `${pageOpen}
      <section class="panel news-intro">
        <h2>Focused, transparent monitoring</h2>
        <p>This is not a general AI news feed. Items must identify a governmental or public-health connection and a concrete project, capability, policy, legal development, or implementation lesson. Inclusion is not endorsement or evidence of effectiveness.</p>
        <p><strong>Last feed update:</strong> ${escapeHtml(updated)} · <a href="${resourcesLink}">Review evidence and source standards</a> · <a href="${feedbackLink}">Suggest an item or correction</a></p>
      </section>
      <section class="panel news-controls" aria-label="News filters">
        <label>Category<select id="news-category"><option value="">All categories</option>${categories.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}</select></label>
        <label>Source type<select id="news-source-type"><option value="">All source types</option>${sourceTypes.map(value => `<option value="${escapeHtml(value)}">${escapeHtml(typeLabels[value] || value)}</option>`).join("")}</select></label>
        <label>Search<input id="news-search" type="search" placeholder="Agency, jurisdiction, project, law…"></label>
      </section>
      <p id="news-count" class="news-count" aria-live="polite"></p>
      <section class="news-grid" id="shared-news-grid" aria-label="Curated public health AI news">
        ${items.map(item => `<article class="news-card" data-category="${escapeHtml(item.category)}" data-source-type="${escapeHtml(item.sourceType)}" data-search="${escapeHtml([item.title,item.source,item.summary,item.relevance].join(" ").toLowerCase())}">
          <div class="news-card-header"><span class="news-tag">${escapeHtml(item.category)}</span><span class="news-date">${escapeHtml(item.date)}</span></div>
          <p class="news-source-type ${item.sourceType === "vendor-industry" ? "vendor" : ""}">${escapeHtml(typeLabels[item.sourceType] || item.sourceType)}</p>
          <h2><a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title)}</a></h2>
          <p class="news-meta">${escapeHtml(item.source)} · ${item.reviewStatus === "curated" ? "Curated" : "Automatically monitored"}</p>
          <p>${escapeHtml(item.summary)}</p>
          <div class="news-relevance"><h3>Why it matters for public health</h3><p>${escapeHtml(item.relevance)}</p></div>
          <p class="news-related"><strong>Related plays:</strong> ${(item.relatedPlays || []).map(play => `<a href="${relatedLink(play)}">Play ${play}</a>`).join(", ")}</p>
        </article>`).join("")}
      </section>
    </section>`;
  }

  function bind() {
    const cards = [...document.querySelectorAll("#shared-news-grid .news-card")];
    const category = document.querySelector("#news-category");
    const sourceType = document.querySelector("#news-source-type");
    const search = document.querySelector("#news-search");
    const count = document.querySelector("#news-count");
    if (!category || !sourceType || !search) return;
    const apply = () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const show = (!category.value || card.dataset.category === category.value) && (!sourceType.value || card.dataset.sourceType === sourceType.value) && (!query || card.dataset.search.includes(query));
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (count) count.textContent = `${visible} news item${visible === 1 ? "" : "s"}`;
    };
    [category, sourceType, search].forEach(control => control.addEventListener("input", apply));
    apply();
  }

  window.NewsFeedTemplate = { render, bind };
})();
