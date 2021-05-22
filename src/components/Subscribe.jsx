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

  return <div> If you're not redirected immediately, click <a href="http://eepurl.com/hjRker" class="text-blue-500">here.</a></div>;
};

export default Subscribe;
