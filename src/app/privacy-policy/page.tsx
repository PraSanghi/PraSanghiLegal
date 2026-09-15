import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy — PraSanghi',
  description: 'How PraSanghi handles personal information submitted through this website.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb segments={[{ label: 'Privacy Policy' }]} />
      <h1 className="mt-4 text-display-lg font-bold text-blue-900">Privacy Policy</h1>
      <p className="mt-3 text-body-sm text-muted-foreground">Last updated: 15 September 2026</p>

      <div className="mt-10 flex flex-col gap-8 text-body-md text-muted-foreground">
        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">1. Introduction</h2>
          <p className="mt-3">
            This Privacy Policy explains what information PraSanghi collects
            through this website, how it is used, and the choices available
            to you. It applies to this website only and does not cover
            information PraSanghi may receive through other channels (e.g.
            phone, email, or in-person consultations).
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            2. Information We Collect
          </h2>
          <p className="mt-3">This website collects information you choose to provide, such as:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              Your name, email, phone number, practice area of interest, and
              message when you submit the Contact form.
            </li>
            <li>
              Your name, email, resume/CV link, and cover message if you
              apply through the Careers page.
            </li>
          </ul>
          <p className="mt-3">
            We do not currently collect payment information, government IDs,
            or other sensitive personal data through this website.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">3. Cookies</h2>
          <p className="mt-3">
            This website uses two categories of cookies, which you control
            through the cookie banner shown on your first visit or the
            &ldquo;Cookie Preferences&rdquo; link in the footer at any time:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-blue-900">Essential</span>{' '}
              — required for the site to function, such as remembering that
              you acknowledged the Bar Council of India disclaimer and
              recording your cookie preference itself. These cannot be
              disabled, as the site cannot function correctly without them.
            </li>
            <li>
              <span className="font-semibold text-blue-900">Analytics</span>{' '}
              — optional, and only active if you accept them. We use Vercel
              Web Analytics, a privacy-focused service that reports
              aggregate page-visit statistics without using third-party
              advertising trackers or selling data.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            4. How We Use Information
          </h2>
          <p className="mt-3">
            Information submitted through the Contact or Careers forms is
            used only to respond to your enquiry or application. We do not
            sell or rent personal information to third parties, and do not
            use it for unrelated marketing without your consent.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            5. Data Retention
          </h2>
          <p className="mt-3">
            We retain Contact and Careers submissions only for as long as
            reasonably necessary to address the enquiry or application, or as
            required by applicable law.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">6. Your Rights</h2>
          <p className="mt-3">
            You may ask us to access, correct, or delete personal
            information you have submitted through this website by
            contacting us via the{' '}
            <a href="/contact" className="underline hover:text-blue-900">
              Contact
            </a>{' '}
            page.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            7. Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time by revising
            the date at the top of this page.
          </p>
        </div>

        <p className="border-t border-border pt-6 text-body-sm italic">
          This page reflects PraSanghi&rsquo;s current data practices and is
          subject to periodic review by the firm&rsquo;s own counsel; it will
          be updated as needed.
        </p>
      </div>
    </section>
  )
}
