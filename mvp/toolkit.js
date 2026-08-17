const { plays, release } = window.launchContent;
const main = document.querySelector("#main");

main.innerHTML = `<section class="page">
  <p class="eyebrow">Foundation Edition Toolkit</p>
  <h1>One practical tool for every play.</h1>
  <p class="lead">All 13 Foundation Tools are available now. Open a tool to complete it in your browser, save local progress, download your responses, or print it as a working document.</p>
  <div class="content-meta"><span>13 plays</span><span>13 available tools</span><span>Version ${release.version}</span></div>
  <div class="tools-grid" style="margin-top:2rem">
    ${plays.map(play => `<article class="card" data-content-id="${play.tool.id}">
      <p class="eyebrow">${play.phase} · Play ${play.number}</p>
      <h2>${play.tool.title}</h2>
      <p>${play.tool.purpose}</p>
      <div class="button-row"><a class="btn primary" href="tool.html?play=${play.number}">Open tool</a><a class="btn" href="detail.html?play=${play.number}">View related play</a></div>
    </article>`).join("")}
  </div>
</section>`;
