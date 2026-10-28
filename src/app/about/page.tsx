import type { Metadata } from 'next'
import Link from 'next/link'
import { MagnifyingGlass, Compass, Gavel, Handshake } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { TextLink } from '@/components/common/text-link'
import { PageBanner } from '@/components/common/page-banner'
import { Bi } from '@/components/i18n/bi'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description: 'The story behind PraSanghi, The Legal Ladder.',
  path: '/about',
})

const APPROACH_STEPS = [
  {
    icon: MagnifyingGlass,
    title: 'Understand',
    titleHi: 'समझना',
    body: 'We start by understanding the matter in full — the forum, the stakes, and what a good outcome actually looks like for you.',
    bodyHi:
      'हम मामले को पूर्ण रूप से समझने से आरंभ करते हैं — फोरम, दांव पर लगा हित, तथा आपके लिए एक अच्छा परिणाम वास्तव में कैसा दिखता है।',
  },
  {
    icon: Compass,
    title: 'Strategize',
    titleHi: 'रणनीति बनाना',
    body: 'The advocate assigned to your matter builds the approach, rather than following a template used across every client.',
    bodyHi:
      'आपके मामले हेतु नियुक्त अधिवक्ता स्वयं दृष्टिकोण तैयार करता है, न कि सभी मुवक्किलों हेतु उपयोग किए जाने वाले किसी टेम्पलेट का अनुसरण करता है।',
  },
  {
    icon: Gavel,
    title: 'Execute',
    titleHi: 'क्रियान्वयन',
    body: 'Filings, hearings, and registrations are handled with the same rigor, whether the forum is a subordinate court or a regulator.',
    bodyHi:
      'दाखिले, सुनवाई एवं पंजीकरण समान कठोरता से संभाले जाते हैं, चाहे फोरम कोई अधीनस्थ न्यायालय हो अथवा कोई नियामक।',
  },
  {
    icon: Handshake,
    title: 'Follow Through',
    titleHi: 'अनुवर्तन',
    body: 'Your advocate stays reachable after a filing or hearing — matters are not considered closed until you know where things stand.',
    bodyHi:
      'दाखिले अथवा सुनवाई के पश्चात भी आपका अधिवक्ता संपर्क में रहता है — जब तक आपको स्थिति स्पष्ट न हो जाए, तब तक मामला बंद नहीं माना जाता।',
  },
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'About Us', labelHi: 'हमारे बारे में' }]} />
      <PageBanner
        eyebrow="Our Story"
        eyebrowHi="हमारी कहानी"
        title="About PraSanghi"
        titleHi="प्रासंघी के बारे में"
        image="https://picsum.photos/seed/prasanghi-about/1600/700"
      />
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex flex-col gap-4 text-body-md text-ink-900">
          <p>
            <span className="lang-en">
              PraSanghi is an Advocates LLP founded by Rajwardhan Gawde, built around a
              straightforward idea: a client should never have to choose between a firm that can
              appear before the Supreme Court and a firm that understands their day-to-day
              regulatory obligations.
            </span>
            <span className="lang-hi">
              प्रासंघी राजवर्धन गावड़े द्वारा स्थापित एक एडवोकेट्स एलएलपी है, जो एक सीधे-सरल विचार
              पर आधारित है: किसी मुवक्किल को कभी भी ऐसी फर्म के बीच चयन नहीं करना चाहिए जो उच्चतम
              न्यायालय में पैरवी कर सके अथवा ऐसी फर्म जो उसके दैनिक नियामक दायित्वों को समझे।
            </span>
          </p>
          <p>
            <span className="lang-en">
              The name carries that idea directly — <strong>&ldquo;The Legal Ladder&rdquo;</strong>{' '}
              is not a decorative tagline. It describes a practice built to move a
              client&rsquo;s matter forward, one deliberate step at a time, whether that matter
              sits in a subordinate court, a High Court, or in a compliance filing that needs to
              be right the first time.
            </span>
            <span className="lang-hi">
              यह नाम उसी विचार को सीधे व्यक्त करता है — <strong>&ldquo;द लीगल लैडर&rdquo;</strong>{' '}
              कोई सजावटी टैगलाइन नहीं है। यह एक ऐसी प्रैक्टिस का वर्णन करता है जो मुवक्किल के
              मामले को एक-एक सुनियोजित कदम आगे बढ़ाने हेतु बनाई गई है, चाहे वह मामला किसी अधीनस्थ
              न्यायालय में हो, किसी उच्च न्यायालय में हो, अथवा किसी ऐसे अनुपालन दाखिले में हो जिसे
              पहली बार में ही सही होना आवश्यक है।
            </span>
          </p>
          <p className="italic text-muted-foreground">
            <Bi
              en="A fuller founding narrative — including Rajwardhan Gawde's background and the firm's LLP structure — is pending founder-confirmed content."
              hi="राजवर्धन गावड़े की पृष्ठभूमि एवं फर्म की एलएलपी संरचना सहित एक विस्तृत संस्थापन-गाथा संस्थापक की पुष्टि की प्रतीक्षा में है।"
            />
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          <TextLink href="/about/vision-values">
            <Bi en="Vision & Values" hi="दृष्टिकोण एवं मूल्य" />
          </TextLink>
          <TextLink href="/about/leadership">
            <Bi en="Leadership" hi="नेतृत्व" />
          </TextLink>
          <TextLink href="/about/affiliated-organisations">
            <Bi en="Affiliated Organisations" hi="सहबद्ध संगठन" />
          </TextLink>
        </div>

        <p className="mt-10">
          <Link
            href="/practice-areas"
            className="text-body-sm font-semibold text-gold-700 hover:text-gold-600"
          >
            <Bi en="Explore Our Practice Areas" hi="हमारे प्रैक्टिस क्षेत्र देखें" />
          </Link>
        </p>
      </section>

      <section className="border-t border-border bg-off-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-label-eyebrow uppercase tracking-wide text-gold-700">
            <Bi en="How We Work" hi="हम कैसे कार्य करते हैं" />
          </p>
          <h2 className="mt-2 text-heading-lg font-bold text-ink-900">
            <Bi en="Our Approach" hi="हमारी कार्यशैली" />
          </h2>
          <p className="mt-4 max-w-2xl text-body-lg text-muted-foreground">
            <Bi
              en="The same four steps carry every matter at PraSanghi, whether it's a courtroom filing or a compliance registration."
              hi="प्रासंघी में प्रत्येक मामला इन्हीं चार चरणों से होकर गुजरता है, चाहे वह न्यायालयीन दाखिला हो अथवा अनुपालन पंजीकरण।"
            />
          </p>

          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH_STEPS.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-ink-900 text-body-sm font-semibold text-white">
                  {i + 1}
                </span>
                <step.icon weight="light" className="size-7 text-gold-700" aria-hidden="true" />
                <p className="text-heading-sm font-semibold text-ink-900">
                  <Bi en={step.title} hi={step.titleHi} />
                </p>
                <p className="text-body-sm text-muted-foreground">
                  <Bi en={step.body} hi={step.bodyHi} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
