import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getScrollRoot, scrollRootToSection } from '@/lib/scrollSections'

export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname !== '/') return

    const id = hash.replace('#', '')

    if (!id) {
      const root = getScrollRoot()
      if (root) {
        root.scrollTo({ top: 0, behavior: 'auto' })
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
      return
    }

    const el = document.getElementById(id)
    if (!el) return

    requestAnimationFrame(() => {
      scrollRootToSection(id, 'smooth')
    })
  }, [pathname, hash])

  return null
}
