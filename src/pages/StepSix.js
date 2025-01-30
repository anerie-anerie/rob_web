import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepSix = () =>{
    return (
        <div>
            <h1>This is Step Six</h1>
            <p> welcome to step 6</p>
            <NavigationButtons prevPage="/StepFive" nextPage="/About" />
         </div>
      );
};

  


export default StepSix;