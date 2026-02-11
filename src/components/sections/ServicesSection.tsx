"use client"

import { ShieldCheck, MessageSquare, BarChart3, UserCheck, Sparkles, Package, Settings, Users } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: 'Verified Business Managers',
      description: 'BMs with real documentation and top trust scores — ready for serious advertising.'
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: 'WhatsApp Business API',
      description: 'Enterprise WABA accounts set up for chatbots, bulk messaging, and customer support.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      title: 'Facebook Ads Accounts',
      description: 'Ad accounts with different spending limits so you can start running campaigns right away.'
    },
    {
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: 'Reinstated Profiles',
      description: 'Recovered Facebook profiles with clean records and full functionality.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: 'TikTok & Google Ads',
      description: 'Ready-to-use ad accounts for TikTok and Google. Start running campaigns on day one.'
    },
    {
      icon: <Package className="h-6 w-6 text-white" />,
      title: 'Bulk Orders',
      description: 'Need 10, 50, or 100 accounts? We offer volume pricing for agencies and resellers.'
    },
    {
      icon: <Settings className="h-6 w-6 text-white" />,
      title: 'Custom Setups',
      description: "We'll configure accounts to match your exact requirements — just tell us what you need."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'Dedicated Account Manager',
      description: 'Big orders get a personal point of contact for smooth onboarding and ongoing support.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-[#F8F9FB]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            OUR SERVICES
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            What We Offer
          </h2>
          <p className="text-lg text-slate-500">
            Everything you need to run Meta ads at scale — all from one place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg ${
                index === 0 ? 'border-blue-100 shadow-md ring-1 ring-blue-50' : ''
              }`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1877F2] shadow-sm group-hover:bg-blue-700 transition-colors">
                {service.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#0D1625]">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
