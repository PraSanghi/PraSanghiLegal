import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'

export const metadata: Metadata = {
  title: 'Affiliated Organisations — PraSanghi',
  description: 'Organisations affiliated with PraSanghi.',
}

// This page is intentionally minimal — per planning/pages.md §5, it must not
// launch with guessed descriptions of these relationships. Blocked on
// project_requirements.md §5 and §10 (which relationships are
// public-appropriate, and how each should be described).
export default function AffiliatedOrganisationsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb
        segments={[{ label: 'About', href: '/about' }, { label: 'Affiliated Organisations' }]}
      />
      <div className="mt-4">
        <p className="text-label-eyebrow uppercase tracking-wide text-teal-600">About</p>
        <h1 className="mt-3 text-display-lg font-bold text-blue-900">
          Affiliated Organisations
        </h1>
      </div>
      <p className="mt-8 text-body-md text-muted-foreground italic">
        This page is deliberately withheld from public content. PraSanghi is
        associated with several organisations named in the founder&rsquo;s
        notes (a social welfare society, an affiliated chambers, a dispute
        resolution institute, and others) — see project_requirements.md §5.
        Publishing this page requires the founder to first confirm which
        relationships are appropriate to describe publicly and how, per
        planning/pages.md §5. Do not populate this page with guessed content.
      </p>
    </section>
  )
}
