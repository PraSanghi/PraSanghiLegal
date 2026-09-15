import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'

export const metadata: Metadata = {
  title: 'Affiliated Organisations — PraSanghi',
  description: 'Organisations affiliated with PraSanghi.',
}

// Names sourced directly from the founder's own notes (Prasanghi LLP_LT
// 2.pdf, item 4, "Associated Organisations") — not guessed. The
// `description` on each is a placeholder one-liner only — it states the
// general category the name itself implies (a "Law Chambers," a
// "Podcast," a "Dispute Resolution Institute") rather than any specific
// claim about what the relationship with PraSanghi actually involves
// (referral partner? sister entity? founding member?). Replace with real,
// founder-confirmed copy per project_requirements.md §5 — do not treat
// these as final.
const ASSOCIATED_ORGANISATIONS = [
  {
    name: 'PraSanghi Social Welfare Society',
    description: 'A social welfare society affiliated with PraSanghi.',
  },
  {
    name: 'Tiwari Law Chambers',
    note: 'Since 1995',
    description: 'An affiliated law chambers, active since 1995.',
  },
  {
    name: 'The Samvaad Podcast',
    description: 'A media property affiliated with PraSanghi.',
  },
  {
    name: 'Nishtha & Associates',
    description: 'An affiliated associate practice.',
  },
  {
    name: 'Adjudix Dispute Resolution Institute',
    note: 'ADRI',
    description: 'A dispute resolution institute PraSanghi is affiliated with.',
  },
  {
    name: 'Naya Kadam Samajotthan Samiti',
    description: 'A community upliftment organisation affiliated with PraSanghi.',
  },
  {
    name: 'Kapivic Core',
    description: 'An organisation affiliated with PraSanghi.',
  },
]

export default function AffiliatedOrganisationsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb
        segments={[{ label: 'About Us', href: '/about' }, { label: 'Affiliated Organisations' }]}
      />
      <div className="mt-4">
        <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">About Us</p>
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
          <li key={org.name} className="py-4">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-body-lg font-semibold text-blue-900">{org.name}</span>
              {org.note ? (
                <span className="shrink-0 text-body-sm text-muted-foreground">{org.note}</span>
              ) : null}
            </div>
            <p className="mt-1 text-body-sm text-muted-foreground">{org.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
