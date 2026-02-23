
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AICorner from '../components/AICorner';
import { getSettings } from '../services/settingsService';

const Home: React.FC = () => {
  const [content, setContent] = useState(getSettings());

  useEffect(() => {
    const handleStorageChange = () => setContent(getSettings());
    const interval = setInterval(handleStorageChange, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left space-y-8">
              <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">
                {content.hero.announcement}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
                {content.hero.title.split(' ').slice(0, -2).join(' ')} <br />
                <span className="text-emerald-600">{content.hero.title.split(' ').slice(-2).join(' ')}</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0">
                {content.hero.subtitle}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link to="/pendaftaran" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-700 transition-all transform hover:-translate-y-1">
                  Daftar Sekarang
                </Link>
                <Link to="/profil" className="px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-100 font-bold rounded-2xl shadow-sm hover:bg-emerald-50 transition-all">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={content.hero.imageUrl} 
                  alt="TK As-Shaumiyah Activities" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-2xl opacity-40"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-12 shadow-xl border border-emerald-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {content.features.map((feature, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto text-2xl">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Educational Content */}
      <AICorner />

      {/* Video "A Day at School" Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          <div className="aspect-video rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl">
            <img 
              src="https://picsum.photos/id/1/1200/675" 
              alt="Day at school preview" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <button className="w-20 h-20 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all mb-6">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4.5 3.5v13L17 10 4.5 3.5z" />
                </svg>
              </button>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">A Day at School</h2>
              <p className="text-emerald-100 max-w-xl font-medium">
                Lihat bagaimana anak-anak kita belajar, bermain, dan bertumbuh setiap harinya di TK {content.schoolInfo.name}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
