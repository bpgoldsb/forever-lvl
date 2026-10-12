# First Aid in WoW Forever (research, 2026-10-12, build 1.60.1)

Tags: confirmed = a Forever-specific page says so; inferred = Classic assumed; unverified = sources conflict or none; not found.
Note on "confirmed": every Forever source here is a third-party guide site reading the beta client, not Blizzard or a Wowhead tooltip. Treat "confirmed" as "Forever-specific page says so".

## Bottom line

First Aid exists in Forever and is a secondary profession with no level requirement, taught in Durotar by Rawrk (Razor Hill Barracks) and in Orgrimmar by Arnok, both to skill 150. There is no trainer in the Barrens in any source. The big change is that First Aid now crafts the healing potions (Minor 55, Lesser 85, Healing 135, ...) as well as bandages, plus new cures (Woolen Tourniquet = bleed, Simple Poultice = disease, Anti-Venom = poison) and a camping item, the First Aid Kit (skill 20, a Stamina buff like Power Word: Fortitude). Bandage thresholds changed from Classic: Linen 30 (not 1), Heavy Linen 50, Wool 80, Heavy Wool 115, Silk 150. Bandage heal amounts, the Recently Bandaged length and whether damage interrupts a bandage were not found for Forever. Wowhead Forever pages do not render item or NPC data through plain fetch (Linen Cloth, Linen Bandage item, Rawrk NPC ids all came back empty or wrong); the spell page rendered but was only a Create Item stub.

## 1. Does it exist; limit; requirement; changed?

| Fact | Value | Tag | Source |
|---|---|---|---|
| First Aid exists as a profession | Yes, listed among Forever professions; "bare-bones" in Classic, expanded in Forever | confirmed | https://www.warcrafttavern.com/forever/news/first-aid-profession-preview-for-world-of-warcraft-forever/ |
| Secondary profession, own slot, combinable with any primary | Yes | confirmed | https://www.warcrafttavern.com/forever/guides/first-aid/ ; https://expcarry.com/wow-forever-first-aid-guide |
| Counts against a profession limit | No primary slot used; the primary/secondary count itself is not stated anywhere | confirmed (no slot) / not found (the limit number) | https://hostedgg.com/blog/wow-forever-professions-changes |
| Learn requirement | "Apprentice First Aid has no level requirement" | confirmed | https://www.wow-professions.com/forever/first-aid-trainers |
| Skill cap | 300 | confirmed | https://expcarry.com/wow-forever-first-aid-guide |
| Healing potions now crafted by First Aid | Yes (Minor to Major, six recipes) | confirmed | https://www.warcrafttavern.com/forever/guides/first-aid/ ; https://hostedgg.com/blog/wow-forever-professions-changes |
| Whether Alchemy still also makes healing potions | Unconfirmed ("Do not drop Alchemy over this yet") | unverified | https://hostedgg.com/blog/wow-forever-professions-changes |
| New: anti-bleed and anti-disease crafts, camp kit | Yes; the new cures cannot be used in combat | confirmed | https://www.warcrafttavern.com/forever/guides/first-aid/ |
| Bandages largely unchanged from Classic | Yes in kind; recipe thresholds differ (section 3) | confirmed | https://www.warcrafttavern.com/forever/news/first-aid-profession-preview-for-world-of-warcraft-forever/ |
| Removed or merged | Not removed; nothing says merged | not found | (none) |

## 2. Trainers on the route

| Fact | Value | Tag | Source |
|---|---|---|---|
| Durotar | Rawrk, Razor Hill Barracks. Teaches Apprentice through Journeyman (to 150) | confirmed | https://www.wow-professions.com/forever/first-aid-trainers ; https://www.wow-professions.com/forever/first-aid-leveling-guide |
| Orgrimmar | Arnok, Valley of Spirits. Apprentice through Journeyman (to 150) | confirmed | https://www.wow-professions.com/forever/first-aid-trainers |
| The Barrens (Crossroads, Ratchet, Camp Taurajo) | No First Aid trainer listed | not found (consistent with Classic; absence is not proof) | https://www.wow-professions.com/forever/first-aid-trainers |
| Rank skill numbers | Apprentice 1-75, Journeyman 75-150, Expert 150-225, Artisan 225-300 | confirmed | https://www.wow-professions.com/forever/first-aid-leveling-guide |
| Journeyman | Learn at First Aid 50; every trainer teaches it, so no second trip | confirmed | https://www.wow-professions.com/forever/first-aid-leveling-guide |
| Silk Bandage is the last trainer recipe; learn before leaving the trainer for good | Yes | confirmed | same |
| Expert (150-225) | Book "Expert First Aid - Under Wraps", needs First Aid 125 but no character level. Horde vendor: Balai Lok'Wein, Brackenwall Village, Dustwallow Marsh (outside the 1-20 route) | confirmed | https://www.wow-professions.com/forever/first-aid-trainers |
| Artisan (225-300) | "Triage" quest, needs First Aid 225 and character level 35. Horde: Doctor Gregory Victor, Hammerfall, Arathi Highlands. Marked untested (beta capped at 20) | unverified | https://www.wow-professions.com/forever/first-aid-leveling-guide |
| Beta level cap | 20 (as of 2026-09-22), so anything above is untested | confirmed per search result | https://www.wow-professions.com/forever/first-aid-leveling-guide |
| Page caveat | Trainer page says not every trainer was checked in Forever | confirmed (caveat) | https://www.wow-professions.com/forever/first-aid-trainers |

## 3. Bandage and potion recipes

Thresholds are yellow / green / grey from the seemeta recipe table (beta 1.60.1, updated 2026-10-10). All listed "Trainer" as how learned there; other guides say several (Heavy Silk, Mageweave, Strong Anti-Venom, Greater Healing and above) need a manual or book, so the "how learned" column is partly in conflict. Heal amount and duration: not found for any Forever bandage (seemeta, warcrafttavern, expcarry all omit it).

Source for the table: https://seemeta.com/en/wow-forever/professions/first-aid (tag confirmed for thresholds and materials unless stated).

| Recipe | Yellow/Green/Grey | Materials | How learned | Classic comparison |
|---|---|---|---|---|
| First Aid Kit (camp) | skill 20 | 3 Linen Bandage + 1 Refreshing Spring Water | Quest "Camping 101: First Aid" or any trainer | New |
| Linen Bandage | 30/45/60 | 1 Linen Cloth | Trainer | Classic: skill 1 (changed) |
| Heavy Linen Bandage | 50/75/100 | 2 Linen Cloth | Trainer | Classic 40 (changed) |
| Minor Healing Potion | 55/75/95 | Empty Vial, Mild Spices, Peacebloom | Trainer | Moved from Alchemy |
| Anti-Venom | 80/115/150 | Small Venom Sac (makes 3) | Trainer | Classic 80 |
| Wool Bandage | 80/115/150 | 1 Wool Cloth | Trainer (learn at 80 per leveling guide) | Same as Classic 80 |
| Lesser Healing Potion | 85/105/125 | Empty Vial, 2 Mild Spices, Briarthorn | Trainer | Moved |
| Simple Poultice (disease) | 90/125/160 | Spider Ichor, Mild Spices, Bottle of Dalaran Noir | Trainer | New |
| Heavy Wool Bandage | 115/150/185 | 2 Wool Cloth | Trainer (learn at 115) | Same as Classic 115 |
| Woolen Tourniquet (bleed) | 120/155/190 | 2 Wool Cloth, 2 Fine Thread | Trainer | New |
| Strong Anti-Venom | 130/165/200 | Large Venom Sac | Trainer per seemeta; "manual" per expcarry (https://expcarry.com/wow-forever-first-aid-guide) | tag unverified |
| Healing Potion | 135/155/175 | Leaded Vial, Hot Spices, Bruiseweed | Trainer | Moved |
| Silk Bandage | 150/180/210 | 1 Silk Cloth | Trainer (last trainer recipe) | Classic 150 |
| Heavy Silk Bandage | 180/210/240 | 2 Silk Cloth | Manual: Heavy Silk Bandage, vendor in Dustwallow (same as Expert book vendor) | Classic 180 |
| Mageweave Bandage | 210/240/270 | 1 Mageweave Cloth | Manual: Mageweave Bandage | Classic 210 |

Higher recipes (Greater/Superior/Major Healing Potion, Clever and Superior Poultice, Leather and Surgical Tourniquet, Potent and Powerful Anti-Venom, Heavy Mageweave through Dense Runecloth bandages) are in the same seemeta table; they are all beyond level 20 and omitted here. Conflict: Warcraft Tavern/hostedgg say Major Healing Potion is at skill 275; seemeta says 290. Tag unverified.

Other leveling-guide facts (https://www.wow-professions.com/forever/first-aid-leveling-guide, tag confirmed but beta-based):
- 1-40: 50 Linen Bandage (50 Linen Cloth). 40-75: 40 Heavy Linen Bandage (80 Linen Cloth), buying a few extra because it only turns yellow at 50. Note: that guide's 1-40 range conflicts with the seemeta Linen Bandage yellow at 30.
- Potion alternative to 75: 81 Minor Healing Potion from 81 Peacebloom, 81 Mild Spices, 81 Empty Vial. Spices from Xen'to (Orgrimmar), vials from Kor'geld (Orgrimmar); other vendors in Durotar.
- 75-80: 12 Heavy Linen Bandage (about every second craft skills); 80-115: 50 Wool Bandage; 115-150: 50 Heavy Wool Bandage.
- Totals to 150: roughly 130 + 24 Linen and 150 Wool Cloth.

Legacy talents (https://www.warcrafttavern.com/forever/guides/first-aid/, confirmed): Working Overtime (more skill-up chance), Dedicated Study (once a day, a free point in your lowest tradeskill), Field Medicine (shorter Recently Bandaged, open world only; expcarry says 5 seconds per rank, up to 10).

## 4. Anti-Venom and other crafts

| Fact | Value | Tag | Source |
|---|---|---|---|
| Anti-Venom kept from Classic | Skill 80, Small Venom Sac, makes 3 vials, cures poison | confirmed | https://seemeta.com/en/wow-forever/professions/first-aid ; https://www.warcrafttavern.com/forever/news/first-aid-profession-preview-for-world-of-warcraft-forever/ |
| Line | Anti-Venom 80, Strong 130, Potent 230, Powerful 300 | confirmed | https://seemeta.com/en/wow-forever/professions/first-aid |
| New cures | Woolen Tourniquet (bleed, 120), Simple Poultice (disease, 90), later Clever/Superior/Powerful Poultice, Leather/Surgical Tourniquet | confirmed | same |
| Cures usable in combat? | New anti-bleed/disease crafts cannot be used in combat | confirmed | https://www.warcrafttavern.com/forever/guides/first-aid/ |
| Healing potions usable in combat | Implied (search summary of Warcraft Tavern says "usable in combat"); not directly quoted on a fetched page | unverified | https://www.warcrafttavern.com/forever/guides/first-aid/ |

## 5. Cloth in Durotar and the Barrens

| Fact | Value | Tag | Source |
|---|---|---|---|
| Forever cloth ranges by mob level | Linen 1-19, Wool 15-30, Silk 26-40, Mageweave 41-50, Runecloth 51-60; from humanoids | confirmed | https://www.warcrafttavern.com/forever/guides/first-aid/ |
| Durotar (levels 1-10) | Linen from humanoid mobs | inferred from the ranges above | same |
| Barrens 10-20 | Linen to 19, Wool from 15, so Wool overlaps from about level 15 | inferred | same |
| Specific mobs (Classic: Razormanes at the Durotar/Barrens border drop Wool at 15+) | Not checked in Forever | unverified, Classic-only | https://warcraft.wiki.gg/wiki/Wool_Cloth |
| Wowhead Forever drop tables | Page rendered empty | not found | https://www.wowhead.com/forever/item=2589/linen-cloth |

## 6. Warlock-specific

| Fact | Value | Tag | Source |
|---|---|---|---|
| Recently Bandaged length in Forever | Not found. Classic: 60 seconds, applied even when the bandage fails | not found / inferred | https://ffxi.allakhazam.com/wiki/Bandage_(WoW) |
| Damage interrupts bandaging | Not found in Forever. Classic: direct damage fully interrupts; the bandager must stand still | not found / inferred | https://it.classic.wowhead.com/news/classic-wow-first-aid-guide-292193 |
| DoT damage on the player | Not found for Forever. Classic wiki says "direct damage"; DoT behavior not stated | unverified | none |
| Life Tap / Drain Life / Health Funnel interaction | No source. Reasoning only: Life Tap costs health, bandage restores it; do not Life Tap during the channel because self-damage would be direct damage if the Classic rule holds | unverified (reasoning) | none |
| Healing potions from First Aid, usable mid-fight | Relevant to warlock health-for-mana play, since potions have no channel | inferred | https://www.warcrafttavern.com/forever/guides/first-aid/ |

## 7. Camping and other systems

| Fact | Value | Tag | Source |
|---|---|---|---|
| First Aid Kit (camp tier 1) | Skill 20; 3 Linen Bandage + 1 Refreshing Spring Water; Stamina buff like Power Word: Fortitude, does not stack with it | confirmed | https://www.wow-professions.com/forever/camping-guide ; https://www.warcrafttavern.com/forever/guides/camping-objects-buffs/ |
| How learned | Quest "Camping 101: First Aid" (quest 96047), or from any First Aid trainer | confirmed | https://www.wowhead.com/forever/quest=96047 |
| Quest giver | Wowhead lists Thamner Pol in Kharanos (Alliance, Dun Morogh); the Horde/Orc-start giver was not found. One source says the turn-in is at your trainer; the quest page lists no turn-in NPC | unverified | https://www.wowhead.com/forever/quest=96047 |
| Buff duration | 1 hour per wow-professions; "not stated" per warcrafttavern and method | unverified (one source) | https://www.wow-professions.com/forever/camping-guide |
| Cooldown | One camp item per player, putting all your camp items on a one-hour cooldown (one source) | unverified | same |
| Needs a campfire | Yes, per quest text | confirmed | https://www.wowhead.com/forever/quest=96047 |
| Tier 2 Toxin Study | Skill 140; Anti-Venom + 2 Mageweave Bandage + 2 Simple Wood; blueprint dropped by Commander Springvale, Shadowfang Keep | confirmed (single source) | https://www.wow-professions.com/forever/camping-guide |
| Tier 3 Plague Doctor's Laboratory | Skill 300 | confirmed | same |
| Method note | Calls the quest giver a "town Campfire NPC" | confirmed | https://www.method.gg/wow-forever/camping-in-wow-forever-how-it-all-works-all-profession-buffs |

## Proposed rows (levels 1-20)

Only rows a veteran would not do by default. IDs are the dashboard's job. Category suggestion: new `firstaid` or reuse `fish_cook`.

1. In zone: Durotar, levels 1-10. INFO. Title: "First Aid is a secondary profession, no level needed, and it now makes healing potions". Location: Rawrk, Razor Hill Barracks. Note: Learn Apprentice and Journeyman here (Journeyman at skill 50 from the same trainer). First Aid does not use a primary slot. Source: https://www.wow-professions.com/forever/first-aid-trainers. Confidence: confirmed.
2. In zone: Durotar, levels 1-10. GATE. Title: "Keep Linen Cloth; do not vendor it". Location: any humanoid drops. Note: Linen Bandage needs skill 30 here, not 1 as in Classic, so the first 30 points need Minor Healing Potion (55) or you wait. Check the trainer's list before assuming. Source: https://seemeta.com/en/wow-forever/professions/first-aid. Confidence: confirmed (thresholds), inferred (cloth drop source).
3. On level: 1-5, whenever you pass Rawrk. QUEST/BUFF. Title: "Camping 101: First Aid (First Aid Kit at skill 20)". Location: First Aid trainer or the quest giver of your starting zone. Note: Kit = 3 Linen Bandage + 1 Refreshing Spring Water for a Stamina buff like Power Word: Fortitude (no stack). The Orc/Horde quest giver was not found; Wowhead lists only Thamner Pol (Dun Morogh). Source: https://www.wowhead.com/forever/quest=96047. Confidence: unverified for where to turn it in, confirmed for the Kit.
4. In zone: Orgrimmar. INFO. Title: "Arnok is the second First Aid trainer; vials and spices are here". Location: Arnok, Valley of Spirits; Xen'to (spices) and Kor'geld (vials) in Orgrimmar. Note: Minor Healing Potion needs Peacebloom, Mild Spices, Empty Vial and works with the herbalism you already have. Source: https://www.wow-professions.com/forever/first-aid-leveling-guide. Confidence: confirmed.
5. In zone: The Barrens, levels 10-20. GATE. Title: "Barrens has no First Aid trainer; learn Wool Bandage (80) and Heavy Wool (115) in Orgrimmar or Razor Hill before you go". Location: Arnok, Orgrimmar. Note: no Barrens trainer is listed anywhere. Source: https://www.wow-professions.com/forever/first-aid-trainers. Confidence: not found (absence), so mark unverified.
6. In zone: The Barrens, levels 15-20. SKIP. Title: "Keep Wool Cloth from level 15; do not vendor". Location: humanoid drops. Note: Wool drops from about 15, Linen to 19; 150 Wool gets Wool/Heavy Wool bandages from 80 to 150. Source: https://www.warcrafttavern.com/forever/guides/first-aid/. Confidence: inferred.
7. On level: 19. INFO. Title: "Warlock: do not Life Tap while bandaging". Location: anywhere. Note: Classic rule is that direct damage interrupts a bandage and Recently Bandaged is 60 s; neither is confirmed for Forever, so test it. Source: https://it.classic.wowhead.com/news/classic-wow-first-aid-guide-292193. Confidence: inferred.
8. On level: 20. INFO. Title: "Expert First Aid needs a book, not a trainer, and is outside the route". Location: Balai Lok'Wein, Brackenwall Village, Dustwallow Marsh (needs First Aid 125, no level). Note: Triage for Artisan needs character level 35; untested in beta. Source: https://www.wow-professions.com/forever/first-aid-trainers. Confidence: confirmed (book), unverified (Artisan).

## Not found / limits

- Bandage heal amounts and durations (Forever): not found. No fetchable Forever tooltip. Wowhead Forever pages gave stubs only.
- Recently Bandaged length, damage-interrupt rule, DoT behavior in Forever: not found.
- Any First Aid trainer in the Barrens: not found. The trainer page admits it is incomplete.
- Horde starting-zone giver for "Camping 101: First Aid": not found (only Thamner Pol, Dun Morogh).
- Forever-specific cloth drop mobs: not found; ranges come from one guide site.
- Conflicts: Linen Bandage yellow 30 (seemeta) against 1-40 range (leveling guide); Major Healing Potion 275 against 290; Strong Anti-Venom trainer against manual; whether Alchemy keeps healing potions.
- Everything above 20 is untested because the beta cap is 20. The pages are beta data and may change before 2026-11-04.
- Not fetched: theforeverera.com (no First Aid page found), icy-veins (403), mobalytics (403), warcraftforever.games professions page (404), method.gg page covers camping only.
