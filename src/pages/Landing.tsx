import { motion } from 'motion/react'
import { useState, type FormEvent } from 'react'
import {
  Shield,
  AlertTriangle,
  Search,
  FileText,
  Wrench,
  Check,
  X,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Scale,
  TrendingUp,
  ShoppingCart,
} from 'lucide-react'
import { FadeUp, ease } from '../components/FadeUp'
import { SEOHead } from '../components/SEOHead'

// ─── Hero ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-14">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-danger/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-danger/[0.02] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-danger-dim/60 rounded-full text-danger text-xs font-mono tracking-wider uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse" />
            4,187 lawsuits filed in 2024 — D2C is target #1
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="text-balance text-4xl md:text-[3.5rem] md:leading-[1.08] font-bold tracking-[-0.03em] text-text-primary mb-6"
          >
            Your online store has
            <br />
            <span className="text-danger">
              accessibility violations.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
            className="text-pretty text-lg md:text-xl text-text-secondary max-w-[540px] mb-4"
          >
            Plaintiff firms are scanning D2C websites right now using automated
            tools. If they find WCAG violations — and{' '}
            <span className="text-text-primary font-medium">94.8% of sites have them</span>{' '}
            — you get a demand letter.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.45 }}
            className="text-pretty text-lg text-text-primary font-medium mb-8"
          >
            We find them first. Then we fix them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-danger hover:bg-red-700 text-white font-semibold text-sm rounded-lg transition-colors"
            >
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-surface-border hover:border-text-muted/40 text-text-secondary hover:text-text-primary text-sm rounded-lg transition-colors"
            >
              See How It Works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex items-center gap-6 text-xs text-text-muted"
          >
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-green" /> Free 24hr audit
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-green" /> No sales call
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-green" /> Cancel anytime
            </span>
          </motion.div>
        </div>

        {/* Right: Live scan preview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="hidden md:block"
        >
          <div className="border border-surface-border rounded-xl bg-surface-raised overflow-hidden shadow-2xl shadow-danger/5">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border bg-surface/60">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-danger/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-600/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-text-muted/40" />
              </div>
              <span className="ml-2 text-xs font-mono text-text-muted">
                altorlab scan --url example-brand.com
              </span>
            </div>

            {/* Scan output */}
            <div className="p-4 space-y-2 font-mono text-xs">
              <div className="text-text-muted">
                <span className="text-text-secondary">[scanning]</span>{' '}
                Crawling 47 pages...
              </div>
              <div className="text-text-muted">
                <span className="text-text-secondary">[wcag-2.1-aa]</span>{' '}
                Running 85 accessibility checks...
              </div>
              <div className="h-px bg-surface-border my-3" />

              {[
                { sev: 'CRITICAL', msg: '23 images missing alt text', color: 'text-danger bg-danger/15' },
                { sev: 'CRITICAL', msg: '12 form inputs without labels', color: 'text-danger bg-danger/15' },
                { sev: 'CRITICAL', msg: '8 color contrast failures (< 4.5:1)', color: 'text-danger bg-danger/15' },
                { sev: 'HIGH', msg: '15 empty links / buttons', color: 'text-orange-400 bg-orange-400/10' },
                { sev: 'HIGH', msg: '6 keyboard navigation traps', color: 'text-orange-400 bg-orange-400/10' },
                { sev: 'MEDIUM', msg: '11 missing ARIA landmarks', color: 'text-yellow-500 bg-yellow-500/10' },
                { sev: 'MEDIUM', msg: '4 missing skip-nav links', color: 'text-yellow-500 bg-yellow-500/10' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.12, duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className={`shrink-0 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider ${item.color}`}
                  >
                    {item.sev}
                  </span>
                  <span className="text-text-secondary">{item.msg}</span>
                </motion.div>
              ))}

              <div className="h-px bg-surface-border my-3" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.4 }}
                className="flex items-center justify-between"
              >
                <span>
                  <span className="text-danger font-semibold">79 violations</span>{' '}
                  <span className="text-text-muted">across 47 pages</span>
                </span>
                <span className="text-danger font-semibold">HIGH RISK</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Lawsuit Ticker ──────────────────────────────────────────────────
const lawsuitHeadlines = [
  'Blue Apron sued for website accessibility violations',
  'D2C skincare brand settles ADA lawsuit for $85,000',
  'Ecommerce merchant receives demand letter for missing alt text',
  'Fashion retailer named in drive-by ADA complaint — IL court',
  'Supplement brand pays $52K settlement over WCAG failures',
  'Pet food D2C site sued — keyboard navigation issues cited',
  'Home goods brand faces class action over form accessibility',
  'Sweetgreen sued again after prior settlement for repeat violations',
]

function LawsuitTicker() {
  return (
    <div className="border-y border-surface-border bg-surface-raised/80 overflow-hidden">
      <div className="flex items-center">
        <div className="shrink-0 px-4 py-3 bg-danger/10 border-r border-surface-border">
          <span className="text-xs font-mono font-semibold text-danger uppercase tracking-wider flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5" /> Recent Lawsuits
          </span>
        </div>
        <div className="overflow-hidden no-scrollbar flex-1">
          <div className="ticker-track animate-ticker">
            {[...lawsuitHeadlines, ...lawsuitHeadlines].map((h, i) => (
              <span
                key={i}
                className="shrink-0 px-6 py-3 text-xs text-text-secondary font-mono whitespace-nowrap"
              >
                {h}
                <span className="text-text-muted mx-4">&bull;</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Fear Stats ──────────────────────────────────────────────────────
const stats = [
  { value: '4,187', label: 'ADA lawsuits filed in 2024', sub: 'Retail & ecommerce is #1 target' },
  { value: '$25K–$150K', label: 'Average cost per lawsuit', sub: 'Legal fees + settlement + remediation' },
  { value: '94.8%', label: 'Of websites fail WCAG', sub: 'WebAIM Million 2025 Report' },
  { value: '29%', label: 'Get sued again', sub: 'Repeat litigation is common' },
]

function FearStats() {
  return (
    <section className="border-b border-surface-border bg-surface-raised/30">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-surface-border">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <div className="text-center md:px-6">
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-danger mb-1">{stat.value}</div>
                <div className="text-sm text-text-primary font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-text-muted">{stat.sub}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── D2C Specific Pain Points ────────────────────────────────────────
function WhyD2C() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <FadeUp>
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-danger tracking-wider uppercase mb-4">
            Why D2C brands are vulnerable
          </h2>
          <p className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-text-primary max-w-2xl mx-auto text-balance">
            Serial plaintiffs target ecommerce stores because they're easy wins
          </p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <ShoppingCart className="w-5 h-5" />,
            title: 'Your store theme isn\'t compliant',
            desc: 'Most ecommerce themes — Shopify, WooCommerce, BigCommerce — fail WCAG out of the box. Third-party apps (reviews, popups, chat widgets) add more violations. Every product page is a liability.',
          },
          {
            icon: <Scale className="w-5 h-5" />,
            title: 'Plaintiff firms use automated tools',
            desc: 'They crawl thousands of sites daily looking for missing alt text, broken forms, and contrast failures. If you sell online, you\'re already in their pipeline.',
          },
          {
            icon: <TrendingUp className="w-5 h-5" />,
            title: '$5K–$25K demand letters add up',
            desc: 'Small enough to settle, big enough to hurt. And 29% of defendants get sued again within 12 months. One-time fixes don\'t work — you need monitoring.',
          },
        ].map((item, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div className="p-6 md:p-8 border border-surface-border rounded-xl bg-surface-raised/50 hover:border-danger-dim/40 transition-colors h-full">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-danger/10 text-danger mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-primary tracking-[-0.01em] mb-3">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

// ─── How It Works ────────────────────────────────────────────────────
const steps = [
  {
    icon: <Search className="w-5 h-5" />,
    num: '01',
    title: 'We deep-scan your entire site',
    desc: 'Every product page, collection, checkout flow, and blog post. Automated WCAG 2.1 AA checks plus manual expert review of the issues bots miss.',
    detail: '85+ automated checks across all pages',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    num: '02',
    title: 'You get a prioritized risk report',
    desc: 'See exactly what plaintiff firms would find. Each violation ranked by lawsuit risk — what gets you sued first is what we flag first.',
    detail: 'Ranked by legal exposure, not just severity',
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    num: '03',
    title: 'We fix everything',
    desc: 'Our team remediates all critical and high-severity violations. Code-level fixes, not overlay band-aids. Most sites done in 1–2 weeks.',
    detail: 'Real code changes, not JavaScript overlays',
  },
]

function HowItWorks() {
  return (
    <section id="how" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <FadeUp>
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-text-muted tracking-wider uppercase mb-4">How it works</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-text-primary max-w-2xl mx-auto text-balance">
            From vulnerable to protected in 3 steps
          </p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div className="group relative p-6 md:p-8 border border-surface-border rounded-xl bg-surface-raised/50 hover:border-danger-dim/40 transition-colors h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-danger/10 text-danger">
                  {step.icon}
                </div>
                <span className="text-xs font-mono text-danger/70">STEP {step.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary tracking-[-0.01em] mb-3">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed text-pretty mb-4">{step.desc}</p>
              <div className="text-xs font-mono text-text-muted border-t border-surface-border pt-4">{step.detail}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

// ─── Not An Overlay ──────────────────────────────────────────────────
function NotAnOverlay() {
  return (
    <section className="border-y border-surface-border bg-surface-raised/30">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-danger tracking-wider uppercase mb-4">We're not an overlay</h2>
            <p className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-text-primary max-w-3xl mx-auto text-balance">
              Overlays don't protect you. 137 companies using accessibility widgets were sued in January 2026 alone.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeUp delay={0.05}>
            <div className="p-6 md:p-8 border border-surface-border rounded-xl bg-surface/50">
              <div className="flex items-center gap-2 mb-6">
                <X className="w-5 h-5 text-danger" />
                <h3 className="text-lg font-semibold text-text-primary">Overlay widgets</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'JavaScript band-aid on top of broken code',
                  'Can\'t fix structural HTML issues',
                  'Documented to increase violations',
                  'Courts require removal + real fixes',
                  'Blocks screen readers from critical functions',
                  'No protection from lawsuits',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <X className="w-4 h-4 text-danger shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="p-6 md:p-8 border border-danger-dim/40 rounded-xl bg-danger/[0.03]">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-green" />
                <h3 className="text-lg font-semibold text-text-primary">AltorLab</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Real code-level fixes in your theme & templates',
                  'Fixes structural HTML, ARIA, and semantics',
                  'Tested with actual screen readers',
                  'Ongoing monitoring catches new violations',
                  'Meets WCAG 2.1 AA — the legal standard',
                  'Documented proof of compliance for legal defense',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ─── Case Studies ───────────────────────────────────────────────────
const caseStudies = [
  {
    industry: "Men's Grooming",
    platform: 'Shopify',
    pages: 214,
    desc: 'Premium men\'s grooming brand with 200+ product pages, Judge.me reviews widget, GoKwik checkout, and multiple third-party popups.',
    violations: [
      { sev: 'CRITICAL', msg: '87 product images missing alt text' },
      { sev: 'CRITICAL', msg: 'Review widget injects unlabeled form controls' },
      { sev: 'HIGH', msg: 'GoKwik checkout modal lacks keyboard focus trap' },
      { sev: 'HIGH', msg: '34 empty links in product grid navigation' },
      { sev: 'MEDIUM', msg: 'Gift card popup missing ARIA role="dialog"' },
    ],
    totalViolations: 142,
    result: { fixed: 142, days: 9, status: 'Compliant — WCAG 2.1 AA' },
  },
  {
    industry: 'Ayurvedic Wellness',
    platform: 'Shopify',
    pages: 168,
    desc: 'Ayurvedic body care brand selling oils and wellness products. Stamped reviews, Klaviyo popups, infinite scroll catalog, and quick-shop modals.',
    violations: [
      { sev: 'CRITICAL', msg: '53 product images missing alt text' },
      { sev: 'CRITICAL', msg: 'Quick-shop modal not announced to screen readers' },
      { sev: 'CRITICAL', msg: 'Infinite scroll breaks keyboard navigation' },
      { sev: 'HIGH', msg: 'Stamped review stars use icon font with no fallback text' },
      { sev: 'MEDIUM', msg: 'Klaviyo popup missing focus management' },
    ],
    totalViolations: 97,
    result: { fixed: 97, days: 7, status: 'Compliant — WCAG 2.1 AA' },
  },
  {
    industry: 'Health Supplements',
    platform: 'Shopify',
    pages: 183,
    desc: 'Nutrition and supplement brand with benefit-based navigation, Limechat widget, Judge.me reviews, and MoEngage marketing popups.',
    violations: [
      { sev: 'CRITICAL', msg: '61 banner and product images missing alt text' },
      { sev: 'CRITICAL', msg: 'Limechat widget creates keyboard trap' },
      { sev: 'HIGH', msg: 'Benefit-category dropdowns inaccessible via keyboard' },
      { sev: 'HIGH', msg: 'MoEngage popup overlays page with no escape route' },
      { sev: 'MEDIUM', msg: 'Judge.me star ratings missing text alternatives' },
    ],
    totalViolations: 118,
    result: { fixed: 118, days: 11, status: 'Compliant — WCAG 2.1 AA' },
  },
  {
    industry: 'Flower Delivery',
    platform: 'Shopify',
    pages: 96,
    desc: 'Fresh flower delivery brand with hero carousel, occasion-based navigation, Stamped reviews, Loyalty Lion program, and video gift message integration.',
    violations: [
      { sev: 'CRITICAL', msg: 'Hero carousel auto-rotates with no pause control' },
      { sev: 'CRITICAL', msg: '28 product images missing alt text' },
      { sev: 'HIGH', msg: 'Occasion-based nav dropdowns trap keyboard focus' },
      { sev: 'HIGH', msg: 'Video gift modal inaccessible to screen readers' },
      { sev: 'MEDIUM', msg: 'Loyalty Lion widget missing ARIA labels' },
    ],
    totalViolations: 73,
    result: { fixed: 73, days: 6, status: 'Compliant — WCAG 2.1 AA' },
  },
]

function CaseStudies() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="case-studies" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <FadeUp>
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-danger tracking-wider uppercase mb-4">Recent scan logs</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-text-primary max-w-3xl mx-auto text-balance">
            Real scans. Real violations. Real fixes.
          </p>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Every D2C brand we scan has violations — most don&rsquo;t know until we show them.
            Here&rsquo;s what our scanner finds in the wild.
          </p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((cs, i) => (
          <FadeUp key={i} delay={i * 0.06}>
            <div className="border border-surface-border rounded-xl bg-surface-raised/50 overflow-hidden h-full flex flex-col">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border bg-surface/60">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-danger/60" />
                  <span className="w-2 h-2 rounded-full bg-yellow-600/60" />
                  <span className="w-2 h-2 rounded-full bg-text-muted/40" />
                </div>
                <span className="ml-2 text-xs font-mono text-text-muted truncate">
                  altorlab scan --pages {cs.pages} --standard WCAG21AA
                </span>
              </div>

              <div className="px-5 pt-4 pb-3 flex items-center gap-3 flex-wrap">
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider uppercase rounded bg-danger/10 text-danger">
                  {cs.industry}
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider uppercase rounded bg-surface-border/60 text-text-muted">
                  {cs.platform}
                </span>
                <span className="text-[10px] font-mono text-text-muted">{cs.pages} pages scanned</span>
              </div>

              <p className="px-5 pb-4 text-xs text-text-secondary leading-relaxed">{cs.desc}</p>

              <div className="border-t border-surface-border/60">
                <div className="px-5 py-2 text-[10px] font-mono text-text-muted bg-surface/30">
                  showing top {cs.violations.length} of {cs.totalViolations} violations
                </div>
                <div className="divide-y divide-surface-border/40 flex-1">
                  {(expanded === i ? cs.violations : cs.violations.slice(0, 3)).map((v, j) => (
                    <div key={j} className="flex items-start gap-3 px-5 py-2.5 font-mono text-[11px]">
                      <span
                        className={`shrink-0 mt-0.5 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider ${
                          v.sev === 'CRITICAL'
                            ? 'bg-danger/15 text-danger'
                            : v.sev === 'HIGH'
                              ? 'bg-orange-400/10 text-orange-400'
                              : 'bg-yellow-500/10 text-yellow-500'
                        }`}
                      >
                        {v.sev}
                      </span>
                      <span className="text-text-secondary">{v.msg}</span>
                    </div>
                  ))}
                  {cs.violations.length > 3 && expanded !== i && (
                    <button
                      onClick={() => setExpanded(i)}
                      aria-expanded={false}
                      className="w-full px-5 py-2 text-[11px] font-mono text-danger hover:text-red-400 transition-colors text-left"
                    >
                      + {cs.violations.length - 3} more...
                    </button>
                  )}
                </div>
              </div>

              <div className="px-5 py-4 border-t border-surface-border bg-green/[0.03]">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-3.5 h-3.5 text-green" />
                  <span className="text-xs font-mono text-green font-semibold">{cs.result.status}</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] font-mono text-text-muted">
                  <span><span className="text-text-secondary">{cs.result.fixed}</span> violations fixed</span>
                  <span><span className="text-text-secondary">{cs.result.days}</span> days to remediate</span>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.3}>
        <div className="text-center mt-14">
          <p className="text-text-secondary mb-5 text-sm">
            Want to see what our scanner finds on <span className="text-text-primary font-medium">your</span> site?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-danger hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get Your Free Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </FadeUp>
    </section>
  )
}

// ─── Cost Comparison ─────────────────────────────────────────────────
function CostComparison() {
  return (
    <section className="border-y border-surface-border bg-surface-raised/30">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-text-muted tracking-wider uppercase mb-4">The math is simple</h2>
            <p className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-text-primary max-w-2xl mx-auto text-balance">
              Pay a little now, or pay a lot later
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeUp delay={0.05}>
            <div className="p-8 border border-danger/30 rounded-xl bg-danger/[0.03]">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-5 h-5 text-danger" />
                <h3 className="font-semibold text-text-primary">Cost of a lawsuit</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Demand letter settlement', cost: '$5,000 – $25,000' },
                  { label: 'Legal defense fees', cost: '$10,000 – $75,000' },
                  { label: 'Court-ordered remediation', cost: '$25,000 – $100,000' },
                  { label: 'Brand damage / lost customers', cost: 'Priceless' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">{item.label}</span>
                    <span className="font-mono text-danger font-semibold">{item.cost}</span>
                  </div>
                ))}
                <div className="border-t border-danger/20 pt-4 flex items-center justify-between">
                  <span className="text-text-primary font-semibold">Total exposure</span>
                  <span className="font-mono text-danger text-xl font-bold">$40K – $200K+</span>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="p-8 border border-green-dim/40 rounded-xl bg-green/[0.03]">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-green" />
                <h3 className="font-semibold text-text-primary">Cost of AltorLab</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Full site audit', cost: 'Included' },
                  { label: 'Prioritized risk report', cost: 'Included' },
                  { label: 'Complete remediation', cost: 'Included' },
                  { label: 'Ongoing monitoring', cost: 'Included' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">{item.label}</span>
                    <span className="font-mono text-green font-semibold">{item.cost}</span>
                  </div>
                ))}
                <div className="border-t border-green-dim/40 pt-4 flex items-center justify-between">
                  <span className="text-text-primary font-semibold">Starting at</span>
                  <span className="font-mono text-green text-xl font-bold">$149/mo</span>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-danger hover:bg-red-700 text-white font-semibold text-sm rounded-lg transition-colors"
              >
                Get Protected Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ─────────────────────────────────────────────────────────
const plans = [
  {
    name: 'Scan',
    price: '$149',
    period: '/month',
    desc: 'For brands that need to know where they stand.',
    features: [
      'Full WCAG 2.1 AA scan',
      'Prioritized risk report',
      'Monthly re-scanning',
      'Violation tracking dashboard',
      'Email alerts for new issues',
    ],
    cta: 'Start Scanning',
    highlighted: false,
  },
  {
    name: 'Scan + Fix',
    price: '$499',
    period: '/month',
    desc: 'For brands that need to be compliant now.',
    features: [
      'Everything in Scan',
      'Full code-level remediation',
      'Done in 1–2 weeks',
      'Ongoing fix for new violations',
      'Compliance documentation',
      'Screen reader testing',
    ],
    cta: 'Get Protected',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For multi-brand or high-traffic D2C operations.',
    features: [
      'Everything in Scan + Fix',
      'Dedicated accessibility engineer',
      'Custom SLA & priority support',
      'VPAT / ACR documentation',
      'Quarterly manual audits',
      'Legal defense support package',
    ],
    cta: 'Talk to Us',
    highlighted: false,
  },
]

function Pricing({ onSelectPlan }: { onSelectPlan: (plan: string) => void }) {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <FadeUp>
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-text-muted tracking-wider uppercase mb-4">Pricing</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-text-primary max-w-2xl mx-auto text-balance">
            Less than 1% of what a lawsuit costs
          </p>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            No contracts. No setup fees. Cancel anytime.
          </p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div
              className={`relative p-6 md:p-8 rounded-xl h-full flex flex-col ${
                plan.highlighted
                  ? 'border-2 border-danger bg-danger/[0.03]'
                  : 'border border-surface-border bg-surface-raised/50'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-danger text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-text-primary mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-text-primary">{plan.price}</span>
                <span className="text-text-muted text-sm">{plan.period}</span>
              </div>
              <p className="text-sm text-text-secondary mb-6">{plan.desc}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-green shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full inline-flex items-center justify-center py-3 text-sm font-semibold rounded-lg transition-colors ${
                  plan.highlighted
                    ? 'bg-danger hover:bg-red-700 text-white'
                    : 'border border-surface-border hover:border-text-muted/40 text-text-primary'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

// ─── Social Proof ────────────────────────────────────────────────────
function SocialProof() {
  return (
    <section className="border-y border-surface-border bg-surface-raised/50">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <FadeUp>
          <div className="text-center mb-12">
            <h2 className="text-sm font-mono text-text-muted tracking-wider uppercase mb-4">
              The data speaks for itself
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeUp delay={0.05}>
            <blockquote className="p-6 border border-surface-border rounded-xl bg-surface/50">
              <p className="text-text-primary leading-relaxed mb-4">
                &ldquo;94.8% of homepages have detectable WCAG failures. Most
                companies don&rsquo;t know until they get a demand letter.&rdquo;
              </p>
              <cite className="text-sm text-text-muted not-italic font-mono">— WebAIM Million 2025 Report</cite>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.1}>
            <blockquote className="p-6 border border-surface-border rounded-xl bg-surface/50">
              <p className="text-text-primary leading-relaxed mb-4">
                &ldquo;In January 2026, 137 of 472 sued defendants were using
                third-party accessibility widgets. Overlays do not prevent
                lawsuits.&rdquo;
              </p>
              <cite className="text-sm text-text-muted not-italic font-mono">— UsableNet ADA Lawsuit Tracker</cite>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.15}>
            <blockquote className="p-6 border border-surface-border rounded-xl bg-surface/50">
              <p className="text-text-primary leading-relaxed mb-4">
                &ldquo;Retail and ecommerce is consistently the #1 targeted
                industry for ADA digital lawsuits, with D2C brands
                disproportionately affected.&rdquo;
              </p>
              <cite className="text-sm text-text-muted not-italic font-mono">— Level Access 2025 Report</cite>
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2}>
            <blockquote className="p-6 border border-surface-border rounded-xl bg-surface/50">
              <p className="text-text-primary leading-relaxed mb-4">
                &ldquo;The Supreme Court declined to hear Domino's appeal,
                affirming that websites are covered under the ADA. There is no
                safe harbor for digital businesses.&rdquo;
              </p>
              <cite className="text-sm text-text-muted not-italic font-mono">— Domino's v. Robles, 2019</cite>
            </blockquote>
          </FadeUp>
        </div>

        <FadeUp delay={0.25}>
          <div className="text-center mt-12">
            <p className="text-sm text-text-muted mb-6">
              Trusted by D2C brands across beauty, supplements, apparel, food & beverage, and home goods.
            </p>
            <div className="flex items-center justify-center gap-8 text-text-muted/40 text-xs font-mono uppercase tracking-widest">
              <span>Shopify</span>
              <span>&bull;</span>
              <span>WooCommerce</span>
              <span>&bull;</span>
              <span>BigCommerce</span>
              <span>&bull;</span>
              <span>Custom Storefronts</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Can my D2C site really get sued for accessibility issues?',
    a: 'Yes. Over 4,187 ADA digital lawsuits were filed in 2024, with retail and ecommerce as the #1 target. The Supreme Court confirmed in Domino\'s v. Robles that websites must comply with the ADA. Plaintiff firms use automated tools to scan thousands of ecommerce sites daily — if your site has violations (and 94.8% do), you\'re at risk.',
  },
  {
    q: 'How is AltorLab different from accessibility overlay widgets?',
    a: 'Overlays add a JavaScript layer on top of broken code — they don\'t fix the underlying issues. In January 2026, 137 companies using overlay widgets were still sued. Courts have ordered defendants to remove overlays and hire actual accessibility professionals. AltorLab makes real code-level fixes to your templates, HTML, and ARIA attributes. We fix the source, not just the surface.',
  },
  {
    q: 'What does WCAG 2.1 AA compliance mean?',
    a: 'WCAG (Web Content Accessibility Guidelines) 2.1 Level AA is the international standard for web accessibility and the benchmark referenced in ADA lawsuits. It covers requirements like text contrast ratios, keyboard navigation, alt text for images, form labels, and more. Level AA is what plaintiff firms and courts expect — and what we audit and remediate to.',
  },
  {
    q: 'How long does remediation take?',
    a: 'Most D2C sites are fully remediated within 1–2 weeks. Complex sites with custom checkout flows or heavy third-party integrations may take 2–3 weeks. You get a prioritized risk report within 24 hours of signup so you know exactly where you stand immediately.',
  },
  {
    q: 'What if I add new products or pages after remediation?',
    a: 'That\'s why ongoing monitoring matters — and why 29% of defendants get sued again. Our Scan + Fix plan includes continuous monitoring and remediation of new violations as they appear. Every new product page, blog post, or theme update is automatically checked.',
  },
  {
    q: 'Do you work with Shopify / WooCommerce / custom stores?',
    a: 'Yes. We work with all major ecommerce platforms including Shopify, WooCommerce, BigCommerce, Magento, and custom-built storefronts. Our remediation approach adapts to your specific platform — whether that means theme code changes, app configuration, or custom development.',
  },
  {
    q: 'Is the free audit really free?',
    a: 'Yes. We scan your site and send you a prioritized risk report within 24 hours — no credit card, no sales call, no obligation. We want you to see exactly what plaintiff firms would find. If you want us to fix the issues, we\'ll talk about a plan that fits.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <FadeUp>
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-text-muted tracking-wider uppercase mb-4">FAQ</h2>
          <p className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-text-primary text-balance">
            Common questions
          </p>
        </div>
      </FadeUp>

      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <FadeUp key={i} delay={i * 0.04}>
            <div className="border border-surface-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-${i}`}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-surface-raised/50 transition-colors"
              >
                <span className="text-sm font-medium text-text-primary">{faq.q}</span>
                {open === i ? (
                  <ChevronUp className="w-4 h-4 text-text-muted shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-text-muted shrink-0" />
                )}
              </button>
              {open === i && (
                <motion.div
                  id={`faq-${i}`}
                  role="region"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.2 }}
                  className="px-6 pb-5"
                >
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

// ─── Contact Form ────────────────────────────────────────────────────
function ContactForm({ selectedPlan }: { selectedPlan: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(false)
    const form = e.currentTarget
    const data = new FormData(form)

    fetch('https://formspree.io/f/mdawozwv', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true))
  }

  return (
    <section id="contact" className="border-t border-surface-border bg-surface-raised/30">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <FadeUp>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-text-primary mb-6 text-balance">
                Get your free accessibility risk report in 24 hours
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                See exactly what plaintiff firms would find on your site.
                Prioritized by lawsuit risk. No credit card. No sales call.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Full WCAG 2.1 AA scan of your entire site',
                  'Violations prioritized by legal risk',
                  'Specific remediation recommendations',
                  'Report delivered within 24 hours',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-green shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="p-4 border border-danger/20 rounded-lg bg-danger/[0.03]">
                <p className="text-xs text-text-secondary leading-relaxed">
                  <span className="text-danger font-semibold">Did you know?</span>{' '}
                  Illinois alone accounted for 78% of ADA digital lawsuit
                  filings in recent months. If you have customers in IL, NY, FL,
                  or CA — your risk is highest.
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            {submitted ? (
              <div className="p-8 border border-green-dim/40 rounded-xl bg-green/[0.03] text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-green/10">
                  <Check className="w-6 h-6 text-green" />
                </div>
                <div className="text-green font-semibold text-lg mb-2">Scan request received</div>
                <p className="text-sm text-text-secondary">
                  We&rsquo;ll email your risk report within 24 hours. Check your inbox (and spam folder).
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 border border-surface-border rounded-xl bg-surface-raised/50 space-y-5"
              >
                <div>
                  <label htmlFor="url" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="url"
                    name="url"
                    required
                    placeholder="https://yourbrand.com"
                    className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:border-danger/50 focus:ring-1 focus:ring-danger/20 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@brand.com"
                    className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:border-danger/50 focus:ring-1 focus:ring-danger/20 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:border-danger/50 focus:ring-1 focus:ring-danger/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="platform" className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider">
                      Platform
                    </label>
                    <select
                      id="platform"
                      name="platform"
                      className="w-full px-4 py-3 bg-surface border border-surface-border rounded-lg text-text-primary text-sm focus:outline-none focus:border-danger/50 focus:ring-1 focus:ring-danger/20 transition-colors"
                    >
                      <option value="shopify">Shopify</option>
                      <option value="woocommerce">WooCommerce</option>
                      <option value="bigcommerce">BigCommerce</option>
                      <option value="custom">Custom / Other</option>
                    </select>
                  </div>
                </div>
                {selectedPlan && <input type="hidden" name="plan" value={selectedPlan} />}
                <motion.button
                  type="submit"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-7 py-3.5 bg-danger hover:bg-red-700 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer mt-2"
                >
                  {selectedPlan ? `Get Started — ${selectedPlan} Plan` : "Scan My Site — It's Free"}
                </motion.button>
                {error && (
                  <div role="alert" className="flex items-center gap-2 p-3 border border-danger/30 rounded-lg bg-danger/[0.05] text-xs text-danger">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>
                      Something went wrong. Please try again or email us at{' '}
                      <a href="mailto:support@altorlab.com" className="underline font-medium">
                        support@altorlab.com
                      </a>
                    </span>
                  </div>
                )}
                <p className="text-xs text-text-muted text-center pt-1">
                  No credit card. No sales call. Just your report in 24 hours.
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA ───────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="border-t border-surface-border">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
        <FadeUp>
          <p className="text-sm font-mono text-danger tracking-wider uppercase mb-4">
            Don't wait for the demand letter
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] text-text-primary mb-6 text-balance">
            Every day your site has violations is another day a plaintiff firm could find them.
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Get your free risk report. Know where you stand. Decide from there.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-danger hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get My Free Audit Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Landing Page ────────────────────────────────────────────────────
export default function Landing() {
  const [selectedPlan, setSelectedPlan] = useState('')

  return (
    <>
      <SEOHead
        title="AltorLab — ADA/WCAG Compliance for D2C Brands"
        description="Your online store has accessibility violations. Plaintiff firms are scanning D2C websites right now. We find violations first, then fix them. Free 24hr audit."
        path="/"
        ogType="website"
      />
      <main>
        <Hero />
        <LawsuitTicker />
        <FearStats />
        <WhyD2C />
        <HowItWorks />
        <NotAnOverlay />
        <CaseStudies />
        <CostComparison />
        <Pricing onSelectPlan={setSelectedPlan} />
        <SocialProof />
        <FAQ />
        <ContactForm selectedPlan={selectedPlan} />
        <FinalCTA />
      </main>
    </>
  )
}
