"use client"

import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Send, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white py-14 text-slate-600">
      <div className="container px-4 md:px-6">
        {/* Large Screen Layout (5 Columns) / Tablet (2 Columns) / Mobile Layout (1 Column) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 lg:items-start lg:gap-8">
            
            {/* 1. Logo Column */}
            <div className="h-full rounded-3xl border border-slate-200 p-6 text-left md:p-8 lg:h-auto lg:border-0 lg:p-0">
                <div className="mb-5 flex items-center gap-3">
                       <Image 
                                   src="/images/logo.jpg" 
                                   alt="Verified BM Buy" 
                                   className="h-14 w-auto object-contain transition-transform group-hover:scale-105" 
                                   priority
                                   width={358} 
                                   height={400}
                                 />
                         <div className="absolute inset-0 -z-10 flex items-center justify-center bg-blue-50 text-[10px] font-bold text-blue-600">
                            VBB
                         </div>
                    <span className="text-lg font-extrabold text-[#0D1625]">VBB STORE</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                    Trusted provider of verified Meta Business Manager and WhatsApp API accounts since 2020.
                </p>
            </div>

             {/* 2. Quick Links Column */}
            <div className="h-full rounded-3xl border border-slate-200 p-6 text-left md:p-8 lg:h-auto lg:border-0 lg:p-0 lg:text-center">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0D1625] lg:mb-6">Quick Links</h3>
                <nav className="flex flex-col gap-3 text-sm lg:items-center">
                    <Link className="transition-colors hover:text-[#1877F2]" href="/">Homepage</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="#products">All Products</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="/blog">Latest Articles</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="#about">About Us</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="#contact">Contact</Link>
                </nav>
            </div>

             {/* 3. Products Column */}
            <div className="h-full rounded-3xl border border-slate-200 p-6 text-left md:p-8 lg:h-auto lg:border-0 lg:p-0 lg:text-center">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0D1625] lg:mb-6">Products</h3>
                <nav className="flex flex-col gap-3 text-sm lg:items-center">
                    <Link className="transition-colors hover:text-[#1877F2]" href="/shop?category=Verified+BM">Verified BM</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="/shop?category=WhatsApp+API">WhatsApp API</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="/shop?category=Facebook+Ads">Facebook Profile</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="/shop?category=TikTok+Ads">TikTok Ads</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="/shop?category=Google+Ads">Google Ads</Link>
                </nav>
            </div>

             {/* 4. Policies Column */}
            <div className="h-full rounded-3xl border border-slate-200 p-6 text-left md:p-8 lg:h-auto lg:border-0 lg:p-0 lg:text-center">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0D1625] lg:mb-6">Policies</h3>
                <nav className="flex flex-col gap-3 text-sm lg:items-center">
                    <Link className="transition-colors hover:text-[#1877F2]" href="/terms">Terms of Service</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="/privacy">Privacy Policy</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="/refund">Refund Policy</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="/replacement">Replacement</Link>
                    <Link className="transition-colors hover:text-[#1877F2]" href="#faq">FAQ</Link>
                </nav>
            </div>

            {/* 5. Contact Column */}
            <div className="h-full rounded-3xl border border-slate-200 p-6 text-left md:p-8 lg:h-auto lg:border-0 lg:p-0">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#0D1625] lg:mb-6">Contact Us</h3>
                <div className="flex flex-col gap-4 text-sm">
                    <a href="https://wa.me/8801302669333" className="group flex items-center gap-3 transition-colors hover:text-[#1877F2]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#1877F2] transition-colors group-hover:bg-[#1877F2] group-hover:text-white">
                            <MessageCircle className="h-4 w-4" />
                        </div>
                        WhatsApp
                    </a>
                    <a href="https://t.me/Verifiedbmbuy" className="group flex items-center gap-3 transition-colors hover:text-[#1877F2]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#1877F2] transition-colors group-hover:bg-[#1877F2] group-hover:text-white">
                            <Send className="h-4 w-4" />
                        </div>
                        Telegram
                    </a>
                    <a href="mailto:info@verifiedbmbuy.com" className="group flex items-center gap-3 transition-colors hover:text-[#1877F2]">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#1877F2] transition-colors group-hover:bg-[#1877F2] group-hover:text-white">
                            <Mail className="h-4 w-4" />
                        </div>
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