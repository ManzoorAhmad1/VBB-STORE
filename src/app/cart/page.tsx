"use client"

import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ShoppingCart } from 'lucide-react'

const CartPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-white">
        <div className="container px-4 md:px-6 py-16 flex flex-col items-center text-center">
            <div className="mb-6 text-slate-700">
                <ShoppingCart className="h-24 w-24 opacity-80" strokeWidth={1.5} />
            </div>
          
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
                Your cart is empty
            </h1>
            
            <p className="text-slate-500 mb-8 max-w-md">
                Browse our products and add items to your cart.
            </p>
            
            <Link href="/shop">
                <button className="inline-flex items-center justify-center rounded-lg bg-[#337AB7] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#286090] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Browse Products
                </button>
            </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default CartPage