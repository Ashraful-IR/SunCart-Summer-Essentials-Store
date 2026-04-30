"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, className = "", ...props }) => {
  const link = usePathname();

  const isActive = link === href;
  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "border-b-2 border-amber-500" : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
