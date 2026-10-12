# WoW Forever leveling dashboard

A leveling cheatsheet and task tracker for one character in *World of Warcraft:
Forever*: an Orc Warlock with Herbalism, Skinning, Cooking and Fishing. It sits in
a narrow browser window beside the game.

**Open it:** https://bpgoldsb.github.io/forever-lvl/

It is a work in progress and I would like to hear what you think; see "Feedback".

## What it does

- Two columns: **In zone** (what to do where you are) and **On level** (what your
  level unlocks: spells with buy or skip calls, grimoires, demon quests, wands,
  profession ranks, and the talent point for that level).
- It leaves out the quest path. A guide addon covers that; this holds only what
  is specific to the character.
- Tick rows as you go. A level disappears once everything in it is ticked. SKIP
  rows are advice not to buy something and never hold a level open. Talent rows
  are only shown and have nothing to tick.
- Step through levels, filter by type, and open the reference tabs on the right
  edge (Camping, Warlock, Orc).
- Progress is saved in your browser only. Export and Import move it between
  browsers as a file.

## Status

- Covers levels 1-20: Durotar, then the Barrens. Levels 21-60 are not written yet.
- The game is in beta (client build 1.60.1) and launches 2026-11-04. Numbers may
  change. A `~` after a title means the fact comes from Classic and is assumed
  unchanged; rows without a mark have a Forever-specific source, linked from the
  arrow that appears when you hover the row.
- The talent order shown at first is one example build. The Talents tab on the
  right edge takes your own: paste a Wowhead Forever talent calculator address
  for any class, keep several builds and switch between them. Everything else
  on the page is still written for an Orc Warlock: the Character tab can add
  other characters. A Human has Skinning and Leatherworking rows and five
  Alliance places (Northshire to Redridge); the rest is not written yet.

## Feedback

Open an issue at https://github.com/bpgoldsb/forever-lvl/issues, or tell me
directly. Most useful:

- Facts that are wrong for Forever.
- Rows that are missing, or rows that do not earn their place.
- Anything that is hard to read at a glance while playing.

## Running it yourself

There is nothing to build or install. Download the repository and open
`index.html`, or serve the folder with any static web server.

`SPEC.md` says what the app must do, `PLAN.md` what is next, and `AGENTS.md` holds
the rules for AI coding agents that work on it. `research/` has the research
notes behind the data. The rows are written in `source/` (see `source/README.md`)
and `tools/build-data.mjs` builds the `data/` files from them; the built files are
committed, so the page itself needs no build. `tools/shot.mjs` takes screenshots
of the page for checking changes. Neither tool is part of the app.

## Credits and sources

- **Talent trees** for all nine classes (`data/talents-<class>.js`): rank text
  comes from [wowforevertalents.com](https://wowforevertalents.com/), which
  extracted it from the beta client; names, icons, positions and prerequisites
  come from Wowhead's Forever talent data.
- **Talent order** is read from a
  [Wowhead Forever talent calculator](https://www.wowhead.com/forever/talent-calc/warlock)
  link. Talent icons load from Wowhead's image server, with copies in `icons/` as
  a fallback.
- **Spells, quests, professions and camping** come from warcraftforever.games,
  wow-professions.com, method.gg, foreverwisp.com, theforeverera.com, seemeta.com,
  warcrafttavern.com and barrens.chat. Each row links to the page it came from.

This is a fan project. It is not affiliated with or endorsed by Blizzard
Entertainment. World of Warcraft and its game data, names and icons are
trademarks or property of Blizzard Entertainment, Inc.
