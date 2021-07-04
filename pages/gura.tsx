import { RedirectToIndex } from "../components/redirect-to-index";
import Sheet from "../components/sheet";
import { d00701Gura } from "../data/d007-01-gura";

export default function Gura() {
  return (
    <>
      <RedirectToIndex />
      <Sheet {...d00701Gura} />
    </>
  )
}
