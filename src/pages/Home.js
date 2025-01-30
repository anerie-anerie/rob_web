import React, { useRef } from "react";
import "./Home.css";

const Home = () => {
  const sectionRefs = {
    about: useRef(null),
    pastEvents: useRef(null),
    ourTeam: useRef(null),
    contact: useRef(null),
  };

  return (
    <div>
      <section ref={sectionRefs.lunarhacks} className="section">
        <h1>Merivale High School Robotics Club</h1>
      </section>
      <section ref={sectionRefs.about} className="section">
        <h1>Table of Contents</h1>
      </section>
      <section ref={sectionRefs.ourTeam} className="section">
        <h1>About Us</h1>
      </section>
      <section ref={sectionRefs.contact} className="section">
        <h1>Our Teams!</h1>
      </section>
    </div>
  );
};

export default Home;
