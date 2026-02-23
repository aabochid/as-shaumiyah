
import React, { useState, useEffect } from 'react';
import { getSettings } from '../services/settingsService';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [content, setContent] = useState(getSettings());

  useEffect(() => {
    const handleStorageChange = () => setContent(getSettings());
    const interval = setInterval(handleStorageChange, 2000);
    return () => clearInterval(interval);
  }, []);

  const categories = ['All', ...new Set(content.gallery.map(item => item.category))];

  const filteredItems = activeTab === 'All' 
    ? content.gallery 
    : content.gallery.filter(item => item.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Galeri & Berita</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Momen berharga dan dokumentasi kegiatan harian siswa TK {content.schoolInfo.name}.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2 rounded-full font-bold transition-all ${
              activeTab === tab 
                ? 'bg-emerald-600 text-white shadow-lg' 
                : 'bg-white text-slate-600 hover:bg-emerald-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-[2rem] aspect-square shadow-md">
            <img src={item.imageUrl} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-emerald-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
              <span className="bg-yellow-400 text-yellow-900 text-[10px] font-black px-2 py-1 rounded uppercase mb-2">{item.category}</span>
              <h4 className="text-white font-bold text-lg">{item.caption}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* News Section */}
      <section className="pt-20 space-y-12">
        <h2 className="text-3xl font-extrabold text-slate-900">Berita Terbaru</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {content.news.map((news) => (
             <div key={news.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-all">
               <div className="text-sm font-bold text-emerald-600 mb-2">{news.date}</div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">{news.title}</h3>
               <p className="text-slate-600 text-sm mb-6 leading-relaxed">{news.summary}</p>
               <a href="#" className="text-emerald-700 font-extrabold flex items-center gap-2 hover:gap-3 transition-all">
                 Baca Selengkapnya <span>→</span>
               </a>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
