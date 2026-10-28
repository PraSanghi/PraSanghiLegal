import type { Metadata } from 'next'
import { User, Buildings, Bank } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { PracticeAreaCard } from '@/components/cards/practice-area-card'
import { CtaBand } from '@/components/common/cta-band'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { PageBanner } from '@/components/common/page-banner'
import { ValuesTriad } from '@/components/common/values-triad'
import { Bi } from '@/components/i18n/bi'
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Practice Areas',
  description:
    'Litigation, Supreme Court and High Court practice, arbitration, regulatory and advisory work, and contract drafting — one firm, equal depth across every practice.',
  path: '/practice-areas',
})

export default function PracticeAreasPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Practice Areas', labelHi: 'प्रैक्टिस क्षेत्र' }]} />
      <PageBanner
        eyebrow="What We Do"
        eyebrowHi="हम क्या करते हैं"
        title="Practice Areas"
        titleHi="प्रैक्टिस क्षेत्र"
        image="https://picsum.photos/seed/prasanghi-practice-banner/1600/700"
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          <Bi
            en="Litigation and regulatory work are treated with the same depth and the same design at PraSanghi — one full-service firm, not two."
            hi="प्रासंघी में वाद-विवाद एवं नियामक कार्य को समान गहनता एवं समान महत्व दिया जाता है — एक पूर्ण-सेवा फर्म के रूप में, दो अलग फर्मों के रूप में नहीं।"
          />
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreaSlugs.map((slug, i) => {
            const area = practiceAreaDetails[slug]
            return (
              <RevealOnScroll key={slug} delayMs={i * 75}>
                <PracticeAreaCard
                  title={area.title}
                  titleHi={area.titleHi}
                  description={area.summary}
                  descriptionHi={area.summaryHi}
                  href={`/practice-areas/${slug}`}
                  image={area.image}
                />
              </RevealOnScroll>
            )
          })}
        </div>
      </section>

      <section className="border-t border-border bg-off-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-label-eyebrow uppercase tracking-wide text-gold-700">
            <Bi en="Who We Help" hi="हम किनकी सहायता करते हैं" />
          </p>
          <h2 className="mt-2 text-heading-lg font-bold text-ink-900">
            <Bi en="Individuals, Businesses, and Institutions" hi="व्यक्ति, व्यवसाय एवं संस्थान" />
          </h2>
          <div className="mt-10">
            <ValuesTriad
              items={[
                {
                  icon: User,
                  label: 'Individuals',
                  labelHi: 'व्यक्ति',
                  body: 'Personal disputes and matters that need direct, considered representation — not a case number in a queue.',
                  bodyHi:
                    'व्यक्तिगत विवाद एवं ऐसे मामले जिन्हें प्रत्यक्ष, सुविचारित प्रतिनिधित्व की आवश्यकता होती है — न कि किसी कतार में एक केस नंबर बनकर रह जाना।',
                },
                {
                  icon: Buildings,
                  label: 'SMEs & Growing Businesses',
                  labelHi: 'एसएमई एवं बढ़ते व्यवसाय',
                  body: 'The certifications, registrations, and contracts a business needs as it scales, handled with the same rigor as litigation.',
                  bodyHi:
                    'किसी व्यवसाय के विस्तार के साथ आवश्यक प्रमाणन, पंजीकरण एवं अनुबंध, वाद-विवाद जितनी ही कठोरता से संभाले जाते हैं।',
                },
                {
                  icon: Bank,
                  label: 'Institutions & Enterprises',
                  labelHi: 'संस्थान एवं उद्यम',
                  body: 'Ongoing regulatory advisory and dispute resolution for organisations with recurring compliance obligations.',
                  bodyHi: 'आवर्ती अनुपालन दायित्वों वाले संगठनों हेतु सतत नियामक परामर्श एवं विवाद समाधान।',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand
        headline="Not sure which practice area fits your matter?"
        headlineHi="अपने मामले हेतु उपयुक्त प्रैक्टिस क्षेत्र तय नहीं कर पा रहे?"
        ctaLabel="Schedule a Consultation"
        ctaLabelHi="परामर्श निर्धारित करें"
        ctaHref="/contact"
      />
    </>
  )
}
