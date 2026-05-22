import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react'
import { RECAPTCHA_SITE_KEY } from '@/brand'

export type ContactRecaptchaHandle = {
  getToken: () => string | null
  reset: () => void
}

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: { sitekey: string; theme?: 'light' | 'dark' },
      ) => number
      getResponse: (widgetId?: number) => string
      reset: (widgetId?: number) => void
      ready: (callback: () => void) => void
    }
  }
}

let recaptchaScriptPromise: Promise<void> | null = null

function loadRecaptchaScript(): Promise<void> {
  if (window.grecaptcha) {
    return Promise.resolve()
  }

  if (!recaptchaScriptPromise) {
    recaptchaScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
      script.async = true
      script.defer = true
      script.onload = () => {
        window.grecaptcha?.ready(() => resolve())
      }
      script.onerror = () => reject(new Error('Failed to load reCAPTCHA'))
      document.head.appendChild(script)
    })
  }

  return recaptchaScriptPromise
}

export const ContactRecaptcha = forwardRef<ContactRecaptchaHandle>(
  function ContactRecaptcha(_props, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetIdRef = useRef<number | null>(null)

    useImperativeHandle(ref, () => ({
      getToken: () => {
        if (widgetIdRef.current == null || !window.grecaptcha) return null
        const token = window.grecaptcha.getResponse(widgetIdRef.current)
        return token || null
      },
      reset: () => {
        if (widgetIdRef.current != null && window.grecaptcha) {
          window.grecaptcha.reset(widgetIdRef.current)
        }
      },
    }))

    useEffect(() => {
      if (!RECAPTCHA_SITE_KEY || !containerRef.current) return

      let cancelled = false

      loadRecaptchaScript()
        .then(() => {
          if (
            cancelled ||
            !containerRef.current ||
            !window.grecaptcha ||
            widgetIdRef.current != null
          ) {
            return
          }

          widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
            sitekey: RECAPTCHA_SITE_KEY,
            theme: 'light',
          })
        })
        .catch(() => {
          /* Widget stays empty; form submit will prompt user */
        })

      return () => {
        cancelled = true
      }
    }, [])

    return (
      <div
        className="contact-recaptcha"
        ref={containerRef}
        aria-label="reCAPTCHA verification"
      />
    )
  },
)
