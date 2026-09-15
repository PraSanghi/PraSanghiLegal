import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { CtaBand } from '@/components/common/cta-band'
import { insights, insightsBySlug } from '@/lib/insights-data'

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
  return { title: `${item.headline} — PraSanghi`, description: item.excerpt }
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
      <Breadcrumb segments={[{ label: 'Insights', href: '/insights' }, { label: item.headline }]} />
      <div className="relative mx-auto mt-4 aspect-[21/9] w-full max-w-5xl overflow-hidden bg-muted px-0">
        <Image src={item.image} alt="" fill priority className="object-cover" />
      </div>
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center gap-3 text-label-eyebrow uppercase tracking-wide text-teal-600">
          <span>{item.contentType}</span>
          <time dateTime={item.date} className="text-muted-foreground normal-case tracking-normal">
            {formattedDate}
          </time>
        </div>
        <h1 className="mt-3 text-display-lg font-bold text-blue-900">{item.headline}</h1>
        {item.practiceAreaTag ? (
          <p className="mt-3 text-body-sm font-medium text-blue-500">{item.practiceAreaTag}</p>
        ) : null}
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8">
          {item.body.map((paragraph, i) => (
            <p key={i} className="text-body-md text-blue-900 italic">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      <CtaBand headline="Speak to Our Team" ctaLabel="Get in Touch" ctaHref="/contact" />
    </>
  )
}
