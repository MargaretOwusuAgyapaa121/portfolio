import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projects() {
  const projectData = [
    {
      title: "Cloud-Based URL Shortener",
      description:
        "A modern URL shortener with analytics, custom aliases, password protection, and AWS hosting.",
      tech: ["React", "Node.js", "MySQL", "AWS"],
      github: "https://github.com/MargaretOwusuAgyapaa121/url",
      demo: "https://yourprojectdemo.com",
    },
    {
      title: "Portfolio Website",
      description:
        "Developed a modern foundation website for Provider’s Mission Organization, a nonprofit that travels worldwide to share the gospel, support communities, and inspire generosity through giving. The site includes donation features, event updates, and an accessible design to connect with supporters globally.",
      tech: ["React", "Pure CSS"],
      github: "https://github.com/MargaretOwusuAgyapaa121/providers",
      demo: "https://providersmissions.org/",
    },
    {
      title: "Cloud Migration Project",
      description:
        "Migrated on-premise apps to AWS, implementing scalable architecture with Docker & Kubernetes.",
      tech: ["AWS", "Docker", "Kubernetes"],
    //   github: "https://www.loom.com/share/08d49a2e5f47413a8de25ae8bfdbded1",
      demo: "https://www.loom.com/share/08d49a2e5f47413a8de25ae8bfdbded1",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        A collection of <span>software solutions</span> and <span>cloud projects</span> I’ve worked on.
      </p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className="links">
              <Link to={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </Link>
              <Link to={project.demo} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
