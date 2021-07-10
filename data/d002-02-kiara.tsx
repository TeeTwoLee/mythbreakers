import { HealthSquareType } from "../components/HealthSquare";
import { SheetProps } from "../components/sheet";
import { d00201Kiara } from "./d002-01-kiara";

export const d00202Kiara: SheetProps = {
  ...d00201Kiara,

  id: "d00202kiara",
  source: "https://youtu.be/4hB5QuSYBKw?list=PLB8Nt5W7hnKA-nna_2FcXRSeg0un0dogU",
  sourceDescription: "Kiara's character sheet at the end of her first tutorial session",

  summaryTitle: "Tutorial Session Summary (Spoilers)",
  summary: <>TODO</>,

  healthState: [
    { initialIcon: HealthSquareType.XSquare },
    { initialIcon: HealthSquareType.XSquare },
    { initialIcon: HealthSquareType.SlashSquare },
    { initialIcon: HealthSquareType.EmptySquare },
    { initialIcon: HealthSquareType.EmptySquare }, // 5
    { initialIcon: HealthSquareType.EmptySquare },
    { initialIcon: HealthSquareType.EmptySquare },
    { initialIcon: HealthSquareType.EmptySquare }, // max
    { initialIcon: HealthSquareType.EmptySquare },
    { initialIcon: HealthSquareType.EmptySquare }, // 10
    { initialIcon: HealthSquareType.EmptySquare },
    { initialIcon: HealthSquareType.EmptySquare },
  ],
  morality: 7,
}
