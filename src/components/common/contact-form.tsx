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
import { sendInquiry } from '@/app/actions/send-mail'

const contactSchema = z
  .object({
    name: z.string().trim().min(2, 'Please enter your full name.'),
    phone: z
      .string()
      .trim()
      .refine((v) => v === '' || /^[+\d][\d\s-]{8,18}$/.test(v), 'Please enter a valid phone number.'),
    email: z.union([z.email('Please enter a valid email address.'), z.literal('')]),
    practiceArea: z.string().optional(),
    message: z.string().trim().min(10, 'Please include a few details about your matter.'),
    website: z.string().optional(),
  })
  .refine((v) => v.phone !== '' || v.email !== '', {
    path: ['phone'],
    message: 'Please give either a phone number or an email address.',
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
      website: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    const data = new FormData()
    data.set('name', values.name)
    data.set('phone', values.phone)
    data.set('email', values.email)
    data.set('topic', values.practiceArea ? (practiceAreaDetails[values.practiceArea]?.title ?? values.practiceArea) : '')
    data.set('message', values.message)
    data.set('website', values.website ?? '')
    const result = await sendInquiry(data)
    if (!result.ok) {
      toast.error(result.error)
      return
    }
    toast.success(
      <Bi
        en="Thank you. Your inquiry has been received and a member of our team will contact you shortly."
        hi="धन्यवाद। आपकी पूछताछ प्राप्त हो गई है; हमारी टीम के सदस्य शीघ्र ही आपसे संपर्क करेंगे।"
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
      <FieldGroup>
        <Field data-invalid={!!errors.name}>
          <FieldLabel htmlFor="contact-name">
            <Bi en="Full Name" hi="पूरा नाम" />
          </FieldLabel>
          <Input id="contact-name" aria-invalid={!!errors.name} {...register('name')} />
          <FieldError errors={errors.name ? [errors.name] : undefined} />
        </Field>

        <p className="text-body-sm text-muted-foreground">
          <Bi
            en="Please give a phone number or an email address — whichever you prefer us to use."
            hi="कृपया फ़ोन नंबर अथवा ईमेल पता दें — जिस माध्यम से आप संपर्क चाहें।"
          />
        </p>

        <Field data-invalid={!!errors.phone}>
          <FieldLabel htmlFor="contact-phone">
            <Bi en="Phone" hi="फ़ोन" />
          </FieldLabel>
          <Input
            id="contact-phone"
            type="tel"
            className="text-base sm:text-sm"
            aria-invalid={!!errors.phone}
            {...register('phone')}
          />
          <FieldError errors={errors.phone ? [errors.phone] : undefined} />
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
          <FieldLabel htmlFor="contact-practice-area">
            <Bi en="Title / Area of Query" hi="विषय / प्रश्न का क्षेत्र" />
          </FieldLabel>
          <Select
            defaultValue={defaultPracticeArea || undefined}
            onValueChange={(value) => form.setValue('practiceArea', value)}
          >
            <SelectTrigger id="contact-practice-area" className="w-full">
              <SelectValue placeholder="Select the area of your query" />
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

        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          {...register('website')}
        />

        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <Bi en="Sending…" hi="भेजा जा रहा है…" />
          ) : (
            <Bi en="Submit Inquiry" hi="पूछताछ भेजें" />
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}
