import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-background/80 border-b border-surface shadow-md w-full backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-primary">
          Ridho Arazzak
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-text-secondary hover:text-primary transition-colors">Proyek</Link>
          <Link href="/tentang" className="text-text-secondary hover:text-primary transition-colors">Tentang</Link>
          <Link href="/kontak" className="text-text-secondary hover:text-primary transition-colors">Kontak</Link>
        </div>
      </div>
    </nav>
  );
}
