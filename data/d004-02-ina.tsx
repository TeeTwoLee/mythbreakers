import { HealthSquareType } from "../components/HealthSquare";
import { SheetProps } from "../components/sheet";
import { d00401Ina } from "./d004-01-ina";

export const d00402Ina: SheetProps = {
  ...d00401Ina,

  id: "d00402ina",
  source: "https://youtu.be/bXwW-g6P3zI?list=PLB8Nt5W7hnKA-nna_2FcXRSeg0un0dogU",
  sourceDescription: "Ina's character sheet at the end of her first tutorial session",

  summaryTitle: "Tutorial Session Summary (Spoilers)",
  summary: <>TODO</>,

  healthState: [
    { initialIcon: HealthSquareType.FillSquare },
    { initialIcon: HealthSquareType.FillSquare },
    { initialIcon: HealthSquareType.XSquare },
    { initialIcon: HealthSquareType.XSquare },
    { initialIcon: HealthSquareType.XSquare }, // 5
    { initialIcon: HealthSquareType.XSquare },
    { initialIcon: HealthSquareType.EmptySquare },
    { initialIcon: HealthSquareType.EmptySquare },
    { initialIcon: HealthSquareType.EmptySquare },
    { initialIcon: HealthSquareType.EmptySquare }, // 10
    { initialIcon: HealthSquareType.EmptySquare },
    { initialIcon: HealthSquareType.EmptySquare },
  ],
  willpowerState: 3,
  morality: 7,
}
