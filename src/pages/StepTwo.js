import React, { useRef } from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepTwo = () =>{
    return (

    <div className="container">
      <header>
        <h1>Stage Two</h1>
        <h2>Conveyor Belt Design</h2>
      </header>
      <div className="content">
        <p>
          Today was the day where we installed the hook onto the conveyor belt.
          Originally we were planning on installing the hook onto the conveyor
          belt with the ridge slots by inserting “T-shaped” slider onto the
          ridges and then attaching the base of the hook onto the flat base of
          the t-shaped slider.
        </p>

        <div className="image-container">
          <div>
            <p>
              The image here is a visualization of the belt with the “flat”
              base of the T-Shaped slider as the actual base of the hook. This
              could soon become a problem.
            </p>
            <img
              src="/img/conveyor-old.jpg"
              alt="Conveyor Old Design"
              className="image"
            />
          </div>
          <div>
            <ul>
              <li>Strengthened the hook for screw attachment.</li>
              <li>Enlarged design and adjusted screw holes.</li>
              <li>Used durable TPM and reprinted.</li>
            </ul>
            <p>
              Now we had a freshly baked hook ready to be screwed on. It’s
              basically the same drawing with holes on the base.
            </p>
            <img
              src="/img/conveyor-new.jpg"
              alt="Conveyor New Design"
              className="image"
            />
          </div>
        </div>

        <div className="arrow">
          <p>➡️</p>
        </div>
      </div>
      <footer>
        <p>11/15/2024</p>
      </footer>
            <NavigationButtons prevPage="/StepOne" nextPage="/StepThree" />
    </div>
      );
};

  


export default StepTwo;

