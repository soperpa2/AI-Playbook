/**
 * Shared navigation, footer, active-state, and page-template adapter.
 *
 * This is the cross-edition shell contract. Both editions expose the same public
 * navigation concepts and brand treatment. URLs differ because the Full Version is
 * a hash-routed single-page application while Essentials uses static HTML pages.
 * Organization Hub is intentionally Full-only; Essentials still exposes My Account.
 *
 * When adding or renaming a public destination:
 * 1. update the shared group definitions and their edition-specific routes in the same change;
 * 2. add the Essentials active-key mapping when necessary;
 * 3. verify desktop and mobile menus in both editions; and
 * 4. preserve the conspicuous Consulting Support route.
 *
 * The MutationObserver exists because several Essentials pages render their main
 * content after this script runs. `applyEssentialsTemplates` must therefore remain
 * idempotent: repeated calls may add classes but must not duplicate content.
 */
(function renderSharedPlaybookShell() {
  /** True only for Essentials Edition pages served from the legacy internal `mvp/` directory. */
  const foundation = location.pathname.includes("/mvp/");
  if (foundation) {
    document.body.classList.add("foundation-edition");
    if (!document.querySelector('link[data-shared-edition-templates]')) {
      const templateStyles = document.createElement("link");
      templateStyles.rel = "stylesheet";
      templateStyles.href = "../content/edition-templates.css?v=20260821-shared-page-system";
      templateStyles.dataset.sharedEditionTemplates = "true";
      document.head.appendChild(templateStyles);
    }
  }
  /**
   * Navigation tuple: [visible label, edition-local URL, stable active-state key].
   * Labels and keys should match across editions even when URLs do not.
   * @type {Array<[string,string,string]>}
   */
  const route = (full, essentials) => foundation ? essentials : full;
  const groups = [
    { label: "Start Here", href: route("#/", "index.html#top"), key: "start", items: [
      ["Home", route("#/", "index.html#top"), "start"], ["Maturity Model", route("#/maturity", "foundation-page.html?view=maturity"), "maturity"]
    ]},
    { label: "Learn", href: route("#/learn", "learning.html"), key: "learn", items: [
      ["Learning Catalog", route("#/learn", "learning.html"), "learn"], ["Learning Pathways", route("#/learning-pathways", "training-paths.html"), "learn"], ["Personalized Learning Assessment", route("#/learning-assessment", "learning-assessment.html"), "learn"]
    ]},
    { label: "Assess", href: route("#/assess", "assess.html"), key: "assess", items: [
      ["Readiness and Pathway Assessment", route("#/assess", "assess.html"), "assess"], ["Maturity Model", route("#/maturity", "foundation-page.html?view=maturity"), "maturity"]
    ]},
    { label: "Plays", href: route("#/plays", "plays.html"), key: "plays", items: [
      ["All 13 Plays", route("#/plays", "plays.html"), "plays"], ["Case Studies", route("#/cases", "foundation-page.html?view=cases"), "cases"]
    ]},
    { label: "Toolkit", href: route("#/toolkit", "toolkit.html"), key: "toolkit", items: [
      ["Browse Toolkit", route("#/toolkit", "toolkit.html"), "toolkit"], ["Evidence and Resources", route("#/references", "resources.html"), "resources"]
    ]},
    { label: "Community", href: route("#/community", "foundation-page.html?view=community"), key: "community", items: [
      ["Community", route("#/community", "foundation-page.html?view=community"), "community"], ["Become a Reviewer", route("#/contribute", "reviewer.html"), "contribute"], ["Feedback", route("#/contribute", "feedback.html"), "contribute"], ["In the News", route("#/news", "foundation-page.html?view=news"), "news"], ["Contact Us", route("#/contact", "foundation-page.html?view=contact"), "contact"]
    ]},
    { label: "My Account", href: route("#/member", "account.html"), key: "member", items: foundation ? [
      ["My Account", "account.html", "member"]
    ] : [["My Account", "#/member", "member"], ["Organization Hub", "#/organization", "organization"]] }
  ];

  const header = document.querySelector("header");
  if (header) {
    header.className = "site-header";
    /*
     * Desktop branding intentionally uses the canonical logo without adjacent text.
     * Repeating the long product name consumed horizontal space needed by the shared
     * navigation and caused overlap at common laptop widths. A compact text treatment
     * remains in the markup for mobile display, where navigation is collapsed behind
     * the Menu button and the additional product identification improves orientation.
     * The accessible link label preserves the complete name at every viewport size.
     */
    const groupMarkup = groups.map((group, index) => `<div class="nav-group" data-nav-group="${group.key}"><span class="nav-primary-row"><a class="nav-primary" href="${group.href}" data-nav="${group.key}">${group.label}</a><button class="nav-submenu-toggle" type="button" aria-expanded="false" aria-controls="nav-submenu-${index}" aria-label="Show ${group.label} menu"><span aria-hidden="true">▾</span></button></span><div class="nav-submenu" id="nav-submenu-${index}">${group.items.map(([label, href, key]) => `<a href="${href}" data-nav="${key}">${label}</a>`).join("")}</div></div>`).join("");
    header.innerHTML = `<a class="brand" href="${foundation ? "index.html#top" : "#/"}" aria-label="AI Playbook for Public Health home"><img class="brand-logo" src="${foundation ? "../" : ""}assets/ai-playbook-logo-public-health.png?v=transparent-bg" alt=""><span class="mobile-brand-text"><strong>AI Playbook for Public Health</strong><small>${foundation ? "Essentials Edition" : "Full Version"}</small></span></a><button class="menu-button" type="button" aria-controls="primary-nav" aria-expanded="false">Menu</button><nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">${groupMarkup}<a class="nav-consulting" href="${foundation ? "consulting.html" : "#/consulting"}" data-nav="consulting">Consulting Support</a></nav>`;
    const menu = header.querySelector(".menu-button");
    const nav = header.querySelector("#primary-nav");
    /*
     * Both editions use the same responsive menu. Keeping this listener edition-
     * neutral prevents the Full Version from displaying a nonfunctional Menu button
     * when the earlier desktop-to-mobile breakpoint is reached.
     */
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
    /* Hover/focus opens submenus on desktop; these buttons provide equivalent
     * disclosure behavior for touch, keyboard, and the compact mobile menu. */
    nav.querySelectorAll(".nav-submenu-toggle").forEach(toggle => toggle.addEventListener("click", event => {
      event.stopPropagation();
      const group = toggle.closest(".nav-group");
      const open = !group.classList.contains("submenu-open");
      nav.querySelectorAll(".nav-group.submenu-open").forEach(item => { item.classList.remove("submenu-open"); item.querySelector(".nav-submenu-toggle")?.setAttribute("aria-expanded", "false"); });
      group.classList.toggle("submenu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }));
    /* Close the compact menu after navigation so the destination is unobstructed. */
    nav.addEventListener("click", event => {
      if (!event.target.closest("a")) return;
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    });
  }

  const footer = document.querySelector("footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = foundation ? `<span>AI Playbook, Toolkit, and Learning Modules for Public Health Departments</span><span>&copy; 2026 Paula Soper. All rights reserved.</span><span>Essentials Edition</span><span><a href="consulting.html">Need More Help?</a> · <a href="foundation-page.html?view=contact">Contact Us</a></span><span><a href="feedback.html">Feedback</a> · <a href="about.html">About</a> · <a href="privacy.html">Privacy</a></span>` : `<span>AI Playbook, Toolkit, and Learning Modules for Public Health Departments</span><span>&copy; 2026 Paula Soper. All rights reserved.</span><span>Updated implementation website</span><span><a href="#/consulting">Need More Help?</a> · <a href="#/contact">Contact Us</a></span><span><a href="#/contribute">Feedback</a> · Playbook: <a href="downloads/AI_Playbook_for_Public_Health_Playbook.pdf">PDF</a> / <a href="downloads/AI_Playbook_for_Public_Health_Playbook.docx">Word</a> · Toolkit: <a href="downloads/AI_Playbook_for_Public_Health_Toolkit.pdf">PDF</a> / <a href="downloads/AI_Playbook_for_Public_Health_Toolkit.docx">Word</a></span>`;
  }

  /** @returns {string} Stable navigation key for the current Essentials page. */
  function foundationActiveKey() {
    const page = location.pathname.split("/").pop() || "index.html";
    const params = new URLSearchParams(location.search);
    const view = params.get("view");
    if (["learning.html", "module.html", "training-paths.html", "training-path.html"].includes(page)) return "learn";
    if (page === "assess.html") return "assess";
    if (["toolkit.html", "tool.html"].includes(page)) return "toolkit";
    if (page === "account.html") return "member";
    if (["plays.html", "detail.html"].includes(page)) return "plays";
    if (page === "resources.html") return "resources";
    if (["feedback.html", "reviewer.html"].includes(page)) return "contribute";
    if (page === "foundation-page.html") return view || "start";
    return "start";
  }

  /**
   * Adds shared semantic layout classes to legacy Essentials markup.
   * Safe to invoke repeatedly after dynamic rendering.
   * @returns {void}
   */
  function applyEssentialsTemplates() {
    const main = document.querySelector("main");
    if (main && !main.querySelector(":scope > .page") && !main.querySelector(":scope > .hero, :scope > .hero-band")) main.classList.add("page", "shared-page-template");
    document.querySelectorAll(".page-hero, .resource-hero, .learning-hero, .assessment-hero, .account-hero").forEach(element => element.classList.add("panel", "shared-page-hero"));
    document.querySelectorAll(".page-panel").forEach(element => element.classList.add("panel", "shared-content-panel"));
    document.querySelectorAll(".resource-main, .learning-intro, .module-catalog, .paths-cta, .path-principles, .training-grid, .review-callout, .form-shell").forEach(element => element.classList.add("shared-page-section"));
    document.querySelectorAll(".detail-layout").forEach(element => element.classList.add("two-col"));
  }

  /**
   * Public shell API used by edition pages.
   * `setActive` changes presentation/ARIA state only; it does not navigate.
   */
  window.PlaybookShell = { foundation, applyTemplates: applyEssentialsTemplates, setActive(key) {
    document.querySelectorAll(".primary-nav a").forEach(link => { const active = link.dataset.nav === key; link.classList.toggle("active", active); if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current"); });
    document.querySelectorAll(".nav-group").forEach(group => group.classList.toggle("active", Boolean(group.querySelector(`a[data-nav="${key}"]`))));
  } };
  if (foundation) {
    window.PlaybookShell.setActive(foundationActiveKey());
    const main = document.querySelector("main");
    applyEssentialsTemplates();
    if (main) new MutationObserver(applyEssentialsTemplates).observe(main, { childList: true, subtree: true });
  }
})();
