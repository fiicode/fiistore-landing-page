"use client";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaShoppingCart,
  FaBoxOpen,
  FaExchangeAlt,
  FaFileInvoiceDollar,
  FaMobile,
} from "react-icons/fa";

// Animation variants pour les animations séquentielles
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const features = [
  {
    icon: <FaChartLine className="h-8 w-8 text-indigo-400" />,
    title: "Tableau de Bord Dynamique",
    description:
      "Visualisez vos ventes, revenus et stocks en temps réel avec des graphiques interactifs et des indicateurs de performance personnalisables.",
  },
  {
    icon: <FaShoppingCart className="h-8 w-8 text-purple-400" />,
    title: "Gestion des Ventes",
    description:
      "Créez facilement des factures, suivez vos commandes et gérez efficacement votre processus de vente de bout en bout.",
  },
  {
    icon: <FaBoxOpen className="h-8 w-8 text-blue-400" />,
    title: "Gestion des Produits",
    description:
      "Cataloguez tous vos produits, suivez votre inventaire et gérez les prix d&apos;achat et de vente en toute simplicité.",
  },
  {
    icon: <FaExchangeAlt className="h-8 w-8 text-cyan-400" />,
    title: "Gestion des Achats",
    description:
      "Suivez vos commandes fournisseurs, gérez vos approvisionnements et optimisez vos coûts d&apos;acquisition.",
  },
  {
    icon: <FaFileInvoiceDollar className="h-8 w-8 text-teal-400" />,
    title: "Rapports Financiers",
    description:
      "Accédez à des rapports financiers détaillés et visualisez la performance de votre entreprise avec des métriques précises.",
  },
  {
    icon: <FaMobile className="h-8 w-8 text-pink-400" />,
    title: "Interface Adaptable",
    description:
      "Profitez d&apos;une application compatible avec tous vos appareils et d&apos;une interface intuitive en mode clair ou sombre.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-24 bg-[#070B14] overflow-hidden"
    >
      {/* Gradient backgrounds */}
      <motion.div
        className="absolute top-[10%] left-[60%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-20 blur-[120px] z-0"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20 blur-[100px] z-0"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dot pattern background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(79, 70, 229, 0.3) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          opacity: "10%",
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-400">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            fiistore regroupe toutes les fonctionnalités essentielles pour votre
            gestion d&apos;entreprise
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="bg-[#0A101E] p-8 rounded-xl border border-transparent hover:border-indigo-500/30 transition-all duration-300"
              whileHover={{
                y: -5,
                boxShadow: "0 15px 30px -10px rgba(79, 70, 229, 0.2)",
              }}
            >
              <div className="p-3 mb-5 w-16 h-16 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-900/30 to-purple-900/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Résultats et statistiques */}
        <div className="mt-24 relative pt-8 pb-16">
          {/* Élément graphique avec courbes */}
          <div className="absolute left-0 right-0 top-[40px] w-full overflow-hidden h-16">
            <div className="relative max-w-6xl mx-auto h-full">
              <svg className="w-full h-full" viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                {/* Ligne horizontale de référence */}
                <path d="M0 30H1200" stroke="#1e293b" strokeWidth="0.5" opacity="0.3" />
                
                {/* Courbes principales */}
                
                {/* Courbe 1 - Performance */}
                <path 
                  d="M0 30C50 25 100 10 150 15C200 20 250 5 300 10C350 15 400 28 450 25C500 22 550 15 600 18C650 20 700 25 750 20C800 15 850 10 900 12C950 15 1000 20 1050 25C1100 30 1150 35 1200 30"
                  stroke="url(#blueGradient)" 
                  strokeWidth="1.5"
                  fill="none"
                  className="animate-pulse"
                />
                
                {/* Courbe 2 - Adoption */}
                <path 
                  d="M0 35C50 40 100 45 150 42C200 38 250 45 300 40C350 38 400 35 450 38C500 40 550 45 600 42C650 38 700 32 750 35C800 38 850 42 900 40C950 38 1000 35 1050 32C1100 30 1150 35 1200 40"
                  stroke="url(#purpleGradient)" 
                  strokeWidth="1.5"
                  fill="none"
                />
                
                {/* Courbe 3 - Zone remplie */}
                <path 
                  d="M0 40C50 42 100 38 150 42C200 45 250 40 300 42C350 45 400 48 450 45C500 42 550 40 600 38C650 35 700 32 750 35C800 38 850 40 900 42C950 45 1000 48 1050 50C1100 52 1150 50 1200 45L1200 60L0 60Z"
                  fill="url(#areaGradient)" 
                  opacity="0.15"
                />
                
                {/* Cercles lumineux aux points de données clés */}
                <circle cx="300" cy="10" r="3" fill="#6366f1" filter="url(#glow)" className="animate-pulse" />
                <circle cx="600" cy="18" r="3" fill="#a855f7" filter="url(#glow)" className="animate-pulse" />
                <circle cx="900" cy="12" r="3" fill="#3b82f6" filter="url(#glow)" className="animate-pulse" />
                
                {/* Points secondaires */}
                <circle cx="200" cy="20" r="2" fill="#6366f1" opacity="0.7" />
                <circle cx="450" cy="25" r="2" fill="#a855f7" opacity="0.7" />
                <circle cx="750" cy="20" r="2" fill="#3b82f6" opacity="0.7" />
                <circle cx="1050" cy="25" r="2" fill="#a855f7" opacity="0.7" />
                
                {/* Définitions des gradients */}
                <defs>
                  <linearGradient id="blueGradient" x1="0" y1="0" x2="1200" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="1200" y2="0">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  
                  <linearGradient id="areaGradient" x1="600" y1="0" x2="600" y2="60">
                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0.5)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                  </linearGradient>
                  
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <motion.div
            className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Statistique 1 */}
            <motion.div
              className="text-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/20 to-indigo-700/30 mb-4 relative backdrop-blur-sm border border-indigo-500/20 -mt-8">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                  +40%
                </span>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 15L12 8L19 15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg text-white font-medium mb-1">
                Productivité
              </h3>
              <p className="text-sm text-gray-400">Gain de temps quotidien</p>
            </motion.div>

            {/* Statistique 2 */}
            <motion.div
              className="text-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/30 mb-4 relative backdrop-blur-sm border border-purple-500/20 -mt-8">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                  98%
                </span>
              </div>
              <h3 className="text-lg text-white font-medium mb-1">
                Satisfaction
              </h3>
              <p className="text-sm text-gray-400">
                Taux de satisfaction client
              </p>
            </motion.div>

            {/* Statistique 3 */}
            <motion.div
              className="text-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-700/30 mb-4 relative backdrop-blur-sm border border-blue-500/20 -mt-8">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  24/7
                </span>
              </div>
              <h3 className="text-lg text-white font-medium mb-1">
                Disponibilité
              </h3>
              <p className="text-sm text-gray-400">Accès à vos données</p>
            </motion.div>

            {/* Statistique 4 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-700/30 mb-4 relative backdrop-blur-sm border border-amber-500/20">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  1000+
                </span>
              </div>
              <h3 className="text-lg text-white font-medium mb-1">
                Entreprises
              </h3>
              <p className="text-sm text-gray-400">Qui nous font confiance</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
