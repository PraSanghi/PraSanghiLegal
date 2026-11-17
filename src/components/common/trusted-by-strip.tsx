'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Bank,
  Buildings,
  Champagne,
  Cube,
  Factory,
  FilmSlate,
  Gear,
  GraduationCap,
  Scales,
} from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'
import { Bi } from '@/components/i18n/bi'

// Real clients, in the order the client listed them (review PDF p.21), then
// the Firm Profile's "Select Clients" (p.182; "i-Bricx" → also Revolution Pub).
// No logo files yet, so each is set as a typographic wordmark with a gold
// sector seal — swap in official lockups if the client supplies them.
const CLIENTS = [
  { name: 'Public Health Engineering Department, Govt. of M.P.', nameHi: 'लोक स्वास्थ्य यांत्रिकी विभाग, म.प्र. शासन', Mark: Bank },
  { name: 'Kapivic Pvt. Ltd.', nameHi: 'कपिविक प्रा. लि.', Mark: Buildings },
  { name: 'Government Organisations', nameHi: 'शासकीय संस्थाएँ', Mark: Bank },
  { name: 'i-Bricx', nameHi: 'आई-ब्रिक्स', Mark: Cube },
  { name: 'Revolution Pub', nameHi: 'रिवोल्यूशन पब', Mark: Champagne },
  { name: 'IDBI Bank', nameHi: 'आईडीबीआई बैंक', Mark: Bank },
  { name: 'Steel Shapers', nameHi: 'स्टील शेपर्स', Mark: Factory },
  { name: 'Dinesh Engg. Works', nameHi: 'दिनेश इंजीनियरिंग वर्क्स', Mark: Gear },
  { name: 'Radiant Institute', nameHi: 'रेडिएंट इंस्टिट्यूट', Mark: GraduationCap },
  { name: 'Indore Institute of Law', nameHi: 'इंदौर इंस्टिट्यूट ऑफ़ लॉ', Mark: Scales },
  { name: 'Kapivic Core', nameHi: 'कपिविक कोर', Mark: Buildings },
  { name: 'Actress Ms. Shruti Haasan', nameHi: 'अभिनेत्री सुश्री श्रुति हासन', Mark: FilmSlate },
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
        <Bi en="Trusted by Government, Enterprise & Eminent Clients" hi="शासन, उद्यमों एवं प्रतिष्ठित मुवक्किलों का विश्वास" />
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
              {CLIENTS.map(({ name, nameHi, Mark }) => (
                <li
                  key={name}
                  className="flex shrink-0 items-center gap-3 px-8 text-ink-800 transition-colors duration-300 ease-out hover:text-gold-700"
                >
                  <span className="flex size-10 items-center justify-center rounded-full border border-gold-500/60 text-gold-700">
                    <Mark weight="light" className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-body-lg whitespace-nowrap">
                    <Bi en={name} hi={nameHi} />
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
