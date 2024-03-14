"use client";
import Cookies from "js-cookie";
export default function DeleteCookie() {
  const deleteCookie = () => {
    Cookies.remove("token");
    window.location.reload();
  };
  return (
    <>
      <div className="cursor-pointer" onClick={() => deleteCookie()}>
        Cookie Temizle
      </div>
    </>
  );
}
