import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Bi } from '@/components/i18n/bi'

export interface CtaBandProps {
  headline: string
  headlineHi?: string
  ctaLabel: string
  ctaLabelHi?: string
  ctaHref: string
}

export function CtaBand({ headline, headlineHi, ctaLabel, ctaLabelHi, ctaHref }: CtaBandProps) {
  return (
    <section className="bg-blue-900 px-6 py-16 text-dark-text-primary">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="text-balance text-heading-lg font-medium">
          <Bi en={headline} hi={headlineHi ?? headline} />
        </h2>
        <Button asChild size="lg" variant="accent">
          <Link href={ctaHref}>
            <Bi en={ctaLabel} hi={ctaLabelHi ?? ctaLabel} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
