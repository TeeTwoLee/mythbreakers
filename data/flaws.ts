
export type flawName = keyof typeof flawData;

// Data from http://mistsofmemory.net/wiki/doku.php?id=general_flaws
// duplicates: Anachronism, Echoes, Tic/Twitch, Impatient, Lazy, Monstrous, Permanent Wound, Slow Healing, Speech Impediment, Territorial, Dark Secret, Expendable, Failure, Hunted, Old Flame, Cold Breeze, Touch of Frost, Eerie Presence
export const flawData = {
  "Absent-Minded": {
    dots: "3pt.",
    description: "Though you do not forget things such as Knowledges or Skills, you do forget things such as names, addresses, and the last time you gained Glamour. In order to remember anything more than your own name and the location of your freehold, you need to make a Wits roll, or, as a last resort, spend a Willpower point. This Flaw may not be taken with the Merit Concentration."
  },
  "Addiction": {
    dots: "1-3pt.",
    description: "You are addicted to any one of a variety of things. A one-point Flaw would be a mild addiction to an easily obtained substance, such as caffeine, nicotine, or alcohol. A two-point Flaw would be either a severe addition to any easily obtained substance, or any 'mild' drug, such as painkillers, sleeping pills, or marijuana. A three-point addiction involves the heavy street drugs or hard-to-find drugs. The need for these drugs varies from once a day to two to three times a day for others, depending on the strength of the drug and the addiction. If, for whatever reason, you are denied access to the drug, you lose the number of dice equal to the level of your addiction (one, two, or three) until you receive your 'fix.' If you are deprived of the drugs for an extended length of time, you will be forced to make a Willpower check (difficulty of 4 for the first day, +1 for each additional day). If you fail, you will forgo everything and forcibly go seeking the drug. This would be an easy way for you to be either controlled or forced to do favors for your supplier, especially if the drug is hard to obtain due to its rarity or price."
  },
  "Allergic": {
    dots: "1-4pt.",
    description: "You are allergic to some substance – pollen, animal fur, alcohol, chocolate, etc. For one point, you get hives, sneeze, or become dizzy upon prolonged contact with your bane; for two points, you swell up uncomfortably in the affected area, reducing all Dice Pools by one; for three points, your reaction usually incapacitates you, reducing appropriate Dice Pools by three. If the substance is really common in your chronicle, add an additional point to this Flaw."
  },
  "Amnesia": {
    dots: "2pt.",
    description: "You are unable to remember anything about your past, yourself, or your family, though your past might well come back to haunt you. Your origins and the circumstances behind your amnesia are for the Storyteller to determine, and she is encouraged to make it as interesting as possible."
  },
  "Asthma": {
    dots: "1pt.",
    description: "You have difficulty performing strenuous tasks because you cannot breathe properly. With asthma, your lungs only pull in a fraction of the air that normal lungs require. Any time that you exert yourself, you must make a Stamina roll against a difficulty of 6 or be unable to perform any action on the next round while you catch your breath."
  },
  "Attention-Deficit Disorder": {
    dots: "2pt.",
    description: "You have a hard time sitting still and paying attention to anything for more than a few minutes. If you must sit still and quiet for more than 10 minutes, such as standing guard, you must make a Willpower roll, difficulty 6. On a failure, you lose interest in your task and are distracted from it."
  },
  "Bad Liar": {
    dots: "1pt.",
    description: "You have tremendous trouble lying. The spontaneous excuses that you come up with are usually unbelievably elaborate or easily refuted with the bare modicum of research. While telling a prefabricated lie, you stutter, stammer, blush or generally look guilty. Increase he difficulty of any roll that involves verbal deception by two."
  },
  "Bad Sight": {
    dots: "1-3pt.",
    description: "Your sight is defective. The difficulties of any die rolls involving the use of your eyesight are increased by two. As a one-point Flaw, this condition can be corrected with glasses or contacts; as a three-point Flaw, the condition is too severe to be corrected."
  },
  "Blind": {
    dots: "6pt.",
    description: "You cannot see. Characters can compensate for the loss of vision by becoming more attuned to other sensory input, but visual cues and images are lost to them. Difficulties of all Dexterity-based rolls are increased by two."
  },
  "Child": {
    dots: "3pt.",
    description: "You are a small child (between five and 10 years old), leaving your Physical Attributes underdeveloped and making it difficult to interact with some aspects of mortal society. You may not have more than two dots in Strength or Stamina at character creation, and the difficulties of all die rolls when attempting to direct or lead mortal adults are increased by two. Characters with this Flaw should also take the Short Flaw."
  },
  "Chronic Pessimist": {
    dots: "1pt.",
    description: "You think the glass is half-empty, that the water in the glass is contaminated, and that the glass will probably tip over any second. Others practice pessimism out of habit. For you, it's an art form. Nothing can ever go right, especially plans that others propose. You are the implacable voice of gloom and doom, always ready to point out a potential problem no matter how remote a chance it has of coming to pass. Add two to the difficulty of you Leadership rolls."
  },
  "Chronically Late": {
    dots: "1pt.",
    description: "You're always running behind schedule. If you agree to meet someone at a particular time, you must make a successful Willpower roll (difficulty 6) to arrive on time. Failure means you arrive between fifteen and thirty minutes late. A botch means you show up an hour late or not at all."
  },
  "Cold Breeze": {
    dots: "1pt.",
    description: "A chill wind follows you everywhere you go. While it may make for dramatic entrances, this effect also discomforts mortals (+1 difficulty on all appropriate Social rolls) and marks you as obviously supernatural. Cold winds sweeping through executive offices or crowded nightclubs can raise all sorts of questions."
  },
  "Color Blindness": {
    dots: "1pt.",
    description: "You can only see in black and white. Color means nothing to you, although you are sensitive to color density, which you perceive in shades of gray. Note: color blindness actually indicates an inability to distinguish between two colors, but we fudged a bit for the sake of playability."
  },
  "Compulsion": {
    dots: "1pt.",
    description: "You have a psychological compulsion of some sort, which can cause you a number of different problems. Your compulsion may be for cleanliness, perfection, bragging, stealing, gaming, exaggeration, or just talking. A compulsion can be temporarily avoided at the cost of a Willpower point, but is in effect at all other times."
  },
  "Compulsive Liar": {
    dots: "2pt.",
    description: "You feel the need to put your personal spin on the truth. You don't necessarily do so out of spite or malice, and you may come to genuinely believe the tall tales that you tell (especially when you spin them often enough). You might have to spend a Willpower point to force yourself to be honest, especially if it means publicly revealing a previous lie."
  },
  "Confused": {
    dots: "2pt.",
    description: "You are often confused, and the world seems to be a very disoriented and twisted place. Sometimes you are simply unable to make sense of things. You need to roleplay this behavior all the time to a small degree, but your confusion becomes especially strong whenever stimuli around you (such as when a number of different people talk at once, or you enter a nightclub with loud, pounding music). You may spend Willpower to override the effects of your confusion, but only temporarily."
  },
  "Conniver": {
    dots: "1pt.",
    description: "There is no honor among thieves, nor trust among liars. You are known as someone whose word cannot be trusted. Whether earned or not, you have a reputation for deceit and treachery, and you lose one die from all Social rolls involving any extension of trust, truth, or believing your words."
  },
  "Criminal Record": {
    dots: "2pt.",
    description: "Having been convicted for several misdemeanors or perhaps a minor felony, you have a bit of a shady past. You are unable to buy firearms legally, and you receive exceptionally poor treatment from law-enforcement officials who know your record."
  },
  "Crude": {
    dots: "1pt.",
    description: "You never learned any manners while growing up. You talk with your mouth full, burp loudly and slurp your soup. When interacting with others in any refined or formal environment, increase the difficulty of any Social rolls by two."
  },
  "Cultural Snob": {
    dots: "1pt.",
    description: "You have nothing but disdain for popular music, TV and movies. You couldn't name any of the current top-10 songs, and you think that knowledge of TV is a sign of poor taste and incorrigible stupidity. Unfortunately, this means you have a hard time relating to people who aren't equally snobbish with things. When dealing with strangers who don't share your allegedly enlightened views, increase the difficulty of any Social rolls by two."
  },
  "Curiosity": {
    dots: "2pt.",
    description: "You are a naturally curious person, and find mysteries of any sort irresistible. In most circumstances, you find that your curiosity easily overrides your common sense. To resist the temptation, make a Wits roll (difficulty 5) for simple things like “I wonder what is in that cabinet.” Increase the difficulty up to 9 for things like, “I wonder what those strange sounds coming from the Unseelie duke's freehold are. I'll just slip in and check it out – no one will ever know. What could possibly go wrong?”"
  },
  "Cursed": {
    dots: "1-5pt.",
    description: "You are the recipient of a supernatural curse. The strength and pervasiveness of the curse depend upon how many points you wish to incur. Examples follow:\n - If you pass on a secret you were entrusted with, your betrayal will come back to harm you in some way. (1 pt.)\n - You stutter uncontrollably when you try to describe what you have seen or heard. (2 pts.)\n - Tools break or malfunction when you try to use them. (3 pts.)\n - You are doomed to make enemies of those whom you most love or admire. (4 pts.)\n - Every one of your accomplishments or triumphs will eventually become soiled or fail in some way. (5 pts.)"
  },
  "Dark Fate": {
    dots: "5pt.",
    description: "You are doomed to experience an untimely death or, worse, suffer eternal agony. No matter what you do, you cannot avoid this terrible fate. At some point during the chronicle, your Dark Fate will come upon you. Even more ghastly is the fact that you occasionally have visions of this fate, and the malaise these images inspire requires an expenditure of a temporary Willpower point to avoid, or else you lose a die from all of your actions for the remainder of the session. It is up to the Storyteller to determine the exact nature of this fate, and when it will occur. This is a difficult Flaw to roleplay; ironically, though it may seem as though it removes all free will, the knowledge of one’s death can be quite liberating."
  },
  "Dark Secret": {
    dots: "1pt.",
    description: "You have some sort of secret that, if uncovered, would be of immense embarrassment to you and would make you a pariah in the local supernatural community."
  },
  "Deaf": {
    dots: "4pt.",
    description: "You cannot hear. The difficulties of many Perception rolls are increased by three."
  },
  "Deathsight": {
    dots: "2pt.",
    description: "Everything appears rotted and decayed to you. The world appears to you as a corpse; mortals look diseased or skeletal, buildings seem decrepit. You are at -2 difficulty to resist all rolls based on Appearance, but by the same token you are at +2 difficulty on all Perception-based rolls. In addition, you find social interaction difficult and are at +1 difficulty on all Social-based rolls"
  },
  "Deformity": {
    dots: "3pt.",
    description: "You have some kind of deformity — a misshapen limb, hunchback, or clubfoot, for example — which affects your physical abilities and interactions with others. A hunchback, for instance, would lower a character’s Dexterity by two dots and increase the difficulty of die rolls relating to social skills by one. It is the responsibility of the Storyteller to determine the specific effects of the deformity chosen."
  },
  "Depression": {
    dots: "4pt.",
    description: "You're mired in a pit of bleak, mind-numbing sorrow. Convinced that your eternally dark mood is completely natural - or deserved - you refuse to seek professional help. You do not regain a point of Willpower per day as most characters do. Instead, you may gain Willpower only through actions, and even those must ardently reaffirm your goals"
  },
  "Deranged": {
    dots: "3pt.",
    description: "You suffer from a permanent form of insanity, either due to a congenital defect or some past trauma. Willpower may allow you to overcome your insanity temporarily, but it always returns."
  },
  "Disfigured": {
    dots: "2pt.",
    description: "A hideous disfigurement makes your appearance disturbing and memorable. The difficulties of all die rolls relating to social interaction are increased by two. You may not have an Appearance rating greater than 2."
  },
  "Distinguishing Characteristic": {
    dots: "1-2pt.",
    description: "You have a physical feature that makes you very easy to pick out in crowds, such as elaborate tattoos, a scar or an obvious birthmark. This flaw is worth one point if the characteristic is hidden easily under clothes, two points if it is not."
  },
  "Dogged by Fringe Media": {
    dots: "2pt.",
    description: "You have somehow attracted the attention of an amateur reporter, one who covers a fringe website or publishes a zine that covers the bizarre or paranormal. This crank occasionally follows you to try to discover any dirt on you. Unfortunately, and in true modern journalism style, he tends to catch you in bizarre circumstances that he simply can't understand. Of course, he tries to interpret them anyway."
  },
  "Driving Goal": {
    dots: "3pt.",
    description: "You have a personal goal which sometimes compels you and directs you in startling ways. The goal is always limitless in depth, and you can never truly achieve it. Because you must work toward your goal throughout the chronicle (though you can avoid it for short periods by spending Willpower), it will get you into trouble and may jeopardize other actions. Choose your driving goal carefully, as it will direct and focus everything your character does."
  },
  "Dyslexic": {
    dots: "2pt.",
    description: "Printed information of any sort, from written text to maps, is nearly indecipherable to you. Although you are not necessarily illiterate, you struggle to read the simplest sentences. In order to interpret a map or read anything, you must make a successful Intelligence roll, difficulty 8. On a botch, you interpret the message to have almost it's opposite meaning."
  },
  "Eccentric Appearance": {
    dots: "1pt.",
    description: "You dye your hair pink, wear clothes that are fashionable only among fringe subcultures such as goths or punks, and otherwise appear nothing like the average citizen. When dealing with people not familiar with your particular subculture, increase the difficulty of any Social rolls by two. Your appearance unnerves mainstream people and makes them wary of you. Furthermore, your appearance is eye-catching, though people tend to focus on your attire rather than your actual physical characteristics, such as eye color."
  },
  "Eerie Presence": {
    dots: "2pt.",
    description: "Mortals have an unconscious awareness of your supernatural nature, which makes then anxious and ill at ease in your presence. Because of this, difficulties of all rolls relating to social interaction with mortals are increased by two."
  },
  "Enemy": {
    dots: "1-5pt.",
    description: "You have an enemy, or perhaps a group of enemies, who seek to harm you. The power of the enemy depends upon how many points the player wishes to spend (five points indicate the wrath of an Elder or other potent supernatural foe)."
  },
  "Expendable": {
    dots: "1pt.",
    description: "Someone in power doesn’t want you around. What does matter is that she has the power to maneuver you into dangerous situations “for the good of your people,” and has no compunctions about doing so."
  },
  "Failure": {
    dots: "2pt.",
    description: "You once held status in the city, but failed catastrophically in your duties. Now you are branded incompetent, excluded from circles of power and responsibility, and generally ostracized by those on their way up. Your exclusion may make you a target for recruitment by your people’s enemies (or so the whispers run, making you even more distrusted). Conversely, the consequences of your error might come back to haunt you."
  },
  "Faint of Heart": {
    dots: "3pt.",
    description: "The sight of gore and blood shocks you to the core. If you witness a gruesome scene, you must make a Willpower roll, difficulty 6, to avoid debilitating nausea for five to 10 minutes. The difficulty of all actions increases by one when you're in this state."
  },
  "Flashbacks": {
    dots: "6pt.",
    description: "You managed to make it through a traumatic experience, but not wholly intact. The most insignificant thing can throw you into a different mood or state of mind, and as such your behavior is extremely unpredictable. Because of your precarious emotional state, your Willpower fluctuates. At the beginning of each story, make a Willpower roll (you may not spend Willpower for an automatic success). If you succeed, you may participate in the story as normal. If you fail, however, your Willpower score is considered to be 1 for the duration of that session, and you only have one Willpower point to spend. You may roll again at the beginning of the next session to see if you regain your Willpower."
  },
  "Ghoulish Sense of Humor": {
    dots: "1pt.",
    description: "You find humor in situations that make most people uncomfortable or even nauseated. Your questionable taste doesn't make you particularly resistant to the horror of gruesome sights. Your defense mechanism is simply to belittle the situation or those involved in an inappropriate way. When confronted with a horribly gory scene or otherwise uncomfortable situation such as people trying to console each other, you tend to crack jokes and sling insults. The difficulty of any Social roll you make under such circumstances is increased by two."
  },
  "Gullible": {
    dots: "2pt.",
    description: "Maybe you’re slow on the uptake, or maybe you just never learned to separate truth from fiction. Whatever the cause, you’re particularly susceptible to lies and halftruths. You lose three dice from all dice pools relating to guile and subterfuge (not stealth), whether perpetrating your own feeble lies or attempting to penetrate someone else’s words to find the truth."
  },
  "Hard of Hearing": {
    dots: "1pt.",
    description: "Your hearing is defective. The difficulties of any rolls involving the use of hearing are increased by two."
  },
  "Hatred": {
    dots: "3pt.",
    description: "You have an unreasoning hatred of a certain thing. Your hate is total and largely uncontrollable. You may hate a species of animal, a class of person, a color, a situation, or just about anything else, and you constantly pursue opportunities to harm the hated object or gain power over it."
  },
  "Haunted": {
    dots: "3pt.",
    description: "You are haunted by an angry and tormented spirit. This spirit actively attempts to hinder you and does its utmost to vent its anguish upon you and anyone in your presence. The Storyteller determines the exact nature of the spirit, its powers, and whether or not it can eventually be laid to rest."
  },
  "Honest to a Fault": {
    dots: "2pt.",
    description: "You always try to tell the truth, no matter what the situation. You won't stretch it, bend it or manipulate it to take advantage of others, unless human lives are in jeopardy. If you do attempt to lie to someone, the difficulty of any roll involved is increased by two."
  },
  "Hunted": {
    dots: "4pt.",
    description: "You are pursued by a fanatical witch-hunter who believes (perhaps correctly) that you are a danger to humanity. All those with whom you associate, be they mortal or otherwise, may be hunted as well."
  },
  "Ignorant": {
    dots: "1pt.",
    description: "You tend to miss common cultural references that others take for granted, such as the knowing that the Statue of Liberty is in New York City. You're not necessarily dumb or uneducated; a cloistered college researcher could just as easily dive so deeply into his field of study that he dismisses anything outside it. You do tend to give people the impression that you're slow and uneducated, however."
  },
  "Illiterate": {
    dots: "4pt.",
    description: "You never learned to write in your native language. You can understand most traffic signs and warning labels that rely on pictographs, but written instructions and warnings are completely beyond your comprehension."
  },
  "Impatient": {
    dots: "1pt.",
    description: "You have no patience for standing around and waiting. You want to do things now — fuck those slowpokes trying to hold you back. Every time you are forced to wait around instead of acting, a Self-Control roll is required to see if you go tearing off on your own instead."
  },
  "Impractical Dresser": {
    dots: "1pt.",
    description: "You tend to dress with an eye toward impressing others rather than personal comfort. Unless you explicitly state that you dress appropriately for physical activity, you wear high heels, tight jeans or something else that hampers physical activity. Increase the difficulty of Athletics rolls by two when you wear such clothes."
  },
  "Incompetent": {
    dots: "3pt.",
    description: "You are spectacularly bad at something. Unfortunately, you're the only person around who doesn't understand this fact. Pick a single ability. You believe you have the proficiency equal to three dots in that Trait, when in reality you almost always ruin any effort involving it. Whenever you try to use the Ability, treat the outcome as if you rolled a botch."
  },
  "Ineptitude": {
    dots: "1-pt.",
    description: "Your mage just sucks at one particular Ability. Maybe he can't handle driving worth a damn, or he makes computers burst into flames and emit pink smoke. Pick one Ability in which your charact er has at least one dot — preferably one that will be important to your character in some fashion. (Your Storyteller will know if you do otherwise, and he has nasty ways to make you pay.) You suffer a difficulty penalty of two on all rolls with that Ability."
  },
  "Insomniac": {
    dots: "2pt.",
    description: "For whatever reason, you have tremendous trouble getting more than a few hours of sleep. You are often groggy and slow as a result. Increase the difficulty of any Alertness, Awareness or Intuition rolls by two."
  },
  "Intolerance": {
    dots: "1pt.",
    description: "You have an unreasoning dislike of a certain thing. This may be an animal, a class of person, a color, a situation, or just about anything else. The difficulties of all dice rolls involving the subject are increased by two. Note that some dislikes may be too trivial to be reflected here – a dislike of left-handed Lithuanian plumbers or tissue paper, for instance, will have little effect on play in most chronicles. The Storyteller is the file arbiter on what you can pick to dislike."
  },
  "Lame": {
    dots: "3pt.",
    description: "Your legs are damaged, which prevents you from running or walking easily. You are forced to walk with a cane or possibly leg braces, and you have a pronounced limp to your stride. Your walking speed is one-quarter that of a normal human, and running is impossible."
  },
  "Lazy": {
    dots: "3pt.",
    description: "You are simply lazy, avoiding anything that requires effort on your part. Preferring to let others do the hard work, you lounge around. For any action that requires preparation, there’s a good chance you didn’t properly prepare. Difficulty rolls for spontaneous Physical actions (including combat, unless it’s part of a planned offensive) increase by one."
  },
  "Lifesaver": {
    dots: "3pt.",
    description: "You believe that human life is a sacred gift, and will not take a person's life except in the most extreme of circumstances. You may not ever willingly endanger the lives of innocents or in any way participate in a killing. You have no problems with killing animals (for the right reasons), and will kill evil and inhuman creatures to protect others if necessary. (Be very careful, however, with your determination of 'evil'…) Senseless death in all forms repulses you, and you feel that those who commit murder should be punished."
  },
  "Low Alcohol Tolerance": {
    dots: "1pt.",
    description: "Alcohol goes straight to your head. Double any penalties you suffer from consuming alcohol."
  },
  "Low Pain Tolerance": {
    dots: "2pt.",
    description: "You have a very low capacity for pain. You turn into a whimpering, blubbering ball of misery at the first sign of it. Although you soak damage normally, you suffer an additional -1 die-pool penalty when you are injured."
  },
  "Low Self-Esteem": {
    dots: "3pt.",
    description: "You have trouble accepting your own value and worth. You tend to highlight your failures and overlook your triumphs. Whenever you have the opportunity to gain Willpower from accomplishing goals (not resting), make a Willpower roll, difficulty 6. If you fail the roll, you do not gain the bonus. If you botch, you lose a temporary point of Willpower."
  },
  "Lustful": {
    dots: "2pt.",
    description: "You can't resist the erotic advances of the appropriate gender(s). You are easily seduced and often exhibit very poor judgment when dealing with sexually attractive people. The difficulty of any attempts to seduce you is reduced by two."
  },
  "Medicated": {
    dots: "1-5pt.",
    description: "You require a daily medication to stay in good health. As a one-point flaw, your medication is important to your long-term health but has little effect on your day-to-day well-being, as with prescription drugs that keep your cholesterol down. The five point version represents insulin shots or something else that is necessary to keep you alive. If you should miss a day's worth of medicine, you automatically suffer a bashing or lethal level of damage for every 12 hours that pass without your medicine, as determined by the Storyteller. The damage is healed at a rate of one level per 12 hours that pass once you resume your regular medication schedule."
  },
  "Mental Patient": {
    dots: "2-5 pt.",
    description: "Sometime in your life you have run afoul of the mental health authorities. Seeing and talking to beings that no one else can perceive, and hearing voices that may tell you frightening and disturbing things, is far outside the realm of the normal. Anyone who does such things must be crazy! Because you seemed delusional and incoherent you were locked up as a possible danger to yourself and others. Since schizophrenia is the most common diagnosis for such problems you may even have been on powerful antipsychotic drugs for a time. If you managed to convince the officials that you are no longer a danger to yourself or others and you were released this flaw is worth only two points. However if you actually escaped from a mental institution and are on the run from the authorities, then the flaw is worth five points. Even if you were legally released from care the modern mental health system does not consider an illness like schizophrenia curable. Anyone who has ever been institutionalized against his will has this fact noted in his records. Prospective employers, landlords and similar personnel usually look askance at anyone who was crazy. The discrimination and problems for mental cases are much worse if you were not released. Escaped mental patients are regarded in much the same light a escaped convicts. Most people see them as little better than dangerous animals. Everyone, from the police to the general public, will consider you to be a potential killer, even if you have no history of violence. In this age of nation wide databases, and background check using your name social security number or finger prints will reveal your status."
  },
  "Misinformed": {
    dots: "1pt.",
    description: "You uphold some odd belief, such as a conspiracy theory or UFO visitation, that flies in the face of accepted science or conventional wisdom. You tend to incorporate this misinformation into your worldview. Whenever you test a Knowledge that in some way relates to your belief, increase the difficulty by two. This penalty kicks in when you roll a failure. It represents your tendency to come up with off-the-wall answers that others see as obviously incorrect."
  },
  "Mistaken Identity": {
    dots: "1pt.",
    description: "You look similar to descriptions of someone else, which cause cases of mistaken identity. This can prompt numerous awkward or even dangerous situations, especially if your “twin” has a terrible reputation or is wanted for some crime."
  },
  "Moneygrubbing": {
    dots: "3pt.",
    description: "You exist to make money. Family, friends, and other concerns are trivial when compared to the almighty dollar. If someone offers you a bribe, you must make a Willpower roll, difficulty 7, to resist. If the bribe involves something that as far as you know won't directly result in any injuries or lasting damage, increase the difficulty to 8."
  },
  "Motion Sickness": {
    dots: "1pt.",
    description: "You become queasy and nauseous on board boards, when traveling long distances by car or on amusement park rides. Increase the difficulty of all actions you take by two when dealing with these conditions."
  },
  "Mute": {
    dots: "4pt.",
    description: "You cannot speak. You may communicate with the Storyteller and describe your actions, but cannot talk to player or Storyteller characters unless everyone concerned purchases a commonly understood sign language or you write down what you wish to say."
  },
  "Naive": {
    dots: "1pt.",
    description: "You are hopelessly naïve about the nature of reality and see everything through “rose-colored glasses.” You may have been brought up in wealth and privilege or be a survivor of abuse and trauma that you have repressed. You are hesitant to suspect evil or foul play in others, which can be a serious problem. The difficulty for any rolls for you to detect another person’s ill intent, from the Sense Wyrm Gift to Empathy rolls, is raised by 2."
  },
  "Nightmares": {
    dots: "1pt.",
    description: "You experience horrendous nightmares every time you sleep, and memories of them haunt you during your waking hours. Upon awakening, you must make a Willpower roll (difficulty 7) or lose a die on all actions for that night. A botched Willpower roll indicates that, even when awake, you still believe that you are locked in a nightmare."
  },
  "No Sense of Direction": {
    dots: "1pt.",
    description: "You get lost all the time. Maps, compasses and detailed directions do little to help. You have a lot of trouble figuring out where you are in relation to landmarks that aren't immediately obvious, and maps are largely incomprehensible to you. Increase by two the difficulty of any roll that involves following convoluted directions, backtracking a route or navigating a confusing set of city streets."
  },
  "No Sense of Smell": {
    dots: "1pt.",
    description: "You completely lack a sense of smell. You may have simply been born without it, or perhaps you lost it due to some freak accident. You can't smell anything, no matter how strong the odor might be. Food tastes somewhat bland to you. On the good side, you aren't bothered by the stench of sewers, rotting flesh, or other nasties."
  },
  "No Sense of Taste": {
    dots: "1pt.",
    description: "Your taste buds simply do not function. You cannot appreciate a fine meal, and you have trouble gauging the difference between good and bad food and drink."
  },
  "Nonconfrontational": {
    dots: "1pt.",
    description: "You have a hard time bringing up difficult subjects with others. You're willing to make a lot of sacrifices to avoid interpersonal confrontations. You let people have their way simply to avoid fights, and often you step into arguments and attempt to end them without any thought about the outcome of the discussion, as long as it ends. You have a hard time coping with pushy people and find yourself making a lot of compromises that you later wish you hadn't. Add two to the difficulty of any roll that involves debating or arguing with someone who is normally friendly with you."
  },
  "Obsession": {
    dots: "2pt.",
    description: "There is something you like, love, or are fascinated by to the point where you often disregard common sense to cater to this drive. You react positively to anything related to your obsession, even if it's not in your best interests. For example, if you are obsessed with supernatural creatures, you will go out of your way to talk to and befriend vampires, werewolves, and stranger things, and find out as much as you can about them, disregarding all warnings. If you are obsessed with Elvis, you have your house decorated with black velvet paintings and annoy your friends with your constant talk about the King. You don't necessarily believe that Elvis is still alive, but you buy ever supermarket tabloid that caries an article about him anyway. There are many other obsessions, including British royalty, guns, football, roleplaying games…you know the type."
  },
  "Old Flame": {
    dots: "2pt.",
    description: "Someone you once cared deeply for is now with the enemy. He still attempts to play on your sympathies “for old times’ sake” while working against you. Unless you succeed on a contested Manipulation + Expression roll against your former friend, you cannot act against him unless the situation becomes life-threatening."
  },
  "Old Injury": {
    dots: "2pt.",
    description: "You hurt yourself pretty badly back in your younger days and now pay the price with chronic pain and tenderness. Increase the difficulty of any Athletics roll by two."
  },
  "One Arm": {
    dots: "3pt.",
    description: "You were either born with only one arm or lost your arm through an injury of some sort. You suffer no secondary-hand penalty, since you have adapted to using your one hand for most activities. When you need to use two hands, however, you lose two dice from your dice pool. For Garou, your running speed in Hispo and Lupus form is 1/2 of normal."
  },
  "One Eye": {
    dots: "2pt.",
    description: "You have only one eye — which eye is missing is up to you. The difficulties of all Perception rolls involving eyesight are increased by two, and the difficulties of all die rolls requiring depth perception are increased by one (this includes ranged combat)."
  },
  "Overconfident": {
    dots: "1pt.",
    description: "You have an exaggerated and unshakable opinion of your own worth and capabilities. You never hesitate to trust your abilities, even if situations where you risk defeat. Because your abilities may not be enough, such overconfidence can be very dangerous. When you do fail, you quickly find someone or something else to blame. If you are convincing enough, you can infect others with your overconfidence."
  },
  "Pacifist": {
    dots: "5pt.",
    description: "You utterly refuse to use violence against anything, even if your life or the lives of others are in immediate danger. Furthermore, you work hard to prevent others from using violence, though you do not recklessly endanger yourself or others to do so. You never carry weapons and refuse to procure them. A Willpower roll, difficulty 6, may be required to resist the temptation to engage in violence when a gross offense has been committed before or against you, such as a loved one being harmed. If you defy your nature and succumb to violence at some point, you cannot regain Willpower each morning until you come to terms with your lapse or you change your life philosophies altogether."
  },
  "Paraplegic": {
    dots: "6pt.",
    description: "You can hardly move without assistance, such as a pair of crutches or a wheelchair. Even then it can be painful and cumbersome to do so. The Storyteller and you should take care to roleplay this Flaw correctly, no matter how difficult it makes things. A character may not take this flaw along with the Merit Double-Jointed."
  },
  "Phobia": {
    dots: "2pt.",
    description: "You have an overpowering fear of something. Spiders, snakes, crowds, and heights are examples of common phobias. You must make a Willpower roll every time you encounter the object of your fear. The difficulty of the roll is determined by the Storyteller. If you fail the roll, you must retreat from the object."
  },
  "Poor Judge of Character": {
    dots: "2pt.",
    description: "You're the type of person who always ends up hanging out with the wrong crowd. Maybe you just like to date dangerous men or you're a sucker for a woman in trouble (or vice versa). Whatever the reason, you have a very hard time figuring out whom to trust. Increase the difficulty of all Awareness and Intuition rolls you attempt in social circumstances by two. Also, your friends and acquaintances tend to be sponges and other lowlifes."
  },
  "Poor Night Vision": {
    dots: "2pt.",
    description: "Your eyesight is poor in low-light conditions. Increase the difficulty of any action attempted in dim light, such as what a flashlight might provide or under starlight alone, by two."
  },
  "Poor Taste": {
    dots: "1pt.",
    description: "You wallow in bathroom humor, lowbrow jokes, and other practices that make more refined people uncomfortable. You've seen movies like Dumb and Dumber dozens of times, and don't plan on giving them up any time soon. Your sense of humor makes you an instant pariah in any reasonably cultured company, and you can't help but let your true colors shine through in even short-term social contacts. Add two to the difficulty of any Social roll that involves people who might not like your brand of humor."
  },
  "Sadism/Masochism": {
    dots: "2pt.",
    description: "You are excited either by causing pain or receiving it. In many situations, you will seek to be hurt or hurt someone for your pleasure. For a masochist (someone who enjoys pain), your soak roll difficulty for physical damage is increased by one because you really want to feel the pain. A sadist (someone who likes to hurt others) must make a Willpower roll (difficulty 5) to stop combat (modified depending on how much you are into the attack and how much you are enjoying hurting the other person). If you fail, you are so caught up in the event that you unaware of anything else happening around you."
  },
  "Shaky Hands": {
    dots: "3pt.",
    description: "You have a lot of trouble keeping yourself composed under pressure. In an extremely stressful situation such as combat, your hands shake so badly that you have trouble completing any tasks that require a delicate touch and intense concentration. Examples include picking a lock, loading bullets into a revolver or typing at a computer. Increase the difficulty of any rolls for such demanding activities by two."
  },
  "Short": {
    dots: "1pt.",
    description: "You are well below average height — four and a half feet (1.5 meters) tall or less. You have difficulty reaching or manipulating objects designed for normal adult size, and your running speed is one-half that of an average human."
  },
  "Short Temper": {
    dots: "1pt.",
    description: "You are easily driven to distraction by what would otherwise be minor failures and other frustrations. If you fail to gain any successes on any single roll during an extended action, increase the difficulty of all subsequent actions by one, cumulatively."
  },
  "Shy": {
    dots: "1pt.",
    description: "You are distinctly ill at ease when dealing with people and try to avoid social situations whenever possible. Difficulties for all rolls involving social interaction with strangers are increased by two. If the character becomes the center of attention in a large group, difficulties are increased by three."
  },
  "Slow Learner": {
    dots: "3pt.",
    description: "You always lagged behind in school, and even the most patient people find it frustrating to teach you the simplest concepts. You aren't dumb. It just takes you longer than most to wrap your brain around things. For the purposes of figuring out how many experience points it costs to raise an ability, add one to your current rating. Acquiring a new Ability costs four experience points, not the usual three."
  },
  "Socially Oblivious": {
    dots: "1pt.",
    description: "You have trouble picking up subtle hints from others. You often overstay your welcome at parties, and you tend to blurt out topics that everyone else takes great pains to avoid in conversation. You aren't a socially repellent person, just occasionally tactless. Add two to the difficulty of any Etiquette rolls you attempt."
  },
  "Soft-Hearted": {
    dots: "1pt.",
    description: "You cannot stand to watch others suffer. You avoid any situation that involves causing someone physical or emotional pain, unless you make a Willpower roll (difficulty 8)."
  },
  "Speech Impediment": {
    dots: "1pt.",
    description: "You have a stammer or other speech impediment that hampers verbal communication. The difficulties of all die rolls involving verbal communication are increased by two."
  },
  "Spiritually Noticable": {
    dots: "3pt.",
    description: "Only characters who possess either the Medium or Spirit Sight Merit or a similar power can take this Flaw. Spirits automatically notice that mages with this Flaw can always perceive them. Unlike the Spirit Magnet Merit or Flaw, Spiritually Noticeable characters are known to be able to interact easily with spirits. While most spirits will ignore you, wraiths who need aid in the mortal world, nature spirits who are upset with environmental destruction and odd spirits who merely want to talk to a human will flock to you. These spirits may be annoyed, or they may be honestly friendly, but they all want something from you.\nWhile having spirits frequently hitting you up for favors can be annoying, having them do so when you are involved in some potentially hazardous activity can be extremely dangerous. Many characterss with this Flaw either ward their dwellings against spiritual intrusions or make deals with one or more spirits to act as guardians."
  },
  "Stubborn": {
    dots: "1pt.",
    description: "Once your mind is made up, there's no changing it. You cling to your beliefs the way a pit bull does a leg, and you're about as pleasantly comported when others challenge you. You hate to be proved wrong and go to extremes to avoid enduring the shame of it. Increase the difficulties of all Social rolls by two when someone challenges your ways."
  },
  "Superstitious": {
    dots: "1pt.",
    description: "You adhere doggedly to a superstition, such as knocking on wood or tossing salt over your shoulder. Although everyone has foibles, you take your behavior to extremes, often tying misfortune to your inability to abide by some superstition, and crediting any success to your adherence to “the rules.” Your obsession doesn't lead you to risk your life, nor does it have a pervasive sway over you. You do tend to raise warnings and make superstitious suggestions frequently, though. Add two to the difficulty of any Social roll when dealing with people who know about your superstitious bent and who frown upon it."
  },
  "Technophobe": {
    dots: "2pt.",
    description: "You are severely intimidated by computer and other technology. You never use and ATM if a teller is available, and you get nervous at the sight of a keyboard. You must make an intelligence roll, difficulty 6, to perform even simple tasks on a computer, ATM or similar device. Increase the difficulty of any Computer or Technology roll by two."
  },
  "Tic/Twitch": {
    dots: "1pt.",
    description: "You have some sort of repetitive motion that you make in times of stress, and it’s a dead giveaway as to your identity. Examples include a nervous cough, constantly wringing your hands, cracking your knuckles, and so on. It costs one Willpower to refrain from engaging in your tic."
  },
  "Trusting": {
    dots: "1pt.",
    description: "You tend to follow your instincts when dealing with strangers. Sadly, your instincts often tell you that you can trust people. You want to believe the best about everyone you meet and tend to put yourself in situations that could be dangerous, such as accepting a ride home from a recent acquaintance, going home with a person you just met at a bar, or taking a stroll in a poorly patrolled city park after nightfall."
  },
  "Unlucky": {
    dots: "4pt.",
    description: "You've dealt with bad breaks all your life. From the true love who had to move across the country to the struggling Internet company you quit two months before it's billion-dollar IPO, you seem always to make the wrong moves at the wrong time. Once per game session, the Storyteller may increase the difficulty of a critical roll you make by two. If you fail he roll, it's due to some random, hard-luck factor. Your bad luck seems to crop up at the most inconvenient times."
  },
  "Vengeful": {
    dots: "2pt.",
    description: "You have a score to settle. You are obsessed with taking your revenge on an individual or group, and it is your overriding priority in any situation where you encounter the object of your revenge. You may temporarily resist your need for vengeance by spending a Willpower point."
  },
  "Wanted by Law Enforcement": {
    dots: "3pt.",
    description: "You are the prime suspect in a felony crime. The police actively look for you, and you cannot move openly about your usual hangouts. If you encounter cops who know that you're wanted, they'll call in backup and bring you in."
  },
  "Ward": {
    dots: "3pt.",
    description: "You are devoted to the protection of another. You may describe your ward, though the Storyteller will actually create her. Wards have a talent for getting caught up in the action of stories, and they're frequent targets of a character's enemies."
  },
  "Weak-Willed": {
    dots: "3pt.",
    description: "Your difficulties to resist Social abilities such as Intimidation or Leadership, as well as mind-altering spells or magic, are increased by two. Your Willpower Trait may never rise above 4."
  },
  "Wyld Mind": {
    dots: "2pt.",
    description: "Your mind is extremely chaotic and unpredictable. As a result you have difficulty concentrating on any one task. You must make a Willpower roll (difficulty 4) for ever extended action roll after the second."
  },
  "Youthful Appearance": {
    dots: "1pt.",
    description: "You look like you're still in high school. You always get carded at bars and often have to produce identification even to buy cigarettes. In order to gain entry to concerts, clubs or bars, or to purchase alcohol, you need to present a valid-looking ID."
  },
  "Anachronism": {
    dots: "4pt.",
    description: "There is something of a time lag in the Dreaming, explaining why ancient dreams still hold such power and why modern sensibilities have not monopolized the Dreamscape. Not only are you unfamiliar with the modern human world, but you're unwilling or unable to learn. Perhaps you merely think the old ways are best or perhaps you are just too strongly attached to dreams of the past.\n\nIn any case, you must spend double the experience points to buy any “modern” Abilities, no matter how long you have been in the Waking. This Flaw may not be taken by naraka."
  },
  "Animal Amnesia": {
    dots: "4pt.",
    description: "Most pooka can shift back and forth between forms without the slightest problem. You, however, have a challenge. Whenever you shift back from your animal mein, you forget everything that happened while you were in that form. It's as if you blacked out. Not a single memory makes it back through the change. While in your animal mein, you have complete awareness. However, once you change back into your changeling or mortal form, you forget it all. This is extremely disconcerting, worse than waking up after a particularly nasty drunk and not remembering that you took all your clothes off in the middle of the street."
  },
  "Animalistic Features": {
    dots: "1-3pt.",
    description: "The animalistic features so apparent in your faerie mein leak over into your mortal form as well. Over the years, you have developed characteristics that cause your mortal body to look somewhat odd. This might even give you away as a changeling to someone who knows the signs. In some cases, this may manifest as excessive hairiness, fang-like teeth, clammy skin, or even internal organs arranged in an odd manner. The higher the point value of the Flaw, the more noticeable and hindering the feature is to the fae."
  },
  "Arcadian/Ancient Oath": {
    dots: "2-5pt.",
    description: "Trolls, on the whole, take oaths much more seriously than most, and diligently fulfill their duties and obligations. However, due to the effects of the Mists, many oaths have been forgotten. Characters with this Flaw are bound to just such an oath. The strength and severity of the forgotten oath depends on the points taken. Though the Storyteller may allow hints and vague memories of this oath to the character in question, the actual discovery of its nature should be a great work. Should, for any reason, the oath become invalid, the character is obligated to buy off the Flaw, or have it replaced with another by the Storyteller."
  },
  "Aversion": {
    dots: "1-5pt.",
    description: "They say that redcaps can and will eat anything. In most cases, they're right, but a redcap with this Flaw is the exception who proves the rule. A redcap who has this aversion won't eat something (or a whole category of somethings, depending on the number of points taken for the flaw). One point might be an aversion to strawberries, while five would be something much broader, like meat, vegetables, or inanimate objects. A redcap who accidentally eats something he has an aversion to is in a great deal of trouble. A Stamina roll is required (difficulty 6), otherwise he'll immediately upchuck everything in his stomach. Furthermore, any time he wants to do something more strenuous than walk in the next half hour, a Willpower roll (difficulty 6) is necessary to see if another attack of nausea hits. Storytellers should take a great deal of care not to let this flaw be abused. It's very easy to pick up points with an aversion to, say, rutabagas or left-handed can openers. Aversions should be real and important, or at least worth the points received for them."
  },
  "Aversion to Clothing": {
    dots: "3pt.",
    description: "Like the brownies in the old stories, you can’t stand to wear clothes. It’s not that you’re a nudist or an exhibitionist; it’s just that after you wear clothing of any sort for long enough, your fae mien starts slipping away from you. Your fae mien is extra hirsute so you rarely get cold without clothing, but try explaining that to the local Duke, or better yet, the mortal authorities. While not wearing clothes, your appearance rating drops by one to those with enchanted sight and the difficulty for all social roles when in plain sight of others is increased by two, unless you are dealing with nudists. While wearing clothes you feel uncomfortable and ill at ease; for every week that you spend wearing clothes without being naked for at least one full day you gain a point of temporary banality."
  },
  "Babbling Brook/Long-Winded": {
    dots: "1pt.",
    description: "You have to comment on everything; you can't seem to stop talking. In highly stressful situations you may need to make a Willpower roll to fall silent."
  },
  "Banality Magnet": {
    dots: "4pt.",
    description: "Most Denizens have a high susceptibility to Banality, but you have it worse than most. Maybe your family was cursed by the Tuatha de Danaan, or maybe you are just easily addicted to beer and television. You attract twice the Banality of other Denizens and even in forms that don't normally attract Banality you accrue one point each day you fail to gain one success on a Glamour roll (difficulty equal to the local Banality). This Flaw may created great difficulties for a beginning character and the player should consider things carefully before taking it."
  },
  "Banished": {
    dots: "2-6pt.",
    description: "Because of some crime, real or imagined, you have been banished from your particular adhene. This Flaw has three different degrees of seriousness. Those with the two plint Flaw have been banished but there is some hope of return. Perhaps you have “merely” to fulfill some nearly impossible task in the Waking first. This level Flaw may or may not be enforced by any magic.\n\nWith a four point Flaw, not only have you been banished, but you wear some mark that allows your entire adhene to recognize you as an outcast. You may never return to any area inhabited by your people and even those of your race in the waking world may try to make your life miserable.\n\nFinally, the six point version of this Flaw means that a powerful Geas has exiled you from the Dreaming. This does not necessarily mean that you can never go into the Dream Realms, but only powerful magic will allow you temporary entry. (You may still enter freeholds in the Autumn World, however.) Further, not only are you banished, but actively hunted. Your fellow adhene will likely kill you on sight (or try to capture you for a reward), and even changelings and other adhene look askance at you."
  },
  "Bean Counter": {
    dots: "3pt.",
    description: "Most boggans consider a gift given freely to have no strings attached. Not you. From simple to extravagant, you're a bean counter. You must still answer the call of the needy, but there will always be a reckoning. A prepared meal may deserve a small thanks, or a home cleaned a modest tip. When not given, you must make a willpower roll (difficulty 6 and up, depending on the favor done) or spend the next day rearranging your schedule to make the ungrateful one regret it. A failure makes a simple pranking in order, where as a botch results in nastiness most would not predict in a normally pleasant-mannered kith."
  },
  "Blackmailed": {
    dots: "1-2pt.",
    description: "There is something in your past that you don't want to come to light and someone knows it. This person (or organization) demands outrageous sums of money or services and sensitive information in return for silence. This is a 1 point law if the secret is a relatively minor one that would merely cause great embarrasssment or personal inconvenience if revealed.\n\nA 2 point Flaw indicates a much more dangerous piece of information. Killing the blackmailer will probably only make matters worse, but if the player is sufficiently clever about turning the tables on the blackmailer (i.e. finding out one of his dark secrets) the Storyteller may decrease, or eliminate, this Flaw – at least temporarily."
  },
  "Blighted Face": {
    dots: "3pt.",
    description: "Throughout history, there have been legends of monstrous giants, as frightening in appearance as in strength and size. Characters with this Flaw are the stuff of such tales. Though individual appearance may vary, they will present a coarse, threatening appearance in both their mortal and fae seemings. Because of this, they will suffer severe social penalties in most situations, except for perhaps intimidation. In game terms, a penalty of +2 to the difficulties of all Social rolls should be imposed on the character, except with those who know him extremely well. The most conservative and 'proper,' whether changeling or human, will be more inclined to reject those with this Flaw. Note that this flaw is cumulative with other Merits and Flaws."
  },
  "Broken Voice": {
    dots: "2pt.",
    description: "Dogs howl when they hear you sing, and babies cry at the very sound of your speaking voice. You were blessed with a broken voice. Like the sound of breaking glass or grinding metal, your voice hurts people's sensibilities. Although you can still play an instrument with no problem, most people want you do not sing. It makes them cringe. A broken voice makes it difficult to woo your love. No one is going to fall for someone who sounds like fingernails scratching down a blackboard or a pencil trying to erase with no eraser. And the worse part is that you don't seem to notice what you sound like or view the reactions of people toward you. Anyone who tries to tell you that you have a disgusting voice draws your immediate ire. After all, it sounds perfectly fine to you. (The difficulty of all Charisma rolls is increased by +1 for these satyrs.)"
  },
  "Changeling's Eyes": {
    dots: "1pt.",
    description: "Your eyes are a startling color, maybe emerald green, violet, or yellow. This is a sign you are a changeling, recognizable to those who know the ancient lore."
  },
  "Chicken Claws": {
    dots: "3pt.",
    description: "Some legends of redcaps gift them with chickens' claws in place of their hands or feet. This condition is rare, but occasionally present among modern-day recaps, though any Kithain who suffers from this flaw is bound to be the subject of much derision from their peers. A redcap with chicken claws for hands is at a +1 difficulty for all Dexterity-based rolls involving manual dexterity, while one with chicken claws instead of feet is at the same disadvantage for all rolls related to dodging, running, and so forth. Note that the claws are rather more menacing than one would guess from their name – claws are claws, no matter what animal they came from."
  },
  "Chimerical Disability": {
    dots: "1-3pt.",
    description: "Part of your fae mein is damaged and no longer exists due to a past altercation. This disability is permanent. Examples of this Flaw would be a chimerical hand missing, therefore you cannot pick up chimera with that hand (two points). Your fae mein is missing one eye, therefore your view of chimera lacks depth perception (three points). One of your chimerical legs is missing; you can still walk, but it becomes extremely difficult to ride a chimerical creature (one point)."
  },
  "Chimerical Magnet": {
    dots: "5pt.",
    description: "For some reason, chimera notice you more often than usual. In some cases this is of benefit, but more often than not this Flaw causes problems. Chimerical beasts on a rampage will tend to turn on you before attacking others. Nervosa find you irresistable, and sprites of all types surround you constantly, often making you the butt of their harmless but annoying pranks."
  },
  "Cleared Mists": {
    dots: "3pt.",
    description: "The Mists are the effect of the Shattering on the human world. It cloaks the powers and enchantments of the Kithain, hiding their presence in its tendrils. Unfortunately, the Mists do not hide your magic or abilities. Should a mortal witness your actions, he will not forget the effects of your Arts or other fae abilities. As a result, you may reveal your nature to the mortal world, triggering dire consequences for the rest of the Kithain."
  },
  "Diabolical Mentor": {
    dots: "2pt.",
    description: "Your mentor is engaged in acts that could cause a tremendous uproar. She could be ignoring unabashed Unseelie activity or worse. Plenty of folks are after your mentor's hide, and you may be tarred with the same brush."
  },
  "Disbarred": {
    dots: "2-5pt.",
    description: "You have broken nocker prohibitions. Maybe you sold proscribed technology, failed to live up to a contract or mistreated one of your golems. In any event, your actions reflected badly on other nockers, and the Bes Din took your inventor license away. You may no longer practice your craft legally. The player and Storyteller should decide together what the character did and how serious the infraction was. If it was minor, you are only on probation; the Bes Din may eventually reinstate your license pending good behavior and special services on your part. You may be working off tour debt currently. The Storyteller decides when it has been paid off. This is a two-point Flaw. Nockers who have committed particularly heinous crimes may lose their inventor licenses forever. This is a five-point Flaw."
  },
  "Doormat": {
    dots: "5pt.",
    description: "Both fae and mortals think of you as a doormat and constantly take advantage your goodwill and generosity. Unfortunately, you have started to think of yourself this way as well. You must make a willpower roll to refuse any request made of you; difficulty depends on the nature of the request."
  },
  "Echoes": {
    dots: "2-5pt.",
    description: "Your connection to the Dreaming is stronger than in most of the Kithian. As a result of this powerful connection, you are more susceptible to the ancient wives' tales of things which traditionally affect faeries. While Echoes is purchased as a Flaw, it often has some beneficial side effects. The points received with this Flaw reflect the level of your connection to the Dreaming and even to Arcadia. You must have Storyteller approval in order to take this Flaw. The effects of this flaw are cumulative. A character with the five-point Flaw also suffers the setbacks of the two through four-point flaws.\n\nMinor: Salt thrown over the shoulder for good luck offers a mortal from faerie powers. The same is true of bread. Any mortal who does so cannot be affected by your cantrips in any way for the duration of the scene. You may physically hurt the person, but cantrips simply do not work, or worse, they may well backfire. Additionally, any mortal knowing your full name may command three tasks from you, which you must accomplish before you can be freed of that mortal's influence. However, you need only follow the exact wording of the mortal's request, not the desire behind the request.(Two points).\n\nModerate: You may not enter a home without an invitation, unless you perform some small favor for the owners of the dwelling. However, the invitation from the home may come from anyone at all, it need not be the owner. Cold iron in a residence will bar you from entering the place whether you are invited or not; religious symbols have the same effect. Religious symbols of any sort will prevent you from physically or magically hurting mortals. The sound of ringing church bells causes you pain, just as cold iron does (at this level there is only pain, but as a four-point flaw, the changeling gains one point of Banality for every turn he is forced to endure the sound). (Three Points).\n\nSerious: Four-leaf clovers in the possession of a mortal prevent you from using your Arts against that mortal for good r for bad. However, four-leaf clovers picked by you are sure to bring god luck (you cannot both, or perhaps you temporarily gain the favor of a powerful individual) for as long as the petals of the clover remain intact. The clover must be worn or carried in order for this luck to remain. Any mortal wearing their coat inside out is invisible to you. You may not cross running water, save by means of a bridge. Religious symbols are not repellent to you, forcing you away from those who wear them. The shadow of a cross falling upon your person causes one Health Level of chimerical damage for each turn the shadow touches you. You may no longer enter holy ground without suffering chimerical injuries (one Health Level per turn), though this damage may be soaked. (Four points).\n\nExtreme: Wherever you dwell, mushrooms tend to bloom in a faerie ring – even on your plush carpet. The Mists no longer hide your power. Many people will remember you if you use your Glamour while around them. Chimerical creatures tend to become more real for you than others, and their attacks can cause real and permanent injury. By the reverse, your chimerical weapons can cause damage to anyone, even mortals. People will likely follow you if you request it, often gaining a dazed look and following you even into dangerous situations. Your difficulties in casting cantrips might be reduced by a substantial amount (Storyteller's discretion), but those wearing cold iron or religious symbols are immune to any Arts you might use. You must make a Willpower roll (difficulty 7) to enter holy ground. Even if you succeed your Willpower roll, actual physical damage (one Health Level per turn) occurs whenever you enter holy ground. (Five points)."
  },
  "Environmental Need": {
    dots: "3pt.",
    description: "Some animals need special environments and wither when they leave them. Your affinity has this problem, and worse, it leaks over into your changeling mein. Fish need water. If you are a fish pooka with this Flaw, then you need water also. However, this doesn't mean that you have to constantly immerse yourself in water. You'd drown. Rather, what it does mean is that you must spend a large portion of your time in or near water. You feel its draw like a magnet. Perhaps you need to constantly drink fluids. Perhaps you shower ten times a day. Other environmental needs might include sunning, remaining in darkness, or having a 'shell' of some sort at all times. If deprived of your environmental need for more than 24 hours, you weaken and begin to take wound levels at a rate of one per day until you reach Incapacitated – at which point you slip into a coma of sorts until you get a taste of your element again. Note, however, that in the case of sunshine, a week of rainy days won't hurt you. Merely being outside will give you what rays you need, even though it's not a bright day."
  },
  "Eochaid's Curse": {
    dots: "3pt.",
    description: "Even more than usual, when possessing a human body you are bound to your host's psyche and must work toward any goals that she pursued before you possessed her. This is not absolute – you can also pursue your own agenda – but unless you do something to substantively further her welfare or desires (Storyteller's decision), you lose a point of Willpower per day no matter what method of possession you use. You cannot regain any Willpower until you have been out of the body for 24 hours."
  },
  "Forsworn": {
    dots: "3pt.",
    description: "At some point in your past, you were guilty of breaking an oath. Because you have taken the Oath of the Forsworn, you have managed to avoid the penalties normally incurred by your action, but you now stand amid those of your house who bear the label of Forsworn. This not only damages your reputation and honor, but it also prevents others from believing your promises. You are at a +2 difficulty to all social rolls involving attempts to persuade others of your sincerity or the validity of your word."
  },
  "Fortune's Fool": {
    dots: "4pt.",
    description: "All House Beaumayn sidhe must bear the weight of future events; a character with this Flaw, however, believes for one reason or another that she cannot affect the futures she sees. She might think it is a judgment from her particular deity, believe in predestination, or simply be a very fatalistic soul, but whatever the reason, she believes that events she sees in her visions are inevitable and cannot bring herself to act in ways that would alter their outcome. After all, what's the point? Even if a vision is later proved false, the character simply rationalizes it somehow (I must have seen it wrong) or even believes that some greater misfortune will befall her or the others responsible for “interfering” with the true course of events.\n\nAny actions whose success might directly lead to contradicting a vision the character has had are at a +2 difficulty, and actually initiating a plan to prevent a foreseen occurrence requires the Beaumayn to spend a point of Willpower."
  },
  "Foul Mouth": {
    dots: "2pt.",
    description: "All nockers cuss, but your use of profanity puts others to shame. Your mouth spews forth a never-ending torrent of obscenities. Even other nockers find you tiresome. They know when to shut up in court, and when enough is enough. You just keep going. You even have a hard time with short conversations on the telephone. Basilisk Stones shatter overnight in your hands. This flaw precludes you from ever holding a respectable job of any kind in human society."
  },
  "Geas": {
    dots: "1-5pt.",
    description: "You are under some kind of geas at the beginning of play, most likely a Ban, but possibly a long-term quest. This geas may be a family curse or a duty that you have inherited, or it may have been imposed on you by a changeling using the Sovereign Art. The difficulty of the geas determines how great a Flaw it is. Something minor, such as a Ban against harming animals or a requirement to occasionally give to charity would only be worth one point. The more difficult geasa are worth more points. A five-point geas is something that rules your entire life, like a Ban against sleeping in the same place more than one night or a quest that requires you to render aid to anyone in need you encounter. The Storyteller decides the exact value of whatever geas you may choose."
  },
  "Goblin Magnet": {
    dots: "2pt.",
    description: "Goblins really like you and want to be your pal. They show up late at night and get into your tools while you're trying to work. They think it's uproariously funny when they tell the duchess that you think she has a face like a horse. (Well, she does!) Things tend to explode around you. No matter how much you tell the goblins to furk of, they just laugh and want to hang out with you all the more. On the bright side, almost everyone else leaves you alone."
  },
  "Guileless": {
    dots: "2pt.",
    description: "While you enjoy the same expertise with manipulating others as others of your house, you lack one small tool; you cannot lie convincingly. Truth writes itself upon your face in large letters, for everyone to see. This makes it nigh impossible for you to evade the truth-sense of Gwydion's house when asked a direct question. Other attempts at subterfuge and guile are not affected. This is not a compulsion to be truthful; you can attempt to lie, you just do it badly. In game terms, you make any Subterfuge rolls that involve telling a blatant lie at +2 to your difficulty level."
  },
  "Gregarious": {
    dots: "1pt.",
    description: "Among the worse breaches of etiquette a sluagh can commit is spending too much time in the company of others. A Gregarious sluagh may win friends and influence other Kithain, but is likely to acquire a bad odor among others of her kind. If you are Gregarious, you will be ostracized by other sluagh, not invited to High Teas, and left unapprised of information that might otherwise be of use. Player, your Gregarious sluagh is at -2 on all social rolls involving other slaugh. And, no, you can't keep it a secret."
  },
  "Hag-Ridden": {
    dots: "4pt.",
    description: "Somewhere along the line, someone whom you wronged died. This wouldn't be so bad, except now she's a wraith and out to make your life a (brief) living hell. No matter where you go or what you do, your ghost will follow you and do her best to interfere. As you grow in power, so will she, and she won't rest until you're destroyed. The worst part of it, however, is that you can see her and everything she's up to, but most of the time, you're powerless to do anything about it."
  },
  "Hibernation (Inanimae)": {
    dots: "5pt.",
    description: "Every autumn you become listless and wan; with the arrival of winter, you fall into Slumber. You can only be active during the spring, summer and autumn months. To remain active during the winter, you must spend one Glamour per week."
  },
  "Hibernation (Pooka)": {
    dots: "5pt.",
    description: "Many animals hibernate. Some do seasonally. Other hibernate when the temperature drops below a certain point. You have inherited this urge from your affinity. Whether you do it seasonally, sleeping all winter long, or whether you fall into hibernation only when the temperature drops, this can be quite debilitating. If your hibernation is triggered by season, then you miss out on a full quarter of the year. Although you don't sleep 24 hours per day, you do sleep at least 20. Your body wakes you up just enough to eat and relieve yourself, but then you go right back to sleep. If it's rigged by temperature, then you risk sudden sleepiness and slowing of your physiology whenever cold. Temperatures below 40 degrees Fahrenheit will trigger your hibernation. You can mitigate this to some extent. Whenever you are supposed to be in hibernation, you may spend a Willpower point to remain awake for 24 hours. While this keeps you from dropping into a doze every few minutes, it doesn't leave you very alert. All rolls while in a state of suspended hibernation are made at a +2 difficulty (up to a maximum difficulty of 10). Further, you cannot initiate aggressive actions or combat, though you may respond to such. Once combat occurs, you react normally (but with the +2 difficulty penalty)."
  },
  "Hostage": {
    dots: "1-5pt.",
    description: "Whether out of paranoia or just ruthlessness, a noble holds you as a hostage to ensure someone's good behavior. You may be held in a dungeon or tower, or be allowed the run of a freehold. It's possible that you have no travel restrictions; the noble may have laid a geas or other curse on you, one that takes effect if he's attacked. Note that being a hostage doesn't necessarily imply mistreatment; a dead hostage is worthless. In fact, you may be treated quite well, and may even pick up some choice gossip or important secrets. But the threat is always with you, and using that information could be bad for your health. Point value varies; for one point, you'll get thrown in the clink if a certain troll ever shows his face at court, while five points means that if anyone ever attacks His Nibs, someone will march pu to your cell in the west tower and do something terminally nasty to you."
  },
  "Infamous Mentor": {
    dots: "1pt.",
    description: "Your mentor was, or still is, distrusted and disliked by many of your fellow changelings. As a result, you are distrusted and disliked as well. This is a heavy load, and one not easily shed."
  },
  "Insane Mentor": {
    dots: "1pt.",
    description: "Your mentor has completely lost his grip on reality, and has become lost to Bedlam or dangerously insane. Any wrong committed by your mentor may affect your reputation, and some of your mentor's dangerous schemes may somehow involve you."
  },
  "Iron Allergy": {
    dots: "3-5pt.",
    description: "Most of the kithain only suffer pain and Banality when in contact with cold iron. You suffer from actual wounds. Cold iron reacts like superheated steel when touching your skin. The very least you will endure is severe blistering. For each turn in contact with cold iron, you suffer one Health Level of chimerical damage. As a four-point flaw, you take one Health Level of real damage for every three turns in contact with cold iron. As a five point Flaw, you suffer this damage if you stand within a foot of the iron and you will take one Health Level of aggravated damage for every turn spent in contact with cold iron."
  },
  "Issues": {
    dots: "4pt.",
    description: "You have issues. Whether you're insecure, repressed, or slightly neurotic, or all three, your issues affect your life negatively. You haven't rejected the ideal of freedom, you just can't seem to live up to it. No matter how loudly you proclaim your dedication to the pursuit of happiness, you are too afraid to act on it. This fear can be crippling to a satyr. You are the poor love-lorn soul who can never find the courage to tell the person you love how you feel about her. You keep your emotions pent up inside and let no one know what you need or want. Perhaps your parents told taught you that you didn't deserve love or maybe you feel that others are entitled to that last piece of cake more than you are. Whatever the reason, these detrimental feelings keep you from what you most desire. You always let other have the spotlight first and take only what scraps they give you. Player, roll willpower to see if this satyr can assert himself and express his needs and desires."
  },
  "Jack o' Will": {
    dots: "3pt.",
    description: "The heady rush of taking Glamour directly from a human vessel can be too much for some Denizens to resist. You instantly became addicted to Ravaging, making you quite unpopular with the local Kithain. Even your fellow Denizens soon realized that you are sucking up more Glamour than your fair share. Further, no individual epiphany matches your memories of your earliest Ravaging experiences; you require more and more sensation to sate your desires, destroying more lives in your wake.\n\nWhenever confronted with a human Dreamer of any strength, you must make a Willpower roll (difficulty 9) or spend all your energies toward being able to Ravage him. You do not even care if this leads to a net increase in your Glamour; it's the experience that you crave.\n\nLed to greater and greater perversions, you take absurd risks to feed your addiction. Your Dioniae Aria gains +2 Willpower in all contests to assume dominance of your psyche and you may not buy the Merit: Change Aria. This is a pitiful state for a Denizen. If you work at it you may eventually free yourself of this addiction. Alternatively, local changelings may hunt you down like the mad dog you are."
  },
  "Judgmental": {
    dots: "2pt.",
    description: "You aren't as open-minded as a true ruler would be, and you form opinions about people quickly, The difficulty to detect if a person lies is raised by two, as you're inclined to trust your prejudices rather than your senses. What's more, if you fail, you must make an Intelligence + Empathy rolls (difficulty 6) or automatically assume that they're lying or telling the truth, whichever you're already inclined to believe."
  },
  "Lost Horizon": {
    dots: "3-5pt.",
    description: "It is in the destiny of Elegbara to wander, but your travels are severely limited. You are bound to remain within a partiuclar set of borders, and crossing their threshold immediately triggers a wasting condition identical to the oba Frailty, Native Soil. These boundaries must be very clear and specifically detailed to character and player alike. The value of this Flaw stems from how limited your horizons are. A large or diverse territory (such as the Northeast in the United States) is worth 3 points. A smaller area, such as a large state or several small ones, is worth 4 points. A ridiculously small area, such as a small state or a lone county within a larger one, is worth 5 points. Note that like the oba Frailty, this has no effect on traveling in the Dreaming; indeed, your character is likely to do so as often as possible to escape the tedium of the same mundane surroundings. This Flaw stems from a curse or an ancient Geas and cannot be undone except by truly legendary means. All Elegbara pity those poor souls who suffer from this Flaw; it is true that the oba have a similar vulnerability, but that is due to their natural duty fo the land, while your condition is generally a mystery or, worse still, a punishment for some terrible past crime. Storytellers should feel free to adjust the point value of this Flaw depending on how likely it is to have an impact on play. If the setting is going to be fairly static, decrease the value of this Flaw, whereas if it wil be likely to come up especially often, additional points might be warranted. Storytellers may also forbid this Flaw if having player take it severely disrupts their plans for their Chronicles. Oba cannot purchase this Flaw."
  },
  "Loudmouth": {
    dots: "3pt.",
    description: "Secrets? What secrets? If you've got a piece of information, you can't resist telling the world. As information is the kith's stock in trade, you're literally giving away the store every time you open your mouth. It's not that you mean to mouth off, it's just that you can't help yourself. (Player, make a Willpower roll, difficulty 8, to keep your sluagh from blurting out any secrets she knows). Of course, once word gets around that there's a blabbermouth sluagh in town, you can expect plenty of visitors – other changelings looking for the latest dirt and whatnot. Then again, folks may try to use you to spread false information, and you're certainly not going to be in the good graces other sluagh."
  },
  "Melody of Days to Come": {
    dots: "3pt.",
    description: "(See Melody of Days to Come [Merit])\n\nWhen this affinity is taken as a Flaw, the character receives no bonuses for ringing on visions and must also choose a specific motif. However, she can receive visions regarding that particular object or theme only, thus narrowing the scope of her gift considerably."
  },
  "Mentor's Resentment": {
    dots: "1pt.",
    description: "Your mentor dislikes you and wishes you ill. Given the smallest opportunity, your mentor will seek to do you harm, and may even attack you if provoked. Your mentor's friends will also work against you. Good luck!"
  },
  "Mortal Inhibition": {
    dots: "4pt.",
    description: "Something about your mortal mein makes it necessary for you to pass almost all of your time in your animal mein. Maybe you're on the FBI's Top Ten Most-Wanted list, or maybe you are a child who should be in school. Perhaps you have a horrible birth defect that makes people stare at you in horror whenever you go out in public, or perhaps you have changeling features that put both you and the Escheat at risk. Whatever the case, you find it much easier to stay in your animal form the majority of the time. This produces many problems for you, the least of which is communication, but it's not nearly so bad as what happens when you take on your changeling or mortal form."
  },
  "Mystical Prohibition or Imperative": {
    dots: "1-5pt.",
    description: "There is something you must or must not do, and your life, your luck, your magic and perhaps your very soul depends on it. It may be something that has always been upon you, a geas prophesied by Druids at your birth, a sacred oath or vow you swore, or a promise or bargain you made. Someone (with a capital S) witnessed it and is going to hold you to it. If you disobey, the consequences will be dire, if not deadly. Characters may have several magical prohibitions or imperatives, and these may come into conflict. In Celtic myth, Cuchulainn had the geas to “Never refuse hospitality” and “Never eat dog meat.” Three hags once offered him roast dog for dinner, and Cuchulainn died soon after. Consequently, most changelings keep their magical prohibitions and imperatives secret, lest they be used against them by their enemies. Storytellers should examine each prohibition or imperative and assign a point value to it, as well as the punishment for avoiding it. Easily avoided circumstances, such as “Never break bread with a red-haired man,” are worth one point, while more common, or difficult, things, such as “Stop and pet every cat you see,” are worth two points, and particularly drastic or dangerous circumstances, such as “Never back own from a fight,” are worth three (or more) points. Consequences are worth points as well. Automatically botching the next major cantrip you do is worth one point, having bad luck for the rest of your life is worth two, losing all your friends and worldly possessions is worth three, dying is worth four, an being deserted by your faerie soul five. Characters and Storytellers may come up with variants of these. Traditionally, there is very little that may be done about geas, which are simply facets of one's destiny, and curses are devilishly hard to lift (and the Flaw must be bought off if they are). Characters who accidentally violate them may attempt to atone for their crime, fixing whatever they did wrong. A witch who has vowed to never eat any red meat, and then suddenly finds beef in her soup, might be able to atone for the trespass by fasting and sending checks to PETA. However, if a changeling violates an oath willingly and with full knowledge – and survives – he becomes an oathbreaker, one of the foulest epithets among changelings. Oathbreakers are psychically marked. It is virtually impossible for hem to find a tutor or any sort of aid. Characters who wish to begin as oathbreakers should take the flaw Dark Fate or some curse, as well as Oathbreaker, which is worth four points."
  },
  "Natural Urge": {
    dots: "2pt.",
    description: "Animals do lots of things that would be very odd if humans or changelings did them as well. They have urges. You have these urges as well. This could be a disturbing taste for raw meat, a desire to chase cars, an unconscious habit of licking yourself, an impulse to search your friends' hair for parasites, or a predilection for attacking weaklings. Whatever natural urge you have, you do it without thinking. It's part of you and only by spending a Willpower point can you avoid the urge for an hour when in a situation where you would normally feel the urge."
  },
  "Nature Bound": {
    dots: "2pt.",
    description: "Legends are full of incidents concerning the connection to nature and strength; this Flaw represents the negative side of that link. Characters with this Flaw take their strength from contact with nature, and weaken when removed from it. In game terms, characters are at no penalty when in natural surroundings, yet subtract one die from all actions when in unnatural settings. For purposes of this Flaw, cities, wastelands, and the like are not considered natural. Characters with this Flaw should consider careers as park rangers, farmers, and the like, or as live as close as possible to a large park."
  },
  "Nemesis": {
    dots: "5pt.",
    description: "Maybe you're the reincarnation of some ancient hero or maybe you just have rotten luck, but whatever the reason, you've inherited a true nemesis, an opposite number determined to do you some serious harm or even destroy you. This feud falls outside the scope of the regular Enemy or Hunted Flaws because it represents something more cosmic. Not only does this individual hate you and actively seek to do you harm, but the two of you seem to have been specifically designed to be enemies, an your confrontations bear testament to it. Your foe is nearly telepathic at anticipating your next move, and both of you always seem to have an answer for each other's best tricks or strongest powers, forcing a constant struggle to come up with some new way of surprising each other. Both of you know it will never end until one of you is put out of the picture permanently. The Storyteller is responsible for creating this character and is under no obligation to reveal her full powers and potencies. Optionally, you may begin the game not knowing of your nemesis, but rest assured, the Storyteller will have you make her acquaintance before long."
  },
  "Outcast": {
    dots: "2pt.",
    description: "Unlike the banished, you are still nominally part of your adhene's culture, but you occupy its very lowest rung. You may be a bottom-feeder at the fringes of a fir-bholg army, a Pariah among the naraka or the worst sort of kitsch artist among the muses. Those above you think little of insulting or demeaning you and your legal status among your own kind is debatable, though they rarely attack you outright. Other Dark-kin may take pity on you, but are likely to see you as inconsequential."
  },
  "Pack Mentality": {
    dots: "1pt.",
    description: "Your attachment to your pack far exceeds healthy limits. You not only want to be part of a pack, you need to be. You go to extreme lengths to protect your pack, even to the point of sacrificing yourself, and if you find yourself without a pack, you join up with the first hat accepts you. You stress hard when left alone. You don't, however, have to be a follower in the pack, you could just as easily be the leader who needs more than anything to have a group to oversee. If you've lost your old pack, spend a Willpower point to put off joining the first pack you find – even if they seem inimical to your own ethics. You must do this for a number of days equal to the number of failures (ie, the number of 1s rolled) on an Intelligence roll."
  },
  "Paranoia": {
    dots: "2pt.",
    description: "Coming through the Mists wasn't easy for you. You are suspicious of everything and everybody. These humans are everywere and possess strange and provocative powers. No wonder they're destroying the Dreaming so easily – it's a plot! The changelings are in on it too, turning themselves into some sort of demi-humans to further the cause of Banality. You'd call your friends for help, but what if they're in on it too? Characters with this Flaw are at +1 difficulty to all Social rolls."
  },
  "Parfum de Goat": {
    dots: "4pt.",
    description: "The goat musk is a unique, horrific scent that makes the eyes water. You are a walking, breathing sachet of smelly goat. You're not sure if it's glandular, but you do know that it's not because you never bathe. You know plenty of satyrs who never wash themselves and they don't smell like you do. Actually, you've grown so accustomed to your own odor that you never even notice it. Unfortunately, everyone else does, and they let you know about it. Only the most socially anal-retentive of the sidhe can pretend that it doesn't bother them, although most don't care whether they hurt your feelings or not. Satyrs themselves are not bothered by your musk. However, all the other kith, with the exception of redcaps, who are equally offensive themselves, refuse to stay in the same room with you. This banishment of a sort hinders greatly your chances for romance, for acquiring a title, or even just chatting with the other changelings. Your stinky goat is at a +2 difficulty on all Social rolls kith other than satyrs."
  },
  "Pig-Pen": {
    dots: "2pt.",
    description: "You have a nasty habit of leaving dirt and dust in your wake. Wherever you go, you leave a faint but noticeable trail of detrius. This grit looks like the same material as your Anchor."
  },
  "Polluted/Defaced": {
    dots: "1-3pt.",
    description: "Your Anchor has been damaged, either indirectly by pollution (acid rain, industrial dumping, smog, etc.) or directly by human action (graffiti, construction, etc.). This affects you by maing you sickly and week. For each point of this flaw you have bought, remove a die of soak dice."
  },
  "Procrastination": {
    dots: "3pt.",
    description: "Distraction comes in many forms and satyrs often want to do everything at once. Unfortunately, there is only one of you. You've never heard of the concept of time management, so you skip from one project to the next as your fancy dictates. And hen an important obligation comes along, you flit off to have fun rather than perform your duty. That party at your friend's house place seems so much more interesting than polishing your mentor's sword – you can do that tomorrow. There will be plenty of time for that tomorrow. But that elusive tomorrow never comes and the task goes shoddily unfinished. Yet, to your credit, you had a damn good time at the party. (You must make a Willpower roll any time your character must choose between duty or fun to see which she chooses.)"
  },
  "Psychic Vampire": {
    dots: "5pt.",
    description: "The spark of life is dying within you, and you must be continuously fed from outside forces. You are a psychic vampire. Plants and insects wither or die in your presence as you feed on their energies, and any person you touch for more than an hour will suffer one non-aggravated Health Level as you siphon away his life. Those already injured (including those whose Bruised Health Level has been sucked away) will not heal while in your presence. You can still be in the same building without harming someone, but sharing a bed is not possible unless you want the other person to slowly die. If you do not feed the emptiness within yourself at least once a day, you will begin to die. The rate at which you take wounds follows the progression for natural healing in reverse: you take a Health Level after one day, a second in three days, a third in a week, a forth in a month, and finally, one wound every three months."
  },
  "Pyromania": {
    dots: "5pt.",
    description: "You must set fires. You cannot stop yourself. You almost get a sexual thrill from watching flames. To avoid setting fires you must make a Willpower roll each morning. If you fail, you will set at least one fire that day. This is a very dangerous flaw, and will eventually get you in trouble with mortal law-enforcement."
  },
  "Recluse": {
    dots: "3pt.",
    description: "Above and beyond slaugh aversion to companionship, you have a phobia when it comes to others. It takes a real effort (Willpower roll, difficulty 6) for you to even come out of your lair, and another one every day to keep you from scuttling back in. You're most comfortable at home, and generally don't let others see you, preferring to remain behind curtains or one-way glass. Whenever the sluagh is in the company of more than one person, you are at -1 on all rolls unless you make a Willpower roll (difficulty 5)."
  },
  "Sell-Out": {
    dots: "2pt.",
    description: "Other Kithain see you as a sell-out, a suck-up, a traitor to your kith or just a sidhe loving SOB. It may not be true – you may be fulfilling an oath or geas, or you may be a deep cover mole. Characters with this Flaw are at the +2 difficulty on social rolls when dealing with other commoners (the Storyteller may increase the difficulty when dealing with commoners who are especially anti-noble). Other sell-outs may treat you better, but more than likely they won't, since you're probably competing with them."
  },
  "Sexual Hang-Up": {
    dots: "5pt.",
    description: "The other satyrs are out in the weeds romping on Beltaine, but you're sitting alone by the fire because you can't seem to get over your aversion to sex. This repugnance can manifest in several ways. It may not be every aspect of sex that bothers you, but because certain standard acts really turn you off, you're afraid to even ignite something. You may find a partner willing to accommodate your 'special' needs, but even then, you never quite get over the fear that she is telling everyone about your hang-ups and they are all secretly laughing at you. Sometimes it's just easier to remain celibate. To your horror, your tragos-mates will try to fix you if they discover your problem. Explaining that you don't want their help can be disconcerting, at best. If your inhibition is severe enough, you might find yourself ostracized. The tragos won't tick you out, but they'll quick inviting you to their parties and gatherings. After all, why would they want a party-pooper like you around?"
  },
  "Short Attention Span": {
    dots: "2pt.",
    description: "Much of a sluagh's time can be spend pouring over complex problems, separating informational wheat from chaff. This requires time, effort, and most of all, patience. Unfortunately, with Short Attention Span, patience is something you have in short supply. You bounce from idea to idea and project to project, never finishing on before starting the next. Even if you're promised to complete work for someone else, you never quite seem to be able to get around to it, particularly when there are so many more exciting things to which you could devote yourself. (Alas, each of these eventually pales, and you're left with a string o unfinished pieces, which depresses you so much that you want to wipe the slate clean and start on something completely new…) For a slaugh with Short Attention Span to finish a piece of work that cannot be done at a single sitting, the player must make a Willpower roll (difficulty 6); otherwise the necessary work will be left undone. This roll must be made every time the project in question is returned to. A sluagh with this Flaw will be treated like a child by others of her kith. A sluagh without the patience to watch is no real sluagh at all."
  },
  "Shrinking Violet": {
    dots: "2pt.",
    description: "Trolls are known to be close-mouthed and silent, particularly when they are not among their own kind. For most of the kith it is a matter of choice, but for those possessing this Flaw, is goes much deeper. Trolls who are Shrinking Violets are only comfortable with their own; with everyone else they are constantly aware of the differences between them, and are consequently ill at ease. This manifests as clumsiness (fear of breaking things and people), difficulty speaking in social situations (only able to speak of things as they are), etc. In game terms, characters with this flaw add +2 to all difficulties of Social rolls when not primarily among other trolls."
  },
  "Sidhe's Curse": {
    dots: "5pt.",
    description: "The sidhe live in mortal terror of Banality, due to the fact that it can take root in their souls much more easily than any other of the kith. Unfortunately although you are not sidhe, you are subject to this frailty as well. You gain two points of Banality for every one given by the Storyteller. Sidhe characters may not take this Flaw."
  },
  "Slipped Seeming": {
    dots: "1-5pt.",
    description: "Your fae seeming blends into your mortal seeming and makes you obvious to those mundanes who know what to look for. A one-point would be a slight bluish cast to the skin of a troll, and a five point would be a pair of satyr's horns. This may make it difficult to explain yourself to mortals: “Ah, my friend..obviously got his head caught in a mechanical rice-picker, and fortunately there was a skilled plastic surgeon nearby…” This Flaw does not give you the benefits of certain portions of your fae mein (Goats legs will not allow you to run at advanced speeds, etc.)"
  },
  "Stolen Tooth": {
    dots: "3pt.",
    description: "Another one of the long-standing redcap legends ascribes a rather unique weakness to the kith: A redcap can only be killed if one of his teeth is smashed on an altar stone. Many brave (and not terribly intelligent) souls attempted to prove or disprove this theory; most instead proved the parallel theory that anyone seeking something from a redcap's mouth is unlikely to be coming home. However, certain redcaps have managed to lose, one way or another, one of their teeth. Will the redcap be destroyed if the tooth is shattered in an appropriate place? Who knows, but what is certain is that any redcap possessing this flaw will do anything to get his tooth back. Retrieving the tooth takes precedent over any other activity to the point of mania. Why? Because those old legends might just be right after all."
  },
  "Swarthy": {
    dots: "1pt.",
    description: "All satyrs are hairy, right? Well, you take the cake. Not only do you have hair on your legs and hips, but it grows profusely over your whole body. Your chest is a thick carpet of curls. Dark waves of hair cover your arms. A pelt covers your belly and even your back. Many find this revolting – especially on women. Yet, female satyrs don't have to worry about their faces. For male goats, however, your beard grows so quickly that you've given up shaving; because by the time you get to the left side of your face, the right side has a five o'clock shadow. But, at least you never have to worry about male pattern baldness. Only in the rarest occasions does this Flaw extend completely to the satyr's mortal seeming. You may have monkey arms or a full chest of hair, but only in the most extreme of instances does the hair growth seem abnormal. Satyrs with this flaw make all rolls related to Appearance at an increased difficulty of +1."
  },
  "Surreal Quality": {
    dots: "2pt.",
    description: "Though the Mists still protect you from mortal detection, there is something about you that mortal find fascinating. At inappropriate times, they will stare at you and strike up conversation in hopes of getting to know you better. Worse still, those mortals who are of less savory nature will choose you over other potential targets for their illicit acts."
  },
  "Teddy Bear": {
    dots: "1pt.",
    description: "Something about you screams harmless. Any attempt to intimidate is at +2 difficulty. This can sometimes be a benefit, as people ignore you. People aren’t fools however, and even teddy bears with swords will be dealt with quickly as threats."
  },
  "The Bard's Tongue": {
    dots: "1pt.",
    description: "You speak the truth, uncannily so. Things you say tend to come true. This is not a facility for blessing and cursing, or an Effect that can be ruled by any conscious control. However, at least once per story, an uncomfortable truth regarding any current situation will appear in your head and through your lips. To avoid speaking prophesy, you must expend a Willpower point and take a Health Level from the strain of resisting (especially if you bite a hole in your tongue)."
  },
  "Throwback": {
    dots: "1-5pt.",
    description: "One or more of your past lives has affected you – badly. Their fears come back to haunt you in your dreams, and you have flashbacks of their worst memories (such as their death, or, even worse, a personality that encroaches on your own). For bad dreams or flashbacks, take one to two points depending on the severity of the condition and how much it will affect your studies or performance in dangerous situations. For a 'roommate in your head,' take three points (whether you know he exists or not). For the package deal and a truly miserable experience, take five points, but expect the Storyteller to take every opportunity to use these against you. This Flaw can be 'worked off' during the course of play, but only with difficulty."
  },
  "Troglodyte": {
    dots: "1-4pt.",
    description: "You are a throwback to the original goblins and are used to life underground. Bright lights bother you, and it's difficult for you to see in situations involving anything brighter than firelight. If you have the one-point Flaw, you are merely sensitive to bright lights; the difficulty of all Perception rolls based on sight are increased by two in situations involving sunlight. This difficulty is lowered by one if you wear dark glasses. If you have the four point Flaw, you are a true troglodyte. Your eyes are luminous saucers in your fae mein. Light hurts your eyes, and gives you a splitting headache. You are completely blind in any surroundings brighter than firelight, though you can see if you wear extremely dark glasses. Even with such protection, the difficulties of all activities involving sight under such circumstances are increased by three."
  },
  "Twisted Apprenticeship": {
    dots: "1pt.",
    description: "Your mentor was quite malevolent and taught you ll the wrong things about Kithian society. Your concepts of changeling politics are all wrong, and your faulty beliefs are likely to get you in a great deal of trouble. Over time, after many hard lessons, you can overcome this bad start (the Storyteller will tell you when). But until then, you will continue to believe what you were first told, no matter how others try to 'trick' you into thinking otherwise."
  },
  "Water Under the Bridge": {
    dots: "5pt.",
    description: "Rivers and streams flow endlessl to the sea, and so does your memory. Every day you awaken, remembering nothing that happened the day before. To recall what happened to you, you must make a Willpower roll."
  },
  "Winged": {
    dots: "2pt.",
    description: "You have beautiful wings, be they feathered bird's wings or batwings or colored butterfly wings. They are chimerical, but they need to be free, or they will subtract one die from Dexterity rolls. You may have to explain why you have cut slits in all your coats. If you have taken this as a Flaw, you will not be able to fly, but you do get an extra die if you are the recipient of the cantrip Wind Runner (Wayfare 3). This power works as any other use of Glamour when only Kithain are present, but will not work in the presence of mortals."
  },
  "Wishy-Washy Ways": {
    dots: "3pt.",
    description: "Your satyr lifestyle involves making snap decisions on a regular basis. When you're given an opportunity, you'd better act quickly or it might just pass you by. Yet, you can seem to make up your mind fast enough; it takes you a while to sort through all the options, examine the pros and cons, and then decide which is the best decision. You are indecisive to a fault, and you want to discuss the problem with someone more intelligent before you commit. Intense situations, where the action is fast-paced, confuse you and the result is you usually standing around in the middle, with a lost look on your face. This attribute frustrates your fellows and sometimes lands you in dangerous situations. (You must make a Willpower roll whenever your character must make a decision, otherwise your character remains undecided about what to do.)"
  },
  "Yearning Soul": {
    dots: "2pt.",
    description: "You feel the pull toward romance much more strongly than other trolls, and desperately need some aspect of it in your life. You will fixate your attention on the most attractive fae or person in any given situation, though your reactions will vary, depending on your character. You may pine from afar, behave like an eager puppy desperate for approval, attempt to impress the object of your affections, etc. Note that, should you only be in the company of those you would not normally be interested in, you will begin to lower your standards; your desire and need for romance is that strong, even if it leads you to a crush on a sluagh. This Flaw should be strictly roleplayed, and the Storyteller may see fit to impose dice penalties depending on the circumstances."
  },
// Werewolf Flaws
  "Ability Deficit": {
    dots: "5pt.",
    description: "Whether due to poor education, lack of opportunity, or simple laziness, you’ve fallen short of your potential. You have five fewer points to distribute in one of your Ability categories: Talents, Skills, or Knowledges. Therefore, the most you could initially take in that category would be eight points, and the least would be zero. Of course, you can still spend freebie points to take Abilities in the affected category. However, you cannot have any Ability in that category at three dots or higher at the start of the game. This Flaw is particularly appropriate to lupus characters that have yet to learn much about life as Garou."
  },
  "Animal Musk": {
    dots: "1pt.",
    description: "You have the odor of an animal, even in Homid form. Whenever you are indoors or in a crowd of people, you make all Social rolls at a +2 difficulty. Outdoors or in situations where you can distance yourself from humans, your odor is not noticeable. Wolves (and lupus-born Garou) take little notice of this Flaw."
  },
  "Anosmia": {
    dots: "1pt.",
    description: "Whether from birth or due to some illness or accident, you’ve lost all sense of taste and smell. You automatically fail any roll involving these two senses, including Primal Urge rolls for tracking or hunting. In Lupus form, it’s even more crippling, since smell is a wolf’s most acute sense; this Flaw cancels out the –2 difficulty to Perception rolls a Garou gets in that form. There’s a slight benefit, however: At the Storyteller’s discretion, you may be immune to the debilitating effects of environmental conditions, Gifts and supernatural abilities that rely on odors."
  },
  "Banned Transformation": {
    dots: "1-6pt.",
    description: "Some circumstance, event, or situation inhibits your ability to change forms, except to return to your breed form. To overcome the restricting factor requires the expenditure of a Willpower point and a successful Willpower roll (difficulty 8). Some examples of triggers and their relative point costs include:\n\nRelaxing music (1 point)\nIn the vicinity of wolfsbane (2 points)\nUnless you spend a Rage point (3 points)\nWhen around silver (4 points)\nDuring the day or during the night (5 points)\nWhen the moon is not visible (6 points)"
  },
  "Barren/Sterile": {
    dots: "4 pt.",
    description: "For Kinfolk who serve werewolves as perpetuators of the species, inability to reproduce is a serious Flaw indeed. Not only does it carry a social stigma, it may also incur abuse, neglect, or even exile. Kinfolk who can’t reproduce lose a great deal of their value in Garou eyes. For obvious reasons, vampire and wraith who were Kin can’t take this Flaw."
  },
  "Camp Enmity": {
    dots: "1pt.",
    description: "You have earned the attention and disfavor of a particular Garou tribal camp. Perhaps you’re a former member of the camp, or have refused to join them and they feel slighted. Perhaps they feel you’ve done them wrong, or the camp you are a part of is ideologically opposed to what they stand for. Regardless, all Social rolls when interacting with that camp are made at +1 difficulty. You may not already be a member of this camp when you first take this Merit, although you can become recruited (or re-recruited) into the camp during play at the Storyteller’s discretion. You may take this Merit multiple times for different camps. Storytellers are encouraged to incorporate Storyteller characters of the appropriate camp into their storylines, so as to make this a meaningful Flaw."
  },
  "Docile": {
    dots: "1-3pt.",
    description: "Your distance from “the wolf” dampens the fires of Rage within you, hampering your ability to access them in Gaia’s service. For every point of Docile you take, your maximum Rage is lowered by 2, and can never be bought above that level. Others may see you as “domesticated” or “more dog than wolf” and react with derision."
  },
  "Double Jeopardy": {
    dots: "3pt.",
    description: "Gaia has marked you strongly. You were born not with one, but two significant metis deformities. These may be related, but must be two clearly separate disfigurements. A pair of antlers, or two rows of shark teeth would only be one deformity, but antlers and hooves, or a row of shark’s teeth and a set of gills would be acceptably different. The Storyteller has the final judgment on whether the two deformities are significant enough to qualify for this Flaw. This flaw can be taken only by metis Garou."
  },
  "Foe from the Past": {
    dots: "1-3pt.",
    description: "You have inherited an enemy, not because of anything you’ve done, but because one of your ancestors incurred his wrath. The strength of the enemy determines the point value of the Flaw.\n\n(1 point) A werewolf hunter whose parents were killed by your forebear.\n(2 points) A mage whose mentor suffered at the hands of one of your ancestors.\n(3 points) A powerful vampire or spirit creature who has sworn a vendetta against your family line. You should work with the Storyteller to come up with a logical backstory surrounding your ancestor’s enemy, since encounters with your foe may provide an ongoing story arc for your chronicle. You must possess the Ancestors Background to take this Flaw."
  },
  "Forced Transformation": {
    dots: "1-2pt.",
    description: "Certain circumstances force you to undergo an uncontrollable shift in form. You may resist the change by spending a Willpower point, but once you have made the forced change, you may not change back until the triggering situation has passed. You may use the following examples or design your own circumstances and point costs (with Storyteller approval).\n\nThe full moon forces you to assume your Crinos form. (2 points)\nYou automatically change to Crinos when your auspice wanes (2 points)\nSexual arousal stimulates a forced change (1 point to Glabro; 2 points to Crinos; 2 points to Homid if you are a lupus)"
  },
  "Harano Prone": {
    dots: "4pt.",
    description: "Characters suffering from this Flaw are prone to bouts of deep depression, indolence, and mood swings. You must make a Willpower roll every scene in which you suffer some form of setback. If the roll fails, you fall into a bout of temporary Harano. You may become morose and inactive, or suddenly spring into self-destructive activity. Your perceptions go awry, causing you to lose a die from every dice pool. If you botch the Willpower roll, you also acquire a temporary derangement (see below). You may delay the Harano attack for a single scene by spending a Willpower point."
  },
  "Inferiority Complex": {
    dots: "1 pt.",
    description: "Nope, you’re not worthy. Never have been, never will be. In situations requiring you to take charge or be personally responsible, all your difficulties are raised by one."
  },
  "Insane Ancestor": {
    dots: "1pt.",
    description: "An insane ancestor of yours occasionally takes over when you seek help from the spirits of your forebears. Usually, this ancestor appears only under certain common circumstances, such as when Black Spiral Dancers threaten you or whenever a certain common rite is performed in your presence. When the Storyteller deems this circumstance has come about, roll your Ancestors Background, difficulty 6. Any successes indicate that your ancestor takes control of you for the scene, or until someone recognizes what is happening and manages to convince him to relinquish control once more. You should create your ancestor, name him, and describe his madness. You may spend a Willpower point to stifle the ancestor-spirit for the scene. You must purchase the Background: Ancestors to take this Flaw."
  },
  "Mark of the Predator": {
    dots: "2pt.",
    description: "You give off emanations of a predatory nature. Herbivores shy away from you, while carnivores see you as a potential threat and may offer challenge. You may not possess the Skill: Animal Ken."
  },
  "Metis Child": {
    dots: "4pt.",
    description: "You begin play as the parent of a metis cub from an illicit relationship with another Garou. You need to decide the circumstances surrounding the birth of the child —who the other parent is, when this happened, if you are currently attempting to raise the child in your own sept, or if the cub was fostered out to another sept to avoid further embarrassment. The effects of this Flaw include a two dice penalty to any Social rolls made regarding Garou who know of your child, as well as the additional burden of being required to take responsibility for your cub’s welfare (you miserable charach). As a Litany-breaker, you will probably be unable to hold any important sept offices or be trusted with important tasks, no matter how much you strive to prove yourself. Metis characters cannot take this Flaw. If a character sires or bears a metis cub during the events of the chronicle, the penalties of this Flaw may apply, but no bonus points are granted for it."
  },
  "No Partial Transformation": {
    dots: "1pt.",
    description: "You have no ability to mix forms; you cannot shift your larynx in Lupus to be capable of human speech, or grow a wolf’s muzzle in Glabro. You can only change into the complete form."
  },
  "Outsider": {
    dots: "2 pt.",
    description: "Because of rumors (true or not), an ill-done deed, poor decision, or some other character flaw, you have a poor reputation among Kinfolk and Garou. They don’t necessarily hurt you, but they let you know you aren’t welcome in their camps or homes. Make all Social rolls involving interaction with werewolves and Kin at +2 difficulty."
  },
  "Pierced Veil": {
    dots: "3pt.",
    description: "Unlike most Garou, your Crinos form does not trigger the Delirium in mortals. This makes you particularly vulnerable to werewolf hunters, who may find it less difficult to pursue you back to your caern, putting the members of your sept in considerable danger."
  },
  "Persistent Parents": {
    dots: "2pt.",
    description: "Most werewolves, unless they have Kinfolk parents, sacrifice their family ties after their First Change, in order to protect the Veil. Your parents, however, have not given up on you. They may hire detectives to find you, plaster posters with your picture on it around town, pester radio and television stations to run public service ads, or dedicate websites and utilize social media to recruit the aid of the internet in order to try to find you. They may be ignorant of your new life, suspecting instead that you have run away, joined a cult, or been kidnapped. They may instead have ties to Pentex or other organizations with ulterior motives in locating you. Only homids may take this Flaw."
  },
  "Short Fuse": {
    dots: "2pt.",
    description: "You are closer to the Wyrm than most Garou; your Rage burns hotter within you than most. Your difficulty for Rage rolls is decreased by two, and you fall more readily into the “thrall of the Wyrm.” Be careful when choosing this Flaw; it can bring worlds of trouble down upon you and your pack."
  },
  "Sign of the Wolf": {
    dots: "2pt.",
    description: "The folklore of werewolves holds true as far as you’re concerned. Like the shapechangers of myth and legend, you possess eyebrows that meet in the middle of your forehead, hair grows on the palms of your hands, and the second and third fingers of your hands are the same length. You may even manifest a pentagram on your palm before and during your auspice’s phase of the moon. While most people may simply wonder at these bizarre physical manifestations, werewolf hunters who notice these signs suspect your true nature."
  },
  "Slip Sideways": {
    dots: "1pt.",
    description: "You find it difficult to control travel between the physical world and the Umbra, sometimes entering the spirit world when you don’t intend to. When stressed and near a reflective surface, you must roll Wits + Occult (difficulty 7) to avoid shifting into the Umbra unintentionally. In order to overcome the Gauntlet, you must still roll your Gnosis, but the difficulty is 1 less than usual. If you deliberately try to step sideways, you do so at the normal difficulty."
  },
  "Strict Carnivore": {
    dots: "1pt.",
    description: "“Vegetarian” is just another way of saying “lazy hunter.” Vegetables and grains give you no nutritional benefit; you can only subsist on meat — the closer to raw, the better. You have real problems in areas where meat is scarce."
  },
  "Taint of Corruption": {
    dots: "7pt.",
    description: "Somehow, the Wyrm has touched you and left its taint upon your spirit. When other Garou invoke the Gift: Sense Wyrm, you register as strongly Wyrm-tainted. The taint is innate, and cannot be removed by a Rite of Cleansing (which serves only to make you ill and sore). Minions of the Wyrm trouble your sleep, attempting to lure you fully into the service of the Destroyer. You are at +2 difficulty on any rolls made to resist the powers of “fellow” Wyrmspawn — fomori powers, Black Spiral Dancer Gifts, Bane Charms, vampiric Disciplines, or the like. Only your pack can keep you from succumbing to the Wyrm, provided they give you their support and assistance. Ridding yourself of this Flaw requires a major quest and can provide the heart of a character-driven chronicle."
  },
  "Territorial": {
    dots: "2pt.",
    description: "You have the wolf’s territorial nature. You dislike leaving your home turf or having people you don’t know infringe upon your claimed space. Before play starts, work with your Storyteller to define your territory. You must roll to avoid frenzying whenever strangers enter your territory without your permission, and are reluctant to leave there except under desperate circumstances."
  },
  "Ulterior Motive": {
    dots: "2 pt.",
    description: "Something other than love and respect for your Garou relatives and Kinfolk guides your actions. This “something” may be as simple as greed or a lust for vengeance; you could also be a traitor working for an outside agency. Whatever the case, this ulterior motive holds your ultimate loyalty. Should someone suspect things aren’t as they seem, you could be in big trouble. This Flaw makes a good complement for the Flaw: Dark Secret"
  },
  "Veiled": {
    dots: "5 pt.",
    description: "For some reason, you’re not immune to the Delirium. Gifts such as Part the Veil and the Rending of the Veil rite have no effect on you. You do receive a +1 bonus on the Delirium chart and retain all memories of what you see, but the sight of a Garou in Crinos form still invokes some sort of instinctive, uncontrollable reaction in you. This may convince Garou you’re not really Kinfolk, reduce your likelihood of finding a Garou mate, or throw your heritage into question."
  },
  // Mage Flaws
  // "Anachronism": {
  //   dots: "1-3pt.",
  //   description: "Your mage was raised in another time and hasn't quite caught up to the present. Maybe she traveled forward (or backward) in time, or sideways from a parallel universe. Maybe the Awakening made her recall one of her past lives so vividly that she thinks she's supposed to be in lOth century Egypt. Or maybe she's from one of the few quaint backwaters of the present day and everything in the modern Western world might as well be Mars for all the sense it makes to her.\n\nFor one point, the character is just a little out of sync. Pick any decade from the 20th or 21st century, excepting those on both sides of the current one, and set your attitudes and beliefs accordingly. For two points, pick any decade in the 18th or 19th century (or 22nd or 23rd). For three points, pick any decade from the 17th century or before, or any particularly well insulated backwater of the present day (if any still exist), or just some totally weird social behavioral construct. The character has a two-point difficulty penalty when dealing with anything outside this cultural identity. Thus, a character used to the 1800s has trouble with computers but understands light bulbs; a character from a hypothetical 23rd century parallel universe might have trouble with telephones, which never existed in her world experience!\n\nThis Flaw can be bought off over time and with roleplaying. In the mean time, culture shock can be fun."
  // },
  "Beast Within": {
    dots: "5pt.",
    description: "The Beast is awake within your character! He is prone to frenzies, just like a vampire or werewolf. These are caused by situations of intense emotions: fear, anger, hate. Your character is a figure of great rage and fear to the rest ofhumanity, much like Charles Manson or Mike Tyson. Your mage automatically has one extra dot of Dynamic Resonance, and whenever placed in a stress situation, you must roll your mage's Dynamic Resonance, difficulty 6 - with any successes, your mage flies off the handle into a frenzied rage with all the same qualities as the Berserker Merit. This Flaw is especially appropriate to Ghoul and Kinfolk mages."
  },
  "Bedeviled": {
    dots: "6pt.",
    description: "Job - that guy in the Bible - was a whiner.Someone or something is watching your character and ruining his life. Your mage has no idea who or what it is but knows it's responsible for all the things that go wrong, or at least the big ones. When things are just starting to look up, it socks him with another personal tragedy, but instead of letting him die, it always seems to save him and take someone close to him insteadjust so it can watch him suffer (or so he thinks). The Storyteller must decide why you are being watched and what is watching you (it is not necessarily the Devil, despite the name)."
  },
  "Bizarre Hunger": {
    dots: "2-4pt.",
    description: "You have very odd dietary needs. Rather than normal food, you must consume some odd or disgusting substance in order to maintain your health. If you are unable to acquire and consume your required substance, you begin losing Health Levels at the rate of one per day after your first day offasting. Although you may eat “normal” food as well, you derive no sustenance from it. Eating such odd fare is bound to attract attention if you do it in public. Some substances are also harder to get than others. In general, the more disgusting the substance required or the more difficult it is to obtain, the greater the cost.\n\nExamples:\n2 pts	Pig's blood, iodine, cat food (unless you are a cat)\n3 pts	Heroin, rotten meat, mare's milk\n4 pts	Child's blood, gold, feces"
  },
  "Blood-Hungry Soul": {
    dots: "2-5pt.",
    description: "One of your prior incarnations (likely one alive during the original Massasa War) fell under the seductive spell of vampiric vitae. Your mage was “born” into his Awakened life an addict (as were all of his incarnations after the unfortunate imbibing of the accursed nectar). It is only now, however, with the rekindling of the war, that his Avatar remembers the desire for the blood that so fulfilled it.\n\nFor two points, your mage's Avatar remembers its addiction as a long-recovered addict might; it was a bad choice, made long ago and foolishly. Nevertheless, the hunger whispers to his soul every so often, prompting a Willpower roll (difficulty 5) to resist temptation whenever an opportunity to potentially get vampire blood presents itself. Failing that, you must make another roll (difficulty 6) to turn down the stuff if the initial opportunity proves fruitful.\n\nThe three-point version of this Flaw is identical to the weaker version, save that the first roll's difficulty is 6 and the second increases to 8.\n\nThe five-point variant awakens within the character all the wracking agonies of a ghoul's lust for his unclean sacrament. Players of these unfortunates must roll Willpower (difficulty 8) to stay the hell away from a chance to lay hands on the sweet venom of Caine's Curse. Should that roll not prove sufficient, make a second roll (difficulty 10) to thrust it away and flee from this self-annihilating lust. (A few Thig have taken to referring to this Flaw as having a “crack-baby Avatar.”)"
  },
  "Blood Magic": {
    dots: "5-pt.",
    description: "Perhaps you learned magic from a particularly dark cult. Maybe your spirit needs additional energy, beyond your strength of will, to enact magic. Perhaps you foolishly studied under a vampire or from tomes plundered from vampires. Whatever the reason, your sorcerer's use of magic always requires the sacrifice of his own blood. In some cases, it will simply burn away from inside. In others, the magician must cut himself and include it in the ritual. Each use of magic causes an unsoakable level of bashing damage. Furthermore, the Resonance of your magic is likely to be dark, or at the very least, martyred in nature."
  },
  "Cast no Shadow or Reflection": {
    dots: "1pt.",
    description: "There are many explanations for this phenomenon, and no two agree: Your mage may have attended the legendary Black School, where the Devil who runs the place took the hindmost as payment- in this case, your character's shadow. Or maybe it got trapped in a mirror or left in a little girl's bedroom somewhere which is better than the alternative, for some believe if it escapes, it runs around as your evil twin. In any case, your character casts no shadow or reflection (your choice), and this may cause many problems, especially because this is a common Flaw among the Nephandi."
  },
  "Conditional Magic": {
    dots: "1-6pt.",
    description: "There is one thing in the world that is a great boon, or bane, to your character's magic. Perhaps her spells work particularly well against men, or on Tuesdays, or just after a storm, or on people dressed all in black. Maybe she's powerless to affect those who are or who bear that certain thing, such as her magic being unable to affect Christians or those who carry a piece of rowan and red thread. It may be that a certain individual gave her power over them, or perhaps it is utterly proof against her magic due to an oath she swore or spells that were placed on her. The conditions that affect your magic may be common, uncommon or rare, and the value of this Merit or Flaw depends on the rarity of the condition. The base costs listed here assume that you have a difficulty modifier of three on all Arete rolls under the given conditions. You may adjust the difficulty by one for every point more or less you devote to the Trait.\n\nPoints	Condition\n1 point	Unique: The Sword of Roland, the Matriarch of the MECHA construct, Leap Year\n2 points	Scarce as hen's teeth: Current or former members of the Council of Nine, your former Mentors, once in a blue moon.\n3 points	Rare, but not unheard of: loadstones, Swedish royalty, werewolves, rowan and red thread, the holy days of the archangels\n4 points	Special order: virgins, middle eastern eye-bead charms, any member of Iteration X, during a thunderstorm\n5 points	Available without much trouble: cold iron, silver, Christians, any member of the Traditions, a windy day, holy ground\n6 points	Common as dirt: men, anyone who's ever been baptized, the color purple, under cloud cover, Tuesdays"
  },
  "Contrary": {
    dots: "5pt.",
    description: "You are one of the oddest and most enigmatic types of shaman, a contrary. Contraries attempt to live their lives in ways diametrically opposed to the ordinary fashion. Most say exactly the opposite of what they mean and attempt to live in reverse by sitting the wrong way in chairs, traveling only in the hottest part of the day, eating at unusual times, attempting to pass outrageous lies for the truth or speaking only in riddles. Many also dress as the other gender (though players gain no additional points for doing so).\nContraries are sacred clowns and fools whose existence helps to show that reality is not as solid and immutable as most Sleepers believe. Not all contraries are magicians - they are social outlets, showing the reverses of “normal” ehavior. However, their dedication to change and opposition to static behavior certainly bolsters the Awakened insights of contrary mages. As a result, they gain an unusual level of magical power. When a contrary acts appropriately, reduce the difficulty of all magic rolls by one. Also, given how oddly they normally act, using their foci to perform magic often seems entirely in character. A contrary may even take contrary behavior as a focus for a particular Sphere - often Mind or Spirit.\nBecause contraries' magic is highly tied to their unusual behavior, they must be careful to always uphold their diametric actions. If a contrary ever ceases to act in an appropriate manner, increase the difficulty of all magic rolls by two. This penalty continues until the contrary resumes diametric behavior for a full scene.\nIn modern Western culture, many people assume that a contrary is either insane or exceedingly annoying and confusing. Some contraries work as entertainers of various sorts, but holding ordinary jobs is usually impossible. The Technocracy is especially wary of contrary mages, assuming they are all potential Marauders. However, most contraries have no actual magical power, so contraries are usually just watched, not actively harassed."
  },
  "Crucial Component": {
    dots: "2-5pt.",
    description: "There is some raw ingredient your mage needs to work his magic, besides magic itself. This component may be something rare or esoteric, like diamonds or ghostly ectoplasm, or perhaps something common or easily obtainable, like anger, alcohol or electricity. Without this crucial component, he cannot work his magic, and if this crucial component cannot be worked into a casting, oh well — you need to find a different Effect.\n\nThis Flaw does not merely represent a Technocrat's reliance on scientific devices and scientific principles. A Virtual Adept does not need a computer to work his computations; if he had to, he could use a slide-rule or a pencil and paper, or even do them in his head — it just takes longer. But Dr. Va-Voom requires diesel fuel to power all his Devices, and they won't work if he tries to attach solar cells or an etheric proton pack — or at least they won't work for him. This substance does not have to be direct from the source — moonlight can be charged into moonstones and holy water can be bottled — but it does have to be properly stored, with whatever methods or rituals are appropriate. (Charged moonstones must be kept in a black velvet pouch, away from the light of the sun, while holy water must be kept in a specially blessed flask.)\n\nFlaw	Crucial Component\n2 points	sunlight, eggs, motor oil, tea, aspirin, electricity, emotion, ectoplasm\n3 points	beeswax candles, blood, fresh lavender, grave dirt, holy water, rage, spectral residue\n4 points	virgin's blood, hashish, dead humans, gold, platonic love, the fires of Hell\n5 points	diamonds, live humans, rare orchids, lightning strikes, transcendent joy, the tears of angels, any variety of Tass regardless of Resonance"
  },
  "Degeneration": {
    dots: "3-9pt.",
    description: "Your character will die without the aid of magic or science to sustain her. She might be the victim of a disease or curse, or maybe she's something that wasn't meant to be alive in the first place.\n\nAt the lowest version of this Flaw, your character simply does not have the natural healing factor with which most mortals are born. All wounds he suffers remain until treated with magic or Technocratic science. He will not heal any damage otherwise.\n\nAt the six -point version of this Flaw, your character is actually falling apart. A hideous disease might be eating him up from inside, or maybe he's a victim of beetles and/or natural decay if he's the result of someone's half-assed necromancy. Maybe Iteration X didn't tell him that his “perfect android body” was a prototype made by the lowest bidder and that all the warranties are expiring. Whichever version you take, your character takes one health level of damage at three months, one a month later, another a week after that , one more three days beyond that, one the next day and a final one an hour after that. In short, your character's health deteriorates at an accelerated rate, following the progression for natural healing backward until he is dead. Obviously, the character doesn't heal normally, either. With the nine-point version of this Flaw, your character falls apart at the same rate as before, but the damage is aggravated."
  },
  "Dependence on Props": {
    dots: "3-6pt.",
    description: "While all mages must use foci to work their magic, shamanism often focuses on highly ritualistic traditions. Therefore, some shamans have additional requirements on top of their foci. Unlike foci that vary from Sphere to Sphere, props must be used for all Spheres.\n\nRegardless of the specific type of prop, you can work magic only while using your chosen prop. Props like crossdressing and being able to work magic only while standing above (or below) ground level, are only two-point Flaws. More extensive props - like being able to work magic only while under the influence of a mild drug (which would subtract one die from all Dexterity and Perception rolls) or only when wearing a special costume- are three point Flaws. Being able to work magic only while sitting on a specially made stool, or while riding an intricately carved hobbyhorse, are six-point Flaws. All costumes and other physical props must be made according to special ritual requirements. These items are elaborately decorated, often with shell, copper, iron, feathers and bells. None of these garments or items can pass as ordinary First-World garments, furniture or toys."
  },
  "Devil’s Mark": {
    dots: "1pt.",
    description: "Somewhere along the line, your mage made a pact with a demon or devil and it tunneled its foul power into him, leaving a mark in the process. This blemish (known as a witch's nipple) is dark and unwholesome looking, but it is insensitive to pain. In ages past, the “witch prickers” of the Inquisition would test these marks with special pins before they burned infernalists at the stake. In the modern day, the puritanical pricks are few and far between, and most people who see this mark will just think it's a birthmark. Despite the name “nipple,” it can grow anywhere on your mage's body.\nOn the plus side, if you have some demonic familiar, your imp can suck Quintessence directly from your character's third nipple, with the added bonus of it being insensible to pain — a real perk when you have a cat chewing on your tit."
  },
  // "Echoes": {
  //   dots: "1-5pt.",
  //   description: "Your mage manifests the traditional marks associated with the supernatural. Maybe it's a little quirk like not having a shadow, or something as severe as a baleful aura. Perhaps milk curdles around your mage and mirrors break.\n\nLook up some superstitions associated with the heritage of your mage's Tradition, and pick a few! The Storyteller determines the value of this Flaw, based on the severity of these supernatural problems."
  // },
  "Faust's Burden": {
    dots: "3-6pt.",
    description: "Either your mage or one of her prior incarnations cut a deal with a potent Umbrood, and now she must uphold her end of the bargain. This creature need not be a demon. Mammon, after all, is likely to be much friendlier (in the short term, at least) about the matter of a debt owed than, say, Uriel. If it was a previous incarnation that forged this ill-advised pact, the entity remembers your mage's soul (read: Avatar), and it will begin hounding her soon after the Awakening for its due.\n\nFor three points, your mage owes a significant service to this creature. This service might include a dangerous quest in its name, the freedom to possess you at any time of its choosing thrice in your life, or frequent sacrifices of property or Tass. For four points, this Umbrood may demand more significant sacrifices. For example, it might compel your mage to undertake a potentially life-threatening quest, demand that her magic always be worked in ways that create a Resonance pleasing to it, or impose significant strictures on her life. The five- point version of this Flaw grants the spirit leave to send the mage into a virtually certain death scenario, to claim her firstborn, or to force her to use her magic at any time in any way it sees fit.\n\nIn the case of these first three variants of this Flaw, failure to comply will be punished accordingly (the Storyteller is encouraged to be a genuine bastard). For the full six points, your mage owes the being in question her immortal soul. It may command her, possess her, use her powers, senses, knowledge (et cetera) at will, and it is perfectly within its rights to do its damnedest to collect as quickly as possible, short of killing her itself.\n\nIn theory, an awe-inspiring number of successes on a Prime 2, Entropy 5, Spirit 5 Effect might break this obligation. It is much more likely, however, that a combination of cunning, bravery, sheer willpower and luck will overcome the bargain."
  },
  "Geasa": {
    dots: "1-5pt.",
    description: "There is something your character must or must not do, and his life, his luck, his magic (and perhaps his very soul) depends on it. It may be something that has always been upon him, a Geas prophesied by druids at bis birth, or a curse laid on him by faeries at his christening. It may also be a sacred oath or vow he swore, or a promise or bargain he made, and Someone (with a capital S) witnessed it and is going to hold him to it. If he disobeys, the consequences are dire, if not deadly.\n\nThe value of a Geas depends on how easily it is broken and the penalty for violating it. If the penalty is the loss of some Merit or Background, deduct the Geas' rating from the value of the Merit or Background and make that number the value of the Flaw. For example, your character's sword may be a five-point Artifact, but you have been told, “If you ever raise this blade in anger, the angels who gave it to you will take it away.” Never raising one's sword in anger is a small sacrifice, so it's worth four points, making a four point Flaw.\n\nWhen you take a Geas, choose the Flaw(s), Background (s), and/or Merit(s) to which the Geas is attached. Then either lessen the final value of the Flaw(s) or decrease the cost of the Merit(s) and/or Background (s). In the case of Merits that may be taken multiple times, you may take the Geas the same number of times to decrease the cost. However, your Geas should be at least one point less than the total value of the Merits, Backgrounds and/or Flaws to which it's linked. In other words, you cannot get a Merit or Background for free just by piling on strictures and limitations. Storytellers should examine each Geas to make sure it makes sense in terms of story, rather than just being a pile of bizarre restrictions and commandments that could only be explained by faeries dropping acid at a christening. Storytellers should also blackball any Geas that does not cause actual problems. Losing your soul if you die is a problem, and so is losing an legendary Attribute if you lose your virginity. However, it's to be expected that you'll lose all of your Attributes, enhanced or otherwise, when you die, so this is not a legitimate problem unless your character also has some way to come back from the dead.\n\nThe point value of the Geasa suggested here is only approximate, and it will vary depending on character and circumstances.\n\nValue	Geas\n1 point	Inevitable circumstance or incredible sacrifice: When you die, if you ever let the sun touch your skin, if you ever allow your feet to touch the earth, if you ever speak another word.\n2 points	Almost unavoidable circumstance or significant sacrifice: Remain a virgin, never harm a living creature, never tell a lie.\n3 points	Everyday circumstance or common sacrifice: Never back down from a fight, never tell a secret, never refuse hospitality, never marry, never have children.\n4 points	Unlikely circumstance or a small sacrifice: Stop and pet every cat you see, never eat any animal product, never harm a certain type of animal or a certain type of person, never raise your sword in anger.\n5 points	Easily avoided circumstance or trivial sacrifice: Never break bread with a red-haired man, say your prayers every night, take your vitamins, never harm the king, don't eat ham, keep one small secret.\nClassic penalties for violating a Geas include suffering a dark fate, losing one's Avatar, having luck turn from good to bad (losing the Lucky Merit), being deserted by one's familiar (especially if the Geas was a pact you made with the beast), losing a totem, losing all one's friends and losing one's worldly possessions.\nCharacters may have several Geasa that may come into conflict. Cuchulainn had the Geasa to “Never refuse hospitality” and to “Never harm a dog” (his namesake). Three hags then offered him roast dog for dinner and Cuchulainn died soon after. Consequently, most mages try to keep their Geasa secret, lest they be used against them by enemy mages. Unfortunately, Geasa can be divined by a simple Entropy 1 Effect mixed with a little skill in fortune-telling as can one's destiny. Elaborate traps have been devised to force mages to violate all their Geasa in succession, leading to their flamboyant destruction. Perversely, Geasa, curses, holy vows and binding oaths are also marks of great status among certain Traditions, particularly the Akashic Brotherhood, Verbena, and Celestial Chorus, who accord status to mages with such Flaws. Simply put, unimportant people don't have Geasa or family curses, and someone who takes a binding oath or makes a sacred vow (and keeps it) is worthy of respect. Most Technomancers, on the other hand, aren't impressed by people who take vows of chastity or silence, and they are similarly blase about those who break them.\nTraditionally, there is very little that may be done about Geasa, which are simply facets of one's destiny, and curses are devilishly hard to lift (and the Flaw must be bought off if they are). However, with binding oaths, sacred vows, and bans imposed by totem spirits, characters who violate them accidentally may attempt to atone for their crime. A witch who has vowed to never eat any red meat, then suddenly finds ham in her pea soup, might be able to atone for the trespass by fasting and sending checks to PETA. However, if a mage violates an oath willingly and with full knowledge — and survives — he becomes an oathbreaker, one of the most foul epithets among the Traditions. The destiny of an oathbreaker is scarred permanently, and the marks show clearly to the same Entropy 1 magic that reveals a mage's destiny. As such, it is virtually impossible for an oathbreaker to find a tutor or any sort of aid among those Traditions that value one's sworn word. Some Traditions, notably the Order of Hermes and the Verbena, kill oathbreakers on sight, numbering them among the Nephandi, whose dark paths of power are the only ones left open to them. Ironically, many oathbreakers are young internalists who foreswore their allegiance to the Dark Masters — and the binding oath they had been given — after realizing the price of that power. Destiny, however, does not play favorites, and those who break their word to Hell are just as stigmatized as those who lie to Heaven.\nCharacters who wish to begin as oathbreakers should take Dark Fate or some other curse. Occasionally there are good and noble characters who have sworn foolish oaths in the past, then have broken them rather than allow some greater evil to occur. It is impossible to erase the stain from the soul once one is foresworn, but some have friends who will still stand by them, even though most mages will spit when they say their names.\nGeasa may be taken at the same time as the Compulsion Flaw, assuming that the Compulsion does not make the Geas impossible. For example, a witch could be both under a Geas and supernaturally (or just psychologically) compelled to stop and pet every cat she saw, lest she suffer a dark fate."
  },
  "Hero Worship": {
    dots: "1pt.",
    description: "You regard another individual, most probably your mage, with respect that approaches reverence. The object of your hero worship can literally do no wrong in your eyes, which can lead to some serious disputes with your fellows. You must make a Willpower roll (difficulty 5) to disobey an instruction given by your hero. In your eyes, he is perfect. In fact, you add + 1 difficulty to any roll in which success would require you to admit that your hero is wrong."
  },
  "Hollow Soul": {
    dots: "1pt.",
    description: "No matter how you try, the ingraining of your Tradition just doesn't seem to “take” with a special focus. You don't have any particular emphasis on the Spheres. Nothing's particularly hard (assuming that you're not Sphere Inept), but nothing's exactly especially easy, either.\nDespite a Tradition, Convention or Craft affiliation, you have no specialty Sphere. You place a dot in your group's specialty Sphere as normal during character creation, since your mentor focuses on it, but you pay normal experience costs for further improvement."
  },
  "Mayfly Curse": {
    dots: "5-10pt.",
    description: "Common among Progenitor Victors and those with shifter or demonic blood, your character matures at an accelerated rate and declines at the same. At the lower level, your character ages one year every two months, which means that when you're physically 18 years old, you're chronologically three. At the higher rate, you age a year every week, making you 16 in less than four months and 52 by the end of the year. It's not much of a lifespan, certainly, but it's more than sufficient for shock troops. This Flaw can be combined with any degree of Aging."
  },
  "Monstrous": {
    dots: "3pt.",
    description: "Your mage has an Appearance rating of zero. He may be the stereotypical pock-marked leper, or he may have the face and body of a demon or bug-eyed monster. Otherwise, someone just beat him with the ugly stick."
  },
  "Nephandic Taint": {
    dots: "3pt.",
    description: "Somewhere early in your training, you studied a bit with a generous and helpful master. Turns out he had a reason for being such a nice guy.\n\nAlthough you didn't fall to the Lost Path and your Avatar is still (hopefully) untainted, you wound up learning a bit at the hands/feet/ tentacles/whatever of a Nephandus. This colors all of your magic; your Resonance tends to flavor with destructive, primordial effects.You can't learn Qlippothic Entropy (you're not truly one of the Fallen), but the distinction is lost on most mages. You may have trouble finding a new mentor, and you will always be suspect."
  },
  "Offensive to Animals": {
    dots: "1pt.",
    description: "For some reason, animals are uneasy in your presence and cringe from your touch. Perhaps you have been touched by something in the course of your arcane practices; maybe you're cursed or related to a cursed family or bloodline. For whatever reason, animals are jittery around you. Add + 2 difficulty or subtract two dice from your Dice Pools whenever you're dealing with a beast; in story terms, it doesn't like you, and you don't like it, either."
  },
  "Otherworldly Taint": {
    dots: "2pt.",
    description: "Something about you just isn't right. Perhaps you have white hair at a young age, or you're unusually tall, or you've got eyes that shine slightly silver in the moonlight. Regardless, you've got some feature or mystique that other people consider disturbing, even if they don't know why. To most observers, you're simply uncanny; a person skilled in occult or mystical matters can recognize you for what you are with a successful Perception + Awareness roll (difficulty 7). Some people might find your disquieting presence compelling. Most, however, will give you a lot of breathing room - or a lot of trouble."
  },
  "Path Inept": {
    dots: "5pt.",
    description: "For some reason, your sorcerer is considerably limited in his ability to advance in the study of a certain branchofyourchosen magic. This may be the result of a curse, poor training or even emotional scars from childhood. Whatever the reason, you must choose a single Path from that available to your character's Society. In this Path, you must spend one quarter more experience points for any gain of Path level or rituals. Be sure to choosen a Path that your character plans to study-your Storyteller has ways to get back at you if you try to avoid your Flaw."
  },
  "Permanent Wound": {
    dots: "3pt.",
    description: "Due to Pattern damage, a permanent Paradox injury or some other nastiness, you have a wound that never heals. Even if you repair the injury with magic, it reoccurs at sunset or sunrise of each day (your choice as to which). This wound causes your character to suffer the Wounded health level with lethal damage that cannot be soaked. Such damage is cumulative with other injuries (and it could kill a badly wounded mage if it reoccurs while he's already injured), but it is not self-cumulative. That is, your character's bleeding head wound doesn't cause any more damage the next morning or evening if he hasn't bothered to heal it magically for a day."
  },
  "Phylactery": {
    dots: "7pt.",
    description: "Historically, a phylactery referred to a special arm wrapping with a prayer box that contained sutras, divine power and a portion of the wearer's soul. Mages refer to a phylactery as a container for the power to perform magic. Your mage's Avatar exists in the physical plane, invested into an object or place, or possibly imbued into some creature or person (such as his familiar or ally) or even a part of his body. On rare occasions, it may be invested into some nebulous concept, like a bloodline, secret society or a religion. The good news is that this object or creature is now Correspondence Range 0 in regards to yourself, which means you can sense it wherever it is, unless it's shrouded by warding. Teleporting your phylactery ring off your finger or making you drop your phylactery sword is as difficult a feat as teleporting your finger off your hand or forcing you to chop off your own arm. The bad news is that you must be in actual physical contact with your phylactery in order to work magic — even if that physical contact is long distance, like a Virtual Adept linked via modem to the mainframe in his bedroom. Moreover, you need to be very obvious about what it is you're using to perform your arts. If your mage's phylactery is his staff, your mage must wave it grandly during all invocations; if his phylactery is a crown, he must hold his head high and wear the crown everywhere he intends to do magic.\n\nIf your mage's phylactery speaks to him as his Avatar, you should also take the Manifest Avatar Merit. If the phylactery is an object, you should probably take the item as a unique focus. As with any unique focus, a phylactery can be repaired or retrieved if it is damaged, destroyed or stolen.\n\nIf your mage is separated from his phylactery, you may roll Perception + Awareness to sense the surroundings of where it is, depending on how the phylactery might perceive such things. If your mage's phylactery is animate (as with a cat or horse or severed-but-still-living hand) it will also do its best to find its way back to you, having the same homing sense.\n\nSimilarly, if your mage's Avatar is invested into a place, such as the Royal Forest of Dean or San Francisco, transporting him away from it, at least by magical means, is about as difficult as teleporting a city block to Istanbul. If he is removed from his phylactery by mundane means, his homing sense will lead him back. In cases where a phylactery is a place, the Avatar fuses with the City Father of that area. That is to say, your Avatar becomes one with the totem spirit of that particular region — Emperor Norton in San Francisco, Belle in Atlanta, a cert ain highly trademarked mouse in Disneyland. You should take an Avatar rating on par with the importance of your character's bailiwick. Wild places such as forests, deserts, rivers and even oceans can be linked with the same way, although your character must be in them or on them to work his magic. The Pacific Ocean is huge, but if that's your mage's phylactery, his connection to it ends once he sets foot on dry land. Generally speaking, it's not the size of an area that's important so much as the identity. The Queen of Angels may control most of Los Angeles, but there's a different identity to Hollywood and Malibu.\n\nIf your character's phylactery is a place, your Storyteller may also allow your character's magic to work in other places somehow linked to it. A mage with Hashberry for her Avatar could probably work her magic in other parts of San Francisco with raised difficulties the further she got from the Haight, and more powerful Avatars could probably work their magic in foreign lands tied to their spirit.\n\nFinally, if your mage's phylactery is a concept with a physical or temporal manifestation, such as the Roman Catholic Church, Iteration X, the witch's Sabbath or the season of Christmas, you may work magic as long as your character is an accepted part of that institution. The symbols and tools representing it can be destroyed, of course, stripping your mage of his magic temporarily, but they can be replaced.\n\nIn cases of identity phylacteries, your mage loses his connection to his Avatar if he is disowned, banished, defrocked, excommunicated or otherwise kicked out. As such, members with this Flaw are intensely loyal. If the organization or other concept is destroyed, the Avatar is destroyed, but an organization cannot be destroyed until all members either die or truly renounce their loyalties. When a concept is your mage's phylactery, his Avatar is the protector or mascot of that concept.\n\nIf a mage with a phylactery ever dies, the Avatar may or may not go free, at the Storyteller's option. If it does not go free, the phylactery remains as it is, awaiting the mage to reclaim it in his next incarnation."
  },
  "Primal Marks": {
    dots: "2pt. Flaw",
    description: "Your mage may have an Avatar of the Primordial Essence, some totem or god of legend, or perhaps she's just gained some powerful spirit's patronage and it's set its mark on her. If the totem is an animal, she resembles what such an animal would look like in human form so strongly that people who don't even know her call her “Bear” or “Moose” or “Raven.” If the Avatar is some well known god or hero, your character looks just like people would expect her to, including any particular deformities (although you do get extra points for such handicaps). Your mage looks the part so much that anyone can guess her nature at a glance, and there is some danger in that, especially if your Avatar has a legendary enemy (as most do). Your character's totem or Avatar will also require her to protect its species or finish up its unfinished agenda.\n\nYour mage might alternately be the descendant of some famous or infamous house: Pendragon, Murasaki, Bacon, Bathory, Borgia or Le Vey. Besides the family name, you've also inherited the family “look.” Students of history can easily picture you banishing the Devil and slaying dragons, or poisoning entire families and bathing in the blood of virgins — especially since they have the illustrations that might give them this idea.\n\nAlternately, your mage may just look the part other profession too well. Perhaps she has the red hair and green eyes of an Irish witch, the pale eyes and dark skin of an Arabic sorcerer, the grown-together brows and elongated ring-fingers of a born shapeshifter or the intense yellow, violet or emerald green eyes of one the fae. Students of ancient lore recognize these signs, and your mage may easily become the victim of witch-hunters. However, some witches, changelings, shapeshifters and others may accord you more status in their societies if you “look the part.”"
  },
  "Probationary Member": {
    dots: "4pt.",
    description: "Your character joined the Traditions (or Conventions, or appropriate Craft) recently, and he is on bad terms. He may be a former rogue who recanted, or perhaps he defected from the other side. The mage is treated with hostility and suspicion. Even a mage with a high Destiny rating is looked at askance. There's no telling if such a luminous individual will turn again to become a powerful enemy."
  },
  "Psi Focus": {
    dots: "3-5pt.",
    description: "Perhaps your psychic needs his lucky crystals to properly heal the sick. Possibly, his cyberkinetic powers require him to mime the action he wishes the machine to perform. Maybe his telekinesis only works on a hubcap he found one afternoon. Either way, he requires some form of crutch for his psychic powers to work. For 3 points, the character must gesture or speak some catch phrase or incantation for the power to work. For 4 points, the power requires a physical focus to work (crystals, a hypnotist's pocket watch, a harmonica). For 5 points, the power only works with a specific focus, akin to a mage's unique focus. (See pages 202-203 of Mage Revised)."
  },
  "Psychic Feedback": {
    dots: " 1-6pt.",
    description: "While the psychic is gifted with potent powers, the use of the talent tires him. Some psychics even experience minor cerebral hemorrhages from the strain of using the power. As a 1 point Flaw, the character experiences headaches or dizziness from each use of the power. Roll Stamina + Meditation (difficulty 7) or experience a round of pain or disorientation. All actions while in this state are at+ 2 to the difficulty number. As a 2 point Flaw, the psychic experiences minor long-term pain rom use of the power. You should roll Intelligence (difficulty 6) to “soak” the power's activation successes, which are scored as bashing damage. As a 6 point Flaw, the psychic takes this as lethal damage, though a “mental soak” is still allowed."
  },
  "Ritual Sleeper": {
    dots: "5pt.",
    description: "There is no such thing as the quick fix. Real magic takes time and effort. You cannot just wave your hand and expect the forces of the universe to leap at your beck and call- at least, that's what your character thinks. You do not have access to any instant magical effects whatsoever. All of your sorcerer's magic is therefore limited to rituals. Even normally “instant” effects require some ritual; your sorcerer must devise rituals to perform the equivalents of the fast effects that other sorcerers perform. If the rules for your character's magical society already consider this, your Storyteller may disaUow this option for Flaws. Ironically, this means that any time your character wimesses any instantaneous magical effect, she is treated as a Sleeper."
  },
  "Sleepwalker": {
    dots: "1-4pt.",
    description: "Magic? What a load of bullshit. No one in his right mind believes in magic. This is the 21st Century. You'd have to be nuts to believe in that stuff.\n\nUnfortunately, your character is nuts. However, his madness is that he doesn't believe in magic no matter how much evidence he sees to the contrary. He rationalizes everything, and even if he can be awakened for a short time by incredibly vulgar magic, the next day he'll remember everything as a weird dream or too much acid, not an earth-shattering revelation of the true nature of reality. He may believe in laser guns and personal jet -packs — after all, that's science — but he refuses to believe in all the nonscientific bell, book and candle stuff. Anything outside the Consensus of modern technological society is just bunk as far as your character's concerned.\n\nOr, alternately, your mage believes in magic, faeries, ghosts and werewolves just fine, but he refuses to believe in this strange thing called science. This worldview doesn't make much sense for a resident of the 21st Century, but it's a perfectly reasonable perspective for a visitor from the 16th.\n\nOf course, even if your mage's conscious mind is in denial, his Avatar is quite Awake and willing to help with magic and/ or technology. After all, just because you don't actually believe that God is going to send angels and flaming chariots to your rescue doesn't mean you shouldn't pray for Him to send them….\n\nAs a one-point Flaw, you may only engage in coincidental magic or super-science. Your mage doesn't believe in the vulgar stuff, and he disbelieves it when he sees it. (That is, your character counts as a Sleeper with regards to vulgar magic or super-science.) For a two-point Flaw, your mage doesn't believe in either magic or super-science, and he counts as a Sleeper against both kinds of vulgar Effects. At double the appropriate value, your mage is able to perform vulgar magic and/ or super-science, but he counts as a Sleeper with regard to his own Effects. Moreover, he hallucinates a more rational turn of events. (“What do you mean demons dragged him down to Hell? I just said 'Damn you!' and then he dropped one of his ninja smoke grenades and ran off!”) Therefore, the mage gets Paradox from his own vulgar Effects even in a sanctum!\n\nStorytellers should be cautious with this Flaw, not allowing players to create min-maxing Technocrats who bring extra Paradox down on their enemies and none on themselves without allowing it to cause them significant problems."
  },
  "Slow Healing": {
    dots: "3pt.",
    description: "The mage's body's natural healing processes are slow, whether due to a bad immune system, old age, bad diet or just genetics. You heal all of your character's wounds twice as slowly as everyone else. All Life magic Effects heal half the damage they should, rounded down."
  },
  "Sphere Inept": {
    dots: "5pt.",
    description: "For some reason, your mage sucks at a certain kind of magic. She could be paying off some karmic debt or struggling with some metaphysical concept. Maybe she invested her knowledge in some item in a past life and she hasn't run across it yet in this incarnation.\n\nThis Flaw acts like Sphere Natural in reverse. Advancement in one particular Sphere (chosen at character creation) costs 1/4 more experience points than normal, rounded up. To take this Flaw, choose one Sphere that your character plans to study. This Flaw can be selected only once, and it must be chosen at character creation."
  },
  "Spirit Trained": {
    dots: "1-2pt.",
    description: "Spirit-trained mages have had no mortal teachers. Instead, one or more spirits select them as an appropriate candidate for Awakening. Sometimes spirits select mages to act as their agents in the mundane world, however, spirits Awaken a few mages for no readily discernable reason.\n\nAwakening without mortal aid is much more difficult. The only aid and advice you received was from the voices in your head, voices which you may have at first believed were signs of growing insanity. Even more problematic is the fact that the primary information you possess about other mages (and the supernatural in general) comes from spirits. While some spirits are quite well-intentioned and helpful, all Umbrood are fundamentally inhuman and their perspective on people and events is not a human one. Anyone trained by a spirit is likely to have some rather unusual ideas about the supernatural. Because of your unusual training, you receive a free dot in either Cosmology or Enigmas, but you cannot begin play with more than two dots in any Lore. Also, you must take the Totem or Familiar Background instead of the Mentor Background (if you have a Mentor, it's a spirit). Spirit-trained mades in the First World also often have the Mental Patient Flaw, and they are usually very poorly connected to other mages. A lack of traditional training makes it hard to relate, after all.\n\nBeing a Spirit-Trained mage with significant misinformation is a two-point Flaw. Shamans who are trained by spirits with a strong ulterior motive often have very unusually and significantly incorrect views about other mages and the supernatural. Dreamspeakers believe that spirits Awaken such mages to serve as tools for a specific purpose. In one instance, a mage was Awakened and told that a certain Node was becoming so unstable that it would unleash a vast magical catastrophe unless it was destroyed. The mage used her magic to attempt to destroy it, and he was badly injured by the Garou who protected the Node. It turned out that the Node was perfectly normal, but it happened to be the dwelling of a powerful spirit inimical to the mage's patron."
  },
  "Spiritual Duty": {
    dots: "1-4 pt.",
    description: "You owe allegiance to a powerful spirit. This Flaw is often possessed by Dreamspeakers who also have the Spirit-Trained Flaw, though any mage who has dealt with spirits extensively may take it. While you are not always at this spirit's beck and call, it asks you for favors or assistance frequently. This relationship may be one of mutual aid, in which case you can take the spirit as one of your allies. However, your connection to the spirit could be one-way or even unwilling. Perhaps you swore allegiance to it in return for it saving your life when you were lost in the Umbra. Alternatively, maybe you attempted to bargain with it for some service, and it tricked you into swearing eternal servitude.\n\nSpirits who are willing to trick mortals into serving them often do not have the most pleasant motives for doing so. Such spirits also rarely care if the servants survive the tasks asked of them. Add one point to this Flaw (to a maximum of four points) if your service to the spirit is a result of trickery or coercion. The rest of the value of this Flaw depends on the exact frequency and nature of the services it requires of you.\n\nMinor services of an infrequent and usually non-dangerous nature are worth only one point. More frequent, dangerous, expensive or elaborate services are worth additional points. Remember that unlike mortals, spirits have odd and sometime inexplicable desires. Sometimes a spirit will request relatively ordinary forms of aid, such as protecting a family or a location. However, these services could easily include regular offerings, which could involve anything from flowers to cash to animal sacrifice.\n\nA mage who takes this Flaw will have a long-term relationship with this spirit, so the Storyteller should endeavor to give the spirit a deep personality, including complex wants and needs. Of course, most spirits are, by their nature, fairly straightforward- but a spirit may have reasons to achieve its goals through intermediaries or in ways that a human wouldn't approach the same goal."
  },
  "Sterile": {
    dots: "1pt.",
    description: "Put simply, your sorcerer cannot have children. For those who practice Tantric rituals or require sex as a focus, but do not desire pregnancy or unwanted children, this is a Merit.For those who belong to cultures, strong families or marriages that expect them to have children, this is a Flaw."
  },
  "Touch of Frost": {
    dots: "1pt.",
    description: "Plants wither at your character's approach and die at his touch. His touch is as cold and clammy as a corpse- a refrigerated one at that. A common Flaw among Euthanatos."
  },
  "Trance Requirement": {
    dots: "3pt.",
    description: "In order to use one of your Spheres of magic, you must enter a deep and moderately long trance. The trance must last a minimum of 15 minutes. You cannot use the chosen Sphere in any way, including conjunctional magic, without entering a trance. You can enter the trance though dancing, drumming, taking euphoric drugs or deep meditation. However, while in the trance, you are completely unaware of the outside world. If someone shakes you and attempts to get your attention, you must succeed in a Perception +Awareness roll with a difficulty of 8 to notice the interruption.\n\nEven if you overcome the need for foci with your trance Sphere, the need to enter a trace remains. Fortunately, to most Sleepers, someone in a trance induced by mediation or self-hypnosis merely appears to be napping. Similarly, going into trance through dancing can be easily done at any party or nightclub. While dancing, you will usually avoid bumping into others, but you will still be completely oblivious to the outside world."
  },
  "Unsettling Effect": {
    dots: "1-3pt.",
    description: "Though many psychic powers are completely intangible and unnoticeable, something about your character's psychic phenomena causes others to recognize that there's something weird going on. For one point, you have a single intangible power (like Telepathy or Psychometry) that generates an unsettling effect- perhaps your subjects can feel your character paging through their minds or everyone around the psychic feels a welter of harmless but eerie emotions when she touches a psychically-charged object. For three points, all of your intangible powers including ones that you learn later) have some sort of unsettling effect like this. This is in addition to any Resonance that your character may have"
  },
  "Vulnerability": {
    dots: "1-7pt.",
    description: "Your character possesses a Vulnerability- a substance, element, or power that can harm or even kill him, like Superman's problems with Kryptonite or the Wicked Witch of the West's aversion to cleaning buckets. The level of this Flaw depends on whether his weakness can fatally injure him, or simply weaken him, and on how common the substance is. Damage caused by a Vulnerability cannot be soaked, except by Armor, assuming it's the right sort of Armor (the Wicked Witch of the West would have survived if she were wearing a hazmat suit or just a raincoat and umbrella).\n\nA normal, weakening Vulnerability causes one health level of aggravated damage per tum of contact. A mortal peril causes three health levels of damage per turn of contact. If the slightest drop of the substance is certain death, instantly bringing your destruction, this Flaw is worth an extra point beyond that. If merely being in the presence of the substance causes you damage- being in the same room as the Emperor's perfume or standing in indirect sunlight- or the most infinitesimal drop causes you harm, this Flaw is also worth one point more; while if you actually have to be damaged by the substance- stabbed with the Lance of Longinus, beaten with an iron crowbar - this Flaw is worth one point less. If taken at the full seven-point level, this Flaw means a single beam of moonlight or the mere sight of a drop of blood can instantly kill you.\n\nFlaw	Weakness\n2 points	You can be fatally injured by something that's nearly impossible to acquire (the Holy Lance of Longinus, the perfume of the Emperor of Cathay), or weakened by something very rare (dragon's blood, naphtha, the bite of an Egyptian asp, panther's breath).\n3 points	You can be fatally injured by something very rare, or weakened by something moderately rare (mistletoe, garlic, the sight of your reflection, silver, magic).\n4 points	You can be fatally injured by something moderately rare, or weakened by something common (iron, sunlight, fire).\n5 points	You can be fatally injured by something common."
  },
  "Whimsy:": {
    dots: "1pt.",
    description: "You become whimsical under stress. Rather than getting serious when things go wrong, you tend to get tickled and adopt a fey attitude. While this can occasionally be so disarming that foes are caught off-guard (perhaps giving you another chance to best them), it usually prevents you from doing anything particularly helpful for one turn and really annoys your companions."
  },
  "Wild Talent": {
    dots: "1-4pt.",
    description: "Though many psychics lack formal training of their gifts, some lack even the most basic control of their powers. These “wild” psychics tend to have powerful gifts, though the lack of control makes up for the extra power they might have. To determine the level of the Flaw, use the following table. The total Merit or Flaw cannot exceed 4 points.\n\n+1	For every extra die the character has when using the power.\n-1	The character must make a Willpower roll (difficulty 7) to use the power.\n-2	The character can only consciously use the power defenstvely. (i.e., A precognitive character can activate her Danger Sense, or a telekinetic can use the power co deflect attacks.)\n-3	he character has no conscious control of the power, but it works more often to the character's benefit that not. (A clairvoyant who has useful clairvoyant dreams.)\n-4	The character's power activates randomly (at least once per game session) and often at inopportune or embarrassing moments. (The channeler contacts the spirit of an ancient warrior during a fancy dinner party.)"
  },
  // Vampire Flaws
  "Smell of the Grave": {
    dots: "1pt.",
    description: "You exude an odor of dampness and newly turned earth, which no amount of scents or perfumes will cover. Mortals in your immediate presence become uncomfortable, so the difficulties of all Social rolls to affect mortals increase by one."
  },
  // "Tic/Twitch": {
  //   dots: "1pt.",
  //   description: "You have some sort of repetitive motion that you make in times of stress, and it’s a dead giveaway as to your identity. Examples include a nervous cough, constantly wringing your hands, cracking your knuckles, and so on. It costs one Willpower to refrain from engaging in your tic."
  // },
  "Fourteenth Generation": {
    dots: "2pt.",
    description: "You were created five or fewer years ago by a member of the Thirteenth Generation. Though you have 10 blood points in your body, only eight of them may be used to heal wounds, power Disciplines, raise Attributes, etc. You can still use the final two blood points for other purposes, though. The blood point costs of nightly rising, creating and sustaining ghouls, and creating blood bonds remains the same as for other vampires. You cannot raise any Discipline above four dots. Taking this Flaw precludes you from taking the Generation Background, and you may not start with Status, either. You are likely a Clanless Caitiff, for your blood is probably too thin to pass down the distinguishing characteristics of a Clan. Most Fourteenth-Generation vampires should also take the Thin Blood Flaw (p. 483)."
  },
  "Fifteenth Generation": {
    dots: "4pt.",
    description: "Your vitae is so weak that only six of your 10 blood points can be used for Disciplines, healing or raising Attributes. For these functions, you must expend two blood points to obtain the effect a normal vampire would achieve with one. (The cost for nightly rising remains a single blood point.) What’s more, you cannot create or sustain ghouls, create a blood bond, or sire a vampiric childe. You can use the remaining four blood points to survive through the day and wake up each night, nothing more. You cannot raise any Discipline above three dots. The weakening of the Curse of Caine has compensations, though (which distinguish this Flaw from the Thin Blood Flaw itself). Sunlight does lethal damage to you, instead of aggravated damage as it does to other vampires. You can hold down mortal food and drink for an hour or so; other vampires vomit immediately if they try (unless they have the Eat Food Merit). Strangest of all, once in a while you might actually have a child the normal, human way… though it will hardly be a normal, human child."
  },
  "Dulled Bite": {
    dots: "2pt.",
    description: "For some reason your fangs never developed fully, or they may not have manifested at all. When feeding, you need to find some other method of making the blood flow. Failing that, you must achieve double the normal number of successes in order to make your bite penetrate properly. A number of Caitiff and high-Generation vampires often manifest this Flaw."
  },
  "Infectious Bite": {
    dots: "2pt.",
    description: "You may not automatically lick the wounds of your feeding closed. In fact, your bites have a one in five chance of becoming infected and causing mortal victims to become seriously ill. The precise nature of the infection is determined by the Storyteller."
  },
  "Vulnerability to Silver": {
    dots: "2pt.",
    description: "To you, silver is as painful and as deadly as the rays of the sun. You suffer aggravated wounds from any silver weapons (bullets, knives, etc.), and the mere touch of silver objects discomfits you."
  },
  "Open Wound": {
    dots: "2 or 4pt.",
    description: "You have one or more wounds that refuse to heal, and which constantly drip blood. This slow leakage costs you an extra blood point per evening (marked off just before dawn), in addition to drawing attention to you. If the wound is visible, you are at + 1 difficulty for all Social-based rolls. For two points, the Flaw is simply unsightly and has the basic effect mentioned above; for four points the seeping wound is serious or disfiguring and includes the effects of the Flaw Permanent Wound (below)."
  },
  "Glowing Eyes": {
    dots: "3pt.",
    description: "You have the stereotypical glowing eyes of vampire legend, which gives you a -1 difficulty on Intimidation rolls when you’re dealing with mortals. However, the tradeoffs are many; you must constantly disguise your condition (no, contacts don’t cut it); the glow impairs your vision and puts you at +1 difficulty on all sight based rolls (including the use of ranged weapons); and the radiance emanating from your eye sockets makes it difficult to hide (+2 difficulty to Stealth rolls) in the dark."
  },
  // "Lazy": {
  //   dots: "3pt.",
  //   description: "You are simply lazy, avoiding anything that requires effort on your part. Preferring to let others do the hard work, you lounge around. For any action that requires preparation, there’s a good chance you didn’t properly prepare. Difficulty rolls for spontaneous Physical actions (including combat, unless it’s part of a planned offensive) increase by one."
  // },
  // "Monstrous": {
  //   dots: "3pt.",
  //   description: "Your physical form was twisted during the Embrace, and now reflects the Beast that rages inside you. Characters with this Flaw appear to be savage monsters and have Appearance ratings of zero. Nosferatu and other bloodlines whose weaknesses cause them to start off with Appearance zero cannot take this Flaw."
  // },
  "Permanent Fangs": {
    dots: "3pt.",
    description: "Your fangs do not retract, making it impossible for you to hide your true nature. While some mortals may think you’ve had your teeth filed or are wearing prosthetics, sooner or later you’re going to run into someone who knows what you truly are. You are also limited to a maximum Appearance rating of 3."
  },
  // "Permanent Wound": {
  //   dots: "3pt.",
  //   description: "You suffered injuries during your Embrace which your transformation somehow failed to repair. At the beginning of each night, you rise from sleep at the Wounded health level, though this may be healed by spending blood points."
  // },
  // "Slow Healing": {
  //   dots: "3pt.",
  //   description: "You have difficulty healing wounds. It requires two blood points to heal one health level of bashing or lethal damage, and you heal one health level of aggravated damage every five days (plus the usual five blood points and Willpower expenditure)."
  // },
  "Disease Carrier": {
    dots: "4pt.",
    description: "Your blood carries a lethal and highly contagious disease. The disease can be anything from rabies to HIV, and Kindred who drink your blood have a 10% chance of becoming a carrier as well. You must spend an extra blood point each night on awakening, or you will begin manifesting symptoms of the disease (increased chance to frenzy for rabies, reduced soak rolls for HIV, etc.)."
  },
  "Thin Blood": {
    dots: "4pt.",
    description: "Your blood is thin, weak, and does not sustain you well. All blood point costs are doubled (e.g., using blood-related Disciplines or healing damage), although you only lose one blood upon rising in the evening. Furthermore, you are unable to create a blood bond, and efforts to sire other vampires succeed only one in five times."
  },
  "Flesh of the Corpse": {
    dots: "5pt.",
    description: "Your flesh does not fully regenerate itself once it is damaged. While you are able to heal yourself to the point of regaining full functionality, your skin still retains the cuts, tears, bullet holes, and other visible damage that you have incurred. Depending on the nature of the damage, this Flaw will make social dealings exceedingly difficult, and may decrease your Appearance dots over time (even to 0)."
  },
  "Infertile Vitae": {
    dots: "5pt.",
    description: "During your Embrace, something went horribly wrong, causing your blood to mutate under the stress of dying and rising again. All those you try to Embrace die. No matter what you do, you may not create any childer. However, your blood can still be used in blood rituals like Thaumaturgy and the Vaulderie, or for any other vampiric needs like making ghouls."
  },
  "Deep Sleeper": {
    dots: "1pt.",
    description: "When you sleep, it is very difficult for you to awaken. The difficulty of any roll to awaken during the day is increased by two."
  },
  // "Impatient": {
  //   dots: "1pt.",
  //   description: "You have no patience for standing around and waiting. You want to do things now — fuck those slowpokes trying to hold you back. Every time you are forced to wait around instead of acting, a Self-Control roll is required to see if you go tearing off on your own instead."
  // },
  "Prey Exclusion": {
    dots: "1pt.",
    description: "You refuse to hunt a certain class of prey. You might refuse to feed on drug dealers, policemen, accountants, or rich people — if you accidentally feed upon such an individual, you automatically frenzy and must make a roll to prevent Humanity or Path loss (difficulty 7). Witnessing other Kindred feeding on the object of your exclusion might also provoke a frenzy, at the Storyteller’s discretion. Ventrue, owing to the limitations already imposed on their feeding by their Clan weakness, may not take this Flaw."
  },
  // "Speech Impediment": {
  //   dots: "1pt.",
  //   description: "You have a stammer or other speech impediment that hampers verbal communication. The difficulties of all die rolls involving verbal communication are increased by two. This Flaw must be roleplayed whenever possible."
  // },
  "Unconvinced": {
    dots: "1pt.",
    description: "You fail to see the need for the core ideologies of your Sect or Clan, and have gone on record as saying so. Taking your stand has made you suspect in the eyes of your superiors, and may have attracted the attention of your enemies as well."
  },
  "Lunacy": {
    dots: "2pt.",
    description: "You are affected by the phases of the moon, increasing your chances to frenzy. Under the crescent moon, difficulties to avoid frenzy increase by one. Under the half or gibbous moon, difficulties rise by two. When the moon is full, difficulties increase by three."
  },
  "Stereotype": {
    dots: "2pt.",
    description: "You buy heavily into all of the vampire stories you’ve read and heard. You wear a cape or body glitter, speak with an accent, and otherwise act in a cartoonish fashion. Such behavior is embarrassing in the extreme to other Kindred, who are likely to ostracize or mock you (+2 difficulty to Social rolls with other vampires who don’t share your habits). You also stand out to hunters."
  },
  // "Territorial": {
  //   dots: "2pt.",
  //   description: "You are extremely territorial, staking out a particular area as your hunting ground and reacting aggressively to trespassers. If another vampire enters your territory uninvited, you must make a frenzy roll. If you fail, you immediately attack the interloper and continue attacking until the intruder is dead or has left your hunting grounds. You are reluctant to leave your territory except in desperate circumstances."
  // },
  "Thirst for Innocence": {
    dots: "2pt.",
    description: "The sight of innocence — of any sort — arouses in you a terrible bloodlust. Roll Self-Control or Instincts, or else frenzy and attack the source of your hunger."
  },
  "Victim of the Masquerade": {
    dots: "2pt.",
    description: "The Camarilla’s propaganda machine did too good a job on you. Even after your Embrace you refused to believe you were a vampire. You remain convinced that there is some logical explanation for your condition, and spend as much time as you can searching for it. You also have problems feeding, and may insist on trying to eat regular food. None of these habits makes you particularly pleasant company for other Kindred. This Flaw must be roleplayed at all times, and is generally taken by Camarilla vampires."
  },
  "Conspicuous Consumption": {
    dots: "4pt.",
    description: "It is not enough for you to draw nourishment from the blood of mortals — you believe you must also consume your victim’s heart, liver, and other blood-rich tissue. Of course, this will necessitate the deaths of all of your victims (unless you are extremely creative), which might lead to numerous problems with maintaining Humanity (and a low profile). Characters with this Flaw should additionally purchase the Eat Food Merit."
  },
  "Guilt-Wracked": {
    dots: "4pt.",
    description: "You simply cannot come to grips with the fact that you must drink blood to survive. You suffer horrible guilt over each time you feed (roll Conscience, difficulty 7, or else frenzy every time you feed — characters with the Conviction Virtue cannot take this Flaw) and try to avoid doing so as much as possible. This means that you rarely have much blood in your system, leaving you vulnerable to both attacks and hunger-based frenzies."
  },
  "Botched Presentation": {
    dots: "1pt.",
    description: "When your sire presented you to the Prince of the city, you flubbed it. Now you’re convinced His Majesty hates you (whether he does or not). You need to succeed on a Willpower roll (difficulty 7) just to stand in front of the Prince or one of his duly authorized representatives without running, blubbering, or otherwise making a fool of yourself. This Flaw can only be taken by Camarilla vampires."
  },
  // "Dark Secret": {
  //   dots: "1pt.",
  //   description: "You have some sort of secret that, if uncovered, would be of immense embarrassment to you and would make you a pariah in the local Kindred community.  This could be anything from having murdered an elder to being a member of the Anarchs."
  // },
  // "Expendable": {
  //   dots: "1pt.",
  //   description: "Someone in power doesn’t want you around. Maybe she wants territory you possess, or is jealous of the attention you’re getting from a prize mortal retainer — the details are irrelevant.  What does matter is that she has the power to maneuver you into dangerous situations “for the good of the Sect,” and has no compunctions about doing so."
  // },
  "Incomplete Understanding": {
    dots: "1pt.",
    description: "The whole matter has been explained to you, but you’re still not quite sure how things in your Sect work. Your imperfect understanding of the rules and regulations of your new existence means that sooner or later, you’re going to make a mistake. It’s only a matter of time…."
  },
  "Infamous Sire": {
    dots: "1pt.",
    description: "Your sire was, and perhaps still is, distrusted and disliked by many of the city’s Kindred. As a result, you are distrusted and disliked as well."
  },
  "New Arrival": {
    dots: "1pt.",
    description: "You’ve just arrived in your new city of residence, and don’t know anyone in the place. Existing factions may try to recruit or eliminate you, while vampires in positions of authority size you up and take your measure. Meanwhile, your ignorance of the city’s current events, history, and politics (not to mention the personality quirks of the vampires already in place) may cause you to make a serious blunder."
  },
  "New Kid": {
    dots: "1pt.",
    description: "You’re the latest in the city to be Embraced or have yet to prove yourself to your Sect, and everyone knows it. That automatically puts you at the bottom of the social totem pole. Other neonates take every opportunity to demonstrate your inferiority, or rival packs  constantly test  your worthiness to the Sabbat. Even if someone else is added to the ranks of the unliving, you’re still regarded as something as a bit of a geek by your peers — a distinction that can have dangerous consequences if bullets start flying. All Social-related rolls are at +1 difficulty when you are dealing with other neonates. (Ancillae and elders lump you in with all the other neonates  under their general disdain.)"
  },
  "Recruitment Target": {
    dots: "1pt.",
    description: "Someone in one of your Sect’s enemy organizations wants you, and they want you bad. Every effort is being made to recruit you, willing or no, and the press gangs usually show up at the worst possible time."
  },
  "Sire’s Resentment": {
    dots: "1pt.",
    description: "Your sire dislikes you and wishes you ill. Given the smallest opportunity, she will actively seek to do you harm. Your sire’s allies also work against you, and many elders may resent you."
  },
  "Special Responsibility": {
    dots: "1pt.",
    description: "Shortly after your Embrace, you volunteered for some task in order to gain respect and approval from the vampires around you. Now, you wish you had never opened your damn mouth! While you are not given any special credit for performing this duty, you would lose a lot of respect if you were to stop. The nature and the details of your duty should be worked out with the Storyteller in advance. Ideas can range from lending money to other Kindred to acting as a messenger or possibly gathering victims for ritae (such as Blood Feasts)."
  },
  "Sympathizer": {
    dots: "1pt.",
    description: "You have publicly expressed sympathy for some of the goals and policies of the enemies of your Sect. Your outspoken views on the subject have made you suspect in the eyes of the city’s hierarchy, and you may be suspected of (or arrested for) treason."
  },
  "Bound": {
    dots: "2pt.",
    description: "You are blood bound to another vampire. Your regnant may not necessarily treat you badly, but the fact remains that your will is not entirely your own. The knowledge gnaws at you, even as you find yourself lost in devotion to your vampiric master. Sabbat vampires cannot take this Flaw."
  },
  "Catspaw": {
    dots: "2pt.",
    description: "You’ve done dirty work for someone high up in the city’s hierarchy in the past — the Sheriff, the Bishop, or even someone higher. However, instead of granting you favor, your deeds have made you an embarrassment or a liability. For the moment, your former employer’s concern is to keep you quiet. In the long term, it’s to get rid of you."
  },
  "Escaped Target": {
    dots: "2pt.",
    description: "You had targeted a mortal for the Embrace, but someone else got there first. You cannot stand the humiliation of being cheated of your prize, and fly into a rage (+2 difficulty to avoid frenzy) whenever you see the one who got away. This hatred may lead you into other irrational behaviors, like Embracing enemies of the neonate, creating unauthorized childer, or even trying to kill your rival. Furthermore, your petty and irrational behavior is well-known and quite noticeable, and as a result you are at + 1 difficulty on all Charisma rolls until the situation is resolved."
  },
  // "Failure": {
  //   dots: "2pt.",
  //   description: "You once held a title in the city, but failed catastrophically in your duties. Now you are branded incompetent, excluded from circles of power and responsibility, and generally ostracized by those on their way up. Your exclusion may make you a target for recruitment by the Sect’s enemies (or so the whispers run, making you even more distrusted). Conversely, the consequences of your error might come back to haunt you."
  // },
  "Masquerade Breaker": {
    dots: "2pt.",
    description: "In your first nights as a vampire, you accidentally broke the Masquerade — and were spotted doing so. Someone else covered for your mistake, but holds the favor over you. Now you exist in fear that your error will be revealed. In the meantime, your “savior” takes pitiless advantage of you. This Flaw can only be taken by vampires in Sects or Clans that respect the Masquerade."
  },
  // "Hunted": {
  //   dots: "4pt.",
  //   description: "You are pursued by a fanatical witch-hunter who believes (perhaps correctly) that you are a danger to humanity. All those with whom you associate, be they mortal or Kindred, may be hunted as well."
  // },
  // "Old Flame": {
  //   dots: "2pt.",
  //   description: "Someone you once cared deeply for is now with the enemy. He still attempts to play on your sympathies “for old times’ sake” while working against you. Unless you succeed on a contested Manipulation + Expression roll against your former friend, you cannot act against him unless the situation becomes life-threatening."
  // },
  "Rival Sires": {
    dots: "2pt.",
    description: "The flip side of Escaped Target, two vampires wanted to gift you with the Embrace. One succeeded, one failed — and she’s not happy about that failure. You, your actual sire, or both of you have become the target of the failed suitor’s ire. Regardless, your persecutor is at +2 difficulty to refrain from frenzy in your presence. In addition, she may well be working actively to discredit or destroy you."
  },
  "Uppity": {
    dots: "2pt.",
    description: "You are proud of your new status in the Sect — so proud that you’ve shot your mouth off to other Kindred and made some enemies. Wiser vampires laugh at you and chalk your rudeness up to youth, but others find you arrogant and insulting. These enemies will take action to embarrass or harm you. Furthermore, you are at +2 difficulty on all Social rolls against any vampires you have alienated through your yammering — and  you may not know who they are. At Storyteller  discretion, you may also be required to make a Willpower roll (difficulty 6) to keep your  mouth  shut any time the opportunity presents itself for you to brag about your pack, your Clan, or your  status."
  },
  "Disgrace to the Blood": {
    dots: "3pt.",
    description: "Your sire regards the fact that he Embraced you to be a titanic mistake, and has let everyone know it. You are mocked at gatherings, taunted by your peers, and actively despised by the one who should be giving you guidance. Any request or petition you make is likely to be looked down upon by friends of your sire, and your achievements are likely to be discounted."
  },
  "Former Prince": {
    dots: "3pt.",
    description: "Once, you held near-absolute power in a city, but those nights are gone now. Perhaps you stepped down, perhaps you were deposed, or perhaps your city fell to the Sabbat; it matters little in your reduced state. What does matter is that the Prince in the city where you now dwell is aware of your prior employment, and has concerns that you might be trying to make a comeback. The machinery of the Camarilla in the city where you now make your home is subtly stacked against you, and if the Prince sees an opportunity to get rid of you he just might take it. This Flaw can only be taken by Camarilla vampires."
  },
  "Hunted Like a Dog": {
    dots: "3pt.",
    description: "Another Sect or group of vampires has decided that you’re a target for extermination, and pursues you relentlessly. On the bright side, the enemies of your enemy may well wish to help you out, potentially garnering you allies."
  },
  "Narc": {
    dots: "3pt.",
    description: "You are known to be a snitch, an informer firmly planted in the pocket of the vampires in charge. Those on whom you might yet inform loathe you as a result, feeding you misinformation when they can in an attempt to discredit you. Given the opportunity, they might do you mischief. Regardless, your reputation as a weasel precedes you, putting you at +1 difficulty on all Social rolls against those who don’t agree with your politics."
  },
  "Sleeping With the Enemy": {
    dots: "3pt.",
    description: "You have some sort of intimate connection with a member of an opposing Sect or inimical Clan. You may have a lover, a childe, a friend, or a contact working the other side of the fence, but regardless of politics you retain a friendly (or more than friendly) relationship with your putative foe. Your close ties to someone on the other side would be regarded as treason by your superiors within the Sect, and if you are discovered, the penalty will surely be death."
  },
  "Clan Enmity": {
    dots: "4pt.",
    description: "One Clan in particular wants you dead. You have offended the entire Clan, from elders to neonates, and as a result every member of that bloodline wants your head on a plate. The effects of the Flaw may manifest as anything from very public snubs and insults to actual attempts on your unlife. You are also at +2 difficulty on all Social rolls relating to members of the Clan in question."
  },
  "Loathsome Regnant": {
    dots: "4pt.",
    description: "Not only are you blood bound, but you are also in thrall to a vampire who mistreats you hideously. Perhaps you are publicly abused or humiliated; perhaps your master forces you to commit unspeakable acts for him. In any case, existence under the bond is a neverending nightmare, with your regnant serving to conduct the symphony of malice. Sabbat vampires cannot take this Flaw."
  },
  "Overextended": {
    dots: "4pt.",
    description: "You’ve got your fingers in too many pies, and people are starting to notice. You have too many ghouls, too many retainers, or too much influence, which means  that a lot of people have a  vested interest in trimming  back your operations. These enemies take every opportunity  to  reduce your power and influence, and if that  means lying, cheating, or killing, so be it.  Furthermore,  your enemies block every attempt you make to move  into new areas of control. You’re boxed in, and the box is getting smaller."
  },
  "Probationary Sect Member": {
    dots: "4pt.",
    description: "You are a defector. You turned traitor to the Camarilla, Sabbat, or other Sect, and you still have much to prove before you are accepted by the Kindred you have defected to. Other vampires treat you with distrust and even hostility, and your reputation might even sully those whom you regularly associate with. Blood Hunted (4 or 6pt.) You have been made the target of a blood hunt, and for you to return to your home city is death. For four points, this Flaw means that only your home city is off limits to you. For six, it means that the entire Camarilla  is howling for your vitae. This Flaw can only be taken by Camarilla vampires."
  },
  "Laughingstock": {
    dots: "5pt.",
    description: "Somehow you’ve drawn the scorn of the local Harpies, who make you their favorite target. You are at a +2 difficulty on all Social rolls in Elysium and a +1  anywhere else in the city. In addition, you are at +2 difficulty to use Intimidation or any Dominate powers on anyone who has heard the stories mocking you. This Flaw can only be taken by Camarilla vampires."
  },
  "Red List": {
    dots: "7pt.",
    description: "You are either being considered for or are already on  the dreaded Red List, the registry of those vampires the Camarilla most wants extinguished. Any Camarilla vampire will either attack you on sight or, more likely, call in for a great deal of help."
  },
  "Cast No Reflection": {
    dots: "1pt.",
    description: "You actually cast no reflection, just like the vampires of legend. This can have a detrimental effect when trying to pass as a human. Vampires of Clan Lasombra automatically have this Flaw (and you may be mistaken for one of them if you possess this)."
  },
  // "Cold Breeze": {
  //   dots: "1pt.",
  //   description: "A chill wind follows you everywhere you go. While it may make for dramatic entrances, this effect also discomfits mortals (+1 difficulty on all appropriate Social rolls) and marks you as obviously supernatural. Cold winds sweeping through executive offices or crowded nightclubs can raise all sorts of questions."
  // },
  "Repulsed by Garlic": {
    dots: "1pt.",
    description: "You cannot abide garlic, and the smallest whiff of its scent will drive you from a room unless you make a successful Willpower roll (difficulty based on the strength of the odor)."
  },
  // "Touch of Frost": {
  //   dots: "1pt.",
  //   description: "Plants wither as you approach and die at your touch. Your touch leeches heat from living beings, as though you were made of ice."
  // },
  "Beacon of the Unholy": {
    dots: "2pt.",
    description: "You radiate palpable evil. Clergy and devout mortals know instinctively that there is something horribly wrong with you, and react accordingly."
  },
  // "Eerie Presence": {
  //   dots: "2pt.",
  //   description: "Mortals have an unconscious awareness of your undead nature, which makes then anxious and ill at ease in your presence. Because of this, difficulties of all rolls relating to social interaction with mortals are increased by two."
  // },
  "Lord of the Flies": {
    dots: "2pt.",
    description: "Buzzing harbingers of decay swirl around you everywhere. Their constant presence makes it difficult for you to interact socially (+1 difficulty when appropriate) and nearly impossible to sneak up on someone or hide effectively. The buzzing of the flies inevitably gives you away — all Stealth rolls are at +2 difficulty."
  },
  "Can’t Cross Running Water": {
    dots: "3pt.",
    description: "You believe in the old folklore, and cannot cross running water unless you are at least 50 feet (15 meters) above it. Running water is considered to be any body of water at least two feet (half a meter) wide in any direction and not completely stagnant."
  },
  "Repelled by Crosses": {
    dots: "3pt.",
    description: "You are repelled by the sight of ordinary crosses, believing them to be symbols of holy might. When confronted by a cross, you must make a Willpower roll (difficulty 9) or flee from the symbol for the duration of the scene. If you botch the roll, not only must you attempt to flee, but the touch of the cross can cause aggravated damage (one health level of damage per turn that the cross touches your skin). This damage cannot be soaked, even if the vampire possesses Fortitude."
  },
  "Grip of the Damned": {
    dots: "4pt.",
    description: "There is no ecstasy in your Embrace — only terror and pain. Mortals upon whom you feed struggle and shriek while you attempt to feed, requiring you to grapple with them for as long as you wish to take their blood. For vampires with high Humanity, this experience may require a Humanity roll, at the discretion of the Storyteller. Giovanni cannot take this Flaw."
  },
  "Light-Sensitive": {
    dots: "5pt.",
    description: "You are even more sensitive to sunlight than other vampires are. Sunlight causes double normal damage, and the light of the moon can cause lethal damage in a manner similar to the sun, though it must shine directly upon you. Even bright lights hurt your eyes, requiring the use of sunglasses. Followers of Set and related bloodlines cannot take this Flaw, as they already have a worse version of it."
  },}
