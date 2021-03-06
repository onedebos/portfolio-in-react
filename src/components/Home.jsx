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
    <div className="min-h-screen pt-40 md:pt-20 md:flex justify-around items-center px-10 home circles">
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl home-container z-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold ">Hi, I'm Adebola.</h1>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl">
          <mark>Fullstack</mark> developer.
          <br />
          <TextLoop>
          <span className="text-yellow-600 z-40">Ruby on Rails.</span>
            <span className="pr-10 md:pr-0 text-yellow-600 z-40">React.</span>
            <span className="text-yellow-600 z-40">Node.js</span>
            <span className="pr-10 md:pr-0 text-yellow-600 z-40">Ruby.</span>
            <span className="text-yellow-600 z-40">JavaScript.</span>
            <span className="text-yellow-600 z-40">MongoDB.</span>
            <span className="text-yellow-600 z-40">Express.</span>
            <span className="pr-6 md:pr-0 text-yellow-600 z-40">Figma.</span>
          </TextLoop>
        </h1>

        <ScrollIntoView selector="#work-with-me">
          <button
            className="font-bold mt-2 border border-2 rounded-sm border-black px-6 py-2 text-sm pro-button text z-10"
            onClick={handleClick}
          >
            WORK WITH ME
          </button>
        </ScrollIntoView>
      </div>
    </div>
  );
};

export default Home;
