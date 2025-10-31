import React from 'react'
export default function CategoryCard({ title, subtitle, icon, href='#' }) {
  return (
    <a href={href} className="block p-4 rounded-lg border hover:shadow-md transition">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl">{icon}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500">{subtitle}</div>
        </div>
      </div>
    </a>
  )
}
