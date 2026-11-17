import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { PersonProfile } from '@/components/people/person-profile'
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
    title: `Adv. ${person.name}`,
    description: person.bio[0],
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
      <Breadcrumb
        segments={[
          { label: 'Our Advocates', labelHi: 'हमारे अधिवक्ता', href: '/people' },
          { label: person.name },
        ]}
      />
      <PersonProfile person={person} />
    </>
  )
}
