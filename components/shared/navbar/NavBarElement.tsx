import { SidebarLink } from "@/types";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const NavBarElement = ({
  link,
  isActive = false,
}: {
  link: SidebarLink;
  isActive?: boolean;
}) => {
  return (
    <div>
      <Link
        href={link.route}
        className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
      >
        <Image
          src={link.imgURL}
          alt={link.label}
          width={20}
          height={20}
          className={`${isActive ? "" : "invert-colors"}`}
        />
        <p
          className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
        >
          {link.label}
        </p>
      </Link>
    </div>
  );
};

export default NavBarElement;
