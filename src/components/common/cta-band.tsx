import Link from 'next/link'
import { Button } from '@/components/ui/button'

export interface CtaBandProps {
  headline: string
  ctaLabel: string
  ctaHref: string
}

export function CtaBand({ headline, ctaLabel, ctaHref }: CtaBandProps) {
  return (
    <section className="bg-navy-900 px-6 py-16 text-dark-text-primary">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="text-balance font-serif text-heading-lg font-medium">{headline}</h2>
        <Button asChild size="lg" variant="accent">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  )
}
