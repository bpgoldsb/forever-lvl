#!/usr/bin/env node
// Read the saved wow-professions.com trainer pages and write
// source/trainers-professions.json: every profession trainer with the skill
// range its section teaches, its faction and where it stands.
//
// Usage: node tools/read-trainers.mjs [folder of saved pages]
//   default folder: research/raw/pages-20261012 (in the private data repo)
//
// A page has one section per kind of trainer, headed like
// "Journeyman Alchemy Trainers (75-150)" or "Mining Trainers (1-300)", and one
// sentence per trainer: "[Horde |Alliance ]<name> is located in [<town> in ]
// <zone>." No faction word means both factions. Sections without a skill
// range (specialization trainers) are left out. Run tools/build-data.mjs after.

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dir = resolve(process.argv[2] || join(REPO, "research/raw/pages-20261012"));
const out = join(REPO, "source/trainers-professions.json");

const ENTITIES = { amp: "&", quot: "\"", apos: "'", lt: "<", gt: ">", nbsp: " ", rsquo: "'", lsquo: "'" };
const text = (s) => s.replace(/<img[^>]*alt="(Horde|Alliance)"[^>]*>/g, "$1 ").replace(/<[^>]+>/g, "")
  .replace(/&#(\d+);/g, (m, n) => String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi, (m, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&(\w+);/g, (m, n) => ENTITIES[n] || m)
  .replace(/[⁠​]/g, "").replace(/[‘’]/g, "'").replace(/\s+/g, " ").trim();

const trainers = [], problems = [];
for (const file of readdirSync(dir).filter((f) => /^wp-.+-trainers\.html$/.test(f)).sort()) {
  const profession = file.slice(3, -"-trainers.html".length);
  const page = readFileSync(join(dir, file), "utf8");
  let section = null, found = 0;
  for (const m of page.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>|<p[^>]*>((?:(?!<\/p>)[\s\S])*?is located in(?:(?!<\/p>)[\s\S])*?)<\/p>/g)) {
    if (m[1] != null) {
      const r = /Trainers \((\d+)-(\d+)\)/.exec(text(m[1]));
      section = r ? { lo: Number(r[1]), hi: Number(r[2]) } : null;
      continue;
    }
    if (!section) continue;
    const s = /^(?:(Horde|Alliance) )?(.+?) is located in (?:(.+) in )?(.+?)\.$/.exec(text(m[2]));
    if (!s) { problems.push(file + ": cannot read '" + text(m[2]) + "'"); continue; }
    const t = { profession, lo: section.lo, hi: section.hi, faction: (s[1] || "both").toLowerCase(), name: s[2], zone: s[4] };
    if (s[3]) t.town = s[3];
    // A trainer for both factions is printed once under each.
    if (!trainers.some((x) => ["profession", "lo", "hi", "faction", "name", "zone"].every((k) => x[k] === t[k]))) trainers.push(t);
    found++;
  }
  if (!found) problems.push(file + ": no trainers found");
}
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }

writeFileSync(out, JSON.stringify({
  build: "1.60.1",
  source: "https://www.wow-professions.com/forever/<profession>-trainers",
  note: "Written by tools/read-trainers.mjs from the saved pages; do not edit by hand.",
  trainers
}, null, 1).replace(/\{\n\s+("profession"[^}]*?)\n\s+\}/g, (m, body) => "{ " + body.replace(/\n\s+/g, " ") + " }") + "\n");
const count = {};
for (const t of trainers) count[t.profession] = (count[t.profession] || 0) + 1;
console.log(trainers.length + " trainers: " + Object.entries(count).map(([k, v]) => k + " " + v).join(", "));
