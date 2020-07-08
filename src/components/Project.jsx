import React from "react";

const Project = ({ project }) => {
  return (
    <div className="px-8 md:max-w-2xl lg:max-w-5xl md:grid grid-cols-2 m-auto mb-8">
      <div className="col-span-1">
        <h1 className="font-bold text-4xl">{project.projectName}</h1>
        <p className="text-xl pr-8">{project.description}</p>
        <p className="text-xl font-semibold mt-4 mb-4 pr-6">
          Built with{" "}
          <span className="text-yellow-600">{project.projectBuiltWith}</span>
        </p>
        <div className="mb-8">
          <a
            href={project.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold mt-2 border border-2 rounded-sm border-black px-6 py-2 text-sm pro-button text"
          >
            see it on github
          </a>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 font-bold mt-2 border border-2 rounded-sm border-black px-6 py-2 text-sm pro-button text w-full"
          >
            live demo
          </a>{" "}
        </div>
      </div>
      <div className="col-span-1">
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
          <img src={project.imgUrl} alt={project.projectName} />
        </a>
      </div>
    </div>
  );
};

export default Project;
