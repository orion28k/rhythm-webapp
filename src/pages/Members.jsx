import { members } from '../data/members'
import bannerImg from '../assets/gallery/header3.JPG'

const BANNER_IMAGE_URL = bannerImg

function PhotoPlaceholder({ label, className = '' }) {
  return (
    <div className={`bg-gray-300 flex items-end justify-center pb-2 ${className}`}>
      <span className="text-gray-500 text-xs italic px-2 text-center">{label}</span>
    </div>
  )
}

function MemberCard({ member }) {
  return (
    <div className="text-center">
      <div className="w-full overflow-hidden" style={{ aspectRatio: '3/4' }}>
        {member.photo
          ? <img src={member.photo} alt={member.firstName} className="w-full h-full object-cover" />
          : <PhotoPlaceholder label={member.firstName} className="h-full" />
        }
      </div>
      <div className="mt-3 space-y-0.5">
        <p className="font-display uppercase tracking-wide text-gray-900 text-base">
          {member.firstName}
        </p>
        <p className="font-medium text-gray-700 text-sm">
          {member.nickname}
        </p>
        {member.style && (
          <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
            Style: {member.style}
          </p>
        )}
      </div>
    </div>
  )
}

export default function Members() {
  return (
    <div>

      {/* ── Banner ────────────────────────────────────────────── */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          minHeight: '45vh',
          background: BANNER_IMAGE_URL
            ? `url(${BANNER_IMAGE_URL}) center/cover no-repeat`
            : 'linear-gradient(160deg, #111 0%, #2a2a2a 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1
          className="relative z-10 font-display text-white uppercase tracking-widest text-center"
          style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}
        >
          Members
        </h1>
      </div>

      {/* ── Member grid (3 per row) ────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {members.map(m => <MemberCard key={m.id} member={m} />)}
        </div>
      </div>

    </div>
  )
}
