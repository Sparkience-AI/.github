# Release candidate checklist

## Required evidence

- [ ] Clean-clone installation and documented source-run command verified on every supported runtime.
- [ ] Formatting, lint, strict typing, unit/integration/adversarial tests and package build pass.
- [ ] Optional providers are tested with fakes; no live key is required in CI.
- [ ] Threat model, privacy/data flow, performance envelope, accessibility and limitations are current.
- [ ] Skills pass structural validation and behavioral routing/tool-order evals.
- [ ] MCP servers pass initialize, discovery, valid-call, invalid-call, timeout and cleanup tests.
- [ ] Release artifacts have SHA-256 checksums, a CycloneDX SBOM and GitHub build provenance.
- [ ] Installation, verification and rollback commands are documented and exercised.
- [ ] README, `llms.txt`, repository metadata and demo claims match the supported product.

## Scope

Sparkience release candidates are source archives, Python wheels/sdists or static-site artifacts. Windows installers, signing, MSI/MSIX/EXE packages and store publication are out of scope unless a future owner decision explicitly reauthorizes them.

Publishing a GitHub release or deployment remains a separate user-authorized action.
