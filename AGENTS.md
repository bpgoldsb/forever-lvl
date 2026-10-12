# Agent instructions

Static web app: a WoW Forever leveling dashboard for one Orc Warlock. Read `SPEC.md`
for what it must do and `PLAN.md` for what is next and what is undecided.

## Rules

- No dependencies, no framework, and no build step for the app: `index.html` plus
  the committed `data/*.js`. It must keep working when opened from `file://`.
  `tools/` is for checking the app and building its data, and is not part of it.
- Data is in layers (PLAN.md section I): facts and advice in `source/`
  (formats in `source/README.md`), and `data/*.js` built from them by
  `node tools/build-data.mjs` and committed. Never edit a built file (it says
  GENERATED at the top); change `source/`, rebuild, and commit both. Facts and
  advice stay in separate files: pulling facts again must not touch advice.
  `data/reference.js`, `data/build.js` and `data/talents-*.js` are not built.
- Never change or reuse a task `id` or a fact `id`; saved progress is keyed on
  the task id, and `source/legacy-ids.json` ties the two together.
- Do not invent game facts. Forever is in beta and differs from Classic. A row is
  `confirmed` only when a Forever-specific page says so; otherwise `inferred` or
  `unverified`, with the source URL when there is one. "Not found" is a valid result.
- Research agents (owner's rule, 2026-10-12):
  - Research about WoW or WoW Forever content MUST use an `agy` agent on a Gemini
    Flash model, which often has newer pages for a game this recent. A Claude
    agent MAY be used as well, at the agent's discretion. When both are used,
    merge the results into one report.
  - Workflow and general-purpose research uses Claude agents; `agy` MAY also be
    used at the agent's discretion.
  - Keep the raw material of every research run under `research/raw/`, with
    the date in the name: the agent's full answer, and a copy of each page
    that was re-read to check it (`research/raw/pages-<date>/`). The beta
    sites change, and this is the only way to recheck a row later.
    `research/raw` is a link into the private `forever-lvl-data` repo, checked
    out beside this one: commit the new files there, never here.
  - Every research report says at the top which agents produced it. Ask `agy` for
    the full page address of every fact, not a bare domain. Where the two agents
    disagree, the row is `unverified`.
- Do not add generic quest-path rows; see SPEC.md "What goes in it".
- The repo is public (Forgejo, mirrored to GitHub, served by GitHub Pages), so a
  push publishes. Pushing needs the owner's go-ahead at the time.
- Nothing from `research/raw/` is committed, and no personal or homelab detail
  (addresses, hostnames, credentials) goes in any file.
- Commit to the local repo when a piece of work is done.

## Checking your work

- `node tools/build-data.mjs` after any change in `source/`; it checks the
  data and stops on an error. `node tools/build-data.mjs --check` must say "up
  to date" before a commit.
- `node --check data/<file>.js` for each hand-written data file you touch.
- Look at every UI change: `node tools/shot.mjs --shot out/x.png` renders the page
  in headless Chromium under podman and saves a PNG you can read. It can also set
  saved state, click, hover and run JavaScript in the page, and it prints console
  messages; usage is at the top of the file. `out/` is not committed. Say plainly
  when a UI change has not been seen rendered.
- The script cannot show native tooltips or file dialogs (Export, Import).
- To preview: `python3 -m http.server 8765 --bind <host address> --directory .`
  and stop it afterwards.
