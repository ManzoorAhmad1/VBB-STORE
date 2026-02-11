"use client"

import { Shield, Zap, Bookmark, TrendingUp, Lock, Award } from 'lucide-react'

const TopAdvertisersSection = () => {
  const items = [
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: 'Maximum Trust Score',
      description: 'Meta gives verified BMs the highest trust level. That means fewer bans, fewer headaches.',
      badge: '99.9% Maximum'
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: 'Scale from Day One',
      description: 'No warm-up period. Start running big campaigns immediately with higher spend limits.',
      badge: '10x Scale'
    },
    {
      icon: <Bookmark className="h-6 w-6 text-white" />,
      title: 'Premium Meta Tools',
      description: 'Access advanced APIs, analytics, and features that regular accounts can\'t touch.',
      badge: '50+ Premium'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: 'Better Ad Delivery',
      description: 'Meta\'s algorithm favors verified accounts. You get better placements, lower costs, higher ROAS.',
      badge: '3x Better'
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: 'Protected Assets',
      description: 'Enhanced security keeps your ad accounts, client data, and creative assets safe.',
      badge: '100% Protected'
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: 'Professional Credibility',
      description: 'Partners and clients take you seriously when you operate from a verified business identity.',
      badge: 'A+ Professional'
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration can be added here if needed */}
      <div className="container relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            TOP ADVERTISERS
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            Why the Best Media Buyers Use Verified BMs
          </h2>
          <p className="text-lg text-slate-500">
            A verified BM isn't a nice-to-have. For top advertisers, it's the competitive edge.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1877F2]">
                {item.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#0D1625]">
                {item.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopAdvertisersSection
