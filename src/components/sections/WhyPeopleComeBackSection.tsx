"use client"

import { Clock, FileText, Globe, Truck, ShieldCheck, HeartHandshake, DollarSign, Headphones, Lock, Award, UserCheck } from 'lucide-react'
import Link from 'next/link'

const WhyPeopleComeBackSection = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: '100% Ban-Free Accounts',
      description: "All our accounts include real documentation. This reduces risk and ensures we follow Meta's policies."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: 'Money-Back Guarantee',
      description: "We stand by every order. If we don't deliver as promised, you'll get your money back. Your investment is safe with us."
    },
    {
      icon: <Truck className="h-6 w-6 text-white" />,
      title: 'High Quality & Instant Delivery',
      description: 'We process orders quickly and most are delivered the same day. This allows you to launch your campaigns on time.'
    },
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: 'Dedicated Expert Support',
      description: 'Our customer success team is available 24/7. We can help with setup, integration, and any technical questions regarding your Meta tools.'
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: 'Global Reach, Local Expertise',
      description: "We help businesses around the globe. Our solutions grow with your campaigns. We also provide local support. It's tailored to your market and language."
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: 'Safe & Secure Transactions',
      description: 'Our platform uses encrypted communication and secure payment gateways. We prioritize client data confidentiality and provide transaction security at every step.'
    },
    {
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: 'Ownership Transfer',
      description: 'Every account comes with ownership documents. You get full support for an easy transfer. Everything you need to run your operation is included. There are no dependencies or hidden strings.'
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: 'Proven Track Record',
      description: 'Verified BM Buy has many satisfied clients, a strong record of delivering results, and is known as a leader in enterprise level extra marketing assets.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12">
           {/* Left Content */}
           <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
                Choose Verified BM Buy
              </span>
              <h2 className="mb-6 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
                Why Choose Verified BM Buy?
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                At <strong>Verified BM Buy</strong>, we focus on high-quality digital assets. Our goal is to help you thrive in today's advertising world. We offer <strong>Verified Business Managers</strong>, <strong>WhatsApp Business API</strong>, and <strong>Facebook Ads accounts</strong>. Advertisers around the world trust our solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <button className="h-12 rounded-xl bg-[#1877F2] px-8 text-base font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1">
                    VIEW MORE
                 </button>
                 <Link href="/shop">
                   <button className="h-12 rounded-xl border-2 border-[#1877F2] bg-transparent px-8 text-base font-bold text-[#1877F2] transition-all hover:bg-blue-50">
                      SHOP NOW
                   </button>
                 </Link>
              </div>
           </div>

           {/* Right Grid */}
           <div className="lg:col-span-8">
             <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EBF5FF] text-[#1877F2]">
                       {/* Clone icon and override classes to size/color if needed, or just wrap */}
                       <div className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-[#1877F2]">
                         {reason.icon}
                       </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#0D1625]">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default WhyPeopleComeBackSection
