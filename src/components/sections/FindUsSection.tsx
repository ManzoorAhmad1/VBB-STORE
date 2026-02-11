"use client"

import { MapPin, MessageCircle, Clock, Mail } from 'lucide-react'

const FindUsSection = () => {
  const contacts = [
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: 'POSTAL ADDRESS',
      description: 'Madarganj, Pirganj, Rangpur, Bangladesh - 5470',
      link: '#',
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: 'CONTACT ON WHATSAPP',
      description: '+88 013 0266 9333',
      link: 'https://wa.me/8801302669333',
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: 'WORK HOURS',
      description: 'Saturday - Friday 6:00 - 23:00',
      link: '#',
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: 'EMAIL ADDRESS',
      description: 'info@verifiedbmbuy.com',
      link: 'mailto:info@verifiedbmbuy.com',
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            OUR LOCATION
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            How to find our <span className="text-[#1877F2]">Verified BM BUY</span> Store
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <a 
              key={index}
              href={contact.link}
              target={contact.link !== '#' ? "_blank" : undefined}
              rel={contact.link !== '#' ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center text-center gap-4 rounded-2xl border border-transparent bg-white p-6 transition-all hover:border-slate-100 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-500 shadow-sm group-hover:bg-green-600 transition-colors">
                {contact.icon}
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold text-[#0D1625] uppercase tracking-wide">
                  {contact.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium">
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