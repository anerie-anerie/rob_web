import React, { useRef } from "react";
import "./Home.css";
import NavigationButtons from "../components/navigation";

const Home = () => {
  const sectionRefs = {
    about: useRef(null),
    pastEvents: useRef(null),
    ourTeam: useRef(null),
    contact: useRef(null),
  };

  return (
    <div>
      <h1>This is home</h1>
      <p>happy home.</p>
      <NavigationButtons nextPage="/StepOne" />
    </div>
  );
}

export default Home;
