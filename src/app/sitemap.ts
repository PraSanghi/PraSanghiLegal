import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site-config'
import { practiceAreaSlugs } from '@/lib/practice-areas-data'
import { insights } from '@/lib/insights-data'
import { initiatives } from '@/lib/initiatives-data'
import { people } from '@/lib/people-data'

function url(path: string) {
  return `${siteUrl}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: url('/practice-areas'), lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: url('/about'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: url('/about/vision-values'), lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: url('/about/leadership'), lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    {
      url: url('/about/affiliated-organisations'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    { url: url('/people'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: url('/insights'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: url('/social-initiatives'), lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: url('/careers'), lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: url('/media'), lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: url('/contact'), lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: url('/privacy-policy'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: url('/terms-of-use'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: url('/disclaimer'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const practiceAreaRoutes: MetadataRoute.Sitemap = practiceAreaSlugs.map((slug) => ({
    url: url(`/practice-areas/${slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const insightRoutes: MetadataRoute.Sitemap = insights.map((item) => ({
    url: url(`/insights/${item.slug}`),
    lastModified: new Date(item.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const initiativeRoutes: MetadataRoute.Sitemap = initiatives.map((item) => ({
    url: url(`/social-initiatives/${item.slug}`),
    lastModified: new Date(item.date),
    changeFrequency: 'yearly',
    priority: 0.4,
  }))

  const peopleRoutes: MetadataRoute.Sitemap = people.map((person) => ({
    url: url(`/people/${person.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...practiceAreaRoutes, ...insightRoutes, ...initiativeRoutes, ...peopleRoutes]
}
