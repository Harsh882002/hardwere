import React from 'react'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Ironwood Hardware — All rights reserved</div>
        <div className="mt-2 text-xs text-gray-500">Built with <Heart size={12} className="inline mb-0.5 text-red-500"/> for demo purposes.</div>
      </div>
    </footer>
  )
}
