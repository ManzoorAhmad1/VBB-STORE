"use client"

import { CheckCircle2 } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      title: 'Verified Facebook Business Manager Accounts',
      description: 'Get verified Business Manager accounts from Meta, ensuring your safety with real documentation and a 100% safety guarantee.'
    },
    {
      title: 'Reinstated Profiles',
      description: 'We can easily recover your restricted or disabled accounts. Our reinstated profiles are fully verified.'
    },
    {
      title: 'WhatsApp API',
      description: 'Connect with customers worldwide using WhatsApp Cloud API. Enjoy automated messages and high deliverability. Communication is secure and Meta-approved.'
    },
    {
      title: 'Dailon BM',
      description: 'Maximize your marketing with Dailon BM. Simplify your campaigns. Improve targeting. Cut down on ad rejections.'
    },
    {
      title: 'Facebook Ads Account For Advertising',
      description: "Start advertising now with verified Facebook Ads accounts. They're safe and trusted, making them perfect for quick campaign scaling. Get ready for immediate deployment!"
    }
  ]

  return (
    <section id="services" className="py-20 bg-[#F8F9FB] overflow-hidden">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          <div className="relative animate-fade-up">
            <span className="mb-4 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
              Verified Accounts
            </span>
            <h2 className="mb-6 text-4xl font-extrabold text-[#0D1625] sm:text-5xl leading-tight">
              What Service "Verified BM Buy" Is Offering.
            </h2>
            <p className="mb-6 text-lg text-slate-500 leading-relaxed">
              Based your success with a <strong>Verified Business Manager</strong> and <strong>WhatsApp API</strong>. Get a <strong>reinstated profile</strong> and <strong>Facebook Ads account</strong>. Use basic tools to take control of your ads. Launch powerful campaigns without limits. Don't miss out on improving your advertising strategy!
            </p>
            <p className="mb-8 text-lg text-slate-500 leading-relaxed">
              At Verified BM Buy, we prioritize trust and security. Our services are not just reliable; they are a guarantee. We are unwavering in our commitment to these values, ensuring you can rely on us for your business needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="h-12 rounded-xl bg-[#1877F2] px-8 text-base font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1">
                VIEW META TOOLS
              </button>
              <a href="https://wa.me/8801302669333" target="_blank" rel="noopener noreferrer">
                <button className="h-12 rounded-xl border-2 border-[#1877F2] bg-transparent px-8 text-base font-bold text-[#1877F2] transition-all hover:bg-blue-50">
                  WHATSAPP NOW
                </button>
              </a>
            </div>
          </div>

          <div className="relative space-y-8 animate-fade-left">
             <div className="absolute -inset-4 rounded-3xl bg-white/50 backdrop-blur-sm -z-10 border border-slate-100/50 shadow-2xl"></div>
             {services.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-[#1877F2] fill-blue-50" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0D1625] mb-2">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesSection
