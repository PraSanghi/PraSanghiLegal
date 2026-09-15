export interface FaqItem {
  question: string
  answer: string
}

// Objection-handling FAQ content, adapted from the PD Law Chambers pattern
// (research/competitor-analysis-primary.md) but written to answer only what
// PraSanghi can honestly state today — no invented pricing or policy claims.
export const homeFaqs: FaqItem[] = [
  {
    question: 'Does PraSanghi handle both litigation and compliance work?',
    answer:
      'Yes. Litigation before subordinate courts, High Courts, and the Supreme Court of India is handled alongside regulatory advisory and certifications — as one integrated practice, not two separate teams.',
  },
  {
    question: 'Will I work with the same advocate throughout my matter?',
    answer:
      'Every matter at PraSanghi is led by a named advocate from the outset. That advocate stays with the matter rather than handing it to unfamiliar staff as it progresses.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Reach out through the Contact page with a few details about your matter and we'll get back to you to discuss next steps.",
  },
  {
    question: 'Which courts and forums does PraSanghi appear before?',
    answer:
      'Subordinate and district courts, High Courts, and the Supreme Court of India, alongside regulatory bodies for certification and compliance matters.',
  },
]
