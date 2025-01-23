import React from 'react';
import { Award, Users, Anchor, Target } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519666336592-e225a99dcd2f?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold text-center mb-6">Notre Histoire</h1>
          <p className="text-xl text-center max-w-3xl">
            Plus de 20 ans d'expertise dans le domaine nautique
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Passion</h2>
              <p className="text-gray-600 mb-4">
                Depuis notre création en 2000, Marine Services Pro s'est imposé comme un leader dans le domaine de la construction et de la réparation nautique. Notre passion pour l'excellence et notre engagement envers la qualité nous ont permis de gagner la confiance de nombreux clients.
              </p>
              <p className="text-gray-600">
                Notre équipe d'experts qualifiés combine des décennies d'expérience dans l'industrie maritime, garantissant des services de la plus haute qualité pour chaque projet que nous entreprenons.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Award className="w-8 h-8 text-blue-600" />,
                  title: "Expertise",
                  value: "20+"
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-600" />,
                  title: "Clients",
                  value: "1000+"
                },
                {
                  icon: <Anchor className="w-8 h-8 text-blue-600" />,
                  title: "Projets",
                  value: "500+"
                },
                {
                  icon: <Target className="w-8 h-8 text-blue-600" />,
                  title: "Précision",
                  value: "100%"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="inline-block p-3 bg-blue-50 rounded-lg mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Notre Mission",
                description: "Fournir des services nautiques d'excellence en respectant les plus hauts standards de qualité et de sécurité."
              },
              {
                title: "Notre Vision",
                description: "Devenir la référence incontournable dans le domaine des services nautiques sur la côte méditerranéenne."
              },
              {
                title: "Nos Valeurs",
                description: "Excellence, intégrité et innovation sont au cœur de chacune de nos actions."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}