"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";

import image1 from "@/public/images/graphics/hero-slideshow/1.png";
import image2 from "@/public/images/graphics/hero-slideshow/2.png";
import image3 from "@/public/images/graphics/hero-slideshow/3.png";
import image4 from "@/public/images/graphics/hero-slideshow/4.png";
import SlideshowController from "./Slideshow-controller";

const images = [image1, image2, image3, image4];

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef(null);

  useLayoutEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev == 3 ? 0 : prev + 1));
    }, 6500);

    return () => clearInterval(intervalRef.current);
  }, []);

  const manualSelectIndex = (index) => {
    setCurrentIndex(+index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className="relative h-[40vh] max-h-[45vh] pt-2 md:pt-10 ml-8 md:w-full md:col-span-2 md:h-[50vh]">
      <Image
        src={images[currentIndex]}
        alt="slideshow image"
        className="animate-ping-reverse max-h-full max-w-full"
        width={560}
        height={400}
        priority
        key={currentIndex}
      />
      <SlideshowController
        selectIndex={manualSelectIndex}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default HeroSlideshow;
