import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl p-6 py-12 text-center">
      <h1 className="text-5xl font-bold mb-6">Hubungi Saya</h1>
      <p className="text-xl text-text-secondary mb-12">
        Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu untuk menghubungi saya.
      </p>
      <div className="space-y-6">
        <a href="mailto:emailanda@contoh.com" className="flex items-center justify-center gap-4 text-lg text-primary hover:underline">
          <Mail />
          <span>emailanda@contoh.com</span>
        </a>
        <a href="https://linkedin.com/in/profilanda" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 text-lg text-primary hover:underline">
          <Linkedin />
          <span>Profil LinkedIn</span>
        </a>
        <a href="https://github.com/ridhoarazzak" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 text-lg text-primary hover:underline">
          <Github />
          <span>Profil GitHub</span>
        </a>
      </div>
    </div>
  );
}
