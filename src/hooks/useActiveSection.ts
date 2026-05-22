import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  type ScrollSectionId,
  getScrollRoot,
  resolveActiveSection,
} from '@/lib/scrollSections'

export {
  SCROLL_SECTION_IDS,
  type ScrollSectionId,
  hrefToSectionId,
} from '@/lib/scrollSections'

export function useActiveSection(): ScrollSectionId | null {
  const { pathname } = useLocation()
  const [activeId, setActiveId] = useState<ScrollSectionId | null>(
    pathname === '/' ? 'hero' : null,
  )

  useEffect(() => {
    if (pathname !== '/') {
      setActiveId(null)
      return
    }

    let frame = 0
    let root: HTMLElement | null = null

    const update = () => {
      setActiveId(resolveActiveSection())
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    const attach = () => {
      root = getScrollRoot()
      update()

      window.addEventListener('scroll', onScroll, { passive: true })
      root?.addEventListener('scroll', onScroll, { passive: true })

      return true
    }

    attach()
    const raf = requestAnimationFrame(() => requestAnimationFrame(update))

    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      root?.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return activeId
}
