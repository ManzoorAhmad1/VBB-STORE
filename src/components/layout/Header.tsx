"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ShoppingCart, User, Menu, X } from 'lucide-react'

const Header = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'SHOP', href: '/shop' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT US', href: '/contact' },
    { name: 'ABOUT US', href: '/about' },
  ]

  return (
    <>
      <div className="h-[72px] w-full" />
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white shadow-sm">
        <div className="container flex h-[72px] items-center justify-between px-4 md:px-6">
          <Link className="flex items-center group" href="/">
            <Image 
              src="/images/logo.jpg" 
              alt="Verified BM Buy" 
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105" 
              priority
              width={358} 
              height={400}
            />
          </Link>
        
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-[#1877F2] ${
                  pathname === link.href 
                    ? 'text-[#1877F2]' 
                    : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        
          <div className="flex items-center gap-5">
             {/* Profile Icon */}
             <button className="inline-flex items-center justify-center text-black/70 transition-colors hover:text-[#1877F2]" aria-label="User profile">
              <User className="h-5 w-5" />
            </button>

            {/* Cart Icon */}
            <Link className="relative" aria-label="Shopping cart" href="/cart">
              <button className="inline-flex items-center justify-center text-black/70 transition-colors hover:text-[#1877F2]" aria-label="Shopping cart">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </Link>
            
            <a href="https://wa.me/8801302669333" target="_blank" rel="noopener noreferrer">
              <button className="hidden items-center justify-center gap-2 rounded-lg bg-[#337AB7] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#286090] md:flex">
                Get Started
              </button>
            </a>
            
            <button 
              className="inline-flex items-center justify-center text-slate-600 lg:hidden" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[72px] left-0 w-full border-t border-gray-100 bg-white shadow-xl lg:hidden">
            <nav className="container flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b border-gray-50 py-4 text-sm font-bold uppercase tracking-wide transition-colors hover:text-[#1877F2] ${
                    pathname === link.href ? 'text-[#1877F2]' : 'text-slate-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                  <a href="https://wa.me/8801302669333" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#337AB7] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#286090]">
                        Get Started
                    </button>
                  </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
