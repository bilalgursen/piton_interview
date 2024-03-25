import GetCoverImage from "@/utils/get-cover-image";
import Link from "next/link";
import slugify from "slugify";

async function getProductsById(id: number) {
  const res = await fetch(
    `https://assign-api.piton.com.tr/api/rest/products/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Category({ name = "Başlık Yok", id = 1 }) {
  const products = await getProductsById(id);
  const categoryURL = slugify(name, {
    lower: true,
    replacement: "-",
  });

  return (
    <div className="flex flex-col w-full px-12 mt-12">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-medium">{name}</h2>
          <Link
            className="text-xl font-medium text-[#EF6B4A]"
            href={categoryURL}
          >
            View All
          </Link>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6">
          {products.product.slice(0, 4).map((product: any, index: number) => (
            <Link
              key={index}
              // İlk başta backend den gelen name'e uymak için slugify kullanıldı.
              href={`/${categoryURL}/${slugify(product.slug, "-")}`}
              className="flex flex-col sm:flex-row items-center bg-[#F4F4FF] border border-[#DCDCEB] rounded-md p-1 w-full  cursor-pointer"
            >
              <div className="w-full h-full py-1">
                <GetCoverImage filename={product.cover} />
              </div>
              <div className="flex flex-col h-full w-full p-4 justify-between gap-3">
                <div>
                  <h3 className="text-xl font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.author}</p>
                </div>
                <p className="text-2xl font-semibold text-[#6251DD]">
                  {product.price} $
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
