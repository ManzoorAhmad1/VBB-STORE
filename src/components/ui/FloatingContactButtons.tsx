"use client"

import { MessageCircle, Send } from 'lucide-react'

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-4 items-center">
       <a 
        href="https://t.me/Verifiedbmbuy" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0088cc] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Contact on Telegram"
      >
        <Send className="h-5 w-5 fill-current ml-0.5" />
      </a>
      
      <a 
        href="https://wa.me/8801302669333" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-current" />
      </a>
    </div>
  )
}

export default FloatingContactButtons