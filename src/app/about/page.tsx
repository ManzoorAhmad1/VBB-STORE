"use client"

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Shield, Target, TrendingUp, Users, Award, Zap, Globe, CheckCircle, MessageCircle, Clock, Star, ChevronRight, Code, Headphones } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { value: '2019', label: 'FOUNDING YEAR' },
    { value: '50000', label: 'HAPPY COSTUMERS' },
    { value: '1900', label: 'COMPANY WORK WITH US' },
    { value: '2', label: 'OFFICES' },
    { value: '7', label: 'TEAM MEMBERS' },
    { value: '3000', label: 'PROJECTS COMPLETED' }
  ]

  const milestones = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'First Contact',
      description: '2020 - Started selling verified accounts to solve a real problem we faced ourselves.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Team Expansion',
      description: 'Grew from 2 founders to a team of 15+ dedicated support agents worldwide.'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Reach',
      description: 'Expanded to serve customers in 50+ countries with 24/7 multilingual support.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Hit 10,000',
      description: 'Reached 10,000+ satisfied customers and became industry leaders.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Full Catalog',
      description: 'Launched complete product line: BMs, WhatsApp API, TikTok, Google Ads.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Market Leader',
      description: 'Recognized as the most trusted provider of verified Meta accounts globally.'
    }
  ]

  const offerings = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Verified Facebook Business Managers',
      description: 'Reinstated and verified Business Managers with strong footprints.'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Official WhatsApp Business API',
      description: 'Complete onboarding for official WhatsApp API accounts to boost your customer engagement.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'High-Limit Ad Accounts',
      description: 'Specialized accounts with "High Limit" spending capabilities for aggressive scaling.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Aged & Active Profiles',
      description: 'High quality, warmed up profiles to reduce the risk of immediate flagging or checkpoints.'
    }
  ]

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Trust & Security',
      description: 'Every account is verified with genuine documentation. No shortcuts, no fakes.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Speed & Efficiency',
      description: 'Instant delivery after payment. Most orders processed within minutes.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Customer First',
      description: '24/7 support on WhatsApp, Telegram, and email. Real humans, not bots.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Guarantee',
      description: '7-day replacement guarantee. If it doesn\'t work, we replace it free.'
    }
  ]

  const process = [
    {
      number: '1',
      title: 'Browse Products',
      description: 'Check our catalog and pick what you need.'
    },
    {
      number: '2',
      title: 'Contact Us',
      description: 'Reach out via WhatsApp, Telegram, or email with your order.'
    },
    {
      number: '3',
      title: 'Make Payment',
      description: 'Pay securely via crypto or bank transfer.'
    },
    {
      number: '4',
      title: 'Get Delivered',
      description: 'Receive your account credentials within minutes.'
    }
  ]

  const chooseReasons = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Real Documents Verification',
      description: 'We verify every account with genuine documentation to ensure the highest quality and safety for your business.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Instant Delivery',
      description: 'Get your assets delivered immediately after payment. No waiting times, start scaling your campaigns right away.'
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: '24/7 customer support',
      description: 'Our dedicated support team is available round the clock to assist you with any issues or queries you might have.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Low Ban Risk',
      description: 'Our accounts are warmed up and verified to minimize the risk of restrictions, giving you stable ad performance.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Zero Scams Promise',
      description: 'We pride ourselves on transparency and legitimacy. You get exactly what you pay for, with no hidden surprises.'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'API Application Ready',
      description: 'Accounts come ready for API integrations, making it easier for developers and agencies to automate workflows.'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Legitimate Verification',
      description: 'We use official verification processes to ensure your Business Managers and Ad Accounts are 100% legitimate.'
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Genuine Product',
      description: 'We sell only authentic, high-quality assets effectively sourced and managed to provide the best value.'
    }
  ]

  const team = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Support Team',
      description: '15+ agents available 24/7 across multiple time zones to assist you instantly.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Verification Experts',
      description: 'Dedicated team handling account verification and quality control processes.'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Technical Team',
      description: 'Specialists in WhatsApp API, Meta Business Suite, and ad platform integration.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Account Managers',
      description: 'Personal points of contact for bulk orders and agency partnerships.'
    }
  ]

  const testimonials = [
    {
      rating: 5,
      text: 'Best service I\'ve used for verified BMs. Fast delivery, great support, and the accounts actually work long-term.',
      author: 'James K.',
      role: 'Media Buyer'
    },
    {
      rating: 5,
      text: 'We buy in bulk for our agency. VBB Store has never let us down. Reliable, professional, and always available.',
      author: 'Sarah M.',
      role: 'Agency Owner'
    },
    {
      rating: 5,
      text: 'Tried 3 other providers before finding VBB Store. Wish I had started here. Real verification, real support.',
      author: 'Ahmed R.',
      role: 'E-commerce Manager'
    },
    {
      rating: 5,
      text: 'The WhatsApp API account works perfectly. Set it up in minutes and scaled our customer support instantly.',
      author: 'Lisa T.',
      role: 'Operations Director'
    },
    {
      rating: 5,
      text: 'Got a verified BM with 10 ad accounts. Been running campaigns for 3 months with zero issues. Highly recommend.',
      author: 'Carlos P.',
      role: 'Performance Marketer'
    },
    {
      rating: 5,
      text: 'Support team is incredible. Had a question at 2 AM and got a response in 5 minutes. That\'s customer service.',
      author: 'Nina L.',
      role: 'Social Media Manager'
    }
  ]

  const faqs = [
    { 
      question: 'How long does delivery take?',
      answer: 'It is instant. You will get your account details via email right after you pay. In rare cases we take maximum an hour.' 
    },
    { 
      question: 'Are the accounts really verified?',
      answer: 'Yes, verified BMs are fully verified with documents.' 
    },
    { 
      question: 'What if the account does not work?',
      answer: 'We offer replacement if there are issues upon login.' 
    },
    { 
      question: 'Can I spend a lot of money on ads right away?',
      answer: 'High-limit accounts allow for significant spend immediately.' 
    },
    { 
      question: 'Is it safe to use these accounts?',
      answer: 'Yes, if you follow our safety guides and use proxies.' 
    },
    { 
      question: 'How do I get help if I have a problem?',
      answer: 'Contact our support team via the contact details provided.' 
    },
    { 
      question: 'What payment methods do you accept?',
      answer: 'At this time we share only accepted Crypto Payment.' 
    },
    { 
      question: 'Do I need a VPN or Proxy to stay safe?',
      answer: 'Yes, a high-quality residential proxy is recommended.' 
    },
    { 
      question: 'Can I change the login info to my own?',
      answer: 'Yes, you can change the credentials after the warm-up period.' 
    },
    { 
      question: 'What happens if the account gets restricted?',
      answer: 'If it happens due to the account quality, we replace it.' 
    },
    { 
      question: 'Do these accounts come with 2FA?',
      answer: 'Yes, accounts are secured with 2FA.' 
    }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1877F2] to-[#0D5CBD] py-20 text-white">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl md:text-6xl">
              About Verified BM Buy Store – Your Trusted Meta Partner
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Verified BM Buy Store is a globally recognized digital commerce platform that delivers trusted, high-quality Meta solutions. Our core specialization lies in selling Verified Facebook Business Manager (BM) accounts, WhatsApp Business API (WABA) accounts, and an ecosystem of Meta-integrated services designed to empower digital marketers, advertising agencies, and enterprise businesses.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/shop">
                <button className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#1877F2] shadow-lg transition-all hover:shadow-xl">
                  Browse Products
                </button>
              </a>
              <a href="/contact">
                <button className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-all hover:bg-white hover:text-[#1877F2]">
                  Talk to Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-slate-100 bg-white py-12">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-extrabold text-[#1877F2]">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
                OUR STORY
              </p>
              <h2 className="mb-6 text-3xl font-extrabold text-[#0D1625]">
                Why Choose Verified BM Buy?
              </h2>
              <div className="space-y-4 text-slate-500">
                <p>
                  Running ads today is hard. Most businesses face the same problems:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Facebook accounts get restricted.</li>
                    <li>Ad accounts get banned for no reason.</li>
                    <li>Verification takes too long.</li>
                    <li>Setting up WhatsApp APIs is confusing.</li>
                </ul>
                <p>
                  We make it easy. Verified BM Buy gives you accounts that are already verified and ready to use. Our accounts are safe, secure, and delivered instantly.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Ready to Use: No waiting. Start your ads immediately.</li>
                    <li>Fully Verified: We handle the paperwork so you don't have to.</li>
                    <li>Stay Safe: Our accounts are built to last and follow the rules.</li>
                    <li>Expert Support: We help you every step of the way.</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="rounded-3xl border-4 border-[#1877F2] bg-white p-8 text-center shadow-xl">
                <div className="mb-4">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#1877F2] text-3xl font-extrabold text-white">
                    VBB
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-extrabold text-[#0D1625]">
                  VBB STORE
                </h3>
                <p className="mb-4 text-sm text-slate-500">
                  Verified Business Manager Provider
                </p>
                <div className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>Trusted Since 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1877F2] text-white">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-extrabold text-[#0D1625]">
                Our Mission
              </h3>
              <p className="text-slate-500">
                To provide advertisers worldwide with instant access to verified Meta accounts — eliminating the barriers that prevent businesses from scaling their advertising efforts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50 to-white p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-600 text-white">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-extrabold text-[#0D1625]">
                Our Vision
              </h3>
              <p className="text-slate-500">
                To become the global standard for verified digital advertising accounts — trusted by agencies, media buyers, and businesses in every country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              JOURNEY
            </p>
            <h2 className="text-3xl font-extrabold text-[#0D1625]">
              Key Milestones
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((milestone, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1877F2] text-white">
                  {milestone.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0D1625]">
                  {milestone.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              SERVICES
            </p>
            <h2 className="text-3xl font-extrabold text-[#0D1625]">
              What We Offer
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {offerings.map((offer, index) => (
              <div key={index} className="rounded-xl border border-slate-100 bg-slate-50 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1877F2] text-white">
                  {offer.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0D1625]">
                  {offer.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/shop">
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-blue-700">
                Browse All Products
                <ChevronRight className="h-5 w-5" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              VALUES
            </p>
            <h2 className="text-3xl font-extrabold text-[#0D1625]">
              What Drives Us Every Day
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[#1877F2]">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0D1625]">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              PROCESS
            </p>
            <h2 className="text-3xl font-extrabold text-[#0D1625]">
              How It Works — Simple as 1-2-3-4
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1877F2] text-2xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0D1625]">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              WHY US
            </p>
            <h2 className="text-3xl font-extrabold text-[#0D1625]">
              Why 10,000+ Customers Choose VBB STORE
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {chooseReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1877F2]">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#0D1625]">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              TEAM
            </p>
            <h2 className="text-3xl font-extrabold text-[#0D1625]">
              The People Behind VBB STORE
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="rounded-xl border border-slate-100 bg-slate-50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1877F2] text-white">
                  {member.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0D1625]">
                  {member.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              REVIEWS
            </p>
            <h2 className="text-3xl font-extrabold text-[#0D1625]">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-slate-600">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-[#0D1625]">{testimonial.author}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              FAQ
            </p>
            <h2 className="text-3xl font-extrabold text-[#0D1625]">
              Common Questions About VBB STORE
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1877F2]">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                        <span className="text-sm font-bold text-[#0D1625] block mb-1">
                          {faq.question}
                        </span>
                        {faq.answer && (
                            <span className="text-xs text-slate-500 block">
                              {faq.answer}
                            </span>
                        )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#1877F2] to-[#0D5CBD] py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm md:p-12">
            <h2 className="mb-4 text-3xl font-extrabold text-white">
              Ready to Scale Your Advertising?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Join 10,000+ satisfied customers and get verified accounts delivered instantly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/shop">
                <button className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#1877F2] shadow-lg transition-all hover:shadow-xl">
                  Browse Products
                </button>
              </a>
              <a href="/contact">
                <button className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-all hover:bg-white hover:text-[#1877F2]">
                  Contact Us
                  <ChevronRight className="h-5 w-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage