import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // آیکن‌های React Icons
import styles from "./footer.module.css";

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.title}>درباره کلینیک دیابلند</h3>
          <p>
            در دیابلند، هدف ما ارائه خدمات جامع و تخصصی برای مدیریت و پیشگیری از
            دیابت است. ما با بهره‌گیری از تیمی متعهد و متخصص، محیطی امن و
            دوستانه برای مراجعین خود فراهم کرده‌ایم. دیابلند با ارائه خدماتی
            نظیر مشاوره پزشکی، پایش منظم قند خون، آموزش‌های لازم برای مدیریت
            دیابت و توصیه‌های تغذیه‌ای، به دنبال بهبود کیفیت زندگی شماست.{" "}
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>راهنمای مراجعین</h3>
          <ul>
            <li>پارکینگ و امکانات رفاهی</li>
            <li>حقوق بیمار</li>
            <li>ایمنی بیمار</li>
            <li>خدمات پشتیبانی درمانی</li>
            <li>اقامت در تهران</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>اطلاعات تماس</h3>
          <p>آدرس: سعادت آباد، بین چهارراه سرو ساختمان دیابلند پلاک ۲۲</p>
          <p>تلفن گویا: (+۹۸۲۱) ۲۲۲۲ </p>
          <p>ایمیل: diabland@diabland.ir</p>
        </div>
      </div>
      <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
      <div className={styles.footerBottom}>
        <p>تمام حقوق مادی و معنوی این سایت متعلق به دیابلند می باشد </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
