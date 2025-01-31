import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepOne = () =>{
    return (
        <div>
            <h1>Stage One</h1>
            <p> welcome to step 1</p>
            <NavigationButtons prevPage="/" nextPage="/StepTwo" />
         </div>
      );
};

  


export default StepOne;
