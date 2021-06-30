import Head from 'next/head';
import Script from 'next/script';

export default function Gura() {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Myth Breakers Summary: Gura/Scout</title>
        {/* <!-- Google truncates title to 600 pixels or around 70 characters --> */}
        <meta name="description" content="Myth Breakers summary of Gura/Scout for the Hololive EN Hunter Myth: Myth Breakers TTRPG campaign."/>
        {/* <!-- Google truncates description to 160 characters --> */}
        <meta name="author" content="TeeTwoLee"/>
      </Head>

      <body>
        {/* <!-- Hunter form --> */}
        <div className="container">
          {/* <!-- Description --> */}
          <div className="mb-2">
            This character sheet lets you click on the merits and flaws to see additional details. Check out the <a href="https://youtube.com/playlist?list=PLOdqKo8BGAdhgmdU8CxkhY1ebt0ZMtgdI">Hololive EN TTRPG</a>. Gura changed her idea a lot, so I&apos;ll update it soon after the <a href="https://www.youtube.com/watch?v=_MiGxbsKyO8">Scout tutorial session</a>.
          </div>

          <h1 className="text-center">Hunter: The Vigil</h1>
          {/* <!-- Top 3-column terms --> */}
          <div>
            <div className="row">
              <div className="col-md">
                <div>Name: <b>Scout</b></div>
                <div>Player: <b>Gura</b></div>
                <div><a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="The name of the campaign. In this case, it's always Myth Breakers.">Chronicle</a>: <b>Myth Breakers</b></div>
              </div>
              <div className="col-md">
                <div><a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="If your character takes an action related to their virtue or vice, your character can receive special bonuses.">Virtue</a>: <b>Fortitude</b></div>
                {/* <!-- Choose between Charity, Faith, Fortitude, Hope, Justice, Prudence, and Temperance. --> */}
                <div><a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="If your character takes an action related to their virtue or vice, your character can receive special bonuses.">Vice</a>: <b>Wrath</b></div>
                {/* <!--  Choose between Envy, Gluttony, Greed, Lust, Pride, Sloth, and Wrath.--> */}
                <div><a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="A short description of your character.">Concept</a>: <b>Southern Farm Girl Forger</b></div>
              </div>
              <div className="col-md">
                <div>Profession: <b>Farmer</b></div>
                <div>Compact/Conspiracy: <b></b></div>
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
                Perception check (5) = Wits (4) + Composure (1)
                <br/>
                Persuasion = Persuasion (-1) + (Manipulation (2) or Presence (1))
                <br/>
                <input className="form-check-input checkbox-round" type="checkbox" value=""/> Reroll one crafts roll (Renowned Artisan)
                <br/>
                Ignore 1 fatigue/wound (Iron Stamina)
                <br/>
                Add 3 dice to rolls against disease, poison, deprivation, suffocation and unconsciousness (Hardy)
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
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="In-the-moment smarts">Wits</a>
                  <div className="float-end">
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Mental will to withstand difficult things">Resolve</a>
                  <div className="float-end">
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                  </div>
                </div>
              </div>
              <div className="col-md border">
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Physical strength">Strength</a>
                  <div className="float-end">
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Being agile or good with your hands">Dexterity</a>
                  <div className="float-end">
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Physical stamina">Stamina</a>
                  <div className="float-end">
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                  </div>
                </div>
              </div>
              <div className="col-md border">
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Ability to gather and maintain attention">Presence</a>
                  <div className="float-end">
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Ability to change other people's minds and trick them">Manipulation</a>
                  <div className="float-end">
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                  </div>
                </div>
                <div>
                  <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Ability to stay calm">Composure</a>
                  <div className="float-end">
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                    <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
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
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Academics</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Computer</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics" checked/>
                      <label className="form-check-label">Crafts</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value="Weapon Creation"/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Investigation</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Medicine</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Occult</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Politics</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Science</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                </div>
                {/* <!-- Physical --> */}
                <div>
                  <h3 className="text-center mb-0">Physical</h3>
                  <div className="text-center mb-2">(-1 unskilled)</div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Athletics</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Brawl</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Drive</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Firearms</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Larceny</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Stealth</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics" checked/>
                      <label className="form-check-label">Survival</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value="Forging"/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics" checked/>
                      <label className="form-check-label">Weaponry</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value="Aggressive Light Weapon"/>
                    </div>
                  </div>
                </div>
                {/* <!-- Social --> */}
                <div>
                  <h3 className="text-center mb-0">Social</h3>
                  <div className="text-center mb-2">(-1 unskilled)</div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Animal Ken</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Empathy</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Expression</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Intimidation</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Persuasion</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Socialize</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Streetwise</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
                  <div className="font-size-sm">
                    <div className="float-start">
                      <input className="form-check-input checkbox-square" type="checkbox" value="" id="checkSkillAcademics"/>
                      <label className="form-check-label">Subterfuge</label>
                    </div>
                    <div className="float-end">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder=""/>
                    </div>
                  </div>
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
                      <div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Ignore offhand penalties."><input type="text" className="input-underline-only" placeholder="" value="Ambidextrous"/></a>
                        </div>
                      </div>
                      <div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="	Add Hardy dots as a bonus to rolls against disease, poison, deprivation, suffocation and unconsciousness."><input type="text" className="input-underline-only" placeholder="" value="Hardy"/></a>
                        </div>
                      </div>
                      <div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Ignore penalties from fatigue or wounds up to your rating in Iron Stamina."><input type="text" className="input-underline-only" placeholder="" value="Iron Stamina"/></a>
                        </div>
                      </div>
                      <div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value="" checked/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="You've been taught the ways of an ancient Iremite guild. Once per chapter, you may reroll a relevant Crafts action."><input type="text" className="input-underline-only" placeholder="" value="Renowned Artisan"/></a>
                        </div>
                      </div>
                      <div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="TODO"><input type="text" className="input-underline-only" placeholder=""/></a>
                        </div>
                      </div>
                      <div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="TODO"><input type="text" className="input-underline-only" placeholder=""/></a>
                        </div>
                      </div>
                      <div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="TODO"><input type="text" className="input-underline-only" placeholder=""/></a>
                        </div>
                      </div>
                      <div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                          <input className="form-check-input checkbox-round checkbox-sm checkbox-sm-top-margin" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Flaws --> */}
                  <div className="mb-2">
                    <h3 className="text-center">Flaws</h3>
                    <div>
                      <div className="between-floats">
                        <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="You never learned to write in your native language. You can understand most traffic signs and warning labels that rely on pictographs, but written instructions and warnings are completely beyond your comprehension."><input type="text" className="input-underline-only" placeholder="" value="Illiterate (4)"/></a>
                      </div>
                      <div className="between-floats">
                        <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="Your hearing is defective. The difficulties of any rolls involving the use of hearing are increased by two." placeholder=""><input type="text" className="input-underline-only" placeholder="" value="Hard of Hearing (1)"/></a>
                      </div>
                      <div className="between-floats">
                        <a tabIndex={0} className="link-dark" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-content="TODO"><input type="text" className="input-underline-only" placeholder="" value=""/></a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Descriptions --> */}
                  <div>
                    <div>
                      <div className="float-start">
                        Size:
                      </div>
                      <div className="between-floats">
                        <input type="text" className="input-underline-only" placeholder="" value="5"/>
                      </div>
                    </div>
                    <div>
                      <div className="float-start">
                        Speed:
                      </div>
                      <div className="between-floats">
                        <input type="text" className="input-underline-only" placeholder="" value="10"/>
                      </div>
                    </div>
                    <div>
                      <div className="float-start">
                        Defense:
                      </div>
                      <div className="between-floats">
                        <input type="text" className="input-underline-only" placeholder="" value="2"/>
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
                        <input type="text" className="input-underline-only" placeholder="" value="4"/>
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
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="text-center font-size-sm">
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                    </div>
                  </div>
                  {/* <!-- Willpower --> */}
                  <div className="mb-2">
                    <h3 className="text-center">Willpower</h3>
                    <div className="text-center font-size-sm">
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value="" checked/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-round checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="text-center font-size-sm">
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                      <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                    </div>
                    <div className="text-center font-size-sm">
                      Risked: <input className="form-check-input checkbox-square checkbox-sm" type="checkbox" value=""/>
                    </div>
                  </div>
                  {/* <!-- Morality --> */}
                  <div>
                    <h3 className="text-center">Morality</h3>
                    <div>
                      <div>
                        <div className="float-start">
                          10
                        </div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-start">
                          9
                        </div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-start">
                          8
                        </div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-start">
                          7
                        </div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round" type="checkbox" value="" checked/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-start">
                          6
                        </div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-start">
                          5
                        </div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-start">
                          4
                        </div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-start">
                          3
                        </div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-start">
                          2
                        </div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
                      <div>
                        <div className="float-start">
                          1
                        </div>
                        <div className="float-end">
                          <input className="form-check-input checkbox-round" type="checkbox" value=""/>
                        </div>
                        <div className="between-floats">
                          <input type="text" className="input-underline-only" placeholder=""/>
                        </div>
                      </div>
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
                <textarea style={{width: "100%", minHeight: "200px"}}>
      Comes from the very small town of Beltbuckle. A young woman who grew up on her family&apos;s farm with her ma, pa, and her younger sister. Not much happens in Belt Buckle. The town has 25 people in it. So she introduces herself as Scout from Belt Buckle. At a very young age, her pa taught her how to forge horseshoes and she felt that knives were the next step, so she knows how to forge things. Forging has caused her hearing to get worse since she rarely wore ear protection. She likes doing donuts and driving recklessly with pa&apos;s old Ford. Pa would rather she be useful and put a tractor to use, Scout doesn&apos;t think they go fast enough. Scout was never taught to read past basic labels such as toxic, do not ingest, and her social skills are very lacking. Scout has ample rural survival skills, little to no knowledge of modern cityfolk skills aside from what she learned from outdated VHS and DVD tapes. Farm life for Scout has been rather lonely. Aside from her family&apos;s company and those around her in Belt Buckle, she&apos;s been alone for the majority of her life. She lacks empathy and can be selfish due to always having to make things work for herself.</textarea>
              </div>
              <h2 className="text-center">Description</h2>
              <div className="row">
                <div>
                  <textarea style={{width: "100%", minHeight: "100px"}}>
Muscular, Headstrong, Vulgar (Swears), Opportunist, Daredevil, Illiterate, Hard-of-hearing
Strong-willed.
US southern country accent
Scout likes knives, blades, swords, etc. She also likes forging and farm activities.
Studied and forged the blade.
Obsessed with watching old films, western to samurai. Works with her hands, not her head. Not dumb, necessarily but...
Scout wears &quot;Forge goggles&quot; on her head.
Not mean-spirited, but just doesn&apos;t think of other people. More of a lone wolf. Maybe hesitation towards people she doesn&apos;t know. Catious of outsiders.
Likes kicking down doors because it&apos;s fun and she can.
She likes to wear a homemade eyepatch. She doesn&apos;t need an eyepatch, her eyes work fine. The eyepatch can also be used as gauze/tourniquet.
Scout wouldn&apos;t wear a bra. Slim on top, bottom-heavy/pear-shaped.
Long hair
Foot Size: 7</textarea>
                </div>
                <div className="col">
                  <div>
                    <div className="float-start">
                      Age:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value="18"/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Hair:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value=""/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Eyes:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value=""/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Sex:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value="Female"/>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <div className="float-start">
                      Height:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value="168 cm (5'6&quot;)"/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Weight:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value="145 lb (65.8 kg)"/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Race:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value=""/>
                    </div>
                  </div>
                  <div>
                    <div className="float-start">
                      Nationality:
                    </div>
                    <div className="between-floats">
                      <input type="text" className="input-underline-only" placeholder="" value="Female"/>
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

        {/* <!-- Local scripts --> */}
        <Script src="/public/script.js"></Script>
      </body>
    </>
  )
}
