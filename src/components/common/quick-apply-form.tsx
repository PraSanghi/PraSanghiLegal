'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'

const quickApplySchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.email('Please enter a valid email address.'),
  preferredRole: z.string().min(2, 'Let us know the role or area you are interested in.'),
  linkedinOrCv: z
    .string()
    .min(1, 'Share a LinkedIn profile or CV link so we can review your background.'),
})

type QuickApplyValues = z.infer<typeof quickApplySchema>

// Embedded "Quick Apply" form pattern, adapted from PD Law Chambers'
// Careers page (research/competitor-analysis-primary.md) — best-in-class
// among the reference sites for reducing friction on a speculative
// application, so PraSanghi doesn't require a resume-upload flow to get a
// candidate's details.
export function QuickApplyForm() {
  const form = useForm<QuickApplyValues>({
    resolver: zodResolver(quickApplySchema),
    defaultValues: { name: '', email: '', preferredRole: '', linkedinOrCv: '' },
  })

  // NOTE: no backend endpoint exists yet — same placeholder status as
  // ContactForm. See build/implementation-roadmap.md Phase 12.
  function onSubmit(values: QuickApplyValues) {
    console.log('Quick Apply submission (not yet wired to a backend):', values)
    toast.success("Application received. We'll be in touch.")
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
          <FieldLabel htmlFor="apply-name">Full Name</FieldLabel>
          <Input id="apply-name" aria-invalid={!!errors.name} {...register('name')} />
          <FieldError errors={errors.name ? [errors.name] : undefined} />
        </Field>

        <Field data-invalid={!!errors.email}>
          <FieldLabel htmlFor="apply-email">Email</FieldLabel>
          <Input
            id="apply-email"
            type="email"
            className="text-base sm:text-sm"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          <FieldError errors={errors.email ? [errors.email] : undefined} />
        </Field>

        <Field data-invalid={!!errors.preferredRole}>
          <FieldLabel htmlFor="apply-role">Preferred Role / Area of Interest</FieldLabel>
          <Input
            id="apply-role"
            placeholder="e.g. Litigation Associate, Regulatory Advisory"
            aria-invalid={!!errors.preferredRole}
            {...register('preferredRole')}
          />
          <FieldError errors={errors.preferredRole ? [errors.preferredRole] : undefined} />
        </Field>

        <Field data-invalid={!!errors.linkedinOrCv}>
          <FieldLabel htmlFor="apply-link">LinkedIn Profile or CV Link</FieldLabel>
          <Input
            id="apply-link"
            placeholder="https://"
            aria-invalid={!!errors.linkedinOrCv}
            {...register('linkedinOrCv')}
          />
          <FieldError errors={errors.linkedinOrCv ? [errors.linkedinOrCv] : undefined} />
        </Field>

        <Button type="submit" size="lg" disabled={isSubmitting}>
          Send Application
        </Button>
      </FieldGroup>
    </form>
  )
}
