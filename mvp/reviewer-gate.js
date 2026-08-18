const reviewerMember = (() => { try { return JSON.parse(localStorage.getItem("foundation-member-profile") || "null"); } catch { return null; } })();
const reviewerForm = document.querySelector("[data-demo-form]");
if (reviewerForm && !reviewerMember) {
  reviewerForm.querySelectorAll("input, select, textarea, button").forEach(control => control.disabled = true);
  reviewerForm.insertAdjacentHTML("afterbegin", '<div class="wide member-status locked"><strong>Free membership is required before applying to review new tools.</strong><br><a class="btn primary small" href="account.html">Create free account</a></div>');
} else if (reviewerForm && reviewerMember) {
  const pairs = { name: [reviewerMember.firstName, reviewerMember.lastName].filter(Boolean).join(" "), email: reviewerMember.email, organization: reviewerMember.organization, role: reviewerMember.role };
  Object.entries(pairs).forEach(([name, value]) => { const field = reviewerForm.elements.namedItem(name); if (field && value) field.value = value; });
}
