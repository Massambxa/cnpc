import React from 'react';
import { Anchor, PenTool as Tool, Paintbrush, Shield, Warehouse, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Anchor className="w-12 h-12 text-blue-600" />,
      title: "Construction de Bateaux",
      description: "Construction sur mesure de bateaux selon vos spécifications et besoins.",
      features: ["Design personnalisé", "Matériaux premium", "Suivi de projet"]
    },
    {
      icon: <Tool className="w-12 h-12 text-blue-600" />,
      title: "Réparation & Maintenance",
      description: "Service complet de réparation et maintenance pour tous types de bateaux.",
      features: ["Diagnostic complet", "Réparations rapides", "Maintenance préventive"]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Étanchéité",
      description: "Traitement professionnel d'étanchéité pour une protection optimale.",
      features: ["Inspection détaillée", "Solutions durables", "Garantie travaux"]
    },
    {
      icon: <Paintbrush className="w-12 h-12 text-blue-600" />,
      title: "Peinture",
      description: "Services de peinture marine professionnelle et finitions esthétiques.",
      features: ["Peinture anti-fouling", "Finitions personnalisées", "Protection UV"]
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Travaux Polyester",
      description: "Moulage et réparation d'objets en polyester, expertise technique.",
      features: ["Réparations structurelles", "Moulage sur mesure", "Finitions parfaites"]
    },
    {
      icon: <Warehouse className="w-12 h-12 text-blue-600" />,
      title: "Garde de Bateau",
      description: "Service de gardiennage sécurisé pour votre embarcation.",
      features: ["Surveillance 24/7", "Maintenance régulière", "Stockage sécurisé"]
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">Nos Services</h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Découvrez notre gamme complète de services nautiques, conçue pour répondre à tous vos besoins en matière de construction et d'entretien de bateaux.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}