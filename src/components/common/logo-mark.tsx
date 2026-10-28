import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface LogoMarkProps {
  className?: string
}

/**
 * The final PraSanghi monogram (Firm Profile, Oct 2026): a gold "PS" whose
 * stem is the ladder, flanked by the scales of justice. Raster source —
 * extracted from the founder-approved lockup in public/brand/.
 */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <Image
      src="/brand/prasanghi-mark.png"
      alt=""
      width={337}
      height={293}
      className={cn('h-auto shrink-0', className)}
      aria-hidden="true"
    />
  )
}

export interface BrandLogoProps {
  /** `dark` = for light backgrounds (charcoal wordmark); `light` = ivory wordmark for dark grounds. */
  tone?: 'dark' | 'light'
  className?: string
  priority?: boolean
}

/**
 * Horizontal lockup: monogram beside the "PraSanghi · THE LEGAL LADDER"
 * wordmark, with the orange dot on the "i" the founder marked as final.
 */
export function BrandLogo({ tone = 'dark', className, priority }: BrandLogoProps) {
  return (
    <span className={cn('flex shrink-0 items-center gap-2.5', className)}>
      <Image
        src="/brand/prasanghi-mark.png"
        alt=""
        width={337}
        height={293}
        priority={priority}
        className="h-full w-auto"
        aria-hidden="true"
      />
      <Image
        src={tone === 'light' ? '/brand/prasanghi-wordmark-light.png' : '/brand/prasanghi-wordmark.png'}
        alt="PraSanghi — The Legal Ladder"
        width={492}
        height={164}
        priority={priority}
        className="h-[78%] w-auto"
      />
    </span>
  )
}
