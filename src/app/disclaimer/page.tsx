import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { Bi } from '@/components/i18n/bi'
import { BCI_DISCLAIMER_TEXT, BCI_DISCLAIMER_TEXT_HI } from '@/lib/legal-text'
import { pageMetadata } from '@/lib/site-config'

export const metadata: Metadata = pageMetadata({
  title: 'Disclaimer',
  description: 'Bar Council of India disclaimer.',
  path: '/disclaimer',
})

export default function DisclaimerPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb segments={[{ label: 'Disclaimer', labelHi: 'अस्वीकरण' }]} />
      <h1 className="mt-4 text-display-lg font-bold text-blue-900">
        <Bi en="Disclaimer" hi="अस्वीकरण" />
      </h1>
      <p className="mt-8 text-body-md text-blue-900">
        <Bi en={BCI_DISCLAIMER_TEXT} hi={BCI_DISCLAIMER_TEXT_HI} />
      </p>
    </section>
  )
}
