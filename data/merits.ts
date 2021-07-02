
export type meritName = keyof typeof meritData;

// Data from http://wodcodex.com/wiki/Merits,_Universal_(2nd_Edition)
// Iron Skin appears twice
export const meritData = {
  "Area of Expertise": {
    rating: "•",
    prerequisites: "Resolve ••",
    description: "Raise one Specialty's die bonus to +2.",
    book: "CofD 44"
  },
  "Common Sense": {
    rating: "•••",
    prerequisites: "",
    description: "Once per chapter, roll Wits + Composure as an instant action to ask the Storyteller a question about risks and choices.",
    book: "CofD 44"
  },
  "Danger Sense": {
    rating: "••",
    prerequisites: "",
    description: "+2 bonus to detect an ambush.",
    book: "CofD 44"
  },
  "Direction Sense": {
    rating: "•",
    prerequisites: "",
    description: "Keep perfect track of your relative location and direction, and ignore penalties to navigate or find your way.",
    book: "CofD 44"
  },
  "Eidetic Memory": {
    rating: "••",
    prerequisites: "",
    description: "Ignore rolls for recall or memory. +2 bonus to recall minute facts buried in other information.",
    book: "CofD 44"
  },
  "Encyclopedic Knowledge": {
    rating: "••",
    prerequisites: "",
    description: "Roll Intelligence + Wits to recall useful trivia relating to a particular field or pursuit.",
    book: "CofD 44"
  },
  "Eye for the Strange": {
    rating: "••",
    prerequisites: "Resolve ••, Occult •",
    description: "Roll Intelligence + Composure to identify evidence of supernatural involvement.",
    book: "CofD 44"
  },
  "Fast Reflexes": {
    rating: "• to •••",
    prerequisites: "Wits or Dexterity •••",
    description: "Add Fast Reflexes dots to Initiative.",
    book: "CofD 44"
  },
  "Good Time Management": {
    rating: "•",
    prerequisites: "Academics or Science ••",
    description: "Make extended action rolls in half the necessary time.",
    book: "CofD 44"
  },
  "Holistic Awareness": {
    rating: "•",
    prerequisites: "",
    description: "Roll Wits + Survival to substitute woodland scavengings for equipment when treating patients with Medicine, unless the patient suffers non-bashing wound penalties.",
    book: "CofD 44"
  },
  "Human Prey": {
    rating: "••",
    prerequisites: "",
    description: "Your nerves react instinctively to danger. When violence erupts, you may suffer Insane to boost Strength, suffer Beaten Down but gain 8-Again to flee, or suffer Stunned but recover Willpower.",
    book: "DTR 97"
  },
  "Hypervigilance": {
    rating: "•",
    prerequisites: "",
    description: "You're overly cautious of hidden dangers. Take 8-Again to perceive traps or ambushes, but on exceptional success, suffer Spooked.",
    book: "DTR 97"
  },
  "Indomitable": {
    rating: "••",
    prerequisites: "Resolve •••",
    description: "+2 to a contesting dice pool or resistance trait applied against supernatural mental influence.",
    book: "CofD 45"
  },
  "Interdisciplinary Specialty": {
    rating: "•",
    prerequisites: "Any Skill •••",
    description: "Choose a Specialty in the corresponding Skill. Apply the Specialty's bonus die to relevant rolls of any Skill, except unskilled rolls.",
    book: "CofD 45"
  },
  "Investigative Aide": {
    rating: "•",
    prerequisites: "Any Skill •••",
    description: "When you roll the selected Skill to uncover clues, achieve exceptional success with only three successes. Add a bonus element to any clues uncovered with this Skill.",
    book: "CofD 45"
  },
  "Investigative Prodigy": {
    rating: "• to •••••",
    prerequisites: "Wits •••, Investigation •••",
    description: "When you roll to uncover clues, you uncover a clue per success, capped by your dots in Investigative Prodigy. Clues from extra successes never have more than one element each.",
    book: "CofD 45"
  },
  "Language": {
    rating: "•",
    prerequisites: "",
    description: "You can speak, read and write in a chosen language.",
    book: "CofD 45"
  },
  "Library": {
    rating: "• to •••",
    prerequisites: "",
    description: "You have a cache of information relating to a particular Skill. Add your dots in Library to relevant extended rolls.",
    book: "CofD 46"
  },
  "Advanced Library": {
    rating: "• to •••••",
    prerequisites: "Library •••, ≤ Safe Place",
    description: "Your library is vast enough to contain useful, direct information about supernatural topics. Choose a topic per Advanced Library dot. Every story, once per topic, you can take the Informed Condition when you consult your library about that topic.",
    book: "MTA 2e 105"
  },
  "Lucid Dreamer": {
    rating: "••",
    prerequisites: "Resolve •••",
    description: "You may roll Resolve + Composure while asleep to dream lucidly, and may wake up at will.",
    book: "CTL 2e 123"
  },
  "Meditative Mind": {
    rating: "•, ••, or ••••",
    prerequisites: "",
    description: "Ignore environmental and wound penalties on meditation rolls. With two dots, meditation grants +3 to Resolve + Composure rolls for the remainder of the day. With four dots, meditation rolls only need to accumulate one success.",
    book: "CofD 46"
  },
  "Multilingual": {
    rating: "•",
    prerequisites: "",
    description: "You can speak conversationally in two chosen languages. Roll Intelligence + Academics for reading comprehension.",
    book: "CofD 46"
  },
  "Object Fetishism": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You obsess over a given possession relating to a chosen Specialty. Recover Willpower each session from your obsession, and spending Willpower to roll that Specialty exaggerates both failure and success.",
    book: "HL 42"
  },
  "Patient": {
    rating: "•",
    prerequisites: "",
    description: "Add +2 to your maximum number of allowed rolls on extended actions.",
    book: "CofD 46"
  },
  "Renowned Artisan": {
    rating: "•••",
    prerequisites: "Crafts ••• with specialty",
    description: "You've been taught the ways of an ancient Iremite guild. Once per chapter, you may reroll a relevant Crafts action.",
    book: "MTC 2e 113"
  },
  "Scarred": {
    rating: "•",
    prerequisites: "Integrity ≤ 5",
    description: "Suffer a Persistent Condition which prevents you from recovering Integrity, but inures you from a particular breaking point.",
    book: "HL 43"
  },
  "Tolerance for Biology": {
    rating: "•",
    prerequisites: "Resolve •••",
    description: "Ignore Resistance rolls from witnessing biological grotesquerie.",
    book: "CofD 46"
  },
  "Trained Observer": {
    rating: "• or •••",
    prerequisites: "Wits or Composure •••",
    description: "Take 9-Again, or 8-Again with three dots, on Perception rolls.",
    book: "CofD 46"
  },
  "Vice-Ridden": {
    rating: "••",
    prerequisites: "Vice",
    description: "Take a second Vice.",
    book: "CofD 46"
  },
  "Virtuous": {
    rating: "••",
    prerequisites: "Virtue",
    description: "Take a second Virtue.",
    book: "CofD 46"
  },

  "Ambidextrous": {
    rating: "•••",
    prerequisites: "",
    description: "Ignore offhand penalties. Character creation only.",
    book: "CofD 47"
  },
  "Automotive Genius": {
    rating: "•",
    prerequisites: "Crafts •••, Drive •, Science •",
    description: "Raise maximum modifications to a vehicle to thrice Crafts rating, plus number of relevant Crafts Specialties.",
    book: "CofD 47"
  },
  "Covert Operative": {
    rating: "•",
    prerequisites: "Wits •••, Dexterity •••, Stealth ••",
    description: "When launching an ambush, deny 10-Again to notice it, and take +3 Initiative on the first turn.",
    book: "HL 53"
  },
  "Crack Driver": {
    rating: "•• or •••",
    prerequisites: "Drive •••",
    description: "When not taking any non-Drive actions, add your Composure as a bonus to Drive rolls, and penalize attempts to disable your vehicle by your Composure. With three dots, you can take a reflexive Drive action once per turn.",
    book: "CofD 47"
  },
  "Demolisher": {
    rating: "• to •••",
    prerequisites: "Strength or Intelligence •••",
    description: "When breaking objects, ignore a point of Durability per dot of Demolisher.",
    book: "CofD 47"
  },
  "Double Jointed": {
    rating: "••",
    prerequisites: "Dexterity •••",
    description: "Dislodge joints at will. Escape from mundane bondage automatically. When grappled and not acting aggressively, penalize your attacker's overpowering rolls by your Dexterity.",
    book: "CofD 47"
  },
  "Fleet of Foot": {
    rating: "• to •••",
    prerequisites: "Athletics ••",
    description: "Add dots in Fleet of Foot to your Speed, and penalize pursuit rolls in a foot chase by your Fleet of Foot dots.",
    book: "CofD 47"
  },
  "Freediving": {
    rating: "•",
    prerequisites: "Athletics ••",
    description: "Add Athletics to Stamina when holding a deep breath, and succeed exceptionally on three successes to fight the gasp reflex.",
    book: "DTR 99"
  },
  "Giant": {
    rating: "•••",
    prerequisites: "",
    description: "+1 Size. Character creation only.",
    book: "CofD 47"
  },
  "Hardy": {
    rating: "• to •••",
    prerequisites: "Stamina •••",
    description: "Add Hardy dots as a bonus to rolls against disease, poison, deprivation, suffocation and unconsciousness.",
    book: "CofD 47"
  },
  "Greyhound": {
    rating: "•",
    prerequisites: "Athletics •••, Wits •••, Stamina •••",
    description: "Succeed exceptionally on three successes in a chase action.",
    book: "CofD 48"
  },
  "Iron Skin": {
    rating: "• to ••",
    prerequisites: "Brawl ••, Stamina •••",
    description: "Add general Armor equal to your dots in this Merit against bashing attacks. You can spend a point of Willpower to downgrade lethal damage to bashing equal to your dots in this merit.",
    book: "BTP 117"
  },
  "Iron Stamina": {
    rating: "• to •••",
    prerequisites: "Stamina or Resolve •••",
    description: "Ignore penalties from fatigue or wounds up to your rating in Iron Stamina.",
    book: "CofD 48"
  },
  "Quick Draw": {
    rating: "•",
    prerequisites: "Wits •••",
    description: "Whenever your Defense is available, you can draw a weapon that falls under a chosen Weaponry or Firearms Specialty as a reflexive action.",
    book: "CofD 49"
  },
  "Punch Drunk": {
    rating: "••",
    prerequisites: "Willpower ••••••",
    description: "Spend Willpower to preserve your last Health point, upgrading preexisting damage instead.",
    book: "HL 43"
  },
  "Relentless": {
    rating: "•",
    prerequisites: "Athletics ••, Stamina •••",
    description: "Add 2 to the successes needed against you in a chase.",
    book: "CofD 49"
  },
  "Roadkill": {
    rating: "•••",
    prerequisites: "Aggressive Driving ••",
    description: "When you try to run someone over, Knock Down even if you miss, and double your velocity bonus.",
    book: "HL 55"
  },
  "Seizing the Edge": {
    rating: "••",
    prerequisites: "Wits •••, Composure •••",
    description: "You get the Edge in the first turn of a chase, and if your opponent fails a roll as if being ambushed, you can calculate your target successes without their Speed or Initiative.",
    book: "CofD 49"
  },
  "Sleight of Hand": {
    rating: "••",
    prerequisites: "Larceny •••",
    description: "You can take a Larceny instant action reflexively once per turn, and victims of your Larceny can't notice your attempts if they aren't specifically looking for them.",
    book: "CofD 49"
  },
  "Small-Framed": {
    rating: "••",
    prerequisites: "",
    description: "-1 Size. Take a +2 bonus to hide, go unnoticed, or otherwise benefit from your size. Character creation only.",
    book: "CofD 49"
  },
  "Survivalist": {
    rating: "•",
    prerequisites: "Survival •••, Iron Stamina •••",
    description: "You can resist Extreme Cold and Extreme Heat for hours equal to your Stamina.",
    book: "HL 43"
  },

  "Air of Menace": {
    rating: "••",
    prerequisites: "Intimidation ••",
    description: "You wear a history of violence on your sleeve. +2 to menace others, and less rough characters must spend Willpower to pick a fight, but social maneuvering is harder.",
    book: "HL 41"
  },
  "Allies": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You have influence and goodwill with a chosen group proportional to your dots in this Merit. Each session, you can call on your Allies for favors of a value rated 1 to 5 by the Storyteller, up to your rating in the Merit. Favors in excess require a roll of Manipulation + Persuasion + Allies.",
    book: "CofD 49"
  },
  "Alternate Identity": {
    rating: "• to •••",
    prerequisites: "",
    description: "You've laid groundwork establishing a false identity: an informal history with one dot, a veneer of documentation with two, or an airtight paper trail with three. +1 to Subterfuge rolls to maintain the false identity, or +2 with three dots.",
    book: "CofD 50"
  },
  "Anonymity": {
    rating: "• to •••••",
    prerequisites: "No Fame",
    description: "Penalize attempts to find you by paper trail or living evidence by a die per Anonymity dot.",
    book: "CofD 50"
  },
  "Barfly": {
    rating: "••",
    prerequisites: "Socialize ••",
    description: "You can get in anywhere socially. Penalize attempts to recognize you as out of place by your Socialize dots.",
    book: "CofD 50"
  },
  "Closed Book": {
    rating: "• to •••••",
    prerequisites: "Manipulation •••, Resolve •••",
    description: "Add dots in this Merit to your number of Doors, and as a die bonus to contest Social assessment actions.",
    book: "CofD 50"
  },
  "Cohesive Unit": {
    rating: "• to •••",
    prerequisites: "Presence •••",
    description: "Confer +2 to teamwork. With two dots, confer bonus dice each scene. With three dots, confer rerolls.",
    book: "HL 42"
  },
  "Contacts": {
    rating: "• to •••••",
    prerequisites: "",
    description: "Choose a group or field for each dot of Contacts. You can roll Manipulation + (relevant Social Skill) to gather information or dirt from acquaintances in any of these groups or fields.",
    book: "CofD 50"
  },
  "Defender": {
    rating: "• to •••",
    prerequisites: "",
    description: "Gain bonus Willpower to spend on protecting loved ones, but losing them causes a crisis of grief or retribution.",
    book: "HL 42"
  },
  "Empath": {
    rating: "••",
    prerequisites: "Empathy ••",
    description: "Contest Wits + Empathy against Manipulation + Subterfuge for insight into a character's mental state, which can open Doors or ease breaking points.",
    book: "HL 42"
  },
  "Fame": {
    rating: "• to •••",
    prerequisites: "No Anonymity",
    description: "You're known for something, locally or selectively with one dot, broadly in an area with two dots, or universally with three. Add Fame dots as a die bonus to Social rolls targeting those impressed by your reputation, and to rolls by other characters to find or identify you.",
    book: "CofD 50"
  },
  "Fixer": {
    rating: "••",
    prerequisites: "Contacts ••, Wits •••",
    description: "Obtain services as if they were one Availability dot lower.",
    book: "CofD 51"
  },
  "Hobbyist Clique": {
    rating: "••",
    prerequisites: "Any Skill ••",
    description: "So long as you keep up with your fellow hobbyists, their support provides 9-Again to roll your hobby Skill, and a +2 die bonus to extended actions using that Skill.",
    book: "CofD 51"
  },
  "Inspiring": {
    rating: "•••",
    prerequisites: "Presence •••",
    description: "Roll Presence + Expression to confer the Inspired Condition.",
    book: "CofD 51"
  },
  "Iron Will": {
    rating: "••",
    prerequisites: "Resolve ••••",
    description: "When you spend Willpower to contest or resist Social influence, substitute your Resolve rating for the usual Willpower bonus. If the roll is contested, take 8-Again.",
    book: "CofD 51"
  },
  "Mentor": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You have a guide who expects something from you proportional to his or her influence, as measured by your dots in Mentor. Choose three traits out of the list of Skills plus the Resources Merit. Once per session, your Mentor can provide aid that falls within one of these traits, achieving automatic success.",
    book: "CofD 51"
  },
  "Peacemaker": {
    rating: "•• to •••",
    prerequisites: "Wits •••, Empathy •••",
    description: "You can spend Willpower to attempt to negotiate a nonviolent end to hostilities through Social Maneuvering. With three dots, you can attempt to talk down even supernatural rages.",
    book: "HL 42"
  },
  "Pusher": {
    rating: "•",
    prerequisites: "Persuasion ••",
    description: "When you use soft leverage, improve your impression as if you'd also satisfied the mark's Vice.",
    book: "CofD 53"
  },
  "Resources": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You have disposable income proportional to your dots in this Merit. Once per session, you can securely procure an item or service with an Availability that doesn't exceed your Resources rating, including any reasonable number of items or services whose Availability is exceeded by your Resources by two dots. You can acquire an item or service with an Availability one point above your Resources rating at the cost of reducing your effective Resources by a dot for a month.",
    book: "CofD 53"
  },
  "Retainer": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You have a mook. Your underling's dice pool is twice their Retainer rating for actions within their purview, or equal to their Retainer rating for actions outside it.",
    book: "CofD 53"
  },
  "Safe Place": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You've secured a place from intrusion. While there, add the Safe Place rating to your Initiative. Penalize rolls to break in by Safe Place. If you have Crafts dots, you can trap it, forcing intruders to roll Dexterity + Larceny - Safe Place to avoid lethal damage up to the Safe Place's rating. Multiple characters can contribute dots to a Safe Place and share the full resulting rating.",
    book: "CofD 54"
  },
  "Small Unit Tactics": {
    rating: "••",
    prerequisites: "Presence •••",
    description: "Once per scene when you coordinate allies, you can spend Willpower as an instant action to confer the die bonus to a number of allies up to your Presence rating.",
    book: "CofD 54"
  },
  "Spin Doctor": {
    rating: "•",
    prerequisites: "Manipulation •••, Subterfuge ••",
    description: "Using Tainted Clues inflicts an additional -1 penalty instead of consuming any successes.",
    book: "CofD 54"
  },
  "Staff": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You have employees corresponding to one Skill per dot of Staff. They can achieve a single automatic success at relevant actions using one of those Skills.",
    book: "CofD 54"
  },
  "Status": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You have influence as part of a chosen group. You can draw on their facilities and resources, block the use of a relevant Social Merit lower than your Status rating once per session, and apply Status as a die bonus to Social rolls drawing on your influence.",
    book: "CofD 54"
  },
  "Striking Looks": {
    rating: "• to ••",
    prerequisites: "",
    description: "Your appearance is noteworthy and memorable. Add Striking Looks as a die bonus to Social rolls that benefit from your appearance, and to rolls by other characters to notice or remember you.",
    book: "CofD 54"
  },
  "Support Network": {
    rating: "• to •••••",
    prerequisites: "Appropriate Social Merit",
    description: "Choose a Social Merit to represent supportive ties. You can spend Willpower to turn to those ties to weather a breaking point, using this Merit as bonus dice.",
    book: "HL 43"
  },
  "Sympathetic": {
    rating: "••",
    prerequisites: "",
    description: "When you engage in Social Maneuvering, you can accept a Condition such as Leveraged or Swooning to immediately open two Doors.",
    book: "CofD 55"
  },
  "Table Turner": {
    rating: "•",
    prerequisites: "Composure •••, Manipulation •••, Wits •••",
    description: "When targeted by Social Maneuvering, you can spend Willpower to preemptively respond with a Social action of your own.",
    book: "CofD 55"
  },
  "Takes One to Know One": {
    rating: "•",
    prerequisites: "Vice",
    description: "When you investigate an incident that resonates with your Vice, instead of suffering the normal -2 penalty, your roll gains +2 dice and 9-Again. Succeeding on the roll satisfies your Vice.",
    book: "CofD 55"
  },
  "Taste": {
    rating: "•",
    prerequisites: "Crafts ••",
    description: "Choose a Specialty in Crafts or Expression. You can roll Wits + (Skill in question) to draw information about the nature of a work that falls within the chosen Specialty.",
    book: "CofD 55"
  },
  "True Friend": {
    rating: "•••",
    prerequisites: "",
    description: "You have an unbreakable bond of friendship with a chosen character. Rolls to influence your friend to your detriment suffer a -5 penalty. Once per story, you can recover one Willpower through a meaningful interaction with your friend.",
    book: "CofD 56"
  },
  "Untouchable": {
    rating: "•",
    prerequisites: "Manipulation •••, Subterfuge ••",
    description: "You're a smooth criminal. Rolls to investigate your deeds must achieve an exceptional success or else turn up Incomplete Clues.",
    book: "CofD 56"
  },

  "Esoteric Armory": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You've collected enough esoterica to supply the banes of ephemeral entities with a Rank up to your rating in this Merit.",
    book: "CofD 139"
  },
  "Relic": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You possess an incorruptible item sorcerously crafted with the world's life force, with unique cursed powers.",
    book: "MTC 2e 113"
  },
  "Sandglass": {
    rating: "••",
    prerequisites: "",
    description: "Your soul can instinctively roll Wits + Composure to sense ripples in the waters of time like the Arisen, spending Willpower instead of Pillars and Willpower dots instead of Sekhem.",
    book: "MTC 2e 114"
  },
  "Vestige": {
    rating: "• to •••••",
    prerequisites: "",
    description: "You possess vessels for the world's life force which can be called upon for cursed strength.",
    book: "MTC 2e 116"
  },

  "Armed Restraint": {
    rating: "••",
    prerequisites: "Staff Fighting •••",
    description: "Use a hooking pole when grappling to instantly Hold and penalize your opponent by its weapon rating.",
    book: "HL 53"
  },
  "Body as Weapon": {
    rating: "••",
    prerequisites: "Stamina •••, Brawl ••",
    description: "Unarmed strikes add one point of bashing damage on a successful hit.",
    book: "HL 41"
  },
  "Boot Party": {
    rating: "••",
    prerequisites: "Brawl ••",
    description: "Attack a prone target at -3 to deal lethal damage unarmed.",
    book: "HL 53"
  },
  "Cheap Shot": {
    rating: "••",
    prerequisites: "Street Fighting •••, Subterfuge ••",
    description: "During a fight, you can reflexively contest Dexterity + Subterfuge against Wits + Composure to deny an opponent Defense next turn through dirty tricks and distractions.",
    book: "CofD 61"
  },
  "Choke Hold": {
    rating: "••",
    prerequisites: "Brawl ••",
    description: "After a successful Hold, add the Choke grapple maneuver: accumulates successes across multiple turns to knock unconscious for a few minutes.",
    book: "CofD 61"
  },
  "Clinch Strike": {
    rating: "•",
    prerequisites: "Brawl ••",
    description: "Use the Damage maneuver instantly in a grapple.",
    book: "HL 53"
  },
  "Defensive Combat": {
    rating: "•",
    prerequisites: "Brawl • or Weaponry •",
    description: "You can substitute the chosen Skill for Athletics when calculating your Defense, as long as you're currently equipped to make attacks with that Skill.",
    book: "CofD 61"
  },
  "Fighting Finesse": {
    rating: "••",
    prerequisites: "Dexterity •••",
    description: "You can substitute Dexterity for Strength when making rolls with a chosen Brawl or Weaponry Specialty.",
    book: "CofD 61"
  },
  "Ground and Pound": {
    rating: "•••",
    prerequisites: "Brawl ••",
    description: "Take the rote quality to strike a prone target with Brawl, falling prone yourself.",
    book: "HL 54"
  },
  "Ground Fighter": {
    rating: "•••",
    prerequisites: "Wits •••, Dexterity •••, Brawl ••",
    description: "Deny close combat bonuses from being prone, and gain the Stand Up grapple maneuver.",
    book: "HL 54"
  },
  "Gunslinger": {
    rating: "•, •••, or •••••",
    prerequisites: "Wits •••, Firearms •••, Firearms(Revolvers) specialty",
    description: "At one dot, can perform short bursts with revolvers. At three dots, can make a medium burst with revolvers, but doesn't gain an attack bonus. At five dots, with offhand revolver, medium burst can hit targets not close together, for an additional -2 penalty.",
    book: "DE2 377"
  },
  "Headbutt": {
    rating: "•",
    prerequisites: "Brawl ••",
    description: "Gain the Headbutt grapple maneuver: inflict Stunned.",
    book: "HL 54"
  },
  "Iron Chin": {
    rating: "•• or ••••",
    prerequisites: "Resolve •••, Stamina •••",
    description: "Don't suffer Beaten Down from bashing damage. With four dots, never suffer Beaten Down.",
    book: "HL 54"
  },
  // "Iron Skin": {
  //   rating: "•• or ••••",
  //   prerequisites: "Martial Arts or Street Fighting ••, Stamina •••",
  //   description: "Confers half your Iron Skin dots in points of general Armor against bashing attacks. When hurt, you can spend Willpower to reduce half your Iron Skin dots in lethal damage to bashing.",
  //   book: "CofD 63"
  // },
  "Killer Instinct": {
    rating: "• to •••",
    prerequisites: "Composure •••, Wits •••, Medicine •",
    description: "You can take an instant action to size up a target's most vulnerable parts, which also counts as an aiming action. When attacking the target afterward, each dot of this Merit can ignore 1/1 Armor, ignore a point of Defense, or convert a point of bashing to lethal damage.",
    book: "BTP 117"
  },
  "Loaded for Bear": {
    rating: "• to ••",
    prerequisites: "Athletics •, Survival •",
    description: "Gain extra reloads on weapons, including single shot weapons.",
    book: "HL 143"
  },
  "Phalanx Fighter": {
    rating: "••",
    prerequisites: "Weapon and Shield ••, Spear and Bayonet •",
    description: "Wield a spear with a shield, substituting it in Weapon and Shield maneuvers.",
    book: "HL 54"
  },
  "Retain Weapon": {
    rating: "••",
    prerequisites: "Wits ••, Brawl ••",
    description: "Reduce successes on a Control Weapon or Disarm maneuver against you by your Brawl.",
    book: "HL 54"
  },
  "Shiv": {
    rating: "• or ••",
    prerequisites: "Street Fighting ••, Weaponry •",
    description: "You can conceal a 0L brawling weapon with one dot, or 1L with two, on your person. Penalize rolls to detect it by your Weaponry.",
    book: "CofD 64"
  },
  "Subduing Strikes": {
    rating: "•",
    prerequisites: "Weaponry ••",
    description: "You can pull blows with a weapon to deal bashing damage without spending Willpower.",
    book: "DE 247"
  },
  "Transfer Maneuver": {
    rating: "• to •••",
    prerequisites: "Intelligence ••, Wits •••, Brawl ••, Weaponry ••",
    description: "Cross-apply a Brawling maneuver to a Weaponry Style, or vice-versa.",
    book: "HL 54"
  },
  "Trigger Discipline": {
    rating: "•",
    prerequisites: "Wits ••, Firearms ••",
    description: "Increase a firearm's effective capacity, or allow an additional long burst at high capacity.",
    book: "HL 143"
  },
  "Trunk Squeeze": {
    rating: "••",
    prerequisites: "Brawl ••",
    description: "Gain the Trunk Squeeze grapple maneuver: deal bashing damage and cumulatively penalize the opponent's contesting rolls.",
    book: "HL 54"
  },
};
