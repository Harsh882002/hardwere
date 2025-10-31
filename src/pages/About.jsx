import React from 'react'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">About Ironwood Hardware</h1>
      <p className="text-gray-700 dark:text-gray-300">Founded in 1998, Ironwood Hardware has served contractors and DIY customers with quality tools and supplies. We believe in honest pricing, expert advice, and fast local delivery.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Our Mission</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Provide durable products with trusted advice.</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Why Choose Us?</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc ml-5">
            <li>Wide product range</li>
            <li>Competitive pricing</li>
            <li>Knowledgeable staff</li>
          </ul>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-semibold">Our Team</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Small local team with decades of combined experience.</p>
        </div>
      </div>
    </div>
  )
}
