'use client';

import React from 'react';
import styles from './doctorCard.module.css';

interface DoctorCardProps {
  name: string;
  gender: string;
  specialty: string;
  degree: string;
  workTime: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  gender,
  specialty,
  degree,
  workTime,
  image,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.detail}>تخصص: {specialty}</p>
        <p className={styles.detail}>جنسیت: {gender}</p>
        <p className={styles.detail}>درجه: {degree}</p>
        <p className={styles.detail}>زمان کار: {workTime}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
