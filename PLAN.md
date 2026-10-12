# Plan

Resume point. Last worked 2026-10-12. Start a session in this folder and read
`SPEC.md` (decisions) and `AGENTS.md` (rules) first.

## State

- App works: two locked columns, level stepper, type filter, finished rows hide,
  edge tabs, export/import, talent rows. See SPEC.md.
- Data: 57 tasks for levels 1-20 (39 on-level, 18 in-zone), built from
  `source/` by `tools/build-data.mjs` (section I, step 1), plus 11 generated
  talent rows (levels 10-20).
- Agents can see the page: `tools/shot.mjs` (headless Chromium under podman on
  the dev machine). Seen rendered so far: the locked view at 1280x1440, talent rows, the
  icon fallback chain, SKIP rows not holding a level open, and (2026-10-12) the
  unlocked view, swap, all four edge panels and the narrow layout at 420x900.
  That review found and fixed one fault: on a narrow screen an open panel
  covered its own tabs and could not be closed. Not looked at: export and
  import, which the tool cannot show (file dialogs).
- Published 2026-10-12: Forgejo is the origin, push-mirrored to
  https://github.com/bpgoldsb/forever-lvl and served at
  https://bpgoldsb.github.io/forever-lvl/. Every push to `main` publishes.

## Decided (owner, 2026-10-12)

1. **How agents verify the UI:** a headless-browser screenshot script, with the
   browser in a container under podman. Done: `tools/shot.mjs`.
2. **Talent order:** the owner fills the build in, in leveling order, on a planner
   that records order, and we import it. Done with the Wowhead Forever talent
   calculator: the owner's example address decodes to 51 points that match its own
   final ranks (Affliction 39, Demonology 10, Destruction 2) and break no row or
   prerequisite rule. The owner may replace the build later.
3. **Talent data source:** publish the trimmed wowforevertalents.com tree with
   credit; keep their raw extraction out of the published repo. (First answer was
   to keep the repo private; changed the same day to get feedback from others.)
4. **Talent icons:** hotlink Wowhead's icon CDN, with bundled images as the fallback.
5. **Level closing:** INFO rows block a level from closing; SKIP rows do not.
6. **Repo and hosting:** public. Forgejo is the source of truth, push-mirrored to
   GitHub, served by GitHub Pages. Published as one fresh commit. The name stays
   `forever-lvl`.

## Undecided (owner)

None.

## Work items

Written so each can be handed to an agent. Do them through agents where possible and
keep the main session for decisions and review.

### A. UI review
- `tools/shot.mjs` exists. Left to do: review the page for layout faults in the
  views not yet looked at (see "State").

### B. Talent rows (done for levels 10-20)
- Rows for levels 21-60 appear by themselves once route or level data covers those
  levels. The build is one line in `data/talents-warlock.js`.
- The places in `source/place-*.json` leave levels 1-4, 9-10 and 19-20 with
  nothing on the In zone side. Decided 2026-10-12: they stay empty.

### C. Content research
- Profession skill targets per zone (for example the Herbalism skill to have before
  the Barrens). Current herb and skinning rows are Classic-derived and coarse.
- Quest rewards worth choosing as a warlock (caster gear, bags, wands).
- Race rows if any are worth it; racials are only in the Orc panel.
- Low priority: Forever trainer costs, warlock trainer names, grimoire levels and
  vendors. Wowhead's Forever pages do not render through a plain fetch.
- Sources that worked: see the "Best sources" lists in `research/claude.md` and
  `research/gapfill.md`. `research/agy.md` cites bare domains; treat it as unchecked.

### D. Repo and hosting (done)
- Forgejo repo and its GitHub push mirror are managed in the owner's infrastructure
  repo. Feedback comes in as GitHub issues.

### F. Talent builds for any class (in progress)
- Done: a Talents edge tab where a Wowhead Forever calculator address is pasted,
  checked and added; several builds can be kept and switched by hand (for a
  respec); builds are saved with progress and travel in Export. Messages cover
  text that is not an address, a non-Forever link, a missing order, an unknown
  format version, an order that does not match the build, and a class with no data.
- Done: tree data for all nine classes; messages for exported build text.
- Not proven: only warlock has been checked against a real Wowhead address. The
  other eight decode a made-up one-talent address, which tests loading but not
  the tree order. One real address per class settles it; a wrong order shows as
  "the order and the build do not match".
- Hunter Marksmanship: wowforevertalents lists a 17th talent (Improved Serpent
  Sting) that Wowhead's data lacks. The file follows Wowhead, as the address does.
- Decided 2026-10-12: talent rows are only shown (no checkbox), so there is
  nothing to flag when the build is switched and the "Untick all talent rows"
  button is gone.

### G. First Aid (done for levels 1-20)
- Seven rows and a First Aid type, from `research/first-aid.md`. Not found for
  Forever: heal amounts, the Recently Bandaged time, what interrupts a bandage.

### H. Direction (owner, 2026-10-12)
- The page is one Orc Warlock today. Talent import comes first for every class;
  if that works out, the goal is every class and every profession, which means
  the hand-written rows need a way to be chosen per character.

### I. Data layers and any character (owner agreed, 2026-10-12; NEXT)

Goal: every class, then every profession, then races, without becoming a
leveling guide. Test characters: Human Hunter and Undead Paladin, levels 1-10
(`research/human-hunter-01-10.md`, `research/undead-paladin-01-10.md`).

Three layers:
- **Facts**, `source/<class>-spells.json`, `<class>-talents.json`,
  `<class>-quests.json`, `trainers.json`, and the same per profession, race and
  place. Filled by research and scripts. Every fact carries its source address,
  confidence and the beta build it was read from.
- **Advice**, `source/<class>-advice.json`: buy or skip and notes, keyed by the
  fact's id. Written by the owner or from a cited guide. Never overwritten when
  facts are pulled again.
- **Built**, `data/*.js`: made by a script in `tools/` (plain Node, no
  packages) and committed. Never edited by hand. The script also checks the
  data: duplicate ids, a fact with no source, advice for a fact that is missing.

Built files, by what a row depends on: `class-<class>.js` (by level),
`prof-<profession>.js` (by level or skill), `place-<zone>.js` (by zone or
dungeon, with the zone's own level range), `trainers.js`, `race-<race>.js`.

Row rules:
- A spell row has no location. The page fills it from the trainer list. First
  rule to try: the race's start zone until level 6, then its home city.
- New ids come from the game's spell and quest ids. The 50 warlock rows keep
  their ids through a fixed map, so saved progress survives.
- A quest chain can carry a chain name and a step number, shown as one group.
- `source` becomes a list, so a row can cite both sides of a conflict.
- Categories are declared in the data (Grimoire for the warlock, Pet for the
  hunter), not fixed in the page.

A character is a class, a race, professions and chosen places, picked in a new
edge tab that defaults to the Orc Warlock. Progress is saved per character;
Export and Import carry them all. In zone shows only chosen places that have
rows for the character; a level with nothing place-specific stays empty.

Build order:
1. Fact and advice formats and the build script; port the warlock through them.
   **Done 2026-10-12.** Screenshots of three views and the page's HTML were
   the same before and after, byte for byte. What step 1 left as it was:
   - Rows are not split. A row that lists several spells is still one fact
     with a descriptive id; ids from the game's spell and quest ids start with
     new facts.
   - The trainer list holds the old location text by level for an Orc. The
     start-zone-then-home-city rule is not written; it is needed when a second
     race is added (step 3).
   - Six grimoire rows and six gathering rows are `inferred` with no source.
     The build prints them as warnings.
   - The page still shows every built file. Choosing rows by class, race and
     profession is step 2; built rows already carry `professions`.
2. Character picker and progress per character. **Done 2026-10-12** (SPEC.md
   "Characters"). Seen rendered: the Character tab, a new Human Hunter with
   Skinning and Razor Hill, a save from the old key carried over. Not seen:
   Export and Import (file dialogs), which the owner checks by hand. Choices
   made without asking, easy to change: the picker offers three classes and
   three races (the warlock and the two test characters); any race can be any
   class; the four profession rows that name Orc trainers are tagged Orc only,
   so another race sees none until its own are written; a new character starts
   with no professions and no places.
3. Human Hunter and Undead Paladin facts for levels 1-10, built and shown.
   Needs more research first: spell costs from the per-spell pages on
   warcraftforever.games, and the unread parts of the two leveling guides.

Left out for now: dungeons as places, a profession picker beyond the warlock's
professions, any class past the two test ones.

### E. Levels 21-60
- After the 1-20 shape is settled. More facts in `source/` (higher levels in
  the class and profession files, new `place-*.json` files) and a rebuild.

## Notes

- The level-20 Succubus quest row rests on the owner's own beta run (Orgrimmar,
  Crossroads, Camp Taurajo, possibly Ratchet and Stonetalon).
- Bane of Agony does not hit on cast; the original brief said it did.
