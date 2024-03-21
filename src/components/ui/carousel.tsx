"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./CarouselDotButton";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla w-full px-4 sm:px-12 ">
      <div className="embla__viewport rounded-md mt-12" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={"/Banner.png"}
                width={1000}
                height={1000}
                className="w-full"
                alt="Banner İmage Bookstore"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center h-8 mt-4">
        <div className="embla__dots">
          {scrollSnaps.map((_: any, index: number) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot duration-150 transition-all".concat(
                index === selectedIndex ? " embla__dot--selected " : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
