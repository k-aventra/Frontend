import { Link } from 'react-router-dom'
import { BarChart3, Brain, Check, Shield, Sparkles } from 'lucide-react'
import { BRAND_EMAIL, BRAND_NAME } from '@/brand'
import { SiteLayout } from '@/components/SiteLayout'

const trialFeatures = [
  {
    icon: BarChart3,
    title: 'Unified analytics workspace',
    desc: 'Connect metrics, models, and narratives in one governed semantic layer.',
  },
  {
    icon: Brain,
    title: 'AI decision intelligence',
    desc: 'Surface anomalies, forecasts, and recommended actions with explainability.',
  },
  {
    icon: Shield,
    title: 'Enterprise-ready controls',
    desc: 'SOC 2–aligned governance, role-based access, and audit trails from day one.',
  },
  {
    icon: Sparkles,
    title: 'Executive-ready narratives',
    desc: 'Auto-generated briefs and dashboards tailored for finance, revenue, and ops.',
  },
] as const

const trialSteps = [
  'Create your workspace and invite your team',
  'Connect data sources and map core entities',
  'Launch AI insights and decision workflows',
] as const

export function ProductPage() {
  return (
    <SiteLayout>
      <section className="product-hero section-band tone-1">
        <div className="wrap product-hero-inner">
          <p className="section-kicker">Product</p>
          <h1 className="product-hero-title">
            Start your {BRAND_NAME} trial
          </h1>
          <p className="product-hero-lede">
            Experience AI-powered business analytics and decision intelligence in
            a production-ready workspace—no credit card required for the first 14
            days.
          </p>
          <div className="product-hero-ctas">
            <Link className="btn btn-primary btn-lg" to="/#contact">
              Start free trial
            </Link>
            <Link className="btn btn-ghost btn-lg" to="/#pricing">
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      <section className="section-band tone-2 product-features-band">
        <div className="section wrap">
          <div className="section-head section-head--center">
            <p className="section-kicker">What you get</p>
            <h2 className="section-title">
              Everything you need to move from data to decisions
            </h2>
            <p className="section-desc">
              Your trial includes the full platform experience—semantic layer,
              AI insights, and executive narratives—so your team can evaluate
              real workflows, not a limited demo.
            </p>
          </div>

          <ul className="product-features-grid">
            {trialFeatures.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="product-feature-card">
                <span className="product-feature-icon" aria-hidden>
                  <Icon strokeWidth={2.25} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-band tone-3 product-steps-band">
        <div className="section wrap product-steps-wrap">
          <div className="product-steps-copy">
            <p className="section-kicker">Get started</p>
            <h2 className="section-title">Up and running in three steps</h2>
            <ol className="product-steps-list">
              {trialSteps.map((step, i) => (
                <li key={step}>
                  <span className="product-step-num">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <Link className="btn btn-primary" to="/#contact">
              Begin setup
            </Link>
          </div>

          <div className="product-trial-card">
            <h3>Professional trial</h3>
            <p className="product-trial-desc">
              Full access for up to 10 analysts, semantic layer, weekly AI
              executive brief, and email support.
            </p>
            <ul className="product-trial-includes">
              <li>
                <Check strokeWidth={2.5} aria-hidden />
                14-day free trial
              </li>
              <li>
                <Check strokeWidth={2.5} aria-hidden />
                No credit card required
              </li>
              <li>
                <Check strokeWidth={2.5} aria-hidden />
                Guided onboarding session
              </li>
            </ul>
            <Link className="btn btn-primary btn-lg product-trial-cta" to="/#contact">
              Start trial now
            </Link>
            <p className="product-trial-note">
              Questions?{' '}
              <a href={`mailto:${BRAND_EMAIL}`}>Talk to our team</a>
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
