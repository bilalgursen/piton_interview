"use client";
import Cookies from "js-cookie";
export default function LogOut() {
  const deleteCookie = () => {
    Cookies.remove("token");
    window.location.reload();
  };
  return (
    <>
      <button
        className="cursor-pointer btn-custom"
        onClick={() => deleteCookie()}
      >
        Çıkış Yap
      </button>
    </>
  );
}
