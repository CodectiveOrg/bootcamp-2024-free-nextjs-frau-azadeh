"use client";

import React from "react";
import Image from "next/image";
import styles from "./guideSteps.module.css";
import doctorImage from "@/assets/guide/doctor.webp";

const GuideSteps: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.guide}>راهنمای بخش اورژانس</div>
        <div className={styles.guide}>مسیرهای منتهی به بیمارستان</div>
        <div className={styles.guide}>راهنمای پذیرش</div>
        <div className={styles.guide}>راهنمای طبقات</div>
        <div className={styles.guide}>راهنمای ترخیص و دریافت مدارک</div>
      </div>
      <div className={styles.image}>
        <Image
          src={doctorImage}
          alt="راهنمای مراجعین"
          width={400}
          height={400}
          className={styles.img}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.guide}>راهنمای ملاقات</div>
        <div className={styles.guide}>برنامه کلینیک فوق تخصصی</div>
        <div className={styles.guide}>راهنمای صدور گواهی ولادت</div>
        <div className={styles.guide}>آزمایشگاه و پاتولوژی</div>
        <div className={styles.guide}>خدمات مراقبتی</div>
      </div>
    </div>
  );
};

export default GuideSteps;
