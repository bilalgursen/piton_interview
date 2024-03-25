import GetCoverImage from "@/utils/get-cover-image";

interface Product {
  name: string;
  author: string;
  description: string;
  price: number;
  slug: string;
  cover: string;
}

const fetchProduct = async (name: string, id: number) => {
  try {
    const response = await fetch(
      `https://assign-api.piton.com.tr/api/rest/products/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    const foundProduct = data.product.find(
      (product: Product) => product.slug === name
    );

    if (!foundProduct) {
      throw new Error("Product not found");
    }

    return foundProduct;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

export default async function BookDetailsContainer({
  name,
  id,
}: {
  name: string;
  id: number;
}) {
  const product: Product = await fetchProduct(name, id);

  return (
    <section className="px-4 sm:px-12 w-full mt-12">
      <div className="mt-12">
        <h2 className="text-3xl font-bold">{product?.name}</h2>
        <p className="text-gray-500">{product?.author}</p>
        <p className="text-lg font-bold mt-4">${product?.price}</p>
        <p className="mt-4">{product?.description}</p>
        <GetCoverImage filename={product?.cover} />
      </div>
    </section>
  );
}
