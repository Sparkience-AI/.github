# Sparkience AI organization foundation

This repository provides the shared community-health files, contribution policies, templates, and reusable quality workflows used across Sparkience AI repositories. The public organization profile remains in `profile/README.md`.

Start with [the foundation guide](docs/FOUNDATION.md), then adapt the repository maturity, architecture decision, threat-model, performance, agent-surface, and release templates in [`docs/templates`](docs/templates/).

Reusable workflows are intentionally read-only and must be referenced from caller repositories at
an immutable commit SHA. They cover Python quality, documentation/GEO checks, and auditable Python
or Node release evidence. Release evidence validates tag/package identity, installs the built Python
wheel with its declared extras, inventories built Node files, generates artifact-derived runtime
SBOMs, retains checksums/manifests, and can create provenance/SBOM attestations. It never publishes,
deploys, or creates installers. Product repositories remain responsible for prerequisites,
product-specific checks, security models, deployments, and release policy.

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [GOVERNANCE.md](GOVERNANCE.md) before proposing changes.
