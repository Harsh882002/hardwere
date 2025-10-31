import React, { useState } from 'react'
import { products as all } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [filter, setFilter] = useState('All')
  const cats = ['All', ...Array.from(new Set(all.map(p=>p.category)))]

  const filtered = filter === 'All' ? all : all.filter(p=>p.category===filter)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="mb-4 flex gap-2">
        {cats.map(c=>(
          <button key={c} onClick={()=>setFilter(c)} className={`px-3 py-1 rounded ${filter===c ? 'bg-accent text-white' : 'border'}`}>{c}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
