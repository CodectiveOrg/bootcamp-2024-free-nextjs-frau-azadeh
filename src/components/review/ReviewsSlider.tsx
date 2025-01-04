"use client";

import React, { useState } from "react";
import styles from "./ReviewsSlider.module.css";

interface Review {
  name: string;
  comment: string;
  image: string;
}

const ReviewsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: Review[] = [
    {
      name: "فاطمه احمدی",
      comment:
        "من از خدمات این کلینیک استفاده کردم و نتیجه فوق‌العاده‌ای گرفتم.",
      image: "/assets/person/old-woman.webp",
    },
    {
      name: "علی کریمی",
      comment:
        "تجربه‌ای فوق‌العاده با تیم حرفه‌ای. حتماً این کلینیک را به دیگران توصیه می‌کنم.",
      image: "/assets/person/old-man.webp",
    },
    {
      name: "مهتا حسینی",
      comment: "پرسنل بسیار مهربان و حرفه‌ای هستند. خدمات باکیفیت و عالی.",
      image: "/assets/person/girl.webp",
    },
    {
      name: "الهام رضایی",
      comment:
        "خدمات این کلینیک بی‌نظیر است. واقعاً از نتیجه کارشان راضی هستم.",
      image: "/assets/person/woman.webp",
    },
    {
      name: "سعید پارسا",
      comment:
        "تجربه من با کلینیک بسیار خوب بود. پرسنل فوق‌العاده حرفه‌ای و دوستانه بودند و خدماتشان در پوست بسیار با کیفیت بود.",
      image: "/assets/person/man.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className={styles.slider}>
      <h2 className={styles.title}>نظرات مراجعه کنندگان :</h2>
      <div className={styles.card}>
        <img
          src={reviews[currentIndex].image}
          alt={reviews[currentIndex].name}
          className={styles.image}
        />
        <h3 className={styles.name}>{reviews[currentIndex].name}</h3>
        <p className={styles.comment}>{reviews[currentIndex].comment}</p>
      </div>
      <div className={styles.controls}>
        <button onClick={prevSlide} className={styles.control}>
          &#8249;
        </button>
        <button onClick={nextSlide} className={styles.control}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ReviewsSlider;
