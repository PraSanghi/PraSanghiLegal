import type { Metadata } from 'next'
import { Bank, Scales, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { ValuesTriad } from '@/components/common/values-triad'
import { CtaBand } from '@/components/common/cta-band'
import { PageBanner } from '@/components/common/page-banner'

export const metadata: Metadata = {
  title: 'Vision & Values — PraSanghi',
  description: 'People, Justice, Progress — the values behind PraSanghi.',
}

export default function VisionValuesPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'About Us', href: '/about' }, { label: 'Vision & Values' }]} />
      <PageBanner
        eyebrow="Vision & Values"
        title="People, Justice, Progress"
        image="https://picsum.photos/seed/prasanghi-vision-values/1600/700"
      />
      <section className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-body-lg text-muted-foreground">
          Three commitments that shape every matter PraSanghi takes on.
        </p>

        <div className="mt-12">
          <ValuesTriad
            items={[
              {
                icon: Bank,
                label: 'People',
                body: 'Every matter starts with the person, not the file — clients speak directly with the advocate handling their case.',
              },
              {
                icon: Scales,
                label: 'Justice',
                body: 'Precise, considered advocacy across every forum, from subordinate courts to the Supreme Court of India.',
              },
              {
                icon: ShieldCheck,
                label: 'Progress',
                body: 'Compliance and counsel that move a client meaningfully forward, not just paperwork that satisfies a checklist.',
              },
            ]}
          />
        </div>
      </section>
      <CtaBand headline="Join Our Team" ctaLabel="View Careers" ctaHref="/careers" />
    </>
  )
}
