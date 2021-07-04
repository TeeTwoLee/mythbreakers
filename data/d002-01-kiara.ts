import { SheetProps } from "../components/sheet";

export const d00201Kiara: SheetProps = {
  metaTitle: "Myth Breakers: Kiara/Tiara",
  metaDescription: "Myth Breakers fan page for Kiara/Tiara for the Hololive EN, Hunter Myth: Myth Breakers TTRPG campaign.",

  id: "d00201kiara",
  source: "https://youtu.be/4hB5QuSYBKw?t=321",
  sourceDescription: "Kiara's character sheet at the start of the first tutorial session",

  name: "Tiara",
  player: "Kiara",
  virtue: "Prudence",
  vice: "Pride",
  concept: "Falconer",
  profession: "Falconer",

  intelligence: 3,
  wits: 1,
  resolve: 3,
  strength: 3,
  dexterity: 2,
  stamina: 3,
  presence: 3,
  manipulation: 1,
  composure: 2,

  academics: { dots: 1 },
  crafts: { dots: 3 },

  athletics: { dots: 2 },
  firearms: { dots: 4, proficiency: "Gunslinger" },
  survival: { dots: 2, proficiency: "Outdoorsman" },
  weaponry: { dots: 3 },

  animalKen: { dots: 4, proficiency: "Birb Communication" },
  empathy: { dots: 3 },

  merits: [
    { meritName: "Subduing Strikes", dots: 1 },
    { meritName: "Loaded for Bear", dots: 1 },
    { meritName: "Human Prey", dots: 2 },
    { meritName: "Multilingual", dots: 1 },
    { meritName: "Iron Stamina", dots: 1 },
    { meritName: "Quick Draw", dots: 1 },
    { meritName: "Danger Sense", dots: 2 },
    { meritName: "Direction Sense", dots: 1 },
    // missing 1 merit point
  ],

  flaws: [
    { flawName: "New Arrival", dots: 1 },
    { flawName: "Curiosity", dots: 2 },
    { flawName: "Speech Impediment", dots: 1 },
  ],

  size: 5,

  health: 3 + 5, // stamina + size
  willpower: 3 + 2, // resolve + composure
  morality: 7,

  // history: "",
  // description: "",

  // age: "",
  // eyes: "",
  // sex: "",
  // height: "",
  // weight: "",
}
