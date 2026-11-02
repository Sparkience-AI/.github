# Organization foundation

This repository supplies shared community-health files, templates, and reusable workflows for Sparkience AI. Product repositories retain responsibility for product-specific architecture, tests, deployments, privacy, and domain validation.

## Reusable workflows

`reusable-python-quality.yml` expects a `pyproject.toml`, committed `uv.lock`, `src/` layout, and development tools available through dependency groups. A caller references the workflow at an immutable commit SHA.

`reusable-docs-geo.yml` validates a README, local Markdown links, and optional static-site discovery basics. Pass `site-entry: index.html` for a static site. It intentionally does not score prose, make network requests, or treat experimental files such as `llms.txt` as a maturity gate.

Caller workflows must declare their own triggers, concurrency, repository-specific permissions, and deployment steps. Do not pass secrets to a reusable quality workflow unless a reviewed use case requires them.

## Adoption

1. Complete the repository maturity declaration.
2. Copy and adapt CODEOWNERS; organization CODEOWNERS are not inherited.
3. Call relevant reusable workflows by immutable SHA.
4. Add product-specific checks and required status rules.
5. Document exceptions with an ADR, owner, compensating control, and review date.
