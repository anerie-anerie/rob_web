import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepTwo = () =>{
    return (
        <div>
            <h1>This is Step Two</h1>
            <p> welcome to step 2</p>
            <NavigationButtons prevPage="/StepOne" nextPage="/StepThree" />
         </div>
      );
};

  


export default StepTwo;
