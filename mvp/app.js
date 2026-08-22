const {plays, release} = window.launchContent;
const grid = document.querySelector("#plays-grid");

function playUrl(play) {
  return `detail.html?play=${play.number}`;
}

function render(filter = "all") {
  grid.innerHTML = plays
    .filter(play => filter === "all" || play.phase === filter)
    .map(play => `<article class="play ${play.phase}" id="play-${String(play.number).padStart(2,"0")}" data-content-id="${play.id}">
      <div class="meta"><span>${String(play.number).padStart(2,"0")}</span><b>${play.phase}</b></div>
      <h3><a href="${playUrl(play)}">${play.title}</a></h3>
      <p>${play.summary}</p>
      <a class="detail-link" href="${playUrl(play)}">Explore Play ${play.number} →</a>
      <div class="evidence-label"><small>Evidence basis</small><strong>${play.evidence}</strong></div>
      <div class="starter" data-content-id="${play.tool.id}"><small>Essentials Tool</small><strong><a href="tool.html?play=${play.number}">${play.tool.title}</a></strong><a class="tool-link" href="tool.html?play=${play.number}">Open this tool →</a></div>
    </article>`).join("");
}

const requestedPhase = new URLSearchParams(location.search).get("phase");
const initialPhase = ["plan", "build", "deploy", "govern"].includes(requestedPhase) ? requestedPhase : "all";
render(initialPhase);
document.querySelectorAll(".tabs button").forEach(button => {
  button.classList.toggle("active", button.dataset.phase === initialPhase);
});
document.querySelectorAll(".tabs button").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".tabs button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  render(button.dataset.phase);
}));

const releaseNode = document.querySelector("#release-status");
if (releaseNode) releaseNode.textContent = `${release.label} · Version ${release.version} · Updated ${release.updatedAt}`;

document.querySelector("#signup-form")?.addEventListener("submit", event => {
  event.preventDefault();
  const note = document.querySelector("#form-note");
  note.textContent = "This preview form is not yet collecting submissions. Email updates will be enabled before public launch.";
  note.classList.add("success");
});
