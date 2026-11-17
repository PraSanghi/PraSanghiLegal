import { EnvelopeSimple, Phone } from '@phosphor-icons/react/dist/ssr'
import { Bi } from '@/components/i18n/bi'
import { PersonPortrait } from '@/components/people/person-portrait'

export interface AttorneyProfileHeaderProps {
  name: string
  role: string
  roleHi?: string
  designation?: string
  designationHi?: string
  photo?: string
  email?: string
  phone?: string
}

// A formal header band: portrait (or monogram seal) beside the name — never a
// full-bleed crop of a face, which the client rejected as unprofessional.
export function AttorneyProfileHeader({
  name,
  role,
  roleHi,
  designation,
  designationHi,
  photo,
  email,
  phone,
}: AttorneyProfileHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-ink-900 text-dark-text-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full border border-gold-500/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 size-64 rounded-full border border-gold-500/10"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-12 sm:flex-row sm:items-center sm:py-16">
        {photo ? (
          <PersonPortrait
            name={name}
            role={role}
            photo={photo}
            sizes="224px"
            priority
            className="aspect-4/5 w-40 shrink-0 border border-gold-500/40 sm:w-56"
          />
        ) : (
          <PersonPortrait
            name={name}
            role={role}
            variant="seal"
            className="size-32 shrink-0 text-5xl sm:size-40"
          />
        )}
        <div>
          <p className="text-label-eyebrow uppercase tracking-[0.2em] text-gold-300">
            <Bi en="Advocate" hi="अधिवक्ता" />
          </p>
          <h1 className="mt-2 text-heading-lg font-bold sm:text-display-lg">
            <span className="lang-en">Adv. </span>
            <span className="lang-hi">अधि. </span>
            {name}
          </h1>
          <p className="mt-3 text-body-lg text-gold-300">
            <Bi en={role} hi={roleHi ?? role} />
          </p>
          {designation ? (
            <p className="mt-1 text-body-md text-dark-text-muted">
              <Bi en={designation} hi={designationHi ?? designation} />
            </p>
          ) : null}
          {phone || email ? (
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-body-sm">
              {phone ? (
                <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-gold-300">
                  <Phone weight="light" className="size-4" aria-hidden="true" />
                  {phone}
                </a>
              ) : null}
              {email ? (
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-gold-300">
                  <EnvelopeSimple weight="light" className="size-4" aria-hidden="true" />
                  {email}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
