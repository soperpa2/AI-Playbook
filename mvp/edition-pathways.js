document.querySelectorAll("[data-edition-pathways]").forEach(target => {
  target.outerHTML = window.PlaybookTemplates.editionPathways();
});
