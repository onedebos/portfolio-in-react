import React from "react";
import LazyLoad from "react-lazyload";

const Project = ({ project, ga }) => {
  const handleClick = (action) => {
    ga.event({
      category: "Click",
      action,
    });
  };
  return (
    <div
      className="px-12 md:px-8 md:max-w-2xl lg:max-w-5xl md:flex m-auto mb-8 reverse lg:mt-20 reverse-bg"
      key={project.id}
    >
      <div className="flex-1 reverse-text m-auto">
        <h1 className="font-bold text-4xl" data-sal="slide-up">
          {project.projectName}
        </h1>
        <p className="text-xl pr-8" data-sal="slide-left">
          {project.description}
        </p>
        <p className="text-xl font-semibold mt-4 mb-4 pr-6">
          Built with{" "}
          <span className="text-yellow-600" data-sal="slide-left">
            {project.projectBuiltWith}
          </span>
        </p>
        <div className="mb-8" data-sal="slide-right">
          <a
            href={project.ghLink}
            target="_blank"
            onClick={handleClick(
              `Clicked github link to ${project.projectName}`
            )}
            rel="noopener noreferrer"
            className="font-bold mt-2 border border-2 rounded-sm border-black px-6 py-2 text-sm pro-button text"
          >
            see it on github
          </a>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick(`Clicked live link to ${project.projectName}`)}
            className="ml-2 font-bold mt-2 border border-2 rounded-sm border-black px-6 py-2 text-sm pro-button text w-full"
          >
            live demo
          </a>{" "}
        </div>
      </div>
      <div className="flex-1 md:mt-4">
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick(
            `Clicked image with link to ${project.projectName}`
          )}
        >
          <LazyLoad height={200}>
            <img
              // data-sal="slide-right"
              src={project.imgUrl}
              alt={project.projectName}
              className="rounded-md circles"
            />
          </LazyLoad>
        </a>
      </div>
    </div>
  );
};

export default Project;
