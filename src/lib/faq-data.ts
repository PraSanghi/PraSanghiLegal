export interface FaqItem {
  question: string
  questionHi?: string
  answer: string
  answerHi?: string
}

// Objection-handling FAQ content, adapted from the PD Law Chambers pattern
// (research/competitor-analysis-primary.md) but written to answer only what
// PraSanghi can honestly state today — no invented pricing or policy claims.
export const homeFaqs: FaqItem[] = [
  {
    question: 'Does PraSanghi handle both litigation and compliance work?',
    questionHi: 'क्या प्रासंघी वाद-विवाद एवं अनुपालन, दोनों कार्य संभालता है?',
    answer:
      'Yes. Litigation before subordinate courts, High Courts, and the Supreme Court of India is handled alongside regulatory advisory and certifications — as one integrated practice, not two separate teams.',
    answerHi:
      'जी हाँ। अधीनस्थ न्यायालयों, उच्च न्यायालयों एवं भारत के उच्चतम न्यायालय में वाद-विवाद, नियामक परामर्श तथा प्रमाणन कार्यों के साथ-साथ संभाला जाता है — एक ही एकीकृत प्रैक्टिस के रूप में, न कि दो अलग-अलग टीमों द्वारा।',
  },
  {
    question: 'Will I work with the same advocate throughout my matter?',
    questionHi: 'क्या मेरे मामले में शुरू से अंत तक एक ही अधिवक्ता कार्य करेगा?',
    answer:
      'Every matter at PraSanghi is led by a named advocate from the outset. That advocate stays with the matter rather than handing it to unfamiliar staff as it progresses.',
    answerHi:
      'प्रासंघी में प्रत्येक मामले का नेतृत्व प्रारंभ से ही एक नामित अधिवक्ता करता है। वही अधिवक्ता मामले के साथ अंत तक जुड़ा रहता है, न कि इसे आगे बढ़ने पर अपरिचित स्टाफ को सौंप दिया जाता है।',
  },
  {
    question: 'How do I get started?',
    questionHi: 'मैं कैसे शुरुआत करूँ?',
    answer:
      "Reach out through the Contact page with a few details about your matter and we'll get back to you to discuss next steps.",
    answerHi:
      'संपर्क पृष्ठ के माध्यम से अपने मामले का संक्षिप्त विवरण भेजें; अगले कदमों पर चर्चा हेतु हम शीघ्र आपसे संपर्क करेंगे।',
  },
  {
    question: 'Which courts and forums does PraSanghi appear before?',
    questionHi: 'प्रासंघी किन न्यायालयों एवं फोरमों में पैरवी करता है?',
    answer:
      'Subordinate and district courts, High Courts, and the Supreme Court of India, alongside regulatory bodies for certification and compliance matters.',
    answerHi:
      'अधीनस्थ एवं जिला न्यायालय, उच्च न्यायालय, तथा भारत के उच्चतम न्यायालय, साथ ही प्रमाणन एवं अनुपालन संबंधी मामलों हेतु नियामक निकाय।',
  },
]
