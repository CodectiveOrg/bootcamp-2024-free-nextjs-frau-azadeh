import { ReactElement } from "react";
import GlobalSearchBoxComponent from "@/components/global-search-box/GlobalSearchBoxComponent";
import MyDoctorLogo from "@/logo/my-doctor-logo";
import styles from "./page.module.css";
import SliderComponent from "@/components/slider/SliderComponent";
import FAQsAndReviews from "@/components/faq/FAQsAndReviews";
import ReviewsSlider from "@/components/review/ReviewsSlider";
import GuideSteps from "@/components/guide/GuideSteps";
import { Stats } from "fs";
import StatsCards from "@/components/stats/StatsCards";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <SliderComponent/>
      <br></br>
      <h1>
        <MyDoctorLogo />
        دکتر من
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
      </div>
      <br></br>
      <GuideSteps/>
      <br></br>
      <StatsCards/>
      <br></br>
      <div className={styles.container}>
        <FAQsAndReviews />
        <ReviewsSlider />
        <br></br>
      </div>
    </div>
  );
}
