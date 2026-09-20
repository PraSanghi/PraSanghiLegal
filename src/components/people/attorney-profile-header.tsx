import Image from 'next/image'
import { EnvelopeSimple, Phone } from '@phosphor-icons/react/dist/ssr'
import { Bi } from '@/components/i18n/bi'

export interface AttorneyProfileHeaderProps {
  name: string
  role: string
  roleHi?: string
  location?: string
  photo: string
  email?: string
  phone?: string
  education?: string[]
}

export function AttorneyProfileHeader({
  name,
  role,
  roleHi,
  location,
  photo,
  email,
  phone,
  education,
}: AttorneyProfileHeaderProps) {
  return (
    <div className="relative">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted sm:aspect-[21/9]">
        <Image src={photo} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="relative mx-4 -mt-16 max-w-xl border border-border bg-blue-900 p-6 text-dark-text-primary sm:mx-8 sm:-mt-20 sm:p-8">
        <h1 className="text-heading-lg font-bold">{name}</h1>
        {location ? <p className="mt-1 text-body-sm text-dark-text-muted">{location}</p> : null}
        <p className="mt-2 text-body-md text-teal-400">
          <Bi en={role} hi={roleHi ?? role} />
        </p>
        <div className="mt-4 flex flex-col gap-1 text-body-sm">
          {phone ? (
            <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-teal-400">
              <Phone weight="light" className="size-4" aria-hidden="true" />
              {phone}
            </a>
          ) : null}
          {email ? (
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-teal-400"
            >
              <EnvelopeSimple weight="light" className="size-4" aria-hidden="true" />
              <Bi en={`Email ${name.split(' ')[0]}`} hi={`${name.split(' ')[0]} को ईमेल करें`} />
            </a>
          ) : null}
        </div>
        {education && education.length > 0 ? (
          <div className="mt-4 border-t border-dark-border pt-4">
            <p className="text-label-eyebrow uppercase tracking-wide text-teal-400">
              <Bi en="Education" hi="शिक्षा" />
            </p>
            <ul className="mt-2 flex flex-col gap-1 text-body-sm text-dark-text-muted">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}
