"use client"

import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Construction, ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container relative z-10 px-4 md:px-6 py-16 text-center">
            <div className="mb-8 flex justify-center">
                <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#1877F2] to-cyan-400 opacity-30 blur-lg"></div>
                    <div className="relative rounded-full bg-white p-6 shadow-xl ring-1 ring-slate-900/5">
                        <Construction className="h-16 w-16 text-[#1877F2]" strokeWidth={1.5} />
                    </div>
                </div>
            </div>
          
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D1625] mb-4 tracking-tight">
                Coming Soon
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed">
                We're working hard to bring you this page. It's currently under construction and will be available shortly. Stay tuned for something amazing!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/">
                    <button className="inline-flex h-12 items-center justify-center rounded-xl bg-[#1877F2] px-8 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <Home className="mr-2 h-4 w-4" />
                        Back to Home
                    </button>
                </Link>
                <Link href="/shop">
                    <button className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-[#1877F2] hover:text-[#1877F2] focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2">
                        Visit Shop
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </Link>
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}