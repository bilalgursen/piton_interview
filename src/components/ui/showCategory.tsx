import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Book from "@/asset/BookCover/Book-Cover-1.png";
import Book1 from "@/asset/BookCover/Book-Cover-2.png";
import Book2 from "@/asset/BookCover/Book-Cover-3.png";
import Book3 from "@/asset/BookCover/Book-Cover-4.png";
import Book4 from "@/asset/BookCover/Book-Cover-5.png";
import Book5 from "@/asset/BookCover/Book-Cover-6.png";
import Book6 from "@/asset/BookCover/Book-Cover-7.png";
import Book7 from "@/asset/BookCover/Book-Cover-8.png";
import Book8 from "@/asset/BookCover/Book-Cover-9.png";
import Book9 from "@/asset/BookCover/Book-Cover-10.png";
import Book10 from "@/asset/BookCover/Book-Cover-11.png";
import Book11 from "@/asset/BookCover/Book-Cover-12.png";

interface Product {
  title: string;
  writer: string;
  price: number;
  imageUrl: StaticImageData;
}

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
  ],
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
  ],
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
  ],
};

const ShowCategory = () => {
  return (
    <div className="flex flex-col w-full px-12 mt-12">
      {Object.entries(categories).map(([category, products]) => (
        <div key={category} className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-medium">
              {category.replace(/([A-Z])/g, " $1").trim()}
            </h2>
            <Link
              className="text-xl font-medium text-[#EF6B4A]"
              href={`/authed/${category.toLowerCase()}`}
              passHref
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, index) => (
              <div
                key={index}
                className="flex items-center bg-[#F4F4FF] border border-[#DCDCEB] rounded-md p-1"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-32 h-48 object-cover"
                />
                <div className="flex flex-col h-full p-4 justify-between gap-3">
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
    </div>
  );
};

export default ShowCategory;
