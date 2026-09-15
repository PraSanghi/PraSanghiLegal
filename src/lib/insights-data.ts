export interface InsightRecord {
  slug: string
  contentType: 'Legal Update' | 'Article' | 'Podcast'
  date: string
  headline: string
  excerpt: string
  practiceAreaTag?: string
  image: string
  body: string[]
}

function placeholderImage(slug: string) {
  return `https://picsum.photos/seed/prasanghi-insight-${slug}/900/600`
}

// General-information articles on well-established, public regulatory
// processes (not case-specific legal advice) — written to give the Insights
// section real substance rather than placeholder copy. Firm-specific
// commentary, bylines, and a regular publishing cadence remain pending
// founder input — see build/implementation-roadmap.md Phase 10.
export const insights: InsightRecord[] = [
  {
    slug: 'fire-safety-noc-process',
    contentType: 'Article',
    date: '2026-09-01',
    headline: 'Understanding the Fire Safety NOC Process',
    excerpt:
      'A plain-language walkthrough of what a Fire Safety NOC covers and when a business needs one.',
    practiceAreaTag: 'Regulatory & Advisory',
    image: placeholderImage('fire-safety-noc-process'),
    body: [
      'A Fire Safety No Objection Certificate (NOC) is a clearance issued by the local fire department confirming that a building or premises meets applicable fire-safety norms. It is a prerequisite for a wide range of other approvals — trade licences, building-completion certificates, and occupancy certificates among them — which makes it one of the first compliance steps a business should plan for, not one of the last.',
      'Who needs one: any commercial, industrial, or high-occupancy premises — offices, factories, warehouses, hotels, restaurants, and multi-storey residential buildings — typically requires a Fire Safety NOC before occupation, with the exact threshold (building height, floor area, occupancy type) set by the state fire service rules in the jurisdiction where the premises is located.',
      'The process generally follows four stages: (1) submitting an application with building plans and site details to the local fire department; (2) a site inspection to verify fire-fighting equipment, exits, and access for fire tenders; (3) rectification of any gaps identified during inspection; and (4) issuance of the NOC, which is typically valid for a fixed period and must be renewed before expiry.',
      'Because the NOC sits upstream of several other approvals, delays here tend to cascade into delays elsewhere. Businesses planning a new premises, or renewing an existing certification, are better served treating this as an early-stage compliance item rather than something to address once other approvals are already in motion.',
    ],
  },
  {
    slug: 'udyam-registration-explained',
    contentType: 'Article',
    date: '2026-08-20',
    headline: 'UDYAM Registration, Explained',
    excerpt: 'What UDYAM registration is, who needs it, and how it is obtained.',
    practiceAreaTag: 'Regulatory & Advisory',
    image: placeholderImage('udyam-registration-explained'),
    body: [
      'UDYAM registration is the current framework under which micro, small, and medium enterprises (MSMEs) in India are officially recognised by the Ministry of Micro, Small and Medium Enterprises. It replaced the earlier Udyog Aadhaar system, and registration is done entirely online through the government’s UDYAM portal using the applicant’s Aadhaar number and PAN.',
      'Classification as micro, small, or medium is based on two criteria: investment in plant and machinery or equipment, and annual turnover. Both thresholds are self-declared at the time of registration and are periodically revised, so a business should confirm current limits at the time of applying rather than relying on figures from a prior filing.',
      'Registering is not merely a formality — it unlocks concrete benefits: priority-sector lending eligibility, protection against delayed payments under the MSME Development Act, subsidies on trademark and patent filings, and eligibility for various state and central government tenders and schemes reserved for registered MSMEs.',
      'There is no renewal requirement once registered — the Udyam Registration Certificate is valid for the life of the enterprise — but the enterprise must update its turnover and investment figures annually, since these are cross-verified against Income Tax and GST records rather than re-declared manually each year.',
    ],
  },
  {
    slug: 'shops-establishment-registration-explained',
    contentType: 'Article',
    date: '2026-08-05',
    headline: 'Shops and Establishment Registration: What New Businesses Need to Know',
    excerpt:
      'The registration most new commercial premises need first, and why it is often the one businesses overlook.',
    practiceAreaTag: 'Regulatory & Advisory',
    image: placeholderImage('shops-establishment-registration'),
    body: [
      'Shops and Establishment registration is typically the first statutory registration a new commercial premises needs — offices, retail shops, restaurants, and most other commercial establishments fall within its scope, with the specific rules set by the state in which the premises operates (the Shops and Establishments Act is state legislation, not a single central statute).',
      'Registration is usually required within a short window of commencing business — often 30 days, though this varies by state — and covers matters like working hours, holidays, leave entitlements, and conditions of employment for staff at the establishment.',
      'Because it is a state-level registration, requirements, forms, and renewal cycles differ across jurisdictions. A business operating in more than one state should expect to register separately in each, rather than assuming one registration extends across state lines.',
      'Operating without this registration, or letting it lapse, can expose a business to penalties and complicate other approvals down the line — several licences and registrations request proof of Shops and Establishment registration as a supporting document, so it is worth treating as a foundational filing rather than an afterthought.',
    ],
  },
]

export const insightsBySlug: Record<string, InsightRecord> = Object.fromEntries(
  insights.map((i) => [i.slug, i])
)
