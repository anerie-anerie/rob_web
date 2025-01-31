import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Home.css";
import NavigationButtons from "../components/navigation";

const IMGS = [
  "/img/forky1.jpg", 
  "/img/forky2.jpg", 
  "/img/forky3.jpg", 
  "/img/forky4.jpg", 
  "/img/forky5.jpg", 
  "/img/forky6.jpg"
];

const RollingGallery = ({ autoplay = true, pauseOnHover = true, images = IMGS }) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5; 
  const radius = cylinderWidth / (2 * Math.PI);
  const rotationValue = useRef(0);
  const controls = useAnimation();

  // Auto-rotation logic (slowed down)
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        controls.start({
          rotateY: rotationValue.current - (360 / faceCount),
          transition: { duration: 4, ease: "linear" },  // Slowed down animation (4 seconds)
        });
        rotationValue.current -= 360 / faceCount; // Update rotation value
      }, 3000); // Slower image change interval (3 seconds)

      return () => clearInterval(interval);
    }
  }, [autoplay, controls, faceCount]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause and resume autoplay on hover
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      controls.stop(); // Stop the animation
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      controls.start({
        rotateY: rotationValue.current - (360 / faceCount),
        transition: { duration: 4, ease: "linear" },  // Match the slowed down transition
      });
    }
  };

  return (
    <div className="home-container">
      <img src="/img/logo.webp" alt="Logo" className="logo" />
      <h1>The Majestic Marauders 50226B presents...</h1>
      <h2 className="forklift-title">🔥 FORKLIFT 🔥</h2> 
      <div className="gallery-container">
        <div className="gallery-content">
          <motion.div
            className="gallery-track"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={controls}
            style={{
              transformStyle: "preserve-3d",
              width: cylinderWidth,
            }}
          >
            {images.map((url, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
                }}
              >
                <img src={url} alt={`gallery-item-${i}`} className="gallery-img" />
              </div>
            ))}
          </motion.div>
        </div>
        <div>
          <NavigationButtons nextPage="/StepOne" />
        </div>
      </div>
    </div>
  );
};

export default RollingGallery;
