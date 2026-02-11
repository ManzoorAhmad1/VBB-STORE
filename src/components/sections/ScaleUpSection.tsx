"use client"

import { TrendingUp, BarChart, Users, Rocket } from 'lucide-react'
import Link from 'next/link'

const ScaleUpSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: '10x Scaling',
      description: 'Multiply your ad budget capacity'
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: 'Lower CPMs',
      description: 'Better delivery with higher trust'
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'Multi-Client',
      description: 'Manage multiple brands at once'
    },
    {
      icon: <Rocket className="h-6 w-6 text-white" />,
      title: 'No Spend Cap',
      description: 'Remove daily spending limits'
    }
  ]

  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
              SCALE UP
            </span>
            <h2 className="mb-6 text-4xl font-extrabold text-[#0D1625] sm:text-5xl leading-tight">
              Ready to Spend More on Ads? You'll Need a Verified BM.
            </h2>
            <div className="space-y-6 text-lg text-slate-500 mb-8">
              <p>
                A verified Business Manager isn't just a status symbol — it's what lets you actually scale.
                Higher trust scores mean higher spend limits, more ad accounts, and access to features
                that unverified accounts simply don't get.
              </p>
              <p>
                Whether you're an agency juggling dozens of clients or a solo media buyer pushing for
                better ROI, a verified BM removes the ceiling on your growth.
              </p>
            </div>
            <Link href="#products">
              <button className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0F5abd] px-8 text-base font-bold text-white shadow-lg shadow-blue-200 transition-colors hover:bg-blue-700">
                <Rocket className="mr-2 h-5 w-5" />
                Browse Products
              </button>
            </Link>
          </div>

          {/* Right Content - Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2]">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0D1625]">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScaleUpSection
