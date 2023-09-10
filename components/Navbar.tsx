import Image from "next/image";
import React from "react";
import revel from "@/public/logo/REVEl.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <Link
      href={"/"}
      className="flex fixed bg-white w-full z-50 justify-start items-center shadow-md h-10 px-2"
    >
      <Image
        src={revel}
        height={31}
        width={126}
        alt="logo"
        className="object-cover w-auto"
      />
    </Link>
  );
};

export default Navbar;
