import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { InitiativeCard } from '@/components/cards/initiative-card'
import { Bi } from '@/components/i18n/bi'
import { initiatives } from '@/lib/initiatives-data'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Social Initiatives',
  description:
    'The community work of PraSanghi Social Welfare Society — self-defence training, education, health awareness, and environmental drives in Indore.',
  path: '/social-initiatives',
})

export default function SocialInitiativesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <Breadcrumb segments={[{ label: 'Social Initiatives', labelHi: 'सामाजिक पहल' }]} />
      <div className="mt-4">
        <p className="text-label-eyebrow uppercase tracking-wide text-gold-700">
          <Bi en="PraSanghi Social Welfare Society" hi="प्रासंघी सोशल वेलफेयर सोसायटी" />
        </p>
        <h1 className="mt-3 text-display-lg font-bold text-ink-900">
          <Bi en="Social Initiatives" hi="सामाजिक पहल" />
        </h1>
        <p className="mt-4 font-heading text-body-lg italic text-gold-700">
          <Bi en="From safety to empowerment" hi="सुरक्षा से सशक्तिकरण तक" />
        </p>
        <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">
          <Bi
            en="Beyond the courtroom, PraSanghi’s affiliated social welfare society works with the communities of Indore — teaching self-defence to girls and children, supporting education and health awareness, and caring for the city’s environment."
            hi="न्यायालय से परे, प्रासंघी से सहबद्ध सोशल वेलफेयर सोसायटी इंदौर के समुदायों के साथ कार्य करती है — बालिकाओं एवं बच्चों को आत्मरक्षा का प्रशिक्षण, शिक्षा एवं स्वास्थ्य जागरूकता में सहयोग, तथा शहर के पर्यावरण की देखभाल।"
          />
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {initiatives.map((item, i) => (
          <RevealOnScroll key={item.slug} delayMs={i * 75}>
            <InitiativeCard item={item} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
