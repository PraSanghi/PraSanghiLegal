import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

export interface BreadcrumbSegment {
  label: string
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
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>
        </li>
        {segments.map((segment, i) => {
          const isLast = i === segments.length - 1
          return (
            <li key={segment.label} className="flex items-center gap-2">
              <CaretRight weight="light" className="size-3.5" aria-hidden="true" />
              {isLast || !segment.href ? (
                <span aria-current={isLast ? 'page' : undefined} className="font-medium text-blue-900">
                  {segment.label}
                </span>
              ) : (
                <Link href={segment.href} className="hover:text-blue-700">
                  {segment.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
