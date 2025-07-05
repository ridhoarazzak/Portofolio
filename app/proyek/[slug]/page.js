import { projects } from '../../../data/projects';
import Link from 'next/link';
import Image from 'next/image';

// Fungsi untuk mendapatkan data proyek berdasarkan slug dari URL
function getProjectData(slug) {
  return projects.find((p) => p.slug === slug);
}

// Fungsi untuk generate metadata dinamis (judul tab browser)
export async function generateMetadata({ params }) {
  const project = getProjectData(params.slug);
  return {
    title: `${project.title} | Portofolio Ridho`,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectData(params.slug);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Proyek tidak ditemukan</h1>
        <Link href="/" className="text-primary hover:underline mt-4 inline-block">
          &larr; Kembali ke semua proyek
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl p-6 py-12">
      {/* Judul dan tag */}
      <h1 className="text-5xl font-extrabold mb-4 text-text-main">{project.title}</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="bg-surface text-primary text-sm font-semibold px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      {/* Deskripsi Proyek */}
      <div className="prose prose-invert lg:prose-xl max-w-none text-text-secondary mb-12">
        <p>{project.description}</p>
      </div>
      
      {/* Peta Interaktif GEE App */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-text-main">Peta Interaktif</h2>
        <div className="w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl border-2 border-surface">
          <iframe
            src={project.gee_app_url}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
      <Link href="/" className="inline-block mt-8 text-primary hover:underline transition-colors">
        &larr; Kembali ke semua proyek
      </Link>
    </div>
  );
    }
