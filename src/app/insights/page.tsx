import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { InsightCard } from '@/components/cards/insight-card'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { PageBanner } from '@/components/common/page-banner'
import { insights } from '@/lib/insights-data'

export const metadata: Metadata = {
  title: 'Legal Insights — PraSanghi',
  description: 'Legal updates, articles, and analysis from PraSanghi.',
}

export default function InsightsPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Legal Insights' }]} />
      <PageBanner
        eyebrow="Legal Insights"
        title="Legal Insights"
        image="https://picsum.photos/seed/prasanghi-insights-banner/1600/700"
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          Legal updates and articles from PraSanghi, alongside episodes of The
          Samvaad Podcast.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, i) => (
            <RevealOnScroll key={item.slug} delayMs={i * 75}>
              <InsightCard
                contentType={item.contentType}
                date={item.date}
                headline={item.headline}
                excerpt={item.excerpt}
                practiceAreaTag={item.practiceAreaTag}
                image={item.image}
                href={`/insights/${item.slug}`}
              />
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  )
}
