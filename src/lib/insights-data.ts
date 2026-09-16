export interface InsightRecord {
  slug: string
  contentType: 'Legal Update' | 'Article' | 'Podcast'
  date: string
  headline: string
  headlineHi: string
  excerpt: string
  excerptHi: string
  practiceAreaTag?: string
  practiceAreaTagHi?: string
  image: string
  body: string[]
  bodyHi: string[]
}

function placeholderImage(slug: string) {
  return `https://picsum.photos/seed/prasanghi-insight-${slug}/900/600`
}

// General-information articles on well-established, public regulatory
// processes (not case-specific legal advice) — written to give the Insights
// section real substance rather than placeholder copy. Firm-specific
// commentary, bylines, and a regular publishing cadence remain pending
// founder input — see build/implementation-roadmap.md Phase 10.
//
// Hindi fields (*Hi) are formal/legal-register translations for the EN/HI
// toggle (site-header.tsx LanguageToggle) — see lib/practice-areas-data.ts.
export const insights: InsightRecord[] = [
  {
    slug: 'fire-safety-noc-process',
    contentType: 'Article',
    date: '2026-09-01',
    headline: 'Understanding the Fire Safety NOC Process',
    headlineHi: 'अग्नि सुरक्षा अनापत्ति प्रमाणपत्र (एनओसी) प्रक्रिया को समझना',
    excerpt:
      'A plain-language walkthrough of what a Fire Safety NOC covers and when a business needs one.',
    excerptHi:
      'अग्नि सुरक्षा एनओसी में क्या शामिल है और किसी व्यवसाय को इसकी आवश्यकता कब होती है — सरल भाषा में विवरण।',
    practiceAreaTag: 'Regulatory & Advisory',
    practiceAreaTagHi: 'नियामक एवं सलाहकार सेवाएँ',
    image: placeholderImage('fire-safety-noc-process'),
    body: [
      'A Fire Safety No Objection Certificate (NOC) is a clearance issued by the local fire department confirming that a building or premises meets applicable fire-safety norms. It is a prerequisite for a wide range of other approvals — trade licences, building-completion certificates, and occupancy certificates among them — which makes it one of the first compliance steps a business should plan for, not one of the last.',
      'Who needs one: any commercial, industrial, or high-occupancy premises — offices, factories, warehouses, hotels, restaurants, and multi-storey residential buildings — typically requires a Fire Safety NOC before occupation, with the exact threshold (building height, floor area, occupancy type) set by the state fire service rules in the jurisdiction where the premises is located.',
      'The process generally follows four stages: (1) submitting an application with building plans and site details to the local fire department; (2) a site inspection to verify fire-fighting equipment, exits, and access for fire tenders; (3) rectification of any gaps identified during inspection; and (4) issuance of the NOC, which is typically valid for a fixed period and must be renewed before expiry.',
      'Because the NOC sits upstream of several other approvals, delays here tend to cascade into delays elsewhere. Businesses planning a new premises, or renewing an existing certification, are better served treating this as an early-stage compliance item rather than something to address once other approvals are already in motion.',
    ],
    bodyHi: [
      'अग्नि सुरक्षा अनापत्ति प्रमाणपत्र (एनओसी) स्थानीय अग्निशमन विभाग द्वारा जारी की जाने वाली एक स्वीकृति है, जो यह पुष्टि करती है कि कोई भवन अथवा परिसर लागू अग्नि-सुरक्षा मानकों को पूरा करता है। यह अनेक अन्य अनुमतियों — जैसे ट्रेड लाइसेंस, भवन-पूर्णता प्रमाणपत्र, तथा अधिभोग प्रमाणपत्र — के लिए एक पूर्व-अपेक्षा है, जिस कारण इसे व्यवसाय की अनुपालन योजना के अंतिम नहीं, बल्कि प्रारंभिक चरणों में सम्मिलित किया जाना चाहिए।',
      'किसे आवश्यकता है: कोई भी वाणिज्यिक, औद्योगिक अथवा उच्च-अधिभोग परिसर — कार्यालय, कारखाने, गोदाम, होटल, रेस्तराँ, तथा बहुमंजिला आवासीय भवन — सामान्यतः अधिभोग से पूर्व अग्नि सुरक्षा एनओसी की अपेक्षा रखते हैं, जिसकी सटीक सीमा (भवन की ऊँचाई, तल क्षेत्रफल, अधिभोग का प्रकार) संबंधित राज्य के अग्निशमन सेवा नियमों द्वारा निर्धारित होती है।',
      'यह प्रक्रिया सामान्यतः चार चरणों में पूर्ण होती है: (1) स्थानीय अग्निशमन विभाग को भवन योजनाओं एवं स्थल विवरण सहित आवेदन प्रस्तुत करना; (2) अग्निशमन उपकरण, निकास द्वार तथा दमकल वाहनों की पहुँच की पुष्टि हेतु स्थल निरीक्षण; (3) निरीक्षण के दौरान चिह्नित किसी भी कमी का सुधार; तथा (4) एनओसी का निर्गमन, जो सामान्यतः एक निश्चित अवधि हेतु वैध होता है तथा समाप्ति से पूर्व नवीनीकृत किया जाना आवश्यक है।',
      'चूँकि यह एनओसी अन्य कई अनुमतियों से पहले आवश्यक होता है, इसमें होने वाला विलंब आगे की प्रक्रियाओं में भी विलंब उत्पन्न कर देता है। नए परिसर की योजना बना रहे अथवा मौजूदा प्रमाणन का नवीनीकरण करा रहे व्यवसायों के लिए यह बेहतर होगा कि वे इसे एक आरंभिक-चरण की अनुपालन आवश्यकता मानें, न कि ऐसी वस्तु जिस पर ध्यान अन्य अनुमतियाँ आरंभ हो जाने के बाद दिया जाए।',
    ],
  },
  {
    slug: 'udyam-registration-explained',
    contentType: 'Article',
    date: '2026-08-20',
    headline: 'UDYAM Registration, Explained',
    headlineHi: 'उद्यम पंजीकरण: एक विस्तृत विवरण',
    excerpt: 'What UDYAM registration is, who needs it, and how it is obtained.',
    excerptHi: 'उद्यम पंजीकरण क्या है, इसकी आवश्यकता किसे है, तथा इसे कैसे प्राप्त किया जाता है।',
    practiceAreaTag: 'Regulatory & Advisory',
    practiceAreaTagHi: 'नियामक एवं सलाहकार सेवाएँ',
    image: placeholderImage('udyam-registration-explained'),
    body: [
      'UDYAM registration is the current framework under which micro, small, and medium enterprises (MSMEs) in India are officially recognised by the Ministry of Micro, Small and Medium Enterprises. It replaced the earlier Udyog Aadhaar system, and registration is done entirely online through the government’s UDYAM portal using the applicant’s Aadhaar number and PAN.',
      'Classification as micro, small, or medium is based on two criteria: investment in plant and machinery or equipment, and annual turnover. Both thresholds are self-declared at the time of registration and are periodically revised, so a business should confirm current limits at the time of applying rather than relying on figures from a prior filing.',
      'Registering is not merely a formality — it unlocks concrete benefits: priority-sector lending eligibility, protection against delayed payments under the MSME Development Act, subsidies on trademark and patent filings, and eligibility for various state and central government tenders and schemes reserved for registered MSMEs.',
      'There is no renewal requirement once registered — the Udyam Registration Certificate is valid for the life of the enterprise — but the enterprise must update its turnover and investment figures annually, since these are cross-verified against Income Tax and GST records rather than re-declared manually each year.',
    ],
    bodyHi: [
      'उद्यम पंजीकरण वह वर्तमान ढाँचा है जिसके अंतर्गत भारत में सूक्ष्म, लघु एवं मध्यम उद्यमों (एमएसएमई) को सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय द्वारा आधिकारिक रूप से मान्यता दी जाती है। इसने पूर्ववर्ती उद्योग आधार प्रणाली का स्थान लिया है, तथा पंजीकरण पूर्णतः ऑनलाइन, सरकार के उद्यम पोर्टल के माध्यम से, आवेदक के आधार क्रमांक एवं पैन का उपयोग करते हुए किया जाता है।',
      'सूक्ष्म, लघु अथवा मध्यम के रूप में वर्गीकरण दो मानदंडों पर आधारित है: संयंत्र एवं मशीनरी अथवा उपकरण में निवेश, तथा वार्षिक कारोबार। दोनों सीमाएँ पंजीकरण के समय स्व-घोषित की जाती हैं तथा समय-समय पर संशोधित होती रहती हैं, अतः व्यवसाय को आवेदन के समय वर्तमान सीमाओं की पुष्टि करनी चाहिए, न कि पूर्व दाखिले के आँकड़ों पर निर्भर रहना चाहिए।',
      'पंजीकरण मात्र एक औपचारिकता नहीं है — यह ठोस लाभ भी प्रदान करता है: प्राथमिकता-क्षेत्र ऋण हेतु पात्रता, एमएसएमई विकास अधिनियम के अंतर्गत विलंबित भुगतान से संरक्षण, ट्रेडमार्क एवं पेटेंट दाखिलों पर सब्सिडी, तथा पंजीकृत एमएसएमई हेतु आरक्षित विभिन्न राज्य एवं केंद्र सरकार की निविदाओं व योजनाओं हेतु पात्रता।',
      'एक बार पंजीकृत होने के बाद नवीनीकरण की आवश्यकता नहीं होती — उद्यम पंजीकरण प्रमाणपत्र उद्यम के जीवनकाल तक वैध रहता है — किंतु उद्यम को अपने कारोबार एवं निवेश के आँकड़े प्रतिवर्ष अद्यतन करने होते हैं, क्योंकि इन्हें प्रतिवर्ष स्वयं पुनः घोषित करने के बजाय आयकर एवं जीएसटी अभिलेखों से क्रॉस-सत्यापित किया जाता है।',
    ],
  },
  {
    slug: 'shops-establishment-registration-explained',
    contentType: 'Article',
    date: '2026-08-05',
    headline: 'Shops and Establishment Registration: What New Businesses Need to Know',
    headlineHi: 'दुकान एवं प्रतिष्ठान पंजीकरण: नए व्यवसायों के लिए आवश्यक जानकारी',
    excerpt:
      'The registration most new commercial premises need first, and why it is often the one businesses overlook.',
    excerptHi:
      'अधिकांश नए वाणिज्यिक परिसरों को सबसे पहले जिस पंजीकरण की आवश्यकता होती है, तथा व्यवसाय प्रायः इसे नज़रअंदाज़ क्यों करते हैं।',
    practiceAreaTag: 'Regulatory & Advisory',
    practiceAreaTagHi: 'नियामक एवं सलाहकार सेवाएँ',
    image: placeholderImage('shops-establishment-registration'),
    body: [
      'Shops and Establishment registration is typically the first statutory registration a new commercial premises needs — offices, retail shops, restaurants, and most other commercial establishments fall within its scope, with the specific rules set by the state in which the premises operates (the Shops and Establishments Act is state legislation, not a single central statute).',
      'Registration is usually required within a short window of commencing business — often 30 days, though this varies by state — and covers matters like working hours, holidays, leave entitlements, and conditions of employment for staff at the establishment.',
      'Because it is a state-level registration, requirements, forms, and renewal cycles differ across jurisdictions. A business operating in more than one state should expect to register separately in each, rather than assuming one registration extends across state lines.',
      'Operating without this registration, or letting it lapse, can expose a business to penalties and complicate other approvals down the line — several licences and registrations request proof of Shops and Establishment registration as a supporting document, so it is worth treating as a foundational filing rather than an afterthought.',
    ],
    bodyHi: [
      'दुकान एवं प्रतिष्ठान पंजीकरण सामान्यतः किसी नए वाणिज्यिक परिसर हेतु आवश्यक पहला सांविधिक पंजीकरण है — कार्यालय, खुदरा दुकानें, रेस्तराँ तथा अधिकांश अन्य वाणिज्यिक प्रतिष्ठान इसके दायरे में आते हैं, तथा विशिष्ट नियम उस राज्य द्वारा निर्धारित होते हैं जहाँ परिसर संचालित है (दुकान एवं प्रतिष्ठान अधिनियम एक राज्य विधान है, न कि कोई एकल केंद्रीय क़ानून)।',
      'व्यवसाय आरंभ करने के एक छोटी समयावधि के भीतर — प्रायः 30 दिनों में, यद्यपि यह राज्य-दर-राज्य भिन्न होता है — पंजीकरण आवश्यक होता है, तथा यह प्रतिष्ठान के स्टाफ हेतु कार्य के घंटे, अवकाश, छुट्टी के अधिकार, तथा सेवा-शर्तों जैसे विषयों को समाहित करता है।',
      'चूँकि यह एक राज्य-स्तरीय पंजीकरण है, अपेक्षाएँ, प्रपत्र तथा नवीनीकरण चक्र प्रत्येक क्षेत्राधिकार में भिन्न होते हैं। एक से अधिक राज्यों में संचालित व्यवसाय को प्रत्येक राज्य में पृथक रूप से पंजीकरण कराना चाहिए, यह नहीं मान लेना चाहिए कि एक पंजीकरण राज्य की सीमाओं से परे भी प्रभावी होगा।',
      'इस पंजीकरण के बिना संचालन करना, अथवा इसे समाप्त हो जाने देना, व्यवसाय को शास्तियों (पेनाल्टी) के जोखिम में डाल सकता है तथा आगे की अन्य अनुमतियों को जटिल बना सकता है — कई लाइसेंस एवं पंजीकरण, सहायक दस्तावेज़ के रूप में दुकान एवं प्रतिष्ठान पंजीकरण का प्रमाण माँगते हैं, अतः इसे एक आधारभूत दाखिला मानना उचित है, न कि बाद में सोचने वाली वस्तु।',
    ],
  },
]

export const insightsBySlug: Record<string, InsightRecord> = Object.fromEntries(
  insights.map((i) => [i.slug, i])
)
