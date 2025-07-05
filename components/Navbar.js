// components/Navbar.js
"use client"; // Penting: Ini menandai komponen sebagai Client Component di Next.js App Router

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); // State untuk melacak apakah halaman sudah di-scroll
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengelola menu mobile

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      // Set 'scrolled' menjadi true jika posisi scroll lebih dari 20px (atau angka lain)
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array dependensi kosong agar efek hanya berjalan sekali saat mount

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/90 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Ridho.dev
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-text-main hover:text-primary transition-colors">
            Beranda
          </Link>
          <Link href="/proyek" className="text-text-main hover:text-primary transition-colors">
            Proyek
          </Link>
          <Link href="/tentang" className="text-text-main hover:text-primary transition-colors">
            Tentang
          </Link>
          <Link href="/kontak" className="text-text-main hover:text-primary transition-colors">
            Kontak
          </Link>
        </div>

        {/* Tombol Menu Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-text-main focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile yang Muncul */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-surface/95 mt-4 pb-4 transition-all duration-300`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" onClick={toggleMenu} className="text-text-main hover:text-primary transition-colors text-lg">
            Beranda
          </Link>
          <Link href="/proyek" onClick={toggleMenu} className="text-text-main hover:text-primary transition-colors text-lg">
            Proyek
          </Link>
          <Link href="/tentang" onClick={toggleMenu} className="text-text-main hover:text-primary transition-colors text-lg">
            Tentang
          </Link>
          <Link href="/kontak" onClick={toggleMenu} className="text-text-main hover:text-primary transition-colors text-lg">
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
        }
