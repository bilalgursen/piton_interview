"use client";

import Image from "next/image";

const page = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(JSON.stringify(Object.fromEntries(formData)));
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await res.json();
      console.log(data.action_login.token);
    } catch {}
  };

  return (
    <>
      <div className="grid grid-cols-2 max-h-screen">
        <Image
          src={"/cover.png"}
          className="object-cover max-h-full w-full"
          width={720}
          height={1024}
          alt="Login Cover"
        />

        <form onSubmit={handleSubmit}>
          <div className="h-screen flex flex-col items-center gap-3 justify-center">
            <div className="flex flex-col gap-1">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" className="border" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="border" />
            </div>
            <div className="flex items-center justify-start ">
              <input type="checkbox" className="gap-3" />
              Remember me
            </div>
            <button
              type="submit"
              className="hover:bg-orange-600/50 bg-orange-600 px-2 py-1  text-white w-1/5"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
