import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../data/projects';

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Portofolio Geospasial</h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Menjelajahi dunia melalui data. Berikut adalah kumpulan proyek analisis saya menggunakan Google Earth Engine dan teknologi GIS lainnya.
        </p>
      </section>

      {/* Project Gallery */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/proyek/${project.slug}`} key={project.slug}>
            <div className="bg-surface rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
              <div className="relative w-full h-48">
                <Image
                  src={project.thumbnail}
                  alt={`Thumbnail untuk ${project.title}`}
                  fill
                  style={{objectFit:"cover"}}
                  className="group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-main mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-background text-primary text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
