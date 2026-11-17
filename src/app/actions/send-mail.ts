'use server'

import { z } from 'zod'
import { firmContact } from '@/lib/site-config'
import { MAX_CV_BYTES, CV_ACCEPTED_TYPES } from '@/lib/form-limits'

// Delivery: Resend (https://resend.com) REST API — no SDK dependency.
// Required env (Vercel → Settings → Environment Variables):
//   RESEND_API_KEY      — API key from the Resend dashboard
//   MAIL_FROM           — a sender on a domain verified in Resend, e.g.
//                         "PraSanghi Website <website@prasanghilegal.com>"
// Optional:
//   MAIL_TO             — defaults to contact@prasanghilegal.com (client note p.15)
//   TURNSTILE_SECRET_KEY — enables Cloudflare Turnstile verification on careers

export type SendResult = { ok: true } | { ok: false; error: string }

const FALLBACK_ERROR = `We could not send your message just now. Please call ${firmContact.phones[0].display} or write to ${firmContact.email}.`

const atLeastOneContact = (v: { phone?: string; email?: string }) =>
  Boolean(v.phone?.trim()) || Boolean(v.email?.trim())

const inquirySchema = z
  .object({
    name: z.string().trim().min(2).max(120),
    phone: z.string().trim().max(20).optional().default(''),
    email: z.union([z.email(), z.literal('')]).optional().default(''),
    topic: z.string().trim().max(160).optional().default(''),
    message: z.string().trim().min(10).max(5000),
    website: z.string().max(0).optional().default(''), // honeypot
  })
  .refine(atLeastOneContact, { message: 'phone-or-email' })

const applicationSchema = z
  .object({
    name: z.string().trim().min(2).max(120),
    phone: z.string().trim().max(20).optional().default(''),
    email: z.union([z.email(), z.literal('')]).optional().default(''),
    role: z.string().trim().min(2).max(160),
    link: z.string().trim().max(300).optional().default(''),
    website: z.string().max(0).optional().default(''),
  })
  .refine(atLeastOneContact, { message: 'phone-or-email' })

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function rows(fields: Record<string, string>) {
  return Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`
    )
    .join('')
}

async function deliver(payload: {
  subject: string
  fields: Record<string, string>
  replyTo?: string
  attachment?: { filename: string; content: string }
}): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.MAIL_FROM
  if (!apiKey || !from) {
    console.error('[send-mail] RESEND_API_KEY / MAIL_FROM not configured')
    return { ok: false, error: FALLBACK_ERROR }
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [process.env.MAIL_TO || firmContact.email],
      reply_to: payload.replyTo || undefined,
      subject: payload.subject,
      html: `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows(payload.fields)}</table>`,
      attachments: payload.attachment ? [payload.attachment] : undefined,
    }),
  })

  if (!res.ok) {
    console.error('[send-mail] Resend error', res.status, await res.text().catch(() => ''))
    return { ok: false, error: FALLBACK_ERROR }
  }
  return { ok: true }
}

async function verifyTurnstile(token: FormDataEntryValue | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true // captcha not configured yet — honeypot still applies
  if (typeof token !== 'string' || !token) return false
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret, response: token }),
  })
  const data = (await res.json().catch(() => ({}))) as { success?: boolean }
  return data.success === true
}

export async function sendInquiry(formData: FormData): Promise<SendResult> {
  const parsed = inquirySchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return { ok: false, error: 'Please check the form: your name, a phone number or email, and a few details of your matter are required.' }
  }
  const v = parsed.data
  if (v.website) return { ok: true } // bot — silently accept

  return deliver({
    subject: `Website inquiry: ${v.topic || 'General'} — ${v.name}`,
    replyTo: v.email || undefined,
    fields: {
      Name: v.name,
      Phone: v.phone,
      Email: v.email,
      'Title / Area of Query': v.topic,
      Details: v.message,
    },
  })
}

export async function sendApplication(formData: FormData): Promise<SendResult> {
  const parsed = applicationSchema.safeParse(Object.fromEntries(formData))
  if (!parsed.success) {
    return { ok: false, error: 'Please check the form: your name, a phone number or email, and the role you are interested in are required.' }
  }
  const v = parsed.data
  if (v.website) return { ok: true }

  if (!(await verifyTurnstile(formData.get('cf-turnstile-response')))) {
    return { ok: false, error: 'Captcha verification failed. Please try again.' }
  }

  const cv = formData.get('cv')
  let attachment: { filename: string; content: string } | undefined
  if (cv instanceof File && cv.size > 0) {
    if (cv.size > MAX_CV_BYTES) {
      return { ok: false, error: `Your CV is larger than ${MAX_CV_BYTES / 1024 / 1024} MB.` }
    }
    if (!CV_ACCEPTED_TYPES.includes(cv.type)) {
      return { ok: false, error: 'Please upload your CV as a PDF or Word document.' }
    }
    attachment = {
      filename: cv.name.replace(/[^\w.\- ]/g, '_').slice(0, 120),
      content: Buffer.from(await cv.arrayBuffer()).toString('base64'),
    }
  }

  return deliver({
    subject: `Careers application: ${v.role} — ${v.name}`,
    replyTo: v.email || undefined,
    fields: {
      Name: v.name,
      Phone: v.phone,
      Email: v.email,
      'Preferred role / area': v.role,
      'LinkedIn / CV link': v.link,
      'CV attached': attachment ? attachment.filename : 'No',
    },
    attachment,
  })
}
