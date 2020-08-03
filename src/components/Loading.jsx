import React from "react";
import * as loading from "./loading.gif";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center m-auto">
      <h1 className="text-3xl font-bold">Adebola.dev</h1>
      <p>
        Getting things ready&nbsp;
        <img src={loading} alt="loading Adebola.dev" />
      </p>
    </div>
  );
};

export default Loading;
