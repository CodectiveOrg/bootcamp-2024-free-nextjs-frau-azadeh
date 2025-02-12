"use client";
import React from "react";
import styles from "./doctorCard.module.css";
import Link from "next/link";
import { Rating } from "./Rating";
import Image from "next/image"; 

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

export const DoctorCard: React.FC<DoctorCardProps> = ({
  id,
  name,
  gender,
  specialty,
  degree,
  workTime,
  image,
  defaultRating,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={name} 
          className={styles.image} 
          width={150} 
          height={150} 
          priority 
        />
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
        <Rating
          defaultRating={defaultRating}
          onRate={(rating: number) => console.log(`Rated: ${rating}`)}
        />
        <Link href={`/doctor/${id}`}>
          <div className={styles.button}>نوبت دهی آنلاین</div>
        </Link>
      </div>
    </div>
  );
};
