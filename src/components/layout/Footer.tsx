"use client"

import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Send, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white py-14 text-slate-600">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Logo & Desc */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-slate-100">
                <Image 
                  src="/images/Logo/ALL PNG-01.png" 
                  alt="VBB Store" 
                  className="object-cover"
                  fill
                  sizes="44px"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                 {/* Fallback visual if image fails or while loading */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue-50 text-[10px] font-bold text-blue-600 -z-10">
                   VBB
                </div>
              </div>
              <span className="text-lg font-extrabold text-[#0D1625]">VBB STORE</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Trusted provider of verified Meta Business Manager and WhatsApp API accounts since 2020.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0D1625]">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link className="hover:text-[#1877F2] transition-colors" href="/">Homepage</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="#products">All Products</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="/blog">Latest Articles</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="#about">About VBB STORE</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="#contact">Support & Contact</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="/cart">Shopping Cart</Link>
            </nav>
          </div>
          
          {/* Column 3: Products */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0D1625]">Products</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link className="hover:text-[#1877F2] transition-colors" href="/shop?category=Verified+BM">Verified BM</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="/shop?category=WhatsApp+API">WhatsApp API</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="/shop?category=Facebook+Ads">Facebook Ads Accounts</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="/shop?category=TikTok+Ads">TikTok Ads</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="/shop?category=Google+Ads">Google Ads</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="/shop?category=Reinstated+Profiles">Reinstated Profiles</Link>
            </nav>
          </div>
          
          {/* Column 4: Important Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0D1625]">Important Links</h3>
            <nav className="flex flex-col gap-3 text-sm">
              <Link className="hover:text-[#1877F2] transition-colors" href="/terms">Terms of Service</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="/privacy">Privacy Policy</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="/refund">Refund Policy</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="/replacement">Replacement Guarantee</Link>
              <Link className="hover:text-[#1877F2] transition-colors" href="#faq">FAQ</Link>
            </nav>
          </div>
          
          {/* Column 5: Contact Us */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0D1625]">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://wa.me/8801302669333" className="flex items-center gap-2.5 hover:text-[#1877F2] transition-colors">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a href="https://t.me/Verifiedbmbuy" className="flex items-center gap-2.5 hover:text-[#1877F2] transition-colors">
                <Send className="h-4 w-4" />
                Telegram
              </a>
              <a href="mailto:info@verifiedbmbuy.com" className="flex items-center gap-2.5 hover:text-[#1877F2] transition-colors">
                <Mail className="h-4 w-4" />
                info@verifiedbmbuy.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-14 border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
          © 2026 VBB STORE. All rights reserved. | Verified BM & WhatsApp API Provider
        </div>
      </div>
    </footer>
  )
}

export default Footer
