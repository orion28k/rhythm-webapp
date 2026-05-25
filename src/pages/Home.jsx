import GalleryCarousel from '../components/GalleryCarousel'
import heroImg from '../assets/gallery/header1.JPEG'

const HERO_IMAGE_URL = heroImg

export default function Home() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          minHeight: '92vh',
          background: HERO_IMAGE_URL
            ? `url(${HERO_IMAGE_URL}) center/cover no-repeat`
            : 'linear-gradient(160deg, #111 0%, #2a2a2a 100%)',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-white uppercase leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', letterSpacing: '0.05em' }}>
            Rhythm Dept
          </h1>
          <p className="font-display text-white text-xl mt-3 font-bold italic">
            &ldquo;It&rsquo;s in the Soul&rdquo;
          </p>
        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-2xl select-none animate-bounce">
          ∨
        </div>
      </div>

      {/* ── Quotes ────────────────────────────────────────────── */}
      <div className="bg-[#1a1a1a] py-14 px-6 space-y-6">
        <p className="text-white font-normal italic text-base md:text-lg max-w-2xl leading-relaxed">
          &ldquo;Now the Lord is the Spirit, and where the Spirit of the Lord is, there is freedom.&rdquo;<br />
          - 2 Corinthians 3:17
        </p>
        <p className="text-white font-normal italic text-base md:text-lg max-w-2xl leading-relaxed ml-auto text-right">
          &ldquo;Everything in the universe has a rhythm, everything dances.&rdquo;<br />
          - Maya Angelou
        </p>
      </div>

      {/* ── Gallery ───────────────────────────────────────────── */}
      <GalleryCarousel />

    </div>
  )
}
