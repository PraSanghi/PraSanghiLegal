export interface PracticeAreaDetail {
  slug: string
  title: string
  summary: string
  overview: string[]
  specificServices: string[]
  teamSlugs: string[]
  image: string
}

// Deterministic placeholder photography (seeded by slug) pending real firm
// photography — see design/design-system.md §9.
function placeholderImage(slug: string, width = 1200, height = 900) {
  return `https://picsum.photos/seed/prasanghi-${slug}/${width}/${height}`
}

// Content follows the specificity-first approach validated in
// research/competitor-analysis-secondary.md (name exact services, not just
// category labels). Overview prose is a founder-notes-derived starting
// point — see project_requirements.md §3 — pending final review.
export const practiceAreaDetails: Record<string, PracticeAreaDetail> = {
  litigation: {
    slug: 'litigation',
    title: 'Litigation',
    summary:
      'Civil and criminal representation before subordinate courts, matched to the forum and the stakes of the matter.',
    overview: [
      'PraSanghi represents individuals and businesses in civil and criminal proceedings before subordinate courts across the jurisdictions we practice in.',
      'Matters are prepared and argued by the advocate assigned to them from the outset — not handed between unfamiliar staff as a case moves through a court calendar.',
    ],
    specificServices: [
      'Civil suits and recovery proceedings',
      'Criminal defence and complaint proceedings',
      'Bail applications and remand matters',
      'Appearance before subordinate and district courts',
    ],
    teamSlugs: ['rajwardhan-gawde'],
    image: placeholderImage('litigation'),
  },
  'supreme-court-high-court-practice': {
    slug: 'supreme-court-high-court-practice',
    title: 'Supreme Court & High Court Practice',
    summary:
      'Representation and appellate strategy before the Supreme Court of India and High Courts.',
    overview: [
      'Matters that escalate beyond subordinate courts are handled with the same advocate continuity as any other engagement at PraSanghi — the team that took the brief argues the appeal.',
      'This practice covers writ petitions, appellate matters, and constitutional questions referred to a High Court or the Supreme Court of India.',
    ],
    specificServices: [
      'Writ petitions',
      'First and second appeals',
      'Special Leave Petitions',
      'Constitutional and regulatory challenges',
    ],
    teamSlugs: ['rajwardhan-gawde'],
    image: placeholderImage('supreme-court'),
  },
  'arbitration-dispute-resolution': {
    slug: 'arbitration-dispute-resolution',
    title: 'Arbitration & Dispute Resolution',
    summary:
      'Domestic arbitration and alternative dispute resolution, including through our affiliation with the Adjudix Dispute Resolution Institute.',
    overview: [
      'PraSanghi advises on pre-arbitration strategy, represents clients during arbitral proceedings, and assists with enforcement of awards.',
      'This page reflects an inference from the firm’s affiliation with the Adjudix Dispute Resolution Institute (ADRI) and is pending explicit confirmation from the founder — see project_requirements.md §10 and planning/sitemap.md.',
    ],
    specificServices: [
      'Pre-arbitration strategy and notice drafting',
      'Representation in arbitral proceedings',
      'Enforcement and challenge of arbitral awards',
      'Mediation and conciliation',
    ],
    teamSlugs: [],
    image: placeholderImage('arbitration'),
  },
  'regulatory-advisory': {
    slug: 'regulatory-advisory',
    title: 'Regulatory & Advisory',
    summary:
      'Certifications, statutory registrations, and compliance counsel — named specifically, not bundled as a generic service.',
    overview: [
      'This practice is treated with the same design and depth as litigation, per PraSanghi’s positioning as one full-service brand rather than a firm that discounts its compliance work.',
      'It covers the certifications and registrations businesses need to operate lawfully, plus ongoing regulatory advisory.',
    ],
    specificServices: [
      'Fire Safety NOC and certification',
      'UDYAM (MSME) registration',
      'Shops and Establishment registration',
      'Statutory and regulatory compliance advisory',
    ],
    teamSlugs: [],
    image: placeholderImage('regulatory'),
  },
  'contract-drafting-commercial-advisory': {
    slug: 'contract-drafting-commercial-advisory',
    title: 'Contract Drafting & Commercial Advisory',
    summary:
      'Drafting and review of the commercial agreements a growing business actually signs.',
    overview: [
      'PraSanghi drafts and reviews commercial agreements with the same specificity-first approach used across the practice — naming the actual document types a client needs, not a generic "contract services" label.',
    ],
    specificServices: [
      'Vendor and supply agreements',
      'Service agreements and statements of work',
      'Non-disclosure and confidentiality agreements',
      'Partnership and LLP agreements',
    ],
    teamSlugs: [],
    image: placeholderImage('contracts'),
  },
}

export const practiceAreaSlugs = Object.keys(practiceAreaDetails)
