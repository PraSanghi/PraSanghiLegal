import type { Metadata } from 'next'
import { Handshake, TrendUp, ShieldCheck } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { ValuesTriad } from '@/components/common/values-triad'
import { Button } from '@/components/ui/button'
import { PageBanner } from '@/components/common/page-banner'
import { QuickApplyForm } from '@/components/common/quick-apply-form'
import { FaqAccordion } from '@/components/common/faq-accordion'
import { Bi } from '@/components/i18n/bi'
import { careersFaqs } from '@/lib/careers-faq-data'
import { pageMetadata } from '@/lib/site-config'
import { siteImages } from '@/lib/site-images'

export const metadata: Metadata = pageMetadata({
  title: 'Careers',
  description: 'Careers and internship opportunities at PraSanghi.',
  path: '/careers',
})

export default function CareersPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Careers', labelHi: 'कैरियर' }]} />
      <PageBanner
        eyebrow="Careers"
        eyebrowHi="कैरियर"
        title="Join PraSanghi"
        titleHi="प्रासंघी से जुड़ें"
        image={siteImages.careers}
      />
      <section className="mx-auto max-w-4xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          <Bi
            en="We look for advocates and associates who want direct client responsibility from early in their career, not years of routed case files."
            hi="हम ऐसे अधिवक्ताओं एवं सहयोगियों की तलाश करते हैं जो अपने करियर की शुरुआत से ही प्रत्यक्ष मुवक्किल-जिम्मेदारी चाहते हैं, न कि वर्षों तक केवल आगे बढ़ाई गई फाइलें संभालना।"
          />
        </p>

        <div className="mt-12">
          <ValuesTriad
            items={[
              {
                icon: Handshake,
                label: 'Mentorship',
                labelHi: 'मार्गदर्शन',
                body: 'Direct, partner-led review of your work from day one.',
                bodyHi: 'पहले दिन से ही आपके कार्य की प्रत्यक्ष, भागीदार-नेतृत्व वाली समीक्षा।',
              },
              {
                icon: TrendUp,
                label: 'Growth',
                labelHi: 'विकास',
                body: 'Exposure across litigation, regulatory, and advisory work.',
                bodyHi: 'वाद-विवाद, नियामक तथा सलाहकार कार्य में व्यापक अनुभव।',
              },
              {
                icon: ShieldCheck,
                label: 'Ethics',
                labelHi: 'नैतिकता',
                body: 'A client-first practice, in the courtroom and at the compliance desk.',
                bodyHi: 'न्यायालय एवं अनुपालन डेस्क, दोनों में मुवक्किल-प्रथम प्रैक्टिस।',
              },
            ]}
          />
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-heading-md font-bold text-ink-900">
            <Bi en="Opportunities" hi="अवसर" />
          </h2>
          <p className="mt-3 text-body-md text-muted-foreground text-justify hyphens-auto">
            <Bi
              en="PraSanghi recruits throughout the year for Associates, Senior Associates and Interns across litigation, corporate, regulatory and dispute-resolution work — at Indore, Sardarpur and through our associate network. Apply below, or write to us directly."
              hi="प्रासंघी वर्ष भर वाद-विवाद, कॉर्पोरेट, नियामक एवं विवाद-समाधान कार्य हेतु सहयोगी अधिवक्ताओं, वरिष्ठ सहयोगी अधिवक्ताओं एवं प्रशिक्षुओं की नियुक्ति करता है — इंदौर, सरदारपुर एवं हमारे सहयोगी नेटवर्क में। नीचे आवेदन करें, अथवा हमें सीधे लिखें।"
            />
          </p>
          <Button asChild size="lg" variant="outline" className="mt-6">
            <a href="mailto:contact@prasanghilegal.com?subject=Careers%20application">
              <Bi en="Email Us Directly" hi="हमें सीधे ईमेल करें" />
            </a>
          </Button>
        </div>
      </section>

      <section className="border-t border-border bg-off-white px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <p className="text-label-eyebrow uppercase tracking-wide text-gold-700">
            <Bi en="Quick Apply" hi="त्वरित आवेदन" />
          </p>
          <h2 className="mt-2 text-heading-lg font-bold text-ink-900">
            <Bi en="Send a Speculative Application" hi="स्वैच्छिक आवेदन भेजें" />
          </h2>
          <p className="mt-4 text-body-md text-muted-foreground">
            <Bi
              en="No posting matches your background exactly? Submit this brief form regardless — it is reviewed directly by our team rather than filtered through an automated queue. We aim to respond within 7 working days."
              hi="कोई रिक्ति आपकी पृष्ठभूमि से पूर्णतः मेल नहीं खाती? फिर भी यह संक्षिप्त फॉर्म भरें — इसकी समीक्षा सीधे हमारी टीम द्वारा की जाती है, न कि किसी स्वचालित कतार से छानकर। हम 7 कार्य दिवसों के भीतर प्रतिक्रिया देने का प्रयास करते हैं।"
            />
          </p>
          <div className="mt-10">
            <QuickApplyForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-heading-lg font-bold text-ink-900">
          <Bi en="Frequently Asked Questions" hi="अक्सर पूछे जाने वाले प्रश्न" />
        </h2>
        <span className="mt-3 block h-0.5 w-12 bg-gold-500" aria-hidden="true" />
        <FaqAccordion items={careersFaqs} />
      </section>
    </>
  )
}
