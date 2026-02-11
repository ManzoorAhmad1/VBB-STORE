"use client"

import { useState } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const quickQuestions = [
    'What products do you sell?',
    'What\'s your refund policy?',
    'Help me choose a product'
  ]

  const handleQuickQuestion = (question: string) => {
    // In a real implementation, this would send the question to the chatbot backend
    console.log('Quick question:', question)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real implementation, this would send the message to the chatbot backend
      console.log('Sending message:', message)
      setMessage('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
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
        <div className="fixed bottom-24 right-6 z-[100] w-[90vw] max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl sm:w-96">
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#1877F2] p-4 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <div className="flex flex-col items-center justify-center text-[#1877F2]">
                <div className="text-[10px] font-bold leading-tight">VBB</div>
                <div className="text-[8px] font-medium leading-tight">STORE</div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">VBB Assistant</h3>
              <p className="text-xs text-white/90">Ask me anything about VBB STORE</p>
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
          <div className="flex h-[400px] flex-col bg-gray-50">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4">
              {/* AI Message */}
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-[8px] font-bold leading-tight">VBB</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="rounded-2xl rounded-tl-none bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-700">
                      Hi! 👋 I'm VBB's AI assistant. Ask me anything about our products, pricing, policies, or services — I'm here to help!
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Questions */}
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full rounded-xl border-2 border-[#1877F2] bg-white px-4 py-2.5 text-left text-sm font-medium text-[#1877F2] transition-all hover:bg-[#1877F2] hover:text-white"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about products, policies, pricing..."
                  className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#1877F2] focus:outline-none focus:ring-2 focus:ring-[#1877F2]/20"
                />
                <button
                  onClick={handleSendMessage}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1877F2] text-white transition-colors hover:bg-blue-700"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
