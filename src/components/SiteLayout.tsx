import type { ReactNode } from 'react'
import { BRAND_NAME, navLinks } from '@/brand'
import { TawkToWidget } from '@/components/TawkToWidget'
import { CookieNotice } from '@/components/CookieNotice'
import { FooterSection } from '@/components/FooterSection'
import { SiteNavbar } from '@/components/SiteNavbar'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site">
      <SiteNavbar brandName={BRAND_NAME} links={navLinks} />
      <main>{children}</main>
      <FooterSection />
      <TawkToWidget />
      <CookieNotice />
    </div>
  )
}
