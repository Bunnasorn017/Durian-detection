"use client";

import { usePathname } from "next/navigation";
import style from "./navLinks.module.css";
import Link from "next/link";

const NavLinks = ({ item }) => {

  const pathName = usePathname();

  return (
  <div>
    <Link href={item.path} className={`${style.container} ${
      pathName === item.path && style.active
    }`}>
      {item.title}
    </Link>
    </div>
  )
}

export default NavLinks