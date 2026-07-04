import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import AuthModal from './AuthModal';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <header
        className={`w-full py-6 transition-colors duration-300 ${
          isHomePage ? 'bg-transparent' : 'bg-[#0a0a0a]'
        }`}
      >
        <div className="max-w-250 mx-auto px-4 flex justify-between items-center text-white">
          {/* Ліве меню (бургер) */}
          <button className="text-white hover:text-gray-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Логотип по центру */}
          <Link
            to="/"
            className="text-xl font-bold tracking-[0.25em] hover:text-gray-300 transition-colors"
          >
            LUXEDRIVE
          </Link>

          {/* Права кнопка — додаємо подію onClick для відкриття модалки */}
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="px-5 py-2 text-sm font-medium border border-gray-600 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Login / Register
          </button>
        </div>
      </header>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
