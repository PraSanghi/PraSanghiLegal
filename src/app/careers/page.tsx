import type { Metadata } from 'next'
import { Handshake, TrendUp, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { ValuesTriad } from '@/components/common/values-triad'
import { Button } from '@/components/ui/button'
import { PageBanner } from '@/components/common/page-banner'

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
            applications are welcome.
          </p>
          <Button asChild size="lg" className="mt-6">
            <a href="mailto:careers@prasanghi.example">Send a Speculative Application</a>
          </Button>
        </div>
      </section>
    </>
  )
}
