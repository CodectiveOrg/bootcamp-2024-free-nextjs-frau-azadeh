"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import MyDoctorLogo from "@/logo/my-doctor-logo";

const HeaderComponent: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // وقتی اسکرول بیشتر از 50px شد، تغییر رنگ بدهد
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <h1 className={styles.title}>
        <MyDoctorLogo />
        دیابلند
      </h1>
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
              href="/search"
              className={`${styles.navLink} ${
                pathname === "/search" ? styles.active : ""
              }`}
            >
              تعیین وقت
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles.cta}>ورود</button>

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
