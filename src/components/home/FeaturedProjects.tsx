import { ArrowRight } from 'lucide-react';

const projects = [
  {
    image: "/images/projects/project-1.jpg",
    title: "Rénovation Yacht Classic",
    category: "Rénovation",
    description: "Restauration complète d'un yacht classique de 15 mètres"
  },
  {
    image: "/images/projects/project-2.jpg",
    title: "Construction Catamaran",
    category: "Construction",
    description: "Construction sur mesure d'un catamaran de luxe"
  },
  {
    image: "/images/projects/project-3.jpg",
    title: "Maintenance Voilier",
    category: "Maintenance",
    description: "Service complet de maintenance pour voilier de course"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nos Projets Phares</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos plus belles réalisations en matière de 
            construction et rénovation navale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-blue-400 text-sm mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all">
                  Lire la suite <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 