# Races, their classes, and the zones of levels 1-20

Agents: one `agy` run on Gemini Flash (2026-10-12, raw answer in
`raw/agy-races-classes-start-zones-20261012.md`), then the nine race pages
re-read by a Claude agent (`raw/pages-20261012/wfg-race-<race>.html`). Rows in
`source/characters.json` were written from the pages, not from the answer.

## Classes per race (confirmed, Forever pages)

Each line is the "Playable classes for ..." sentence on
https://warcraftforever.games/races/<race> (`nightelf` for Night Elf).

| Race | Faction | Classes | New in Forever |
|---|---|---|---|
| Human | Alliance | Warrior, Paladin, Hunter, Rogue, Priest, Mage, Warlock | Hunter |
| Dwarf | Alliance | Warrior, Paladin, Hunter, Rogue, Priest, Shaman | Shaman |
| Night Elf | Alliance | Warrior, Hunter, Rogue, Priest, Druid | none |
| Gnome | Alliance | Warrior, Rogue, Priest, Mage, Warlock | Priest |
| Orc | Horde | Warrior, Hunter, Rogue, Shaman, Mage, Warlock | Mage |
| Undead | Horde | Warrior, Paladin, Rogue, Priest, Mage, Warlock | Paladin |
| Tauren | Horde | Warrior, Hunter, Shaman, Druid | none |
| Troll | Horde | Warrior, Hunter, Rogue, Priest, Shaman, Mage, Warlock | Warlock |
| Skyborne | either | Warrior, Hunter, Rogue, Druid, Mage, Shaman | new race |

Skyborne: the race page gives one list. Blizzard's news post
(https://news.blizzard.com/en-us/article/24303862, saved as
`blizzard-news-24303862`) says Horde Skyborne get Shaman and Alliance
Skyborne get Mage, and both get Warrior, Hunter, Rogue and Druid. The data
therefore has two entries, one per faction. Playing one needs a paid pack.

## Zones for levels 1-20 (not confirmed for Forever)

No Forever page states a default route or a level range for an old zone.
The paths in `source/characters.json` are the usual Classic ones; the Horde
ones are the owner's (2026-10-12).

| Race | Path |
|---|---|
| Orc, Troll | Durotar, The Barrens |
| Tauren | Mulgore, The Barrens |
| Undead | Tirisfal Glades, Silverpine Forest, Hillsbrad Foothills |
| Human | Elwynn Forest, Stormwind City, Westfall, Redridge Mountains |
| Dwarf, Gnome | Dun Morogh, Loch Modan |
| Night Elf | Teldrassil, Darkshore |
| Skyborne | Zephras Isle (confirmed start); what follows was not found |

Not found: whether Trolls start on the new Darkspear Islands map; where
Riverglades sits in a route; any level range for these zones.
