"use client"

import { Globe, MessageCircle, Send, Mail } from 'lucide-react'

const FindUsSection = () => {
  const contacts = [
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: 'Online Store',
      description: 'vbbstore.com – Shop 24/7 from anywhere in the world',
      link: 'https://vbbstore.com',
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: 'WhatsApp',
      description: 'Chat with us anytime for instant support',
      link: 'https://wa.me/8801302669333',
    },
    {
      icon: <Send className="h-6 w-6 text-white" />,
      title: 'Telegram',
      description: '@vbbstore – Message us on Telegram',
      link: 'https://t.me/Verifiedbmbuy',
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: 'Email',
      description: 'support@vbbstore.com',
      link: 'mailto:support@vbbstore.com',
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            FIND US
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            How to Find Our Location
          </h2>
          <p className="text-lg text-slate-500">
            VBB STORE operates as a global digital business. Reach us through any of the channels below — we're available 24/7.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((contact, index) => (
            <a 
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-100 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] shadow-sm group-hover:bg-blue-700 transition-colors">
                {contact.icon}
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-[#0D1625]">
                  {contact.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {contact.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FindUsSection