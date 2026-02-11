"use client"

import { Briefcase } from 'lucide-react'

const PortfolioSection = () => {
  const projects = [
    {
      client: 'DIGITAL MARKETING AGENCY, USA',
      title: 'Agency BM Setup – 10 Ad Accounts',
      description: 'Scaled to $50K/month ad spend with zero bans using our verified BMs.'
    },
    {
      client: 'ONLINE RETAIL STORE, UK',
      title: 'WhatsApp API Integration – E-commerce',
      description: 'Automated 10,000+ customer messages daily with our WABA account.'
    },
    {
      client: 'SOCIAL MEDIA MANAGER, GERMANY',
      title: 'Reinstated Profile Recovery',
      description: 'Recovered banned profile within 24 hours, fully operational and verified.'
    },
    {
      client: 'PERFORMANCE MARKETING TEAM, UAE',
      title: 'TikTok Ads – Performance Team',
      description: 'Launched TikTok campaigns across 5 markets with our ready-to-use ad accounts.'
    },
    {
      client: 'ACCOUNT RESELLER, INDIA',
      title: 'Bulk BM Order – Reseller',
      description: 'Supplied 50+ verified BMs with 100% delivery rate and zero issues.'
    },
    {
      client: 'DROPSHIPPING BUSINESS, CANADA',
      title: 'Facebook Ads Account – Unlimited',
      description: 'Launched campaigns immediately with unlimited spending ads account.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-bold uppercase tracking-wider text-[#1877F2]">
            PORTFOLIO
          </span>
          <h2 className="mb-4 text-4xl font-extrabold text-[#0D1625] sm:text-5xl">
            VBB STORE'S Work Sample
          </h2>
          <p className="text-lg text-slate-500">
            Real results from real clients. Here's a glimpse of the work we've done for advertisers worldwide.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="bg-[#EBF5FF] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1877F2]">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-[#1877F2]">
                    {project.client}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-[#0D1625]">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
