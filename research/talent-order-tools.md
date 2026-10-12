# Talent-order tools for WoW Forever (research, 2026-10-12)

Question: is there a tool where the owner can fill in a Forever talent build in order (level 10..60) and we can import that order?

Legend: **[V]** verified by fetching the page or its JS. **[S]** only from a search-result snippet. **[I]** inferred from code, not run.

## Bottom line

**Wowhead has a Forever talent calculator with a "Talent Order" feature, and its URL encodes the click order.** It is the best option. [V] that the page and its JS exist and that the JS reads and writes an order segment. [I] on the exact per-tree index mapping, because I could not render the page. Nothing else I found records order for Forever.

wowforevertalents.com does NOT record order. Its `level` parameter is a character-level cap, not an order.

## 1. wowforevertalents.com (fetched page + JS)

- Page: https://wowforevertalents.com/warlock/?t=a03550320134211301-00052102302-2. Calculator bundle: https://wowforevertalents.com/_astro/TalentCalculator.C9-4qhsf.js.
- The URL writer is `o.searchParams.set("t",...)`, `"private"` and `"level"` [V]. Only these three parameters are written.
- `level=N` exists, but it means "Plan for a character of this level: it caps the talent points to spend and the spell ranks the book below shows" (the input's own tooltip) [V]. It is written to the URL only when below 60. The UI also shows "Points left" and "Required level".
- It does not encode order.
- The `t` value is `[version letter]<tree1 digits>-<tree2>-<tree3>`. There is one digit per talent, in row-major order (sorted by row, then col), as the final rank. Trailing zeros are trimmed. The leading `a` is a version stamp (regex `^[a-z]?[0-9]{0,24}(-[0-9]{0,24}){0,2}$`) [V].
- I checked the owner's string against `raw/wowforevertalents-warlock.json` (not published) sorted by (row, col). Every digit is at most that talent's maxRank. Affliction sums to 34 and Demonology to 15, matching the 51 points [V]. The tree order in the string is Affliction, Demonology, Destruction.
- Other features: saved builds in localStorage and a "Copy backup link". The backup link is base64 of the build list with `[cls, code, name, note, level, ...]`. This is still final ranks only [V]. I found no export, import, or sequence mode.
- https://wowforevertalents.com/about/ has no order feature either [V].

## 2. Other Forever planners

### Wowhead Forever talent calculator (best candidate)

- URL: https://www.wowhead.com/forever/talent-calc. It fetched with HTTP 200 and the title "Forever Talent Calculator". The meta description reads "Talent Calculator for WoW Forever. Theorycraft, plan, and share your Forever character builds for all nine classes." [V]
- It loads https://wow.zamimg.com/js/WH/Wow/TalentCalcClassic.js. The page renders client-side, so the plain fetch shows only a shell. I read the JS instead.
- Talent data: https://nether.wowhead.com/forever/data/talents-classic?dv=29. It has `hashVersion:"v2"`. Warlock trees are keyed 301 (Destruction, 16 talents), 302 (Affliction, 17) and 303 (Demonology, 19). Talent ids and counts match wowforevertalents.com exactly [V].
- The JS has a "Talent Order" panel (`WH.TERMS.talentOrder`) and a `selectionOrder` array of `{tree,index}` pushed per click. It is persisted in the URL [V].
- **URL shape.** The path is `/forever/talent-calc/<classslug>/<pointsHash>/<orderString>`, where the third segment exists only when an order has been clicked [V, from the encoder and decoder code].
  - `pointsHash` is `v2` plus the same row-major final-rank digits, with trees joined by `-`. Optional suffixes are `_t<n>`, `_l<level>` (player level), and a race prefix `_r<id>`.
  - `orderString` is a sequence of tree-index digits (0..2), each followed by one letter per point taken in that tree. The letter is the talent's index within the tree, in the alphabet `abcdefghjkmnpqrstvwzxyilou468-~!`.
  - Compression: if all N ranks of a talent were taken consecutively, the run is replaced by the uppercase twin from `ABCDEFGHJKMNPQRSTVWZXYILOU579_^.` at the same position. A decoder must expand an uppercase letter into maxRank points. Lowercase is one point.
  - A new tree digit is written only when the tree changes from the previous point.
  - Worked example (decoder logic, not seen on a live page): `0abb1c...` means a point in Affliction talent index 0, two in index 1, then one in tree 1 talent index 2.
- Position k of the expanded order (0-based) corresponds to level 10+k. `FIRST_TALENT_LEVEL = 10` [V]. This matches the one-point-per-level rule from https://seemeta.com/en/wow-forever/talent-calculator [V].
- **Not verified [I]:**
  - The tree digit is the index in `g_chr_specs_by_class[9]`. I could not see that array. Mapping from digit to Affliction, Demonology or Destruction is unconfirmed, and it may not match wowforevertalents' order.
  - The talent index is the row-major position (sort by row, then col). The sort in the JS is consistent with the points hash.
  - Both are cheaply self-checking. A correct decode must give per-talent counts equal to the final ranks (34/15/2 for the target build). Try the possible digit mappings and keep the one that matches.
- The Talent Order panel is rendered in the browser. I did not see whether it labels each row with its level. We can compute the level ourselves.
- Owner effort: open the Wowhead Forever calculator, pick Warlock, and click the 51 talents in the order wanted (left-click adds a point). Then copy the browser URL. Loading a points-only link into the Wowhead URL does NOT create an order, because the order is only built from clicks.

### SeeMeta (https://seemeta.com/en/wow-forever/talent-calculator/warlock)

- Fetched with HTTP 200. The page text says "Plan a build for any class at any character level, search talents, undo steps, save your builds and share them by link", "Your build and race are saved in the page address", and "Pick a character level to see the points you have at it" [V].
- A search-result snippet claims the calculator "shows the level for every point" [S]. The page text does not say that. I could not find the URL format, because the page is a Vue app and the component script I fetched was a 603-byte stub.
- Conclusion: status of order encoding is unknown. I do not recommend it as a primary route. It could be checked by hand in a browser if Wowhead fails.

### Others

- Zockify, https://www.zockify.com/forever/talents/: fetched, but the calculator only showed "Loading..." and nothing else. Could not evaluate [V that it did not render].
- Icy Veins announcement, https://www.icy-veins.com/wow/news/start-planning-your-wow-forever-character-with-our-new-talent-calculator/: HTTP 403 to fetch. Not evaluated.
- Guild Order, https://guildorder.com/games/wow_forever/tools/talents/shaman: appeared in a search result with a save-build and copy-link UI [S]. Not fetched.
- ExpCarry, RankedBoost: search results only [S]. They describe planners enforcing budget and row requirements. They say nothing of order.
- Warcraft Tavern: my guess at a Forever URL (`/forever/talent-calculator/`) returned 404. I did not find a Forever calculator there.
- I found no GitHub-hosted Forever talent tool with level-by-level export. One web search, [S].

## 3. Classic-era planners that encode order

| Tool | Order format | Usable for Forever? |
|---|---|---|
| Wowhead Classic talent calculator (the same code as the Forever one above) | Third path segment, as described in section 2. The Talent Order option must be on [S, https://www.curseforge.com/wow/addons/talent-sequence-2] | Only the Forever instance matters, since the Classic trees differ. The format is identical, so the Forever instance is the usable one. |
| Talent Planner web UI, https://talentplanner.app (source https://mikeacjones.github.io/TalentPlanner-WebUI/) | Link `#b/<base64 of {"classToken":"WARLOCK","flavor":"tbc","talents":[<spellId per point in order>]}>`, or an "Export JSON" button with the same JSON [V, planner.js] | **No.** Only `classic` and `tbc` flavors are shipped (data/warlock-classic.json, data/warlock-tbc.json) [V, FLAVORS list]. Forever's trees differ. The spell ids could be reused only by adding our own data. The JSON shape is a convenient output format for our dashboard, but no tool of ours emits it. |
| Talent Sequence 2 addon, https://www.curseforge.com/wow/addons/talent-sequence-2 | Imports Wowhead, Warcraft Tavern and Talent Planner links. Supports Classic Anniversary and TBC Classic only, no mention of Forever [V] | No, and it is in-game only. |

I did not fetch sixtyupgrades or rpgbot, so I make no claim about them.

## Conclusion

1. **Best option: Wowhead Forever talent calculator** (https://www.wowhead.com/forever/talent-calc/warlock). The owner clicks the 51 points in leveling order and pastes the resulting URL. This is the least owner effort, and the order is part of the URL. We import the whole URL, so no manual per-level entry is needed.
2. **Exact format to import:** the path after `/forever/talent-calc/warlock/`, which has two parts. The first is `v2<points>` (for example `v2` plus `03550320134211301-00052102302-2`). The second is `<order>`: digit `0|1|2` for the tree, then one letter per point, using the two alphabets above. Lowercase is one point and uppercase means all ranks of that talent. The decoder expands to 51 `(tree, talentIndex)` entries and assigns level 10+k to entry k.
3. **Validation step before trusting the decoder:** sum the expanded counts per talent and compare against the final ranks (Aff 34 / Demo 15 / Destr 2). Also check that every prefix respects the row-unlock rule (5 points in a tree per row) and the `requires` field. The tree-digit mapping is the one unverified assumption. The decode check above settles it from a single URL from the owner.
4. **Fallback A (needs no tool):** the owner pastes the wowforevertalents.com `?t=` string at several levels (for example 10, 15, 20, 30, 40, 50, 60). We diff consecutive strings to get the per-checkpoint additions. Within each interval, order is unknown, so an agent fills it in with a legal sequence.
5. **Fallback B (needs no owner input):** an agent generates a legal order from the final ranks, using the 5-points-per-row unlock and the `requires` data in `raw/wowforevertalents-warlock.json` (not published). It is unverified against the owner's intent, so the owner must approve it.

## Not done / limits

- I did not render any page in a browser. The Wowhead URL grammar comes from reading TalentCalcClassic.js, not from observing a real URL.
- I did not confirm what the Wowhead Talent Order panel displays (levels or just numbers).
- Search-sourced claims are marked [S] and unverified.
