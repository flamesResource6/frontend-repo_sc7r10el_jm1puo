import { useState } from 'react'
import { Menu, X, Car, Phone, Info, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about', icon: Info },
    { label: 'Models', href: '#models', icon: Car },
    { label: 'Features', href: '#features', icon: Sparkles },
    { label: 'Contact', href: '#contact', icon: Phone },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 grid place-items-center text-white">
                <Car size={18} />
              </div>
              <span className="text-white font-semibold tracking-wide">Veloz Motors</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map(({ label, href }, idx) => (
                <a key={idx} href={href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-red-900/30 hover:opacity-90 transition-opacity">
                Reserve Now
              </a>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map(({ label, href }, idx) => (
                  <a key={idx} href={href} className="text-sm text-white/90 bg-white/5 rounded-lg px-3 py-2">
                    {label}
                  </a>
                ))}
                <a href="#contact" className="text-center text-sm font-medium bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-lg px-3 py-2">
                  Reserve Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
