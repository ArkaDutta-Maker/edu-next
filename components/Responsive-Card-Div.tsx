"use client";

import { useState, useEffect } from "react";

import CarouselCustom from "./carousel-custom";
import { Card_About } from "./card-about";
const ResponsiveCardDiv = () => {
  const [showCarousel, setShowCarousel] = useState(true);
  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      setShowCarousel(true);
    } else {
      setShowCarousel(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up listener
    };
  }, []);

  return showCarousel ? (
    <div className="container md:p-10">
      <CarouselCustom count={5} val={2000}>
        <Card_About />
      </CarouselCustom>
    </div>
  ) : (
    <div className="mt-10 flex justify-between gap-3">
      <div className="ml-8 md:basis-1/2 lg:basis-1/4">
        <Card_About />
      </div>
      <div className="ml-3 md:basis-1/2 lg:basis-1/4">
        <Card_About />
      </div>
      <div className="ml-3 md:basis-1/2 lg:basis-1/4">
        <Card_About />
      </div>
    </div>
  );
};

export default ResponsiveCardDiv;
