"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Galaxy3D from "./Galaxy3D";
import { FaWindows, FaApple, FaDownload, FaArrowDown } from "react-icons/fa";
import MediaSlider from "./MediaSlider";

interface HeroProps {
  version?: string;
}

const Hero = ({ version = "1.2.36" }: HeroProps) => {
  const { scrollY } = useScroll();

  // Animation values for scroll effects
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const floatingY = useSpring(useTransform(scrollY, [0, 300], [0, -50]), {
    stiffness: 50,
    damping: 20,
  });

  // Placeholder for images/videos - replace with actual paths
  const mediaItems = [
    { type: "image" as const, src: "/images/dashboard.png", alt: "Dashboard" },
    {
      type: "image" as const,
      src: "/images/inventory.png",
      alt: "Inventory Management",
    },
    {
      type: "image" as const,
      src: "/images/dashboard.png",
      alt: "Inventory Management",
    },
    {
      type: "image" as const,
      src: "/images/inventory.png",
      alt: "Inventory Management",
    },
  ];

  // Component pour les étoiles filantes comme dans le ciel étoilé
  const ShootingStar = ({
    delay = 0,
    duration = 1.5,
    size = 1,
    top = "30%",
    left = "10%",
  }) => {
    // Détermine une direction aléatoire mais toujours vers le bas-droite
    const angle = Math.random() * 20 + 20; // Entre 20 et 40 degrés
    const angleInRadians = (angle * Math.PI) / 180;

    return (
      <motion.div
        className="absolute"
        style={{
          width: size * 50 + "px",
          height: size + "px",
          background: `linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)`,
          borderRadius: "100px",
          top: top,
          left: left,
          transform: `rotate(${angle}deg)`,
          transformOrigin: "left center",
          opacity: 0,
          filter: "blur(0.5px)",
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
        }}
        animate={{
          opacity: [0, 0.8, 0],
          x: [0, Math.cos(angleInRadians) * 500],
          y: [0, Math.sin(angleInRadians) * 500],
          scale: [0.3, 1, 0.6],
        }}
        transition={{
          duration: duration,
          delay: delay,
          repeat: Infinity,
          repeatDelay: Math.random() * 25 + 15, // Plus long délai entre 15 et 40 secondes
          ease: "easeInOut",
          times: [0, 0.15, 1],
        }}
      />
    );
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-[#070B14]">
      {/* Modern dot grid pattern */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px",
          backgroundPositionX: "12px",
          backgroundPositionY: "12px",
          opacity: "30%",
          color: "#4f46e5",
        }}
        animate={{
          backgroundPositionY: ["12px", "36px"],
          backgroundPositionX: ["12px", "36px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
          repeatType: "reverse",
        }}
      ></motion.div>

      {/* Galaxies 3D avec champs d'étoiles - Position et couleurs bien distinctes */}
      <Galaxy3D
        top="23%"
        left="5%"
        scale={0.5}
        stars={45}
        zIndex={1}
        opacity={0.6}
        sunColor="radial-gradient(circle, rgba(255, 240, 124, 0.4) 0%, rgba(255, 215, 0, 0.2) 100%)"
        planet1Color="rgba(124, 255, 203, 0.2)"
        planet2Color="rgba(255, 124, 186, 0.2)"
        planet3Color="rgba(208, 124, 255, 0.2)"
      />
      <Galaxy3D
        top="73%"
        left="93%"
        scale={0.7}
        stars={65}
        zIndex={2}
        opacity={0.75}
        sunColor="radial-gradient(circle, rgba(255, 178, 124, 0.4) 0%, rgba(255, 107, 53, 0.2) 100%)"
        planet1Color="rgba(53, 221, 255, 0.2)"
        planet2Color="rgba(255, 71, 145, 0.2)"
        planet3Color="rgba(144, 71, 255, 0.2)"
      />
      <Galaxy3D
        top="30%"
        left="70%"
        scale={0.4}
        stars={35}
        zIndex={3}
        opacity={0.9}
        sunColor="radial-gradient(circle, rgba(124, 217, 255, 0.4) 0%, rgba(0, 120, 215, 0.2) 100%)"
        planet1Color="rgba(144, 255, 124, 0.2)"
        planet2Color="rgba(255, 124, 124, 0.2)"
        planet3Color="rgba(241, 196, 15, 0.2)"
      />
      {/* <Galaxy3D
        top="80%"
        left="20%"
        scale={0.65}
        stars={55}
        zIndex={2}
        opacity={0.8}
        sunColor="radial-gradient(circle, rgba(124, 209, 255, 0.4) 0%, rgba(5, 178, 220, 0.2) 100%)"
        planet1Color="rgba(124, 235, 255, 0.2)"
        planet2Color="rgba(255, 82, 82, 0.2)"
        planet3Color="rgba(170, 82, 255, 0.2)"
      /> */}

      {/* Étoiles filantes réparties dans le ciel */}
      <ShootingStar delay={0} size={0.8} top="20%" left="10%" duration={2.2} />
      <ShootingStar delay={4} size={0.6} top="35%" left="35%" duration={1} />
      <ShootingStar delay={7} size={1} top="15%" left="65%" duration={0.9} />
      <ShootingStar delay={11} size={0.7} top="40%" left="75%" duration={1.1} />
      <ShootingStar delay={15} size={0.9} top="25%" left="50%" duration={1} />
      <ShootingStar delay={20} size={0.7} top="10%" left="20%" duration={0.8} />
      <ShootingStar delay={24} size={0.8} top="30%" left="90%" duration={1.2} />
      <ShootingStar delay={29} size={0.6} top="50%" left="5%" duration={1} />

      {/* Gradient blobs */}
      <motion.div
        className="absolute top-[10%] -left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-[100px] z-0"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[30%] -right-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-[100px] z-0"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ opacity: titleOpacity, scale: titleScale, y: floatingY }}
          >
            <div className="mb-3 inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 backdrop-blur-sm">
              <span className="flex h-2 w-2 mr-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-medium">
                Nouvelle version disponible
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-display tracking-tight flex items-center">
              <div>
                <span>fii</span>
                <span className="inline-block bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                  store.
                </span>
              </div>
              {/* Logo positionné après le texte fiistore */}
              <div className="relative h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 ml-2 md:ml-4">
                <Image
                  src="/fiistore.png"
                  alt="Fiistore Logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </h1>

            <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text font-semibold mb-6">
              Votre solution complète <br />
              de gestion d&apos;entreprise
            </h2>

            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Téléchargez notre application tout-en-un pour gérer efficacement
              vos produits, ventes, achats et stocks en un seul endroit.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="https://github.com/fiicode/erb/releases/download/v1.2.36/fiistore-Setup-1.2.36.exe"
                className="group flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center px-8 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
              >
                <FaWindows className="mr-2 text-xl group-hover:scale-110 transition-transform" />
                <span>Windows</span>
                <motion.span
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  (64-bit)
                </motion.span>
              </Link>

              <Link
                href="https://github.com/fiicode/erb/releases/download/v1.2.36/fiistore-1.2.36.dmg"
                className="group flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center px-8 py-3 rounded-lg font-medium border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all"
              >
                <FaApple className="mr-2 text-xl group-hover:scale-110 transition-transform" />
                <span>Mac OS</span>
              </Link>
            </div>

            <motion.div
              className="mt-10 flex items-center space-x-2 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <FaDownload className="text-xs" />
              <span>Plus de 10,000 téléchargements</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full sm:w-11/12 md:w-7/12 lg:w-3/5 mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* MacBook Pro Mockup */}
            <div className="relative mx-auto max-w-full sm:max-w-[95%] md:max-w-[100%] lg:max-w-[102%] transform sm:translate-x-0 md:translate-x-0">
              {/* MacBook Top Bar */}
              <div className="relative z-20 h-[15px] sm:h-[20px] md:h-[25px] bg-[#0a0a0a] rounded-t-lg flex justify-center items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black border border-gray-700"></div>
              </div>

              {/* MacBook Screen */}
              <div className="relative bg-[#0a0a0a] border-[4px] sm:border-[6px] md:border-[8px] border-[#0a0a0a] rounded-b-lg shadow-2xl">
                {/* Screen Content with Slider */}
                <div className="relative w-full h-[200px] sm:h-[280px] md:h-[340px] lg:h-[420px] overflow-hidden rounded-sm">
                  <div className="h-full">
                    <MediaSlider
                      items={mediaItems}
                      autoplay={true}
                      interval={7000}
                    />
                  </div>

                  {/* Status Bar */}
                  <div className="absolute top-1 sm:top-2 left-1 sm:left-2 z-30 flex items-center bg-black/20 backdrop-blur-md rounded-full px-1 sm:px-2 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-medium text-white">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-green-400 mr-1 sm:mr-1.5 animate-pulse"></div>
                    <span>fiistore v{version}</span>
                  </div>
                </div>

                {/* MacBook Bottom Part */}
                <div className="h-[6px] sm:h-[8px] md:h-[10px] bg-[#0a0a0a] mt-[2px] md:mt-[3px] rounded-b-lg"></div>
              </div>

              {/* MacBook Stand Shadow */}
              <div className="h-[6px] sm:h-[8px] md:h-[10px] w-[40%] sm:w-[50%] md:w-[60%] mx-auto bg-gradient-to-t from-black/20 to-transparent rounded-[50%]"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <div className="w-full flex justify-center mt-12">
          <motion.div
            className="flex items-center flex-col cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          >
            <span className="text-gray-400 text-sm mb-2">Découvrir plus</span>
            <FaArrowDown className="text-gray-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
