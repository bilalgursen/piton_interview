import BookDetailsContainer from "@/components/container/Details/book";
import TitleAndPrevious from "@/components/ui/titleAndPrevious";
import convertSlugToId from "@/utils/convert-slug-to-id";

export default async function page({
  params,
}: {
  params: { category: string; title: string };
}) {
  const id = await convertSlugToId(params.category);
  return (
    <section className="px-4 sm:px-12 w-full mt-12">
      <TitleAndPrevious previous={params.category} title="Book Details" />
      <BookDetailsContainer name={params.title} id={id} />
    </section>
  );
}
