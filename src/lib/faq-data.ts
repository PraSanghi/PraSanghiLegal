export interface FaqItem {
  question: string
  questionHi?: string
  answer: string
  answerHi?: string
}

// Client asked for "as many FAQs as possible, especially related to our USP
// & service area" (review PDF p.26). Facts are taken from the Firm Profile.
export const homeFaqs: FaqItem[] = [
  {
    question: 'What does “One Destination for Every Legal Solution” mean in practice?',
    questionHi: '“प्रत्येक विधिक समाधान हेतु एक ही गंतव्य” का व्यावहारिक अर्थ क्या है?',
    answer:
      'It means you instruct one firm for everything — litigation from the trial court to the Supreme Court, contracts, compliance, arbitration and the implementation of the final order. One point of contact, one coordinated strategy and one standard of work across every city and forum.',
    answerHi:
      'इसका अर्थ है कि आप हर विषय हेतु एक ही फर्म को निर्देश देते हैं — विचारण न्यायालय से उच्चतम न्यायालय तक वाद, संविदाएँ, अनुपालन, माध्यस्थम् एवं अंतिम आदेश का क्रियान्वयन। संपर्क का एक केंद्र, एक समन्वित रणनीति और प्रत्येक नगर एवं मंच पर कार्य का एक समान स्तर।',
  },
  {
    question: 'Does PraSanghi handle both litigation and corporate / compliance work?',
    questionHi: 'क्या प्रासंघी वाद एवं कॉर्पोरेट / अनुपालन, दोनों कार्य संभालता है?',
    answer:
      'Yes. Corporate and commercial work sits at the centre of the practice, and every document is drafted by advocates who argue cases in court — so contracts and compliance are prepared with a clear view of how they would be tested in a dispute.',
    answerHi:
      'जी हाँ। कॉर्पोरेट एवं वाणिज्यिक कार्य प्रैक्टिस के केंद्र में है, तथा प्रत्येक दस्तावेज़ ऐसे अधिवक्ताओं द्वारा तैयार किया जाता है जो न्यायालय में पैरवी करते हैं — अतः संविदाएँ एवं अनुपालन इस स्पष्ट दृष्टि से तैयार होते हैं कि विवाद की स्थिति में उनकी परीक्षा कैसे होगी।',
  },
  {
    question: 'Which courts and forums does PraSanghi appear before?',
    questionHi: 'प्रासंघी किन न्यायालयों एवं मंचों के समक्ष उपस्थित होता है?',
    answer:
      'The Supreme Court of India, the High Courts, District and Sessions Courts, District and State Consumer Commissions, the National Consumer Disputes Redressal Commission, Labour Courts, MSME Facilitation Councils, Debts Recovery Tribunals, RERA and arbitral tribunals, among others.',
    answerHi:
      'भारत का उच्चतम न्यायालय, उच्च न्यायालय, जिला एवं सत्र न्यायालय, जिला एवं राज्य उपभोक्ता आयोग, राष्ट्रीय उपभोक्ता विवाद प्रतितोष आयोग, श्रम न्यायालय, एमएसएमई सुविधा परिषद, ऋण वसूली अधिकरण, रेरा एवं माध्यस्थम् अधिकरण आदि।',
  },
  {
    question: 'Will the same advocate handle my matter throughout?',
    questionHi: 'क्या मेरे मामले को प्रारंभ से अंत तक वही अधिवक्ता संभालेंगे?',
    answer:
      'Yes. Drafting, filings and appearances are carried out by a named advocate who stays with the matter from start to finish — and the same panel of advocates takes it into appeal if needed.',
    answerHi:
      'जी हाँ। प्रारूपण, दाखिले एवं पैरवी एक नामित अधिवक्ता द्वारा की जाती है जो प्रारंभ से अंत तक मामले के साथ रहते हैं — और आवश्यकता होने पर अपील में भी अधिवक्ताओं का वही पैनल उसे आगे ले जाता है।',
  },
  {
    question: 'I am not in Indore. Can PraSanghi still act for me?',
    questionHi: 'मैं इंदौर में नहीं हूँ। क्या प्रासंघी फिर भी मेरे लिए कार्य कर सकता है?',
    answer:
      'Yes. Clients instruct one desk at Indore, and filings, appearances and local proceedings are handled by the firm’s associates in Delhi, Mumbai, Lucknow, Jabalpur, Gwalior, Ahmedabad, Jaipur, Bilaspur and other judicial hubs — with consolidated reporting to you.',
    answerHi:
      'जी हाँ। मुवक्किल इंदौर स्थित एक ही केंद्र को निर्देश देते हैं, तथा दाखिले, पैरवी एवं स्थानीय कार्यवाहियाँ दिल्ली, मुंबई, लखनऊ, जबलपुर, ग्वालियर, अहमदाबाद, जयपुर, बिलासपुर एवं अन्य न्यायिक केंद्रों में फर्म के सहयोगियों द्वारा संचालित की जाती हैं — आपको समेकित रिपोर्टिंग के साथ।',
  },
  {
    question: 'Does the firm contest appeals, revisions and reviews as well?',
    questionHi: 'क्या फर्म अपील, पुनरीक्षण एवं पुनर्विलोकन की भी पैरवी करती है?',
    answer:
      'Yes. Wherever an order is open to appeal, revision or review — in civil, criminal, consumer, tax, labour, RERA or recovery matters — we contest it before the appellate authority, the High Court or the Supreme Court of India.',
    answerHi:
      'जी हाँ। जहाँ कहीं भी किसी आदेश के विरुद्ध अपील, पुनरीक्षण अथवा पुनर्विलोकन उपलब्ध है — सिविल, आपराधिक, उपभोक्ता, कर, श्रम, रेरा अथवा वसूली मामलों में — हम अपीलीय प्राधिकारी, उच्च न्यायालय अथवा भारत के उच्चतम न्यायालय के समक्ष उसकी पैरवी करते हैं।',
  },
  {
    question: 'What is Hybrid Med-Arb, and when is it useful?',
    questionHi: 'हाइब्रिड मेड-आर्ब क्या है, और यह कब उपयोगी है?',
    answer:
      'Mediation and arbitration combined in one continuous process: a dispute that cannot be settled in mediation moves straight on to a binding award without starting afresh. It suits commercial disputes where speed, privacy and an enforceable outcome all matter.',
    answerHi:
      'एक ही सतत प्रक्रिया में मध्यस्थता एवं माध्यस्थम् का संयोजन: जो विवाद मध्यस्थता में नहीं सुलझता, वह नए सिरे से आरंभ किए बिना सीधे बाध्यकारी अधिनिर्णय की ओर बढ़ता है। यह उन वाणिज्यिक विवादों हेतु उपयुक्त है जहाँ शीघ्रता, गोपनीयता एवं प्रवर्तनीय परिणाम — तीनों महत्त्वपूर्ण हैं।',
  },
  {
    question: 'Can PraSanghi get urgent interim relief before a tribunal is formed?',
    questionHi: 'क्या अधिकरण के गठन से पूर्व अत्यावश्यक अंतरिम राहत प्राप्त की जा सकती है?',
    answer:
      'Yes — through emergency arbitration, or interim measures from the court under Section 9 of the Arbitration and Conciliation Act, 1996, depending on the agreement and the urgency.',
    answerHi:
      'जी हाँ — संविदा एवं अत्यावश्यकता के अनुसार आपात माध्यस्थम् के माध्यम से, अथवा माध्यस्थम् एवं सुलह अधिनियम, 1996 की धारा 9 के अंतर्गत न्यायालय से अंतरिम उपाय द्वारा।',
  },
  {
    question: 'Does the firm only advise, or also see the order or award implemented?',
    questionHi: 'क्या फर्म केवल परामर्श देती है, अथवा आदेश / अधिनिर्णय का क्रियान्वयन भी कराती है?',
    answer:
      'Follow Through is the fourth step of our method. We see each matter to its conclusion — from order or award to actual implementation and execution — with regular reporting to the client.',
    answerHi:
      '“अंत तक अनुसरण” हमारी कार्यपद्धति का चौथा चरण है। हम प्रत्येक मामले को उसके निष्कर्ष तक — आदेश अथवा अधिनिर्णय से वास्तविक क्रियान्वयन एवं निष्पादन तक — मुवक्किल को नियमित रिपोर्टिंग के साथ ले जाते हैं।',
  },
  {
    question: 'Which registrations and licences can you obtain for my business?',
    questionHi: 'आप मेरे व्यवसाय हेतु कौन-से पंजीकरण एवं अनुज्ञप्तियाँ प्राप्त करा सकते हैं?',
    answer:
      'Among others: RERA registration, Money-Lender (Sahukar) licence, Fire Safety NOC, UDYAM, Shops and Establishment (Gumasta), trade licence, GST, FSSAI, IEC, pollution-control consents, labour registrations, trademarks and society / trust registrations.',
    answerHi:
      'अन्य के साथ: रेरा पंजीकरण, साहूकार अनुज्ञप्ति, अग्नि सुरक्षा एनओसी, उद्यम, दुकान एवं स्थापना (गुमाश्ता), व्यापार अनुज्ञप्ति, जीएसटी, एफएसएसएआई, आईईसी, प्रदूषण नियंत्रण सहमतियाँ, श्रम पंजीकरण, ट्रेडमार्क तथा सोसाइटी / न्यास पंजीकरण।',
  },
  {
    question: 'A cheque given to me has bounced. What can be done?',
    questionHi: 'मुझे दिया गया चेक अनादरित हो गया है। क्या किया जा सकता है?',
    answer:
      'A statutory demand notice must be sent within the time limit under Section 138 of the Negotiable Instruments Act; if the amount is not paid, a complaint can be filed before the Magistrate. Civil recovery can run alongside. Speak to us early — the timelines are strict.',
    answerHi:
      'परक्राम्य लिखत अधिनियम की धारा 138 के अंतर्गत निर्धारित समय-सीमा में सांविधिक मांग सूचना भेजना आवश्यक है; राशि का भुगतान न होने पर मजिस्ट्रेट के समक्ष परिवाद प्रस्तुत किया जा सकता है। सिविल वसूली भी साथ-साथ चल सकती है। शीघ्र संपर्क करें — समय-सीमाएँ कठोर हैं।',
  },
  {
    question: 'Do you act for government departments and public bodies?',
    questionHi: 'क्या आप शासकीय विभागों एवं लोक निकायों की ओर से कार्य करते हैं?',
    answer:
      'Yes. Our counsel serve as Government Advocate before the High Court of Madhya Pradesh, as Standing Counsel and Panel Lawyer for the State, and have represented the Union of India — and the firm acts for departments such as the Public Health Engineering Department, M.P.',
    answerHi:
      'जी हाँ। हमारे अधिवक्ता मध्य प्रदेश उच्च न्यायालय में शासकीय अधिवक्ता, तथा राज्य के स्थायी एवं पैनल अधिवक्ता के रूप में कार्यरत हैं, और भारत संघ का प्रतिनिधित्व कर चुके हैं — तथा फर्म लोक स्वास्थ्य यांत्रिकी विभाग, म.प्र. जैसे विभागों हेतु कार्य करती है।',
  },
  {
    question: 'Is what I share with the firm kept confidential?',
    questionHi: 'क्या फर्म के साथ साझा की गई जानकारी गोपनीय रखी जाती है?',
    answer:
      'Yes. The details of work done for clients are strictly confidential and protected by professional privilege. For sensitive or emergency matters you may write directly to director@prasanghilegal.com.',
    answerHi:
      'जी हाँ। मुवक्किलों हेतु किए गए कार्य का विवरण पूर्णतः गोपनीय एवं व्यावसायिक विशेषाधिकार द्वारा संरक्षित है। संवेदनशील अथवा आपात विषयों हेतु आप सीधे director@prasanghilegal.com पर लिख सकते हैं।',
  },
  {
    question: 'How do I get started?',
    questionHi: 'मैं आरंभ कैसे करूँ?',
    answer:
      'Call +91 96170 50000, write to contact@prasanghilegal.com, or send the details through the Contact page. We will set up a consultation — at our Indore office, online, or at your doorstep.',
    answerHi:
      '+91 96170 50000 पर कॉल करें, contact@prasanghilegal.com पर लिखें, अथवा संपर्क पृष्ठ के माध्यम से विवरण भेजें। हम परामर्श निर्धारित करेंगे — इंदौर कार्यालय में, ऑनलाइन, अथवा आपके द्वार पर।',
  },
]
