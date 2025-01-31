import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepFive = () => {
    return (
      <div className="step-five-container">
        
        <NavigationButtons prevPage="/StepFour" nextPage="/StepSix" />
      </div>
    );
  };


export default StepFive;