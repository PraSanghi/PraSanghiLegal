import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
        'group inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 hover:text-gold-600',
        className
      )}
    >
      {children}
      <ArrowRight
        className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  )
}
