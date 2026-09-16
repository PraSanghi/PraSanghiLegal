import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { InsightCard } from '@/components/cards/insight-card'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { PageBanner } from '@/components/common/page-banner'
import { Bi } from '@/components/i18n/bi'
import { insights } from '@/lib/insights-data'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Legal Insights',
  description: 'Legal updates, articles, and analysis from PraSanghi.',
  path: '/insights',
})

export default function InsightsPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Legal Insights', labelHi: 'विधिक विश्लेषण' }]} />
      <PageBanner
        eyebrow="Legal Insights"
        eyebrowHi="विधिक विश्लेषण"
        title="Legal Insights"
        titleHi="विधिक विश्लेषण"
        image="https://picsum.photos/seed/prasanghi-insights-banner/1600/700"
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          <Bi
            en="Legal updates and articles from PraSanghi, alongside episodes of The Samvaad Podcast."
            hi="प्रासंघी के विधिक अद्यतन एवं लेख, तथा साथ ही 'द संवाद पॉडकास्ट' के एपिसोड।"
          />
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, i) => (
            <RevealOnScroll key={item.slug} delayMs={i * 75}>
              <InsightCard
                contentType={item.contentType}
                date={item.date}
                headline={item.headline}
                headlineHi={item.headlineHi}
                excerpt={item.excerpt}
                excerptHi={item.excerptHi}
                practiceAreaTag={item.practiceAreaTag}
                practiceAreaTagHi={item.practiceAreaTagHi}
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
