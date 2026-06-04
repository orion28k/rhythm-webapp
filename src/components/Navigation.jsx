import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home',      path: '/'        },
  { label: 'About Us',  path: '/about'   },
  { label: 'Members',   path: '/members' },
  { label: 'Gallery',   path: '/gallery' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-24">

        {/* Logo + brand */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/1000_F_96484581_Q3vNtFGKSyIRyoeliIJUMiZD0PBN0qtG.png" alt="Rhythm Dept logo" className="h-12 w-auto object-contain" />
          <span className="text-white text-xl font-semibold tracking-wide">Rhythm Dept</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm text-white transition-opacity duration-150 ${
                  active ? 'font-bold' : 'font-normal opacity-70 hover:opacity-100'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="text-gray-400 hover:text-white"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-3 space-y-1">
          {navLinks.map(link => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-sm text-white ${
                  active ? 'font-bold' : 'font-normal opacity-70'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
