import type { Metadata } from "next";
import { ibmPlexSans } from "@/lib/fonts";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BciDisclaimerModal } from "@/components/compliance/bci-disclaimer-modal";
import { CookieConsentBanner } from "@/components/compliance/cookie-consent-banner";
import { ConsentedAnalytics } from "@/components/compliance/consented-analytics";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "PraSanghi — The Legal Ladder",
  description:
    "PraSanghi is a Pan-India, full-service legal LLP combining Supreme Court and High Court litigation with regulatory, compliance, and advisory practice.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
