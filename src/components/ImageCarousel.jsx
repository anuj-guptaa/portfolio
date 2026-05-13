import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ImageCarousel({ images, autoPlayInterval = 5000 }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [images.length, autoPlayInterval])

  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)
  const next = () => setCurrent((prev) => (prev + 1) % images.length)

  if (!images || images.length === 0) return null

  return (
    <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden group">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black transition opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black transition opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition ${
              idx === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 right-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded">
        {current + 1} / {images.length}
      </div>
    </div>
  )
}
