import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ridho Arazzak - Geospasial Portofolio",
  description: "Portofolio proyek analisis geospasial menggunakan Google Earth Engine.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text-main`}>
        <Navbar />
        <main className="pt-20"> {/* Padding top agar konten tidak tertutup Navbar */}
          {children}
        </main>
        <footer className="text-center p-8 text-text-secondary border-t border-surface mt-16">
          <p>© {new Date().getFullYear()} Ridho Arazzak. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
