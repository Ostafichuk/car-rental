import { useState } from 'react';
export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="bg-white w-150 max-w-110px rounded-3xl p-8 shadow-2xl relative z-10 animate-in fade-in zoom-in-95 duraction-200 text-gray-900">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex border-b border-gray-100 mb-8 mt-6">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 pb-4 text-sm font-semibold tracking-wide transition-colors relative ${
              activeTab === 'login' ? 'text-black' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Sign In
            {activeTab === 'login' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 pb-4 text-sm font-semibold tracking-wide transition-colors relative ${
              activeTab === 'register' ? 'text-black' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Register
            {activeTab === 'register' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
            )}
          </button>
        </div>

        {/* Форма */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {activeTab === 'register' && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:border-gray-900 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:border-gray-900 transition-colors"
            />
          </div>

          {activeTab === 'login' && (
            <div className="text-right">
              <a
                href="#"
                className="text-xs text-gray-400 hover:text-black transition-colors font-medium"
              >
                Forgot Password?
              </a>
            </div>
          )}

          <button className="w-full py-4 mt-4 rounded-full bg-gray-900 text-white text-sm font-bold shadow-lg hover:bg-black transition-all">
            {activeTab === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
