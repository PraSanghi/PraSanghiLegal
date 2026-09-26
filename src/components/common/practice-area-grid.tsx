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
      <ul className="grid grid-cols-1 gap-4 pb-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <li key={item.slug} className="relative h-64 sm:h-72">
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              className="group relative flex h-full w-full flex-col justify-end overflow-hidden bg-muted text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 31vw, (min-width: 640px) 47vw, 90vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent" />
              <div className="relative p-5">
                <p className="text-heading-sm font-bold text-white">
                  <Bi en={item.title} hi={item.titleHi} />
                </p>
                <p className="mt-1.5 line-clamp-2 text-body-sm text-white/85">
                  <Bi en={item.summary} hi={item.summaryHi} />
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <PracticeAreaModal item={activeItem} onOpenChange={(open) => !open && setActiveItem(null)} />
    </div>
  )
}
