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

// Real content is blocked pending founder-supplied material — see
// build/implementation-roadmap.md Phase 10 (minimum 3–4 pieces before public
// launch). These entries exist to build and review the page templates.
// Cover images use a deterministic placeholder service pending real
// photography or graphics — see design/design-system.md §9.
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
      'Placeholder body copy pending founder-confirmed content — see build/implementation-roadmap.md Phase 10.',
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
      'Placeholder body copy pending founder-confirmed content — see build/implementation-roadmap.md Phase 10.',
    ],
  },
  {
    slug: 'sample-legal-update',
    contentType: 'Legal Update',
    date: '2026-08-05',
    headline: 'Sample headline pending real content',
    excerpt: 'This entry exists to demonstrate the Legal Update format.',
    image: placeholderImage('sample-legal-update'),
    body: [
      'Placeholder body copy pending founder-confirmed content — see build/implementation-roadmap.md Phase 10.',
    ],
  },
]

export const insightsBySlug: Record<string, InsightRecord> = Object.fromEntries(
  insights.map((i) => [i.slug, i])
)
