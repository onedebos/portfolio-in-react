import React from "react";
import Project from "./Project";
import "../styles/tailwind.css";

const Pro = ({ projects, ga, theRef }) => {
  return (
    <div id="projects" ref={theRef} className="projectsBg">
      <div className="font-bold text-3xl md:text-6xl mb-8 md:mb-20 text-center mt-8 z-10">
        <mark>Some of my Projects.</mark>
      </div>
      {projects.map((project, index) => {
        return (
          <React.Fragment key={index}>
            <Project project={project} ga={ga} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Pro;
