import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { TextLink } from '@/components/common/text-link'
import { PageBanner } from '@/components/common/page-banner'

export const metadata: Metadata = {
  title: 'Media — PraSanghi',
  description: 'Press mentions and The Samvaad Podcast.',
}

export default function MediaPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Media' }]} />
      <PageBanner
        eyebrow="Media"
        title="Media"
        image="https://picsum.photos/seed/prasanghi-media/1600/700"
      />
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div>
          <h2 className="text-heading-md font-bold text-blue-900">Press Mentions</h2>
          <p className="mt-3 text-body-md text-muted-foreground italic">
            No press mentions are confirmed yet. This section follows The Law
            Chambers&rsquo; &ldquo;As Featured In&rdquo; pattern — see
            research/competitor-analysis-secondary.md — and will list real
            coverage as it happens.
          </p>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <h2 className="text-heading-md font-bold text-blue-900">The Samvaad Podcast</h2>
          <p className="mt-3 text-body-md text-muted-foreground">
            PraSanghi is affiliated with The Samvaad Podcast, a media property
            referenced in the firm&rsquo;s founding notes. Episode content is
            pending — see project_requirements.md §6.
          </p>
          <div className="mt-4">
            <TextLink href="/insights">Explore Insights</TextLink>
          </div>
        </div>
      </section>
    </>
  )
}
