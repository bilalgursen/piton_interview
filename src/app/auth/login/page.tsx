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
      <div className="grid grid-cols-2 max-h-screen overflow-hidden">
        <div className="max-h-full">
          <Image
            src={"/cover.png"}
            className="object-cover h-full"
            width={720}
            height={1000}
            alt="Login Cover"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="h-screen flex justify-center items-center">
            <div className="gap-3 flex flex-col h-full justify-evenly w-[497px] *:w-full">
              <div className="w-full flex flex-col items-center justify-around">
                <Image
                  src={"/Logo.svg"}
                  className="w-24"
                  width={500}
                  height={500}
                  alt="Logo"
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="input-area">
                  <h1 className="text-xl text-slate-500">Welcome Back</h1>
                  <p className="text-xl">Login to your account</p>
                </div>
                <div className="input-area">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" name="email" className="input" />
                </div>
                <div className="input-area">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" className="input" />
                </div>
                <div className="flex gap-3 items-center justify-start text-[#6251DD] cursor-pointer ">
                  <input type="checkbox" className="border-[#6251DD]" />
                  Remember me
                </div>
              </div>
              <button
                type="submit"
                className="hover:bg-orange-600/50 bg-orange-600 rounded-md  py-3 my-4  text-white w-1/5"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
