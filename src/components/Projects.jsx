import React from "react";
import "../styles/Projects.css";

const Projects = ({ projects }) => {
  const displayProjects = projects.map((project, index) => (
    <div key={`project-${index}`}>
      <div className={`project-name`}>
        {project.projectName}&nbsp;
        <span className={`project-title`}>{project.projectBuiltWith}</span>
        &nbsp;
      </div>

      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        <img
          className={`project-img`}
          alt={project.projectName}
          src={project.imgUrl}
        />
      </a>
      <p className="gh-link">
        <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
          see it on github
        </a>
        &nbsp;|&nbsp;
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
          live
        </a>{" "}
      </p>
    </div>
  ));
  return <div className="projects-grid">{displayProjects}</div>;
};
export default Projects;
