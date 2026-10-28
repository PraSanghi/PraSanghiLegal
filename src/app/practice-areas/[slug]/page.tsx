import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CheckCircle } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { AttorneyCard } from '@/components/cards/attorney-card'
import { PracticeAreaCard } from '@/components/cards/practice-area-card'
import { CtaBand } from '@/components/common/cta-band'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { Bi } from '@/components/i18n/bi'
import { Button } from '@/components/ui/button'
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'
import { practiceAreaCarouselImages } from '@/lib/practice-area-carousel-images'
import { peopleBySlug } from '@/lib/people-data'
import { pageMetadata } from '@/lib/site-config'

export function generateStaticParams() {
  return practiceAreaSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = practiceAreaDetails[slug]
  if (!area) return {}
  return pageMetadata({
    title: area.title,
    description: area.summary,
    path: `/practice-areas/${slug}`,
  })
}

// Deliberately not the Insights article template (full-bleed 21:9 banner
// then flowing prose) — a service page's job is to convert a prospective
// client, not to be read start to finish, so it leads with a two-column
// intro (contained image, not full-bleed) and a scannable checklist rather
// than a wall of text, and closes with cross-links into other services.
export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = practiceAreaDetails[slug]
  if (!area) notFound()

  const team = area.teamSlugs.map((s) => peopleBySlug[s]).filter(Boolean)
  const image = practiceAreaCarouselImages[slug] ?? area.image
  const related = practiceAreaSlugs.filter((s) => s !== slug).slice(0, 3)

  return (
    <>
      <Breadcrumb
        segments={[
          { label: 'Practice Areas', labelHi: 'प्रैक्टिस क्षेत्र', href: '/practice-areas' },
          { label: area.title, labelHi: area.titleHi },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_minmax(0,420px)]">
          <RevealOnScroll>
            <p className="text-label-eyebrow uppercase tracking-wide text-gold-700">
              <Bi en="Practice Area" hi="प्रैक्टिस क्षेत्र" />
            </p>
            <h1 className="mt-2 text-display-lg font-bold text-ink-900">
              <Bi en={area.title} hi={area.titleHi} />
            </h1>
            <p className="mt-4 text-body-lg text-muted-foreground">
              <Bi en={area.summary} hi={area.summaryHi} />
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">
                  <Bi en="Discuss Your Matter" hi="अपने मामले पर चर्चा करें" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/practice-areas">
                  <Bi en="View All Practice Areas" hi="सभी प्रैक्टिस क्षेत्र देखें" />
                </Link>
              </Button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delayMs={75} className="relative aspect-4/5 w-full overflow-hidden bg-muted">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-t border-border bg-off-white px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <RevealOnScroll className="flex flex-col gap-4">
            {area.overview.map((paragraph, i) => (
              <p key={i} className="text-body-md text-ink-900">
                <Bi en={paragraph} hi={area.overviewHi[i] ?? paragraph} />
              </p>
            ))}
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="mt-12 text-heading-md font-bold text-ink-900">
              <Bi en="What's Included" hi="इसमें क्या शामिल है" />
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {area.specificServices.map((service, i) => (
                <li key={service} className="flex items-start gap-3 text-body-md text-ink-900">
                  <CheckCircle
                    weight="fill"
                    className="mt-0.5 size-5 shrink-0 text-gold-700"
                    aria-hidden="true"
                  />
                  <Bi en={service} hi={area.specificServicesHi[i] ?? service} />
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          {area.commonSituations && area.commonSituations.length > 0 ? (
            <RevealOnScroll>
              <h2 className="mt-12 text-heading-md font-bold text-ink-900">
                <Bi en="Situations We Handle" hi="वे स्थितियाँ जिन्हें हम संभालते हैं" />
              </h2>
              <ul className="mt-6 flex flex-col gap-4">
                {area.commonSituations.map((situation, i) => (
                  <li key={situation} className="flex items-start gap-3 text-body-md text-ink-900">
                    <span
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500"
                      aria-hidden="true"
                    />
                    <Bi en={situation} hi={area.commonSituationsHi?.[i] ?? situation} />
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          ) : null}

          {team.length > 0 ? (
            <RevealOnScroll>
              <h2 className="mt-12 text-heading-md font-bold text-ink-900">
                <Bi en="Team" hi="टीम" />
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {team.map((person) => (
                  <AttorneyCard
                    key={person.slug}
                    name={person.name}
                    role={person.role}
                    roleHi={person.roleHi}
                    photo={person.photo}
                    href={`/people/${person.slug}`}
                    practiceTags={person.practiceTags}
                    practiceTagsHi={person.practiceTagsHi}
                  />
                ))}
              </div>
            </RevealOnScroll>
          ) : null}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <RevealOnScroll>
            <h2 className="text-heading-lg font-bold text-ink-900">
              <Bi en="Related Practice Areas" hi="संबंधित प्रैक्टिस क्षेत्र" />
            </h2>
          </RevealOnScroll>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s, i) => (
              <RevealOnScroll key={s} delayMs={i * 75}>
                <PracticeAreaCard
                  title={practiceAreaDetails[s].title}
                  titleHi={practiceAreaDetails[s].titleHi}
                  description={practiceAreaDetails[s].summary}
                  descriptionHi={practiceAreaDetails[s].summaryHi}
                  href={`/practice-areas/${s}`}
                  image={practiceAreaCarouselImages[s] ?? practiceAreaDetails[s].image}
                />
              </RevealOnScroll>
            ))}
          </div>
        </section>
      ) : null}

      <CtaBand
        headline={`Consult Our ${area.title} Team`}
        headlineHi={`हमारी ${area.titleHi} टीम से परामर्श करें`}
        ctaLabel="Schedule a Consultation"
        ctaLabelHi="परामर्श निर्धारित करें"
        ctaHref="/contact"
      />
    </>
  )
}
