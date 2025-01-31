import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepFour = () => {
    return (
      <div>
      <img src="img/stageFour.png" className="bg-image"></img>
      <NavigationButtons prevPage="/StepThree" nextPage="/StepFive" />
    </div>
    );
  };


export default StepFour;