import { useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PRODUCT_PATH } from '@/brand'
import { hrefToSectionId, useActiveSection } from '@/hooks/useActiveSection'
import { scrollRootToSection } from '@/lib/scrollSections'
import {
  CreditCard,
  Home,
  Info,
  Layers,
  Mail,
  Menu,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export type NavLink = {
  href: string
  label: string
}

type SiteNavbarProps = {
  brandName: string
  links: readonly NavLink[]
}

const iconByHref: Record<string, LucideIcon> = {
  '/#hero': Home,
  '/#use-cases': Layers,
  '/#features': Sparkles,
  '/#pricing': CreditCard,
  '/#contact': Mail,
}

function SiteVerticalNav({
  links,
  activeSectionId,
  onNavigate,
  onSectionNav,
}: {
  links: readonly NavLink[]
  activeSectionId: string | null
  onNavigate?: () => void
  onSectionNav?: (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => void
}) {
  return (
    <ScrollArea className="h-full py-4">
      <div className="px-3 py-2">
        <div className="space-y-1">
          {links.map(({ href, label }) => {
            const Icon = iconByHref[href] ?? Info
            const sectionId = hrefToSectionId(href)
            const isActive =
              activeSectionId !== null &&
              sectionId !== null &&
              sectionId === activeSectionId
            return (
              <Button
                key={href}
                variant="ghost"
                className={cn(
                  'h-10 w-full justify-start rounded-lg px-3 font-medium',
                  isActive && 'site-nav-link--active',
                )}
                asChild
              >
                <a
                  href={href}
                  onClick={(event) => {
                    onSectionNav?.(event, href)
                    onNavigate?.()
                  }}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <Icon className="mr-2 h-4 w-4 shrink-0 opacity-70" />
                  {label}
                </a>
              </Button>
            )
          })}
        </div>
      </div>
    </ScrollArea>
  )
}

export function SiteNavbar({ brandName, links }: SiteNavbarProps) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const activeSectionId = useActiveSection()

  function handleSectionNav(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    const sectionId = hrefToSectionId(href)
    if (!sectionId) return

    event.preventDefault()

    if (pathname !== '/') {
      navigate(href)
      return
    }

    scrollRootToSection(sectionId, 'smooth')
    navigate(href, { replace: true })
  }

  return (
    <header
      data-site-navbar
      className="glass-view fixed inset-x-0 top-0 z-50 w-full pb-1 pt-3 [color-scheme:light]"
    >
      <div className="mx-auto flex h-[60px] w-full max-w-[1440px] items-center justify-between gap-3 overflow-visible bg-transparent px-8 sm:px-8 lg:px-16 xl:px-24">
        <Link
          to="/"
          className="site-brand-link flex min-w-0 shrink-0 items-center rounded-xl py-0 no-underline"
          aria-label={`${brandName} home`}
        >
          <img
            src="/k-aventra_logo.png"
            alt={brandName}
            className="site-logo site-logo--nav"
            width={380}
            height={84}
            decoding="async"
          />
        </Link>

        <nav
          className="hidden min-[900px]:flex min-w-0 flex-1 justify-center"
          aria-label="Primary"
        >
          <div className="flex max-w-full flex-wrap items-center justify-center gap-0.5 rounded-full p-1">
            {links.map(({ href, label }) => {
              const sectionId = hrefToSectionId(href)
              const isActive =
                activeSectionId !== null &&
                sectionId !== null &&
                sectionId === activeSectionId
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(event) => handleSectionNav(event, href)}
                  className={cn(
                    'site-nav-link rounded-full px-3 py-1.5 text-[13px] font-medium text-muted-foreground no-underline',
                    'transition-all hover:bg-background hover:text-foreground hover:shadow-sm',
                    isActive && 'site-nav-link--active',
                  )}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {label}
                </a>
              )
            })}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild className="hidden min-[900px]:inline-flex">
            <Link to={PRODUCT_PATH} className="no-underline">
              {brandName} Series II
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="min-[900px]:hidden h-10 w-10 shrink-0 rounded-xl border-border/80"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[260px] gap-0 p-0 sm:max-w-[260px]">
              <div className="border-b border-border px-6 py-5">
                <img
                  src="/k-aventra_logo.png"
                  alt={brandName}
                  className="site-logo site-logo--sheet"
                  width={140}
                  height={30}
                  decoding="async"
                />
                <p className="mt-2 text-sm text-muted-foreground">
                  Explore the platform
                </p>
              </div>
              <SiteVerticalNav
                links={links}
                activeSectionId={activeSectionId}
                onNavigate={() => setOpen(false)}
                onSectionNav={handleSectionNav}
              />
              <div className="border-t border-border p-4">
                <Button asChild className="w-full">
                  <Link to={PRODUCT_PATH} onClick={() => setOpen(false)}>
                    {brandName} Series II
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
