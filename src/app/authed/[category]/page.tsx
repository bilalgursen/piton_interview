export default function page({ params }: { params: { category: string } }) {
  return (
    <>
      <div className="h-[50rem] flex justify-center items-center">
        <h1>
          <span className="text-xl font-medium capitalize text-[#EF6B4A]">
            {params.category}
          </span>{" "}
          Details
        </h1>
      </div>
    </>
  );
}
