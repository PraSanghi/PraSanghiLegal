import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'

export const metadata: Metadata = {
  title: 'Terms of Use — PraSanghi',
  description: 'Terms governing use of the PraSanghi website.',
}

export default function TermsOfUsePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb segments={[{ label: 'Terms of Use' }]} />
      <h1 className="mt-4 text-display-lg font-bold text-blue-900">Terms of Use</h1>
      <p className="mt-8 text-body-md text-muted-foreground italic">
        Full terms of use are pending legal review and are not yet available.
        This page is a structural placeholder.
      </p>
    </section>
  )
}
