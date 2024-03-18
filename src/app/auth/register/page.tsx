"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { blurhashToBase64 } from "blurhash-base64";

const RegisterPage = () => {
  const [name, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // E-mail ve şifre doğrulaması
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage("Password must be 6-20 characters alphanumeric.");
      return;
    }

    setErrorMessage(""); // Hata mesajını temizle

    // Kullanıcı kayıt işlemi
    try {
      // Burada kayıt işlemleri gerçekleştirilir, örnek olarak:
      const userData = {
        name,
        // lastName, Şimdilik comment backend 400 dönüyor
        email,
        password,
      };
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (res.ok) {
        const data = await res.json();
        const token = data.action_register.token;
        console.error("Çalışıyorsam boş olabilirim", token);

        // Yönlendirme yapılabilir
        router.push("/"); // Örnek olarak dashboard sayfasına yönlendirildi
      } else {
        setErrorMessage("Something get wrong. Please try again.");
      }
      console.log("User data:", userData);

      // Kayıt işlemi başarılı olduğunda ana sayfaya yönlendirilir
      router.push("/");
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const validateEmail = (email: string) => {
    // Basit bir e-mail doğrulama işlevi
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    // Şifrenin 6-20 karakter arası ve alfanumerik olup olmadığını kontrol eden işlev
    const re = /^[a-zA-Z0-9]{6,20}$/;
    return re.test(password);
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 max-h-screen overflow-hidden">
        <div className="max-h-full lg:flex hidden">
          <Image
            src={"/cover.png"}
            className="object-cover h-full w-full"
            width={720}
            height={1000}
            placeholder="blur"
            blurDataURL={blurhashToBase64("L49F+$}U5SNawJ-9WCNb5RNHxZNH")}
            alt="Register Cover"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="h-screen flex justify-center items-center xl:px-0 px-8">
            <div className="gap-3 flex flex-col h-full justify-evenly w-full max-w-96 *:w-full">
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
                  <h1 className="text-xl text-slate-500">Create an Account</h1>
                  <p className="text-xl">Register to your account</p>
                </div>
                <div className="input-area">
                  <label htmlFor="name">First Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input"
                  />
                </div>
                <div className="input-area">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input"
                  />
                </div>
                <div className="input-area">
                  <label htmlFor="email">E-mail</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                  />
                </div>
                <div className="input-area">
                  <label htmlFor="password">Password</label>
                  <input
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                  />
                </div>
              </div>
              <div className="flex flex-col *:w-full gap-3">
                {errorMessage && (
                  <div className="text-red-500">{errorMessage}</div>
                )}
                <button
                  type="submit"
                  className="hover:bg-orange-600/50 bg-orange-600 rounded-md  py-3 text-white w-1/5"
                >
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/")}
                  className="hover:bg-[#F4F4FF] bg-transparent text-[#6251DD] border border-[#6251DD] rounded-md  py-3 w-1/5"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
