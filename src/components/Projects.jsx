import React from "react";
import "../styles/Projects.css";

const Projects = ({ projects }) => {
  const displayProjects = projects.map((project, index) => (
    <div key={`project-${index}`}>
      <div className={`project-name`}>
        {project.projectName}&nbsp;
        <span className={`project-title`}>{project.projectBuiltWith}</span>
      </div>
      <a href={project.projectUrl}>
        <img
          className={`project-img`}
          alt={project.projectName}
          src={project.imgUrl}
        />
      </a>
    </div>
  ));
  return <div className="projects-grid">{displayProjects}</div>;
};
export default Projects;
