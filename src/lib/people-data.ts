export interface PersonRecord {
  slug: string
  name: string
  role: string
  roleHi: string
  isFounder?: boolean
  practiceTags: string[]
  practiceTagsHi: string[]
  bioPending: boolean
  photo: string
}

// Bios and credentials are blocked pending founder-confirmed content — see
// project_requirements.md §10, Open Items 1–2. Photos use a deterministic
// placeholder photo service until real firm photography exists — see
// design/design-system.md §9. Do not launch with placeholder photos or bios
// live. randomuser.me's portraits are split into separate men/women folders
// (unlike pravatar's single unisex pool, which assigned mismatched-gender
// photos), and the slug is hashed to a stable index so each person keeps the
// same portrait across the site.
function placeholderPhoto(slug: string, gender: 'men' | 'women') {
  const hash = [...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0)
  const index = hash % 100
  return `https://randomuser.me/api/portraits/${gender}/${index}.jpg`
}

export const people: PersonRecord[] = [
  {
    slug: 'rajwardhan-gawde',
    name: 'Rajwardhan Gawde',
    role: 'Founder',
    roleHi: 'संस्थापक',
    isFounder: true,
    practiceTags: ['Litigation', 'Supreme Court & High Court Practice'],
    practiceTagsHi: ['वाद-विवाद (लिटिगेशन)', 'उच्चतम न्यायालय एवं उच्च न्यायालय व्यवहार'],
    bioPending: true,
    // Unsplash (licensed stock photography, not the scraped-personal-photo
    // pools the other placeholderPhoto() entries use) — chosen for business
    // attire and high enough resolution to survive the full-bleed banner
    // treatment on /people/[slug] and /about/leadership without pixelating.
    photo:
      'https://images.unsplash.com/photo-1585846416120-3a7354ed7d39?w=1200&h=1200&fit=crop&crop=faces&q=80',
  },
  {
    slug: 'bhavesh',
    name: 'Bhavesh',
    role: 'Associate',
    roleHi: 'सहयोगी अधिवक्ता',
    practiceTags: [],
    practiceTagsHi: [],
    bioPending: true,
    photo: placeholderPhoto('bhavesh', 'men'),
  },
  {
    slug: 'pankaj-giri-goswami',
    name: 'Pankaj Giri Goswami',
    role: 'Associate',
    roleHi: 'सहयोगी अधिवक्ता',
    practiceTags: [],
    practiceTagsHi: [],
    bioPending: true,
    photo: placeholderPhoto('pankaj-giri-goswami', 'men'),
  },
  {
    slug: 'manoj-garg',
    name: 'Manoj Garg',
    role: 'Associate',
    roleHi: 'सहयोगी अधिवक्ता',
    practiceTags: [],
    practiceTagsHi: [],
    bioPending: true,
    photo: placeholderPhoto('manoj-garg', 'men'),
  },
  {
    slug: 'kavita-sharma',
    name: 'Kavita Sharma',
    role: 'Associate',
    roleHi: 'सहयोगी अधिवक्ता',
    practiceTags: [],
    practiceTagsHi: [],
    bioPending: true,
    photo: placeholderPhoto('kavita-sharma', 'women'),
  },
  {
    slug: 'abhishek-mantri',
    name: 'Abhishek Mantri',
    role: 'Associate',
    roleHi: 'सहयोगी अधिवक्ता',
    practiceTags: [],
    practiceTagsHi: [],
    bioPending: true,
    photo: placeholderPhoto('abhishek-mantri', 'men'),
  },
  {
    slug: 'aditya-bharti',
    name: 'Aditya Bharti',
    role: 'Associate',
    roleHi: 'सहयोगी अधिवक्ता',
    practiceTags: [],
    practiceTagsHi: [],
    bioPending: true,
    photo: placeholderPhoto('aditya-bharti', 'men'),
  },
]

export const peopleBySlug: Record<string, PersonRecord> = Object.fromEntries(
  people.map((p) => [p.slug, p])
)
