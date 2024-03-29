import TitleAndPrevious from "@/components/ui/titleAndPrevious";
import GetCoverImage from "@/utils/get-cover-image";
import Link from "next/link";
import slugify from "slugify";

interface Product {
  name: string;
  author: string;
  price: number;
  slug: string;
  cover: string;
}
const fetchProducts = async (id: number) => {
  try {
    const response = await fetch(
      `https://assign-api.piton.com.tr/api/rest/products/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data.product;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
export default async function CategoryDetailsContainer({
  name,
  id,
}: {
  name: string;
  id: number;
}) {
  const products: Product[] = await fetchProducts(id);

  return (
    <section className="px-4 sm:px-12 w-full mt-12">
      <TitleAndPrevious previous={"/"} title={name} />
      <div className="mt-12">
        <div className="grid h-full xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
          {products.map((product, index) => (
            <Link
              key={index}
              // İlk başta backend den gelen name'e uymak için slugify kullanıldı.
              href={`/${name}/${slugify(product?.slug, "-")}`}
              className="category-detail-card"
            >
              {" "}
              <div className="w-full pt-2">
                <GetCoverImage filename={product?.cover} />
              </div>
              <div className="flex w-full h-full justify-between items-end gap-3">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-xl font-medium capitalize">
                    {product?.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product?.author}</p>
                </div>
                <p className="flex h-full text-items-end text-xl font-semibold  text-[#6251DD]">
                  {product?.price}$
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
