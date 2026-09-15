import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'

interface TextLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 hover:text-teal-600',
        className
      )}
    >
      {children}
      <ArrowRight
        weight="light"
        className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  )
}
