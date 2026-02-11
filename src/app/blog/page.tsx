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
      image: '/image/blogImage1.webp',
      category: 'GUIDES',
      readTime: '8 min read',
      date: 'Jan 30, 2026',
      title: 'How to Use Meta Business Manager: A Complete Step-by-Step Guide',
      categoryLabel: 'GUIDES',
      excerpt: 'Master the Meta Business Manager with our comprehensive guide covering everything from setup to advanced asset management.',
      slug: 'how-to-use-meta-business-manager'
    },
    {
      id: 2,
      image: '/image/blogImage2.webp',
      category: 'VERIFIED BM',
      readTime: '6 min read',
      date: 'Dec 10, 2025',
      title: 'How to Verify Facebook Business Manager Account? Step by Step',
      categoryLabel: 'VERIFIED BM',
      excerpt: 'Struggling with verification? Follow our updated 2025 process to get your Business Manager verified quickly and reliably.',
      slug: 'how-to-verify-facebook-business-manager'
    },
    {
      id: 3,
      image: '/image/blogImage3.webp',
      category: 'VERIFIED BM',
      readTime: '5 min read',
      date: 'Dec 03, 2025',
      title: 'What Is a Verified Business Manager and Why Do Advertisers Need It?',
      categoryLabel: 'VERIFIED BM',
      excerpt: 'Understand the crucial benefits of using a verified BM for high-spend campaigns and avoiding restrictions.',
      slug: 'what-is-verified-business-manager'
    },
    {
      id: 4,
      image: '/image/blogImage4.webp',
      category: 'VERIFIED BM',
      readTime: '4 min read',
      date: 'May 23, 2025',
      title: 'Verified Facebook Business Manager: Build Trust, Boost Performance',
      categoryLabel: 'VERIFIED BM',
      excerpt: 'How verified accounts improve ad performance, lower CPMs, and build trust with the platform.',
      slug: 'verified-facebook-business-manager-benefits'
    },
    {
      id: 5,
      image: '/image/blogImage5.webp',
      category: 'GUIDES',
      readTime: '7 min read',
      date: 'May 02, 2025',
      title: 'How to Buy Verified Facebook Business Manager Accounts Safely in 2025',
      categoryLabel: 'GUIDES',
      excerpt: 'Avoid scams and low-quality accounts by learning the safe ways to purchase verified assets.',
      slug: 'how-to-buy-verified-bm-safely-2025'
    },
    {
      id: 6,
      image: '/image/blogImage6.webp',
      category: 'TIPS & GUIDES',
      readTime: '6 min read',
      date: 'Sep 22, 2025',
      title: 'Top 5 Mistakes New Buyers Make When Purchasing Meta Assets',
      categoryLabel: 'TIPS & GUIDES',
      excerpt: 'Don\'t lose your money. Learn the common pitfalls new buyers face and how to avoid them effortlessly.',
      slug: 'top-5-mistakes-buying-meta-assets'
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