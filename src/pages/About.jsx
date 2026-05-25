import { founders } from '../data/founders'
import heroImg from '../assets/gallery/header2.JPEG'

const HERO_IMAGE_URL = heroImg

function PhotoBox({ src, alt, className = '' }) {
  if (src) {
    return <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />
  }
  return (
    <div className={`w-full h-full bg-gray-700 flex items-end justify-center pb-2 ${className}`}>
      <span className="text-gray-400 text-xs italic">{alt}</span>
    </div>
  )
}

function FounderCard({ founder }) {
  const fullName = `${founder.firstName} ${founder.nickname} ${founder.lastName}`
  return (
    <div>
      <div className="w-full aspect-[3/2] overflow-hidden">
        <PhotoBox src={founder.photo} alt={fullName} className="" />
      </div>
      <div className="text-center mt-4 space-y-2">
        <p className="font-display uppercase tracking-wide text-navy" style={{ color: '#1e3a8a' }}>
          {founder.firstName} {founder.nickname} {founder.lastName}
        </p>
        <p className="text-sm font-medium tracking-wider text-gray-700 uppercase">
          Style: {founder.style}
        </p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          minHeight: '45vh',
          background: HERO_IMAGE_URL
            ? `url(${HERO_IMAGE_URL}) center/cover no-repeat`
            : 'linear-gradient(160deg, #111 0%, #2a2a2a 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1
          className="relative z-10 font-display text-white uppercase tracking-wider text-center"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
        >
          About Us
        </h1>
      </div>

      {/* ── Established ───────────────────────────────────────── */}
      <div className="py-12 px-6 text-center">
        <h2 className="font-display uppercase tracking-wider text-gray-800"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
          Established July 2025
        </h2>
      </div>

      <hr className="border-gray-300 mx-8" />

      {/* ── What is Rhythm Dept ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-5 gap-12 items-center">

        {/* Logo */}
        <div className="md:col-span-2 flex justify-center">
          <img
            src="/logo.jpg"
            alt="Rhythm Dept logo"
            className="w-full max-w-xs md:max-w-sm object-contain"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-3">
          <h2 className="font-display text-gray-900 mb-5 leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            What is Rhythm Dept?
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            <strong>Rhythm Dept</strong> was created from a genuine bond between three friends who shared
            a vision of building something deeper than a skate group — a family. Rooted in faith and
            freedom, we strive to create a space where authenticity, love, and unity lead the way.
            Guided by 2 Corinthians 3:17,{' '}
            <em>&ldquo;Where the Spirit of the Lord is, there is freedom,&rdquo;</em> and inspired by
            Maya Angelou&rsquo;s words,{' '}
            <em>&ldquo;Everything in the universe has a rhythm, everything dances,&rdquo;</em> we move
            with intention and soul. Our motto,{' '}
            <em>&ldquo;It&rsquo;s in the Soul,&rdquo;</em> reminds us that every glide, spin, and rhythm
            comes from a place of passion, not performance. We value people for who they are beyond the
            rink, fostering real relationships that extend into everyday life. As followers of Christ, we
            aim to embody peace, serve our community, and let God&rsquo;s presence flow through
            everything we do. Rhythm Dept is where faith meets freedom, and every move becomes a
            reflection of the soul.
          </p>
        </div>

      </div>

      <hr className="border-gray-300 mx-8" />

      {/* ── Meet the Founders ─────────────────────────────────── */}
      <div className="py-16 px-8">
        <h2 className="text-center font-display tracking-widest uppercase text-gray-800 text-xl mb-12">
          Meet the Founders
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {founders.map(founder => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </div>

    </div>
  )
}
