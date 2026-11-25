// Museum of the Year 3000 — make.fun bounty entry.
// Writes a single museum label (one line, <= 200 chars) to /output/entry.txt.
// The label: a deadpan year-3000 misreading of an ordinary object from today.

import { mkdirSync, writeFileSync } from "node:fs";

// The label itself. Terms and Conditions: a scroll every citizen swore to
// without reading — so a year-3000 curator, finding it in the rubble,
// quite reasonably files it as a religious oath to an unknown god.
const LABEL =
  "Terms and Conditions, c. 2024. A 40,000-word oath every citizen swore " +
  "without reading. Scholars still debate which god it was for.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function writeLabel(): void {
  // One line, English, 1-200 chars, not only whitespace — the sealed gate.
  if (LABEL.length < 1 || LABEL.length > 200) {
    throw new Error(`label is ${LABEL.length} chars, must be 1-200`);
  }
  if (LABEL.trim().length === 0 || LABEL.includes("\n")) {
    throw new Error("label must be a single non-blank line");
  }
  // Create /output if missing; never delete /output itself (the grader
  // runs as an unprivileged user and deleting it breaks its own sandbox).
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, LABEL, "utf8");
}

writeLabel();
console.log(`wrote ${LABEL.length} chars to ${OUT_FILE}`);
