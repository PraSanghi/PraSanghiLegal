import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Bi } from '@/components/i18n/bi'
import { PersonPortrait } from '@/components/people/person-portrait'

export interface AttorneyCardProps {
  name: string
  role: string
  roleHi?: string
  designation?: string
  designationHi?: string
  photo?: string
  practiceTags?: string[]
  practiceTagsHi?: string[]
  href: string
  className?: string
}

export function AttorneyCard({
  name,
  role,
  roleHi,
  designation,
  designationHi,
  photo,
  practiceTags,
  practiceTagsHi,
  href,
  className,
}: AttorneyCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex h-full flex-col border border-border bg-card transition-[box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(14,27,51,0.10)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        className
      )}
    >
      <PersonPortrait name={name} role={role} photo={photo} className="aspect-4/5 w-full" />
      <div className="flex flex-col gap-1 p-4">
        <p className="text-heading-sm font-semibold text-ink-900">
          <span className="lang-en">Adv. </span>
          <span className="lang-hi">अधि. </span>
          {name}
        </p>
        <p className="text-body-sm text-gold-700">
          <Bi en={role} hi={roleHi ?? role} />
        </p>
        {designation ? (
          <p className="text-body-sm text-ink-900">
            <Bi en={designation} hi={designationHi ?? designation} />
          </p>
        ) : null}
        {practiceTags && practiceTags.length > 0 ? (
          <p className="text-body-sm text-muted-foreground">
            <span className="lang-en">{practiceTags.join(' · ')}</span>
            <span className="lang-hi">{(practiceTagsHi ?? practiceTags).join(' · ')}</span>
          </p>
        ) : null}
      </div>
    </Link>
  )
}
