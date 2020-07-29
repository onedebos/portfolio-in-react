import React from "react";
import Project from "./Project";

const Pro = ({ projects, ga }) => {
  return (
    <div id="projects">
      <div className="font-bold text-3xl md:text-6xl mb-8 md:mb-20 text-center mt-8">
        <mark>Some of my Projects.</mark>
      </div>
      {projects.map((project) => {
        return (
          <>
            <Project project={project} ga={ga} />
          </>
        );
      })}
    </div>
  );
};

export default Pro;
