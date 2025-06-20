// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-sm fixed w-full z-10">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <span className="text-xl font-bold text-blue-600">fiistore</span>
//               <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded ml-2">v1.2.36</span>
//             </Link>
//           </div>

//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link href="/#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Fonctionnalités</Link>
//               <Link href="/#download" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Télécharger</Link>
//               <Link
//                 href="/#download-windows"
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium ml-2 flex items-center"
//               >
//                 <FaDownload className="mr-2" />
//                 Obtenir fiistore
//               </Link>
//             </div>
//           </div>

//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Ouvrir le menu</span>
//               {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden" id="mobile-menu">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
//             <Link
//               href="/#features"
//               className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               Fonctionnalités
//             </Link>
//             <Link
//               href="/#download"
//               className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
//               onClick={toggleMenu}
//             >
//               Télécharger
//             </Link>
//             <div className="grid grid-cols-2 gap-2 mt-2">
//               <Link
//                 href="/#download-windows"
//                 className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center flex items-center justify-center"
//                 onClick={toggleMenu}
//               >
//                 Windows
//               </Link>
//               <Link
//                 href="/#download-mac"
//                 className="bg-gray-800 text-white block px-3 py-2 rounded-md text-base font-medium text-center flex items-center justify-center"
//                 onClick={toggleMenu}
//               >
//                 macOS
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
