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
        // Definisikan palet warna Anda di sini
        background: '#1a1a2e', // Contoh warna latar belakang gelap
        surface: '#2a2a4a',    // Contoh warna untuk card/elemen di atas background
        primary: '#00bcd4',    // Contoh warna aksen cerah (biru cyan)
        'text-main': '#e0e0e0', // Contoh warna teks utama terang
        'text-secondary': '#a0a0a0', // Contoh warna teks sekunder/abu-abu
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
