import Image from 'next/image'
import { cn } from '@/lib/utils'
import { initialsOf } from '@/lib/people-data'

export interface PersonPortraitProps {
  name: string
  role: string
  photo?: string
  sizes?: string
  /** `card` = tall card tile; `seal` = compact round seal for headers. */
  variant?: 'card' | 'seal'
  className?: string
  priority?: boolean
}

/**
 * A real headshot when one exists, otherwise a formal initials monogram in the
 * logo's gold — the treatment the Firm Profile itself uses for its counsel.
 */
export function PersonPortrait({
  name,
  role,
  photo,
  sizes = '(min-width: 640px) 50vw, 100vw',
  variant = 'card',
  className,
  priority,
}: PersonPortraitProps) {
  const label = `${name}, ${role}`

  if (photo) {
    return (
      <div className={cn('relative overflow-hidden bg-muted', className)}>
        <Image
          src={photo}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    )
  }

  const initials = initialsOf(name)

  if (variant === 'seal') {
    return (
      <div
        role="img"
        aria-label={label}
        className={cn(
          'flex aspect-square items-center justify-center rounded-full border border-gold-500 bg-ink-900 font-heading text-gold-300',
          className
        )}
      >
        <span className="text-[length:inherit] leading-none tracking-wide">{initials}</span>
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'portrait-monogram relative flex items-center justify-center overflow-hidden bg-ink-900',
        className
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-3 border border-gold-500/40 transition-[inset] duration-500 ease-out group-hover:inset-2"
      />
      <div
        aria-hidden="true"
        className="flex size-28 items-center justify-center rounded-full border border-gold-500 transition-transform duration-500 ease-out group-hover:scale-105"
      >
        <span className="font-heading text-4xl tracking-wide text-gold-300">{initials}</span>
      </div>
    </div>
  )
}
