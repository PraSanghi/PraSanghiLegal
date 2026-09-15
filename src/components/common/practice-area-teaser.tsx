import Image from 'next/image'
import Link from 'next/link'

export interface PracticeAreaTeaserProps {
  title: string
  href: string
  image: string
}

// Deliberately title-only (no description, no "Learn more") — the full
// PracticeAreaCard with summary text lives on /practice-areas. This tile is
// a visual teaser meant to entice a click, not a substitute for the index.
export function PracticeAreaTeaser({ title, href, image }: PracticeAreaTeaserProps) {
  return (
    <Link
      href={href}
      className="group relative flex aspect-4/5 items-end overflow-hidden bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/85 via-blue-900/10 to-transparent" />
      <p className="relative p-5 text-heading-sm font-semibold text-white">{title}</p>
    </Link>
  )
}
