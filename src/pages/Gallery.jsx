import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const imageModules = import.meta.glob(
  '../assets/gallery/*.{png,jpg,jpeg,webp,avif,gif}',
  { eager: true }
)
const images = Object.values(imageModules).map(m => m.default)

const PER_PAGE = 30

export default function Gallery() {
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState(null)

  const totalPages = Math.max(1, Math.ceil(images.length / PER_PAGE))
  const pageImages = images.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const close = useCallback(() => setSelected(null), [])

  const prev = useCallback(() => {
    setSelected(i => (i - 1 + images.length) % images.length)
  }, [])

  const next = useCallback(() => {
    setSelected(i => (i + 1) % images.length)
  }, [])

  const goToPage = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (selected === null) return
    const onKey = (e) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, close, prev, next])

  return (
    <div>

      {/* ── Header ────────────────────────────────────────────── */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          minHeight: '35vh',
          background: 'linear-gradient(160deg, #111 0%, #2a2a2a 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1
          className="relative z-10 font-display text-white uppercase tracking-widest text-center"
          style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}
        >
          Gallery
        </h1>
      </div>

      {/* ── Grid ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {images.length === 0 ? (
          <p className="text-center text-gray-400 italic py-20">
            Add images to <code>src/assets/gallery/</code> to populate this page.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
              {pageImages.map((src, i) => {
                const globalIdx = (page - 1) * PER_PAGE + i
                return (
                  <button
                    key={globalIdx}
                    onClick={() => setSelected(globalIdx)}
                    className="overflow-hidden focus:outline-none group"
                    style={{ aspectRatio: '1' }}
                    aria-label={`Open photo ${globalIdx + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${globalIdx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                )
              })}
            </div>

            {/* ── Pagination ──────────────────────────────────── */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-5 mt-10">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    onClick={() => goToPage(p)}
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      p === page
                        ? 'text-gray-900 underline underline-offset-4'
                        : 'text-gray-400 hover:text-gray-700'
                    }`}
                    aria-label={`Page ${p}`}
                    aria-current={p === page ? 'page' : undefined}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Lightbox ──────────────────────────────────────────── */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
          onClick={close}
        >
          <img
            src={images[selected]}
            alt={`Gallery ${selected + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-2xl"
            onClick={e => e.stopPropagation()}
          />

          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
