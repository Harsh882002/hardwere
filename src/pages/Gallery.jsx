import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
  'https://images.unsplash.com/photo-1503602642458-232111445657',
  'https://images.unsplash.com/photo-1545235617-9465d7b8f7b1',
  'https://images.unsplash.com/photo-1581092795369-2a1a6ea9f2ae',
  'https://images.unsplash.com/photo-1581090463879-2f6e43c8a8b8'
]

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src,i)=>(
          <div key={i} className="rounded overflow-hidden">
            <img src={`${src}?auto=format&fit=crop&w=800&q=60`} alt={`g-${i}`} className="w-full h-40 object-cover" loading="lazy"/>
          </div>
        ))}
      </div>
    </div>
  )
}
