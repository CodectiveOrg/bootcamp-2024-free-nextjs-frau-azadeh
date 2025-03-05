"use client";

import React from "react";
import styles from "./signup.module.css";
import Image from "next/image";
import header1 from "@/assets/slider/header1.webp";
export default function HeroSection() {
  return (
    <div className={styles.boxContainer}>
       <div className={styles.imageContainer} >
    <Image src={header1} alt="Hero Image" fill priority />
  </div>
    </div>
   
  

  );
}
