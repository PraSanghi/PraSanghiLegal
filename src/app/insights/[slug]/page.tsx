import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { CtaBand } from '@/components/common/cta-band'
import { Bi } from '@/components/i18n/bi'
import { CONTENT_TYPE_HI } from '@/components/cards/insight-card'
import { insights, insightsBySlug } from '@/lib/insights-data'
import { pageMetadata } from '@/lib/site-config'

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = insightsBySlug[slug]
  if (!item) return {}
  return pageMetadata({
    title: item.headline,
    description: item.excerpt,
    path: `/insights/${slug}`,
  })
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = insightsBySlug[slug]
  if (!item) notFound()

  const formattedDate = new Date(item.date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <>
      <Breadcrumb
        segments={[
          { label: 'Legal Insights', labelHi: 'विधिक विश्लेषण', href: '/insights' },
          { label: item.headline, labelHi: item.headlineHi },
        ]}
      />
      <div className="relative mx-auto mt-4 aspect-[21/9] w-full max-w-5xl overflow-hidden bg-muted px-0">
        <Image src={item.image} alt="" fill priority className="object-cover" />
      </div>
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center gap-3 text-label-eyebrow uppercase tracking-wide text-teal-600">
          <span>
            <Bi en={item.contentType} hi={CONTENT_TYPE_HI[item.contentType]} />
          </span>
          <time dateTime={item.date} className="text-muted-foreground normal-case tracking-normal">
            {formattedDate}
          </time>
        </div>
        <h1 className="mt-3 text-display-lg font-bold text-blue-900">
          <Bi en={item.headline} hi={item.headlineHi} />
        </h1>
        {item.practiceAreaTag ? (
          <p className="mt-3 text-body-sm font-medium text-blue-500">
            <Bi en={item.practiceAreaTag} hi={item.practiceAreaTagHi ?? item.practiceAreaTag} />
          </p>
        ) : null}
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8">
          {item.body.map((paragraph, i) => (
            <p key={i} className="text-body-md text-blue-900">
              <Bi en={paragraph} hi={item.bodyHi[i] ?? paragraph} />
            </p>
          ))}
        </div>
      </article>
      <CtaBand
        headline="Consult Our Legal Team"
        headlineHi="हमारी विधिक टीम से परामर्श करें"
        ctaLabel="Schedule a Consultation"
        ctaLabelHi="परामर्श निर्धारित करें"
        ctaHref="/contact"
      />
    </>
  )
}
