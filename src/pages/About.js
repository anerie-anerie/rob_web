//let's do a short blurb about our team and then like a collage of different images perchance?

import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const About = () =>{
    return (
        <div>
            <h1>About Us</h1>
            <p> were very cool</p>
            <NavigationButtons prevPage="/StepSix" nextPage="/" />
         </div>
      );
};

  


export default About;