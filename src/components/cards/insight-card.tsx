import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Bi } from '@/components/i18n/bi'

export type InsightContentType = 'Legal Update' | 'Article' | 'Podcast'

export const CONTENT_TYPE_HI: Record<InsightContentType, string> = {
  'Legal Update': 'विधिक अद्यतन',
  Article: 'लेख',
  Podcast: 'पॉडकास्ट',
}

export interface InsightCardProps {
  contentType: InsightContentType
  date: string
  headline: string
  headlineHi?: string
  excerpt?: string
  excerptHi?: string
  practiceAreaTag?: string
  practiceAreaTagHi?: string
  image?: string
  href: string
  className?: string
}

export function InsightCard({
  contentType,
  date,
  headline,
  headlineHi,
  excerpt,
  excerptHi,
  practiceAreaTag,
  practiceAreaTagHi,
  image,
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
        'group flex h-full flex-col overflow-hidden border border-border bg-card transition-shadow duration-150 ease-out hover:shadow-[0_4px_16px_rgba(15,30,69,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        className
      )}
    >
      {image ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between text-label-eyebrow tracking-wide text-teal-600">
          <span className="uppercase">
            <Bi en={contentType} hi={CONTENT_TYPE_HI[contentType]} />
          </span>
          <time dateTime={date} className="text-muted-foreground">
            {formattedDate}
          </time>
        </div>
        <h3 className="text-heading-sm font-semibold text-blue-900">
          <Bi en={headline} hi={headlineHi ?? headline} />
        </h3>
        {excerpt ? (
          <p className="text-body-sm text-muted-foreground">
            <Bi en={excerpt} hi={excerptHi ?? excerpt} />
          </p>
        ) : null}
        {practiceAreaTag ? (
          <span className="mt-auto text-body-sm font-medium text-blue-500">
            <Bi en={practiceAreaTag} hi={practiceAreaTagHi ?? practiceAreaTag} />
          </span>
        ) : null}
      </div>
    </Link>
  )
}
