import { motion } from 'framer-motion';

const features = [
  "Équipe expérimentée",
  "Technologie moderne",
  "Service personnalisé",
  "Qualité garantie"
];

export default function About() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="/images/about-team.webp"
              alt="Notre équipe" 
              className="rounded-2xl shadow-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl"
            >
              <p className="text-2xl font-bold">25+</p>
              <p className="text-sm">Années d'Excellence</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              À Propos de Nous
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 mb-6"
            >
              Depuis plus de 25 ans, notre chantier naval s'engage à fournir des services 
              d'excellence dans la construction et la réparation de bateaux. Notre expertise, 
              combinée à notre passion pour le nautisme, nous permet de répondre aux exigences 
              les plus élevées de nos clients.
            </motion.p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              En Savoir Plus
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 