# Alchemy, Tailoring, Enchanting, Mining, Blacksmithing, Engineering, levels 1-20 (research, 2026-10-12, build 1.60.1)

Agents: `agy` on Gemini 3.8 Flash (two passes, three professions each), then Claude read the cited Forever pages. No separate Claude research pass was made. The raw `agy` answers are `research/raw/agy-alchemy-tailoring-enchanting-20261012.md` and `research/raw/agy-mining-blacksmithing-engineering-20261012.md`; the page copies are in `research/raw/pages-20261012/` (`wp-*`, `wfg-prof-*`, `wt-*`). Neither is committed here.

**How this report was made, and its limit.** The zones answer from the same day credited many facts to pages that do not hold them, so the rows here were written from the pages, not from the `agy` answers. The answers supplied the list of pages. Their own statements were not compared line by line with the pages, so there is no "stated by agy, not on the page" list for these six professions.

Tags: confirmed = a Forever-specific page says so and the page was read; unverified = the page hedges or two pages disagree.

## Read and used

All trainer pages say "Not every trainer on this page was checked in WoW Forever yet"; all guides say they are "still in progress".

| Fact | Page |
|---|---|
| Alchemy, Tailoring, Enchanting, Blacksmithing, Engineering ranks: Apprentice no level; Journeyman skill 50 and level 10; Expert 125 and level 20; Artisan 200 and level 35 | the five `https://www.wow-professions.com/forever/<profession>-trainers` pages |
| Mining ranks need skill only, no level: 50, 125, 200. Junior trainers in the starting zones stop at 75 | https://www.wow-professions.com/forever/mining-trainers |
| Every trainer name and place in the rows, for Orc and Human, Apprentice to Expert | the six trainer pages |
| Closest trainer per race, and the zones with none (Tailoring: Durotar, Mulgore, Dun Morogh, Teldrassil; Enchanting: Mulgore, Elwynn, Dun Morogh; Engineering: Tirisfal, Elwynn, Teldrassil; Alchemy: Mulgore, Dun Morogh; Blacksmithing: Mulgore, Teldrassil) | the five `https://www.wow-professions.com/forever/<profession>-leveling-guide` pages |
| Recipe paths to skill 150 (125 for Tailoring), as in the rows | same |
| Expert training costs 50 silver | same |
| Blacksmith Hammer vendors: Flakk in Razor Hill, Tharynn Bouden in Goldshire | https://www.wow-professions.com/forever/blacksmithing-leveling-guide |
| No starting zone but Zephras Isle has an Enchanting Supply vendor; Disenchant is in the Professions window, not the spellbook; new low recipes make the first 70 points cheaper than Classic | https://www.wow-professions.com/forever/enchanting-leveling-guide |
| The Gnome racial no longer adds 15 Engineering skill (not in a row) | https://www.wow-professions.com/forever/engineering-leveling-guide |
| Lodestone (Mining 20): 1 Rough Stone, 1 Copper Bar, melee attack power, does not stack with Blessing of Might. Rock Garden at Mining 140, blueprint from the Relic Guardian in Excavation Site: Wetlands | https://www.wow-professions.com/forever/camping-guide |
| Crafting stations: Fermenter (Alchemy 140, blueprint from Rath'mael, Ruins of Lordaeron); Spinning Wheel (Tailoring 140, blueprint from the Unstable Sentinel, City of Dalaran). The crafting professions have no skill-20 camp item on this page | same |
| Poor Copper Veins in the starting zones; nodes respawn faster with more players nearby; Copper to skill 70, Tin from 65; Rockslicer from Rhahk'Zor in the Deadmines mines low veins without the profession (30 uses) | https://www.warcrafttavern.com/forever/guides/mining-overview-ore-smelting-bonuses/ |

## Pages disagree

- Betty Quin, the Stormwind Apprentice Enchanting trainer: the trainer page says the Canals, the guide says the Mage Quarter. The row gives both.
- Kelsey Fargo, the Human junior Mining trainer: the trainer page says Elwynn Forest, Warcraft Tavern says Northshire. The row gives both.
- Linzy Blackbolt, Charles Worth, Vanessa Sellers and Alard Schmied in Dalaran are listed for several ranks, and the trainer pages say each "might be bugged in the beta". Rows name them only as a second choice.

## Saved but not read

These pages are in the page copies and no row depends on them: the six `warcraftforever.games/professions/...` pages, `wow-professions.com/forever/merchants-favor-durotar-supply-azeroth-commerce`, and Warcraft Tavern's Engineering, Blacksmithing and camping pages. https://seemeta.com/en/wow-forever/professions/ refused a plain fetch.

## Not found, or left out

- Trainer coordinates and what a rank costs below Expert: the pages show them in map pins, or as numbers without a coin.
- Anything past skill 150 and level 20. The guides run to 225; the Artisan parts are not tested by their author.
- Rows for Undead, the third race in the picker: no profession has Undead rows yet.
- Engineering and Blacksmithing specializations.

## Rows

44 rows in `source/prof-<profession>.json`, six new row categories, six new professions in the Character tab. Trainer rows are tagged Orc or Human. Recipe-path rows and the Lodestone row have no race tag; each sits at the later of the two races' "learn" levels, so it never shows before its own "learn" row.
