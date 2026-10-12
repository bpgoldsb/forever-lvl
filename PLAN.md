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
  icon fallback chain, SKIP rows not holding a level open. Not yet looked at: the
  unlocked view, swap, edge panels, the narrow layout, export and import.
- Not published yet: the single commit on `main` is ready, and the Forgejo repo, GitHub mirror and Pages are still to be created.

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

### D. Repo and hosting
- Ready to publish: README with credits, `.nojekyll`, raw extraction untracked.
- Left, each needing the owner's go-ahead: create the Forgejo repo, add the push
  mirror to GitHub, push, enable Pages.

### E. Levels 21-60
- After the 1-20 shape is settled. New `data/route-21-40.js` and
  `data/levels-21-40.js` (and so on), added to `data/index.js`.

## Notes

- The level-20 Succubus quest row rests on the owner's own beta run (Orgrimmar,
  Crossroads, Camp Taurajo, possibly Ratchet and Stonetalon).
- Bane of Agony does not hit on cast; the original brief said it did.
