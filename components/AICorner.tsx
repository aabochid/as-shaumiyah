
import React, { useState, useEffect } from 'react';
import { generateIslamicStory, generateParentingTip } from '../services/geminiService';

const AICorner: React.FC = () => {
  const [story, setStory] = useState<string>('');
  const [tips, setTips] = useState<string>('');
  const [loadingStory, setLoadingStory] = useState(false);
  const [loadingTips, setLoadingTips] = useState(false);
  const [topic, setTopic] = useState('Kejujuran');

  const fetchStory = async () => {
    setLoadingStory(true);
    const result = await generateIslamicStory(topic);
    setStory(result || '');
    setLoadingStory(false);
  };

  const fetchTips = async () => {
    setLoadingTips(true);
    const result = await generateParentingTip();
    setTips(result || '');
    setLoadingTips(false);
  };

  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Kisah Inspiratif AI */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-lg border border-emerald-50 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="text-3xl">✨</span> Kisah Inspiratif AI
            </h2>
            <div className="flex gap-2">
              <select 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="bg-emerald-50 text-emerald-700 text-sm font-bold px-3 py-1 rounded-full border-none focus:ring-2 focus:ring-emerald-200"
              >
                <option value="Kejujuran">Kejujuran</option>
                <option value="Sabar">Sabar</option>
                <option value="Berbagi">Berbagi</option>
                <option value="Hormat Orang Tua">Hormat</option>
              </select>
              <button 
                onClick={fetchStory}
                disabled={loadingStory}
                className="bg-emerald-600 text-white text-sm font-bold px-4 py-1 rounded-full hover:bg-emerald-700 disabled:opacity-50"
              >
                {loadingStory ? 'Menulis...' : 'Mulai Kisah'}
              </button>
            </div>
          </div>
          
          <div className="flex-grow overflow-y-auto max-h-[400px] prose prose-emerald prose-sm">
            {story ? (
              <div className="whitespace-pre-wrap text-slate-700">{story}</div>
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-2xl text-slate-400 font-medium">
                Klik tombol "Mulai Kisah" untuk membuat cerita Islami baru dari AI khusus untuk si kecil.
              </div>
            )}
          </div>
        </div>

        {/* Artikel Parenting AI */}
        <div className="bg-emerald-900 rounded-[2.5rem] p-10 shadow-lg flex flex-col h-full text-white">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-extrabold flex items-center gap-2">
              <span className="text-3xl">🧠</span> Pojok Parenting
            </h2>
            <button 
              onClick={fetchTips}
              disabled={loadingTips}
              className="bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full hover:bg-yellow-500 disabled:opacity-50"
            >
              {loadingTips ? 'Memuat...' : 'Segarkan Tips'}
            </button>
          </div>
          
          <div className="flex-grow prose prose-invert prose-sm">
             {tips ? (
               <div className="whitespace-pre-wrap text-emerald-100">{tips}</div>
             ) : (
               <div className="animate-pulse space-y-4">
                 <div className="h-4 bg-emerald-800 rounded w-3/4"></div>
                 <div className="h-4 bg-emerald-800 rounded w-5/6"></div>
                 <div className="h-4 bg-emerald-800 rounded w-2/3"></div>
               </div>
             )}
          </div>
          <div className="mt-8 pt-8 border-t border-emerald-800 text-emerald-400 text-xs italic">
            Tips ini dihasilkan oleh AI berdasarkan nilai-nilai pendidikan Islam untuk membantu Ayah & Bunda di rumah.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICorner;
