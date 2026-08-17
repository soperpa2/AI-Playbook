(function renderFoundationShell() {
  const canonicalStyles = document.createElement("link");
  canonicalStyles.rel = "stylesheet";
  canonicalStyles.href = "../styles.css?v=20260817-foundation-shell";
  document.head.appendChild(canonicalStyles);

  const header = document.querySelector("header");
  if (!header) return;
  header.className = "site-header";
  header.innerHTML = `
    <a class="brand" href="index.html#top">
      <img class="brand-logo" src="../assets/ai-playbook-logo-public-health.png?v=transparent-bg" alt="AI Playbook and Toolkit for Public Health Departments">
      <span><strong>AI Playbook and Toolkit</strong><small>Foundation Edition for Public Health Departments</small></span>
    </a>
    <button class="menu-button" type="button" aria-controls="primary-nav" aria-expanded="false">Menu</button>
    <nav id="primary-nav" class="primary-nav" aria-label="Primary navigation">
      <a href="index.html#top" data-nav="start">Start Here</a>
      <a href="learning.html" data-nav="learn">Learn</a>
      <a href="tool.html?play=2" data-nav="assess">Assess</a>
      <a href="foundation-page.html?view=maturity" data-nav="maturity">Maturity Model</a>
      <a href="index.html#plays" data-nav="plays">Plays</a>
      <a href="toolkit.html" data-nav="toolkit">Toolkit</a>
      <a href="foundation-page.html?view=cases" data-nav="cases">Case Studies</a>
      <a href="foundation-page.html?view=community" data-nav="community">Community</a>
      <a href="feedback.html" data-nav="contribute">Contribute</a>
      <a href="foundation-page.html?view=contact" data-nav="contact">Contact Us</a>
      <a href="resources.html" data-nav="resources">Resources</a>
      <a href="foundation-page.html?view=news" data-nav="news">In the News</a>
    </nav>`;

  const page = location.pathname.split("/").pop() || "index.html";
  const view = new URLSearchParams(location.search).get("view");
  const active = page === "learning.html" || page === "module.html" || page === "training-paths.html" || page === "training-path.html" ? "learn"
    : page === "toolkit.html" || page === "tool.html" ? (new URLSearchParams(location.search).get("play") === "2" ? "assess" : "toolkit")
    : page === "detail.html" ? "plays"
    : page === "resources.html" ? "resources"
    : page === "feedback.html" || page === "reviewer.html" ? "contribute"
    : page === "foundation-page.html" ? view
    : "start";
  header.querySelector(`[data-nav="${active}"]`)?.classList.add("active");
  header.querySelector(`[data-nav="${active}"]`)?.setAttribute("aria-current", "page");

  const menu = header.querySelector(".menu-button");
  const nav = header.querySelector("#primary-nav");
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  const footer = document.querySelector("footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <span>AI Playbook and Toolkit for Public Health Departments</span>
      <span>&copy; 2026 Paula Soper. All rights reserved.</span>
      <span>Foundation Edition</span>
      <span><a href="foundation-page.html?view=contact">Contact Us</a></span>
      <span><a href="consulting.html">Need More Help?</a> &middot; <a href="feedback.html">Feedback</a> &middot; <a href="about.html">About the Foundation Edition</a> &middot; <a href="privacy.html">Privacy</a></span>`;
  }
})();
