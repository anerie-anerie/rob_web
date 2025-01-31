import React from "react";
import "./Steps.css";
import NavigationButtons from "../components/navigation";

const StepTwo = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="stage-header">
        <div className="stage-header-left">
          <img
            src="/public/img/logo.webp"
            alt="Stage Logo"
            className="stage-logo"
          />
        </div>
        <div className="stage-header-center">
          <h1 className="stage-title">Stage Two</h1>
          <h2 className="stage-subtitle">Conveyor Belt Design</h2>
        </div>
        <div className="stage-header-right">
          <div className="stage-date">
            <span className="date-icon">🕒</span>
            <span>11/15/2024</span>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <div className="content">
        <p>
          Today was the day where we installed the hook onto the conveyor belt.
          Originally we were planning on installing the hook onto the conveyor
          belt with the ridge slots by inserting “T-shaped” slider onto the
          ridges and then attaching the base of the hook onto the flat base of
          the t-shaped slider.
        </p>

        <div className="image-container">
          {/* Left Column */}
          <div className="image-column">
            <p>
              The image here is a visualization of the belt with the “flat”
              base of the T-Shaped slider as the actual base of the hook. This
              could soon become a problem.
            </p>
            <img
              src="/public/img/conveyor-old.png"
              alt="Conveyor Old Design"
              className="image"
            />
          </div>

          {/* Middle Arrow */}
          <div className="arrow">
            <p>➡️</p>
          </div>

          {/* Right Column */}
          <div className="image-column">
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
              src="/public/img/conveyor-new.png"
              alt="Conveyor New Design"
              className="image"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <p>11/15/2024</p>
      </footer>

      {/* Navigation Buttons */}
      <NavigationButtons prevPage="/StepOne" nextPage="/StepThree" />
    </div>
  );
};

export default StepTwo;

