export interface PersonRecord {
  slug: string
  name: string
  /** Honorific shown on the profile header, e.g. "Adv." */
  role: string
  roleHi: string
  /** Office or responsibility line under the role, e.g. "Branch Head, Sardarpur". */
  designation?: string
  designationHi?: string
  isFounder?: boolean
  practiceTags: string[]
  practiceTagsHi: string[]
  /** Qualifications and appointments, verbatim from the Firm Profile where available. */
  credentials: string[]
  credentialsHi: string[]
  bio: string[]
  bioHi: string[]
  /**
   * Real headshot path under /public/team: client-supplied photo, AI-upscaled,
   * background replaced with the cream ground and the gold PS mark at 60%
   * (4:5, 800×1000). Without one the advocate is shown as an initials monogram.
   */
  photo?: string
}

export function initialsOf(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .filter((_, i, all) => i === 0 || i === all.length - 1)
    .join('')
    .toUpperCase()
}

// Source for Rajwardhan Gawde, Bhavesh Tiwari and Pankaj Giri Goswami:
// PraSanghi Firm Profile (2026), §02 Leadership & Core Counsel. Manoj Garg
// and Kavita Sharma: client's review notes (pp. 164–165). Other associates:
// written by us at the client's instruction ("make the bio for all by your own").
export const people: PersonRecord[] = [
  {
    slug: 'rajwardhan-gawde',
    name: 'Rajwardhan Gawde',
    photo: '/team/rajwardhan-gawde.webp',
    role: 'Founder & Senior Lead Counsel',
    roleHi: 'संस्थापक एवं वरिष्ठ प्रमुख अधिवक्ता',
    isFounder: true,
    practiceTags: [
      'Supreme Court & High Court Practice',
      'Administrative & Constitutional Law',
      'Arbitration & Dispute Resolution',
      'Corporate & Commercial',
    ],
    practiceTagsHi: [
      'उच्चतम न्यायालय एवं उच्च न्यायालय व्यवहार',
      'प्रशासनिक एवं संवैधानिक विधि',
      'माध्यस्थम् एवं विवाद समाधान',
      'कॉर्पोरेट एवं वाणिज्यिक',
    ],
    credentials: [
      'Government Advocate (G.A.), Hon’ble High Court of Madhya Pradesh',
      'Former Standing Counsel for the Union of India',
      'B.A. LL.B. (Hons.)',
      'LL.M. (Intellectual Property Rights)',
      'Diploma in Entrepreneurship',
      'Diploma in Cyber Security',
    ],
    credentialsHi: [
      'शासकीय अधिवक्ता (जी.ए.), माननीय मध्य प्रदेश उच्च न्यायालय',
      'भूतपूर्व स्थायी अधिवक्ता, भारत संघ',
      'बी.ए. एलएल.बी. (ऑनर्स)',
      'एलएल.एम. (बौद्धिक संपदा अधिकार)',
      'उद्यमिता में डिप्लोमा',
      'साइबर सुरक्षा में डिप्लोमा',
    ],
    bio: [
      'Rajwardhan Gawde is the Founder and Senior Lead Counsel of PraSanghi – The Legal Ladder LLP. He serves as Government Advocate before the Hon’ble High Court of Madhya Pradesh and has previously represented the Union of India as its Standing Counsel.',
      'He oversees the firm’s complex writ litigation, state administrative disputes, high-stakes commercial matters and constitutional advocacy, and leads its corporate and dispute-resolution mandates. He is also empanelled as an arbitrator with reputed ADR institutions.',
      'His academic grounding — an LL.M. in Intellectual Property Rights together with diplomas in Entrepreneurship and Cyber Security — informs the firm’s work for businesses, start-ups and technology clients, where courtroom experience and commercial understanding are needed in equal measure.',
    ],
    bioHi: [
      'श्री राजवर्धन गावड़े प्रासंघी – द लीगल लैडर एलएलपी के संस्थापक एवं वरिष्ठ प्रमुख अधिवक्ता हैं। आप माननीय मध्य प्रदेश उच्च न्यायालय में शासकीय अधिवक्ता के रूप में कार्यरत हैं तथा पूर्व में भारत संघ के स्थायी अधिवक्ता के रूप में प्रतिनिधित्व कर चुके हैं।',
      'आप फर्म के जटिल रिट वादों, राज्य प्रशासनिक विवादों, महत्त्वपूर्ण वाणिज्यिक मामलों एवं संवैधानिक पैरवी का पर्यवेक्षण करते हैं, तथा कॉर्पोरेट एवं विवाद-समाधान संबंधी दायित्वों का नेतृत्व करते हैं। आप प्रतिष्ठित वैकल्पिक विवाद समाधान संस्थानों में मध्यस्थ (आर्बिट्रेटर) के रूप में भी सूचीबद्ध हैं।',
      'बौद्धिक संपदा अधिकार में एलएल.एम. तथा उद्यमिता एवं साइबर सुरक्षा में डिप्लोमा — यह शैक्षणिक आधार व्यवसायों, स्टार्ट-अप एवं प्रौद्योगिकी क्षेत्र के मुवक्किलों हेतु फर्म के कार्य को सुदृढ़ करता है, जहाँ न्यायालयीन अनुभव एवं वाणिज्यिक समझ दोनों समान रूप से आवश्यक हैं।',
    ],
  },
  {
    slug: 'bhavesh-tiwari',
    name: 'Bhavesh Tiwari',
    photo: '/team/bhavesh-tiwari.webp',
    role: 'Senior Associate',
    roleHi: 'वरिष्ठ सहयोगी अधिवक्ता',
    practiceTags: [
      'Contract Drafting & Commercial Advisory',
      'Corporate Law',
      'Arbitration & Dispute Resolution',
      'Consumer Protection',
    ],
    practiceTagsHi: [
      'संविदा प्रारूपण एवं वाणिज्यिक परामर्श',
      'कॉर्पोरेट विधि',
      'माध्यस्थम् एवं विवाद समाधान',
      'उपभोक्ता संरक्षण',
    ],
    credentials: [
      'Panel Lawyer for the Government of Madhya Pradesh',
      'B.B.A. LL.B. (Hons.)',
      'LL.M. (Constitutional Law)',
      'Diploma in Applied Human Psychology',
      'Certification in Arbitration',
    ],
    credentialsHi: [
      'पैनल अधिवक्ता, मध्य प्रदेश शासन',
      'बी.बी.ए. एलएल.बी. (ऑनर्स)',
      'एलएल.एम. (संवैधानिक विधि)',
      'व्यावहारिक मानव मनोविज्ञान में डिप्लोमा',
      'माध्यस्थम् (आर्बिट्रेशन) में प्रमाणन',
    ],
    bio: [
      'Bhavesh Tiwari is a Senior Associate at PraSanghi and a Panel Lawyer for the Government of Madhya Pradesh. He specialises in commercial contracts, corporate governance, constitutional law, arbitration frameworks and consumer litigation defence.',
      'With an LL.M. in Constitutional Law and a certification in arbitration, he brings both the drafting discipline of a corporate practice and the procedural command of a litigator to every mandate — from the dispute-resolution clause in a contract to its enforcement before a tribunal.',
    ],
    bioHi: [
      'श्री भावेश तिवारी प्रासंघी में वरिष्ठ सहयोगी अधिवक्ता तथा मध्य प्रदेश शासन के पैनल अधिवक्ता हैं। आप वाणिज्यिक संविदाओं, कॉर्पोरेट गवर्नेंस, संवैधानिक विधि, माध्यस्थम् संरचनाओं एवं उपभोक्ता वादों में प्रतिरक्षा के विशेषज्ञ हैं।',
      'संवैधानिक विधि में एलएल.एम. एवं माध्यस्थम् में प्रमाणन के साथ, आप प्रत्येक दायित्व में कॉर्पोरेट प्रैक्टिस का प्रारूपण-अनुशासन एवं एक अधिवक्ता की प्रक्रियात्मक दक्षता — दोनों लेकर आते हैं; संविदा के विवाद-समाधान खंड से लेकर अधिकरण के समक्ष उसके प्रवर्तन तक।',
    ],
  },
  {
    slug: 'pankaj-giri-goswami',
    name: 'Pankaj Giri Goswami',
    photo: '/team/pankaj-giri-goswami.webp',
    role: 'Senior Associate',
    roleHi: 'वरिष्ठ सहयोगी अधिवक्ता',
    practiceTags: ['Litigation', 'Regulatory & Advisory', 'Supreme Court & High Court Practice'],
    practiceTagsHi: [
      'वाद-विवाद (लिटिगेशन)',
      'नियामक एवं सलाहकार सेवाएँ',
      'उच्चतम न्यायालय एवं उच्च न्यायालय व्यवहार',
    ],
    credentials: [
      'Standing Counsel for the Government of Madhya Pradesh',
      'B.A. LL.B. (Hons.)',
      'LL.M. (pursuing)',
    ],
    credentialsHi: [
      'स्थायी अधिवक्ता, मध्य प्रदेश शासन',
      'बी.ए. एलएल.बी. (ऑनर्स)',
      'एलएल.एम. (अध्ययनरत)',
    ],
    bio: [
      'Pankaj Giri Goswami is a Senior Associate at PraSanghi and Standing Counsel for the Government of Madhya Pradesh. His expertise lies in trial procedure, regulatory mandates, statutory compliance and appellate representation.',
      'He handles matters from the trial court through to appeal, giving clients the continuity of one advocate who knows the record from its first page.',
    ],
    bioHi: [
      'श्री पंकज गिरि गोस्वामी प्रासंघी में वरिष्ठ सहयोगी अधिवक्ता तथा मध्य प्रदेश शासन के स्थायी अधिवक्ता हैं। विचारण प्रक्रिया, नियामक दायित्वों, सांविधिक अनुपालन एवं अपीलीय प्रतिनिधित्व में आपको विशेष दक्षता प्राप्त है।',
      'आप विचारण न्यायालय से लेकर अपील तक मामलों का संचालन करते हैं, जिससे मुवक्किल को ऐसे अधिवक्ता की निरंतरता प्राप्त होती है जो अभिलेख को उसके प्रथम पृष्ठ से जानता है।',
    ],
  },
  {
    slug: 'manoj-garg',
    name: 'Manoj Garg',
    photo: '/team/manoj-garg.webp',
    role: 'Senior Associate',
    roleHi: 'वरिष्ठ सहयोगी अधिवक्ता',
    designation: 'Branch Head, Sardarpur, Dhar (Dist.)',
    designationHi: 'शाखा प्रमुख, सरदारपुर, जिला धार',
    practiceTags: ['Litigation', 'Legal Drafting & Documentation', 'Property & Real Estate'],
    practiceTagsHi: ['वाद-विवाद (लिटिगेशन)', 'विधिक प्रारूपण एवं प्रलेखन', 'संपत्ति एवं रियल एस्टेट'],
    credentials: ['Branch Head, PraSanghi — Sardarpur, District Dhar'],
    credentialsHi: ['शाखा प्रमुख, प्रासंघी — सरदारपुर, जिला धार'],
    bio: [
      'Manoj Garg is a Senior Associate at PraSanghi and heads the firm’s branch at Sardarpur in District Dhar. He leads the firm’s civil, criminal and revenue work in the region, including trial-court practice, land and property matters, and documentation before revenue authorities.',
      'Clients in and around Dhar district instruct the firm through him locally, with the matter backed by the coordinated strategy and reporting of the Indore headquarters.',
    ],
    bioHi: [
      'श्री मनोज गर्ग प्रासंघी में वरिष्ठ सहयोगी अधिवक्ता हैं तथा जिला धार स्थित सरदारपुर शाखा के प्रमुख हैं। आप क्षेत्र में फर्म के सिविल, आपराधिक एवं राजस्व कार्यों का नेतृत्व करते हैं, जिनमें विचारण न्यायालय की पैरवी, भूमि एवं संपत्ति संबंधी मामले, तथा राजस्व प्राधिकरणों के समक्ष प्रलेखन सम्मिलित है।',
      'धार जिले एवं आसपास के मुवक्किल स्थानीय स्तर पर आपके माध्यम से फर्म को निर्देश देते हैं, तथा प्रत्येक मामले को इंदौर मुख्यालय की समन्वित रणनीति एवं रिपोर्टिंग का समर्थन प्राप्त होता है।',
    ],
  },
  {
    slug: 'kavita-sharma',
    name: 'Kavita Sharma',
    photo: '/team/kavita-sharma.webp',
    role: 'Associate',
    roleHi: 'सहयोगी अधिवक्ता',
    designation: 'State Government Matters',
    designationHi: 'राज्य शासन संबंधी मामले',
    practiceTags: ['Administrative & Constitutional Law', 'Supreme Court & High Court Practice'],
    practiceTagsHi: ['प्रशासनिक एवं संवैधानिक विधि', 'उच्चतम न्यायालय एवं उच्च न्यायालय व्यवहार'],
    credentials: ['Assists in State Government matters before the High Court and tribunals'],
    credentialsHi: ['उच्च न्यायालय एवं अधिकरणों के समक्ष राज्य शासन संबंधी मामलों में सहायता'],
    bio: [
      'Kavita Sharma is an Associate at PraSanghi who assists the firm’s counsel in State Government matters — writ petitions, service and administrative disputes, and statutory proceedings before the High Court and tribunals.',
      'She is proficient in preparing briefs, compiling records and tracking compliance with court directions, so that government mandates are presented completely and on time.',
    ],
    bioHi: [
      'सुश्री कविता शर्मा प्रासंघी में सहयोगी अधिवक्ता हैं, जो राज्य शासन संबंधी मामलों — रिट याचिकाओं, सेवा एवं प्रशासनिक विवादों, तथा उच्च न्यायालय एवं अधिकरणों के समक्ष सांविधिक कार्यवाहियों — में फर्म के अधिवक्ताओं को सहायता प्रदान करती हैं।',
      'आप ब्रीफ तैयार करने, अभिलेख संकलित करने एवं न्यायालयीन निर्देशों के अनुपालन की निगरानी में दक्ष हैं, जिससे शासकीय मामले पूर्ण रूप से एवं समय पर प्रस्तुत हों।',
    ],
  },
  {
    slug: 'abhishek-mantri',
    name: 'Abhishek Mantri',
    photo: '/team/abhishek-mantri.webp',
    role: 'Associate',
    roleHi: 'सहयोगी अधिवक्ता',
    practiceTags: ['Corporate Law', 'Regulatory & Advisory', 'Debt Recovery & Management'],
    practiceTagsHi: ['कॉर्पोरेट विधि', 'नियामक एवं सलाहकार सेवाएँ', 'ऋण वसूली एवं प्रबंधन'],
    credentials: ['Corporate, regulatory and recovery practice'],
    credentialsHi: ['कॉर्पोरेट, नियामक एवं वसूली प्रैक्टिस'],
    bio: [
      'Abhishek Mantri is an Associate at PraSanghi, proficient in corporate and regulatory compliance, statutory registrations and the recovery of dues — from demand notices and Section 138 NI Act proceedings to recovery before the appropriate forum.',
      'He works closely with the firm’s business clients on their day-to-day compliance calendar, ensuring that filings, renewals and notices are handled with the rigour of litigation.',
    ],
    bioHi: [
      'श्री अभिषेक मंत्री प्रासंघी में सहयोगी अधिवक्ता हैं तथा कॉर्पोरेट एवं नियामक अनुपालन, सांविधिक पंजीकरण तथा बकाया राशि की वसूली — मांग सूचना एवं परक्राम्य लिखत अधिनियम की धारा 138 की कार्यवाहियों से लेकर उपयुक्त मंच के समक्ष वसूली तक — में दक्ष हैं।',
      'आप फर्म के व्यावसायिक मुवक्किलों के दैनिक अनुपालन-कार्यक्रम पर निकटता से कार्य करते हैं, ताकि दाखिले, नवीनीकरण एवं सूचनाएँ वाद-विवाद जैसी कठोरता से संपन्न हों।',
    ],
  },
  {
    slug: 'aditya-bharti',
    name: 'Aditya Bharti',
    photo: '/team/aditya-bharti.webp',
    role: 'Associate',
    roleHi: 'सहयोगी अधिवक्ता',
    practiceTags: ['Litigation', 'Cyber Law & Data Privacy', 'Family & Matrimonial'],
    practiceTagsHi: ['वाद-विवाद (लिटिगेशन)', 'साइबर विधि एवं डेटा गोपनीयता', 'पारिवारिक एवं वैवाहिक विधि'],
    credentials: ['Civil, criminal, cyber and family practice'],
    credentialsHi: ['सिविल, आपराधिक, साइबर एवं पारिवारिक प्रैक्टिस'],
    bio: [
      'Aditya Bharti is an Associate at PraSanghi, proficient in civil and criminal trial practice, cyber-law complaints and family and matrimonial proceedings.',
      'He assists clients from the first consultation through drafting, filing and appearance, with particular attention to matters where speed and discretion matter most — online fraud, defamation, bail and family disputes.',
    ],
    bioHi: [
      'श्री आदित्य भारती प्रासंघी में सहयोगी अधिवक्ता हैं तथा सिविल एवं आपराधिक विचारण, साइबर विधि संबंधी परिवादों, एवं पारिवारिक तथा वैवाहिक कार्यवाहियों में दक्ष हैं।',
      'आप प्रथम परामर्श से लेकर प्रारूपण, दाखिले एवं पैरवी तक मुवक्किलों की सहायता करते हैं, विशेषकर उन मामलों में जहाँ शीघ्रता एवं गोपनीयता सर्वाधिक महत्त्वपूर्ण हैं — ऑनलाइन धोखाधड़ी, मानहानि, जमानत एवं पारिवारिक विवाद।',
    ],
  },
]

export const peopleBySlug: Record<string, PersonRecord> = Object.fromEntries(
  people.map((p) => [p.slug, p])
)
