import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My grandfather sanded the same chair for three winters, and the morning it finally held my weight, he just nodded once.";

// The entry must be a single line of 1 to 240 characters.
if (!TEXT.trim() || TEXT.length > 240) throw new Error("entry text out of range");
if (TEXT.includes("\n")) throw new Error("entry must be exactly one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
