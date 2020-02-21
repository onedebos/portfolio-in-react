import React from "react";
import "../styles/Projects.css";
import projects from "../ProjectsArray";

const Projects = ({
  id,
  projectName,
  projectBuiltWith,
  projectUrl,
  imgUrl
}) => {
  const displayProjects = projects.map(project => (
    <div>
      <div className={`project-name`}>
        {projectName}&nbsp;
        <span className={`project-title`}>{projectBuiltWith}</span>
      </div>
      <a href={projectUrl}>
        <img className={`project-img`} alt={projectName} src={imgUrl} />
      </a>
    </div>
  ));
  return <div>{displayProjects}</div>;
};
export default Projects;
