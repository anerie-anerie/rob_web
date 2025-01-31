import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import StepFour from './pages/StepFour';
import StepFive from './pages/StepFive';
import StepSix from './pages/StepSix';
import About from './pages/About';

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Majestic Marauders",
      "/StepOne": "Stage One",
      "/StepTwo": "Stage Two",
      "/StepThree": "Stage Three",
      "/StepFour": "Stage Four",
      "/StepFive": "Stage Five",
      "/StepSix": "Stage Six",
      "/About": "About Us"
    };

    document.title = titles[location.pathname] || "Majestic Marauders";
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <TitleUpdater />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StepOne" element={<StepOne />} />
        <Route path="/StepTwo" element={<StepTwo />} />
        <Route path="/StepThree" element={<StepThree />} />
        <Route path="/StepFour" element={<StepFour />} />
        <Route path="/StepFive" element={<StepFive />} />
        <Route path="/StepSix" element={<StepSix />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
