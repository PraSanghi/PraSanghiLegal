import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { BCI_DISCLAIMER_TEXT } from '@/lib/legal-text'

export const metadata: Metadata = {
  title: 'Disclaimer — PraSanghi',
  description: 'Bar Council of India disclaimer.',
}

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb segments={[{ label: 'Disclaimer' }]} />
      <h1 className="mt-4 text-display-lg font-bold text-blue-900">Disclaimer</h1>
      <p className="mt-8 text-body-md text-blue-900">{BCI_DISCLAIMER_TEXT}</p>
    </section>
  )
}
