
import React, { useState } from 'react';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    phone: '',
    email: '',
    childAge: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih Ayah/Bunda " + formData.parentName + ". Formulir pendaftaran awal telah diterima. Tim admin kami akan segera menghubungi Anda.");
  };

  const steps = [
    { title: 'Pendaftaran Online', desc: 'Isi formulir pendaftaran awal melalui website ini.' },
    { title: 'Verifikasi & Wawancara', desc: 'Orang tua dan calon siswa diundang untuk sesi silaturahmi.' },
    { title: 'Observasi Anak', desc: 'Anak akan diajak bermain bersama guru untuk melihat kesiapannya.' },
    { title: 'Daftar Ulang', desc: 'Pelunasan biaya administrasi dan penyerahan dokumen fisik.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Pendaftaran Siswa Baru</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Mari bergabung bersama keluarga besar TK As-Shaumiyah dan berikan pondasi terbaik bagi masa depan si kecil.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Registration Steps */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold text-slate-900">Prosedur Pendaftaran (PPDB)</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">{step.title}</h4>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-yellow-50 rounded-3xl border border-yellow-100">
            <h3 className="font-bold text-xl text-yellow-900 mb-4">Estimasi Biaya</h3>
            <div className="space-y-3 text-yellow-800">
              <div className="flex justify-between border-b border-yellow-200 pb-2">
                <span>Pendaftaran & Observasi</span>
                <span className="font-bold">Rp 500.000</span>
              </div>
              <div className="flex justify-between border-b border-yellow-200 pb-2">
                <span>Uang Pangkal (Sekali bayar)</span>
                <span className="font-bold">Rp 5.500.000</span>
              </div>
              <div className="flex justify-between border-b border-yellow-200 pb-2">
                <span>SPP Bulanan</span>
                <span className="font-bold">Rp 650.000</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>Perlengkapan & Seragam</span>
                <span className="font-bold">Rp 1.200.000</span>
              </div>
            </div>
            <p className="mt-6 text-xs text-yellow-700 italic">
              * Biaya di atas adalah estimasi dan dapat berubah sesuai kebijakan sekolah. Tersedia skema cicilan untuk uang pangkal.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-emerald-50">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Formulir Minat Awal</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nama Ayah / Bunda</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nama Lengkap Anak</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  value={formData.childName}
                  onChange={(e) => setFormData({...formData, childName: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nomor WhatsApp Aktif</label>
              <input 
                type="tel" 
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Usia Anak Sekarang</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                value={formData.childAge}
                onChange={(e) => setFormData({...formData, childAge: e.target.value})}
              >
                <option value="">Pilih Usia</option>
                <option value="3">3 Tahun (KB)</option>
                <option value="4">4 Tahun (TK A)</option>
                <option value="5">5 Tahun (TK B)</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-2xl shadow-lg hover:bg-emerald-700 transition-all transform hover:scale-[1.02]"
            >
              Kirim Data Pendaftaran
            </button>
          </form>
          <p className="mt-8 text-center text-sm text-slate-500">
            Punya pertanyaan lain? <a href="https://wa.me/6287822409211" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold underline">Hubungi admin WhatsApp kami.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
