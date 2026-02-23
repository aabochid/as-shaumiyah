
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSettings, saveSettings, resetSettings } from '../services/settingsService';
import { SiteContent, Program, Facility, GalleryItem, NewsItem } from '../types';

const AdminDashboard: React.FC = () => {
  const [content, setContent] = useState<SiteContent>(getSettings());
  const [activeTab, setActiveTab] = useState<'info' | 'home' | 'programs' | 'facilities' | 'gallery' | 'news'>('info');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('isAdmin') !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleSave = () => {
    saveSettings(content);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleReset = () => {
    if (confirm("Reset semua konten ke bawaan? Perubahan yang belum disimpan akan hilang.")) {
      resetSettings();
      setContent(getSettings());
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    navigate('/');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderInfoTab = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        <span className="text-emerald-600">🏗️</span> Identitas Sekolah
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Nama Sekolah</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
            value={content.schoolInfo.name}
            onChange={(e) => setContent({ ...content, schoolInfo: { ...content.schoolInfo, name: e.target.value.toUpperCase() } })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
            value={content.schoolInfo.email}
            onChange={(e) => setContent({ ...content, schoolInfo: { ...content.schoolInfo, email: e.target.value } })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Telepon</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
            value={content.schoolInfo.phone}
            onChange={(e) => setContent({ ...content, schoolInfo: { ...content.schoolInfo, phone: e.target.value } })}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">WhatsApp (Format: 628...)</label>
          <input 
            type="text" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
            value={content.schoolInfo.whatsapp}
            onChange={(e) => setContent({ ...content, schoolInfo: { ...content.schoolInfo, whatsapp: e.target.value } })}
          />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-bold text-slate-700">Alamat</label>
          <textarea 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
            rows={2}
            value={content.schoolInfo.address}
            onChange={(e) => setContent({ ...content, schoolInfo: { ...content.schoolInfo, address: e.target.value } })}
          />
        </div>
      </div>
      <div className="space-y-4">
        <label className="text-sm font-bold text-slate-700 block">Logo Sekolah</label>
        <div className="flex items-center gap-6 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
          <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-emerald-200 shadow-sm">
            {content.schoolInfo.logoUrl ? (
              <img src={content.schoolInfo.logoUrl} alt="Logo Preview" className="w-full h-full object-contain" />
            ) : (
              <span className="text-xs text-slate-400 font-bold text-center p-2">Logo Default</span>
            )}
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-xs text-slate-600">Unggah file gambar (PNG/JPG) untuk mengganti logo default.</p>
            <input type="file" accept="image/*" className="text-xs" onChange={(e) => handleImageUpload(e, (url) => setContent({ ...content, schoolInfo: { ...content.schoolInfo, logoUrl: url } }))} />
          </div>
        </div>
      </div>
    </div>
  );

  const renderHomeTab = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
        <span className="text-emerald-600">🏠</span> Konten Beranda
      </h2>
      <div className="space-y-6 bg-slate-50 p-6 rounded-2xl">
        <h3 className="font-bold text-slate-800">Hero Section</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Pengumuman Atas</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
              value={content.hero.announcement}
              onChange={(e) => setContent({ ...content, hero: { ...content.hero, announcement: e.target.value } })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Judul Utama</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
              value={content.hero.title}
              onChange={(e) => setContent({ ...content, hero: { ...content.hero, title: e.target.value } })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Sub-judul</label>
            <textarea 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none"
              rows={3}
              value={content.hero.subtitle}
              onChange={(e) => setContent({ ...content, hero: { ...content.hero, subtitle: e.target.value } })}
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-bold text-slate-800">Fitur Utama (3 Ikon)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.features.map((feature, idx) => (
            <div key={idx} className="p-4 bg-white border border-slate-100 rounded-2xl space-y-3">
              <input 
                type="text" 
                className="w-full text-center text-2xl p-2 bg-slate-50 rounded-lg"
                value={feature.icon}
                onChange={(e) => {
                  const newFeatures = [...content.features];
                  newFeatures[idx].icon = e.target.value;
                  setContent({ ...content, features: newFeatures });
                }}
              />
              <input 
                type="text" 
                className="w-full font-bold text-sm p-2 border border-slate-100 rounded-lg"
                value={feature.title}
                onChange={(e) => {
                  const newFeatures = [...content.features];
                  newFeatures[idx].title = e.target.value;
                  setContent({ ...content, features: newFeatures });
                }}
              />
              <textarea 
                className="w-full text-xs p-2 border border-slate-100 rounded-lg"
                rows={3}
                value={feature.description}
                onChange={(e) => {
                  const newFeatures = [...content.features];
                  newFeatures[idx].description = e.target.value;
                  setContent({ ...content, features: newFeatures });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProgramsTab = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-emerald-600">🎓</span> Program Pendidikan
        </h2>
        <button 
          onClick={() => setContent({ ...content, programs: [...content.programs, { id: Date.now().toString(), title: 'Program Baru', description: 'Deskripsi program...', icon: '🌟' }] })}
          className="px-4 py-2 bg-emerald-100 text-emerald-700 font-bold rounded-xl hover:bg-emerald-200 transition-all text-sm"
        >
          + Tambah Program
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {content.programs.map((program) => (
          <div key={program.id} className="p-6 bg-white border border-slate-100 rounded-2xl flex flex-col md:flex-row gap-4 items-start">
            <input 
              type="text" 
              className="w-16 h-16 text-3xl text-center bg-slate-50 rounded-xl"
              value={program.icon}
              onChange={(e) => setContent({ ...content, programs: content.programs.map(p => p.id === program.id ? { ...p, icon: e.target.value } : p) })}
            />
            <div className="flex-1 space-y-2 w-full">
              <input 
                type="text" 
                className="w-full font-bold text-lg p-2 bg-slate-50 rounded-lg"
                value={program.title}
                onChange={(e) => setContent({ ...content, programs: content.programs.map(p => p.id === program.id ? { ...p, title: e.target.value } : p) })}
              />
              <textarea 
                className="w-full text-sm p-2 bg-slate-50 rounded-lg"
                rows={2}
                value={program.description}
                onChange={(e) => setContent({ ...content, programs: content.programs.map(p => p.id === program.id ? { ...p, description: e.target.value } : p) })}
              />
            </div>
            <button 
              onClick={() => setContent({ ...content, programs: content.programs.filter(p => p.id !== program.id) })}
              className="p-2 text-red-400 hover:text-red-600 transition-all"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFacilitiesTab = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-emerald-600">🏫</span> Fasilitas Sekolah
        </h2>
        <button 
          onClick={() => setContent({ ...content, facilities: [...content.facilities, { id: Date.now().toString(), title: 'Fasilitas Baru', description: 'Deskripsi fasilitas...', imageUrl: 'https://picsum.photos/800/600' }] })}
          className="px-4 py-2 bg-emerald-100 text-emerald-700 font-bold rounded-xl hover:bg-emerald-200 transition-all text-sm"
        >
          + Tambah Fasilitas
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.facilities.map((facility) => (
          <div key={facility.id} className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="aspect-video relative group">
              <img src={facility.imageUrl} alt={facility.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <input type="file" accept="image/*" className="hidden" id={`file-${facility.id}`} onChange={(e) => handleImageUpload(e, (url) => setContent({ ...content, facilities: content.facilities.map(f => f.id === facility.id ? { ...f, imageUrl: url } : f) }))} />
                <label htmlFor={`file-${facility.id}`} className="px-4 py-2 bg-white text-slate-900 font-bold rounded-xl cursor-pointer">Ganti Gambar</label>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <input 
                type="text" 
                className="w-full font-bold text-lg p-2 bg-slate-50 rounded-lg"
                value={facility.title}
                onChange={(e) => setContent({ ...content, facilities: content.facilities.map(f => f.id === facility.id ? { ...f, title: e.target.value } : f) })}
              />
              <textarea 
                className="w-full text-sm p-2 bg-slate-50 rounded-lg"
                rows={2}
                value={facility.description}
                onChange={(e) => setContent({ ...content, facilities: content.facilities.map(f => f.id === facility.id ? { ...f, description: e.target.value } : f) })}
              />
              <button 
                onClick={() => setContent({ ...content, facilities: content.facilities.filter(f => f.id !== facility.id) })}
                className="w-full py-2 text-red-500 font-bold text-sm hover:bg-red-50 rounded-xl transition-all"
              >
                Hapus Fasilitas
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGalleryTab = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-emerald-600">🖼️</span> Galeri Foto
        </h2>
        <button 
          onClick={() => setContent({ ...content, gallery: [...content.gallery, { id: Date.now().toString(), imageUrl: 'https://picsum.photos/800/600', caption: 'Foto Baru', category: 'Umum' }] })}
          className="px-4 py-2 bg-emerald-100 text-emerald-700 font-bold rounded-xl hover:bg-emerald-200 transition-all text-sm"
        >
          + Tambah Foto
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {content.gallery.map((item) => (
          <div key={item.id} className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
            <img src={item.imageUrl} alt={item.caption} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
              <div className="flex justify-end">
                <button onClick={() => setContent({ ...content, gallery: content.gallery.filter(g => g.id !== item.id) })} className="text-white">🗑️</button>
              </div>
              <div className="space-y-2">
                <input 
                  type="text" 
                  className="w-full text-[10px] p-1 bg-white/20 text-white rounded outline-none"
                  value={item.caption}
                  onChange={(e) => setContent({ ...content, gallery: content.gallery.map(g => g.id === item.id ? { ...g, caption: e.target.value } : g) })}
                  placeholder="Caption..."
                />
                <input type="file" accept="image/*" className="hidden" id={`gal-${item.id}`} onChange={(e) => handleImageUpload(e, (url) => setContent({ ...content, gallery: content.gallery.map(g => g.id === item.id ? { ...g, imageUrl: url } : g) }))} />
                <label htmlFor={`gal-${item.id}`} className="block text-center text-[10px] py-1 bg-emerald-500 text-white rounded cursor-pointer">Ganti</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNewsTab = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-emerald-600">📰</span> Berita & Kegiatan
        </h2>
        <button 
          onClick={() => setContent({ ...content, news: [...content.news, { id: Date.now().toString(), title: 'Berita Baru', date: new Date().toISOString().split('T')[0], category: 'Berita', summary: 'Ringkasan berita...', imageUrl: 'https://picsum.photos/800/600' }] })}
          className="px-4 py-2 bg-emerald-100 text-emerald-700 font-bold rounded-xl hover:bg-emerald-200 transition-all text-sm"
        >
          + Tambah Berita
        </button>
      </div>
      <div className="space-y-4">
        {content.news.map((item) => (
          <div key={item.id} className="p-6 bg-white border border-slate-100 rounded-3xl flex flex-col md:flex-row gap-6 shadow-sm">
            <div className="w-full md:w-48 aspect-video rounded-2xl overflow-hidden bg-slate-50 relative group">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <input type="file" accept="image/*" className="hidden" id={`news-${item.id}`} onChange={(e) => handleImageUpload(e, (url) => setContent({ ...content, news: content.news.map(n => n.id === item.id ? { ...n, imageUrl: url } : n) }))} />
                <label htmlFor={`news-${item.id}`} className="text-[10px] px-3 py-1 bg-white rounded-full cursor-pointer font-bold">Ganti</label>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap gap-2">
                <select 
                  className="text-xs font-bold px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg outline-none"
                  value={item.category}
                  onChange={(e) => setContent({ ...content, news: content.news.map(n => n.id === item.id ? { ...n, category: e.target.value as any } : n) })}
                >
                  <option value="Berita">Berita</option>
                  <option value="Artikel">Artikel</option>
                  <option value="Kegiatan">Kegiatan</option>
                </select>
                <input 
                  type="date" 
                  className="text-xs px-2 py-1 bg-slate-50 rounded-lg outline-none"
                  value={item.date}
                  onChange={(e) => setContent({ ...content, news: content.news.map(n => n.id === item.id ? { ...n, date: e.target.value } : n) })}
                />
              </div>
              <input 
                type="text" 
                className="w-full font-bold text-lg p-2 bg-slate-50 rounded-lg"
                value={item.title}
                onChange={(e) => setContent({ ...content, news: content.news.map(n => n.id === item.id ? { ...n, title: e.target.value } : n) })}
              />
              <textarea 
                className="w-full text-sm p-2 bg-slate-50 rounded-lg"
                rows={2}
                value={item.summary}
                onChange={(e) => setContent({ ...content, news: content.news.map(n => n.id === item.id ? { ...n, summary: e.target.value } : n) })}
              />
              <button 
                onClick={() => setContent({ ...content, news: content.news.filter(n => n.id !== item.id) })}
                className="text-red-500 text-xs font-bold hover:underline"
              >
                Hapus Berita
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-emerald-900 p-8 rounded-[2.5rem] shadow-xl text-white">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-extrabold">Panel Kendali Admin</h1>
          <p className="text-emerald-300">Kelola seluruh konten website TK {content.schoolInfo.name}</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handleLogout}
            className="px-6 py-2 bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all"
          >
            Keluar
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:w-64 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
          {[
            { id: 'info', label: 'Identitas', icon: '🏗️' },
            { id: 'home', label: 'Beranda', icon: '🏠' },
            { id: 'programs', label: 'Program', icon: '🎓' },
            { id: 'facilities', label: 'Fasilitas', icon: '🏫' },
            { id: 'gallery', label: 'Galeri', icon: '🖼️' },
            { id: 'news', label: 'Berita', icon: '📰' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                : 'bg-white text-slate-600 hover:bg-emerald-50'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-emerald-50 min-h-[600px]">
            {activeTab === 'info' && renderInfoTab()}
            {activeTab === 'home' && renderHomeTab()}
            {activeTab === 'programs' && renderProgramsTab()}
            {activeTab === 'facilities' && renderFacilitiesTab()}
            {activeTab === 'gallery' && renderGalleryTab()}
            {activeTab === 'news' && renderNewsTab()}

            {/* Action Buttons */}
            <div className="mt-12 pt-8 border-t border-emerald-50 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleSave}
                className="flex-1 py-4 bg-emerald-600 text-white font-extrabold rounded-2xl shadow-lg hover:bg-emerald-700 transition-all transform hover:scale-[1.01]"
              >
                Simpan Semua Perubahan
              </button>
              <button 
                onClick={handleReset}
                className="px-8 py-4 bg-slate-100 text-slate-500 font-bold rounded-2xl hover:bg-slate-200 transition-all"
              >
                Reset Bawaan
              </button>
            </div>
            {success && (
              <p className="mt-4 text-center text-emerald-600 font-bold animate-bounce">✨ Konten berhasil diperbarui!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
