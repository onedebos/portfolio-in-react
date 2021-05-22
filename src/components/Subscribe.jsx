import React from "react";
import { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    let loaded = true;
    if (loaded) {
      window.open("http://eepurl.com/hjRker");
    }

    return () => (loaded = false);
  }, []);

  return <div></div>;
};

export default Subscribe;
