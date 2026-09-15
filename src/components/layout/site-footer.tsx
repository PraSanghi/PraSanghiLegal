import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { primaryNav } from '@/lib/navigation'

export function SiteFooter() {
  return (
    <footer className="border-t border-dark-border bg-navy-900 text-dark-text-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-heading-sm font-semibold">PraSanghi</p>
          <p className="mt-2 text-body-sm text-dark-text-muted">The Legal Ladder</p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-label-eyebrow uppercase tracking-wide text-gold-400">Sitemap</p>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <Link
                href="/practice-areas"
                className="text-body-sm text-dark-text-muted hover:text-gold-400"
              >
                Practice Areas
              </Link>
            </li>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-body-sm text-dark-text-muted hover:text-gold-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-label-eyebrow uppercase tracking-wide text-gold-400">Office</p>
          {/* Content blocked on project_requirements.md §10 Open Item 6 (office address) —
              this placeholder text must be replaced with the real address before launch,
              per build/implementation-roadmap.md Phase 12. */}
          <address className="mt-3 text-body-sm not-italic text-dark-text-muted">
            Address to be confirmed.
            <br />
            Office hours to be confirmed.
          </address>
        </div>

        <div>
          <p className="text-label-eyebrow uppercase tracking-wide text-gold-400">Connect</p>
          <div className="mt-3 flex gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PraSanghi on LinkedIn (opens in a new tab)"
              className="text-dark-text-muted hover:text-gold-400"
            >
              <Linkedin className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-border px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-body-sm text-dark-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} PraSanghi. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-gold-400">
              Terms of Use
            </Link>
            <Link href="/disclaimer" className="hover:text-gold-400">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
