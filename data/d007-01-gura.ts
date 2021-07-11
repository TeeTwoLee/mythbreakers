import { SheetProps } from "../components/sheet";
import { s001TutorialSummary } from "./s001-tutorial-summary";
import { healthyState } from "./s002-healthy-state";

export const d00701Gura: SheetProps = {
  metaTitle: "Myth Breakers: Gura/Scout",
  metaDescription: "Myth Breakers fan page for Gura/Scout for the Hololive EN, Hunter Myth: Myth Breakers TTRPG campaign.",

  id: "d00701gura",
  source: "https://youtu.be/_MiGxbsKyO8?list=PLB8Nt5W7hnKA-nna_2FcXRSeg0un0dogU&t=981",
  sourceDescription: "Gura's character sheet at the start of her first tutorial session",

  ...s001TutorialSummary,

  name: "Scout from Belt-buckle",
  player: "Gura",
  virtue: "Fortitude",
  vice: "Wrath",
  concept: "Southern Farm Girl Forger",
  profession: "Farm-hand",

  intelligence: 1,
  wits: 2,
  resolve: 4,
  strength: 3,
  dexterity: 2,
  stamina: 3,
  presence: 3,
  manipulation: 1,
  composure: 2,

  crafts: { dots: 4, proficiency: "Weapon Creation" },
  medicine: { dots: 3 },

  brawl: { dots: 1 },
  drive: { dots: 2 },
  survival: { dots: 4, proficiency: "Forging" },
  weaponry: { dots: 4, proficiency: "Aggressive Light Weapon" },

  expression: { dots: 2 },
  intimidation: { dots: 1 },
  streetwise: { dots: 1 },

  merits: [
    { meritName: "Ambidextrous", dots: 1 },
    { meritName: "Hardy", dots: 1 },
    { meritName: "Iron Stamina", dots: 2 },
    { meritName: "Renowned Artisan", dots: 2 }
  ],

  flaws: [
    { flawName: "Illiterate", dots: 1 },
    { flawName: "Hard of Hearing", dots: 1 }
  ],

  size: 5,

  health: 3 + 5, // stamina + size
  healthState: healthyState,
  willpower: 4 + 2, // resolve + composure
  willpowerState: 6, // equal to starting willpower
  morality: 7,

  history: "- Grew up on a family farm in tiny BeltBuckle. Lives with Pa, Ma & sister.\n- Learned how to forge horseshoes at a young age, now forging blades.\n- Never taught to read. Can only read basic text.\n- She likes doing donuts with Pa's old ford. Was gifted a Harley for 18th bday.\n- Obsessed with watching old samurai & western films.\n- Growing up in BeltBuckle has taught her ample rural survival skills.\n- Lacks empathy & can be selfish due to having to make things work by herself.\n\nlikes kicking doors (down?)",
  description: "- A visibly strong girl with toned arms and abs.\n- Long layered, unkept, wavy hair to the waist.\n- Nose dotted with freckles. Sunkissed shoulders and a slight farmertan.\n- Studied (and forged) the blade.\n - Bandana used as a tourniquet, strangler, air filtration and eye cover. looks cool",

  age: "18",
  eyes: "green",
  sex: "female",
  height: "168 cm (5'6\")",
  weight: "145 lb (65.8 kg)",

  additionalDescription: "Not much happens in Belt Buckle. The town has 25 people in it. At a very young age, her pa taught her how to forge horseshoes and she felt that knives were the next step, so she knows how to forge things. Forging has caused her hearing to get worse since she rarely wore ear protection. She likes doing donuts and driving recklessly with pa's old Ford. Pa would rather she be useful and put a tractor to use, but Scout doesn't think they go fast enough. Scout was never taught to read past basic labels such as toxic, do not ingest, and her social skills are very lacking. Scout has ample rural survival skills, but little to no knowledge of modern cityfolk skills aside from what she learned from outdated VHS and DVD tapes. Farm life for Scout has been rather lonely. Aside from her family's company and those around her in Belt Buckle, she's been alone for the majority of her life. She lacks empathy and can be selfish due to always having to make things work for herself.\n\n\nMuscular, Headstrong, Vulgar (Swears), Opportunist, Daredevil, Illiterate, Hard-of-hearing\nStrong-willed.\nUS southern country accent\nScout likes knives, blades, swords, etc. She also likes forging and farm activities.\nObsessed with watching old films, western to samurai. Works with her hands, not her head. Not dumb, necessarily but...\nScout wears forge goggles on her head.\nNot mean-spirited, but just doesn't think of other people. More of a lone wolf. Maybe hesitation towards people she doesn't know. Cautious of outsiders.\nLikes kicking down doors because it's fun and she can.\nShe likes to wear a homemade eyepatch. She doesn't need an eyepatch, her eyes work fine. The eyepatch can also be used as gauze/tourniquet.\nScout wouldn't wear a bra. Slim on top, bottom-heavy/pear-shaped.\nLong hair\nFoot Size: 7 (non-canon from Gura's member-only stream https://youtu.be/cFqKmnjBJ2k)",
}
