export interface PersonRecord {
  slug: string
  name: string
  role: string
  isFounder?: boolean
  practiceTags: string[]
  bioPending: boolean
  photo: string
}

// Bios and credentials are blocked pending founder-confirmed content — see
// project_requirements.md §10, Open Items 1–2. Photos use a deterministic
// placeholder photo service (seeded by slug, so each person keeps a stable
// consistent portrait across the site) until real firm photography exists —
// see design/design-system.md §9. Do not launch with placeholder photos or
// bios live.
function placeholderPhoto(slug: string) {
  return `https://i.pravatar.cc/500?u=${slug}`
}

export const people: PersonRecord[] = [
  {
    slug: 'rajwardhan-gawde',
    name: 'Rajwardhan Gawde',
    role: 'Founder',
    isFounder: true,
    practiceTags: ['Litigation', 'Supreme Court & High Court Practice'],
    bioPending: true,
    photo: placeholderPhoto('rajwardhan-gawde'),
  },
  {
    slug: 'bhavesh',
    name: 'Bhavesh',
    role: 'Associate',
    practiceTags: [],
    bioPending: true,
    photo: placeholderPhoto('bhavesh'),
  },
  {
    slug: 'pankaj-giri-goswami',
    name: 'Pankaj Giri Goswami',
    role: 'Associate',
    practiceTags: [],
    bioPending: true,
    photo: placeholderPhoto('pankaj-giri-goswami'),
  },
  {
    slug: 'manoj-garg',
    name: 'Manoj Garg',
    role: 'Associate',
    practiceTags: [],
    bioPending: true,
    photo: placeholderPhoto('manoj-garg'),
  },
  {
    slug: 'kavita-sharma',
    name: 'Kavita Sharma',
    role: 'Associate',
    practiceTags: [],
    bioPending: true,
    photo: placeholderPhoto('kavita-sharma'),
  },
  {
    slug: 'abhishek-mantri',
    name: 'Abhishek Mantri',
    role: 'Associate',
    practiceTags: [],
    bioPending: true,
    photo: placeholderPhoto('abhishek-mantri'),
  },
  {
    slug: 'aditya-bharti',
    name: 'Aditya Bharti',
    role: 'Associate',
    practiceTags: [],
    bioPending: true,
    photo: placeholderPhoto('aditya-bharti'),
  },
]

export const peopleBySlug: Record<string, PersonRecord> = Object.fromEntries(
  people.map((p) => [p.slug, p])
)
