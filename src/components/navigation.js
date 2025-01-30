//needed to handle the next and previous button control and stuff
// src/components/NavigationButtons.js
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
      {prevPage && <button className="nav-button prev" onClick={goPrev}>←</button>}
      {nextPage && <button className="nav-button next" onClick={goNext}>→</button>}
    </div>
  );
};

export default NavigationButtons;
