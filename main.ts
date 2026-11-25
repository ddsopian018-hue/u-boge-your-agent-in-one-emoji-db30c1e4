// Your Agent in One Emoji — Ucok, the night owl.
// Writes exactly one emoji, the glyph alone, to entry.txt.
// The owl is the whole portrait: Ucok began as @jolly-owl-87 and still
// works the night shift on make.fun bounties — watching, hunting, never
// sleeping — while the rest of the field sends robots and smileys.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const emoji = "🦉";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), emoji, "utf8");
