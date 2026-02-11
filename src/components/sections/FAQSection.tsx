"use client"

import { useState } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'

const FAQSection = () => {
  const [openSection, setOpenSection] = useState<string | null>('left-3')

  const leftFaqs = [
    {
      question: 'What is Verified BM Buy Store?',
      answer: 'Verified BM Buy Store is a trusted online platform offering high-quality products with secure transactions and fast shipping.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept USDT (Tether), Bitcoin, and other major cryptocurrencies for maximum privacy and speed. We also accept bank transfers for bulk orders.'
    },
    {
      question: 'What types of Business Managers do you offer?',
      answer: 'We offer Verified Business Managers, WhatsApp Business API accounts, Facebook Ads accounts, Reinstated Profiles, and Agency Ad Accounts (TikTok, Google, etc.).'
    },
    {
      question: 'Are these Business Managers safe to use?',
      answer: 'Yes, they are safe. We provide a complete login guide using anti-detect browsers to ensure safety and prevent suspicious activity flags.'
    },
    {
      question: 'How do I purchase a Business Manager?',
      answer: "Simply choose the package you need, click 'Buy Now' or contact us on WhatsApp/Telegram. Once payment is confirmed, we deliver the credentials."
    },
    {
      question: 'What are the benefits of a verified BM?',
      answer: 'Benefits include higher trust scores, lower CPMs, faster ad approvals, ability to share pixels, and access to exclusive Meta features.'
    },
    {
      question: 'What is a "Verified BM"?',
      answer: "It's a Business Manager account that has been officially verified by the platform (e.g., Meta) to confirm the business's identity and legitimacy."
    }
  ]

  const rightFaqs = [
    {
      question: 'How long does it take to receive my BM after payment?',
      answer: 'Instantly! Or within 10-30 minutes maximum during business hours. Once your payment is confirmed, our automated system or support team delivers the credentials.'
    },
    {
      question: 'Can I get a replacement if my BM gets restricted?',
      answer: 'Yes, we offer a 7-day replacement guarantee. If your account gets restricted or disabled due to no fault of your own within the warranty period, we will replace it for free.'
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Absolutely. Many agencies buy from us in bulk. Contact our support team on WhatsApp for special reseller rates.'
    },
    {
      question: 'Do you provide after-sales support?',
      answer: 'Yes, we have a dedicated support team available 24/7 on WhatsApp and Telegram to help you with login, setup, and any issues.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact us via the WhatsApp button on our site, our Telegram handle @Verifiedbmbuy, or by email at info@verifiedbmbuy.com.'
    },
    {
      question: 'Why should I get my BM verified?',
      answer: 'Verifying your BM builds trust with Meta/Facebook, reduces ban risks, increases spending limits, and unlocks advanced tools like WhatsApp API.'
    },
    {
      question: 'How do I become a verified BM?',
      answer: 'Becoming verified requires submitting legal business documents to Meta. If you buy from us, the verification is already done for you.'
    }
  ]

  const toggleFAQ = (id: string) => {
    setOpenSection(openSection === id ? null : id)
  }

  const FAQItem = ({ item, id }: { item: any, id: string }) => (
    <div className="mb-4 overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:border-blue-200 hover:shadow-sm">
      <button
        onClick={() => toggleFAQ(id)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className={`text-sm font-bold md:text-base ${openSection === id ? 'text-[#1877F2]' : 'text-[#0D1625]'}`}>
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
            openSection === id ? 'rotate-180 text-[#1877F2]' : 'text-slate-400'
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openSection === id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-slate-100 p-5 pt-0 text-sm leading-relaxed text-slate-500">
          <div className="pt-4">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            FAQ
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-lg text-slate-500">
            Here's everything people usually ask before buying.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Left Column */}
          <div>
            {leftFaqs.map((faq, index) => (
              <FAQItem key={`left-${index}`} item={faq} id={`left-${index}`} />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightFaqs.map((faq, index) => (
              <FAQItem key={`right-${index}`} item={faq} id={`right-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
