import Link from 'next/link'
import { Bi } from '@/components/i18n/bi'
import { AttorneyProfileHeader } from '@/components/people/attorney-profile-header'
import { CtaBand } from '@/components/common/cta-band'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import type { PersonRecord } from '@/lib/people-data'

export function PersonProfile({ person }: { person: PersonRecord }) {
  return (
    <>
      <AttorneyProfileHeader
        name={person.name}
        role={person.role}
        roleHi={person.roleHi}
        designation={person.designation}
        designationHi={person.designationHi}
        photo={person.photo}
      />
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1fr_340px]">
        <RevealOnScroll>
          <h2 className="text-heading-md font-bold text-ink-900">
            <Bi en="Profile" hi="परिचय" />
          </h2>
          <div className="mt-6 flex flex-col gap-5 text-body-lg text-ink-900 text-justify hyphens-auto">
            {person.bio.map((para, i) => (
              <p key={i}>
                <Bi en={para} hi={person.bioHi[i] ?? para} />
              </p>
            ))}
          </div>
        </RevealOnScroll>
        <RevealOnScroll delayMs={100}>
          <aside className="border-t-2 border-gold-500 bg-gold-50 p-6">
            <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-700">
              <Bi en="Qualifications & Appointments" hi="योग्यताएँ एवं नियुक्तियाँ" />
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {person.credentials.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-body-md text-ink-900">
                  <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-500" aria-hidden="true" />
                  <Bi en={item} hi={person.credentialsHi[i] ?? item} />
                </li>
              ))}
            </ul>
            {person.practiceTags.length > 0 ? (
              <>
                <p className="mt-8 text-label-eyebrow uppercase tracking-[0.2em] text-gold-700">
                  <Bi en="Areas of Practice" hi="प्रैक्टिस क्षेत्र" />
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {person.practiceTags.map((tag, i) => (
                    <span
                      key={tag}
                      className="border border-gold-500/40 bg-card px-3 py-1 text-body-sm text-ink-900"
                    >
                      <Bi en={tag} hi={person.practiceTagsHi[i] ?? tag} />
                    </span>
                  ))}
                </div>
              </>
            ) : null}
            <Link
              href="/people"
              className="mt-8 inline-block text-body-sm font-semibold text-gold-700 underline-offset-4 hover:underline"
            >
              <Bi en="← All advocates" hi="← सभी अधिवक्ता" />
            </Link>
          </aside>
        </RevealOnScroll>
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
