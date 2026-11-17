import type { Metadata } from 'next'
import { Bank, Scales, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { ValuesTriad } from '@/components/common/values-triad'
import { CtaBand } from '@/components/common/cta-band'
import { PageBanner } from '@/components/common/page-banner'
import { Bi } from '@/components/i18n/bi'
import { pageMetadata } from '@/lib/site-config'
import { siteImages } from '@/lib/site-images'

export const metadata: Metadata = pageMetadata({
  title: 'Vision & Values',
  description: 'One Destination, Every Forum, Every Solution — the vision and values of PraSanghi – The Legal Ladder LLP.',
  path: '/about/vision-values',
})

export default function VisionValuesPage() {
  return (
    <>
      <Breadcrumb
        segments={[
          { label: 'About Us', labelHi: 'हमारे बारे में', href: '/about' },
          { label: 'Vision & Values', labelHi: 'दृष्टिकोण एवं मूल्य' },
        ]}
      />
      <PageBanner
        eyebrow="Vision & Values"
        eyebrowHi="दृष्टिकोण एवं मूल्य"
        title="People, Justice, Progress"
        titleHi="व्यक्ति, न्याय, प्रगति"
        image={siteImages.visionValues}
      />
      <section className="mx-auto max-w-4xl px-6 py-12">
        <p className="text-body-lg text-ink-900 text-justify hyphens-auto">
          <Bi
            en="Our vision is simple to state and demanding to live up to: to be One Destination for Every Legal Solution — for people, for justice, and for the progress of every client we serve. Three commitments carry that vision into every matter."
            hi="हमारा दृष्टिकोण कहने में सरल एवं निभाने में कठिन है: प्रत्येक विधिक समाधान हेतु एक ही गंतव्य बनना — व्यक्तियों के लिए, न्याय के लिए, एवं प्रत्येक मुवक्किल की प्रगति के लिए। तीन प्रतिबद्धताएँ इस दृष्टिकोण को प्रत्येक मामले तक ले जाती हैं।"
          />
        </p>

        <div className="mt-12">
          <ValuesTriad
            items={[
              {
                icon: Bank,
                label: 'One Destination',
                labelHi: 'एक गंतव्य',
                body: 'Our promise: one legal partner, one point of contact and one consistent standard of work — for people and businesses alike.',
                bodyHi:
                  'हमारा संकल्प: एक विधिक साझेदार, संपर्क का एक केंद्र एवं कार्य का एक समान स्तर — व्यक्तियों एवं व्यवसायों, दोनों के लिए।',
              },
              {
                icon: Scales,
                label: 'Every Forum',
                labelHi: 'प्रत्येक मंच',
                body: 'Our reach: from the consumer commission and the trial court to the High Courts, the Apex Legal Forum and the arbitral tribunal.',
                bodyHi:
                  'हमारी पहुँच: उपभोक्ता आयोग एवं विचारण न्यायालय से लेकर उच्च न्यायालयों, सर्वोच्च विधिक मंच एवं माध्यस्थम् अधिकरण तक।',
              },
              {
                icon: ShieldCheck,
                label: 'Every Solution',
                labelHi: 'प्रत्येक समाधान',
                body: 'Our work: litigation, advisory, compliance and dispute resolution — carried through to actual implementation, not left at the order.',
                bodyHi:
                  'हमारा कार्य: वाद, परामर्श, अनुपालन एवं विवाद समाधान — आदेश पर नहीं रुकते, वास्तविक क्रियान्वयन तक ले जाते हैं।',
              },
            ]}
          />
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-700">
            <Bi en="The Legal Ladder" hi="द लीगल लैडर" />
          </p>
          <h2 className="mt-2 text-heading-lg font-bold text-ink-900">
            <Bi en="One method on every mandate" hi="प्रत्येक दायित्व में एक ही कार्यपद्धति" />
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
            {(
              [
                ['Understand', 'समझना'],
                ['Strategize', 'रणनीति बनाना'],
                ['Execute', 'क्रियान्वयन'],
                ['Follow Through', 'अंत तक अनुसरण'],
              ] as const
            ).map(([en, hi], i) => (
              <li key={en} className="bg-card px-5 py-6">
                <span className="font-heading text-heading-lg text-gold-500">0{i + 1}</span>
                <p className="mt-2 text-heading-sm font-semibold text-ink-900">
                  <Bi en={en} hi={hi} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand
        headline="Join Our Team"
        headlineHi="हमारी टीम से जुड़ें"
        ctaLabel="View Careers"
        ctaLabelHi="करियर देखें"
        ctaHref="/careers"
      />
    </>
  )
}
