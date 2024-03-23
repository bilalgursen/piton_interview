"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import slugify from "slugify";

interface TitleAndPreviousProps {
  previous: string;
  title: string;
}

export default function TitleAndPrevious({
  previous,
  title,
}: TitleAndPreviousProps) {
  const router = useRouter();

  return (
    <div className="flex justify-start items-center">
      <div
        onClick={() => router.push(`/${previous}`)}
        className="flex items-center text-2xl cursor-pointer"
      >
        <IoIosArrowBack />
        <h1 className="font-medium capitalize">
          {slugify(title, {
            locale: "tr", // language code of the locale to use
            trim: true, // trim leading and trailing replacement chars, defaults to `true`
          })}{" "}
          Details
        </h1>
      </div>
    </div>
  );
}
