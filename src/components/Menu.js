import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <div className="bg-gray-200 p-1 py-3">
      <div className="flex justify-around px-10">
        <div className="text-4xl font-bold text-yellow-600">AA</div>
        <div>
          <ScrollIntoView selector="#work-with-me">
            <button className="font-bold mt-2 border border-2 rounded-sm border-black px-6 py-2 text-sm button text">
              WORK WITH ME
            </button>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
};

export default Menu;
