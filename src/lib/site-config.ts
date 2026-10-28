import type { Metadata } from 'next'

// Single source of truth for the site's canonical URL and default
// metadata, so layout.tsx, sitemap.ts, robots.ts, and per-page
// generateMetadata calls never drift out of sync with each other.
//
// NEXT_PUBLIC_SITE_URL should be set once a custom domain is live; until
// then this falls back to the production Vercel URL so links, the
// sitemap, and Open Graph tags are still correct.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prasanghi-llp-web.vercel.app'
).replace(/\/$/, '')

export const siteName = 'PraSanghi'

export const siteTagline = 'The Legal Ladder'

// The firm's tagline, per the founder's review notes: "keep it in mind everywhere".
export const siteSlogan = 'One Destination for Every Legal Solution'

export const siteDescription =
  'PraSanghi is a Pan-India, full-service legal LLP combining Supreme Court and High Court litigation with regulatory, compliance, and advisory practice.'

// Source: PraSanghi Firm Profile (2026), Contact & Correspondence.
export const firmContact = {
  legalName: 'PraSanghi – The Legal Ladder LLP',
  address: 'B-208, The One, Near High Court, RNT Marg, Indore, Madhya Pradesh – 452001',
  addressHi: 'बी-208, द वन, उच्च न्यायालय के समीप, आर.एन.टी. मार्ग, इंदौर, मध्य प्रदेश – 452001',
  phones: [
    { display: '+91 96170 50000', dial: '+919617050000' },
    { display: '+91 97139 77121', dial: '+919713977121' },
    { display: '+91 89650 66666', dial: '+918965066666' },
  ],
  email: 'contact@prasanghilegal.com',
  emails: [
    { address: 'contact@prasanghilegal.com', purpose: 'Regular contact and appointments', purposeHi: 'सामान्य संपर्क एवं भेंट-समय' },
    { address: 'support@prasanghilegal.com', purpose: 'Grievances and issues', purposeHi: 'शिकायत एवं समस्याएँ' },
    { address: 'director@prasanghilegal.com', purpose: 'Emergency or confidential use only', purposeHi: 'केवल आपात अथवा गोपनीय विषयों हेतु' },
  ],
  associateCities: ['Delhi', 'Mumbai', 'Lucknow', 'Jabalpur', 'Gwalior', 'Ahmedabad', 'Jaipur', 'Bilaspur'],
} as const

// Direct-contact channels (Call/WhatsApp) used by practice-area-modal.tsx.
export const contactPhoneDisplay: string | null = firmContact.phones[0].display
export const contactPhoneDialable: string | null = firmContact.phones[0].dial
export const contactWhatsappNumber: string | null = firmContact.phones[0].dial.replace('+', '')

// Next.js does not deep-merge a route's `openGraph`/`twitter` objects with
// the root layout's — a child that sets one replaces it entirely, dropping
// type/siteName/locale unless it re-declares them. Every page's metadata
// should go through this so Open Graph/Twitter cards always carry that
// page's own title, description, and canonical URL instead of silently
// falling back to the homepage's.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: `${siteName} — ${siteTagline}`,
      title,
      description,
      url: path,
      // A route that defines its own `openGraph` object replaces the root
      // layout's entirely, which also drops the auto-detected
      // opengraph-image.tsx file unless it's referenced again here.
      images: ['/opengraph-image'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
    },
  }
}
