import React from "react";
import Sheet, { SheetProps } from "../components/sheet";
import { sessions, sessionsType } from "../data/sessions";

interface SelectProps {
  value?: string
  title: string
  onChange: (event: React.ChangeEvent) => void
  items: {
    text: string
    value: string
  }[]
}

function Select(props: SelectProps) {
  return (
    <div className="d-inline-block">
      <select className="form-select" aria-label={props.title} onChange={props.onChange} value={props.value}>
        <option value="">{props.title}</option>
        {
          props.items.map((item, index) => (
            <option key={index} value={item.value}>{item.text}</option>
          ))
        }
      </select>
    </div>
  )
}

const hashArgsToHash = (hashArgs: { [key: string]: string | undefined }): string => {
  return Object.entries(hashArgs).reduce((prev, curr) => `${prev}&${curr[0]}=${curr[1]}`, "").substr(1);
}

export default function Home() {
  const hash = typeof window !== 'undefined' ? window.location.hash.substr(1) : "";
  const hashArgs = hash.split('&').reduce(function (res: { [key: string]: string | undefined }, item) {
    var parts = item.split('=');
    if (parts[0]) {
      res[parts[0]] = parts[1];
    }
    return res;
  }, {});

  const sessionKey = "session";
  const sessionTitle = "Session";
  const [session, setSession] = React.useState(hashArgs[sessionKey]);
  const sessionOnChange = (event: React.BaseSyntheticEvent) => {
    if (event.target.value) {
      hashArgs[sessionKey] = event.target.value;
      window.location.hash = hashArgsToHash(hashArgs);
      setSession(event.target.value);
    }
  }

  const playerKey = "player";
  const playerTitle = "Player";
  const [player, setPlayer] = React.useState(hashArgs[playerKey]);
  const playerOnChange = (event: React.BaseSyntheticEvent) => {
    if (event.target.value) {
      hashArgs[playerKey] = event.target.value;
      window.location.hash = hashArgsToHash(hashArgs);
      setPlayer(event.target.value);
    }
  }

  const sheetProps: SheetProps | undefined = (session && player && (sessions as sessionsType)[session]?.[player]) || undefined;

  return (
    <>
      <div className="container text-center mb-2">
        <div className="mt-2">
          Select a session: <Select 
            value={session}
            title={sessionTitle}
            onChange={sessionOnChange}
            items={[
              { text: "Tutorial Session (end)", value: "tutorialSessionEnd" },
              { text: "Tutorial Session (start)", value: "tutorialSessionStart" },
            ]}
          />
        </div>
        <div className="mt-2">
          Select a player: <Select 
            value={player}
            title={playerTitle}
            onChange={playerOnChange}
            items={[
              { text: "Ame", value: "ame" },
              { text: "Gura", value: "gura" },
              { text: "Ina", value: "ina" },
              { text: "Kiara", value: "kiara" },
            ]}
          />
        </div>

        {
          sheetProps
            ? null
            : <div className="mt-2 alert alert-warning" role="alert">
              Select a session and player.
            </div>
        }
      </div>

      {
        sheetProps ? <Sheet {...sheetProps}/> : <Sheet {...sessions.tutorialSessionStart.gura}/>
      }
    </>
  );
}
