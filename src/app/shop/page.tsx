"use client"

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/shop/ProductCard'
import { Search } from 'lucide-react'

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'All',
    'Verified BM',
    'WhatsApp API',
    'Facebook Ads',
    'TikTok Ads',
    'Google Ads',
    'Reinstated Profiles'
  ]

  const products = [
    {
      id: 1,
      image: '/images/card1.jpeg',
      category: 'Verified BM',
      title: 'BM Verification Service: Verify Facebook Business Manager',
      description: 'Professional service to verify your Facebook Business Manager (BM) with real documentation. Fast and reliable.',
      rating: 5.0,
      oldPrice: 99.00,
      price: 49.00,
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 2,
      image: '/images/card2.jpeg',
      category: 'Verified BM',
      title: 'Buy Ready Made Instagram Account – 2023| VERIFIED BM BUY-VBB',
      description: 'Aged and verified Instagram accounts ready for immediate use. Perfect for brand building.',
      rating: 5.0,
      price: 10.00,
      soldOut: true,
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 3,
      image: '/images/card3.jpeg',
      category: 'Reinstated Profiles',
      title: 'Buy reinstate Facebook account | Business use, Personal, or Running ads.',
      description: 'Restored Facebook profiles suitable for business use, personal activities, or running ads without restrictions.',
      rating: 5.0,
      price: '39.00 - 65.00',
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 4,
      image: '/images/4.jpeg',
      category: 'Verified BM',
      title: 'Buy Verified BM 10 | Real Documents Verified Facebook Business Manager',
      description: 'High-tier Verified Business Manager (BM 10) verified with authentic documents for stable ad scaling.',
      rating: 5.0,
      price: 300.00,
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 5,
      image: '/images/card5.jpeg',
      category: 'Verified BM',
      title: 'Buy Verified BM 3 | Verified Facebook Business Manager 3',
      description: 'Verified Business Manager level 3. A reliable asset for managing your Facebook ad campaigns.',
      rating: 5.0,
      oldPrice: 150.00,
      price: 99.00,
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 6,
      image: '/images/card6.jpeg',
      category: 'Verified BM',
      title: 'Buy Verified BM 5 | Verified Facebook Business Manager',
      description: 'Premium Verified BM 5 account. Ideal for high-spend advertisers needing stability.',
      rating: 5.0,
      price: 299.00,
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 7,
      image: '/images/card7.jpeg',
      category: 'Verified BM',
      title: 'Buy Verified BM with Verified Ads Account',
      description: 'Complete package: Verified BM + Verified Ads Account. Start advertising instantly without bans.',
      rating: 5.0,
      price: 99.00,
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 8,
      image: '/images/card8.jpeg',
      category: 'WhatsApp API',
      title: 'Buy WhatsApp Business API Limit 10000 With FB Verified BM – Verified Meta Business Messaging',
      description: 'Broadcast to 10k customers daily with this Verified WhatsApp Business API + BM bundle.',
      rating: 5.0,
      price: 600.00,
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 9,
      image: '/images/card9.jpeg',
      category: 'WhatsApp API',
      title: 'Buy WhatsApp Business API limit 2000 With FB Verified BM',
      description: 'Scale your messaging with 2000 daily limit WhatsApp Business API. Includes verified BM.',
      rating: 5.0,
      price: 199.00,
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 10,
      image: '/images/card1.jpeg',
      category: 'WhatsApp API',
      title: 'Buy WhatsApp Business API limit 250 With FB Verified BM',
      description: 'Starter WhatsApp Business API package with 250 daily limit. Verified BM included.',
      rating: 5.0,
      oldPrice: 80.00,
      price: 70.00,
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 11,
      image: '/images/card2.jpeg',
      category: 'TikTok Ads',
      title: 'Verified TikTok agency ad account buy-Verified & High-Limit TikTok Ads Account for Agencies',
      description: 'Agency-grade TikTok Ads account. High spending limits and verified status for serious marketers.',
      rating: 5.0,
      price: 99.00,
      whatsappLink: 'https://wa.me/8801302669333'
    },
    {
      id: 12,
      image: '/images/card3.jpeg',
      category: 'Verified BM',
      title: 'Buy Verified BM 1 | Verified Facebook Business Manager 1 for Stable Ads',
      description: 'Entry-level Verified BM 1. Stable foundation for your Facebook advertising campaigns.',
      rating: 5.0,
      price: 49.00,
      whatsappLink: 'https://wa.me/8801302669333'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1877F2] to-[#0D5CBD] py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
              Shop Verified BM buy-VBB
            </h1>
            <p className="mb-8 text-lg opacity-90">
              Buy ✅ Verified Business Manager (BM) Accounts, ✅WhatsApp Business API, ✅ Reinstate Profile, ✅ Facebook Ads Accounts (Fresh & Aged), and ✅ Other Meta Business Tools from shop Verified BM.
            </p>
            
            {/* Search Bar */}
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 w-full rounded-xl border-0 bg-white pl-12 pr-4 text-slate-900 shadow-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border-2 px-6 py-2 text-sm font-bold transition-all ${
                  selectedCategory === category
                    ? 'border-[#1877F2] bg-[#1877F2] text-white shadow-md'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-[#1877F2] hover:text-[#1877F2]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-slate-500">
                No products found matching your criteria.
              </p>
            </div>
          )}

          <div className="mt-12 text-center text-sm text-slate-500">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ShopPage