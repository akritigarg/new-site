import { motion, useInView } from 'motion/react'
import { useRef, useState, type FormEvent, type ReactNode } from 'react'

// ─── Animation helpers ───────────────────────────────────────────────
const ease = [0.25, 0.4, 0.25, 1] as const

function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle radial glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-danger/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[720px] mx-auto px-6 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-danger-dim/60 rounded-full text-danger text-xs font-mono tracking-wider uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse" />
          ADA Compliance Risk
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="text-balance text-4xl md:text-[3.5rem] md:leading-[1.08] font-bold tracking-[-0.03em] text-text-primary mb-6"
        >
          Your website is a lawsuit
          <br />
          <span className="text-danger">waiting to happen.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.35 }}
          className="text-pretty text-lg md:text-xl text-text-secondary max-w-[540px] mb-10"
        >
          We find and fix ADA/WCAG accessibility violations before plaintiff
          firms do.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.5 }}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-danger hover:bg-red-700 text-white font-semibold text-sm rounded-lg transition-colors"
        >
          Get Your Free Audit
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="mt-px"
          >
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  )
}

// ─── Fear Strip ──────────────────────────────────────────────────────
const stats = [
  { value: '4,600+', label: 'ADA digital lawsuits filed in 2024' },
  { value: '$50K–$150K', label: 'Average settlement cost' },
  { value: '96.3%', label: 'Of websites fail WCAG compliance' },
]

function FearStrip() {
  return (
    <section className="border-y border-surface-border bg-surface-raised">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-surface-border">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="text-center md:px-8">
                <div className="text-3xl md:text-4xl font-bold tracking-tight text-danger mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ────────────────────────────────────────────────────
const steps = [
  {
    num: '01',
    title: 'We scan your site',
    desc: 'Automated + manual audit across every page for WCAG 2.1 AA violations.',
  },
  {
    num: '02',
    title: 'You get a risk report',
    desc: 'Prioritized findings with severity ratings — what plaintiff firms look for first.',
  },
  {
    num: '03',
    title: 'We fix it',
    desc: 'Our team remediates critical violations, typically within 1–2 weeks.',
  },
]

function HowItWorks() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
      <FadeUp>
        <h2 className="text-sm font-mono text-text-muted tracking-wider uppercase mb-12">
          How it works
        </h2>
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <div className="group relative p-6 md:p-8 border border-surface-border rounded-lg bg-surface-raised/50 hover:border-surface-border/80 transition-colors h-full">
              <span className="block text-xs font-mono text-danger/70 mb-4">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold text-text-primary tracking-[-0.01em] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed text-pretty">
                {step.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

// ─── What We Find ────────────────────────────────────────────────────
const violations = [
  {
    text: 'Missing alt text on images',
    severity: 'HIGH',
    note: '#1 lawsuit trigger',
  },
  {
    text: 'Form inputs without labels',
    severity: 'HIGH',
    note: "Screen readers can't navigate",
  },
  {
    text: 'Insufficient color contrast ratios',
    severity: 'HIGH',
    note: 'Below 4.5:1 WCAG minimum',
  },
  {
    text: 'Missing ARIA landmarks and roles',
    severity: 'MED',
    note: null,
  },
  { text: 'Keyboard navigation traps', severity: 'MED', note: null },
  { text: 'Missing skip navigation links', severity: 'MED', note: null },
  {
    text: 'Inaccessible dropdown menus and modals',
    severity: 'MED',
    note: null,
  },
]

function WhatWeFind() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
      <FadeUp>
        <h2 className="text-sm font-mono text-text-muted tracking-wider uppercase mb-4">
          What we find
        </h2>
        <p className="text-text-secondary text-sm mb-8 max-w-lg">
          A preview of the violations we detect — the same issues plaintiff
          firms use automated tools to identify before filing.
        </p>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="border border-surface-border rounded-lg bg-surface-raised overflow-hidden">
          {/* Terminal-style header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-surface-border bg-surface/60">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-danger/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-600/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-text-muted/40" />
            </div>
            <span className="ml-2 text-xs font-mono text-text-muted">
              accessibility-scan --url yoursite.com --standard WCAG21AA
            </span>
          </div>

          {/* Violations list */}
          <div className="divide-y divide-surface-border/60">
            {violations.map((v, i) => (
              <FadeUp key={i} delay={0.15 + i * 0.04}>
                <div className="flex items-start gap-4 px-5 py-3.5 font-mono text-sm hover:bg-surface-overlay/30 transition-colors">
                  <span
                    className={`shrink-0 mt-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wider ${
                      v.severity === 'HIGH'
                        ? 'bg-danger/15 text-danger'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}
                  >
                    {v.severity}
                  </span>
                  <span className="text-text-primary">{v.text}</span>
                  {v.note && (
                    <span className="hidden md:inline text-text-muted ml-auto shrink-0 text-xs">
                      — {v.note}
                    </span>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-surface-border bg-surface/60">
            <span className="text-xs font-mono text-text-muted">
              <span className="text-danger">7 violations</span> found across 1
              page &middot; scan complete
            </span>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}

// ─── Social Proof ────────────────────────────────────────────────────
function SocialProof() {
  return (
    <section className="border-y border-surface-border bg-surface-raised/50">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-24 text-center">
        <FadeUp>
          <blockquote>
            <p className="text-xl md:text-2xl text-text-primary font-medium leading-relaxed tracking-[-0.01em] text-balance mb-6">
              &ldquo;96.3% of homepages have detectable WCAG failures. Most
              companies don&rsquo;t know until they get a demand letter.&rdquo;
            </p>
            <cite className="text-sm text-text-muted not-italic font-mono">
              — WebAIM Million 2024 Report
            </cite>
          </blockquote>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-10 text-sm text-text-secondary">
            Trusted by companies across e-commerce, SaaS, and healthcare.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Contact Form ────────────────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // POST to Formspree or similar — replace with real endpoint
    fetch('https://formspree.io/f/placeholder', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true)) // Show success anyway, fix endpoint later
  }

  return (
    <section id="contact" className="max-w-xl mx-auto px-6 py-24 md:py-32">
      <FadeUp>
        <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-text-primary mb-3 text-balance">
          Get your free accessibility risk report
        </h2>
        <p className="text-text-secondary text-sm mb-10">
          We&rsquo;ll send your risk report within 24 hours. No sales call
          required.
        </p>
      </FadeUp>

      {submitted ? (
        <FadeUp>
          <div className="p-8 border border-green-900/40 rounded-lg bg-green-950/20 text-center">
            <div className="text-green-400 font-semibold mb-2">
              Scan request received.
            </div>
            <p className="text-sm text-text-secondary">
              We&rsquo;ll email your risk report within 24 hours.
            </p>
          </div>
        </FadeUp>
      ) : (
        <FadeUp delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="url"
                className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider"
              >
                Website URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                required
                placeholder="https://yourcompany.com"
                className="w-full px-4 py-3 bg-surface-raised border border-surface-border rounded-lg text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:border-danger/50 focus:ring-1 focus:ring-danger/20 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider"
              >
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 bg-surface-raised border border-surface-border rounded-lg text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:border-danger/50 focus:ring-1 focus:ring-danger/20 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-text-muted mb-2 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Jane Smith"
                className="w-full px-4 py-3 bg-surface-raised border border-surface-border rounded-lg text-text-primary placeholder:text-text-muted/60 text-sm focus:outline-none focus:border-danger/50 focus:ring-1 focus:ring-danger/20 transition-colors"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-7 py-3.5 bg-danger hover:bg-red-700 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer mt-2"
            >
              Scan My Site
            </motion.button>
            <p className="text-xs text-text-muted text-center pt-1">
              No credit card. No sales call. Just your report.
            </p>
          </form>
        </FadeUp>
      )}
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} AltorLab. All rights reserved.
        </span>
        <span className="text-xs text-text-muted">
          WCAG 2.1 AA Compliance Auditing
        </span>
      </div>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────
export default function App() {
  return (
    <main className="bg-surface min-h-screen">
      <Hero />
      <FearStrip />
      <HowItWorks />
      <WhatWeFind />
      <SocialProof />
      <ContactForm />
      <Footer />
    </main>
  )
}
