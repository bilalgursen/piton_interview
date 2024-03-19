import Carousel from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
import ShowCategory from "../../ui/showCategory";
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function HomeContainer() {
  return (
    <>
      <div className="flex flex-col ">
        <Carousel slides={SLIDES} options={OPTIONS} />
        <ShowCategory />
      </div>
    </>
  );
}
