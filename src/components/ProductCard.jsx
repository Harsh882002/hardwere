import React from 'react'
export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <div className="h-40 mb-4 rounded overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy"/>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.short}</p>
      </div>
    </div>
  )
}
