import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'

export const metadata: Metadata = {
  title: 'Affiliated Organisations — PraSanghi',
  description: 'Organisations affiliated with PraSanghi.',
}

// Names sourced directly from the founder's own notes (Prasanghi LLP_LT
// 2.pdf, item 4, "Associated Organisations") — not guessed. What's
// deliberately NOT included is a description of the nature of each
// relationship (referral partner? sister entity? founding member?) —
// that still needs the founder's confirmation before publishing, per
// project_requirements.md §5, so each entry is named only, with no
// invented claim about what the relationship involves.
const ASSOCIATED_ORGANISATIONS = [
  { name: 'PraSanghi Social Welfare Society' },
  { name: 'Tiwari Law Chambers', note: 'Since 1995' },
  { name: 'The Samvaad Podcast' },
  { name: 'Nishtha & Associates' },
  { name: 'Adjudix Dispute Resolution Institute', note: 'ADRI' },
  { name: 'Naya Kadam Samajotthan Samiti' },
  { name: 'Kapivic Core' },
]

export default function AffiliatedOrganisationsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb
        segments={[{ label: 'About', href: '/about' }, { label: 'Affiliated Organisations' }]}
      />
      <div className="mt-4">
        <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">About</p>
        <h1 className="mt-3 text-display-lg font-bold text-blue-900">
          Affiliated Organisations
        </h1>
      </div>
      <p className="mt-8 text-body-md text-muted-foreground">
        PraSanghi is associated with the following organisations. A fuller
        description of each relationship is pending founder confirmation —
        see project_requirements.md §5.
      </p>
      <ul className="mt-8 flex flex-col divide-y divide-border border-t border-border">
        {ASSOCIATED_ORGANISATIONS.map((org) => (
          <li key={org.name} className="flex items-baseline justify-between gap-4 py-4">
            <span className="text-body-lg font-semibold text-blue-900">{org.name}</span>
            {org.note ? (
              <span className="shrink-0 text-body-sm text-muted-foreground">{org.note}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
