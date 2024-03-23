import CategoryDetailsContainer from "@/components/container/Details/category";

export default function page({ params }: { params: { category: string } }) {
  // Parametre olarak gelen kategoriye göre ilgili componenti çağırma
  const getCategoryComponent = (category: string) => {
    return <CategoryDetailsContainer name={category} />;
  };
  return <>{getCategoryComponent(params.category)}</>;
}
