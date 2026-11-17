import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { Bi } from '@/components/i18n/bi'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Use',
  description: 'Terms governing use of the PraSanghi website.',
  path: '/terms-of-use',
})

export default function TermsOfUsePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb segments={[{ label: 'Terms of Use', labelHi: 'उपयोग की शर्तें' }]} />
      <h1 className="mt-4 text-display-lg font-bold text-ink-900">
        <Bi en="Terms of Use" hi="उपयोग की शर्तें" />
      </h1>
      <p className="mt-3 text-body-sm text-muted-foreground">
        <Bi en="Last updated: 17 November 2026" hi="अंतिम अद्यतन: 17 नवंबर 2026" />
      </p>

      <div className="mt-10 flex flex-col gap-8 text-body-md text-muted-foreground">
        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="1. Acceptance of Terms" hi="1. शर्तों की स्वीकृति" />
          </h2>
          <p className="mt-3">
            <Bi
              en="By accessing this website, you agree to be bound by these Terms of Use and by the Disclaimer you acknowledged on entry. If you do not agree with any part of these terms, please do not use this website."
              hi="इस वेबसाइट तक पहुँचने पर, आप इन उपयोग की शर्तों तथा प्रवेश के समय स्वीकृत अस्वीकरण से बाध्य होने हेतु सहमत होते हैं। यदि आप इन शर्तों के किसी भी भाग से सहमत नहीं हैं, तो कृपया इस वेबसाइट का उपयोग न करें।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="2. No Advocate-Client Relationship" hi="2. अधिवक्ता-मुवक्किल संबंध का अभाव" />
          </h2>
          <p className="mt-3">
            <Bi
              en="Access to, or use of, this website does not create an advocate-client relationship between you and PraSanghi or any of its members. The Bar Council of India does not permit advocates to solicit work or advertise; this website exists solely to provide information about PraSanghi at the request of visitors seeking it of their own accord."
              hi="इस वेबसाइट तक पहुँच अथवा इसका उपयोग, आपके एवं प्रासंघी अथवा उसके किसी सदस्य के बीच कोई अधिवक्ता-मुवक्किल संबंध स्थापित नहीं करता। भारतीय विधिज्ञ परिषद अधिवक्ताओं को कार्य हेतु आग्रह अथवा विज्ञापन करने की अनुमति नहीं देती; यह वेबसाइट केवल उन आगंतुकों के अनुरोध पर प्रासंघी के बारे में जानकारी प्रदान करने हेतु विद्यमान है जो स्वेच्छा से इसे खोज रहे हैं।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="3. No Legal Advice" hi="3. विधिक सलाह का अभाव" />
          </h2>
          <p className="mt-3">
            <Bi
              en="The contents of this website — including practice area descriptions, Insights articles, and any other material — are for general informational purposes only and do not constitute legal advice. You should not act, or refrain from acting, on the basis of any information on this website without first seeking independent legal advice specific to your situation."
              hi="इस वेबसाइट की विषय-वस्तु — जिसमें प्रैक्टिस क्षेत्र विवरण, विधिक विश्लेषण लेख, तथा अन्य कोई भी सामग्री शामिल है — केवल सामान्य सूचनात्मक प्रयोजन हेतु है तथा यह विधिक सलाह नहीं है। आपको अपनी स्थिति के अनुरूप स्वतंत्र विधिक सलाह प्राप्त किए बिना इस वेबसाइट पर दी गई किसी भी जानकारी के आधार पर कोई कार्य नहीं करना चाहिए, अथवा किसी कार्य से विरत नहीं रहना चाहिए।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="4. Intellectual Property" hi="4. बौद्धिक संपदा" />
          </h2>
          <p className="mt-3">
            <Bi
              en="All content on this website, including text, graphics, logos, and the PraSanghi name and mark, is the property of PraSanghi or its licensors and is protected by applicable intellectual property laws. You may view and print pages for your own personal, non-commercial use, but may not reproduce, republish, or distribute any content without prior written permission."
              hi="इस वेबसाइट की समस्त सामग्री, जिसमें पाठ्य सामग्री, ग्राफ़िक्स, लोगो, तथा प्रासंघी का नाम एवं चिह्न शामिल हैं, प्रासंघी अथवा उसके लाइसेंसदाताओं की संपत्ति है तथा लागू बौद्धिक संपदा कानूनों द्वारा संरक्षित है। आप अपने व्यक्तिगत, गैर-वाणिज्यिक उपयोग हेतु पृष्ठों को देख एवं मुद्रित कर सकते हैं, किंतु पूर्व लिखित अनुमति के बिना किसी भी सामग्री का पुनरुत्पादन, पुनःप्रकाशन, अथवा वितरण नहीं कर सकते।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="5. Third-Party Links" hi="5. तृतीय-पक्ष लिंक" />
          </h2>
          <p className="mt-3">
            <Bi
              en="This website may contain links to third-party websites for your convenience. PraSanghi does not control and is not responsible for the content or privacy practices of any linked site."
              hi="इस वेबसाइट में आपकी सुविधा हेतु तृतीय-पक्ष वेबसाइटों के लिंक हो सकते हैं। प्रासंघी का किसी भी लिंक की गई साइट की सामग्री अथवा गोपनीयता प्रथाओं पर कोई नियंत्रण नहीं है तथा वह इसके लिए उत्तरदायी नहीं है।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="6. Limitation of Liability" hi="6. दायित्व की सीमा" />
          </h2>
          <p className="mt-3">
            <span className="lang-en">
              This website and its content are provided &ldquo;as is&rdquo; without warranties of
              any kind. PraSanghi shall not be liable for any loss or damage arising from your
              use of, or inability to use, this website, or from any reliance placed on its
              content.
            </span>
            <span className="lang-hi">
              यह वेबसाइट तथा इसकी सामग्री बिना किसी प्रकार की वारंटी के &ldquo;जैसी है वैसी&rdquo;
              प्रदान की जाती है। प्रासंघी इस वेबसाइट के आपके उपयोग, उपयोग करने में असमर्थता, अथवा
              इसकी सामग्री पर किए गए किसी भी भरोसे से उत्पन्न किसी भी हानि अथवा क्षति के लिए
              उत्तरदायी नहीं होगा।
            </span>
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="7. Governing Law" hi="7. शासी विधि" />
          </h2>
          <p className="mt-3">
            <Bi
              en="These Terms of Use are governed by the laws of India. Subject to the Dispute Resolution clause below, the courts at Indore, Madhya Pradesh alone shall have jurisdiction in respect of any matter arising out of or relating to them."
              hi="ये उपयोग की शर्तें भारत की विधियों द्वारा शासित हैं। नीचे दिए गए विवाद समाधान खंड के अधीन रहते हुए, इनसे उत्पन्न अथवा इनसे संबंधित किसी भी विषय पर केवल इंदौर, मध्य प्रदेश स्थित न्यायालयों को ही क्षेत्राधिकार होगा।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="8. Dispute Resolution (Hybrid Med-Arb)" hi="8. विवाद समाधान (हाइब्रिड मेड-आर्ब)" />
          </h2>
          <ol className="mt-3 flex list-[lower-roman] flex-col gap-3 pl-6 text-justify hyphens-auto">
            <li>
              <Bi
                en="Any dispute, controversy or claim arising out of or relating to these Terms of Use or the use of this website, including their formation, breach, termination or invalidity, shall be resolved exclusively through the Hybrid Med-Arb process administered by the Adjudix Dispute Resolution Institute (www.adjudixADR.com), in accordance with the latest edition of the Adjudix Code of ADR Procedure."
                hi="इन उपयोग की शर्तों अथवा इस वेबसाइट के उपयोग से उत्पन्न अथवा उनसे संबंधित कोई भी विवाद, मतभेद अथवा दावा, जिसमें उनका निर्माण, उल्लंघन, समाप्ति अथवा अविधिमान्यता सम्मिलित है, एडजुडिक्स डिस्प्यूट रिज़ॉल्यूशन इंस्टिट्यूट (www.adjudixADR.com) द्वारा प्रशासित हाइब्रिड मेड-आर्ब प्रक्रिया के माध्यम से, एडजुडिक्स कोड ऑफ़ एडीआर प्रोसीजर के नवीनतम संस्करण के अनुसार, अनन्य रूप से निपटाया जाएगा।"
              />
            </li>
            <li>
              <Bi
                en="Bar to court jurisdiction: recourse to courts on the merits of such a dispute is excluded. A party may apply under Section 8 of the Arbitration and Conciliation Act, 1996, and the court shall refer the parties to arbitration under this clause."
                hi="न्यायालय क्षेत्राधिकार का वर्जन: ऐसे विवाद के गुणावगुण पर न्यायालय का आश्रय अपवर्जित है। कोई भी पक्षकार माध्यस्थम् एवं सुलह अधिनियम, 1996 की धारा 8 के अंतर्गत आवेदन कर सकता है, तथा न्यायालय पक्षकारों को इस खंड के अंतर्गत माध्यस्थम् हेतु निर्दिष्ट करेगा।"
              />
            </li>
            <li>
              <Bi
                en="Same neutral: the neutral appointed as Mediator shall, if the mediation does not result in a settlement, continue as the sole Arbitrator and render a binding award under Chapter XI of the Code."
                hi="एक ही तटस्थ: मध्यस्थ (मीडिएटर) के रूप में नियुक्त तटस्थ व्यक्ति, मध्यस्थता से समझौता न होने की स्थिति में, एकमात्र मध्यस्थ (आर्बिट्रेटर) के रूप में कार्य करते हुए संहिता के अध्याय XI के अंतर्गत बाध्यकारी अधिनिर्णय पारित करेगा।"
              />
            </li>
            <li>
              <Bi
                en="The seat of the procedure shall be Indore, Madhya Pradesh; the language shall be English; and the venue may be online or offline by mutual agreement or, failing agreement, at the neutral’s discretion."
                hi="प्रक्रिया का स्थान (सीट) इंदौर, मध्य प्रदेश होगा; भाषा अंग्रेज़ी होगी; तथा आयोजन-स्थल पारस्परिक सहमति से ऑनलाइन अथवा ऑफ़लाइन होगा, अथवा सहमति के अभाव में तटस्थ के विवेकानुसार।"
              />
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="9. Changes to These Terms" hi="9. इन शर्तों में परिवर्तन" />
          </h2>
          <p className="mt-3">
            <Bi
              en="PraSanghi may revise these Terms of Use at any time by updating this page. Continued use of the website after any changes constitutes acceptance of the revised terms."
              hi="प्रासंघी इस पृष्ठ को अद्यतन करके इन उपयोग की शर्तों को किसी भी समय संशोधित कर सकता है। किसी भी परिवर्तन के पश्चात वेबसाइट का निरंतर उपयोग संशोधित शर्तों की स्वीकृति माना जाएगा।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="10. Contact" hi="10. संपर्क" />
          </h2>
          <p className="mt-3">
            <span className="lang-en">
              Questions about these Terms of Use can be sent through the{' '}
              <a href="/contact" className="underline hover:text-ink-900">
                Contact
              </a>{' '}
              page.
            </span>
            <span className="lang-hi">
              इन उपयोग की शर्तों के बारे में प्रश्न{' '}
              <a href="/contact" className="underline hover:text-ink-900">
                संपर्क करें
              </a>{' '}
              पृष्ठ के माध्यम से भेजे जा सकते हैं।
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}
