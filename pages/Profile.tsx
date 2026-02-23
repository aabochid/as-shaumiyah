
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      {/* Header */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">Mengenal Kami</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Membangun pondasi spiritual dan intelektual anak sejak dini dengan kasih sayang dan keteladanan.
        </p>
      </div>

      {/* History */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <h2 className="text-3xl font-bold text-emerald-900">Sejarah Sekolah</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              TK As-Shaumiyah didirikan pada tahun 2010 oleh Yayasan Al-Mubarak dengan semangat untuk menyediakan pendidikan anak usia dini yang tidak hanya fokus pada akademis, tetapi juga pembentukan karakter Islami (Akhlakul Karimah).
            </p>
            <p>
              Berawal dari sebuah bangunan kecil dengan 15 siswa, kini As-Shaumiyah telah berkembang menjadi salah satu sekolah rujukan di Kota Tangerang dengan fasilitas modern dan metode pembelajaran yang terus berinovasi mengikuti zaman tanpa meninggalkan nilai tradisi Islami.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="https://picsum.photos/id/160/800/600" 
            alt="School Building" 
            className="rounded-[3rem] shadow-2xl"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-emerald-900 text-white rounded-[4rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/30 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-yellow-400">Visi Kami</h3>
            <p className="text-xl font-medium leading-relaxed italic">
              "Menjadi pusat pendidikan anak usia dini yang unggul dalam melahirkan generasi yang bertakwa, cerdas, kreatif, dan mandiri berlandaskan Al-Qur'an dan As-Sunnah."
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-yellow-400">Misi Kami</h3>
            <ul className="space-y-4 list-disc list-inside text-emerald-100">
              <li>Menyelenggarakan pendidikan berbasis nilai-nilai Islam dalam setiap aspek kegiatan.</li>
              <li>Mengembangkan seluruh potensi kecerdasan anak (Intelektual, Emosional, dan Spiritual).</li>
              <li>Menciptakan lingkungan belajar yang aman, nyaman, and menyenangkan.</li>
              <li>Menjalin kemitraan yang harmonis dengan orang tua untuk tumbuh kembang anak yang optimal.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center text-slate-900">Struktur Organisasi</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { name: 'Dr. H. Ahmad Fauzi', role: 'Ketua Yayasan', img: 'https://picsum.photos/id/64/300/300' },
             { name: 'Ustazah Siti Aminah', role: 'Kepala Sekolah', img: 'https://picsum.photos/id/65/300/300' },
             { name: 'Ustaz Ridwan Kamil', role: 'Bag. Kesiswaan', img: 'https://picsum.photos/id/91/300/300' },
             { name: 'Ibu Ratna Sari', role: 'Bag. Keuangan', img: 'https://picsum.photos/id/102/300/300' },
           ].map((person, idx) => (
             <div key={idx} className="text-center group">
               <div className="relative mb-4 overflow-hidden rounded-3xl">
                 <img src={person.img} alt={person.name} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all" />
               </div>
               <h4 className="font-bold text-slate-900">{person.name}</h4>
               <p className="text-sm text-emerald-600 font-semibold">{person.role}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Profile;
