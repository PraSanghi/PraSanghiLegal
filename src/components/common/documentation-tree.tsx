import { Scales } from '@phosphor-icons/react/dist/ssr'
import { RevealOnScroll } from '@/components/common/reveal-on-scroll'
import { documentationTree } from '@/lib/documentation-tree-data'

// Org-chart-style tree: a root node branches down into category nodes,
// each of which branches further into its individual services — visual
// hierarchy instead of a flat grid. Connector lines are plain CSS
// (borders + absolutely positioned hairlines), no SVG/JS measurement.
// Every category/leaf card is a fixed height with clamped text so cards
// stay uniform regardless of how long a given title is.
export function DocumentationTree() {
  return (
    <div className="flex flex-col items-center">
      <RevealOnScroll className="group flex items-center gap-4 border-2 border-blue-900 bg-blue-900 px-10 py-5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
          <Scales weight="light" className="size-6" aria-hidden="true" />
        </span>
        <p className="text-heading-sm font-bold text-white">Legal Drafting &amp; Documentation</p>
      </RevealOnScroll>

      <div className="h-10 w-px bg-border" aria-hidden="true" />

      <div className="relative hidden w-full lg:block">
        <div className="absolute inset-x-[12.5%] top-0 h-px bg-border" aria-hidden="true" />
      </div>

      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-4">
        {documentationTree.map((category, ci) => (
          <div key={category.label} className="flex flex-col items-center">
            <div className="hidden h-10 w-px bg-border lg:block" aria-hidden="true" />

            <RevealOnScroll
              delayMs={ci * 75}
              className="group flex h-16 w-full items-center justify-center gap-3 border border-border bg-card px-5 outline outline-2 outline-offset-2 outline-transparent transition-colors duration-150 ease-out hover:outline-teal-500"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-colors duration-150 ease-out group-hover:bg-teal-600 group-hover:text-white">
                <category.icon weight="light" className="size-5" aria-hidden="true" />
              </span>
              <p className="text-body-md font-bold text-blue-900">{category.label}</p>
            </RevealOnScroll>

            <div className="h-6 w-px bg-border" aria-hidden="true" />

            <div className="flex w-full flex-col gap-3">
              {category.items.map((item, i) => (
                <RevealOnScroll key={item.title} delayMs={ci * 75 + i * 30}>
                  <div className="group flex h-20 items-center gap-3 border border-border bg-card px-4 outline outline-2 outline-offset-2 outline-transparent transition-colors duration-150 ease-out hover:outline-teal-500">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-colors duration-150 ease-out group-hover:bg-teal-600 group-hover:text-white">
                      <item.icon weight="light" className="size-5" aria-hidden="true" />
                    </span>
                    <p className="line-clamp-2 text-body-md font-medium text-blue-900">
                      {item.title}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
