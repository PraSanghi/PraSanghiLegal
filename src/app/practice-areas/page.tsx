import type { Metadata } from 'next'
import { User, Buildings, Bank } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { PracticeAreaCard } from '@/components/cards/practice-area-card'
import { CtaBand } from '@/components/common/cta-band'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { PageBanner } from '@/components/common/page-banner'
import { ValuesTriad } from '@/components/common/values-triad'
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Practice Areas',
  description:
    'Litigation, Supreme Court and High Court practice, arbitration, regulatory and advisory work, and contract drafting — one firm, equal depth across every practice.',
  path: '/practice-areas',
})

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

      <section className="border-t border-border bg-off-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">
            Who We Help
          </p>
          <h2 className="mt-2 text-heading-lg font-bold text-blue-900">
            Individuals, Businesses, and Institutions
          </h2>
          <div className="mt-10">
            <ValuesTriad
              items={[
                {
                  icon: User,
                  label: 'Individuals',
                  body: 'Personal disputes and matters that need direct, considered representation — not a case number in a queue.',
                },
                {
                  icon: Buildings,
                  label: 'SMEs & Growing Businesses',
                  body: 'The certifications, registrations, and contracts a business needs as it scales, handled with the same rigor as litigation.',
                },
                {
                  icon: Bank,
                  label: 'Institutions & Enterprises',
                  body: 'Ongoing regulatory advisory and dispute resolution for organisations with recurring compliance obligations.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand
        headline="Not sure which practice area fits your matter?"
        ctaLabel="Schedule a Consultation"
        ctaHref="/contact"
      />
    </>
  )
}
