import DeleteCookie from "@/components/deleteCookies";

export default function HomeContainer() {
  return (
    <>
      <div className="h-screen flex items-center justify-center"></div>
      <div className="flex justify-end ">
        <DeleteCookie />
      </div>
    </>
  );
}
