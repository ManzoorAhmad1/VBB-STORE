"use client"

import { ShieldCheck, Headphones, Zap, RefreshCcw } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      title: 'BEST QUALITY',
      description: 'Many years on the market'
    },
    {
      icon: <Headphones className="h-6 w-6 text-blue-600" />,
      title: '24/7 SUPPORT',
      description: 'If you have any questions'
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: 'INSTANT DELIVERY',
      description: 'Place an order and contact us'
    },
    {
      icon: <RefreshCcw className="h-6 w-6 text-blue-600" />,
      title: '7 DAYS REPLACEMENT',
      description: 'Replacement guarantees for 7days'
    }
  ]

  return (
    <section className="py-8 bg-[#F8FAFC]">
      <div className="container px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {features.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                {stat.icon}
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1 uppercase sm:text-base">{stat.title}</h4>
              <p className="text-xs text-slate-500 font-medium">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
