import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { PracticeAreaCard } from '@/components/cards/practice-area-card'
import { CtaBand } from '@/components/common/cta-band'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { PageBanner } from '@/components/common/page-banner'
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'

export const metadata: Metadata = {
  title: 'Practice Areas — PraSanghi',
  description:
    'Litigation, Supreme Court and High Court practice, arbitration, regulatory and advisory work, and contract drafting — one firm, equal depth across every practice.',
}

export default function PracticeAreasPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Practice Areas' }]} />
      <PageBanner
        eyebrow="What We Do"
        title="Practice Areas"
        image="https://picsum.photos/seed/prasanghi-practice-banner/1600/700"
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          Litigation and regulatory work are treated with the same depth and
          the same design at PraSanghi — one full-service firm, not two.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreaSlugs.map((slug, i) => {
            const area = practiceAreaDetails[slug]
            return (
              <RevealOnScroll key={slug} delayMs={i * 75}>
                <PracticeAreaCard
                  title={area.title}
                  description={area.summary}
                  href={`/practice-areas/${slug}`}
                  image={area.image}
                />
              </RevealOnScroll>
            )
          })}
        </div>
      </section>
      <CtaBand
        headline="Not sure which practice area fits your matter?"
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  )
}
