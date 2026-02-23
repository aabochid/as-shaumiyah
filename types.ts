
export interface NavItem {
  label: string;
  href: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Berita' | 'Artikel' | 'Kegiatan';
  summary: string;
  imageUrl: string;
}

export interface StudentWork {
  id: string;
  studentName: string;
  title: string;
  imageUrl: string;
  category: 'Lukisan' | 'Hafalan' | 'Kerajinan';
}

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  category: string;
}

export interface SiteContent {
  hero: {
    announcement: string;
    title: string;
    subtitle: string;
    imageUrl: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  programs: Program[];
  facilities: Facility[];
  gallery: GalleryItem[];
  news: NewsItem[];
  schoolInfo: {
    name: string;
    logoUrl: string;
    address: string;
    phone: string;
    email: string;
    whatsapp: string;
    instagram: string;
    facebook: string;
  };
}
