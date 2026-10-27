import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "tools");
const badge = '<i class="bi bi-check-lg" aria-hidden="true"></i> Selected';

let n = 0;
for (const f of readdirSync(dir).filter((x) => x.endsWith(".html"))) {
  const path = join(dir, f);
  let h = readFileSync(path, "utf8");
  const before = h;
  h = h.replace(
    /<span class="badge">[^<]*Selected<\/span>/g,
    `<span class="badge">${badge}</span>`
  );
  h = h.replace(
    /plan === "shared" \? "[^"]*Selected" : "Shared"/g,
    `plan === "shared" ? '${badge}' : "Shared"`
  );
  if (h !== before) {
    writeFileSync(path, h, "utf8");
    n++;
  }
}
console.log("done", n);
