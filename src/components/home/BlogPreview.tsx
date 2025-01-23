import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    image: "/images/blog/construction-navale.jpg",
    title: "Nouvelles Technologies de Construction Navale",
    date: "15 Nov 2023",
    excerpt: "Découvrez les dernières innovations en matière de construction navale..."
  },
  {
    image: "/images/blog/entretien-hiver.jpg",
    title: "Entretien de Votre Bateau en Hiver",
    date: "10 Nov 2023",
    excerpt: "Conseils pratiques pour l'hivernage de votre embarcation..."
  },
  {
    image: "/images/blog/tendances-2024.jpg",
    title: "Les Tendances du Nautisme 2024",
    date: "5 Nov 2023",
    excerpt: "Les nouvelles tendances qui façonnent l'industrie nautique..."
  }
];

export default function BlogPreview() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Actualités
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-blue-600 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Lire la suite <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 