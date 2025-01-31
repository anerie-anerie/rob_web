import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepFive = () => {
    return (
        <div>
        {/* Image of the Canva Design */}
        <img
          src="/img/stageFive.png" // Correct path
          alt="Merivale ROB Design1"
          style={{
            display: "block",
            margin: "20px auto",
            maxWidth: "90%",
            height: "auto",
          }}
        />
            <NavigationButtons prevPage="/StepFour" nextPage="/StepSix" />
         </div>
      );
};


export default StepFive;
