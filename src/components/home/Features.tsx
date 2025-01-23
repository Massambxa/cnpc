import { Star, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Star className="w-8 h-8 text-blue-600" />,
    title: "Expertise Reconnue",
    description: "Plus de 20 ans d'expérience dans le domaine nautique"
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Qualité Garantie",
    description: "Matériaux premium et finitions exceptionnelles"
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Service Rapide",
    description: "Intervention rapide et respect des délais"
  }
];

export default function Features() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                className="inline-block p-4 bg-blue-50 rounded-xl mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
