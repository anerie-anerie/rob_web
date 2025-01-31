import React from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepOne = () => {
  return (
      <div>
        <img src="img/stageOne.png" className="bg-image"></img>
        <NavigationButtons prevPage="/" nextPage="/StepTwo" />
      </div>
  );
};

export default StepOne;
