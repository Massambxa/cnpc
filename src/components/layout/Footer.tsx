import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email soumis:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white pt-32 md:pt-20 pb-8 mt-20">
      {/* Formulaire Newsletter flottant */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-6 shadow-xl text-gray-900"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold mb-1">Restez informé</h3>
              <p className="text-sm text-gray-600">Inscrivez-vous à notre newsletter</p>
            </div>
            <form onSubmit={handleSubmit} className="flex-1 w-full flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="w-full bg-white border border-blue-300 rounded-xl py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                S'inscrire <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Contenu principal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="col-span-2 md:col-span-1">
            <img src="/images/logo.svg" alt="CNPC" className="h-10 w-auto mb-4" />
            <p className="text-sm text-gray-400">
              Expert en construction et réparation navale depuis plus de 20 ans.
            </p>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Port de Plaisance</p>
              <p>13000 Marseille</p>
              <p>+33 1 23 45 67 89</p>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Liens utiles</h3>
            <div className="space-y-2 text-sm">
              <Link to="/mentions-legales" className="block text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="block text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
            </div>
          </div>

          {/* Horaires */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">Horaires</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Lun - Ven: 8h - 18h</p>
              <p>Samedi: 9h - 16h</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Copyright et signature */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2024 CNPC. Tous droits réservés.</p>
          <a 
            href="https://kamit.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            Développé par KAMIT <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
} 