import React from "react";
import Project from "./Project";

const Pro = ({ projects }) => {
  return (
    <div className="py-10 ">
      <div className="font-bold text-3xl mb-8 md:mb-20 text-center">
        <mark>Some of my Projects.</mark>
      </div>
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
};

export default Pro;
