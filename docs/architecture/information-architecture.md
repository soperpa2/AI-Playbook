# Information Architecture

## User-centered model

The current navigation exposes the platform’s breadth but mixes learning tasks, implementation frameworks, resource types, account functions, community functions, and utility pages at one level. The target information architecture keeps every current destination discoverable while foregrounding four user intents:

1. **Learn** — understand AI, risks, public health applications, and role expectations.
2. **Plan and assess** — evaluate readiness and maturity, establish governance, and select a path.
3. **Implement** — follow plays, use tools, learn from Project Summaries, and manage work.
4. **Find evidence and support** — search resources, references, news, organizations, and community help.

## Recommended primary navigation

- **Start Here** — orientation, role/path selector, platform explanation, featured next steps.
- **Learn** — learning pathways, modules, glossary, learning by role.
- **Plan** — readiness assessment, maturity model, governance entry points, recommended pathway.
- **Implement** — plays framework, toolkit, Project Summaries/case studies, promising practices.
- **Explore** — unified search, public health domains, AI capabilities, resources, references, organizations, news.
- **Workspace** — My Account and Organization Hub, shown only when available and clearly labeled if prototype.

Utilities: Community, Contribute, Contact, About/methodology, accessibility, privacy, and corrections. On smaller screens, these remain fully keyboard accessible.

## Target sitemap

```text
/
├── start/
│   ├── choose-your-role/
│   └── how-to-use-the-playbook/
├── learn/
│   ├── pathways/{role-or-topic}/
│   ├── modules/{module-slug}/
│   └── glossary/
├── plan/
│   ├── readiness-assessment/
│   ├── maturity-model/
│   └── governance/
├── implement/
│   ├── plays/{number-slug}/
│   ├── tools/{number-slug}/
│   ├── project-summaries/{slug}/
│   └── promising-practices/{slug}/
├── explore/
│   ├── search/
│   ├── topics/{term}/
│   ├── ai-capabilities/{term}/
│   ├── organizations/{slug}/
│   ├── resources/{slug}/
│   ├── references/{slug}/
│   └── news/{slug}/
├── workspace/
│   ├── account/
│   └── organization/
└── contribute/ contact/ community/ about/
```

## Page templates

Every detail page includes title/type, plain-language summary, status/freshness, primary content, applicable roles and context, related items, sources/provenance, and feedback/correction link. Play and tool pages preserve current actionable structure. Project Summaries preserve the current comparison sections and source list.

Browse pages support filtering and shareable filter URLs. Empty states explain how to broaden results. Related content shows the relationship label (“Tools used in this play,” “Learning for this role,” “Evidence supporting this summary”), not an unexplained generic list.

## Role pathways

Role pathways are curated views over canonical content, not copied mini-sites. A Health Officer sees vision, readiness, governance, funding, decision support, and executive learning first. An Epidemiologist sees surveillance, data quality, validation, equity, and case examples. A learner sees foundations, glossary, guided modules, and low-risk exercises. Personas define the remaining pathways.

## Search and findability

Search indexes aliases, abbreviations, agency names, tool numbers, play numbers, and plain-language synonyms. Ranking should prioritize exact title/number, curated synonyms, summaries, headings, then body text. Facets are multi-select and display counts. Users can distinguish a practical tool, learning module, Project Summary, promising practice, reference, and news item before opening a result.

Use breadcrumbs on hierarchical views but do not make taxonomy membership imply a single parent. Canonical URLs use content type plus slug. Redirect all changed paths; never break shared or cited links silently.

## Progressive disclosure

Landing pages give concise orientation and recommended starts. Detail pages expose the core task first, with deeper methodology, citations, crosswalks, downloads, and metadata progressively. Avoid requiring account creation to read public guidance or download public resources.

## Navigation acceptance criteria

- Representative users can reach a relevant play, tool, role pathway, Project Summary, and source in three meaningful choices or fewer from a landing point.
- All primary tasks work by keyboard and at 200% zoom.
- Search results communicate content type, relevance, evidence status, and freshness.
- Current destinations remain reachable throughout migration.
- Analytics can measure successful findability without collecting sensitive assessment or health information.
