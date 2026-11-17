import type { Metadata } from 'next'
import { BookOpen, Microphone, Newspaper } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { TextLink } from '@/components/common/text-link'
import { PageBanner } from '@/components/common/page-banner'
import { Bi } from '@/components/i18n/bi'
import { firmContact, pageMetadata } from '@/lib/site-config'
import { siteImages } from '@/lib/site-images'

export const metadata: Metadata = pageMetadata({
  title: 'Media',
  description:
    'Publications, The Samvaad Podcast and media enquiries — PraSanghi – The Legal Ladder LLP.',
  path: '/media',
})

export default function MediaPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Media Coverage', labelHi: 'मीडिया कवरेज' }]} />
      <PageBanner
        eyebrow="Media"
        eyebrowHi="मीडिया"
        title="Media & Publications"
        titleHi="मीडिया एवं प्रकाशन"
        image={siteImages.media}
      />
      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="max-w-3xl text-body-lg text-muted-foreground text-justify hyphens-auto">
          <Bi
            en="PraSanghi’s advocates write, speak and publish on the law as it affects businesses and citizens — from books on environmental and taxation law to conversations on The Samvaad Podcast and the firm’s Legal Insights."
            hi="प्रासंघी के अधिवक्ता व्यवसायों एवं नागरिकों को प्रभावित करने वाली विधि पर लेखन, वक्तव्य एवं प्रकाशन करते हैं — पर्यावरण एवं कराधान विधि पर पुस्तकों से लेकर द संवाद पॉडकास्ट पर संवाद एवं फर्म के विधिक विश्लेषण तक।"
          />
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <RevealOnScroll className="flex h-full flex-col border border-border bg-card p-8">
            <BookOpen weight="duotone" className="size-9 text-gold-700" aria-hidden="true" />
            <h2 className="mt-4 text-heading-md font-bold text-ink-900">
              <Bi en="Publications" hi="प्रकाशन" />
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-body-md text-ink-900">
              <li>
                <span className="font-semibold">
                  <Bi en="Environmental Law" hi="पर्यावरण विधि" />
                </span>
                <span className="block text-body-sm text-gold-700">
                  <Bi en="Published" hi="प्रकाशित" />
                </span>
              </li>
              <li>
                <span className="font-semibold">
                  <Bi en="Taxation Law" hi="कराधान विधि" />
                </span>
                <span className="block text-body-sm text-gold-700">
                  <Bi en="Under publication" hi="प्रकाशनाधीन" />
                </span>
              </li>
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delayMs={75} className="flex h-full flex-col border border-border bg-card p-8">
            <Microphone weight="duotone" className="size-9 text-gold-700" aria-hidden="true" />
            <h2 className="mt-4 text-heading-md font-bold text-ink-900">The Samvaad Podcast</h2>
            <p className="mt-4 text-body-md text-muted-foreground text-justify hyphens-auto">
              <Bi
                en="Samvaad — dialogue — is the firm’s affiliated podcast: plain-language conversations on rights, remedies and the legal questions people and businesses actually face."
                hi="संवाद फर्म से सहबद्ध पॉडकास्ट है: अधिकारों, उपचारों एवं उन विधिक प्रश्नों पर सरल भाषा में संवाद, जिनका सामना व्यक्ति एवं व्यवसाय वास्तव में करते हैं।"
              />
            </p>
          </RevealOnScroll>

          <RevealOnScroll delayMs={150} className="flex h-full flex-col border border-border bg-card p-8">
            <Newspaper weight="duotone" className="size-9 text-gold-700" aria-hidden="true" />
            <h2 className="mt-4 text-heading-md font-bold text-ink-900">
              <Bi en="Media Enquiries" hi="मीडिया संपर्क" />
            </h2>
            <p className="mt-4 text-body-md text-muted-foreground text-justify hyphens-auto">
              <Bi
                en="For interviews, expert comment or speaking engagements with our advocates, please write to us."
                hi="हमारे अधिवक्ताओं से साक्षात्कार, विशेषज्ञ टिप्पणी अथवा वक्तव्य हेतु कृपया हमें लिखें।"
              />
            </p>
            <a
              href={`mailto:${firmContact.email}?subject=Media%20enquiry`}
              className="mt-4 text-body-md font-semibold text-gold-700 underline-offset-4 hover:underline"
            >
              {firmContact.email}
            </a>
          </RevealOnScroll>
        </div>

        <div className="mt-12">
          <TextLink href="/insights">
            <Bi en="Explore Legal Insights" hi="विधिक विश्लेषण देखें" />
          </TextLink>
        </div>
      </section>
    </>
  )
}
