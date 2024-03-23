import CategoryDetailsContainer from "@/components/container/Details/category";
import slugify from "slugify";

export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const convertSlugToId = async (slug: string) => {
    try {
      const response = await fetch(
        "https://assign-api.piton.com.tr/api/rest/categories"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data = await response.json();
      const category = data.category.find(
        (category: any) =>
          slugify(category.name, { replacement: "-", lower: true }) === slug
      );
      return category?.id;
    } catch (error) {
      console.error("Error converting slug to id:", error);
      throw error;
    }
  };
  const id = await convertSlugToId(params.category);
  return <CategoryDetailsContainer name={params.category} id={id} />;
}
