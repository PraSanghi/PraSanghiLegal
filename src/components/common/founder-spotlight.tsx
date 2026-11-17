import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Bi } from '@/components/i18n/bi'
import { PersonPortrait } from '@/components/people/person-portrait'
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
      <PersonPortrait
        name={founder.name}
        role={founder.role}
        photo={founder.photo}
        sizes="(min-width: 1024px) 320px, 100vw"
        className="aspect-4/5 w-full max-w-xs"
      />
      <div>
        <p className="text-label-eyebrow uppercase tracking-wide text-gold-700">
          <Bi en="Founder" hi="संस्थापक" />
        </p>
        <h3 className="mt-2 text-heading-lg font-bold text-ink-900">
          <span className="lang-en">Adv. </span>
          <span className="lang-hi">अधि. </span>
          {founder.name}
        </h3>
        <p className="mt-1 text-body-md text-gold-700">
          <Bi en={founder.role} hi={founder.roleHi} />
        </p>
        <p className="mt-4 max-w-xl text-body-lg text-muted-foreground text-justify hyphens-auto">
          <Bi
            en="Government Advocate before the Hon’ble High Court of Madhya Pradesh and former Standing Counsel for the Union of India, Adv. Rajwardhan Gawde founded PraSanghi on a single promise: One Destination for Every Legal Solution. Every matter is argued and advised by the same panel of advocates — from first counsel to final implementation."
            hi="माननीय मध्य प्रदेश उच्च न्यायालय में शासकीय अधिवक्ता एवं भारत संघ के भूतपूर्व स्थायी अधिवक्ता, अधिवक्ता राजवर्धन गावड़े ने प्रासंघी की स्थापना एक ही संकल्प पर की — प्रत्येक विधिक समाधान हेतु एक ही गंतव्य। प्रत्येक मामले में परामर्श एवं पैरवी प्रारंभ से अंतिम क्रियान्वयन तक अधिवक्ताओं के उसी पैनल द्वारा की जाती है।"
          />
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
