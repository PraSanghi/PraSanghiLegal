import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Bi } from '@/components/i18n/bi'
import { INITIATIVE_THEME_HI, type InitiativeRecord } from '@/lib/initiatives-data'

/** Branded stand-in shown until the client supplies the real photo. */
export function InitiativeImageFallback({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('flex h-full w-full items-center justify-center bg-gold-100/60', className)}
    >
      <Image
        src="/brand/prasanghi-mark.png"
        alt=""
        width={96}
        height={96}
        className="h-20 w-auto opacity-40"
      />
    </div>
  )
}

export function InitiativeCard({
  item,
  className,
}: {
  item: InitiativeRecord
  className?: string
}) {
  return (
    <Link
      href={`/social-initiatives/${item.slug}`}
      className={cn(
        'group flex h-full flex-col overflow-hidden border border-border bg-card transition-shadow duration-150 ease-out hover:shadow-[0_4px_16px_rgba(15,30,69,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        ) : (
          <InitiativeImageFallback />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between text-label-eyebrow tracking-wide text-gold-700">
          <span className="uppercase">
            <Bi en={item.theme} hi={INITIATIVE_THEME_HI[item.theme]} />
          </span>
          {item.when ? (
            <span className="text-muted-foreground">
              <Bi en={item.when} hi={item.whenHi ?? item.when} />
            </span>
          ) : null}
        </div>
        <h3 className="text-heading-sm font-semibold text-ink-900">
          <Bi en={item.headline} hi={item.headlineHi} />
        </h3>
        <p className="text-body-sm text-muted-foreground">
          <Bi en={item.excerpt} hi={item.excerptHi} />
        </p>
      </div>
    </Link>
  )
}
