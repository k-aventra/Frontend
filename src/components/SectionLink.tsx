import { type MouseEvent, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollRootToSection } from '@/lib/scrollSections'

type SectionLinkProps = {
  href: string
  className?: string
  children: ReactNode
}

export function SectionLink({ href, className, children }: SectionLinkProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const id = href.includes('#') ? href.split('#')[1] : ''
    if (!id) return

    event.preventDefault()

    if (pathname !== '/') {
      navigate(href)
      return
    }

    scrollRootToSection(id, 'smooth')
    navigate(href, { replace: true })
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
