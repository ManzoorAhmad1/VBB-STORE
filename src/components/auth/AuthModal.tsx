"use client"

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X, Lock, Mail, Eye, EyeOff, UserPlus, User } from 'lucide-react'
import Image from 'next/image'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

type AuthMode = 'signin' | 'signup'

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('signin')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const toggleMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin')
    // Reset form state when switching modes
    setShowPassword(false)
    setPassword('')
    setConfirmPassword('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { mode, email, password })
    // Add authentication logic here
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Header Icon & Title */}
                <div className="flex flex-col items-center justify-center pt-0 pb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${mode === 'signin' ? 'bg-blue-50 text-[#1877F2]' : 'bg-blue-50 text-[#1877F2]'} mb-3 shadow-sm`}>
                    {mode === 'signin' ? (
                        <div className="bg-[#1877F2] p-2.5 rounded-xl shadow-lg shadow-blue-200">
                             <Lock className="h-5 w-5 text-white" />
                        </div>
                    ) : (
                        <div className="bg-[#1877F2] p-2.5 rounded-xl shadow-lg shadow-blue-200">
                            <UserPlus className="h-5 w-5 text-white" />
                        </div>
                    )}
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-gray-900 mb-1"
                  >
                    {mode === 'signin' ? 'Sign In' : 'Create Account'}
                  </Dialog.Title>
                  <p className="text-sm text-gray-500">
                    {mode === 'signin' 
                      ? 'Sign in to your account' 
                      : 'Sign up to get started'}
                  </p>
                </div>

                {/* Social Buttons */}
                <div className="space-y-2.5 mb-4">
                  <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <title>Google</title>
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Continue with Google
                  </button>
                  <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <title>Apple</title>
                        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.38-1.07-.52-2.05-.51-3.21 0C9.4 21.24 8.28 21.36 7 20C4.21 17.06 2.5 11.2 5.36 9.49c1.47-.94 3.07-.86 4.16-.14.99.64 1.83.69 2.92.11 1.25-.69 3.19-.89 4.35-.06 1.45 1.05 2.1 2.22 2.15 2.25-.05.02-2.73 1.34-2.83 4.88-.09 3.15 2.66 4.49 2.83 4.59-.06.27-.41 2.16-1.89 4.16zM12.03 7.25c-.15-2.52 1.6-4.58 3.84-5.25.32 2.65-2.48 5.86-3.84 5.25z" />
                    </svg>
                    Continue with Apple
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">
                      {mode === 'signin' ? 'OR CONTINUE WITH EMAIL' : 'OR SIGN UP WITH EMAIL'}
                    </span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 pl-1">Email</label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-[#1877F2] sm:text-sm shadow-sm"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700 pl-1">Password</label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-10 text-gray-900 placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-[#1877F2] sm:text-sm shadow-sm"
                        placeholder={mode === 'signin' ? "••••••••" : "Min. 6 characters"}
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {mode === 'signup' && (
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700 pl-1">Confirm Password</label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="block w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-[#1877F2] sm:text-sm shadow-sm"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#2B6EB1] py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#1877F2] focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-offset-2 transition-colors mt-2"
                  >
                    {mode === 'signin' ? 'Sign In' : 'Create Account'}
                  </button>
                </form>

                {/* Footer Toggle */}
                <div className="mt-4 text-center text-sm text-gray-500">
                  {mode === 'signin' ? (
                    <>
                      Don't have an account?{' '}
                      <button
                        onClick={toggleMode}
                        className="font-semibold text-[#1877F2] hover:text-[#166fe5] hover:underline"
                      >
                        Register here
                      </button>
                    </>
                  ) : (
                    <>
                      Already have an account?{' '}
                      <button
                        onClick={toggleMode}
                        className="font-semibold text-[#1877F2] hover:text-[#166fe5] hover:underline"
                      >
                        Sign In
                      </button>
                    </>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
