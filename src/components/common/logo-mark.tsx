import { cn } from '@/lib/utils'

export interface LogoMarkProps {
  className?: string
}

/**
 * The PraSanghi mark: ladder rails and rungs rising into a scale's beam with
 * two hanging pans — a direct, literal rendering of "The Legal Ladder"
 * concept selected from the founder's exploration deck (page 7), redrawn as
 * clean vector line-work. No topper ornament of any kind (the state-emblem
 * issue flagged on the source material cannot recur, since none was drawn).
 */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <line x1="38" y1="92" x2="38" y2="34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="62" y1="92" x2="62" y2="34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="30" y1="92" x2="70" y2="92" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="38" y1="78" x2="62" y2="78" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="38" y1="62" x2="62" y2="62" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="15" y1="34" x2="85" y2="34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="50" cy="30" r="4" fill="currentColor" />
      <line x1="15" y1="34" x2="15" y2="46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="85" y1="34" x2="85" y2="46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M 3 46 a 12 12 0 0 0 24 0 Z" fill="currentColor" />
      <path d="M 73 46 a 12 12 0 0 0 24 0 Z" fill="currentColor" />
    </svg>
  )
}
