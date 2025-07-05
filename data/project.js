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
    // Optional: add more fields like 'repo_url', 'demo_url', 'tools_used', etc.
    // repo_url: 'https://github.com/ridhoarazzak/deforestasi-kalimantan',
    // year: 2024,
  },
  {
    slug: 'analisis-uhi-padang',
    title: 'Analisis Urban Heat Island Kota Padang',
    thumbnail: '/images/uhi-padang-thumbnail.png',
    tags: ['Thermal', 'Analisis Spasial', 'Landsat 8', 'LST', 'GIS'],
    description: 'Menggunakan data thermal dari Landsat 8 untuk mengidentifikasi dan memetakan efek Pulau Bahang Perkotaan (Urban Heat Island) di Kota Padang. Analisis ini mengkaji korelasi antara Suhu Permukaan Tanah (LST) dengan kerapatan bangunan dan ruang terbuka hijau, memberikan wawasan untuk perencanaan kota yang lebih baik.',
    gee_app_url: 'https://lookerstudio.google.com/embed/reporting/43dc4b86-c4b5-4338-89c0-abb328dd3874/page/p_9n3j3d7h2c', // GANTI DENGAN URL GEE APP ANDA YANG SEBENARNYA!
    // Optional: add more fields
    // year: 2023,
  },
  {
    slug: 'pemetaan-kepadatan-penduduk-jakarta',
    title: 'Pemetaan Kepadatan Penduduk Jakarta',
    thumbnail: '/images/kepadatan-penduduk-thumbnail.png', // Ganti dengan path gambar Anda
    tags: ['Demografi', 'Visualisasi Data', 'QGIS', 'OpenStreetMap'],
    description: 'Proyek ini berfokus pada pemetaan kepadatan penduduk di area Jakarta menggunakan data publik dan teknik Geographic Information System (GIS). Hasilnya dapat digunakan untuk perencanaan infrastruktur dan layanan publik, mengidentifikasi area dengan kebutuhan prioritas.',
    gee_app_url: 'https://lookerstudio.google.com/embed/reporting/43dc4b86-c4b5-4338-89c0-abb328dd3874/page/p_9n3j3d7h2c', // GANTI DENGAN URL GEE APP ANDA YANG SEBENARNYA!
    // Optional: add more fields
    // year: 2022,
  },
  // Anda bisa menambahkan lebih banyak proyek di sini
];
