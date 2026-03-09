import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Shield, X, Menu } from 'lucide-react'

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const prefix = pathname === '/' ? '' : '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border/60 bg-surface/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-danger" />
          <span className="font-bold text-text-primary tracking-tight">
            AltorLab
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <a href={`${prefix}#case-studies`} className="hover:text-text-primary transition-colors">
            Case Studies
          </a>
          <a href={`${prefix}#how`} className="hover:text-text-primary transition-colors">
            How It Works
          </a>
          <a href={`${prefix}#pricing`} className="hover:text-text-primary transition-colors">
            Pricing
          </a>
          <a href={`${prefix}#faq`} className="hover:text-text-primary transition-colors">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`${prefix}#contact`}
            className="px-4 py-2 bg-danger hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Free Audit
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-surface-border/60 bg-surface/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm text-text-secondary">
            <a href={`${prefix}#case-studies`} onClick={() => setMobileOpen(false)} className="hover:text-text-primary transition-colors">
              Case Studies
            </a>
            <a href={`${prefix}#how`} onClick={() => setMobileOpen(false)} className="hover:text-text-primary transition-colors">
              How It Works
            </a>
            <a href={`${prefix}#pricing`} onClick={() => setMobileOpen(false)} className="hover:text-text-primary transition-colors">
              Pricing
            </a>
            <a href={`${prefix}#faq`} onClick={() => setMobileOpen(false)} className="hover:text-text-primary transition-colors">
              FAQ
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
