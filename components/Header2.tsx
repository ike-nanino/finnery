'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const tabs = [
  { label: 'Home', href: '/' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Nutrition', href: '/nutrition' },
  { label: 'About', href: '/about' },
]

export default function Header2() {
  const pathname = usePathname()

  return (
    <header className="lg:hidden w-full bg-white shadow-md mx-auto">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Tab Navigation: Visible on mobile, hidden on lg */}
          <nav className="flex gap-2 overflow-x-auto scrollbar-hide lg:hidden items-center">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  'text-sm px-4 py-2 rounded-full whitespace-nowrap transition-colors',
                  pathname === tab.href
                    ? 'bg-emerald-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
