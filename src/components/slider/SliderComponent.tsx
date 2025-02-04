"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import header from "@/assets/slider/header.webp";
import header1 from "@/assets/slider/header1.webp";
import header2 from "@/assets/slider/header2.webp";
import styles from "./slider.module.css";

const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [header, header1, header2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles["slider-container"]}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ""}`}
        >
          <Image
            src={image}
            alt={`Slide ${index}`}
            className={styles["slide-image"]}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default SliderComponent;
