// Client asked for a 10 MB CV limit (review PDF p.101). Vercel caps a
// function request body at 4.5 MB, so uploads above ~4 MB cannot pass through
// a Server Action there. Raise this to 10 MB only together with a direct-to-
// storage upload (e.g. Vercel Blob client uploads) — see the decision note
// in planning/client-review-2026-10-change-register.md.
export const MAX_CV_MB = 4
export const MAX_CV_BYTES = MAX_CV_MB * 1024 * 1024

export const CV_ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
