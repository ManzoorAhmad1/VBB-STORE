"use client"

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { MessageCircle, Send, Mail, MessageSquare, Clock, Users, Star, Headphones, Shield, Zap, Globe, CheckCircle, ChevronRight, Phone, User, MapPin, CheckSquare, UserCog, CreditCard, UserCheck, Lock, TrendingUp } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const commonReasons = [
    { icon: <CheckSquare className="h-6 w-6" />, title: 'Buying a Verified BM', desc: 'Secure purchase of Verified Business Managers.' },
    { icon: <UserCog className="h-6 w-6" />, title: 'Account Setup', desc: 'Guidance on setting up your Business Manager correctly.' },
    { icon: <CreditCard className="h-6 w-6" />, title: 'Payment Queries', desc: 'Questions about billing, transactions, and methods.' },
    { icon: <Users className="h-6 w-6" />, title: 'General Inquiries', desc: 'Assistance with any other questions or concerns.' }
  ]

  const contactChannels = [
    {
      icon: <Phone className="h-6 w-6" />,
      name: 'Phone',
      badge: '',
      description: 'Call us directly',
      detail: '+880 130 266 9333',
      link: 'tel:+8801302669333'
    },
    {
      icon: <User className="h-6 w-6" />,
      name: 'Support',
      description: 'Support forum',
      detail: 'Available 24h',
      link: '#'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      name: 'WhatsApp',
      badge: 'FAST',
      description: 'Chat with us',
      detail: '+880 130 266 9333',
      link: 'https://wa.me/8801302669333'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      name: 'Address',
      description: 'Visit us',
      detail: 'Madergonj, Rangpur',
      link: '#'
    }
  ]

  const supportFeatures = [
    {
      icon: <Headphones className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Our team is always online — reach us anytime for instant help.'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Fast WhatsApp Responses',
      description: 'We prioritize quick communication through WhatsApp for your convenience.'
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: 'Dedicated Account Managers',
      description: 'Get personalized support to manage and scale your accounts effectively.'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Secure Transactions',
      description: 'Every transaction is encrypted and secure. We ensure complete privacy.'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Quick Resolution Guarantee',
      description: 'We guarantee fast resolutions to any issues you might encounter.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Step-by-Step Guidance',
      description: 'Detailed walkthroughs to help you set up and use your assets.'
    }
  ]

  const supportSteps = [
    {
      number: '1',
      title: 'Reach Out',
      description: 'Contact us via WhatsApp, Telegram, or the form above.'
    },
    {
      number: '2',
      title: 'Get Assisted',
      description: 'Our support team will help you find a solution within a solution.'
    },
    {
      number: '3',
      title: 'Issue Resolved',
      description: 'Your problem gets resolved, or your issue is fully resolved.'
    },
    {
      number: '4',
      title: 'Happy Customer',
      description: 'You leave satisfied, ready to scale your business worldwide.'
    }
  ]

  const faqs = [
    { question: 'How fast will I get a response?', answer: '' },
    { question: 'What if I have an issue with my order?', answer: '' },
    { question: 'Do you offer pre-purchase consultation?', answer: '' },
    { question: 'What payment methods do you accept?', answer: '' },
    { question: 'Can I get a refund?', answer: '' },
    { question: 'Do you provide setup assistance?', answer: '' }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              24/7 SUPPORT
            </p>
            <h1 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
              Get in Touch With Us
            </h1>
            <p className="mb-8 text-lg text-slate-500">
              Have questions about verified BM accounts, WhatsApp API, or need help with your order? Our support team is available around the clock to assist you.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/8801302669333" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-[#20BD5A]">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </button>
              </a>
              <a href="https://t.me/Verifiedbmbuy" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-3 font-bold text-slate-700 shadow-md transition-all hover:border-[#0088cc] hover:text-[#0088cc]">
                  <Send className="h-5 w-5" />
                  Message on Telegram
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-slate-100 bg-white py-12">
        <div className="container">
          <div className="text-center mb-8">
             <h2 className="text-2xl font-bold text-[#0D1625]">Common Reasons to Contact Us</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {commonReasons.map((reason, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-[#1877F2]">
                  {reason.icon}
                </div>
                <div className="mb-2 text-lg font-bold text-[#0D1625]">
                  {reason.title}
                </div>
                <div className="text-sm text-slate-500">{reason.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels & Form */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Contact Channels */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
                REACH US
              </p>
              <h2 className="mb-6 text-3xl font-extrabold text-[#0D1625]">
                Choose Your Preferred Channel
              </h2>
              <p className="mb-8 text-slate-500">
                We respond fastest on WhatsApp and Telegram — usually within minutes.
              </p>

              <div className="space-y-4">
                {contactChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-[#1877F2]">
                        {channel.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-[#0D1625]">{channel.name}</h3>
                          {channel.badge && (
                            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                              {channel.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500">{channel.description}</p>
                        <p className="text-sm font-medium text-slate-700">{channel.detail}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-[#1877F2]" />
                  </a>
                ))}
              </div>

              {/* Support Hours */}
              <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#1877F2]" />
                  <h3 className="font-bold text-[#0D1625]">Support Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">WhatsApp & Telegram:</span>
                    <span className="font-bold text-[#0D1625]">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Email Response:</span>
                    <span className="font-medium text-slate-700">Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Order Processing:</span>
                    <span className="font-medium text-slate-700">1-4 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-2xl font-bold text-[#0D1625]">
                  Send Us a Message
                </h3>
                <p className="mb-6 text-sm text-slate-500">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-[#0D1625]">
                        Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#1877F2] focus:outline-none focus:ring-2 focus:ring-blue-50"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-[#0D1625]">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#1877F2] focus:outline-none focus:ring-2 focus:ring-blue-50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-[#0D1625]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#1877F2] focus:outline-none focus:ring-2 focus:ring-blue-50"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-[#0D1625]">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#1877F2] focus:outline-none focus:ring-2 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#0D1625]">
                      Message *
                    </label>
                    <textarea
                      placeholder="Describe your question or request..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#1877F2] focus:outline-none focus:ring-2 focus:ring-blue-50"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#1877F2] py-3 font-bold text-white shadow-lg transition-all hover:bg-blue-700 uppercase tracking-wide text-xs"
                  >
                    Ask a Question
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              SUPPORT
            </p>
            <h2 className="text-3xl font-extrabold text-[#0D1625]">
              Support Features
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="rounded-xl border border-slate-100 bg-slate-50 p-6 transition-all hover:shadow-md hover:border-blue-100">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1877F2] text-white">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#0D1625]">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="bg-[#F8F9FB] py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              PROCESS
            </p>
            <h2 className="text-3xl font-extrabold text-[#0D1625]">
              How Getting Support Works
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportSteps.map((step, index) => (
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

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1877F2]">
              FAQ
            </p>
            <h2 className="mb-4 text-3xl font-extrabold text-[#0D1625]">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Quick answers to common questions about our support and services.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 text-left transition-all hover:border-blue-200 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#1877F2]">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-[#0D1625]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-300" />
                </button>
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
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Browse our verified products or chat with our team to find the perfect solution for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="https://wa.me/8801302669333" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#1877F2] shadow-lg transition-all hover:shadow-xl">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us Now
                </button>
              </a>
              <a href="/shop">
                <button className="inline-flex items-center gap-2 rounded-xl border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-all hover:bg-white hover:text-[#1877F2]">
                  Browse Products
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

export default ContactPage