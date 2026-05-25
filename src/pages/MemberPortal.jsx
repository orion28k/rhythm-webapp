import { useState } from 'react'

export default function MemberPortal() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="w-full max-w-sm">
        <h1 className="font-display text-3xl text-center text-gray-900 uppercase tracking-widest mb-8">
          Member Portal
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-gray-600"
              autoComplete="username"
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

          <button
            type="submit"
            className="w-full bg-[#1a1a1a] text-white text-xs uppercase tracking-widest py-3 rounded hover:bg-black transition-colors mt-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
