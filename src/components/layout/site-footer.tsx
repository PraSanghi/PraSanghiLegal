import Link from 'next/link'
import { LinkSimple } from '@phosphor-icons/react/dist/ssr'
import { LogoMark } from '@/components/common/logo-mark'
import { primaryNav } from '@/lib/navigation'
import { CookiePreferencesLink } from '@/components/compliance/cookie-preferences-link'
import { NewsletterSignupForm } from '@/components/common/newsletter-signup-form'
import { Bi } from '@/components/i18n/bi'

export function SiteFooter() {
  return (
    <footer className="border-t border-dark-border bg-blue-900 text-dark-text-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 text-heading-sm font-bold">
            <LogoMark className="size-7" />
            PraSanghi
          </div>
          <p className="mt-2 text-body-sm text-dark-text-muted">
            <Bi en="The Legal Ladder" hi="विधिक सीढ़ी" />
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-label-eyebrow uppercase tracking-wide text-teal-400">
            <Bi en="Sitemap" hi="साइट मैप" />
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <Link
                href="/practice-areas"
                className="text-body-sm text-dark-text-muted hover:text-teal-400"
              >
                <Bi en="Practice Areas" hi="प्रैक्टिस क्षेत्र" />
              </Link>
            </li>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-body-sm text-dark-text-muted hover:text-teal-400"
                >
                  <Bi en={item.title} hi={item.titleHi} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-label-eyebrow uppercase tracking-wide text-teal-400">
            <Bi en="Office" hi="कार्यालय" />
          </p>
          {/* Content blocked on project_requirements.md §10 Open Item 6 (office address) —
              this placeholder text must be replaced with the real address before launch,
              per build/implementation-roadmap.md Phase 12. */}
          <address className="mt-3 text-body-sm not-italic text-dark-text-muted">
            <Bi en="Address to be confirmed." hi="पता शीघ्र प्रकाशित किया जाएगा।" />
            <br />
            <Bi en="Office hours to be confirmed." hi="कार्यालय समय शीघ्र प्रकाशित किया जाएगा।" />
          </address>
        </div>

        <div>
          <p className="text-label-eyebrow uppercase tracking-wide text-teal-400">
            <Bi en="Connect" hi="जुड़ें" />
          </p>
          <div className="mt-3 flex gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PraSanghi on LinkedIn (opens in a new tab)"
              className="text-dark-text-muted hover:text-teal-400"
            >
              <LinkSimple weight="light" className="size-5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-6 text-label-eyebrow uppercase tracking-wide text-teal-400">
            <Bi en="Newsletter" hi="न्यूज़लेटर" />
          </p>
          <p className="mt-2 text-body-sm text-dark-text-muted">
            <Bi
              en="Periodic updates on new legal insights and firm announcements."
              hi="नवीन विधिक विश्लेषण एवं फर्म की घोषणाओं पर समय-समय पर अद्यतन जानकारी।"
            />
          </p>
          <NewsletterSignupForm />
        </div>
      </div>

      <div className="border-t border-dark-border px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-body-sm text-dark-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="lang-en">&copy; {new Date().getFullYear()} PraSanghi. All rights reserved.</span>
            <span className="lang-hi">&copy; {new Date().getFullYear()} प्रासंघी। सर्वाधिकार सुरक्षित।</span>
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-teal-400">
              <Bi en="Privacy Policy" hi="गोपनीयता नीति" />
            </Link>
            <Link href="/terms-of-use" className="hover:text-teal-400">
              <Bi en="Terms of Use" hi="उपयोग की शर्तें" />
            </Link>
            <Link href="/disclaimer" className="hover:text-teal-400">
              <Bi en="Disclaimer" hi="अस्वीकरण" />
            </Link>
            <CookiePreferencesLink />
          </div>
        </div>
      </div>
    </footer>
  )
}
