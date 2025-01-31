import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepSix = () => {
    return (
      <div className="step-six-container">
        
        <NavigationButtons prevPage="/StepFive" nextPage="/About" />
      </div>
    );
  };


export default StepSix;