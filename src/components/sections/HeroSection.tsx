"use client"

import Image from 'next/image'
import Link from 'next/link'
import FeaturesSection from './FeaturesSection'

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background py-16 md:py-24 lg:py-28">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[100px]"></div>
                <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[100px]"></div>
            </div>

            <div className="container relative z-10">
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12">
                    <div className="flex shrink-0 items-center justify-center lg:w-auto animate-hero-fade-left" style={{ animationDelay: '0.1s' }}>
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl"></div>
                            <div className="relative rounded-3xl p-[3px] shadow-2xl shadow-primary/20">
                                <Image
                                    src="/images/herosection image.jpeg"
                                    alt="VBB - Verified BM Buy"
                                    className="h-52 w-52 rounded-[22px] object-cover sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-80 lg:w-80 animate-hero-scale-in"
                                    priority
                                    width={320}
                                    height={320}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="animate-hero-fade-right" style={{ animationDelay: '0.15s' }}>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-3.5 w-3.5 fill-primary">
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                </svg>
                                <span>Best Verified Business Manager 2026</span>
                                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            </div>
                        </div>

                        <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] lg:text-[2.85rem] xl:text-[3.25rem] animate-hero-fade-right" style={{ animationDelay: '0.25s' }}>
                            Buy <span className="text-vbb-primary">Verified BM</span> – Facebook Business Manager <br />
                            <span className="mt-3 block text-green-500">& WhatsApp API Accounts</span>
                        </h1>

                        <p className="mb-4 text-sm text-muted-foreground md:text-base leading-relaxed text-justify animate-hero-fade-right" style={{ animationDelay: '0.35s' }}>
                            Verified BM Buy is a trusted and secure platform for purchasing <strong>verified Facebook Business Manager accounts</strong> [Meta BM] and <strong>WhatsApp Business API [WABA]</strong> accounts. We also offer <strong>Facebook Ads accounts</strong>, reinstated profiles, and exclusive access to <strong>Dailon BM</strong> and other advanced <strong>Meta tools</strong>. All our accounts come with genuine documentation, ensuring authenticity, security, and dependability for advertisers and businesses worldwide. We provide you with a reliable solution you can trust.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 lg:gap-4 w-full animate-hero-fade-right" style={{ animationDelay: '0.45s' }}>
                            <a href="https://wa.me/8801302669333" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full h-12 rounded-xl px-6 font-bold bg-green-800 hover:bg-green-900 text-white shadow-lg shadow-green-800/20 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle mr-2 h-4 w-4">
                                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                                    </svg>
                                    WhatsApp
                                </button>
                            </a>

                            <a href="https://t.me/Verifiedbmbuy" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full h-12 rounded-xl px-6 font-bold bg-sky-800 hover:bg-sky-900 text-white shadow-lg shadow-sky-800/20 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send mr-2 h-4 w-4">
                                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                        <path d="m21.854 2.147-10.94 10.939"></path>
                                    </svg>
                                    Telegram
                                </button>
                            </a>

                            <a href="http://m.me/101736778209833" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[120px]">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full h-12 rounded-xl px-6 font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook mr-2 h-4 w-4">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                    Facebook
                                </button>
                            </a>

                            <a href="mailto:info@verifiedbmbuy.com" className="flex-1 min-w-[120px]">
                                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 w-full h-12 rounded-xl border-2 px-6 font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2 h-4 w-4">
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                    Email
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <FeaturesSection />

            </div>
        </section>
    )
}

export default HeroSection
