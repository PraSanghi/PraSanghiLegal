import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/common/breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy — PraSanghi',
  description: 'How PraSanghi handles personal information submitted through this website.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <Breadcrumb segments={[{ label: 'Privacy Policy' }]} />
      <h1 className="mt-4 text-display-lg font-bold text-blue-900">Privacy Policy</h1>
      <p className="mt-8 text-body-md text-muted-foreground italic">
        A full privacy policy — covering what is collected through the
        Contact and Careers forms, how it is stored, and how long it is
        retained — is pending legal review and is not yet available. This
        page is a structural placeholder and must be completed with real
        policy text before the site accepts any real form submissions.
      </p>
    </section>
  )
}
