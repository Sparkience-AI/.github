# Performance and resource envelope

Record measured local baselines and enforced limits for supported inputs and outputs.

| Operation | Fixture | Limit | Measured result | Environment | Failure behavior |
| --- | --- | ---: | ---: | --- | --- |

Cover input bytes, rows/pages/tokens, columns/files, model output, runtime, memory-sensitive operations, concurrency, cancellation and generated artifact sizes. Public demos require tighter limits than local trusted use. Lab timings are not field performance claims.

Performance checks should fail predictably when a contract is exceeded and must not silently truncate evidence needed for correctness.
