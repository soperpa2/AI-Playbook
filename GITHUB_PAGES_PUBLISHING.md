# Publishing the AI Playbook Site on GitHub Pages

This folder is ready to publish as a static GitHub Pages site.

## Recommended Review Setup

Use a private GitHub repository while collaborators review the site. After the review period, the repository can remain private with GitHub Pages access limited according to your GitHub plan, or it can be moved to a production hosting platform.

## Files to Publish

Publish the full contents of this folder:

- `index.html`
- `app.js`
- `styles.css`
- `.nojekyll`
- `assets/`
- `downloads/`

Keep the folder structure intact.

## GitHub Pages Settings

After the files are pushed to GitHub:

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the branch that contains the site files, usually `main`.
6. Select the folder:
   - Use `/root` if the repository contains the site files at the top level.
   - Use `/docs` if the site files are placed in a `docs` folder.
7. Save the settings.

GitHub will provide a Pages URL after the first deployment finishes.

## Notes

- This is a static review build. Member accounts, organization permissions, server-side RSS feeds, saved progress, and production document generation should be implemented during the dynamic production migration.
- The `.nojekyll` file is included so GitHub Pages serves all static assets directly without Jekyll processing.
- Hash-based routes such as `#/learn`, `#/plays`, and `#/toolkit` work well on GitHub Pages because they are handled in the browser.
