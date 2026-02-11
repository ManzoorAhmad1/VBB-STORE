"use client"

import { useState } from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'

const FAQSection = () => {
  const [openSection, setOpenSection] = useState<string | null>('left-3')

  const leftFaqs = [
    {
      question: 'What exactly is a Verified Business Manager?',
      answer: 'A Verified Business Manager (BM) is a Facebook ad account that has officially passed Meta\'s business verification process. This gives you higher spending limits, better trust scores, and less chance of getting banned compared to regular accounts.'
    },
    {
      question: 'How does the verification work?',
      answer: 'We use legitimate business documents (LLC, LTD, etc.) to verify the Business Manager with Meta. Once verified, the green "Verified" badge appears in the Security Center, confirming its authenticity.'
    },
    {
      question: "What's the WhatsApp Business API?",
      answer: 'The WhatsApp Business API is an enterprise solution allowed by Meta for businesses to send bulk messages, use chatbots, and have multiple agents. Our API accounts come pre-verified and ready for high-volume messaging.'
    },
    {
      question: 'How fast will I get my account?',
      answer: 'Instantly! Or within 10-30 minutes maximum during business hours. Once your payment is confirmed, our automated system or support team delivers the credentials to your email or WhatsApp immediately.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept USDT (Tether), Bitcoin, and other major cryptocurrencies for maximum privacy and speed. We also accept bank transfers for bulk orders.'
    },
    {
      question: 'What if my account stops working?',
      answer: 'We offer a 7-day replacement guarantee. If your account gets restricted or disabled due to no fault of your own within the warranty period, we will replace it for free instantly.'
    },
    {
      question: 'Can I use a verified BM for any niche?',
      answer: 'Yes, verified BMs work for all compliant niches including E-commerce, Dropshipping, Lead Gen, and Affiliate Marketing. They are stronger and last longer than regular accounts.'
    },
    {
      question: 'How many ad accounts can I run?',
      answer: 'Verified BMs typically start with a limit of 5-10 ad accounts, but this can increase up to 2500+ as you spend more. Unverified BMs are usually stuck with just 1 ad account.'
    },
    {
      question: 'Is buying a verified BM safe?',
      answer: 'Yes, it is safe as long as you follow our login guide. We provide a complete "How-To" guide on how to log in safely using anti-detect browsers to prevent any suspicious activity flags.'
    },
    {
      question: 'Do you offer bulk pricing?',
      answer: 'Absolutely. Many agencies buy from us in bulk (10+ accounts). Contact our support team on WhatsApp for special reseller rates.'
    }
  ]

  const rightFaqs = [
    {
      question: 'Do you sell TikTok and Google Ads accounts?',
      answer: 'Yes, we provide agency ad accounts for TikTok, Google, and Snapchat. Information for these is available upon request or in the specific product section of our store.'
    },
    {
      question: 'Can I get a reinstated Facebook profile?',
      answer: 'Yes, we sell "Reinstated" (Green Check) profiles. These are profiles that were restricted and then officially restored by Meta, making them extremely strong for running ads.'
    },
    {
      question: 'How do I reach support after buying?',
      answer: 'We have a dedicated support team available on WhatsApp and Telegram. You will receive the direct support contact link along with your order delivery.'
    },
    {
      question: 'What trust score do your BMs have?',
      answer: 'Our Verified BMs have the highest possible trust score because they are verified with real corporate documents. This ensures better CPMs and ad delivery stability.'
    },
    {
      question: 'Can I start running ads immediately?',
      answer: 'Yes. Once you log in and link your payment method, you can launch campaigns immediately. No need to "warm up" the BM for weeks like with unverified accounts.'
    },
    {
      question: 'Do your WhatsApp API accounts get the green badge?',
      answer: 'Our accounts are "Green Tick Ready". We help you submit the application for the Green Badge (Verified Business), but final approval depends on Meta\'s press coverage requirements for your brand.'
    },
    {
      question: 'What happens if my account gets restricted?',
      answer: 'If it happens within our warranty period, we replace it. If it happens later, we can help you appeal it. Our Verified BMs have a much higher success rate for appeals than regular ones.'
    },
    {
      question: 'Can I use the account from any country?',
      answer: 'Yes, our accounts are global. You can log in from any country. However, we recommend using a high-quality proxy matching the account region for the first login for extra safety.'
    },
    {
      question: 'Do accounts come with documentation?',
      answer: 'Yes, every Verified BM comes with the documents used for verification. This is crucial if you ever need to re-verify the identity with Meta in the future.'
    },
    {
      question: 'How long have you been doing this?',
      answer: 'We have been in the ad account business for over 5 years, serving thousands of media buyers, agencies, and e-commerce store owners worldwide.'
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
