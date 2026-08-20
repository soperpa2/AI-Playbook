const FOUNDATION_MEMBER_KEY = "foundation-member-profile";
const FOUNDATION_LEARNING_ASSESSMENT_KEY = "foundation-learning-pathway-assessment";
const FOUNDATION_LEARNING_PROGRESS_KEY = "foundation-learning-progress";
const accountMain = document.querySelector("#account-main");

function foundationMember() {
  try { return JSON.parse(localStorage.getItem(FOUNDATION_MEMBER_KEY) || "null"); }
  catch { return null; }
}

function savedToolCount() {
  return Object.keys(localStorage).filter(key => key.startsWith("foundation-tool-")).length;
}

function readFoundationJson(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch { return fallback; }
}

const foundationCourseLinks = {"INT 100":"module.html?id=int-100","INT 105":"module.html?id=int-105","INT 190":"module.html?id=int-190","INT 200":"module.html?id=int-200","INT 250":"module.html?id=int-250","GOV 100":"module.html?id=gov-100","GOV 110":"module.html?id=gov-110","COM 200":"module.html?id=com-200","COM 210":"module.html?id=com-210"};

function renderFoundationAccount() {
  const member = foundationMember();
  const learningAssessment = readFoundationJson(FOUNDATION_LEARNING_ASSESSMENT_KEY, null);
  const learningProgress = readFoundationJson(FOUNDATION_LEARNING_PROGRESS_KEY, {});
  const recommended = learningAssessment?.recommendations || [];
  const completedRecommended = recommended.filter(item => learningProgress[item.courseId]?.completed).length;
  accountMain.innerHTML = `
    <section class="page-hero panel"><p class="eyebrow">Foundation Edition</p><h1>My Account</h1><p>A simple personal account for free members. Join to download Foundation Tools, keep work in this browser, and become eligible to review new tools before release.</p></section>
    <section class="panel"><div class="foundation-account-summary">
      <article><strong>${member ? "Active" : "Not joined"}</strong><span>Free membership</span></article>
      <article><strong>${savedToolCount()}</strong><span>Tools saved locally</span></article>
      <article><strong>${learningAssessment ? `${completedRecommended}/${recommended.length}` : "Not taken"}</strong><span>Learning pathway progress</span></article>
      <article><strong>${member ? "Eligible" : "Membership required"}</strong><span>Reviewer status</span></article>
    </div><p class="member-status ${member ? "" : "locked"}"><strong>${member ? `Welcome, ${member.firstName || "member"}.` : "Create your free member account."}</strong> ${member ? "Tool downloads are enabled and you may apply for reviewer opportunities." : "Downloading tools and applying to review new tools require free membership."}</p></section>
    <div class="foundation-account-grid"><section class="panel"><h2>${member ? "Member information" : "Join free"}</h2><form id="foundation-member-form" class="foundation-member-form">
      <label>First name<input name="firstName" required autocomplete="given-name" value="${member?.firstName || ""}"></label>
      <label>Last name<input name="lastName" required autocomplete="family-name" value="${member?.lastName || ""}"></label>
      <label class="wide">Email<input name="email" type="email" required autocomplete="email" value="${member?.email || ""}"></label>
      <label class="wide">Organization<input name="organization" autocomplete="organization" value="${member?.organization || ""}"></label>
      <label class="wide">Public health role<select name="role"><option value="">Select one</option>${["Health Officer / Executive","Epidemiologist","Informatics Director","Program Manager","IT / Technical Lead","Communications","Researcher","Student / Learner","Community or partner representative","Other"].map(role => `<option ${member?.role === role ? "selected" : ""}>${role}</option>`).join("")}</select></label>
      <label class="wide"><span><input name="reviewerInterest" type="checkbox" ${member?.reviewerInterest ? "checked" : ""}> I am interested in reviewing new tools before release.</span></label>
      <div class="wide button-row"><button class="btn primary" type="submit">${member ? "Update account" : "Create free account"}</button></div><p class="wide tool-save-status" id="account-status" role="status"></p>
    </form></section><aside class="panel"><h2>Free member benefits</h2><ul class="member-benefits"><li>Download all 13 Foundation Tools.</li><li>Save tool responses in this browser.</li><li>Receive a clear pathway through the 13 plays.</li><li>Take the personalized learning assessment and save recommendations.</li><li>Apply to review new tools and learning resources before release.</li></ul><p><strong>Reviewer prerequisite:</strong> a free member account must be active before a reviewer application can be submitted.</p><div class="button-row"><a class="btn" href="toolkit.html">Open Toolkit</a><a class="btn" href="learning-assessment.html">Learning Assessment</a><a class="btn ${member ? "primary" : ""}" href="${member ? "reviewer.html" : "account.html"}">${member ? "Reviewer opportunities" : "Join to review"}</a></div></aside>
    <section class="panel foundation-learning-account"><h2>My Learning Pathway</h2>${learningAssessment ? `<p><strong>Latest assessment:</strong> ${learningAssessment.savedAt} · ${learningAssessment.role} · ${learningAssessment.score}%</p><p><strong>Recommended progress:</strong> ${completedRecommended} of ${recommended.length} courses complete</p><ol>${recommended.map(item => `<li><strong>${item.courseId}: ${item.title}</strong><small>${item.reason}</small>${item.foundation ? `<a href="${foundationCourseLinks[item.courseId] || "learning.html"}">Available in Foundation course catalog</a>` : `<span class="edition-note">Recommended — available in other editions</span>`}</li>`).join("")}</ol><div class="button-row"><a class="btn primary" href="learning-assessment.html">Review or Retake Assessment</a><a class="btn" href="learning.html">Course Catalog</a></div>` : `<p>${member ? "Take the personalized learning assessment to identify strengths and gaps and save an ordered course pathway." : "Create a free account before taking the personalized learning assessment."}</p><a class="btn ${member ? "primary" : ""}" href="${member ? "learning-assessment.html" : "account.html?return=learning-assessment.html"}">${member ? "Take Learning Assessment" : "Create Free Account"}</a>`}</section></div>`;
  document.querySelector("#foundation-member-form").addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    data.reviewerInterest = event.currentTarget.elements.reviewerInterest.checked;
    data.membership = "free";
    data.joinedAt = member?.joinedAt || new Date().toISOString();
    localStorage.setItem(FOUNDATION_MEMBER_KEY, JSON.stringify(data));
    const returnPage = new URLSearchParams(location.search).get("return");
    if (returnPage === "learning-assessment.html") { location.href = returnPage; return; }
    renderFoundationAccount();
    document.querySelector("#account-status").textContent = "Your free member account is active.";
  });
}

renderFoundationAccount();
