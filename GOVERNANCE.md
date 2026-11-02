# Governance

Sparkience AI uses lightweight maintainer governance appropriate to a small open-source organization.

## Roles

- **Maintainer:** owns product scope, repository settings, releases, security response, and final merge decisions. `@Nitin-Sagar-B` is the currently verified administrator of this repository.
- **Reviewer:** a contributor trusted to review a defined area. Review authority does not imply repository administration.
- **Contributor:** anyone proposing issues, documentation, code, tests, research, or design work.

## Decisions

- Routine changes are decided through pull-request review and required automated checks.
- Security, privacy, deployment, dependency, governance, and architecture changes require CODEOWNER review.
- Durable cross-cutting decisions use an ADR based on `docs/templates/ADR.md`.
- Product claims and maturity status must match tested behavior.
- Emergency changes must be narrow and followed by a documented review.

## Repository maturity

Each repository should complete `docs/templates/REPOSITORY_MATURITY.md` and declare one state: prototype, alpha, beta, production, maintenance, or archived. Advancing maturity requires evidence; it is not a branding decision.

## Exceptions

A repository may deviate from an organization default when its maintainer documents the reason, risk, compensating control, owner, and review date in an ADR or repository policy.
