"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'James Carter',
      role: 'Digital Marketing Specialist',
      initial: 'J',
      text: "I purchased a verified Facebook Business Manager account, and the process was seamless. The support team was very responsive and helpful."
    },
    {
      name: 'Sophia Williams',
      role: 'Social Media Ad Manager',
      initial: 'S',
      text: "This is the most trusted source for verified Facebook Ads accounts. I have purchased several accounts, and they function seamlessly. Highly Recommended!"
    },
    {
      name: 'Michael Johnson',
      role: 'E-commerce Business Owner',
      initial: 'M',
      text: "I needed a high-quality Business Manager and Ads account for my business and Verified BM Buy Store provided exactly what I needed. The setup process was easy, and the account is functioning perfectly!"
    }
  ]

  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            Our Satisfied Clients' Reviews
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            Recent <span className="text-[#1877F2]">Reviews</span> from our customers
          </h2>
          <p className="text-lg text-slate-500">
             
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
