"use client"

import { BadgeCheck, ShieldCheck, Layers, Globe, Gauge, Fingerprint } from 'lucide-react'

const KeyAdvantagesSection = () => {
  const advantages = [
    {
      icon: <BadgeCheck className="h-8 w-8 text-white" />,
      title: 'Genuine Verification',
      description: 'Every account is backed by real business documents. No fakes, no workarounds — just legitimate verification.'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: 'Built to Last',
      description: 'Verified BMs carry inherent trust with Meta, making them far more resistant to bans and restrictions.'
    },
    {
      icon: <Layers className="h-8 w-8 text-white" />,
      title: 'Multi-Account Setup',
      description: 'Run multiple ad accounts, pixels, and product catalogs all under one roof.'
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: 'No Geographic Limits',
      description: 'Advertise across all Meta platforms in any country without restrictions.'
    },
    {
      icon: <Gauge className="h-8 w-8 text-white" />,
      title: 'Higher Spend Limits',
      description: 'Verified accounts unlock spending levels that unverified accounts can only dream of.'
    },
    {
      icon: <Fingerprint className="h-8 w-8 text-white" />,
      title: 'Enterprise Security',
      description: 'Two-factor auth, admin controls, and business-grade security come standard.'
    }
  ]

  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            KEY ADVANTAGES
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            What Makes Verified BM Assets Different
          </h2>
          <p className="text-lg text-slate-500">
            Real advantages that directly impact your advertising performance and bottom line.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1877F2]">
                {advantage.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#0D1625]">
                {advantage.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyAdvantagesSection
