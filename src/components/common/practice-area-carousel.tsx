'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { Bi } from '@/components/i18n/bi'
import { PracticeAreaModal } from '@/components/common/practice-area-modal'

export interface PracticeAreaCarouselItem {
  slug: string
  title: string
  titleHi: string
  summary: string
  summaryHi: string
  image: string
}

export interface PracticeAreaCarouselProps {
  items: PracticeAreaCarouselItem[]
}

const AUTO_ADVANCE_MS = 2800

// Discrete, one-card-at-a-time auto-advance — not a continuous marquee —
// that loops forever: the item list is rendered twice back-to-back, and
// once a smooth scroll lands past the first copy's width the track snaps
// back by exactly that width with no animation, so the wrap is invisible.
// Pauses on hover/focus/touch and off-screen, and skips autoplay entirely
// under prefers-reduced-motion (manual arrows and native swipe still work
// either way).
export function PracticeAreaCarousel({ items }: PracticeAreaCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const hoveredRef = useRef(false)
  const offScreenRef = useRef(false)
  const intervalRef = useRef<number | undefined>(undefined)
  const activeItemRef = useRef<PracticeAreaCarouselItem | null>(null)
  const advancingRef = useRef(false)
  const [activeItem, setActiveItemState] = useState<PracticeAreaCarouselItem | null>(null)

  function setActiveItem(item: PracticeAreaCarouselItem | null) {
    activeItemRef.current = item
    setActiveItemState(item)
  }

  function stepWidth() {
    const card = trackRef.current?.querySelector<HTMLElement>('[data-carousel-card]')
    return card ? card.offsetWidth + 24 : 0
  }

  // One copy's width, computed as an exact multiple of a single card's step
  // rather than track.scrollWidth / 2 — the latter can be a fraction of a
  // pixel off (flex rounding), which would make every wrap land slightly
  // off a card boundary and drift further with each cycle.
  function setWidth() {
    return stepWidth() * items.length
  }

  function normalizeLoop() {
    const track = trackRef.current
    if (!track) return
    const width = setWidth()
    // The track has scroll-behavior: smooth (Tailwind's scroll-smooth), and
    // per spec that also governs plain `scrollLeft = x` assignments — so a
    // "silent" jump-back would actually animate across every card, looking
    // exactly like scrolling back to the first item. behavior: 'instant'
    // explicitly overrides the CSS smooth behavior to make it truly instant.
    if (track.scrollLeft >= width) track.scrollTo({ left: track.scrollLeft - width, behavior: 'instant' })
  }

  function advance(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const step = stepWidth()
    // Suppress the ambient 'scrollend' normalizer for the duration of this
    // advance: it would otherwise see the instant teleport below land AT
    // the copy boundary and immediately fold it back — before the smooth
    // scroll a few lines down even starts — undoing the teleport and
    // making "Previous" from the first card do nothing.
    advancingRef.current = true
    // scrollLeft can't go negative, so a native scrollBy(-step) from near
    // the start would just clamp at 0 instead of wrapping. Teleport
    // (no animation) into the second, identical copy first, then scroll
    // backward smoothly from there — the jump itself is invisible.
    if (direction === -1 && track.scrollLeft < step) {
      track.scrollTo({ left: track.scrollLeft + setWidth(), behavior: 'instant' })
    }
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
    window.setTimeout(() => {
      normalizeLoop()
      advancingRef.current = false
    }, 500)
  }

  function restartInterval() {
    window.clearInterval(intervalRef.current)
    intervalRef.current = window.setInterval(() => {
      if (!hoveredRef.current && !offScreenRef.current && !activeItemRef.current) advance(1)
    }, AUTO_ADVANCE_MS)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScrollEnd = () => {
      if (!advancingRef.current) normalizeLoop()
    }
    track.addEventListener('scrollend', handleScrollEnd)

    const observer = new IntersectionObserver(
      ([entry]) => {
        offScreenRef.current = !entry.isIntersecting
      },
      { threshold: 0 }
    )
    observer.observe(track)

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      restartInterval()
    }

    return () => {
      track.removeEventListener('scrollend', handleScrollEnd)
      observer.disconnect()
      window.clearInterval(intervalRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function pause() {
    hoveredRef.current = true
  }

  function resume() {
    hoveredRef.current = false
  }

  function handleArrow(direction: 1 | -1) {
    advance(direction)
    restartInterval()
  }

  const loopItems = [...items, ...items]

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onPointerDown={pause}
      onPointerUp={resume}
      onPointerCancel={resume}
    >
      <div
        ref={trackRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {loopItems.map((item, i) => (
          <div
            key={`${item.slug}-${i}`}
            data-carousel-card
            className="relative h-96 w-[80%] shrink-0 snap-start sm:w-[46%] lg:w-[calc(32%-16px)]"
          >
            <button
              type="button"
              onClick={() => setActiveItem(item)}
              tabIndex={i < items.length ? 0 : -1}
              aria-hidden={i >= items.length}
              className="group relative flex h-full w-full flex-col justify-end overflow-hidden bg-muted text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 80vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent" />
              <div className="relative p-6">
                <p className="text-heading-sm font-bold text-white">
                  <Bi en={item.title} hi={item.titleHi} />
                </p>
                <p className="mt-2 line-clamp-3 text-body-md text-white/85">
                  <Bi en={item.summary} hi={item.summaryHi} />
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => handleArrow(-1)}
        aria-label="Previous practice area"
        className="absolute top-1/2 left-0 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-blue-900 shadow-md transition-colors duration-150 ease-out hover:border-teal-500 hover:text-teal-600"
      >
        <ArrowLeft weight="light" className="size-4" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => handleArrow(1)}
        aria-label="Next practice area"
        className="absolute top-1/2 right-0 flex size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-blue-900 shadow-md transition-colors duration-150 ease-out hover:border-teal-500 hover:text-teal-600"
      >
        <ArrowRight weight="light" className="size-4" aria-hidden="true" />
      </button>

      <PracticeAreaModal item={activeItem} onOpenChange={(open) => !open && setActiveItem(null)} />
    </div>
  )
}
