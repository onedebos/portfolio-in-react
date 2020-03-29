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
      <div>
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
          <img
            className={`project-img`}
            alt={project.projectName}
            src={project.imgUrl}
          />
        </a>
      </div>
      <div className="gh-link">
        <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
          see it on github &nbsp;|&nbsp;
        </a>
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
          &nbsp;&nbsp;live
        </a>{" "}
      </div>
    </div>
  ));
  return <div className="projects-grid">{displayProjects}</div>;
};
export default Projects;
