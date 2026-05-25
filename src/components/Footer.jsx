import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#c8c8c8' }} className="py-8 px-6 relative">
      <div className="text-center space-y-4">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <p className="text-xs tracking-widest uppercase text-gray-700 font-medium">
          Copyright ©2025, Rhythm Dept. All Rights Reserved.
        </p>
      </div>

      {/* Members portal link — bottom right */}
      <Link
        to="/portal"
        className="absolute bottom-3 right-6 text-xs text-gray-500 hover:text-gray-800 transition-colors tracking-wide"
      >
        Members
      </Link>
    </footer>
  )
}
