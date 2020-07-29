import React from "react";
import ScrollIntoView from "react-scroll-into-view";

const Menu = ({ ga }) => {
  const handleClick = () => {
    ga.event({
      category: "Click",
      action: "SEE PROJECTS from menu",
    });
  };
  return (
    <div className="bg-white p-1 py-3">
      <div className="flex justify-around px-10">
        <div className="text-4xl font-bold text-yellow-600">AA</div>
        <div>
          <ScrollIntoView selector="#projects">
            <button
              className="font-bold mt-2 border border-2 rounded-sm border-black px-6 py-2 text-sm button text"
              onClick={handleClick}
            >
              SEE PROJECTS
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
};

export default Menu;
