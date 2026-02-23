
import React, { useState, useEffect } from 'react';
import { getSettings } from '../services/settingsService';

const Facilities: React.FC = () => {
  const [content, setContent] = useState(getSettings());

  useEffect(() => {
    const handleStorageChange = () => setContent(getSettings());
    const interval = setInterval(handleStorageChange, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Fasilitas Sekolah</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Lingkungan yang aman dan mendukung eksplorasi tak terbatas bagi setiap anak.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {content.facilities.map((fac) => (
          <div key={fac.id} className="group flex flex-col">
            <div className="relative overflow-hidden rounded-[2.5rem] h-64 mb-6 shadow-lg">
              <img src={fac.imageUrl} alt={fac.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{fac.title}</h3>
            <p className="text-slate-600 leading-relaxed">{fac.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-emerald-50 rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-12 border border-emerald-100">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-extrabold text-emerald-900">Lingkungan Belajar "Green & Clean"</h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            Kami percaya bahwa lingkungan yang asri dan bersih adalah kunci kenyamanan belajar anak. Seluruh area sekolah didesain dengan sirkulasi udara yang baik dan pencahayaan alami yang optimal.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm">🌿 Area Hijau</span>
            <span className="px-4 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm">🧼 Sterilisasi Rutin</span>
            <span className="px-4 py-2 bg-white rounded-full text-emerald-700 font-bold shadow-sm">📹 CCTV 24 Jam</span>
          </div>
        </div>
        <div className="flex-1">
          <img src="https://picsum.photos/id/134/600/400" alt="Garden" className="rounded-3xl shadow-xl rotate-2" />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
