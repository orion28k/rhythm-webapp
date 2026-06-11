import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function MemberPortal() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)
  const [user, setUser]         = useState(null)

  const handleLogin = async () => {
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else {
      setUser(data.user)
    }

    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  // Logged in view
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="w-full max-w-sm text-center space-y-6">
          <img src="/logo.svg" alt="Rhythm Dept" className="h-20 mx-auto" />
          <h1 className="font-display text-3xl uppercase tracking-widest text-gray-900">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500">{user.email}</p>
          <div className="border border-gray-200 rounded p-6">
            <p className="text-sm text-gray-600 mb-4">Member Portal coming soon — merch & more.</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full border border-gray-300 text-gray-700 text-xs uppercase tracking-widest py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    )
  }

  // ── Login form view 
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="w-full max-w-sm">

        <img src="/logo.svg" alt="Rhythm Dept" className="h-20 mx-auto mb-8" />

        <h1 className="font-display text-3xl text-center text-gray-900 uppercase tracking-widest mb-8">
          Member Portal
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-gray-600"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-gray-600"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-black text-white text-xs uppercase tracking-widest py-3 rounded hover:bg-gray-900 transition-colors mt-2 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>

      </div>
    </div>
  )
}