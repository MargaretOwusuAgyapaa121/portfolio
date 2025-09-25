

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left: Logo / Name */}
        <div className="footer-logo">
          <h2>Margaret</h2>
          <p>Building the future with Cloud & Software.</p>
        </div>

        {/* Center: Navigation links */}
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right: Social Icons */}
        <div className="footer-socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Margaret. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
