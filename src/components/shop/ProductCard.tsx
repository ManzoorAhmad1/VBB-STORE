"use client"

import { Star, Zap, Shield, TrendingUp, MessageCircle, Send, ShieldCheck, Truck, Headphones } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'



const ProductCard = ({ product }: any) => {
    return (
        <div
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl hover:border-blue-100"
        >
            <div className="relative overflow-hidden bg-gray-50 aspect-[4/3]">
                {product.soldOut && (
                    <div className="absolute right-0 top-0 z-20 bg-red-600 px-4 py-1 text-xs font-bold text-white shadow-md">
                        SOLD OUT
                    </div>
                )}
                {product.popular && !product.soldOut && (
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
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-col flex-grow p-5 space-y-4">
                <div className="space-y-1">
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Verified BM</span>
                    <h3 className="text-[17px] font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                        {product.title}
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
                            {product.oldPrice && (
                                <span className="text-gray-500 line-through text-xs font-bold">${product.oldPrice}</span>
                            )}
                            {product.save && (
                                <span className="text-green-600 text-xs font-bold">Save ${product.save}</span>
                            )}
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-extrabold text-[#111827]">
                                {typeof product.price === 'number' ? `$${product.price}` : product.price}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <Link href={product.whatsappLink || '#'} target="_blank" className="w-full flex items-center justify-center gap-2 rounded-full bg-[#00acec] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#009bd4] uppercase tracking-wide">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            CONTACT US
                        </Link>
                    </div>
                </div>

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
    )
}

export default ProductCard