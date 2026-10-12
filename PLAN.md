# Plan

Resume point. Last worked 2026-10-12. Start a session in this folder and read
`SPEC.md` (decisions) and `AGENTS.md` (rules) first.

## State

- App works: two locked columns, level stepper, type filter, finished rows hide,
  edge tabs, export/import, talent rows. See SPEC.md.
- Data: 50 hand-written tasks for levels 1-20 (37 on-level, 13 in-zone) plus 11
  generated talent rows (levels 10-20).
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
- The zones in `data/route-01-20.js` leave levels 1-4, 9-10 and 19-20 with nothing
  on the In zone side. Not checked whether that is intended.

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

### E. Levels 21-60
- After the 1-20 shape is settled. New `data/route-21-40.js` and
  `data/levels-21-40.js` (and so on), added to `data/index.js`.

## Notes

- The level-20 Succubus quest row rests on the owner's own beta run (Orgrimmar,
  Crossroads, Camp Taurajo, possibly Ratchet and Stonetalon).
- Bane of Agony does not hit on cast; the original brief said it did.
