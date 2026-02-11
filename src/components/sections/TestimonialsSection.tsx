"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sophie L.',
      role: 'Agency Director • UK',
      initial: 'S',
      text: "Outstanding service! Got a verified BM and it exceeded my expectations. Support team is responsive 24/7. Best in the business."
    },
    {
      name: 'Chen W.',
      role: 'Growth Lead • Singapore',
      initial: 'C',
      text: "We've tried multiple providers before finding VBB STORE. The quality difference is night and day. Genuine verification, instant delivery, and zero issues."
    },
    {
      name: 'Ahmed R.',
      role: 'E-commerce Manager • Saudi Arabia',
      initial: 'A',
      text: "Bulk ordered 10 verified BMs for our clients. Every single one was perfect. The volume discount saved us thousands. Incredible value."
    }
  ]

  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            TESTIMONIALS
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            Customer Success Stories
          </h2>
          <p className="text-lg text-slate-500">
            Thousands of advertisers trust VBB STORE. Here's what they have to say.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-slate-200 opacity-50" />
              </div>
              
              <p className="mb-6 flex-grow text-base italic leading-relaxed text-slate-600">
                "{testimonial.text}"
              </p>

              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-lg font-bold text-white">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0D1625]">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-medium text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls visual (static for now as we show all 3) */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-colors hover:border-[#1877F2] hover:text-[#1877F2]">
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all ${
                  i === 3 ? 'w-8 bg-[#1877F2]' : 'w-2 bg-slate-200'
                }`} 
              />
            ))}
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-colors hover:border-[#1877F2] hover:text-[#1877F2]">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
