"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface MediaSliderProps {
  items: MediaItem[];
  autoplay?: boolean;
  interval?: number;
}

const MediaSlider = ({ items, autoplay = true, interval = 5000 }: MediaSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isPlaying && items.length > 1) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, interval);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, items.length, interval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 z-10 pointer-events-none"></div>
      
      {/* Dots background pattern */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
        backgroundSize: "24px 24px",
        backgroundPositionX: "12px",
        backgroundPositionY: "12px",
        opacity: "14%",
        color: "#ffffff"
      }}></div>
      
      {/* Media content */}
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 2 : 1
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt || "Slide image"}
                fill
                style={{ objectFit: "contain", padding: "20px" }}
                priority={index === 0}
              />
            ) : (
              <video
                className="w-full h-full object-cover"
                src={item.src}
                autoPlay={index === currentIndex}
                loop
                muted
                playsInline
              />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
              ? "bg-white w-6" 
              : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Side arrows */}
      {items.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause className="w-3 h-3" /> : <FaPlay className="w-3 h-3" />}
          </button>
        </>
      )}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10 pointer-events-none"></div>
    </div>
  );
};

export default MediaSlider;
