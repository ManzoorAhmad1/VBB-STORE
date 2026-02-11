"use client"

import { ShieldCheck, Globe, Clock, Award } from 'lucide-react'

const AboutSection = () => {
  const stats = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      value: '100%',
      label: 'Verified Accounts'
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      value: '50+',
      label: 'Countries Served'
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      value: '5+',
      label: 'Years Experience'
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      value: '10K+',
      label: 'Happy Customers'
    }
  ]

  return (
    <section id="about" className="py-20 bg-[#F8F9FB]">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
              ABOUT VBB STORE
            </span>
            <h2 className="mb-6 text-4xl font-extrabold text-[#0D1625] sm:text-5xl leading-tight">
              Your Trusted Partner in <span className="text-[#1877F2]">Meta Advertising</span>
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-slate-500">
              <p>
                VBB STORE started with a simple idea: advertisers need reliable, verified accounts without
                the hassle. We sell verified Facebook Business Managers, WhatsApp Business API accounts,
                Facebook Ads accounts, TikTok Ads, Google Ads, and reinstated profiles.
              </p>
              <p>
                Every account we sell comes with genuine documentation. We don't cut corners on
                verification — that's why our customers keep coming back.
              </p>
              <p>
                Over the past 5+ years, we've served more than 10,000 customers in 50+ countries.
                Whether you're a solo media buyer or an agency managing dozens of clients, we make it
                easy to get the accounts you need and start advertising right away.
              </p>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:shadow-md h-48"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2] shadow-sm">
                  {stat.icon}
                </div>
                <div className="mb-1 text-3xl font-extrabold text-[#0D1625]">
                  {stat.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
