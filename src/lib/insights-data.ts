/**
 * An article body is a sequence of blocks. A plain string is a paragraph; a
 * `steps` block renders as a numbered list on separate lines (client note
 * p.94: "write such things in numerical bullet points in separate lines");
 * a `heading` block is a sub-heading.
 */
export type InsightBlock = string | { steps: string[] } | { heading: string }

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
  /** Practice-area slug the article links back to. */
  practiceAreaSlug?: string
  /** Optional photo; without one the card and page show the branded practice-area cover. */
  image?: string
  body: InsightBlock[]
  bodyHi: InsightBlock[]
}


const REG = { practiceAreaTag: 'Regulatory & Statutory Compliance', practiceAreaTagHi: 'नियामक एवं सांविधिक अनुपालन', practiceAreaSlug: 'regulatory-advisory' }

// General-information articles on established, public legal processes — not
// case-specific advice. Newest first. Photos were checked by eye for fit.
export const insights: InsightRecord[] = [
  {
    slug: 'rera-registration-and-homebuyer-remedies',
    contentType: 'Article',
    date: '2026-11-10',
    headline: 'RERA: Registration for Promoters and Remedies for Homebuyers',
    headlineHi: 'रेरा: प्रवर्तकों हेतु पंजीकरण एवं गृह-क्रेताओं हेतु उपचार',
    excerpt: 'Who must register a project with RERA, what it requires, and what a homebuyer can do when possession is delayed.',
    excerptHi: 'किसे रेरा में परियोजना पंजीकृत करानी होती है, उसकी अपेक्षाएँ क्या हैं, तथा आधिपत्य में विलंब होने पर गृह-क्रेता क्या कर सकता है।',
    practiceAreaTag: 'Property & Real Estate Advisory',
    practiceAreaTagHi: 'संपत्ति एवं रियल एस्टेट परामर्श',
    practiceAreaSlug: 'property-real-estate',
    body: [
      'The Real Estate (Regulation and Development) Act, 2016 requires promoters to register real estate projects with the state Real Estate Regulatory Authority (RERA) before advertising, marketing or selling units, subject to the thresholds and exemptions under the Act and the state rules. Real estate agents who facilitate sales must register too.',
      { heading: 'What a promoter needs to register a project' },
      {
        steps: [
          'Title documents and approvals for the land and the sanctioned plans.',
          'Project details — layout, number and carpet area of units, common areas and amenities.',
          'The proposed timeline for completion.',
          'A designated bank account into which the prescribed share of buyers’ money is deposited and used only for the project.',
          'Quarterly progress updates on the RERA portal throughout the project.',
        ],
      },
      { heading: 'Remedies for homebuyers' },
      'Where possession is delayed, or the project departs from what was promised, an allottee can file a complaint before RERA seeking refund with interest, or interest for every month of delay while continuing in the project, along with compensation where applicable. Orders of the Authority can be challenged before the Real Estate Appellate Tribunal and then the High Court.',
      'PraSanghi handles RERA registration and compliance for promoters and agents, and represents homebuyers in complaints, appeals and execution of orders.',
    ],
    bodyHi: [
      'भू-संपदा (विनियमन एवं विकास) अधिनियम, 2016 के अंतर्गत प्रवर्तकों को इकाइयों के विज्ञापन, विपणन अथवा विक्रय से पूर्व, अधिनियम एवं राज्य नियमों की सीमाओं एवं छूटों के अधीन, राज्य भू-संपदा विनियामक प्राधिकरण (रेरा) में परियोजना का पंजीकरण कराना आवश्यक है। विक्रय में सहायता करने वाले भू-संपदा अभिकर्ताओं का भी पंजीकरण आवश्यक है।',
      { heading: 'परियोजना पंजीकरण हेतु प्रवर्तक को क्या चाहिए' },
      {
        steps: [
          'भूमि के स्वत्व दस्तावेज़ एवं स्वीकृत मानचित्रों की अनुमतियाँ।',
          'परियोजना का विवरण — अभिन्यास, इकाइयों की संख्या एवं कारपेट क्षेत्र, सामान्य क्षेत्र एवं सुविधाएँ।',
          'पूर्णता की प्रस्तावित समय-सीमा।',
          'एक निर्दिष्ट बैंक खाता, जिसमें क्रेताओं से प्राप्त राशि का निर्धारित अंश जमा होकर केवल परियोजना पर व्यय हो।',
          'परियोजना के दौरान रेरा पोर्टल पर त्रैमासिक प्रगति विवरण।',
        ],
      },
      { heading: 'गृह-क्रेताओं हेतु उपचार' },
      'आधिपत्य में विलंब होने पर, अथवा परियोजना वादे से भिन्न होने पर, आवंटिती रेरा के समक्ष परिवाद प्रस्तुत कर ब्याज सहित राशि-वापसी, अथवा परियोजना में बने रहते हुए विलंब के प्रत्येक माह हेतु ब्याज, तथा यथास्थिति प्रतिकर की माँग कर सकता है। प्राधिकरण के आदेशों को भू-संपदा अपीलीय अधिकरण एवं तत्पश्चात उच्च न्यायालय में चुनौती दी जा सकती है।',
      'प्रासंघी प्रवर्तकों एवं अभिकर्ताओं हेतु रेरा पंजीकरण एवं अनुपालन का कार्य करता है, तथा परिवादों, अपीलों एवं आदेशों के निष्पादन में गृह-क्रेताओं का प्रतिनिधित्व करता है।',
    ],
  },
  {
    slug: 'money-lender-sahukar-licence',
    contentType: 'Article',
    date: '2026-11-03',
    headline: 'Money-Lender (Sahukar) Licence: Who Needs One and How to Obtain It',
    headlineHi: 'साहूकार (मनी-लेंडर) अनुज्ञप्ति: किसे आवश्यक है और कैसे प्राप्त करें',
    excerpt: 'Lending money as a business without a money-lender’s registration can leave loans unrecoverable. What the law requires.',
    excerptHi: 'बिना साहूकार पंजीकरण के व्यवसाय के रूप में धन उधार देने पर ऋण अवसूलनीय हो सकते हैं। विधि क्या अपेक्षा करती है।',
    ...REG,
    body: [
      'Most states regulate private money-lending through their own money-lenders legislation — in Madhya Pradesh, the Madhya Pradesh Sahukar Adhiniyam, 1934. A person or firm carrying on the business of lending money, other than banks and other exempted institutions, is generally required to hold a registration certificate or licence from the competent authority.',
      'The consequence of lending without one can be serious: depending on the state law, a suit to recover a loan advanced in the course of an unregistered money-lending business may not be maintainable, and lending without a licence can attract penalties. Rules on maximum interest, maintenance of accounts and issue of receipts also apply.',
      { heading: 'The usual process' },
      {
        steps: [
          'Confirm whether your lending activity amounts to a money-lending business under the state Act, or falls within an exemption.',
          'Prepare the application in the prescribed form with identity, address and business details.',
          'File it with the competent authority (typically the Registrar / revenue authority designated for the district) with the prescribed fee.',
          'Comply with any verification or enquiry and obtain the registration certificate.',
          'Maintain the prescribed books of account and receipts, and renew the registration within time.',
        ],
      },
      'PraSanghi advises lenders on registration and compliance, and represents both lenders and borrowers in recovery suits and disputes over interest and accounts.',
    ],
    bodyHi: [
      'अधिकांश राज्य निजी साहूकारी को अपनी साहूकार विधि के माध्यम से विनियमित करते हैं — मध्य प्रदेश में मध्य प्रदेश साहूकार अधिनियम, 1934 के द्वारा। बैंकों एवं अन्य छूट प्राप्त संस्थानों के अतिरिक्त, धन उधार देने का व्यवसाय करने वाले व्यक्ति अथवा फर्म को सामान्यतः सक्षम प्राधिकारी से पंजीकरण प्रमाणपत्र अथवा अनुज्ञप्ति प्राप्त करना आवश्यक है।',
      'इसके अभाव में उधार देने के परिणाम गंभीर हो सकते हैं: राज्य विधि के अनुसार, अपंजीकृत साहूकारी व्यवसाय में दिए गए ऋण की वसूली हेतु वाद पोषणीय नहीं हो सकता, तथा बिना अनुज्ञप्ति उधार देने पर शास्ति भी लग सकती है। अधिकतम ब्याज, लेखा-पुस्तकों के संधारण एवं रसीद जारी करने संबंधी नियम भी लागू होते हैं।',
      { heading: 'सामान्य प्रक्रिया' },
      {
        steps: [
          'पुष्टि करें कि आपकी उधारी गतिविधि राज्य अधिनियम के अंतर्गत साहूकारी व्यवसाय है, अथवा किसी छूट में आती है।',
          'पहचान, पता एवं व्यवसाय विवरण सहित निर्धारित प्रपत्र में आवेदन तैयार करें।',
          'निर्धारित शुल्क के साथ सक्षम प्राधिकारी (सामान्यतः जिले हेतु नामित पंजीयक / राजस्व प्राधिकारी) के समक्ष प्रस्तुत करें।',
          'सत्यापन अथवा जाँच का अनुपालन कर पंजीकरण प्रमाणपत्र प्राप्त करें।',
          'निर्धारित लेखा-पुस्तकें एवं रसीदें संधारित करें, तथा समय पर पंजीकरण का नवीनीकरण कराएँ।',
        ],
      },
      'प्रासंघी ऋणदाताओं को पंजीकरण एवं अनुपालन पर परामर्श देता है, तथा वसूली वादों एवं ब्याज व लेखा संबंधी विवादों में ऋणदाताओं एवं ऋणियों — दोनों का प्रतिनिधित्व करता है।',
    ],
  },
  {
    slug: 'cheque-bounce-section-138',
    contentType: 'Article',
    date: '2026-10-27',
    headline: 'Cheque Bounce under Section 138: The Timeline That Decides Your Case',
    headlineHi: 'धारा 138 के अंतर्गत चेक अनादरण: समय-सीमा जो आपके प्रकरण का निर्णय करती है',
    excerpt: 'A dishonoured cheque gives a strong remedy — but only if each step is taken within its statutory window.',
    excerptHi: 'अनादरित चेक एक सशक्त उपचार देता है — किंतु तभी, जब प्रत्येक चरण अपनी सांविधिक समय-सीमा में उठाया जाए।',
    practiceAreaTag: 'Debt Recovery & Section 138 NI Act',
    practiceAreaTagHi: 'ऋण वसूली एवं धारा 138',
    practiceAreaSlug: 'debt-recovery-management',
    body: [
      'Section 138 of the Negotiable Instruments Act, 1881 makes the dishonour of a cheque issued towards a legally enforceable debt a criminal offence, once a statutory procedure has been followed. The procedure is strict, and a missed deadline can defeat an otherwise strong claim.',
      { heading: 'The steps, in order' },
      {
        steps: [
          'Present the cheque within its validity period (currently three months from its date).',
          'On dishonour, send a written demand notice to the drawer within 30 days of receiving the bank’s return memo.',
          'Allow the drawer 15 days from receipt of the notice to pay.',
          'If payment is not made, file the complaint before the competent Magistrate within one month after those 15 days expire.',
          'Pursue the trial; the court may also direct interim compensation to the complainant.',
        ],
      },
      'A civil suit for recovery can be filed alongside the criminal complaint. Drawers facing a complaint should also take advice early — defences on the existence of a legally enforceable debt, or defects in the notice, are often decisive.',
    ],
    bodyHi: [
      'परक्राम्य लिखत अधिनियम, 1881 की धारा 138 विधितः प्रवर्तनीय ऋण के भुगतान हेतु जारी चेक के अनादरण को, सांविधिक प्रक्रिया का पालन होने पर, आपराधिक अपराध बनाती है। प्रक्रिया कठोर है, तथा एक भी समय-सीमा चूकने पर सुदृढ़ दावा भी विफल हो सकता है।',
      { heading: 'चरण, क्रमवार' },
      {
        steps: [
          'चेक को उसकी वैधता अवधि (वर्तमान में उसकी तिथि से तीन माह) के भीतर प्रस्तुत करें।',
          'अनादरण होने पर, बैंक का वापसी ज्ञापन प्राप्त होने के 30 दिनों के भीतर आहर्ता को लिखित मांग सूचना भेजें।',
          'सूचना प्राप्ति से 15 दिन तक आहर्ता को भुगतान का अवसर दें।',
          'भुगतान न होने पर, उन 15 दिनों की समाप्ति के पश्चात एक माह के भीतर सक्षम मजिस्ट्रेट के समक्ष परिवाद प्रस्तुत करें।',
          'विचारण का अनुसरण करें; न्यायालय परिवादी को अंतरिम प्रतिकर का निर्देश भी दे सकता है।',
        ],
      },
      'आपराधिक परिवाद के साथ-साथ वसूली हेतु सिविल वाद भी संस्थित किया जा सकता है। जिनके विरुद्ध परिवाद है, उन्हें भी शीघ्र परामर्श लेना चाहिए — विधितः प्रवर्तनीय ऋण के अस्तित्व अथवा सूचना की त्रुटियों पर आधारित प्रतिरक्षा प्रायः निर्णायक होती है।',
    ],
  },
  {
    slug: 'hybrid-med-arb-explained',
    contentType: 'Article',
    date: '2026-10-20',
    headline: 'Hybrid Med-Arb: Settlement First, a Binding Award if Needed',
    headlineHi: 'हाइब्रिड मेड-आर्ब: पहले समझौता, आवश्यकता होने पर बाध्यकारी अधिनिर्णय',
    excerpt: 'How mediation and arbitration combine into one continuous process — and how to put it in your contracts.',
    excerptHi: 'मध्यस्थता एवं माध्यस्थम् एक सतत प्रक्रिया में कैसे जुड़ते हैं — और इसे अपनी संविदाओं में कैसे सम्मिलित करें।',
    practiceAreaTag: 'Arbitration, Mediation & Hybrid Med-Arb',
    practiceAreaTagHi: 'माध्यस्थम्, मध्यस्थता एवं हाइब्रिड मेड-आर्ब',
    practiceAreaSlug: 'arbitration-dispute-resolution',
    body: [
      'In a Hybrid Med-Arb process, the parties first try to settle their dispute through mediation. If mediation does not produce a settlement, the same proceeding moves on to arbitration and ends in a binding award — without the parties having to start afresh.',
      { heading: 'How it runs' },
      {
        steps: [
          'A dispute arises under a contract containing a Med-Arb clause.',
          'A neutral is appointed and conducts mediation.',
          'If the parties settle, the settlement is recorded and becomes enforceable.',
          'If they do not, the matter proceeds to arbitration — before the same neutral or a different one, as the clause provides.',
          'The tribunal renders an award enforceable under the Arbitration and Conciliation Act, 1996.',
        ],
      },
      'The model suits commercial relationships worth preserving, and disputes where time and confidentiality matter. The clause should specify the institution and rules, whether the mediator may continue as arbitrator, the seat, the language and whether hearings may be online.',
      'PraSanghi drafts Med-Arb clauses tailored to each contract and represents clients through mediation, arbitration and enforcement.',
    ],
    bodyHi: [
      'हाइब्रिड मेड-आर्ब प्रक्रिया में पक्षकार पहले मध्यस्थता द्वारा विवाद सुलझाने का प्रयास करते हैं। मध्यस्थता से समझौता न होने पर वही कार्यवाही माध्यस्थम् की ओर बढ़ती है और बाध्यकारी अधिनिर्णय में समाप्त होती है — पक्षकारों को नए सिरे से आरंभ नहीं करना पड़ता।',
      { heading: 'प्रक्रिया कैसे चलती है' },
      {
        steps: [
          'मेड-आर्ब खंड युक्त संविदा के अंतर्गत विवाद उत्पन्न होता है।',
          'एक तटस्थ व्यक्ति नियुक्त होकर मध्यस्थता संचालित करता है।',
          'समझौता होने पर उसे अभिलिखित किया जाता है और वह प्रवर्तनीय हो जाता है।',
          'समझौता न होने पर, खंड के अनुसार उसी अथवा भिन्न तटस्थ के समक्ष मामला माध्यस्थम् में जाता है।',
          'अधिकरण माध्यस्थम् एवं सुलह अधिनियम, 1996 के अंतर्गत प्रवर्तनीय अधिनिर्णय पारित करता है।',
        ],
      },
      'यह प्रारूप उन वाणिज्यिक संबंधों हेतु उपयुक्त है जिन्हें बनाए रखना है, तथा उन विवादों हेतु जहाँ समय एवं गोपनीयता महत्त्वपूर्ण हैं। खंड में संस्था एवं नियम, मध्यस्थ के आर्बिट्रेटर के रूप में बने रहने की अनुमति, स्थान, भाषा तथा ऑनलाइन सुनवाई का उल्लेख होना चाहिए।',
      'प्रासंघी प्रत्येक संविदा के अनुरूप मेड-आर्ब खंड तैयार करता है तथा मध्यस्थता, माध्यस्थम् एवं प्रवर्तन में मुवक्किलों का प्रतिनिधित्व करता है।',
    ],
  },
  {
    slug: 'consumer-complaint-which-commission',
    contentType: 'Article',
    date: '2026-10-13',
    headline: 'Consumer Complaints: Which Commission, and What Comes After the Order',
    headlineHi: 'उपभोक्ता परिवाद: कौन-सा आयोग, और आदेश के पश्चात क्या',
    excerpt: 'Pecuniary jurisdiction, limitation, appeals, revision and execution under the Consumer Protection Act, 2019.',
    excerptHi: 'उपभोक्ता संरक्षण अधिनियम, 2019 के अंतर्गत आर्थिक क्षेत्राधिकार, परिसीमा, अपील, पुनरीक्षण एवं निष्पादन।',
    practiceAreaTag: 'Consumer Protection & Consumer Forum Matters',
    practiceAreaTagHi: 'उपभोक्ता संरक्षण एवं उपभोक्ता आयोग',
    practiceAreaSlug: 'consumer-protection',
    body: [
      'Under the Consumer Protection Act, 2019, a complaint is filed before the District, State or National Commission depending on the value of the goods or services paid for, as notified by the Central Government — currently up to ₹50 lakh before the District Commission, above ₹50 lakh and up to ₹2 crore before the State Commission, and above ₹2 crore before the National Commission.',
      'A complaint must ordinarily be filed within two years from the date the cause of action arises; delay can be condoned only for sufficient cause.',
      { heading: 'After the order' },
      {
        steps: [
          'Appeal from the District Commission lies to the State Commission, and from the State Commission to the National Commission, within the prescribed time and on deposit of the required amount.',
          'The State and National Commissions also exercise revisional jurisdiction over subordinate commissions.',
          'A Commission may review its own order for an error apparent on the face of the record.',
          'An order that is not complied with is enforced through execution proceedings, and non-compliance is itself punishable.',
        ],
      },
      'PraSanghi represents complainants and opposite parties at every stage — complaint, appeal, revision, review and execution.',
    ],
    bodyHi: [
      'उपभोक्ता संरक्षण अधिनियम, 2019 के अंतर्गत परिवाद, केंद्र सरकार द्वारा अधिसूचित सीमाओं के अनुसार, भुगतान की गई वस्तु अथवा सेवा के मूल्य के आधार पर जिला, राज्य अथवा राष्ट्रीय आयोग के समक्ष प्रस्तुत होता है — वर्तमान में ₹50 लाख तक जिला आयोग, ₹50 लाख से अधिक एवं ₹2 करोड़ तक राज्य आयोग, तथा ₹2 करोड़ से अधिक राष्ट्रीय आयोग।',
      'परिवाद सामान्यतः वाद-हेतुक उत्पन्न होने की तिथि से दो वर्ष के भीतर प्रस्तुत किया जाना चाहिए; विलंब केवल पर्याप्त कारण होने पर क्षमा किया जा सकता है।',
      { heading: 'आदेश के पश्चात' },
      {
        steps: [
          'जिला आयोग के आदेश की अपील राज्य आयोग में, तथा राज्य आयोग के आदेश की अपील राष्ट्रीय आयोग में, निर्धारित समय में एवं अपेक्षित राशि जमा करने पर होती है।',
          'राज्य एवं राष्ट्रीय आयोग अधीनस्थ आयोगों पर पुनरीक्षण क्षेत्राधिकार का भी प्रयोग करते हैं।',
          'अभिलेख पर प्रकट त्रुटि होने पर आयोग अपने आदेश का पुनर्विलोकन कर सकता है।',
          'आदेश का अनुपालन न होने पर निष्पादन कार्यवाही द्वारा उसे प्रवर्तित कराया जाता है, तथा अनुपालन न करना स्वयं दंडनीय है।',
        ],
      },
      'प्रासंघी परिवाद, अपील, पुनरीक्षण, पुनर्विलोकन एवं निष्पादन — प्रत्येक चरण पर परिवादियों एवं विरोधी पक्षकारों का प्रतिनिधित्व करता है।',
    ],
  },
  {
    slug: 'dpdp-act-business-checklist',
    contentType: 'Article',
    date: '2026-10-06',
    headline: 'The DPDP Act, 2023: A Compliance Checklist for Businesses',
    headlineHi: 'डीपीडीपी अधिनियम, 2023: व्यवसायों हेतु अनुपालन जाँच-सूची',
    excerpt: 'What the Digital Personal Data Protection Act asks of any business that collects customer or employee data.',
    excerptHi: 'ग्राहकों अथवा कर्मचारियों का डेटा एकत्र करने वाले प्रत्येक व्यवसाय से डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम क्या अपेक्षा करता है।',
    practiceAreaTag: 'Cyber Law, Data Privacy & Defamation',
    practiceAreaTagHi: 'साइबर विधि, डेटा गोपनीयता एवं मानहानि',
    practiceAreaSlug: 'cyber-defamation',
    body: [
      'The Digital Personal Data Protection Act, 2023 applies to the processing of digital personal data in India — which, for most businesses, includes customer, website-user and employee data. Obligations fall on the “data fiduciary” that decides why and how the data is processed.',
      { heading: 'A practical checklist' },
      {
        steps: [
          'Map what personal data you collect, where it is stored and who it is shared with.',
          'Identify a lawful basis — usually consent through a clear notice, or a recognised legitimate use.',
          'Give a plain-language notice stating the purpose and how a person can withdraw consent or complain.',
          'Collect only what you need, and erase it once the purpose is served.',
          'Put reasonable security safeguards and data-processing agreements with vendors in place.',
          'Prepare a breach-response plan, including notification to the Data Protection Board and affected persons.',
          'Set up a grievance mechanism and respond to requests for access, correction and erasure.',
        ],
      },
      'PraSanghi prepares privacy notices, internal policies and data-processing agreements, and advises on breach response.',
    ],
    bodyHi: [
      'डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 भारत में डिजिटल व्यक्तिगत डेटा के प्रसंस्करण पर लागू होता है — जिसमें अधिकांश व्यवसायों हेतु ग्राहकों, वेबसाइट उपयोगकर्ताओं एवं कर्मचारियों का डेटा सम्मिलित है। दायित्व उस “डेटा न्यासी” पर होते हैं जो डेटा के प्रसंस्करण का प्रयोजन एवं साधन निर्धारित करता है।',
      { heading: 'व्यावहारिक जाँच-सूची' },
      {
        steps: [
          'आप कौन-सा व्यक्तिगत डेटा एकत्र करते हैं, वह कहाँ संग्रहीत है और किसके साथ साझा होता है — इसका मानचित्रण करें।',
          'विधिसम्मत आधार पहचानें — सामान्यतः स्पष्ट सूचना के माध्यम से सहमति, अथवा मान्य वैध उपयोग।',
          'सरल भाषा में सूचना दें जिसमें प्रयोजन तथा सहमति वापस लेने एवं शिकायत करने का तरीका बताया गया हो।',
          'केवल आवश्यक डेटा एकत्र करें, तथा प्रयोजन पूर्ण होने पर उसे मिटा दें।',
          'उचित सुरक्षा उपाय तथा विक्रेताओं के साथ डेटा-प्रसंस्करण अनुबंध सुनिश्चित करें।',
          'डेटा संरक्षण बोर्ड एवं प्रभावित व्यक्तियों को सूचना सहित उल्लंघन-प्रतिक्रिया योजना तैयार रखें।',
          'शिकायत निवारण व्यवस्था स्थापित करें तथा अभिगम, सुधार एवं विलोपन के अनुरोधों का उत्तर दें।',
        ],
      },
      'प्रासंघी गोपनीयता सूचनाएँ, आंतरिक नीतियाँ एवं डेटा-प्रसंस्करण अनुबंध तैयार करता है, तथा उल्लंघन की स्थिति में परामर्श देता है।',
    ],
  },
  {
    slug: 'trademark-registration-process',
    contentType: 'Article',
    date: '2026-09-22',
    headline: 'Registering a Trademark in India: From Search to Certificate',
    headlineHi: 'भारत में ट्रेडमार्क पंजीकरण: खोज से प्रमाणपत्र तक',
    excerpt: 'The stages of a trademark application and why a search before filing saves time and money.',
    excerptHi: 'ट्रेडमार्क आवेदन के चरण, और आवेदन से पूर्व खोज समय एवं धन क्यों बचाती है।',
    practiceAreaTag: 'Intellectual Property Rights',
    practiceAreaTagHi: 'बौद्धिक संपदा अधिकार',
    practiceAreaSlug: 'intellectual-property-rights',
    body: [
      'A registered trademark gives its owner the exclusive right to use the mark for the registered goods or services and a statutory remedy for infringement. Registration is valid for ten years and can be renewed indefinitely.',
      { heading: 'The stages' },
      {
        steps: [
          'Search the register for identical or similar marks in the relevant classes.',
          'File the application with the Trade Marks Registry in the correct class(es).',
          'Respond to the examination report, if objections are raised, and attend the hearing.',
          'On acceptance, the mark is advertised in the Trade Marks Journal for opposition.',
          'If unopposed, or if the opposition fails, the mark is registered and a certificate issues.',
        ],
      },
      'PraSanghi handles searches, filings, objections, oppositions and infringement proceedings, and licenses and assigns marks on commercial terms.',
    ],
    bodyHi: [
      'पंजीकृत ट्रेडमार्क अपने स्वामी को पंजीकृत वस्तुओं अथवा सेवाओं हेतु चिह्न के उपयोग का अनन्य अधिकार तथा उल्लंघन के विरुद्ध सांविधिक उपचार प्रदान करता है। पंजीकरण दस वर्ष हेतु वैध होता है तथा अनिश्चित काल तक नवीनीकृत किया जा सकता है।',
      { heading: 'चरण' },
      {
        steps: [
          'संबंधित वर्गों में समान अथवा मिलते-जुलते चिह्नों हेतु रजिस्टर की खोज करें।',
          'उचित वर्ग/वर्गों में ट्रेड मार्क्स रजिस्ट्री में आवेदन प्रस्तुत करें।',
          'आपत्ति होने पर परीक्षा रिपोर्ट का उत्तर दें तथा सुनवाई में उपस्थित हों।',
          'स्वीकृति के पश्चात चिह्न विरोध हेतु ट्रेड मार्क्स जर्नल में प्रकाशित होता है।',
          'विरोध न होने अथवा विरोध विफल होने पर चिह्न पंजीकृत होकर प्रमाणपत्र जारी होता है।',
        ],
      },
      'प्रासंघी खोज, आवेदन, आपत्ति, विरोध एवं उल्लंघन कार्यवाहियों का कार्य करता है, तथा वाणिज्यिक शर्तों पर चिह्नों का अनुज्ञापन एवं समनुदेशन करता है।',
    ],
  },
  {
    slug: 'fire-safety-noc-process',
    contentType: 'Article',
    date: '2026-09-01',
    headline: 'Understanding the Fire Safety NOC Process',
    headlineHi: 'अग्नि सुरक्षा अनापत्ति प्रमाणपत्र (एनओसी) प्रक्रिया को समझना',
    excerpt: 'What a Fire Safety NOC covers, when a business needs one, and the four stages to obtain it.',
    excerptHi: 'अग्नि सुरक्षा एनओसी में क्या शामिल है, व्यवसाय को इसकी आवश्यकता कब होती है, तथा इसे प्राप्त करने के चार चरण।',
    ...REG,
    body: [
      'A Fire Safety No Objection Certificate (NOC) is a clearance issued by the local fire department confirming that a building or premises meets applicable fire-safety norms. It is a prerequisite for a wide range of other approvals — trade licences, building-completion certificates and occupancy certificates among them — which makes it one of the first compliance steps a business should plan for, not one of the last.',
      'Who needs one: any commercial, industrial or high-occupancy premises — offices, factories, warehouses, hotels, restaurants and multi-storey residential buildings — typically requires a Fire Safety NOC before occupation, with the exact threshold (building height, floor area, occupancy type) set by the state fire service rules where the premises is located.',
      { heading: 'The process generally follows four stages' },
      {
        steps: [
          'Submitting an application with building plans and site details to the local fire department.',
          'A site inspection to verify fire-fighting equipment, exits and access for fire tenders.',
          'Rectification of any gaps identified during inspection.',
          'Issuance of the NOC, which is typically valid for a fixed period and must be renewed before expiry.',
        ],
      },
      'Because the NOC sits upstream of several other approvals, delays here tend to cascade into delays elsewhere. Businesses planning a new premises, or renewing an existing certification, are better served treating this as an early-stage compliance item.',
    ],
    bodyHi: [
      'अग्नि सुरक्षा अनापत्ति प्रमाणपत्र (एनओसी) स्थानीय अग्निशमन विभाग द्वारा जारी की जाने वाली स्वीकृति है, जो यह पुष्टि करती है कि कोई भवन अथवा परिसर लागू अग्नि-सुरक्षा मानकों को पूरा करता है। यह अनेक अन्य अनुमतियों — जैसे व्यापार अनुज्ञप्ति, भवन-पूर्णता प्रमाणपत्र एवं अधिभोग प्रमाणपत्र — की पूर्व-अपेक्षा है, अतः इसे अनुपालन योजना के प्रारंभिक चरणों में सम्मिलित किया जाना चाहिए।',
      'किसे आवश्यकता है: कोई भी वाणिज्यिक, औद्योगिक अथवा उच्च-अधिभोग परिसर — कार्यालय, कारखाने, गोदाम, होटल, रेस्तराँ तथा बहुमंजिला आवासीय भवन — सामान्यतः अधिभोग से पूर्व अग्नि सुरक्षा एनओसी की अपेक्षा रखते हैं, जिसकी सटीक सीमा (भवन की ऊँचाई, तल क्षेत्रफल, अधिभोग का प्रकार) संबंधित राज्य के अग्निशमन सेवा नियमों द्वारा निर्धारित होती है।',
      { heading: 'यह प्रक्रिया सामान्यतः चार चरणों में पूर्ण होती है' },
      {
        steps: [
          'स्थानीय अग्निशमन विभाग को भवन मानचित्रों एवं स्थल विवरण सहित आवेदन प्रस्तुत करना।',
          'अग्निशमन उपकरण, निकास द्वार तथा दमकल वाहनों की पहुँच के सत्यापन हेतु स्थल निरीक्षण।',
          'निरीक्षण में चिह्नित कमियों का सुधार।',
          'एनओसी का निर्गमन, जो सामान्यतः निश्चित अवधि हेतु वैध होता है तथा समाप्ति से पूर्व नवीनीकृत कराना आवश्यक है।',
        ],
      },
      'चूँकि यह एनओसी अनेक अन्य अनुमतियों से पूर्व आवश्यक है, इसमें होने वाला विलंब आगे की प्रक्रियाओं में भी विलंब उत्पन्न करता है। नए परिसर की योजना बना रहे अथवा नवीनीकरण करा रहे व्यवसायों के लिए इसे प्रारंभिक अनुपालन आवश्यकता मानना उचित है।',
    ],
  },
  {
    slug: 'udyam-registration-explained',
    contentType: 'Article',
    date: '2026-08-20',
    headline: 'UDYAM Registration, Explained',
    headlineHi: 'उद्यम पंजीकरण: एक विस्तृत विवरण',
    excerpt: 'What UDYAM registration is, who needs it, the benefits it unlocks and how it is obtained.',
    excerptHi: 'उद्यम पंजीकरण क्या है, इसकी आवश्यकता किसे है, इससे मिलने वाले लाभ, तथा इसे कैसे प्राप्त किया जाता है।',
    ...REG,
    body: [
      'UDYAM registration is the current framework under which micro, small and medium enterprises (MSMEs) in India are officially recognised by the Ministry of Micro, Small and Medium Enterprises. It replaced the earlier Udyog Aadhaar system, and registration is done online through the UDYAM portal using the applicant’s Aadhaar number and PAN.',
      'Classification as micro, small or medium is based on two criteria: investment in plant and machinery or equipment, and annual turnover. Both thresholds are periodically revised, so a business should confirm current limits at the time of applying.',
      { heading: 'Benefits of registration' },
      {
        steps: [
          'Eligibility for priority-sector lending.',
          'Protection against delayed payments under the MSMED Act, including references to the MSME Facilitation Council.',
          'Concessions on trademark and patent filing fees.',
          'Eligibility for tenders and schemes reserved for registered MSMEs.',
        ],
      },
      'There is no renewal requirement — the certificate is valid for the life of the enterprise — but turnover and investment figures are updated annually through cross-verification with Income Tax and GST records.',
    ],
    bodyHi: [
      'उद्यम पंजीकरण वह वर्तमान ढाँचा है जिसके अंतर्गत भारत में सूक्ष्म, लघु एवं मध्यम उद्यमों (एमएसएमई) को सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय द्वारा आधिकारिक मान्यता दी जाती है। इसने पूर्ववर्ती उद्योग आधार प्रणाली का स्थान लिया है, तथा पंजीकरण आवेदक के आधार क्रमांक एवं पैन के माध्यम से उद्यम पोर्टल पर ऑनलाइन होता है।',
      'सूक्ष्म, लघु अथवा मध्यम के रूप में वर्गीकरण दो मानदंडों पर आधारित है: संयंत्र एवं मशीनरी अथवा उपकरण में निवेश, तथा वार्षिक कारोबार। दोनों सीमाएँ समय-समय पर संशोधित होती हैं, अतः आवेदन के समय वर्तमान सीमाओं की पुष्टि करनी चाहिए।',
      { heading: 'पंजीकरण के लाभ' },
      {
        steps: [
          'प्राथमिकता-क्षेत्र ऋण हेतु पात्रता।',
          'एमएसएमईडी अधिनियम के अंतर्गत विलंबित भुगतान से संरक्षण, एमएसएमई सुविधा परिषद को संदर्भ सहित।',
          'ट्रेडमार्क एवं पेटेंट आवेदन शुल्क में रियायत।',
          'पंजीकृत एमएसएमई हेतु आरक्षित निविदाओं एवं योजनाओं की पात्रता।',
        ],
      },
      'नवीनीकरण की आवश्यकता नहीं है — प्रमाणपत्र उद्यम के जीवनकाल तक वैध रहता है — किंतु कारोबार एवं निवेश के आँकड़े आयकर एवं जीएसटी अभिलेखों से क्रॉस-सत्यापन द्वारा प्रतिवर्ष अद्यतन होते हैं।',
    ],
  },
  {
    slug: 'shops-establishment-registration-explained',
    contentType: 'Article',
    date: '2026-08-05',
    headline: 'Shops and Establishment Registration: The First Filing for Any Commercial Premises',
    headlineHi: 'दुकान एवं स्थापना पंजीकरण: किसी भी वाणिज्यिक परिसर का प्रथम दाखिला',
    excerpt: 'The registration most commercial premises need first — and the other licences that usually follow it.',
    excerptHi: 'अधिकांश वाणिज्यिक परिसरों को सबसे पहले आवश्यक पंजीकरण — और उसके पश्चात सामान्यतः आवश्यक अन्य अनुज्ञप्तियाँ।',
    ...REG,
    body: [
      'Shops and Establishment (Gumasta) registration is typically the first statutory registration a commercial premises needs — offices, retail shops, restaurants and most other commercial establishments fall within its scope, with the specific rules set by the state in which the premises operates.',
      'Registration is usually required within a short window of commencing business and covers working hours, holidays, leave entitlements and conditions of employment. A business operating in more than one state must register separately in each.',
      { heading: 'Registrations that commonly follow' },
      {
        steps: [
          'Trade licence and municipal permissions.',
          'GST registration.',
          'FSSAI licence for food businesses.',
          'Fire Safety NOC, depending on the premises.',
          'UDYAM (MSME) registration.',
          'Labour registrations (PF, ESI) once staffing thresholds are crossed.',
          'Sector-specific licences — for example RERA for real estate, or a Money-Lender (Sahukar) licence for lending businesses.',
        ],
      },
      'Operating without registration, or letting it lapse, can attract penalties and complicate other approvals, since several licences ask for proof of Shops and Establishment registration as a supporting document.',
    ],
    bodyHi: [
      'दुकान एवं स्थापना (गुमाश्ता) पंजीकरण सामान्यतः किसी वाणिज्यिक परिसर हेतु आवश्यक प्रथम सांविधिक पंजीकरण है — कार्यालय, खुदरा दुकानें, रेस्तराँ तथा अधिकांश अन्य वाणिज्यिक प्रतिष्ठान इसके दायरे में आते हैं, तथा विशिष्ट नियम उस राज्य द्वारा निर्धारित होते हैं जहाँ परिसर संचालित है।',
      'व्यवसाय आरंभ करने के अल्प समय के भीतर पंजीकरण सामान्यतः आवश्यक होता है, तथा इसमें कार्य के घंटे, अवकाश, छुट्टी के अधिकार एवं सेवा-शर्तें सम्मिलित हैं। एक से अधिक राज्यों में संचालित व्यवसाय को प्रत्येक राज्य में पृथक पंजीकरण कराना होता है।',
      { heading: 'सामान्यतः इसके पश्चात आवश्यक पंजीकरण' },
      {
        steps: [
          'व्यापार अनुज्ञप्ति एवं नगरीय अनुमतियाँ।',
          'जीएसटी पंजीकरण।',
          'खाद्य व्यवसायों हेतु एफएसएसएआई अनुज्ञप्ति।',
          'परिसर के अनुसार अग्नि सुरक्षा एनओसी।',
          'उद्यम (एमएसएमई) पंजीकरण।',
          'कर्मचारी संख्या की सीमा पार होने पर श्रम पंजीकरण (पीएफ, ईएसआई)।',
          'क्षेत्र-विशिष्ट अनुज्ञप्तियाँ — उदाहरणार्थ रियल एस्टेट हेतु रेरा, अथवा उधारी व्यवसाय हेतु साहूकार अनुज्ञप्ति।',
        ],
      },
      'बिना पंजीकरण संचालन अथवा उसे व्यपगत होने देना शास्ति को आमंत्रित कर सकता है तथा अन्य अनुमतियों को जटिल बना सकता है, क्योंकि अनेक अनुज्ञप्तियाँ सहायक दस्तावेज़ के रूप में इस पंजीकरण का प्रमाण माँगती हैं।',
    ],
  },
]

export const insightsBySlug: Record<string, InsightRecord> = Object.fromEntries(
  insights.map((i) => [i.slug, i])
)
