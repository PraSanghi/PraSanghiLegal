'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/button'

interface HeroCta {
  label: string
  href: string
  variant?: 'default' | 'outline'
}

interface HeroState {
  key: string
  eyebrow: string
  headline: string
  body: string
  ctas: HeroCta[]
  image: string
  theme: 'light' | 'dark'
}

// Photography is a placeholder (deterministic seeded photos) pending real
// firm photography — see design/design-system.md §9. Content per state
// mirrors the mechanism of Khaitan & Co's homepage hero, per the client's
// explicit direction (brand-strategy.md §4).
const HERO_STATES: HeroState[] = [
  {
    key: 'practice',
    eyebrow: 'Litigation & Regulatory Counsel',
    headline: 'One legal partner for the courtroom and the compliance desk.',
    body: 'PraSanghi represents clients before the Supreme Court, High Courts, and subordinate forums, alongside a substantive regulatory and advisory practice — built as one firm, not two.',
    ctas: [
      { label: 'Explore Practice Areas', href: '/practice-areas' },
      { label: 'Regulatory & Advisory', href: '/practice-areas/regulatory-advisory', variant: 'outline' },
    ],
    image: 'https://picsum.photos/seed/prasanghi-practice/1200/1500',
    theme: 'light',
  },
  {
    key: 'insights',
    eyebrow: 'Insights',
    headline: 'Considered analysis on the law that affects your business.',
    body: 'From regulatory updates to litigation strategy, our Insights section tracks the developments that matter to the clients we serve.',
    ctas: [{ label: 'Explore Insights', href: '/insights' }],
    image: 'https://picsum.photos/seed/prasanghi-insights/1200/1500',
    theme: 'dark',
  },
  {
    key: 'people',
    eyebrow: 'People',
    headline: 'A team built to be reached, not just retained.',
    body: 'Every matter at PraSanghi is led by a named advocate you can speak with directly — not routed through layers of unfamiliar staff.',
    ctas: [{ label: 'Meet Our Team', href: '/people' }],
    image: 'https://picsum.photos/seed/prasanghi-people/1200/1500',
    theme: 'light',
  },
  {
    key: 'vision',
    eyebrow: 'Our Vision',
    headline: 'People, Justice, Progress.',
    body: 'The Legal Ladder is a direction, not just a name — every matter we take on is measured against whether it moves a client meaningfully forward.',
    ctas: [{ label: 'About PraSanghi', href: '/about' }],
    image: 'https://picsum.photos/seed/prasanghi-vision/1200/1500',
    theme: 'dark',
  },
]

export function PositioningHero() {
  const [index, setIndex] = useState(0)
  const state = HERO_STATES[index]
  const isDark = state.theme === 'dark'

  const advance = () => setIndex((i) => (i + 1) % HERO_STATES.length)

  return (
    <section
      className={`relative grid min-h-[640px] grid-cols-1 overflow-hidden transition-colors duration-300 motion-reduce:transition-none lg:grid-cols-2 ${
        isDark ? 'bg-blue-900 text-dark-text-primary' : 'bg-white text-blue-900'
      }`}
    >
      <div className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-12 lg:px-16 lg:py-0">
        <p
          className={`text-label-eyebrow uppercase tracking-wide ${
            isDark ? 'text-teal-400' : 'text-teal-600'
          }`}
        >
          {state.eyebrow}
        </p>
        <h1 className="max-w-xl text-balance text-display-lg font-bold">{state.headline}</h1>
        <p
          className={`max-w-lg text-pretty text-body-lg ${
            isDark ? 'text-dark-text-muted' : 'text-muted-foreground'
          }`}
        >
          {state.body}
        </p>
        <div className="flex flex-wrap gap-4">
          {state.ctas.map((cta) => (
            <Button
              key={cta.href}
              asChild
              size="lg"
              variant={cta.variant === 'outline' ? 'outline' : 'default'}
              className={
                isDark && cta.variant !== 'outline'
                  ? 'bg-white text-blue-900 hover:bg-off-white'
                  : isDark && cta.variant === 'outline'
                    ? 'border-white text-white hover:bg-white/10'
                    : undefined
              }
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="relative min-h-[320px] lg:min-h-full">
        <Image src={state.image} alt="" fill priority={index === 0} className="object-cover" />
      </div>

      <div className="absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 flex-col items-end lg:flex">
        {HERO_STATES.map((s, i) => (
          <div key={s.key} className="flex flex-col items-end">
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-current={i === index}
              className={`flex items-center gap-3 text-body-sm font-semibold transition-colors ${
                i === index
                  ? isDark
                    ? 'text-white'
                    : 'text-blue-900'
                  : isDark
                    ? 'text-dark-text-muted hover:text-white'
                    : 'text-muted-foreground hover:text-blue-900'
              }`}
            >
              {s.eyebrow}
              <span
                className={`inline-block size-2.5 shrink-0 rounded-full border-2 ${
                  i === index
                    ? isDark
                      ? 'border-white bg-white'
                      : 'border-blue-900 bg-blue-900'
                    : isDark
                      ? 'border-dark-text-muted bg-transparent'
                      : 'border-neutral-300 bg-transparent'
                }`}
              />
            </button>
            {i < HERO_STATES.length - 1 ? (
              <div className={`my-1 h-6 w-px ${isDark ? 'bg-dark-border' : 'bg-neutral-300'}`} />
            ) : null}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={advance}
        aria-label="Show next hero section"
        className={`absolute right-6 bottom-6 z-10 flex size-11 items-center justify-center rounded-full border transition-colors ${
          isDark
            ? 'border-white/40 text-white hover:bg-white/10'
            : 'border-blue-900/30 text-blue-900 hover:bg-blue-900/5'
        }`}
      >
        <CaretDown weight="light" className="size-5" />
      </button>
    </section>
  )
}
