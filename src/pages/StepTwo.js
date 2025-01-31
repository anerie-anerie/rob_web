import React from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepTwo = () => {
  return (
    <div>
      
      {/* Navigation Buttons */}
      <NavigationButtons prevPage="/StepOne" nextPage="/StepThree" />
    </div>
  );
};

export default StepTwo;

