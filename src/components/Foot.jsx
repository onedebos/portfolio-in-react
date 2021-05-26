import React from "react";

const footer = () => {
  return (
    <div className="m-auto bg-gray-200 p-4 w-full md:absolute md:bottom-0">
      <div className="flex flex-col md:flex-row justify-between max-w-5xl m-auto">
        <div className="text-2xl">
          Adebola<span className="font-bold">Adeniran</span>
        </div>
        <div className="md:p-3 text-black text-xs">
          © 2020, Adebola Adeniran.
        </div>
      </div>
    </div>
  );
};

export default footer;
