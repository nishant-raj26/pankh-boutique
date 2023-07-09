import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-50 shadow">
      <Link href="/">
        <Image
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
      <div className=" flex items-center space-x-2.5 text-sm">
        <Button className="bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black border px-5 md:px-10 py-2.5 rounded font-semibold transition duration-200 ease-out ">
          Login
        </Button>
        <Button className="bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black border px-5 md:px-10 py-2.5 rounded font-semibold transition duration-200 ease-out ">
          SignUp
        </Button>
      </div>
    </header>
  );
};

export default Header;
