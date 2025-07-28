// Navbar.js - Simplified and clean
'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import PopupModalTrigger from '@components/popup/PopupModalTrigger'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const navItems = [
    { name: 'Cinema8.com', href: 'https://cinema8.com' },
    { name: 'Contact', href: 'https://cinema8.com/contact-us' }
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo 
		  <Link href="/" className="flex items-center group">
		    <div className="relative w-32 h-8">
		      <Image
		        src="/logo.webp"
		        alt="Cinema8"
		        fill
		        className="object-contain dark:invert"
		      />
		    </div>
		    <div className="flex items-center ml-3 pl-3 border-l border-gray-300 dark:border-gray-600">
		      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
		        Help Center
		      </span>
		    </div>
		  </Link>
		  */}
		  
		  <Link href="/" className="flex items-center">
		  		    <div className="relative w-32 h-8">
		  		      <Image
		  		        src="/logo.webp"
		  		        alt="Cinema8"
		  		        fill
		  		        className="object-contain dark:invert"
		  		      />
		  		    </div>
		  		    <span className="ml-2 px-2 py-1 text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md ">
		  			<span className="ml-3   bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
		  			  HELP CENTER </span>
		  		    </span>
		  		  </Link>
				  {/* Logo	  
		  <Link href="/" className="flex items-center">
		    <div className="relative w-32 h-8">
		      <Image
		        src="/logo.webp"
		        alt="Cinema8"
		        fill
		        className="object-contain dark:invert"
		      />
		    </div>
		    <span className="ml-2 px-2 py-1 text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md ">
		      HELP CENTER
		    </span>
		  </Link>
		  
		   
		  <Link href="/" className="flex items-center">
		    <div className="relative w-32 h-8">
		      <Image
		        src="/logo.webp"
		        alt="Cinema8"
		        fill
		        className="object-contain dark:invert"
		      />
		    </div>
		    <span className="ml-3 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
		      Help Center
		    </span>
		  </Link>
		  
		  <Link href="/" className="flex items-center">
		    <div className="relative w-32 h-8">
		      <Image
		        src="/logo.webp"
		        alt="Cinema8"
		        fill
		        className="object-contain dark:invert"
		      />
		    </div>
		    <div className="flex items-center ml-2">
		      <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		      </svg>
		      <span className="font-medium text-gray-500 dark:text-gray-400">
		        Help
		      </span>
		    </div>
		  </Link>
		  */}
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
			{/* Submit Ticket */}
			<PopupModalTrigger 
				    portalId="145119654" 
				    formId="77647adc-0b19-45bd-8b89-be131595eace" 
				    region="eu1" 
				  />
            
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-2 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
           
            <PopupModalTrigger url="https://cinema8.com/static/contact-form.html?v=l2r2ESP2Lfo7Rtb-EAsGa" />
          
            <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex justify-center">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Light Mode
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Dark Mode
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}