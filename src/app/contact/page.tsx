import type { Metadata } from 'next'
import { EnvelopeSimple, MapPin, Phone, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { ContactForm } from '@/components/common/contact-form'
import { PageBanner } from '@/components/common/page-banner'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { Bi } from '@/components/i18n/bi'
import { contactWhatsappNumber, firmContact, pageMetadata } from '@/lib/site-config'
import { siteImages } from '@/lib/site-images'

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description: `Schedule a consultation with PraSanghi – The Legal Ladder LLP. Registered office: ${firmContact.address}.`,
  path: '/contact',
})

const citiesHi: Record<string, string> = {
  Delhi: 'दिल्ली',
  Mumbai: 'मुंबई',
  Lucknow: 'लखनऊ',
  Jabalpur: 'जबलपुर',
  Gwalior: 'ग्वालियर',
  Ahmedabad: 'अहमदाबाद',
  Jaipur: 'जयपुर',
  Bilaspur: 'बिलासपुर',
}

export default function ContactPage() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(firmContact.address)}`

  return (
    <>
      <Breadcrumb segments={[{ label: 'Contact Us', labelHi: 'संपर्क करें' }]} />
      <PageBanner
        eyebrow="Contact Us"
        eyebrowHi="संपर्क करें"
        title="Schedule a Consultation"
        titleHi="परामर्श निर्धारित करें"
        image={siteImages.contact}
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          <Bi
            en="One Destination for Every Legal Solution. Share the details of your matter and a member of our team will respond promptly — in person at Indore, through our associates in your city, or at your doorstep."
            hi="प्रत्येक विधिक समाधान हेतु एक ही गंतव्य। अपने मामले का विवरण साझा करें; हमारी टीम के सदस्य शीघ्र आपसे संपर्क करेंगे — इंदौर कार्यालय में, आपके नगर में हमारे सहयोगियों के माध्यम से, अथवा आपके द्वार पर।"
          />
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]">
          <RevealOnScroll>
            <ContactForm />
          </RevealOnScroll>

          <RevealOnScroll delayMs={100}>
            <aside className="bg-ink-900 p-8 text-dark-text-primary">
              <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-300">
                <Bi en="Registered Office · Headquarters" hi="पंजीकृत कार्यालय · मुख्यालय" />
              </p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-start gap-3 text-body-md hover:text-gold-300"
              >
                <MapPin weight="light" className="mt-1 size-5 shrink-0 text-gold-300" aria-hidden="true" />
                <address className="not-italic">
                  <span className="block font-semibold">{firmContact.legalName}</span>
                  <Bi en={firmContact.address} hi={firmContact.addressHi} />
                </address>
              </a>

              <p className="mt-8 text-label-eyebrow uppercase tracking-[0.2em] text-gold-300">
                <Bi en="Phone" hi="दूरभाष" />
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {firmContact.phones.map((p) => (
                  <li key={p.dial}>
                    <a href={`tel:${p.dial}`} className="flex items-center gap-3 text-body-md hover:text-gold-300">
                      <Phone weight="light" className="size-5 shrink-0 text-gold-300" aria-hidden="true" />
                      {p.display}
                    </a>
                  </li>
                ))}
                {contactWhatsappNumber ? (
                  <li>
                    <a
                      href={`https://wa.me/${contactWhatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-body-md hover:text-gold-300"
                    >
                      <WhatsappLogo weight="light" className="size-5 shrink-0 text-gold-300" aria-hidden="true" />
                      <Bi en="WhatsApp" hi="व्हाट्सएप" />
                    </a>
                  </li>
                ) : null}
              </ul>

              <p className="mt-8 text-label-eyebrow uppercase tracking-[0.2em] text-gold-300">
                <Bi en="Email" hi="ईमेल" />
              </p>
              <ul className="mt-3 flex flex-col gap-3">
                {firmContact.emails.map((e) => (
                  <li key={e.address}>
                    <a
                      href={`mailto:${e.address}`}
                      className="flex items-start gap-3 text-body-md hover:text-gold-300"
                    >
                      <EnvelopeSimple weight="light" className="mt-1 size-5 shrink-0 text-gold-300" aria-hidden="true" />
                      <span>
                        <span className="block break-all">{e.address}</span>
                        <span className="block text-body-sm text-dark-text-muted">
                          <Bi en={e.purpose} hi={e.purposeHi} />
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-dark-border pt-6">
                <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-300">
                  <Bi en="Associate Presence" hi="सहयोगी उपस्थिति" />
                </p>
                <p className="mt-3 text-body-sm text-dark-text-muted">
                  <span className="lang-en">{firmContact.associateCities.join(' • ')}</span>
                  <span className="lang-hi">
                    {firmContact.associateCities.map((c) => citiesHi[c] ?? c).join(' • ')}
                  </span>
                </p>
                <p className="mt-2 text-body-sm text-dark-text-muted">
                  <Bi
                    en="Branch: Sardarpur, District Dhar (M.P.)"
                    hi="शाखा: सरदारपुर, जिला धार (म.प्र.)"
                  />
                </p>
              </div>
            </aside>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
