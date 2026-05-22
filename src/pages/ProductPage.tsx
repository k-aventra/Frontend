import { Link } from 'react-router-dom'
import { Check, Shield, Layers, Zap, Sparkles, Brain } from 'lucide-react'
import { BRAND_EMAIL, BRAND_NAME } from '@/brand'
import { SiteLayout } from '@/components/SiteLayout'

const capabilityCards = [
  {
    icon: Layers,
    title: 'Unified data and semantics',
    desc: 'Ingests ERP, CRM, and telemetry into a governed semantic layer so every team uses the same trusted metrics and entities.',
  },
  {
    icon: Zap,
    title: 'Continuous KPI monitoring',
    desc: 'Real-time pipelines watch critical signals and surface anomalies the moment operational drift or compliance issues appear.',
  },
  {
    icon: Check,
    title: 'Explainable forecasts',
    desc: 'GPU-accelerated models generate forecasts and variance analyses with clear, auditable explanations for finance and strategy teams.',
  },
  {
    icon: Shield,
    title: 'Enterprise governance',
    desc: 'Role-based access, audit trails, and deployment patterns that meet enterprise compliance needs.',
  },
] as const

const benefitItems = [
  {
    icon: Brain,
    title: 'Finance & FP&A',
    desc: 'Faster closes, scenario testing, and variance storytelling that leaders can act on.',
  },
  {
    icon: Sparkles,
    title: 'Revenue & Growth',
    desc: 'Governed pipeline metrics and prescriptive actions to improve conversion and forecast accuracy.',
  },
  {
    icon: Zap,
    title: 'Operations',
    desc: 'Real-time KPI watches and anomaly alerts that reduce incident-to-resolution time.',
  },
  {
    icon: Shield,
    title: 'Executive Leadership',
    desc: 'Clear, prioritized recommendations and strategic briefs for timely decisions.',
  },
] as const

export function ProductPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="section-band tone-1 product-hero-band">
        <div className="wrap product-hero-inner">
          <p className="section-kicker">K-Aventra Series II</p>
          <h1 className="product-hero-title">Decision intelligence for enterprise scale</h1>
          <p className="product-hero-lead">
            A purpose-built platform that transforms fragmented enterprise data into
            real-time forecasting, anomaly detection, and executive-grade recommendations—all governed and production-ready.
          </p>
          <div className="product-hero-ctas">
            <a
              className="btn btn-primary btn-lg hero-cta"
              href="https://app.k-aventra.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View live product
            </a>
            <Link className="btn btn-ghost btn-lg hero-cta" to="/#contact">
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-band tone-2">
        <div className="section wrap">
          <header className="section-head section-head--center">
            <p className="section-kicker">What it delivers</p>
            <h2 className="section-title">Built for enterprise decision velocity</h2>
            <p className="section-desc">
              Series II combines high-throughput data processing, real-time monitoring, and strategic reasoning to deliver fast, governed decisions across finance, operations, and executive leadership.
            </p>
          </header>

          <div className="product-capabilities-grid">
            {capabilityCards.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="product-capability-card">
                <div className="product-card-icon">
                  <Icon strokeWidth={2.25} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Components Section */}
      <section className="section-band tone-3">
        <div className="section wrap">
          <header className="section-head section-head--center">
            <p className="section-kicker">Technical foundation</p>
            <h2 className="section-title">Powered by NVIDIA AI enterprise SDKs</h2>
            <p className="section-desc">
              Under the hood, Series II uses specialized engines selected for enterprise analytics, real-time intelligence, and natural language recommendations.
            </p>
          </header>

          <ul className="product-tech-list">
            <li>
              <strong>NVIDIA RAPIDS:</strong> GPU-accelerated data processing and ML model training for fast forecasting on structured enterprise datasets.
            </li>
            <li>
              <strong>NVIDIA Morpheus:</strong> Real-time inference pipelines that detect anomalies and operational drifts as they occur.
            </li>
            <li>
              <strong>NVIDIA NeMo:</strong> Language and reasoning layer that translates complex analytics into executive narratives.
            </li>
            <li>
              <strong>Triton + TensorRT:</strong> Unified deployment and optimization stack for low-latency, governed model serving.
            </li>
          </ul>

          <p className="product-tech-note">
            These choices enable fast, auditable forecasts and live KPI monitoring at enterprise scale—technical details mentioned for transparency.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-band tone-1">
        <div className="section wrap">
          <header className="section-head section-head--center">
            <p className="section-kicker">Team outcomes</p>
            <h2 className="section-title">What each team gains</h2>
          </header>

          <div className="product-benefits-grid">
            {benefitItems.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="product-benefit-card">
                <div className="benefit-card-icon">
                  <Icon strokeWidth={2.25} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-band tone-2">
        <div className="section wrap">
          <div className="product-final-cta">
            <h2>Ready to move faster?</h2>
            <p>Start exploring K-Aventra Series II today or schedule a walkthrough with our team.</p>
            <div className="product-cta-row">
              <a
                className="btn btn-primary btn-lg"
                href="https://app.k-aventra.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get started now
              </a>
              <Link className="btn btn-ghost btn-lg" to="/#contact">
                Schedule demo
              </Link>
            </div>
            <p className="product-support-note">
              Questions? <a href={`mailto:${BRAND_EMAIL}`}>Contact us</a> for deployment options and pilot programs.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
