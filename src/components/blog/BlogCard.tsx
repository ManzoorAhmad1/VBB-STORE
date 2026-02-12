"use client"

import { Clock, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  post: {
    id: number
    image?: string
    category: string
    readTime: string
    date: string
    title: string
    categoryLabel: string
    excerpt: string
    slug: string
  }
}

const BlogCard = ({ post }: BlogCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'VERIFIED BM':
        return 'text-blue-600 bg-blue-50'
      case 'WHATSAPP API':
        return 'text-blue-600 bg-blue-50'
      case 'TIPS & GUIDES':
        return 'text-blue-600 bg-blue-50'
      case 'GUIDES':
        return 'text-blue-600 bg-blue-50'
      default:
        return 'text-blue-600 bg-blue-50'
    }
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg">
        {/* Featured Image */}
        <div className="relative aspect-video bg-white overflow-hidden">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                {post.category}
                </span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{post.date}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-3 text-lg font-bold leading-snug text-[#0D1625] transition-colors group-hover:text-[#1877F2]">
            {post.title}
          </h3>

          {/* Category Badge */}
          <div className="mb-3">
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${getCategoryColor(post.categoryLabel)}`}>
              {post.categoryLabel}
            </span>
          </div>

          {/* Excerpt */}
          <p className="mb-4 text-sm leading-relaxed text-slate-500">
            {post.excerpt}
          </p>

          {/* Read More Link */}
          <div className="flex items-center gap-2 text-sm font-bold text-[#1877F2] transition-all group-hover:gap-3">
            <span>Read More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard