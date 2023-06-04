import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
const Header = () => {
  return (
    <nav className="w-full">
      <div className="mx-auto px-4 flex items-center py-4 justify-between pl-28 pr-28">
        <Link href={"/"}>
          <Image src="/image/logo.svg" alt="movie logo" width={40} height={40} />
        </Link>
        <NavigationLinks />
      </div>
    </nav>
  );
};

export default Header;

//test