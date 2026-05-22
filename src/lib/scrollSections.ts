export const SCROLL_SECTION_IDS = [
  'hero',
  'use-cases',
  'features',
  'pricing',
  'contact',
] as const

export type ScrollSectionId = (typeof SCROLL_SECTION_IDS)[number]

/** Fixed navbar + main offset */
export const SCROLL_OFFSET = 88

export function getScrollRoot(): HTMLElement | null {
  return document.querySelector('.site')
}

function rootIsScrollContainer(root: HTMLElement): boolean {
  return root.scrollHeight > root.clientHeight + 2
}

function getScrollY(): number {
  const root = getScrollRoot()
  if (root && rootIsScrollContainer(root)) {
    return root.scrollTop
  }
  return window.scrollY
}

function isNearPageBottom(): boolean {
  const root = getScrollRoot()
  if (root && rootIsScrollContainer(root)) {
    return root.scrollTop + root.clientHeight >= root.scrollHeight - 48
  }
  return (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 48
  )
}

function scrollToY(top: number, behavior: ScrollBehavior = 'smooth') {
  const root = getScrollRoot()
  if (root && rootIsScrollContainer(root)) {
    root.scrollTo({ top, behavior })
    return
  }
  window.scrollTo({ top, behavior })
}

export function scrollRootToSection(
  id: string,
  behavior: ScrollBehavior = 'smooth',
): void {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + getScrollY() - SCROLL_OFFSET
  scrollToY(Math.max(0, top), behavior)
}

/**
 * Highlights the section that contains the line just below the navbar,
 * or the last section scrolled past.
 */
export function resolveActiveSection(): ScrollSectionId {
  const line = SCROLL_OFFSET
  let active: ScrollSectionId = SCROLL_SECTION_IDS[0]

  for (const id of SCROLL_SECTION_IDS) {
    const el = document.getElementById(id)
    if (!el) continue

    const { top, bottom } = el.getBoundingClientRect()

    if (top <= line && bottom > line) {
      return id
    }

    if (top <= line) {
      active = id
    }
  }

  if (isNearPageBottom()) {
    return SCROLL_SECTION_IDS[SCROLL_SECTION_IDS.length - 1]
  }

  return active
}

export function hrefToSectionId(href: string): ScrollSectionId | null {
  const hash = href.includes('#') ? href.split('#')[1] : ''
  if (!hash) return null
  return SCROLL_SECTION_IDS.includes(hash as ScrollSectionId)
    ? (hash as ScrollSectionId)
    : null
}
