import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Bi } from '@/components/i18n/bi'

/**
 * Typographic cover for Legal Insights articles: the firm mark plus the
 * article's practice area on the ink ground. Stands in for stock photos,
 * which kept landing off-topic. A real photo set on the record still wins.
 */
export function InsightCover({
  label,
  labelHi,
  size = 'card',
  className,
}: {
  label?: string
  labelHi?: string
  size?: 'card' | 'hero'
  className?: string
}) {
  const hero = size === 'hero'
  return (
    <div
      aria-hidden
      className={cn(
        // text colour lives here: cn() would drop text-gold-300 next to text-body-lg
        'relative flex h-full w-full flex-col justify-end overflow-hidden bg-ink-900 text-gold-300',
        hero ? 'p-8 sm:p-12' : 'p-6',
        className
      )}
    >
      <Image
        src="/brand/prasanghi-mark.png"
        alt=""
        width={320}
        height={320}
        className={cn(
          'pointer-events-none absolute opacity-15',
          hero ? '-right-6 -top-6 h-72 w-auto' : '-right-4 -top-4 h-40 w-auto'
        )}
      />
      <span className={cn('block h-px bg-gold-500/70', hero ? 'mb-4 w-16' : 'mb-3 w-10')} />
      {label ? (
        <span
          className={cn(
            'relative max-w-[85%] font-heading leading-snug',
            hero ? 'text-heading-lg' : 'text-body-lg'
          )}
        >
          <Bi en={label} hi={labelHi ?? label} />
        </span>
      ) : null}
    </div>
  )
}

/** Placeholder for Social Initiatives until the society's own photos arrive. */
export function WelfareSocietyCover({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('flex h-full w-full items-center justify-center bg-gold-100/60', className)}
    >
      <Image
        src="/brand/prasanghi-welfare-society.png"
        alt=""
        width={125}
        height={130}
        className="h-24 w-auto rounded-full shadow-sm"
      />
    </div>
  )
}
