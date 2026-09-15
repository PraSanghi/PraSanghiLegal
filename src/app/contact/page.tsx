import type { Metadata } from 'next'
import Image from 'next/image'
import { Breadcrumb } from '@/components/common/breadcrumb'
import { ContactForm } from '@/components/common/contact-form'
import { PageBanner } from '@/components/common/page-banner'

export const metadata: Metadata = {
  title: 'Contact Us — PraSanghi',
  description: 'Schedule a consultation with PraSanghi regarding your legal matter.',
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumb segments={[{ label: 'Contact Us' }]} />
      <PageBanner
        eyebrow="Contact Us"
        title="Schedule a Consultation"
        image="https://picsum.photos/seed/prasanghi-contact/1600/700"
      />
      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="max-w-2xl text-body-lg text-muted-foreground">
          Share the details of your matter, and a member of our team will
          respond promptly.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <ContactForm />
          </div>
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
              <Image
                src="https://picsum.photos/seed/prasanghi-office/800/600"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-8 text-heading-md font-bold text-blue-900">Office</h2>
            <address className="mt-3 text-body-md not-italic text-muted-foreground">
              Address pending confirmation — see project_requirements.md §10,
              Open Item 3.
              <br />
              Office hours pending confirmation.
            </address>
            <h2 className="mt-8 text-heading-md font-bold text-blue-900">Email</h2>
            <p className="mt-3 text-body-md text-muted-foreground">
              contact@prasanghi.example (placeholder pending a confirmed domain)
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
