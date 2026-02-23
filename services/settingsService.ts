
import { SiteContent } from '../types';

const DEFAULT_CONTENT: SiteContent = {
  hero: {
    announcement: "Telah Dibuka Pendaftaran Siswa Baru 2025/2026",
    title: "Mencetak Generasi Berkarakter Qur'ani",
    subtitle: "Pendidikan anak usia dini yang memadukan kurikulum modern dengan pembiasaan nilai-nilai luhur Islami untuk masa depan gemilang bersama TK AS-SHAUMIYAH.",
    imageUrl: "https://picsum.photos/id/119/800/600"
  },
  features: [
    {
      title: "Pembiasaan Ibadah",
      description: "Shalat Dhuha berjamaah dan hafalan doa harian menjadi rutinitas penuh makna.",
      icon: "🕌"
    },
    {
      title: "Tahfidz Junior",
      description: "Menghafal Juz Amma dengan metode yang menyenangkan bagi anak-anak.",
      icon: "📖"
    },
    {
      title: "Kreativitas Tak Batas",
      description: "Eksplorasi bakat melalui seni, kolase, dan berbagai proyek kerajinan tangan.",
      icon: "🎨"
    }
  ],
  programs: [
    { id: '1', title: 'Kelompok Bermain (KB)', description: 'Untuk anak usia 3-4 tahun, fokus pada sosialisasi dan motorik.', icon: '🧸' },
    { id: '2', title: 'TK A', description: 'Untuk anak usia 4-5 tahun, pengenalan huruf, angka, dan adab.', icon: '✏️' },
    { id: '3', title: 'TK B', description: 'Untuk anak usia 5-6 tahun, persiapan masuk SD dan kemandirian.', icon: '🎒' }
  ],
  facilities: [
    { id: '1', title: 'Ruang Kelas Nyaman', description: 'Dilengkapi AC dan alat peraga edukatif modern.', imageUrl: 'https://picsum.photos/id/20/800/600' },
    { id: '2', title: 'Area Bermain Outdoor', description: 'Taman bermain yang aman dan menyenangkan.', imageUrl: 'https://picsum.photos/id/21/800/600' }
  ],
  gallery: [
    { id: '1', imageUrl: 'https://picsum.photos/id/10/800/600', caption: 'Kegiatan Outbound', category: 'Kegiatan' },
    { id: '2', imageUrl: 'https://picsum.photos/id/11/800/600', caption: 'Lomba Mewarnai', category: 'Lomba' }
  ],
  news: [
    { id: '1', title: 'Kunjungan ke Perpustakaan', date: '2025-02-15', category: 'Kegiatan', summary: 'Siswa TK B berkunjung ke perpustakaan daerah.', imageUrl: 'https://picsum.photos/id/12/800/600' }
  ],
  schoolInfo: {
    name: "AS-SHAUMIYAH",
    logoUrl: "",
    address: "Jl. Pendidikan No. 123, Kota Cerdas",
    phone: "021-12345678",
    email: "info@asshaumiyah.sch.id",
    whatsapp: "6281234567890",
    instagram: "@tk_asshaumiyah",
    facebook: "TK As-Shaumiyah"
  }
};

export const getSettings = (): SiteContent => {
  const saved = localStorage.getItem('tk_asshaumiyah_content');
  return saved ? JSON.parse(saved) : DEFAULT_CONTENT;
};

export const saveSettings = (content: SiteContent) => {
  localStorage.setItem('tk_asshaumiyah_content', JSON.stringify(content));
};

export const resetSettings = () => {
  localStorage.removeItem('tk_asshaumiyah_content');
};
