import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepFour = () =>{
    return (
        <div>
            <h1>This is Step Four</h1>
            <p> welcome to step 4</p>
            <NavigationButtons prevPage="/StepThree" nextPage="/StepFive" />
         </div>
      );
};

  


export default StepFour;