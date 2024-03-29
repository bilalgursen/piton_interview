"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

interface TitleAndPreviousProps {
  previous: string;
  title: string;
}

export default function TitleAndPrevious({
  previous,
  title,
}: TitleAndPreviousProps) {
  const router = useRouter();
  const decodedTitle = decodeURIComponent(title.replace(/-/g, " "));

  return (
    <div className="flex justify-start items-center">
      <div
        onClick={() => router.push(`/${previous}`)}
        className="flex items-center text-2xl cursor-pointer active:scale-95 duration-150"
      >
        <IoIosArrowBack />
        <h1 className="font-medium capitalize">{decodedTitle}</h1>
      </div>
    </div>
  );
}
