"use client"

import Image from 'next/image'

const ScaleUpSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">

        {/* Main Title Block */}
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-extrabold text-[#0D1625] sm:text-4xl md:text-5xl leading-tight">
            Scale Your Advertising with a Verified Business Manager
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl"></div>
              <div className="relative rounded-3xl p-[3px] shadow-2xl shadow-primary/20">
                <Image
                  src="/images/herosection image.jpeg"
                  alt="Verified BM Buy"
                  className="rounded-[22px] w-full object-cover"
                  width={600}
                  height={600}
                /> 
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 text-lg text-slate-600 leading-relaxed text-justify">
            <p>
              Navigating the complexities of digital advertising requires more than just a creative strategy; it requires a stable foundation. For agencies and individual marketers, the ability to run ads without constant interruptions is the difference between profit and loss. Verified BM Buy Store operates as a specialized digital commerce platform providing high-quality Meta solutions. By choosing to buy verified BM accounts, you bypass the common hurdles of account restrictions and verification delays that often stall growth.
            </p>
          </div>
        </div>

        {/* Why Top Advertisers */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#0D1625]">
            Why Top Advertisers Buy Verified Business Manager Accounts
          </h3>
          <p className="mb-4 text-slate-600 leading-relaxed text-justify">
            The Meta advertising ecosystem demands high levels of trust and compliance. When you use a verified business manager, you are telling the platform that your entity is legitimate and legal. This status significantly reduces the risk of sudden account bans and increases your daily spending limits, allowing for aggressive scaling.
          </p>
          <p className="mb-4 text-slate-600 font-medium">
            Securing a verified business manager account provides several operational advantages:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Increased trust score within the Meta algorithm; this leads to faster ad approvals and lower chances of automated flags.</li>
            <li>Higher daily spending limits: new accounts are often capped, but verified assets allow for much higher budgets right from the start.</li>
            <li>Access to premium features: certain tools, like the WhatsApp Business API or advanced developer integrations, require a verified certificate to function correctly.</li>
          </ul>
        </div>

        {/* Distinct Benefits */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#0D1625]">
            The Distinct Benefits of Verified Business Manager Assets
          </h3>
          <p className="mb-4 text-slate-600 leading-relaxed text-justify">
            Unlike standard accounts that are prone to checkpoints, the benefits of verified business manager assets lie in their resilience. Standard accounts often struggle with limited support and low spending thresholds. In contrast, the professional grade solutions at Verified BM Buy Store are prepared specifically for enterprise level performance. Our accounts undergo rigorous verification processes using authentic documentation, ensuring they meet Meta's strict compliance standards.
          </p>
          <p className="text-slate-600 leading-relaxed text-justify">
            While other providers might offer unverified or "fresh" accounts that trigger security alerts the moment you upload a credit card, our specialized verified BM for sale options are seasoned and ready for immediate deployment. This reliability is why global marketing agencies trust our platform as their go-to infrastructure partner.
          </p>
        </div>

        {/* Premium Solutions */}
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-bold text-[#0D1625]">
            Premium Meta Solutions Purchase and Conditions
          </h3>
          <p className="mb-4 text-slate-600 leading-relaxed text-justify">
            Our inventory is designed to support various scales of operation. Whether you need a single business manager verified for a local brand or a complex setup for a global agency, we offer tailored products. Our current catalog includes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
            <li><strong>Verified Facebook Business Manager:</strong> ideal for standard advertising needs with increased limits.</li>
            <li><strong>WhatsApp Business API (WABA):</strong> accounts with high messaging limits for automated customer engagement.</li>
            <li><strong>Reinstated Facebook Accounts:</strong> pre-warmed accounts with a history of restored access for maximum stability.</li>
            <li><strong>TikTok Agency Ad Accounts:</strong> for marketers looking to diversify their traffic sources beyond Meta.</li>
          </ul>
          <p className="mb-4 text-slate-600 leading-relaxed text-justify">
            When you buy verified business manager services from us, the delivery is nearly instantaneous. Once payment is confirmed via our secure gateway, the account credentials and recovery information are sent directly to your email. Prices typically range from $100 to $500, depending on the specific account history and spending limit capacity. Every purchase comes with comprehensive setup guides and a 24/7 support guarantee to ensure a smooth transition into your new advertising environment.
          </p>
          <p className="text-slate-600 leading-relaxed text-justify">
            Our commitment to legitimacy and transparency ensures that your business stays ahead of the competition. By securing a reliable infrastructure today, you protect your marketing efforts from the unpredictability of platform policy changes.
          </p>
        </div>

        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
          <p className="text-[#1877F2] font-semibold italic">
            Would you like to know more about the specific daily spending limits available for our current stock of verified accounts?
          </p>
        </div>

      </div>
    </section>
  )
}

export default ScaleUpSection
