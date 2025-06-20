// "use client";
// import { motion } from "framer-motion";
// import { FaCheck } from "react-icons/fa";
// import Link from "next/link";

// const pricingPlans = [
//   {
//     name: "Démarrage",
//     price: "29€",
//     period: "par mois",
//     description: "Parfait pour les petites entreprises",
//     features: [
//       "Gestion des clients (jusqu'à 500)",
//       "Facturation simple",
//       "Tableau de bord basique",
//       "Support par email",
//       "1 utilisateur"
//     ],
//     cta: "Commencer l'essai",
//     popular: false
//   },
//   {
//     name: "Business",
//     price: "79€",
//     period: "par mois",
//     description: "Pour les entreprises en croissance",
//     features: [
//       "Gestion des clients illimitée",
//       "Facturation avancée & rappels",
//       "Analyses détaillées",
//       "Support prioritaire",
//       "5 utilisateurs",
//       "API accès"
//     ],
//     cta: "Commencer l'essai",
//     popular: true
//   },
//   {
//     name: "Entreprise",
//     price: "199€",
//     period: "par mois",
//     description: "Solution complète pour grandes organisations",
//     features: [
//       "Fonctionnalités complètes",
//       "Utilisateurs illimités",
//       "Intégrations avancées",
//       "Support dédié 24/7",
//       "Formation personnalisée",
//       "Sécurité renforcée"
//     ],
//     cta: "Contacter les ventes",
//     popular: false
//   }
// ];

// const Pricing = () => {
//   return (
//     <section id="pricing" className="py-20 bg-white">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tarifs Transparents</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Des forfaits adaptés à tous les besoins, sans frais cachés
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center">
//           {pricingPlans.map((plan, index) => (
//             <motion.div
//               key={index}
//               className={`w-full md:w-1/3 max-w-md px-4 mb-8`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className={`h-full flex flex-col rounded-lg shadow-lg overflow-hidden ${plan.popular ? 'border-2 border-blue-500 relative' : 'border border-gray-200'}`}>
//                 {plan.popular && (
//                   <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-1 rotate-45">
//                     Populaire
//                   </div>
//                 )}
//                 <div className="px-6 py-8 bg-white border-b border-gray-200 flex-1">
//                   <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
//                   <div className="flex items-end mb-6">
//                     <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
//                     <span className="text-gray-600 ml-2 pb-1">{plan.period}</span>
//                   </div>
//                   <p className="text-gray-600 mb-6">{plan.description}</p>
//                   <ul className="space-y-3 mb-6">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex items-start">
//                         <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                         <span className="text-gray-700">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="px-6 py-4 bg-gray-50">
//                   <Link
//                     href="#cta"
//                     className={`w-full block text-center py-3 rounded-md font-medium ${
//                       plan.popular
//                         ? 'bg-blue-600 hover:bg-blue-700 text-white'
//                         : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-800'
//                     } transition`}
//                   >
//                     {plan.cta}
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <p className="text-gray-600">
//             Tous nos plans incluent un essai gratuit de 14 jours. Pas de carte de crédit requise.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;
