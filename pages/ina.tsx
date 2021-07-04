import { RedirectToIndex } from "../components/redirect-to-index";
import Sheet from "../components/sheet";
import { d00401Ina } from "../data/d004-01-ina";

export default function Ina() {
  return (
    <>
      <RedirectToIndex />
      <Sheet {...d00401Ina} />
    </>
  )
}
