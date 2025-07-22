"use client";

import { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(600);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};

export default useScreenWidth;
