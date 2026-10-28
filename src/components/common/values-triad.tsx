import type { Icon } from '@phosphor-icons/react'
import { Bi } from '@/components/i18n/bi'

export interface ValuesTriadItem {
  icon: Icon
  label: string
  labelHi?: string
  body?: string
  bodyHi?: string
}

export interface ValuesTriadProps {
  items: ValuesTriadItem[]
}

export function ValuesTriad({ items }: ValuesTriadProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-start gap-3">
          <item.icon weight="light" className="size-8 text-gold-700" aria-hidden="true" />
          <p className="text-heading-sm font-semibold text-ink-900">
            <Bi en={item.label} hi={item.labelHi ?? item.label} />
          </p>
          {item.body ? (
            <p className="text-body-sm text-muted-foreground">
              <Bi en={item.body} hi={item.bodyHi ?? item.body} />
            </p>
          ) : null}
        </div>
      ))}
    </div>
  )
}
