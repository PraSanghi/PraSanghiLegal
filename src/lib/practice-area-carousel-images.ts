import { practiceAreaDetails } from '@/lib/practice-areas-data'

// One topic-matched photo per practice area, used by every card, carousel and
// detail page. Sourced from practice-areas-data.ts so a new area can never
// render without an image.
export const practiceAreaCarouselImages: Record<string, string> = Object.fromEntries(
  Object.values(practiceAreaDetails).map((area) => [area.slug, area.image])
)
