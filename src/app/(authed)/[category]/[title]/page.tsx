"use client";
import TitleAndPrevious from "@/components/ui/titleAndPrevious";

export default function page({
  params,
}: {
  params: { category: string; title: string };
}) {
  return (
    <section className="px-4 sm:px-12 w-full mt-12">
      <TitleAndPrevious previous={params.category} title="Book Details" />
    </section>
  );
}
