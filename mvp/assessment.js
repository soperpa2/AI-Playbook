/**
 * Essentials readiness/pathway assessment controller.
 * The assessment is the entry step before the journey, not a numbered tool. It
 * recommends an ordered pathway. Play 2 remains distinct: people validate these
 * preliminary results with local evidence and create an improvement plan there.
 * All Essentials result links must remain inside /mvp.
 */
(function renderEssentialsAssessment() {
  const main = document.querySelector("#assessment-main");
  const assessment = window.ReadinessAssessment;
  const plays = window.launchContent.plays;
  const saved = JSON.parse(localStorage.getItem("foundation-readiness-assessment") || "{}");
  const descriptions = [
    "No current capability, policy, process, or documented activity is in place.",
    "Early or informal activity exists, but it is incomplete, inconsistent, or not yet adopted agency-wide.",
    "A defined capability or process exists and is being used, though gaps or improvements remain.",
    "Capability is mature, documented, routinely used, governed, and ready to support responsible AI implementation."
  ];

  let latestResult = null;
  main.innerHTML = `<section class="page-hero panel"><p class="eyebrow">Start Here · Build Your Path</p><h1>AI Readiness and Pathway Assessment</h1><p>Use the same seven-domain assessment and recommendation logic as the Full Version to identify strengths and gaps, estimate readiness, and generate a customized path through the 13 plays. Play 2 then validates these preliminary findings and turns confirmed gaps into an improvement plan.</p></section>
  <div class="assessment-grid">
    <form id="assessment" class="panel"><h2>Readiness Domains</h2>
      <div class="rating-legend" aria-label="Rating scale">${assessment.scale.map((label, value) => `<div><strong>${value}</strong><span>${label}</span><p>${descriptions[value]}</p></div>`).join("")}</div>
      ${assessment.domains.map(domain => `<details class="domain-row" open><summary><span>${domain.name}</span><span id="subtotal-${domain.id}">0 / 100</span></summary>${domain.indicators.map((label, index) => `<div class="indicator"><span>${label}</span><fieldset class="rating-set" aria-label="${domain.name}: ${label}">${assessment.scale.map((_, value) => `<label><span>${value}</span><input type="radio" name="${domain.id}-${index}" value="${value}" ${Number(saved[`${domain.id}-${index}`] || 0) === value ? "checked" : ""}></label>`).join("")}</fieldset></div>`).join("")}</details>`).join("")}
    </form>
    <aside><section class="panel score-card"><h2>100-Point Score + Maturity Link</h2><p>Total readiness score</p><div class="score-number"><span id="total-score">0</span> / 100</div><p id="raw-score">Raw score: 0</p><p><span id="readiness-level" class="status-label"></span></p><p id="readiness-action"></p><div class="scale-mini"><strong>Question scale:</strong> 0 None, 1 Some, 2 Good, 3 Excellent. Scores are converted to a 100-point readiness score.</div><div class="button-row no-print"><button class="btn primary small" type="button" id="save-assessment">Save Progress</button><button class="btn small" type="button" id="print-assessment">Print or Save PDF</button></div><p id="assessment-save-status" class="save-status" aria-live="polite"></p></section><section class="panel" style="margin-top:2rem"><h2>Generated Outputs</h2><ul><li>Readiness profile</li><li>Gap register</li><li>Maturity estimate</li><li>Governance review flags</li><li>Recommended next plays</li><li>Printable summary</li></ul><div id="assessment-recs"></div></section></aside>
  </div>`;

  function playLink(number) {
    const play = plays[number - 1];
    return `<a href="detail.html?play=${number}">Play ${number}: ${play.title}</a>`;
  }

  function update() {
    let total = 0;
    const scores = assessment.domains.map(domain => {
      let subtotal = 0;
      domain.indicators.forEach((_, index) => { subtotal += Number(document.querySelector(`input[name="${domain.id}-${index}"]:checked`).value); });
      total += subtotal;
      const percent = Math.round(subtotal / 12 * 100);
      document.querySelector(`#subtotal-${domain.id}`).textContent = `${percent} / 100 (raw ${subtotal} / 12)`;
      return { name: domain.name, subtotal, percent };
    });
    const maximum = assessment.domains.length * 12;
    const percent = Math.round(total / maximum * 100);
    const interpretation = assessment.interpret(percent);
    const gaps = scores.filter(item => item.subtotal <= 6).sort((a, b) => a.subtotal - b.subtotal);
    const recommendations = new Set(interpretation.plays);
    gaps.forEach(gap => assessment.gapRecommendations[gap.name].plays.forEach(number => recommendations.add(number)));
    document.querySelector("#total-score").textContent = percent;
    document.querySelector("#raw-score").textContent = `Raw score: ${total} / ${maximum}`;
    document.querySelector("#readiness-level").textContent = interpretation.level;
    document.querySelector("#readiness-action").textContent = `Recommended: ${interpretation.action}`;
    const recommended = [...recommendations].sort((a, b) => a - b);
    latestResult = { score: percent, rawScore: `${total} / ${maximum}`, level: interpretation.level, action: interpretation.action, recommendedPlays: recommended, domainScores: scores, priorityGaps: gaps };
    document.querySelector("#assessment-recs").innerHTML = `<h3>Your Customized Pathway</h3><p>${recommended.map(playLink).join("<br>")}</p><h3>Essentials Tools for Those Plays</h3><p>${recommended.map(number => `<a href="tool.html?play=${number}">${plays[number - 1].tool.title}</a>`).join("<br>")}</p><h3>Priority Gap Areas</h3><p>${gaps.length ? gaps.map(gap => `${gap.name}: ${gap.percent} / 100 (raw ${gap.subtotal} / 12)`).join("<br>") : "No domain scored 50 / 100 or below. Use the recommendations to prepare for the next stage."}</p>${recommended.includes(2) ? '<p><a class="btn small" href="tool.html?play=2">Continue to Play 2 validation and improvement planning</a></p>' : ''}`;
  }

  document.querySelector("#assessment").addEventListener("change", update);
  document.querySelector("#save-assessment").addEventListener("click", () => {
    const values = {};
    document.querySelectorAll('#assessment input[type="radio"]:checked').forEach(input => { values[input.name] = Number(input.value); });
    localStorage.setItem("foundation-readiness-assessment", JSON.stringify(values));
    localStorage.setItem("foundation-pathway-assessment-result", JSON.stringify({ ...latestResult, savedAt: new Date().toLocaleString() }));
    document.querySelector("#assessment-save-status").textContent = `Saved in this browser ${new Date().toLocaleString()}.`;
  });
  document.querySelector("#print-assessment").addEventListener("click", () => window.print());
  update();
})();
