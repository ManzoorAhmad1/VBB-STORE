"use client"

import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Target, 
  Globe, 
  Zap, 
  DollarSign, 
  Lock, 
  BarChart3, 
  Layers, 
  Share2, 
  ShieldAlert 
} from 'lucide-react'

const SmartAdvertisersSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: 'Higher Trust Score',
      description: 'Verified BMs are far less likely to get flagged or banned — Meta treats them differently.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: 'Better Ad Results',
      description: 'Higher trust means your ads get delivered more often, at lower costs. Your ROI goes up.'
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'Run Multiple Ad Accounts',
      description: 'One verified BM lets you manage several ad accounts — great for testing or running client campaigns.'
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: 'Unlock Premium Tools',
      description: "Get access to Meta features that aren't available to unverified accounts."
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: 'Advertise Anywhere',
      description: 'No country restrictions. Run campaigns in any market you want.'
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: 'Faster Ad Approvals',
      description: "Meta reviews your ads quicker when they know you're a verified business."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: 'Higher Spend Limits',
      description: 'Verified accounts can spend significantly more per day — no more hitting ceilings.'
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: 'Better Security',
      description: 'Extra layers of protection keep your ad accounts and data safe from unauthorized access.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: 'Detailed Analytics',
      description: 'Access reporting tools that give you deeper insights into your campaign performance.'
    },
    {
      icon: <Layers className="h-6 w-6 text-white" />,
      title: 'Multiple Pixels',
      description: 'Set up and manage several pixels for more precise audience tracking and retargeting.'
    },
    {
      icon: <Share2 className="h-6 w-6 text-white" />,
      title: 'Easy Asset Sharing',
      description: 'Share pages, pixels, and ad accounts between agencies and clients without headaches.'
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-white" />,
      title: 'Fewer Restrictions',
      description: 'Verified accounts deal with far fewer random bans and limitations from Meta.'
    }
  ]

  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            Why Verified BM?
          </span>
          <h2 className="mb-6 text-3xl font-extrabold text-[#0D1625] sm:text-4xl md:text-5xl">
            Why Smart Advertisers Use Verified BMs
          </h2>
          <p className="text-lg text-slate-500">
            If you're serious about Meta ads, a verified BM isn't optional — it's the foundation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] shadow-sm">
                {benefit.icon}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-[#0D1625]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SmartAdvertisersSection
