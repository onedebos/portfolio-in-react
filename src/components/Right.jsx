import React, { useState } from "react";
import Projects from "./Projects";
import projects from "../ProjectsArray";
import "../styles/Right.css";
export default function Right() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(4);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProject = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const displayProjects = projects.map(project => (
    <div className={project.id} key={project.id}>
      <Projects
        id={project.id}
        projectName={project.projectName}
        projectBuiltWith={project.projectBuiltWith}
        projectUrl={project.projectUrl}
        imgUrl={project.imgUrl}
      />
    </div>
  ));
  return (
    <div className="wrapper-right">
      <div className="projects-grid">{displayProjects}</div>
    </div>
  );
}
