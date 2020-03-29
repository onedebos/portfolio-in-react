import React, { useState } from "react";
import Projects from "./Projects";
import projects from "../helpers/ProjectsArray";
import Paginate from "../helpers/Paginate";
import "../styles/Right.css";
export default function Right() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(4);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProject = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    return false;
  };
  return (
    <div className="wrapper-right">
      <Paginate
        projectsPerPage={projectsPerPage}
        totalProjects={projects.length}
        paginate={paginate}
      />
      <Projects projects={currentProject} />
    </div>
  );
}
