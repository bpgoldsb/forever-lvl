# Agent instructions

Static web app: a WoW Forever leveling dashboard for one Orc Warlock. Read `SPEC.md`
for what it must do and `PLAN.md` for what is next and what is undecided.

## Rules

- No dependencies, no build step, no framework. `index.html` plus `data/*.js`. It
  must keep working when opened from `file://`. `tools/` is for checking the app
  and is not part of it.
- Data changes go in `data/`, not in `index.html`. Follow the field list at the top
  of each data file.
- Never change or reuse a task `id`; saved progress is keyed on it.
- Do not invent game facts. Forever is in beta and differs from Classic. A row is
  `confirmed` only when a Forever-specific page says so; otherwise `inferred` or
  `unverified`, with the source URL when there is one. "Not found" is a valid result.
- Run every research question twice: once with the session's own agent and once
  through `agy` on a Gemini Flash model (`agy --model <flash model> --sandbox -p`),
  which often has newer pages for a game this recent. Ask it for the full page
  address of every fact, not a bare domain, and treat what it returns as unchecked
  until a page has been read. Where the two disagree, the row is `unverified`.
- Do not add generic quest-path rows; see SPEC.md "What goes in it".
- The repo is public (Forgejo, mirrored to GitHub, served by GitHub Pages), so a
  push publishes. Pushing needs the owner's go-ahead at the time.
- Nothing from `research/raw/` is committed, and no personal or homelab detail
  (addresses, hostnames, credentials) goes in any file.
- Commit to the local repo when a piece of work is done.

## Checking your work

- `node --check data/<file>.js` for each data file you touch.
- Look at every UI change: `node tools/shot.mjs --shot out/x.png` renders the page
  in headless Chromium under podman and saves a PNG you can read. It can also set
  saved state, click, hover and run JavaScript in the page, and it prints console
  messages; usage is at the top of the file. `out/` is not committed. Say plainly
  when a UI change has not been seen rendered.
- The script cannot show native tooltips or file dialogs (Export, Import).
- To preview: `python3 -m http.server 8765 --bind <host address> --directory .`
  and stop it afterwards.
