// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Sophie Martin",
//     position: "Directrice, Boutique Mode",
//     testimonial: "fiistore a complètement transformé notre gestion quotidienne. Nous avons gagné 15 heures par semaine en automatisant notre comptabilité et gestion de stock.",
//     rating: 5
//   },
//   {
//     name: "Thomas Dubois",
//     position: "Fondateur, Tech Startup",
//     testimonial: "L'interface intuitive et les rapports personnalisables nous permettent d'avoir une vue claire sur notre performance. Un outil indispensable pour notre croissance.",
//     rating: 5
//   },
//   {
//     name: "Marie Leroy",
//     position: "Gérante, Restaurant",
//     testimonial: "La gestion des réservations et des stocks est devenue tellement plus simple. Le service client est également exceptionnel, toujours disponible pour nous aider.",
//     rating: 4
//   }
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ce que nos clients disent</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Découvrez comment fiistore aide des entreprises comme la vôtre à se développer
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center mb-6">
//                 <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
//                   <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
//                   <p className="text-gray-600 text-sm">{testimonial.position}</p>
//                 </div>
//               </div>
//               <div className="mb-5 flex">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <FaStar key={i} className="text-yellow-400 mr-1" />
//                 ))}
//               </div>
//               <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-gray-600 text-lg font-medium">
//             Rejoignez plus de 1000 entreprises qui utilisent déjà fiistore
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
