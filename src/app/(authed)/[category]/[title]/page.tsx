"use client";
import TitleAndPrevious from "@/components/ui/titleAndPrevious";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();

  const category: any = searchParams.get("category");
  return (
    <div>
      <TitleAndPrevious category={category} />
    </div>
  );
}

// Bu alana gelene kadar apisiz bir kurgu ile yazdım . Ancak yeni açmış olduğum v2 branch ile apilli  kurgu yapılıp eksik yerlerde bitmiş olucaktır. (Malesef apiler çalışmıyordu onun için bu şekilde bir yol izlemek durumda kaldım)
