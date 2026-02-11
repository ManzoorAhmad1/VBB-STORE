"use client"

import { ShieldCheck, Award, Clock, Truck, Headphones, Zap, RefreshCcw } from 'lucide-react'

const FeaturesSection = () => {
  const topStats = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
      value: '100%',
      label: 'Verified Accounts'
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      value: 'A+ Rated',
      label: 'Best Quality'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      value: '5+ Years',
      label: 'On Market'
    },
    {
      icon: <Truck className="h-6 w-6 text-blue-600" />,
      value: 'Instant',
      label: 'Delivery'
    }
  ]

  const bottomFeatures = [
    {
      icon: <Headphones className="h-8 w-8 text-white" />,
      title: '24/7 Support',
      subtitle: 'Talk to a Real Person',
      description: "Got a question? Our team is available around the clock. You'll speak with someone who actually knows Business Managers inside and out."
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Instant Delivery',
      subtitle: 'No Waiting Around',
      description: "Pay, contact us, and get your account credentials right away. No delays, no back-and-forth — just fast, secure delivery."
    },
    {
      icon: <RefreshCcw className="h-8 w-8 text-white" />,
      title: '7 Days Replacement',
      subtitle: "We've Got Your Back",
      description: "If something goes wrong with your account in the first 7 days (and it's not your doing), we'll replace it free of charge. Simple as that."
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-[#F8FAFC]">
      <div className="container px-4">
        {/* Top Stats Row */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-12">
          {topStats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                {stat.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">{stat.value}</h4>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom Features Row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
          {bottomFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-md h-full w-full"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-200">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-[#1877f2] font-semibold mb-4">{feature.subtitle}</p>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
