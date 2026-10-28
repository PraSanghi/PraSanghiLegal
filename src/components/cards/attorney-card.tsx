import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Bi } from '@/components/i18n/bi'

export interface AttorneyCardProps {
  name: string
  role: string
  roleHi?: string
  photo: string
  practiceTags?: string[]
  practiceTagsHi?: string[]
  href: string
  className?: string
}

export function AttorneyCard({
  name,
  role,
  roleHi,
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
        'group flex h-full flex-col border border-border bg-card transition-shadow duration-150 ease-out hover:shadow-[0_2px_8px_rgba(14,27,51,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        className
      )}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden bg-muted">
        <Image
          src={photo}
          alt={`${name}, ${role}`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <p className="text-heading-sm font-semibold text-ink-900">{name}</p>
        <p className="text-body-sm text-gold-700">
          <Bi en={role} hi={roleHi ?? role} />
        </p>
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
