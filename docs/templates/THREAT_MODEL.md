# Threat model

## Scope and protected properties

Name the supported local and demo surfaces, sensitive inputs, authoritative outputs, trust assumptions, and explicit non-goals.

## Data flow and trust boundaries

Document each boundary between user input, deterministic code, model providers, local storage, generated artifacts, MCP tools, demos and external services. State which boundary holds credentials and where data can leave the device.

## Threat register

| Threat | Asset | Entry point | Control | Verification | Residual risk |
| --- | --- | --- | --- | --- | --- |
| Example | Result integrity | Untrusted input | Typed validation | Negative test | Domain review remains necessary |

At minimum consider path traversal, oversized or malformed input, prompt injection, secret disclosure, raw-data transmission, arbitrary execution, unsafe deserialization, stale evidence, provider failure, resource exhaustion, artifact collision, cancellation and cleanup.

## Review

Record the owner, independent reviewer, last review date, next review trigger and any accepted exceptions. A passing test suite is evidence for controls, not proof that no threat remains.
