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

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    })
  const formattedDate = fmt(item.date)
  const lawAsOf = fmt(item.lawAsOf)
  const words = item.body
    .flatMap((b) => (typeof b === 'string' ? [b] : 'steps' in b ? b.steps : 'bullets' in b ? b.bullets : 'heading' in b ? [b.heading] : [b.note]))
    .join(' ')
    .split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 200))

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
          <span className="text-muted-foreground normal-case tracking-normal">
            <Bi en={`${minutes} min read`} hi={`${minutes} मिनट`} />
          </span>
        </div>
        <h1 className="mt-3 text-display-lg font-bold text-ink-900">
          <Bi en={item.headline} hi={item.headlineHi} />
        </h1>
        {item.practiceAreaTag ? (
          <p className="mt-3 text-body-sm font-medium text-gold-700">
            <Bi en={item.practiceAreaTag} hi={item.practiceAreaTagHi ?? item.practiceAreaTag} />
          </p>
        ) : null}
        <p className="mt-2 text-body-sm text-muted-foreground">
          <Bi en={`Law stated as at ${lawAsOf}`} hi={`विधि ${lawAsOf} की स्थिति अनुसार`} />
        </p>
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
            if ('note' in block) {
              return (
                <p key={i} className="border border-gold-300 bg-gold-50 px-5 py-4 text-body-md font-medium text-ink-900">
                  <Bi en={block.note} hi={hiBlock && typeof hiBlock !== 'string' && 'note' in hiBlock ? hiBlock.note : block.note} />
                </p>
              )
            }
            if ('bullets' in block) {
              const hiBullets = hiBlock && typeof hiBlock !== 'string' && 'bullets' in hiBlock ? hiBlock.bullets : block.bullets
              return (
                <ul key={i} className="flex flex-col gap-3">
                  {block.bullets.map((point, j) => (
                    <li key={j} className="flex items-start gap-4 text-body-lg text-ink-900 text-justify hyphens-auto">
                      <span className="mt-[0.6em] size-2 shrink-0 rotate-45 bg-gold-500" aria-hidden="true" />
                      <span>
                        <Bi en={point} hi={hiBullets[j] ?? point} />
                      </span>
                    </li>
                  ))}
                </ul>
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
        {item.sources.length ? (
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="text-heading-sm font-bold text-ink-900">
              <Bi en="Key legal sources" hi="प्रमुख विधिक स्रोत" />
            </h2>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-body-md text-ink-900">
              {item.sources.map((s, i) => (
                <li key={i}>
                  <Bi en={s} hi={item.sourcesHi[i] ?? s} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <p className="mt-8 text-body-sm text-muted-foreground text-justify">
          <Bi
            en={`This article is general information on the law as at ${lawAsOf}. It is not legal advice and does not create an advocate–client relationship. Laws, rules and notified limits change, and their application depends on the facts and on the state concerned; obtain advice on your specific situation before acting. `}
            hi={`यह लेख ${lawAsOf} की स्थिति अनुसार विधि पर सामान्य जानकारी है। यह विधिक परामर्श नहीं है तथा इससे अधिवक्ता–मुवक्किल संबंध स्थापित नहीं होता। विधियाँ, नियम एवं अधिसूचित सीमाएँ परिवर्तित होती रहती हैं, तथा उनका अनुप्रयोग तथ्यों एवं संबंधित राज्य पर निर्भर करता है; कोई कदम उठाने से पूर्व अपनी विशिष्ट स्थिति पर परामर्श लें। `}
          />
          <Link href="/disclaimer" className="underline underline-offset-2 hover:text-ink-900">
            <Bi en="Read our full disclaimer." hi="पूर्ण अस्वीकरण पढ़ें।" />
          </Link>
        </p>
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
