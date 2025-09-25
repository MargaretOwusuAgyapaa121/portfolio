import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <section className="home">
      {/* Profile Image */}
      <div className="portrait">
        <img src="/assets/img/magB.jpg" alt="Margaret" />
        <div className="glow-circle"></div> {/* classy glowing design */}
      </div>

      {/* Text Content */}
      <div className="intro">
        <h1>Hello, I’m <span>Margaret</span></h1>
        <h2>Software Developer | Cloud Computing Enthusiast</h2>
        <p>
          Passionate about building elegant solutions in software development
          while expanding my expertise into cloud computing with AWS. I aim to
          merge code and cloud to deliver scalable, modern applications.
        </p>
        <div className="cta-buttons">
          <Link to="#projects" className="btn">View My Work</Link>
          <Link to="#contact" className="btn btn-outline">Get In Touch</Link>
        </div>
      </div>

      {/* Social Icons */}
      <div className="socials">
        <Link to="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></Link>
        <Link to="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></Link>
        <Link to="https://github.com/MargaretOwusuAgyapaa121?tab=repositories" target="_blank" rel="noreferrer"><FaGithub /></Link>
      </div>
    </section>
  );
}

export default Home;
