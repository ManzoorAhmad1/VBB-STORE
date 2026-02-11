"use client"

import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Target, 
  Globe, 
  Zap, 
  DollarSign, 
  Lock, 
  BarChart3, 
  Layers, 
  Share2, 
  ShieldAlert 
} from 'lucide-react'

const SmartAdvertisersSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: 'Builds Trust & Credibility',
      description: "A verified business account shows your business is real. It cuts down the risk of scams and improves reputation. It also boosts your brand's reputation."
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-white" />,
      title: 'Prevents Ad Account Restrictions',
      description: 'Verified accounts face fewer suspicions which helps you grow your business. You can focus on it without fear of sudden suspensions.'
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: 'Advanced Advertising Features',
      description: 'Access exclusive tools like Facebook Pay, Offline custom audience targeting and API integrations. These features streamline marketing and enhance ROI.'
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: 'Better Security & Protection',
      description: 'A verified business account prevents against cyber threats. It provides extra protections and simplifies account recovery if unauthorized access happens.'
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: 'Facebook Commerce & Marketplace',
      description: "Only verified businesses can access Facebook's premium features, which include Facebook Shops and Marketplace. These offer secure checkout options and wider customer reach."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'Easier Business Account Recovery',
      description: 'A verified account helps you recover if your account is hacked, restricted, or disabled. It also quickly proves your identity to Meta.'
    }
  ]

  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="container">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-extrabold text-[#0D1625] sm:text-4xl md:text-5xl">
            Why Use a Verified Facebook Business Manager (Verified BM)?
          </h2>
          <p className="text-lg text-slate-500">
            A verified Facebook Business Manager confirms your business identity. Meta approves it, building your credibility. You also have access to valuable features. Verifying your Business Manager is crucial for success.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] shadow-sm">
                {benefit.icon}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-[#0D1625]">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SmartAdvertisersSection
