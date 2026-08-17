(function renderSharedPlaybookShell() {
  const foundation = location.pathname.includes("/mvp/");
  const links = foundation ? [
    ["Start Here", "index.html#top", "start"], ["Learn", "learning.html", "learn"], ["Assess", "tool.html?play=2", "assess"],
    ["Maturity Model", "foundation-page.html?view=maturity", "maturity"], ["Plays", "index.html#plays", "plays"], ["Toolkit", "toolkit.html", "toolkit"],
    ["Case Studies", "foundation-page.html?view=cases", "cases"], ["Community", "foundation-page.html?view=community", "community"],
    ["Contribute", "feedback.html", "contribute"], ["Contact Us", "foundation-page.html?view=contact", "contact"],
    ["Resources", "resources.html", "resources"], ["In the News", "foundation-page.html?view=news", "news"]
  ] : [
    ["Start Here", "#/", "start"], ["Learn", "#/learn", "learn"], ["Assess", "#/assess", "assess"], ["Maturity Model", "#/maturity", "maturity"],
    ["Plays", "#/plays", "plays"], ["Toolkit", "#/toolkit", "toolkit"], ["Case Studies", "#/cases", "cases"], ["My Account", "#/member", "member"],
    ["Organization Hub", "#/organization", "organization"], ["Community", "#/community", "community"], ["Contribute", "#/contribute", "contribute"],
    ["Contact Us", "#/contact", "contact"], ["Resources", "#/references", "resources"], ["In the News", "#/news", "news"]
  ];

  const header = document.querySelector("header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `<a class="brand" href="${foundation ? "index.html#top" : "#/"}"><img class="brand-logo" src="${foundation ? "../" : ""}assets/ai-playbook-logo-public-health.png?v=transparent-bg" alt="AI Playbook and Toolkit for Public Health Departments"><span><strong>AI Playbook and Toolkit</strong><small>${foundation ? "Foundation Edition for " : "for "}Public Health Departments</small></span></a><button class="menu-button" type="button" aria-controls="primary-nav" aria-expanded="false">Menu</button><nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">${links.map(([label, href, key]) => `<a href="${href}" data-nav="${key}">${label}</a>`).join("")}</nav>`;
    const menu = header.querySelector(".menu-button");
    const nav = header.querySelector("#primary-nav");
    if (foundation) menu.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
  }

  const footer = document.querySelector("footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = foundation ? `<span>AI Playbook and Toolkit for Public Health Departments</span><span>&copy; 2026 Paula Soper. All rights reserved.</span><span>Foundation Edition</span><span><a href="consulting.html">Need More Help?</a> · <a href="foundation-page.html?view=contact">Contact Us</a></span><span><a href="feedback.html">Feedback</a> · <a href="about.html">About</a> · <a href="privacy.html">Privacy</a></span>` : `<span>AI Playbook and Toolkit for Public Health Departments</span><span>&copy; 2026 Paula Soper. All rights reserved.</span><span>Updated implementation website</span><span><a href="#/consulting">Need More Help?</a> · <a href="#/contact">Contact Us</a></span><span><a href="#/contribute">Feedback</a> · Playbook: <a href="downloads/AI_Playbook_for_Public_Health_Playbook.pdf">PDF</a> / <a href="downloads/AI_Playbook_for_Public_Health_Playbook.docx">Word</a> · Toolkit: <a href="downloads/AI_Playbook_for_Public_Health_Toolkit.pdf">PDF</a> / <a href="downloads/AI_Playbook_for_Public_Health_Toolkit.docx">Word</a></span>`;
  }

  function foundationActiveKey() {
    const page = location.pathname.split("/").pop() || "index.html";
    const params = new URLSearchParams(location.search);
    const view = params.get("view");
    if (["learning.html", "module.html", "training-paths.html", "training-path.html"].includes(page)) return "learn";
    if (page === "tool.html" && params.get("play") === "2") return "assess";
    if (["toolkit.html", "tool.html"].includes(page)) return "toolkit";
    if (page === "detail.html") return "plays";
    if (page === "resources.html") return "resources";
    if (["feedback.html", "reviewer.html"].includes(page)) return "contribute";
    if (page === "foundation-page.html") return view || "start";
    return "start";
  }

  function applyFoundationTemplates() {
    const main = document.querySelector("main");
    if (main && !main.querySelector(":scope > .page") && !main.querySelector(":scope > .hero")) main.classList.add("page");
    document.querySelectorAll(".page-hero, .page-panel").forEach(element => element.classList.add("panel"));
    document.querySelectorAll(".detail-layout").forEach(element => element.classList.add("two-col"));
  }

  window.PlaybookShell = { foundation, applyTemplates: applyFoundationTemplates, setActive(key) { document.querySelectorAll(".primary-nav a").forEach(link => { const active = link.dataset.nav === key; link.classList.toggle("active", active); if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current"); }); } };
  if (foundation) {
    window.PlaybookShell.setActive(foundationActiveKey());
    const main = document.querySelector("main");
    applyFoundationTemplates();
    if (main) new MutationObserver(applyFoundationTemplates).observe(main, { childList: true, subtree: true });
  }
})();
