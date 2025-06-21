import { useEffect, useRef } from "react";

interface Galaxy3DProps {
  top?: string;
  left?: string;
  scale?: number;
  stars?: number;
  zIndex?: number;
  opacity?: number;
  sunColor?: string;
  planet1Color?: string;
  planet2Color?: string;
  planet3Color?: string;
}

const Galaxy3D: React.FC<Galaxy3DProps> = ({
  top = "30%",
  left = "50%",
  scale = 1,
  stars = 100,
  zIndex = 0,
  opacity = 0.6,
  sunColor = "radial-gradient(circle, rgba(255, 255, 0, 0.2), rgba(255, 165, 0, 0.2))",
  planet1Color = "rgba(76, 201, 240, 0.2)",
  planet2Color = "rgba(247, 37, 133, 0.2)",
  planet3Color = "rgba(181, 23, 158, 0.2)",
}) => {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (starfieldRef.current) {
      // Clear existing stars first
      while (starfieldRef.current.firstChild) {
        starfieldRef.current.removeChild(starfieldRef.current.firstChild);
      }

      // Create stars
      for (let i = 0; i < stars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.opacity = String(Math.random() * 0.7 + 0.3);
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;

        starfieldRef.current.appendChild(star);
      }
    }
  }, [stars]);

  return (
    <div
      className="galaxy-container"
      style={{
        position: "absolute",
        top,
        left,
        transform: `translate(-50%, -50%) scale(${scale})`,
        width: "400px",
        height: "400px",
        opacity,
        zIndex,
        overflow: "hidden",
      }}
    >
      {/* Starfield for background stars */}
      <div
        ref={starfieldRef}
        className="starfield"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Solar system */}
      <div
        className="solar-system"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Sun */}
        <div
          className="sun"
          style={{
            width: "60px",
            height: "60px",
            background: sunColor,
            borderRadius: "50%",
            boxShadow: `0 0 20px ${sunColor.includes('gradient') ? 'rgba(255, 255, 0, 0.2)' : planet1Color}`,
            position: "absolute",
            zIndex: 10,
          }}
        />

        {/* Planet orbits with planets */}
        <div
          className="planet-orbit"
          style={{
            width: "150px",
            height: "150px",
            position: "absolute",
            border: "1px dashed rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            animation: "rotate 10s linear infinite",
          }}
        >
          <div
            className="planet"
            style={{
              width: "20px",
              height: "20px",
              background: planet1Color,
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "100%",
              transform: "translate(-50%, -50%)",
              boxShadow: `0 0 5px ${planet1Color}`,
            }}
          />
        </div>

        <div
          className="planet-orbit"
          style={{
            width: "220px",
            height: "220px",
            position: "absolute",
            border: "1px dashed rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            animation: "rotate 15s linear infinite",
          }}
        >
          <div
            className="planet"
            style={{
              width: "20px",
              height: "20px",
              background: planet2Color,
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "100%",
              transform: "translate(-50%, -50%)",
              boxShadow: `0 0 5px ${planet2Color}`,
            }}
          />
        </div>

        <div
          className="planet-orbit"
          style={{
            width: "300px",
            height: "300px",
            position: "absolute",
            border: "1px dashed rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            animation: "rotate 25s linear infinite",
          }}
        >
          <div
            className="planet"
            style={{
              width: "20px",
              height: "20px",
              background: planet3Color,
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "100%",
              transform: "translate(-50%, -50%)",
              boxShadow: `0 0 5px ${planet3Color}`,
            }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle infinite alternate ease-in-out;
        }

        @keyframes twinkle {
          from {
            opacity: 0.3;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Galaxy3D;
