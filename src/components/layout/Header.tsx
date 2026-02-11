"use client"

import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <>
      <div className="h-[72px] w-full" />
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white shadow-sm">
        <div className="container flex h-[72px] items-center justify-between">
        <Link className="flex items-center group" href="/">
          <Image 
            src="/assets/logo.png" 
            alt="Verified BM Buy" 
            className="h-10 object-contain transition-transform group-hover:scale-105" 
            priority
            width={278} 
            height={40}
          />
        </Link>
        
        <nav className="hidden items-center gap-0.5 lg:flex">
          <Link className="relative rounded-xl px-4 py-2 text-sm font-semibold transition-all bg-primary text-primary-foreground shadow-md shadow-primary/20" href="/">
            Home
          </Link>
          <Link className="relative rounded-xl px-4 py-2 text-sm font-semibold transition-all text-muted-foreground hover:bg-primary/5 hover:text-primary" href="/shop">
            Shop
          </Link>
          <Link className="relative rounded-xl px-4 py-2 text-sm font-semibold transition-all text-muted-foreground hover:bg-primary/5 hover:text-primary" href="/blog">
            Blog
          </Link>
          <Link className="relative rounded-xl px-4 py-2 text-sm font-semibold transition-all text-muted-foreground hover:bg-primary/5 hover:text-primary" href="/contact">
            Contact Us
          </Link>
          <Link className="relative rounded-xl px-4 py-2 text-sm font-semibold transition-all text-muted-foreground hover:bg-primary/5 hover:text-primary" href="/about">
            About Us
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <Link className="relative" aria-label="Shopping cart" href="/cart">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 rounded-xl hover:bg-primary/5" aria-label="Shopping cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart h-5 w-5">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
            </button>
          </Link>
          
          <a href="https://wa.me/8801302669333" target="_blank" rel="noopener noreferrer">
            <button className="items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 hidden md:block rounded-xl shadow-md shadow-primary/20 font-bold px-5" aria-label="Get started - Contact us on WhatsApp">
              Get Started
            </button>
          </a>
          
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 lg:hidden rounded-xl" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-5 w-5">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
        </div>
      </header>
    </>
  )
}

export default Header
