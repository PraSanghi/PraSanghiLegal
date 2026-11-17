import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { Bi } from '@/components/i18n/bi'
import { DISCLAIMER_SECTIONS } from '@/lib/legal-text'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Disclaimer',
  description:
    'Disclaimer of PraSanghi – The Legal Ladder LLP under the Bar Council of India Rules: no solicitation, no legal advice, limitation of liability.',
  path: '/disclaimer',
})

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb segments={[{ label: 'Disclaimer', labelHi: 'अस्वीकरण' }]} />
      <h1 className="mt-4 text-display-lg font-bold text-ink-900">
        <Bi en="Disclaimer" hi="अस्वीकरण" />
      </h1>
      <span className="mt-4 block h-0.5 w-16 bg-gold-500" aria-hidden="true" />
      <div className="mt-10 flex flex-col gap-10">
        {DISCLAIMER_SECTIONS.map((section, i) => (
          <section key={section.title.en}>
            <h2 className="text-heading-sm font-semibold text-ink-900">
              <span className="mr-2 text-gold-700">{i + 1}.</span>
              <Bi en={section.title.en} hi={section.title.hi} />
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {section.points.map((point) => (
                <li
                  key={point.en}
                  className="flex items-start gap-3 text-body-md text-ink-900 text-justify hyphens-auto"
                >
                  <span className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold-500" aria-hidden="true" />
                  <Bi en={point.en} hi={point.hi} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
