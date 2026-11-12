# Organization foundation

This repository supplies shared community-health files, templates, and reusable workflows for Sparkience AI. Product repositories retain responsibility for product-specific architecture, tests, deployments, privacy, and domain validation.

## Reusable workflows

`reusable-python-quality.yml` expects a `pyproject.toml`, committed `uv.lock`, `src/` layout, and development tools available through dependency groups. A caller references the workflow at an immutable commit SHA.

`reusable-docs-geo.yml` validates a README, local Markdown links, and optional static-site discovery basics. Pass `site-entry: index.html` for a static site. It intentionally does not score prose, make network requests, or treat experimental files such as `llms.txt` as a maturity gate.

`reusable-python-release.yml` and `reusable-node-release.yml` build release candidates, validate
artifact/package and `v<version>` tag identity, smoke-test installed/built output, generate checksums
and artifact-derived CycloneDX SBOMs, upload the evidence bundle, and optionally create GitHub
artifact attestations. They do not publish a package or deploy a product. Callers must supply
compatible test/build scripts, explicitly grant attestation permissions only when enabled, and pin
this repository at an immutable commit SHA. The foundation
exercises both workflows without attestations on each change and provides a controlled manual
attested-fixture workflow for post-merge validation.

Caller workflows must declare their own triggers, concurrency, repository-specific permissions, and deployment steps. Do not pass secrets to a reusable quality workflow unless a reviewed use case requires them.

## Adoption

1. Complete the repository maturity declaration.
2. Copy and adapt CODEOWNERS; organization CODEOWNERS are not inherited.
3. Call relevant reusable workflows by immutable SHA.
4. Add product-specific checks and required status rules.
5. Document exceptions with an ADR, owner, compensating control, and review date.
6. Adapt the threat-model, agent-surface, performance-envelope, and release-checklist templates to the product instead of copying claims unchanged.

## Release boundary

The shared release model supports source archives, Python wheels/sdists, and static-site or Node build artifacts. It deliberately excludes Windows installers, MSI/MSIX/EXE packaging, code signing, and store publication. Publishing or deploying remains a separate, explicitly authorized operation.
