"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Truck, Headphones, Star } from 'lucide-react'

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState('BM Services')

  const products = {
    'BM Services': [
      {
        id: 1,
        name: 'Buy Verified BM 1 | Verified Facebook Business Manager 1 For Static Ads',
        image: '/image/homePageCard1.webp',
        description: 'Verified Facebook Business Manager 1 For Static Ads',
        price: '49.00',
        oldPrice: '',
        save: '',
        popular: false
      },
      {
        id: 2,
        name: 'BM Verification Service: Verify Facebook Business Manager',
        image: '/image/homePageCard2.webp',
        description: 'Verify Facebook Business Manager',
        price: '49.00',
        oldPrice: '119.00',
        save: '70.00',
        popular: false
      },
      {
        id: 3,
        name: 'Buy Verified BM with Verified Ads Account',
        image: '/image/homePageCard3.webp',
        description: 'Buy Verified BM with Verified Ads Account',
        price: '99.00',
        oldPrice: '',
        save: '',
        popular: false
      },
      {
        id: 4,
        name: 'Buy Verified BM 3 | Verified Facebook Business Manager 3',
        image: '/image/homePageCard4.webp',
        description: 'Verified Facebook Business Manager 3',
        price: '99.00',
        oldPrice: '139.00',
        save: '40.00',
        popular: true
      },
      {
        id: 5,
        name: 'Buy Verified BM 5 | Verified Facebook Business Manager',
        image: '/image/homePageCard5.webp',
        description: 'Verified Facebook Business Manager',
        price: '299.00',
        oldPrice: '',
        save: '',
        popular: false
      },
       {
        id: 6,
        name: 'Buy Verified BM 10 | Real Documents Verified Facebook Business Manager',
        image: '/image/homePageCard6.webp',
        description: 'Real Documents Verified Facebook Business Manager',
        price: '300.00',
        oldPrice: '',
        save: '',
        popular: false
      }
    ],
    'WhatsApp API (WABA)': [
      {
        id: 7,
        name: 'Buy Whatsapp Business API limit 2000 With FB Verified BM',
        image: '/image/homePageCard7.webp',
        description: 'Buy Whatsapp Business API limit 2000 With FB Verified BM',
        price: '199.00',
        oldPrice: '',
        save: '',
        popular: false
      },
      {
        id: 8,
        name: 'Buy WhatsApp Business API limit 250 With FB Verified BM',
        image: '/image/homePageCard8.webp',
        description: 'Buy WhatsApp Business API limit 250 With FB Verified BM',
        price: '70.00',
        oldPrice: '80.00',
        save: '10.00',
        popular: true
      },
      {
        id: 9,
        name: 'Buy WhatsApp Business API Limit 10000 With FB Verified BM - Verified Meta Business Messaging',
        image: '/image/homePageCard9.webp',
        description: 'Verified Meta Business Messaging',
        price: '900.00',
        oldPrice: '',
        save: '',
        popular: false
      }
    ],
    'Social Accounts': [
       {
        id: 10,
        name: 'Reinstate Facebook Account | Business Use, Personal, or Running ads',
        image: '/image/homePageCard10.svg',
        description: 'Reinstate Facebook Account',
        price: '149.00',
        oldPrice: '',
        save: '',
        popular: false
      },
      {
        id: 11,
        name: 'Verified TikTok agency ad account buy- Verified & High Limit TikTok Ads account for Agencies',
        image: '/image/homePageCard11.webp',
        description: 'Verified & High Limit TikTok Ads account for Agencies',
        price: '99.00',
        oldPrice: '',
        save: '',
        popular: false
      }
    ],
    'Meta Tools': [],
    'Meta Verified BM': [],
    'Facebook Ads Account': []
  }

  const tabs = [
    'BM Services',
    'Meta Tools', 
    'Meta Verified BM',
    'WhatsApp API (WABA)',
    'Facebook Ads Account',
    'Social Accounts'
  ]

  return (
    <section id="products" className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag h-3.5 w-3.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span>Our Products</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-[2.5rem]">
            Featured Products
          </h2>
          <p className="text-muted-foreground">
            Browse our selection of verified accounts and services
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products[activeTab as keyof typeof products]?.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl hover:border-blue-100"
            >
              <div className="relative overflow-hidden bg-gray-50 aspect-square">
                {product.popular && (
                  <div className="absolute right-0 top-6 z-10 translate-x-1/3 rotate-45 transform bg-blue-600 px-8 py-1 text-xs font-bold text-white shadow-md">
                    Premium
                  </div>
                )}
                {product.popular && (
                  <div className="absolute left-4 top-4 z-10 hidden">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                         <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.352-.272-2.636-.759-3.804a.75.75 0 00-.915-.427 10.957 10.957 0 01-6.559-3.35zM12 4.414c1.69 1.487 3.96 2.378 6.302 2.508.41.97.632 2.03.632 3.123 0 4.86-3.15 9.07-7.468 10.749a11.398 11.398 0 01-6.932-10.749c0-.987.168-1.936.478-2.825 2.195-.126 4.314-.888 5.988-2.186L12 4.414z" clipRule="evenodd" />
                       </svg>
                    </div>
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex flex-col flex-grow p-5 space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Verified BM</span>
                  <h3 className="text-[17px] font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-1 text-[#1877F2] text-sm font-medium">
                  <span className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current text-[#1877F2]" />
                    ))}
                  </span>
                  <span className="text-gray-500 font-normal ml-1 text-xs">5.0</span>
                </div>
                
                <div className="mt-auto pt-2">
                    <div className="rounded-xl bg-[#FFF5F5] border border-[#FFE0E0] p-4 mb-4">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-gray-500 line-through text-xs font-bold">${product.oldPrice || '600'}</span>
                            <span className="text-green-600 text-xs font-bold">Save ${product.save || '200.00'}</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                             <span className="text-3xl font-extrabold text-[#111827]">${product.price}</span>
                             <span className="text-gray-500 text-xs font-bold">USD</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="flex flex-col items-center justify-center p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                            <ShieldCheck className="w-5 h-5 text-[#1877F2] mb-1.5" />
                            <span className="text-[10px] font-bold text-gray-700 text-center leading-tight">100%<br/>Safe</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                             <Truck className="w-5 h-5 text-[#1877F2] mb-1.5" />
                             <span className="text-[10px] font-bold text-gray-700 text-center leading-tight">Instant</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-2.5 bg-gray-50 rounded-xl border border-gray-100">
                             <Headphones className="w-5 h-5 text-[#1877F2] mb-1.5" />
                             <span className="text-[10px] font-bold text-gray-700 text-center leading-tight">24/7</span>
                        </div>
                    </div>
                  
                  <div className="flex flex-col gap-2.5">
                    <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#198754] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#157347]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Buy on WhatsApp
                    </button>
                    
                    <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#0D6EFD] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0b5ed7]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      Buy on Telegram
                    </button>

                    <Link href={`/checkout/${product.id}`} className="w-full">
                      <button className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 border-b-2 hover:border-b-gray-300">
                        Buy Now
                      </button>
                    </Link>
                    
                    <div className="flex items-center justify-center gap-1.5 pt-2 text-[10px] sm:text-xs text-green-600 font-medium opacity-90">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Verified Account • Delivered Same Day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        <div className="mt-12 text-center">
          <Link href="/shop">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 px-8 py-2 border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
