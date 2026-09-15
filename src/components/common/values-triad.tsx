import type { LucideIcon } from 'lucide-react'

export interface ValuesTriadItem {
  icon: LucideIcon
  label: string
  body?: string
}

export interface ValuesTriadProps {
  items: ValuesTriadItem[]
}

export function ValuesTriad({ items }: ValuesTriadProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-start gap-3">
          <item.icon className="size-8 text-gold-600" aria-hidden="true" />
          <p className="font-serif text-heading-sm font-semibold text-navy-900">{item.label}</p>
          {item.body ? <p className="text-body-sm text-muted-foreground">{item.body}</p> : null}
        </div>
      ))}
    </div>
  )
}
