"use client"

import { MessageSquare, Bot, BarChart2, Lock, Smartphone, Globe } from 'lucide-react'

const WhatsAppBenefitsSection = () => {
  const benefits = [
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: 'Direct Customer Engagement',
      description: "The WhatsApp Business API connects you with customers instantly. It's the top messaging app, so your message gets through fast. There are no delays or spam filters to block communication."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-white" />,
      title: 'Higher Open & Response Rates',
      description: 'WhatsApp messages are powerful. They have a 98% open rate, which is much higher than email or SMS. This means customers are more likely to see your messages. Better visibility leads to better engagement and conversion.'
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: 'Verified & Secure Communication',
      description: "Using an official Meta-approved channel keeps your communications safe. It builds trust with your customers. Verified messaging also enhances your business's professionalism."
    },
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      title: 'Automate Business Messaging',
      description: 'Set up auto-replies and reminders. Engage with customers around the clock. This tool helps you never miss a chance to connect. Enhance customer satisfaction by providing timely responses and always keeping them informed.'
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: 'Share Multimedia & Documents',
      description: 'You can send different types of media in one message. Include images, videos, documents, and payment links. This helps share all the information clearly and speeds up customer decisions.'
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: 'Global Reach, Local Feel',
      description: 'Connect with customers around the globe. WhatsApp helps you reach them in their own language, making interactions more personal and easier to build trust and loyalty.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-[#0D1625] sm:text-4xl md:text-5xl">
            Importance of WhatsApp Business API. Why Your Business Needs It.
          </h2>
          <p className="text-lg text-slate-500">
            The WhatsApp Business API helps your business connect with customers easily. It secures communication and scales with your needs. With this tool, you can boost customer relationships. It also improves conversion rates. Direct and real-time chat are key for today's businesses. It supports 1,000+ unlimited messages daily. All chats are secure and encrypted.
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
