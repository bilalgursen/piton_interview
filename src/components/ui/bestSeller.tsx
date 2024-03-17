import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Book from "@/asset/BookCover/Picture.png";
import Book1 from "@/asset/BookCover/Picture (1).png";
import Book2 from "@/asset/BookCover/Picture (2).png";
import Book3 from "@/asset/BookCover/Picture (3).png";
interface Product {
  title: string;
  writer: string;
  price: number;
  imageUrl: StaticImageData;
}

const ProductItems: Product[] = [
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
];

export default function BestSeller() {
  return (
    <div className="flex flex-col w-full px-12 mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-medium">Best Seller</h2>
        <Link
          href="/authed/bestseller"
          className="text-xl font-medium text-[#EF6B4A]"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {ProductItems.slice(0, 4).map((product, index) => (
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
  );
}
