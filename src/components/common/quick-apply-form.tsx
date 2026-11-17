'use client'

import { useState, type BaseSyntheticEvent } from 'react'
import Script from 'next/script'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { UploadSimple } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'
import { Bi } from '@/components/i18n/bi'
import { sendApplication } from '@/app/actions/send-mail'
import { CV_ACCEPTED_TYPES, MAX_CV_BYTES, MAX_CV_MB } from '@/lib/form-limits'

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

const quickApplySchema = z
  .object({
    name: z.string().trim().min(2, 'Please enter your full name.'),
    email: z.union([z.email('Please enter a valid email address.'), z.literal('')]),
    phone: z
      .string()
      .trim()
      .refine((v) => v === '' || /^[+\d][\d\s-]{8,18}$/.test(v), 'Please enter a valid phone number.'),
    preferredRole: z.string().trim().min(2, 'Let us know the role or area you are interested in.'),
    linkedinOrCv: z.string().trim(),
    website: z.string().optional(),
  })
  .refine((v) => v.email !== '' || v.phone !== '', {
    path: ['email'],
    message: 'Please give either an email address or a phone number.',
  })

type QuickApplyValues = z.infer<typeof quickApplySchema>

export function QuickApplyForm() {
  const [cv, setCv] = useState<File | null>(null)
  const [cvError, setCvError] = useState<string | null>(null)

  const form = useForm<QuickApplyValues>({
    resolver: zodResolver(quickApplySchema),
    defaultValues: { name: '', email: '', phone: '', preferredRole: '', linkedinOrCv: '', website: '' },
  })

  function onCvChange(file: File | null) {
    setCvError(null)
    if (!file) return setCv(null)
    if (file.size > MAX_CV_BYTES) {
      setCv(null)
      return setCvError(`Your CV must be ${MAX_CV_MB} MB or smaller.`)
    }
    if (!CV_ACCEPTED_TYPES.includes(file.type)) {
      setCv(null)
      return setCvError('Please upload a PDF or Word document.')
    }
    setCv(file)
  }

  async function onSubmit(values: QuickApplyValues, event?: BaseSyntheticEvent) {
    const formEl = event?.target instanceof HTMLFormElement ? event.target : null
    if (cvError) return
    const data = new FormData()
    data.set('name', values.name)
    data.set('email', values.email)
    data.set('phone', values.phone)
    data.set('role', values.preferredRole)
    data.set('link', values.linkedinOrCv)
    data.set('website', values.website ?? '')
    if (cv) data.set('cv', cv)
    const token = formEl?.querySelector<HTMLInputElement>(
      'input[name="cf-turnstile-response"]'
    )?.value
    if (token) data.set('cf-turnstile-response', token)

    const result = await sendApplication(data)
    if (!result.ok) {
      toast.error(result.error)
      return
    }
    toast.success(
      <Bi
        en="Thank you. Your application has been received; our team will be in touch."
        hi="धन्यवाद। आपका आवेदन प्राप्त हो गया है; हमारी टीम शीघ्र आपसे संपर्क करेगी।"
      />
    )
    form.reset()
    setCv(null)
    formEl?.reset()
    // @ts-expect-error — injected by the Turnstile script when configured
    window.turnstile?.reset?.()
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative">
      {turnstileSiteKey ? (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
      ) : null}
      <FieldGroup>
        <Field data-invalid={!!errors.name}>
          <FieldLabel htmlFor="apply-name">
            <Bi en="Full Name" hi="पूरा नाम" />
          </FieldLabel>
          <Input id="apply-name" aria-invalid={!!errors.name} {...register('name')} />
          <FieldError errors={errors.name ? [errors.name] : undefined} />
        </Field>

        <p className="text-body-sm text-muted-foreground">
          <Bi
            en="Email or phone number — at least one is required."
            hi="ईमेल अथवा फ़ोन नंबर — कम से कम एक आवश्यक है।"
          />
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="apply-email">
              <Bi en="Email" hi="ईमेल" />
            </FieldLabel>
            <Input
              id="apply-email"
              type="email"
              className="text-base sm:text-sm"
              aria-invalid={!!errors.email}
              {...register('email')}
            />
            <FieldError errors={errors.email ? [errors.email] : undefined} />
          </Field>

          <Field data-invalid={!!errors.phone}>
            <FieldLabel htmlFor="apply-phone">
              <Bi en="Phone Number" hi="फ़ोन नंबर" />
            </FieldLabel>
            <Input
              id="apply-phone"
              type="tel"
              className="text-base sm:text-sm"
              aria-invalid={!!errors.phone}
              {...register('phone')}
            />
            <FieldError errors={errors.phone ? [errors.phone] : undefined} />
          </Field>
        </div>

        <Field data-invalid={!!errors.preferredRole}>
          <FieldLabel htmlFor="apply-role">
            <Bi en="Preferred Role / Area of Interest" hi="इच्छित पद / रुचि का क्षेत्र" />
          </FieldLabel>
          <Input
            id="apply-role"
            placeholder="e.g. Litigation Associate, Regulatory Advisory"
            aria-invalid={!!errors.preferredRole}
            {...register('preferredRole')}
          />
          <FieldError errors={errors.preferredRole ? [errors.preferredRole] : undefined} />
        </Field>

        <Field data-invalid={!!cvError}>
          <FieldLabel htmlFor="apply-cv">
            <Bi en={`Upload CV (PDF or Word, up to ${MAX_CV_MB} MB)`} hi={`सीवी अपलोड करें (पीडीएफ़ अथवा वर्ड, अधिकतम ${MAX_CV_MB} एमबी)`} />
          </FieldLabel>
          <label
            htmlFor="apply-cv"
            className="flex cursor-pointer items-center gap-3 border border-dashed border-gold-500/60 bg-card px-4 py-3 text-body-sm text-ink-900 transition-colors hover:bg-gold-50 focus-within:outline-2 focus-within:outline-ring"
          >
            <UploadSimple weight="light" className="size-5 shrink-0 text-gold-700" aria-hidden="true" />
            <span className="truncate">
              {cv ? cv.name : <Bi en="Choose a file…" hi="फ़ाइल चुनें…" />}
            </span>
            <input
              id="apply-cv"
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="sr-only"
              aria-invalid={!!cvError}
              onChange={(e) => onCvChange(e.target.files?.[0] ?? null)}
            />
          </label>
          {cvError ? <FieldError>{cvError}</FieldError> : null}
        </Field>

        <Field>
          <FieldLabel htmlFor="apply-link">
            <Bi en="LinkedIn Profile or CV Link (optional)" hi="लिंक्डइन प्रोफ़ाइल अथवा सीवी लिंक (वैकल्पिक)" />
          </FieldLabel>
          <Input id="apply-link" placeholder="https://" {...register('linkedinOrCv')} />
        </Field>

        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          {...register('website')}
        />

        {turnstileSiteKey ? (
          <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light" />
        ) : null}

        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <Bi en="Sending…" hi="भेजा जा रहा है…" />
          ) : (
            <Bi en="Send Application" hi="आवेदन भेजें" />
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}
