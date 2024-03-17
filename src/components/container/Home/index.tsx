import DeleteCookie from "@/components/ui/logOut";
import BestSeller from "../../ui/bestSeller";
import Carousel from "@/components/ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function HomeContainer() {
  return (
    <>
      <div className="h-screen flex flex-col ">
        <Carousel slides={SLIDES} options={OPTIONS} />
        <BestSeller />
      </div>
      <div className="flex justify-end ">
        <DeleteCookie />
      </div>
    </>
  );
}
