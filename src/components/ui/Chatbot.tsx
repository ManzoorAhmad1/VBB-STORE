"use client"

import { useState, useRef, useEffect } from 'react'
import { X, Send, MessageCircle, User } from 'lucide-react'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm VBB's AI assistant. Ask me anything about our products, pricing, policies, or services — I'm here to help!",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickQuestions = [
    'What products do you sell?',
    'What\'s your refund policy?',
    'Help me choose a product'
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: text,
      isUser: true,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (text: string): string => {
    const lowerText = text.toLowerCase()
    
    if (lowerText.includes('refund') || lowerText.includes('return')) {
      return "We offer a 7-day replacement guarantee if the account doesn't work as described. Refund policies vary by product type. Please check our Terms of Service for details."
    }
    if (lowerText.includes('product') || lowerText.includes('sell')) {
      return "We sell Verified Facebook Business Managers, WhatsApp Business API accounts, High-Limit Ad Accounts, and Reinstated Profiles. Check our Shop page for the full catalog!"
    }
    if (lowerText.includes('price') || lowerText.includes('cost')) {
      return "Our prices start from $49 for Verified BMs. You can see all pricing details on our Shop page."
    }
    if (lowerText.includes('whatsapp') || lowerText.includes('contact')) {
        return "You can contact our support team directly on WhatsApp: +8801302669333"
    }
    
    return "Thanks for your message! Our support team is notified. For faster reponse, please contact us on WhatsApp at +8801302669333."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputValue)
    }
  }

  return (
    <>
      {/* Configure Floating Buttons Visibility based on Chat State if needed, 
          but as per design, we keep them independent or user can close chat to see them.
      */}

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-2xl transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Open VBB Assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="text-[10px] font-bold leading-tight">VBB</div>
            <div className="text-[8px] font-medium leading-tight">STORE</div>
          </div>
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[100] w-[90vw] max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl sm:w-80 md:w-96 flex flex-col max-h-[600px] h-[70vh]">
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#1877F2] p-4 text-white shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <div className="flex flex-col items-center justify-center text-[#1877F2]">
                <div className="text-[10px] font-bold leading-tight">VBB</div>
                <div className="text-[8px] font-medium leading-tight">STORE</div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">VBB Assistant</h3>
              <p className="text-xs text-white/90">Online</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 transition-colors hover:bg-white/20"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
            <div className="space-y-4">
                {messages.map((msg) => (
                    <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                        msg.isUser ? 'flex-row-reverse' : ''
                    }`}
                    >
                    <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        msg.isUser ? 'bg-gray-200' : 'bg-[#1877F2] text-white'
                        }`}
                    >
                        {msg.isUser ? (
                            <User className="h-4 w-4 text-gray-600" />
                        ) : (
                           <div className="flex flex-col items-center justify-center">
                                <div className="text-[8px] font-bold leading-tight">VBB</div>
                           </div>
                        )}
                    </div>
                    <div
                        className={`max-w-[80%] rounded-2xl p-3 text-sm shadow-sm ${
                        msg.isUser
                            ? 'rounded-tr-none bg-[#1877F2] text-white'
                            : 'rounded-tl-none bg-white text-gray-800'
                        }`}
                    >
                        {msg.text}
                    </div>
                    </div>
                ))}
                
                {isTyping && (
                    <div className="flex items-start gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white">
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-[8px] font-bold leading-tight">VBB</div>
                           </div>
                        </div>
                        <div className="rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">
                            <div className="flex gap-1">
                                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></div>
                                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-75"></div>
                                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-150"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
          </div>
            
          {/* Quick Questions (Only show if few messages) */}
          {messages.length < 3 && (
            <div className="bg-gray-50 px-4 pb-2 pt-0 overflow-x-auto whitespace-nowrap shrink-0">
               <div className="flex gap-2 pb-2">
                {quickQuestions.map((question, index) => (
                    <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="inline-block rounded-full border border-[#1877F2]/20 bg-white px-3 py-1 text-xs font-medium text-[#1877F2] transition-colors hover:bg-[#1877F2] hover:text-white"
                    >
                    {question}
                    </button>
                ))}
               </div>
            </div>
          )}

          {/* Footer Input */}
          <div className="border-t border-gray-100 bg-white p-3 shrink-0">
            <div className="relative flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm focus:border-[#1877F2] focus:outline-none focus:ring-1 focus:ring-[#1877F2]"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-all hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-[#1877F2]"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 text-center text-[10px] text-gray-400">
                Powered by VBB Store AI
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot