/** Customer-facing product brand (matches domain and logo). */
export const BRAND_NAME = 'K-Aventra'
export const BRAND_DOMAIN = 'k-aventra.com'
export const BRAND_URL = 'https://k-aventra.com/'

export const COMPANY_NAME = 'KAventrra System'
export const COMPANY_LEGAL_NAME = 'KAventrra System Inc.'
export const FOUNDER_NAME = 'Yosef Tate'
export const FOUNDED_DATE = 'March 20, 2023'

export const BRAND_EMAIL = 'contact@k-aventra.com'

export const BRAND_PHONE = '+13527611872'
export const BRAND_PHONE_DISPLAY = '+1 (352) 761-1872'

export const COMPANY_ADDRESS_LINES = [
  'Los Angeles',
  '700 S Flower St, Suite 950',
  'Los Angeles, CA 90012',
  'USA',
] as const

export const navLinks = [
  { href: '/#hero', label: 'Home' },
  { href: '/#use-cases', label: 'Use cases' },
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#contact', label: 'Contact' },
] as const

export const PRODUCT_PATH = '/product'

/** Stripe Checkout links (test mode) — one per pricing tier, low → high. */
export const STRIPE_CHECKOUT = {
  kSignal:
    import.meta.env.VITE_STRIPE_CHECKOUT_K_SIGNAL ??
    'https://buy.stripe.com/test_6oU9AN3BDera7JzbyK4AU00',
  kInsight:
    import.meta.env.VITE_STRIPE_CHECKOUT_K_INSIGHT ??
    'https://buy.stripe.com/test_9B67sF7RTdn6aVLgT44AU01',
  kApex:
    import.meta.env.VITE_STRIPE_CHECKOUT_K_APEX ??
    'https://buy.stripe.com/test_3cIaERa01dn60h7cCO4AU02',
} as const

export const FORMSPREE_URL = 'https://formspree.io/f/xwvzldkl'

/** localStorage key when the user accepts the cookie notice */
export const COOKIE_CONSENT_STORAGE_KEY = 'k-aventra-cookie-consent'

/** Public reCAPTCHA site key (safe for the browser). */
export const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY ??
  '6Ld7-_QsAAAAAIQKqBH2k3jrrIrbqZgW7k5n72Xz'

/** Tawk.to live chat embed IDs */
export const TAWK_TO_PROPERTY_ID =
  import.meta.env.VITE_TAWK_TO_PROPERTY_ID ?? '6a0ff4ca493c7d1c355e7179'
export const TAWK_TO_WIDGET_ID =
  import.meta.env.VITE_TAWK_TO_WIDGET_ID ?? '1jp758dvu'
