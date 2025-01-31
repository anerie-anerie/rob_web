import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepFive = () => {
    return (
        <div>
            <h1>This is Step Five</h1>
            <p> welcome to step 5</p>
            <NavigationButtons prevPage="/StepFour" nextPage="/StepSix" />
         </div>
      );
};


export default StepFive;