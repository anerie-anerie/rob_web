import React from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepTwo = () => {
  return (
    <div className="step-two-container">
      
      <NavigationButtons prevPage="/StepOne" nextPage="/StepThree" />
    </div>
  );
};

export default StepTwo;