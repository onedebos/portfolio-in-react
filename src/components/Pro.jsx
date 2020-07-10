import React from "react";
import Project from "./Project";

const Pro = ({ projects }) => {
  return (
    <div>
      <div className="font-bold text-3xl md:text-6xl mb-8 md:mb-20 text-center">
        <mark>Some of my Projects.</mark>
      </div>
      {projects.map((project, index) => {
        return (
          <>
            <Project project={project} />{" "}
          </>
        );
      })}
    </div>
  );
};

export default Pro;
