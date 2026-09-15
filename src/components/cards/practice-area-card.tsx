import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PracticeAreaCardProps {
  title: string
  description: string
  href: string
  icon?: LucideIcon
  className?: string
}

export function PracticeAreaCard({
  title,
  description,
  href,
  icon: Icon,
  className,
}: PracticeAreaCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col gap-3 rounded-none border border-border bg-card p-6 transition-shadow duration-150 ease-out hover:shadow-[0_2px_8px_rgba(14,27,51,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        className
      )}
    >
      {Icon ? <Icon className="size-6 text-gold-600" aria-hidden="true" /> : null}
      <h3 className="font-serif text-heading-sm font-semibold text-navy-900">
        {title}
      </h3>
      <p className="text-body-sm text-muted-foreground">{description}</p>
    </Link>
  )
}
