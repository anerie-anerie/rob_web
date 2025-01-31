import React from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepTwo = () => {
  return (
    <div>
    <img src="img/stageTwo.png" className="bg-image"></img>
    <NavigationButtons prevPage="/StepOne" nextPage="/StepThree" />
  </div>
  );
};

export default StepTwo;