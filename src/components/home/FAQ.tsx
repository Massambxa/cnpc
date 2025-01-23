import { motion } from 'framer-motion';

const faqItems = [
  {
    question: "Combien de temps prend une réparation standard ?",
    answer: "Le temps de réparation varie selon le type d'intervention. Nous fournissons une estimation précise après diagnostic."
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer: "Oui, nous proposons des devis gratuits et détaillés pour tous nos services."
  },
  {
    question: "Quelles garanties offrez-vous ?",
    answer: "Nous offrons une garantie sur tous nos travaux, variable selon le type d'intervention."
  }
];

export default function FAQ() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Questions Fréquentes
        </motion.h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 