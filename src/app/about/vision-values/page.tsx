import type { Metadata } from 'next'
import { Bank, Scales, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { ValuesTriad } from '@/components/common/values-triad'
import { CtaBand } from '@/components/common/cta-band'
import { PageBanner } from '@/components/common/page-banner'
import { Bi } from '@/components/i18n/bi'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Vision & Values',
  description: 'People, Justice, Progress — the values behind PraSanghi.',
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
        image="https://picsum.photos/seed/prasanghi-vision-values/1600/700"
      />
      <section className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-body-lg text-muted-foreground">
          <Bi
            en="Three commitments that shape every matter PraSanghi takes on."
            hi="तीन प्रतिबद्धताएँ जो प्रासंघी द्वारा लिए जाने वाले प्रत्येक मामले को आकार देती हैं।"
          />
        </p>

        <div className="mt-12">
          <ValuesTriad
            items={[
              {
                icon: Bank,
                label: 'People',
                labelHi: 'व्यक्ति',
                body: 'Every matter starts with the person, not the file — clients speak directly with the advocate handling their case.',
                bodyHi:
                  'प्रत्येक मामला व्यक्ति से आरंभ होता है, फाइल से नहीं — मुवक्किल सीधे उस अधिवक्ता से बात करते हैं जो उनका मामला संभाल रहा है।',
              },
              {
                icon: Scales,
                label: 'Justice',
                labelHi: 'न्याय',
                body: 'Precise, considered advocacy across every forum, from subordinate courts to the Supreme Court of India.',
                bodyHi:
                  'अधीनस्थ न्यायालयों से लेकर भारत के उच्चतम न्यायालय तक, प्रत्येक फोरम में सटीक एवं सुविचारित पैरवी।',
              },
              {
                icon: ShieldCheck,
                label: 'Progress',
                labelHi: 'प्रगति',
                body: 'Compliance and counsel that move a client meaningfully forward, not just paperwork that satisfies a checklist.',
                bodyHi:
                  'ऐसा अनुपालन एवं परामर्श जो मुवक्किल को सार्थक रूप से आगे बढ़ाए, न कि केवल चेकलिस्ट पूरी करने वाला कागज़ी कार्य।',
              },
            ]}
          />
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
