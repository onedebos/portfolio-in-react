import React from "react";
import TextLoop from "react-text-loop";
import ScrollIntoView from "react-scroll-into-view";

const Home = ({ ga }) => {
  const handleClick = () => {
    ga.event({
      category: "Click",
      action: "Work with me from Home",
    });
  };
  return (
    <div className="min-h-screen pt-20 md:flex justify-around items-center px-10 home circles">
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl z-40 home-container">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold ">Hi, I'm Adebola.</h1>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          I am a <mark>fullstack</mark> developer from{" "}
          <span className="italic font-semibold text-gray-600">
            Lagos, Nigeria.
          </span>{" "}
          I work with&nbsp;
          <TextLoop>
            <span className="pr-10 md:pr-0 text-yellow-600 z-40">React.</span>
            <span className="text-yellow-600 z-40">Node.js</span>
            <span className="text-yellow-600 z-40">Ruby-on-Rails.</span>
            <span className="pr-10 md:pr-0 text-yellow-600 z-40">Ruby.</span>
            <span className="text-yellow-600 z-40">JavaScript.</span>
            <span className="text-yellow-600 z-40">MongoDB.</span>
            <span className="text-yellow-600 z-40">Express.</span>
            <span className="pr-6 md:pr-0 text-yellow-600 z-40">Figma.</span>
            <span className="text-yellow-600 z-40">Adobe illustrator.</span>
          </TextLoop>
        </h1>
        <div>
          <ScrollIntoView selector="#work-with-me">
            <button
              className="font-bold mt-2 border border-2 rounded-sm border-black px-6 py-2 text-sm pro-button text z-40"
              onClick={handleClick}
            >
              WORK WITH ME
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
};

export default Home;
