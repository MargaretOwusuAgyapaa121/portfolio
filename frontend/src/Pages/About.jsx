import React from "react";  
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left: Image */}
        <div className="about-image">
          <img src="/assets/img/mag2.jpg" alt="Margaret" />
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hello! I’m <span>Margaret</span>, a passionate Software Developer 
            currently expanding into <strong>Cloud Computing with AWS</strong>. 
            My mission is to craft elegant, scalable applications that merge 
            cutting-edge development with the power of the cloud.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <h3>💻 Software Development</h3>
              <p>
                Skilled in building modern, responsive applications with 
                JavaScript, React, and backend technologies.
              </p>
            </div>
            <div className="highlight">
              <h3>☁️ Cloud Computing</h3>
              <p>
                Expanding my expertise with AWS to design reliable, 
                secure, and scalable cloud solutions.
              </p>
            </div>
            <div className="highlight">
              <h3>🚀 Vision</h3>
              <p>
                To combine software development and cloud to deliver 
                impactful digital experiences.
              </p>
            </div>
          </div>

          <Link to="/resume.pdf" className="btn">Download CV</Link>
        </div>
      </div>
    </section>
  );
}

export default About;
