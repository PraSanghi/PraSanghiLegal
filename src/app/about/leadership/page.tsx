import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { PersonProfile } from '@/components/people/person-profile'
import { peopleBySlug } from '@/lib/people-data'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Leadership',
  description:
    'Adv. Rajwardhan Gawde, Founder & Senior Lead Counsel of PraSanghi – The Legal Ladder LLP; Government Advocate, High Court of Madhya Pradesh.',
  path: '/about/leadership',
})

export default function LeadershipPage() {
  const founder = peopleBySlug['rajwardhan-gawde']

  return (
    <>
      <Breadcrumb
        segments={[
          { label: 'About Us', labelHi: 'हमारे बारे में', href: '/about' },
          { label: 'Leadership', labelHi: 'नेतृत्व' },
        ]}
      />
      <PersonProfile person={founder} />
    </>
  )
}
