'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/button'
import { Bi } from '@/components/i18n/bi'
import { PracticeAreaCarousel } from '@/components/common/practice-area-carousel'
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'
import { practiceAreaCarouselImages } from '@/lib/practice-area-carousel-images'

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

const HERO_CAROUSEL_ITEMS = practiceAreaSlugs.map((slug) => ({
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
    eyebrow: 'Litigation & Regulatory Counsel',
    eyebrowHi: 'वाद-विवाद एवं नियामक परामर्श',
    headline: 'One legal partner for the courtroom and the compliance desk.',
    headlineHi: 'न्यायालय एवं अनुपालन — दोनों के लिए एक ही विधिक साझेदार।',
    body: 'PraSanghi represents clients before the Supreme Court, High Courts, and subordinate forums, alongside a substantive regulatory and advisory practice — built as one firm, not two.',
    bodyHi:
      'प्रासंघी उच्चतम न्यायालय, उच्च न्यायालयों एवं अधीनस्थ फोरमों के समक्ष पक्षकारों का प्रतिनिधित्व करता है, साथ ही एक सशक्त नियामक व सलाहकार प्रैक्टिस भी संचालित करता है — एक ही फर्म के रूप में, दो अलग फर्मों के रूप में नहीं।',
    ctas: [
      { label: 'Explore Practice Areas', labelHi: 'प्रैक्टिस क्षेत्र देखें', href: '/practice-areas' },
      {
        label: 'Regulatory & Advisory',
        labelHi: 'नियामक एवं सलाहकार सेवाएँ',
        href: '/practice-areas/regulatory-advisory',
        variant: 'outline',
      },
    ],
    image: 'https://picsum.photos/seed/prasanghi-practice/1200/1500',
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
    image: 'https://picsum.photos/seed/prasanghi-insights/1200/1500',
    theme: 'dark',
    showServicesCarousel: true,
  },
  {
    key: 'people',
    eyebrow: 'Our Advocates',
    eyebrowHi: 'हमारे अधिवक्ता',
    headline: 'A team built to be reached, not just retained.',
    headlineHi: 'एक ऐसी टीम जिस तक पहुँचा जा सके, केवल नियुक्त न किया जाए।',
    body: 'Every matter at PraSanghi is led by a named advocate you can speak with directly — not routed through layers of unfamiliar staff.',
    bodyHi:
      'प्रासंघी में प्रत्येक मामले का नेतृत्व एक नामित अधिवक्ता करता है जिससे आप सीधे बात कर सकते हैं — न कि अपरिचित स्टाफ की कई परतों के माध्यम से।',
    ctas: [{ label: 'Meet Our Advocates', labelHi: 'हमारे अधिवक्ताओं से मिलें', href: '/people' }],
    image: 'https://picsum.photos/seed/prasanghi-people/1200/1500',
    theme: 'light',
  },
  {
    key: 'vision',
    eyebrow: 'Our Vision',
    eyebrowHi: 'हमारा दृष्टिकोण',
    headline: 'People, Justice, Progress.',
    headlineHi: 'व्यक्ति, न्याय, प्रगति।',
    body: 'The Legal Ladder is a direction, not just a name — every matter we take on is measured against whether it moves a client meaningfully forward.',
    bodyHi:
      '"द लीगल लैडर" एक दिशा है, केवल एक नाम नहीं — हम जो भी मामला लेते हैं, उसे इस कसौटी पर परखा जाता है कि क्या वह ग्राहक को सार्थक रूप से आगे ले जाता है।',
    ctas: [{ label: 'About PraSanghi', labelHi: 'प्रासंघी के बारे में', href: '/about' }],
    image: 'https://picsum.photos/seed/prasanghi-vision/1200/1500',
    theme: 'dark',
  },
]

export function PositioningHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

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
              className={`h-dvh snap-start snap-always overflow-hidden ${
                state.showServicesCarousel ? 'flex flex-col justify-center' : 'grid grid-cols-1 lg:grid-cols-2'
              } ${isDark ? 'bg-blue-900 text-dark-text-primary' : 'bg-white text-blue-900'}`}
            >
              {state.showServicesCarousel ? (
                // Full-width takeover for this slide — no image column, no
                // CTAs, just an intro line and the carousel itself as the
                // content. Right padding at lg+ (asymmetric with the lg:pl)
                // keeps the carousel's cards and arrow clear of the
                // stepper overlay, which is always positioned over the
                // right edge of the hero (see comment below).
                <div className="flex flex-col gap-10 px-6 py-16 sm:px-12 lg:py-0 lg:pl-16 lg:pr-[260px]">
                  <div className="max-w-2xl">
                    <p
                      className={`text-label-eyebrow uppercase tracking-wide ${
                        isDark ? 'text-teal-400' : 'text-teal-600'
                      }`}
                    >
                      <Bi en={state.eyebrow} hi={state.eyebrowHi} />
                    </p>
                    <h1 className="mt-2 text-balance text-display-lg font-bold">
                      <Bi en={state.headline} hi={state.headlineHi} />
                    </h1>
                    <p
                      className={`mt-4 text-pretty text-body-lg ${
                        isDark ? 'text-dark-text-muted' : 'text-muted-foreground'
                      }`}
                    >
                      <Bi en={state.body} hi={state.bodyHi} />
                    </p>
                  </div>
                  <PracticeAreaCarousel items={HERO_CAROUSEL_ITEMS} />
                </div>
              ) : (
                <>
                  <div className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-12 lg:px-16 lg:py-0">
                    <p
                      className={`text-label-eyebrow uppercase tracking-wide ${
                        isDark ? 'text-teal-400' : 'text-teal-600'
                      }`}
                    >
                      <Bi en={state.eyebrow} hi={state.eyebrowHi} />
                    </p>
                    <h1 className="max-w-xl text-balance text-display-lg font-bold">
                      <Bi en={state.headline} hi={state.headlineHi} />
                    </h1>
                    <p
                      className={`max-w-lg text-pretty text-body-lg ${
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
                              ? 'bg-white text-blue-900 hover:bg-off-white'
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
