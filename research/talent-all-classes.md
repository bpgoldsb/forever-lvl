# Talent import for all nine classes (research, 2026-10-12)

Legend: **[V]** verified by fetching data or JS and checking it. **[C]** read from code, not run in a browser. **[I]** inferred.

## Result

- `data/talents-<slug>.js` written for warrior, paladin, hunter, rogue, priest, shaman, mage, druid, plus `data/talents-warlock.trees.js` (registry shape; existing `talents-warlock.js` untouched). All pass `node --check`.
- Registry shape: `window.TALENT_TREES["<slug>"] = { name, trees: [{ name, talents: [{ name, icon, row, col, max, ranks, requires? }] }] }`. `requires` is a list of talent indexes in the same tree (row-major order); omitted when empty. Prerequisite rank quantities (e.g. "needs 5 of X") are not in the files, only the link.
- Icons: 358 distinct icons used; 306 were missing and downloaded into `icons/`; 0 failures (one transient curl failure, retried OK). All 358 present.
- Raw downloads in `research/raw/` (gitignored): `wowforevertalents-<slug>.json` (9), `wowhead-forever-<slug>.json` (9, Wowhead's per-spec talent objects), `wowhead-forever-talents-classic.js` (whole Wowhead data file), `wowhead-TalentCalcClassic.js`, `wowhead-global-2022-archive.js` (Wayback copy of Wowhead global.js, used for the spec order).

## Part 1 - data sources

Two sources, both [V] fetched and cross-compared, 466 talents matched by id:

1. **Wowhead data endpoint** `https://nether.wowhead.com/forever/data/talents-classic` (hashVersion `v2`). It ignores the `dv` query (dv=27..50 and none returned the identical 947446 bytes). It has name, icon, row, col, per-rank descriptions, `requires`, but its rank text carries HTML comments/markup and level-scaled damage ranges.
2. **wowforevertalents.com** data. It is not a JSON endpoint: all nine classes are embedded as `JSON.parse(...)` in the bundle `https://wowforevertalents.com/_astro/VotePair.8o340dle.js` (hash may change). Client build 1.60.1.70338. Clean rank text.

Used per class: **structure from Wowhead** (the URL index is defined by Wowhead's list, so it is authoritative), **rank text from wowforevertalents** (clean). Name/icon/row/col/max matched between the two for every talent, except as noted below. Same method for every class, so completeness is the same for all nine.

Differences found:
- **Hunter / Marksmanship: wowforevertalents has 17 talents, Wowhead 16.** The extra one is `Improved Serpent Sting` (row 3, col 3, 5 ranks, id 105003). It is not in Wowhead's data at all. Since Wowhead's index drives the URL, the hunter file follows Wowhead (16, without it). If Wowhead later adds it, every Marksmanship talent after row 3 col 2 shifts by one index. **Re-check Wowhead's data before relying on hunter MM, and when a hunter URL fails the points-vs-order check.**
- Rank text differs in small numbers (Wowhead scaled ranges like "101 to 131" vs wowforevertalents "100 to 132"; 46 talents differ after stripping markup). I kept wowforevertalents text, same as the existing warlock file.
- 3 talents have a prerequisite in Wowhead but not in wowforevertalents (Improved Mind Flay, Nature's Splendor, Divine Precision). I used Wowhead's.
- wowforevertalents has an icon typo `spell_shadow_devouringplague.` (trailing dot, priest Devouring Contagion); Wowhead's name used.
- Text normalisation I applied: literal `\n` sequences in a few descriptions (Weaponmaster, Seal of Command, Venom, Demonic Sacrifice, Master Demonologist, ...) became spaces. This is the only difference against the existing `talents-warlock.js` (2 warlock talents differ, only in that whitespace). Everything else in `talents-warlock.trees.js` equals the existing file (checked with a node script).
- Tree names are wowforevertalents's, e.g. Priest "Shadow Magic", Shaman "Elemental Combat", Druid "Feral Combat".

Point totals per tree (sum of max ranks) and talent counts (each class 51 points to spend):

| Class | Tree 0 | Tree 1 | Tree 2 |
|---|---|---|---|
| warrior | Arms 17 talents | Fury 17 | Protection 18 |
| paladin | Holy 17 | Protection 16 | Retribution 17 |
| hunter | Beast Mastery 16 | Marksmanship 16 (see above) | Survival 18 |
| rogue | Assassination 17 | Combat 17 | Subtlety 19 |
| priest | Discipline 18 | Holy 17 | Shadow Magic 18 |
| shaman | Elemental Combat 16 | Enhancement 18 | Restoration 16 |
| mage | Arcane 18 | Fire 17 | Frost 19 |
| warlock | Affliction 17 | Demonology 19 | Destruction 16 |
| druid | Balance 16 | Feral Combat 20 | Restoration 16 |

## Tree order in the URL

Evidence:
1. [V] Wowhead's TalentCalcClassic.js: the points part is split on `-` and group *r* goes to tree object `U[r]`; the order part's tree digit also indexes `U[...]`, and `U` is built from `g_chr_specs_by_class[classId]` in order. So **the points-part group order and the order-part tree digit are the same index; they cannot differ** [C].
2. [V] The spec list that `getByIndex` uses, read from Wowhead's global.js (Wayback copy, 2022, CLASSIC env; the live copy was not retrievable, `www.wowhead.com` returns 403 CloudFront to scripted fetches): Druid Balance, Feral Combat, Restoration; Hunter Beast Mastery, Marksmanship, Survival; Mage Arcane, Fire, Frost; Paladin Holy, Protection, Retribution; Priest Discipline, Holy, Shadow; Rogue Assassination, Combat, Subtlety; Shaman Elemental, Enhancement, Restoration; Warlock Affliction, Demonology, Destruction; Warrior Arms, Fury, Protection. This is NOT numeric spec-id order (warlock ids are 302/303/301, mage 81/41/61), so the order is a deliberate list.
3. [V] That order equals the order wowforevertalents uses for all nine classes (`order` 0/1/2), and the warlock case is confirmed against the real URL given in the task (and by the existing working decoder).

Confidence: **warlock: certain** (real URL). **Other eight: high, not certain.** The order comes from the 2022 CLASSIC-env code, and the Forever env was not read directly; no real Forever URL for these classes was found (searches and guide pages carried none). The talent-index order (row, then col) is [V] from the same JS sort. **Best final check once the owner has a real URL per class: the decoder's points-vs-order consistency check** (the app already reports mismatches); a wrong tree order would produce sums that do not equal the final ranks.

The files list trees in this order; the registry therefore needs no remapping.

## Part 2 - what users could paste

Verified in `TalentCalcClassic.js` [C]; I could not render the page, and the React `StatusToolbar` module was not read, so a button there is not excluded.

### Strings the calculator produces
- **"Link" button**: copies the page URL (`WH.clickToCopy(t, () => t.href)`). Just the URL. No short link or shortener appears in the code.
- **"Embed" button**: `prompt(...)` showing the same URL with `/talent-calc/embed/...` (`G().replace("talent-calc","talent-calc/embed")`). A user could paste this. It decodes the same.
- **Saved builds**: stored locally as `{id,name,url,classId}` with `url` containing `/talent-calc/`. Nothing exported.
- I found **no in-game import string and no Export button** in the calculator JS. The tool's "Import" button loads a *character* from the Blizzard/Wowhead armory (shown only when `R.dataEnv === WH.dataEnv.CLASSIC`, so probably not on Forever [I]).

### Non-URL strings that exist (what to recognise)
1. **Blizzard-style base64 talent string** (the one code path in the calculator that accepts it): in the URL, the points part after `v2` starts with an uppercase letter and is decoded by function `Z(classId, str)`: base64url alphabet `A-Za-z0-9_-`, first byte high nibble 0, low nibble a byte count, then 2 bits per talent per tree (0 none, 1 rank 1, 3 max rank, 2 means "next 2 bits + 2"). It begins with `A`..`D` in practice [I]. This is produced by the character importer, not copied by users. Recognise: `^v2[A-Z]` in a points part, or a bare token matching `^[A-D][A-Za-z0-9_-]{20,}$` with no slashes. The app can say "this is an in-game/armory loadout string, not a calculator address".
2. **Bare order string** (third path segment alone): `^[0-9a-zA-Z.!_~^-]+$` shaped like `0CbbbEjKg...`; **bare points hash** `v2...-...` or `03550...-0005...`. Say "paste the whole address".
3. **wowforevertalents.com**: `?t=` code `^[a-z]?[0-9]{0,24}(-[0-9]{0,24}){0,2}$` e.g. `a03550320134211301-00052102302-2`, URL host `wowforevertalents.com`; its "Copy backup link" is base64 of a JSON list. These carry final ranks only, no order [V in earlier research/talent-order-tools.md].
4. **Talent Planner** link `#b/<base64 of {"classToken":...,"talents":[spellIds]}>` or its JSON export [V in earlier research]. Flavours classic/tbc only.
5. **Wowhead Classic / Season of Discovery / TBC addresses** (`/classic/talent-calc/...`, `/tbc/...`, `classic.wowhead.com/talent-calc/...`): same grammar but different trees; reject unless the path has `/forever/` [I, from `removePathPrefixes` treating the game segment as a selector].

### URL variants that should still be accepted
Grammar of the page's own matcher, applied to the pathname after prefixes are removed:
`/talent-calc(/embed)?/<classslug>(/<points>(/<order>)?)?` with
points `[a-zA-Z0-9_-]+` and order `[a-zA-Z0-9.!_~^-]+`. The regexes are not end-anchored, so a trailing `/` or extra text is ignored.
- **Locale prefix** `/de/forever/talent-calc/...`: `removePathPrefixes` removes the first segment if it is a game selector (e.g. `forever`), then the next if it is a locale selector (`de`, `fr`, `es`, `ru`, `pt`, `it`, `ko`, `zh`/`cn`...). I verified the removal logic, not the full locale selector list; the order of game-then-locale in the code means `/forever/de/talent-calc` is the canonical one; `/de/forever/...` is [I] likely also redirected by the site. Safest for the app: skip any path segments before `talent-calc`.
- **Host** variants (`www.`, `classic.`, other-language subdomains): the app should look only at the path from `talent-calc` on.
- **Query string and fragment** (`?foo`, `#x`): the page parses `location.pathname`, which excludes them, so ignore both [C].
- **`/embed/`** after `talent-calc`.
- **Points suffixes** after `_` in the points part, any order: `_t0`..`_t5` (talented rank), `_l<1-99>` (player level), `_r<id>` (race id), and one extra unknown token (rune/extra data for classes that have it). `splitPointsHash` splits on `_`; unknown extras are passed on, never an error. The app should drop everything from the first `_`.
- **Points but no order**: valid in the calculator (no click order). The app already reports this.
- **Order but no (valid) points**: ignored by the calculator.
- **Class slug** comes from `PlayerClass.getBySlug`; unknown slug makes the page not load. Slugs: warrior, paladin, hunter, rogue, priest, shaman, mage, warlock, druid [Wowhead slugs; Forever has no death knight].
- **Short/share links**: none found.

### Hash version
- The data file says `hashVersion: "v2"`. Writing: `stampHashVersion("v2", points)` prefixes `v2`. Reading: `stripHashVersion("v2", s)` keeps the rest if the string starts with `v2`, otherwise returns `""`, and then the order part is also cleared (`if(!a) n=""`). So **an address with another version marker (v1, v3) or none is silently treated as empty by the calculator: no error, an empty build.** The app should treat a points part not starting with `v2` as "unsupported version" rather than guessing. Note the decoder in `index.html` accepts `^v\d` (any single digit); it should require `v2` if that distinction matters.
- Caveat: the version is read from the data, so Wowhead can bump it. Re-check `hashVersion` in the data file if imports start failing.

### Order-part decoding detail (for the app's decoder)
- A digit < number of trees switches the current tree; the page's own check is `parseInt(c) < U.length` (3), so digits 0..2. Digits 4, 6, 8 and 5, 7, 9 are also talent letters (alphabet positions 29-31 area) and are consumed as letters, as the existing decoder does.
- Upper-case twin = all ranks of that talent; the page then drops entries that exceed the final points (`te()`), so a stale order is trimmed to the final ranks.
- Unknown characters are skipped silently by the page; the app should report them.
- The page enforces nothing about row-unlock order in the string; legality is the app's job if wanted.

## What failed or is unverified
- `www.wowhead.com` pages return 403 to scripted fetches (also with a browser user agent), so no calculator page or real Forever URL for the non-warlock classes was seen; the tree order for those eight rests on the archived JS plus the wowforevertalents order.
- The live Wowhead `g_chr_specs_by_class` (the global the calculator reads) was not fetched; only the 2022 archive of the spec list.
- Hunter Marksmanship `Improved Serpent Sting` mismatch between sources (above).
- The `StatusToolbar` React module (possible extra Copy/Share buttons) was not located.
- No browser rendering was done. The new data files have only been syntax-checked and, for warlock, compared against the existing file; they are not wired into `index.html` (not asked).
