import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Use',
  description: 'Terms governing use of the PraSanghi website.',
  path: '/terms-of-use',
})

export default function TermsOfUsePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb segments={[{ label: 'Terms of Use' }]} />
      <h1 className="mt-4 text-display-lg font-bold text-blue-900">Terms of Use</h1>
      <p className="mt-3 text-body-sm text-muted-foreground">Last updated: 15 September 2026</p>

      <div className="mt-10 flex flex-col gap-8 text-body-md text-muted-foreground">
        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">1. Acceptance of Terms</h2>
          <p className="mt-3">
            By accessing this website, you agree to be bound by these Terms
            of Use and by the Disclaimer you acknowledged on entry. If you do
            not agree with any part of these terms, please do not use this
            website.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            2. No Advocate-Client Relationship
          </h2>
          <p className="mt-3">
            Access to, or use of, this website does not create an
            advocate-client relationship between you and PraSanghi or any of
            its members. The Bar Council of India does not permit advocates
            to solicit work or advertise; this website exists solely to
            provide information about PraSanghi at the request of visitors
            seeking it of their own accord.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            3. No Legal Advice
          </h2>
          <p className="mt-3">
            The contents of this website — including practice area
            descriptions, Insights articles, and any other material — are
            for general informational purposes only and do not constitute
            legal advice. You should not act, or refrain from acting, on the
            basis of any information on this website without first seeking
            independent legal advice specific to your situation.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            4. Intellectual Property
          </h2>
          <p className="mt-3">
            All content on this website, including text, graphics, logos,
            and the PraSanghi name and mark, is the property of PraSanghi or
            its licensors and is protected by applicable intellectual
            property laws. You may view and print pages for your own
            personal, non-commercial use, but may not reproduce, republish,
            or distribute any content without prior written permission.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            5. Third-Party Links
          </h2>
          <p className="mt-3">
            This website may contain links to third-party websites for your
            convenience. PraSanghi does not control and is not responsible
            for the content or privacy practices of any linked site.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            6. Limitation of Liability
          </h2>
          <p className="mt-3">
            This website and its content are provided &ldquo;as is&rdquo;
            without warranties of any kind. PraSanghi shall not be liable for
            any loss or damage arising from your use of, or inability to
            use, this website, or from any reliance placed on its content.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            7. Governing Law
          </h2>
          <p className="mt-3">
            These Terms of Use are governed by the laws of India, and any
            disputes arising out of or relating to them shall be subject to
            the exclusive jurisdiction of the courts having jurisdiction over
            PraSanghi&rsquo;s registered office.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">
            8. Changes to These Terms
          </h2>
          <p className="mt-3">
            PraSanghi may revise these Terms of Use at any time by updating
            this page. Continued use of the website after any changes
            constitutes acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-blue-900">9. Contact</h2>
          <p className="mt-3">
            Questions about these Terms of Use can be sent through the{' '}
            <a href="/contact" className="underline hover:text-blue-900">
              Contact
            </a>{' '}
            page.
          </p>
        </div>

        <p className="border-t border-border pt-6 text-body-sm italic">
          This page reflects PraSanghi&rsquo;s current terms and is subject
          to periodic review by the firm&rsquo;s own counsel; it will be
          updated as needed.
        </p>
      </div>
    </section>
  )
}
