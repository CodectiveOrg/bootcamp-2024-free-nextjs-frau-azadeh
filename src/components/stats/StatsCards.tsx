"use client";

import React from "react";
import styles from "./StatsCards.module.css";
import { FaUserMd, FaHospital, FaFileAlt, FaAward } from "react-icons/fa";

interface StatCardProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  link: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  number,
  title,
  description,
  link,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.number}>{number}</h2>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href="#" className={styles.link}>
        {link}
      </a>
    </div>
  );
};

const StatsCards: React.FC = () => {
  return (
    <section className={styles.container}>
      <StatCard
        icon={<FaUserMd />}
        number={179}
        title="پزشکان متخصص"
        description="پزشک مجرب در تخصص‌های گوناگون، هم اکنون در بیمارستان فعال هستند."
        link="لیست کامل پزشکان »"
      />
      <StatCard
        icon={<FaHospital />}
        number={26}
        title="بخش‌های بیمارستان"
        description="بخش بستری و پاراکلینیک با به‌روزترین تجهیزات و امکانات."
        link="آشنایی با بخش‌ها »"
      />
      <StatCard
        icon={<FaFileAlt />}
        number={40}
        title="بیمه‌های طرف قرارداد"
        description="بیمه پایه و تکمیلی در بخش‌های بستری و سرپایی بیمارستان طرف قرارداد می‌باشند."
        link="بیمه‌های طرف قرارداد »"
      />
      <StatCard
        icon={<FaAward />}
        number={13}
        title="افتخارات و تقدیرنامه‌ها"
        description="گواهی و تقدیرنامه‌های مهم داخلی و بین‌المللی از افتخارات بیمارستان است."
        link="مشاهده افتخارات »"
      />
    </section>
  );
};

export default StatsCards;
