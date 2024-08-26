"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

export default function CarouselCustom({
  children,
  count,
}: {
  children: React.ReactNode;
  count: number;
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
      opts={{ align: "start", loop: true }}
      plugins={[Autoplay({ delay: 2000 })]}
    >
      <CarouselContent className="p-2 m-auto">
        {Array.from({ length: count }).map((_, i) => (
          <CarouselItem key={i} className="ml-3 md:basis-1/2 lg:basis-1/3">
            {children}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showArrows && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
