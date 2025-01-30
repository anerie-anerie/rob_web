import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepThree = () =>{
    return (
        <div>
            <h1>This is Step Three</h1>
            <p> welcome to step 3</p>
            <NavigationButtons prevPage="/StepTwo" nextPage="/StepFour" />
         </div>
      );
};

  


export default StepThree;