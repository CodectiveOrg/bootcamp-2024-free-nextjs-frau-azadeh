"use client";

import React, { useState, useEffect } from "react";
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
  const [userRating, setUserRating] = useState<number | null>(null);

  useEffect(() => {
    const storedRating = localStorage.getItem(`doctor-rating-${id}`);
    if (storedRating) {
      setUserRating(parseInt(storedRating, 10));
    }
  }, [id]);

  const handleRating = (newRating: number) => {
    setUserRating(newRating);
    localStorage.setItem(`doctor-rating-${id}`, newRating.toString());
  };

  const finalRating = userRating || defaultRating;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.detail}>تخصص: {specialty}</p>
        <p className={styles.detail}>جنسیت: {gender}</p>
        <p className={styles.detail}>درجه: {degree}</p>
        <p className={styles.detail}>زمان کار: {workTime}</p>
      </div>
      <div className={styles.action}>
        <p className={styles.rating}>امتیاز: {finalRating} از ۵</p>
        <div className={styles.ratingInput}>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className={`${styles.ratingStar} ${
                star <= finalRating ? styles.active : ""
              }`}
            >
              ★
            </button>
          ))}
        </div>
        <Link href={`/doctor/${id}`} className={styles.button}>
          نوبت دهی آنلاین
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;