import { firmContact, siteDescription, siteName, siteSlogan, siteUrl } from '@/lib/site-config'

// LegalService (schema.org) — the type Google recommends for law firms.
// Address, phones and email are from the Firm Profile (2026).
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: firmContact.legalName,
    alternateName: [siteName, 'PraSanghi Advocates LLP'],
    slogan: siteSlogan,
    url: siteUrl,
    logo: `${siteUrl}/brand/prasanghi-mark.png`,
    description: siteDescription,
    email: firmContact.email,
    telephone: firmContact.phones.map((p) => p.dial),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B-208, The One, Near High Court, RNT Marg',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      postalCode: '452001',
      addressCountry: 'IN',
    },
    areaServed: 'IN',
  }
}
