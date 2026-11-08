# Sparkience AI organization foundation

This repository provides the shared community-health files, contribution policies, templates, and reusable quality workflows used across Sparkience AI repositories. The public organization profile remains in `profile/README.md`.

Start with [the foundation guide](docs/FOUNDATION.md), then adapt the repository maturity, architecture decision, threat-model, performance, agent-surface, and release templates in [`docs/templates`](docs/templates/).

Reusable workflows are intentionally read-only and must be referenced from caller repositories at an immutable commit SHA. They cover Python quality, documentation/GEO checks, and auditable Python or Node release evidence. Product repositories remain responsible for their own permissions, product-specific checks, security model, deployments, and release policy.

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [GOVERNANCE.md](GOVERNANCE.md) before proposing changes.
