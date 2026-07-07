# AI Playbook for Public Health Website

This folder contains a polished static website prototype for the revised **Generative and Agentic AI Implementation Playbook for Public Health Departments**.

## Run

Open `index.html` in a browser. No build step is required.

For a local server, run this from the folder:

```powershell
python -m http.server 5173
```

Then visit `http://localhost:5173`.

## What Is Included

- Responsive Start Here, Learn, Assess, Maturity Model, Plays, Toolkit, Case Studies, Member Hub, Community, Contribute, and Resources sections.
- Interactive AI Readiness Self-Assessment based on six domains, four indicators per domain, and a 72-point total.
- Readiness categories:
  - 60-72: Excellent Readiness
  - 45-59: Good Readiness
  - 30-44: Moderate Readiness
  - Below 30: Early Stage
- 13-play planning and implementation framework:
  - PLAN: Plays 1-7
  - BUILD: Plays 8-9
  - DEPLOY: Plays 10-11
  - GOVERN: Plays 12-13
- Individual generated pages for all 13 plays.
- Searchable and filterable library for all 43 tools.
- Individual generated pages for all 43 tools with fillable web fields and document download actions.
- Print styles for assessment results and tool pages.

## Source Alignment Notes

The site reflects the revised play sequence supplied in the brief and updated documents:

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

## Download Placeholders

Place final downloadable files here when available:

```text
downloads/
  AI_Playbook_for_Public_Health_Playbook.pdf
  AI_Playbook_for_Public_Health_Toolkit.pdf
  tool-1.pdf
  tool-2.pdf
  ...
```

The current prototype includes links to those expected locations as placeholders.

## Wireframe Guidance Used

The implementation follows the updated wireframes and outline provided in:

- `01_updated_home_start_here_wireframe.png`
- `02_updated_ai_overview_wireframe.png`
- `03_updated_readiness_assessment_wireframe.png`
- `04_updated_maturity_model_wireframe.png`
- `05_updated_plays_framework_wireframe.png`
- `06_updated_toolkit_library_wireframe.png`
- `updated_website_outline.txt`
