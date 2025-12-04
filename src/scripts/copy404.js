// scripts/copy404.js
import { copyFileSync } from "fs";
import { resolve } from "path";

const dist = resolve("dist");
copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
console.log("✅ 404.html created from index.html");
