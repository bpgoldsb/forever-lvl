// Zone notes, levels 1-20: Durotar -> The Barrens. One entry per zone or hub,
// with the level range you are there for. Holds only what is specific to this
// character and depends on WHERE you are: profession quests and trainers,
// gathering, fishing, camping. The quest path itself is left to an in-game guide
// addon. What depends on your level is in levels-*.js.
//
// Beta build 1.60.1 data (2026-10-12); see research/. Trainer costs are Classic
// values where marked.
//
// Task fields:
//   id          unique across ALL data files, never reuse (progress is stored by id)
//   category    spell | grimoire | quest | herb | skin | fish_cook | wand | camp
//   priority    BUY | SKIP | GATE | QUEST | BUFF | INFO
//   title, cost, location, note
//   showCost    true to display the cost; routine costs stay hidden
//   source      URL the fact came from (optional)
//   confidence  confirmed  - a Forever-specific source says so
//               inferred   - Classic data, assumed unchanged
//               unverified - sources conflict or none found
window.ROUTE_DATA = (window.ROUTE_DATA || []).concat([
  {
    levels: "5-6",
    zone: "Sen'jin Village / Echo Isles",
    tasks: [
      { id: "t_5_02", category: "fish_cook", priority: "QUEST", title: "This Fruit Could Bite Back, Break a Few Eggs", location: "Cook Torka, Razor Hill", note: "Cooking quests, levels 3 and 6. Cook Torka is also the cooking trainer.", source: "https://www.foreverwisp.com/guides/wow-forever-orc-troll-leveling-guide", confidence: "confirmed" },
      { id: "t_5_03", category: "herb", priority: "INFO", title: "Herbalism trainer: Mishiki", location: "Sen'jin Village", note: "Earthroot (skill 15, from Classic) on rocky hillsides.", source: "https://www.wow-professions.com/forever/herbalism-trainers", confidence: "confirmed" },
      { id: "t_5_04", category: "fish_cook", priority: "GATE", title: "Learn Fishing", location: "Lau'Tiki, Durotar", note: "No level requirement. From Classic: Sen'jin Village; coast gives Slitherskin Mackerel and Brilliant Smallfish.", source: "https://www.wow-professions.com/forever/fishing-trainers", confidence: "confirmed" }
    ]
  },
  {
    levels: "7-8",
    zone: "Razor Hill",
    tasks: [
      { id: "t_7_02", category: "skin", priority: "INFO", title: "Boars, scorpids, raptors, crocolisks", location: "Durotar", note: "Skinning targets from Classic.", confidence: "inferred" },
      { id: "t_7_03", category: "camp", priority: "QUEST", title: "The Great Outdoors, then Camping 101", location: "Brakk; Cook Torka (Cooking); Jandi, Orgrimmar (Herbalism)", note: "Brakk's quest comes first. Camping 101 aims at skill 20 in the profession.", source: "https://www.foreverwisp.com/guides/wow-forever-orc-troll-leveling-guide", confidence: "confirmed" },
      { id: "t_7_04", category: "camp", priority: "BUFF", title: "Basic Campfire (3 slots)", location: "Cooking 1", note: "Costs 1 Simple Wood. Sit 1 minute for the 1-hour buff; placing a fixture puts yours on a 1-hour cooldown.", source: "https://www.wow-professions.com/forever/camping-guide", confidence: "confirmed" },
      { id: "t_7_05", category: "camp", priority: "BUFF", title: "Fish Bowl, Camp Chair, Incense Candle", location: "Fishing 20 / Skinning 20 / Herbalism 20", note: "+8% all stats, +2% crit, Intellect. You can place only one per hour, so the others need other players.", source: "https://www.wow-professions.com/forever/camping-guide", confidence: "confirmed" }
    ]
  },
  {
    levels: "11-12",
    zone: "The Crossroads",
    tasks: [
      { id: "t_11_06", category: "skin", priority: "INFO", title: "Plainstriders, Savanna Prowlers, Zhevras", location: "Around the Crossroads", note: "Light Leather. Targets from Classic; they overlap the kill quests.", confidence: "inferred" },
      { id: "t_11_07", category: "herb", priority: "INFO", title: "Mageroyal (50), Briarthorn (70)", location: "Barrens plains; trees and raptor nests", note: "Skill levels from Classic.", confidence: "inferred" }
    ]
  },
  {
    levels: "13-14",
    zone: "Forgotten Pools / Ratchet",
    tasks: [
      { id: "t_13_07", category: "fish_cook", priority: "INFO", title: "Oasis and Ratchet fishing", location: "Forgotten Pools, Stagnant Oasis, Lushwater Oasis; Ratchet docks", note: "From Classic: Longjaw Mud Snapper, Bristle Whisker Catfish and Deviate Fish in the oases. Forever lists no fishing trainer in the Barrens; Journeyman (level 10, skill 50) is Lumak in Orgrimmar. Cooking trainer Duhng is east of the Crossroads.", confidence: "inferred" }
    ]
  },
  {
    levels: "15-16",
    zone: "Northern Barrens / Sludge Fen",
    tasks: [
      { id: "t_15_07", category: "herb", priority: "INFO", title: "Bruiseweed (100)", location: "Quilboar camps and mountainsides", note: "Skill level from Classic.", confidence: "inferred" }
    ]
  },
  {
    levels: "17-18",
    zone: "Oases / Camp Taurajo",
    tasks: [
      { id: "t_17_07", category: "camp", priority: "INFO", title: "Wailing Caverns blueprints", location: "Wailing Caverns (18-22)", note: "Journeyman Campfire from Lord Serpentis (learn at Cooking 90, use at 140). Field Guide from Lady Anacondra (Skinning 140).", source: "https://www.wow-professions.com/forever/camping-guide", confidence: "confirmed" },
      { id: "t_17_08", category: "skin", priority: "INFO", title: "Sunscale Raptors, Thunderhawks, Barrens Kodos", location: "Central and southern Barrens", note: "Light to Medium Leather. Targets from Classic. Skinning trainer Dranh is at Camp Taurajo.", confidence: "inferred" }
    ]
  }
]);
