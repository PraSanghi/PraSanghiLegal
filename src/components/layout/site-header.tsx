'use client'

import Link from 'next/link'
import { useState } from 'react'
import { List, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { LogoMark } from '@/components/common/logo-mark'
import { primaryNav } from '@/lib/navigation'
import { practiceAreaDetails, practiceAreaSlugs } from '@/lib/practice-areas-data'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold text-blue-900">
          <LogoMark className="size-8" />
          PraSanghi
        </Link>

        <NavigationMenu className="hidden max-w-none flex-1 justify-center lg:flex" viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-sm font-semibold text-blue-900">
                Practice Areas
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[560px] grid-cols-2 gap-1 p-2">
                  {practiceAreaSlugs.map((slug) => {
                    const area = practiceAreaDetails[slug]
                    return (
                      <li key={slug}>
                        <NavigationMenuLink asChild>
                          <Link href={`/practice-areas/${slug}`} className="flex-col items-start gap-1">
                            <span className="font-semibold text-blue-900">{area.title}</span>
                            <span className="line-clamp-2 text-body-sm text-muted-foreground">
                              {area.summary}
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    )
                  })}
                  <li className="col-span-2 mt-1 border-t border-border pt-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/practice-areas"
                        className="flex items-center justify-between font-semibold text-teal-600"
                      >
                        View All Practice Areas
                        <ArrowRight weight="light" className="size-4" />
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {primaryNav
              .filter((item) => item.href !== '/contact')
              .map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={item.href} className="text-sm font-semibold text-blue-900">
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>

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
              {practiceAreaSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/practice-areas/${slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-sm px-2 py-2 text-sm font-medium text-blue-900 hover:bg-off-white"
                >
                  {practiceAreaDetails[slug].title}
                </Link>
              ))}
              <div className="my-3 h-px bg-border" />
              {primaryNav
                .filter((item) => item.href !== '/contact')
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-sm px-2 py-2 text-sm font-medium text-blue-900 hover:bg-off-white"
                  >
                    {item.title}
                  </Link>
                ))}
              <Button asChild className="mt-4" onClick={() => setMobileOpen(false)}>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
