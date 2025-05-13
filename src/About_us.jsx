import React from "react";
import "./styles/about_us.css";
import Profilepic from "./assets/Profile_Akshai.jpg";

function About_us() {
  return (
    <div className="about-us">
      <div className="about-us-img">
        <img src={Profilepic} className="profile-pic" alt="Profile-picture" />
      </div>
      <div className="about-content">
       
        <p className="about-con">
          Developer.com is a long-standing online resource that provides
          software developers with news, tutorials, code examples, and insights
          across a broad range of topics such as web development, cloud
          computing, DevOps, and mobile apps. It caters to both beginners and
          professionals, offering practical how-to guides, tool reviews, and
          best practices. As part of the TechnologyAdvice network, Developer.com
          is known for its trusted and informative content that helps developers
          stay updated and improve their skills in an ever-evolving tech
          landscape.
        </p>
      </div>
    </div>
  );
}

export default About_us;
