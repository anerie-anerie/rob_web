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
    "working.jpeg",
    "groupPic.JPG"
];

const About = () => {
    return (
        <div className="about-container">
            <img src="/img/logo.webp" alt="Logo" className="logo" />
            <h1 className="about-title">About Us</h1>
            <p className="about-text">We're a passionate team dedicated to innovation, teamwork, and problem-solving. With only 3 months in our school year to build our robot, we put our robotics passion to the test every week as team.</p>

            <div className="collage">
                {images.map((img, index) => (
                    <div key={index} className="collage-item">
                        <img src={`/img/${img}`} alt={`Collage ${index}`} className="collage-image" />
                        <div className="tape"></div>
                    </div>
                ))}
            </div>

            <NavigationButtons prevPage="/StepSix" nextPage="/" />
            <footer className="footer">
                <p> coded with passion ❤️‍🔥 | TARK</p>
            </footer>
        </div>
    );
};

export default About;
