import { SheetProps } from "../components/sheet";
import { s001TutorialSummary } from "./s001-tutorial-summary";
import { healthyState } from "./s002-healthy-state";

export const d00501Ame: SheetProps = {
  metaTitle: "Myth Breakers: Ame/Watoto",
  metaDescription: "Myth Breakers fan page for Ame/Watoto for the Hololive EN, Hunter Myth: Myth Breakers TTRPG campaign.",

  id: "d00501ame",
  source: "https://youtu.be/CLvdLn_S4uA?list=PLB8Nt5W7hnKA-nna_2FcXRSeg0un0dogU&t=378",
  sourceDescription: "Ame's character sheet at the start of her first tutorial session",

  ...s001TutorialSummary,

  name: "Watoto",
  player: "Amelia",
  virtue: "Faith",
  vice: "Greed",
  concept: "Investigative/Goblin-like",
  profession: "Herb Dealer (Mushroom)",

  intelligence: 1,
  wits: 3,
  resolve: 1,
  strength: 2,
  dexterity: 2,
  stamina: 3,
  presence: 1,
  manipulation: 4,
  composure: 3,

  computer: { dots: 1 },
  crafts: { dots: 2, proficiency: "Alchemy" },
  investigation: { dots: 2 },
  medicine: { dots: 2 },
  occult: { dots: 2 },
  politics: { dots: 2 },

  brawl: { dots: 2 },
  larceny: { dots: 2, proficiency: "Pickpocket" },
  survival: { dots: 3, proficiency: "Lucky" },

  intimidation: { dots: 2 },
  streetwise: { dots: 1 },
  subterfuge: { dots: 1 },

  merits: [
    { meritName: "Investigative Prodigy", dots: 2 },
    { meritName: "Fast Reflexes", dots: 3 },
    { meritName: "Hardy", dots: 3 },
    { meritName: "Ground and Pound", dots: 3 },
    { meritName: "Holistic Awareness", dots: 1 },
  ],

  flaws: [
    { flawName: "Deranged", dots: 3 },
    { flawName: "Dyslexic", dots: 2 },
  ],

  size: 5,

  health: 3 + 5, // stamina + size
  healthState: healthyState,
  willpower: 1 + 3, // resolve + composure
  willpowerState: 4, // equal to starting willpower
  morality: 7,

  history: "Watoto came from Watoto from mother Watoto and father Watoto, who hate the government and raised Watoto to take over the family owned herb business.",
  description: "A conspiracy obsessed goblin-like human, who is an herb dealer to make money and wants to take down the local \"system\". Specializes in potion/poison crafting, pick-pocketing, and street brawls.\nA short squat man with a greenish hue to his skin. He sports a macro monocle on one eye to inspect coins and herbs. He wears a trench coat and backpack to carry many wares, concoctions, and knick knacks.",

  age: "unknown",
  hair: "blond bun covered with hat",
  eyes: "yellow",
  sex: "male",
  height: "4'6\" (137 cm)",
  race: "human",
  nationality: "Watoto",
}
