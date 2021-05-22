import React from "react";
import { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    let loaded = true;
    if (loaded) {
      window.open("https://eepurl.com/hjRker");
    }

    return () => (loaded = false);
  }, []);

  return <div> If you're not redirected immediately, click <a href="https://eepurl.com/hjRker" class="text-blue-500">here.</a></div>;
};

export default Subscribe;
