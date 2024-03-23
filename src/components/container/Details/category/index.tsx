import TitleAndPrevious from "@/components/ui/titleAndPrevious";

import Book from "@/asset/BookCover/Book-Cover-1.png";
import Book1 from "@/asset/BookCover/Book-Cover-2.png";
import Book2 from "@/asset/BookCover/Book-Cover-3.png";
import Book3 from "@/asset/BookCover/Book-Cover-4.png";

import Image, { StaticImageData } from "next/image";

interface Product {
  title: string;
  writer: string;
  price: number;
  imageUrl: StaticImageData;
}

// Apiden elde edemediğim için kendi datasetimi figmadaki örneğe göre oluşturdum
const categories: { [key: string]: Product[] } = {
  BestSeller: [
    {
      title: "Dune",
      writer: "Frank Herbert",
      price: 87.75,
      imageUrl: Book,
    },
    {
      title: "1984",
      writer: "George Orwell",
      price: 35.75,
      imageUrl: Book1,
    },
    {
      title: "Ikigai",
      writer: "Hector Garcia",
      price: 36.0,
      imageUrl: Book2,
    },
    {
      title: "Metafizik",
      writer: "Aristoteles",
      price: 36.0,
      imageUrl: Book3,
    },
    {
      title: "Dune",
      writer: "Frank Herbert",
      price: 87.75,
      imageUrl: Book,
    },
    {
      title: "1984",
      writer: "George Orwell",
      price: 35.75,
      imageUrl: Book1,
    },
    {
      title: "Ikigai",
      writer: "Hector Garcia",
      price: 36.0,
      imageUrl: Book2,
    },
    {
      title: "Metafizik",
      writer: "Aristoteles",
      price: 36.0,
      imageUrl: Book3,
    },
    {
      title: "Dune",
      writer: "Frank Herbert",
      price: 87.75,
      imageUrl: Book,
    },
    {
      title: "1984",
      writer: "George Orwell",
      price: 35.75,
      imageUrl: Book1,
    },
    {
      title: "Ikigai",
      writer: "Hector Garcia",
      price: 36.0,
      imageUrl: Book2,
    },
    {
      title: "Metafizik",
      writer: "Aristoteles",
      price: 36.0,
      imageUrl: Book3,
    },
  ],
};

export default function CategoryDetailsContainer({
  name,
  id,
}: {
  name: string;
  id: number;
}) {
  //Burada id ile apiye istek at
  return (
    <section className="px-4 sm:px-12 w-full mt-12">
      <TitleAndPrevious previous={"/"} title={name} />
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
                  width={1000}
                  height={1000}
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
