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
      badge: '14% Off',
      badgeType: 'discount',
      image: '/images/products/bm-verification.png',
      category: 'Verified BM',
      title: 'Facebook Business Manager Verification Services: Verify Your Own Meta profitable',
      description: 'Complete Business Manager Verification Process Included with real documentation. World over Trusty.',
      rating: 5.0,
      reviews: 17,
      originalPrice: 64.99,
      salePrice: 50,
      features: ['Instant Delivery', 'Verified Account', 'Unlimited Spend Cap'],
      whatsappLink: 'https://wa.me/8801302669333',
      telegramLink: 'https://t.me/Verifiedbmbuy'
    },
    {
      id: 2,
      image: '/images/products/bm-agency.png',
      category: 'Verified BM',
      title: 'Verified BM - 1 Agency Pack (30 Ad Accounts)',
      description: 'Fully verified Business Manager with 30 ad account slots. Massive capacity for large-scale advertising.',
      rating: 5.0,
      reviews: 52,
      salePrice: 1000,
      features: ['Instant Delivery', 'Verified Account', 'Unlimited Spend Cap'],
      whatsappLink: 'https://wa.me/8801302669333',
      telegramLink: 'https://t.me/Verifiedbmbuy'
    },
    {
      id: 3,
      badge: '14% Off',
      badgeType: 'discount',
      image: '/images/products/bm-1-account.png',
      category: 'Verified BM',
      title: 'Verified BM - 1 Ad Account',
      description: 'Fully verified Facebook Business Manager with 1 ad account slots. Massive capacity for large-scale advertising.',
      rating: 5.0,
      reviews: 27,
      originalPrice: 24.99,
      salePrice: 20,
      features: ['Instant Delivery', 'Verified Account', 'Unlimited Spend Cap'],
      whatsappLink: 'https://wa.me/8801302669333',
      telegramLink: 'https://t.me/Verifiedbmbuy'
    },
    {
      id: 4,
      badge: 'Best Sale',
      badgeType: 'bestsale',
      image: '/images/products/bm-3-accounts.png',
      category: 'Verified BM',
      title: 'Verified BM - 3 Ad Accounts',
      description: 'Fully verified Facebook Business Manager with 3 ad account slots. Massive capacity for large-scale advertising.',
      rating: 5.0,
      reviews: 23,
      originalPrice: 499.99,
      salePrice: 400,
      features: ['Instant Delivery', 'Verified Account', 'Unlimited Spend Cap'],
      whatsappLink: 'https://wa.me/8801302669333',
      telegramLink: 'https://t.me/Verifiedbmbuy'
    },
    {
      id: 5,
      badge: '14% Off',
      badgeType: 'discount',
      image: '/images/products/whatsapp-250.png',
      category: 'WhatsApp API',
      title: 'WhatsApp Business API 250',
      description: 'Ready-to-use WhatsApp Business API account with limit 250. Ideal for small and medium businesses.',
      rating: 5.0,
      reviews: 52,
      originalPrice: 89.99,
      salePrice: 70,
      features: ['Instant Delivery', 'Verified Account', 'Unlimited Spend Cap'],
      whatsappLink: 'https://wa.me/8801302669333',
      telegramLink: 'https://t.me/Verifiedbmbuy'
    },
    {
      id: 6,
      badge: 'Best Sale',
      badgeType: 'bestsale',
      image: '/images/products/whatsapp-2000.png',
      category: 'WhatsApp API',
      title: 'WhatsApp cloud API 2000 Limit',
      description: 'Enterprise WhatsApp Cloud API with 2000 daily message limit. Perfect for high-volume messaging.',
      rating: 5.0,
      reviews: 23,
      salePrice: 199,
      features: ['Instant Delivery', 'Verified Account', 'Unlimited Spend Cap'],
      whatsappLink: 'https://wa.me/8801302669333',
      telegramLink: 'https://t.me/Verifiedbmbuy'
    },
    {
      id: 7,
      badge: '14% Off',
      badgeType: 'discount',
      image: '/images/products/verified-ads.png',
      category: 'Facebook Ads',
      title: 'Verified Ads Account - with Verified BM',
      description: 'Verified Facebook Ads account with $250 daily spending limit. Ready for immediate campaign launch.',
      rating: 5.0,
      reviews: 27,
      originalPrice: 119.99,
      salePrice: 100,
      features: ['Instant Delivery', 'Verified Account', 'Unlimited Spend Cap'],
      whatsappLink: 'https://wa.me/8801302669333',
      telegramLink: 'https://t.me/Verifiedbmbuy'
    },
    {
      id: 8,
      image: '/images/products/bm-3-accounts-2.png',
      category: 'Verified BM',
      title: 'Verified BM - 3 Ad Account',
      description: 'Perfect for agencies and marketers managing multiple campaigns with increased reach.',
      rating: 5.0,
      reviews: 52,
      originalPrice: 589.99,
      salePrice: 99,
      features: ['Instant Delivery', 'Verified Account', 'Unlimited Spend Cap'],
      whatsappLink: 'https://wa.me/8801302669333',
      telegramLink: 'https://t.me/Verifiedbmbuy'
    },
    {
      id: 9,
      image: '/images/products/reinstated-profile.png',
      category: 'Reinstated Profiles',
      title: 'Reinstated Facebook Profile',
      description: 'Recovered Facebook profile with clean record and full functionality.',
      rating: 5.0,
      reviews: 23,
      salePrice: 50,
      features: ['Instant Delivery', 'Verified Account', 'Unlimited Spend Cap'],
      whatsappLink: 'https://wa.me/8801302669333',
      telegramLink: 'https://t.me/Verifiedbmbuy'
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-90">
              Efficient & Safe
            </p>
            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
              Our Products
            </h1>
            <p className="mb-8 text-lg opacity-90">
              Premium Verified Meta accounts, WhatsApp API access, and more. All with instant delivery & 7-day replacement guarantee
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