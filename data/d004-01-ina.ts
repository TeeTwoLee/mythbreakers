import { SheetProps } from "../components/sheet";
import { healthyState } from "./s002-healthy-state";

export const d00401Ina: SheetProps = {
  metaTitle: "Myth Breakers: Ina/Yuul",
  metaDescription: "Myth Breakers fan page for Ina/Yuul for the Hololive EN, Hunter Myth: Myth Breakers TTRPG campaign.",

  id: "d00401ina",
  source: "https://youtu.be/bXwW-g6P3zI?t=776",
  sourceDescription: "Ina's character sheet at the start of the first tutorial session",

  name: "Yuul B. Alwright",
  player: "Ninomae Ina'nis",
  virtue: "Temperance",
  vice: "Sloth",
  concept: "Tired grad student/inventor",
  profession: "(Mad) scientist/student",

  intelligence: 3,
  wits: 2,
  resolve: 2,
  strength: 2,
  dexterity: 3,
  stamina: 1,
  presence: 1,
  manipulation: 2,
  composure: 4,

  academics: { dots: 3 },
  computer: { dots: 1 },
  crafts: { dots: 4, proficiency: "Crafter's Sense" },
  investigation: { dots: 1 },
  medicine: { dots: 1, proficiency: "First Aid" },
  science: { dots: 1 },

  drive: { dots: 3, proficiency: "Aggressive Driving" },
  firearms: { dots: 1 },
  survival: { dots: 1 },
  weaponry: { dots: 2 },

  animalKen: { dots: 1 },
  expression: { dots: 1 },
  persuasion: { dots: 1 },
  subterfuge: { dots: 1 },

  merits: [
    { meritName: "Resources", dots: 2 },
    { meritName: "Area of Expertise", dots: 1 }, // crafting
    { meritName: "Encyclopedic Knowledge", dots: 2 },
    { meritName: "Automotive Genius", dots: 1 },
    { meritName: "Multilingual", dots: 1 },
    { meritName: "Roadkill", dots: 3 },
  ],

  flaws: [
    { flawName: "Ignorant", dots: 1 },
    { flawName: "Insomniac", dots: 2 },
  ],

  size: 5,

  health: 1 + 5, // stamina + size
  healthState: healthyState,
  willpower: 2 + 4, // resolve + composure
  morality: 7,

  history: "A typical grad student. She thought she was going to have a relatively normal experience during her graduate studies, but her hopes were shattered when the professor in charge was a bit on the... crazier side. Starting from daily chores and errands to dangerous deliveries and adventures in foreign lands, Yuul has experienced quite a lot during her time under the professor. Some would classify Yuul as a \"mad\" scientist type, but that is just a misconception as she often has to take credit for her professor's doings. Yuul often dreams of the days where she can sleep peacefully without having to worry about what new problems await her the next day. Driving is a hobby...?\n\nThe professor is a lab hermit.",
  description: "Has noticeable eyebags. Yuul tried to build up stamina in her free time, but her lack of sleep always makes her tried. Often notes things down on her notepad before she forgets. She loves sticky notes with a passion. She often dyes her hair a lighter color, saying it covers up any white hair she gets while looking \"stylish\". Loves jackets/coats with lots of pockets to carry stuff around.",

  age: "26",
  hair: "silver with color highlights",
  eyes: "blue-ish gray",
  sex: "female",
  height: "165cm (5'5\")",
  race: "human",
  nationality: "somewhere in NA",
}
