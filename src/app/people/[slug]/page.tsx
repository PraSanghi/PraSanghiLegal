import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { AttorneyProfileHeader } from '@/components/people/attorney-profile-header'
import { people, peopleBySlug } from '@/lib/people-data'
import { pageMetadata } from '@/lib/site-config'

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const person = peopleBySlug[slug]
  if (!person) return {}
  return pageMetadata({
    title: person.name,
    description: `${person.name}, ${person.role} at PraSanghi.`,
    path: `/people/${slug}`,
  })
}

export default async function PersonProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const person = peopleBySlug[slug]
  if (!person) notFound()

  return (
    <>
      <Breadcrumb segments={[{ label: 'Our Advocates', href: '/people' }, { label: person.name }]} />
      <AttorneyProfileHeader
        name={person.name}
        role={person.role}
        photo={person.photo}
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        {person.bioPending ? (
          <p className="text-body-md text-muted-foreground italic">
            A full biography for {person.name} is pending founder-confirmed
            content — see project_requirements.md §10, Open Items 1–2. This
            page is a template placeholder and should not be treated as the
            final profile.
          </p>
        ) : null}
        {person.practiceTags.length > 0 ? (
          <div className="mt-8">
            <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">
              Practice Areas
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {person.practiceTags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-1 text-body-sm text-blue-900"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}
