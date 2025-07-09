// data/projects.js

/**
 * Array of project objects.
 * Each object represents a geospatial project with its details.
 */
export const projects = [
  {
    // A unique identifier for the project, used in URLs
    slug: 'pemantauan-deforestasi-kalimantan',
    // Title of the project
    title: 'Pemantauan Deforestasi di Kalimantan',
    // Path to the thumbnail image for the project card
    thumbnail: '/images/deforestasi-thumbnail.png',
    // Array of tags or keywords related to the project
    tags: ['Remote Sensing', 'Klasifikasi', 'Landsat', 'Time-Series', 'Google Earth Engine'],
    // Detailed description of the project
    description: 'Proyek ini menggunakan data citra satelit Landsat untuk menganalisis dan memvisualisasikan laju deforestasi di provinsi Kalimantan Tengah dari tahun 2010 hingga 2025. Metodologi yang digunakan adalah klasifikasi tutupan lahan supervised dan analisis perubahan temporal, memanfaatkan kekuatan komputasi awan dari Google Earth Engine.',
    // URL to the Google Earth Engine (GEE) application or associated dashboard
    gee_app_url: 'https://lookerstudio.google.com/embed/reporting/43dc4b86-c4b5-4338-89c0-abb328dd3874/page/p_9n3j3d7h2c', // GANTI DENGAN URL GEE APP ANDA YANG SEBENARNYA!
    // Optional: add more fields like 'repo_url', 'demo_url', 'tools_used', et
  // Anda bisa menambahkan lebih banyak proyek di sini
  // --- TAMBAHKAN PROYEK BARU DI BAWAH INI ---
  },
  {
    slug: 'sdgs-solok-selatan', // Buat slug yang unik dan deskriptif
    title: 'Indikator SDGs Berbasis Geospasial di Solok Selatan', // Judul proyek Anda
    thumbnail: '/images/sdgs-solok-selatan-thumbnail.png', // Ganti dengan path ke gambar thumbnail yang relevan
    tags: ['SDGs', 'Analisis Spasial', 'Google Earth Engine', 'Indikator Pembangunan'],
    description: 'Proyek ini berfokus pada pengembangan dan visualisasi indikator Sustainable Development Goals (SDGs) menggunakan data geospasial di wilayah Solok Selatan. Aplikasi ini memungkinkan pemantauan kemajuan SDGs secara interaktif.',
    gee_app_url: 'https://ee-mrgridhoarazzak.projects.earthengine.app/view/sdgs-solok-selatan', // Link GEE App Anda
    // Anda bisa menambahkan properti lain seperti 'year', 'client', 'tools_used', dll.
  },
  {
    slug: 'lubuk-gadang-1', // Buat slug yang unik dan deskriptif
    title: 'Pemetaan Potensi Wilayah Lubuk Gadang 1', // Judul proyek Anda
    thumbnail: '/images/lubuk-gadang-1-thumbnail.png', // Ganti dengan path ke gambar thumbnail yang relevan
    tags: ['Pemetaan', 'Potensi Wilayah', 'Analisis Spasial', 'Google Earth Engine', 'Perencanaan'],
    description: 'Proyek ini melakukan pemetaan dan analisis potensi geospasial di wilayah Lubuk Gadang 1. Data dari Google Earth Engine digunakan untuk mengidentifikasi berbagai fitur geografis dan sumber daya yang relevan untuk perencanaan dan pengembangan wilayah.',
    gee_app_url: 'https://ee-mrgridhoarazzak.projects.earthengine.app/view/lubuk-gadang-1', // Link GEE App Anda
  },
  {
    slug: 'pemicu-tambang', // Buat slug yang unik dan deskriptif
    title: 'Analisis Pemicu Tambang Berbasis Geospasial', // Judul proyek Anda
    thumbnail: '/images/pemicu-tambang-thumbnail.png', // Ganti dengan path ke gambar thumbnail yang relevan
    tags: ['Pertambangan', 'Analisis Spasial', 'Google Earth Engine', 'Lingkungan', 'Regulasi'],
    description: 'Proyek ini menganalisis faktor-faktor pemicu aktivitas pertambangan menggunakan data geospasial. Aplikasi ini dapat membantu dalam pemantauan dan perencanaan terkait dampak lingkungan serta kepatuhan regulasi di area pertambangan.🔗https://ee-mrgridhoarazzak.projects.earthengine.app/view/pemicu-tambang',
    gee_app_url: 'https://ee-mrgridhoarazzak.projects.earthengine.app/view/pemicu-tambang', // Link GEE App Anda
  },
];
