import { EmblaOptionsType } from "embla-carousel";

import Carousel from "@/components/ui/carousel";
import Category from "@/components/category";

type category = {
  id: number;
  name: string;
  created_at: string;
};

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

async function getCategories() {
  const res = await fetch(
    "https://assign-api.piton.com.tr/api/rest/categories"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomeContainer() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col ">
      <Carousel slides={SLIDES} options={OPTIONS} />

      {categories.category.map((category: category, index: number) => (
        <Category name={category.name} id={category.id} key={index} />
      ))}
    </div>
  );
}
