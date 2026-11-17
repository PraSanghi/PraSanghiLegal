import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { CtaBand } from '@/components/common/cta-band'
import { InsightCover } from '@/components/common/branded-cover'
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
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        ) : (
          <InsightCover label={item.practiceAreaTag} labelHi={item.practiceAreaTagHi} size="hero" />
        )}
      </div>
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center gap-3 text-label-eyebrow uppercase tracking-wide text-gold-700">
          <span>
            <Bi en={item.contentType} hi={CONTENT_TYPE_HI[item.contentType]} />
          </span>
          <time dateTime={item.date} className="text-muted-foreground normal-case tracking-normal">
            {formattedDate}
          </time>
        </div>
        <h1 className="mt-3 text-display-lg font-bold text-ink-900">
          <Bi en={item.headline} hi={item.headlineHi} />
        </h1>
        {item.practiceAreaTag ? (
          <p className="mt-3 text-body-sm font-medium text-gold-700">
            <Bi en={item.practiceAreaTag} hi={item.practiceAreaTagHi ?? item.practiceAreaTag} />
          </p>
        ) : null}
        <div className="mt-8 flex flex-col gap-5 border-t border-border pt-8">
          {item.body.map((block, i) => {
            const hiBlock = item.bodyHi[i]
            if (typeof block === 'string') {
              return (
                <p key={i} className="text-body-lg text-ink-900 text-justify hyphens-auto">
                  <Bi en={block} hi={typeof hiBlock === 'string' ? hiBlock : block} />
                </p>
              )
            }
            if ('heading' in block) {
              return (
                <h2 key={i} className="mt-4 text-heading-md font-bold text-ink-900">
                  <Bi
                    en={block.heading}
                    hi={hiBlock && typeof hiBlock !== 'string' && 'heading' in hiBlock ? hiBlock.heading : block.heading}
                  />
                </h2>
              )
            }
            const hiSteps = hiBlock && typeof hiBlock !== 'string' && 'steps' in hiBlock ? hiBlock.steps : block.steps
            return (
              <ol key={i} className="flex flex-col gap-3">
                {block.steps.map((step, j) => (
                  <li key={j} className="flex items-start gap-4 text-body-lg text-ink-900 text-justify hyphens-auto">
                    <span
                      className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-ink-900 text-body-sm font-semibold text-gold-300"
                      aria-hidden="true"
                    >
                      {j + 1}
                    </span>
                    <Bi en={step} hi={hiSteps[j] ?? step} />
                  </li>
                ))}
              </ol>
            )
          })}
        </div>
        {item.practiceAreaSlug ? (
          <Link
            href={`/practice-areas/${item.practiceAreaSlug}`}
            className="group mt-12 flex items-center justify-between gap-4 border-2 border-gold-500 bg-gold-50 p-5 text-ink-900 transition-colors hover:bg-gold-100"
          >
            <span className="text-body-md font-semibold">
              <Bi
                en={`Related practice: ${item.practiceAreaTag ?? ''}`}
                hi={`संबंधित प्रैक्टिस: ${item.practiceAreaTagHi ?? item.practiceAreaTag ?? ''}`}
              />
            </span>
            <ArrowRight weight="bold" className="size-5 shrink-0 text-gold-700 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        ) : null}
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
