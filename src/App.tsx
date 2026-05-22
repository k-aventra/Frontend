import { type FormEvent, type ReactNode, useRef, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Calendar, Check, Play, Shield, Star, TrendingDown } from 'lucide-react'
import {
  BRAND_EMAIL,
  BRAND_NAME,
  BRAND_PHONE,
  BRAND_PHONE_DISPLAY,
  FOUNDED_DATE,
  FORMSPREE_URL,
  PRODUCT_PATH,
  STRIPE_CHECKOUT,
} from '@/brand'
import {
  ContactRecaptcha,
  type ContactRecaptchaHandle,
} from '@/components/ContactRecaptcha'
import { HeroSideImage } from '@/components/HeroSideImage'
import { ScrollToHash } from '@/components/ScrollToHash'
import { SectionLink } from '@/components/SectionLink'
import { SiteLayout } from '@/components/SiteLayout'
import { PlatformSection } from '@/components/PlatformSection'
import { ProductPage } from '@/pages/ProductPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { TermsPage } from '@/pages/TermsPage'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  IllContentScheduling,
  IllCustomizableDashboards,
  IllRealtimeAnalytics,
  IllStreamlineCommunication,
  IllTeamCollaboration,
} from './CoreFeaturesArt'
import { IllustrationFeatured } from './UseCaseIllustrations'
import { coreFeatureIcons } from '@/lib/coreFeatureIcons'
import { testimonialAvatars } from '@/lib/testimonialAvatars'

const faqItems = [
  {
    q: "What's the difference between the Standard and Collector's editions?",
    a: "The Standard edition includes the full hardcover book. The Collector's edition adds a slipcase, premium paper stock, and a numbered certificate of authenticity.",
  },
  {
    q: 'How long does shipping take?',
    a: 'Domestic orders typically arrive within 5–8 business days after fulfillment. International delivery varies by region and is shown at checkout.',
  },
  {
    q: 'Can I return or exchange my book?',
    a: 'Unopened books in original condition may be returned within 30 days of delivery. Collector\'s editions are final sale once the seal is broken.',
  },
  {
    q: "Is the author's signature authentic on Collector's editions?",
    a: 'Yes. Each signed Collector\'s copy includes a certificate of authenticity with a unique verification code you can validate on our site.',
  },
  {
    q: 'Are digital formats available?',
    a: 'eBook and audiobook formats are included with every physical purchase. Links are sent to your email once your order ships.',
  },
  {
    q: 'Can I purchase the book as a gift?',
    a: 'Absolutely. Add a gift message at checkout and we can ship directly to the recipient without including pricing on the packing slip.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'We ship to most countries worldwide. Duties and taxes may apply depending on your location and are the responsibility of the recipient.',
  },
]

function SectionHead({
  kicker,
  title,
  description,
  align = 'center',
  className = '',
  titleClassName = '',
}: {
  kicker: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
  className?: string
  titleClassName?: string
}) {
  return (
    <header
      className={[
        'section-head',
        align === 'center' ? 'section-head--center' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="section-kicker">{kicker}</p>
      <h2 className={['section-title', titleClassName].filter(Boolean).join(' ')}>
        {title}
      </h2>
      {description ? <p className="section-desc">{description}</p> : null}
    </header>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="section-band tone-1">
      <div className="hero">
        <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden />
            Decision intelligence, production-ready
          </div>
          <h1 className="hero-title">
            AI analytics that turns signals into{' '}
            <span>confident decisions</span>
          </h1>
          <p className="hero-lead">
            One intelligence layer for finance, revenue, and ops, from raw data to
            confident action.
          </p>
          <div className="hero-ctas">
            <SectionLink
              href="/#contact"
              className="btn btn-primary btn-lg hero-cta hero-cta--primary"
            >
              <span className="hero-cta-icon" aria-hidden>
                <Calendar strokeWidth={2.25} />
              </span>
              Book a demo
            </SectionLink>
            <SectionLink
              href="/#how-it-works"
              className="btn btn-ghost btn-lg hero-cta hero-cta--secondary"
            >
              <span className="hero-cta-icon hero-cta-icon--play" aria-hidden>
                <Play strokeWidth={2.25} fill="currentColor" />
              </span>
              See how it works
            </SectionLink>
          </div>
          <div className="hero-metrics" role="list">
            <article className="hero-metric-card" role="listitem">
              <span className="hero-metric-icon" aria-hidden>
                <TrendingDown strokeWidth={2.25} />
              </span>
              <div className="hero-metric-copy">
                <p className="hero-metric-val">38%</p>
                <p className="hero-metric-label">Time-to-insight (avg)</p>
              </div>
            </article>
            <article className="hero-metric-card" role="listitem">
              <span className="hero-metric-icon" aria-hidden>
                <Check strokeWidth={2.5} />
              </span>
              <div className="hero-metric-copy">
                <p className="hero-metric-val">99.95%</p>
                <p className="hero-metric-label">Semantic layer uptime</p>
              </div>
            </article>
            <article className="hero-metric-card" role="listitem">
              <span className="hero-metric-icon" aria-hidden>
                <Shield strokeWidth={2.25} />
              </span>
              <div className="hero-metric-copy">
                <p className="hero-metric-val">SOC 2</p>
                <p className="hero-metric-label">Enterprise-ready controls</p>
              </div>
            </article>
          </div>
        </div>
        <div className="hero-visual">
          <HeroSideImage />
        </div>
        </div>
      </div>
    </section>
  )
}

function UseCaseThumbIcon({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="usecases-thumb-icon"
      width={92}
      height={68}
      decoding="async"
      aria-hidden
    />
  )
}

const useCaseStories = [
  {
    id: 'finance-fpa',
    icon: '/use-case-finance-teams.png',
    title: 'Finance & FP&A: Real-Time Forecasting and Variance Intelligence',
    date: 'Finance teams',
    description:
      'Replace delayed static reports with live analytics and AI-assisted variance storytelling. Finance leaders shorten close cycles, improve forecast accuracy, and act on recommended adjustments before results drift.',
  },
  {
    id: 'revenue-growth',
    icon: '/use-case-revenue-growth.png',
    title: 'Revenue Operations: Pipeline Governance and Growth Decisions',
    date: 'Revenue & growth',
    description:
      'Unify pipeline, forecast, and market signals in one decision layer. Revenue and strategy teams stress-test scenarios, align on trusted metrics, and move from hindsight to prescriptive growth actions.',
  },
  {
    id: 'operations-kpi',
    icon: '/use-case-operations.png',
    title: 'Operations: Enterprise KPI Monitoring and Risk Detection',
    date: 'Operations',
    description:
      'Track performance metrics in real time across fragmented systems. Operations leaders visualize enterprise health, spot anomalies early, and coordinate responses with governed KPIs every function trusts.',
  },
  {
    id: 'executive-leadership',
    icon: '/use-case-executive-leadership.png',
    title: 'Executive Leadership: Strategic Dashboards and Decision Support',
    date: 'Executive leadership',
    description:
      'Give leadership a single view of what matters most—summarized intelligence, recommended priorities, and predictive outlooks—so executives decide faster with confidence.',
  },
] as const

function UseCasesSection() {
  return (
    <section id="use-cases" className="section-band tone-1 usecases-viewport usecases-band">
      <SectionHead
        className="usecases-section-head wrap"
        kicker="Use cases"
        title={`Where ${BRAND_NAME} delivers decision intelligence`}
        description="From finance and revenue to operations and the C-suite, see how enterprises turn fragmented data into real-time insights and AI-recommended actions."
      />
      <div className="usecases-viewport-inner">
        <div className="usecases-panel">
          <div className="usecases-split">
            <article className="usecases-featured-card">
              <div className="usecases-featured-art">
                <IllustrationFeatured />
              </div>
              <div className="usecases-featured-body">
                <span className="usecases-featured-badge">Featured</span>
                <h3 className="usecases-featured-headline">
                  Enterprise Decision Intelligence: Unify Data, Insights, and
                  Recommended Actions
                </h3>
                <p className="usecases-featured-desc">
                  {BRAND_NAME} is an AI Business Analytics &amp; Decision Intelligence
                  Platform that aggregates enterprise data, generates real-time
                  insights, and recommends optimal business actions—improving
                  forecasting, operations, and strategic performance.
                </p>
                <p className="usecases-featured-meta">
                  <span>Enterprise analytics</span>
                  <span className="usecases-featured-meta-sep" aria-hidden>
                    |
                  </span>
                  <span>AI decision intelligence</span>
                  <span className="usecases-featured-meta-sep" aria-hidden>
                    |
                  </span>
                  <span>Predictive &amp; prescriptive AI</span>
                </p>
              </div>
            </article>

            <aside className="usecases-rail" aria-label="Related use cases">
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="usecases-rail-cta">
                    View all use cases
        </button>
                </DialogTrigger>
                <DialogContent className="use-cases-dialog">
                  <DialogHeader className="use-cases-dialog-header">
                    <DialogTitle className="use-cases-dialog-title">
                      Use cases
                    </DialogTitle>
                    <DialogDescription className="use-cases-dialog-lede">
                      How finance, revenue, operations, and leadership teams use{' '}
                      {BRAND_NAME} to solve delayed reporting, fragmented data, and
                      poor forecasting with AI-driven decision intelligence.
                    </DialogDescription>
                  </DialogHeader>
                  <ul className="use-cases-dialog-list">
                    {useCaseStories.map(
                      ({ id, icon, title, date, description }) => (
                        <li key={id} className="use-cases-dialog-item">
                          <div className="usecases-thumb-wrap use-cases-dialog-thumb">
                            <UseCaseThumbIcon src={icon} />
                          </div>
                          <div className="use-cases-dialog-copy">
                            <h3 className="use-cases-dialog-item-title">
                              {title}
                            </h3>
                            <span className="usecases-panel-date">{date}</span>
                            <p className="use-cases-dialog-item-desc">
                              {description}
                            </p>
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </DialogContent>
              </Dialog>
              <ul className="usecases-rail-list">
                {useCaseStories.map(({ id, icon, title, date }) => (
                  <li key={id} className="usecases-rail-item">
                    <div className="usecases-thumb-wrap">
                      <UseCaseThumbIcon src={icon} />
                    </div>
                    <div className="usecases-rail-copy">
                      <h3 className="usecases-rail-title">{title}</h3>
                      <span className="usecases-panel-date">{date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
      </section>
  )
}

function CoreFeatureIcon({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      className="core-feature-icon-img"
      width={32}
      height={32}
      decoding="async"
      aria-hidden
    />
  )
}

function FeaturesSection() {
  const cards = [
    {
      id: 'analytics',
      layout: 'narrow' as const,
      icon: coreFeatureIcons.analytics,
      title: 'Enterprise Data Analytics',
      desc: 'Unify data across systems with a scalable analytics engine built for enterprise scale.',
      Illustration: IllRealtimeAnalytics,
    },
    {
      id: 'decision-ai',
      layout: 'narrow' as const,
      icon: coreFeatureIcons['decision-ai'],
      title: 'AI Decision Recommendations',
      desc: 'Move beyond static BI with AI that analyzes patterns and recommends optimal next actions.',
      Illustration: IllContentScheduling,
    },
    {
      id: 'predictive',
      layout: 'narrow' as const,
      icon: coreFeatureIcons.predictive,
      title: 'Predictive Intelligence',
      desc: 'Forecast outcomes, detect anomalies, and stress-test scenarios before you commit.',
      Illustration: IllTeamCollaboration,
    },
    {
      id: 'kpi',
      layout: 'wide' as const,
      icon: coreFeatureIcons.kpi,
      title: 'KPI & Performance Monitoring',
      desc: 'Track enterprise KPIs in real time with governed metrics every team can trust.',
      Illustration: IllStreamlineCommunication,
    },
    {
      id: 'dashboards',
      layout: 'wide' as const,
      icon: coreFeatureIcons.dashboards,
      title: 'Executive Decision Dashboard',
      desc: 'Give leadership a single view of performance, risks, and recommended priorities.',
      Illustration: IllCustomizableDashboards,
    },
  ]

  return (
    <section id="features" className="section-band tone-2 core-features-band">
      <div className="core-features-inner wrap">
        <SectionHead
          className="core-features-head"
          titleClassName="core-features-title"
          kicker="Core capabilities"
          title="The Complete Decision Intelligence Stack"
          description="Every tool your teams need, from data ingestion to AI-powered recommendations — in one governed platform."
        />

        <div className="core-features-grid">
          {cards.map(
            ({ id, layout, icon, title, desc, Illustration }) => (
              <article
                key={id}
                className={`core-feature-card core-feature-card--${layout}`}
              >
                <div className="core-feature-card__top">
                  <div className="core-feature-card__copy">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                  <div className="core-feature-icon-badge">
                    <CoreFeatureIcon src={icon} />
                  </div>
                </div>
                <div className="core-feature-card__mock" aria-hidden>
                  <Illustration />
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

const pricingPlans = [
  {
    id: 'k-signal',
    name: 'K-Signal',
    price: '79',
    desc: 'For lean teams centralizing metrics with AI-assisted explanations.',
    features: [
      'Up to 10 analysts',
      'Semantic layer (core entities)',
      'Weekly AI executive brief',
      'Email support',
    ],
    checkoutUrl: STRIPE_CHECKOUT.kSignal,
    featured: false,
    ctaClass: 'btn btn-ghost',
  },
  {
    id: 'k-insight',
    name: 'K-Insight',
    price: '119',
    desc: 'Cross-functional decision hubs with sandbox scenarios & SSO.',
    features: [
      'Unlimited viewers',
      'Scenario labs & approvals',
      'Near-realtime anomaly watches',
      'Priority success engineer',
    ],
    checkoutUrl: STRIPE_CHECKOUT.kInsight,
    featured: true,
    ctaClass: 'btn btn-primary',
  },
  {
    id: 'k-apex',
    name: 'K-Apex',
    price: '149',
    desc: 'Global rollouts with residency options, VPC, and bespoke governance.',
    features: [
      'Dedicated solutions pod',
      'Advanced RBAC & audit exports',
      'Bring-your-model hooks',
      '24/7 operational coverage',
    ],
    checkoutUrl: STRIPE_CHECKOUT.kApex,
    featured: false,
    ctaClass: 'btn btn-ghost',
  },
] as const

function PricingSection() {
  return (
    <section id="pricing" className="section-band tone-1 pricing-band">
      <div className="section wrap">
      <SectionHead
        kicker="Pricing"
        title="Plans that scale with decision velocity"
        description="Subscription SaaS with tiered decision intelligence plans, enterprise licensing, and API integration options."
      />
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article
            key={plan.id}
            className={`price-card glass-panel${plan.featured ? ' featured' : ''}`}
          >
            {plan.featured ? <span className="price-badge">Most popular</span> : null}
            <h3>{plan.name}</h3>
            <p className="desc">{plan.desc}</p>
            <div className="price-row">
              <span className="currency">$</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/mo</span>
            </div>
            <ul className="price-features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a
              className={`${plan.ctaClass} no-underline`}
              href={plan.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe
            </a>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}

function TestimonialStars() {
  return (
    <div className="tm-card-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="tm-card-star" fill="currentColor" strokeWidth={0} aria-hidden />
      ))}
    </div>
  )
}

function TestimonialsSection() {
  const items = [
    {
      id: 'sofia',
      name: 'Sofia Mercer',
      role: 'VP Finance',
      quote:
        "We went from stale reports to same-morning intelligence. K-Aventra didn't just change our dashboards; it changed how we decide.",
      avatar: testimonialAvatars.sarah,
    },
    {
      id: 'layla',
      name: 'Layla Hendricks',
      role: 'Director, RevOps',
      quote:
        'Amazing service and support. Our FP&A and RevOps teams finally work from the same definitions.',
      avatar: testimonialAvatars.john,
    },
    {
      id: 'mark',
      name: 'Mark Calloway',
      role: 'CFO',
      quote:
        'The best analytics experience we have had: fast, governed, and easy for executives to consume.',
      avatar: testimonialAvatars.emma,
    },
    {
      id: 'jaden',
      name: 'Jaden Voss',
      role: 'Head of Analytics',
      quote: 'Our team ships decisions faster with clear, trusted analytics.',
      avatar: testimonialAvatars.michael,
    },
  ] as const

  return (
    <section id="testimonials" className="section-band tone-2 testimonials-band">
      <div className="testimonials-inner wrap">
        <SectionHead
          className="testimonials-section-head"
          titleClassName="testimonials-section-title"
          align="center"
          kicker="Testimonials"
          title={`Hear from the teams already deciding smarter with ${BRAND_NAME}.`}
          description="Trusted by teams who move on data, not gut feel."
        />
        <p className="testimonials-scroll-note">Swipe to see more</p>
        <div className="testimonials-track" role="list">
          {items.map((item) => (
            <article key={item.id} className="tm-card" role="listitem">
              <TestimonialStars />
              <blockquote className="tm-card-quote">
                <p>{item.quote}</p>
              </blockquote>
              <footer className="tm-card-author">
                <img
                  className="tm-card-avatar"
                  src={item.avatar}
                  alt=""
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                />
                <div className="tm-card-author-copy">
                  <cite className="tm-card-name">{item.name}</cite>
                  <p className="tm-card-role">{item.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection({
  openIndex,
  onToggle,
}: {
  openIndex: number | null
  onToggle: (index: number) => void
}) {
  return (
    <section id="faq" className="section-band faq-band">
      <div className="faq-inner wrap">
        <div className="faq-panel">
          <div className="faq-split">
            <header className="faq-intro">
              <p className="section-kicker faq-section-kicker">FAQ</p>
              <p className="faq-eyebrow">
                <span className="faq-eyebrow-line" aria-hidden />
                Need help?
              </p>
              <h2 className="faq-title section-title">
                Questions About {BRAND_NAME}
              </h2>
              <p className="faq-lede">
                Everything you need to know about ordering, shipping, and our
                editions.
              </p>
              <a href="#contact" className="btn btn-primary faq-contact-cta">
                Contact us
              </a>
            </header>

            <div className="faq-list">
              {faqItems.map((item, index) => {
                const open = openIndex === index
                return (
                  <div key={item.q} className={`faq-item ${open ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-q"
                      aria-expanded={open}
                      onClick={() => onToggle(index)}
                    >
                      <span className="faq-q-text">{item.q}</span>
                      <span className="faq-toggle" aria-hidden>
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    {open ? (
                      <div className="faq-a-wrap">
                        <p className="faq-a">{item.a}</p>
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const recaptchaRef = useRef<ContactRecaptchaHandle>(null)
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const recaptchaToken = recaptchaRef.current?.getToken()
    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA verification.')
      return
    }

    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)
    data.set('g-recaptcha-response', recaptchaToken)

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string
        } | null
        throw new Error(payload?.error ?? 'Unable to send your message. Please try again.')
      }

      setSent(true)
      form.reset()
      recaptchaRef.current?.reset()
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Unable to send your message. Please try again.',
      )
      recaptchaRef.current?.reset()
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-band tone-2 contact-band">
      <div className="contact-bg-decor" aria-hidden />
      <div className="wrap contact-inner">
        <div className="contact-split">
          <div className="contact-aside">
            <SectionHead
              className="contact-section-head"
              align="left"
              kicker="Contact"
              title="Let's start the conversation"
              description="Tell us about your stack, team size, and goals. We'll follow up with a tailored walkthrough."
            />
            <p className="contact-tagline">
              <span className="contact-tagline-line contact-tagline-line--dark">
                No pressure.
              </span>
              <span className="contact-tagline-line contact-tagline-line--accent">
                Just ideas.
              </span>
            </p>
            <ul className="contact-highlights">
              <li>
                <span className="contact-highlight-icon" aria-hidden>
                  ✉
                </span>
                <span>
                  <span className="contact-highlight-label">Email</span>
                  <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>
                </span>
              </li>
              <li>
                <span className="contact-highlight-icon" aria-hidden>
                  ☎
                </span>
                <span>
                  <span className="contact-highlight-label">Phone</span>
                  <a href={`tel:${BRAND_PHONE}`}>{BRAND_PHONE_DISPLAY}</a>
                </span>
              </li>
              <li>
                <span className="contact-highlight-icon" aria-hidden>
                  ◆
                </span>
                <span>
                  <span className="contact-highlight-label">Founded</span>
                  {FOUNDED_DATE}
                </span>
              </li>
              <li>
                <span className="contact-highlight-icon" aria-hidden>
                  ◷
                </span>
                <span>
                  <span className="contact-highlight-label">Response time</span>
                  Within one business day
                </span>
              </li>
              <li>
                <span className="contact-highlight-icon" aria-hidden>
                  ✓
                </span>
                <span>
                  <span className="contact-highlight-label">What you get</span>
                  A tailored platform walkthrough
                </span>
              </li>
            </ul>
          </div>

          <div className="contact-stage">
            <div className="contact-floats" aria-hidden>
              <span className="contact-float contact-float--1">⭐</span>
              <span className="contact-float contact-float--2">❤️</span>
              <span className="contact-float contact-float--3">👍</span>
              <span className="contact-float contact-float--4">▶️</span>
              <span className="contact-float contact-float--5">✉️</span>
              <span className="contact-float contact-float--6">
                <span className="contact-float-at" aria-hidden>
                  @
                </span>
              </span>
            </div>

            <div className="contact-card glass-panel">
              <div className="contact-card-accent" aria-hidden />
              <p className="contact-card-eyebrow">Get in touch</p>
              <h3 className="contact-card-title">
                Let&apos;s talk about your analytics pipeline.
              </h3>
              <form
                className="contact-card-form"
                action={FORMSPREE_URL}
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Your name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Alex Morgan"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-company">Company</label>
                    <input
                      id="contact-company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Work email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-requirements">
                    Tell us about your requirements
                  </label>
                  <textarea
                    id="contact-requirements"
                    name="requirements"
                    placeholder="Data sources, team size, goals…"
                    rows={4}
                  />
                </div>
                <ContactRecaptcha ref={recaptchaRef} />
                {error ? (
                  <p className="contact-form-error" role="alert">
                    {error}
                  </p>
                ) : null}
                <p className="contact-disclaimer">
                  By clicking this button you agree to share your data with {BRAND_NAME}.
                  Information will be used for communication purposes only.
                </p>
                <button
                  type="submit"
                  className="contact-submit"
                  disabled={submitting || sent}
                >
                  {sent
                    ? 'Thanks! We will be in touch'
                    : submitting
                      ? 'Sending…'
                      : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="section-band cta-band" aria-labelledby="cta-heading">
      <div className="wrap cta-inner">
        <div className="cta-panel">
          <p className="section-kicker cta-kicker">Get started</p>
          <h2 id="cta-heading" className="cta-title">
            Ready to turn signals into confident decisions?
          </h2>
          <p className="cta-desc">
            Start your trial or book a walkthrough. We&apos;ll help you connect
            metrics, models, and narratives in one governed workspace.
          </p>
          <div className="cta-actions">
            <Link to={PRODUCT_PATH} className="btn btn-primary btn-lg no-underline">
              Start free trial
            </Link>
            <SectionLink href="/#contact" className="btn btn-ghost btn-lg">
              Book a demo
            </SectionLink>
          </div>
        </div>
        </div>
      </section>
  )
}

function HomePage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  function toggleFaq(index: number) {
    setFaqOpen((current) => (current === index ? null : index))
  }

  return (
    <SiteLayout>
      <HeroSection />
      <PlatformSection />
      <UseCasesSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection openIndex={faqOpen} onToggle={toggleFaq} />
      <ContactSection />
      <CtaSection />
    </SiteLayout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
