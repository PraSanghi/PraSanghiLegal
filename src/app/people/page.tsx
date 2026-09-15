import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { AttorneyCard } from '@/components/cards/attorney-card'
import { CtaBand } from '@/components/common/cta-band'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { PageBanner } from '@/components/common/page-banner'
import { people } from '@/lib/people-data'

export const metadata: Metadata = {
  title: 'Our Advocates — PraSanghi',
  description: 'The advocates and associates of PraSanghi.',
}

export default function PeoplePage() {
  const founder = people.filter((p) => p.isFounder)
  const associates = people.filter((p) => !p.isFounder)

  return (
    <>
      <Breadcrumb segments={[{ label: 'Our Advocates' }]} />
      <PageBanner
        eyebrow="Our Team"
        title="Our Advocates"
        image="https://picsum.photos/seed/prasanghi-people-banner/1600/700"
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          Every matter at PraSanghi is led by a named advocate — not routed
          through unfamiliar staff.
        </p>

        <h2 className="mt-12 text-heading-md font-bold text-blue-900">
          Leadership &amp; Partners
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {founder.map((person, i) => (
            <RevealOnScroll key={person.slug} delayMs={i * 75}>
              <AttorneyCard
                name={person.name}
                role={person.role}
                photo={person.photo}
                href={`/people/${person.slug}`}
                practiceTags={person.practiceTags}
              />
            </RevealOnScroll>
          ))}
        </div>

        <h2 className="mt-12 text-heading-md font-bold text-blue-900">Associates</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {associates.map((person, i) => (
            <RevealOnScroll key={person.slug} delayMs={i * 75}>
              <AttorneyCard
                name={person.name}
                role={person.role}
                photo={person.photo}
                href={`/people/${person.slug}`}
                practiceTags={person.practiceTags}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>
      <CtaBand headline="Consult Our Legal Team" ctaLabel="Schedule a Consultation" ctaHref="/contact" />
    </>
  )
}
