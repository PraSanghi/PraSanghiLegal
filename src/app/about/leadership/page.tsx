import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { AttorneyProfileHeader } from '@/components/people/attorney-profile-header'
import { peopleBySlug } from '@/lib/people-data'

export const metadata: Metadata = {
  title: 'Leadership — PraSanghi',
  description: 'Rajwardhan Gawde, Founder of PraSanghi.',
}

export default function LeadershipPage() {
  const founder = peopleBySlug['rajwardhan-gawde']

  return (
    <section>
      <Breadcrumb segments={[{ label: 'About Us', href: '/about' }, { label: 'Leadership' }]} />
      <div className="mt-4">
        <AttorneyProfileHeader
          name={founder.name}
          role={founder.role}
          photo={founder.photo}
        />
      </div>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-body-md text-muted-foreground italic">
          {founder.name}&rsquo;s full biography, credentials, bar enrollment,
          and professional vision are pending founder-confirmed content — see
          project_requirements.md §10, Open Item 1. This page is a template
          placeholder and is a launch-blocking gap per
          build/implementation-roadmap.md Phase 9.
        </p>
      </div>
    </section>
  )
}
