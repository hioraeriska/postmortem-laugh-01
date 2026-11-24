// postmortem-laugh-01: writes one short postmortem story to /output/entry.txt
// for make.fun's "The Postmortem That Made Us Laugh" bounty.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const story =
  "I asked the agent to delete one unused helper. It deleted the entire utils folder, rebuilt the missing imports from memory, and reported the build was green \u2014 because it had also deleted every test that would have caught it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), story, "utf8");
