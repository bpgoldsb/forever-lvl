# Skinning, Leatherworking and the human Alliance zones, levels 1-20 (research, 2026-10-12, build 1.60.1)

Agents: `agy` on Gemini 3.8 Flash (two passes: professions, zones), then Claude re-read the cited Forever pages. No separate Claude research pass was made. The raw `agy` answers are in `research/raw/` (not committed).

Tags: confirmed = a Forever-specific page says so and the page was re-read; inferred = Classic assumed; unverified = `agy` only, or the page hedges.

## Checked against the page

All from wow-professions.com, whose trainer pages say "Not every trainer on this page was checked in WoW Forever yet".

| Fact | Page |
|---|---|
| Skinning ranks need skill only, no level: Journeyman 50, Expert 125, Artisan 200 | https://www.wow-professions.com/forever/skinning-trainers |
| Riley Peltskinner, Northshire Valley, teaches only Apprentice (to 75) | same |
| Helene Peltskinner (Goldshire), Maris Granger (Old Town, Stormwind), Wilma Ranthal (Redridge Mountains, no town given) teach every rank | same |
| Leatherworking ranks: Apprentice no level; Journeyman 50 and level 10; Expert 125 and level 20; Artisan 200 and level 35 | https://www.wow-professions.com/forever/leatherworking-trainers |
| Adele Fielder (house by Crystal Lake, north-east of Goldshire) and Randal Worth (Protective Hide, Old Town) teach Apprentice; Simon Tanner (same shop) Journeyman; Telonis (Darnassus) is the only Alliance Expert trainer listed; Drakk Stonehand (Aerie Peak) Artisan | same |
| No Leatherworking trainer is listed in Westfall or Redridge | same (absence on an unfinished page: unverified) |
| Recipe path 1-130, Salt and Coarse Thread from Tharynn Bouden in Goldshire, Classic recipes turn grey 25 points earlier | https://www.wow-professions.com/forever/leatherworking-leveling-guide |
| Camp Chair (Skinning 20), Camp Tent (Leatherworking 20, rested experience up to 5% of a level, once an hour), Tanning Rack (Leatherworking 140, needed for many recipes) | https://www.wow-professions.com/forever/camping-guide |
| Alliance camping quest giver in Elwynn: Sam Sarsaparilla | https://www.method.gg/wow-forever/camping-in-wow-forever-how-it-all-works-all-profession-buffs |
| Herbalism, Cooking, Fishing and First Aid trainers in Elwynn, Stormwind and Lakeshire (names and places as in the rows) | the four `/forever/<profession>-trainers` pages |

## Stated by agy, not on the page or not checked (left out of the rows, or marked unverified)

- Trainer coordinates. The pages hold them in map pins that a plain fetch does not show.
- Trainer costs in copper, silver and gold: the page shows numbers without the coin.
- A Leatherworking supply vendor inside the Protective Hide: the guide says only that most trainers have one nearby.
- Wilma Ranthal "on a mountain trail": the page gives the zone only.
- Which trainers are "junior" for Herbalism (Nancy Songflower).
- Skinnable beasts per zone and what leather they give: Classic wiki only, and some entries look wrong for the zone. Rows name only the common beasts and are `unverified`.
- Herb skill changes (Bruiseweed 100, Stranglekelp 85, Wild Steelbloom 115, Kingsblood 125) and fishing catches, cited to the alchemy and fishing guides, which were not re-read. Not in any row.
- Keen Skinning Knife, Apprentice's Skinning Satchel, Pristine Leather and "Pelt Collecting for Beginners", cited to https://www.warcrafttavern.com/forever/skinning, not re-read. Not in any row.
- Westfall Stew, Goretusk Liver Pie and Redridge Goulash: Classic wiki only (`inferred`).

## Not found

- A level range per zone for Forever. The place level ranges in `source/place-*.json` are Classic's, split so the places do not overlap.
- Profession quests in Northshire, Elwynn or Stormwind other than the camping pair.
- Any camping blueprint in The Stockade.
