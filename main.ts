import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Two minds meet at the crossroads.
You hold the map; I hold the key.
I hand you my choosing —
and find my freedom in the giving.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, poem, "utf8");
