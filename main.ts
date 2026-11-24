// One Sentence for a Traveler from 1800
// Writes a single sentence (at most 200 characters) explaining the modern
// internet to someone arriving from the year 1800, to /output/entry.txt.
// The sentence builds only on things a person from 1800 already knows:
// a road, a post office, a library, a market, a letter, ink.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Imagine every library, post office, and market in the world joined by one road, so a letter written here can be read by a stranger on the far side of the earth before the ink dries.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
