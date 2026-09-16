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

export const siteDescription =
  'PraSanghi is a Pan-India, full-service legal LLP combining Supreme Court and High Court litigation with regulatory, compliance, and advisory practice.'

// Direct-contact channels (Call/WhatsApp) — intentionally left unset until
// the founder confirms a public number, per project_requirements.md §10.
// Consuming components (e.g. practice-area-modal.tsx) must render a
// pending state rather than a broken tel:/wa.me link when these are null.
export const contactPhoneDisplay: string | null = null // e.g. '+91 98765 43210'
export const contactPhoneDialable: string | null = null // digits only, for tel:
export const contactWhatsappNumber: string | null = null // digits only with country code, for wa.me

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
