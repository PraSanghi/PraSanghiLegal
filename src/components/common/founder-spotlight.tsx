import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Bi } from '@/components/i18n/bi'
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
        <Image
          src={founder.photo}
          alt={founder.name}
          fill
          sizes="(min-width: 1024px) 320px, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-label-eyebrow uppercase tracking-wide text-gold-700">
          <Bi en="Founder" hi="संस्थापक" />
        </p>
        <h3 className="mt-2 text-heading-lg font-bold text-ink-900">{founder.name}</h3>
        <p className="mt-4 max-w-xl text-body-lg text-muted-foreground">
          <span className="lang-en">
            PraSanghi is built around Rajwardhan Gawde&rsquo;s straightforward idea: a client
            should never have to choose between a firm that can appear before the Supreme Court
            and a firm that understands their day-to-day regulatory obligations. Every matter he
            takes on is argued and advised by the same advocate, start to finish.
          </span>
          <span className="lang-hi">
            प्रासंघी राजवर्धन गावड़े के एक सीधे-सरल विचार पर आधारित है: किसी मुवक्किल को कभी भी ऐसी
            फर्म के बीच चयन नहीं करना चाहिए जो उच्चतम न्यायालय में पैरवी कर सके अथवा ऐसी फर्म जो
            उसके दैनिक नियामक दायित्वों को समझे। वे जो भी मामला लेते हैं, उसकी पैरवी एवं परामर्श
            प्रारंभ से अंत तक वही अधिवक्ता करता है।
          </span>
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button asChild>
            <Link href={`/people/${founder.slug}`}>
              <Bi en="View Founder's Profile" hi="संस्थापक की प्रोफ़ाइल देखें" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/people">
              <Bi en="Meet Our Advocates" hi="हमारे अधिवक्ताओं से मिलें" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
