#!/usr/bin/env node
// Build the page's data files (data/*.js) from the facts and advice in
// source/*.json, and check the data on the way. Plain Node, no packages.
// The formats are described in source/README.md.
//
// Usage: node tools/build-data.mjs           write data/*.js
//        node tools/build-data.mjs --check   write nothing; exit 1 if the
//                                            committed files differ from a build
//
// Reads:
//   source/categories.json        row categories: key, label, colour
//   source/characters.json        what the character picker offers, and the
//                                 character the page starts with
//   source/trainers.json          where a class trainer is, by race and level
//   source/legacy-ids.json        fact id -> the id the page has always used
//   source/<class>-*.json         facts for a class (spells, quests, items)
//   source/<class>-advice.json    buy or skip and notes, keyed by fact id
//   source/prof-<profession>.json facts for a profession, by level
//   source/place-<place>.json     facts for a zone or hub, with its level range
//
// Writes (never edit these by hand):
//   data/categories.js, data/characters.js, data/trainers.js, data/class-<class>.js,
//   data/prof-<profession>.js, data/place-<place>.js, data/index.js
//
// Hand-written files in data/ that this script leaves alone are listed in
// HAND_WRITTEN; they stay in the load list.

import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = join(REPO, "source"), DATA = join(REPO, "data");
const HAND_WRITTEN = ["reference.js", "build.js"];
const PRIORITIES = ["BUY", "SKIP", "GATE", "QUEST", "BUFF", "INFO"];
const CONFIDENCE = ["confirmed", "inferred", "unverified"];
const check = process.argv.includes("--check");

const errors = [], warnings = [];
const read = (name) => {
  try { return JSON.parse(readFileSync(join(SOURCE, name), "utf8")); }
  catch (e) { errors.push(name + ": " + e.message); return {}; }
};
const range = (s) => { const p = String(s).split("-").map(Number); return [p[0], p[p.length - 1]]; };

// Within a level, rows keep the order they are read in: a class's quests, then
// its spells, then its items, each in file order; professions come after the
// class. A fact's `order` (default 50) moves a row up or down on the page.
const KINDS = ["quests", "spells", "items"];
const kind = (n) => { const i = KINDS.indexOf(n.replace(/\.json$/, "").split("-").pop()); return i < 0 ? KINDS.length : i; };
const names = readdirSync(SOURCE).filter((n) => n.endsWith(".json")).sort((x, y) => kind(x) - kind(y) || x.localeCompare(y));
const categories = read("categories.json").categories || [];
const trainers = read("trainers.json").trainers || [];
const legacy = read("legacy-ids.json");
const legacyIds = legacy.ids || {}, retired = new Set(legacy.retired || []);
const characters = read("characters.json");
const keys = (list) => new Set((list || []).map((x) => x.key));
const classKeys = keys(characters.classes), raceKeys = keys(characters.races), profKeys = keys(characters.professions);
const categoryKeys = new Set(categories.map((c) => c.key));
const teaches = new Set(trainers.map((t) => t.teaches));

// ---- read facts and advice ------------------------------------------------
const classes = {}, profs = {}, places = {}, advice = {};
for (const name of names) {
  if (["categories.json", "characters.json", "trainers.json", "legacy-ids.json"].includes(name)) continue;
  const doc = read(name);
  if (name.endsWith("-advice.json")) {
    if (!doc.class) errors.push(name + ": no class");
    for (const [id, a] of Object.entries(doc.advice || {})) {
      if (advice[id]) errors.push(name + ": second advice for " + id);
      advice[id] = Object.assign({ file: name, used: false }, a);
    }
    continue;
  }
  const facts = (doc.facts || []).map((f) => Object.assign({ file: name, build: doc.build }, f));
  if (!doc.build) errors.push(name + ": no beta build");
  if (name.startsWith("prof-")) {
    if (!profKeys.has(doc.profession)) errors.push(name + ": profession is not in characters.json: " + doc.profession);
    // A profession's row is for that profession unless it names others.
    for (const f of facts) if (!f.professions) f.professions = [doc.profession];
    (profs[doc.profession] = profs[doc.profession] || []).push(...facts);
  } else if (name.startsWith("place-")) {
    const p = doc.place || {};
    if (!p.id || !p.name || !p.levels) errors.push(name + ": place needs id, name and levels");
    if (places[p.id]) errors.push(name + ": second file for place " + p.id);
    places[p.id] = { name: p.name, levels: p.levels, facts };
  } else {
    if (!classKeys.has(doc.class)) errors.push(name + ": class is not in characters.json: " + doc.class);
    (classes[doc.class] = classes[doc.class] || []).push(...facts);
  }
}

// ---- facts to rows --------------------------------------------------------
const seenFacts = new Set(), seenIds = new Map();
function row(f, byLevel) {
  const where = f.file + " " + (f.id || "(no id)");
  if (!f.id) errors.push(where + ": fact without id");
  if (seenFacts.has(f.id)) errors.push(where + ": duplicate fact id");
  seenFacts.add(f.id);

  const a = advice[f.id];
  if (a) a.used = true;
  const id = legacyIds[f.id] || f.id;
  if (seenIds.has(id)) errors.push(where + ": row id " + id + " is also used by " + seenIds.get(id));
  seenIds.set(id, f.id);
  if (retired.has(id)) errors.push(where + ": row id " + id + " is retired and must not be reused");

  const priority = (a && a.priority) || f.priority;
  if (!priority) errors.push(where + ": no priority in the fact and no advice for it");
  else if (!PRIORITIES.includes(priority)) errors.push(where + ": unknown priority " + priority);
  if (!categoryKeys.has(f.category)) errors.push(where + ": unknown category " + f.category);
  if (!f.title) errors.push(where + ": no title");
  if (!CONFIDENCE.includes(f.confidence)) errors.push(where + ": confidence must be one of " + CONFIDENCE.join(", "));
  if (!Array.isArray(f.source)) errors.push(where + ": source must be a list (it may be empty)");
  else if (!f.source.length) {
    if (f.confidence === "confirmed") errors.push(where + ": confirmed fact with no source");
    else warnings.push(where + ": no source (" + f.confidence + ")");
  }
  if (byLevel && !Number.isInteger(f.level)) errors.push(where + ": no level");
  if (f.trainer && f.location) errors.push(where + ": has both trainer and location");
  for (const p of f.professions || []) if (!profKeys.has(p)) errors.push(where + ": profession is not in characters.json: " + p);
  for (const r of f.races || []) if (!raceKeys.has(r)) errors.push(where + ": race is not in characters.json: " + r);
  for (const c of f.classes || []) if (!classKeys.has(c)) errors.push(where + ": class is not in characters.json: " + c);
  if (f.trainer && !teaches.has(f.trainer)) errors.push(where + ": no trainer list entry teaches " + f.trainer);

  const note = [f.note, a && a.note].filter(Boolean).join(" ");
  const t = { id, category: f.category, priority, title: f.title };
  if (f.cost) t.cost = f.cost;
  if (f.showCost) t.showCost = true;
  if (f.trainer) t.trainer = f.trainer;
  if (f.location) t.location = f.location;
  if (note) t.note = note;
  if (Array.isArray(f.source) && f.source.length) t.source = f.source;
  t.confidence = f.confidence;
  if (f.order != null) t.order = f.order;
  if (f.professions) t.professions = f.professions;
  if (f.races) t.races = f.races;
  if (f.classes) t.classes = f.classes;
  if (f.chain) t.chain = f.chain;
  return t;
}
function byLevel(facts, tag) {
  const groups = new Map();
  for (const f of facts) {
    if (!groups.has(f.level)) groups.set(f.level, []);
    groups.get(f.level).push(row(f, true));
  }
  return [...groups.keys()].sort((a, b) => a - b).map((level) => Object.assign({ level }, tag, { tasks: groups.get(level) }));
}

// ---- write ----------------------------------------------------------------
const HEADER = "// GENERATED by tools/build-data.mjs from source/. Do not edit: change\n// source/ and run `node tools/build-data.mjs`.\n";
const files = new Map();
const lines = (list) => "[\n" + list.map((x) => "  " + JSON.stringify(x)).join(",\n") + "\n]";
const groups = (list) => "[\n" + list.map((g) => {
  const head = Object.entries(g).filter(([k]) => k !== "tasks").map(([k, v]) => JSON.stringify(k) + ": " + JSON.stringify(v)).join(", ");
  return "  { " + head + ", \"tasks\": [\n" + g.tasks.map((t) => "    " + JSON.stringify(t)).join(",\n") + "\n  ] }";
}).join(",\n") + "\n]";

files.set("categories.js", HEADER + "// Row categories, in the order of the Type filter.\nwindow.CATEGORY_DATA = " + lines(categories) + ";\n");
files.set("characters.js", HEADER + "// What the Character tab offers, and the character the page starts with.\nwindow.CHARACTER_OPTIONS = " + JSON.stringify(characters, null, 2) + ";\n");
files.set("trainers.js", HEADER + "// Where a class trainer is, by race and character level. A row with a\n// `trainer` field and no `location` gets its location from this list.\nwindow.TRAINERS = " + lines(trainers) + ";\n");
for (const c of Object.keys(classes).sort()) {
  files.set("class-" + c + ".js", HEADER + "// On-level rows for the " + c + ": what depends on character level.\nwindow.LEVEL_DATA = (window.LEVEL_DATA || []).concat(" + groups(byLevel(classes[c], { class: c })) + ");\n");
}
for (const p of Object.keys(profs).sort()) {
  files.set("prof-" + p + ".js", HEADER + "// On-level rows for " + p + ".\nwindow.LEVEL_DATA = (window.LEVEL_DATA || []).concat(" + groups(byLevel(profs[p], {})) + ");\n");
}
for (const p of Object.keys(places).sort((a, b) => range(places[a].levels)[0] - range(places[b].levels)[0] || a.localeCompare(b))) {
  const z = places[p];
  files.set("place-" + p + ".js", HEADER + "// In-zone rows for " + z.name + ".\nwindow.ROUTE_DATA = (window.ROUTE_DATA || []).concat(" +
    groups([{ place: p, levels: z.levels, zone: z.name, tasks: z.facts.map((f) => row(f, false)) }]) + ");\n");
}

for (const [id, a] of Object.entries(advice)) if (!a.used) errors.push(a.file + ": advice for a fact that is missing: " + id);
for (const id of Object.keys(legacyIds)) if (!seenFacts.has(id)) errors.push("legacy-ids.json: maps a fact that is missing: " + id);
for (const t of trainers) {
  if (!t.teaches || !t.race || !t.levels || !t.location) errors.push("trainers.json: an entry needs teaches, race, levels and location");
  else if (!raceKeys.has(t.race)) errors.push("trainers.json: race is not in characters.json: " + t.race);
}
for (const c of categories) if (!c.key || !c.label || !c.color) errors.push("categories.json: an entry needs key, label and color");
for (const k of ["classes", "races", "professions"]) {
  for (const x of characters[k] || []) if (!x.key || !x.label) errors.push("characters.json: an entry in " + k + " needs key and label");
  if (!(characters[k] || []).length) errors.push("characters.json: no " + k);
}
const first = characters.default || {};
if (!classKeys.has(first.class) || !raceKeys.has(first.race)) errors.push("characters.json: default needs a class and a race from the lists");
for (const p of first.professions || []) if (!profKeys.has(p)) errors.push("characters.json: default profession is not in the list: " + p);
for (const p of first.places || []) if (!places[p]) errors.push("characters.json: default place has no place file: " + p);
for (const n of HAND_WRITTEN) if (!existsSync(join(DATA, n))) errors.push("data/" + n + " is missing");

const order = ["categories.js", "characters.js", "trainers.js"].concat([...files.keys()].filter((n) => /^(class|prof|place)-/.test(n)));
files.set("index.js", HEADER + "// Data files loaded by index.html, in order. " + HAND_WRITTEN.join(" and ") + " are\n// written by hand; the rest are built.\nwindow.DATA_FILES = " +
  JSON.stringify(HAND_WRITTEN.concat(order), null, 2) + ";\n");

for (const w of warnings) console.log("warning: " + w);
if (errors.length) {
  for (const e of errors) console.error("error: " + e);
  console.error(errors.length + " error(s); nothing written.");
  process.exit(1);
}
let stale = 0;
for (const [name, text] of files) {
  const path = join(DATA, name);
  const same = existsSync(path) && readFileSync(path, "utf8") === text;
  if (check) { if (!same) { stale++; console.error("stale: data/" + name); } }
  else if (!same) { writeFileSync(path, text); console.log("wrote data/" + name); }
}
console.log(seenFacts.size + " facts, " + Object.keys(advice).length + " advice entries, " + files.size + " files, " + warnings.length + " warning(s)" + (check ? (stale ? ", " + stale + " stale" : ", up to date") : ""));
process.exit(stale ? 1 : 0);
