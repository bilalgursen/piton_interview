import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <nav className="z-10 h-[120px] w-full flex justify-evenly gap-3 py-10 items-center px-4 sm:px-12 shadow-sm sticky top-0 bg-white">
      <div className="w-24 p-0 sm:pe-1 lg:pe-8 cursor-pointer">
        <Link href="/">
          <Image
            src={"/Logo.svg"}
            alt="Logo Bookstore"
            width={500}
            height={500}
          ></Image>
        </Link>
      </div>
      <div className="w-full mx-auto max-w-screen-md">
        <div className="flex w-full items-center input gap-1 !px-3">
          <LuSearch className="text-xl text-[#9696AF]" />
          <input
            type="search"
            className="w-full outline-none bg-transparent text-xl text-[#9696AF] font-extralight !px-1"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <button className="btn-custom">
          <FaRegUser />
        </button>
        <button className="btn-custom">
          <FaRegHeart />
        </button>
        <button className="btn-custom">
          <MdOutlineShoppingCart />
        </button>
      </div>
    </nav>
  );
};
export default Header;
