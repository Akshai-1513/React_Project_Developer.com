import React from "react";
import Back_img from "./assets/background.png";
import "./styles/Herosection.css";

function HeroSection() {
  return (
    <>
      <div className="herosection">
        <img src ={Back_img} alt="Background image" className="back-img" />
        <div className="hero-content">
          <h1>Rise Above The <span>Ordinary</span></h1>
          <p>Discover new heights with our <span>premium services</span></p>
          <button className="content-button">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
