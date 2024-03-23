"use client";
import TitleAndPrevious from "@/components/ui/titleAndPrevious";

export default function page({
  params,
}: {
  params: { category: string; title: string };
}) {
  return (
    <div>
      <TitleAndPrevious category={params.category} title={params.title} />
    </div>
  );
}
