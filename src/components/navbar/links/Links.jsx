"use client";

import Link from "next/link";
import style from "./links.module.css";
import NavLinks from "./navLink/navLinks";
import { useState } from "react";
import Image from "next/image";

  const links = [
    {
      title: "หน้าหลัก",
      path: "/",
    },
    {
      title: "เกี่ยวกับทุเรียน",
      path: "/about",
    },
    {
      title: "สแกนโรค",
      path: "/scan",
    },
    {
      title: "ประเภทของโรค",
      path: "/diseases-durian",
    },
  ];

  const Links = () => {

    const [open,setOpen] = useState(false);

  return (

  <div className={style.container}>

    <div className={style.links_navbar}>
      {links.map((link=>(
        <NavLinks item={link} key={link.title} />
      )))}
    </div>
    <Image
    className={style.menuButton}
      src='/menu.png'
      alt=""
      width={30}
      height={30} 
      onClick={() => setOpen((prev) => !prev)}
    />
    {open && (
      <div className={style.mobileLinksMenu}>
      {links.map((link) => (
        <NavLinks item={link} key={link.title} />
      ))}
    </div>
    )}
  </div>
  );
};

export default Links