'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [language, setLanguage] = useState('de')
  const pathname = usePathname()

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'fr' : 'de')
  }

  const navItems = [
    { name: language === 'de' ? 'Startseite' : 'Accueil', href: '/' },
    { name: language === 'de' ? 'Geschichte' : 'Histoire', href: '/history' },
    { name: language === 'de' ? 'Kultur' : 'Culture', href: '/culture' },
    { name: language === 'de' ? 'Projekte' : 'Projets', href: '/projects' },
    { name: language === 'de' ? 'Kontakt' : 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">
            <span className="text-blue-600">Deutsch</span>-
            <span className="text-red-600">Französische</span>{' '}
            <span className="text-yellow-500">Einheit</span>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-blue-600 ${
                  pathname === item.href ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
            >
              {language === 'de' ? 'FR' : 'DE'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

