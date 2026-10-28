import Link from 'next/link'
import { LinkSimple } from '@phosphor-icons/react/dist/ssr'
import { BrandLogo } from '@/components/common/logo-mark'
import { firmContact } from '@/lib/site-config'
import { primaryNav } from '@/lib/navigation'
import { CookiePreferencesLink } from '@/components/compliance/cookie-preferences-link'
import { NewsletterSignupForm } from '@/components/common/newsletter-signup-form'
import { Bi } from '@/components/i18n/bi'

export function SiteFooter() {
  return (
    <footer className="border-t border-dark-border bg-ink-900 text-dark-text-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo tone="light" className="h-16" />
          <p className="mt-4 font-heading text-body-lg italic text-gold-300">
            <Bi en="One Destination for Every Legal Solution" hi="प्रत्येक विधिक समाधान का एक ही गंतव्य" />
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-label-eyebrow uppercase tracking-wide text-gold-300">
            <Bi en="Sitemap" hi="साइट मैप" />
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <Link
                href="/practice-areas"
                className="text-body-sm text-dark-text-muted hover:text-gold-300"
              >
                <Bi en="Practice Areas" hi="प्रैक्टिस क्षेत्र" />
              </Link>
            </li>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-body-sm text-dark-text-muted hover:text-gold-300"
                >
                  <Bi en={item.title} hi={item.titleHi} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-label-eyebrow uppercase tracking-wide text-gold-300">
            <Bi en="Office" hi="कार्यालय" />
          </p>
          <address className="mt-3 text-body-sm not-italic text-dark-text-muted">
            <span className="font-semibold text-dark-text-primary">
              <Bi en="Registered Office, Indore" hi="पंजीकृत कार्यालय, इंदौर" />
            </span>
            <br />
            <Bi en={firmContact.address} hi={firmContact.addressHi} />
          </address>
          <ul className="mt-4 flex flex-col gap-1 text-body-sm">
            {firmContact.phones.map((p) => (
              <li key={p.dial}>
                <a href={`tel:${p.dial}`} className="text-dark-text-muted hover:text-gold-300">
                  {p.display}
                </a>
              </li>
            ))}
            <li className="mt-1">
              <a href={`mailto:${firmContact.email}`} className="text-dark-text-muted hover:text-gold-300">
                {firmContact.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-body-sm text-dark-text-muted">
            <Bi en="Associate presence:" hi="सहयोगी उपस्थिति:" /> {firmContact.associateCities.join(' · ')}
          </p>
        </div>

        <div>
          <p className="text-label-eyebrow uppercase tracking-wide text-gold-300">
            <Bi en="Connect" hi="जुड़ें" />
          </p>
          <div className="mt-3 flex gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PraSanghi on LinkedIn (opens in a new tab)"
              className="text-dark-text-muted hover:text-gold-300"
            >
              <LinkSimple weight="light" className="size-5" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-6 text-label-eyebrow uppercase tracking-wide text-gold-300">
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
            <Link href="/privacy-policy" className="hover:text-gold-300">
              <Bi en="Privacy Policy" hi="गोपनीयता नीति" />
            </Link>
            <Link href="/terms-of-use" className="hover:text-gold-300">
              <Bi en="Terms of Use" hi="उपयोग की शर्तें" />
            </Link>
            <Link href="/disclaimer" className="hover:text-gold-300">
              <Bi en="Disclaimer" hi="अस्वीकरण" />
            </Link>
            <CookiePreferencesLink />
          </div>
        </div>
      </div>
    </footer>
  )
}
