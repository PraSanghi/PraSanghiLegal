import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { Bi } from '@/components/i18n/bi'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How PraSanghi handles personal information submitted through this website.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb segments={[{ label: 'Privacy Policy', labelHi: 'गोपनीयता नीति' }]} />
      <h1 className="mt-4 text-display-lg font-bold text-ink-900">
        <Bi en="Privacy Policy" hi="गोपनीयता नीति" />
      </h1>
      <p className="mt-3 text-body-sm text-muted-foreground">
        <Bi en="Last updated: 16 September 2026" hi="अंतिम अद्यतन: 16 सितंबर 2026" />
      </p>

      <div className="mt-10 flex flex-col gap-8 text-body-md text-muted-foreground">
        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="1. Introduction" hi="1. परिचय" />
          </h2>
          <p className="mt-3">
            <Bi
              en="This Privacy Policy explains what information PraSanghi collects through this website, how it is used, and the choices available to you. It applies to this website only and does not cover information PraSanghi may receive through other channels (e.g. phone, email, or in-person consultations)."
              hi="यह गोपनीयता नीति बताती है कि प्रासंघी इस वेबसाइट के माध्यम से कौन-सी जानकारी एकत्र करता है, उसका उपयोग कैसे किया जाता है, तथा आपके पास कौन-से विकल्प उपलब्ध हैं। यह केवल इस वेबसाइट पर लागू होती है तथा उस जानकारी को समाहित नहीं करती जो प्रासंघी को अन्य माध्यमों (जैसे फ़ोन, ईमेल, अथवा व्यक्तिगत परामर्श) से प्राप्त हो सकती है।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="2. Information We Collect" hi="2. एकत्रित की जाने वाली जानकारी" />
          </h2>
          <p className="mt-3">
            <Bi
              en="This website collects information you choose to provide, such as:"
              hi="यह वेबसाइट वह जानकारी एकत्र करती है जो आप स्वेच्छा से प्रदान करते हैं, जैसे:"
            />
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <Bi
                en="Your name, email, phone number, practice area of interest, and message when you submit the Contact form."
                hi="संपर्क फॉर्म भरते समय आपका नाम, ईमेल, फ़ोन नंबर, रुचि का प्रैक्टिस क्षेत्र, तथा संदेश।"
              />
            </li>
            <li>
              <Bi
                en="Your name, email, resume/CV link, and cover message if you apply through the Careers page."
                hi="करियर पृष्ठ के माध्यम से आवेदन करते समय आपका नाम, ईमेल, रिज्यूमे/सीवी लिंक, तथा कवर संदेश।"
              />
            </li>
            <li>
              <Bi
                en="Your email address if you subscribe to our newsletter in the site footer."
                hi="यदि आप साइट के फुटर में हमारे न्यूज़लेटर की सदस्यता लेते हैं, तो आपका ईमेल पता।"
              />
            </li>
          </ul>
          <p className="mt-3">
            <Bi
              en="We do not currently collect payment information, government IDs, or other sensitive personal data through this website."
              hi="हम वर्तमान में इस वेबसाइट के माध्यम से भुगतान संबंधी जानकारी, सरकारी पहचान-पत्र, अथवा अन्य संवेदनशील व्यक्तिगत डेटा एकत्र नहीं करते।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="3. Cookies" hi="3. कुकीज़" />
          </h2>
          <p className="mt-3">
            <span className="lang-en">
              This website uses two categories of cookies, which you control through the cookie
              banner shown on your first visit or the &ldquo;Cookie Preferences&rdquo; link in
              the footer at any time:
            </span>
            <span className="lang-hi">
              यह वेबसाइट दो श्रेणियों की कुकीज़ का उपयोग करती है, जिन्हें आप अपनी पहली विज़िट पर
              दिखाई गई कुकी बार अथवा फुटर में दिए गए &ldquo;कुकी प्राथमिकताएँ&rdquo; लिंक के
              माध्यम से कभी भी नियंत्रित कर सकते हैं:
            </span>
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-ink-900">
                <Bi en="Essential" hi="अनिवार्य" />
              </span>{' '}
              <span className="lang-en">
                — required for the site to function, such as remembering that you acknowledged
                the Bar Council of India disclaimer and recording your cookie preference itself.
                These cannot be disabled, as the site cannot function correctly without them.
              </span>
              <span className="lang-hi">
                — साइट के कार्य हेतु आवश्यक, जैसे यह याद रखना कि आपने भारतीय विधिज्ञ परिषद के
                अस्वीकरण को स्वीकार किया है तथा आपकी कुकी प्राथमिकता को स्वयं दर्ज करना। इन्हें
                अक्षम नहीं किया जा सकता, क्योंकि इनके बिना साइट सही ढंग से कार्य नहीं कर सकती।
              </span>
            </li>
            <li>
              <span className="font-semibold text-ink-900">
                <Bi en="Analytics" hi="विश्लेषण (एनालिटिक्स)" />
              </span>{' '}
              <span className="lang-en">
                — optional, and only active if you accept them. We use Vercel Web Analytics, a
                privacy-focused service that reports aggregate page-visit statistics without
                using third-party advertising trackers or selling data.
              </span>
              <span className="lang-hi">
                — वैकल्पिक, तथा केवल तभी सक्रिय जब आप इन्हें स्वीकार करते हैं। हम Vercel Web
                Analytics का उपयोग करते हैं, जो एक गोपनीयता-केंद्रित सेवा है और बिना किसी
                तृतीय-पक्ष विज्ञापन ट्रैकर के उपयोग अथवा डेटा बेचे, समग्र पृष्ठ-विज़िट आँकड़े
                प्रस्तुत करती है।
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="4. How We Use Information" hi="4. जानकारी का उपयोग" />
          </h2>
          <p className="mt-3">
            <Bi
              en="Information submitted through the Contact or Careers forms is used only to respond to your enquiry or application. An email address submitted through the newsletter form is used only to send the updates you signed up for, and you may unsubscribe at any time. We do not sell or rent personal information to third parties, and do not use it for unrelated marketing without your consent."
              hi="संपर्क अथवा करियर फॉर्म के माध्यम से प्रस्तुत जानकारी का उपयोग केवल आपकी पूछताछ अथवा आवेदन का उत्तर देने हेतु किया जाता है। न्यूज़लेटर फॉर्म के माध्यम से प्रस्तुत ईमेल पते का उपयोग केवल आपके द्वारा सदस्यता लिए गए अद्यतन भेजने हेतु किया जाता है, तथा आप किसी भी समय सदस्यता समाप्त कर सकते हैं। हम व्यक्तिगत जानकारी को तृतीय पक्षों को न तो बेचते हैं और न ही किराए पर देते हैं, तथा आपकी सहमति के बिना इसका उपयोग असंबंधित विपणन हेतु नहीं करते।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="5. Data Retention" hi="5. डेटा प्रतिधारण" />
          </h2>
          <p className="mt-3">
            <Bi
              en="We retain Contact and Careers submissions only for as long as reasonably necessary to address the enquiry or application, or as required by applicable law. Newsletter email addresses are retained until you unsubscribe."
              hi="हम संपर्क एवं करियर प्रस्तुतियों को केवल तब तक बनाए रखते हैं जब तक पूछताछ अथवा आवेदन का निपटारा करने हेतु उचित रूप से आवश्यक हो, अथवा जब तक लागू कानून द्वारा अपेक्षित हो। न्यूज़लेटर ईमेल पते तब तक बनाए रखे जाते हैं जब तक आप सदस्यता समाप्त नहीं करते।"
            />
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="6. Your Rights" hi="6. आपके अधिकार" />
          </h2>
          <p className="mt-3">
            <span className="lang-en">
              You may ask us to access, correct, or delete personal information you have
              submitted through this website by contacting us via the{' '}
              <a href="/contact" className="underline hover:text-ink-900">
                Contact Us
              </a>{' '}
              page.
            </span>
            <span className="lang-hi">
              आप इस वेबसाइट के माध्यम से प्रस्तुत अपनी व्यक्तिगत जानकारी तक पहुँच, उसमें सुधार,
              अथवा उसे हटाने हेतु{' '}
              <a href="/contact" className="underline hover:text-ink-900">
                संपर्क करें
              </a>{' '}
              पृष्ठ के माध्यम से हमसे अनुरोध कर सकते हैं।
            </span>
          </p>
        </div>

        <div>
          <h2 className="text-heading-sm font-semibold text-ink-900">
            <Bi en="7. Changes to This Policy" hi="7. इस नीति में परिवर्तन" />
          </h2>
          <p className="mt-3">
            <Bi
              en="We may update this Privacy Policy from time to time by revising the date at the top of this page."
              hi="हम इस गोपनीयता नीति को समय-समय पर, इस पृष्ठ के शीर्ष पर दी गई तिथि को संशोधित करते हुए, अद्यतन कर सकते हैं।"
            />
          </p>
        </div>

        <p className="border-t border-border pt-6 text-body-sm italic">
          <Bi
            en="This page reflects PraSanghi's current data practices and is subject to periodic review by the firm's own counsel; it will be updated as needed."
            hi="यह पृष्ठ प्रासंघी की वर्तमान डेटा प्रथाओं को दर्शाता है तथा फर्म के अपने विधि परामर्शदाता द्वारा समय-समय पर समीक्षा के अधीन है; इसे आवश्यकतानुसार अद्यतन किया जाएगा।"
          />
        </p>
      </div>
    </section>
  )
}
