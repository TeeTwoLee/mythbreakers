import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { meritData, meritName } from '../data/merits';
import { flawData, flawName } from '../data/flaws';

export interface Skill {
  proficiency?: string
  dots: number
}

export interface Merit {
  meritName: meritName
  dots: number
}

export interface Flaw {
  flawName: flawName
  dots: number
}

export interface SheetProps {
  // meta
  metaTitle: string
  metaDescription: string

  source?: string
  sourceDescription?: string

  // description
  name: string
  player: string
  virtue: string
  vice: string
  concept: string
  profession: string
  compact?: string

  cheatSheet?: React.ReactNode

  // stats
  intelligence: number
  wits: number
  resolve: number
  strength: number
  dexterity: number
  stamina: number
  presence: number
  manipulation: number
  composure: number

  // skills
  // mental
  academics?: Skill
  computer?: Skill
  crafts?: Skill
  investigation?: Skill
  medicine?: Skill
  occult?: Skill
  politics?: Skill
  science?: Skill

  // physical
  athletics?: Skill
  brawl?: Skill
  drive?: Skill
  firearms?: Skill
  larceny?: Skill
  stealth?: Skill
  survival?: Skill
  weaponry?: Skill

  // social
  animalKen?: Skill
  empathy?: Skill
  expression?: Skill
  intimidation?: Skill
  persuasion?: Skill
  socialize?: Skill
  streetwise?: Skill
  subterfuge?: Skill

  // merits
  merits: Merit[]

  // flaws
  flaws: Flaw[]

  size: number // 5 for adult humans

  morality: number

  history?: string
  description?: string

  age?: string
  hair?: string
  eyes?: string
  sex?: string
  height?: string
  weight?: string
  race?: string
  nationality?: string
}

function addKey(node: React.ReactNode, index: number) {
  return <React.Fragment key={index}>{node}</React.Fragment>;
}

function numberToCircleWithPadding(num: number = 0, total: number) {
  const arr: React.ReactNode[] = [];
  arr.length = total;

  const checked = <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>;
  const unchecked = <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>;

  return arr.fill(checked, 0, num).fill(unchecked, num, total).map(addKey);
}

function numberToCircleNoPadding(num: number = 0, total: number) {
  const arr: React.ReactNode[] = [];
  arr.length = total;

  const checked = <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
  const unchecked = <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>

  return arr.fill(checked, 0, num).fill(unchecked, num, total).map(addKey);
}

function numberToSquare(num: number = 0, total: number) {
  const arr: React.ReactNode[] = [];
  arr.length = total;

  const checked = <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value="" checked/>
  const unchecked = <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>

  return arr.fill(checked, 0, num).fill(unchecked, num, total).map(addKey);
}

function skillBlock(skillName: string, skill?: Skill) {
  return (
    <div className="font-size-sm">
      <div className="float-start">
        <input className="form-check-input checkbox-square" type="checkbox" checked={!!(skill?.proficiency)}/>
        <label className="form-check-label">{skillName}</label>
      </div>
      <div className="float-end">
        {numberToCircleNoPadding(skill?.dots, 5)}
      </div>
      <div className="between-floats">
        <input type="text" className="input-underline-only" placeholder="" value={skill?.proficiency}/>
      </div>
    </div>
  );
}

function meritBlock(merit?: Merit) {
  return (
    <div>
      <div className="float-end">
        {numberToCircleWithPadding(merit?.dots, 5)}
      </div>
      <div className="between-floats">
        {merit
          ? <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content={meritData[merit.meritName].description}><input type="text" className="input-underline-only" placeholder="" value={merit.meritName}/></a>
          : <input type="text" className="input-underline-only" placeholder="" value=""/>
        }
      </div>
    </div>
  );
}

function flawBlock(flaw?: Flaw) {
  return (
    <div className="between-floats">
      {flaw
        ? <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content={flawData[flaw.flawName].description}><input type="text" className="input-underline-only" placeholder="" value={`${flaw.flawName} (${flaw.dots})`}/></a>
        : <input type="text" className="input-underline-only" placeholder="" value=""/>
      }
    </div>
  );
}

function moralityBlock(num: number, checked: boolean) {
  return (
    <div>
      <div className="float-start">
        {num}
      </div>
      <div className="float-end">
        <input className="form-check-input checkbox-round" type="checkbox" value="" checked={checked}/>
      </div>
      <div className="between-floats">
        <input type="text" className="input-underline-only" placeholder=""/>
      </div>
    </div>
  );
}

export default function Sheet(props: SheetProps) {
  const router = useRouter();
  const basePath = router.basePath;

  const longMerits = [...props.merits, undefined];
  longMerits.length = Math.max(props.merits.length, 10);
  longMerits.fill(undefined, props.merits.length);

  const longFlaws = [...props.flaws, undefined];
  longFlaws.length = Math.max(props.flaws.length, 3);
  longFlaws.fill(undefined, props.flaws.length);

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{props.metaTitle}</title>
        {/* <!-- Google truncates title to 600 pixels or around 70 characters --> */}
        <meta name="description" content={props.metaDescription}/>
        {/* <!-- Google truncates description to 160 characters --> */}
        <meta name="author" content="TeeTwoLee"/>
      </Head>

      <body>
        {/* <!-- Hunter form --> */}
        <div className="container">
          {/* <!-- Description --> */}
          <div className="mb-2">
            This character sheet lets you click on the merits and flaws to see additional details. Check out the <a href="https://youtube.com/playlist?list=PLOdqKo8BGAdhgmdU8CxkhY1ebt0ZMtgdI">Hololive EN TTRPG</a>.
            <br/>
            {props.sourceDescription && <React.Fragment> {props.sourceDescription}</React.Fragment>}{props.source && <React.Fragment> (<a href={props.source}>source</a>)</React.Fragment>}
          </div>

          <h1 className="text-center">Hunter: The Vigil</h1>
          {/* <!-- Top 3-column terms --> */}
          <div>
            <div className="row">
              <div className="col-md">
                <div>Name: <b>{props.name}</b></div>
                <div>Player: <b>{props.player}</b></div>
                <div><a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="The name of the campaign. In this case, it's always Myth Breakers.">Chronicle</a>: <b>Myth Breakers</b></div>
              </div>
              <div className="col-md">
                <div><a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="If your character takes an action related to their virtue or vice, your character can receive special bonuses.">Virtue</a>: <b>{props.virtue}</b></div>
                {/* <!-- Choose between Charity, Faith, Fortitude, Hope, Justice, Prudence, and Temperance. --> */}
                <div><a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="If your character takes an action related to their virtue or vice, your character can receive special bonuses.">Vice</a>: <b>{props.vice}</b></div>
                {/* <!--  Choose between Envy, Gluttony, Greed, Lust, Pride, Sloth, and Wrath.--> */}
                <div><a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="A short description of your character.">Concept</a>: <b>{props.concept}</b></div>
              </div>
              <div className="col-md">
                <div>Profession: <b>{props.profession}</b></div>
                <div>Compact/Conspiracy: <b>{props.compact}</b></div>
              </div>
            </div>
          </div>
          {/* <!-- Cheat sheet --> */}
          <div>
            <h2 className="text-center">Cheat Sheet</h2>
            <h3 className="text-center">Rolls</h3>
            <div>
              <p>
                Rolls: Success on 8, 9, 10. Reroll 10s.
                <br/>
                Perception check ({props.wits + props.composure}) = Wits ({props.wits}) + Composure ({props.composure})
                {props.cheatSheet}
              </p>
            </div>
          </div>
          {/* <!-- Attributes --> */}
          <div>
            <h2 className="text-center">Attributes</h2>
            <div className="row">
              <div className="col-md-2">
                <div>Power</div>
                <div>Finesse</div>
                <div>Resistance</div>
              </div>
              <div className="col-md border">
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Long-term smarts">Intelligence</a>
                  <div className="float-end">
                    {numberToCircleWithPadding(props.intelligence, 5)}
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="In-the-moment smarts">Wits</a>
                  <div className="float-end">
                    {numberToCircleWithPadding(props.wits, 5)}
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Mental will to withstand difficult things">Resolve</a>
                  <div className="float-end">
                    {numberToCircleWithPadding(props.resolve, 5)}
                  </div>
                </div>
              </div>
              <div className="col-md border">
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Physical strength">Strength</a>
                  <div className="float-end">
                    {numberToCircleWithPadding(props.strength, 5)}
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Being agile or good with your hands">Dexterity</a>
                  <div className="float-end">
                    {numberToCircleWithPadding(props.dexterity, 5)}
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Physical stamina">Stamina</a>
                  <div className="float-end">
                    {numberToCircleWithPadding(props.stamina, 5)}
                  </div>
                </div>
              </div>
              <div className="col-md border">
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Ability to gather and maintain attention">Presence</a>
                  <div className="float-end">
                    {numberToCircleWithPadding(props.presence, 5)}
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Ability to change other people's minds and trick them">Manipulation</a>
                  <div className="float-end">
                    {numberToCircleWithPadding(props.manipulation, 5)}
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Ability to stay calm">Composure</a>
                  <div className="float-end">
                    {numberToCircleWithPadding(props.composure, 5)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- First page bottom --> */}
          <div className="row">
            <div className="col-md-4">
              {/* <!-- Skills --> */}
              <div className="row">
                <h2 className="text-center">Skills</h2>
                {/* <!-- Mental --> */}
                <div>
                  <h3 className="text-center mb-0">Mental</h3>
                  <div className="text-center mb-2">(-3 unskilled)</div>
                  {
                    [
                      { skillName: "Academics", skill: props.academics },
                      { skillName: "Computer", skill: props.computer },
                      { skillName: "Crafts", skill: props.crafts },
                      { skillName: "Investigation", skill: props.investigation },
                      { skillName: "Medicine", skill: props.medicine },
                      { skillName: "Occult", skill: props.occult },
                      { skillName: "Politics", skill: props.politics },
                      { skillName: "Science", skill: props.science },
                    ].map((e) => skillBlock(e.skillName, e.skill)).map(addKey)
                  }
                </div>
                {/* <!-- Physical --> */}
                <div>
                  <h3 className="text-center mb-0">Physical</h3>
                  <div className="text-center mb-2">(-1 unskilled)</div>
                  {
                    [
                      { skillName: "Athletics", skill: props.athletics },
                      { skillName: "Brawl", skill: props.brawl },
                      { skillName: "Drive", skill: props.drive },
                      { skillName: "Firearms", skill: props.firearms },
                      { skillName: "Larceny", skill: props.larceny },
                      { skillName: "Stealth", skill: props.stealth },
                      { skillName: "Survival", skill: props.survival },
                      { skillName: "Weaponry", skill: props.weaponry },
                    ].map((e) => skillBlock(e.skillName, e.skill)).map(addKey)
                  }
                </div>
                {/* <!-- Social --> */}
                <div>
                  <h3 className="text-center mb-0">Social</h3>
                  <div className="text-center mb-2">(-1 unskilled)</div>
                  {
                    [
                      { skillName: "Animal Ken", skill: props.animalKen },
                      { skillName: "Empathy", skill: props.empathy },
                      { skillName: "Expression", skill: props.expression },
                      { skillName: "Intimidation", skill: props.intimidation },
                      { skillName: "Persuasion", skill: props.persuasion },
                      { skillName: "Socialize", skill: props.socialize },
                      { skillName: "Streetwise", skill: props.streetwise },
                      { skillName: "Subterfuge", skill: props.subterfuge },
                    ].map((e) => skillBlock(e.skillName, e.skill)).map(addKey)
                  }
                </div>
              </div>
            </div>
            {/* <!-- Other traits --> */}
            <div className="col-md">
              <h2 className="text-center">Other Traits</h2>
              {/* <!-- Upper section --> */}
              <div className="row mb-2">
                {/* <!-- Middle column --> */}
                <div className="col-md">
                  {/* <!-- Merits --> */}
                  <div>
                    <h3 className="text-center">Merits</h3>
                    <div>
                      {
                        longMerits.map((merit) => meritBlock(merit)).map(addKey)
                      }
                    </div>
                  </div>
                  {/* <!-- Flaws --> */}
                  <div className="mb-2">
                    <h3 className="text-center">Flaws</h3>
                    <div>
                      {
                        longFlaws.map((flaw) => flawBlock(flaw)).map(addKey)
                      }
                    </div>
                  </div>
                  {/* <!-- Descriptions --> */}
                  <div>
                    <div>
                      <div className="float-start">
                        Size:
                      </div>
                      <div className="between-floats">
                        <input type="text" className="input-underline-only" placeholder="" value={`${props.size}`}/>
                      </div>
                    </div>
                    <div>
                      <div className="float-start">
                        Speed:
                      </div>
                      <div className="between-floats">
                        <input type="text" className="input-underline-only" placeholder="" value={`${props.strength + props.dexterity + 5}`}/>
                      </div>
                    </div>
                    <div>
                      <div className="float-start">
                        Defense:
                      </div>
                      <div className="between-floats">
                        <input type="text" className="input-underline-only" placeholder="" value={`${Math.min(props.dexterity, props.wits)}`}/>
                      </div>
                    </div>
                    <div>
                      <div className="float-start">
                        Armor:
                      </div>
                      <div className="between-floats">
                        <input type="text" className="input-underline-only" placeholder=""/>
                      </div>
                    </div>
                    <div>
                      <div className="float-start">
                        Initiative Mod:
                      </div>
                      <div className="between-floats">
                        <input type="text" className="input-underline-only" placeholder="" value={`${props.dexterity + props.composure}`}/>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Right column --> */}
                <div className="col-md">
                  {/* <!-- Health --> */}
                  <div className="mb-2">
                    <h3 className="text-center">Health</h3>
                    <div className="text-center font-size-sm">
                      {
                        numberToCircleNoPadding(props.stamina + props.size, 12)
                      }
                    </div>
                    <div className="text-center font-size-sm">
                      {
                        numberToSquare(0, 12)
                      }
                    </div>
                  </div>
                  {/* <!-- Willpower --> */}
                  <div className="mb-2">
                    <h3 className="text-center">Willpower</h3>
                    <div className="text-center font-size-sm">
                      {
                        numberToCircleNoPadding(props.resolve + props.composure, 10)
                      }
                    </div>
                    <div className="text-center font-size-sm">
                      {
                        numberToSquare(0, 10)
                      }
                    </div>
                    <div className="text-center font-size-sm">
                      Risked: <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                    </div>
                  </div>
                  {/* <!-- Morality --> */}
                  <div>
                    <h3 className="text-center">Morality</h3>
                    <div>
                      {
                        Array(10).fill(0).map((_, i) => i+1).reverse().map(e => moralityBlock(e, e === props.morality)).map(addKey)
                      }
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Bottom of first page --> */}
              {/* <!-- Weapon/Attack --> */}
              <div>
                <table className="table low-margin-table">
                  <thead>
                    <tr>
                      <th scope="col">Weapon/Attack</th>
                      <th scope="col">Dice Mod.</th>
                      <th scope="col">Range</th>
                      <th scope="col">Clip</th>
                      <th scope="col">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                    </tr>
                    <tr>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                    </tr>
                    <tr>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                    </tr>
                    <tr>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- Equipment --> */}
              <div>
                <table className="table low-margin-table">
                  <thead>
                    <tr>
                      <th scope="col">Equipment</th>
                      <th scope="col">Durability</th>
                      <th scope="col">Structure</th>
                      <th scope="col">Size</th>
                      <th scope="col">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                    </tr>
                    <tr>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                    </tr>
                    <tr>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                    </tr>
                    <tr>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                      <td><input type="text" className="input-underline-only full-width" placeholder=""/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h2 className="text-center">Endowments</h2>
              <h2 className="text-center">Tactics</h2>
              <h2 className="text-center">Tells</h2>
              <h2 className="text-center">Experience</h2>
            </div>
            <div className="col-md">
              <h2 className="text-center">History</h2>
              <div>
                <textarea style={{width: "100%", minHeight: "200px"}} value={props.history}/>
              </div>
              <h2 className="text-center">Description</h2>
              <div className="row">
                <div>
                  <textarea style={{width: "100%", minHeight: "100px"}} value={props.description}/>
                </div>

                <div className="col">
                  <div>
                    <div className="float-start">
                      Age:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value={props.age}/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Hair:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value={props.hair}/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Eyes:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value={props.eyes}/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Sex:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value={props.sex}/>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <div className="float-start">
                      Height:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value={props.height}/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Weight:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value={props.weight}/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Race:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value={props.race}/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Nationality:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value={props.nationality}/>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-center">Expanded Endowments</h2>
              <div className="row">
                <div className="col">
                  Name
                </div>
                <div className="col">
                  Level
                </div>
                <div className="col">
                  ?
                </div>
                <div className="col">
                  ?
                </div>
              </div>
              <h2 className="text-center">Equipment</h2>
              <div className="row">
                <div className="col">
                  Name
                </div>
                <div className="col">
                  Durability
                </div>
                <div className="col">
                  ?
                </div>
                <div className="col">
                  ?
                </div>
                <div className="col">
                  ?
                </div>
              </div>
              <h2 className="text-center">Combat</h2>
              <div className="row">
                <div className="col">
                  ?
                </div>
                <div className="col">
                  ?
                </div>
                <div className="col">
                  ?
                </div>
                <div className="col">
                  ?
                </div>
                <div className="col">
                  ?
                </div>
              </div>
            </div>
          </div>

          <div className="mb-2 mt-2 p-1 border">
            This is a work-in-progress. Currently, this version only has the first page of Gura&apos;s character sheet, but I plan to add all the members and all versions of their character sheet. Thanks to Mr. Gone for letting me base my site off of his character sheets. Feedback welcome at TeeTwoLee at Gmail, on <a href="https://twitter.com/TeeTwoLee">Twitter</a>, or on <a href="https://www.reddit.com/user/TeeTwoLee/">Reddit</a>.
          </div>
        </div>
      </body>

      {/* <!-- Scripts --> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
      <Script src={`${basePath}/bootstrap-script.js`}></Script>
    </>
  )
}
