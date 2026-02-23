
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getSettings } from '../services/settingsService';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(getSettings());
  const location = useLocation();

  useEffect(() => {
    const handleStorageChange = () => setContent(getSettings());
    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 1000);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Profil', href: '/profil' },
    { label: 'Program', href: '/program' },
    { label: 'Fasilitas', href: '/fasilitas' },
    { label: 'PPDB', href: '/pendaftaran' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Portal Ortu', href: '/portal' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-emerald-600 p-1.5 rounded-xl overflow-hidden w-11 h-11 flex items-center justify-center">
                {content.schoolInfo.logoUrl ? (
                  <img src={content.schoolInfo.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                ) : (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                  </svg>
                )}
              </div>
              <div>
                <span className="text-xl font-extrabold text-emerald-900 block leading-tight">TK {content.schoolInfo.name}</span>
                <span className="text-xs font-semibold text-emerald-600 tracking-widest uppercase">Taman Kanak-Kanak</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                  isActive(item.href)
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/pendaftaran"
              className="ml-4 px-5 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-full transition-all transform hover:scale-105 shadow-sm"
            >
              Daftar Sekarang
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-700 hover:bg-emerald-50 p-2 rounded-md transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-bold ${
                  isActive(item.href)
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-slate-600 hover:bg-emerald-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
