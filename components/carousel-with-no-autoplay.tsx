"use client";
import { useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
export default function CarouselCustomNoAutoplay({
  children,
  count,
  showArrows_val,
  loop_val,
}: {
  children: React.ReactNode;
  count: number;
  showArrows_val: boolean;
  loop_val: boolean;
}) {
  const [showArrows, setShowArrows] = useState(true);
  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      setShowArrows(false); // Hide arrows on mobile screens
    } else {
      setShowArrows(true); // Show arrows on larger screens
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up listener
    };
  }, []);

  return (
    <Carousel
      className="-mx-3 md:mx-auto"
      opts={{ align: "center", loop: loop_val }}
    >
      <CarouselContent className="p-2 m-auto">
        {Array.from({ length: count }).map((_, i) => (
          <CarouselItem key={i} className="ml-3 md:basis-1/2 lg:basis-1/3">
            {children}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showArrows && showArrows_val && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
