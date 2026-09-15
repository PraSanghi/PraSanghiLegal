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
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.email('Please enter a valid email address.'),
  phone: z.string().optional(),
  practiceArea: z.string().optional(),
  message: z.string().min(10, 'Please include a few details about your matter.'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', practiceArea: '', message: '' },
  })

  // NOTE: no backend endpoint exists yet — this is a structural placeholder.
  // Wiring a real submission path (API route + notification/CRM routing) is
  // a follow-up item, not part of this build. See
  // build/implementation-roadmap.md Phase 12.
  function onSubmit(values: ContactFormValues) {
    console.log('Contact form submission (not yet wired to a backend):', values)
    toast.success('Message received. We will get back to you.')
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
          <FieldLabel htmlFor="contact-name">Full Name</FieldLabel>
          <Input id="contact-name" aria-invalid={!!errors.name} {...register('name')} />
          <FieldError errors={errors.name ? [errors.name] : undefined} />
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
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
          <FieldLabel htmlFor="contact-phone">Phone (optional)</FieldLabel>
          <Input
            id="contact-phone"
            type="tel"
            className="text-base sm:text-sm"
            {...register('phone')}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-practice-area">Practice Area of Interest</FieldLabel>
          <Select
            onValueChange={(value) => form.setValue('practiceArea', value)}
          >
            <SelectTrigger id="contact-practice-area" className="w-full">
              <SelectValue placeholder="Select a practice area" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {practiceAreaSlugs.map((slug) => (
                  <SelectItem key={slug} value={slug}>
                    {practiceAreaDetails[slug].title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            rows={5}
            aria-invalid={!!errors.message}
            {...register('message')}
          />
          <FieldError errors={errors.message ? [errors.message] : undefined} />
        </Field>

        <Button type="submit" size="lg" disabled={isSubmitting}>
          Submit
        </Button>
      </FieldGroup>
    </form>
  )
}
