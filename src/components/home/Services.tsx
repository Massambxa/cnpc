import { Anchor, PenTool, Paintbrush } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Anchor className="w-10 h-10 text-blue-600" />,
    title: "Construction de Bateaux",
    description: "Construction sur mesure de bateaux selon vos spécifications et besoins."
  },
  {
    icon: <PenTool className="w-10 h-10 text-blue-600" />,
    title: "Réparation & Maintenance",
    description: "Service complet de réparation et maintenance pour tous types de bateaux."
  },
  {
    icon: <Paintbrush className="w-10 h-10 text-blue-600" />,
    title: "Peinture",
    description: "Services de peinture marine professionnelle et finitions esthétiques."
  }
];

export default function Services() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Nos Services Principaux</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Une expertise complète pour l'entretien et la construction de votre bateau
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                En savoir plus <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 