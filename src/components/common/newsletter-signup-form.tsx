'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bi } from '@/components/i18n/bi'

const newsletterSchema = z.object({
  email: z.email('Enter a valid email address.'),
})

type NewsletterValues = z.infer<typeof newsletterSchema>

// Footer newsletter capture, adapted from Trilegal's "Subscribe to receive
// news" pattern (research/competitor-analysis-secondary.md) — same
// not-yet-wired-to-a-backend status as ContactForm/QuickApplyForm until a
// real mailing-list provider is chosen.
export function NewsletterSignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '' },
  })

  function onSubmit(values: NewsletterValues) {
    console.log('Newsletter signup (not yet wired to a mailing list):', values)
    toast.success(
      <Bi
        en="Thank you for subscribing. You will receive our updates going forward."
        hi="सदस्यता हेतु धन्यवाद। अब से आपको हमारे अद्यतन प्राप्त होते रहेंगे।"
      />
    )
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-3 flex flex-col gap-2">
      <label htmlFor="footer-newsletter-email" className="sr-only">
        <Bi en="Email address" hi="ईमेल पता" />
      </label>
      <div className="flex gap-2">
        <Input
          id="footer-newsletter-email"
          type="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          className="border-dark-border bg-blue-900 text-dark-text-primary placeholder:text-dark-text-muted"
          {...register('email')}
        />
        <Button type="submit" variant="secondary" disabled={isSubmitting}>
          <Bi en="Subscribe" hi="सदस्यता लें" />
        </Button>
      </div>
      {errors.email ? (
        <p className="text-body-sm text-red-400">{errors.email.message}</p>
      ) : null}
    </form>
  )
}
