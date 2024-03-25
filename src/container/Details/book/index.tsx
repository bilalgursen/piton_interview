import GetCoverImage from "@/utils/get-cover-image";
import { FaRegHeart } from "react-icons/fa";

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
    // Neden yazdığım css işlemiyo çözemedim grid işlemiyor
    <section className="px-4 sm:px-12 w-full mt-12">
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center bg-[#F4F4FF] border border-[#DCDCEB] rounded-md p-1 w-full">
              <GetCoverImage filename={product?.cover} />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="flex w-full justify-between items-end pb-4">
              <h2 className="text-3xl font-bold capitalize">{product?.name}</h2>
              <button className="bg-[#F4F4FF] p-4 rounded-full active:scale-95 text-xl hover:text-white hover:bg-[#6251DD] text-[#6251DD] duration-75 transition-all cursor-pointer">
                <FaRegHeart />
              </button>
            </div>
            <p className="text-gray-500 text-2xl pb-5">{product?.author}</p>
            <h3 className="font-medium text-xl capitalize">Summary</h3>
            <p className="font-light text-[#090937]/60">
              {product?.description}
            </p>
            <p className="text-lg font-bold mt-4">${product?.price}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
