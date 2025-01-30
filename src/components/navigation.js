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
    <div>
      {prevPage && <button onClick={goPrev}>Previous</button>}
      {nextPage && <button onClick={goNext}>Next</button>}
    </div>
  );
};

export default NavigationButtons;
