export interface PracticeAreaNavItem {
  title: string
  href: string
}

export const practiceAreas: PracticeAreaNavItem[] = [
  { title: 'Litigation', href: '/practice-areas/litigation' },
  {
    title: 'Supreme Court & High Court Practice',
    href: '/practice-areas/supreme-court-high-court-practice',
  },
  {
    title: 'Arbitration & Dispute Resolution',
    href: '/practice-areas/arbitration-dispute-resolution',
  },
  { title: 'Regulatory & Advisory', href: '/practice-areas/regulatory-advisory' },
  {
    title: 'Contract Drafting & Commercial Advisory',
    href: '/practice-areas/contract-drafting-commercial-advisory',
  },
]

export interface PrimaryNavItem {
  title: string
  href: string
}

export const primaryNav: PrimaryNavItem[] = [
  { title: 'About', href: '/about' },
  { title: 'People', href: '/people' },
  { title: 'Insights', href: '/insights' },
  { title: 'Careers', href: '/careers' },
  { title: 'Media', href: '/media' },
  { title: 'Contact', href: '/contact' },
]
