import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { meritData, meritName } from '../data/merits';
import { flawData, flawName } from '../data/flaws';
import darkPack from '../resources/darkpack.jpg';
import { HealthSquare, HealthSquareProps } from './HealthSquare';

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

  id: string
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

  health: number
  healthState: HealthSquareProps[]
  willpower: number
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

function addKey(node: React.ReactNode, index: number, id: string) {
  return <React.Fragment key={`${id}${index}`}>{node}</React.Fragment>;
}

function numberToCircleWithPadding(num: number = 0, total: number, id: string) {
  const arr: React.ReactNode[] = [];
  arr.length = total;

  const checked = <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" defaultChecked/>;
  const unchecked = <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>;

  return arr.fill(checked, 0, num).fill(unchecked, num, total).map((e, index) => addKey(e, index, id));
}

function numberToCircleNoPadding(num: number = 0, total: number, id: string) {
  const arr: React.ReactNode[] = [];
  arr.length = total;

  const checked = <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" defaultChecked/>
  const unchecked = <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>

  return arr.fill(checked, 0, num).fill(unchecked, num, total).map((e, index) => addKey(e, index, id));
}

function numberToSquare(num: number = 0, total: number, id: string) {
  const arr: React.ReactNode[] = [];
  arr.length = total;

  const checked = <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value="" defaultChecked/>
  const unchecked = <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>

  return arr.fill(checked, 0, num).fill(unchecked, num, total).map((e, index) => addKey(e, index, id));
}

function numberToHealthSquare(healthSquares: HealthSquareProps[], id: string) {
  return healthSquares.map((props, index) => <HealthSquare key={`${id}${index}`} {...props} />);
}

function skillBlock(id: string, skillName: string, skill?: Skill) {
  return (
    <div className="font-size-sm">
      <div className="float-start">
        <input className="form-check-input checkbox-square" type="checkbox" defaultChecked={!!(skill?.proficiency)}/>
        <label className="form-check-label">{skillName}</label>
      </div>
      <div className="float-end">
        {numberToCircleNoPadding(skill?.dots, 5, id)}
      </div>
      <div className="between-floats">
        <input type="text" className="input-underline-only" placeholder="" defaultValue={skill?.proficiency}/>
      </div>
    </div>
  );
}

function meritBlock(id: string, merit?: Merit) {
  return (
    <div>
      <div className="float-end">
        {numberToCircleWithPadding(merit?.dots, 5, id)}
      </div>
      <div className="between-floats">
        {merit
          ? <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content={meritData[merit.meritName].description}><input type="text" className="input-underline-only" placeholder="" defaultValue={merit.meritName}/></a>
          : <input type="text" className="input-underline-only" placeholder=""/>
        }
      </div>
    </div>
  );
}

function flawBlock(flaw?: Flaw) {
  return (
    <div className="between-floats">
      {flaw
        ? <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content={flawData[flaw.flawName].description}><input type="text" className="input-underline-only" placeholder="" defaultValue={`${flaw.flawName} (${flaw.dots})`}/></a>
        : <input type="text" className="input-underline-only" placeholder=""/>
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
        <input className="form-check-input checkbox-round" type="checkbox" value="" defaultChecked={checked}/>
      </div>
      <div className="between-floats">
        <input type="text" className="input-underline-only" placeholder=""/>
      </div>
    </div>
  );
}

function statBlock(id: string, text: string, popoverText: string, value: number) {
  return (
    <div>
      <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content={popoverText}>{text}</a>
      <div className="float-end">
        {numberToCircleWithPadding(value, 5, id)}
      </div>
    </div>
  )
}

function miniDescription(text: string, defaultValue?: string) {
  return (
    <div>
      <div className="float-start">
        {text}
      </div>
      <div className="between-floats">
        <input type="text" className="input-underline-only" placeholder="" defaultValue={defaultValue}/>
      </div>
    </div>
  )
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

      {/* <!-- Hunter form --> */}
      <div className="container">
        {/* <!-- Description --> */}
        <div className="mb-2">
          This character sheet lets you click on the merits and flaws to see additional details. To watch the series yourself, check out the <a href="https://www.youtube.com/playlist?list=PLB8Nt5W7hnKA-nna_2FcXRSeg0un0dogU">Hololive EN TTRPG playlist</a>.
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
              {
                [
                  { text: "Intelligence", popoverText: "Long-term smarts", value: props.intelligence },
                  { text: "Wits", popoverText: "In-the-moment smarts", value: props.wits },
                  { text: "Resolve", popoverText: "Mental will to withstand difficult things", value: props.resolve },
                ].map((e) => statBlock(props.id, e.text, e.popoverText, e.value)).map((e, index) => addKey(e, index, props.id))
              }
            </div>
            <div className="col-md border">
              {
                [
                  { text: "Strength", popoverText: "Physical strength", value: props.strength },
                  { text: "Dexterity", popoverText: "Being agile or good with your hands", value: props.dexterity },
                  { text: "Stamina", popoverText: "Physical stamina", value: props.stamina },
                ].map((e) => statBlock(props.id, e.text, e.popoverText, e.value)).map((e, index) => addKey(e, index, props.id))
              }
            </div>
            <div className="col-md border">
              {
                [
                  { text: "Presence", popoverText: "Ability to gather and maintain attention", value: props.presence },
                  { text: "Manipulation", popoverText: "Ability to change other people's minds and trick them", value: props.manipulation },
                  { text: "Composure", popoverText: "Ability to stay calm", value: props.composure },
                ].map((e) => statBlock(props.id, e.text, e.popoverText, e.value)).map((e, index) => addKey(e, index, props.id))
              }
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
                  ].map((e) => skillBlock(props.id, e.skillName, e.skill)).map((e, index) => addKey(e, index, props.id))
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
                  ].map((e) => skillBlock(props.id, e.skillName, e.skill)).map((e, index) => addKey(e, index, props.id))
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
                  ].map((e) => skillBlock(props.id, e.skillName, e.skill)).map((e, index) => addKey(e, index, props.id))
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
                      longMerits.map((merit) => meritBlock(props.id, merit)).map((e, index) => addKey(e, index, props.id))
                    }
                  </div>
                </div>
                {/* <!-- Flaws --> */}
                <div className="mb-2">
                  <h3 className="text-center">Flaws</h3>
                  <div>
                    {
                      longFlaws.map((flaw) => flawBlock(flaw)).map((e, index) => addKey(e, index, props.id))
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
                      <input type="text" className="input-underline-only" placeholder="" defaultValue={`${props.size}`}/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Speed:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" defaultValue={`${props.strength + props.dexterity + 5}`}/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Defense:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" defaultValue={`${Math.min(props.dexterity, props.wits)}`}/>
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
                      <input type="text" className="input-underline-only" placeholder="" defaultValue={`${props.dexterity + props.composure}`}/>
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
                      numberToCircleNoPadding(props.health, 12, props.id)
                    }
                  </div>
                  <div className="text-center font-size-sm">
                    <div className="btn-group">
                    {
                        numberToHealthSquare(props.healthState, props.id)
                    }
                    </div>
                  </div>
                </div>
                {/* <!-- Willpower --> */}
                <div className="mb-2">
                  <h3 className="text-center">Willpower</h3>
                  <div className="text-center font-size-sm">
                    {
                      numberToCircleNoPadding(props.willpower, 10, props.id)
                    }
                  </div>
                  <div className="text-center font-size-sm">
                    {
                      numberToSquare(0, 10, props.id)
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
                      Array(10).fill(0).map((_, i) => i+1).reverse().map(e => moralityBlock(e, e === props.morality)).map((e, index) => addKey(e, index, props.id))
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
              <textarea key={props.id} style={{width: "100%", minHeight: "200px"}} defaultValue={props.history}/>
            </div>
            <h2 className="text-center">Description</h2>
            <div className="row">
              <div>
                <textarea key={props.id} style={{width: "100%", minHeight: "100px"}} defaultValue={props.description}/>
              </div>

              <div className="col">
                {
                  [
                    { text: "Age:", defaultValue: props.age },
                    { text: "Hair:", defaultValue: props.hair },
                    { text: "Eyes:", defaultValue: props.eyes },
                    { text: "Sex:", defaultValue: props.sex },
                  ].map(e => miniDescription(e.text, e.defaultValue)).map((e, index) => addKey(e, index, props.id))
                }
              </div>
              <div className="col">
                {
                  [
                    { text: "Height:", defaultValue: props.height },
                    { text: "Weight:", defaultValue: props.weight },
                    { text: "Race:", defaultValue: props.race },
                    { text: "Nationality:", defaultValue: props.nationality },
                  ].map(e => miniDescription(e.text, e.defaultValue)).map((e, index) => addKey(e, index, props.id))
                }
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
          This is a work-in-progress. I plan to add a story summary and all versions of their character sheet. Thanks to <a href="https://mrgone.rocksolidshells.com/wod.html#htv">Mr. Gone</a> for letting me base my site off of his character sheets. Feedback welcome at TeeTwoLee at Gmail, on <a href="https://twitter.com/TeeTwoLee">Twitter</a>, or on <a href="https://www.reddit.com/user/TeeTwoLee/">Reddit</a>.
          <br/>
          <br/>
          I took the merits from the <a href="http://wodcodex.com/wiki/Merits,_Universal_(2nd_Edition)">Codex of Darkness wiki</a> and I took the flaws from the <a href="http://mistsofmemory.net/wiki/doku.php?id=general_flaws">World of Darkness: Dusk mists of memory wiki</a>. I don&apos;t know which version of World of Darkness Calli is playing, so the descriptions are likely not completely accurate. Additionally, Calli is not a rule lawyer so she will likely be flexible with interactions.
          <br/>
          <br/>
          I want to talk about Hunter Myth! Do you feel this way? If so, there&apos;s a discussion channel for Hunter Myth in most of the <a href="https://hololive.wiki/wiki/Fan_Discords#Hololive_English_1st_Generation">fan Discords</a>. I think the HololiveEN Fan Server and the Mori Calliope discussion channels are most active.
          <br/>
          <br/>
          This website is made in accordance with the World of Darkness <a href="https://www.worldofdarkness.com/dark-pack">Dark Pack</a> (fan activity) agreement.
          <br/>
          <div className="text-center">
            <Image width={185} height={122} src={darkPack} alt="Picture of Dark Pack logo" />
            <div>&copy; Paradox Interactive. Trademarks belong to their respective owners.</div>
          </div>
        </div>
      </div>

      {/* <!-- Scripts --> */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>
      <Script src={`${basePath}/bootstrap-script.js`}></Script>
    </>
  )
}
