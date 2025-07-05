// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css"; // PASTIKAN PATH INI BENAR!
import Navbar from "../components/Navbar"; // PASTIKAN PATH INI BENAR!

const inter = Inter({ subsets: ["latin"] });

// Metadata penting untuk SEO dan tampilan di browser
export const metadata = {
  title: "Ridho Arazzak - Portofolio Geospasial",
  description: "Jelajahi proyek analisis geospasial Ridho Arazzak menggunakan Google Earth Engine (GEE), QGIS, dan teknologi GIS lainnya.",
  keywords: ["geospasial", "GIS", "Google Earth Engine", "portofolio", "remote sensing", "analisis spasial", "peta", "webgis"],
  authors: [{ name: "Ridho Arazzak" }],
  openGraph: {
    title: "Ridho Arazzak - Portofolio Geospasial",
    description: "Jelajahi proyek analisis geospasial Ridho Arazzak.",
    url: "https://ridhoarazzak.vercel.app", // Ganti dengan URL deployment Anda
    siteName: "Ridho Arazzak Portofolio",
    images: [
      {
        url: "https://ridhoarazzak.vercel.app/og-image.jpg", // Ganti dengan path gambar og:image Anda
        width: 1200,
        height: 630,
        alt: "Ridho Arazzak Geospasial Portofolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridho Arazzak - Portofolio Geospasial",
    description: "Jelajahi proyek analisis geospasial Ridho Arazzak.",
    images: ["https://ridhoarazzak.vercel.app/twitter-image.jpg"], // Ganti dengan path gambar twitter Anda
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id"> {/* Gunakan lang="id" untuk bahasa Indonesia */}
      <body className={`${inter.className} bg-background text-text-main`}>
        <Navbar />
        {/*
          Padding top pt-20 untuk memastikan konten tidak tertutup oleh Navbar
          yang fixed di bagian atas. Sesuaikan nilai jika tinggi Navbar berubah.
        */}
        <main className="pt-20 min-h-screen">
          {children}
        </main>
        <footer className="text-center p-8 text-text-secondary border-t border-surface mt-16">
          <p>© {new Date().getFullYear()} Ridho Arazzak. Semua Hak Cipta Dilindungi.</p>
        </footer>
      </body>
    </html>
  );
}
