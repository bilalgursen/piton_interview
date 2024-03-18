import BestSellerContainer from "@/components/container/BestSeller";
import ChilderenContainer from "@/components/container/Childeren";
import ClassicsContainer from "@/components/container/Classics";

export default function page({ params }: { params: { category: string } }) {
  // Parametre olarak gelen kategoriye göre ilgili componenti çağırma
  const getCategoryComponent = (category: string) => {
    switch (category) {
      case "bestseller":
        return <BestSellerContainer />;
      case "children":
        return <ChilderenContainer />;
      case "classics":
        return <ClassicsContainer />;
      default:
        return null;
    }
  };
  return <>{getCategoryComponent(params.category)}</>;
}
