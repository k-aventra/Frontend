import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { BRAND_NAME, COOKIE_CONSENT_STORAGE_KEY } from '@/brand'

function hasCookieNoticeAnswer(): boolean {
  try {
    const value = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    return value === 'accepted' || value === 'dismissed'
  } catch {
    return false
  }
}

export function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!hasCookieNoticeAnswer())
  }, [])

  function accept() {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, 'accepted')
    } catch {
      /* storage unavailable */
    }
    setVisible(false)
  }

  function close() {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, 'dismissed')
    } catch {
      /* storage unavailable */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="cookie-notice"
      role="dialog"
      aria-labelledby="cookie-notice-title"
      aria-describedby="cookie-notice-desc"
    >
      <div className="cookie-notice-inner">
        <button
          type="button"
          className="cookie-notice-close"
          onClick={close}
          aria-label="Close cookie notice"
        >
          <X strokeWidth={2.25} aria-hidden />
        </button>
        <div className="cookie-notice-copy">
          <p id="cookie-notice-title" className="cookie-notice-title">
            Cookies on {BRAND_NAME}
          </p>
          <p id="cookie-notice-desc" className="cookie-notice-desc">
            We use cookies and similar technologies for essential site features,
            analytics, and to improve your experience. By clicking Accept, you agree
            to our use of cookies as described in our{' '}
            <Link to="/privacy">Privacy Policy</Link>.
          </p>
        </div>
        <button type="button" className="btn btn-primary cookie-notice-accept" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  )
}
