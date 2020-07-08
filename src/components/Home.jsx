import React from "react";
import TextLoop from "react-text-loop";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-around items-center px-10 ">
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm Adebola.
          </h1>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          I am a fullstack developer from{" "}
          <span className="italic font-semibold text-gray-600">
            Lagos, Nigeria.
          </span>{" "}
          I work with&nbsp;
          <TextLoop>
            <span className="pr-10 md:pr-0 text-yellow-600">React.</span>
            <span className="text-yellow-600">Node.js</span>
            <span className="text-yellow-600">Ruby-on-Rails.</span>
            <span className="pr-10 md:pr-0 text-yellow-600">Ruby.</span>
            <span className="text-yellow-600">JavaScript.</span>
            <span className="text-yellow-600">MongoDB.</span>
            <span className="text-yellow-600">Express.</span>
            <span className="text-yellow-600">Figma.</span>
            <span className="text-yellow-600">Adobe illustrator.</span>
          </TextLoop>
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
