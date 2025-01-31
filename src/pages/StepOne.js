import React from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepOne = () => {
  return (
    <div className="step-one-container">
      
      <NavigationButtons prevPage="/" nextPage="/StepTwo" />
    </div>
  );
};

export default StepOne;
