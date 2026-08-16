# Shared Content Layer

This directory is the shared public-content boundary for both front ends:

- the full platform at the repository root; and
- the bounded public MVP under `mvp/`.

`public-catalog.js` contains stable public IDs, release metadata, play summaries, audience relationships, evidence labels, and the single Starter Tool approved for each play. Both front ends load this same file. The full platform enriches those records with detailed implementation content already maintained in `app.js`; the MVP renders only the approved public projection.

## Publication boundary

The public catalog may contain only content approved for public release. It must not contain diagnostic weights, scoring thresholds, benchmarks, prioritization logic, facilitation protocols, recommendation rules, confidential interview methods, private organization data, or the unreleased premium-tool inventory.

The current arrangement is a transitional v1 step. Remaining full-site collections—tools, learning modules, Project Summaries/case studies, promising practices, resources, references, organizations, and news—should be migrated from application code into typed records here in bounded batches. Each migration must preserve current presentation and URLs, add stable IDs and review metadata, and define an explicit MVP publication rule.

## Rules

1. Edit shared public play identity and metadata in `public-catalog.js`, not separately in either front end.
2. Treat `mvp/` as a presentation and approved projection, never as an independent content repository.
3. Never rely on hidden routes or CSS to protect paid or confidential material; excluded fields must not enter the public build.
4. Validate both root and MVP experiences after any catalog change.

## Shared visual assets

The full site's root `assets/` directory is canonical for graphics used by both editions. MVP pages reference it as `../assets/...`; do not copy shared logos, diagrams, icons, or journey graphics into `mvp/`. The MVP landing page uses the full site's Recommended Journey component in place of the former Path Through the Playbook graphic.
