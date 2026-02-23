
import React, { useState, useEffect } from 'react';
import { getSettings } from '../services/settingsService';

const Programs: React.FC = () => {
  const [content, setContent] = useState(getSettings());

  useEffect(() => {
    const handleStorageChange = () => setContent(getSettings());
    const interval = setInterval(handleStorageChange, 2000);
    return () => clearInterval(interval);
  }, []);

  const extracurriculars = [
    { title: 'Memanah', img: 'https://picsum.photos/id/400/500/300', note: 'Melatih Fokus & Konsentrasi' },
    { title: 'Manasik Haji', img: 'https://picsum.photos/id/401/500/300', note: 'Mengenal Rukun Islam ke-5' },
    { title: 'Seni Lukis', img: 'https://picsum.photos/id/402/500/300', note: 'Eksplorasi Warna & Bentuk' },
    { title: 'Renang', img: 'https://picsum.photos/id/403/500/300', note: 'Ketangkasan Fisik' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Program Pendidikan</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Kurikulum komprehensif untuk menyeimbangkan kecerdasan intelektual dan kesholehan hati.</p>
      </div>

      {/* Main Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.programs.map((prog) => (
          <div key={prog.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              {prog.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{prog.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{prog.description}</p>
          </div>
        ))}
      </div>

      {/* Extracurriculars */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Ekstrakurikuler</h2>
            <p className="text-slate-600">Mengembangkan minat dan bakat di luar jam kelas formal.</p>
          </div>
          <div className="h-1 bg-emerald-100 flex-grow mx-8 hidden md:block rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {extracurriculars.map((ex, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-[2rem] group h-80">
              <img src={ex.img} alt={ex.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white">{ex.title}</h4>
                <p className="text-emerald-300 text-sm font-medium">{ex.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Routine Summary */}
      <section className="bg-yellow-400 rounded-[3rem] p-12 text-yellow-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Agenda Harian Santri</h2>
          <div className="space-y-6">
            {[
              { time: '07:30 - 08:00', activity: 'Ikrar Pagi & Senam Ceria' },
              { time: '08:00 - 08:30', activity: 'Shalat Dhuha & Muraja\'ah Hafalan' },
              { time: '08:30 - 10:00', activity: 'Pembelajaran Tematik & Sentra' },
              { time: '10:00 - 10:30', activity: 'Istirahat & Snack Time (Adab Makan)' },
              { time: '10:30 - 11:30', activity: 'Kegiatan Kreatif & Penutup' },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-white/40 p-4 rounded-2xl border border-yellow-500/20">
                <span className="font-bold">{item.time}</span>
                <span className="font-medium text-right">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
