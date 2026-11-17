'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/button'
import { Bi } from '@/components/i18n/bi'
import { PracticeAreaGrid } from '@/components/common/practice-area-grid'
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'
import { practiceAreaCarouselImages } from '@/lib/practice-area-carousel-images'
import { siteImages } from '@/lib/site-images'

interface HeroCta {
  label: string
  labelHi: string
  href: string
  variant?: 'default' | 'outline'
}

interface HeroState {
  key: string
  eyebrow: string
  eyebrowHi: string
  headline: string
  headlineHi: string
  body: string
  bodyHi: string
  ctas: HeroCta[]
  image: string
  theme: 'light' | 'dark'
  // Second slide only, per the client's explicit direction — swaps that
  // slide's photograph for the same Practice Areas carousel used further
  // down the homepage, so it's reachable one scroll in rather than only
  // after scrolling past the whole hero.
  showServicesCarousel?: boolean
}

const HERO_GRID_ITEMS = practiceAreaSlugs.map((slug) => ({
  slug,
  title: practiceAreaDetails[slug].title,
  titleHi: practiceAreaDetails[slug].titleHi,
  summary: practiceAreaDetails[slug].summary,
  summaryHi: practiceAreaDetails[slug].summaryHi,
  image: practiceAreaCarouselImages[slug],
}))

// Photography is a placeholder (deterministic seeded photos) pending real
// firm photography — see design/design-system.md §9. Content per state
// mirrors the mechanism of Khaitan & Co's homepage hero, per the client's
// explicit direction (brand-strategy.md §4).
const HERO_STATES: HeroState[] = [
  {
    key: 'practice',
    eyebrow: 'Advocates & Legal Consultants',
    eyebrowHi: 'अधिवक्ता एवं विधिक परामर्शदाता',
    headline: 'One Destination for Every Legal Solution.',
    headlineHi: 'प्रत्येक विधिक समाधान हेतु एक ही गंतव्य।',
    body: 'A full-service, pan-India Advocates LLP that brings the courtroom and the compliance desk under one roof — from the Supreme Court of India, the High Courts and the trial courts to consumer commissions, tribunals, hybrid arbitration and corporate advisory.',
    bodyHi:
      'एक पूर्ण-सेवा, अखिल भारतीय अधिवक्ता एलएलपी, जो न्यायालय एवं अनुपालन — दोनों को एक ही छत के नीचे लाता है: भारत के उच्चतम न्यायालय, उच्च न्यायालयों एवं विचारण न्यायालयों से लेकर उपभोक्ता आयोगों, अधिकरणों, हाइब्रिड माध्यस्थम् एवं कॉर्पोरेट परामर्श तक।',
    ctas: [
      { label: 'Explore Practice Areas', labelHi: 'प्रैक्टिस क्षेत्र देखें', href: '/practice-areas' },
      {
        label: 'Schedule a Consultation',
        labelHi: 'परामर्श निर्धारित करें',
        href: '/contact',
        variant: 'outline',
      },
    ],
    image: siteImages.heroPractice,
    theme: 'light',
  },
  {
    key: 'services',
    eyebrow: 'Practice Areas',
    eyebrowHi: 'प्रैक्टिस क्षेत्र',
    headline: 'Every service we provide, in one place.',
    headlineHi: 'हमारी हर सेवा, एक ही स्थान पर।',
    body: 'Browse every practice area we cover, from litigation to compliance.',
    bodyHi: 'वाद-विवाद से लेकर अनुपालन तक, हमारे सभी प्रैक्टिस क्षेत्र देखें।',
    ctas: [],
    image: siteImages.heroInsights,
    theme: 'dark',
    showServicesCarousel: true,
  },
  {
    key: 'people',
    eyebrow: 'Our Advocates',
    eyebrowHi: 'हमारे अधिवक्ता',
    headline: 'Counsel to the State. Counsel to you.',
    headlineHi: 'शासन के अधिवक्ता। आपके अधिवक्ता।',
    body: 'Led by a Government Advocate of the High Court of Madhya Pradesh and a former Standing Counsel for the Union of India, every matter is handled by a named advocate who stays with it from start to finish.',
    bodyHi:
      'मध्य प्रदेश उच्च न्यायालय के शासकीय अधिवक्ता एवं भारत संघ के भूतपूर्व स्थायी अधिवक्ता के नेतृत्व में, प्रत्येक मामला एक नामित अधिवक्ता द्वारा संभाला जाता है जो प्रारंभ से अंत तक उसके साथ रहता है।',
    ctas: [{ label: 'Meet Our Advocates', labelHi: 'हमारे अधिवक्ताओं से मिलें', href: '/people' }],
    image: siteImages.heroPeople,
    theme: 'light',
  },
  {
    key: 'vision',
    eyebrow: 'Our Method',
    eyebrowHi: 'हमारी कार्यपद्धति',
    headline: 'Understand. Strategize. Execute. Follow Through.',
    headlineHi: 'समझना। रणनीति बनाना। क्रियान्वित करना। अंत तक साथ निभाना।',
    body: 'The Legal Ladder is our method: every matter is carried step by step, from first advice through to final resolution — and its implementation.',
    bodyHi:
      '"द लीगल लैडर" हमारी कार्यपद्धति है: प्रत्येक मामला चरणबद्ध रूप से — प्रथम परामर्श से अंतिम समाधान तक, और उसके क्रियान्वयन तक — आगे बढ़ाया जाता है।',
    ctas: [{ label: 'About PraSanghi', labelHi: 'प्रासंघी के बारे में', href: '/about' }],
    image: siteImages.heroVision,
    theme: 'dark',
  },
]

export function PositioningHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  // First-load-only entrance (design-system.md §7: "a subtle fade/slide-up
  // (150–200ms, ease-out) on hero content on first load only") — applies
  // just to state 0's text panel, the only one visible before any
  // scrolling happens. Starts false so the initial paint is the "before"
  // state, then flips true a frame later so the transition actually runs;
  // motion-reduce:transition-none (applied below) keeps this instant for
  // reduced-motion users without needing a separate branch here.
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // Native CSS scroll-snap drives the "scroll down cycles through all 4
  // states, then the page continues" behavior the client asked for —
  // deliberately not JS wheel-event interception (unreliable across
  // trackpads/devices and easy to break with preventDefault edge cases).
  // The nested scroll container (h-screen, overflow-y-auto, snap-y) is
  // exhausted by native browser scroll physics before the browser chains
  // remaining scroll delta to the page itself, which is the standard,
  // robust way this pattern is implemented.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = Number((entry.target as HTMLElement).dataset.index)
            setActiveIndex(idx)
          }
        }
      },
      { root: container, threshold: [0.6] }
    )

    sectionRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Explicit scroll hand-off: CSS scroll-snap chaining to the parent
  // document at the container's scroll boundary is not reliably triggered
  // by every input method/browser combination, so this takes over
  // deterministically instead of depending on it. While the container has
  // room to move in the requested direction, its own native scroll-snap
  // handles the wheel event untouched. Once it's already at the relevant
  // edge (bottom when scrolling down, top when scrolling up) and the page
  // itself still has room to move, this forwards the delta to the window
  // and suppresses the container's own (now no-op) scroll — which is what
  // produces "all 4 states first, then the rest of the page" continuously
  // in one gesture, matching the mechanism on khaitanco.com.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function handleWheel(event: WheelEvent) {
      if (!container) return
      const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 1
      const atTop = container.scrollTop <= 0
      const pageCanScrollDown =
        window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 1
      const pageAtTop = window.scrollY <= 0

      if (event.deltaY > 0 && atBottom && pageCanScrollDown) {
        event.preventDefault()
        window.scrollBy(0, event.deltaY)
      } else if (event.deltaY < 0 && atTop && !pageAtTop) {
        event.preventDefault()
        window.scrollBy(0, event.deltaY)
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [])

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(index, HERO_STATES.length - 1))
    sectionRefs.current[clamped]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth"
      >
        {HERO_STATES.map((state, i) => {
          const isDark = state.theme === 'dark'
          return (
            <section
              key={state.key}
              ref={(el) => {
                sectionRefs.current[i] = el
              }}
              data-index={i}
              className={`snap-start snap-always ${
                state.showServicesCarousel
                  ? 'min-h-dvh flex flex-col'
                  : 'h-dvh overflow-hidden grid grid-cols-1 lg:grid-cols-2'
              } ${isDark ? 'bg-ink-900 text-dark-text-primary' : 'bg-white text-ink-900'}`}
            >
              {state.showServicesCarousel ? (
                // Full-width takeover for this slide — no image column, no
                // CTAs, no eyebrow/body clutter, just one heading line and
                // every service listed below it, using nearly the full
                // section width (edge-to-edge, no max-w-7xl cap unlike the
                // rest of the homepage). lg:pr-64 is the one exception, not
                // a leftover: it's the stepper's actual measured footprint
                // ("Litigation & Regulatory Counsel" is the longest label)
                // — removing it puts the stepper's white text directly on
                // top of a card's white title, an actual legibility bug,
                // not a style preference. Deliberately NOT height-capped
                // like the other 3 states: with 15 services there's no
                // fitting "one screen, no scrolling" honestly, so this
                // section grows taller than the viewport and scrolls as
                // part of the single page scroll (the outer snap container
                // handles that natively) — a nested scrollbar-inside-a-
                // scrollbar was tried and is exactly the confusing thing
                // to avoid.
                <div className="flex w-full flex-col gap-6 px-6 py-10 sm:px-12 lg:py-16 lg:pr-64">
                  <h1 className="max-w-2xl text-balance text-display-lg font-bold">
                    <Bi en={state.headline} hi={state.headlineHi} />
                  </h1>
                  <PracticeAreaGrid items={HERO_GRID_ITEMS} />
                </div>
              ) : (
                <>
                  <div
                    className={`flex flex-col justify-center gap-6 px-6 py-16 sm:px-12 lg:px-16 lg:py-0 ${
                      i === 0
                        ? `transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`
                        : ''
                    }`}
                  >
                    <p
                      className={`text-label-eyebrow uppercase tracking-wide ${
                        isDark ? 'text-gold-300' : 'text-gold-700'
                      }`}
                    >
                      <Bi en={state.eyebrow} hi={state.eyebrowHi} />
                    </p>
                    <h1 className="max-w-xl text-balance text-display-lg font-bold">
                      <Bi en={state.headline} hi={state.headlineHi} />
                    </h1>
                    <p
                      className={`max-w-lg text-justify hyphens-auto text-body-lg ${
                        isDark ? 'text-dark-text-muted' : 'text-muted-foreground'
                      }`}
                    >
                      <Bi en={state.body} hi={state.bodyHi} />
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
                              ? 'bg-white text-ink-900 hover:bg-off-white'
                              : isDark && cta.variant === 'outline'
                                ? 'border-white text-white hover:bg-white/10'
                                : undefined
                          }
                        >
                          <Link href={cta.href}>
                            <Bi en={cta.label} hi={cta.labelHi} />
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-h-[320px] lg:min-h-full">
                    <Image
                      src={state.image}
                      alt=""
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </>
              )}
            </section>
          )
        })}
      </div>

      {/*
        The stepper and advance button are always positioned over the
        photograph column, never the text panel — so their contrast must
        never depend on the section's light/dark theme (that was the bug:
        conditioning color on `theme` made them invisible whenever a bright
        or light-toned photo sat underneath a "light" state). A drop-shadow
        on the text/dots (rather than an enclosing scrim panel) keeps them
        legible against any photograph — an earlier version wrapped this in
        a `rounded-full` capsule, which read as a stray dark blob smeared
        over the image rather than a deliberate control.
      */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="pointer-events-auto absolute top-1/2 right-6 hidden -translate-y-1/2 flex-col items-end gap-0 lg:flex">
          {HERO_STATES.map((s, i) => (
            <div key={s.key} className="flex flex-col items-end">
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-current={i === activeIndex}
                className={`flex items-center gap-3 text-body-sm font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] transition-colors ${
                  i === activeIndex ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                <Bi en={s.eyebrow} hi={s.eyebrowHi} />
                <span
                  className={`inline-block size-2.5 shrink-0 rounded-full border-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] ${
                    i === activeIndex ? 'border-white bg-white' : 'border-white/60 bg-transparent'
                  }`}
                />
              </button>
              {i < HERO_STATES.length - 1 ? <div className="my-2 h-6 w-px bg-white/40" /> : null}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Show next hero section"
          className="pointer-events-auto absolute right-6 bottom-6 flex size-11 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        >
          <CaretDown weight="light" className="size-5" />
        </button>
      </div>
    </div>
  )
}
