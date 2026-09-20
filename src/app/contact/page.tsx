import type { Metadata } from 'next'
import Image from 'next/image'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { ContactForm } from '@/components/common/contact-form'
import { PageBanner } from '@/components/common/page-banner'
import { Bi } from '@/components/i18n/bi'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description: 'Schedule a consultation with PraSanghi regarding your legal matter.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Contact Us', labelHi: 'संपर्क करें' }]} />
      <PageBanner
        eyebrow="Contact Us"
        eyebrowHi="संपर्क करें"
        title="Schedule a Consultation"
        titleHi="परामर्श निर्धारित करें"
        image="https://picsum.photos/seed/prasanghi-contact/1600/700"
      />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          <Bi
            en="Share the details of your matter, and a member of our team will respond promptly."
            hi="अपने मामले का विवरण साझा करें, हमारी टीम का एक सदस्य शीघ्र आपसे संपर्क करेगा।"
          />
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                src="https://picsum.photos/seed/prasanghi-office/800/600"
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h2 className="mt-8 text-heading-md font-bold text-blue-900">
              <Bi en="Office" hi="कार्यालय" />
            </h2>
            <address className="mt-3 text-body-md not-italic text-muted-foreground">
              <Bi en="Address pending confirmation." hi="पता शीघ्र प्रकाशित किया जाएगा।" />
              <br />
              <Bi en="Office hours pending confirmation." hi="कार्यालय समय शीघ्र प्रकाशित किया जाएगा।" />
            </address>
            <h2 className="mt-8 text-heading-md font-bold text-blue-900">
              <Bi en="Email" hi="ईमेल" />
            </h2>
            <p className="mt-3 text-body-md text-muted-foreground">
              contact@prasanghi.example{' '}
              <span className="lang-en">(placeholder pending a confirmed domain)</span>
              <span className="lang-hi">(डोमेन पुष्टि होने तक अस्थायी)</span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
