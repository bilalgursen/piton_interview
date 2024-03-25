import BookDetailsContainer from "@/container/Details/book";
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

// Bu alana gelene kadar apisiz bir kurgu ile yazdım . Ancak yeni açmış olduğum v2 branch ile apilli  kurgu yapılıp eksik yerlerde bitmiş olucaktır. (Malesef apiler çalışmıyordu onun için bu şekilde bir yol izlemek durumda kaldım)
