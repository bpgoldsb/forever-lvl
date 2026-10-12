# Human Hunter, levels 1-10, in WoW Forever (research, 2026-10-12, build 1.60.1)

Agents: Claude only so far. The required `agy` (Gemini Flash) pass is NOT done: two runs on 2026-10-12 returned nothing because headless `agy` denied its page-fetch tool. Treat this report as incomplete until that pass is merged in.

Tags: confirmed = a Forever-specific page says so; inferred = Classic assumed; unverified = sources conflict, single odd source, or ambiguous; not found.
Note: every Forever source here is a third-party guide or database site reading the beta, not a Blizzard client. "Confirmed" means "a Forever-specific page says so". Human Hunter is a NEW combination in Forever (Blizzard lists it among the new race/class pairings), so no Classic data exists to fall back on for trainers or class quests.

## Bottom line

The spell list for levels 1-10 can be sourced well enough for rows (names and levels; ranks, costs and trainer name cannot). The pet chain is new in Forever and is partly sourced from Wowhead Forever quest pages (names, ids, beasts, the final trainer Isaac Chan in Goldshire), but the chain's start NPC, any NPC coordinates and the level requirement are missing. Where a Human Hunter trains at levels 1-10 (Northshire Abbey, Goldshire, Stormwind) was NOT found in any Forever source: two guides say so outright. Do not put a trainer name in a row.

Cautions: Wowhead Forever pages rendered for quests but not for spell lists (the ability list page returned only filters). Icy Veins and Mobalytics returned 403 to plain fetch, so their content is known only from search snippets. One list (Kami Labs) gives a single level per spell that looks like the HIGHEST rank's level for multi-rank spells (Serpent Sting 60, Arcane Shot 60, Raptor Strike 56), so use it only for single-rank spells.

## 1. Trainer spells, levels 1-10

| Level | Spell | Tag | Source and note |
|---|---|---|---|
| 1 | Raptor Strike (Rank 1) | confirmed | https://www.method.gg/wow-forever/wow-forever-hunter-leveling-guide-and-talents ; https://wowforeverguides.com/leveling/hunter |
| 1 | Auto Shot | confirmed | https://kami-labs.fr/en/grimoire-wow-forever/ ; https://wowforeverguides.com/leveling/hunter |
| 1 | Track Beasts | confirmed | same two sources |
| 1 | Aspect of the Viper, Heart of the Lion (both labelled New) | unverified | https://kami-labs.fr/en/grimoire-wow-forever/ only. One source, labelled New, level 1; no other page mentions either. Do not make a row without a second source |
| 4 | Serpent Sting (Rank 1) | confirmed | Method (above) ; wowforeverguides (above) |
| 4 | Aspect of the Monkey (labelled Changed) | confirmed (level) / not found (what changed) | https://kami-labs.fr/en/grimoire-wow-forever/ ; wowforeverguides |
| 6 | Arcane Shot (Rank 1) | confirmed | Method ; wowforeverguides |
| 6 | Hunter's Mark (Rank 1) | confirmed | Method ; wowforeverguides. Improved Hunter's Mark is now baseline (see 4) |
| 8 | Concussive Shot | confirmed | Method ; Kami Labs ; wowforeverguides (50% slow for 4 s, 12 s cooldown, "reported") |
| 8 | Raptor Strike (Rank 2) | unverified | https://wowforeverguides.com/leveling/hunter only |
| 10 | Aspect of the Hawk (Rank 1) | confirmed | Method ; wowforeverguides. Kami Labs lists it at 60 (max rank) |
| 10 | Serpent Sting (Rank 2) | unverified | wowforeverguides only |
| 10 | Track Humanoids | confirmed | Kami Labs ; wowforeverguides |
| 10 | Call Pet, Tame Beast, Feed Pet, Dismiss Pet, Revive Pet | unverified | Kami Labs lists all five as level 10 spells. Quest guides say they are taught by the pet quest chain instead (Tame Beast, Call Pet, Dismiss Pet after the third tame; Beast Training, Feed Pet, Revive Pet after Training the Beast): https://www.zockify.com/forever/hunter/pets/ . Wowhead's chain shows spells named "Taming Lesson" and "Training Lesson" (section 3). Treat as quest-taught |

Not found:
- Trainer cost for any hunter spell in Forever.
- Any spell at levels 2, 3, 5, 7, 9 (no source lists one; sources group visits at 1, 4, 6, 8, 10).
- Rank numbers other than those above, and Rank 1 tooltips (damage, mana).
- Whether Aspect of the Viper or Heart of the Lion is really a level 1 trainer spell.

Differences from Classic: inferred, not sourced. Method's levels (Serpent Sting 4, Arcane Shot and Hunter's Mark 6, Concussive Shot 8, Aspect of the Hawk 10) match the Classic hunter schedule as generally known, and no Forever page flags them as changed. Only Aspect of the Monkey (Changed), and the two New aspects above, are flagged in 1-10. No page says what was changed.

## 2. Where a Human Hunter trains, levels 1-10

| Fact | Tag | Source |
|---|---|---|
| Northshire hunter trainer name/location | not found | https://wowforeverguides.com/leveling/starting-zones names no hunter or other class trainer for Northshire (only herbalism and mining trainers) |
| Goldshire hunter trainer name/location | not found | https://games.gg/world-of-warcraft/guides/wow-forever-elwynn-forest/ gives coordinates for warrior, paladin, rogue, priest, mage, warlock trainers in Goldshire, none for hunter |
| Stormwind hunter trainer name/location | not found | No Forever source. Two guides name Stormwind NPCs, but for pets only (section 3) |
| Statement that no data exists | confirmed | games.gg: "The WoW Forever human hunter is new, has no classic quest data in this zone"; it tells the reader to check Goldshire trainers in game. wowforeverguides: Human Hunter is a new pairing and "Blizzard hasn't said where it starts" |
| Class trainers for levels 1-6 exist at Northshire Abbey | confirmed (class set not stated) | games.gg, above. Not stated to include hunter |
| Human Hunter starts in Northshire Valley | unverified | wowforeverguides treats Northshire as a Classic reference, not a confirmed Forever layout |
| Warcraft Wiki hunter-trainer tables list Northshire Abbey, Goldshire (Benjamin Foxworthy) and Stormwind NPCs | unverified | https://warcraft.wiki.gg/wiki/Hunter_trainers . Seen only in a search snippet, a mixed-version page, not Forever. Do not use |

Practical note: "hunter trainer" is the only role that has a pet-quest link: a hunter trainer is said to start the chain (below) but is never named.

## 3. Level 10 pet chain, pet trainer, stable master, ammo, weapon

Chain (all Wowhead Forever quest pages, plus https://mmonster.co/wow-forever/guides/hunter-pets/taming which labels the Elwynn chain "new in Forever"):

| Step | Quest | Tag | Source |
|---|---|---|---|
| 1 | Taming the Beast (id 94792): tame a Rockhide Boar with the supplied Taming Rod, return the rod to Josephine Carson | confirmed | https://www.wowhead.com/forever/quest=94792 |
| 2 | Taming the Beast (id 94863): tame a Gray Forest Wolf, return rod to Josephine Carson | confirmed | https://www.wowhead.com/forever/quest=94863 |
| 3 | Taming the Beast (id 94864): tame a Young Forest Bear, return rod to Josephine Carson. Page lists spell "Taming Lesson" | confirmed | https://www.wowhead.com/forever/quest=94864 |
| 4 | Training the Beast (id 94793): speak to Isaac Chan in Goldshire. Page lists spell "Training Lesson"; says it lets you teach pets new abilities, feed and revive | confirmed | https://www.wowhead.com/forever/quest=94793 |

Other facts:

| Fact | Tag | Source |
|---|---|---|
| Josephine Carson is the chain's quest giver; beasts and Isaac Chan as above | confirmed (rod-return NPC) / unverified (giver) | https://wowforeverguides.com/leveling/hunter and zockify name her the starter; Wowhead pages name her only as the rod return and say they do not name the giver. mmonster instead says "your hunter trainer starts the taming quests from level 10". Sources conflict on who starts it |
| Where Josephine Carson stands, where each beast is, quest level, XP | not found | Wowhead pages say only "the forest" / Elwynn |
| Isaac Chan is a Goldshire NPC, "lifelong woodsman" | confirmed | Wowhead quest 94793. Coordinates not found |
| Pet trainer in Elwynn: Isaac Chan; stable master in Elwynn (Alliance): Erma | confirmed (single source) | https://mmonster.co/wow-forever/guides/hunter-pets/taming . Locations not found |
| Stormwind: pet trainer Karrina Mekenda; stable master Jenova Stoneshield | confirmed (single source) | https://www.zockify.com/forever/hunter/pets/ . Locations not found; both are named in Classic too |
| Tame Beast no longer works on beasts above the hunter's level (Blizzard beta notes, 2026-09-24) | confirmed | https://wowforeverguides.com/leveling/hunter ; mmonster |
| Taming fails while any pet is out, even dismissed; stable it first | confirmed (single source) | mmonster |
| Abandoning a pet deletes it; stable pets you want to keep | confirmed (single source) | zockify |
| Guns and bows still consume ammo; a fix to "a handful of guns and bows not correctly consuming or using ammunition" shipped 2026-09-24 | confirmed (quoted from notes, second hand) | https://wowforeverguides.com/leveling/hunter |
| Ammo is per weapon type: a gun does not use leftover arrows | confirmed | https://www.mmojugg.com/news/wow-forever-hunter-guide.html |
| Starting weapon (ranged or melee), starting ammo, ammo vendor, quiver/pouch | not found | No source names any |
| First pet abilities available right after taming: Growl, Great Stamina, Natural Armor (all from level 10) | confirmed | Method (section 1 URL). Kami's list excludes pet skills |

Classic name check: the first-pet quests in other races use "Taming the Beast" too; for Humans the chain has no Classic equivalent, so nothing here is inferred from Classic.

## 4. Forever-specific hunter changes relevant to 1-10

| Fact | Tag | Source |
|---|---|---|
| Hunters are weak before 10 and kite until the pet; a pet is "easily the most important thing" | confirmed | Method (section 1 URL) |
| Talent points start at level 10 (milestones at 11, 21, 31 points plus new 16); first point goes to Endurance Training per one guide | confirmed (10) / unverified (first pick) | https://worldofwarcraft.blizzard.com/news/24301515 ; wowforeverguides |
| Improved Hunter's Mark and Improved Eyes of the Beast are now baseline (Hunter's Mark itself is learned at 6) | confirmed | https://worldofwarcraft.blizzard.com/news/24301515 |
| Pets gain stats from the hunter's gear; pets cannot receive player stat buffs | confirmed | same, and zockify |
| New Fox family (Trickster's Dance); every family can learn Bite or Claw and Dive or Dash | confirmed | same |
| Arcane Shot no longer shares cooldown with Aimed Shot; Multi-Shot now shares it (Aimed Shot is baseline at 20, so not relevant before 20) | confirmed | same |
| Tame Beast cannot target beasts above your level | confirmed | see section 3 |
| What changed in Aspect of the Monkey | not found | Kami Labs tags it Changed only |
| Removed hunter abilities at 1-10 | not found | None reported in any source read |

## 5. Human racials in Forever (for a reference panel)

| Racial | Effect | Tag | Source |
|---|---|---|---|
| Perception | Active; detects stealthed enemies for 20 s; manual, works on NPCs. Cooldown not found | confirmed (effect) / not found (cooldown) | https://www.warcrafttavern.com/forever/guides/human-racials/ ; wowforeverguides (20 s) |
| Will to Survive (new) | Active; removes stuns from any source | confirmed | https://www.warcrafttavern.com/forever/guides/human-racials/ . A search-result summary said 3 minute cooldown, but warcrafttavern says cooldown is unstated: unverified |
| Sword Specialization (changed) | Passive; +2% crit while wielding a sword, replacing +5 weapon skill | confirmed | warcrafttavern ; https://www.method.gg/wow-forever/all-new-racial-abilities-in-world-of-warcraft-forever |
| Whether the Sword Specialization crit applies to ranged shots | unverified | warcrafttavern says it covers melee, ranged and spell crit; https://www.mmojugg.com/news/wow-forever-hunter-guide.html says a melee-weapon racial does not automatically improve ranged shots. It does need a sword equipped either way |
| The Human Spirit | Passive; +5% Spirit | confirmed | warcrafttavern |
| Mace Specialization | Removed | confirmed | warcrafttavern ; Method |
| Diplomacy | Moved to a Legacy Talent open to all Alliance and Horde races | confirmed | warcrafttavern |

Caveat: warcrafttavern notes the racials are from the BlizzCon 2026 build and may change.

## Sources not usable

Icy Veins and Mobalytics pages (403 to fetch). Warcraft Wiki trainer tables (not Forever). BoostRoom pages (commercial). A search result suggested the Wowhead Forever spell list; it rendered no spell rows.
