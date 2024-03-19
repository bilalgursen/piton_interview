import TitleAndPrevious from "@/components/ui/titleAndPrevious";

import Book8 from "@/asset/BookCover/Book-Cover-9.png";
import Book9 from "@/asset/BookCover/Book-Cover-10.png";
import Book10 from "@/asset/BookCover/Book-Cover-11.png";
import Book11 from "@/asset/BookCover/Book-Cover-12.png";
import Image, { StaticImageData } from "next/image";

interface Product {
  title: string;
  writer: string;
  price: number;
  imageUrl: StaticImageData;
}

// Apiden elde edemediğim için kendi datasetimi figmadaki örneğe göre oluşturdum
const categories: { [key: string]: Product[] } = {
  Children: [
    {
      title: "Mor Bir Fil Gördüm Sanki",
      writer: "XXX",
      price: 45.0,
      imageUrl: Book8,
    },
    {
      title: "Alev Saçlı Çocuk",
      writer: "XXX",
      price: 38.5,
      imageUrl: Book9,
    },
    {
      title: "Melodi",
      writer: "XXX",
      price: 40.0,
      imageUrl: Book10,
    },
    {
      title: "Siber Kahramanlar",
      writer: "XXX",
      price: 42.0,
      imageUrl: Book11,
    },
    {
      title: "Mor Bir Fil Gördüm Sanki",
      writer: "XXX",
      price: 45.0,
      imageUrl: Book8,
    },
    {
      title: "Alev Saçlı Çocuk",
      writer: "XXX",
      price: 38.5,
      imageUrl: Book9,
    },
    {
      title: "Melodi",
      writer: "XXX",
      price: 40.0,
      imageUrl: Book10,
    },
    {
      title: "Siber Kahramanlar",
      writer: "XXX",
      price: 42.0,
      imageUrl: Book11,
    },
    {
      title: "Mor Bir Fil Gördüm Sanki",
      writer: "XXX",
      price: 45.0,
      imageUrl: Book8,
    },
    {
      title: "Alev Saçlı Çocuk",
      writer: "XXX",
      price: 38.5,
      imageUrl: Book9,
    },
    {
      title: "Melodi",
      writer: "XXX",
      price: 40.0,
      imageUrl: Book10,
    },
    {
      title: "Siber Kahramanlar",
      writer: "XXX",
      price: 42.0,
      imageUrl: Book11,
    },
  ],
};

export default function BestSellerContainer() {
  return (
    <section className="px-4 sm:px-12 w-full mt-12">
      <TitleAndPrevious category="Children" />
      {Object.entries(categories).map(([category, products]) => (
        <div key={category} className="mt-12">
          <div className="grid grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#F4F4FF] border border-[#DCDCEB] rounded-md p-1"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="flex w-full p-2 py-5 justify-between items-end gap-3">
                  <div>
                    <h3 className="text-xl font-medium">{product.title}</h3>
                    <p className="text-sm text-gray-500">{product.writer}</p>
                  </div>
                  <p className="text-2xl font-semibold text-[#6251DD]">
                    {product.price} $
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
