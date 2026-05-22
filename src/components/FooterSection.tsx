import { Link } from 'react-router-dom'
import {
  BRAND_EMAIL,
  BRAND_NAME,
  BRAND_PHONE,
  BRAND_PHONE_DISPLAY,
  COMPANY_LEGAL_NAME,
} from '@/brand'

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  )
}

function IconPinterest() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.77 1.518 1.688 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.771-2.249 3.771-5.495 0-2.875-2.064-4.886-5.015-4.886-3.412 0-5.404 2.562-5.404 5.207 0 1.031.397 2.138.893 2.738.097.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"
      />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      />
    </svg>
  )
}

function IconTwitter() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  )
}

function IconYouTube() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  )
}

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', Icon: IconLinkedIn },
  { label: 'Pinterest', href: 'https://www.pinterest.com', Icon: IconPinterest },
  { label: 'Facebook', href: 'https://www.facebook.com', Icon: IconFacebook },
  { label: 'Twitter', href: 'https://twitter.com', Icon: IconTwitter },
  { label: 'YouTube', href: 'https://www.youtube.com', Icon: IconYouTube },
] as const

export function FooterSection() {
  return (
    <footer className="footer-site">
      <div className="wrap footer-site-wrap">
        <div className="footer-site-top">
          <Link to="/" className="footer-brand">
            <img
              src="/k-aventra_logo.png"
              alt={BRAND_NAME}
              className="site-logo site-logo--footer"
              width={380}
              height={84}
              decoding="async"
            />
          </Link>

          <nav className="footer-site-nav" aria-label="Footer">
            <a href="/#features">Features</a>
            <a href="/#use-cases">Use cases</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#contact">Contacts</a>
          </nav>

          <div className="footer-site-end">
            <div className="footer-site-contact">
              <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>
              <a href={`tel:${BRAND_PHONE}`}>{BRAND_PHONE_DISPLAY}</a>
            </div>
            <a href="/#contact" className="footer-site-cta">
              Contact us
            </a>
          </div>
        </div>

        <div className="footer-site-bottom">
          <div className="footer-site-legal">
            <span>© {new Date().getFullYear()} {COMPANY_LEGAL_NAME}</span>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
          <div className="footer-site-social">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
