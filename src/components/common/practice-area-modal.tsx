'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, WhatsappLogo, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/common/contact-form'
import { Bi } from '@/components/i18n/bi'
import { practiceAreaDetails } from '@/lib/practice-areas-data'
import { contactPhoneDisplay, contactPhoneDialable, contactWhatsappNumber } from '@/lib/site-config'
import type { PracticeAreaGridItem } from '@/components/common/practice-area-grid'

export interface PracticeAreaModalProps {
  item: PracticeAreaGridItem | null
  onOpenChange: (open: boolean) => void
}

// Two parallel columns per the client's brief: left is "what this practice
// area is" (heading, image, detail), right is entirely conversion-focused
// ("how to contact") — WhatsApp/Call/Form, not a third recap of the copy.
export function PracticeAreaModal({ item, onOpenChange }: PracticeAreaModalProps) {
  const detail = item ? practiceAreaDetails[item.slug] : null

  return (
    <Dialog open={!!item} onOpenChange={onOpenChange}>
      <DialogContent
        className="grid max-h-[88vh] w-full max-w-4xl grid-cols-1 gap-8 overflow-y-auto p-6 sm:max-w-4xl lg:grid-cols-2"
        showCloseButton
      >
        {item && detail ? (
          <div className="flex flex-col">
            <DialogHeader className="text-left">
              <p className="text-label-eyebrow uppercase tracking-wide text-gold-700">
                <Bi en="Practice Area" hi="प्रैक्टिस क्षेत्र" />
              </p>
              <DialogTitle className="text-heading-md font-bold text-ink-900">
                <Bi en={item.title} hi={item.titleHi} />
              </DialogTitle>
              <DialogDescription className="text-body-md text-muted-foreground">
                <Bi en={detail.summary} hi={detail.summaryHi} />
              </DialogDescription>
            </DialogHeader>

            <div className="relative mt-4 h-48 w-full shrink-0 overflow-hidden bg-muted">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
              />
            </div>

            {detail.specificServices.length > 0 ? (
              <ul className="mt-4 flex flex-col gap-2">
                {detail.specificServices.slice(0, 3).map((service, i) => (
                  <li key={service} className="flex items-start gap-2 text-body-sm text-ink-900">
                    <span
                      className="mt-2 size-1 shrink-0 rounded-full bg-gold-500"
                      aria-hidden="true"
                    />
                    <Bi en={service} hi={detail.specificServicesHi[i] ?? service} />
                  </li>
                ))}
              </ul>
            ) : null}

            <dl className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              {(
                [
                  ['What', 'क्या', detail.quickFacts.what, detail.quickFactsHi.what],
                  ['When', 'कब', detail.quickFacts.when, detail.quickFactsHi.when],
                  ['How', 'कैसे', detail.quickFacts.how, detail.quickFactsHi.how],
                  ['Why Us', 'क्यों', detail.quickFacts.why, detail.quickFactsHi.why],
                  ['Where', 'कहाँ', detail.quickFacts.where, detail.quickFactsHi.where],
                ] as const
              ).map(([labelEn, labelHi, valueEn, valueHi]) => (
                <div key={labelEn} className="flex gap-3">
                  <dt className="w-14 shrink-0 text-label-eyebrow font-semibold uppercase tracking-wide text-gold-700">
                    <Bi en={labelEn} hi={labelHi} />
                  </dt>
                  <dd className="text-body-sm text-ink-900">
                    <Bi en={valueEn} hi={valueHi} />
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href={`/practice-areas/${item.slug}`}
              className="mt-4 inline-flex w-fit items-center gap-1.5 text-body-sm font-semibold text-gold-700 hover:text-gold-600"
            >
              <Bi en="View Full Details" hi="पूर्ण विवरण देखें" />
              <ArrowRight weight="light" className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        ) : null}

        {item ? (
          <div className="flex flex-col border-t border-border pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <p className="text-label-eyebrow uppercase tracking-wide text-gold-700">
              <Bi en="How to Contact Us" hi="हमसे संपर्क करने का तरीका" />
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {contactWhatsappNumber ? (
                <Button asChild variant="outline" className="justify-start">
                  <a
                    href={`https://wa.me/${contactWhatsappNumber}?text=${encodeURIComponent(
                      `Hi, I'd like to discuss a ${item.title} matter.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsappLogo weight="fill" className="size-5" aria-hidden="true" />
                    <Bi en="Chat on WhatsApp" hi="व्हाट्सएप पर चैट करें" />
                  </a>
                </Button>
              ) : (
                <div
                  className="flex items-center gap-2 border border-dashed border-border px-4 py-2.5 text-body-sm text-muted-foreground"
                  aria-disabled="true"
                >
                  <WhatsappLogo weight="light" className="size-5 shrink-0" aria-hidden="true" />
                  <Bi en="WhatsApp number pending confirmation" hi="व्हाट्सएप नंबर की पुष्टि लंबित है" />
                </div>
              )}

              {contactPhoneDialable ? (
                <Button asChild variant="outline" className="justify-start">
                  <a href={`tel:${contactPhoneDialable}`}>
                    <Phone weight="fill" className="size-5" aria-hidden="true" />
                    <Bi
                      en={`Call ${contactPhoneDisplay ?? ''}`}
                      hi={`कॉल करें ${contactPhoneDisplay ?? ''}`}
                    />
                  </a>
                </Button>
              ) : (
                <div
                  className="flex items-center gap-2 border border-dashed border-border px-4 py-2.5 text-body-sm text-muted-foreground"
                  aria-disabled="true"
                >
                  <Phone weight="light" className="size-5 shrink-0" aria-hidden="true" />
                  <Bi en="Phone number pending confirmation" hi="फ़ोन नंबर की पुष्टि लंबित है" />
                </div>
              )}
            </div>

            <p className="mt-6 text-body-sm font-semibold text-ink-900">
              <Bi en="Or send us the details directly" hi="अथवा हमें सीधे विवरण भेजें" />
            </p>
            <div className="mt-3">
              <ContactForm defaultPracticeArea={item.slug} />
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
