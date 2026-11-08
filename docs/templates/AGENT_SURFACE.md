# Agent surface contract

## User goal and routing

Describe the repeatable user goal, positive and negative trigger examples, and why a skill, MCP server, or both are appropriate.

## Tool inventory

For each tool record its typed inputs, bounded outputs, side effects, approvals, filesystem/network access, timeout and failure semantics. Do not expose generic shell, code execution, arbitrary paths or unrestricted URLs.

## Skill contract

Keep `SKILL.md` discovery metadata concise and discriminating. Put workflow order, missing-input handling, evidence requirements, output rules and stopping conditions in the body. Include `agents/openai.yaml` and behavioral eval cases covering positive routing, negative routing, adversarial input, missing input, approvals, cleanup and output validation.

## Safety invariants

- Local deterministic functionality works with no API key or network.
- Credentials are session-only and never appear in tool results, logs or artifacts.
- Cloud transmission is disclosed and consent-gated.
- Provider/model changes invalidate stale generated output.
- MCP tools call existing validated application services rather than duplicate business logic.
- Unsupported capabilities are absent, not merely discouraged by a prompt.
