import { IBM_Plex_Sans, IBM_Plex_Sans_Devanagari, Libre_Caslon_Text, Noto_Serif_Devanagari } from 'next/font/google'

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// Same type family, Devanagari cut — IBM Plex Sans' Latin glyphs don't
// cover Hindi, so the language toggle would otherwise fall back to the
// browser's default system font mid-brand-typeface.
export const ibmPlexSansDevanagari = IBM_Plex_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-plex-sans-devanagari',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

// Headings: a high-contrast transitional serif that sits beside the logo's
// own serif wordmark — the editorial, chambers-letterhead register the Firm
// Profile uses. Body copy stays in Plex Sans for legibility.
export const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '700'],
  display: 'swap',
})

export const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-display-devanagari',
  weight: ['400', '600', '700'],
  display: 'swap',
})
