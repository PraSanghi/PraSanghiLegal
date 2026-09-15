import type { Metadata } from 'next'
import { Handshake, TrendUp, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { ValuesTriad } from '@/components/common/values-triad'
import { Button } from '@/components/ui/button'
import { PageBanner } from '@/components/common/page-banner'
import { QuickApplyForm } from '@/components/common/quick-apply-form'
import { FaqAccordion } from '@/components/common/faq-accordion'
import { careersFaqs } from '@/lib/careers-faq-data'

export const metadata: Metadata = {
  title: 'Careers — PraSanghi',
  description: 'Careers and internship opportunities at PraSanghi.',
}

export default function CareersPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Careers' }]} />
      <PageBanner
        eyebrow="Careers"
        title="Join PraSanghi"
        image="https://picsum.photos/seed/prasanghi-careers/1600/700"
      />
      <section className="mx-auto max-w-4xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          We look for advocates and associates who want direct client
          responsibility from early in their career, not years of routed
          case files.
        </p>

        <div className="mt-12">
          <ValuesTriad
            items={[
              {
                icon: Handshake,
                label: 'Mentorship',
                body: 'Direct, partner-led review of your work from day one.',
              },
              {
                icon: TrendUp,
                label: 'Growth',
                body: 'Exposure across litigation, regulatory, and advisory work.',
              },
              {
                icon: ShieldCheck,
                label: 'Ethics',
                body: 'A client-first practice, in the courtroom and at the compliance desk.',
              },
            ]}
          />
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-heading-md font-bold text-blue-900">Open Positions</h2>
          <p className="mt-3 text-body-md text-muted-foreground italic">
            Specific open roles are pending founder confirmation — see
            project_requirements.md §10, Open Item 5 ("item 6" in the
            founder&rsquo;s original notes was left undefined and Careers is
            its most likely destination). In the meantime, speculative
            applications are welcome below, or by emailing directly.
          </p>
          <Button asChild size="lg" variant="outline" className="mt-6">
            <a href="mailto:careers@prasanghi.example">Email Us Directly</a>
          </Button>
        </div>
      </section>

      <section className="border-t border-border bg-off-white px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">
            Quick Apply
          </p>
          <h2 className="mt-2 text-heading-lg font-bold text-blue-900">
            Send a Speculative Application
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            No posting matches your background exactly? Send this short form
            anyway — it goes directly to the team, not into a filtered queue.
            We aim to respond within 7 working days.
          </p>
          <div className="mt-10">
            <QuickApplyForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-heading-lg font-bold text-blue-900">Careers FAQ</h2>
        <span className="mt-3 block h-0.5 w-12 bg-teal-500" aria-hidden="true" />
        <FaqAccordion items={careersFaqs} />
      </section>
    </>
  )
}
