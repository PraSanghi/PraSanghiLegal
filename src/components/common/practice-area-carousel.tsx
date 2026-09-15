'use client'

import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { PracticeAreaTeaser } from '@/components/common/practice-area-teaser'

export interface PracticeAreaCarouselItem {
  slug: string
  title: string
  image: string
}

export interface PracticeAreaCarouselProps {
  items: PracticeAreaCarouselItem[]
}

// Native horizontal scroll-snap, not a JS carousel library — swipes on
// touch devices for free, and the arrow buttons just nudge that same
// scroll position by one card width.
export function PracticeAreaCarousel({ items }: PracticeAreaCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current
    const card = track?.querySelector<HTMLElement>('[data-carousel-card]')
    if (!track || !card) return
    track.scrollBy({ left: direction * (card.offsetWidth + 24), behavior: 'smooth' })
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((item) => (
          <div
            key={item.slug}
            data-carousel-card
            className="w-[75%] shrink-0 snap-start sm:w-[40%] lg:w-[calc(25%-18px)]"
          >
            <PracticeAreaTeaser
              title={item.title}
              href={`/practice-areas/${item.slug}`}
              image={item.image}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous practice area"
          className="flex size-10 items-center justify-center rounded-full border border-border text-blue-900 transition-colors duration-150 ease-out hover:border-teal-500 hover:text-teal-600"
        >
          <ArrowLeft weight="light" className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next practice area"
          className="flex size-10 items-center justify-center rounded-full border border-border text-blue-900 transition-colors duration-150 ease-out hover:border-teal-500 hover:text-teal-600"
        >
          <ArrowRight weight="light" className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
