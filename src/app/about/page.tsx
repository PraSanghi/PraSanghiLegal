import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { TextLink } from '@/components/common/text-link'
import { PageBanner } from '@/components/common/page-banner'

export const metadata: Metadata = {
  title: 'About — PraSanghi',
  description: 'The story behind PraSanghi, The Legal Ladder.',
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'About' }]} />
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
            Explore our Practice Areas
          </Link>
        </p>
      </section>
    </>
  )
}
