
import { FaReact, FaJs, FaNodeJs, FaAws, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiDocker, SiKubernetes, SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">
        A blend of <span>software development</span> and <span>cloud expertise</span>
        powering modern solutions.
      </p>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="icons">
            <FaReact title="React" />
            <FaJs title="JavaScript" />
            <SiTypescript title="TypeScript" />
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="icons">
            <FaNodeJs title="Node.js" />
            <SiMysql title="MySQL" />
            <FaDatabase title="Databases" />
          </div>
        </div>

        {/* Cloud */}
        <div className="skill-card">
          <h3>Cloud</h3>
          <div className="icons">
            <FaAws title="AWS" />
            <SiDocker title="Docker" />
            <SiKubernetes title="Kubernetes" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
