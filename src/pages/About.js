import React from "react";
import "./About.css";
import NavigationButtons from "../components/navigation";

const images = [
    "coding.JPG",
    "fixing.JPG",
    "fun.JPG",
    "hammer.JPG",
    "happy.JPG",
    "planning.jpeg",
    "quast.jpeg",
    "robot.JPG",
    "robot2.JPG",
    "stairs.JPG",
    "table.JPG",
    "testing.JPG",
    "tub1.jpeg",
    "tub2.jpeg",
    "working.jpeg"
];

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-text">We're a passionate team dedicated to innovation, teamwork, and problem-solving.</p>

            <div className="collage">
                {images.map((img, index) => (
                    <div key={index} className="collage-item">
                        <img src={`/img/${img}`} alt={`Collage ${index}`} className="collage-image" />
                        <div className="tape"></div>
                    </div>
                ))}
            </div>

            <NavigationButtons prevPage="/StepSix" nextPage="/" />
        </div>
    );
};

export default About;
