'use client'

import { useEffect, useRef, useState } from 'react'
import { Hexagon, Target, Mountains, Diamond, Waves } from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'
import { Bi } from '@/components/i18n/bi'

/**
 * Abstract marks from the site's own icon library (Phosphor, light weight —
 * see design-system.md §8) — deliberately not real client logos (§1, "no
 * borrowed third-party credibility"). Swap this whole list for real client
 * lockups once PraSanghi has ones to show.
 */
const PLACEHOLDER_LOGOS = [
  { name: 'Northbridge', Mark: Hexagon },
  { name: 'Vertex Group', Mark: Target },
  { name: 'Summit Holdings', Mark: Mountains },
  { name: 'Meridian & Co', Mark: Diamond },
  { name: 'Atlas Partners', Mark: Waves },
] as const

export function TrustedByStrip() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [offScreen, setOffScreen] = useState(false)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setOffScreen(!entry.isIntersecting), {
      threshold: 0,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={trackRef}>
      <h2 className="text-center text-heading-lg font-bold text-ink-900">
        <Bi en="Trusted by Leading Enterprises" hi="अग्रणी उद्यमों का विश्वास" />
      </h2>
      <span className="mx-auto mt-3 block h-0.5 w-12 bg-gold-500" aria-hidden="true" />

      {/* Matches pdlawchambers.com's continuous logo scroll. Pauses on
          hover, off-screen, and under prefers-reduced-motion, so it never
          becomes the "no ability to pause" marquee design-system.md §7
          prohibits. */}
      <div className="group mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className={cn(
            'flex w-max motion-safe:animate-marquee group-hover:[animation-play-state:paused]',
            offScreen && 'motion-safe:[animation-play-state:paused]'
          )}
        >
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {PLACEHOLDER_LOGOS.map(({ name, Mark }) => (
                <li
                  key={name}
                  className="flex shrink-0 items-center gap-2 px-8 text-neutral-400 transition-colors duration-150 ease-out hover:text-neutral-600"
                >
                  <Mark weight="light" className="size-6" aria-hidden="true" />
                  <span className="text-body-md font-semibold whitespace-nowrap">{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
