'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr'

export interface PracticeAreaCarouselItem {
  slug: string
  title: string
  summary: string
  image: string
}

export interface PracticeAreaCarouselProps {
  items: PracticeAreaCarouselItem[]
}

const AUTO_ADVANCE_MS = 4000

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

  function stepWidth() {
    const card = trackRef.current?.querySelector<HTMLElement>('[data-carousel-card]')
    return card ? card.offsetWidth + 24 : 0
  }

  function normalizeLoop() {
    const track = trackRef.current
    if (!track) return
    const setWidth = track.scrollWidth / 2
    if (track.scrollLeft >= setWidth) track.scrollLeft -= setWidth
    else if (track.scrollLeft < 0) track.scrollLeft += setWidth
  }

  function advance(direction: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: direction * stepWidth(), behavior: 'smooth' })
    window.setTimeout(normalizeLoop, 500)
  }

  function restartInterval() {
    window.clearInterval(intervalRef.current)
    intervalRef.current = window.setInterval(() => {
      if (!hoveredRef.current && !offScreenRef.current) advance(1)
    }, AUTO_ADVANCE_MS)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    track.addEventListener('scrollend', normalizeLoop)

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
      track.removeEventListener('scrollend', normalizeLoop)
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
            <Link
              href={`/practice-areas/${item.slug}`}
              tabIndex={i < items.length ? 0 : -1}
              aria-hidden={i >= items.length}
              className="group relative flex h-full w-full flex-col justify-end overflow-hidden bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
                <p className="text-heading-sm font-bold text-white">{item.title}</p>
                <p className="mt-2 line-clamp-3 text-body-md text-white/85">{item.summary}</p>
              </div>
            </Link>
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
    </div>
  )
}
