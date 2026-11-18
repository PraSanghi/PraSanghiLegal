/**
 * An article body is a sequence of blocks. A plain string is a paragraph; a
 * `steps` block renders as a numbered list on separate lines (client note
 * p.94: "write such things in numerical bullet points in separate lines");
 * a `bullets` block is an unnumbered list; a `heading` block is a
 * sub-heading; a `note` block is a highlighted caution.
 *
 * `body` and `bodyHi` must stay block-for-block aligned: same length, same
 * block type at each index, and list blocks with the same number of items.
 */
export type InsightBlock =
  | string
  | { steps: string[] }
  | { bullets: string[] }
  | { heading: string }
  | { note: string }

export interface InsightRecord {
  slug: string
  contentType: 'Legal Update' | 'Article' | 'Podcast'
  date: string
  /** Date up to which the law in the article was checked. */
  lawAsOf: string
  headline: string
  headlineHi: string
  excerpt: string
  excerptHi: string
  practiceAreaTag?: string
  practiceAreaTagHi?: string
  /** Practice-area slug the article links back to. */
  practiceAreaSlug?: string
  /** Topic photo; without one the card and page fall back to the branded practice-area cover. */
  image?: string
  body: InsightBlock[]
  bodyHi: InsightBlock[]
  /** Statutes, rules and judgments the article relies on. */
  sources: string[]
  sourcesHi: string[]
}

const photo = (id: string, extra = '') =>
  `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop${extra}`

const REG = { practiceAreaTag: 'Regulatory & Statutory Compliance', practiceAreaTagHi: 'नियामक एवं सांविधिक अनुपालन', practiceAreaSlug: 'regulatory-advisory' }

const LAW_AS_OF = '2026-11-18'

// General-information articles on established, public legal processes — not
// case-specific advice. Every statement of law was checked against the statute,
// rules or judgment listed in `sources` as at `lawAsOf`; re-check before
// changing a figure, deadline or section number. Newest first. Each photo was
// viewed and checked against its topic before use.
export const insights: InsightRecord[] = [
  {
    slug: 'rera-registration-and-homebuyer-remedies',
    image: photo('1632400386307-2b2f275b35da'), // residential towers under construction behind a site hoarding, India
    contentType: 'Article',
    date: '2026-11-10',
    lawAsOf: LAW_AS_OF,
    headline: 'RERA: Registration for Promoters and Remedies for Homebuyers',
    headlineHi: 'रेरा: प्रवर्तकों हेतु पंजीकरण एवं गृह-क्रेताओं हेतु उपचार',
    excerpt: 'Which projects must be registered under RERA, what registration demands of a promoter, and the remedies a homebuyer has when possession is delayed.',
    excerptHi: 'रेरा के अंतर्गत किन परियोजनाओं का पंजीकरण आवश्यक है, पंजीकरण प्रवर्तक से क्या अपेक्षा करता है, तथा आधिपत्य में विलंब होने पर गृह-क्रेता के उपचार।',
    practiceAreaTag: 'Property & Real Estate Advisory',
    practiceAreaTagHi: 'संपत्ति एवं रियल एस्टेट परामर्श',
    practiceAreaSlug: 'property-real-estate',
    body: [
      'The Real Estate (Regulation and Development) Act, 2016 (“RERA”) was enacted to bring transparency and accountability to the sale of real estate. Its substantive provisions came into force on 1 May 2017. Each state has its own Real Estate Regulatory Authority and Real Estate Appellate Tribunal — in Madhya Pradesh, the MP Real Estate Regulatory Authority — and its own rules, which fill in details such as forms, fees and the rate of interest payable to buyers.',
      { heading: 'Which projects must be registered' },
      'Under Section 3, a promoter cannot advertise, market, book, sell or offer for sale — or invite anyone to buy — any plot, apartment or building in a real estate project without first registering the project with the Authority. Projects that were ongoing when the Act came into force, and had not received a completion certificate, also had to be registered.',
      'Section 3(2) exempts three categories:',
      {
        bullets: [
          'projects where the land proposed to be developed does not exceed 500 square metres, or the number of apartments does not exceed eight, counting all phases (a state may prescribe lower thresholds);',
          'projects that had received a completion certificate before the Act commenced; and',
          'renovation, repair or redevelopment that does not involve marketing, advertising, selling or new allotment of any unit.',
        ],
      },
      'Real estate agents who facilitate the sale of units in registered projects must register separately under Section 9, and must quote their registration number in every sale they facilitate.',
      { heading: 'What registration requires of a promoter' },
      {
        steps: [
          'An application under Section 4 with the approvals and commencement certificate, the sanctioned plan and layout, details of the title to the land and any encumbrances, and the carpet area of each unit.',
          'A declaration, supported by affidavit, stating the time within which the project will be completed and confirming the promoter’s legal title to the land.',
          'An undertaking to deposit 70% of the amounts realised from allottees in a separate account with a scheduled bank, to be used only for the cost of land and construction of that project. Withdrawals must be in proportion to the progress of the project and certified by an engineer, an architect and a chartered accountant.',
          'Disclosure of the architects, engineers, contractors and real estate agents associated with the project.',
          'After registration, quarterly updates on the Authority’s website covering bookings, approvals and the status of construction (Section 11).',
        ],
      },
      'The Authority must grant or reject the application within 30 days; if it does neither, the project is deemed registered (Section 5). Registration is valid for the period declared by the promoter and may be extended under Section 6 in cases of force majeure, or for reasonable cause.',
      { heading: 'Rules that protect buyers while the project is being built' },
      {
        bullets: [
          'A promoter cannot take more than 10% of the cost of a unit as an advance or application fee without first executing a registered agreement for sale (Section 13).',
          'Units must be sold by carpet area — the net usable floor area within the walls of the apartment, as defined in Section 2(k) — not by “super built-up” area.',
          'Apart from the minor changes the Act permits, sanctioned plans and specifications cannot be altered without the buyer’s consent, and other alterations need the consent of at least two-thirds of the allottees (Section 14).',
          'Structural defects, or defects in workmanship, quality or services, brought to the promoter’s notice within five years of possession must be rectified free of charge within 30 days (Section 14(3)).',
        ],
      },
      { heading: 'Remedies when possession is delayed' },
      'Section 18 applies where the promoter fails to complete the project, or to give possession, by the date in the agreement for sale. The buyer has a choice:',
      {
        bullets: [
          'withdraw from the project and claim a refund of the amount paid, with interest at the rate prescribed in the state rules; or',
          'stay in the project and claim interest for every month of delay until possession is handed over.',
        ],
      },
      'In Newtech Promoters and Developers v. State of UP (2021), the Supreme Court held that an allottee’s right to a refund with interest under Section 18 is unqualified once the promoter fails to give possession within the agreed time. It also clarified the division of work: the Authority decides refund, interest and penalty, while compensation is decided by the adjudicating officer under Sections 71 and 72.',
      { heading: 'Where and how to complain' },
      {
        steps: [
          'File a complaint with the state Authority under Section 31, in the prescribed form and with the prescribed fee. A claim for compensation is made to the adjudicating officer.',
          'An order of the Authority or the adjudicating officer can be appealed to the Real Estate Appellate Tribunal within 60 days (Section 44). A promoter who appeals must first deposit at least 30% of the penalty, or the full amount payable to the allottee with interest and compensation, as the case may be (Section 43(5)).',
          'A further appeal lies to the High Court within 60 days of the Tribunal’s order, on the grounds available in a second appeal under the Code of Civil Procedure (Section 58).',
          'Amounts ordered that are not paid can be recovered as arrears of land revenue (Section 40), and failure to comply with orders attracts further penalties.',
        ],
      },
      'A buyer is not confined to RERA. In Imperia Structures v. Anil Patni (2020), the Supreme Court held that a homebuyer who qualifies as a consumer may choose to approach the Consumer Commission instead, because RERA is in addition to, not in derogation of, other laws (Section 88). The choice of forum should be made with the buyer’s objective — refund, possession or compensation — in mind.',
      { heading: 'Consequences for promoters who do not register' },
      'Under Section 59, failure to register a project attracts a penalty of up to 10% of its estimated cost. Continued non-compliance can lead to imprisonment of up to three years, or a further fine of up to 10% of the estimated cost, or both. The Authority can also revoke a registration for default and direct further action on the project.',
    ],
    bodyHi: [
      'भू-संपदा (विनियमन एवं विकास) अधिनियम, 2016 (“रेरा”) भू-संपदा के विक्रय में पारदर्शिता एवं उत्तरदायित्व लाने हेतु अधिनियमित किया गया। इसके सारवान प्रावधान 1 मई 2017 से प्रभावी हुए। प्रत्येक राज्य का अपना भू-संपदा विनियामक प्राधिकरण एवं भू-संपदा अपीलीय अधिकरण है — मध्य प्रदेश में म.प्र. भू-संपदा विनियामक प्राधिकरण — तथा अपने नियम हैं, जो प्रपत्र, शुल्क एवं क्रेताओं को देय ब्याज की दर जैसे विवरण निर्धारित करते हैं।',
      { heading: 'किन परियोजनाओं का पंजीकरण आवश्यक है' },
      'धारा 3 के अंतर्गत कोई प्रवर्तक, प्राधिकरण में परियोजना का पंजीकरण कराए बिना, किसी भू-संपदा परियोजना के किसी भूखंड, अपार्टमेंट अथवा भवन का विज्ञापन, विपणन, बुकिंग, विक्रय अथवा विक्रय का प्रस्ताव नहीं कर सकता, न ही किसी को क्रय हेतु आमंत्रित कर सकता है। अधिनियम के प्रवृत्त होने के समय चल रही वे परियोजनाएँ, जिन्हें पूर्णता प्रमाणपत्र प्राप्त नहीं हुआ था, उनका भी पंजीकरण आवश्यक था।',
      'धारा 3(2) तीन श्रेणियों को छूट देती है:',
      {
        bullets: [
          'वे परियोजनाएँ जिनमें विकसित की जाने वाली भूमि 500 वर्ग मीटर से अधिक न हो, अथवा सभी चरणों को मिलाकर अपार्टमेंटों की संख्या आठ से अधिक न हो (राज्य इससे कम सीमा विहित कर सकता है);',
          'वे परियोजनाएँ जिन्हें अधिनियम के प्रारंभ से पूर्व पूर्णता प्रमाणपत्र प्राप्त हो चुका था; तथा',
          'ऐसा नवीनीकरण, मरम्मत अथवा पुनर्विकास जिसमें किसी इकाई का विपणन, विज्ञापन, विक्रय अथवा नया आवंटन सम्मिलित न हो।',
        ],
      },
      'पंजीकृत परियोजनाओं में इकाइयों के विक्रय में सहायता करने वाले भू-संपदा अभिकर्ताओं को धारा 9 के अंतर्गत पृथक पंजीकरण कराना होता है, तथा प्रत्येक विक्रय में अपना पंजीकरण क्रमांक उल्लिखित करना होता है।',
      { heading: 'पंजीकरण प्रवर्तक से क्या अपेक्षा करता है' },
      {
        steps: [
          'धारा 4 के अंतर्गत आवेदन, जिसके साथ अनुमतियाँ एवं प्रारंभ प्रमाणपत्र, स्वीकृत मानचित्र एवं अभिन्यास, भूमि के स्वत्व एवं भारों का विवरण, तथा प्रत्येक इकाई का कारपेट क्षेत्र हो।',
          'शपथपत्र द्वारा समर्थित घोषणा, जिसमें परियोजना पूर्ण करने की समय-सीमा तथा भूमि पर प्रवर्तक के विधिक स्वत्व की पुष्टि हो।',
          'यह वचनबंध कि आवंटितियों से प्राप्त राशि का 70% किसी अनुसूचित बैंक में पृथक खाते में जमा किया जाएगा, तथा केवल उसी परियोजना की भूमि एवं निर्माण लागत हेतु उपयोग होगा। आहरण परियोजना की प्रगति के अनुपात में होंगे तथा अभियंता, वास्तुविद् एवं चार्टर्ड अकाउंटेंट द्वारा प्रमाणित होंगे।',
          'परियोजना से जुड़े वास्तुविदों, अभियंताओं, ठेकेदारों एवं भू-संपदा अभिकर्ताओं का प्रकटीकरण।',
          'पंजीकरण के पश्चात, प्राधिकरण की वेबसाइट पर बुकिंग, अनुमतियों एवं निर्माण की स्थिति का त्रैमासिक अद्यतन (धारा 11)।',
        ],
      },
      'प्राधिकरण को 30 दिनों के भीतर आवेदन स्वीकार अथवा अस्वीकार करना होता है; ऐसा न करने पर परियोजना पंजीकृत मानी जाती है (धारा 5)। पंजीकरण प्रवर्तक द्वारा घोषित अवधि हेतु वैध होता है, तथा अप्रत्याशित घटना (फोर्स मेज्योर) अथवा युक्तियुक्त कारण होने पर धारा 6 के अंतर्गत बढ़ाया जा सकता है।',
      { heading: 'निर्माण के दौरान क्रेताओं की रक्षा करने वाले नियम' },
      {
        bullets: [
          'पंजीकृत विक्रय अनुबंध निष्पादित किए बिना प्रवर्तक इकाई की लागत के 10% से अधिक राशि अग्रिम अथवा आवेदन शुल्क के रूप में नहीं ले सकता (धारा 13)।',
          'इकाइयों का विक्रय कारपेट क्षेत्र के आधार पर होना चाहिए — धारा 2(k) में परिभाषित, अपार्टमेंट की दीवारों के भीतर का शुद्ध उपयोज्य तल क्षेत्र — न कि “सुपर बिल्ट-अप” क्षेत्र पर।',
          'अधिनियम द्वारा अनुमत लघु परिवर्तनों के अतिरिक्त, क्रेता की सहमति के बिना स्वीकृत मानचित्रों एवं विनिर्देशों में परिवर्तन नहीं किया जा सकता, तथा अन्य परिवर्तनों हेतु कम से कम दो-तिहाई आवंटितियों की सहमति आवश्यक है (धारा 14)।',
          'आधिपत्य के पाँच वर्षों के भीतर प्रवर्तक के संज्ञान में लाए गए संरचनात्मक दोष, अथवा कारीगरी, गुणवत्ता या सेवाओं के दोष, उसे 30 दिनों के भीतर निःशुल्क सुधारने होंगे (धारा 14(3))।',
        ],
      },
      { heading: 'आधिपत्य में विलंब होने पर उपचार' },
      'धारा 18 तब लागू होती है जब प्रवर्तक विक्रय अनुबंध में निर्धारित तिथि तक परियोजना पूर्ण करने अथवा आधिपत्य देने में विफल रहता है। क्रेता के पास विकल्प है:',
      {
        bullets: [
          'परियोजना से हटकर राज्य नियमों में विहित दर पर ब्याज सहित भुगतान की गई राशि की वापसी माँगना; अथवा',
          'परियोजना में बने रहकर आधिपत्य सौंपे जाने तक विलंब के प्रत्येक माह हेतु ब्याज माँगना।',
        ],
      },
      'न्यूटेक प्रमोटर्स एंड डेवलपर्स बनाम उत्तर प्रदेश राज्य (2021) में सर्वोच्च न्यायालय ने अभिनिर्धारित किया कि सहमत समय में आधिपत्य न देने पर धारा 18 के अंतर्गत ब्याज सहित राशि-वापसी का आवंटिती का अधिकार अप्रतिबंधित है। न्यायालय ने कार्य-विभाजन भी स्पष्ट किया: राशि-वापसी, ब्याज एवं शास्ति का निर्णय प्राधिकरण करता है, जबकि प्रतिकर का निर्णय धारा 71 एवं 72 के अंतर्गत न्यायनिर्णायक अधिकारी करता है।',
      { heading: 'शिकायत कहाँ और कैसे करें' },
      {
        steps: [
          'धारा 31 के अंतर्गत विहित प्रपत्र एवं शुल्क सहित राज्य प्राधिकरण के समक्ष परिवाद प्रस्तुत करें। प्रतिकर का दावा न्यायनिर्णायक अधिकारी के समक्ष किया जाता है।',
          'प्राधिकरण अथवा न्यायनिर्णायक अधिकारी के आदेश की अपील 60 दिनों के भीतर भू-संपदा अपीलीय अधिकरण में की जा सकती है (धारा 44)। अपील करने वाले प्रवर्तक को पहले शास्ति का कम से कम 30%, अथवा यथास्थिति ब्याज एवं प्रतिकर सहित आवंटिती को देय पूर्ण राशि जमा करनी होती है (धारा 43(5))।',
          'अधिकरण के आदेश से 60 दिनों के भीतर उच्च न्यायालय में आगे की अपील होती है, सिविल प्रक्रिया संहिता के अंतर्गत द्वितीय अपील में उपलब्ध आधारों पर (धारा 58)।',
          'आदेशित राशि का भुगतान न होने पर उसे भू-राजस्व के बकाये की भाँति वसूल किया जा सकता है (धारा 40), तथा आदेशों का अनुपालन न करने पर अतिरिक्त शास्ति लगती है।',
        ],
      },
      'क्रेता केवल रेरा तक सीमित नहीं है। इम्पीरिया स्ट्रक्चर्स बनाम अनिल पटनी (2020) में सर्वोच्च न्यायालय ने अभिनिर्धारित किया कि उपभोक्ता की श्रेणी में आने वाला गृह-क्रेता इसके स्थान पर उपभोक्ता आयोग जा सकता है, क्योंकि रेरा अन्य विधियों के अतिरिक्त है, उनके अल्पीकरण में नहीं (धारा 88)। मंच का चयन क्रेता के उद्देश्य — राशि-वापसी, आधिपत्य अथवा प्रतिकर — को ध्यान में रखकर करना चाहिए।',
      { heading: 'पंजीकरण न कराने वाले प्रवर्तकों के परिणाम' },
      'धारा 59 के अंतर्गत परियोजना का पंजीकरण न कराने पर उसकी अनुमानित लागत के 10% तक की शास्ति लगती है। निरंतर अननुपालन पर तीन वर्ष तक का कारावास, अथवा अनुमानित लागत के 10% तक का अतिरिक्त जुर्माना, अथवा दोनों हो सकते हैं। प्राधिकरण चूक होने पर पंजीकरण प्रतिसंहृत कर परियोजना के संबंध में आगे की कार्यवाही का निर्देश भी दे सकता है।',
    ],
    sources: [
      'Real Estate (Regulation and Development) Act, 2016 — Sections 2(k), 3, 4, 5, 6, 9, 11, 13, 14, 18, 31, 40, 43, 44, 58, 59, 71, 72 and 88',
      'Madhya Pradesh Real Estate (Regulation and Development) Rules, 2017',
      'Newtech Promoters and Developers Pvt. Ltd. v. State of UP — Supreme Court, 2021',
      'Imperia Structures Ltd. v. Anil Patni — Supreme Court, 2020',
    ],
    sourcesHi: [
      'भू-संपदा (विनियमन एवं विकास) अधिनियम, 2016 — धाराएँ 2(k), 3, 4, 5, 6, 9, 11, 13, 14, 18, 31, 40, 43, 44, 58, 59, 71, 72 एवं 88',
      'मध्य प्रदेश भू-संपदा (विनियमन एवं विकास) नियम, 2017',
      'न्यूटेक प्रमोटर्स एंड डेवलपर्स प्रा. लि. बनाम उत्तर प्रदेश राज्य — सर्वोच्च न्यायालय, 2021',
      'इम्पीरिया स्ट्रक्चर्स लि. बनाम अनिल पटनी — सर्वोच्च न्यायालय, 2020',
    ],
  },
  {
    slug: 'money-lender-sahukar-licence',
    image: photo('1565371767810-ef913a6c8315'), // Indian ₹500 notes
    contentType: 'Article',
    date: '2026-11-03',
    lawAsOf: LAW_AS_OF,
    headline: 'Money-Lender (Sahukar) Licence: Who Needs One and How to Obtain It',
    headlineHi: 'साहूकार (मनी-लेंडर) अनुज्ञप्ति: किसे आवश्यक है और कैसे प्राप्त करें',
    excerpt: 'Lending money as a business without registration under the Madhya Pradesh Money-Lenders Act can leave loans unrecoverable in court. What the law requires, and when a different regulator applies.',
    excerptHi: 'मध्य प्रदेश साहूकार अधिनियम के अंतर्गत पंजीकरण के बिना व्यवसाय के रूप में धन उधार देने पर ऋण न्यायालय से अवसूलनीय हो सकते हैं। विधि क्या अपेक्षा करती है, और कब कोई अन्य नियामक लागू होता है।',
    ...REG,
    body: [
      'Lending money at interest is a regulated activity in India. Banks, non-banking financial companies and co-operative societies are regulated by the Reserve Bank of India and co-operative laws; individuals and firms that lend as a business are regulated by state money-lenders laws. In Madhya Pradesh, the governing law is the Madhya Pradesh Money-Lenders Act, 1934, commonly called the Sahukar Adhiniyam.',
      { heading: 'Who needs a registration' },
      'The Act is aimed at people who carry on the business of money-lending. Under Section 11-B, a person who carries on, or intends to carry on, that business must apply for registration, and the registering authority issues a registration certificate. Section 11-F prohibits carrying on money-lending in a district without a valid registration certificate for that district — so a lender active in more than one district needs a registration for each.',
      'Not every loan makes a person a money-lender. An isolated or occasional loan — to a friend or relative, for example — is generally outside the Act, because what attracts it is lending as a business. Whether a person is carrying on the business of money-lending is a question of fact, decided on the frequency, scale and regularity of the lending.',
      { heading: 'Why registration matters: recovering the loan' },
      'Section 11-H provides that a civil court shall not proceed with a suit by a money-lender to recover a loan unless it is satisfied that the lender holds a valid registration certificate, or is not required to hold one. The Madhya Pradesh High Court has applied this bar in a number of cases to hold suits by unregistered money-lenders not maintainable. For a lender, the practical result can be that the loan cannot be recovered through the civil courts at all.',
      'Lending without the required registration is also an offence punishable with a fine under the Act.',
      { heading: 'Duties of a registered money-lender' },
      {
        bullets: [
          'Maintain a regular account of each loan, in the manner the Act and the rules prescribe.',
          'Give the borrower statements of account, and receipts for payments received, as the Act requires.',
          'Hold a valid registration for every district in which money is lent, and keep it current as the rules require.',
          'Charge interest within lawful limits. Under the Usurious Loans Act, 1918, a court can reopen a transaction and relieve the borrower where the interest is excessive and the transaction substantially unfair.',
        ],
      },
      { heading: 'The usual process for registration' },
      {
        steps: [
          'Confirm that the activity amounts to a money-lending business under the Act, and that no exemption applies.',
          'Prepare the application in the prescribed form, with proof of identity and address, details of the business and the place where it is carried on.',
          'File it with the registering authority for the district, with the prescribed fee.',
          'Respond to any verification or enquiry the authority makes.',
          'Obtain the registration certificate, keep it current, and maintain the prescribed accounts from the first loan onwards.',
        ],
      },
      { heading: 'When a different law applies' },
      {
        bullets: [
          'A company whose principal business is lending generally needs a certificate of registration from the Reserve Bank of India as a non-banking financial company (Section 45-IA, Reserve Bank of India Act, 1934).',
          'Funding a lending business by collecting money from the public can fall within the Banning of Unregulated Deposit Schemes Act, 2019, which carries serious criminal penalties.',
          'Separate and stricter regulations govern money-lending to members of Scheduled Tribes in the Scheduled Areas of Madhya Pradesh.',
          'Lending through digital platforms is subject to the Reserve Bank’s directions on digital lending where a regulated entity is involved.',
        ],
      },
      { heading: 'For borrowers' },
      'A borrower being pressed for repayment by an unregistered lender, or charged interest that appears excessive, should take advice before paying or signing any fresh document. The lender’s registration status, the accounts kept and the terms of the loan can each affect what is recoverable. Coercive recovery — threats, intimidation, or taking property without legal process — is not a lawful means of recovery and can be reported to the police.',
    ],
    bodyHi: [
      'भारत में ब्याज पर धन उधार देना एक विनियमित गतिविधि है। बैंक, गैर-बैंकिंग वित्तीय कंपनियाँ एवं सहकारी समितियाँ भारतीय रिज़र्व बैंक तथा सहकारी विधियों द्वारा विनियमित हैं; व्यवसाय के रूप में उधार देने वाले व्यक्ति एवं फर्म राज्य की साहूकारी विधियों द्वारा विनियमित हैं। मध्य प्रदेश में लागू विधि मध्य प्रदेश साहूकार अधिनियम, 1934 (मध्य प्रदेश मनी-लेंडर्स एक्ट) है।',
      { heading: 'पंजीकरण किसे आवश्यक है' },
      'यह अधिनियम उन व्यक्तियों पर लागू होता है जो साहूकारी का व्यवसाय करते हैं। धारा 11-ख के अंतर्गत जो व्यक्ति यह व्यवसाय करता है अथवा करने का आशय रखता है, उसे पंजीकरण हेतु आवेदन करना होता है, तथा पंजीकरण प्राधिकारी पंजीकरण प्रमाणपत्र जारी करता है। धारा 11-च किसी जिले में उस जिले के वैध पंजीकरण प्रमाणपत्र के बिना साहूकारी करने का निषेध करती है — अतः एक से अधिक जिलों में उधार देने वाले को प्रत्येक जिले हेतु पंजीकरण आवश्यक है।',
      'प्रत्येक ऋण किसी व्यक्ति को साहूकार नहीं बनाता। एकाकी अथवा कभी-कभार दिया गया ऋण — उदाहरणार्थ किसी मित्र अथवा संबंधी को — सामान्यतः अधिनियम के बाहर है, क्योंकि अधिनियम व्यवसाय के रूप में उधार देने पर लागू होता है। कोई व्यक्ति साहूकारी का व्यवसाय कर रहा है या नहीं, यह तथ्य का प्रश्न है, जिसका निर्णय उधारी की आवृत्ति, मात्रा एवं नियमितता के आधार पर होता है।',
      { heading: 'पंजीकरण क्यों महत्त्वपूर्ण है: ऋण की वसूली' },
      'धारा 11-ज के अनुसार सिविल न्यायालय साहूकार द्वारा ऋण वसूली हेतु प्रस्तुत वाद पर तब तक कार्यवाही नहीं करेगा जब तक उसे यह समाधान न हो जाए कि साहूकार के पास वैध पंजीकरण प्रमाणपत्र है, अथवा उसे इसकी आवश्यकता नहीं है। मध्य प्रदेश उच्च न्यायालय ने अनेक प्रकरणों में इस रोक को लागू कर अपंजीकृत साहूकारों के वादों को अपोषणीय माना है। व्यवहार में इसका परिणाम यह हो सकता है कि ऋण सिविल न्यायालयों के माध्यम से वसूल ही न हो सके।',
      'आवश्यक पंजीकरण के बिना उधार देना अधिनियम के अंतर्गत जुर्माने से दंडनीय अपराध भी है।',
      { heading: 'पंजीकृत साहूकार के कर्तव्य' },
      {
        bullets: [
          'अधिनियम एवं नियमों में विहित रीति से प्रत्येक ऋण का नियमित लेखा रखें।',
          'अधिनियम की अपेक्षा अनुसार ऋणी को लेखा-विवरण, तथा प्राप्त भुगतानों की रसीदें दें।',
          'जिस-जिस जिले में धन उधार दिया जाता है, उस प्रत्येक जिले हेतु वैध पंजीकरण रखें, तथा नियमों के अनुसार उसे अद्यतन रखें।',
          'विधिसम्मत सीमा में ब्याज लें। सूदखोरी ऋण अधिनियम, 1918 के अंतर्गत, ब्याज अत्यधिक एवं संव्यवहार सारतः अनुचित होने पर न्यायालय संव्यवहार को पुनः खोलकर ऋणी को राहत दे सकता है।',
        ],
      },
      { heading: 'पंजीकरण की सामान्य प्रक्रिया' },
      {
        steps: [
          'पुष्टि करें कि गतिविधि अधिनियम के अंतर्गत साहूकारी व्यवसाय है, तथा कोई छूट लागू नहीं होती।',
          'पहचान एवं पते के प्रमाण, व्यवसाय के विवरण तथा व्यवसाय के स्थान सहित विहित प्रपत्र में आवेदन तैयार करें।',
          'विहित शुल्क सहित जिले के पंजीकरण प्राधिकारी के समक्ष प्रस्तुत करें।',
          'प्राधिकारी द्वारा किए गए किसी भी सत्यापन अथवा जाँच का उत्तर दें।',
          'पंजीकरण प्रमाणपत्र प्राप्त करें, उसे अद्यतन रखें, तथा पहले ऋण से ही विहित लेखे संधारित करें।',
        ],
      },
      { heading: 'कब कोई अन्य विधि लागू होती है' },
      {
        bullets: [
          'जिस कंपनी का प्रधान व्यवसाय उधार देना है, उसे सामान्यतः गैर-बैंकिंग वित्तीय कंपनी के रूप में भारतीय रिज़र्व बैंक से पंजीकरण प्रमाणपत्र लेना होता है (धारा 45-IA, भारतीय रिज़र्व बैंक अधिनियम, 1934)।',
          'जनता से धन एकत्र कर उधारी व्यवसाय चलाना अविनियमित जमा योजना पाबंदी अधिनियम, 2019 के दायरे में आ सकता है, जिसमें गंभीर आपराधिक दंड हैं।',
          'मध्य प्रदेश के अनुसूचित क्षेत्रों में अनुसूचित जनजातियों के सदस्यों को उधार देने पर पृथक एवं अधिक कठोर विनियम लागू होते हैं।',
          'किसी विनियमित संस्था की संलग्नता होने पर डिजिटल प्लेटफ़ॉर्म के माध्यम से उधारी रिज़र्व बैंक के डिजिटल ऋण संबंधी निर्देशों के अधीन है।',
        ],
      },
      { heading: 'ऋणियों हेतु' },
      'जिस ऋणी पर किसी अपंजीकृत साहूकार द्वारा भुगतान का दबाव डाला जा रहा हो, अथवा जिससे अत्यधिक प्रतीत होने वाला ब्याज लिया जा रहा हो, उसे कोई भुगतान करने अथवा नया दस्तावेज़ हस्ताक्षरित करने से पूर्व परामर्श लेना चाहिए। साहूकार का पंजीकरण, रखे गए लेखे तथा ऋण की शर्तें — प्रत्येक यह प्रभावित कर सकती है कि क्या वसूलनीय है। बलपूर्वक वसूली — धमकी, भयभीत करना, अथवा विधिक प्रक्रिया के बिना संपत्ति लेना — वसूली का विधिसम्मत साधन नहीं है, तथा इसकी सूचना पुलिस को दी जा सकती है।',
    ],
    sources: [
      'Madhya Pradesh Money-Lenders Act, 1934 (Sahukar Adhiniyam) — Sections 11-B, 11-F and 11-H',
      'Usurious Loans Act, 1918',
      'Reserve Bank of India Act, 1934 — Section 45-IA',
      'Banning of Unregulated Deposit Schemes Act, 2019',
    ],
    sourcesHi: [
      'मध्य प्रदेश साहूकार अधिनियम, 1934 — धाराएँ 11-ख, 11-च एवं 11-ज',
      'सूदखोरी ऋण अधिनियम, 1918',
      'भारतीय रिज़र्व बैंक अधिनियम, 1934 — धारा 45-IA',
      'अविनियमित जमा योजना पाबंदी अधिनियम, 2019',
    ],
  },
  {
    slug: 'cheque-bounce-section-138',
    image: photo('1763872867598-b1b5f769d7e3', '&rect=600,0,2856,1450'), // pen on a cheque; cropped above the $ / DOLLARS line
    contentType: 'Article',
    date: '2026-10-27',
    lawAsOf: LAW_AS_OF,
    headline: 'Cheque Bounce under Section 138: The Timeline That Decides Your Case',
    headlineHi: 'धारा 138 के अंतर्गत चेक अनादरण: समय-सीमा जो आपके प्रकरण का निर्णय करती है',
    excerpt: 'A dishonoured cheque gives a strong remedy — but only if each step is taken within its statutory window. The deadlines, the trial, and the Supreme Court’s 2025 guidelines on settlement.',
    excerptHi: 'अनादरित चेक एक सशक्त उपचार देता है — किंतु तभी, जब प्रत्येक चरण अपनी सांविधिक समय-सीमा में उठाया जाए। समय-सीमाएँ, विचारण, तथा समझौते पर सर्वोच्च न्यायालय के 2025 के दिशानिर्देश।',
    practiceAreaTag: 'Debt Recovery & Section 138 NI Act',
    practiceAreaTagHi: 'ऋण वसूली एवं धारा 138',
    practiceAreaSlug: 'debt-recovery-management',
    body: [
      'Section 138 of the Negotiable Instruments Act, 1881 makes it an offence when a cheque, issued to discharge a legally enforceable debt or liability, is returned unpaid. The offence is punishable with imprisonment of up to two years, or a fine of up to twice the cheque amount, or both. But it is complete only when a series of statutory steps has been taken in time — and each step has its own deadline.',
      { heading: 'When Section 138 applies' },
      {
        bullets: [
          'The cheque was drawn by the accused on an account maintained by them.',
          'It was given to discharge, wholly or partly, a legally enforceable debt or other liability.',
          'It was returned unpaid because the funds were insufficient or exceeded the arrangement with the bank. Courts have also applied the section to returns such as “account closed” and “payment stopped by drawer” where the facts show an attempt to avoid payment.',
        ],
      },
      'Under Section 139, once the cheque and the signature on it are admitted, the court presumes that it was issued for a debt or liability. The presumption is rebuttable: the accused can show, on a preponderance of probabilities, that no enforceable debt existed (Rangappa v. Sri Mohan, 2010).',
      { heading: 'The timeline, step by step' },
      {
        steps: [
          'Present the cheque within its validity period. Under Reserve Bank directions in force since 1 April 2012, a cheque is valid for three months from the date it bears.',
          'If it is dishonoured, send a written demand notice to the drawer within 30 days of receiving information of the dishonour from the bank. Use a mode of delivery that leaves proof of dispatch and delivery, addressed correctly.',
          'The drawer has 15 days from receiving the notice to pay the cheque amount.',
          'If the drawer does not pay, the cause of action arises when those 15 days expire. The complaint must be filed within one month of that date (Section 142(1)(b)). A later complaint can be taken up only if the court condones the delay for sufficient cause.',
          'File the complaint before the Magistrate within whose jurisdiction the payee’s bank branch is situated, where the cheque was delivered for collection through the payee’s account (Section 142(2), inserted in 2015).',
        ],
      },
      { note: 'A complaint filed before the drawer’s 15-day payment period has run out is premature. Count every period from the date of actual receipt, and keep proof of each date.' },
      { heading: 'During the case' },
      {
        bullets: [
          'Cases are to be tried summarily as far as possible (Section 143).',
          'The court may order the accused to pay the complainant interim compensation of up to 20% of the cheque amount (Section 143A).',
          'If a convicted accused appeals, the appellate court may require a deposit of at least 20% of the fine or compensation awarded (Section 148).',
          'Where the drawer is a company or firm, the persons in charge of and responsible for its business can also be prosecuted — but the complaint must specifically state the role of each of them (Section 141).',
          'The offence is compoundable (Section 147): the parties can settle at any stage.',
        ],
      },
      { heading: 'Settlement and the 2025 Supreme Court guidelines' },
      'In Sanjabij Tari v. Kishore S. Borcar (2025), the Supreme Court revised the guidelines on compounding first laid down in Damodar S. Prabhu v. Sayed Babalal H. (2010). Settlement before the accused’s evidence is recorded may be allowed without costs; later settlement attracts costs that rise as the case moves up — 5% of the cheque amount before the trial court’s judgment, and higher percentages in appeal or revision. The Court also issued directions to speed up trials, including service of summons by electronic means and allowing the accused to pay the cheque amount at the outset of the case.',
      'The same judgment held that a loan advanced in cash in breach of the income-tax restriction on cash transactions does not, by that fact alone, cease to be a legally enforceable debt for the purposes of Section 138.',
      { heading: 'Civil recovery alongside' },
      'A Section 138 complaint punishes the dishonour; it is not a substitute for a money decree. A creditor can file a civil suit for recovery at the same time — often a summary suit under Order XXXVII of the Code of Civil Procedure, in which the defendant must obtain the court’s leave to defend. Where the debt arises from a commercial transaction of the specified value, the Commercial Courts Act, 2015 governs the suit.',
      { heading: 'If you have received a notice' },
      'A drawer who receives a demand notice still has 15 days to pay and end the matter. If the debt is disputed, the reply to the notice, and the documents supporting it, often shape the defence at trial. Common defences include the absence of a legally enforceable debt, a cheque given as security when no debt had become payable on the date of presentation (Sripati Singh v. State of Jharkhand, 2021), defects in the notice, and limitation. Advice should be taken before the 15 days run out.',
    ],
    bodyHi: [
      'परक्राम्य लिखत अधिनियम, 1881 की धारा 138 के अंतर्गत, विधितः प्रवर्तनीय ऋण अथवा दायित्व के निर्वहन हेतु जारी चेक का बिना भुगतान लौटना अपराध है। यह अपराध दो वर्ष तक के कारावास, अथवा चेक की राशि के दोगुने तक के जुर्माने, अथवा दोनों से दंडनीय है। किंतु यह अपराध तभी पूर्ण होता है जब सांविधिक चरणों की शृंखला समय पर पूरी की गई हो — और प्रत्येक चरण की अपनी समय-सीमा है।',
      { heading: 'धारा 138 कब लागू होती है' },
      {
        bullets: [
          'चेक अभियुक्त द्वारा उसके द्वारा संधारित खाते पर आहरित किया गया हो।',
          'चेक किसी विधितः प्रवर्तनीय ऋण अथवा अन्य दायित्व के पूर्णतः अथवा अंशतः निर्वहन हेतु दिया गया हो।',
          'चेक अपर्याप्त निधि अथवा बैंक के साथ व्यवस्था से अधिक राशि होने के कारण बिना भुगतान लौटा हो। न्यायालयों ने “खाता बंद” एवं “आहर्ता द्वारा भुगतान रोका गया” जैसे कारणों से लौटे चेकों पर भी, तथ्यों से भुगतान टालने का प्रयास प्रकट होने पर, यह धारा लागू की है।',
        ],
      },
      'धारा 139 के अंतर्गत चेक एवं उस पर हस्ताक्षर स्वीकार होने पर न्यायालय उपधारणा करता है कि चेक ऋण अथवा दायित्व हेतु जारी किया गया था। यह उपधारणा खंडनीय है: अभियुक्त अधिसंभाव्यता की प्रबलता के आधार पर दर्शा सकता है कि कोई प्रवर्तनीय ऋण विद्यमान नहीं था (रंगप्पा बनाम श्री मोहन, 2010)।',
      { heading: 'समय-सीमा, चरणबद्ध' },
      {
        steps: [
          'चेक को उसकी वैधता अवधि में प्रस्तुत करें। 1 अप्रैल 2012 से प्रभावी रिज़र्व बैंक के निर्देशों के अंतर्गत चेक उस पर अंकित तिथि से तीन माह तक वैध होता है।',
          'अनादरण होने पर, बैंक से अनादरण की सूचना प्राप्त होने के 30 दिनों के भीतर आहर्ता को लिखित मांग सूचना भेजें। सही पते पर, ऐसे माध्यम से भेजें जिससे प्रेषण एवं प्राप्ति का प्रमाण रहे।',
          'सूचना प्राप्ति से 15 दिनों के भीतर आहर्ता को चेक की राशि का भुगतान करना होता है।',
          'भुगतान न होने पर उन 15 दिनों की समाप्ति पर वाद-हेतुक उत्पन्न होता है। परिवाद उस तिथि से एक माह के भीतर प्रस्तुत करना होता है (धारा 142(1)(ख))। विलंबित परिवाद तभी ग्रहण होता है जब न्यायालय पर्याप्त कारण होने पर विलंब क्षमा करे।',
          'जहाँ चेक आदाता के खाते के माध्यम से संग्रहण हेतु दिया गया हो, वहाँ उस मजिस्ट्रेट के समक्ष परिवाद प्रस्तुत करें जिसके क्षेत्राधिकार में आदाता की बैंक शाखा स्थित है (धारा 142(2), 2015 में अंतःस्थापित)।',
        ],
      },
      { note: 'आहर्ता की 15 दिन की भुगतान अवधि समाप्त होने से पूर्व प्रस्तुत परिवाद समयपूर्व है। प्रत्येक अवधि वास्तविक प्राप्ति की तिथि से गिनें, तथा प्रत्येक तिथि का प्रमाण सुरक्षित रखें।' },
      { heading: 'प्रकरण के दौरान' },
      {
        bullets: [
          'यथासंभव प्रकरणों का संक्षिप्त विचारण होना है (धारा 143)।',
          'न्यायालय अभियुक्त को परिवादी को चेक की राशि के 20% तक अंतरिम प्रतिकर देने का आदेश दे सकता है (धारा 143A)।',
          'दोषसिद्ध अभियुक्त के अपील करने पर अपीलीय न्यायालय अधिनिर्णीत जुर्माने अथवा प्रतिकर का कम से कम 20% जमा कराने की अपेक्षा कर सकता है (धारा 148)।',
          'आहर्ता कंपनी अथवा फर्म होने पर उसके कारोबार के प्रभारी एवं उत्तरदायी व्यक्तियों पर भी अभियोजन चल सकता है — किंतु परिवाद में उनमें से प्रत्येक की भूमिका विशिष्ट रूप से बतानी होगी (धारा 141)।',
          'यह अपराध शमनीय है (धारा 147): पक्षकार किसी भी चरण पर समझौता कर सकते हैं।',
        ],
      },
      { heading: 'समझौता एवं सर्वोच्च न्यायालय के 2025 के दिशानिर्देश' },
      'संजाबिज तारी बनाम किशोर एस. बोरकर (2025) में सर्वोच्च न्यायालय ने दामोदर एस. प्रभु बनाम सैयद बाबालाल एच. (2010) में प्रतिपादित शमन संबंधी दिशानिर्देशों को संशोधित किया। अभियुक्त का साक्ष्य अभिलिखित होने से पूर्व समझौता बिना व्यय के अनुमत हो सकता है; बाद के समझौते पर व्यय लगता है जो प्रकरण के आगे बढ़ने के साथ बढ़ता है — विचारण न्यायालय के निर्णय से पूर्व चेक राशि का 5%, तथा अपील अथवा पुनरीक्षण में अधिक प्रतिशत। न्यायालय ने विचारण शीघ्र करने हेतु निर्देश भी दिए, जिनमें इलेक्ट्रॉनिक माध्यम से समन की तामील तथा प्रकरण के आरंभ में ही अभियुक्त को चेक राशि का भुगतान करने का अवसर सम्मिलित है।',
      'इसी निर्णय में अभिनिर्धारित किया गया कि नकद लेनदेन पर आयकर विधि के प्रतिबंध का उल्लंघन कर नकद दिया गया ऋण, केवल इसी कारण, धारा 138 के प्रयोजन हेतु विधितः अप्रवर्तनीय नहीं हो जाता।',
      { heading: 'साथ-साथ सिविल वसूली' },
      'धारा 138 का परिवाद अनादरण को दंडित करता है; यह धन-डिक्री का विकल्प नहीं है। लेनदार साथ-साथ वसूली हेतु सिविल वाद भी प्रस्तुत कर सकता है — प्रायः सिविल प्रक्रिया संहिता के आदेश XXXVII के अंतर्गत संक्षिप्त वाद, जिसमें प्रतिवादी को प्रतिरक्षा हेतु न्यायालय की अनुमति लेनी होती है। जहाँ ऋण विनिर्दिष्ट मूल्य के वाणिज्यिक संव्यवहार से उत्पन्न हो, वहाँ वाद वाणिज्यिक न्यायालय अधिनियम, 2015 से शासित होता है।',
      { heading: 'यदि आपको सूचना प्राप्त हुई है' },
      'मांग सूचना प्राप्त करने वाले आहर्ता के पास भुगतान कर मामला समाप्त करने हेतु अभी भी 15 दिन होते हैं। ऋण विवादित होने पर सूचना का उत्तर तथा उसके समर्थक दस्तावेज़ प्रायः विचारण में प्रतिरक्षा को आकार देते हैं। सामान्य प्रतिरक्षाओं में विधितः प्रवर्तनीय ऋण का अभाव, ऐसा प्रतिभूति चेक जिसकी प्रस्तुति की तिथि पर कोई ऋण देय नहीं हुआ था (श्रीपति सिंह बनाम झारखंड राज्य, 2021), सूचना की त्रुटियाँ तथा परिसीमा सम्मिलित हैं। 15 दिन समाप्त होने से पूर्व परामर्श लेना चाहिए।',
    ],
    sources: [
      'Negotiable Instruments Act, 1881 — Sections 138, 139, 141, 142, 143, 143A, 147 and 148',
      'Reserve Bank of India directions on the validity period of cheques (effective 1 April 2012)',
      'Rangappa v. Sri Mohan — Supreme Court, 2010',
      'Sripati Singh v. State of Jharkhand — Supreme Court, 2021',
      'Sanjabij Tari v. Kishore S. Borcar, 2025 INSC 1158 — Supreme Court',
      'Code of Civil Procedure, 1908 — Order XXXVII',
    ],
    sourcesHi: [
      'परक्राम्य लिखत अधिनियम, 1881 — धाराएँ 138, 139, 141, 142, 143, 143A, 147 एवं 148',
      'चेक की वैधता अवधि पर भारतीय रिज़र्व बैंक के निर्देश (1 अप्रैल 2012 से प्रभावी)',
      'रंगप्पा बनाम श्री मोहन — सर्वोच्च न्यायालय, 2010',
      'श्रीपति सिंह बनाम झारखंड राज्य — सर्वोच्च न्यायालय, 2021',
      'संजाबिज तारी बनाम किशोर एस. बोरकर, 2025 INSC 1158 — सर्वोच्च न्यायालय',
      'सिविल प्रक्रिया संहिता, 1908 — आदेश XXXVII',
    ],
  },
  {
    slug: 'hybrid-med-arb-explained',
    image: photo('1780733065500-4284d227f58c'), // handshake across a desk over signed papers
    contentType: 'Article',
    date: '2026-10-20',
    lawAsOf: LAW_AS_OF,
    headline: 'Hybrid Med-Arb: Settlement First, a Binding Award if Needed',
    headlineHi: 'हाइब्रिड मेड-आर्ब: पहले समझौता, आवश्यकता होने पर बाध्यकारी अधिनिर्णय',
    excerpt: 'How mediation and arbitration combine into one continuous process, its footing in Indian law, the question of the same neutral acting twice, and what a Med-Arb clause should say.',
    excerptHi: 'मध्यस्थता एवं माध्यस्थम् एक सतत प्रक्रिया में कैसे जुड़ते हैं, भारतीय विधि में इसका आधार, एक ही तटस्थ व्यक्ति के दोनों भूमिकाएँ निभाने का प्रश्न, तथा मेड-आर्ब खंड में क्या होना चाहिए।',
    practiceAreaTag: 'Arbitration, Mediation & Hybrid Med-Arb',
    practiceAreaTagHi: 'माध्यस्थम्, मध्यस्थता एवं हाइब्रिड मेड-आर्ब',
    practiceAreaSlug: 'arbitration-dispute-resolution',
    body: [
      'Med-Arb is a two-stage process for resolving disputes. The parties first attempt mediation, in which a neutral helps them negotiate a settlement. If mediation fails — wholly or in part — the unresolved issues move to arbitration and end in a binding award. The parties get a genuine opportunity to settle without losing the certainty of a final decision if they cannot.',
      { heading: 'The legal footing in India' },
      'Indian law supports both stages. Section 30 of the Arbitration and Conciliation Act, 1996 allows an arbitral tribunal, with the agreement of the parties, to use mediation, conciliation or other procedures at any time during the arbitral proceedings to encourage settlement. If the parties settle, the tribunal may record the settlement as an arbitral award on agreed terms, which has the same status and effect as any other award and is enforceable like a decree of court (Section 36).',
      'That status matters. The Mediation Act, 2023 has so far been brought into force only in part. As at the date to which this article states the law, the provisions that would make a mediated settlement agreement directly enforceable like a judgment have not been notified. A stand-alone private mediated settlement is therefore, for now, enforceable as a contract — while a settlement recorded as an award within an arbitration can be executed directly.',
      { heading: 'How a Med-Arb process typically runs' },
      {
        steps: [
          'A dispute arises under a contract containing a Med-Arb clause, and one party gives written notice of the dispute.',
          'A neutral is appointed as the clause provides — by agreement of the parties, or through a named institution.',
          'Mediation takes place within a fixed window, commonly 30 to 60 days, which the parties can extend by agreement.',
          'If the parties settle, the terms are recorded in a signed settlement. Where an arbitral tribunal is in place, the settlement can be recorded as an award on agreed terms so that it is enforceable as a decree.',
          'If they do not settle, or settle only some issues, the remaining issues go to arbitration — before the same neutral or a different arbitrator, as the clause provides.',
          'The tribunal hears the parties and makes an award, which is final and binding, subject to a limited challenge in court under Section 34.',
        ],
      },
      { heading: 'The key question: should the mediator become the arbitrator?' },
      'Using the same neutral saves time and cost, because they already know the dispute. But it raises a real concern. In mediation, parties often speak frankly and share information privately with the mediator. If the mediator then becomes the arbitrator, a party may later argue that the award was influenced by information the other side never had a chance to answer — a ground on which an award may be attacked.',
      'For conciliation under Part III of the 1996 Act, Section 80 provides that the conciliator shall not act as an arbitrator in the same dispute unless the parties agree otherwise. A well-drafted clause deals with the point expressly — either by providing for a different arbitrator, or by recording the parties’ informed consent for the mediator to continue, preferably confirmed again in writing when the arbitration begins.',
      { heading: 'Where Indian law already requires mediation first' },
      {
        bullets: [
          'For commercial disputes of a specified value, Section 12A of the Commercial Courts Act, 2015 requires pre-institution mediation before a suit is filed, unless urgent interim relief is sought. The Supreme Court held this requirement mandatory in Patil Automation v. Rakheja Engineers (2022).',
          'Under Section 18 of the MSMED Act, 2006, a micro or small supplier’s claim for delayed payment goes to the Micro and Small Enterprises Facilitation Council, which first conducts conciliation and, if that fails, takes up the dispute for arbitration — a statutory form of Med-Arb.',
          'A Consumer Commission may refer a complaint to mediation where there is scope for settlement (Section 37, Consumer Protection Act, 2019).',
        ],
      },
      { heading: 'What a Med-Arb clause should cover' },
      {
        bullets: [
          'The trigger: what counts as a dispute, and how notice is given.',
          'The institution and rules (if any), and how the neutral is appointed.',
          'The time allowed for mediation before arbitration may begin.',
          'Whether the mediator may act as arbitrator, and the consent required.',
          'The seat of arbitration, which fixes the court with supervisory jurisdiction.',
          'The number of arbitrators, the language and the governing law.',
          'Whether hearings may be held online, and how documents are exchanged.',
          'Confidentiality of the mediation, and that offers made in it cannot be relied on in the arbitration.',
          'Liberty to approach a court for urgent interim relief under Section 9 while the process is under way.',
        ],
      },
      'Statutory timelines continue to apply once the arbitration begins: the statements of claim and defence are to be completed within six months of the arbitrator receiving notice of appointment (Section 23(4)), and the award is to be made within twelve months of completion of pleadings — extendable by six months with the parties’ consent, and thereafter only by the court (Section 29A).',
    ],
    bodyHi: [
      'मेड-आर्ब विवाद समाधान की दो-चरणीय प्रक्रिया है। पक्षकार पहले मध्यस्थता का प्रयास करते हैं, जिसमें एक तटस्थ व्यक्ति समझौते तक पहुँचने में उनकी सहायता करता है। मध्यस्थता पूर्णतः अथवा अंशतः विफल होने पर शेष मुद्दे माध्यस्थम् में जाते हैं और बाध्यकारी अधिनिर्णय में समाप्त होते हैं। पक्षकारों को समझौते का वास्तविक अवसर मिलता है, और समझौता न होने पर अंतिम निर्णय की निश्चितता भी बनी रहती है।',
      { heading: 'भारत में विधिक आधार' },
      'भारतीय विधि दोनों चरणों का समर्थन करती है। माध्यस्थम् एवं सुलह अधिनियम, 1996 की धारा 30 माध्यस्थम् अधिकरण को, पक्षकारों की सहमति से, समझौते को प्रोत्साहित करने हेतु माध्यस्थम् कार्यवाही के दौरान किसी भी समय मध्यस्थता, सुलह अथवा अन्य प्रक्रियाओं का उपयोग करने की अनुमति देती है। समझौता होने पर अधिकरण उसे सहमत शर्तों पर माध्यस्थम् अधिनिर्णय के रूप में अभिलिखित कर सकता है, जिसकी प्रास्थिति एवं प्रभाव किसी अन्य अधिनिर्णय के समान है तथा जो न्यायालय की डिक्री की भाँति प्रवर्तनीय है (धारा 36)।',
      'यह प्रास्थिति महत्त्वपूर्ण है। मध्यस्थता अधिनियम, 2023 अभी तक केवल आंशिक रूप से प्रवृत्त हुआ है। इस लेख में विधि जिस तिथि तक बताई गई है, उस तिथि तक मध्यस्थता से हुए समझौता करार को निर्णय की भाँति सीधे प्रवर्तनीय बनाने वाले प्रावधान अधिसूचित नहीं हुए हैं। अतः फ़िलहाल एक स्वतंत्र निजी मध्यस्थता समझौता संविदा के रूप में प्रवर्तनीय है — जबकि माध्यस्थम् के भीतर अधिनिर्णय के रूप में अभिलिखित समझौते का सीधे निष्पादन हो सकता है।',
      { heading: 'मेड-आर्ब प्रक्रिया सामान्यतः कैसे चलती है' },
      {
        steps: [
          'मेड-आर्ब खंड युक्त संविदा के अंतर्गत विवाद उत्पन्न होता है, और एक पक्षकार विवाद की लिखित सूचना देता है।',
          'खंड के अनुसार तटस्थ व्यक्ति नियुक्त होता है — पक्षकारों की सहमति से, अथवा किसी नामित संस्था के माध्यम से।',
          'मध्यस्थता एक निश्चित अवधि में होती है, सामान्यतः 30 से 60 दिन, जिसे पक्षकार सहमति से बढ़ा सकते हैं।',
          'समझौता होने पर शर्तें एक हस्ताक्षरित समझौते में अभिलिखित की जाती हैं। माध्यस्थम् अधिकरण गठित होने की स्थिति में समझौते को सहमत शर्तों पर अधिनिर्णय के रूप में अभिलिखित किया जा सकता है, जिससे वह डिक्री की भाँति प्रवर्तनीय हो।',
          'समझौता न होने पर, अथवा केवल कुछ मुद्दों पर होने पर, शेष मुद्दे खंड के अनुसार उसी तटस्थ अथवा भिन्न मध्यस्थ के समक्ष माध्यस्थम् में जाते हैं।',
          'अधिकरण पक्षकारों को सुनकर अधिनिर्णय पारित करता है, जो धारा 34 के अंतर्गत न्यायालय में सीमित चुनौती के अधीन अंतिम एवं बाध्यकारी है।',
        ],
      },
      { heading: 'मुख्य प्रश्न: क्या मध्यस्थ ही आर्बिट्रेटर बने?' },
      'एक ही तटस्थ व्यक्ति के रहने से समय एवं व्यय बचता है, क्योंकि वह विवाद से पहले से परिचित होता है। किंतु इससे एक वास्तविक चिंता उत्पन्न होती है। मध्यस्थता में पक्षकार प्रायः खुलकर बात करते हैं तथा मध्यस्थ के साथ निजी रूप से जानकारी साझा करते हैं। यदि वही मध्यस्थ बाद में आर्बिट्रेटर बनता है, तो कोई पक्षकार यह तर्क दे सकता है कि अधिनिर्णय ऐसी जानकारी से प्रभावित था जिसका उत्तर देने का अवसर दूसरे पक्ष को कभी नहीं मिला — यह एक ऐसा आधार है जिस पर अधिनिर्णय को चुनौती दी जा सकती है।',
      '1996 के अधिनियम के भाग III के अंतर्गत सुलह हेतु धारा 80 प्रावधान करती है कि, पक्षकारों द्वारा अन्यथा सहमति न होने पर, सुलहकर्ता उसी विवाद में आर्बिट्रेटर के रूप में कार्य नहीं करेगा। सुविचारित खंड इस बिंदु को स्पष्ट रूप से संबोधित करता है — या तो भिन्न आर्बिट्रेटर का प्रावधान कर, अथवा मध्यस्थ के बने रहने हेतु पक्षकारों की सूचित सहमति अभिलिखित कर, जिसकी माध्यस्थम् आरंभ होने पर पुनः लिखित पुष्टि की जाए।',
      { heading: 'जहाँ भारतीय विधि पहले से मध्यस्थता अपेक्षित करती है' },
      {
        bullets: [
          'विनिर्दिष्ट मूल्य के वाणिज्यिक विवादों में वाणिज्यिक न्यायालय अधिनियम, 2015 की धारा 12A वाद प्रस्तुत करने से पूर्व संस्थापन-पूर्व मध्यस्थता अपेक्षित करती है, जब तक कि तत्काल अंतरिम राहत न माँगी गई हो। पाटिल ऑटोमेशन बनाम रखेजा इंजीनियर्स (2022) में सर्वोच्च न्यायालय ने इस अपेक्षा को आज्ञापक माना।',
          'एमएसएमईडी अधिनियम, 2006 की धारा 18 के अंतर्गत सूक्ष्म अथवा लघु आपूर्तिकर्ता का विलंबित भुगतान संबंधी दावा सूक्ष्म एवं लघु उद्यम सुविधा परिषद में जाता है, जो पहले सुलह कराती है और उसके विफल होने पर विवाद को माध्यस्थम् हेतु ग्रहण करती है — मेड-आर्ब का एक सांविधिक रूप।',
          'समझौते की संभावना होने पर उपभोक्ता आयोग परिवाद को मध्यस्थता हेतु निर्दिष्ट कर सकता है (धारा 37, उपभोक्ता संरक्षण अधिनियम, 2019)।',
        ],
      },
      { heading: 'मेड-आर्ब खंड में क्या होना चाहिए' },
      {
        bullets: [
          'प्रवर्तन बिंदु: विवाद किसे माना जाएगा, और सूचना कैसे दी जाएगी।',
          'संस्था एवं नियम (यदि हों), तथा तटस्थ व्यक्ति की नियुक्ति की रीति।',
          'माध्यस्थम् आरंभ होने से पूर्व मध्यस्थता हेतु अनुमत समय।',
          'क्या मध्यस्थ आर्बिट्रेटर के रूप में कार्य कर सकता है, और इसके लिए अपेक्षित सहमति।',
          'माध्यस्थम् का स्थान (सीट), जो पर्यवेक्षी क्षेत्राधिकार वाले न्यायालय को निर्धारित करता है।',
          'आर्बिट्रेटरों की संख्या, भाषा एवं शासी विधि।',
          'क्या सुनवाई ऑनलाइन हो सकती है, तथा दस्तावेज़ों का आदान-प्रदान कैसे होगा।',
          'मध्यस्थता की गोपनीयता, तथा यह कि उसमें दिए गए प्रस्तावों पर माध्यस्थम् में निर्भर नहीं किया जा सकता।',
          'प्रक्रिया के दौरान धारा 9 के अंतर्गत तत्काल अंतरिम राहत हेतु न्यायालय जाने की स्वतंत्रता।',
        ],
      },
      'माध्यस्थम् आरंभ होने पर सांविधिक समय-सीमाएँ लागू रहती हैं: आर्बिट्रेटर को नियुक्ति की सूचना मिलने के छह माह के भीतर दावे एवं प्रतिरक्षा के कथन पूर्ण होने हैं (धारा 23(4)), तथा अभिवचन पूर्ण होने के बारह माह के भीतर अधिनिर्णय पारित होना है — पक्षकारों की सहमति से छह माह तक बढ़ाया जा सकता है, उसके पश्चात केवल न्यायालय द्वारा (धारा 29A)।',
    ],
    sources: [
      'Arbitration and Conciliation Act, 1996 — Sections 9, 23(4), 29A, 30, 34, 36 and 80',
      'Mediation Act, 2023 — in force in part (Notification S.O. 4384(E), 9 October 2023)',
      'Commercial Courts Act, 2015 — Section 12A',
      'Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. — Supreme Court, 2022',
      'Micro, Small and Medium Enterprises Development Act, 2006 — Section 18',
      'Consumer Protection Act, 2019 — Section 37',
    ],
    sourcesHi: [
      'माध्यस्थम् एवं सुलह अधिनियम, 1996 — धाराएँ 9, 23(4), 29A, 30, 34, 36 एवं 80',
      'मध्यस्थता अधिनियम, 2023 — आंशिक रूप से प्रवृत्त (अधिसूचना का.आ. 4384(अ), 9 अक्टूबर 2023)',
      'वाणिज्यिक न्यायालय अधिनियम, 2015 — धारा 12A',
      'पाटिल ऑटोमेशन प्रा. लि. बनाम रखेजा इंजीनियर्स प्रा. लि. — सर्वोच्च न्यायालय, 2022',
      'सूक्ष्म, लघु एवं मध्यम उद्यम विकास अधिनियम, 2006 — धारा 18',
      'उपभोक्ता संरक्षण अधिनियम, 2019 — धारा 37',
    ],
  },
  {
    slug: 'consumer-complaint-which-commission',
    image: photo('1634733988138-bf2c3a2a13fa'), // card terminal printing a purchase receipt
    contentType: 'Article',
    date: '2026-10-13',
    lawAsOf: LAW_AS_OF,
    headline: 'Consumer Complaints: Which Commission, and What Comes After the Order',
    headlineHi: 'उपभोक्ता परिवाद: कौन-सा आयोग, और आदेश के पश्चात क्या',
    excerpt: 'Who can complain, which Commission has jurisdiction, the two-year limit, how a complaint proceeds, and the appeal, revision, review and execution routes under the Consumer Protection Act, 2019.',
    excerptHi: 'कौन परिवाद कर सकता है, किस आयोग को क्षेत्राधिकार है, दो वर्ष की परिसीमा, परिवाद की प्रक्रिया, तथा उपभोक्ता संरक्षण अधिनियम, 2019 के अंतर्गत अपील, पुनरीक्षण, पुनर्विलोकन एवं निष्पादन।',
    practiceAreaTag: 'Consumer Protection & Consumer Forum Matters',
    practiceAreaTagHi: 'उपभोक्ता संरक्षण एवं उपभोक्ता आयोग',
    practiceAreaSlug: 'consumer-protection',
    body: [
      'The Consumer Protection Act, 2019 gives consumers a quicker and less formal route than a civil suit for complaints about defective goods, deficient services, unfair trade practices and overcharging. Complaints are heard by Consumer Disputes Redressal Commissions at three levels — district, state and national.',
      { heading: 'Who can complain' },
      'A “consumer” is a person who buys goods or hires services for consideration (Section 2(7)). A person who buys for resale or for a commercial purpose is excluded — but buying goods or services exclusively to earn a livelihood through self-employment is not treated as a commercial purpose. Purchases made online, through teleshopping or by direct selling are covered. A complaint can also be filed by a registered consumer association, the Central or a State Government, or one consumer on behalf of many with the same interest.',
      { heading: 'Which Commission: pecuniary jurisdiction' },
      'Jurisdiction depends on the value of the consideration paid for the goods or services — not on the amount of compensation claimed. Under the Consumer Protection (Jurisdiction of the District Commission, the State Commission and the National Commission) Rules, 2021:',
      {
        bullets: [
          'District Commission: consideration paid up to ₹50 lakh.',
          'State Commission: above ₹50 lakh and up to ₹2 crore.',
          'National Commission: above ₹2 crore.',
        ],
      },
      'A complaint can be filed where the opposite party resides or carries on business, where the cause of action arose, or where the complainant resides or personally works for gain (Section 34(2)). Complaints can be filed online through the e-Jagriti portal. No fee is payable where the consideration paid is up to ₹5 lakh; above that, the fee follows a prescribed scale.',
      { heading: 'Time limit' },
      'A complaint must be filed within two years from the date on which the cause of action arose (Section 69). A Commission can admit a later complaint only if it is satisfied that there was sufficient cause for the delay, and records its reasons for condoning it.',
      { heading: 'How a complaint proceeds' },
      {
        steps: [
          'The Commission decides whether to admit the complaint, ordinarily within 21 days; if it does not decide within that time, the complaint is deemed admitted (Section 36(3)).',
          'Notice issues to the opposite party, which must file its version within the time allowed.',
          'At any stage, the Commission may refer the parties to mediation where there is scope for settlement (Section 37).',
          'The Act aims for a decision within three months of notice to the opposite party, or five months where goods need laboratory testing (Section 38(7)). In practice, timelines depend on the Commission’s workload.',
          'If the complaint succeeds, the Commission can order repair or replacement, a refund, compensation, discontinuance of an unfair practice, punitive damages in appropriate cases, and costs (Section 39).',
        ],
      },
      { heading: 'After the order: appeal, revision and review' },
      {
        bullets: [
          'Appeal from a District Commission: to the State Commission within 45 days, after depositing 50% of the amount ordered (Section 41).',
          'Appeal from a State Commission, in a complaint it decided itself: to the National Commission within 30 days, with a 50% deposit (Section 51).',
          'Appeal from the National Commission, in a complaint it decided itself: to the Supreme Court within 30 days, with a 50% deposit (Section 67).',
          'Revision: the State Commission can call for the record of a District Commission, and the National Commission that of a State Commission, where the lower Commission has exceeded or failed to exercise its jurisdiction, or acted illegally or with material irregularity (Sections 47(1)(b) and 58(1)(b)).',
          'Review: each Commission can review its own order for an error apparent on the face of the record, on an application made within 30 days (Sections 40, 50 and 60).',
        ],
      },
      { heading: 'Enforcing the order' },
      'An order that is not complied with can be enforced as if it were a decree of a civil court, including by attachment and sale of property (Section 71). Separately, failure to comply with a Commission’s order is an offence under Section 72, punishable with imprisonment of one month to three years, or a fine of ₹25,000 to ₹1 lakh, or both. The two remedies are independent: a consumer can pursue execution and also seek action for non-compliance.',
      { heading: 'Before filing' },
      {
        bullets: [
          'Keep the invoice, proof of payment, warranty, correspondence and photographs.',
          'Write to the seller or service provider first, setting out the problem and the relief sought; a reasoned reply, or the lack of one, is useful evidence.',
          'Where a practice affects consumers as a class, the Central Consumer Protection Authority can investigate unfair trade practices and misleading advertisements.',
          'Homebuyers can choose between the Consumer Commission and RERA; the choice should be made with the remedy sought in mind.',
        ],
      },
    ],
    bodyHi: [
      'उपभोक्ता संरक्षण अधिनियम, 2019 उपभोक्ताओं को दोषपूर्ण वस्तुओं, सेवा में कमी, अनुचित व्यापार व्यवहार एवं अधिक मूल्य वसूली संबंधी परिवादों हेतु सिविल वाद की तुलना में शीघ्र एवं कम औपचारिक मार्ग देता है। परिवादों की सुनवाई तीन स्तरों — जिला, राज्य एवं राष्ट्रीय — पर उपभोक्ता विवाद प्रतितोष आयोग करते हैं।',
      { heading: 'कौन परिवाद कर सकता है' },
      '“उपभोक्ता” वह व्यक्ति है जो प्रतिफल हेतु वस्तुएँ क्रय करता है अथवा सेवाएँ लेता है (धारा 2(7))। पुनर्विक्रय अथवा वाणिज्यिक प्रयोजन हेतु क्रय करने वाला अपवर्जित है — किंतु स्वरोज़गार द्वारा आजीविका अर्जित करने हेतु अनन्य रूप से क्रय की गई वस्तुएँ अथवा सेवाएँ वाणिज्यिक प्रयोजन नहीं मानी जातीं। ऑनलाइन, टेलीशॉपिंग अथवा प्रत्यक्ष विक्रय से किए गए क्रय भी सम्मिलित हैं। पंजीकृत उपभोक्ता संगम, केंद्र अथवा राज्य सरकार, अथवा समान हित वाले अनेक उपभोक्ताओं की ओर से एक उपभोक्ता भी परिवाद प्रस्तुत कर सकता है।',
      { heading: 'कौन-सा आयोग: आर्थिक क्षेत्राधिकार' },
      'क्षेत्राधिकार वस्तुओं अथवा सेवाओं हेतु भुगतान किए गए प्रतिफल के मूल्य पर निर्भर है — माँगे गए प्रतिकर की राशि पर नहीं। उपभोक्ता संरक्षण (जिला आयोग, राज्य आयोग एवं राष्ट्रीय आयोग का क्षेत्राधिकार) नियम, 2021 के अंतर्गत:',
      {
        bullets: [
          'जिला आयोग: भुगतान किया गया प्रतिफल ₹50 लाख तक।',
          'राज्य आयोग: ₹50 लाख से अधिक एवं ₹2 करोड़ तक।',
          'राष्ट्रीय आयोग: ₹2 करोड़ से अधिक।',
        ],
      },
      'परिवाद वहाँ प्रस्तुत किया जा सकता है जहाँ विरोधी पक्षकार निवास अथवा कारोबार करता है, जहाँ वाद-हेतुक उत्पन्न हुआ, अथवा जहाँ परिवादी निवास करता है अथवा अभिलाभ हेतु व्यक्तिगत रूप से कार्य करता है (धारा 34(2))। परिवाद ई-जागृति पोर्टल के माध्यम से ऑनलाइन प्रस्तुत किए जा सकते हैं। भुगतान किया गया प्रतिफल ₹5 लाख तक होने पर कोई शुल्क देय नहीं है; उससे अधिक होने पर शुल्क विहित मापमान के अनुसार है।',
      { heading: 'परिसीमा' },
      'परिवाद वाद-हेतुक उत्पन्न होने की तिथि से दो वर्ष के भीतर प्रस्तुत करना होता है (धारा 69)। विलंबित परिवाद को आयोग तभी ग्रहण कर सकता है जब उसे विलंब हेतु पर्याप्त कारण का समाधान हो, तथा वह विलंब क्षमा करने के कारण अभिलिखित करे।',
      { heading: 'परिवाद की प्रक्रिया' },
      {
        steps: [
          'आयोग सामान्यतः 21 दिनों के भीतर परिवाद ग्रहण करने का निर्णय करता है; उस अवधि में निर्णय न होने पर परिवाद ग्रहण किया गया माना जाता है (धारा 36(3))।',
          'विरोधी पक्षकार को सूचना जारी होती है, जिसे अनुमत समय में अपना पक्ष प्रस्तुत करना होता है।',
          'समझौते की संभावना होने पर आयोग किसी भी चरण पर पक्षकारों को मध्यस्थता हेतु निर्दिष्ट कर सकता है (धारा 37)।',
          'अधिनियम विरोधी पक्षकार को सूचना से तीन माह के भीतर, अथवा वस्तुओं के प्रयोगशाला परीक्षण की आवश्यकता होने पर पाँच माह के भीतर, निर्णय का लक्ष्य रखता है (धारा 38(7))। व्यवहार में समय-सीमा आयोग के कार्यभार पर निर्भर करती है।',
          'परिवाद सफल होने पर आयोग मरम्मत अथवा प्रतिस्थापन, राशि-वापसी, प्रतिकर, अनुचित व्यवहार की समाप्ति, उपयुक्त प्रकरणों में दंडात्मक नुकसानी, तथा व्यय का आदेश दे सकता है (धारा 39)।',
        ],
      },
      { heading: 'आदेश के पश्चात: अपील, पुनरीक्षण एवं पुनर्विलोकन' },
      {
        bullets: [
          'जिला आयोग के आदेश से: आदेशित राशि का 50% जमा कर 45 दिनों के भीतर राज्य आयोग में अपील (धारा 41)।',
          'राज्य आयोग द्वारा स्वयं निर्णीत परिवाद में: 50% जमा सहित 30 दिनों के भीतर राष्ट्रीय आयोग में अपील (धारा 51)।',
          'राष्ट्रीय आयोग द्वारा स्वयं निर्णीत परिवाद में: 50% जमा सहित 30 दिनों के भीतर सर्वोच्च न्यायालय में अपील (धारा 67)।',
          'पुनरीक्षण: जहाँ अधीनस्थ आयोग ने अपने क्षेत्राधिकार का अतिक्रमण किया हो अथवा उसका प्रयोग न किया हो, अथवा अवैध रूप से या तात्त्विक अनियमितता से कार्य किया हो, वहाँ राज्य आयोग जिला आयोग का, तथा राष्ट्रीय आयोग राज्य आयोग का अभिलेख मँगा सकता है (धाराएँ 47(1)(ख) एवं 58(1)(ख))।',
          'पुनर्विलोकन: अभिलेख पर प्रकट त्रुटि होने पर प्रत्येक आयोग 30 दिनों के भीतर किए गए आवेदन पर अपने आदेश का पुनर्विलोकन कर सकता है (धाराएँ 40, 50 एवं 60)।',
        ],
      },
      { heading: 'आदेश का प्रवर्तन' },
      'जिस आदेश का अनुपालन न हो, उसे सिविल न्यायालय की डिक्री की भाँति, संपत्ति की कुर्की एवं विक्रय सहित, प्रवर्तित कराया जा सकता है (धारा 71)। पृथक रूप से, आयोग के आदेश का अनुपालन न करना धारा 72 के अंतर्गत अपराध है, जो एक माह से तीन वर्ष तक के कारावास, अथवा ₹25,000 से ₹1 लाख तक के जुर्माने, अथवा दोनों से दंडनीय है। दोनों उपचार स्वतंत्र हैं: उपभोक्ता निष्पादन भी करा सकता है और अननुपालन हेतु कार्यवाही भी।',
      { heading: 'परिवाद से पूर्व' },
      {
        bullets: [
          'बीजक, भुगतान का प्रमाण, वारंटी, पत्राचार एवं फ़ोटोग्राफ़ सुरक्षित रखें।',
          'पहले विक्रेता अथवा सेवा प्रदाता को समस्या एवं अपेक्षित राहत बताते हुए लिखें; तर्कसंगत उत्तर, अथवा उत्तर का अभाव, उपयोगी साक्ष्य है।',
          'जहाँ कोई व्यवहार उपभोक्ताओं को एक वर्ग के रूप में प्रभावित करता हो, वहाँ केंद्रीय उपभोक्ता संरक्षण प्राधिकरण अनुचित व्यापार व्यवहार एवं भ्रामक विज्ञापनों की जाँच कर सकता है।',
          'गृह-क्रेता उपभोक्ता आयोग एवं रेरा में से चयन कर सकते हैं; चयन अपेक्षित उपचार को ध्यान में रखकर करना चाहिए।',
        ],
      },
    ],
    sources: [
      'Consumer Protection Act, 2019 — Sections 2(7), 34, 36–41, 47, 50, 51, 58, 60, 67, 69, 71 and 72',
      'Consumer Protection (Jurisdiction of the District Commission, the State Commission and the National Commission) Rules, 2021',
      'Consumer Protection (Consumer Disputes Redressal Commissions) Rules, 2020',
    ],
    sourcesHi: [
      'उपभोक्ता संरक्षण अधिनियम, 2019 — धाराएँ 2(7), 34, 36–41, 47, 50, 51, 58, 60, 67, 69, 71 एवं 72',
      'उपभोक्ता संरक्षण (जिला आयोग, राज्य आयोग एवं राष्ट्रीय आयोग का क्षेत्राधिकार) नियम, 2021',
      'उपभोक्ता संरक्षण (उपभोक्ता विवाद प्रतितोष आयोग) नियम, 2020',
    ],
  },
  {
    slug: 'dpdp-act-business-checklist',
    image: photo('1633265486064-086b219458ec'), // padlock on a keyboard beside payment cards
    contentType: 'Article',
    date: '2026-10-06',
    lawAsOf: LAW_AS_OF,
    headline: 'The DPDP Act, 2023: A Compliance Checklist for Businesses',
    headlineHi: 'डीपीडीपी अधिनियम, 2023: व्यवसायों हेतु अनुपालन जाँच-सूची',
    excerpt: 'When the Digital Personal Data Protection Act’s obligations take effect, what it asks of any business that handles customer or employee data, and the penalties for getting it wrong.',
    excerptHi: 'डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम के दायित्व कब प्रभावी होते हैं, ग्राहकों अथवा कर्मचारियों का डेटा रखने वाले प्रत्येक व्यवसाय से यह क्या अपेक्षा करता है, तथा चूक होने पर शास्तियाँ।',
    practiceAreaTag: 'Cyber Law, Data Privacy & Defamation',
    practiceAreaTagHi: 'साइबर विधि, डेटा गोपनीयता एवं मानहानि',
    practiceAreaSlug: 'cyber-defamation',
    body: [
      'The Digital Personal Data Protection Act, 2023 is India’s first comprehensive data protection law. It applies to the processing of personal data in digital form within India — and to processing outside India where it is connected with offering goods or services to people in India. For most businesses, that means customer records, website and app users, marketing lists and employee files.',
      { heading: 'When the obligations apply' },
      'The Act is being brought into force in phases. The Digital Personal Data Protection Rules, 2025 were notified in November 2025. The provisions establishing the Data Protection Board took effect immediately; the framework for registering consent managers followed after twelve months; and the core obligations of businesses — notice, consent, security, breach reporting, retention and individuals’ rights — take effect eighteen months after notification, in May 2027. Until then, the existing rules on sensitive personal data under the Information Technology Act, 2000 continue to apply.',
      { note: 'Eighteen months is not long for an organisation that has never mapped its data. Most of the work below is best started well before May 2027.' },
      { heading: 'Key concepts' },
      {
        bullets: [
          'Data principal: the individual the data relates to. For a child (a person under 18) or a person with a disability, this includes the parent or lawful guardian.',
          'Data fiduciary: the business that decides the purpose and means of processing. Most obligations fall on it.',
          'Data processor: a vendor that processes data on the fiduciary’s behalf — a cloud host, payroll provider or marketing agency. The fiduciary remains responsible for what its processors do.',
          'Significant data fiduciary: a fiduciary notified by the government on the basis of the volume and sensitivity of the data it handles and the risks involved. It has additional duties, including appointing a Data Protection Officer based in India, an independent data audit and periodic data protection impact assessments (Section 10).',
        ],
      },
      { heading: 'A compliance checklist' },
      {
        steps: [
          'Map your data: what personal data you collect, from whom, for what purpose, where it is stored, who can access it and which vendors receive it.',
          'Identify the ground for each processing activity. It must be either the person’s consent or one of the “certain legitimate uses” in Section 7 — for example, data the person voluntarily provided for a specified purpose, employment purposes, compliance with law, or a medical emergency.',
          'Rewrite your notices. Every request for consent must be accompanied by a clear notice, understandable on its own, that itemises the data and the purpose, and explains how to withdraw consent, exercise rights and complain to the Board (Section 5 and the Rules).',
          'Fix your consent mechanics. Consent must be free, specific, informed, unconditional and unambiguous, given by a clear affirmative action, and limited to the data necessary for the purpose. Withdrawing consent must be as easy as giving it (Section 6).',
          'Review how you handle children’s data. Processing a child’s data requires the verifiable consent of a parent, and tracking, behavioural monitoring and targeted advertising directed at children are prohibited (Section 9).',
          'Put reasonable security safeguards in place — such as encryption or masking, access controls and logs that allow unauthorised access to be detected — and sign contracts with every processor (Section 8 and the Rules).',
          'Prepare a breach-response plan. On a personal data breach, the Board and each affected person must be informed. The Rules require intimation to the Board without delay, followed by a detailed report within 72 hours.',
          'Set retention periods and erase data once the purpose is served, unless the law requires it to be kept.',
          'Publish a contact for data protection queries, and set up a grievance process that responds within the period prescribed by the Rules.',
          'Train staff, and review the programme regularly.',
        ],
      },
      { heading: 'Rights of individuals' },
      'A data principal can ask for a summary of the personal data being processed and the persons it has been shared with; seek its correction, completion, updating and erasure; have grievances addressed by the fiduciary before approaching the Board; and nominate another person to exercise these rights in the event of death or incapacity (Sections 11 to 14).',
      { heading: 'Penalties' },
      'The Data Protection Board can impose financial penalties after an inquiry. The Schedule to the Act sets maximum amounts, including:',
      {
        bullets: [
          'up to ₹250 crore for failure to take reasonable security safeguards to prevent a personal data breach;',
          'up to ₹200 crore for failure to notify a breach to the Board or to affected persons;',
          'up to ₹200 crore for breach of the additional obligations relating to children;',
          'up to ₹150 crore for breach of the additional obligations of significant data fiduciaries; and',
          'up to ₹50 crore for breach of any other provision of the Act or the Rules.',
        ],
      },
      'In fixing the amount, the Board must consider the nature, gravity and duration of the breach, the type of personal data affected, whether the breach was repeated, any gain made or loss avoided, and the steps taken to mitigate its effects (Section 33).',
    ],
    bodyHi: [
      'डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 भारत की प्रथम व्यापक डेटा संरक्षण विधि है। यह भारत में डिजिटल रूप में व्यक्तिगत डेटा के प्रसंस्करण पर लागू होता है — तथा भारत के बाहर उस प्रसंस्करण पर भी, जो भारत में व्यक्तियों को वस्तुएँ अथवा सेवाएँ प्रस्तुत करने से संबंधित हो। अधिकांश व्यवसायों हेतु इसका अर्थ है ग्राहकों के अभिलेख, वेबसाइट एवं ऐप उपयोगकर्ता, विपणन सूचियाँ तथा कर्मचारियों की फ़ाइलें।',
      { heading: 'दायित्व कब लागू होते हैं' },
      'अधिनियम चरणबद्ध रूप से प्रवृत्त किया जा रहा है। डिजिटल व्यक्तिगत डेटा संरक्षण नियम, 2025 नवंबर 2025 में अधिसूचित हुए। डेटा संरक्षण बोर्ड की स्थापना संबंधी प्रावधान तत्काल प्रभावी हुए; सहमति प्रबंधकों के पंजीकरण का ढाँचा बारह माह पश्चात प्रभावी हुआ; तथा व्यवसायों के मुख्य दायित्व — सूचना, सहमति, सुरक्षा, उल्लंघन की सूचना, प्रतिधारण एवं व्यक्तियों के अधिकार — अधिसूचना के अठारह माह पश्चात, मई 2027 में प्रभावी होंगे। तब तक सूचना प्रौद्योगिकी अधिनियम, 2000 के अंतर्गत संवेदनशील व्यक्तिगत डेटा संबंधी वर्तमान नियम लागू रहेंगे।',
      { note: 'जिस संगठन ने कभी अपने डेटा का मानचित्रण नहीं किया, उसके लिए अठारह माह लंबा समय नहीं है। नीचे दिया गया अधिकांश कार्य मई 2027 से काफ़ी पहले आरंभ कर देना उचित है।' },
      { heading: 'मुख्य अवधारणाएँ' },
      {
        bullets: [
          'डेटा प्रधान: वह व्यक्ति जिससे डेटा संबंधित है। बालक (18 वर्ष से कम आयु का व्यक्ति) अथवा दिव्यांग व्यक्ति के मामले में इसमें माता-पिता अथवा विधिपूर्ण संरक्षक सम्मिलित हैं।',
          'डेटा न्यासी: वह व्यवसाय जो प्रसंस्करण का प्रयोजन एवं साधन निर्धारित करता है। अधिकांश दायित्व उसी पर हैं।',
          'डेटा प्रसंस्करणकर्ता: न्यासी की ओर से डेटा का प्रसंस्करण करने वाला विक्रेता — क्लाउड होस्ट, पेरोल प्रदाता अथवा विपणन एजेंसी। अपने प्रसंस्करणकर्ताओं के कार्यों हेतु न्यासी उत्तरदायी रहता है।',
          'महत्त्वपूर्ण डेटा न्यासी: डेटा की मात्रा एवं संवेदनशीलता तथा संबद्ध जोखिमों के आधार पर सरकार द्वारा अधिसूचित न्यासी। इसके अतिरिक्त कर्तव्य हैं, जिनमें भारत में स्थित डेटा संरक्षण अधिकारी की नियुक्ति, स्वतंत्र डेटा लेखापरीक्षा तथा आवधिक डेटा संरक्षण प्रभाव आकलन सम्मिलित हैं (धारा 10)।',
        ],
      },
      { heading: 'अनुपालन जाँच-सूची' },
      {
        steps: [
          'अपने डेटा का मानचित्रण करें: आप कौन-सा व्यक्तिगत डेटा, किससे, किस प्रयोजन हेतु एकत्र करते हैं, वह कहाँ संग्रहीत है, किसकी उस तक पहुँच है और कौन-से विक्रेता उसे प्राप्त करते हैं।',
          'प्रत्येक प्रसंस्करण गतिविधि का आधार पहचानें। यह या तो व्यक्ति की सहमति हो, अथवा धारा 7 के “कतिपय वैध उपयोगों” में से कोई — उदाहरणार्थ व्यक्ति द्वारा किसी विनिर्दिष्ट प्रयोजन हेतु स्वेच्छा से दिया गया डेटा, रोज़गार संबंधी प्रयोजन, विधि का अनुपालन, अथवा चिकित्सीय आपात स्थिति।',
          'अपनी सूचनाएँ पुनः लिखें। सहमति के प्रत्येक अनुरोध के साथ एक स्पष्ट, स्वतः बोधगम्य सूचना हो, जो डेटा एवं प्रयोजन को मदवार बताए, तथा सहमति वापस लेने, अधिकारों का प्रयोग करने एवं बोर्ड से शिकायत करने का तरीका स्पष्ट करे (धारा 5 एवं नियम)।',
          'सहमति की व्यवस्था ठीक करें। सहमति स्वतंत्र, विनिर्दिष्ट, सूचित, बिना शर्त एवं असंदिग्ध हो, स्पष्ट सकारात्मक कार्य द्वारा दी गई हो, तथा प्रयोजन हेतु आवश्यक डेटा तक सीमित हो। सहमति वापस लेना उतना ही सरल हो जितना देना (धारा 6)।',
          'बालकों के डेटा के प्रबंधन की समीक्षा करें। बालक के डेटा के प्रसंस्करण हेतु माता-पिता की सत्यापन योग्य सहमति आवश्यक है, तथा बालकों पर लक्षित ट्रैकिंग, व्यवहारगत निगरानी एवं लक्षित विज्ञापन निषिद्ध हैं (धारा 9)।',
          'युक्तियुक्त सुरक्षा उपाय अपनाएँ — जैसे कूटलेखन अथवा मास्किंग, अभिगम नियंत्रण, तथा अनधिकृत अभिगम का पता लगाने योग्य लॉग — तथा प्रत्येक प्रसंस्करणकर्ता के साथ अनुबंध करें (धारा 8 एवं नियम)।',
          'उल्लंघन-प्रतिक्रिया योजना तैयार करें। व्यक्तिगत डेटा उल्लंघन होने पर बोर्ड एवं प्रत्येक प्रभावित व्यक्ति को सूचित करना होता है। नियमों के अनुसार बोर्ड को अविलंब सूचना, तत्पश्चात 72 घंटों के भीतर विस्तृत प्रतिवेदन देना आवश्यक है।',
          'प्रतिधारण अवधि निर्धारित करें तथा प्रयोजन पूर्ण होने पर डेटा मिटा दें, जब तक विधि उसे रखना अपेक्षित न करे।',
          'डेटा संरक्षण संबंधी प्रश्नों हेतु संपर्क प्रकाशित करें, तथा नियमों में विहित अवधि में उत्तर देने वाली शिकायत-निवारण प्रक्रिया स्थापित करें।',
          'कर्मचारियों को प्रशिक्षित करें, तथा कार्यक्रम की नियमित समीक्षा करें।',
        ],
      },
      { heading: 'व्यक्तियों के अधिकार' },
      'डेटा प्रधान प्रसंस्कृत किए जा रहे व्यक्तिगत डेटा का सारांश तथा जिनके साथ वह साझा किया गया उनका विवरण माँग सकता है; उसका सुधार, पूर्णता, अद्यतन एवं विलोपन माँग सकता है; बोर्ड के पास जाने से पूर्व न्यासी से शिकायत का निवारण करा सकता है; तथा मृत्यु अथवा अक्षमता की स्थिति में इन अधिकारों के प्रयोग हेतु किसी अन्य व्यक्ति को नामनिर्दिष्ट कर सकता है (धाराएँ 11 से 14)।',
      { heading: 'शास्तियाँ' },
      'डेटा संरक्षण बोर्ड जाँच के पश्चात वित्तीय शास्ति अधिरोपित कर सकता है। अधिनियम की अनुसूची अधिकतम राशियाँ निर्धारित करती है, जिनमें सम्मिलित हैं:',
      {
        bullets: [
          'व्यक्तिगत डेटा उल्लंघन रोकने हेतु युक्तियुक्त सुरक्षा उपाय न करने पर ₹250 करोड़ तक;',
          'बोर्ड अथवा प्रभावित व्यक्तियों को उल्लंघन की सूचना न देने पर ₹200 करोड़ तक;',
          'बालकों संबंधी अतिरिक्त दायित्वों के उल्लंघन पर ₹200 करोड़ तक;',
          'महत्त्वपूर्ण डेटा न्यासियों के अतिरिक्त दायित्वों के उल्लंघन पर ₹150 करोड़ तक; तथा',
          'अधिनियम अथवा नियमों के किसी अन्य प्रावधान के उल्लंघन पर ₹50 करोड़ तक।',
        ],
      },
      'राशि निर्धारित करते समय बोर्ड को उल्लंघन की प्रकृति, गंभीरता एवं अवधि, प्रभावित व्यक्तिगत डेटा का प्रकार, उल्लंघन की पुनरावृत्ति, प्राप्त लाभ अथवा टाली गई हानि, तथा उसके प्रभाव कम करने हेतु उठाए गए कदमों पर विचार करना होता है (धारा 33)।',
    ],
    sources: [
      'Digital Personal Data Protection Act, 2023 — Sections 3, 5–11, 12–14, 33 and the Schedule',
      'Digital Personal Data Protection Rules, 2025 (notified November 2025; phased commencement)',
      'Information Technology Act, 2000 — Section 43A, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011',
    ],
    sourcesHi: [
      'डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 — धाराएँ 3, 5–11, 12–14, 33 एवं अनुसूची',
      'डिजिटल व्यक्तिगत डेटा संरक्षण नियम, 2025 (नवंबर 2025 में अधिसूचित; चरणबद्ध प्रारंभ)',
      'सूचना प्रौद्योगिकी अधिनियम, 2000 — धारा 43A, तथा सूचना प्रौद्योगिकी (युक्तियुक्त सुरक्षा व्यवहार एवं प्रक्रियाएँ तथा संवेदनशील व्यक्तिगत डेटा अथवा सूचना) नियम, 2011',
    ],
  },
  {
    slug: 'trademark-registration-process',
    image: photo('1716471330463-f475b00f0506'), // logo sketches and colour swatches (no real brand shown)
    contentType: 'Article',
    date: '2026-09-22',
    lawAsOf: LAW_AS_OF,
    headline: 'Registering a Trademark in India: From Search to Certificate',
    headlineHi: 'भारत में ट्रेडमार्क पंजीकरण: खोज से प्रमाणपत्र तक',
    excerpt: 'Choosing a registrable mark, the search before filing, classes and official fees, each stage from application to certificate, and how to keep and enforce the registration.',
    excerptHi: 'पंजीकरण योग्य चिह्न का चयन, आवेदन से पूर्व खोज, वर्ग एवं शासकीय शुल्क, आवेदन से प्रमाणपत्र तक प्रत्येक चरण, तथा पंजीकरण को बनाए रखना एवं प्रवर्तित करना।',
    practiceAreaTag: 'Intellectual Property Rights',
    practiceAreaTagHi: 'बौद्धिक संपदा अधिकार',
    practiceAreaSlug: 'intellectual-property-rights',
    body: [
      'A trademark is any mark capable of being represented graphically and of distinguishing the goods or services of one person from those of others — a name, word, logo, label, shape of goods, packaging or combination of colours (Section 2(1)(zb), Trade Marks Act, 1999). Registration is not compulsory, but it gives the owner the exclusive right to use the mark for the registered goods or services, and a statutory action for infringement (Section 28).',
      { heading: 'Before you file: choosing and searching' },
      'The strongest marks are invented or arbitrary words. A mark that simply describes the product — its kind, quality, purpose or geographical origin — or that has become customary in the trade, is open to refusal on absolute grounds (Section 9). A mark that is identical or similar to an earlier mark for identical or similar goods or services, and likely to cause confusion, is open to refusal on relative grounds (Section 11).',
      'A search of the register — and of the market and company names — before filing is the best way to avoid an objection or an opposition after money has been spent on branding. The search should cover every class of interest, and phonetic and visual variants of the mark.',
      { heading: 'Classes and fees' },
      'Goods and services are divided into 45 classes under the Nice Classification — classes 1 to 34 for goods and 35 to 45 for services. A single application (Form TM-A) can cover several classes, with a fee for each. The official fee for e-filing is ₹4,500 per class for individuals, startups and small enterprises, and ₹9,000 per class for others; filing on paper costs more.',
      'An application can be filed for a mark already in use — stating the date of first use, supported by an affidavit where earlier use is claimed — or on a “proposed to be used” basis.',
      { heading: 'From application to certificate' },
      {
        steps: [
          'File the application with the Trade Marks Registry and receive an application number. From this point, the ™ symbol may be used with the mark.',
          'The Registry examines the application and issues an examination report if it has objections. A reply must be filed within one month of receiving the report; if the objections are not resolved on the reply, a hearing is held.',
          'Once accepted, the mark is advertised in the Trade Marks Journal.',
          'Any person may oppose the registration within four months of the advertisement (Section 21). The applicant must file a counter-statement within two months of receiving the notice of opposition, failing which the application is treated as abandoned. The opposition then proceeds through evidence and a hearing.',
          'If there is no opposition, or the opposition fails, the mark is registered and a certificate issues. The registration takes effect from the date of the application (Section 23).',
        ],
      },
      { heading: 'After registration' },
      {
        bullets: [
          'Use the ® symbol only with a registered mark. Falsely representing a mark as registered is an offence (Section 107).',
          'A registration lasts ten years and can be renewed for further ten-year periods indefinitely (Section 25). Renewal can be applied for within six months before expiry; late renewal with a surcharge is possible within six months after expiry, and a mark removed for non-renewal can be restored within one year of expiry.',
          'A registered mark that has not been used for a continuous period of five years and three months can be removed from the register on the application of an aggrieved person (Section 47).',
          'Record any change of ownership, name or address with the Registry, and put licences and assignments in writing.',
          'Watch the Trade Marks Journal for later applications that copy your mark, so that you can oppose them in time.',
        ],
      },
      { heading: 'Enforcement' },
      'The owner of a registered mark can sue for infringement where another person uses an identical or deceptively similar mark in the course of trade (Section 29). Remedies include an injunction, damages or an account of profits, and delivery up of infringing goods and labels (Section 135). Falsifying a trademark, or applying a false trademark, is also a criminal offence (Sections 102 to 104). An unregistered mark is not without protection: its owner can bring an action for passing off, but must prove goodwill, misrepresentation and damage — a heavier burden than proving infringement of a registered mark.',
      'A business that intends to expand abroad can seek protection in other countries under the Madrid Protocol, by filing an international application through the Indian Trade Marks Registry on the basis of its Indian application or registration.',
    ],
    bodyHi: [
      'ट्रेडमार्क ऐसा कोई भी चिह्न है जिसे ग्राफ़िक रूप से दर्शाया जा सके तथा जो एक व्यक्ति की वस्तुओं अथवा सेवाओं को अन्य की वस्तुओं अथवा सेवाओं से विभेदित कर सके — नाम, शब्द, लोगो, लेबल, वस्तुओं का आकार, पैकेजिंग अथवा रंगों का संयोजन (धारा 2(1)(zb), व्यापार चिह्न अधिनियम, 1999)। पंजीकरण अनिवार्य नहीं है, किंतु यह स्वामी को पंजीकृत वस्तुओं अथवा सेवाओं हेतु चिह्न के उपयोग का अनन्य अधिकार तथा उल्लंघन के विरुद्ध सांविधिक वाद का अधिकार देता है (धारा 28)।',
      { heading: 'आवेदन से पूर्व: चयन एवं खोज' },
      'सबसे सशक्त चिह्न आविष्कृत अथवा स्वैच्छिक शब्द होते हैं। जो चिह्न केवल उत्पाद का वर्णन करता है — उसका प्रकार, गुणवत्ता, प्रयोजन अथवा भौगोलिक उद्गम — अथवा व्यापार में प्रचलित हो चुका है, वह आत्यंतिक आधारों पर अस्वीकृत हो सकता है (धारा 9)। जो चिह्न समान अथवा मिलती-जुलती वस्तुओं या सेवाओं हेतु किसी पूर्ववर्ती चिह्न के समान अथवा सदृश हो और भ्रम उत्पन्न कर सकता हो, वह सापेक्ष आधारों पर अस्वीकृत हो सकता है (धारा 11)।',
      'आवेदन से पूर्व रजिस्टर — तथा बाज़ार एवं कंपनी नामों — की खोज, ब्रांडिंग पर व्यय हो जाने के पश्चात आपत्ति अथवा विरोध से बचने का सर्वोत्तम उपाय है। खोज में प्रत्येक संबंधित वर्ग तथा चिह्न के ध्वन्यात्मक एवं दृश्य रूपांतर सम्मिलित होने चाहिए।',
      { heading: 'वर्ग एवं शुल्क' },
      'नीस वर्गीकरण के अंतर्गत वस्तुएँ एवं सेवाएँ 45 वर्गों में विभाजित हैं — वस्तुओं हेतु वर्ग 1 से 34 तथा सेवाओं हेतु 35 से 45। एक ही आवेदन (प्रपत्र TM-A) में अनेक वर्ग सम्मिलित हो सकते हैं, प्रत्येक वर्ग हेतु पृथक शुल्क सहित। ई-फ़ाइलिंग हेतु शासकीय शुल्क व्यक्तियों, स्टार्टअप एवं लघु उद्यमों हेतु ₹4,500 प्रति वर्ग, तथा अन्य हेतु ₹9,000 प्रति वर्ग है; काग़ज़ पर आवेदन का शुल्क अधिक है।',
      'आवेदन पहले से उपयोग में चिह्न हेतु — प्रथम उपयोग की तिथि बताते हुए, तथा पूर्व उपयोग का दावा होने पर शपथपत्र सहित — अथवा “उपयोग हेतु प्रस्तावित” आधार पर प्रस्तुत किया जा सकता है।',
      { heading: 'आवेदन से प्रमाणपत्र तक' },
      {
        steps: [
          'व्यापार चिह्न रजिस्ट्री में आवेदन प्रस्तुत कर आवेदन क्रमांक प्राप्त करें। इसके पश्चात चिह्न के साथ ™ प्रतीक का उपयोग किया जा सकता है।',
          'रजिस्ट्री आवेदन की परीक्षा करती है तथा आपत्ति होने पर परीक्षा रिपोर्ट जारी करती है। रिपोर्ट प्राप्ति के एक माह के भीतर उत्तर प्रस्तुत करना होता है; उत्तर से आपत्तियाँ दूर न होने पर सुनवाई होती है।',
          'स्वीकृति के पश्चात चिह्न व्यापार चिह्न जर्नल में विज्ञापित होता है।',
          'विज्ञापन के चार माह के भीतर कोई भी व्यक्ति पंजीकरण का विरोध कर सकता है (धारा 21)। आवेदक को विरोध की सूचना प्राप्त होने के दो माह के भीतर प्रतिकथन प्रस्तुत करना होता है, अन्यथा आवेदन परित्यक्त माना जाता है। तत्पश्चात विरोध साक्ष्य एवं सुनवाई के माध्यम से आगे बढ़ता है।',
          'विरोध न होने अथवा विरोध विफल होने पर चिह्न पंजीकृत होकर प्रमाणपत्र जारी होता है। पंजीकरण आवेदन की तिथि से प्रभावी होता है (धारा 23)।',
        ],
      },
      { heading: 'पंजीकरण के पश्चात' },
      {
        bullets: [
          '® प्रतीक का उपयोग केवल पंजीकृत चिह्न के साथ करें। किसी चिह्न को मिथ्या रूप से पंजीकृत दर्शाना अपराध है (धारा 107)।',
          'पंजीकरण दस वर्ष तक वैध रहता है तथा आगे दस-दस वर्ष हेतु अनिश्चित काल तक नवीनीकृत किया जा सकता है (धारा 25)। नवीनीकरण का आवेदन समाप्ति से छह माह पूर्व के भीतर किया जा सकता है; समाप्ति के छह माह के भीतर अधिभार सहित विलंबित नवीनीकरण संभव है, तथा नवीनीकरण न होने से हटाया गया चिह्न समाप्ति के एक वर्ष के भीतर प्रत्यावर्तित किया जा सकता है।',
          'पाँच वर्ष तीन माह की निरंतर अवधि तक उपयोग न किया गया पंजीकृत चिह्न, किसी व्यथित व्यक्ति के आवेदन पर, रजिस्टर से हटाया जा सकता है (धारा 47)।',
          'स्वामित्व, नाम अथवा पते में कोई भी परिवर्तन रजिस्ट्री में अभिलिखित कराएँ, तथा अनुज्ञप्तियाँ एवं समनुदेशन लिखित में करें।',
          'आपके चिह्न की नकल करने वाले बाद के आवेदनों हेतु व्यापार चिह्न जर्नल पर दृष्टि रखें, ताकि समय पर उनका विरोध किया जा सके।',
        ],
      },
      { heading: 'प्रवर्तन' },
      'जहाँ कोई अन्य व्यक्ति व्यापार के दौरान समान अथवा भ्रामक रूप से सदृश चिह्न का उपयोग करता है, वहाँ पंजीकृत चिह्न का स्वामी उल्लंघन का वाद ला सकता है (धारा 29)। उपचारों में व्यादेश, नुकसानी अथवा लाभ का लेखा, तथा उल्लंघनकारी वस्तुओं एवं लेबलों का परिदान सम्मिलित है (धारा 135)। ट्रेडमार्क का मिथ्याकरण, अथवा मिथ्या ट्रेडमार्क लगाना, आपराधिक अपराध भी है (धाराएँ 102 से 104)। अपंजीकृत चिह्न भी असुरक्षित नहीं है: उसका स्वामी “पासिंग ऑफ़” का वाद ला सकता है, किंतु उसे ख्याति, दुर्व्यपदेशन एवं क्षति सिद्ध करनी होती है — जो पंजीकृत चिह्न के उल्लंघन को सिद्ध करने की तुलना में भारी दायित्व है।',
      'विदेश में विस्तार का आशय रखने वाला व्यवसाय मैड्रिड प्रोटोकॉल के अंतर्गत, अपने भारतीय आवेदन अथवा पंजीकरण के आधार पर भारतीय व्यापार चिह्न रजिस्ट्री के माध्यम से अंतरराष्ट्रीय आवेदन प्रस्तुत कर, अन्य देशों में संरक्षण प्राप्त कर सकता है।',
    ],
    sources: [
      'Trade Marks Act, 1999 — Sections 2(1)(zb), 9, 11, 18, 21, 23, 25, 28, 29, 47, 102–104, 107 and 135',
      'Trade Marks Rules, 2017 — First Schedule (fees)',
      'Nice Classification of goods and services (WIPO)',
    ],
    sourcesHi: [
      'व्यापार चिह्न अधिनियम, 1999 — धाराएँ 2(1)(zb), 9, 11, 18, 21, 23, 25, 28, 29, 47, 102–104, 107 एवं 135',
      'व्यापार चिह्न नियम, 2017 — प्रथम अनुसूची (शुल्क)',
      'वस्तुओं एवं सेवाओं का नीस वर्गीकरण (WIPO)',
    ],
  },
  {
    slug: 'fire-safety-noc-process',
    image: photo('1625958936686-a9343dc35b5b'), // wall-mounted fire extinguisher with its sign
    contentType: 'Article',
    date: '2026-09-01',
    lawAsOf: LAW_AS_OF,
    headline: 'Understanding the Fire Safety NOC Process',
    headlineHi: 'अग्नि सुरक्षा अनापत्ति प्रमाणपत्र (एनओसी) प्रक्रिया को समझना',
    excerpt: 'Where fire-safety requirements come from, which premises need a Fire NOC, what the fire service inspects, and the stages from plan approval to renewal.',
    excerptHi: 'अग्नि-सुरक्षा अपेक्षाएँ कहाँ से आती हैं, किन परिसरों को अग्नि एनओसी चाहिए, अग्निशमन सेवा क्या निरीक्षण करती है, तथा मानचित्र स्वीकृति से नवीनीकरण तक के चरण।',
    ...REG,
    body: [
      'A Fire No Objection Certificate (NOC) — also called a fire safety certificate — is issued by the fire service with jurisdiction over a building. It confirms that the building’s design, fire-protection systems and means of escape meet the applicable fire-safety requirements. It is often a precondition for other approvals: building plan sanction for larger buildings, an occupancy or completion certificate, and licences for hotels, hospitals, schools, factories, cinemas and similar premises.',
      { heading: 'Where the requirements come from' },
      'There is no single national fire-safety statute. Requirements come from state fire service laws, municipal laws and building bye-laws, which in turn largely adopt the National Building Code of India, 2016 (Part 4 — Fire and Life Safety), published by the Bureau of Indian Standards. The Code classifies buildings by occupancy — residential, educational, institutional, assembly, business, mercantile, industrial, storage and hazardous — and sets requirements for each according to height, floor area and use.',
      'In Madhya Pradesh, fire services are at present run by the urban local bodies, and fire NOC applications are made online through the state’s municipal services system. A dedicated state fire and emergency services law has been under preparation, so the regime in force should be checked at the time of applying.',
      { heading: 'Who needs one' },
      'Whether a particular building needs a NOC depends on the local law. As a general rule, a NOC is required for:',
      {
        bullets: [
          'high-rise buildings — under the National Building Code, buildings 15 metres or more in height;',
          'assembly buildings such as auditoriums, banquet halls, cinemas and larger restaurants;',
          'hospitals, nursing homes, schools, coaching centres and hostels;',
          'hotels and lodging houses;',
          'factories, warehouses and premises that store or handle hazardous materials; and',
          'large shops, malls and business buildings above the area or height set by the local rules.',
        ],
      },
      'A small office or shop in a low-rise building may not need a separate NOC, or may be covered by the building owner’s certificate. It is worth confirming this with the fire service rather than assuming it.',
      { heading: 'What the fire service looks for' },
      {
        bullets: [
          'Adequate exits and staircases, with the prescribed widths and travel distances, kept free of obstruction.',
          'Fire extinguishers of the right type, correctly installed and maintained.',
          'Hose reels, wet risers or hydrants, and automatic sprinklers where required.',
          'Fire detection and alarm systems, and public address systems in larger buildings.',
          'Emergency lighting and illuminated exit signage.',
          'Dedicated water storage for fire-fighting, and pumps with backup power.',
          'Access around the building for fire tenders.',
          'In high-rise buildings, refuge areas, fire lifts and compartmentation.',
        ],
      },
      { heading: 'The process' },
      {
        steps: [
          'Planning stage: for buildings that require it, a provisional NOC is obtained on the building plans before construction, as part of plan sanction.',
          'Installation: fire-protection systems are installed as per the approved plans, usually by a qualified fire consultant and contractor.',
          'Application for the final NOC, with completion drawings, test certificates for the installed systems and the prescribed fee.',
          'Inspection by the fire service, which tests the systems and checks escape routes and access.',
          'Rectification of any deficiencies noted in the inspection, and re-inspection where required.',
          'Issue of the final NOC, which is generally valid for a fixed period and must be renewed before it expires. A change in use, layout or occupancy may require a fresh NOC.',
        ],
      },
      { heading: 'Why it matters' },
      'Occupying or running premises without a required NOC can lead to sealing of the premises, refusal or cancellation of other licences, and penalties under the applicable law. If a fire occurs, the absence of a NOC — or a lapsed one — can expose owners and occupiers to criminal liability for negligence and complicate insurance claims. Because the NOC sits upstream of several other approvals, delays here cascade elsewhere: it is best planned at the design stage, not after fit-out.',
    ],
    bodyHi: [
      'अग्नि अनापत्ति प्रमाणपत्र (एनओसी) — जिसे अग्नि सुरक्षा प्रमाणपत्र भी कहते हैं — भवन पर क्षेत्राधिकार रखने वाली अग्निशमन सेवा द्वारा जारी किया जाता है। यह पुष्टि करता है कि भवन की संरचना, अग्नि-सुरक्षा प्रणालियाँ एवं निकास के साधन लागू अग्नि-सुरक्षा अपेक्षाओं को पूरा करते हैं। यह प्रायः अन्य अनुमतियों की पूर्व-शर्त है: बड़े भवनों हेतु भवन मानचित्र स्वीकृति, अधिभोग अथवा पूर्णता प्रमाणपत्र, तथा होटल, अस्पताल, विद्यालय, कारखाने, सिनेमा एवं ऐसे ही परिसरों की अनुज्ञप्तियाँ।',
      { heading: 'अपेक्षाएँ कहाँ से आती हैं' },
      'अग्नि-सुरक्षा हेतु कोई एक राष्ट्रीय कानून नहीं है। अपेक्षाएँ राज्य की अग्निशमन सेवा विधियों, नगरीय विधियों एवं भवन उपविधियों से आती हैं, जो बड़े पैमाने पर भारतीय मानक ब्यूरो द्वारा प्रकाशित भारतीय राष्ट्रीय भवन संहिता, 2016 (भाग 4 — अग्नि एवं जीवन सुरक्षा) को अपनाती हैं। संहिता भवनों को अधिभोग के आधार पर वर्गीकृत करती है — आवासीय, शैक्षणिक, संस्थागत, सभा, व्यावसायिक, वाणिज्यिक (मर्केंटाइल), औद्योगिक, भंडारण एवं परिसंकटमय — तथा ऊँचाई, तल क्षेत्रफल एवं उपयोग के अनुसार प्रत्येक हेतु अपेक्षाएँ निर्धारित करती है।',
      'मध्य प्रदेश में अग्निशमन सेवाएँ वर्तमान में नगरीय निकायों द्वारा संचालित हैं, तथा अग्नि एनओसी के आवेदन राज्य की नगरीय सेवा प्रणाली के माध्यम से ऑनलाइन किए जाते हैं। राज्य में पृथक अग्नि एवं आपातकालीन सेवा विधि तैयार की जा रही है, अतः आवेदन के समय प्रवृत्त व्यवस्था की पुष्टि करनी चाहिए।',
      { heading: 'किसे आवश्यकता है' },
      'किसी विशेष भवन को एनओसी चाहिए या नहीं, यह स्थानीय विधि पर निर्भर है। सामान्य नियम के रूप में एनओसी आवश्यक है:',
      {
        bullets: [
          'ऊँचे भवनों हेतु — राष्ट्रीय भवन संहिता के अंतर्गत 15 मीटर अथवा अधिक ऊँचाई के भवन;',
          'सभा भवनों हेतु, जैसे सभागार, बैंक्वेट हॉल, सिनेमा एवं बड़े रेस्तराँ;',
          'अस्पताल, नर्सिंग होम, विद्यालय, कोचिंग केंद्र एवं छात्रावास हेतु;',
          'होटल एवं आवास गृहों हेतु;',
          'कारखानों, गोदामों तथा परिसंकटमय पदार्थों का भंडारण अथवा प्रबंधन करने वाले परिसरों हेतु; तथा',
          'स्थानीय नियमों में निर्धारित क्षेत्रफल अथवा ऊँचाई से बड़ी दुकानों, मॉल एवं व्यावसायिक भवनों हेतु।',
        ],
      },
      'कम ऊँचाई के भवन में स्थित छोटे कार्यालय अथवा दुकान को पृथक एनओसी की आवश्यकता न हो, अथवा वह भवन स्वामी के प्रमाणपत्र के अंतर्गत आ जाए, ऐसा संभव है। इसे मान लेने के बजाय अग्निशमन सेवा से पुष्टि कर लेना उचित है।',
      { heading: 'अग्निशमन सेवा क्या देखती है' },
      {
        bullets: [
          'विहित चौड़ाई एवं दूरी वाले पर्याप्त निकास एवं सीढ़ियाँ, जो अवरोध-मुक्त हों।',
          'उचित प्रकार के अग्निशामक यंत्र, सही ढंग से स्थापित एवं अनुरक्षित।',
          'जहाँ अपेक्षित हो, होज़ रील, वेट राइज़र अथवा हाइड्रेंट, तथा स्वचालित स्प्रिंकलर।',
          'अग्नि संसूचन एवं अलार्म प्रणालियाँ, तथा बड़े भवनों में सार्वजनिक उद्घोषणा प्रणाली।',
          'आपातकालीन प्रकाश एवं प्रकाशित निकास संकेतक।',
          'अग्निशमन हेतु समर्पित जल भंडारण, तथा बैकअप विद्युत सहित पंप।',
          'भवन के चारों ओर दमकल वाहनों की पहुँच।',
          'ऊँचे भवनों में शरण क्षेत्र, फ़ायर लिफ़्ट एवं कंपार्टमेंटेशन।',
        ],
      },
      { heading: 'प्रक्रिया' },
      {
        steps: [
          'योजना चरण: जिन भवनों हेतु अपेक्षित हो, निर्माण से पूर्व मानचित्र स्वीकृति के भाग के रूप में भवन मानचित्रों पर अनंतिम एनओसी प्राप्त की जाती है।',
          'स्थापना: अग्नि-सुरक्षा प्रणालियाँ स्वीकृत मानचित्रों के अनुसार, सामान्यतः योग्य अग्नि परामर्शदाता एवं ठेकेदार द्वारा, स्थापित की जाती हैं।',
          'पूर्णता मानचित्रों, स्थापित प्रणालियों के परीक्षण प्रमाणपत्रों एवं विहित शुल्क सहित अंतिम एनओसी हेतु आवेदन।',
          'अग्निशमन सेवा द्वारा निरीक्षण, जिसमें प्रणालियों का परीक्षण तथा निकास मार्गों एवं पहुँच की जाँच होती है।',
          'निरीक्षण में चिह्नित कमियों का सुधार, तथा आवश्यकता होने पर पुनः निरीक्षण।',
          'अंतिम एनओसी का निर्गमन, जो सामान्यतः निश्चित अवधि हेतु वैध होता है तथा समाप्ति से पूर्व नवीनीकृत कराना आवश्यक है। उपयोग, अभिन्यास अथवा अधिभोग में परिवर्तन होने पर नई एनओसी आवश्यक हो सकती है।',
        ],
      },
      { heading: 'यह क्यों महत्त्वपूर्ण है' },
      'आवश्यक एनओसी के बिना परिसर का अधिभोग अथवा संचालन करने पर परिसर सील हो सकता है, अन्य अनुज्ञप्तियाँ अस्वीकृत अथवा निरस्त हो सकती हैं, तथा लागू विधि के अंतर्गत शास्ति लग सकती है। आग लगने की स्थिति में एनओसी का अभाव — अथवा व्यपगत एनओसी — स्वामियों एवं अधिभोगियों को उपेक्षा हेतु आपराधिक दायित्व में डाल सकता है तथा बीमा दावों को जटिल बना सकता है। चूँकि एनओसी अनेक अन्य अनुमतियों से पूर्व आवश्यक है, यहाँ का विलंब अन्यत्र भी विलंब उत्पन्न करता है: इसकी योजना फ़िट-आउट के पश्चात नहीं, बल्कि डिज़ाइन चरण में ही बनानी चाहिए।',
    ],
    sources: [
      'National Building Code of India, 2016 — Part 4: Fire and Life Safety (Bureau of Indian Standards)',
      'Madhya Pradesh Bhumi Vikas Rules, 2012',
      'IS 2190 — Selection, installation and maintenance of portable fire extinguishers',
      'State fire service laws and municipal building bye-laws, as applicable to the premises',
    ],
    sourcesHi: [
      'भारतीय राष्ट्रीय भवन संहिता, 2016 — भाग 4: अग्नि एवं जीवन सुरक्षा (भारतीय मानक ब्यूरो)',
      'मध्य प्रदेश भूमि विकास नियम, 2012',
      'IS 2190 — पोर्टेबल अग्निशामक यंत्रों का चयन, स्थापना एवं अनुरक्षण',
      'परिसर पर लागू राज्य अग्निशमन सेवा विधियाँ एवं नगरीय भवन उपविधियाँ',
    ],
  },
  {
    slug: 'udyam-registration-explained',
    image: photo('1753185234794-e3b41b94a352'), // small-workshop carpenter at a saw
    contentType: 'Article',
    date: '2026-08-20',
    lawAsOf: LAW_AS_OF,
    headline: 'UDYAM Registration, Explained',
    headlineHi: 'उद्यम पंजीकरण: एक विस्तृत विवरण',
    excerpt: 'The current MSME limits, who can register, the benefits registration unlocks — including protection against delayed payment — and how to register free of charge.',
    excerptHi: 'वर्तमान एमएसएमई सीमाएँ, कौन पंजीकरण करा सकता है, पंजीकरण से मिलने वाले लाभ — विलंबित भुगतान से संरक्षण सहित — तथा निःशुल्क पंजीकरण कैसे कराएँ।',
    ...REG,
    body: [
      'Udyam Registration is the official registration of micro, small and medium enterprises (MSMEs) with the Ministry of Micro, Small and Medium Enterprises. It was introduced from 1 July 2020 and replaced the earlier Udyog Aadhaar Memorandum. Registration is online through the Udyam Registration portal, is free of charge, and is based on self-declaration — no documents need to be uploaded.',
      { heading: 'How enterprises are classified' },
      'Classification uses a composite test of investment in plant and machinery or equipment, and annual turnover. The limits were revised with effect from 1 April 2025 (Notification S.O. 1364(E) dated 21 March 2025):',
      {
        bullets: [
          'Micro: investment up to ₹2.5 crore and turnover up to ₹10 crore.',
          'Small: investment up to ₹25 crore and turnover up to ₹100 crore.',
          'Medium: investment up to ₹125 crore and turnover up to ₹500 crore.',
        ],
      },
      'An enterprise that crosses either limit moves to the next category. Export turnover is excluded when calculating turnover. Investment and turnover figures are drawn from the enterprise’s income-tax returns and GST data, which the portal fetches automatically.',
      { heading: 'Who can register' },
      'A proprietorship, partnership, LLP, company, HUF, co-operative society, trust or society engaged in manufacturing or services can register. Registration needs the Aadhaar number of the proprietor, managing partner, karta or authorised signatory, and the PAN of the enterprise; a GSTIN is needed where the enterprise is required to be registered under GST. Retail and wholesale traders can register, but only for the purpose of priority-sector lending. Informal micro enterprises that cannot use the main portal can be onboarded through the Udyam Assist Platform.',
      { heading: 'Benefits of registration' },
      {
        bullets: [
          'Protection against delayed payment: a buyer must pay a micro or small supplier within the agreed period, which cannot exceed 45 days from acceptance of the goods or services, or within 15 days where there is no agreement. On delay, the buyer owes compound interest with monthly rests at three times the bank rate notified by the Reserve Bank (Sections 15 and 16, MSMED Act, 2006).',
          'Recovery through the Micro and Small Enterprises Facilitation Council, which conciliates and, if needed, arbitrates delayed-payment claims. A buyer challenging the Council’s award must first deposit 75% of the amount awarded (Sections 18 and 19).',
          'Income-tax: a buyer can deduct an amount owed to a micro or small enterprise in the year of purchase only if it is paid within the MSMED time limit; otherwise the deduction is allowed only in the year of actual payment — giving buyers a strong reason to pay registered suppliers on time.',
          'Public procurement: under the Public Procurement Policy for Micro and Small Enterprises, central ministries, departments and public-sector undertakings must source at least 25% of their annual procurement from micro and small enterprises, which also receive tender documents free of cost and exemption from earnest money deposit.',
          'Credit: eligibility for priority-sector lending, and for collateral-free credit backed by the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE).',
          'Lower official fees for trademark and patent applications filed by eligible small enterprises.',
        ],
      },
      { note: 'The delayed-payment protection and the public-procurement benefits apply to micro and small enterprises only, not to medium enterprises.' },
      { heading: 'How to register' },
      {
        steps: [
          'Use the official Udyam Registration portal of the Ministry of MSME. The government charges no fee for registration, and no intermediary is required.',
          'Verify the Aadhaar number of the proprietor, partner, karta or authorised signatory through a one-time password.',
          'Enter the PAN of the enterprise; details from income-tax and GST records are fetched automatically.',
          'Fill in the business details — name, type of organisation, address of each unit, bank account, the activity (NIC code) and the number of persons employed.',
          'Submit the self-declaration. An Udyam Registration Number and an e-certificate are issued.',
        ],
      },
      'The certificate has no expiry and does not need renewal. The enterprise should, however, keep its details up to date on the portal; its classification is updated on the basis of its income-tax and GST data. Misrepresenting or suppressing information can lead to cancellation of the registration and penal consequences.',
    ],
    bodyHi: [
      'उद्यम पंजीकरण सूक्ष्म, लघु एवं मध्यम उद्यमों (एमएसएमई) का सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय में आधिकारिक पंजीकरण है। यह 1 जुलाई 2020 से लागू हुआ तथा इसने पूर्ववर्ती उद्योग आधार ज्ञापन का स्थान लिया। पंजीकरण उद्यम पंजीकरण पोर्टल पर ऑनलाइन, निःशुल्क एवं स्व-घोषणा पर आधारित है — कोई दस्तावेज़ अपलोड नहीं करना होता।',
      { heading: 'उद्यमों का वर्गीकरण कैसे होता है' },
      'वर्गीकरण संयंत्र एवं मशीनरी अथवा उपकरण में निवेश, तथा वार्षिक कारोबार के संयुक्त मानदंड पर होता है। 1 अप्रैल 2025 से सीमाएँ संशोधित हुईं (अधिसूचना का.आ. 1364(अ) दिनांक 21 मार्च 2025):',
      {
        bullets: [
          'सूक्ष्म: निवेश ₹2.5 करोड़ तक एवं कारोबार ₹10 करोड़ तक।',
          'लघु: निवेश ₹25 करोड़ तक एवं कारोबार ₹100 करोड़ तक।',
          'मध्यम: निवेश ₹125 करोड़ तक एवं कारोबार ₹500 करोड़ तक।',
        ],
      },
      'कोई भी एक सीमा पार करने वाला उद्यम अगली श्रेणी में चला जाता है। कारोबार की गणना में निर्यात कारोबार सम्मिलित नहीं होता। निवेश एवं कारोबार के आँकड़े उद्यम के आयकर विवरणी एवं जीएसटी डेटा से लिए जाते हैं, जिन्हें पोर्टल स्वतः प्राप्त करता है।',
      { heading: 'कौन पंजीकरण करा सकता है' },
      'विनिर्माण अथवा सेवाओं में संलग्न स्वामित्व फर्म, भागीदारी, एलएलपी, कंपनी, हिंदू अविभक्त परिवार, सहकारी समिति, न्यास अथवा सोसाइटी पंजीकरण करा सकते हैं। पंजीकरण हेतु स्वामी, प्रबंध भागीदार, कर्ता अथवा अधिकृत हस्ताक्षरकर्ता का आधार क्रमांक तथा उद्यम का पैन आवश्यक है; जहाँ उद्यम का जीएसटी पंजीकरण अपेक्षित है, वहाँ जीएसटीआईएन भी आवश्यक है। खुदरा एवं थोक व्यापारी पंजीकरण करा सकते हैं, किंतु केवल प्राथमिकता-क्षेत्र ऋण के प्रयोजन हेतु। मुख्य पोर्टल का उपयोग न कर पाने वाले अनौपचारिक सूक्ष्म उद्यम उद्यम असिस्ट प्लेटफ़ॉर्म के माध्यम से जोड़े जा सकते हैं।',
      { heading: 'पंजीकरण के लाभ' },
      {
        bullets: [
          'विलंबित भुगतान से संरक्षण: क्रेता को सूक्ष्म अथवा लघु आपूर्तिकर्ता को सहमत अवधि में भुगतान करना होता है, जो वस्तुओं अथवा सेवाओं की स्वीकृति से 45 दिनों से अधिक नहीं हो सकती, तथा सहमति न होने पर 15 दिनों के भीतर। विलंब होने पर क्रेता को रिज़र्व बैंक द्वारा अधिसूचित बैंक दर के तीन गुना की दर से मासिक चक्रवृद्धि ब्याज देना होता है (धाराएँ 15 एवं 16, एमएसएमईडी अधिनियम, 2006)।',
          'सूक्ष्म एवं लघु उद्यम सुविधा परिषद के माध्यम से वसूली, जो विलंबित भुगतान के दावों में सुलह और आवश्यकता होने पर माध्यस्थम् करती है। परिषद के अधिनिर्णय को चुनौती देने वाले क्रेता को पहले अधिनिर्णीत राशि का 75% जमा करना होता है (धाराएँ 18 एवं 19)।',
          'आयकर: सूक्ष्म अथवा लघु उद्यम को देय राशि की कटौती क्रेता क्रय के वर्ष में तभी ले सकता है जब उसका भुगतान एमएसएमईडी समय-सीमा में किया गया हो; अन्यथा कटौती केवल वास्तविक भुगतान के वर्ष में मिलती है — जिससे क्रेताओं को पंजीकृत आपूर्तिकर्ताओं को समय पर भुगतान करने का ठोस कारण मिलता है।',
          'सार्वजनिक क्रय: सूक्ष्म एवं लघु उद्यमों हेतु सार्वजनिक क्रय नीति के अंतर्गत केंद्रीय मंत्रालयों, विभागों एवं सार्वजनिक उपक्रमों को अपने वार्षिक क्रय का कम से कम 25% सूक्ष्म एवं लघु उद्यमों से करना होता है, जिन्हें निविदा दस्तावेज़ निःशुल्क तथा बयाना राशि से छूट भी मिलती है।',
          'ऋण: प्राथमिकता-क्षेत्र ऋण की पात्रता, तथा सूक्ष्म एवं लघु उद्यम ऋण गारंटी निधि न्यास (सीजीटीएमएसई) समर्थित संपार्श्विक-मुक्त ऋण की पात्रता।',
          'पात्र लघु उद्यमों द्वारा प्रस्तुत ट्रेडमार्क एवं पेटेंट आवेदनों पर कम शासकीय शुल्क।',
        ],
      },
      { note: 'विलंबित भुगतान से संरक्षण एवं सार्वजनिक क्रय के लाभ केवल सूक्ष्म एवं लघु उद्यमों पर लागू होते हैं, मध्यम उद्यमों पर नहीं।' },
      { heading: 'पंजीकरण कैसे कराएँ' },
      {
        steps: [
          'सूक्ष्म, लघु एवं मध्यम उद्यम मंत्रालय के आधिकारिक उद्यम पंजीकरण पोर्टल का उपयोग करें। सरकार पंजीकरण हेतु कोई शुल्क नहीं लेती, तथा किसी मध्यस्थ की आवश्यकता नहीं है।',
          'स्वामी, भागीदार, कर्ता अथवा अधिकृत हस्ताक्षरकर्ता के आधार क्रमांक का वन-टाइम पासवर्ड द्वारा सत्यापन करें।',
          'उद्यम का पैन दर्ज करें; आयकर एवं जीएसटी अभिलेखों से विवरण स्वतः प्राप्त हो जाते हैं।',
          'व्यवसाय का विवरण भरें — नाम, संगठन का प्रकार, प्रत्येक इकाई का पता, बैंक खाता, गतिविधि (एनआईसी कोड) तथा नियोजित व्यक्तियों की संख्या।',
          'स्व-घोषणा प्रस्तुत करें। उद्यम पंजीकरण क्रमांक एवं ई-प्रमाणपत्र जारी होता है।',
        ],
      },
      'प्रमाणपत्र की कोई समाप्ति तिथि नहीं है तथा नवीनीकरण की आवश्यकता नहीं है। तथापि उद्यम को पोर्टल पर अपना विवरण अद्यतन रखना चाहिए; उसका वर्गीकरण आयकर एवं जीएसटी डेटा के आधार पर अद्यतन होता है। सूचना का दुर्व्यपदेशन अथवा छिपाव पंजीकरण के निरस्तीकरण एवं दंडात्मक परिणामों का कारण बन सकता है।',
    ],
    sources: [
      'Micro, Small and Medium Enterprises Development Act, 2006 — Sections 7, 15–19',
      'Ministry of MSME Notification S.O. 2119(E), 26 June 2020 (Udyam Registration)',
      'Ministry of MSME Notification S.O. 1364(E), 21 March 2025 (revised classification limits)',
      'Public Procurement Policy for Micro and Small Enterprises Order, 2012',
    ],
    sourcesHi: [
      'सूक्ष्म, लघु एवं मध्यम उद्यम विकास अधिनियम, 2006 — धाराएँ 7, 15–19',
      'एमएसएमई मंत्रालय अधिसूचना का.आ. 2119(अ), 26 जून 2020 (उद्यम पंजीकरण)',
      'एमएसएमई मंत्रालय अधिसूचना का.आ. 1364(अ), 21 मार्च 2025 (संशोधित वर्गीकरण सीमाएँ)',
      'सूक्ष्म एवं लघु उद्यमों हेतु सार्वजनिक क्रय नीति आदेश, 2012',
    ],
  },
  {
    slug: 'shops-establishment-registration-explained',
    image: photo('1755449209767-88beee24d927'), // Indian market street of signboarded shops
    contentType: 'Article',
    date: '2026-08-05',
    lawAsOf: LAW_AS_OF,
    headline: 'Shops and Establishment Registration: The First Filing for Any Commercial Premises',
    headlineHi: 'दुकान एवं स्थापना पंजीकरण: किसी भी वाणिज्यिक परिसर का प्रथम दाखिला',
    excerpt: 'What the Shops and Establishments Act regulates, how registration now works in Madhya Pradesh after the 2025 amendment, and the registrations that usually follow it.',
    excerptHi: 'दुकान एवं स्थापना अधिनियम क्या विनियमित करता है, 2025 के संशोधन के पश्चात मध्य प्रदेश में पंजीकरण कैसे होता है, तथा इसके पश्चात सामान्यतः आवश्यक पंजीकरण।',
    ...REG,
    body: [
      'Every state regulates working conditions in shops and commercial establishments through its own Shops and Establishments Act. In Madhya Pradesh, the law is the Madhya Pradesh Shops and Establishments Act, 1958, and the registration is commonly called the “Gumasta licence”. It covers shops, commercial establishments, restaurants and eating houses, theatres and places of public amusement in the areas where the Act applies.',
      { heading: 'What the Act regulates' },
      {
        bullets: [
          'Registration of the establishment.',
          'Opening and closing hours, daily and weekly working hours, rest intervals and spread-over.',
          'Weekly holidays, leave and overtime.',
          'Payment of wages and conditions of employment.',
          'Records and registers to be maintained by the employer.',
        ],
      },
      { heading: 'Registration in Madhya Pradesh after the 2025 amendment' },
      'The Madhya Pradesh Shops and Establishments (Second Amendment) Act, 2025, in force from 15 December 2025, made significant changes:',
      {
        bullets: [
          'Registration is online, on the Labour Department’s portal, and the certificate is generated once the information is submitted and the fee paid.',
          'The application is to be made within 30 days of the Act becoming applicable to the establishment.',
          'The registration fee is fixed by the rules, subject to a ceiling of ₹2,500.',
          'Renewal of the registration certificate is no longer required.',
          'Closure of the establishment must be reported within ten days.',
          'Inspections are organised through a centralised system; in establishments employing twenty or fewer persons, inspectors may exercise their powers only with the authorisation of the Labour Commissioner.',
        ],
      },
      'Other states follow their own rules. Some, such as Maharashtra, require only an intimation, rather than a registration, for establishments with fewer than ten workers. A business with premises in more than one state must comply with the law of each.',
      { heading: 'Registrations that commonly follow' },
      {
        bullets: [
          'GST registration: required once aggregate turnover crosses ₹40 lakh for suppliers of goods (₹20 lakh in certain special category states) or ₹20 lakh for suppliers of services (₹10 lakh in certain special category states), and compulsory regardless of turnover for some businesses, such as those making inter-state taxable supplies of goods.',
          'FSSAI: food businesses need a basic registration (turnover up to ₹12 lakh), a State licence or a Central licence, depending on scale and activity.',
          'Professional tax: in Madhya Pradesh, employers register under the Madhya Pradesh Vritti Kar Adhiniyam, 1995 and deduct the tax from salaries above the prescribed threshold.',
          'Trade licence and other municipal permissions, where the municipal bye-laws require them for the trade carried on.',
          'Fire Safety NOC, depending on the building and the use of the premises.',
          'Udyam (MSME) registration.',
          'Labour registrations: under the Code on Social Security, 2020, in force from 21 November 2025, provident fund coverage generally applies from 20 employees and ESI coverage from 10 employees.',
          'Sector-specific registrations — for example RERA for real estate, a money-lender’s registration for lending businesses, or a drug licence for a pharmacy.',
        ],
      },
      { heading: 'Consequences of non-compliance' },
      'Running an establishment without registration, or without complying with the Act’s provisions on hours, holidays and records, can attract penalties under the Act. In practice, the registration certificate is also often asked for as proof of the business’s existence and address — by banks opening a current account and by authorities processing other licences — so delay here tends to hold up other steps.',
    ],
    bodyHi: [
      'प्रत्येक राज्य अपने दुकान एवं स्थापना अधिनियम के माध्यम से दुकानों एवं वाणिज्यिक स्थापनाओं में कार्य की दशाओं को विनियमित करता है। मध्य प्रदेश में लागू विधि मध्य प्रदेश दुकान एवं स्थापना अधिनियम, 1958 है, तथा इसके पंजीकरण को सामान्यतः “गुमाश्ता लाइसेंस” कहा जाता है। यह अधिनियम लागू होने वाले क्षेत्रों में दुकानों, वाणिज्यिक स्थापनाओं, रेस्तराँ एवं भोजनालयों, थिएटरों तथा सार्वजनिक मनोरंजन स्थलों पर लागू होता है।',
      { heading: 'अधिनियम क्या विनियमित करता है' },
      {
        bullets: [
          'स्थापना का पंजीकरण।',
          'खुलने एवं बंद होने का समय, दैनिक एवं साप्ताहिक कार्य घंटे, विश्राम अंतराल एवं कार्य-विस्तार अवधि।',
          'साप्ताहिक अवकाश, छुट्टी एवं अतिकाल।',
          'मज़दूरी का भुगतान एवं सेवा-शर्तें।',
          'नियोजक द्वारा संधारित किए जाने वाले अभिलेख एवं रजिस्टर।',
        ],
      },
      { heading: '2025 के संशोधन के पश्चात मध्य प्रदेश में पंजीकरण' },
      '15 दिसंबर 2025 से प्रवृत्त मध्य प्रदेश दुकान एवं स्थापना (द्वितीय संशोधन) अधिनियम, 2025 ने महत्त्वपूर्ण परिवर्तन किए:',
      {
        bullets: [
          'पंजीकरण श्रम विभाग के पोर्टल पर ऑनलाइन होता है, तथा सूचना प्रस्तुत करने एवं शुल्क भुगतान पर प्रमाणपत्र जनित हो जाता है।',
          'आवेदन स्थापना पर अधिनियम लागू होने के 30 दिनों के भीतर करना होता है।',
          'पंजीकरण शुल्क नियमों द्वारा निर्धारित होता है, जिसकी अधिकतम सीमा ₹2,500 है।',
          'पंजीकरण प्रमाणपत्र के नवीनीकरण की अब आवश्यकता नहीं है।',
          'स्थापना बंद होने की सूचना दस दिनों के भीतर देनी होती है।',
          'निरीक्षण केंद्रीकृत प्रणाली के माध्यम से होते हैं; बीस अथवा उससे कम व्यक्तियों को नियोजित करने वाली स्थापनाओं में निरीक्षक श्रमायुक्त के प्राधिकार से ही अपनी शक्तियों का प्रयोग कर सकते हैं।',
        ],
      },
      'अन्य राज्य अपने नियमों का पालन करते हैं। कुछ राज्य, जैसे महाराष्ट्र, दस से कम कर्मकारों वाली स्थापनाओं हेतु पंजीकरण के स्थान पर केवल सूचना अपेक्षित करते हैं। एक से अधिक राज्यों में परिसर वाले व्यवसाय को प्रत्येक राज्य की विधि का पालन करना होता है।',
      { heading: 'सामान्यतः इसके पश्चात आवश्यक पंजीकरण' },
      {
        bullets: [
          'जीएसटी पंजीकरण: कुल कारोबार वस्तुओं के आपूर्तिकर्ताओं हेतु ₹40 लाख (कुछ विशेष श्रेणी राज्यों में ₹20 लाख) अथवा सेवाओं के आपूर्तिकर्ताओं हेतु ₹20 लाख (कुछ विशेष श्रेणी राज्यों में ₹10 लाख) से अधिक होने पर आवश्यक, तथा कुछ व्यवसायों हेतु कारोबार की परवाह किए बिना अनिवार्य, जैसे वस्तुओं की अंतर्राज्यीय कराधेय आपूर्ति करने वाले।',
          'एफएसएसएआई: खाद्य व्यवसायों को पैमाने एवं गतिविधि के अनुसार मूल पंजीकरण (₹12 लाख तक कारोबार), राज्य अनुज्ञप्ति अथवा केंद्रीय अनुज्ञप्ति चाहिए।',
          'वृत्ति कर: मध्य प्रदेश में नियोजक मध्य प्रदेश वृत्ति कर अधिनियम, 1995 के अंतर्गत पंजीकरण कराते हैं तथा विहित सीमा से अधिक वेतन से कर की कटौती करते हैं।',
          'जहाँ नगरीय उपविधियाँ संबंधित व्यापार हेतु अपेक्षित करें, वहाँ व्यापार अनुज्ञप्ति एवं अन्य नगरीय अनुमतियाँ।',
          'भवन एवं परिसर के उपयोग के अनुसार अग्नि सुरक्षा एनओसी।',
          'उद्यम (एमएसएमई) पंजीकरण।',
          'श्रम पंजीकरण: 21 नवंबर 2025 से प्रवृत्त सामाजिक सुरक्षा संहिता, 2020 के अंतर्गत भविष्य निधि सामान्यतः 20 कर्मचारियों से तथा ईएसआई 10 कर्मचारियों से लागू होता है।',
          'क्षेत्र-विशिष्ट पंजीकरण — उदाहरणार्थ रियल एस्टेट हेतु रेरा, उधारी व्यवसाय हेतु साहूकार पंजीकरण, अथवा फ़ार्मेसी हेतु औषधि अनुज्ञप्ति।',
        ],
      },
      { heading: 'अननुपालन के परिणाम' },
      'बिना पंजीकरण, अथवा कार्य घंटों, अवकाशों एवं अभिलेखों संबंधी अधिनियम के प्रावधानों का पालन किए बिना स्थापना का संचालन अधिनियम के अंतर्गत शास्ति को आमंत्रित कर सकता है। व्यवहार में पंजीकरण प्रमाणपत्र प्रायः व्यवसाय के अस्तित्व एवं पते के प्रमाण के रूप में भी माँगा जाता है — चालू खाता खोलते समय बैंकों द्वारा तथा अन्य अनुज्ञप्तियों पर कार्यवाही करते समय प्राधिकारियों द्वारा — अतः यहाँ का विलंब अन्य चरणों को भी रोक देता है।',
    ],
    sources: [
      'Madhya Pradesh Shops and Establishments Act, 1958',
      'Madhya Pradesh Shops and Establishments (Second Amendment) Act, 2025 (in force from 15 December 2025)',
      'Central Goods and Services Tax Act, 2017 — Sections 22 and 24',
      'Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011',
      'Madhya Pradesh Vritti Kar Adhiniyam, 1995',
      'Code on Social Security, 2020',
    ],
    sourcesHi: [
      'मध्य प्रदेश दुकान एवं स्थापना अधिनियम, 1958',
      'मध्य प्रदेश दुकान एवं स्थापना (द्वितीय संशोधन) अधिनियम, 2025 (15 दिसंबर 2025 से प्रवृत्त)',
      'केंद्रीय माल एवं सेवा कर अधिनियम, 2017 — धाराएँ 22 एवं 24',
      'खाद्य सुरक्षा एवं मानक (खाद्य व्यवसायों का अनुज्ञापन एवं पंजीकरण) विनियम, 2011',
      'मध्य प्रदेश वृत्ति कर अधिनियम, 1995',
      'सामाजिक सुरक्षा संहिता, 2020',
    ],
  },
]

export const insightsBySlug: Record<string, InsightRecord> = Object.fromEntries(
  insights.map((i) => [i.slug, i])
)
