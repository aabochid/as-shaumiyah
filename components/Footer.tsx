
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSettings } from '../services/settingsService';

const Footer: React.FC = () => {
  const [content, setContent] = useState(getSettings());

  useEffect(() => {
    const interval = setInterval(() => setContent(getSettings()), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-emerald-900 text-emerald-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-600 p-1.5 rounded-xl w-10 h-10 flex items-center justify-center overflow-hidden">
                {content.schoolInfo.logoUrl ? (
                  <img src={content.schoolInfo.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                ) : (
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                  </svg>
                )}
              </div>
              <span className="text-xl font-extrabold uppercase">{content.schoolInfo.name}</span>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed mb-6">
              Membentuk generasi qurani yang cerdas, mandiri, dan berakhlakul karimah melalui pendidikan berkualitas berbasis nilai-nilai Islam.
            </p>
            <div className="flex space-x-4">
              <a href={content.schoolInfo.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Instagram</a>
              <a href={content.schoolInfo.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Facebook</a>
              <Link to="/login" className="opacity-20 hover:opacity-100 text-xs flex items-center">Admin</Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/profil" className="hover:text-white transition-colors">Sejarah & Visi</Link></li>
              <li><Link to="/program" className="hover:text-white transition-colors">Kurikulum Islam</Link></li>
              <li><Link to="/fasilitas" className="hover:text-white transition-colors">Fasilitas Sekolah</Link></li>
              <li><Link to="/pendaftaran" className="hover:text-white transition-colors">Informasi PPDB</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Program Unggulan</h4>
            <ul className="space-y-4 text-sm">
              {content.programs.slice(0, 4).map(program => (
                <li key={program.id}><span className="hover:text-white transition-colors">{program.title}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow-400">Kontak Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <span className="opacity-70">📍</span>
                <span>{content.schoolInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="opacity-70">📞</span>
                <span>{content.schoolInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="opacity-70">✉️</span>
                <span>{content.schoolInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-emerald-800 text-center text-xs text-emerald-400">
          <p>© {new Date().getFullYear()} TK {content.schoolInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
