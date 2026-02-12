"use client"

import { ShieldCheck, Headphones, Zap, RefreshCcw } from 'lucide-react'

const FeaturesSection = () => {
  const stats = [
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

  const features = [
    {
      icon: <Headphones className="h-10 w-10 text-blue-600" />,
      title: "24/7 Support",
      boldText: "Talk to a Real Person",
      description: "Got a question? Our team is available around the clock. You'll speak with someone who actually knows Business Managers inside and out."
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Instant Delivery",
      boldText: "No Waiting Around",
      description: "Pay, contact us, and get your account credentials right away. No delays, no back-and-forth — just fast, secure delivery."
    },
    {
      icon: <RefreshCcw className="h-10 w-10 text-blue-600" />,
      title: "7 Days Replacement",
      boldText: "We've Got Your Back",
      description: "If something goes wrong with your account in the first 7 days (and it's not your doing), we'll replace it free of charge. Simple as that."
    }
  ]

  return (
    <>
      {/* Stats Section - Original Design */}
      <section className="py-8 bg-[#F8FAFC] pt-5">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  {stat.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1 uppercase sm:text-base">
                  {stat.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section - Screenshot Design */}
      <section className=" bg-white">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {feature.title}
                </h3>
                
                <h4 className="text-base font-semibold text-slate-800 mb-3">
                  {feature.boldText}
                </h4>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturesSection