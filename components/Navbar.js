// components/Navbar.js
"use client"; // PENTING: Menandai ini sebagai Client Component karena menggunakan hooks React

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); // State untuk melacak posisi scroll
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengelola tampilan menu mobile

  // Efek untuk menambahkan/menghapus event listener saat komponen dimuat/dihapus
  useEffect(() => {
    const handleScroll = () => {
      // Jika posisi scroll lebih dari 20px, set 'scrolled' menjadi true
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);

    // Fungsi cleanup: Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Array dependensi kosong berarti efek hanya berjalan sekali saat mount

  // Fungsi untuk mengubah state menu mobile (membuka/menutup)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-surface/90 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'}
      `}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo/Nama Portofolio */}
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors">
          Ridho.Arazzak
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

        {/* Tombol Menu Mobile (Hamburger Icon) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-text-main focus:outline-none p-2 rounded-md hover:bg-surface-light">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                // Ikon "X" saat menu terbuka
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Ikon Hamburger saat menu tertutup
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

      {/* Menu Mobile yang Muncul Saat isMenuOpen True */}
      <div
        className={`md:hidden ${
          isMenuOpen ? 'block animate-slide-down' : 'hidden' // Menggunakan animasi untuk muncul
        } bg-surface/95 mt-4 pb-4 transition-all duration-300`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" onClick={toggleMenu} className="text-text-main hover:text-primary transition-colors text-lg w-full text-center py-2">
            Beranda
          </Link>
          <Link href="/proyek" onClick={toggleMenu} className="text-text-main hover:text-primary transition-colors text-lg w-full text-center py-2">
            Proyek
          </Link>
          <Link href="/tentang" onClick={toggleMenu} className="text-text-main hover:text-primary transition-colors text-lg w-full text-center py-2">
            Tentang
          </Link>
          <Link href="/kontak" onClick={toggleMenu} className="text-text-main hover:text-primary transition-colors text-lg w-full text-center py-2">
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
      }
