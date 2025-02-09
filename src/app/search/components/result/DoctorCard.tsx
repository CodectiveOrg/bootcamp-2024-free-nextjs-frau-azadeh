"use client";

import React, { useState } from "react";
import styles from "./doctorCard.module.css";
import Link from "next/link";

interface DoctorCardProps {
  id: number;
  name: string;
  gender: string;
  specialty: string;
  degree: string;
  workTime: string;
  image: string;
  defaultRating: number;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  id,
  name,
  gender,
  specialty,
  degree,
  workTime,
  image,
  defaultRating,
}) => {
  const [finalRating, setFinalRating] = useState<number>(defaultRating);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.centerSection}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <p className={styles.featureTitle}>تخصص</p>
            <p className={styles.featureValue}>{specialty}</p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureTitle}>جنسیت</p>
            <p className={styles.featureValue}>{gender}</p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureTitle}>درجه</p>
            <p className={styles.featureValue}>{degree}</p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureTitle}>زمان کار</p>
            <p className={styles.featureValue}>{workTime}</p>
          </div>
        </div>
      </div>
      <div className={styles.leftSection}>
        <p className={styles.rating}>امتیاز: {finalRating} از ۵</p>
        <div className={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className={`${styles.star} ${index <= (hover ?? finalRating) ? styles.active : ""}`}
              onClick={() => setFinalRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            >
              ★
            </span>
          ))}
        </div>
        <Link href={`/doctor/${id}`}>
          <div className={styles.button}>نوبت دهی آنلاین</div>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
