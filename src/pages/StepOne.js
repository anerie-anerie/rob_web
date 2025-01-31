import React from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepOne = () => {
  return (
      <div>
        <img src="img/stageOne.png" className="bg-image"></img>
        <NavigationButtons prevPage="/" nextPage="/StepTwo" />
        <video width="640" height="480" loop muted autoPlay controls = ''>
          <source src="hookcad.mp4" type="video/mp4"></source>
        </video>
      </div>
  );
};

export default StepOne;
