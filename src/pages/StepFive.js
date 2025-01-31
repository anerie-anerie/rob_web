import React from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepFive = () => {
  return (
    <div>
    <img src="img/stageFive.png" className="bg-image"></img>
    <NavigationButtons prevPage="/StepFour" nextPage="/StepSix" />
  </div>
  );
};

export default StepFive;
