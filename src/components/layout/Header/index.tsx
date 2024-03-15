import Image from "next/image";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <nav className="h-[120px] w-full flex justify-evenly py-10 items-center px-8">
      <div className="w-24 p-4">
        <Image
          src={"/Logo.svg"}
          alt="Logo Bookstore"
          width={500}
          height={500}
        ></Image>
      </div>
      <div className="w-full mx-auto max-w-screen-md">
        <div className="flex w-full items-center input gap-1 !px-3">
          <LuSearch className="text-xl" />
          <input
            type="search"
            className="w-full bg-transparent text-xl !px-1"
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
