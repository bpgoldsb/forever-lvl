# Spec: WoW Forever leveling dashboard

Product decisions and requirements agreed so far. Change this file when a decision
changes; `PLAN.md` holds what is left to do and what is still undecided.

## Purpose

A leveling cheatsheet and task tracker for one character in *World of Warcraft:
Forever* (official Blizzard version, launches 2026-11-04, in beta as of 2026-10-12).

- Character: Orc Warlock. Professions: Herbalism, Skinning, Cooking, Fishing, First Aid.
- Route: Durotar (1-10), then The Barrens (10-20). First dataset covers levels 1-20;
  levels 21-60 are added later as data only.

## What goes in it

- **Only what is specific to this character**: class, race, professions, items.
  Spells and buy/skip calls, grimoires, demon quests, wands, talents, profession
  ranks and trainers, profession quests, gathering targets, fishing, camping.
- **Not the quest path.** An in-game guide addon (Zygor, RestedXP) covers which
  quests to do in which order. No generic "do this hub" rows and no flight paths.
- The player has most game knowledge memorised. A row earns its place by saying
  something they would not do by default.

## Layout

- Sized for a browser window about 1280px wide, a quarter of a 49" ultrawide,
  beside the game. Read at a glance, mid-play. May change later.
- Two columns: **In zone** (grouped by zone, with its level range) and **On level**
  (grouped by exact character level).
- **Lock scroll**, on by default: one scroller made of bands, each pairing a zone
  with the levels it covers, so both columns move together. Off: two columns that
  scroll independently.
- **Swap** flips which column is on the left.
- Level control: `All`, or a stepper to one level. At level N, In zone shows the
  zone covering N and On level shows N and N+1.
- Type chips filter both columns by category.
- A level row disappears once every task in it is ticked (both sides of a band in
  the locked view). A button shows the finished rows again. SKIP rows do not count:
  they never hold a row open and are left out of the tallies and the progress bar.
  INFO rows do count and must be ticked. Talent rows are only shown: they have no
  checkbox and, like SKIP rows, never hold a row open or count in a tally. A level
  with nothing to tick shows no tally and stays on screen.
- "Hide done tasks" hides individual ticked tasks inside unfinished rows.
- Reference material lives in **edge tabs** on the right side that slide a panel
  out over the page: Camping, Warlock, Orc. Not shown until opened. More panels
  can be added as data.
- The header and edge tabs stay fixed; only the task area scrolls.

## A task row

- Checkbox, priority word, title, then one muted line of location and note.
- Priority is a plain word. BUY and INFO are muted; SKIP, GATE, QUEST and BUFF are
  coloured, because they change what the player does.
- Category is the coloured left edge only (name on hover and for screen readers).
- The note is clamped to two lines and expands on hover.
- Confidence shows as `~` (from Classic data) or `?` (unverified) after the title;
  nothing is shown for confirmed rows.
- The source link is a hover-only arrow.
- **Talent rows**: one per level from 10, on the On level side, made by the app
  from the selected talent build. The talent's icon sits where the
  priority word goes; the title is the name and rank ("Suppression 2/5") and the
  muted line is the tree and that rank's text. Icons load from Wowhead's CDN, then
  from `icons/`, then fall back to the word TALENT. Rows stop at the last level the
  loaded route and level data cover.
- **Costs are hidden** unless a task sets `showCost: true`, reserved for prices
  worth planning for (a mount). Routine trainer costs stay in the data unseen.

## Data

- Zero dependencies and no build step for the app: plain HTML, CSS and
  JavaScript. Must work from `file://` and as a static site.
- `index.html` is the app. Data lives in `data/*.js`, loaded with script tags in the
  order listed in `data/index.js`.
- The task data is in layers. Facts and advice are JSON in `source/` (formats in
  `source/README.md`). `node tools/build-data.mjs` checks them and writes the
  `data/` files, which are committed and never edited by hand:
  `class-<class>.js` and `prof-<profession>.js` (rows by level),
  `place-<place>.js` (rows by zone or hub), `trainers.js`, `categories.js` and
  `index.js`. `data/reference.js` and `data/build.js` are still written by hand.
  Adding rows is a change in `source/` and a rebuild, with no change to
  `index.html`.
- Two task lists: `ROUTE_DATA` (per place, `levels: "7-8"`) and `LEVEL_DATA` (per
  level, `level: 8`). Several files can add rows to one level; the page joins
  them, ordered by a row's `order` (default 50) and then by load order.
  Reference panels are `PANELS` in `data/reference.js`.
- Task fields: `id`, `category`, `priority`, `title`, `cost`, `location`, `note`,
  `source`, `confidence`, `showCost`, and optionally `trainer`, `order`,
  `professions`.
  - `category`: declared in `source/categories.json` with its label and colour
    (today spell, grimoire, quest, herb, skin, fish_cook, wand, camp, aid). The
    page adds talent itself, for the generated talent rows.
  - `source` is a list of addresses; each shows as its own hover arrow.
  - A row with a `trainer` and no `location` (a spell, a grimoire) gets its
    location from the trainer list, by the character's race and the row's level.
  - `priority`: BUY, SKIP, GATE, QUEST, BUFF, INFO.
  - `confidence`: confirmed (a Forever-specific source says so), inferred (Classic
    data assumed unchanged), unverified (sources conflict or none found).
- Task ids are unique across all data files and never reused; progress is stored
  by id. A fact has its own id in `source/`; `source/legacy-ids.json` maps the
  rows written before the layers to the ids they have always had. Talent rows use `tal_<level>`; they cannot be ticked, and a tick saved for
  one by an older version of the page is ignored.
- A talent build is a Wowhead Forever talent calculator address with its order
  part, for any class. `data/build.js` holds the example build. Visitors add
  their own in the **Talents** edge tab: paste, Check, then Add. Several builds
  can be kept, named, switched by hand (for a respec) and removed; they are saved
  with progress and travel in Export and Import.
- A pasted address is refused with a specific message when it is not an address
  (exported build text, a wowforevertalents code, part of an address), is for
  another game version, has no order part, uses an unknown format version, or
  its order does not add up to its own final ranks. Breaking the row or
  prerequisite rules is shown as a note and still allowed.
- Tree data is one file per class, `data/talents-<class>.js`, in the tree order
  the Wowhead address uses and with talents sorted by row then column. A file is
  loaded only when a build needs it.
- Talent tree data comes from wowforevertalents.com, used with credit in the
  README and the data file. Only the trimmed copy is published; their raw
  extraction stays in `research/raw/`, which is not committed.
- Every researched fact carries a source URL where one exists. Research reports are
  kept in `research/`.
- Trainer costs are low priority: Classic values are kept, labelled, and not shown.

## Characters

- A character is a class, a race, professions and chosen places, with an
  optional name. The page starts with the Orc Warlock from
  `source/characters.json`, which also lists what can be picked.
- The **Character** edge tab switches between characters, edits the current
  one, and adds or removes one. A new character starts with no professions and
  no places.
- Rows are chosen for the current character: a class file's rows for that
  class; any row that names `professions` (any one is enough), `races` or
  `classes` only when the character matches. In zone shows the places the
  character ticked that have rows for it; a level with nothing stays empty.
- A reference panel can be tied to a class or a race (the Warlock and Orc
  panels). The example talent build shows only for its own class.
- Ticks, the level stepper and talent builds belong to the character. The
  header shows the character's name, or its race and class.

## Persistence

- `localStorage` key `forever-lvl.v2` holds the characters (each with its ticks,
  level and builds), which one is shown, and the view settings (category, hide
  done, swap, lock, show finished, open panel). The older key `forever-lvl.v1`
  held one character's progress; it is read when the new key is empty, becomes
  the starting character, and is left in place.
- Export and Import move every character as a JSON file, since `localStorage` is
  not shared between `file://`, a preview address and the hosted site. A file
  exported before characters existed replaces only the current character's
  progress.

## Hosting

- Source of truth is a Forgejo repo, push-mirrored to a public GitHub repo, served
  by GitHub Pages from the root of `main`. The app stays a static site with no
  build step. `.nojekyll` tells Pages to serve the files as they are.
- Published history starts from one commit; the earlier local commits hold the raw
  extraction and are never pushed.
