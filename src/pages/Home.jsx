import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import CategoryCard from '../components/CategoryCard'
import { categories } from '../data/categories'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Contact from './Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Shop Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map(c => <CategoryCard key={c.id} title={c.title} subtitle={c.subtitle} icon={c.icon} />)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>


      <Contact />
    </div>
  )
}
