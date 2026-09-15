import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import type { PersonRecord } from '@/lib/people-data'

export interface FounderSpotlightProps {
  founder: PersonRecord
}

// Homepage-exclusive: a single spotlight, not the full roster — the
// complete team (with everyone's card) is reserved for /people, so there's
// a reason to click through instead of seeing the whole firm at a glance.
export function FounderSpotlight({ founder }: FounderSpotlightProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
      <div className="relative aspect-4/5 w-full max-w-xs overflow-hidden bg-muted">
        <Image src={founder.photo} alt={founder.name} fill className="object-cover" />
      </div>
      <div>
        <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">Founder</p>
        <h3 className="mt-2 text-heading-lg font-bold text-blue-900">{founder.name}</h3>
        <p className="mt-4 max-w-xl text-body-lg text-muted-foreground">
          PraSanghi is built around Rajwardhan Gawde&rsquo;s straightforward
          idea: a client should never have to choose between a firm that can
          appear before the Supreme Court and a firm that understands their
          day-to-day regulatory obligations. Every matter he takes on is
          argued and advised by the same advocate, start to finish.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button asChild>
            <Link href={`/people/${founder.slug}`}>View Founder&rsquo;s Profile</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/people">Meet Our Advocates</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
