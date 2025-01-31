import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepThree = () => {
    return (
      <div className="step-three-container">
        
        <NavigationButtons prevPage="/StepTwo" nextPage="/StepFour" />
      </div>
    );
  };

export default StepThree;