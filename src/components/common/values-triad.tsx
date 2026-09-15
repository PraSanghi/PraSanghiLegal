import type { Icon } from '@phosphor-icons/react'

export interface ValuesTriadItem {
  icon: Icon
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
          <item.icon weight="light" className="size-8 text-teal-600" aria-hidden="true" />
          <p className="text-heading-sm font-semibold text-blue-900">{item.label}</p>
          {item.body ? <p className="text-body-sm text-muted-foreground">{item.body}</p> : null}
        </div>
      ))}
    </div>
  )
}
