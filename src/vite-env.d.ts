/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY?: string
  readonly VITE_TAWK_TO_PROPERTY_ID?: string
  readonly VITE_TAWK_TO_WIDGET_ID?: string
  readonly VITE_STRIPE_CHECKOUT_K_SIGNAL?: string
  readonly VITE_STRIPE_CHECKOUT_K_INSIGHT?: string
  readonly VITE_STRIPE_CHECKOUT_K_APEX?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}
