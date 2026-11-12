import assert from "node:assert/strict";
import test from "node:test";

import { identity } from "../src/index.js";

test("fixture identity", () => {
  assert.equal(identity("foundation"), "foundation");
});
