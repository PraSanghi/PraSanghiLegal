import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { Bi } from '@/components/i18n/bi'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Affiliated Organisations',
  description: 'Organisations affiliated with PraSanghi.',
  path: '/about/affiliated-organisations',
})

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
    descriptionHi: 'प्रासंघी से सहबद्ध एक समाज कल्याण समिति।',
  },
  {
    name: 'Tiwari Law Chambers',
    note: 'Since 1995',
    noteHi: '1995 से',
    description: 'An affiliated law chambers, active since 1995.',
    descriptionHi: 'एक सहबद्ध विधि चैंबर, 1995 से सक्रिय।',
  },
  {
    name: 'The Samvaad Podcast',
    description: 'A media property affiliated with PraSanghi.',
    descriptionHi: 'प्रासंघी से सहबद्ध एक मीडिया संपत्ति।',
  },
  {
    name: 'Nishtha & Associates',
    description: 'An affiliated associate practice.',
    descriptionHi: 'एक सहबद्ध एसोसिएट प्रैक्टिस।',
  },
  {
    name: 'Adjudix Dispute Resolution Institute',
    note: 'ADRI',
    description: 'A dispute resolution institute PraSanghi is affiliated with.',
    descriptionHi: 'एक विवाद समाधान संस्थान जिससे प्रासंघी सहबद्ध है।',
  },
  {
    name: 'Naya Kadam Samajotthan Samiti',
    description: 'A community upliftment organisation affiliated with PraSanghi.',
    descriptionHi: 'प्रासंघी से सहबद्ध एक सामुदायिक उत्थान संगठन।',
  },
  {
    name: 'Kapivic Core',
    description: 'An organisation affiliated with PraSanghi.',
    descriptionHi: 'प्रासंघी से सहबद्ध एक संगठन।',
  },
]

export default function AffiliatedOrganisationsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb
        segments={[
          { label: 'About Us', labelHi: 'हमारे बारे में', href: '/about' },
          { label: 'Affiliated Organisations', labelHi: 'सहबद्ध संगठन' },
        ]}
      />
      <div className="mt-4">
        <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">
          <Bi en="About Us" hi="हमारे बारे में" />
        </p>
        <h1 className="mt-3 text-display-lg font-bold text-blue-900">
          <Bi en="Affiliated Organisations" hi="सहबद्ध संगठन" />
        </h1>
      </div>
      <p className="mt-8 text-body-md text-muted-foreground">
        <Bi
          en="PraSanghi is associated with the following organisations. A fuller description of each relationship is pending founder confirmation."
          hi="प्रासंघी निम्नलिखित संगठनों से संबद्ध है। प्रत्येक संबंध का विस्तृत विवरण संस्थापक की पुष्टि की प्रतीक्षा में है।"
        />
      </p>
      <ul className="mt-8 flex flex-col divide-y divide-border border-t border-border">
        {ASSOCIATED_ORGANISATIONS.map((org) => (
          <li key={org.name} className="py-4">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-body-lg font-semibold text-blue-900">{org.name}</span>
              {org.note ? (
                <span className="shrink-0 text-body-sm text-muted-foreground">
                  <Bi en={org.note} hi={org.noteHi ?? org.note} />
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-body-sm text-muted-foreground">
              <Bi en={org.description} hi={org.descriptionHi} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
