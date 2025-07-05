// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet warna yang direkomendasikan untuk tema gelap/modern
        background: '#1a1a2e',    // Latar belakang utama (dark blue/purple)
        surface: '#2a2a4a',       // Elemen di atas background (cards, navbar, dll.)
        'surface-light': '#3a3a5a', // Sedikit lebih terang dari surface untuk hover/active
        primary: '#00bcd4',       // Warna aksen utama (biru cyan)
        'primary-dark': '#0097a7',// Primary sedikit gelap untuk hover
        'text-main': '#e0e0e0',   // Warna teks utama (putih pudar)
        'text-secondary': '#a0a0a0', // Warna teks sekunder (abu-abu)
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // Jika Anda ingin mendefinisikan breakpoints kustom atau properti tema lainnya
    container: {
      center: true, // Untuk mengatur kontainer agar selalu di tengah
    },
  },
  plugins: [],
};
