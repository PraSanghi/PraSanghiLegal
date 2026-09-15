'use client'

import Link from 'next/link'
import { useState } from 'react'
import { List, CaretDown } from '@phosphor-icons/react/dist/ssr'
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
import { LogoMark } from '@/components/common/logo-mark'
import { practiceAreas, primaryNav } from '@/lib/navigation'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold text-blue-900">
          <LogoMark className="size-8" />
          PraSanghi
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-blue-900 hover:text-teal-600"
              >
                Practice Areas
                <CaretDown weight="light" className="size-4" aria-hidden="true" />
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
                <Link href="/practice-areas" className="font-semibold text-teal-600">
                  View All Practice Areas
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-blue-900 hover:text-teal-600"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <List weight="light" className="size-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>PraSanghi</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              <p className="mt-2 text-label-eyebrow uppercase tracking-wide text-teal-600">
                Practice Areas
              </p>
              {practiceAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-sm px-2 py-2 text-sm font-medium text-blue-900 hover:bg-off-white"
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
                  className="rounded-sm px-2 py-2 text-sm font-medium text-blue-900 hover:bg-off-white"
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
