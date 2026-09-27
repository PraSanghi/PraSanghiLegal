'use client'

import { useEffect, useRef, useState } from 'react'
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
  const gridRef = useRef<HTMLUListElement>(null)
  const [revealed, setRevealed] = useState(false)

  // Entrance stagger for the grid's first reveal — 15 cards appearing at
  // once (the site's single biggest visual moment) read as considerably
  // less "designed" than a quick per-card stagger. 25ms/item keeps the
  // full 15-card cascade under 400ms — fast enough not to feel like a
  // wait, per improve-animations AUDIT.md §7 (30-80ms stagger guidance,
  // biased toward the fast end for a grid this size, not a handful of
  // cards).
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <ul
        ref={gridRef}
        className="grid grid-cols-2 gap-3 pb-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {items.map((item, i) => (
          <li
            key={item.slug}
            style={{ transitionDelay: `${Math.min(i, 14) * 25}ms` }}
            className={`relative h-36 [perspective:1000px] transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none sm:h-40 lg:h-44 ${
              revealed ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
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
                {/* Back: description — off-white, not another dark blue:
                    this grid sits on a solid blue-900 hero panel, so any
                    dark back face (blue-900, blue-700) reads as barely
                    distinct from the page itself. A light card flipping up
                    against the dark backdrop is unambiguous at a glance,
                    and blue-900 text on off-white is the site's standard
                    body-text pairing everywhere else. */}
                <div className="absolute inset-0 flex flex-col justify-center overflow-hidden bg-off-white p-3 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="line-clamp-5 text-body-sm text-blue-900">
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
