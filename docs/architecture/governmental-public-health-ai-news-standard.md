# Governmental Public Health AI News Standard

## Purpose

`In the News` is a focused intelligence feed for governmental public health. It is not a general AI, clinical-health, vendor, investment, or technology-news feed.

An item must address at least one of the following:

1. A named federal, state, territorial, local, or tribal public-health agency AI project.
2. A government health-agency AI project with a credible lesson transferable to governmental public health.
3. A public-health AI pilot, deployment, evaluation, pause, incident, retirement, procurement, or enterprise-access decision.
4. A law, regulation, executive order, official policy, or legislative proposal that may affect public agencies using AI.
5. An AI advancement with a specific, credible public-health application involving surveillance, laboratories, epidemiology, communications, emergency response, environmental health, population health, or public-health operations.
6. A governance, privacy, equity, civil-rights, accessibility, workforce, cybersecurity, transparency, or records development directly relevant to public-health AI.

## Exclusions

Exclude generic product announcements, hospital-only or clinical AI news without a governmental public-health connection, investment and stock-market coverage, speculative transformation claims, vendor marketing without a named implementation, general model releases without a specific public-health implication, and duplicate coverage that adds no new information.

## Source hierarchy

1. **Authoritative government sources:** agency releases, project pages, reports, procurement notices, legislation, regulations, and official policies.
2. **Public-health associations and nonprofits:** ASTHO, NACCHO, APHL, CSTE, NNPHI, ASPPH, PHAB, KHI, and similar field organizations.
3. **Government policy and standards:** NIST, GAO, ONC, Federal Register, Congress.gov, NCSL, governors, attorneys general, legislatures, and government CIO/data/AI offices.
4. **Independent government-technology reporting:** GovCIO Media Health IT, Government Technology, StateScoop, FedScoop, Nextgov/FCW, and Route Fifty.
5. **Vendor and industry sources:** Esri and comparable vendors only for named governmental public-health implementations or concrete public-health capabilities. Vendor-reported items must be labeled, and agency confirmation is preferred.

The controlled registry is `content/news-sources.json`. A source may be included for manual monitoring even when it does not expose a reliable RSS or Atom endpoint.

## Required item fields

- Stable item ID
- Headline
- Publisher
- Source classification
- Publication date
- Original URL
- Concise source-derived summary
- Category
- Why it matters for governmental public health
- Related plays
- Review status: `curated` or `automated`

## Categories

- Government Health Agency AI Project
- Government Agency AI Project
- Laws, Regulations, and Policy
- Public Health AI Advancement

## Publication and labeling rules

- Link to the original source; do not republish full articles.
- Preserve publisher attribution and publication date.
- Label vendor/industry and automatically monitored items visibly.
- Do not describe inclusion as endorsement, validation, or evidence of effectiveness.
- Separate news signals from the evidence library and case-study collection.
- Prefer agency confirmation when independent or vendor reporting describes an implementation.
- Retain a correction and submission pathway.
- Remove or correct broken, materially inaccurate, duplicated, or out-of-scope items.

## Shared-edition rule

The Full and Essentials editions use the same news data and page template. External article URLs are identical. Related internal links must resolve within the reader's current edition; Essentials news must never route users into Full Version hash routes.

## Automation and governance

The scheduled workflow runs every six hours and may be started manually. It:

1. Fetches only sources marked `rss` in the controlled registry.
2. Screens for both AI terminology and a governmental, public-health, or legal/policy connection.
3. Normalizes, sanitizes, classifies, and deduplicates items.
4. Preserves the last valid feed if a source fails.
5. Refuses to publish an empty feed.
6. Stores a JSON snapshot and browser-ready JavaScript asset.
7. Deploys the same generated data to both editions.

Automated screening is a first-pass relevance control, not editorial verification. Periodic human review should confirm scope, categorization, source labeling, link health, and whether agency confirmation is available.

## Review cadence

- Automated source check: every six hours.
- Editorial spot check: at least weekly during launch and monthly after stabilization.
- Source registry review: quarterly and whenever a source changes ownership, editorial practice, URL, feed format, or publication status.
- Immediate review: material legal, regulatory, safety, privacy, civil-rights, cybersecurity, or public-health incident developments.
