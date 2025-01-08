"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const HeaderComponent: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      {/* عنوان سایت */}
      <h1 className={styles.title}>دیابلند</h1>

      {/* منو */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.navLink} ${
                pathname === "/about" ? styles.active : ""
              }`}
            >
              درباره ما
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${styles.navLink} ${
                pathname === "/contact" ? styles.active : ""
              }`}
            >
              تماس با ما
            </Link>
          </li>
          <li>
            <Link
              href="/schedule"
              className={`${styles.navLink} ${
                pathname === "/search" ? styles.active : ""
              }`}
            >
              تعیین وقت
            </Link>
          </li>
        </ul>
      </nav>

      {/* دکمه ورود */}
      <button className={styles.cta}>ورود</button>

      {/* آیکن همبرگری */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? (
          <span>×</span>
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
