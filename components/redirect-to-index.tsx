import Link from "next/link";

export function RedirectToIndex() {
  return (
    <div className="container">
      <div className="mt-2 mb-2 alert alert-warning" role="alert">
        To see the latest version of the character sheets, visit the <Link href="/" >home page</Link>.
      </div>
    </div>
  );
}