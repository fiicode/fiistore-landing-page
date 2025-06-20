"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { FaApple, FaCheck, FaDownload, FaWindows } from "react-icons/fa";
import { motion } from "framer-motion";

type VersionData = {
  version: string;
  downloadUrlBase: string;
  windowsDownloadUrl: string;
  macDownloadUrl: string;
  fileSize: string;
  publishedAt?: string;
  error?: string;
};

export default function Home() {
  const [versionData, setVersionData] = useState<VersionData>({
    version: "1.2.36", // Valeur par défaut
    downloadUrlBase: "https://github.com/fiicode/erb/releases/download/v1.2.36",
    windowsDownloadUrl:
      "https://github.com/fiicode/erb/releases/download/v1.2.36/fiistore-Setup-1.2.36.exe",
    macDownloadUrl:
      "https://github.com/fiicode/erb/releases/download/v1.2.36/fiistore-1.2.36.dmg",
    fileSize: "128 MB",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        const response = await fetch("/api/latest-version");
        if (response.ok) {
          const data = await response.json();
          setVersionData(data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de la version:", error);
        // Les valeurs par défaut seront utilisées
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVersion();
  }, []);

  return (
    <main className="min-h-screen bg-[#070B14]">
      <Hero version={versionData.version} />
      <Features />

      {/* Download Section with Modern Design */}
      <section id="download" className="relative py-24 overflow-hidden">
        {/* Background patterns and gradients */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
            backgroundPositionX: "12px",
            backgroundPositionY: "12px",
            opacity: "14%",
            color: "#4f46e5",
          }}
        ></div>

        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px] z-0" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[80px] z-0" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Téléchargez fiistore
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Disponible pour Windows et Mac OS. Commencez à gérer votre
              entreprise efficacement dès aujourd&apos;hui.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Windows Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-all duration-300 transform group-hover:scale-[1.02]"></div>
              <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-2xl h-full backdrop-blur-sm z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-600/20 rounded-xl mr-4">
                    <FaWindows className="text-blue-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Windows
                    </h3>
                    <p className="text-gray-400">
                      Compatible avec Windows 10 et 11
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300 text-sm">
                    <FaCheck className="text-blue-400 mr-3 text-xs" />
                    <span>Installation simple et rapide</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <FaCheck className="text-blue-400 mr-3 text-xs" />
                    <span>Processeur 64-bit requis</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <FaCheck className="text-blue-400 mr-3 text-xs" />
                    <span>4GB RAM minimum recommandé</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">
                    {loading
                      ? "Chargement..."
                      : `Version ${versionData.version}`}
                  </span>
                  <span className="text-sm text-gray-400">
                    {versionData.fileSize}
                  </span>
                </div>

                <a
                  href={versionData.windowsDownloadUrl}
                  className="group flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg shadow-blue-900/30 w-full transform hover:translate-y-[-2px]"
                >
                  <FaDownload className="mr-2 group-hover:scale-110 transition-transform" />
                  Télécharger pour Windows
                </a>
              </div>
            </motion.div>

            {/* Mac Card */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl blur-md opacity-50 group-hover:opacity-70 transition-all duration-300 transform group-hover:scale-[1.02]"></div>
              <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-2xl h-full backdrop-blur-sm z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-700/30 rounded-xl mr-4">
                    <FaApple className="text-gray-300 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      macOS
                    </h3>
                    <p className="text-gray-400">Compatible avec macOS 11.0+</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300 text-sm">
                    <FaCheck className="text-gray-400 mr-3 text-xs" />
                    <span>Compatible Apple Silicon & Intel</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <FaCheck className="text-gray-400 mr-3 text-xs" />
                    <span>Optimisé pour macOS Ventura</span>
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <FaCheck className="text-gray-400 mr-3 text-xs" />
                    <span>4GB RAM minimum recommandé</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">
                    {versionData.version}
                  </span>
                  <span className="text-sm text-gray-400">
                    {versionData.fileSize}
                  </span>
                </div>

                <a
                  href={versionData.macDownloadUrl}
                  className="group flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-700 text-white text-center py-4 px-6 rounded-xl font-medium hover:from-gray-800 hover:to-gray-900 transition duration-300 shadow-lg shadow-gray-900/20 w-full transform hover:translate-y-[-2px]"
                >
                  <FaDownload className="mr-2 group-hover:scale-110 transition-transform" />
                  Télécharger pour Mac
                </a>
              </div>
            </motion.div>
          </div>

          {/* System requirements */}
          <motion.div
            className="mt-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Configuration requise
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <FaWindows className="mr-2 text-blue-400" /> Windows
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Windows 10/11 64-bit</li>
                  <li>• 4 GB RAM (8 GB recommandé)</li>
                  <li>• Processeur Intel/AMD 2.0 GHz+</li>
                  <li>• 200 MB d&apos;espace disque disponible</li>
                  <li>• Connexion Internet (pour les mises à jour)</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <h4 className="text-white font-medium mb-4 flex items-center">
                  <FaApple className="mr-2 text-gray-300" /> macOS
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• macOS 11.0 ou plus récent</li>
                  <li>• 4 GB RAM (8 GB recommandé)</li>
                  <li>• Processeur Intel/Apple Silicon</li>
                  <li>• 250 MB d&apos;espace disque disponible</li>
                  <li>• Connexion Internet (pour les mises à jour)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
