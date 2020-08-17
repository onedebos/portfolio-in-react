import React from "react";
import ScrollIntoView from "react-scroll-into-view";

const Menu = ({ ga, inView }) => {
  const handleClick = () => {
    ga.event({
      category: "Click",
      action: "SEE PROJECTS from menu",
    });
  };

  const trackBlog = () => {
    ga.event({
      category: "Click",
      action: "To blog",
    });
  };

  const navToggle = () => {
    var btn = document.getElementById("menuBtn");
    var nav = document.getElementById("menu");

    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  };

  return (
    <div className="bg-white">
      {/* {console.log("menu", inView)} */}
      <header
        id="top"
        className="w-full flex flex-col fixed pin-t pin-r pin-l lg:max-w-full m-auto z-20"
      >
        <nav
          id="site-menu"
          className={`flex flex-col sm:flex-row w-full justify-around items-center px-4 sm:px-6 py-1 shadow sm:shadow-none bg-gray-200 ${
            !inView ? "md:bg-white" : ""
          }`}
        >
          <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <a href="/" className="py-1">
              <h1 className="font-bold text-4xl text-yellow-600">AA</h1>
            </a>

            <button
              id="menuBtn"
              className="hamburger block sm:hidden focus:outline-none"
              type="button"
              onClick={navToggle}
            >
              <span className="hamburger__top-bun"></span>
              <span className="hamburger__bottom-bun"></span>
            </button>
          </div>
          <div
            id="menu"
            className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden"
          >
            <a
              onClick={trackBlog}
              target="_blank"
              rel="noopener noreferrer"
              href="https://blog.adebola.dev"
              className="text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 md:border md:rounded-sm md:border-black md:px-6 button text"
            >
              READ BLOG
            </a>

            <ScrollIntoView
              selector="#projects"
              className="w-full mt-2 md:w-auto md:mt-0"
            >
              <button
                onClick={handleClick}
                className="text-dark text-lg no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2 md:border md:rounded-sm border-black md:px-6 button text md:ml-2 focus:outline-none"
              >
                SEE PROJECTS
              </button>
            </ScrollIntoView>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Menu;
