import {
  ArrowRight,
  Brain,
  Building2,
  Cog,
  Database,
  DollarSign,
  Layers,
  LayoutGrid,
  MoreHorizontal,
  Sparkles,
  Target,
  TrendingUp,
  UserCircle,
  Users,
  type LucideIcon,
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { BRAND_NAME } from '@/brand'

const platformItems = [
  {
    id: 'analytics-engine',
    step: '01',
    title: 'Business Analytics Engine',
    desc: 'Aggregates enterprise data from multiple sources and generates real-time business insights.',
    detail:
      'Connect ERP, CRM, finance, and operations data into one analytics engine with governed metrics your teams can trust.',
    highlights: [
      'Unified semantic layer across fragmented enterprise systems',
      'Real-time dashboards and self-serve exploration for analysts',
      'Metric definitions and lineage that stay consistent org-wide',
    ],
    Icon: Database,
  },
  {
    id: 'decision-ai',
    step: '02',
    title: 'AI Decision Intelligence',
    desc: 'Recommends optimal business actions and supports strategic planning with AI.',
    detail:
      'Move beyond static reporting with AI that interprets patterns, explains drivers, and recommends what to do next.',
    highlights: [
      'Prescriptive recommendations tied to business context',
      'Scenario comparison for strategic and operational choices',
      'Explainable outputs leaders can review before acting',
    ],
    Icon: Brain,
  },
  {
    id: 'predictive',
    step: '03',
    title: 'Predictive Analytics',
    desc: 'Forecasts business trends and outcomes while surfacing risks and opportunities early.',
    detail:
      'Anticipate revenue, demand, and cost trajectories with models that flag anomalies before they impact results.',
    highlights: [
      'Forecasting for revenue, demand, and operational capacity',
      'Automated anomaly detection across key business signals',
      'Early warnings on risks and upside opportunities',
    ],
    Icon: TrendingUp,
  },
  {
    id: 'kpi',
    step: '04',
    title: 'KPI Monitoring',
    desc: 'Tracks performance metrics in real time and visualizes enterprise health at a glance.',
    detail:
      'Give every function a live view of the KPIs that matter—with alerts when performance drifts off plan.',
    highlights: [
      'Real-time KPI scorecards with role-based views',
      'Threshold alerts and trend notifications',
      'Aligned metrics across finance, revenue, and operations',
    ],
    Icon: Target,
  },
  {
    id: 'executive',
    step: '05',
    title: 'Executive Dashboard',
    desc: 'Delivers high-level decision views that summarize actionable intelligence for leadership.',
    detail:
      'Equip the C-suite with a concise command center for performance, risks, and recommended priorities.',
    highlights: [
      'Executive summaries of revenue, margin, and pipeline health',
      'Curated insights and decision recommendations in one view',
      'Drill-down paths when leaders need supporting detail',
    ],
    Icon: LayoutGrid,
  },
  {
    id: 'layer',
    step: '06',
    title: 'Decision Intelligence Layer',
    desc: 'Unifies fragmented systems into one governed layer that enhances strategy, operations, and forecasting.',
    detail:
      'A single intelligence layer that connects data, models, and narratives so the whole enterprise decides from one truth.',
    highlights: [
      'Governed data and AI models shared across the organization',
      'Bridges strategy, operations, and forecasting workflows',
      'API-ready foundation for embedding insights in your stack',
    ],
    Icon: Layers,
  },
] as const

const dataSources: { label: string; Icon: LucideIcon }[] = [
  { label: 'ERP', Icon: Building2 },
  { label: 'CRM', Icon: Users },
  { label: 'Finance', Icon: DollarSign },
  { label: 'Operations', Icon: Cog },
  { label: 'HR', Icon: UserCircle },
  { label: 'More', Icon: MoreHorizontal },
]

function PlatformConnectors() {
  return (
    <svg
      className="platform-connectors"
      viewBox="0 0 1200 420"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M 200 210 C 280 210, 300 120, 380 120"
        stroke="var(--brand-red)"
        strokeWidth="1.5"
        strokeDasharray="6 8"
        strokeOpacity="0.45"
      />
    </svg>
  )
}

export function PlatformSection() {
  return (
    <section
      id="how-it-works"
      className="section-band platform-band"
      aria-labelledby="platform-heading"
    >
      <div className="platform-bg-decor" aria-hidden>
        <span className="platform-orb platform-orb--1" />
        <span className="platform-orb platform-orb--2" />
        <span className="platform-orb platform-orb--3" />
        <span className="platform-ring" />
        <Sparkles className="platform-spark platform-spark--1" strokeWidth={1.5} />
        <Sparkles className="platform-spark platform-spark--2" strokeWidth={1.5} />
      </div>

      <div className="platform-inner wrap">
        <header className="platform-head">
          <p className="platform-kicker">Platform</p>
          <h2 id="platform-heading" className="platform-title">
            Signal to Decision{' '}
            <span className="platform-title-accent">in Seconds</span>
          </h2>
          <p className="platform-lede">
            {BRAND_NAME} connects your data, finds the signal, and tells you exactly
            what to do next.
          </p>
        </header>

        <div className="platform-stage">
          <PlatformConnectors />

          <aside className="platform-side platform-side--sources">
            <h3 className="platform-side-title">Data sources</h3>
            <ul className="platform-source-list">
              {dataSources.map(({ label, Icon }) => (
                <li key={label}>
                  <span className="platform-source-icon" aria-hidden>
                    <Icon strokeWidth={2} />
                  </span>
                  <span className="platform-source-label">{label}</span>
                  <span className="platform-source-dot" aria-hidden />
                </li>
              ))}
            </ul>
          </aside>

          <div className="platform-main">
            <div className="platform-grid">
              {platformItems.map(
                ({ id, step, title, desc, detail, highlights, Icon }) => (
                  <article key={id} className="platform-card">
                    <span className="platform-card__icon" aria-hidden>
                      <Icon strokeWidth={2} />
                    </span>
                    <div className="platform-card__body">
                      <h3 className="platform-card__title">
                        <span className="platform-card__step">{step}</span>
                        {title}
                      </h3>
                      <p className="platform-card__desc">{desc}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="platform-card__cta"
                          aria-label={`Learn more about ${title}`}
                        >
                          <ArrowRight strokeWidth={2.5} />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="platform-detail-dialog">
                        <DialogHeader className="platform-detail-dialog__header">
                          <p className="platform-detail-dialog__step">{step}</p>
                          <DialogTitle className="platform-detail-dialog__title">
                            {title}
                          </DialogTitle>
                          <DialogDescription className="platform-detail-dialog__lede">
                            {detail}
                          </DialogDescription>
                        </DialogHeader>
                        <ul className="platform-detail-dialog__list">
                          {highlights.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </DialogContent>
                    </Dialog>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>

      </div>

      <svg
        className="platform-wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,64 C240,120 480,0 720,48 C960,96 1200,24 1440,72 L1440,120 L0,120 Z" />
      </svg>
    </section>
  )
}
