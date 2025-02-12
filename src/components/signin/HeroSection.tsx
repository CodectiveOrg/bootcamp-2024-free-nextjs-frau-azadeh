"use client";

import React from "react";
import styles from "./signup.module.css";
import SignupForm from "@/components/signin/SignupForm";
import Image from "next/image";
import header1 from "@/assets/slider/header1.webp"; 
export default function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <SignupForm />
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.imageContainer}>
          <Image src={header1} alt="Hero Image" fill priority />
        </div>
      </div>
    </div>
  );
}
