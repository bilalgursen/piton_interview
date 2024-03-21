"use client";
import TitleAndPrevious from "@/components/ui/titleAndPrevious";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();

  const category: any = searchParams.get("category");
  return (
    <div>
      <TitleAndPrevious category={category} />
    </div>
  );
}
