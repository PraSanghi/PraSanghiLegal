import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface AttorneyCardProps {
  name: string
  role: string
  photo: string
  practiceTags?: string[]
  href: string
  className?: string
}

export function AttorneyCard({
  name,
  role,
  photo,
  practiceTags,
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
        <Image src={photo} alt={`${name}, ${role}`} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-1 p-4">
        <p className="text-heading-sm font-semibold text-blue-900">{name}</p>
        <p className="text-body-sm text-teal-600">{role}</p>
        {practiceTags && practiceTags.length > 0 ? (
          <p className="text-body-sm text-muted-foreground">{practiceTags.join(' · ')}</p>
        ) : null}
      </div>
    </Link>
  )
}
