import Link from 'next/link'
import { cn } from '@/lib/utils'

export type InsightContentType = 'Legal Update' | 'Article' | 'Podcast'

export interface InsightCardProps {
  contentType: InsightContentType
  date: string
  headline: string
  excerpt?: string
  practiceAreaTag?: string
  href: string
  className?: string
}

export function InsightCard({
  contentType,
  date,
  headline,
  excerpt,
  practiceAreaTag,
  href,
  className,
}: InsightCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col gap-3 border border-border bg-card p-6 transition-shadow duration-150 ease-out hover:shadow-[0_2px_8px_rgba(14,27,51,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        className
      )}
    >
      <div className="flex items-center justify-between text-label-eyebrow tracking-wide text-teal-600">
        <span className="uppercase">{contentType}</span>
        <time dateTime={date} className="text-muted-foreground">
          {formattedDate}
        </time>
      </div>
      <h3 className="text-heading-sm font-semibold text-blue-900">{headline}</h3>
      {excerpt ? <p className="text-body-sm text-muted-foreground">{excerpt}</p> : null}
      {practiceAreaTag ? (
        <span className="text-body-sm font-medium text-blue-500">{practiceAreaTag}</span>
      ) : null}
    </Link>
  )
}
