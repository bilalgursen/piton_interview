import DeleteCookie from "@/components/ui/logOut";
import Slider from "../../ui/carousel";
import BestSeller from "../../ui/bestSeller";

export default function HomeContainer() {
  return (
    <>
      <div className="h-screen flex flex-col ">
        <Slider />
        <BestSeller />
      </div>
      <div className="flex justify-end ">
        <DeleteCookie />
      </div>
    </>
  );
}
