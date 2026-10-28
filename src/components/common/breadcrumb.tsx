import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import { Bi } from '@/components/i18n/bi'

export interface BreadcrumbSegment {
  label: string
  labelHi?: string
  href?: string
}

export interface BreadcrumbProps {
  segments: BreadcrumbSegment[]
}

export function Breadcrumb({ segments }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-8">
      <ol className="flex flex-wrap items-center gap-2 text-body-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-ink-700">
            <Bi en="Home" hi="होम" />
          </Link>
        </li>
        {segments.map((segment, i) => {
          const isLast = i === segments.length - 1
          const label = <Bi en={segment.label} hi={segment.labelHi ?? segment.label} />
          return (
            <li key={segment.label} className="flex items-center gap-2">
              <CaretRight weight="light" className="size-3.5" aria-hidden="true" />
              {isLast || !segment.href ? (
                <span aria-current={isLast ? 'page' : undefined} className="font-medium text-ink-900">
                  {label}
                </span>
              ) : (
                <Link href={segment.href} className="hover:text-ink-700">
                  {label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
