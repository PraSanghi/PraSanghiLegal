// Self-hosted fonts. These used to load through next/font/google, but builds
// started failing at random: Turbopack couldn't resolve some of the font files
// Google served ("next/font/google queries have exactly one entry"). Which
// family failed changed from one build to the next (Noto Serif Devanagari on
// Vercel, then IBM Plex Sans locally). Serving the files ourselves keeps
// builds off the network entirely.
//
// fonts.generated.css holds the @font-face rules. The woff2 files and their OFL
// licences are in public/fonts/<family>/, taken from the @fontsource packages.
// fonts.css maps each family to the CSS variable that globals.css reads. Each
// export keeps next/font's `.variable` shape, so layout.tsx is unchanged.
import './fonts.generated.css'
import './fonts.css'

// Body copy.
export const ibmPlexSans = { variable: 'font-var-plex-sans' }

// Same type family, Devanagari cut — IBM Plex Sans' Latin glyphs don't
// cover Hindi, so the language toggle would otherwise fall back to the
// browser's default system font mid-brand-typeface.
export const ibmPlexSansDevanagari = { variable: 'font-var-plex-sans-devanagari' }

// Headings: a high-contrast transitional serif that sits beside the logo's
// own serif wordmark — the editorial, chambers-letterhead register the Firm
// Profile uses. Body copy stays in Plex Sans for legibility.
export const libreCaslon = { variable: 'font-var-display' }

// Hindi headings.
export const notoSerifDevanagari = { variable: 'font-var-display-devanagari' }
