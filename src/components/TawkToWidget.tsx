import { useEffect } from 'react'
import { TAWK_TO_PROPERTY_ID, TAWK_TO_WIDGET_ID } from '@/brand'

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>
    Tawk_LoadStart?: Date
  }
}

const TAWK_SCRIPT_ID = 'tawk-to-embed'

export function TawkToWidget() {
  useEffect(() => {
    if (document.getElementById(TAWK_SCRIPT_ID)) return

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    const script = document.createElement('script')
    script.id = TAWK_SCRIPT_ID
    script.async = true
    script.src = `https://embed.tawk.to/${TAWK_TO_PROPERTY_ID}/${TAWK_TO_WIDGET_ID}`
    script.charset = 'UTF-8'
    script.crossOrigin = 'anonymous'

    const firstScript = document.getElementsByTagName('script')[0]
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript)
    } else {
      document.body.appendChild(script)
    }
  }, [])

  return null
}
