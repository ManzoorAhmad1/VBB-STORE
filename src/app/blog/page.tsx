"use client"

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BlogCard from '@/components/blog/BlogCard'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Verified BM',
    'WhatsApp API',
    'Tips & Guides',
    'Guides'
  ]

  const blogPosts = [
    {
      id: 1,
      category: 'VERIFIED BM',
      readTime: '5 min read',
      date: 'Dec 15, 2025',
      title: 'What is a Verified Business Manager and Why You Need One in 2026',
      categoryLabel: 'VERIFIED BM',
      excerpt: 'Learn what a verified Facebook Business Manager is, how verification works, and why it\'s essential for serious advertisers.',
      slug: 'verified-business-manager-guide-2026'
    },
    {
      id: 2,
      category: 'WHATSAPP API',
      readTime: '7 min read',
      date: 'Dec 18, 2025',
      title: 'Complete Guide to WhatsApp Business API: Setup, Benefits & Best Practices',
      categoryLabel: 'WHATSAPP API',
      excerpt: 'Everything you need to know about WhatsApp Business API.',
      slug: 'whatsapp-business-api-complete-guide'
    },
    {
      id: 3,
      category: 'TIPS & GUIDES',
      readTime: '6 min read',
      date: 'Dec 21, 2025',
      title: 'How to Avoid Facebook Business Manager Bans: Expert Tips for 2026',
      categoryLabel: 'TIPS & GUIDES',
      excerpt: 'Protect your advertising investment with these proven strategies.',
      slug: 'avoid-facebook-business-manager-bans'
    },
    {
      id: 4,
      category: 'VERIFIED BM',
      readTime: '4 min read',
      date: 'Dec 14, 2025',
      title: 'Business Manager vs Personal Ad Account: Which Should You Use?',
      categoryLabel: 'VERIFIED BM',
      excerpt: 'A detailed comparison between running ads from a personal account versus a Business Manager.',
      slug: 'business-manager-vs-personal-account'
    },
    {
      id: 5,
      category: 'GUIDES',
      readTime: '4 min read',
      date: 'Jan 10, 2026',
      title: 'Why Cryptocurrency Is the Preferred Payment for Digital Account Purchases',
      categoryLabel: 'GUIDES',
      excerpt: 'Discover why crypto payments have become the standard for buying digital ad accounts.',
      slug: 'cryptocurrency-payment-guide'
    },
    {
      id: 6,
      category: 'TIPS & GUIDES',
      readTime: '9 min read',
      date: 'Jan 5, 2026',
      title: 'Scaling Meta Ads in 2026: Strategies That Actually Work',
      categoryLabel: 'TIPS & GUIDES',
      excerpt: 'Proven scaling strategies for Meta advertising in 2026.',
      slug: 'scaling-meta-ads-2026'
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory === 'All') return true
    return post.category === selectedCategory.toUpperCase()
  })

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1625] via-[#1a2942] to-[#0D1625] py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">
              OUR BLOG
            </p>
            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
              Insights & Guides
            </h1>
            <p className="text-lg text-slate-300">
              Expert tips, industry insights, and guides on Meta advertising, verified Business Managers, and WhatsApp API.
            </p>
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

      {/* Blog Grid */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-slate-500">
                No blog posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage