import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { AttorneyCard } from '@/components/cards/attorney-card'
import { CtaBand } from '@/components/common/cta-band'
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'
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

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = practiceAreaDetails[slug]
  if (!area) notFound()

  const team = area.teamSlugs.map((s) => peopleBySlug[s]).filter(Boolean)

  return (
    <>
      <Breadcrumb
        segments={[
          { label: 'Practice Areas', href: '/practice-areas' },
          { label: area.title },
        ]}
      />

      <div className="relative mt-4 aspect-[21/9] w-full overflow-hidden bg-muted">
        <Image src={area.image} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/10 to-transparent" />
        <div className="absolute bottom-0 left-0 px-6 pb-8 sm:px-12">
          <p className="text-label-eyebrow uppercase tracking-wide text-teal-400">
            Practice Area
          </p>
          <h1 className="mt-2 max-w-2xl text-display-lg font-bold text-white">{area.title}</h1>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <p className="text-body-lg text-muted-foreground">{area.summary}</p>

        <div className="mt-10 flex flex-col gap-4">
          {area.overview.map((paragraph, i) => (
            <p key={i} className="text-body-md text-blue-900">
              {paragraph}
            </p>
          ))}
        </div>

        <h2 className="mt-12 text-heading-md font-bold text-blue-900">
          Specific Services
        </h2>
        <ul className="mt-4 flex flex-col gap-2">
          {area.specificServices.map((service) => (
            <li key={service} className="flex items-start gap-2 text-body-md text-blue-900">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal-600" />
              {service}
            </li>
          ))}
        </ul>

        {team.length > 0 ? (
          <>
            <h2 className="mt-12 text-heading-md font-bold text-blue-900">
              Team
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
          </>
        ) : null}
      </section>

      <CtaBand
        headline={`Speak to Our ${area.title} Team`}
        ctaLabel="Get in Touch"
        ctaHref="/contact"
      />
    </>
  )
}
