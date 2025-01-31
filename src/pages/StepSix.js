import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepSix = () => {
    return (
      <div>
      <img src="img/stageSix.png" className="bg-image"></img>
      <NavigationButtons prevPage="/StepFive" nextPage="/About" />
    </div>
    );
  };


export default StepSix;