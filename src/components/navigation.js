import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./navigation.css";

const NavigationButtons = ({ prevPage, nextPage }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goPrev = () => {
    if (prevPage) navigate(prevPage);
  };

  const goNext = () => {
    if (nextPage) navigate(nextPage);
  };

  // Check if on the home page
  const isHome = location.pathname === "/";

  return (
    <div className="nav-buttons">
      {!isHome && prevPage && (
        <button className="nav-button prev" onClick={goPrev}>
          <img src="/img/left-arrow.png" alt="Previous" />
        </button>
      )}
      <button
        className={`nav-button next ${isHome ? "home-button" : ""}`}
        onClick={goNext}
      >
        <img
          src={isHome ? "/img/begin-button.png" : "/img/right-arrow.png"}
          alt={isHome ? "Begin" : "Next"}
        />
      </button>
    </div>
  );
};

export default NavigationButtons;
