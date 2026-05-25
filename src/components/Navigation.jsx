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
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-24">

        {/* Logo image */}
        <Link to="/">
          <img src="/logo.svg" alt="Rhythm Dept" className="h-16 w-auto object-contain" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors duration-150 ${
                  active ? 'text-black font-bold' : 'text-gray-500 hover:text-black font-normal'
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
            className="text-gray-600 hover:text-black"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-3 space-y-1">
          {navLinks.map(link => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-sm ${
                  active ? 'text-black font-bold' : 'text-gray-500'
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
