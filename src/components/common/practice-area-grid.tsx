'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bi } from '@/components/i18n/bi'
import { PracticeAreaModal } from '@/components/common/practice-area-modal'

export interface PracticeAreaGridItem {
  slug: string
  title: string
  titleHi: string
  summary: string
  summaryHi: string
  image: string
}

export interface PracticeAreaGridProps {
  items: PracticeAreaGridItem[]
}

// Replaces the old auto-advancing carousel per the client's direction: every
// service listed at once, same card design, laid out as a wrapping grid
// instead of a horizontal scroll track. No inner scroll container — the
// hero's "Practice Areas" state itself grows taller than one viewport and
// scrolls as part of the single page scroll (positioning-hero.tsx), so this
// is a plain flowing grid, not a scrollable panel.
export function PracticeAreaGrid({ items }: PracticeAreaGridProps) {
  const [activeItem, setActiveItem] = useState<PracticeAreaGridItem | null>(null)

  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 pb-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item) => (
          <li key={item.slug} className="relative h-36 [perspective:1000px] sm:h-40 lg:h-44">
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              className="group relative block h-full w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <div className="relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] motion-reduce:transition-none group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
                {/* Front: image + heading only */}
                <div className="absolute inset-0 flex flex-col justify-end overflow-hidden bg-muted [backface-visibility:hidden]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 23vw, (min-width: 640px) 31vw, 47vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/25 to-transparent" />
                  <p className="relative p-3 text-body-sm font-bold leading-tight text-white">
                    <Bi en={item.title} hi={item.titleHi} />
                  </p>
                </div>
                {/* Back: description — blue-700, not blue-900: this grid
                    sits on a blue-900 hero panel, so a blue-900 back face
                    would be visually identical to the page behind it and
                    the card would appear to vanish on flip. blue-700 is
                    already the site's tested white-on-dark-blue combo
                    (primary button fill), so it reads as a distinct card
                    without introducing a new color. */}
                <div className="absolute inset-0 flex flex-col justify-center overflow-hidden bg-blue-700 p-3 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="line-clamp-5 text-body-sm text-white/90">
                    <Bi en={item.summary} hi={item.summaryHi} />
                  </p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <PracticeAreaModal item={activeItem} onOpenChange={(open) => !open && setActiveItem(null)} />
    </div>
  )
}
