import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepThree = () => {
    return (
      <div>
      <img src="img/stageThree.png" className="bg-image"></img>
      <NavigationButtons prevPage="/StepTwo" nextPage="/StepFour" />
    </div>
    );
  };

export default StepThree;