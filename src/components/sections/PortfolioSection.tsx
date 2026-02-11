"use client"

import { Briefcase } from 'lucide-react'

const PortfolioSection = () => {
  const projects = [
    {
      client: 'Fashion Store',
      title: 'Verification For Fashion Store',
      date: 'Verified on Jul 2, 2024',
      description: 'Two-Factor Authentication: Two-factor authentication makes it harder for others to gain access to your business portfolio and take control of your assets. For more information go to help center.'
    },
    {
      client: 'Flower Haven',
      title: 'Verification For Flower Haven',
      date: 'Verified on Jul 11, 2024',
      description: 'Two-Factor Authentication: Two-factor authentication makes it harder for others to gain access to your business portfolio and take control of your assets. For more information go to help center.'
    },
    {
      client: 'Gourmet Garden',
      title: 'Verification For Gourmet Garden',
      date: 'Verified on Jul 15, 2024',
      description: 'Two-Factor Authentication: Two-factor authentication makes it harder for others to gain access to your business portfolio and take control of your assets. For more information go to help center.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            BM Verified
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            VBB STORE'S WORK SAMPLE
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="bg-[#EBF5FF] p-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Briefcase className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wide text-[#1877F2]">
                      {project.client}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">
                         Verified Business
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-lg font-bold text-[#0D1625]">
                  {project.title}
                </h3>
                <p className="mb-4 text-xs font-semibold text-green-600">
                  {project.date}
                </p>
                <p className="text-sm leading-relaxed text-slate-500">
                  {project.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600">
                          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                    </span>
                    <span className="text-xs font-bold text-green-700">Verified BM</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
