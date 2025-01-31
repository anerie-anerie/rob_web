import React, { useEffect, useRef, useState } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepOne = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Video is in view, trigger autoplay
        } else {
          setIsVisible(false); // Video is out of view, pause autoplay
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div>
      <img src="img/stageOne.png" className="bg-image" alt="background" />
      
      {/* Video element */}
      <div className="video-container">
        <video
          ref={videoRef}
          width="100%"
          height="auto"
          controls
          autoPlay={isVisible}
          muted
          loop
        >
          <source src="/hookcad.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <NavigationButtons prevPage="/" nextPage="/StepTwo" />
    </div>
  );
};

export default StepOne;
