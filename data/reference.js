// Reference panels: each becomes a tab on the right edge that slides out when
// clicked. To add one, append an object here.
//
//   id        unique, used to remember which panel is open
//   tab       short label on the edge tab
//   class     optional: show only for a character of this class
//   race      optional: show only for a character of this race
//   sections  [{ title, text, ordered: [...], items: [[label, detail], ...] }]
//             every field of a section is optional
//
// Checked against research/ (beta build 1.60.1, 2026-10-12); numbers may change
// before launch.
window.PANELS = (window.PANELS || []).concat([
  {
    id: "camping",
    tab: "Camping",
    sections: [
      {
        title: "Rules",
        text: "Sit 1 min for a 1-hour buff. You place one fixture per hour, so other buffs need other players."
      },
      {
        title: "Campfire",
        items: [
          ["Basic", "3 slots. Cooking 1. 1 Simple Wood."],
          ["Journeyman", "5 slots. Learn at Cooking 90, use at 140. Blueprint: Lord Serpentis, Wailing Caverns."],
          ["Expert", "10 slots. Learn at Cooking 200, use at 220. Blueprint source unknown."]
        ]
      },
      {
        title: "Skill 20",
        items: [
          ["Fish Bowl", "Fishing. +8% all stats (as Kings)."],
          ["Camp Chair", "Skinning. +2% crit (as Moonkin aura)."],
          ["Incense Candle", "Herbalism. Intellect (as Arcane Intellect)."],
          ["Mana Well", "Alchemy. MP5 (as Wisdom). Someone else's."]
        ]
      },
      {
        title: "Skill 140",
        items: [
          ["Cookie's Feast", "Cooking. Stamina food. Blueprint: Cookie, Deadmines."],
          ["Fishing Rack", "Fishing. Lures and uncommon fish. Blueprint: Gelihast, Blackfathom Deeps."],
          ["Field Guide", "Skinning. Track Beasts. Blueprint: Lady Anacondra, Wailing Caverns."],
          ["Greenhouse", "Herbalism. Grows herbs from seeds. Blueprint: Shadetooth, Wetlands."]
        ]
      },
      {
        title: "Skill 300",
        items: [
          ["Fishing Hut", "Fishing. Rare fish."],
          ["Trapper's Workbench", "Skinning. 10s root trap."],
          ["Seed Hybridizer", "Herbalism."]
        ]
      }
    ]
  },
  {
    id: "warlock",
    tab: "Warlock",
    class: "warlock",
    sections: [
      {
        title: "Stat priority",
        ordered: [
          "Shadow Damage / Spell Power",
          "Stamina (Voidwalker health, Life Tap)",
          "Spirit (Life Tap scaling, post-kill regen)",
          "Intellect",
          "Spell Crit"
        ]
      },
      {
        title: "Forever mechanics",
        items: [
          ["Bane of Agony", "Renamed Curse of Agony. Own slot: one Bane plus one Curse per target. Instant cast, all damage over 24s (no hit on cast). R1 72 dmg at 8, R2 120 at 18."],
          ["Pandemic", "Affliction talent, 3 ranks: bigger crit bonus on Corruption, Banes and drains. Size disputed between sources."],
          ["Life Tap", "Scales with Spirit. Rank 1 at 6, Rank 2 at 16."],
          ["Soul Harvest", "Talent, 2 ranks: +50/100% mana regen for 10s after a Drain Soul kill."],
          ["Drain Soul", "Rising chance per tick to grant a Soul Shard before the mob dies."],
          ["Pets", "Scale from your stats."],
          ["Curses", "Curse of Shadows removed; Curse of the Elements covers all magic damage."]
        ]
      }
    ]
  },
  {
    id: "orc",
    tab: "Orc",
    race: "orc",
    sections: [
      {
        title: "Racials",
        items: [
          ["Blood Fury", "+10% Attack and Spell Power for 15s. Healing debuff reported removed."],
          ["Shatter Curse", "Removes Curses/Banes, 8s immunity, -15% magic damage taken."],
          ["Hardiness", "-20% stun duration."],
          ["Axe Specialization", "+1% crit with axes."]
        ]
      }
    ]
  }
]);
