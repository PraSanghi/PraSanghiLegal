import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { AttorneyProfileHeader } from '@/components/people/attorney-profile-header'
import { Bi } from '@/components/i18n/bi'
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
      <Breadcrumb
        segments={[
          { label: 'Our Advocates', labelHi: 'हमारे अधिवक्ता', href: '/people' },
          { label: person.name },
        ]}
      />
      <AttorneyProfileHeader
        name={person.name}
        role={person.role}
        roleHi={person.roleHi}
        photo={person.photo}
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        {person.bioPending ? (
          <p className="text-body-md text-muted-foreground italic">
            <span className="lang-en">
              A full biography for {person.name} is pending founder-confirmed content. This page
              is a template placeholder and should not be treated as the final profile.
            </span>
            <span className="lang-hi">
              {person.name} की पूर्ण जीवनी संस्थापक की पुष्टि की प्रतीक्षा में है। यह पृष्ठ एक
              टेम्पलेट प्लेसहोल्डर है तथा इसे अंतिम प्रोफ़ाइल नहीं माना जाना चाहिए।
            </span>
          </p>
        ) : null}
        {person.practiceTags.length > 0 ? (
          <div className="mt-8">
            <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">
              <Bi en="Practice Areas" hi="प्रैक्टिस क्षेत्र" />
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {person.practiceTags.map((tag, i) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-1 text-body-sm text-blue-900"
                >
                  <Bi en={tag} hi={person.practiceTagsHi[i] ?? tag} />
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </>
  )
}
