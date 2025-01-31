import React from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepTwo = () => {
  return (
    <div>
      {/* Image of the Canva Design */}
      <img
        src={process.env.PUBLIC_URL + "/img/StageTwo.png"}
        alt="Merivale ROB Design"
        style={{
          display: "block",
          margin: "20px auto",
          maxWidth: "90%",
          height: "auto",
        }}
      />

      {/* Navigation Buttons */}
      <NavigationButtons prevPage="/StepOne" nextPage="/StepThree" />
    </div>
  );
};

export default StepTwo;


