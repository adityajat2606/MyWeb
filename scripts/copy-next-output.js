const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "MyWeb-master", ".next");
const dest = path.join(__dirname, "..", ".next");

function copyDir(source, target) {
  if (!fs.existsSync(source)) {
    throw new Error(`Missing build output at ${source}`);
  }
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const from = path.join(source, entry.name);
    const to = path.join(target, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

if (fs.existsSync(dest)) {
  fs.rmSync(dest, { recursive: true, force: true });
}

copyDir(src, dest);
console.log("Copied .next build output to repo root for Vercel.");
