"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStore } from "react-icons/fa";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie
      .split(";")
      .find((cookie) => cookie.startsWith("token="))
      ?.split("=")[1];

    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsLoggedIn(false);
    router.push("/auth/login");
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <FaStore className="text-4xl text-white" />
        <span className="ml-2 text-2xl font-bold text-white">TechStore</span>
      </div>
      <div className="flex items-center gap-4 font-bold">
        <button
          className="bg-red-500/40 text-white px-4 py-2 rounded-md hover:bg-red-500/60 transition-all duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
