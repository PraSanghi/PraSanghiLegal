// Single source of truth for the BCI disclaimer, shared by the entry modal
// (compliance/bci-disclaimer-modal.tsx) and the /disclaimer page. The client
// asked for both to be "more organised … with bullet points" and the page to
// be "a little more detailed" (review PDF pp.6, 117).

export interface Bilingual {
  en: string
  hi: string
}

/** Short form, shown in the first-visit modal. */
export const BCI_DISCLAIMER_POINTS: Bilingual[] = [
  {
    en: 'The Bar Council of India does not permit advocates to solicit work or advertise in any manner.',
    hi: 'भारतीय विधिज्ञ परिषद (बार काउंसिल ऑफ़ इंडिया) अधिवक्ताओं को किसी भी प्रकार से कार्य हेतु आग्रह अथवा विज्ञापन की अनुमति नहीं देती।',
  },
  {
    en: 'By proceeding, you confirm that you are seeking information about PraSanghi – The Legal Ladder LLP of your own accord.',
    hi: 'आगे बढ़कर आप पुष्टि करते हैं कि आप स्वेच्छा से प्रासंघी – द लीगल लैडर एलएलपी के संबंध में जानकारी प्राप्त कर रहे हैं।',
  },
  {
    en: 'There has been no solicitation, invitation or inducement of any kind from PraSanghi or any of its members.',
    hi: 'प्रासंघी अथवा उसके किसी सदस्य की ओर से किसी भी प्रकार का आग्रह, आमंत्रण अथवा प्रलोभन नहीं दिया गया है।',
  },
  {
    en: 'The contents of this website are for general information only and do not constitute legal advice or create an advocate–client relationship.',
    hi: 'इस वेबसाइट की विषय-वस्तु केवल सामान्य सूचना हेतु है; यह विधिक परामर्श नहीं है तथा इससे अधिवक्ता–मुवक्किल संबंध स्थापित नहीं होता।',
  },
  {
    en: 'PraSanghi shall not be liable for the consequences of any action taken by relying on the material or information on this website.',
    hi: 'इस वेबसाइट की सामग्री अथवा जानकारी पर निर्भर रहकर की गई किसी भी कार्यवाही के परिणामों हेतु प्रासंघी उत्तरदायी नहीं होगा।',
  },
  {
    en: 'The contents of this website are the intellectual property of PraSanghi.',
    hi: 'इस वेबसाइट की विषय-वस्तु प्रासंघी की बौद्धिक संपदा है।',
  },
]

/** Detailed form, shown on /disclaimer. */
export const DISCLAIMER_SECTIONS: { title: Bilingual; points: Bilingual[] }[] = [
  {
    title: { en: 'Bar Council of India Rules', hi: 'भारतीय विधिज्ञ परिषद के नियम' },
    points: [
      BCI_DISCLAIMER_POINTS[0],
      {
        en: 'This website has been prepared in accordance with the Bar Council of India Rules and is meant only to provide information about the firm, its advocates and its areas of practice to persons who seek it.',
        hi: 'यह वेबसाइट भारतीय विधिज्ञ परिषद के नियमों के अनुरूप तैयार की गई है तथा इसका उद्देश्य केवल उन व्यक्तियों को फर्म, उसके अधिवक्ताओं एवं प्रैक्टिस क्षेत्रों की जानकारी देना है जो उसे प्राप्त करना चाहते हैं।',
      },
      {
        en: 'Nothing on this website is intended to be, or should be construed as, an advertisement, solicitation, invitation or inducement of any kind.',
        hi: 'इस वेबसाइट की किसी भी सामग्री का आशय विज्ञापन, आग्रह, आमंत्रण अथवा किसी प्रकार का प्रलोभन नहीं है, और न ही उसे ऐसा माना जाए।',
      },
    ],
  },
  {
    title: { en: 'Your acknowledgement', hi: 'आपकी स्वीकृति' },
    points: [
      BCI_DISCLAIMER_POINTS[1],
      BCI_DISCLAIMER_POINTS[2],
      {
        en: 'You have not been offered, and are not relying on, any representation about results; the outcome of every matter depends on its own facts and law.',
        hi: 'आपको परिणामों के संबंध में कोई आश्वासन नहीं दिया गया है और न ही आप उस पर निर्भर हैं; प्रत्येक मामले का परिणाम उसके अपने तथ्यों एवं विधि पर निर्भर करता है।',
      },
    ],
  },
  {
    title: { en: 'No legal advice', hi: 'विधिक परामर्श नहीं' },
    points: [
      BCI_DISCLAIMER_POINTS[3],
      {
        en: 'Legal insights, articles and FAQs are general summaries of the law as it stood when written. The law changes; please obtain specific advice before acting on any of it.',
        hi: 'विधिक विश्लेषण, लेख एवं प्रश्नोत्तर लेखन के समय की विधि के सामान्य सारांश हैं। विधि परिवर्तित होती रहती है; इनके आधार पर कोई कार्यवाही करने से पूर्व विशिष्ट परामर्श अवश्य लें।',
      },
      {
        en: 'An advocate–client relationship arises only when the firm formally accepts an engagement in writing. Information sent through this website before that is not treated as privileged or confidential instructions.',
        hi: 'अधिवक्ता–मुवक्किल संबंध तभी स्थापित होता है जब फर्म लिखित रूप में दायित्व स्वीकार करती है। उससे पूर्व इस वेबसाइट के माध्यम से भेजी गई जानकारी को विशेषाधिकार-युक्त अथवा गोपनीय निर्देश नहीं माना जाता।',
      },
    ],
  },
  {
    title: { en: 'Limitation of liability', hi: 'दायित्व की सीमा' },
    points: [
      BCI_DISCLAIMER_POINTS[4],
      {
        en: 'While every care is taken to keep the content accurate and current, PraSanghi does not warrant its completeness and is not responsible for the content of third-party websites linked from this site.',
        hi: 'यद्यपि सामग्री को सटीक एवं अद्यतन रखने का पूर्ण प्रयास किया जाता है, प्रासंघी उसकी पूर्णता की प्रत्याभूति नहीं देता तथा इस वेबसाइट से जुड़ी तृतीय-पक्ष वेबसाइटों की सामग्री हेतु उत्तरदायी नहीं है।',
      },
    ],
  },
  {
    title: { en: 'Intellectual property', hi: 'बौद्धिक संपदा' },
    points: [
      BCI_DISCLAIMER_POINTS[5],
      {
        en: 'The name and logo of PraSanghi – The Legal Ladder LLP may not be reproduced or used without the firm’s prior written consent.',
        hi: 'प्रासंघी – द लीगल लैडर एलएलपी का नाम एवं प्रतीक-चिह्न फर्म की पूर्व लिखित सहमति के बिना पुनरुत्पादित अथवा उपयोग नहीं किया जा सकता।',
      },
    ],
  },
]
