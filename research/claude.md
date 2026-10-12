# WoW Forever - Orc Warlock 1-20 research (claude)

Researched 2026-10-12. Tags: [confirmed] = source specifically about Forever; [inferred] = Classic assumed; [unverified] = no source found.
Caveat: nearly all Forever data is from the BETA client (build 1.60.1.70338) and fan/guide sites; numbers may change before launch (Nov 4). Several guide sites are SEO/boost sites and conflict with each other; where they conflict it is noted.

## Step 1 - What is WoW Forever
- Official Blizzard product: "World of Warcraft: Forever" (nickname "Classic+", internal name "Camelot"), announced at BlizzCon 2026, a third permanent version alongside Modern and Classic. Set after Warcraft III Reforged: Forsaken Kingdom, before Molten Core. Level cap 60. New race: Skyborne (start zone Zephras Isle). Included with a WoW subscription/game time. [confirmed]
  - https://worldofwarcraft.blizzard.com/news/24302093/
  - https://warcraft.wiki.gg/wiki/Patch_1.60 (launch Nov 4 2026, beta Sep 17 - Oct 22, name reservation Oct 27 - Nov 3, raids unlock Dec 9; "over 1,000 new quests")
- Release state as of 2026-10-12: BETA (build 1.60.1); beta access only for buyers of Skyborne Epic Pack / Warcraft Forever Collection. Launch Nov 4, 3:00 pm Pacific (Blizzard text says PST in one place, PDT in another; Nov 4 is PST in reality, so treat the zone label as unreliable). [confirmed] https://worldofwarcraft.blizzard.com/news/24302093/
- Blizzard "Deep Dive" posts exist (Oct 7 rogue/warlock deep dive, quoted on forum): https://barrens.chat/viewtopic.php?t=13430&p=43348
- Coverage sites: Wowhead has a /forever/ database (https://www.wowhead.com/forever/spell=11712/bane-of-agony); Icy Veins (https://www.icy-veins.com/wow-forever/warlock-class-overview, returned 403 to my fetch); Warcraft Tavern (https://www.warcrafttavern.com/forever/guides/warlock/); warcraft.wiki.gg (https://warcraft.wiki.gg/wiki/Patch_1.60); Barrens Chat; fan DBs: https://theforeverera.com , https://warcraftforever.games , https://wowforever.wclbox.com , https://foreverwisp.com , https://wow-professions.com/forever.

## Step 2 - Claims verification

1. Curse of Agony renamed Bane of Agony: TRUE [confirmed]. Blizzard deep dive: "Curse of Agony and Curse of Doom are now Banes." https://barrens.chat/viewtopic.php?t=13430&p=43348
   - Banes use a separate slot from curses: TRUE [confirmed]. "Only one Bane can be active per Warlock on a single target"; a Bane and a Curse can share a target. https://endgametools.com/en/wow-forever/news/wow-forever-warlock ; tooltip "only one Bane per Warlock can be active on any one target" https://theforeverera.com/en/spells/warlock/bane-of-agony/
   - Bane of Agony does direct damage on cast: FALSE / not supported. Spell is instant cast, all damage periodic ("causing 72 Shadow damage over 24 sec" at rank 1). Wowhead lists only a periodic aura (34 per 2 s listed on spell 11712, likely a different rank). https://theforeverera.com/en/spells/warlock/bane-of-agony/ , https://www.wowhead.com/forever/spell=11712/bane-of-agony [confirmed]
   - Extra: it is learned at level 8 (rank 1, 25 mana, 72 dmg/24s), rank 2 at level 18 (50 mana, 120 dmg). Classic equivalents were 84 and 180. So Forever Bane is weaker per rank at low level. [confirmed] theforeverera link above.

2. DoT ticks can crit via "Pandemic": TRUE-ish [confirmed], with a wrinkle. Pandemic (Affliction, row 3, 10 points, 3 ranks) increases the crit damage BONUS of Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, Wrack; endgametools says 100% larger at max; another site says 33% per rank. Wowhead shows Bane's periodic aura "can critically hit", implying DoT crit is inherent, and Pandemic only boosts the bonus. https://endgametools.com/en/wow-forever/news/wow-forever-warlock , https://warcraftforever.games/classes/warlock , https://www.wowhead.com/forever/spell=11712/bane-of-agony . Magnitude conflicting between sources.

3. Life Tap scales with Spirit: TRUE [confirmed] ("now scales with Spirit, and the amount of Mana from Spirit is correctly stated in its tooltip"). https://barrens.chat/viewtopic.php?t=13430&p=43348 . Note: Life Tap Rank 1 is learned at level 16 per trainer table (a Warcraft Tavern line says "level 6"; conflict, trainer-table source preferred). https://warcraftforever.games/classes/warlock
   - "Soul Harvesting" mana regen on Drain Soul kills: TRUE but renamed "Soul Harvest" (formerly Improved Drain Soul). 2 ranks: killing a non-trivial target afflicted by your Drain Soul gives +50% / +100% mana regen for 10 s (also lets 50%/100% regen continue while casting; warcraftforever.games lists 50% only). [confirmed] https://endgametools.com/en/wow-forever/news/wow-forever-warlock ; https://barrens.chat/viewtopic.php?t=13430&p=43348

4. Pets inherit master stat scaling: TRUE [confirmed] ("Pets now scale from their summoner's stats"; no numbers). https://barrens.chat/viewtopic.php?t=13430&p=43348
   - Drain Soul can give a shard before the mob dies: TRUE [confirmed]. "now has a progressive chance per tick to grant a Soul Shard" (chance rises after each failure until guaranteed); Warcraft Tavern also says shards come from ticks, not only the kill. https://barrens.chat/viewtopic.php?t=13430&p=43348 ; https://www.warcrafttavern.com/forever/guides/warlock/

5. Orc Blood Fury: +10% spell power 15 s, no healing debuff: MOSTLY HELD [confirmed for text, one source]. seemeta: "Increases Attack Power and Spell Power by 10% for 15 sec." Warcraft Tavern: now grants Spell Power and no longer reduces healing received (no numbers). https://seemeta.com/en/wow-forever/races/orc ; https://www.warcrafttavern.com/forever/guides/orc-racials/ . Caveat: it is +10% of AP and SP (as the seemeta wording reads), single numeric source.
   - Shatter Curse: 8 s curse/bane immunity plus reduced magic damage: TRUE [confirmed]. "Instantly removes and grants immunity to all Curses and Banes, and reduces all Magical damage taken by 15% for 8 sec." On-use with a cooldown (cooldown value not found). https://seemeta.com/en/wow-forever/races/orc ; https://www.warcrafttavern.com/forever/guides/warlock/ (curse/bane removal, 8 s immunity, 15% magic reduction)
   - Other Orc racials: Hardiness (-20% stun duration), Axe Specialization (+1% crit with axes). https://www.warcrafttavern.com/forever/guides/orc-racials/ [confirmed]

6. Camping system: Largely held, with differences. Source: https://www.wow-professions.com/forever/camping-guide (beta data) [confirmed, beta]
   - Tiers (learn at / use at Cooking skill / item slots): Basic 1/1/3 (1 Simple Wood); Journeyman 90/140/5 (needs Blueprint from Lord Serpentis, Wailing Caverns); Expert 200/220/10 (Blueprint drop location unknown). User's Cooking 1 / 140 / 220 thresholds match the "use at" column. HELD. (Other sites say 90/200 for the Journeyman/Expert; those are the "learn at" numbers - the sources are consistent once learn vs use is separated.)
   - Sit ~1 minute next to the fire, countdown buff, then Camp Benefits for one hour. HELD.
   - "1 fixture per player per hour": page says each player can place one camp item and placing one puts all your camp items on a one-hour cooldown. HELD. Other sites claim a 5-minute campfire cooldown (unresolved, low weight).
   - Fixtures: Mana Well (skill 20, mana regen, doesn't stack with Blessing of Wisdom); Cookie's Feast (140, Stamina food; blueprint from Cookie, Deadmines); Fishing Rack (140, uncommon fish + lures; Gelihast, Blackfathom Deeps); Fishing Hut (300, rare fish); Greenhouse (140, grows herbs from seeds; blueprint Shadetooth, Excavation Site Wetlands); Seed Hybridizer (300); Field Guide (140, teaches Track Beasts; Lady Anacondra, Wailing Caverns); Trapper's Workbench (300). HELD.
   - Skill-20 trio: Incense Candle (Herbalism 20, Intellect buff, does not stack with Arcane Intellect, size 25 vs 2-25 disputed), Camp Chair (Skinning 20, +2% crit, doesn't stack with Moonkin Aura), Fish Bowl (Fishing 20, +8% all stats, doesn't stack with Blessing of Kings). Source (search summary, 3 sites agree): https://classicwow.gg/forever/guides/camping , https://www.wow-professions.com/forever/camping-guide , https://foreverchanges.pro/professions/camping . HELD, though the spell-vs-melee wording of the crit and the exact Intellect amount are not verified. "Mana Well (Alchemy 20)": the guide says Mana Well comes from the trainer or the Camping 101 quest at skill 20 and needs Peacebloom + Empty Vial; the profession gating (Alchemy) was not explicitly stated - [unverified].
   - Camping 101 quests (Brakk's "The Great Outdoors" first, then Camping 101 for Cooking via Cook Torka, Herbalism via Jandi in Orgrimmar, Mining via Krunn; skill target 20). [confirmed] https://www.foreverwisp.com/guides/wow-forever-orc-troll-leveling-guide

## Step 3 - Level 1-20 data

### Warlock spells by level (Forever beta trainer table, all ranks cost TOTAL, not per rank) [confirmed]
Source: https://warcraftforever.games/classes/warlock (read from trainers Gimrizz Shadowcog / Maximillion; values are from the beta client). Per-rank trainer cost and exact "Rank 1" levels at 1-6 were NOT in the table (levels 1-6 spells such as Shadow Bolt R1, Immolate, Corruption base spells: not captured) [unverified].
| Spell | Ranks learned at level | Total cost (all ranks <=20) | Note |
|---|---|---|---|
| Bane of Agony | 8, 18 | 5g 19s 65c | New in Forever |
| Fear | 8 | 2g 77s 40c | |
| Create Healthstone | 10 | 4g 54s 10c | Reworked |
| Demon Skin | 10 | 2s 85c | Reworked |
| Drain Soul | 10 | 2g 97s 35c | Reworked |
| Immolate | 10, 20 | 5g 72s 85c | |
| Curse of Weakness | 12 | 3g 71s 45c | Reworked |
| Health Funnel | 12, 20 | 6g 89s 70c | Reworked |
| Shadow Bolt | 12, 20 | 6g 89s 70c | |
| Corruption | 14 | 4g 17s 5c | |
| Curse of Recklessness | 14 | 3g 69s 55c | Reworked |
| Drain Life | 14 | 4g 97s 80c | Reworked |
| Life Tap | 16 | 4g 67s 40c | Reworked, scales with Spirit |
| Unending Breath | 16 | 11s 40c | |
| Create Soulstone | 18 | 5g 65s 25c | Reworked |
| Searing Pain | 18 | 6g 3s 25c | |
| Curse of the Elements | 20 | 3g 23s | |
| Demon Armor | 20 | 5g 70s | Reworked |
| Rain of Fire | 20 | 4g 46s 50c | Reworked |
| Ritual of Summoning | 20 | 19s | needs 2 helpers |
Note: the table seems to merge ranks oddly (e.g. Immolate/Shadow Bolt rank at 20), and several totals look like Classic rank totals. Treat levels as confirmed, costs as beta-trainer-table values. Spell levels 1-9 (Shadow Bolt R1, Immolate R1, Corruption R1, Curse of Agony equivalents) and Drain Soul rank levels (10, 24, 38, 52) conflicts with Corruption at 14 in this table vs. other guides.
- Warcraft Tavern list: Healthstone 10, Soulstone 18, Ritual of Summoning 20, Firestone 28, Spellstone 36. https://www.warcrafttavern.com/forever/guides/warlock/ [confirmed]
- Worth buying vs skipping (opinion; only partly sourced): Tavern says use wands instead of Shadow Bolt while leveling; Drain Soul/Corruption/Bane of Agony are the core pull (Voidwalker + Bane + Corruption then Drain Life/Drain Soul, Life Tap between pulls). https://wowforeverbuilds.com/guide/beta-20-affliction-warlock-leveling (level 20 beta theorycraft, not verified in beta by the author) [confirmed as guide advice]. Skip-list judgments are mine, not sourced: [unverified].
- Talent path suggested (theorycraft): Improved Corruption 5/5 at 10-14, Soul Harvesting 2/2 at 15-16, Malediction 3/5 at 17-19, Pandemic 1/3 at 20. https://wowforeverbuilds.com/guide/beta-20-affliction-warlock-leveling
- Trainer locations: Valley of Trials / Razor Hill / Orgrimmar / Crossroads warlock trainers: NOT found for Forever [unverified]. The two trainer names in the table are Alliance (Kharanos, Deathknell is Forsaken). From Classic (memory, no URL): Horde warlock trainers at Valley of Trials (Ruzan), Razor Hill (Ophek), Orgrimmar Cleft of Shadow (Gan'rul Bloodeye, Zevrost...), Crossroads (Gazrog?) [inferred, unreliable]. Foreverwisp confirms Ruzan (Valley of Trials) and Ophek (Razor Hill) as warlock quest NPCs.

### Demon quests [partly confirmed]
- Imp: "Vile Familiars" (level 2) from Zureetha Fargaze with warlock branch through Ruzan in the Valley of Trials; bring 6 Vile Familiar Heads to Ruzan, learn Summon Imp, return to Zureetha. https://www.foreverwisp.com/guides/wow-forever-orc-troll-leveling-guide [confirmed]
- Voidwalker (level 10): Gan'rul's Summons (Ophek in Razor Hill, then Gan'rul Bloodeye in the Cleft of Shadow, Orgrimmar) -> Creature of the Void (Tablet of Verga from the Burning Blade Stash in Skull Rock) -> The Binding (Glyphs of Summoning at the Cleft of Shadow circle) -> turn in to Gan'rul. Same URL. [confirmed]
- Succubus (level 20): Forever renames the succubus "Sayaad" in some text (Warcraft Tavern: "Sayaad: Seduction, melee DPS"; wiki: Imp 3, Voidwalker 10, Sayaad 19). Foreverwisp mentions a level-20 chain but I could not read it. Quest steps and NPCs: [unverified]. https://www.warcrafttavern.com/forever/guides/warlock/ ; https://warcraft.wiki.gg/wiki/Minion
- Grimoire (Torment/Suffering etc.) purchases with cost and vendor: NOT found for Forever [unverified]. (Classic Succubus/Voidwalker grimoires exist; no Forever source.)
- Demons now scale with summoner stats (see Step 2). Demonology/pet details: Warcraft Tavern link above.

### Quest route (Orc) [confirmed, foreverwisp guide; only chapters 1-10 readable]
Source: https://www.foreverwisp.com/guides/wow-forever-orc-troll-leveling-guide (chapter overview; beta content, some rewards unverified)
1. Valley of Trials 1-3: Your Place In The World (Kaltunk -> Gornek), Cutting Teeth, Sarkoth, Class intros (Orc = Simple Parchment), Lazy Peons, Vile Familiars (warlock), Thazz'ril's Pick, Burning Blade Medallion.
2. Burning Blade cave 3-5: Thazz'ril's Pick, Burning Blade Medallion (Yarrog Baneshadow), then Report to Sen'jin Village, A Peon's Burden (Ukor).
3. Sen'jin Village and Echo Isles 5-7: Practical Prey, Legging It, Forgotten Loa Idols, A Solvent Spirit, Minshina's Skull, Zalazane (optional), then Razor Hill (Orgnil Soulscar), Dark Storms, Vanquish the Betrayers, Camping 101 (Brakk's The Great Outdoors; Cook Torka for cooking), This Fruit Could Bite Back, Encroachment, Break a Few Eggs, Carry Your Weight.
4. Razor Hill and western ravines 7-11: Lost But Not Forgotten, Dark Storms (Fizzle Darkstorm, Thunder Ridge), Margoz, Skull Rock.
5. Northern Durotar and Orgrimmar 9-12: Winds in the Desert, Securing the Lines in Drygulch Ravine, Skull Rock, Neeru Fireblade (Cleft of Shadow), Ak'Zeloth (Far Watch Post), The Admiral's Orders, Conscript of the Horde, Crossroads Conscription; Warlock Voidwalker chain at level 10.
6. Crossroads and eastern camps 10-14: Plainstrider Menace, Disrupt the Attacks, Supplies for the Crossroads, Raptor Thieves, The Forgotten Pools, Fungal Spores, Wharfmaster Dizzywig, The Zhevra, Prowlers of the Barrens.
7. Forgotten Pools 12-15 (Harpy Raiders, Kolkar Leaders, Centaur Bracers, Echeyakee, Barak Kodobane). 8. Ratchet and pirate coast 13-16 (Southsea Freebooters, Parts and Pieces, The Missing Shipment, Stolen Booty). 9. Northern works and harpies 14-16 (Samophlange chain, Ignition, The Escape, Harpy Lieutenants, Serena Bloodfeather). 10. Oases and raptor nests 16-18 (Angry Scytheclaws, Raptor Horns, Stolen Silver, Jorn Skyseer). 11. Stonetalon Camp Aparaje 16-18, 12. Sishir Canyon/Windshear Crag 17-19, 13. Taurajo hunts and Crossroads return 18-20: chapters 11-13 titles confirmed, contents NOT read.
- Barrens hubs: Crossroads (FP 51.5,30.3), Ratchet (FP 63.1,37.2), Camp Taurajo (FP 44.5,59.2), Far Watch Post (62.3,19.4); brackets 10-14, 14-18, 18-22; Wailing Caverns 18-22. https://games.gg/world-of-warcraft/guides/wow-forever-barrens-leveling-guide/ [confirmed, differs from foreverwisp which leaves the Barrens ~at 20; games.gg continues to 25]
- Forever notes: no level scaling, 1,000+ new quests, crafted food gives a small XP bonus (games.gg). Task wants a 20 cap, so skip Stonetalon chapters 11-12 unless desired.

### Herbalism / skinning / fishing / cooking / wand
- Herb nodes by zone/level, skinning targets, profession trainer locations: Forever-specific NOT found [unverified]. Classic-era guidance (inferred): Barrens herb spots Lushwater Oasis, Stagnant Oasis, Forgotten Pools, Dry Hills; Durotar boars near Orgrimmar for skinning; Apprentice Herbalism from any capital. https://www.warcrafttavern.com/wow-classic/guides/herbalism-1-300/ , https://noobtoboss.com/wow-classic-skinning-leveling-guide/ [inferred]
- Camping 101 quests give a skill-20 bump path in Cooking/Herbalism (also Mining): Cook Torka (cooking), Jandi (Orgrimmar, herbalism), Krunn (mining), prerequisite The Great Outdoors from Brakk. [confirmed] foreverwisp URL above. Skinning/Fishing camping-101 equivalents: not found.
- Cooking quests: This Fruit Could Bite Back (level 3) and Break a Few Eggs (level 6) from Cook Torka, Sen'jin. [confirmed] foreverwisp.
- Fishing trainer, early recipes, fishing spots: [unverified].
- Earliest wand (vendor/quest/crafted): [unverified]; no Forever source found. Warlocks are advised to wand instead of Shadow Bolt (Warcraft Tavern).
- Forever vs Classic notable differences found: Bane of Agony (renamed, weaker low ranks), Curse of Shadows removed, Curse of the Elements covers all magic damage, Life Tap scaling Spirit, Drain Soul shards progressive, Soul Harvest, Pandemic, pets scale from summoner, Succubus -> Sayaad naming, Imp quest at level 2 via Vile Familiars (Classic is level 1-ish), camping system and Camping 101 quests.

## Best sources
1. https://barrens.chat/viewtopic.php?t=13430&p=43348 (Blizzard warlock deep dive quoted)
2. https://theforeverera.com/en/spells/warlock/bane-of-agony/ (beta DB with Classic comparison)
3. https://warcraftforever.games/classes/warlock (trainer table)
4. https://www.wow-professions.com/forever/camping-guide
5. https://www.foreverwisp.com/guides/wow-forever-orc-troll-leveling-guide (quest order; ~280k chars, only the first ~200k read)
6. https://games.gg/world-of-warcraft/guides/wow-forever-barrens-leveling-guide/
7. https://www.warcrafttavern.com/forever/guides/warlock/ and /orc-racials/
8. https://www.wowhead.com/forever/ (spell DB; try per-spell pages for exact tooltips)

## Known gaps / next steps
Icy Veins 403'd. Not read: foreverwisp offset >200000 (Succubus/Sayaad chain, chapters 10-13, possible profession notes); Wowhead Forever item/NPC pages for wands, herbs, trainers. Spell levels below 8 and per-rank trainer costs need the Wowhead Forever spell list.
