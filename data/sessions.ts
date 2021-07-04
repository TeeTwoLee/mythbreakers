
import { SheetProps } from "../components/sheet";

import { d00201Kiara } from "../data/d002-01-kiara";
import { d00401Ina } from "../data/d004-01-ina";
import { d00501Ame } from "../data/d005-01-ame";
import { d00701Gura } from "../data/d007-01-gura";

import { d00202Kiara } from "./d002-02-kiara";
import { d00402Ina } from "./d004-02-ina";
import { d00502Ame } from "./d005-02-ame";
import { d00702Gura } from "./d007-02-gura";

export type sessionsType = { [key: string]: {
  [player: string]: SheetProps | undefined
} | undefined }
export const sessions = {
  tutorialSessionStart: {
    kiara: d00201Kiara,
    ina: d00401Ina,
    ame: d00501Ame,
    gura: d00701Gura,
  },
  tutorialSessionEnd: {
    kiara: d00202Kiara,
    ina: d00402Ina,
    ame: d00502Ame,
    gura: d00702Gura,
  },
};
