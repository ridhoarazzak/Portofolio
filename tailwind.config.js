/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1a202c', // Abu-abu gelap
        'surface': '#2d3748',    // Warna kartu/permukaan
        'primary': '#4299e1',    // Biru cerah untuk aksen
        'text-main': '#e2e8f0',  // Teks utama (putih keabuan)
        'text-secondary': '#a0aec0', // Teks sekunder (abu-abu)
      },
    },
  },
  // Plugin untuk membuat iframe responsif
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
