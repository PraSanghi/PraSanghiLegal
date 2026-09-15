'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, ChevronDown } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { practiceAreas, primaryNav } from '@/lib/navigation'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-xl font-medium text-navy-900">
          PraSanghi
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-gold-600"
              >
                Practice Areas
                <ChevronDown className="size-4" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-72">
              <DropdownMenuGroup>
                {practiceAreas.map((area) => (
                  <DropdownMenuItem key={area.href} asChild>
                    <Link href={area.href}>{area.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/practice-areas" className="font-semibold text-gold-600">
                  View All Practice Areas
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-navy-900 hover:text-gold-600"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="size-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="font-serif">PraSanghi</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              <p className="mt-2 text-label-eyebrow uppercase tracking-wide text-gold-600">
                Practice Areas
              </p>
              {practiceAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-sm px-2 py-2 text-sm font-medium text-navy-900 hover:bg-cream-100"
                >
                  {area.title}
                </Link>
              ))}
              <div className="my-3 h-px bg-border" />
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-sm px-2 py-2 text-sm font-medium text-navy-900 hover:bg-cream-100"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
