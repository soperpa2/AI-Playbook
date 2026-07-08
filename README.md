# AI Playbook and Toolkit for Public Health Departments

This repository contains a polished static website prototype for the **AI Playbook and Toolkit for Public Health Departments**.

## Live Website

After GitHub Pages is enabled for this repository, the public review site will be available at:

```text
https://soperpa2.github.io/AI-Playbook/
```

To enable GitHub Pages:

1. Open the repository **Settings**.
2. Go to **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/root`.
5. Save the settings and wait for GitHub to publish the site.

## Local Review

Open `index.html` in a browser. No build step is required.

For a local server, run this from the folder:

```powershell
python -m http.server 5173
```

Then visit `http://localhost:5173`.

## What Is Included

- Responsive Start Here, Learn, Assess, Maturity Model, Plays, Toolkit, Case Studies, My Account, Organization Hub, Community, Contribute, Resources, Contact Us, and In the News sections.
- Interactive AI Readiness Self-Assessment based on six domains with results normalized to a 100-point score.
- Assessment results recommend relevant plays and tools while still allowing departments to choose the plays and tools most useful for their goals.
- 13-play planning and implementation framework:
  - PLAN: Plays 1-7
  - BUILD: Plays 8-9
  - DEPLOY: Plays 10-11
  - GOVERN: Plays 12-13
- Individual generated pages for all 13 plays.
- Searchable and filterable library for all 48 tools.
- Individual generated pages for all 48 tools with fillable web fields and document download actions.
- Member and organization workspace prototypes, including progress tracking, workplan/tracker views, training assignment concepts, and export actions.
- Downloadable Word, PDF, and PowerPoint resources where available.

## Source Alignment Notes

The site reflects the current play sequence and tool numbering:

- Readiness Assessment is Play 2 and remains accessible from the Assess top menu item.
- Governance is Play 3 and appears before formal use case prioritization.
- Change management is split into planning in Play 6 and execution in Play 10.
- Tools are numbered by first appearance in the play sequence.

## Updating Content

Most reusable content lives in `app.js`:

- `phases`
- `plays`
- `tools`
- `learningModules`
- `readinessDomains`
- `maturityLevels`

Edit these arrays to update play numbering, tool mappings, page copy, filters, and generated detail pages.

## Download Files

Downloadable files are stored in:

```text
downloads/
```

The static prototype includes generated documents, tool downloads, and lesson slide decks where available. Some member-only and organization-only actions are represented as front-end prototypes and will require a production backend for real authentication, authorization, persistence, and server-side document generation.

## Wireframe Guidance Used

The implementation follows the updated wireframes and outline provided in:

- `01_updated_home_start_here_wireframe.png`
- `02_updated_ai_overview_wireframe.png`
- `03_updated_readiness_assessment_wireframe.png`
- `04_updated_maturity_model_wireframe.png`
- `05_updated_plays_framework_wireframe.png`
- `06_updated_toolkit_library_wireframe.png`
- `updated_website_outline.txt`
