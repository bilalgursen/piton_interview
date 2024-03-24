import CategoryDetailsContainer from "@/container/Details/category";
import convertSlugToId from "@/utils/convert-slug-to-id";

export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const id = await convertSlugToId(params.category);
  return <CategoryDetailsContainer name={params.category} id={id} />;
}
