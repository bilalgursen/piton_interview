import slugify from "slugify";

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

export default convertSlugToId;
