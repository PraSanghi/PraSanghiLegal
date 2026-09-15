import type { Metadata } from 'next'
import Link from 'next/link'
import { MagnifyingGlass, Compass, Gavel, Handshake } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { TextLink } from '@/components/common/text-link'
import { PageBanner } from '@/components/common/page-banner'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description: 'The story behind PraSanghi, The Legal Ladder.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'About Us' }]} />
      <PageBanner
        eyebrow="Our Story"
        title="About PraSanghi"
        image="https://picsum.photos/seed/prasanghi-about/1600/700"
      />
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex flex-col gap-4 text-body-md text-blue-900">
          <p>
            PraSanghi is an Advocates LLP founded by Rajwardhan Gawde, built
            around a straightforward idea: a client should never have to
            choose between a firm that can appear before the Supreme Court
            and a firm that understands their day-to-day regulatory
            obligations.
          </p>
          <p>
            The name carries that idea directly — <strong>&ldquo;The Legal
            Ladder&rdquo;</strong> is not a decorative tagline. It describes a
            practice built to move a client&rsquo;s matter forward, one
            deliberate step at a time, whether that matter sits in a
            subordinate court, a High Court, or in a compliance filing that
            needs to be right the first time.
          </p>
          <p className="italic text-muted-foreground">
            A fuller founding narrative — including Rajwardhan Gawde&rsquo;s
            background and the firm&rsquo;s LLP structure — is pending
            founder-confirmed content. See project_requirements.md §10, Open
            Item 1.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          <TextLink href="/about/vision-values">Vision &amp; Values</TextLink>
          <TextLink href="/about/leadership">Leadership</TextLink>
          <TextLink href="/about/affiliated-organisations">Affiliated Organisations</TextLink>
        </div>

        <p className="mt-10">
          <Link
            href="/practice-areas"
            className="text-body-sm font-semibold text-blue-500 hover:text-teal-600"
          >
            Explore Our Practice Areas
          </Link>
        </p>
      </section>

      <section className="border-t border-border bg-off-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">
            How We Work
          </p>
          <h2 className="mt-2 text-heading-lg font-bold text-blue-900">Our Approach</h2>
          <p className="mt-4 max-w-2xl text-body-lg text-muted-foreground">
            The same four steps carry every matter at PraSanghi, whether
            it&rsquo;s a courtroom filing or a compliance registration.
          </p>

          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MagnifyingGlass,
                title: 'Understand',
                body: 'We start by understanding the matter in full — the forum, the stakes, and what a good outcome actually looks like for you.',
              },
              {
                icon: Compass,
                title: 'Strategize',
                body: 'The advocate assigned to your matter builds the approach, rather than following a template used across every client.',
              },
              {
                icon: Gavel,
                title: 'Execute',
                body: 'Filings, hearings, and registrations are handled with the same rigor, whether the forum is a subordinate court or a regulator.',
              },
              {
                icon: Handshake,
                title: 'Follow Through',
                body: 'Your advocate stays reachable after a filing or hearing — matters are not considered closed until you know where things stand.',
              },
            ].map((step, i) => (
              <li key={step.title} className="flex flex-col gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-blue-900 text-body-sm font-semibold text-white">
                  {i + 1}
                </span>
                <step.icon weight="light" className="size-7 text-teal-600" aria-hidden="true" />
                <p className="text-heading-sm font-semibold text-blue-900">{step.title}</p>
                <p className="text-body-sm text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
