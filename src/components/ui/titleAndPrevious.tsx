"use client";
// titleAndPrevious.tsx
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface TitleAndPreviousProps {
  category: string;
}

export default function TitleAndPrevious({ category }: TitleAndPreviousProps) {
  const router = useRouter();

  return (
    <div className="flex justify-start items-center">
      <div
        onClick={() => router.back()}
        className="flex items-center text-2xl cursor-pointer"
      >
        <IoIosArrowBack />
        <h1 className="font-medium">{category}</h1>
      </div>
    </div>
  );
}
