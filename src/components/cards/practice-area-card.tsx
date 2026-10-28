import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'
import { Bi } from '@/components/i18n/bi'

export interface PracticeAreaCardProps {
  title: string
  titleHi?: string
  description: string
  descriptionHi?: string
  href: string
  image?: string
  className?: string
}

export function PracticeAreaCard({
  title,
  titleHi,
  description,
  descriptionHi,
  href,
  image,
  className,
}: PracticeAreaCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group flex h-full flex-col overflow-hidden border border-border bg-card transition-shadow duration-150 ease-out hover:shadow-[0_4px_16px_rgba(15,30,69,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        className
      )}
    >
      {image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-heading-sm font-semibold text-ink-900">
          <Bi en={title} hi={titleHi ?? title} />
        </h3>
        <p className="text-body-sm text-muted-foreground">
          <Bi en={description} hi={descriptionHi ?? description} />
        </p>
        <span className="mt-2 flex items-center gap-1.5 text-body-sm font-semibold text-gold-700">
          <Bi en="View Details" hi="विवरण देखें" />
          <ArrowRight
            weight="light"
            className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  )
}
