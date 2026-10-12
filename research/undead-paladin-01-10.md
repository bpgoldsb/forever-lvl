# Undead (Forsaken) Paladin, levels 1-10 in WoW Forever (research, 2026-10-12, build 1.60.1)

Agents: Claude only so far. The required `agy` (Gemini Flash) pass is NOT done: two runs on 2026-10-12 returned nothing because headless `agy` denied its page-fetch tool. Treat this report as incomplete until that pass is merged in.

Tags: confirmed = a Forever-specific page says so; inferred = Classic assumed; unverified = sources conflict or none; not found.
Note on "confirmed": every Forever source here is a third-party guide site or the Warcraft Wiki (warcraft.wiki.gg Forever pages, which read the beta client and flag themselves "possibly out of date"). None is Blizzard. Wowhead Forever, Mobalytics and Icy Veins pages returned HTTP 403 to plain fetch, so their content is only known from search snippets (marked "snippet").

## Bottom line

Undead Paladin is a real Forever combination with its own Forever-only class chain and its own trainers, so the Classic gap is partly filled by Forever pages. Sourced: a level 1-4 intro chain in Deathknell (Aramis Hammerhand is the first paladin trainer), a second trainer in Brill (Shari Stilwell), a third in Bandarion Keep (Hilda the Breaker), and the Redemption chain (A Lesson in Divinity 1-7, level 12, Bandarion Keep and the Undercity). NOT found: any per-level trainer spell list with ranks and costs for levels 1-10 (only 16 spell-to-level pairs from one guide), what each named trainer teaches, and any Undercity paladin trainer. Rank numbers and copper costs are absent everywhere.

## 1. Trainer spells, levels 1-10

Only one page gave levels; no page gave ranks or costs. Source for the table: https://www.method.gg/wow-forever/wow-forever-paladin-leveling-guide-and-talents ("Key Spells & Leveling Milestones").

| Level | Spell | Tag | Note |
|---|---|---|---|
| 1 | Seal of Righteousness | confirmed (one source) | Damage seal, scales with Spell Power. Classic learned it at 1 too (inferred match). Rank: not found |
| 2 | Holy Light | confirmed, but see conflict | Method says level 2. The wiki says the spell is granted when you ACCEPT the quest Rediscovering the Light (level 2), not bought. Whether it also appears on the trainer is not found |
| 4 | Judgement | confirmed | Classic learned Judgement at 4 (inferred match) |
| 4 | Blessing of Might | confirmed | One-hour flat Attack Power buff |
| 6 | Holy Strike | confirmed (also wow.gg snippet: level 6, 12 s cooldown) | New in Forever, instant, weapon plus Holy damage |
| 6 | Divine Protection | confirmed | 6 s full damage immunity, longer at higher ranks |
| 8 | Hammer of Justice | confirmed | Stun |
| 8 | Purify | confirmed | Removes disease and poison |
| 10 | Seal of Fury | confirmed | New tanking seal: absorb shield, and Judgement with it taunts. Kami-labs adds "forces the target to attack you for 4 seconds" and Holy damage |
| 10 | Blessing of Protection | confirmed | 6 s physical immunity |
| 12 | Redemption | confirmed | Level 12 here, but see section 3: it comes from the quest chain, which the Wiki lists as a quest reward |

Other items: Blessing of Wisdom 14, Retribution Aura 16, Righteous Fury 16, Consecration 20, Blessing of Kings 20 (outside range, same Method source). Flash of Light is named in a wow.gg snippet but no level was found (unverified). Devotion Aura and Sanctity/Concentration auras: not found.

Rank and cost data: not found. Trainer cost values for any spell: not found.

Differences from Classic (all from the Method page unless stated):
- Judgement is off the global cooldown, and no longer consumes the seal. confirmed. Kami-labs agrees on the seal: https://kami-labs.fr/en/wow-forever/paladin-wow-forever-sorts-et-talents-modifies/
- Blessings last one hour (Method; Kami-labs says Wisdom gives 40 mana per 5 s for an hour, versus 33 for 5 min in Vanilla). confirmed.
- Consecration and Blessing of Kings are baseline trainer spells at 20, not talents (Method; Mobalytics snippet agrees). Consecration appears bugged in beta per Kami-labs. Outside 1-10.
- New in Forever: Holy Strike (6), Seal of Fury (10), Divine Protection at 6 (in Classic it was learned at 6 too, so that part is inferred unchanged but Method's wording "full damage immunity for 6 seconds" is unconfirmed against Classic).
- Seal of Command / Seal of Wisdom: Mobalytics snippet recommends Seal of Command or Righteousness; levels not found.

Not found: Seal of the Crusader, Devotion Aura, Sense Undead, Lay on Hands level, Blessing of Freedom/Sacrifice/Salvation levels.

## 2. Where an Undead Paladin trains

| Trainer | Place | Tag | Source |
|---|---|---|---|
| Aramis Hammerhand (level 5, Forsaken paladin trainer, gives the intro quests) | Chapel in Deathknell, Tirisfal Glades, about 31.1, 66.4 | confirmed | https://warcraft.wiki.gg/wiki/Aramis_Hammerhand |
| Shari Stilwell (level 16, Forsaken paladin trainer) | Brill, Tirisfal Glades, 60.2, 52.6 | confirmed | https://warcraft.wiki.gg/wiki/Shari_Stilwell |
| Hilda the Breaker (level 55, Forsaken paladin trainer; page says she teaches Blessing of Might and Blessing of Wisdom) | Bandarion Keep, 22.0, 47.2 | confirmed (existence); unverified (that her list is only those two) | https://warcraft.wiki.gg/wiki/Hilda_the_Breaker |
| What spells each trainer teaches, in what order | not stated on any page | not found | n/a |
| Undercity paladin trainer | Two allthings.how pages name "Cyssa Dawnrose" (Royal Quarter) and "Garen Largo" (War Quarter) and contradict each other; one also says Forsaken cannot be paladins, which Forever pages contradict | unverified (treat as unreliable) | https://allthings.how/?p=213197 ; https://allthings.how/?p=213199 |

Implication for a row: the trainer is Aramis for levels 1-4 and plausibly Shari for the Brill stretch, since the quest "Continue Your Training" (level 4) sends you to Shari. That Shari is where the level 6-10 spells are bought is inferred from that quest text, not stated.

## 3. Class quests by level 12

Chain order, per the wiki pages cited. All "Forever-only; added in 1.60.1 (Beta)".

| Quest | Level | Giver to end | Rewards | Tag | Source |
|---|---|---|---|---|---|
| A Difficult Path | 1 | Shadow Priest Sarvis (30.8, 66.2) to Aramis Hammerhand (31.1, 66.4). Read the Consecrated Scroll (provided); reading is optional | 40 XP, +50 Undercity rep | confirmed | https://warcraft.wiki.gg/wiki/A_Difficult_Path_(Forever) |
| Rediscovering the Light | 2 | Aramis. Heal 5 Injured Deathguard with Holy Light | 90 XP, +50 rep; Holy Light learned on accept; debuff: pain when using healing light | confirmed | https://warcraft.wiki.gg/wiki/Rediscovering_the_Light |
| Coming to Terms | 4 | Aramis. Find the Frightened Paladin at about 27.7, 63.8; she turns hostile and you kill her | 180 XP, +50 rep | confirmed | https://warcraft.wiki.gg/wiki/Coming_to_Terms_(quest) |
| Continue Your Training | 4 | Aramis to Shari Stilwell in Brill (60.2, 52.7): follow the road east | 90 XP, +50 rep | confirmed | https://warcraft.wiki.gg/wiki/Continue_Your_Training |
| A Light in the Darkness (Forever) | 4 (req 2) | Aramis to Aramis. Free 6 Webbed Victims in Night's Web Hollow | 360 XP, +100 rep | confirmed it exists; unverified whether paladin-only (page shows Horde only, previous quest The Damned, a general Forsaken quest) | https://warcraft.wiki.gg/wiki/A_Light_in_the_Darkness_(Forever) |
| A Second Home | 11 (req 8) | Shari to Breton Samuels (21.8, 45.2), Bandarion Keep, northwest of Solliden Farmstead. Wiki suggests holding it until near 12 | 220 XP, 1 silver | confirmed | https://warcraft.wiki.gg/wiki/A_Second_Home |
| Murlocs at the Gates | 11 (min level 7 per one guide) | Breton Samuels; kill 8 Vile Fin Attackers and 8 Vile Fin Seers | not found | unverified (single third-party guide) | https://warcraft.wiki.gg/wiki/A_Second_Home (next quest link); guide snippet from allthings.how |
| Touring the Grounds | 11 (req 8) | Breton Samuels to Danitha Morr; dialogue with keep NPCs, Hilda the Breaker is one | 440 XP, +50 rep | confirmed (third-party guide) | https://allthings.how/?p=209406 |
| A Token of Good Faith | ? | listed as the quest before A Lesson in Divinity | not found | unverified (name only) | https://warcraft.wiki.gg/wiki/A_Lesson_in_Divinity |
| A Lesson in Divinity (1-7) | 12 (req 12) | Part 1: Danitha Morr (22.0, 44.6) to Tanis Alderwood in the Undercity Trade Quarter (66.0, 38.6). Part 3: Tanis gives, Danitha ends, reward Symbol of Life. Part 5 uses the Symbol of Life to resurrect Deathguard Falgan (search snippet). Part 7: Deathguard Billmuth to Danitha Morr | 230 XP and +100 rep on part 7; part 7 rewards the Redemption spell | confirmed for parts 1, 3, 7; unverified for 2, 4, 5, 6 | https://warcraft.wiki.gg/wiki/A_Lesson_in_Divinity ; https://warcraft.wiki.gg/wiki/A_Lesson_in_Divinity_(3) ; https://warcraft.wiki.gg/wiki/A_Lesson_in_Divinity_(7) |

Notes:
- Redemption is NOT bought from a trainer here: the quest chain rewards it (part 7). The Classic Horde quest "Summons from Knight-Lord Bloodvalor" (Noellene) is Blood Elf only and does not apply (Wowpedia listing, https://wowpedia.fandom.com/wiki/Summons_from_Knight-Lord_Bloodvalor). Whether a rank 1 Redemption is also trainable: not found.
- Keep name conflict: pages use Bandarion Keep, Tyr's Watch and "Bessarian Keep" for the same place; the wiki says Forever quests use Tyr's Watch and Bandarion Keep interchangeably (https://warcraft.wiki.gg/wiki/Bandarion_Keep). Same coordinates (about 22, 45-48).
- Level 12 quests are beyond the 1-10 range, but the player will need to know Redemption is a quest at 12 not a trainer purchase, and that the chain goes to the Undercity.
- Other "Seeking Refuge" (level 7) is listed on Shari's page, no class tag found.
- Class hub: warcrafttavern says Paladins get "a unique class hub in Tirisfal Glades and a special class mount" (https://www.warcrafttavern.com/forever/guides/undead/). The hub is presumably Bandarion Keep; the page does not name it.

## 4. Forever-specific and Undead-specific paladin facts

| Fact | Tag | Source |
|---|---|---|
| Holy spells damage Undead. Rediscovering the Light's debuff causes pain when you cast healing light. Blizzard (Josh Greenfield, per Icy Veins) said the level 2 quest's Holy Light damage was intended and a prior bug; the fix arrives in the "next beta build" (article date not shown; search snippet only, page 403) | confirmed (snippet) | https://www.icy-veins.com/wow-forever/news/the-light-burns-forsaken-paladins-intro-quest-will-be-updated/ |
| Does the pain debuff persist beyond the intro quest, and for how long | not found | n/a |
| Does Undead Holy damage apply to all Holy Light and Flash of Light casts on yourself or allies | not found; the wiki says "healing light on yourself or others" during the debuff | |
| Paladin is new for Undead and the first Horde paladin in any vanilla version. Racials "not especially useful" for paladin | confirmed | https://www.warcrafttavern.com/forever/guides/undead/ |
| Starting stats as Undead Paladin: Str 24, Agi 19, Int 18, Sta 23, Spi 21 | confirmed (single source; not cross-checked) | same |
| Spell names/visuals for Undead (for example Forsaken-flavored seals) | not found | |
| Lore restriction on Undead using Light | not found on Warcraft Tavern; the Forever quests present it as a story theme (reluctant, painful), not a block | |
| Horde Paladin gear: The Stitcher (Horde only) mentioned | confirmed, outside range | Method |
| Starting zone Tirisfal Glades, Deathknell, leveling to about 10-12 there | confirmed | warcrafttavern Undead page |
| Zeppelin connections (Orgrimmar, Grom'Gol) | confirmed | same |
| Paladin class mount | confirmed that it exists; level and quest: not found | same |

## 5. Undead racials in Forever

Sources: https://seemeta.com/en/wow-forever/races/undead (numbers) ; https://www.warcrafttavern.com/forever/guides/undead/ (new, removed).

| Racial | Effect | Tag |
|---|---|---|
| Touch of the Grave (new) | Spells and attacks have a 5% chance to drain health from the target, capped at 5% of your max health | confirmed (Seemeta; Icy Veins search snippet agrees, "no internal cooldown") |
| Will of the Forsaken | Removes Charm, Fear and Sleep. Seemeta: instant, no cooldown shown. Icy Veins snippet: no temporary immunity, 2 min cooldown. Warcraft Tavern says it was nerfed | confirmed effect; cooldown unverified (conflict) |
| Cannibalize | 7% of total Health and 7% of total Mana every 2 s for 10 s (35% each). Humanoid or Undead corpses within 5 yards. Movement, action or damage cancels. No cooldown shown | confirmed |
| Underwater Breathing | Breath lasts 300% longer | confirmed |
| Shadow Resistance | Removed (all resistance racials removed) | confirmed (Warcraft Tavern) |
| Dark Sacrifice | Priest-only new racial (not for paladins) | confirmed |

Warcraft Tavern lists Touch of the Grave spell ids inconsistently (1260201 versus 1260189); ignore.

## Sources that failed or are weak

- Mobalytics, Icy Veins and Wowhead Forever pages: 403 or empty to plain fetch. Mobalytics and wow.gg content is from search snippets only.
- allthings.how pages: auto-generated "Gaming Guide" pages; they contradict each other and the wiki on Undercity paladin trainers. Used only for Touring the Grounds quest data, tagged accordingly.
- warcraft.wiki.gg Forever pages: flagged "possibly out of date", beta data.
