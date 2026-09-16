export interface PracticeAreaDetail {
  slug: string
  title: string
  titleHi: string
  summary: string
  summaryHi: string
  overview: string[]
  overviewHi: string[]
  specificServices: string[]
  specificServicesHi: string[]
  teamSlugs: string[]
  image: string
}

// Deterministic placeholder photography (seeded by slug) pending real firm
// photography — see design/design-system.md §9.
function placeholderImage(slug: string, width = 1200, height = 900) {
  return `https://picsum.photos/seed/prasanghi-${slug}/${width}/${height}`
}

// Content follows the specificity-first approach validated in
// research/competitor-analysis-secondary.md (name exact services, not just
// category labels). Overview prose is a founder-notes-derived starting
// point — see project_requirements.md §3 — pending final review.
//
// Hindi fields (*Hi) are formal/legal-register translations for the
// EN/HI toggle (site-header.tsx LanguageToggle) — not machine-literal,
// written the way an Indian legal-services site actually reads in Hindi.
export const practiceAreaDetails: Record<string, PracticeAreaDetail> = {
  litigation: {
    slug: 'litigation',
    title: 'Litigation',
    titleHi: 'वाद-विवाद (लिटिगेशन)',
    summary:
      'Civil and criminal representation before subordinate courts, matched to the forum and the stakes of the matter.',
    summaryHi:
      'अधीनस्थ न्यायालयों में सिविल एवं आपराधिक मामलों का प्रतिनिधित्व, मामले की प्रकृति व गंभीरता के अनुरूप।',
    overview: [
      'PraSanghi represents individuals and businesses in civil and criminal proceedings before subordinate courts across the jurisdictions we practice in.',
      'Matters are prepared and argued by the advocate assigned to them from the outset — not handed between unfamiliar staff as a case moves through a court calendar.',
    ],
    overviewHi: [
      'प्रासंघी उन सभी क्षेत्राधिकारों के अधीनस्थ न्यायालयों में, जहाँ हम कार्यरत हैं, व्यक्तियों एवं व्यवसायों का सिविल तथा आपराधिक कार्यवाहियों में प्रतिनिधित्व करता है।',
      'प्रत्येक मामले की तैयारी एवं पैरवी प्रारंभ से अंत तक उसी नियुक्त अधिवक्ता द्वारा की जाती है — न कि मामला आगे बढ़ने पर अपरिचित स्टाफ के बीच स्थानांतरित किया जाता है।',
    ],
    specificServices: [
      'Civil suits and recovery proceedings',
      'Criminal defence and complaint proceedings',
      'Bail applications and remand matters',
      'Appearance before subordinate and district courts',
    ],
    specificServicesHi: [
      'सिविल वाद एवं वसूली कार्यवाही',
      'आपराधिक बचाव एवं परिवाद कार्यवाही',
      'जमानत आवेदन एवं रिमांड संबंधी मामले',
      'अधीनस्थ एवं जिला न्यायालयों में पैरवी',
    ],
    teamSlugs: ['rajwardhan-gawde'],
    image: placeholderImage('litigation'),
  },
  'supreme-court-high-court-practice': {
    slug: 'supreme-court-high-court-practice',
    title: 'Supreme Court & High Court Practice',
    titleHi: 'उच्चतम न्यायालय एवं उच्च न्यायालय व्यवहार',
    summary:
      'Representation and appellate strategy before the Supreme Court of India and High Courts.',
    summaryHi: 'भारत के उच्चतम न्यायालय एवं उच्च न्यायालयों में प्रतिनिधित्व तथा अपीलीय रणनीति।',
    overview: [
      'Matters that escalate beyond subordinate courts are handled with the same advocate continuity as any other engagement at PraSanghi — the team that took the brief argues the appeal.',
      'This practice covers writ petitions, appellate matters, and constitutional questions referred to a High Court or the Supreme Court of India.',
    ],
    overviewHi: [
      'अधीनस्थ न्यायालयों से आगे बढ़ने वाले मामलों को भी प्रासंघी में उसी अधिवक्ता निरंतरता के साथ संभाला जाता है — जिस टीम ने ब्रीफ स्वीकार किया, वही अपील की पैरवी करती है।',
      'यह प्रैक्टिस उच्च न्यायालय या भारत के उच्चतम न्यायालय के समक्ष प्रस्तुत रिट याचिकाओं, अपीलीय मामलों तथा संवैधानिक प्रश्नों को समाहित करती है।',
    ],
    specificServices: [
      'Writ petitions',
      'First and second appeals',
      'Special Leave Petitions',
      'Constitutional and regulatory challenges',
    ],
    specificServicesHi: [
      'रिट याचिकाएँ',
      'प्रथम एवं द्वितीय अपील',
      'विशेष अनुमति याचिका (एसएलपी)',
      'संवैधानिक एवं नियामक चुनौतियाँ',
    ],
    teamSlugs: ['rajwardhan-gawde'],
    image: placeholderImage('supreme-court'),
  },
  'arbitration-dispute-resolution': {
    slug: 'arbitration-dispute-resolution',
    title: 'Arbitration & Dispute Resolution',
    titleHi: 'मध्यस्थता एवं विवाद समाधान',
    summary:
      'Domestic arbitration and alternative dispute resolution, including through our affiliation with the Adjudix Dispute Resolution Institute.',
    summaryHi:
      'घरेलू मध्यस्थता तथा वैकल्पिक विवाद समाधान, जिसमें Adjudix Dispute Resolution Institute के साथ हमारी सहबद्धता भी सम्मिलित है।',
    overview: [
      'PraSanghi advises on pre-arbitration strategy, represents clients during arbitral proceedings, and assists with enforcement of awards.',
      'This page reflects an inference from the firm’s affiliation with the Adjudix Dispute Resolution Institute (ADRI) and is pending explicit confirmation from the founder — see project_requirements.md §10 and planning/sitemap.md.',
    ],
    overviewHi: [
      'प्रासंघी मध्यस्थता-पूर्व रणनीति पर सलाह देता है, मध्यस्थ कार्यवाही के दौरान पक्षकारों का प्रतिनिधित्व करता है, तथा अधिनिर्णयों (अवार्ड) के प्रवर्तन में सहायता करता है।',
      'यह विवरण फर्म की Adjudix Dispute Resolution Institute (ADRI) से सहबद्धता के आधार पर एक अनुमान है तथा संस्थापक से स्पष्ट पुष्टि की प्रतीक्षा में है।',
    ],
    specificServices: [
      'Pre-arbitration strategy and notice drafting',
      'Representation in arbitral proceedings',
      'Enforcement and challenge of arbitral awards',
      'Mediation and conciliation',
    ],
    specificServicesHi: [
      'मध्यस्थता-पूर्व रणनीति एवं सूचना प्रारूपण',
      'मध्यस्थ कार्यवाही में प्रतिनिधित्व',
      'मध्यस्थ अधिनिर्णयों का प्रवर्तन एवं चुनौती',
      'मध्यस्थता (मीडिएशन) एवं सुलह',
    ],
    teamSlugs: [],
    image: placeholderImage('arbitration'),
  },
  'regulatory-advisory': {
    slug: 'regulatory-advisory',
    title: 'Regulatory & Advisory',
    titleHi: 'नियामक एवं सलाहकार सेवाएँ',
    summary:
      'Certifications, statutory registrations, and compliance counsel — named specifically, not bundled as a generic service.',
    summaryHi:
      'प्रमाणन, सांविधिक पंजीकरण एवं अनुपालन परामर्श — विशेष रूप से सूचीबद्ध, न कि किसी सामान्य सेवा में समाहित।',
    overview: [
      'This practice is treated with the same design and depth as litigation, per PraSanghi’s positioning as one full-service brand rather than a firm that discounts its compliance work.',
      'It covers the certifications and registrations businesses need to operate lawfully, plus ongoing regulatory advisory.',
    ],
    overviewHi: [
      'इस प्रैक्टिस को वाद-विवाद जितनी ही गहनता एवं महत्व दिया जाता है, क्योंकि प्रासंघी स्वयं को एक पूर्ण-सेवा फर्म के रूप में स्थापित करता है, न कि ऐसी फर्म जो अनुपालन कार्य को गौण माने।',
      'इसमें व्यवसायों को वैध रूप से संचालित होने हेतु आवश्यक प्रमाणन एवं पंजीकरण, साथ ही सतत नियामक परामर्श शामिल है।',
    ],
    specificServices: [
      'Fire Safety NOC and certification',
      'UDYAM (MSME) registration',
      'Shops and Establishment registration',
      'Statutory and regulatory compliance advisory',
    ],
    specificServicesHi: [
      'अग्नि सुरक्षा अनापत्ति प्रमाणपत्र (एनओसी) एवं प्रमाणन',
      'उद्यम (एमएसएमई) पंजीकरण',
      'दुकान एवं प्रतिष्ठान पंजीकरण',
      'सांविधिक एवं नियामक अनुपालन परामर्श',
    ],
    teamSlugs: [],
    image: placeholderImage('regulatory'),
  },
  'contract-drafting-commercial-advisory': {
    slug: 'contract-drafting-commercial-advisory',
    title: 'Contract Drafting & Commercial Advisory',
    titleHi: 'संविदा प्रारूपण एवं वाणिज्यिक परामर्श',
    summary:
      'Drafting and review of the commercial agreements a growing business actually signs.',
    summaryHi: 'किसी बढ़ते हुए व्यवसाय द्वारा वास्तव में हस्ताक्षरित वाणिज्यिक अनुबंधों का प्रारूपण एवं समीक्षा।',
    overview: [
      'PraSanghi drafts and reviews commercial agreements with the same specificity-first approach used across the practice — naming the actual document types a client needs, not a generic "contract services" label.',
    ],
    overviewHi: [
      'प्रासंघी वाणिज्यिक अनुबंधों का प्रारूपण एवं समीक्षा उसी विशिष्टता-प्रथम दृष्टिकोण से करता है जो पूरी प्रैक्टिस में अपनाया जाता है — ग्राहक को आवश्यक वास्तविक दस्तावेज़ों के प्रकार बताते हुए, न कि किसी सामान्य "संविदा सेवा" शीर्षक के अंतर्गत।',
    ],
    specificServices: [
      'Vendor and supply agreements',
      'Service agreements and statements of work',
      'Non-disclosure and confidentiality agreements',
      'Partnership and LLP agreements',
    ],
    specificServicesHi: [
      'विक्रेता एवं आपूर्ति अनुबंध',
      'सेवा अनुबंध एवं कार्य विवरण (एसओडब्ल्यू)',
      'गोपनीयता अनुबंध (एनडीए)',
      'साझेदारी एवं एलएलपी अनुबंध',
    ],
    teamSlugs: [],
    image: placeholderImage('contracts'),
  },
  'legal-drafting-documentation': {
    slug: 'legal-drafting-documentation',
    title: 'Legal Drafting & Documentation',
    titleHi: 'विधिक प्रारूपण एवं प्रलेखन',
    summary:
      'Precise drafting for the notices, agreements, affidavits, and land-related filings that need to be right the first time.',
    summaryHi:
      'नोटिस, अनुबंध, शपथ-पत्र एवं भूमि-संबंधी दाखिलों का सटीक प्रारूपण, जो पहली बार में ही निर्दोष होना आवश्यक है।',
    overview: [
      'From a legal notice before filing a civil case to a land-revenue filing before a Tahasildar, PraSanghi drafts the documents individuals and businesses actually need — named specifically, not bundled under a generic "documentation services" label.',
    ],
    overviewHi: [
      'सिविल वाद दायर करने से पूर्व की विधिक सूचना से लेकर तहसीलदार के समक्ष भू-राजस्व दाखिले तक, प्रासंघी व्यक्तियों एवं व्यवसायों की वास्तविक आवश्यकता के दस्तावेज़ तैयार करता है — विशेष रूप से नामित, न कि किसी सामान्य "प्रलेखन सेवा" के अंतर्गत।',
    ],
    specificServices: [
      'Legal notice before filing a civil case',
      'Prenuptial agreements',
      'Caveat filing',
      'MOU (Memorandum of Understanding) drafting',
      'Affidavit drafting (all types)',
      'Legal online search reports',
      'Legal business valuation and mapping reports',
      'Public (paper) notice drafting',
      'Sale deed drafting and registration',
      'Import and export contracts and agreements',
      'Non-agricultural (NA) conversion of agricultural land',
      'Land satellite mapping reports',
      'Tahasildar and Prant office matters',
    ],
    specificServicesHi: [
      'सिविल वाद दायर करने से पूर्व विधिक सूचना (लीगल नोटिस)',
      'विवाह-पूर्व अनुबंध (प्रीनप्शियल एग्रीमेंट)',
      'केविएट दाखिल करना',
      'समझौता ज्ञापन (एमओयू) प्रारूपण',
      'शपथ-पत्र प्रारूपण (सभी प्रकार)',
      'विधिक ऑनलाइन खोज रिपोर्ट',
      'विधिक व्यवसाय मूल्यांकन एवं मानचित्रण रिपोर्ट',
      'सार्वजनिक (समाचार-पत्र) सूचना प्रारूपण',
      'विक्रय-पत्र (सेल डीड) प्रारूपण एवं पंजीकरण',
      'आयात-निर्यात संविदाएँ एवं अनुबंध',
      'कृषि भूमि का अकृषिक (एनए) रूपांतरण',
      'भूमि उपग्रह मानचित्रण रिपोर्ट',
      'तहसीलदार एवं प्रांत कार्यालय संबंधी मामले',
    ],
    teamSlugs: [],
    image: placeholderImage('legal-drafting-documents'),
  },
  'start-up-support': {
    slug: 'start-up-support',
    title: 'Start-Up Support',
    titleHi: 'स्टार्ट-अप सहायता',
    summary:
      'Legal groundwork for founders — entity selection, incorporation, and the agreements an early-stage business needs first.',
    summaryHi:
      'संस्थापकों हेतु विधिक आधार — संस्था के स्वरूप का चयन, निगमन, तथा आरंभिक चरण के व्यवसाय हेतु आवश्यक प्रारंभिक अनुबंध।',
    overview: [
      'PraSanghi advises founders on the legal decisions that come before a start-up can operate: how to structure the entity, what to put in writing with co-founders, and which registrations are required from day one.',
    ],
    overviewHi: [
      'प्रासंघी संस्थापकों को उन विधिक निर्णयों पर सलाह देता है जो किसी स्टार्ट-अप के संचालन से पूर्व आवश्यक होते हैं: संस्था की संरचना कैसे हो, सह-संस्थापकों के साथ क्या लिखित रूप में तय किया जाए, तथा प्रारंभ से ही कौन-से पंजीकरण आवश्यक हैं।',
    ],
    specificServices: [
      'Entity selection and incorporation (company or LLP)',
      'Founders’ and co-founder agreements',
      'Early-stage regulatory and licensing compliance',
      'Term sheet and early-investment documentation',
    ],
    specificServicesHi: [
      'संस्था स्वरूप चयन एवं निगमन (कंपनी अथवा एलएलपी)',
      'संस्थापक एवं सह-संस्थापक अनुबंध',
      'आरंभिक चरण का नियामक एवं लाइसेंसिंग अनुपालन',
      'टर्म शीट एवं आरंभिक निवेश प्रलेखन',
    ],
    teamSlugs: [],
    image: placeholderImage('start-up-support'),
  },
  'corporate-law': {
    slug: 'corporate-law',
    title: 'Corporate Law',
    titleHi: 'कॉर्पोरेट विधि',
    summary:
      'Governance, structuring, and statutory compliance counsel for companies at every stage.',
    summaryHi: 'प्रत्येक चरण की कंपनियों हेतु शासन (गवर्नेंस), संरचना एवं सांविधिक अनुपालन परामर्श।',
    overview: [
      'PraSanghi advises companies and their boards on governance and structuring matters, and on the statutory compliance obligations that come with running a registered company.',
    ],
    overviewHi: [
      'प्रासंघी कंपनियों तथा उनके निदेशक मंडलों को शासन एवं संरचना संबंधी विषयों पर, तथा एक पंजीकृत कंपनी के संचालन से जुड़े सांविधिक अनुपालन दायित्वों पर सलाह देता है।',
    ],
    specificServices: [
      'Corporate governance advisory',
      'Company structuring and restructuring',
      'Board and shareholder resolution drafting',
      'Statutory compliance under the Companies Act',
    ],
    specificServicesHi: [
      'कॉर्पोरेट गवर्नेंस परामर्श',
      'कंपनी संरचना एवं पुनर्गठन',
      'निदेशक मंडल एवं शेयरधारक संकल्प प्रारूपण',
      'कंपनी अधिनियम के अंतर्गत सांविधिक अनुपालन',
    ],
    teamSlugs: [],
    image: placeholderImage('corporate-law'),
  },
  'debt-recovery-management': {
    slug: 'debt-recovery-management',
    title: 'Debt Recovery & Management',
    titleHi: 'ऋण वसूली एवं प्रबंधन',
    summary: 'Demand notices, negotiated settlements, and recovery proceedings for unpaid dues.',
    summaryHi: 'बकाया राशि हेतु मांग सूचना, समझौता-आधारित निपटान, तथा वसूली कार्यवाही।',
    overview: [
      'PraSanghi assists individuals and businesses in recovering money owed to them — from an initial demand notice through negotiated settlement or, where necessary, a recovery suit.',
    ],
    overviewHi: [
      'प्रासंघी व्यक्तियों एवं व्यवसायों को उनकी बकाया राशि वसूलने में सहायता करता है — प्रारंभिक मांग सूचना से लेकर समझौता-आधारित निपटान अथवा, आवश्यकता पड़ने पर, वसूली वाद तक।',
    ],
    specificServices: [
      'Recovery notices and demand letters',
      'Negotiated settlement of outstanding dues',
      'Money recovery suits',
      'Security and loan documentation review',
    ],
    specificServicesHi: [
      'वसूली सूचना एवं मांग पत्र',
      'बकाया राशि का समझौता-आधारित निपटान',
      'धन वसूली वाद',
      'प्रतिभूति एवं ऋण प्रलेखन समीक्षा',
    ],
    teamSlugs: [],
    image: placeholderImage('debt-recovery'),
  },
  'intellectual-property-rights': {
    slug: 'intellectual-property-rights',
    title: 'Intellectual Property Rights',
    titleHi: 'बौद्धिक संपदा अधिकार',
    summary:
      'Registration and protection for the trademarks, copyrights, and inventions a business relies on.',
    summaryHi: 'व्यवसाय द्वारा उपयोग किए जाने वाले ट्रेडमार्क, कॉपीराइट एवं आविष्कारों का पंजीकरण तथा संरक्षण।',
    overview: [
      'PraSanghi assists with identifying and registering protectable intellectual property, and represents clients in disputes where that property has been infringed.',
    ],
    overviewHi: [
      'प्रासंघी संरक्षणीय बौद्धिक संपदा की पहचान एवं पंजीकरण में सहायता करता है, तथा उसके उल्लंघन संबंधी विवादों में पक्षकारों का प्रतिनिधित्व करता है।',
    ],
    specificServices: [
      'Trademark registration and brand protection',
      'Copyright registration',
      'Patent and design registration assistance',
      'IP infringement disputes',
    ],
    specificServicesHi: [
      'ट्रेडमार्क पंजीकरण एवं ब्रांड संरक्षण',
      'कॉपीराइट पंजीकरण',
      'पेटेंट एवं डिज़ाइन पंजीकरण सहायता',
      'बौद्धिक संपदा उल्लंघन विवाद',
    ],
    teamSlugs: [],
    image: placeholderImage('intellectual-property'),
  },
  'employment-law': {
    slug: 'employment-law',
    title: 'Employment Law',
    titleHi: 'श्रम एवं सेवायोजन विधि',
    summary: 'Employment contracts, workplace compliance, and representation in labour disputes.',
    summaryHi: 'सेवायोजन अनुबंध, कार्यस्थल अनुपालन, तथा श्रम विवादों में प्रतिनिधित्व।',
    overview: [
      'PraSanghi advises employers and employees on employment documentation, workplace compliance with labour law, and disputes arising from termination or separation.',
    ],
    overviewHi: [
      'प्रासंघी नियोक्ताओं एवं कर्मचारियों को सेवायोजन प्रलेखन, श्रम विधि अनुपालन, तथा सेवा-समाप्ति या पृथक्करण से उत्पन्न विवादों पर सलाह देता है।',
    ],
    specificServices: [
      'Employment contracts and workplace policies',
      'Labour law compliance advisory',
      'Termination and severance matters',
      'Representation in labour disputes',
    ],
    specificServicesHi: [
      'सेवायोजन अनुबंध एवं कार्यस्थल नीतियाँ',
      'श्रम विधि अनुपालन परामर्श',
      'सेवा-समाप्ति एवं प्रतिकर संबंधी मामले',
      'श्रम विवादों में प्रतिनिधित्व',
    ],
    teamSlugs: [],
    image: placeholderImage('employment-law'),
  },
}

export const practiceAreaSlugs = Object.keys(practiceAreaDetails)
