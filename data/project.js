// data/projects.js
export const projects = [
  {
    slug: 'pemantauan-deforestasi-kalimantan',
    title: 'Pemantauan Deforestasi di Kalimantan',
    thumbnail: '/images/deforestasi-thumbnail.png', // Ganti dengan path gambar Anda
    tags: ['Remote Sensing', 'Klasifikasi', 'Landsat', 'Time-Series'],
    description: 'Proyek ini menggunakan data citra satelit Landsat untuk menganalisis dan memvisualisasikan laju deforestasi di provinsi Kalimantan Tengah dari tahun 2010 hingga 2025. Metodologi yang digunakan adalah klasifikasi tutupan lahan supervised dan analisis perubahan temporal.',
    gee_app_url: 'https://lookerstudio.google.com/embed/reporting/43dc4b86-c4b5-4338-89c0-abb328dd3874/page/p_9n3j3d7h2c', // <-- GANTI DENGAN URL GEE APP ANDA
  },
  {
    slug: 'analisis-uhi-padang',
    title: 'Analisis Urban Heat Island Kota Padang',
    thumbnail: '/images/uhi-padang-thumbnail.png', // Ganti dengan path gambar Anda
    tags: ['Thermal', 'Analisis Spasial', 'Landsat 8', 'LST'],
    description: 'Menggunakan data thermal dari Landsat 8 untuk mengidentifikasi dan memetakan efek Pulau Bahang Perkotaan (Urban Heat Island) di Kota Padang. Analisis ini mengkaji korelasi antara Suhu Permukaan Tanah (LST) dengan kerapatan bangunan dan ruang terbuka hijau.',
    gee_app_url: 'https://lookerstudio.google.com/embed/reporting/43dc4b86-c4b5-4338-89c0-abb328dd3874/page/p_9n3j3d7h2c', // <-- GANTI DENGAN URL GEE APP ANDA
  },
];
