import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { AttorneyCard } from '@/components/cards/attorney-card'
import { CtaBand } from '@/components/common/cta-band'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { PageBanner } from '@/components/common/page-banner'
import { Bi } from '@/components/i18n/bi'
import { people } from '@/lib/people-data'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Our Advocates',
  description: 'The advocates and associates of PraSanghi.',
  path: '/people',
})

export default function PeoplePage() {
  const founder = people.filter((p) => p.isFounder)
  const associates = people.filter((p) => !p.isFounder)

  return (
    <>
      <Breadcrumb segments={[{ label: 'Our Advocates', labelHi: 'हमारे अधिवक्ता' }]} />
      <PageBanner
        eyebrow="Our Team"
        eyebrowHi="हमारी टीम"
        title="Our Advocates"
        titleHi="हमारे अधिवक्ता"
        image="https://picsum.photos/seed/prasanghi-people-banner/1600/700"
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          <Bi
            en="Every matter at PraSanghi is led by a named advocate — not routed through unfamiliar staff."
            hi="प्रासंघी में प्रत्येक मामले का नेतृत्व एक नामित अधिवक्ता करता है — न कि अपरिचित स्टाफ के माध्यम से।"
          />
        </p>

        <h2 className="mt-12 text-heading-md font-bold text-ink-900">
          <Bi en="Leadership & Partners" hi="नेतृत्व एवं भागीदार" />
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {founder.map((person, i) => (
            <RevealOnScroll key={person.slug} delayMs={i * 75}>
              <AttorneyCard
                name={person.name}
                role={person.role}
                roleHi={person.roleHi}
                photo={person.photo}
                href={`/people/${person.slug}`}
                practiceTags={person.practiceTags}
                practiceTagsHi={person.practiceTagsHi}
              />
            </RevealOnScroll>
          ))}
        </div>

        <h2 className="mt-12 text-heading-md font-bold text-ink-900">
          <Bi en="Associates" hi="सहयोगी अधिवक्ता" />
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {associates.map((person, i) => (
            <RevealOnScroll key={person.slug} delayMs={i * 75}>
              <AttorneyCard
                name={person.name}
                role={person.role}
                roleHi={person.roleHi}
                photo={person.photo}
                href={`/people/${person.slug}`}
                practiceTags={person.practiceTags}
                practiceTagsHi={person.practiceTagsHi}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>
      <CtaBand
        headline="Consult Our Legal Team"
        headlineHi="हमारी विधिक टीम से परामर्श करें"
        ctaLabel="Schedule a Consultation"
        ctaLabelHi="परामर्श निर्धारित करें"
        ctaHref="/contact"
      />
    </>
  )
}
