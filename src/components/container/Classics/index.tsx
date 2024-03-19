import TitleAndPrevious from "@/components/ui/titleAndPrevious";

import Book4 from "@/asset/BookCover/Book-Cover-5.png";
import Book5 from "@/asset/BookCover/Book-Cover-6.png";
import Book6 from "@/asset/BookCover/Book-Cover-7.png";
import Book7 from "@/asset/BookCover/Book-Cover-8.png";

import Image, { StaticImageData } from "next/image";

interface Product {
  title: string;
  writer: string;
  price: number;
  imageUrl: StaticImageData;
}

// Apiden elde edemediğim için kendi datasetimi figmadaki örneğe göre oluşturdum
const categories: { [key: string]: Product[] } = {
  Classics: [
    {
      title: "Romeo ve Juliet",
      writer: "William Shakespeare",
      price: 87.75,
      imageUrl: Book4,
    },
    {
      title: "Genç Werther’in Acıları",
      writer: "Goethe",
      price: 35.75,
      imageUrl: Book5,
    },
    {
      title: "Zaman Makinesi",
      writer: "H.G. Wells",
      price: 36.0,
      imageUrl: Book6,
    },
    {
      title: "Olağanüstü Bir Gece",
      writer: "Stefan Zweig",
      price: 36.0,
      imageUrl: Book7,
    },
    {
      title: "Romeo ve Juliet",
      writer: "William Shakespeare",
      price: 87.75,
      imageUrl: Book4,
    },
    {
      title: "Genç Werther’in Acıları",
      writer: "Goethe",
      price: 35.75,
      imageUrl: Book5,
    },
    {
      title: "Zaman Makinesi",
      writer: "H.G. Wells",
      price: 36.0,
      imageUrl: Book6,
    },
    {
      title: "Olağanüstü Bir Gece",
      writer: "Stefan Zweig",
      price: 36.0,
      imageUrl: Book7,
    },
    {
      title: "Romeo ve Juliet",
      writer: "William Shakespeare",
      price: 87.75,
      imageUrl: Book4,
    },
    {
      title: "Genç Werther’in Acıları",
      writer: "Goethe",
      price: 35.75,
      imageUrl: Book5,
    },
    {
      title: "Zaman Makinesi",
      writer: "H.G. Wells",
      price: 36.0,
      imageUrl: Book6,
    },
    {
      title: "Olağanüstü Bir Gece",
      writer: "Stefan Zweig",
      price: 36.0,
      imageUrl: Book7,
    },
  ],
};

export default function BestSellerContainer() {
  return (
    <section className="px-4 sm:px-12 w-full mt-12">
      <TitleAndPrevious category="Classics" />
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
