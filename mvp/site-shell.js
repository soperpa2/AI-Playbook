(function renderSharedMvpHeader() {
  const header = document.querySelector("header");
  if (!header) return;

  header.innerHTML = `
    <a class="brand" href="index.html#top">
      <img src="../assets/ai-playbook-logo-public-health.png" alt="">
      <span><strong>Public Health AI Strategy &amp; Implementation Playbook</strong><small>for Public Health Departments</small></span>
    </a>
    <button class="menu" type="button" aria-controls="primary-nav" aria-expanded="false">Menu</button>
    <nav id="primary-nav" aria-label="Primary navigation">
      <a href="index.html#plays" data-nav="plays">The 13 Plays</a>
      <a href="learning.html" data-nav="learning">Core Learning</a>
      <a href="training-paths.html" data-nav="training">Training Paths</a>
      <a href="resources.html" data-nav="resources">Evidence &amp; Resources</a>
      <a href="reviewer.html" data-nav="reviewer">Become a Reviewer</a>
      <a href="feedback.html" data-nav="feedback">Feedback</a>
      <a href="about.html" data-nav="about">About this MVP</a>
      <a class="outline" href="https://phisolutions.us" target="_blank" rel="noopener">Consulting</a>
    </nav>`;

  const page = location.pathname.split("/").pop() || "index.html";
  const active = page === "learning.html" || page === "module.html" ? "learning"
    : page === "training-paths.html" || page === "training-path.html" ? "training"
    : page === "resources.html" ? "resources"
    : page === "reviewer.html" ? "reviewer"
    : page === "feedback.html" ? "feedback"
    : page === "about.html" || page === "privacy.html" ? "about"
    : page === "detail.html" || page === "tool.html" ? "plays"
    : "";
  if (active) header.querySelector(`[data-nav="${active}"]`)?.setAttribute("aria-current", "page");

  const menu = header.querySelector(".menu");
  const nav = header.querySelector("#primary-nav");
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
})();
