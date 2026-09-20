import type { Metadata } from "next";
import { ibmPlexSans, ibmPlexSansDevanagari } from "@/lib/fonts";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BciDisclaimerModal } from "@/components/compliance/bci-disclaimer-modal";
import { CookieConsentBanner } from "@/components/compliance/cookie-consent-banner";
import { ConsentedAnalytics } from "@/components/compliance/consented-analytics";
import { Toaster } from "@/components/ui/sonner";
import { siteDescription, siteName, siteTagline, siteUrl } from "@/lib/site-config";
import { organizationJsonLd } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — ${siteTagline}`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: `${siteName} — ${siteTagline}`,
    title: `${siteName} — ${siteTagline}`,
    description: siteDescription,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — ${siteTagline}`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${ibmPlexSans.variable} ${ibmPlexSansDevanagari.variable} h-full antialiased`}
      // The inline script below intentionally sets lang/data-lang on this
      // element before hydration for a returning Hindi-preferring visitor,
      // which will always differ from the server-rendered "en-IN" — a real,
      // self-inflicted mismatch, not a bug. suppressHydrationWarning here
      // only silences that one expected case (React only applies it one
      // level deep, so it doesn't hide mismatches elsewhere in the tree).
      suppressHydrationWarning
    >
      <head>
        {/* Applies a returning visitor's EN/HI choice (site-header.tsx
            LanguageToggle) before first paint, so there's no flash of the
            other language — the same technique a dark-mode toggle uses. */}
        <script
          // Browser extensions (ad blockers, color pickers, etc.) commonly
          // inject their own <script> tag as the first child of <head>
          // before React hydrates, which React then diffs against this
          // element and reports as a hydration mismatch. suppressHydrationWarning
          // silences only that false positive for this one node — see
          // https://react.dev/link/hydration-mismatch.
          suppressHydrationWarning
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              "try{var l=localStorage.getItem('prasanghi-lang');if(l==='hi'){document.documentElement.setAttribute('data-lang','hi');document.documentElement.setAttribute('lang','hi');}}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <BciDisclaimerModal />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieConsentBanner />
        <ConsentedAnalytics />
        <Toaster />
      </body>
    </html>
  );
}
