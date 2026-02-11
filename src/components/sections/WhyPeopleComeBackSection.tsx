"use client"

import { Clock, FileText, Globe, Truck, ShieldCheck, HeartHandshake } from 'lucide-react'

const WhyPeopleComeBackSection = () => {
  const reasons = [
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: '5+ Years in Business',
      description: "We've been doing this for years. Our track record speaks for itself."
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: 'Real Documentation',
      description: 'Every account comes with genuine docs — no shortcuts, no fakes.'
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: 'Worldwide Support',
      description: "Doesn't matter where you are. We support customers across every time zone."
    },
    {
      icon: <Truck className="h-6 w-6 text-white" />,
      title: 'Same-Day Delivery',
      description: 'Once payment clears, you get your credentials within minutes. Not hours, not days.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: '7-Day Guarantee',
      description: "Account stopped working? We'll replace it free within 7 days. No questions."
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-white" />,
      title: 'Actual Human Support',
      description: "You'll talk to real people on WhatsApp, Telegram, or email. Not bots."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            WHY VBB STORE?
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            Why People Keep Coming Back
          </h2>
          <p className="text-lg text-slate-500">
            We're not the only ones selling verified BMs — but we're the ones people trust.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2] shadow-sm">
                {reason.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#0D1625]">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyPeopleComeBackSection
