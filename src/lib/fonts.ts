import { IBM_Plex_Sans, IBM_Plex_Sans_Devanagari } from 'next/font/google'

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
