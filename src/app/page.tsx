"use client";

import { ReactElement } from "react";
import dynamic from "next/dynamic";
import GlobalSearchBoxComponent from "@/components/global-search-box/GlobalSearchBoxComponent";
import MyDoctorLogo from "@/logo/my-doctor-logo";
import styles from "./page.module.css";
import FAQsAndReviews from "@/components/faq/FAQsAndReviews";
import ReviewsSlider from "@/components/review/ReviewsSlider";
import GuideSteps from "@/components/guide/GuideSteps";
import StatsCards from "@/components/stats/StatsCards";

const HeroSection = dynamic(() => import("@/components/signin/HeroSection"), {
  ssr: false,
});

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <HeroSection />
      <br />
      <h1>
        <MyDoctorLogo />
        دیابلند
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}></div>
      <br />
      <GuideSteps />
      <br />
      <StatsCards />
      <br />
      <div className={styles.container}>
        <FAQsAndReviews />
        <ReviewsSlider />
        <br />
      </div>
    </div>
  );
}
