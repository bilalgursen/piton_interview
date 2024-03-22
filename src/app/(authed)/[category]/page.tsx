import BestSellerContainer from "@/components/container/BestSeller";
import ChilderenContainer from "@/components/container/Childeren";
import ClassicsContainer from "@/components/container/Classics";

export default function page({ params }: { params: { category: string } }) {
  // Parametre olarak gelen kategoriye göre ilgili componenti çağırma
  const getCategoryComponent = (category: string) => {
    switch (category) {
      case "Best-Seller":
        return <BestSellerContainer />;
      case "Children":
        return <ChilderenContainer />;
      case "Classics":
        return <ClassicsContainer />;
      default:
        return (
          <h1 className="h-[40rem] flex justify-center items-center">
            Bu Kategori yeni eklenmiştir.
          </h1>
        );
    }
  };
  return <>{getCategoryComponent(params.category)}</>;
}
