import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { CtaBand } from '@/components/common/cta-band'
import { Bi } from '@/components/i18n/bi'
import { WelfareSocietyCover } from '@/components/common/branded-cover'
import { INITIATIVE_THEME_HI, initiatives, initiativesBySlug } from '@/lib/initiatives-data'
import { pageMetadata } from '@/lib/site-config'

export function generateStaticParams() {
  return initiatives.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = initiativesBySlug[slug]
  if (!item) return {}
  return pageMetadata({
    title: item.headline,
    description: item.excerpt,
    path: `/social-initiatives/${slug}`,
  })
}

export default async function InitiativeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = initiativesBySlug[slug]
  if (!item) notFound()

  return (
    <>
      <Breadcrumb
        segments={[
          { label: 'Social Initiatives', labelHi: 'सामाजिक पहल', href: '/social-initiatives' },
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
          <WelfareSocietyCover />
        )}
      </div>
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center gap-3 text-label-eyebrow uppercase tracking-wide text-gold-700">
          <span>
            <Bi en={item.theme} hi={INITIATIVE_THEME_HI[item.theme]} />
          </span>
          {item.when ? (
            <span className="text-muted-foreground normal-case tracking-normal">
              <Bi en={item.when} hi={item.whenHi ?? item.when} />
            </span>
          ) : null}
        </div>
        <h1 className="mt-3 text-display-lg font-bold text-ink-900">
          <Bi en={item.headline} hi={item.headlineHi} />
        </h1>
        <p className="mt-3 text-body-sm font-medium text-gold-700">
          <Bi en="PraSanghi Social Welfare Society" hi="प्रासंघी सोशल वेलफेयर सोसायटी" />
        </p>
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8">
          {item.body.map((paragraph, i) => (
            <p key={i} className="text-body-md text-ink-900">
              <Bi en={paragraph} hi={item.bodyHi[i] ?? paragraph} />
            </p>
          ))}
        </div>
      </article>
      <CtaBand
        headline="Bring an Initiative to Your Community"
        headlineHi="अपने समुदाय में यह पहल लाएँ"
        ctaLabel="Get in Touch"
        ctaLabelHi="संपर्क करें"
        ctaHref="/contact"
      />
    </>
  )
}
