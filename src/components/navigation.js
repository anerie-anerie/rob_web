import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';

const NavigationButtons = ({ prevPage, nextPage }) => {
  const navigate = useNavigate();

  const goPrev = () => {
    if (prevPage) navigate(prevPage);
  };

  const goNext = () => {
    if (nextPage) navigate(nextPage);
  };

  return (
    <div className="nav-buttons">
      {prevPage && (
        <button className="nav-button prev" onClick={goPrev}>
          <img src="/img/left-arrow.png" alt="Previous" />
        </button>
      )}
      {nextPage && (
        <button className="nav-button next" onClick={goNext}>
          <img src="/img/right-arrow.png" alt="Next" />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
