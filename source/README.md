# Source data

The page's data files (`data/*.js`) are built from the JSON files here by
`node tools/build-data.mjs`. Change these files and rebuild; never edit a built
file. `node tools/build-data.mjs --check` says whether the built files are up to
date.

There are two kinds of content:

- **Facts**: what the game does. Filled by research and scripts, and replaced
  when facts are pulled again.
- **Advice**: buy or skip, and notes. Written by the owner or taken from a cited
  guide. Kept in its own files so that pulling facts again never overwrites it.

## Fact files

| File | Holds | Built into |
|---|---|---|
| `<class>-spells.json`, `<class>-quests.json`, `<class>-items.json` | facts for a class, by level | `data/class-<class>.js` |
| `prof-<profession>.json` | facts for a profession, by level | `data/prof-<profession>.js` |
| `place-<place>.json` | facts for a zone or hub | `data/place-<place>.js` |

A fact file is `{ "build": "1.60.1", "class": "warlock", "facts": [...] }`.
`build` is the beta build the facts were read from; a fact can carry its own.
A profession file has `"profession"` in place of `"class"`. A place file has
`"place": { "id", "name", "zone", "levels" }`, where `levels` is the level
range the place is shown for (`"7-8"`) and `zone` is the game zone it is in
(`"Durotar"`), matched against a race's `path`.

Fields of a fact:

| Field | Meaning |
|---|---|
| `id` | Unique across every file. Never changed or reused. New facts use the game's id (`spell:1234`, `quest:5678`); the rows written before this format have descriptive ids. |
| `level` | Character level the row belongs to. Required in class and profession files; not used in place files. |
| `category` | A key from `categories.json`. |
| `title` | What the row is. |
| `cost`, `showCost` | Cost as text. It is shown only when `showCost` is true. |
| `trainer` | Who teaches it (`warlock`, `warlock-demon`). The page fills the location from `trainers.json`. A spell has `trainer` and no `location`. |
| `learn` | In a profession file: the rank the row is for (`apprentice`, `journeyman`, `expert`, `artisan`). The row has no `location`; the page lists who teaches that rank from `trainers-professions.json`, for the character's faction, zones and capital cities. Rank rows are written once, for every race. |
| `location` | Where, for a row that is not taught by a class trainer. |
| `note` | The factual part of the note. |
| `priority` | `BUY`, `SKIP`, `GATE`, `QUEST`, `BUFF` or `INFO`, when it is part of the fact (a quest, a profession step). A spell has none; its advice gives it. |
| `professions` | The row applies to a character with any of these professions. A fact in a profession file is for that profession unless it says otherwise. |
| `races`, `classes` | The row applies only to these races or classes. Used where a row names places only one side can reach (the Orc trainers in the profession files). A fact in a class file is already for that class. |
| `order` | Position within a level, default 50; lower is higher on the page. |
| `chain` | `{ "name", "step" }` for a step of a quest chain. Carried into the built row; the page does not group by it yet. |
| `source` | List of page addresses the fact came from. May be empty only when the fact is not `confirmed`. |
| `confidence` | `confirmed` (a Forever-specific page says so), `inferred` (Classic data, assumed unchanged) or `unverified` (sources conflict or none found). |

Within a level, rows come in the order they are read: a class's quests, then
its spells, then its items, each in file order, then professions. `order`
overrides that.

## Advice files

`<class>-advice.json` is `{ "class": "warlock", "advice": { "<fact id>": { "priority", "note" } } }`.
Both fields are optional. `priority` replaces the fact's own. `note` is added
after the fact's note.

## Other files

- `categories.json`: row categories in the order of the Type filter, each with
  `key`, `label` and `color`.
- `characters.json`: the classes, races and professions a character can
  have, each with `key` and `label`. A race also has `faction`, `classes`
  (the classes it can be) and `path` (the game zones of its levels 1-20, in
  order). A profession also has `kind`, `primary`
  or `secondary`; a character has at most two primary ones. `legacy` is the
  character (class, race, professions, places) that a save from before
  characters belongs to. A new visitor starts with no character.
- `trainers.json`: where a trainer is, as `teaches`, `race`, `levels`,
  `location` and `confidence`.
- `trainers-professions.json`: every profession trainer, as `profession`, `lo`
  and `hi` (the skill range of its section of the trainer page), `faction`
  (`horde`, `alliance` or `both`), `name`, `zone` and sometimes `town`. Written
  by `node tools/read-trainers.mjs` from the saved wow-professions.com trainer
  pages; never edited by hand. A trainer teaches a rank when `lo` is below the
  rank's top skill (75, 150, 225, 300) and `hi` reaches it. Built into
  `data/trainers.js` beside the class trainers.
- `characters.json` also has `factions`, each with `key`, `label` and
  `capitals`, the cities whose trainers every character of that faction sees.
- `legacy-ids.json`: `ids` maps a fact id to the row id the page used before
  this format, so saved progress survives. `retired` lists row ids that must
  never be used again.

## What the build checks

It stops, and writes nothing, on: a duplicate fact id or row id, a retired row
id, a `confirmed` fact with no source, a row with no priority, an unknown
category, priority or confidence, advice or a legacy id for a fact that is
missing, and a `trainer` that the trainer list does not have. A fact that is
not `confirmed` and has no source is printed as a warning.
