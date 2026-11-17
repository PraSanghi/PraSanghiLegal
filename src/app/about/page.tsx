import type { Metadata } from 'next'
import { MagnifyingGlass, Compass, Gavel, Handshake } from '@phosphor-icons/react/dist/ssr'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { TextLink } from '@/components/common/text-link'
import { PageBanner } from '@/components/common/page-banner'
import { Bi } from '@/components/i18n/bi'
import { pageMetadata } from '@/lib/site-config'
import { siteImages } from '@/lib/site-images'

export const metadata: Metadata = pageMetadata({
  title: 'About Us',
  description:
    'PraSanghi – The Legal Ladder LLP: a full-service, pan-India Advocates LLP headquartered at Indore. One Destination for Every Legal Solution.',
  path: '/about',
})

// Source: PraSanghi Firm Profile (2026) §01, §03, §04, §07, §09.
const APPROACH_STEPS = [
  {
    icon: MagnifyingGlass,
    title: 'Understand',
    titleHi: 'समझना',
    body: 'We begin by learning the client’s business model, operations and commercial priorities.',
    bodyHi: 'हम मुवक्किल के व्यावसायिक प्रारूप, संचालन एवं वाणिज्यिक प्राथमिकताओं को समझने से आरंभ करते हैं।',
  },
  {
    icon: Compass,
    title: 'Strategize',
    titleHi: 'रणनीति बनाना',
    body: 'We set a clear position on each matter, including whether to settle, mediate, arbitrate or litigate.',
    bodyHi: 'हम प्रत्येक मामले पर स्पष्ट स्थिति निर्धारित करते हैं — समझौता, मध्यस्थता, माध्यस्थम् अथवा वाद।',
  },
  {
    icon: Gavel,
    title: 'Execute',
    titleHi: 'क्रियान्वयन',
    body: 'Drafting, filings and appearances are carried out by a named advocate who stays with the matter from start to finish.',
    bodyHi: 'प्रारूपण, दाखिले एवं पैरवी एक नामित अधिवक्ता द्वारा की जाती है जो प्रारंभ से अंत तक मामले के साथ रहता है।',
  },
  {
    icon: Handshake,
    title: 'Follow Through',
    titleHi: 'अंत तक अनुसरण',
    body: 'We see each matter to its conclusion, from order or award to actual implementation, with regular reporting to the client’s management.',
    bodyHi: 'हम प्रत्येक मामले को उसके निष्कर्ष तक — आदेश अथवा अधिनिर्णय से उसके वास्तविक क्रियान्वयन तक — मुवक्किल के प्रबंधन को नियमित रिपोर्टिंग के साथ ले जाते हैं।',
  },
]

const PILLARS = [
  { eyebrow: 'Our Promise', eyebrowHi: 'हमारा संकल्प', title: 'One Destination', titleHi: 'एक गंतव्य' },
  { eyebrow: 'Our Reach', eyebrowHi: 'हमारी पहुँच', title: 'Every Forum', titleHi: 'प्रत्येक मंच' },
  { eyebrow: 'Our Work', eyebrowHi: 'हमारा कार्य', title: 'Every Solution', titleHi: 'प्रत्येक समाधान' },
]

const FORUMS: [string, string][] = [
  ['Supreme Court of India', 'भारत का उच्चतम न्यायालय'],
  ['High Courts', 'उच्च न्यायालय'],
  ['District and Sessions Courts', 'जिला एवं सत्र न्यायालय'],
  ['District and State Consumer Commissions', 'जिला एवं राज्य उपभोक्ता आयोग'],
  ['National Consumer Disputes Redressal Commission', 'राष्ट्रीय उपभोक्ता विवाद प्रतितोष आयोग'],
  ['Labour Courts', 'श्रम न्यायालय'],
  ['MSME Facilitation Councils', 'एमएसएमई सुविधा परिषद'],
  ['Arbitral tribunals', 'माध्यस्थम् अधिकरण'],
  ['Debts Recovery Tribunals', 'ऋण वसूली अधिकरण'],
  ['RERA and other statutory authorities', 'रेरा एवं अन्य सांविधिक प्राधिकरण'],
]

const CITIES: [string, string][] = [
  ['Indore · Headquarters', 'इंदौर · मुख्यालय'],
  ['Delhi', 'दिल्ली'],
  ['Mumbai', 'मुंबई'],
  ['Lucknow', 'लखनऊ'],
  ['Jabalpur', 'जबलपुर'],
  ['Gwalior', 'ग्वालियर'],
  ['Ahmedabad', 'अहमदाबाद'],
  ['Jaipur', 'जयपुर'],
  ['Bilaspur', 'बिलासपुर'],
  ['Sardarpur (Dhar) · Branch', 'सरदारपुर (धार) · शाखा'],
  ['& other judicial hubs', 'एवं अन्य न्यायिक केंद्र'],
]

const SECTORS: [string, string][] = [
  ['Manufacturing & Engineering', 'विनिर्माण एवं अभियांत्रिकी'],
  ['Banking & Financial Institutions', 'बैंकिंग एवं वित्तीय संस्थान'],
  ['Education & Training Institutions', 'शिक्षा एवं प्रशिक्षण संस्थान'],
  ['Real Estate & Infrastructure', 'रियल एस्टेट एवं अधोसंरचना'],
  ['Corporate & Commercial Enterprises', 'कॉर्पोरेट एवं वाणिज्यिक उद्यम'],
  ['Technology, IT & Data', 'प्रौद्योगिकी, आईटी एवं डेटा'],
  ['Media & Entertainment', 'मीडिया एवं मनोरंजन'],
  ['Government & Public Sector', 'शासन एवं सार्वजनिक क्षेत्र'],
  ['Retail, Consumer & Services', 'खुदरा, उपभोक्ता एवं सेवाएँ'],
  ['Environment & Natural Resources', 'पर्यावरण एवं प्राकृतिक संसाधन'],
  ['MSME, Start-ups & Entrepreneurs', 'एमएसएमई, स्टार्ट-अप एवं उद्यमी'],
  ['Individuals, Families & Professionals', 'व्यक्ति, परिवार एवं पेशेवर'],
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
        image={siteImages.about}
      />

      <section className="mx-auto max-w-4xl px-6 py-12">
        <RevealOnScroll className="flex flex-col gap-5 text-body-lg text-ink-900 text-justify hyphens-auto">
          <p>
            <Bi
              en="PraSanghi – The Legal Ladder LLP is a full-service, pan-India Advocates LLP that brings the courtroom and the compliance desk under one roof. Founded by Adv. Rajwardhan Gawde, the firm combines litigation before the Apex Legal Forum, the High Courts, trial courts, consumer commissions and tribunals with corporate governance, commercial contracts, regulatory compliance and institutional dispute resolution."
              hi="प्रासंघी – द लीगल लैडर एलएलपी एक पूर्ण-सेवा, अखिल भारतीय अधिवक्ता एलएलपी है, जो न्यायालय एवं अनुपालन — दोनों को एक ही छत के नीचे लाता है। अधिवक्ता राजवर्धन गावड़े द्वारा स्थापित यह फर्म सर्वोच्च विधिक मंच, उच्च न्यायालयों, विचारण न्यायालयों, उपभोक्ता आयोगों एवं अधिकरणों के समक्ष पैरवी को कॉर्पोरेट गवर्नेंस, वाणिज्यिक संविदाओं, नियामक अनुपालन एवं संस्थागत विवाद समाधान के साथ जोड़ती है।"
            />
          </p>
          <p>
            <span className="lang-en">
              The firm is built on a single promise — <strong>One Destination for Every Legal Solution</strong> — and follows one working method on every mandate:{' '}
              <strong>Understand, Strategize, Execute and Follow Through</strong>. The name{' '}
              <strong>&ldquo;The Legal Ladder&rdquo;</strong> reflects that method: each matter is
              carried step by step, from first advice through to final resolution and its
              implementation.
            </span>
            <span className="lang-hi">
              फर्म एक ही संकल्प पर आधारित है — <strong>प्रत्येक विधिक समाधान हेतु एक ही गंतव्य</strong> — तथा प्रत्येक दायित्व में एक ही कार्यपद्धति अपनाती है:{' '}
              <strong>समझना, रणनीति बनाना, क्रियान्वयन एवं अंत तक अनुसरण</strong>। नाम{' '}
              <strong>&ldquo;द लीगल लैडर&rdquo;</strong> इसी पद्धति को दर्शाता है: प्रत्येक मामला
              प्रथम परामर्श से अंतिम समाधान एवं उसके क्रियान्वयन तक चरणबद्ध रूप से आगे बढ़ाया जाता है।
            </span>
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 grid grid-cols-1 border border-gold-500/40 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`px-6 py-8 text-center ${i > 0 ? 'border-t border-gold-500/40 sm:border-t-0 sm:border-l' : ''}`}
            >
              <p className="text-label-eyebrow uppercase tracking-[0.25em] text-gold-700">
                <Bi en={p.eyebrow} hi={p.eyebrowHi} />
              </p>
              <p className="mt-2 font-heading text-heading-lg text-ink-900">
                <Bi en={p.title} hi={p.titleHi} />
              </p>
            </div>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className="mx-auto mt-10 max-w-2xl border-y border-gold-500/50 py-6 text-center font-heading text-heading-sm text-ink-900">
          <Bi
            en="For corporate houses, this means one legal partner, one point of contact and one consistent standard of work across every city and every forum in India."
            hi="कॉर्पोरेट संस्थानों के लिए इसका अर्थ है — एक विधिक साझेदार, संपर्क का एक केंद्र, तथा भारत के प्रत्येक नगर एवं प्रत्येक मंच पर कार्य का एक समान स्तर।"
          />
        </RevealOnScroll>

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
          <TextLink href="/practice-areas">
            <Bi en="Practice Areas" hi="प्रैक्टिस क्षेत्र" />
          </TextLink>
        </div>
      </section>

      <section className="bg-ink-900 px-6 py-16 text-dark-text-primary">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-300">
              <Bi en="Reach" hi="पहुँच" />
            </p>
            <h2 className="mt-2 text-heading-lg font-bold">
              <Bi en="Pan-India Presence" hi="अखिल भारतीय उपस्थिति" />
            </h2>
            <p className="mt-4 text-body-md text-dark-text-muted text-justify hyphens-auto">
              <Bi
                en="Clients instruct one desk at Indore. Filings, appearances and local proceedings are then handled by the firm’s associates in the city where the matter arises, under a single coordinated strategy and with consolidated reporting to the client’s management."
                hi="मुवक्किल इंदौर स्थित एक ही केंद्र को निर्देश देते हैं। तत्पश्चात दाखिले, पैरवी एवं स्थानीय कार्यवाहियाँ उस नगर में फर्म के सहयोगियों द्वारा संचालित की जाती हैं जहाँ मामला उत्पन्न होता है — एक समन्वित रणनीति एवं मुवक्किल के प्रबंधन को समेकित रिपोर्टिंग के साथ।"
              />
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {CITIES.map(([en, hi], i) => (
                <li
                  key={en}
                  className={`rounded-full border px-4 py-1.5 text-body-sm ${i === 0 ? 'border-gold-300 text-gold-300' : 'border-dark-border'}`}
                >
                  <Bi en={en} hi={hi} />
                </li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll delayMs={100}>
            <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-300">
              <Bi en="Forums" hi="मंच" />
            </p>
            <h2 className="mt-2 text-heading-lg font-bold">
              <Bi en="The firm appears before" hi="फर्म जिनके समक्ष उपस्थित होती है" />
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {FORUMS.map(([en, hi]) => (
                <li key={en} className="flex items-start gap-3 border-b border-dark-border py-3 text-body-md">
                  <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-300" aria-hidden="true" />
                  <Bi en={en} hi={hi} />
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-t border-border bg-off-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-label-eyebrow uppercase tracking-wide text-gold-700">
            <Bi en="Method" hi="कार्यपद्धति" />
          </p>
          <h2 className="mt-2 text-heading-lg font-bold text-ink-900">
            <Bi en="Our Approach" hi="हमारी कार्यशैली" />
          </h2>
          <p className="mt-4 max-w-2xl text-body-lg text-muted-foreground">
            <Bi
              en="One working method on every mandate — whether it is a courtroom filing or a compliance registration."
              hi="प्रत्येक दायित्व में एक ही कार्यपद्धति — चाहे वह न्यायालयीन दाखिला हो अथवा अनुपालन पंजीकरण।"
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
                <p className="text-body-sm text-muted-foreground text-justify hyphens-auto">
                  <Bi en={step.body} hi={step.bodyHi} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <RevealOnScroll>
          <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-700">
            <Bi en="Sector Experience" hi="क्षेत्रीय अनुभव" />
          </p>
          <h2 className="mt-2 text-heading-lg font-bold text-ink-900">
            <Bi en="Sectors We Serve" hi="जिन क्षेत्रों को हम सेवाएँ देते हैं" />
          </h2>
          <p className="mt-4 max-w-3xl text-body-lg text-muted-foreground text-justify hyphens-auto">
            <Bi
              en="The firm acts for businesses, institutions and individuals across a wide range of sectors, bringing the same standard of drafting, compliance and advocacy to each: documents that anticipate disputes, advice that is commercially grounded, and representation that follows the matter through to implementation."
              hi="फर्म विविध क्षेत्रों के व्यवसायों, संस्थाओं एवं व्यक्तियों के लिए कार्य करती है, तथा प्रत्येक को प्रारूपण, अनुपालन एवं पैरवी का समान स्तर प्रदान करती है: ऐसे दस्तावेज़ जो विवादों का पूर्वानुमान करें, ऐसा परामर्श जो वाणिज्यिक यथार्थ पर आधारित हो, तथा ऐसा प्रतिनिधित्व जो मामले को क्रियान्वयन तक ले जाए।"
            />
          </p>
        </RevealOnScroll>
        <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map(([en, hi]) => (
            <li key={en} className="bg-card px-5 py-4 text-body-md font-medium text-ink-900">
              <Bi en={en} hi={hi} />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-off-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-700">
              <Bi en="Credentials" hi="उपलब्धियाँ" />
            </p>
            <h2 className="mt-2 text-heading-lg font-bold text-ink-900">
              <Bi en="Publications" hi="प्रकाशन" />
            </h2>
          </RevealOnScroll>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-5 border border-border bg-card p-6">
              <span className="h-14 w-11 shrink-0 bg-gradient-to-br from-gold-300 to-gold-700" aria-hidden="true" />
              <div>
                <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-700">
                  <Bi en="Published" hi="प्रकाशित" />
                </p>
                <p className="mt-1 font-heading text-heading-md text-ink-900">
                  <Bi en="Environmental Law" hi="पर्यावरण विधि" />
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 border border-border bg-card p-6">
              <span
                className="h-14 w-11 shrink-0 border border-gold-300 bg-[repeating-linear-gradient(135deg,var(--gold-100)_0_6px,transparent_6px_12px)]"
                aria-hidden="true"
              />
              <div>
                <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-700">
                  <Bi en="Under Publication" hi="प्रकाशनाधीन" />
                </p>
                <p className="mt-1 font-heading text-heading-md text-ink-900">
                  <Bi en="Taxation Law" hi="कराधान विधि" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
