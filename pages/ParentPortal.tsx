
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ParentPortal: React.FC = () => {
  const data = [
    { name: 'Adab', value: 95 },
    { name: 'Hafalan', value: 88 },
    { name: 'Motorik', value: 92 },
    { name: 'Kognitif', value: 85 },
    { name: 'Sosial', value: 90 },
  ];

  const COLORS = ['#10b981', '#fbbf24', '#3b82f6', '#f87171', '#a78bfa'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Portal Orang Tua</h1>
          <p className="text-slate-600">Assalamu'alaikum, Ayah Ahmad!</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-emerald-50">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700">AZ</div>
          <div>
            <div className="font-bold text-slate-900">Abdullah Zaid</div>
            <div className="text-xs text-emerald-600 font-semibold">Kelas TK B - Ar-Rahman</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Summary Stats */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-50">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Grafik Perkembangan Bulan Ini</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} hide />
                  <Tooltip cursor={{fill: '#f0fdf4'}} />
                  <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-50">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Hafalan Surat Baru</h3>
               <div className="space-y-4">
                 <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="font-bold text-emerald-800">Al-Ghasyiyah (1-10)</div>
                    <div className="text-sm text-emerald-600 mt-1">Status: Lancar (Muttashil)</div>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="font-bold text-slate-700">Al-A'la (Full)</div>
                    <div className="text-sm text-slate-500 mt-1">Status: Muraja'ah</div>
                 </div>
               </div>
             </div>

             <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-50">
               <h3 className="text-xl font-bold text-slate-900 mb-6">Absensi Bulan Maret</h3>
               <div className="grid grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-emerald-50 rounded-2xl">
                    <div className="text-2xl font-black text-emerald-700">20</div>
                    <div className="text-xs font-bold text-emerald-600">HADIR</div>
                 </div>
                 <div className="p-4 bg-yellow-50 rounded-2xl">
                    <div className="text-2xl font-black text-yellow-700">1</div>
                    <div className="text-xs font-bold text-yellow-600">IZIN</div>
                 </div>
                 <div className="p-4 bg-red-50 rounded-2xl">
                    <div className="text-2xl font-black text-red-700">0</div>
                    <div className="text-xs font-bold text-red-600">ALFA</div>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Right: Agenda/Notifications */}
        <div className="space-y-8">
          <div className="bg-emerald-900 text-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
               📅 Agenda Mendatang
            </h3>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <div className="bg-emerald-800 p-3 rounded-xl h-fit text-center min-w-[60px]">
                    <div className="text-sm font-bold">12</div>
                    <div className="text-[10px] uppercase font-black">Mar</div>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-400">Manasik Haji Cilik</div>
                    <div className="text-sm text-emerald-200">Lapangan Sekolah, 07:30 WIB</div>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="bg-emerald-800 p-3 rounded-xl h-fit text-center min-w-[60px]">
                    <div className="text-sm font-bold">20</div>
                    <div className="text-[10px] uppercase font-black">Mar</div>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-400">Market Day</div>
                    <div className="text-sm text-emerald-200">Aula Utama, Melatih Kewirausahaan</div>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="bg-emerald-800 p-3 rounded-xl h-fit text-center min-w-[60px]">
                    <div className="text-sm font-bold">28</div>
                    <div className="text-[10px] uppercase font-black">Mar</div>
                  </div>
                  <div>
                    <div className="font-bold text-yellow-400">Pembagian Raport UTS</div>
                    <div className="text-sm text-emerald-200">Online/Offline via Zoom</div>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-50">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Pesan dari Guru</h3>
            <div className="p-4 bg-blue-50 text-blue-800 rounded-2xl text-sm italic">
              "Zaid menunjukkan kemajuan yang luar biasa pada interaksi sosialnya minggu ini. Dia mulai berani memimpin doa sebelum makan di depan teman-temannya."
              <div className="mt-2 font-bold text-right text-xs not-italic">- Ustazah Fatimah</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentPortal;
