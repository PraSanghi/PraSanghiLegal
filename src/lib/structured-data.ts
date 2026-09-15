import { siteDescription, siteName, siteUrl } from '@/lib/site-config'

// LegalService (schema.org) rather than a plain Organization — the more
// specific type Google recommends for law firms, and what enables rich
// results like sitelinks search boxes. Deliberately omits address,
// telephone, and geo fields: those are still "pending confirmation" per
// the firm (see site-footer.tsx) and structured data that Google indexes
// into a knowledge panel or Business Profile must not be fabricated.
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: siteName,
    alternateName: 'PraSanghi Advocates LLP',
    url: siteUrl,
    description: siteDescription,
    areaServed: 'IN',
  }
}
