"use client"

import { MessageSquare, Bot, BarChart2, Lock, Smartphone, Globe } from 'lucide-react'

const WhatsAppBenefitsSection = () => {
  const benefits = [
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: 'Bulk Messaging',
      description: 'Send thousands of messages, order updates, and promos — all from one dashboard.'
    },
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      title: 'Chatbot Ready',
      description: 'Hook up AI chatbots to handle customer questions while you sleep.'
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-white" />,
      title: 'Track Everything',
      description: 'See who opened your messages, who replied, and how your campaigns perform.'
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: 'Fully Encrypted',
      description: "WhatsApp's end-to-end encryption keeps every business conversation private."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: 'Use Multiple Devices',
      description: 'Your whole team can manage conversations from different devices at the same time.'
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: 'Reach 2B+ Users',
      description: 'WhatsApp is used in 180+ countries. Your customers are already there.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            WHATSAPP API
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            Why Businesses Need WhatsApp API
          </h2>
          <p className="text-lg text-slate-500">
            Your customers are on WhatsApp. Meet them where they already are.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#25D366] shadow-md shadow-green-100">
                {benefit.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0D1625]">
                {benefit.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatsAppBenefitsSection
