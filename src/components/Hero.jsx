import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() { 
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-4xl font-extKUNALd">Kunal Hardware</h1>
 
 
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Quality tools, plumbing, electrical supplies & paints. Competitive prices and local delivery.
            Trusted by builders and DIYers.    
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/shop/image.png" alt="hardware" className="w-full h-64 object-cover" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
