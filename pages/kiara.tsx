import { RedirectToIndex } from "../components/redirect-to-index";
import Sheet from "../components/sheet";
import { d00201Kiara } from "../data/d002-01-kiara";

export default function Kiara() {
  return (
    <>
      <RedirectToIndex />
      <Sheet {...d00201Kiara} />
    </>
  )
}
