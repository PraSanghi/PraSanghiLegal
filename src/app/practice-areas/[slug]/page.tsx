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
import { Button } from '@/components/ui/button'
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'
import { practiceAreaCarouselImages } from '@/lib/practice-area-carousel-images'
import { peopleBySlug } from '@/lib/people-data'

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
  return {
    title: `${area.title} — PraSanghi`,
    description: area.summary,
  }
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
          { label: 'Practice Areas', href: '/practice-areas' },
          { label: area.title },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_minmax(0,420px)]">
          <RevealOnScroll>
            <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">
              Practice Area
            </p>
            <h1 className="mt-2 text-display-lg font-bold text-blue-900">{area.title}</h1>
            <p className="mt-4 text-body-lg text-muted-foreground">{area.summary}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Discuss Your Matter</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/practice-areas">View All Practice Areas</Link>
              </Button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delayMs={75} className="relative aspect-4/5 w-full overflow-hidden bg-muted">
            <Image src={image} alt="" fill priority className="object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-t border-border bg-off-white px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <RevealOnScroll className="flex flex-col gap-4">
            {area.overview.map((paragraph, i) => (
              <p key={i} className="text-body-md text-blue-900">
                {paragraph}
              </p>
            ))}
          </RevealOnScroll>

          <RevealOnScroll>
            <h2 className="mt-12 text-heading-md font-bold text-blue-900">What&rsquo;s Included</h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {area.specificServices.map((service) => (
                <li key={service} className="flex items-start gap-3 text-body-md text-blue-900">
                  <CheckCircle
                    weight="fill"
                    className="mt-0.5 size-5 shrink-0 text-teal-600"
                    aria-hidden="true"
                  />
                  {service}
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          {team.length > 0 ? (
            <RevealOnScroll>
              <h2 className="mt-12 text-heading-md font-bold text-blue-900">Team</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {team.map((person) => (
                  <AttorneyCard
                    key={person.slug}
                    name={person.name}
                    role={person.role}
                    photo={person.photo}
                    href={`/people/${person.slug}`}
                    practiceTags={person.practiceTags}
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
            <h2 className="text-heading-lg font-bold text-blue-900">Related Practice Areas</h2>
          </RevealOnScroll>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s, i) => (
              <RevealOnScroll key={s} delayMs={i * 75}>
                <PracticeAreaCard
                  title={practiceAreaDetails[s].title}
                  description={practiceAreaDetails[s].summary}
                  href={`/practice-areas/${s}`}
                  image={practiceAreaCarouselImages[s] ?? practiceAreaDetails[s].image}
                />
              </RevealOnScroll>
            ))}
          </div>
        </section>
      ) : null}

      <CtaBand
        headline={`Speak to Our ${area.title} Team`}
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  )
}
