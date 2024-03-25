import LogOut from "@/components/ui/logOut";

const Footer = () => {
  return (
    <footer className="h-[120px] w-full flex gap-5 items-center justify-center">
      All rights reserved. &copy; 2024 by Piton
      <div className="flex sm:flex-row flex-col justify-end ">
        <LogOut />
      </div>
    </footer>
  );
};

export default Footer;
