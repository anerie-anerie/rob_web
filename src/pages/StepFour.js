import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepFour = () => {
    return (
      <div className="step-four-container">
        
        <NavigationButtons prevPage="/StepThree" nextPage="/StepFive" />
      </div>
    );
  };  


export default StepFour;