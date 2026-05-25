import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const imageModules = import.meta.glob(
  '../assets/gallery/*.{png,jpg,jpeg,webp,avif,gif}',
  { eager: true }
)

const positions = {
  'Riq.jpg':      '50% 20%',
  'DJ.jpg':       '50% 20%',
  'Faith.jpg':    '50% 20%',
  'unnamed-2.jpg':'50% 20%',
  'Henry.jpg':    '50% 20%',
  'Kaleah.jpg':   '50% 20%',
}

const images = Object.entries(imageModules).slice(0, 10).map(([path, mod]) => ({
  src: mod.default,
  position: positions[path.split('/').pop()] ?? '50% 50%',
}))

const INTERVAL = 4000

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1) // 1 = forward, -1 = back
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)
  const count = images.length

  const go = useCallback((nextIdx, direction) => {
    if (animating) return
    setDir(direction)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(nextIdx)
      setAnimating(false)
    }, 350)
  }, [animating])

  const next = useCallback(() => {
    go((current + 1) % count, 1)
  }, [current, count, go])

  const prev = useCallback(() => {
    go((current - 1 + count) % count, -1)
  }, [current, count, go])

  const resetTimer = useCallback((fn) => {
    clearInterval(timerRef.current)
    fn()
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % count)
    }, INTERVAL)
  }, [count])

  useEffect(() => {
    if (count < 2) return
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % count)
    }, INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [count])

  if (count === 0) {
    return (
      <section className="bg-[#111] py-20 flex flex-col items-center justify-center gap-3">
        <h2 className="text-white uppercase tracking-widest text-sm">Gallery</h2>
        <p className="text-gray-500 italic text-sm">
          Add images to <code className="text-gray-400">src/assets/gallery/</code> to populate this section.
        </p>
      </section>
    )
  }

  return (
    <section className="bg-[#111] relative">

      {/* Slide window — full width, no padding */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '20/9' }}>
        <img
          key={current}
          src={images[current].src}
          alt={`Gallery photo ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: images[current].position,
            animation: `slideIn${dir > 0 ? 'Right' : 'Left'} 0.35s ease both`,
          }}
        />

        {/* Left arrow — overlaid */}
        <button
          onClick={() => resetTimer(prev)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Right arrow — overlaid */}
        <button
          onClick={() => resetTimer(next)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={26} />
        </button>

        {/* Dot indicators — overlaid at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => resetTimer(() => go(i, i > current ? 1 : -1))}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'bg-white w-5 h-2' : 'bg-white/40 hover:bg-white/70 w-2 h-2'
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(60px); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-60px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>
    </section>
  )
}
