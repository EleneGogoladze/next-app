import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";


function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "The memes",
      url: "/portfolio",
    },
       {
      id: 3,
      title: "Why I made this site",
      url: "/WhyImadeThisSite",
    },
    
  ];

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        ელენე გოგოლაძე
      </Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link) => (
          <Link href={link.url}>{link.title}</Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;