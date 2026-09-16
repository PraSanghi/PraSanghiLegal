import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { AttorneyProfileHeader } from '@/components/people/attorney-profile-header'
import { peopleBySlug } from '@/lib/people-data'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Leadership',
  description: 'Rajwardhan Gawde, Founder of PraSanghi.',
  path: '/about/leadership',
})

export default function LeadershipPage() {
  const founder = peopleBySlug['rajwardhan-gawde']

  return (
    <section>
      <Breadcrumb
        segments={[
          { label: 'About Us', labelHi: 'हमारे बारे में', href: '/about' },
          { label: 'Leadership', labelHi: 'नेतृत्व' },
        ]}
      />
      <div className="mt-4">
        <AttorneyProfileHeader
          name={founder.name}
          role={founder.role}
          roleHi={founder.roleHi}
          photo={founder.photo}
        />
      </div>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-body-md text-muted-foreground italic">
          <span className="lang-en">
            {founder.name}&rsquo;s full biography, credentials, bar enrollment, and professional
            vision are pending founder-confirmed content. This page is a template placeholder.
          </span>
          <span className="lang-hi">
            {founder.name} की पूर्ण जीवनी, योग्यताएँ, बार नामांकन, तथा व्यावसायिक दृष्टिकोण
            संस्थापक की पुष्टि की प्रतीक्षा में हैं। यह पृष्ठ एक टेम्पलेट प्लेसहोल्डर है।
          </span>
        </p>
      </div>
    </section>
  )
}
