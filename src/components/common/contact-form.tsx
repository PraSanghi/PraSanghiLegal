'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'
import { Bi } from '@/components/i18n/bi'
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.email('Please enter a valid email address.'),
  phone: z.string().optional(),
  practiceArea: z.string().optional(),
  message: z.string().min(10, 'Please include a few details about your matter.'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export interface ContactFormProps {
  defaultPracticeArea?: string
}

export function ContactForm({ defaultPracticeArea = '' }: ContactFormProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      practiceArea: defaultPracticeArea,
      message: '',
    },
  })

  // NOTE: no backend endpoint exists yet — this is a structural placeholder.
  // Wiring a real submission path (API route + notification/CRM routing) is
  // a follow-up item, not part of this build. See
  // build/implementation-roadmap.md Phase 12.
  function onSubmit(values: ContactFormValues) {
    console.log('Contact form submission (not yet wired to a backend):', values)
    toast.success(
      <Bi
        en="Your inquiry has been received. A member of our team will respond shortly."
        hi="आपकी पूछताछ प्राप्त हो गई है। हमारी टीम का एक सदस्य शीघ्र आपसे संपर्क करेगा।"
      />
    )
    form.reset()
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FieldGroup>
        <Field data-invalid={!!errors.name}>
          <FieldLabel htmlFor="contact-name">
            <Bi en="Full Name" hi="पूरा नाम" />
          </FieldLabel>
          <Input id="contact-name" aria-invalid={!!errors.name} {...register('name')} />
          <FieldError errors={errors.name ? [errors.name] : undefined} />
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel htmlFor="contact-email">
            <Bi en="Email" hi="ईमेल" />
          </FieldLabel>
          <Input
            id="contact-email"
            type="email"
            className="text-base sm:text-sm"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          <FieldError errors={errors.email ? [errors.email] : undefined} />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-phone">
            <Bi en="Phone (optional)" hi="फ़ोन (वैकल्पिक)" />
          </FieldLabel>
          <Input
            id="contact-phone"
            type="tel"
            className="text-base sm:text-sm"
            {...register('phone')}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-practice-area">
            <Bi en="Practice Area of Interest" hi="रुचि का प्रैक्टिस क्षेत्र" />
          </FieldLabel>
          <Select
            defaultValue={defaultPracticeArea || undefined}
            onValueChange={(value) => form.setValue('practiceArea', value)}
          >
            <SelectTrigger id="contact-practice-area" className="w-full">
              <SelectValue placeholder="Select a practice area" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {practiceAreaSlugs.map((slug) => (
                  <SelectItem key={slug} value={slug}>
                    <Bi en={practiceAreaDetails[slug].title} hi={practiceAreaDetails[slug].titleHi} />
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="contact-message">
            <Bi en="Details of Your Matter" hi="अपने मामले का विवरण" />
          </FieldLabel>
          <Textarea
            id="contact-message"
            rows={5}
            aria-invalid={!!errors.message}
            {...register('message')}
          />
          <FieldError errors={errors.message ? [errors.message] : undefined} />
        </Field>

        <Button type="submit" size="lg" disabled={isSubmitting}>
          <Bi en="Submit Inquiry" hi="पूछताछ भेजें" />
        </Button>
      </FieldGroup>
    </form>
  )
}
