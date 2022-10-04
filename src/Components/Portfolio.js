import React from "react";
import img from "../images/profile_pic.jfif";
import linkedin from "../images/linkedin.png";
import github from "../images/github-logo.png";

import "./Portfolio.css";
const Portfolio = () => {
  return (
    <>
      <div className="card-container">
        <img className="round" src={img} alt="user" />
        <h3>Ritik Jha</h3>
        <p>Student at IIIT Ranchi <br /> Full Stack Web Developer</p>

        <div className="skills">
          <a href="https://www.linkedin.com/in/ritik-jha-855363220/" target='_blank'>
            <div className="linkedin">
              <img src={linkedin} alt="" />
              <p>Linkedin</p>
            </div>
          </a>
          <a href="https://github.com/RitikJha93/" target='_blank'>
            <div className="linkedin">
              <img src={github} alt="" />
              <p>Github</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
