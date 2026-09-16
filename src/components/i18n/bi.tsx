export interface BiProps {
  en: string
  hi: string
}

// Renders both languages server-side and lets CSS (globals.css, keyed off
// `html[data-lang]`) show only one — so every page stays a plain Server
// Component (generateStaticParams/generateMetadata included) and the
// toggle in the header just flips an attribute, no client-side data
// fetching, route change, or hydration mismatch.
export function Bi({ en, hi }: BiProps) {
  return (
    <>
      <span className="lang-en">{en}</span>
      <span className="lang-hi">{hi}</span>
    </>
  )
}
