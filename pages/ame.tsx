import { RedirectToIndex } from "../components/redirect-to-index";
import Sheet from "../components/sheet";
import { d00501Ame } from "../data/d005-01-ame";

export default function Ame() {
  return (
    <>
      <RedirectToIndex />
      <Sheet {...d00501Ame} />
    </>
  )
}
