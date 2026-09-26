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
  // Plain-language client scenarios, not formal service names — the
  // "Other Legal Support" pattern from research/competitor-analysis-secondary.md
  // (White Collar Legal Company). Optional: only present where it adds a
  // distinct layer over specificServices, not duplicated on every area.
  commonSituations?: string[]
  commonSituationsHi?: string[]
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
    commonSituations: [
      'A false police complaint (FIR) has been filed against you',
      'You are facing harassment or pressure from the police during an investigation',
      'You have been detained without being told why',
    ],
    commonSituationsHi: [
      'आपके विरुद्ध एक झूठी पुलिस शिकायत (एफआईआर) दर्ज कराई गई है',
      'जांच के दौरान आपको पुलिस द्वारा उत्पीड़न अथवा दबाव का सामना करना पड़ रहा है',
      'आपको बिना कारण बताए हिरासत में लिया गया है',
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
      'Franchising and reseller/distribution agreements',
      'Term sheets for equity-linked investment',
      'Share subscription and shareholder agreements',
      'Strategic alliance and joint venture agreements',
      'Transaction documentation for B2B and B2C (single-brand/multi-brand) e-commerce',
    ],
    specificServicesHi: [
      'विक्रेता एवं आपूर्ति अनुबंध',
      'सेवा अनुबंध एवं कार्य विवरण (एसओडब्ल्यू)',
      'गोपनीयता अनुबंध (एनडीए)',
      'साझेदारी एवं एलएलपी अनुबंध',
      'फ्रैंचाइज़िंग एवं पुनर्विक्रेता/वितरण अनुबंध',
      'इक्विटी-लिंक्ड निवेश हेतु टर्म शीट',
      'शेयर अभिदान (सब्सक्रिप्शन) एवं शेयरधारक अनुबंध',
      'रणनीतिक गठबंधन एवं संयुक्त उद्यम (जॉइंट वेंचर) अनुबंध',
      'बी2बी एवं बी2सी (सिंगल-ब्रांड/मल्टी-ब्रांड) ई-कॉमर्स हेतु लेनदेन प्रलेखन',
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
    commonSituations: [
      'A builder is delaying handover of a flat or unit you have already paid for',
      'Someone has encroached on your land, or your ownership itself is disputed',
      'A builder has not delivered the amenities promised at the time of sale',
      'You need agricultural land converted for non-agricultural use before building or selling',
    ],
    commonSituationsHi: [
      'किसी बिल्डर द्वारा पहले ही भुगतान किए गए फ्लैट अथवा यूनिट का कब्ज़ा देने में देरी की जा रही है',
      'आपकी भूमि पर अतिक्रमण हो गया है, अथवा स्वयं स्वामित्व को लेकर विवाद है',
      'बिल्डर द्वारा बिक्री के समय वादा की गई सुविधाएँ उपलब्ध नहीं कराई गई हैं',
      'निर्माण अथवा बिक्री से पूर्व कृषि भूमि को अकृषिक उपयोग हेतु रूपांतरित कराना आवश्यक है',
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
      'Mergers and acquisitions',
      'Pre-investment and due-diligence regulatory analysis',
      'Hybrid equity-linked arrangements (services-for-equity, ad-for-equity)',
      'Advisory for foundation-stage and growth-stage companies',
    ],
    specificServicesHi: [
      'कॉर्पोरेट गवर्नेंस परामर्श',
      'कंपनी संरचना एवं पुनर्गठन',
      'निदेशक मंडल एवं शेयरधारक संकल्प प्रारूपण',
      'कंपनी अधिनियम के अंतर्गत सांविधिक अनुपालन',
      'विलय एवं अधिग्रहण (मर्जर एवं एक्विजिशन)',
      'निवेश-पूर्व एवं ड्यू-डिलिजेंस नियामक विश्लेषण',
      'हाइब्रिड इक्विटी-लिंक्ड व्यवस्थाएँ (सर्विसेज़-फॉर-इक्विटी, ऐड-फॉर-इक्विटी)',
      'आरंभिक-चरण एवं विकास-चरण की कंपनियों हेतु परामर्श',
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
    commonSituations: [
      'Someone has borrowed money from you and is refusing to repay',
      'A business partner has not returned funds you invested',
      'A cheque given to you has bounced',
      'A partner is misusing business funds or has breached the partnership agreement',
    ],
    commonSituationsHi: [
      'किसी व्यक्ति ने आपसे धन उधार लिया है और अब चुकाने से इनकार कर रहा है',
      'किसी व्यावसायिक साझेदार ने आपके निवेश की गई राशि वापस नहीं की है',
      'आपको प्राप्त एक चेक अनादरित (बाउंस) हो गया है',
      'कोई साझेदार व्यावसायिक निधि का दुरुपयोग कर रहा है अथवा साझेदारी अनुबंध का उल्लंघन कर रहा है',
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
    commonSituations: [
      'You were terminated without notice or a fair process',
      'Your salary has gone unpaid for one or more months',
      'An employer is withholding your full and final settlement after resignation',
      'You are being asked to work under terms that don’t match what you agreed to',
    ],
    commonSituationsHi: [
      'आपको बिना सूचना अथवा उचित प्रक्रिया के सेवा से हटाया गया है',
      'एक अथवा अधिक माह का वेतन भुगतान नहीं किया गया है',
      'त्यागपत्र के पश्चात नियोक्ता द्वारा पूर्ण एवं अंतिम निपटान (फुल एंड फाइनल सेटलमेंट) रोका जा रहा है',
      'आपसे उन शर्तों पर कार्य कराया जा रहा है जो सहमति में तय शर्तों से मेल नहीं खातीं',
    ],
    teamSlugs: [],
    image: placeholderImage('employment-law'),
  },
  // Scope confirmed directly (not founder-notes-derived like the areas
  // above) — see research/competitor-analysis-secondary.md's "Other Legal
  // Support" pattern from White Collar Legal Company, adopted for PraSanghi
  // 2026-09-17 after confirming the firm actually takes these matters.
  'family-matrimonial': {
    slug: 'family-matrimonial',
    title: 'Family & Matrimonial',
    titleHi: 'पारिवारिक एवं वैवाहिक विधि',
    summary:
      'Representation and counsel in divorce, custody, and domestic matters, handled with discretion.',
    summaryHi: 'विवाह-विच्छेद, अभिरक्षा (कस्टडी) एवं पारिवारिक मामलों में प्रतिनिधित्व तथा परामर्श, पूर्ण गोपनीयता के साथ।',
    overview: [
      'PraSanghi represents individuals through divorce, custody, and maintenance proceedings, and drafts the agreements that prevent family disputes from becoming litigation in the first place.',
    ],
    overviewHi: [
      'प्रासंघी व्यक्तियों का विवाह-विच्छेद, अभिरक्षा एवं भरण-पोषण संबंधी कार्यवाहियों में प्रतिनिधित्व करता है, तथा ऐसे अनुबंध तैयार करता है जो पारिवारिक विवादों को वाद में बदलने से पूर्व ही रोकते हैं।',
    ],
    specificServices: [
      'Divorce petitions (contested and mutual consent)',
      'Child custody and visitation matters',
      'Maintenance and alimony claims',
      'Prenuptial agreements',
      'Domestic violence proceedings',
    ],
    specificServicesHi: [
      'विवाह-विच्छेद याचिका (विवादित एवं पारस्परिक सहमति दोनों)',
      'बाल अभिरक्षा एवं भेंट-मुलाकात संबंधी मामले',
      'भरण-पोषण एवं गुज़ारा-भत्ता दावे',
      'विवाह-पूर्व अनुबंध (प्रीनप्शियल एग्रीमेंट)',
      'घरेलू हिंसा संबंधी कार्यवाही',
    ],
    commonSituations: [
      'You are going through a divorce, contested or by mutual consent',
      'There is a dispute over custody of, or visitation with, a child',
      'You are facing domestic violence and need protection or relief',
      'A spouse is not paying agreed or court-ordered maintenance',
    ],
    commonSituationsHi: [
      'आप विवादित अथवा पारस्परिक सहमति से विवाह-विच्छेद की प्रक्रिया में हैं',
      'किसी बच्चे की अभिरक्षा अथवा भेंट-मुलाकात को लेकर विवाद है',
      'आप घरेलू हिंसा का सामना कर रहे हैं और संरक्षण अथवा राहत चाहते हैं',
      'जीवनसाथी सहमत अथवा न्यायालय-आदेशित भरण-पोषण राशि नहीं दे रहा/रही है',
    ],
    teamSlugs: [],
    image: placeholderImage('family-matrimonial'),
  },
  'consumer-protection': {
    slug: 'consumer-protection',
    title: 'Consumer Protection',
    titleHi: 'उपभोक्ता संरक्षण',
    summary: 'Redress for defective products, denied insurance claims, and disputes with service providers.',
    summaryHi: 'दोषपूर्ण उत्पादों, अस्वीकृत बीमा दावों एवं सेवा प्रदाताओं के साथ विवादों हेतु निवारण।',
    overview: [
      'PraSanghi represents individuals and businesses before consumer commissions when a product, service, or insurer has failed to deliver what was promised.',
    ],
    overviewHi: [
      'जब कोई उत्पाद, सेवा अथवा बीमाकर्ता वादा किए गए के अनुरूप कार्य नहीं करता, तब प्रासंघी उपभोक्ता आयोगों के समक्ष व्यक्तियों एवं व्यवसायों का प्रतिनिधित्व करता है।',
    ],
    specificServices: [
      'Consumer complaints before District and State Consumer Commissions',
      'Defective product and deficient service claims',
      'Insurance claim denial disputes',
      'Disputes with airlines, travel operators, and e-commerce platforms',
    ],
    specificServicesHi: [
      'जिला एवं राज्य उपभोक्ता आयोगों के समक्ष उपभोक्ता परिवाद',
      'दोषपूर्ण उत्पाद एवं न्यूनतापूर्ण सेवा संबंधी दावे',
      'बीमा दावा अस्वीकृति संबंधी विवाद',
      'एयरलाइन, यात्रा संचालकों एवं ई-कॉमर्स प्लेटफॉर्म के साथ विवाद',
    ],
    commonSituations: [
      'A product you bought turned out to be defective and the seller won’t help',
      'An insurance company has rejected a claim you believe is valid',
      'An airline or travel company has failed to deliver what you paid for',
      'A service provider has failed to deliver what was promised',
    ],
    commonSituationsHi: [
      'आपके द्वारा खरीदा गया उत्पाद दोषपूर्ण निकला और विक्रेता सहायता नहीं कर रहा',
      'बीमा कंपनी ने एक ऐसा दावा अस्वीकार किया है जिसे आप वैध मानते हैं',
      'किसी एयरलाइन अथवा यात्रा कंपनी ने भुगतान के बावजूद वादा की गई सेवा नहीं दी',
      'किसी सेवा प्रदाता ने वादा की गई सेवा प्रदान नहीं की',
    ],
    teamSlugs: [],
    image: placeholderImage('consumer-protection'),
  },
  'cyber-defamation': {
    slug: 'cyber-defamation',
    title: 'Cyber & Defamation',
    titleHi: 'साइबर एवं मानहानि विधि',
    summary: 'Protection against online defamation, impersonation, and cyber fraud.',
    summaryHi: 'ऑनलाइन मानहानि, प्रतिरूपण (इम्पर्सनेशन) एवं साइबर धोखाधड़ी के विरुद्ध संरक्षण।',
    overview: [
      'PraSanghi advises on defamation notices and IT Act complaints when a client’s reputation, identity, or finances have been attacked online.',
    ],
    overviewHi: [
      'जब किसी मुवक्किल की प्रतिष्ठा, पहचान अथवा वित्त को ऑनलाइन क्षति पहुँचाई जाती है, तब प्रासंघी मानहानि सूचना (डिफेमेशन नोटिस) एवं आईटी अधिनियम के अंतर्गत परिवादों पर सलाह देता है।',
    ],
    specificServices: [
      'Defamation notices and civil defamation suits',
      'Complaints under the Information Technology Act',
      'Response to fake profiles and impersonation',
      'Online financial fraud complaints',
    ],
    specificServicesHi: [
      'मानहानि सूचना एवं सिविल मानहानि वाद',
      'सूचना प्रौद्योगिकी अधिनियम के अंतर्गत परिवाद',
      'फ़र्ज़ी प्रोफाइल एवं प्रतिरूपण के विरुद्ध कार्यवाही',
      'ऑनलाइन वित्तीय धोखाधड़ी संबंधी परिवाद',
    ],
    commonSituations: [
      'False statements about you are being circulated on social media',
      'You are being impersonated through a fake profile or account',
      'Your photos or personal information are being used without consent',
      'You have lost money to an online financial fraud',
    ],
    commonSituationsHi: [
      'आपके विरुद्ध सोशल मीडिया पर झूठे बयान फैलाए जा रहे हैं',
      'किसी फ़र्ज़ी प्रोफाइल अथवा अकाउंट के माध्यम से आपका प्रतिरूपण किया जा रहा है',
      'आपकी तस्वीरों अथवा व्यक्तिगत जानकारी का बिना सहमति उपयोग किया जा रहा है',
      'आपने किसी ऑनलाइन वित्तीय धोखाधड़ी में धन गंवाया है',
    ],
    teamSlugs: [],
    image: placeholderImage('cyber-defamation'),
  },
  // Deliberate catch-all, not a filler card — see design-system.md §1 "no
  // fabricated scale": this stays honest and generic rather than inventing
  // a specific competency. Kept as a real PracticeAreaDetail entry (not
  // special-cased in the grid/modal) so it gets its own page, nav
  // placement, and sitemap entry for free, the same as any other area.
  'other-legal-matters': {
    slug: 'other-legal-matters',
    title: 'Other Legal Matters',
    titleHi: 'अन्य विधिक मामले',
    summary:
      'A matter that doesn’t fit neatly into a category above? Tell us about it — we’ll advise honestly on whether, and how, we can help.',
    summaryHi:
      'क्या आपका मामला उपरोक्त किसी श्रेणी में ठीक से फिट नहीं बैठता? हमें इसके बारे में बताएं — हम ईमानदारी से सलाह देंगे कि क्या और कैसे हम सहायता कर सकते हैं।',
    overview: [
      'Not every matter announces itself as a clean category, and PraSanghi would rather hear about it directly than have a prospective client guess which page to click.',
      'If it turns out to be outside what we handle, we’ll say so plainly rather than take on a brief we can’t serve well.',
    ],
    overviewHi: [
      'हर मामला किसी स्पष्ट श्रेणी में फिट नहीं बैठता, और प्रासंघी यह पसंद करेगा कि संभावित मुवक्किल अनुमान लगाने के बजाय सीधे हमसे संपर्क करे।',
      'यदि मामला हमारी कार्यक्षेत्र से बाहर है, तो हम स्पष्ट रूप से यह बता देंगे, बजाय ऐसा ब्रीफ स्वीकार करने के जिसे हम भली-भांति नहीं संभाल सकते।',
    ],
    specificServices: [
      'Matters spanning more than one practice area',
      'Situations you’re unsure how to categorize',
      'A first opinion on whether legal action is warranted at all',
    ],
    specificServicesHi: [
      'एक से अधिक प्रैक्टिस क्षेत्र से जुड़े मामले',
      'ऐसी स्थितियाँ जिन्हें आप वर्गीकृत करने में अनिश्चित हैं',
      'क्या विधिक कार्रवाई आवश्यक है भी या नहीं, इस पर प्रारंभिक राय',
    ],
    teamSlugs: [],
    image: placeholderImage('other-legal-matters'),
  },
}

export const practiceAreaSlugs = Object.keys(practiceAreaDetails)
